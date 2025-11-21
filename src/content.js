// src/content.js

import { ZHSClient } from 'zhs-client-js';
import { injectCourseCardStyles } from './styles.js';
import { injectExtensionBanner } from './banner.js';
// or whatever the module's default/named export is;
// if it's CommonJS you might need:
// import * as ZhsClient from 'zhs-client-js';
console.log('ZHS Booking content script loaded');
console.log(document.cookie);

injectExtensionBanner()

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
await sleep(1000)
injectCourseCardStyles()
const client = ZHSClient.fromCookieString(document.cookie)

const parentIds = Object.entries(client.courses).map(([key, val]) => ({[val.parentId]: key})).reduce((a,b) => ({...a, ...b}), {})


const parentHit = Object.keys(parentIds).find(a => window.location.href.includes(a))

let globalOffset = 0

if(parentHit){
    const availableCourses = coursesByParentId(parentHit)
    console.log("Kurse gefunden", availableCourses)


    
    renderNextWeekButton(() => iterateCourses(availableCourses))
    await iterateCourses(availableCourses)

}

function calculateGlobalOffset(){
    return Math.max(Math.floor((document.getElementsByClassName("myExt-course-card").length / 3) ), 0)
}

async function iterateCourses(availableCourses) {
    const offset = calculateGlobalOffset()
    console.log(offset)
    if(!availableCourses) {
        console.warn(availableCourses, "not iterable")
        return
    }
    for(const course of availableCourses){
        await validateCourse(course, offset)
        
    }
}


async function validateCourse(course, offset = 0){
        const nextCourse = client.courses[course].nextCourseStart(offset)
        const res = await client.getCourseSlotDetails(course, offset)
        const slotAvailable = res.data.booking_slots.length > 0
        
        
        renderCourseCard({
            course,
            nextCourse,
            res,
            slotAvailable,
            onClick: () => {
                client.book(course, offset)
            }
        })
}


function coursesByParentId(parentId){
    let courses = []
    for(const [key, val] of Object.entries(client.courses)){
        if(val.parentId == parentId)
            courses.push(key)
    }
    return courses
}

function renderNextWeekButton(onClick) {
    //injectCourseCardStyles();
    globalOffset++
    document.getElementById("render-next-week-btn-id")?.remove()
    // Wrapper that matches card width (420px)
    const wrapper = document.createElement("div");
    wrapper.className = "myExt-week-btn-wrapper";
    wrapper.id = "render-next-week-btn-id"
  
    const btn = document.createElement("button");
    btn.className = "myExt-week-btn";
    btn.textContent = "Nächste Woche laden";
  
    btn.addEventListener("click", () => {
      if (typeof onClick === "function") onClick();
    });
  
    wrapper.appendChild(btn);
    // document.body.appendChild(wrapper);
    appendUnderProductInfo(wrapper)
  }

function renderCourseCard({ course, nextCourse, res, slotAvailable, onClick }) {
  
    const container = document.createElement("div");
    container.className = "myExt-course-card";
  
    // HEADER
    const header = document.createElement("div");
    header.className = "myExt-course-header";
  
    const titleWrapper = document.createElement("div");
  
    const title = document.createElement("div");
    title.className = "myExt-course-title";
    title.textContent = course;
  
    const sub = document.createElement("div");
    sub.className = "myExt-course-sub";
    const date = new Date(nextCourse)
    sub.textContent = nextCourse ? `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` : "–";
  
    titleWrapper.appendChild(title);
    titleWrapper.appendChild(sub);
  
    const slotsBadge = document.createElement("div");
    const slots = slotAvailable ? res.data.booking_slots[0].availability : 0;
    slotsBadge.className = "myExt-course-slots";
  
    if (!slotAvailable || slots === 0) {
      slotsBadge.classList.add("myExt-course-slots--none");
      slotsBadge.textContent = "Keine Slots verfügbar";
      
    } else if (slots <= 3) {
      slotsBadge.classList.add("myExt-course-slots--low");
      slotsBadge.textContent = `${slots} Slots – fast voll`;
    } else {
      slotsBadge.textContent = `${slots} Slots verfügbar`;
    }

    
  
    header.appendChild(titleWrapper);
    header.appendChild(slotsBadge);
  
    // FOOTER
    const footer = document.createElement("div");
    footer.className = "myExt-course-footer";
  
    if (slotAvailable && slots > 0) {
      const btn = document.createElement("button");
      btn.className = "myExt-course-button";
      btn.innerHTML = `<span class="myExt-course-button-icon">🛒</span><span>In Warenkorb legen</span>`;
  
      // attach your click handler here
      btn.addEventListener("click", () => {
        // TODO: add booking logic
        console.log("In Warenkorb legen", course);
        if(slotAvailable && onClick) onClick()
      });
  
      footer.appendChild(btn);
    } else {
      const notAvail = document.createElement("div");
      
      notAvail.className = "myExt-course-not-available";
      notAvail.textContent = "Nicht buchbar";

      if(res.data.booking_slots[0].already_booked) {
        notAvail.textContent = "Bereits gebucht"
      } else if(res.data.booking_slots[0].already_in_cart){
        notAvail.textContent = "Bereits im Warenkorb"
      }

      footer.appendChild(notAvail);
    }
  
    container.appendChild(header);
    container.appendChild(footer);
  
    // Append somewhere sensible – adjust as needed
    // document.body.appendChild(container);
    appendUnderProductInfo(container)
  }

  function appendUnderProductInfo(el) {
    // Find the target block
    const target =
      document.querySelector('[data-testid="product-offer-info"].flex.flex-col.gap-y-4') ||
      document.querySelector('[data-testid="product-offer-info"]');
  
    // If found → insert after
    if (target && target.parentNode) {
      if (target.nextSibling) {
        target.parentNode.insertBefore(el, target.nextSibling);
      } else {
        target.parentNode.appendChild(el);
      }
    } else {
      // Fallback → top of body
      document.body.prepend(el);
    }
  }