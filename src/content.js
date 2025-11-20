// src/content.js

import { ZHSClient } from 'zhs-client-js';
// or whatever the module's default/named export is;
// if it's CommonJS you might need:
// import * as ZhsClient from 'zhs-client-js';
console.log('ZHS Booking content script loaded');
console.log(document.cookie);
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

function injectCourseCardStyles() {
    if (document.getElementById("myExt-course-styles")) return;
  
    const style = document.createElement("style");
    style.id = "myExt-course-styles";
    style.textContent = `
      .myExt-course-card {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        max-width: 420px;
        padding: 14px 18px;
        margin: 12px auto;
        border-radius: 10px;
        background: #ffffff;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
        border: 1px solid rgba(0, 0, 0, 0.04);
        display: flex;
        flex-direction: column;
        gap: 10px;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
      }
  
      .myExt-course-card::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, #3b82f6, #22c55e);
        opacity: 0.05;
        pointer-events: none;
      }
  
      .myExt-course-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
        position: relative;
        z-index: 1;
      }
  
      .myExt-course-title {
        font-weight: 600;
        font-size: 14px;
        color: #111827;
      }
  
      .myExt-course-sub {
        font-size: 15px;
        font-weight: 600;
        color: #1f2937;
      }
  
      .myExt-course-slots {
        font-size: 12px;
        padding: 4px 8px;
        border-radius: 999px;
        background: #ecfdf5;
        color: #166534;
        font-weight: 500;
        white-space: nowrap;
      }
  
      .myExt-course-slots--low {
        background: #fef3c7;
        color: #92400e;
      }
  
      .myExt-course-slots--none {
        background: #fee2e2;
        color: #b91c1c;
      }
  
      .myExt-course-footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 8px;
        position: relative;
        z-index: 1;
      }
  
      .myExt-course-button {
        border: none;
        border-radius: 999px;
        padding: 6px 14px;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        background: linear-gradient(135deg, #3b82f6, #2563eb);
        color: #ffffff;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        box-shadow: 0 4px 10px rgba(37, 99, 235, 0.35);
        transition: transform 0.08s ease, box-shadow 0.08s ease, filter 0.08s ease;
      }
  
      .myExt-course-button:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 16px rgba(37, 99, 235, 0.45);
        filter: brightness(1.05);
      }
  
      .myExt-course-button:active {
        transform: translateY(0);
        box-shadow: 0 3px 8px rgba(37, 99, 235, 0.3);
        filter: brightness(0.97);
      }
  
      .myExt-course-button-icon {
        font-size: 14px;
        line-height: 1;
      }
  
      .myExt-course-not-available {
        font-size: 12px;
        padding: 4px 10px;
        border-radius: 999px;
        background: #f3f4f6;
        color: #6b7280;
        font-weight: 500;
      }
    `;

    style.textContent += `
    .myExt-week-btn-wrapper {
      max-width: 420px;
      margin: 20px auto 14px;
    }

    .myExt-week-btn {
      width: 100%;
      padding: 10px 16px;
      font-size: 14px;
      font-weight: 500;
      border-radius: 12px;
      border: none;
      cursor: pointer;
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);
      transition: transform 0.08s ease, box-shadow 0.08s ease, filter 0.08s ease;
    }

    .myExt-week-btn:hover {
      transform: translateY(-1px);
      filter: brightness(1.04);
      box-shadow: 0 6px 16px rgba(16, 185, 129, 0.45);
    }

    .myExt-week-btn:active {
      transform: translateY(0);
      filter: brightness(0.97);
      box-shadow: 0 3px 8px rgba(16, 185, 129, 0.3);
    }
`;
    document.head.appendChild(style);
  }

  // Example function that creates & appends the card
function renderCourseCard({ course, nextCourse, res, slotAvailable, onClick }) {
    //injectCourseCardStyles();
  
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