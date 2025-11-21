/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/zhs-client-js/courses.js":
/*!***********************************************!*\
  !*** ./node_modules/zhs-client-js/courses.js ***!
  \***********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   courses: () => (/* binding */ courses)
/* harmony export */ });
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ "./node_modules/zhs-client-js/helper.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helper_js__WEBPACK_IMPORTED_MODULE_0__]);
var __webpack_async_dependencies_result__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_async_dependencies_result__[0];



const courses = {
    "Tischtennis - Freies Spiel Samstag": {
        queryString(offset = 0){
            return JSON.stringify({
                "query": "\nmutation Add_slot_product_to_cart($input: AddSlotProductToCartInput!) {\n    add_slot_product_to_cart(\n        input: $input\n    ) {\n            id\n            reserved_until\n            seconds_until_reservation_ends\n            created_at\n        products {\n                    id\n                    name\n                    resource {\n                      __typename\n                    }\n        }\n    }\n}",
                "variables": {
                  "input": {
                    "parent_id": this.id,
                    "slot_start": this.nextCourseStart(offset),
                    "slot_end": this.nextCourseEnd(offset),
                  }
                }
            })
        },
        id: "75c9e2fe-bb62-4174-87e7-e5c69fe7c90c",
        nextCourseStart(offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('saturday'), offset)}T08:00:00Z`
        },
        nextCourseEnd (offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('saturday'), offset)}T10:00:00Z`
        },
        parentId: "90ab722f-2150-4891-b873-03bf408e4478"
    },
    //
    "Badminton - Freies Spiel Donnerstag": {
        queryString(offset = 0){
            return JSON.stringify({
                "query": "\nmutation Add_slot_product_to_cart($input: AddSlotProductToCartInput!) {\n    add_slot_product_to_cart(\n        input: $input\n    ) {\n            id\n            reserved_until\n            seconds_until_reservation_ends\n            created_at\n        products {\n                    id\n                    name\n                    resource {\n                      __typename\n                    }\n        }\n    }\n}",
                "variables": {
                  "input": {
                    "parent_id": this.id,
                    "slot_start": this.nextCourseStart(offset),
                    "slot_end": this.nextCourseEnd(offset),
                  }
                }
            })
        },
        id: "f266a02c-8dcc-44ac-baca-b63706fed5ca",
        nextCourseStart(offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('thursday'), offset)}T20:30:00Z`
        },
        nextCourseEnd (offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('thursday'), offset)}T22:00:00Z`
        },
        parentId: "37019bf0-24df-4b56-8c6d-2423ea83d30a"
    },
    "Badminton - Freies Spiel Freitag": {
        queryString(offset = 0){
            return JSON.stringify({
                "query": "\nmutation Add_slot_product_to_cart($input: AddSlotProductToCartInput!) {\n    add_slot_product_to_cart(\n        input: $input\n    ) {\n            id\n            reserved_until\n            seconds_until_reservation_ends\n            created_at\n        products {\n                    id\n                    name\n                    resource {\n                      __typename\n                    }\n        }\n    }\n}",
                "variables": {
                  "input": {
                    "parent_id": this.id,
                    "slot_start": this.nextCourseStart(offset),
                    "slot_end": this.nextCourseEnd(offset),
                  }
                }
            })
        },
        id: "91a9d9ae-c7a6-4078-8ef0-aa70ce068868",
        nextCourseStart(offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('friday'), offset)}19:00:00Z`
        },
        nextCourseEnd (offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('friday'), offset)}T20:30:00Z`
        },
        parentId: "37019bf0-24df-4b56-8c6d-2423ea83d30a"
    },
    "Badminton - Freies Spiel Samstag": {
        queryString(offset = 0){
            return JSON.stringify({
                "query": "\nmutation Add_slot_product_to_cart($input: AddSlotProductToCartInput!) {\n    add_slot_product_to_cart(\n        input: $input\n    ) {\n            id\n            reserved_until\n            seconds_until_reservation_ends\n            created_at\n        products {\n                    id\n                    name\n                    resource {\n                      __typename\n                    }\n        }\n    }\n}",
                "variables": {
                  "input": {
                    "parent_id": this.id,
                    "slot_start": this.nextCourseStart(offset),
                    "slot_end": this.nextCourseEnd(offset),
                  }
                }
            })
        },
        id: "5ace37c4-cfa9-4f21-b610-f054bbc61293",
        nextCourseStart(offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('saturday'), offset)}08:00:00Z`
        },
        nextCourseEnd (offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('saturday'), offset)}T09:30:00Z`
        },
        parentId: "37019bf0-24df-4b56-8c6d-2423ea83d30a"
    },
    //
    "Basketball - Freies Spiel Mittwoch": {
        queryString(offset = 0){
            return JSON.stringify({
                "query": "\nmutation Add_slot_product_to_cart($input: AddSlotProductToCartInput!) {\n    add_slot_product_to_cart(\n        input: $input\n    ) {\n            id\n            reserved_until\n            seconds_until_reservation_ends\n            created_at\n        products {\n                    id\n                    name\n                    resource {\n                      __typename\n                    }\n        }\n    }\n}",
                "variables": {
                  "input": {
                    "parent_id": this.id,
                    "slot_start": this.nextCourseStart(offset),
                    "slot_end": this.nextCourseEnd(offset),
                  }
                }
            })
        },
        id: "7cb1fbb1-9c07-48af-a525-c7cfd5f583ee",
        nextCourseStart(offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('wednesday'), offset)}T20:30:00Z`
        },
        nextCourseEnd (offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('wednesday'), offset)}T22:00:00Z`
        },
        parentId: "d7c77ebf-ff42-40ec-b2b9-4116924d4171"
    },
    "Basketball - Freies Spiel Donnerstag": {
        queryString(offset = 0){
            return JSON.stringify({
                "query": "\nmutation Add_slot_product_to_cart($input: AddSlotProductToCartInput!) {\n    add_slot_product_to_cart(\n        input: $input\n    ) {\n            id\n            reserved_until\n            seconds_until_reservation_ends\n            created_at\n        products {\n                    id\n                    name\n                    resource {\n                      __typename\n                    }\n        }\n    }\n}",
                "variables": {
                  "input": {
                    "parent_id": this.id,
                    "slot_start": this.nextCourseStart(offset),
                    "slot_end": this.nextCourseEnd(offset),
                  }
                }
            })
        },
        id: "92f59382-d567-45b6-a99a-601c48fa443e",
        nextCourseStart(offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('thursday'), offset)}T20:30:00Z`
        },
        nextCourseEnd (offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('thursday'), offset)}T22:00:00Z`
        },
        parentId: "d7c77ebf-ff42-40ec-b2b9-4116924d4171"
    },
    //
    "Volleyball - Freies Spiel Montag": {
        queryString(offset = 0){
            return JSON.stringify({
                "query": "\nmutation Add_slot_product_to_cart($input: AddSlotProductToCartInput!) {\n    add_slot_product_to_cart(\n        input: $input\n    ) {\n            id\n            reserved_until\n            seconds_until_reservation_ends\n            created_at\n        products {\n                    id\n                    name\n                    resource {\n                      __typename\n                    }\n        }\n    }\n}",
                "variables": {
                  "input": {
                    "parent_id": this.id,
                    "slot_start": this.nextCourseStart(offset),
                    "slot_end": this.nextCourseEnd(offset),
                  }
                }
            })
        },
        id: "0da87294-7c02-44f2-adc3-10e2690cea06",
        nextCourseStart(offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('monday'), offset)}T20:30:00.000Z`
        },
        nextCourseEnd (offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('monday'), offset)}T22:00:00.000Z`
        },
        parentId: "77e4748d-2ae6-4659-944d-8bcac3c8dead"
    },
    "Volleyball - Freies Spiel Donnerstag": {
        queryString(offset = 0){
            return JSON.stringify({
                "query": "\nmutation Add_slot_product_to_cart($input: AddSlotProductToCartInput!) {\n    add_slot_product_to_cart(\n        input: $input\n    ) {\n            id\n            reserved_until\n            seconds_until_reservation_ends\n            created_at\n        products {\n                    id\n                    name\n                    resource {\n                      __typename\n                    }\n        }\n    }\n}",
                "variables": {
                  "input": {
                    "parent_id": this.id,
                    "slot_start": this.nextCourseStart(offset),
                    "slot_end": this.nextCourseEnd(offset),
                  }
                }
            })
        },
        id: "be82c554-a495-4cdc-8b67-f073bfca05d0",
        nextCourseStart(offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('thursday'), offset)}T20:30:00.000Z`
        },
        nextCourseEnd (offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('thursday'), offset)}T22:00:00.000Z`
        },
        parentId: "77e4748d-2ae6-4659-944d-8bcac3c8dead"
    },
    "Volleyball - Freies Spiel Samstag": {
        queryString(offset = 0){
            return JSON.stringify({
                "query": "\nmutation Add_slot_product_to_cart($input: AddSlotProductToCartInput!) {\n    add_slot_product_to_cart(\n        input: $input\n    ) {\n            id\n            reserved_until\n            seconds_until_reservation_ends\n            created_at\n        products {\n                    id\n                    name\n                    resource {\n                      __typename\n                    }\n        }\n    }\n}",
                "variables": {
                  "input": {
                    "parent_id": this.id,
                    "slot_start": this.nextCourseStart(offset),
                    "slot_end": this.nextCourseEnd(offset),
                  }
                }
            })
        },
        id: "ad950f10-7a18-4e8a-8e25-8bf9c10bd607",
        nextCourseStart(offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('saturday'), offset)}T09:30:00Z`
        },
        nextCourseEnd (offset = 0) {
            return `${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.offsetWeek)((0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.getNextDayDate)('saturday'), offset)}T11:30:00Z`
        },
        parentId: "77e4748d-2ae6-4659-944d-8bcac3c8dead"

    },

    ////////////////// nicht slot basiert
    "Outdoor-Fitnessanlage - Freies Training": {
        queryString(){
            return JSON.stringify({
                "query": "\nmutation Add_product_to_cart($productName: String!) {\n    add_product_to_cart(\n        input: { product_name: $productName }\n    ) {\n        id\n        reserved_until\n        seconds_until_reservation_ends\n        created_at\n        products {\n            id\n            name\n            resource {\n              __typename\n            }\n        }\n    }\n}",
                "variables": {
                "productName": this.id
                }
            })
        },
        id: "courses.course.02289820-8ce2-4981-9bb5-cffa4d8d29c6"
    },
    "Golf - Freies Spiel": {
        queryString() {
            return JSON.stringify({
                "query": "\nmutation Add_product_to_cart($productName: String!) {\n    add_product_to_cart(\n        input: { product_name: $productName }\n    ) {\n        id\n        reserved_until\n        seconds_until_reservation_ends\n        created_at\n        products {\n            id\n            name\n            resource {\n              __typename\n            }\n        }\n    }\n}",
                "variables": {
                    "productName": this.id
                }
            })
        },
        id: "courses.course.bf93253a-fba0-4a8e-b2e0-739e1f15187c"
    }
}

// export const courseIds = Object.entries(courses).map(([key, val]) => ({[val.id]: key})).reduce((a,b) => ({...a, ...b}), {}) 

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/zhs-client-js/helper.js":
/*!**********************************************!*\
  !*** ./node_modules/zhs-client-js/helper.js ***!
  \**********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateCookieString: () => (/* binding */ generateCookieString),
/* harmony export */   getNextDayDate: () => (/* binding */ getNextDayDate),
/* harmony export */   loadJsonFile: () => (/* binding */ loadJsonFile),
/* harmony export */   offsetWeek: () => (/* binding */ offsetWeek),
/* harmony export */   offsetWeekday: () => (/* binding */ offsetWeekday)
/* harmony export */ });
let fs

if(typeof process === 'object'){
  try {
    fs = await __webpack_require__.e(/*! import() */ "_727c").then(__webpack_require__.t.bind(__webpack_require__, /*! fs */ "?727c", 19))
  } catch (error) {
    console.warn("Could import module 'fs'. This error can occur when using this module inside the browser or 'fs' is not installed. If you are working inside node try run 'npm install fs'")
  }
}

function generateCookieString(jsonObject) {
    const entries = Object.entries(jsonObject)
    
    return entries.map(([key, val]) => `${key}=${val}`).join("; ")
}

function loadJsonFile(path) {
    const file = fs.readFileSync(path, 'utf8')

    return JSON.parse(file)
}


function getNextDayDate(day) {
    const today = new Date();
    let targetDay;
  
    // Allow both numbers (0–6) and names ("monday")
    if (typeof day === "number") {
      targetDay = day;
    } else if (typeof day === "string") {
      const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
      targetDay = days.indexOf(day.toLowerCase());
      if (targetDay === -1) {
        throw new Error("Invalid day name");
      }
    } else {
      throw new Error("Day must be a number (0–6) or weekday name");
    }
  
    const currentDay = today.getDay();
  
    // Calculate days until next occurrence (never today → always future)
    const daysUntil = (targetDay - currentDay + 7) % 7 || 7;
  
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + daysUntil);
  
    // Format YYYY-MM-DD
    const year = nextDate.getFullYear();
    const month = String(nextDate.getMonth() + 1).padStart(2, "0");
    const dayNum = String(nextDate.getDate()).padStart(2, "0");
  
    return `${year}-${month}-${dayNum}`;
}

function offsetWeekday(weekday, offset) {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  
    // Normalize input to lowercase
    const index = days.indexOf(weekday.toLowerCase());
    if (index === -1) {
      throw new Error("Invalid weekday: " + weekday);
    }
  
    // Calculate new index using modulo that works with negatives
    const newIndex = (index + offset % 7 + 7) % 7;
  
    return days[newIndex];
  }

  function offsetWeek(dateString, offset) {
    // Convert to Date object
    const date = new Date(dateString);
  
    // Add offset * 7 days
    date.setDate(date.getDate() + offset * 7);
  
    // Convert back to YYYY-MM-DD
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
  
    return `${year}-${month}-${day}`;
  }
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./node_modules/zhs-client-js/index.js":
/*!*********************************************!*\
  !*** ./node_modules/zhs-client-js/index.js ***!
  \*********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZHSClient: () => (/* reexport safe */ _zhsClient_js__WEBPACK_IMPORTED_MODULE_2__.ZHSClient),
/* harmony export */   courses: () => (/* reexport safe */ _courses_js__WEBPACK_IMPORTED_MODULE_0__.courses),
/* harmony export */   generateCookieString: () => (/* reexport safe */ _helper_js__WEBPACK_IMPORTED_MODULE_1__.generateCookieString),
/* harmony export */   getNextDayDate: () => (/* reexport safe */ _helper_js__WEBPACK_IMPORTED_MODULE_1__.getNextDayDate),
/* harmony export */   loadJsonFile: () => (/* reexport safe */ _helper_js__WEBPACK_IMPORTED_MODULE_1__.loadJsonFile),
/* harmony export */   offsetWeek: () => (/* reexport safe */ _helper_js__WEBPACK_IMPORTED_MODULE_1__.offsetWeek),
/* harmony export */   offsetWeekday: () => (/* reexport safe */ _helper_js__WEBPACK_IMPORTED_MODULE_1__.offsetWeekday)
/* harmony export */ });
/* harmony import */ var _courses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses.js */ "./node_modules/zhs-client-js/courses.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper.js */ "./node_modules/zhs-client-js/helper.js");
/* harmony import */ var _zhsClient_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zhsClient.js */ "./node_modules/zhs-client-js/zhsClient.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_courses_js__WEBPACK_IMPORTED_MODULE_0__, _helper_js__WEBPACK_IMPORTED_MODULE_1__, _zhsClient_js__WEBPACK_IMPORTED_MODULE_2__]);
([_courses_js__WEBPACK_IMPORTED_MODULE_0__, _helper_js__WEBPACK_IMPORTED_MODULE_1__, _zhsClient_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./node_modules/zhs-client-js/zhsClient.js":
/*!*************************************************!*\
  !*** ./node_modules/zhs-client-js/zhsClient.js ***!
  \*************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZHSClient: () => (/* binding */ ZHSClient)
/* harmony export */ });
/* harmony import */ var _courses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses.js */ "./node_modules/zhs-client-js/courses.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper.js */ "./node_modules/zhs-client-js/helper.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_courses_js__WEBPACK_IMPORTED_MODULE_0__, _helper_js__WEBPACK_IMPORTED_MODULE_1__]);
([_courses_js__WEBPACK_IMPORTED_MODULE_0__, _helper_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



class ZHSClient {

    static fromCookieFile(filePath){
        const client = new ZHSClient()
        const file = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.loadJsonFile)(filePath)
        client.cookieObject = file
        client.cookieString = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.generateCookieString)(file.cookie)
        return client
    }

    static fromCookieObject(cookieObject){
        const client = new ZHSClient()
        client.cookieObject = cookieObject
        client.cookieString = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.generateCookieString)(cookieObject.cookie)
        return client
    }

    static fromCookieString(cookieString){
        const client = new ZHSClient()
        client.cookieString = cookieString
        return client
    }

    constructor() {
        this.cookieObject = null
        this.cookieString = ""
        this.courses = _courses_js__WEBPACK_IMPORTED_MODULE_0__.courses
        this.baseUrl = 'https://kurse.zhs-muenchen.de'
        this.apiEndpoint = '/api/query'

        this.defaultHeaders = {
            "accept": "application/json, text/plain, */*",
            "accept-language": "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/json",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Chromium\";v=\"142\", \"Google Chrome\";v=\"142\", \"Not_A Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-uninow-language": "de_DE"
        }

        
    }
    /**
     * Fügt den Kurs in den Warenkorb. Bei wöchentlichen Kursen wird zum nächstmöglichen Wochentag gebucht. Für zukünftige Wochen wird ein offset gesetzt
     
    * @param {keyof typeof courses} courseName
     * @param offset Gibt das offset für die jeweilige Woche an. Z.B offset=2 beschreibt den zukünftigen Buchungstag plus 14 Tage. Default 0
     */
    async book(courseName, offset = 0){
        const course = this.courses[courseName] || this.findCourseNameById(courseName)
        

        const requestOptions = {
            method: "POST",
            headers: {
                ...this.defaultHeaders,
                'cookie': this.cookieString,
                'origin': this.baseUrl,
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36'
            },
            body: course.queryString(offset)
        }

        const result = await fetch(`${this.baseUrl}${this.apiEndpoint}`, requestOptions)

        console.log(result.status)

        if(!result.ok){
            return {
                status: "error",
                response: result,
                responseBody: null,
            }
        }

        const body = await result.json()
        console.log(body)
        if(!body.data) {
            return {
                status: "not_booked",
                response: result,
                responseBody: body
            }
        }

        return {
            status: "booked",
            response: result,
            responseBody: body
        }

    }

    /**
     * @typedef {Object} BookingSlot
     * @property {string} start - ISO timestamp when the slot begins.
     * @property {string} end - ISO timestamp when the slot ends.
     * @property {string} booking_period_start - ISO timestamp when booking becomes available.
     * @property {string} booking_period_end - ISO timestamp when booking closes.
     * @property {number} availability - Number of free spots remaining.
     * @property {number} already_booked - Whether the user has already booked this slot (0 or 1).
     * @property {number} already_in_cart - Whether the slot is already in the user's cart (0 or 1).
     * @property {number} already_on_waiting_list - Whether the user is on the waiting list (0 or 1).
     */

    /**
     * @typedef {Object} BookingSlotsData
     * @property {BookingSlot[]} booking_slots - List of booking slots.
     */

    /**
     * @typedef {Object} BookingSlotsResponse
     * @property {BookingSlotsData} data - Response wrapper.
     */

    /**
     * Fragt einen Kurs Slot ab, ob dieser Zeitraum valide ist und noch Plätze frei sind. Der Aufruf funktioniert nur bei bestimmten Kursen, welche ein Slot Format haben und wochenspezifisch sind
     * @param {keyof typeof courses} courseName
     * @param offset Gibt das offset für die jeweilige Woche an. Z.B offset=2 beschreibt den zukünftigen Buchungstag plus 14 Tage. Default 0
     * @returns {Promise<BookingSlotsResponse>} 
    */
    async getCourseSlotDetails(courseName, offset){
        const course = this.courses[courseName] || this.findCourseNameById(courseName)

        const [startDate] = course.nextCourseStart(offset).split('T')
        const [endDate] = course.nextCourseEnd(offset).split('T')

        const requestOptions = {
            method: "POST",
            headers: {
                ...this.defaultHeaders,
                'cookie': this.cookieString,
                'origin': this.baseUrl,
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36'
            },
            body: JSON.stringify({
                "query": "\nquery List_product_slots($productID: UUID!, $input: BookingSlotsInput!) {\n  booking_slots(product_id: $productID, input: $input) {\n    start\n    end\n    booking_period_start\n    booking_period_end\n    availability\n    already_booked\n    already_in_cart\n    already_on_waiting_list\n }\n}",
                "variables": {
                    "productID": course.id,
                    "input": {
                        // "start": course.nextCourseStart(offset),
                        // "end": course.nextCourseEnd(offset)
                        "start": `${startDate}T00:00:00Z`,
                        "end": `${endDate}T23:59:59Z`
                    }
                }
            })
        }

        const result = await fetch(`${this.baseUrl}${this.apiEndpoint}`, requestOptions)

        return await result.json()
    }



    /**
     */
    // async completeCheckout(){
    //     /**
    //      * pi intent fetchen
    //      * GET request mit pi intent für username und daten
    //      * 
    //      */
    // }

    findCourseNameById(id){
        for(const [key,val] of Object.entries(this.courses)){
            if(val.id == id)
                return key
        }
    }   



}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zhs_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zhs-client-js */ "./node_modules/zhs-client-js/index.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zhs_client_js__WEBPACK_IMPORTED_MODULE_0__]);
var __webpack_async_dependencies_result__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
zhs_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_async_dependencies_result__[0];
// src/content.js


// or whatever the module's default/named export is;
// if it's CommonJS you might need:
// import * as ZhsClient from 'zhs-client-js';
console.log('ZHS Booking content script loaded');
console.log(document.cookie);
injectCourseCardStyles()


const client = zhs_client_js__WEBPACK_IMPORTED_MODULE_0__.ZHSClient.fromCookieString(document.cookie)

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
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var hasSymbol = typeof Symbol === "function";
/******/ 		var webpackQueues = hasSymbol ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = hasSymbol ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = hasSymbol ? Symbol("webpack error") : "__webpack_error__";
/******/ 		
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 		
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 		
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			var handle = (deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 		
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}
/******/ 			var done = (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue))
/******/ 			body(handle, done);
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "zhs-booking-extension:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"content": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkzhs_booking_extension"] = self["webpackChunkzhs_booking_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/content.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpREFBaUQ7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDJCQUEyQixFQUFFLDBCQUEwQjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esa0NBQWtDLE9BQU87QUFDekMsTUFBTTtB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVRXJGQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3pocy1ib29raW5nLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy96aHMtY2xpZW50LWpzL2NvdXJzZXMuanMiLCJ3ZWJwYWNrOi8vemhzLWJvb2tpbmctZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL3pocy1jbGllbnQtanMvaGVscGVyLmpzIiwid2VicGFjazovL3pocy1ib29raW5nLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy96aHMtY2xpZW50LWpzL2luZGV4LmpzIiwid2VicGFjazovL3pocy1ib29raW5nLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy96aHMtY2xpZW50LWpzL3poc0NsaWVudC5qcyIsIndlYnBhY2s6Ly96aHMtYm9va2luZy1leHRlbnNpb24vLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly96aHMtYm9va2luZy1leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vemhzLWJvb2tpbmctZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vemhzLWJvb2tpbmctZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9jcmVhdGUgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3pocy1ib29raW5nLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vemhzLWJvb2tpbmctZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vemhzLWJvb2tpbmctZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly96aHMtYm9va2luZy1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly96aHMtYm9va2luZy1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly96aHMtYm9va2luZy1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3pocy1ib29raW5nLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3pocy1ib29raW5nLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly96aHMtYm9va2luZy1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vemhzLWJvb2tpbmctZXh0ZW5zaW9uL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vemhzLWJvb2tpbmctZXh0ZW5zaW9uL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly96aHMtYm9va2luZy1leHRlbnNpb24vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9mZnNldFdlZWssIGdldE5leHREYXlEYXRlLCBvZmZzZXRXZWVrZGF5IH0gZnJvbSBcIi4vaGVscGVyLmpzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNvdXJzZXMgPSB7XHJcbiAgICBcIlRpc2NodGVubmlzIC0gRnJlaWVzIFNwaWVsIFNhbXN0YWdcIjoge1xyXG4gICAgICAgIHF1ZXJ5U3RyaW5nKG9mZnNldCA9IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgXCJxdWVyeVwiOiBcIlxcbm11dGF0aW9uIEFkZF9zbG90X3Byb2R1Y3RfdG9fY2FydCgkaW5wdXQ6IEFkZFNsb3RQcm9kdWN0VG9DYXJ0SW5wdXQhKSB7XFxuICAgIGFkZF9zbG90X3Byb2R1Y3RfdG9fY2FydChcXG4gICAgICAgIGlucHV0OiAkaW5wdXRcXG4gICAgKSB7XFxuICAgICAgICAgICAgaWRcXG4gICAgICAgICAgICByZXNlcnZlZF91bnRpbFxcbiAgICAgICAgICAgIHNlY29uZHNfdW50aWxfcmVzZXJ2YXRpb25fZW5kc1xcbiAgICAgICAgICAgIGNyZWF0ZWRfYXRcXG4gICAgICAgIHByb2R1Y3RzIHtcXG4gICAgICAgICAgICAgICAgICAgIGlkXFxuICAgICAgICAgICAgICAgICAgICBuYW1lXFxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSB7XFxuICAgICAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWVcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcclxuICAgICAgICAgICAgICAgIFwidmFyaWFibGVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJpbnB1dFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJwYXJlbnRfaWRcIjogdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICBcInNsb3Rfc3RhcnRcIjogdGhpcy5uZXh0Q291cnNlU3RhcnQob2Zmc2V0KSxcclxuICAgICAgICAgICAgICAgICAgICBcInNsb3RfZW5kXCI6IHRoaXMubmV4dENvdXJzZUVuZChvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpZDogXCI3NWM5ZTJmZS1iYjYyLTQxNzQtODdlNy1lNWM2OWZlN2M5MGNcIixcclxuICAgICAgICBuZXh0Q291cnNlU3RhcnQob2Zmc2V0ID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7b2Zmc2V0V2VlayhnZXROZXh0RGF5RGF0ZSgnc2F0dXJkYXknKSwgb2Zmc2V0KX1UMDg6MDA6MDBaYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV4dENvdXJzZUVuZCAob2Zmc2V0ID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7b2Zmc2V0V2VlayhnZXROZXh0RGF5RGF0ZSgnc2F0dXJkYXknKSwgb2Zmc2V0KX1UMTA6MDA6MDBaYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFyZW50SWQ6IFwiOTBhYjcyMmYtMjE1MC00ODkxLWI4NzMtMDNiZjQwOGU0NDc4XCJcclxuICAgIH0sXHJcbiAgICAvL1xyXG4gICAgXCJCYWRtaW50b24gLSBGcmVpZXMgU3BpZWwgRG9ubmVyc3RhZ1wiOiB7XHJcbiAgICAgICAgcXVlcnlTdHJpbmcob2Zmc2V0ID0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IFwiXFxubXV0YXRpb24gQWRkX3Nsb3RfcHJvZHVjdF90b19jYXJ0KCRpbnB1dDogQWRkU2xvdFByb2R1Y3RUb0NhcnRJbnB1dCEpIHtcXG4gICAgYWRkX3Nsb3RfcHJvZHVjdF90b19jYXJ0KFxcbiAgICAgICAgaW5wdXQ6ICRpbnB1dFxcbiAgICApIHtcXG4gICAgICAgICAgICBpZFxcbiAgICAgICAgICAgIHJlc2VydmVkX3VudGlsXFxuICAgICAgICAgICAgc2Vjb25kc191bnRpbF9yZXNlcnZhdGlvbl9lbmRzXFxuICAgICAgICAgICAgY3JlYXRlZF9hdFxcbiAgICAgICAgcHJvZHVjdHMge1xcbiAgICAgICAgICAgICAgICAgICAgaWRcXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgX190eXBlbmFtZVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YXJpYWJsZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcImlucHV0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInBhcmVudF9pZFwiOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2xvdF9zdGFydFwiOiB0aGlzLm5leHRDb3Vyc2VTdGFydChvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2xvdF9lbmRcIjogdGhpcy5uZXh0Q291cnNlRW5kKG9mZnNldCksXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlkOiBcImYyNjZhMDJjLThkY2MtNDRhYy1iYWNhLWI2MzcwNmZlZDVjYVwiLFxyXG4gICAgICAgIG5leHRDb3Vyc2VTdGFydChvZmZzZXQgPSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtvZmZzZXRXZWVrKGdldE5leHREYXlEYXRlKCd0aHVyc2RheScpLCBvZmZzZXQpfVQyMDozMDowMFpgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXh0Q291cnNlRW5kIChvZmZzZXQgPSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtvZmZzZXRXZWVrKGdldE5leHREYXlEYXRlKCd0aHVyc2RheScpLCBvZmZzZXQpfVQyMjowMDowMFpgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJlbnRJZDogXCIzNzAxOWJmMC0yNGRmLTRiNTYtOGM2ZC0yNDIzZWE4M2QzMGFcIlxyXG4gICAgfSxcclxuICAgIFwiQmFkbWludG9uIC0gRnJlaWVzIFNwaWVsIEZyZWl0YWdcIjoge1xyXG4gICAgICAgIHF1ZXJ5U3RyaW5nKG9mZnNldCA9IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgXCJxdWVyeVwiOiBcIlxcbm11dGF0aW9uIEFkZF9zbG90X3Byb2R1Y3RfdG9fY2FydCgkaW5wdXQ6IEFkZFNsb3RQcm9kdWN0VG9DYXJ0SW5wdXQhKSB7XFxuICAgIGFkZF9zbG90X3Byb2R1Y3RfdG9fY2FydChcXG4gICAgICAgIGlucHV0OiAkaW5wdXRcXG4gICAgKSB7XFxuICAgICAgICAgICAgaWRcXG4gICAgICAgICAgICByZXNlcnZlZF91bnRpbFxcbiAgICAgICAgICAgIHNlY29uZHNfdW50aWxfcmVzZXJ2YXRpb25fZW5kc1xcbiAgICAgICAgICAgIGNyZWF0ZWRfYXRcXG4gICAgICAgIHByb2R1Y3RzIHtcXG4gICAgICAgICAgICAgICAgICAgIGlkXFxuICAgICAgICAgICAgICAgICAgICBuYW1lXFxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSB7XFxuICAgICAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWVcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcclxuICAgICAgICAgICAgICAgIFwidmFyaWFibGVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJpbnB1dFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJwYXJlbnRfaWRcIjogdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICBcInNsb3Rfc3RhcnRcIjogdGhpcy5uZXh0Q291cnNlU3RhcnQob2Zmc2V0KSxcclxuICAgICAgICAgICAgICAgICAgICBcInNsb3RfZW5kXCI6IHRoaXMubmV4dENvdXJzZUVuZChvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpZDogXCI5MWE5ZDlhZS1jN2E2LTQwNzgtOGVmMC1hYTcwY2UwNjg4NjhcIixcclxuICAgICAgICBuZXh0Q291cnNlU3RhcnQob2Zmc2V0ID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7b2Zmc2V0V2VlayhnZXROZXh0RGF5RGF0ZSgnZnJpZGF5JyksIG9mZnNldCl9MTk6MDA6MDBaYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV4dENvdXJzZUVuZCAob2Zmc2V0ID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7b2Zmc2V0V2VlayhnZXROZXh0RGF5RGF0ZSgnZnJpZGF5JyksIG9mZnNldCl9VDIwOjMwOjAwWmBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcmVudElkOiBcIjM3MDE5YmYwLTI0ZGYtNGI1Ni04YzZkLTI0MjNlYTgzZDMwYVwiXHJcbiAgICB9LFxyXG4gICAgXCJCYWRtaW50b24gLSBGcmVpZXMgU3BpZWwgU2Ftc3RhZ1wiOiB7XHJcbiAgICAgICAgcXVlcnlTdHJpbmcob2Zmc2V0ID0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IFwiXFxubXV0YXRpb24gQWRkX3Nsb3RfcHJvZHVjdF90b19jYXJ0KCRpbnB1dDogQWRkU2xvdFByb2R1Y3RUb0NhcnRJbnB1dCEpIHtcXG4gICAgYWRkX3Nsb3RfcHJvZHVjdF90b19jYXJ0KFxcbiAgICAgICAgaW5wdXQ6ICRpbnB1dFxcbiAgICApIHtcXG4gICAgICAgICAgICBpZFxcbiAgICAgICAgICAgIHJlc2VydmVkX3VudGlsXFxuICAgICAgICAgICAgc2Vjb25kc191bnRpbF9yZXNlcnZhdGlvbl9lbmRzXFxuICAgICAgICAgICAgY3JlYXRlZF9hdFxcbiAgICAgICAgcHJvZHVjdHMge1xcbiAgICAgICAgICAgICAgICAgICAgaWRcXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgX190eXBlbmFtZVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YXJpYWJsZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcImlucHV0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInBhcmVudF9pZFwiOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2xvdF9zdGFydFwiOiB0aGlzLm5leHRDb3Vyc2VTdGFydChvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2xvdF9lbmRcIjogdGhpcy5uZXh0Q291cnNlRW5kKG9mZnNldCksXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlkOiBcIjVhY2UzN2M0LWNmYTktNGYyMS1iNjEwLWYwNTRiYmM2MTI5M1wiLFxyXG4gICAgICAgIG5leHRDb3Vyc2VTdGFydChvZmZzZXQgPSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtvZmZzZXRXZWVrKGdldE5leHREYXlEYXRlKCdzYXR1cmRheScpLCBvZmZzZXQpfTA4OjAwOjAwWmBcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5leHRDb3Vyc2VFbmQgKG9mZnNldCA9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke29mZnNldFdlZWsoZ2V0TmV4dERheURhdGUoJ3NhdHVyZGF5JyksIG9mZnNldCl9VDA5OjMwOjAwWmBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcmVudElkOiBcIjM3MDE5YmYwLTI0ZGYtNGI1Ni04YzZkLTI0MjNlYTgzZDMwYVwiXHJcbiAgICB9LFxyXG4gICAgLy9cclxuICAgIFwiQmFza2V0YmFsbCAtIEZyZWllcyBTcGllbCBNaXR0d29jaFwiOiB7XHJcbiAgICAgICAgcXVlcnlTdHJpbmcob2Zmc2V0ID0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IFwiXFxubXV0YXRpb24gQWRkX3Nsb3RfcHJvZHVjdF90b19jYXJ0KCRpbnB1dDogQWRkU2xvdFByb2R1Y3RUb0NhcnRJbnB1dCEpIHtcXG4gICAgYWRkX3Nsb3RfcHJvZHVjdF90b19jYXJ0KFxcbiAgICAgICAgaW5wdXQ6ICRpbnB1dFxcbiAgICApIHtcXG4gICAgICAgICAgICBpZFxcbiAgICAgICAgICAgIHJlc2VydmVkX3VudGlsXFxuICAgICAgICAgICAgc2Vjb25kc191bnRpbF9yZXNlcnZhdGlvbl9lbmRzXFxuICAgICAgICAgICAgY3JlYXRlZF9hdFxcbiAgICAgICAgcHJvZHVjdHMge1xcbiAgICAgICAgICAgICAgICAgICAgaWRcXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgX190eXBlbmFtZVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YXJpYWJsZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcImlucHV0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInBhcmVudF9pZFwiOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2xvdF9zdGFydFwiOiB0aGlzLm5leHRDb3Vyc2VTdGFydChvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2xvdF9lbmRcIjogdGhpcy5uZXh0Q291cnNlRW5kKG9mZnNldCksXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlkOiBcIjdjYjFmYmIxLTljMDctNDhhZi1hNTI1LWM3Y2ZkNWY1ODNlZVwiLFxyXG4gICAgICAgIG5leHRDb3Vyc2VTdGFydChvZmZzZXQgPSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtvZmZzZXRXZWVrKGdldE5leHREYXlEYXRlKCd3ZWRuZXNkYXknKSwgb2Zmc2V0KX1UMjA6MzA6MDBaYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV4dENvdXJzZUVuZCAob2Zmc2V0ID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7b2Zmc2V0V2VlayhnZXROZXh0RGF5RGF0ZSgnd2VkbmVzZGF5JyksIG9mZnNldCl9VDIyOjAwOjAwWmBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcmVudElkOiBcImQ3Yzc3ZWJmLWZmNDItNDBlYy1iMmI5LTQxMTY5MjRkNDE3MVwiXHJcbiAgICB9LFxyXG4gICAgXCJCYXNrZXRiYWxsIC0gRnJlaWVzIFNwaWVsIERvbm5lcnN0YWdcIjoge1xyXG4gICAgICAgIHF1ZXJ5U3RyaW5nKG9mZnNldCA9IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgXCJxdWVyeVwiOiBcIlxcbm11dGF0aW9uIEFkZF9zbG90X3Byb2R1Y3RfdG9fY2FydCgkaW5wdXQ6IEFkZFNsb3RQcm9kdWN0VG9DYXJ0SW5wdXQhKSB7XFxuICAgIGFkZF9zbG90X3Byb2R1Y3RfdG9fY2FydChcXG4gICAgICAgIGlucHV0OiAkaW5wdXRcXG4gICAgKSB7XFxuICAgICAgICAgICAgaWRcXG4gICAgICAgICAgICByZXNlcnZlZF91bnRpbFxcbiAgICAgICAgICAgIHNlY29uZHNfdW50aWxfcmVzZXJ2YXRpb25fZW5kc1xcbiAgICAgICAgICAgIGNyZWF0ZWRfYXRcXG4gICAgICAgIHByb2R1Y3RzIHtcXG4gICAgICAgICAgICAgICAgICAgIGlkXFxuICAgICAgICAgICAgICAgICAgICBuYW1lXFxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSB7XFxuICAgICAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWVcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcclxuICAgICAgICAgICAgICAgIFwidmFyaWFibGVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJpbnB1dFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJwYXJlbnRfaWRcIjogdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICBcInNsb3Rfc3RhcnRcIjogdGhpcy5uZXh0Q291cnNlU3RhcnQob2Zmc2V0KSxcclxuICAgICAgICAgICAgICAgICAgICBcInNsb3RfZW5kXCI6IHRoaXMubmV4dENvdXJzZUVuZChvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpZDogXCI5MmY1OTM4Mi1kNTY3LTQ1YjYtYTk5YS02MDFjNDhmYTQ0M2VcIixcclxuICAgICAgICBuZXh0Q291cnNlU3RhcnQob2Zmc2V0ID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7b2Zmc2V0V2VlayhnZXROZXh0RGF5RGF0ZSgndGh1cnNkYXknKSwgb2Zmc2V0KX1UMjA6MzA6MDBaYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV4dENvdXJzZUVuZCAob2Zmc2V0ID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7b2Zmc2V0V2VlayhnZXROZXh0RGF5RGF0ZSgndGh1cnNkYXknKSwgb2Zmc2V0KX1UMjI6MDA6MDBaYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFyZW50SWQ6IFwiZDdjNzdlYmYtZmY0Mi00MGVjLWIyYjktNDExNjkyNGQ0MTcxXCJcclxuICAgIH0sXHJcbiAgICAvL1xyXG4gICAgXCJWb2xsZXliYWxsIC0gRnJlaWVzIFNwaWVsIE1vbnRhZ1wiOiB7XHJcbiAgICAgICAgcXVlcnlTdHJpbmcob2Zmc2V0ID0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IFwiXFxubXV0YXRpb24gQWRkX3Nsb3RfcHJvZHVjdF90b19jYXJ0KCRpbnB1dDogQWRkU2xvdFByb2R1Y3RUb0NhcnRJbnB1dCEpIHtcXG4gICAgYWRkX3Nsb3RfcHJvZHVjdF90b19jYXJ0KFxcbiAgICAgICAgaW5wdXQ6ICRpbnB1dFxcbiAgICApIHtcXG4gICAgICAgICAgICBpZFxcbiAgICAgICAgICAgIHJlc2VydmVkX3VudGlsXFxuICAgICAgICAgICAgc2Vjb25kc191bnRpbF9yZXNlcnZhdGlvbl9lbmRzXFxuICAgICAgICAgICAgY3JlYXRlZF9hdFxcbiAgICAgICAgcHJvZHVjdHMge1xcbiAgICAgICAgICAgICAgICAgICAgaWRcXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgX190eXBlbmFtZVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YXJpYWJsZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcImlucHV0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInBhcmVudF9pZFwiOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2xvdF9zdGFydFwiOiB0aGlzLm5leHRDb3Vyc2VTdGFydChvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2xvdF9lbmRcIjogdGhpcy5uZXh0Q291cnNlRW5kKG9mZnNldCksXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlkOiBcIjBkYTg3Mjk0LTdjMDItNDRmMi1hZGMzLTEwZTI2OTBjZWEwNlwiLFxyXG4gICAgICAgIG5leHRDb3Vyc2VTdGFydChvZmZzZXQgPSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtvZmZzZXRXZWVrKGdldE5leHREYXlEYXRlKCdtb25kYXknKSwgb2Zmc2V0KX1UMjA6MzA6MDAuMDAwWmBcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5leHRDb3Vyc2VFbmQgKG9mZnNldCA9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke29mZnNldFdlZWsoZ2V0TmV4dERheURhdGUoJ21vbmRheScpLCBvZmZzZXQpfVQyMjowMDowMC4wMDBaYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFyZW50SWQ6IFwiNzdlNDc0OGQtMmFlNi00NjU5LTk0NGQtOGJjYWMzYzhkZWFkXCJcclxuICAgIH0sXHJcbiAgICBcIlZvbGxleWJhbGwgLSBGcmVpZXMgU3BpZWwgRG9ubmVyc3RhZ1wiOiB7XHJcbiAgICAgICAgcXVlcnlTdHJpbmcob2Zmc2V0ID0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IFwiXFxubXV0YXRpb24gQWRkX3Nsb3RfcHJvZHVjdF90b19jYXJ0KCRpbnB1dDogQWRkU2xvdFByb2R1Y3RUb0NhcnRJbnB1dCEpIHtcXG4gICAgYWRkX3Nsb3RfcHJvZHVjdF90b19jYXJ0KFxcbiAgICAgICAgaW5wdXQ6ICRpbnB1dFxcbiAgICApIHtcXG4gICAgICAgICAgICBpZFxcbiAgICAgICAgICAgIHJlc2VydmVkX3VudGlsXFxuICAgICAgICAgICAgc2Vjb25kc191bnRpbF9yZXNlcnZhdGlvbl9lbmRzXFxuICAgICAgICAgICAgY3JlYXRlZF9hdFxcbiAgICAgICAgcHJvZHVjdHMge1xcbiAgICAgICAgICAgICAgICAgICAgaWRcXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgX190eXBlbmFtZVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YXJpYWJsZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICBcImlucHV0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInBhcmVudF9pZFwiOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2xvdF9zdGFydFwiOiB0aGlzLm5leHRDb3Vyc2VTdGFydChvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2xvdF9lbmRcIjogdGhpcy5uZXh0Q291cnNlRW5kKG9mZnNldCksXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlkOiBcImJlODJjNTU0LWE0OTUtNGNkYy04YjY3LWYwNzNiZmNhMDVkMFwiLFxyXG4gICAgICAgIG5leHRDb3Vyc2VTdGFydChvZmZzZXQgPSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtvZmZzZXRXZWVrKGdldE5leHREYXlEYXRlKCd0aHVyc2RheScpLCBvZmZzZXQpfVQyMDozMDowMC4wMDBaYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV4dENvdXJzZUVuZCAob2Zmc2V0ID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7b2Zmc2V0V2VlayhnZXROZXh0RGF5RGF0ZSgndGh1cnNkYXknKSwgb2Zmc2V0KX1UMjI6MDA6MDAuMDAwWmBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcmVudElkOiBcIjc3ZTQ3NDhkLTJhZTYtNDY1OS05NDRkLThiY2FjM2M4ZGVhZFwiXHJcbiAgICB9LFxyXG4gICAgXCJWb2xsZXliYWxsIC0gRnJlaWVzIFNwaWVsIFNhbXN0YWdcIjoge1xyXG4gICAgICAgIHF1ZXJ5U3RyaW5nKG9mZnNldCA9IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgXCJxdWVyeVwiOiBcIlxcbm11dGF0aW9uIEFkZF9zbG90X3Byb2R1Y3RfdG9fY2FydCgkaW5wdXQ6IEFkZFNsb3RQcm9kdWN0VG9DYXJ0SW5wdXQhKSB7XFxuICAgIGFkZF9zbG90X3Byb2R1Y3RfdG9fY2FydChcXG4gICAgICAgIGlucHV0OiAkaW5wdXRcXG4gICAgKSB7XFxuICAgICAgICAgICAgaWRcXG4gICAgICAgICAgICByZXNlcnZlZF91bnRpbFxcbiAgICAgICAgICAgIHNlY29uZHNfdW50aWxfcmVzZXJ2YXRpb25fZW5kc1xcbiAgICAgICAgICAgIGNyZWF0ZWRfYXRcXG4gICAgICAgIHByb2R1Y3RzIHtcXG4gICAgICAgICAgICAgICAgICAgIGlkXFxuICAgICAgICAgICAgICAgICAgICBuYW1lXFxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSB7XFxuICAgICAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWVcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcclxuICAgICAgICAgICAgICAgIFwidmFyaWFibGVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgXCJpbnB1dFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJwYXJlbnRfaWRcIjogdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICBcInNsb3Rfc3RhcnRcIjogdGhpcy5uZXh0Q291cnNlU3RhcnQob2Zmc2V0KSxcclxuICAgICAgICAgICAgICAgICAgICBcInNsb3RfZW5kXCI6IHRoaXMubmV4dENvdXJzZUVuZChvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpZDogXCJhZDk1MGYxMC03YTE4LTRlOGEtOGUyNS04YmY5YzEwYmQ2MDdcIixcclxuICAgICAgICBuZXh0Q291cnNlU3RhcnQob2Zmc2V0ID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7b2Zmc2V0V2VlayhnZXROZXh0RGF5RGF0ZSgnc2F0dXJkYXknKSwgb2Zmc2V0KX1UMDk6MzA6MDBaYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV4dENvdXJzZUVuZCAob2Zmc2V0ID0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7b2Zmc2V0V2VlayhnZXROZXh0RGF5RGF0ZSgnc2F0dXJkYXknKSwgb2Zmc2V0KX1UMTE6MzA6MDBaYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFyZW50SWQ6IFwiNzdlNDc0OGQtMmFlNi00NjU5LTk0NGQtOGJjYWMzYzhkZWFkXCJcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLyBuaWNodCBzbG90IGJhc2llcnRcclxuICAgIFwiT3V0ZG9vci1GaXRuZXNzYW5sYWdlIC0gRnJlaWVzIFRyYWluaW5nXCI6IHtcclxuICAgICAgICBxdWVyeVN0cmluZygpe1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgXCJxdWVyeVwiOiBcIlxcbm11dGF0aW9uIEFkZF9wcm9kdWN0X3RvX2NhcnQoJHByb2R1Y3ROYW1lOiBTdHJpbmchKSB7XFxuICAgIGFkZF9wcm9kdWN0X3RvX2NhcnQoXFxuICAgICAgICBpbnB1dDogeyBwcm9kdWN0X25hbWU6ICRwcm9kdWN0TmFtZSB9XFxuICAgICkge1xcbiAgICAgICAgaWRcXG4gICAgICAgIHJlc2VydmVkX3VudGlsXFxuICAgICAgICBzZWNvbmRzX3VudGlsX3Jlc2VydmF0aW9uX2VuZHNcXG4gICAgICAgIGNyZWF0ZWRfYXRcXG4gICAgICAgIHByb2R1Y3RzIHtcXG4gICAgICAgICAgICBpZFxcbiAgICAgICAgICAgIG5hbWVcXG4gICAgICAgICAgICByZXNvdXJjZSB7XFxuICAgICAgICAgICAgICBfX3R5cGVuYW1lXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YXJpYWJsZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJwcm9kdWN0TmFtZVwiOiB0aGlzLmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpZDogXCJjb3Vyc2VzLmNvdXJzZS4wMjI4OTgyMC04Y2UyLTQ5ODEtOWJiNS1jZmZhNGQ4ZDI5YzZcIlxyXG4gICAgfSxcclxuICAgIFwiR29sZiAtIEZyZWllcyBTcGllbFwiOiB7XHJcbiAgICAgICAgcXVlcnlTdHJpbmcoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBcInF1ZXJ5XCI6IFwiXFxubXV0YXRpb24gQWRkX3Byb2R1Y3RfdG9fY2FydCgkcHJvZHVjdE5hbWU6IFN0cmluZyEpIHtcXG4gICAgYWRkX3Byb2R1Y3RfdG9fY2FydChcXG4gICAgICAgIGlucHV0OiB7IHByb2R1Y3RfbmFtZTogJHByb2R1Y3ROYW1lIH1cXG4gICAgKSB7XFxuICAgICAgICBpZFxcbiAgICAgICAgcmVzZXJ2ZWRfdW50aWxcXG4gICAgICAgIHNlY29uZHNfdW50aWxfcmVzZXJ2YXRpb25fZW5kc1xcbiAgICAgICAgY3JlYXRlZF9hdFxcbiAgICAgICAgcHJvZHVjdHMge1xcbiAgICAgICAgICAgIGlkXFxuICAgICAgICAgICAgbmFtZVxcbiAgICAgICAgICAgIHJlc291cmNlIHtcXG4gICAgICAgICAgICAgIF9fdHlwZW5hbWVcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XCIsXHJcbiAgICAgICAgICAgICAgICBcInZhcmlhYmxlc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9kdWN0TmFtZVwiOiB0aGlzLmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpZDogXCJjb3Vyc2VzLmNvdXJzZS5iZjkzMjUzYS1mYmEwLTRhOGUtYjJlMC03MzllMWYxNTE4N2NcIlxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgY29uc3QgY291cnNlSWRzID0gT2JqZWN0LmVudHJpZXMoY291cnNlcykubWFwKChba2V5LCB2YWxdKSA9PiAoe1t2YWwuaWRdOiBrZXl9KSkucmVkdWNlKChhLGIpID0+ICh7Li4uYSwgLi4uYn0pLCB7fSkgXHJcbiIsImxldCBmc1xyXG5cclxuaWYodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnKXtcclxuICB0cnkge1xyXG4gICAgZnMgPSBhd2FpdCBpbXBvcnQoJ2ZzJylcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS53YXJuKFwiQ291bGQgaW1wb3J0IG1vZHVsZSAnZnMnLiBUaGlzIGVycm9yIGNhbiBvY2N1ciB3aGVuIHVzaW5nIHRoaXMgbW9kdWxlIGluc2lkZSB0aGUgYnJvd3NlciBvciAnZnMnIGlzIG5vdCBpbnN0YWxsZWQuIElmIHlvdSBhcmUgd29ya2luZyBpbnNpZGUgbm9kZSB0cnkgcnVuICducG0gaW5zdGFsbCBmcydcIilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvb2tpZVN0cmluZyhqc29uT2JqZWN0KSB7XHJcbiAgICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoanNvbk9iamVjdClcclxuICAgIFxyXG4gICAgcmV0dXJuIGVudHJpZXMubWFwKChba2V5LCB2YWxdKSA9PiBgJHtrZXl9PSR7dmFsfWApLmpvaW4oXCI7IFwiKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEpzb25GaWxlKHBhdGgpIHtcclxuICAgIGNvbnN0IGZpbGUgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwgJ3V0ZjgnKVxyXG5cclxuICAgIHJldHVybiBKU09OLnBhcnNlKGZpbGUpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dERheURhdGUoZGF5KSB7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgdGFyZ2V0RGF5O1xyXG4gIFxyXG4gICAgLy8gQWxsb3cgYm90aCBudW1iZXJzICgw4oCTNikgYW5kIG5hbWVzIChcIm1vbmRheVwiKVxyXG4gICAgaWYgKHR5cGVvZiBkYXkgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgdGFyZ2V0RGF5ID0gZGF5O1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGF5ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIGNvbnN0IGRheXMgPSBbXCJzdW5kYXlcIiwgXCJtb25kYXlcIiwgXCJ0dWVzZGF5XCIsIFwid2VkbmVzZGF5XCIsIFwidGh1cnNkYXlcIiwgXCJmcmlkYXlcIiwgXCJzYXR1cmRheVwiXTtcclxuICAgICAgdGFyZ2V0RGF5ID0gZGF5cy5pbmRleE9mKGRheS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgaWYgKHRhcmdldERheSA9PT0gLTEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRheSBuYW1lXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEYXkgbXVzdCBiZSBhIG51bWJlciAoMOKAkzYpIG9yIHdlZWtkYXkgbmFtZVwiKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGN1cnJlbnREYXkgPSB0b2RheS5nZXREYXkoKTtcclxuICBcclxuICAgIC8vIENhbGN1bGF0ZSBkYXlzIHVudGlsIG5leHQgb2NjdXJyZW5jZSAobmV2ZXIgdG9kYXkg4oaSIGFsd2F5cyBmdXR1cmUpXHJcbiAgICBjb25zdCBkYXlzVW50aWwgPSAodGFyZ2V0RGF5IC0gY3VycmVudERheSArIDcpICUgNyB8fCA3O1xyXG4gIFxyXG4gICAgY29uc3QgbmV4dERhdGUgPSBuZXcgRGF0ZSh0b2RheSk7XHJcbiAgICBuZXh0RGF0ZS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSArIGRheXNVbnRpbCk7XHJcbiAgXHJcbiAgICAvLyBGb3JtYXQgWVlZWS1NTS1ERFxyXG4gICAgY29uc3QgeWVhciA9IG5leHREYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtb250aCA9IFN0cmluZyhuZXh0RGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgY29uc3QgZGF5TnVtID0gU3RyaW5nKG5leHREYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gIFxyXG4gICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5TnVtfWA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvZmZzZXRXZWVrZGF5KHdlZWtkYXksIG9mZnNldCkge1xyXG4gICAgY29uc3QgZGF5cyA9IFtcInN1bmRheVwiLCBcIm1vbmRheVwiLCBcInR1ZXNkYXlcIiwgXCJ3ZWRuZXNkYXlcIiwgXCJ0aHVyc2RheVwiLCBcImZyaWRheVwiLCBcInNhdHVyZGF5XCJdO1xyXG4gIFxyXG4gICAgLy8gTm9ybWFsaXplIGlucHV0IHRvIGxvd2VyY2FzZVxyXG4gICAgY29uc3QgaW5kZXggPSBkYXlzLmluZGV4T2Yod2Vla2RheS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB3ZWVrZGF5OiBcIiArIHdlZWtkYXkpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gQ2FsY3VsYXRlIG5ldyBpbmRleCB1c2luZyBtb2R1bG8gdGhhdCB3b3JrcyB3aXRoIG5lZ2F0aXZlc1xyXG4gICAgY29uc3QgbmV3SW5kZXggPSAoaW5kZXggKyBvZmZzZXQgJSA3ICsgNykgJSA3O1xyXG4gIFxyXG4gICAgcmV0dXJuIGRheXNbbmV3SW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG9mZnNldFdlZWsoZGF0ZVN0cmluZywgb2Zmc2V0KSB7XHJcbiAgICAvLyBDb252ZXJ0IHRvIERhdGUgb2JqZWN0XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XHJcbiAgXHJcbiAgICAvLyBBZGQgb2Zmc2V0ICogNyBkYXlzXHJcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBvZmZzZXQgKiA3KTtcclxuICBcclxuICAgIC8vIENvbnZlcnQgYmFjayB0byBZWVlZLU1NLUREXHJcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgY29uc3QgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgXHJcbiAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcclxuICB9IiwiXHJcbmV4cG9ydCAqIGZyb20gJy4vY291cnNlcy5qcydcclxuZXhwb3J0ICogZnJvbSAnLi9oZWxwZXIuanMnXHJcbmV4cG9ydCAqIGZyb20gJy4vemhzQ2xpZW50LmpzJ1xyXG4iLCJpbXBvcnQgeyBjb3Vyc2VzIH0gZnJvbSBcIi4vY291cnNlcy5qc1wiXHJcbmltcG9ydCB7IGdlbmVyYXRlQ29va2llU3RyaW5nLCBsb2FkSnNvbkZpbGUgfSBmcm9tIFwiLi9oZWxwZXIuanNcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFpIU0NsaWVudCB7XHJcblxyXG4gICAgc3RhdGljIGZyb21Db29raWVGaWxlKGZpbGVQYXRoKXtcclxuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgWkhTQ2xpZW50KClcclxuICAgICAgICBjb25zdCBmaWxlID0gbG9hZEpzb25GaWxlKGZpbGVQYXRoKVxyXG4gICAgICAgIGNsaWVudC5jb29raWVPYmplY3QgPSBmaWxlXHJcbiAgICAgICAgY2xpZW50LmNvb2tpZVN0cmluZyA9IGdlbmVyYXRlQ29va2llU3RyaW5nKGZpbGUuY29va2llKVxyXG4gICAgICAgIHJldHVybiBjbGllbnRcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbUNvb2tpZU9iamVjdChjb29raWVPYmplY3Qpe1xyXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBaSFNDbGllbnQoKVxyXG4gICAgICAgIGNsaWVudC5jb29raWVPYmplY3QgPSBjb29raWVPYmplY3RcclxuICAgICAgICBjbGllbnQuY29va2llU3RyaW5nID0gZ2VuZXJhdGVDb29raWVTdHJpbmcoY29va2llT2JqZWN0LmNvb2tpZSlcclxuICAgICAgICByZXR1cm4gY2xpZW50XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZyb21Db29raWVTdHJpbmcoY29va2llU3RyaW5nKXtcclxuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgWkhTQ2xpZW50KClcclxuICAgICAgICBjbGllbnQuY29va2llU3RyaW5nID0gY29va2llU3RyaW5nXHJcbiAgICAgICAgcmV0dXJuIGNsaWVudFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29va2llT2JqZWN0ID0gbnVsbFxyXG4gICAgICAgIHRoaXMuY29va2llU3RyaW5nID0gXCJcIlxyXG4gICAgICAgIHRoaXMuY291cnNlcyA9IGNvdXJzZXNcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSAnaHR0cHM6Ly9rdXJzZS56aHMtbXVlbmNoZW4uZGUnXHJcbiAgICAgICAgdGhpcy5hcGlFbmRwb2ludCA9ICcvYXBpL3F1ZXJ5J1xyXG5cclxuICAgICAgICB0aGlzLmRlZmF1bHRIZWFkZXJzID0ge1xyXG4gICAgICAgICAgICBcImFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKlwiLFxyXG4gICAgICAgICAgICBcImFjY2VwdC1sYW5ndWFnZVwiOiBcImRlLURFLGRlO3E9MC45LGVuLVVTO3E9MC44LGVuO3E9MC43XCIsXHJcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcInByaW9yaXR5XCI6IFwidT0xLCBpXCIsXHJcbiAgICAgICAgICAgIFwic2VjLWNoLXVhXCI6IFwiXFxcIkNocm9taXVtXFxcIjt2PVxcXCIxNDJcXFwiLCBcXFwiR29vZ2xlIENocm9tZVxcXCI7dj1cXFwiMTQyXFxcIiwgXFxcIk5vdF9BIEJyYW5kXFxcIjt2PVxcXCI5OVxcXCJcIixcclxuICAgICAgICAgICAgXCJzZWMtY2gtdWEtbW9iaWxlXCI6IFwiPzBcIixcclxuICAgICAgICAgICAgXCJzZWMtY2gtdWEtcGxhdGZvcm1cIjogXCJcXFwiV2luZG93c1xcXCJcIixcclxuICAgICAgICAgICAgXCJzZWMtZmV0Y2gtZGVzdFwiOiBcImVtcHR5XCIsXHJcbiAgICAgICAgICAgIFwic2VjLWZldGNoLW1vZGVcIjogXCJjb3JzXCIsXHJcbiAgICAgICAgICAgIFwic2VjLWZldGNoLXNpdGVcIjogXCJzYW1lLW9yaWdpblwiLFxyXG4gICAgICAgICAgICBcIngtdW5pbm93LWxhbmd1YWdlXCI6IFwiZGVfREVcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEbDvGd0IGRlbiBLdXJzIGluIGRlbiBXYXJlbmtvcmIuIEJlaSB3w7ZjaGVudGxpY2hlbiBLdXJzZW4gd2lyZCB6dW0gbsOkY2hzdG3DtmdsaWNoZW4gV29jaGVudGFnIGdlYnVjaHQuIEbDvHIgenVrw7xuZnRpZ2UgV29jaGVuIHdpcmQgZWluIG9mZnNldCBnZXNldHp0XHJcbiAgICAgXHJcbiAgICAqIEBwYXJhbSB7a2V5b2YgdHlwZW9mIGNvdXJzZXN9IGNvdXJzZU5hbWVcclxuICAgICAqIEBwYXJhbSBvZmZzZXQgR2lidCBkYXMgb2Zmc2V0IGbDvHIgZGllIGpld2VpbGlnZSBXb2NoZSBhbi4gWi5CIG9mZnNldD0yIGJlc2NocmVpYnQgZGVuIHp1a8O8bmZ0aWdlbiBCdWNodW5nc3RhZyBwbHVzIDE0IFRhZ2UuIERlZmF1bHQgMFxyXG4gICAgICovXHJcbiAgICBhc3luYyBib29rKGNvdXJzZU5hbWUsIG9mZnNldCA9IDApe1xyXG4gICAgICAgIGNvbnN0IGNvdXJzZSA9IHRoaXMuY291cnNlc1tjb3Vyc2VOYW1lXSB8fCB0aGlzLmZpbmRDb3Vyc2VOYW1lQnlJZChjb3Vyc2VOYW1lKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5kZWZhdWx0SGVhZGVycyxcclxuICAgICAgICAgICAgICAgICdjb29raWUnOiB0aGlzLmNvb2tpZVN0cmluZyxcclxuICAgICAgICAgICAgICAgICdvcmlnaW4nOiB0aGlzLmJhc2VVcmwsXHJcbiAgICAgICAgICAgICAgICAndXNlci1hZ2VudCc6ICdNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTQyLjAuMC4wIFNhZmFyaS81MzcuMzYnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IGNvdXJzZS5xdWVyeVN0cmluZyhvZmZzZXQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmJhc2VVcmx9JHt0aGlzLmFwaUVuZHBvaW50fWAsIHJlcXVlc3RPcHRpb25zKVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuc3RhdHVzKVxyXG5cclxuICAgICAgICBpZighcmVzdWx0Lm9rKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3VsdCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlQm9keTogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlc3VsdC5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZyhib2R5KVxyXG4gICAgICAgIGlmKCFib2R5LmRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJub3RfYm9va2VkXCIsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VCb2R5OiBib2R5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0YXR1czogXCJib29rZWRcIixcclxuICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3VsdCxcclxuICAgICAgICAgICAgcmVzcG9uc2VCb2R5OiBib2R5XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IEJvb2tpbmdTbG90XHJcbiAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gc3RhcnQgLSBJU08gdGltZXN0YW1wIHdoZW4gdGhlIHNsb3QgYmVnaW5zLlxyXG4gICAgICogQHByb3BlcnR5IHtzdHJpbmd9IGVuZCAtIElTTyB0aW1lc3RhbXAgd2hlbiB0aGUgc2xvdCBlbmRzLlxyXG4gICAgICogQHByb3BlcnR5IHtzdHJpbmd9IGJvb2tpbmdfcGVyaW9kX3N0YXJ0IC0gSVNPIHRpbWVzdGFtcCB3aGVuIGJvb2tpbmcgYmVjb21lcyBhdmFpbGFibGUuXHJcbiAgICAgKiBAcHJvcGVydHkge3N0cmluZ30gYm9va2luZ19wZXJpb2RfZW5kIC0gSVNPIHRpbWVzdGFtcCB3aGVuIGJvb2tpbmcgY2xvc2VzLlxyXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGF2YWlsYWJpbGl0eSAtIE51bWJlciBvZiBmcmVlIHNwb3RzIHJlbWFpbmluZy5cclxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBhbHJlYWR5X2Jvb2tlZCAtIFdoZXRoZXIgdGhlIHVzZXIgaGFzIGFscmVhZHkgYm9va2VkIHRoaXMgc2xvdCAoMCBvciAxKS5cclxuICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBhbHJlYWR5X2luX2NhcnQgLSBXaGV0aGVyIHRoZSBzbG90IGlzIGFscmVhZHkgaW4gdGhlIHVzZXIncyBjYXJ0ICgwIG9yIDEpLlxyXG4gICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGFscmVhZHlfb25fd2FpdGluZ19saXN0IC0gV2hldGhlciB0aGUgdXNlciBpcyBvbiB0aGUgd2FpdGluZyBsaXN0ICgwIG9yIDEpLlxyXG4gICAgICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBCb29raW5nU2xvdHNEYXRhXHJcbiAgICAgKiBAcHJvcGVydHkge0Jvb2tpbmdTbG90W119IGJvb2tpbmdfc2xvdHMgLSBMaXN0IG9mIGJvb2tpbmcgc2xvdHMuXHJcbiAgICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IEJvb2tpbmdTbG90c1Jlc3BvbnNlXHJcbiAgICAgKiBAcHJvcGVydHkge0Jvb2tpbmdTbG90c0RhdGF9IGRhdGEgLSBSZXNwb25zZSB3cmFwcGVyLlxyXG4gICAgICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGcmFndCBlaW5lbiBLdXJzIFNsb3QgYWIsIG9iIGRpZXNlciBaZWl0cmF1bSB2YWxpZGUgaXN0IHVuZCBub2NoIFBsw6R0emUgZnJlaSBzaW5kLiBEZXIgQXVmcnVmIGZ1bmt0aW9uaWVydCBudXIgYmVpIGJlc3RpbW10ZW4gS3Vyc2VuLCB3ZWxjaGUgZWluIFNsb3QgRm9ybWF0IGhhYmVuIHVuZCB3b2NoZW5zcGV6aWZpc2NoIHNpbmRcclxuICAgICAqIEBwYXJhbSB7a2V5b2YgdHlwZW9mIGNvdXJzZXN9IGNvdXJzZU5hbWVcclxuICAgICAqIEBwYXJhbSBvZmZzZXQgR2lidCBkYXMgb2Zmc2V0IGbDvHIgZGllIGpld2VpbGlnZSBXb2NoZSBhbi4gWi5CIG9mZnNldD0yIGJlc2NocmVpYnQgZGVuIHp1a8O8bmZ0aWdlbiBCdWNodW5nc3RhZyBwbHVzIDE0IFRhZ2UuIERlZmF1bHQgMFxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Qm9va2luZ1Nsb3RzUmVzcG9uc2U+fSBcclxuICAgICovXHJcbiAgICBhc3luYyBnZXRDb3Vyc2VTbG90RGV0YWlscyhjb3Vyc2VOYW1lLCBvZmZzZXQpe1xyXG4gICAgICAgIGNvbnN0IGNvdXJzZSA9IHRoaXMuY291cnNlc1tjb3Vyc2VOYW1lXSB8fCB0aGlzLmZpbmRDb3Vyc2VOYW1lQnlJZChjb3Vyc2VOYW1lKVxyXG5cclxuICAgICAgICBjb25zdCBbc3RhcnREYXRlXSA9IGNvdXJzZS5uZXh0Q291cnNlU3RhcnQob2Zmc2V0KS5zcGxpdCgnVCcpXHJcbiAgICAgICAgY29uc3QgW2VuZERhdGVdID0gY291cnNlLm5leHRDb3Vyc2VFbmQob2Zmc2V0KS5zcGxpdCgnVCcpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLmRlZmF1bHRIZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgJ2Nvb2tpZSc6IHRoaXMuY29va2llU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgJ29yaWdpbic6IHRoaXMuYmFzZVVybCxcclxuICAgICAgICAgICAgICAgICd1c2VyLWFnZW50JzogJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xNDIuMC4wLjAgU2FmYXJpLzUzNy4zNidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgXCJxdWVyeVwiOiBcIlxcbnF1ZXJ5IExpc3RfcHJvZHVjdF9zbG90cygkcHJvZHVjdElEOiBVVUlEISwgJGlucHV0OiBCb29raW5nU2xvdHNJbnB1dCEpIHtcXG4gIGJvb2tpbmdfc2xvdHMocHJvZHVjdF9pZDogJHByb2R1Y3RJRCwgaW5wdXQ6ICRpbnB1dCkge1xcbiAgICBzdGFydFxcbiAgICBlbmRcXG4gICAgYm9va2luZ19wZXJpb2Rfc3RhcnRcXG4gICAgYm9va2luZ19wZXJpb2RfZW5kXFxuICAgIGF2YWlsYWJpbGl0eVxcbiAgICBhbHJlYWR5X2Jvb2tlZFxcbiAgICBhbHJlYWR5X2luX2NhcnRcXG4gICAgYWxyZWFkeV9vbl93YWl0aW5nX2xpc3RcXG4gfVxcbn1cIixcclxuICAgICAgICAgICAgICAgIFwidmFyaWFibGVzXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInByb2R1Y3RJRFwiOiBjb3Vyc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbnB1dFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwic3RhcnRcIjogY291cnNlLm5leHRDb3Vyc2VTdGFydChvZmZzZXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBcImVuZFwiOiBjb3Vyc2UubmV4dENvdXJzZUVuZChvZmZzZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnRcIjogYCR7c3RhcnREYXRlfVQwMDowMDowMFpgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVuZFwiOiBgJHtlbmREYXRlfVQyMzo1OTo1OVpgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5iYXNlVXJsfSR7dGhpcy5hcGlFbmRwb2ludH1gLCByZXF1ZXN0T3B0aW9ucylcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3VsdC5qc29uKClcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICovXHJcbiAgICAvLyBhc3luYyBjb21wbGV0ZUNoZWNrb3V0KCl7XHJcbiAgICAvLyAgICAgLyoqXHJcbiAgICAvLyAgICAgICogcGkgaW50ZW50IGZldGNoZW5cclxuICAgIC8vICAgICAgKiBHRVQgcmVxdWVzdCBtaXQgcGkgaW50ZW50IGbDvHIgdXNlcm5hbWUgdW5kIGRhdGVuXHJcbiAgICAvLyAgICAgICogXHJcbiAgICAvLyAgICAgICovXHJcbiAgICAvLyB9XHJcblxyXG4gICAgZmluZENvdXJzZU5hbWVCeUlkKGlkKXtcclxuICAgICAgICBmb3IoY29uc3QgW2tleSx2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuY291cnNlcykpe1xyXG4gICAgICAgICAgICBpZih2YWwuaWQgPT0gaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5XHJcbiAgICAgICAgfVxyXG4gICAgfSAgIFxyXG5cclxuXHJcblxyXG59XHJcblxyXG4iLCIvLyBzcmMvY29udGVudC5qc1xyXG5cclxuaW1wb3J0IHsgWkhTQ2xpZW50IH0gZnJvbSAnemhzLWNsaWVudC1qcyc7XHJcbi8vIG9yIHdoYXRldmVyIHRoZSBtb2R1bGUncyBkZWZhdWx0L25hbWVkIGV4cG9ydCBpcztcclxuLy8gaWYgaXQncyBDb21tb25KUyB5b3UgbWlnaHQgbmVlZDpcclxuLy8gaW1wb3J0ICogYXMgWmhzQ2xpZW50IGZyb20gJ3pocy1jbGllbnQtanMnO1xyXG5jb25zb2xlLmxvZygnWkhTIEJvb2tpbmcgY29udGVudCBzY3JpcHQgbG9hZGVkJyk7XHJcbmNvbnNvbGUubG9nKGRvY3VtZW50LmNvb2tpZSk7XHJcbmluamVjdENvdXJzZUNhcmRTdHlsZXMoKVxyXG5cclxuXHJcbmNvbnN0IGNsaWVudCA9IFpIU0NsaWVudC5mcm9tQ29va2llU3RyaW5nKGRvY3VtZW50LmNvb2tpZSlcclxuXHJcbmNvbnN0IHBhcmVudElkcyA9IE9iamVjdC5lbnRyaWVzKGNsaWVudC5jb3Vyc2VzKS5tYXAoKFtrZXksIHZhbF0pID0+ICh7W3ZhbC5wYXJlbnRJZF06IGtleX0pKS5yZWR1Y2UoKGEsYikgPT4gKHsuLi5hLCAuLi5ifSksIHt9KVxyXG5cclxuXHJcbmNvbnN0IHBhcmVudEhpdCA9IE9iamVjdC5rZXlzKHBhcmVudElkcykuZmluZChhID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKGEpKVxyXG5cclxubGV0IGdsb2JhbE9mZnNldCA9IDBcclxuXHJcbmlmKHBhcmVudEhpdCl7XHJcbiAgICBjb25zdCBhdmFpbGFibGVDb3Vyc2VzID0gY291cnNlc0J5UGFyZW50SWQocGFyZW50SGl0KVxyXG4gICAgY29uc29sZS5sb2coXCJLdXJzZSBnZWZ1bmRlblwiLCBhdmFpbGFibGVDb3Vyc2VzKVxyXG5cclxuXHJcbiAgICBcclxuICAgIHJlbmRlck5leHRXZWVrQnV0dG9uKCgpID0+IGl0ZXJhdGVDb3Vyc2VzKGF2YWlsYWJsZUNvdXJzZXMpKVxyXG4gICAgYXdhaXQgaXRlcmF0ZUNvdXJzZXMoYXZhaWxhYmxlQ291cnNlcylcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZUdsb2JhbE9mZnNldCgpe1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGguZmxvb3IoKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJteUV4dC1jb3Vyc2UtY2FyZFwiKS5sZW5ndGggLyAzKSApLCAwKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpdGVyYXRlQ291cnNlcyhhdmFpbGFibGVDb3Vyc2VzKSB7XHJcbiAgICBjb25zdCBvZmZzZXQgPSBjYWxjdWxhdGVHbG9iYWxPZmZzZXQoKVxyXG4gICAgY29uc29sZS5sb2cob2Zmc2V0KVxyXG4gICAgaWYoIWF2YWlsYWJsZUNvdXJzZXMpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYXZhaWxhYmxlQ291cnNlcywgXCJub3QgaXRlcmFibGVcIilcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGZvcihjb25zdCBjb3Vyc2Ugb2YgYXZhaWxhYmxlQ291cnNlcyl7XHJcbiAgICAgICAgYXdhaXQgdmFsaWRhdGVDb3Vyc2UoY291cnNlLCBvZmZzZXQpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiB2YWxpZGF0ZUNvdXJzZShjb3Vyc2UsIG9mZnNldCA9IDApe1xyXG4gICAgICAgIGNvbnN0IG5leHRDb3Vyc2UgPSBjbGllbnQuY291cnNlc1tjb3Vyc2VdLm5leHRDb3Vyc2VTdGFydChvZmZzZXQpXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LmdldENvdXJzZVNsb3REZXRhaWxzKGNvdXJzZSwgb2Zmc2V0KVxyXG4gICAgICAgIGNvbnN0IHNsb3RBdmFpbGFibGUgPSByZXMuZGF0YS5ib29raW5nX3Nsb3RzLmxlbmd0aCA+IDBcclxuXHJcblxyXG4gICAgICAgIHJlbmRlckNvdXJzZUNhcmQoe1xyXG4gICAgICAgICAgICBjb3Vyc2UsXHJcbiAgICAgICAgICAgIG5leHRDb3Vyc2UsXHJcbiAgICAgICAgICAgIHJlcyxcclxuICAgICAgICAgICAgc2xvdEF2YWlsYWJsZSxcclxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xpZW50LmJvb2soY291cnNlLCBvZmZzZXQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY291cnNlc0J5UGFyZW50SWQocGFyZW50SWQpe1xyXG4gICAgbGV0IGNvdXJzZXMgPSBbXVxyXG4gICAgZm9yKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMoY2xpZW50LmNvdXJzZXMpKXtcclxuICAgICAgICBpZih2YWwucGFyZW50SWQgPT0gcGFyZW50SWQpXHJcbiAgICAgICAgICAgIGNvdXJzZXMucHVzaChrZXkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY291cnNlc1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJOZXh0V2Vla0J1dHRvbihvbkNsaWNrKSB7XHJcbiAgICAvL2luamVjdENvdXJzZUNhcmRTdHlsZXMoKTtcclxuICAgIGdsb2JhbE9mZnNldCsrXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbmRlci1uZXh0LXdlZWstYnRuLWlkXCIpPy5yZW1vdmUoKVxyXG4gICAgLy8gV3JhcHBlciB0aGF0IG1hdGNoZXMgY2FyZCB3aWR0aCAoNDIwcHgpXHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gXCJteUV4dC13ZWVrLWJ0bi13cmFwcGVyXCI7XHJcbiAgICB3cmFwcGVyLmlkID0gXCJyZW5kZXItbmV4dC13ZWVrLWJ0bi1pZFwiXHJcbiAgXHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuLmNsYXNzTmFtZSA9IFwibXlFeHQtd2Vlay1idG5cIjtcclxuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiTsOkY2hzdGUgV29jaGUgbGFkZW5cIjtcclxuICBcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIG9uQ2xpY2sgPT09IFwiZnVuY3Rpb25cIikgb25DbGljaygpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gICAgYXBwZW5kVW5kZXJQcm9kdWN0SW5mbyh3cmFwcGVyKVxyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIGluamVjdENvdXJzZUNhcmRTdHlsZXMoKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUV4dC1jb3Vyc2Utc3R5bGVzXCIpKSByZXR1cm47XHJcbiAgXHJcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgIHN0eWxlLmlkID0gXCJteUV4dC1jb3Vyc2Utc3R5bGVzXCI7XHJcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcclxuICAgICAgLm15RXh0LWNvdXJzZS1jYXJkIHtcclxuICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXgtd2lkdGg6IDQyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHggMThweDtcclxuICAgICAgICBtYXJnaW46IDEycHggYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMThweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5teUV4dC1jb3Vyc2UtY2FyZDo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBpbnNldDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjM2I4MmY2LCAjMjJjNTVlKTtcclxuICAgICAgICBvcGFjaXR5OiAwLjA1O1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5teUV4dC1jb3Vyc2UtaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBnYXA6IDEycHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLm15RXh0LWNvdXJzZS10aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMxMTE4Mjc7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLm15RXh0LWNvdXJzZS1zdWIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMWYyOTM3O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5teUV4dC1jb3Vyc2Utc2xvdHMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlY2ZkZjU7XHJcbiAgICAgICAgY29sb3I6ICMxNjY1MzQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5teUV4dC1jb3Vyc2Utc2xvdHMtLWxvdyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZlZjNjNztcclxuICAgICAgICBjb2xvcjogIzkyNDAwZTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubXlFeHQtY291cnNlLXNsb3RzLS1ub25lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmVlMmUyO1xyXG4gICAgICAgIGNvbG9yOiAjYjkxYzFjO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5teUV4dC1jb3Vyc2UtZm9vdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubXlFeHQtY291cnNlLWJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjM2I4MmY2LCAjMjU2M2ViKTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogNnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgzNywgOTksIDIzNSwgMC4zNSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDhzIGVhc2UsIGJveC1zaGFkb3cgMC4wOHMgZWFzZSwgZmlsdGVyIDAuMDhzIGVhc2U7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLm15RXh0LWNvdXJzZS1idXR0b246aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuNDUpO1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjA1KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubXlFeHQtY291cnNlLWJ1dHRvbjphY3RpdmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCA4cHggcmdiYSgzNywgOTksIDIzNSwgMC4zKTtcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45Nyk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLm15RXh0LWNvdXJzZS1idXR0b24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5teUV4dC1jb3Vyc2Utbm90LWF2YWlsYWJsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmM2Y0ZjY7XHJcbiAgICAgICAgY29sb3I6ICM2YjcyODA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICBzdHlsZS50ZXh0Q29udGVudCArPSBgXHJcbiAgICAubXlFeHQtd2Vlay1idG4td3JhcHBlciB7XHJcbiAgICAgIG1heC13aWR0aDogNDIwcHg7XHJcbiAgICAgIG1hcmdpbjogMjBweCBhdXRvIDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15RXh0LXdlZWstYnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEwYjk4MSwgIzA1OTY2OSk7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4zNSk7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA4cyBlYXNlLCBib3gtc2hhZG93IDAuMDhzIGVhc2UsIGZpbHRlciAwLjA4cyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5teUV4dC13ZWVrLWJ0bjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMDQpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjQ1KTtcclxuICAgIH1cclxuXHJcbiAgICAubXlFeHQtd2Vlay1idG46YWN0aXZlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45Nyk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDhweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4zKTtcclxuICAgIH1cclxuYDtcclxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gRXhhbXBsZSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgJiBhcHBlbmRzIHRoZSBjYXJkXHJcbmZ1bmN0aW9uIHJlbmRlckNvdXJzZUNhcmQoeyBjb3Vyc2UsIG5leHRDb3Vyc2UsIHJlcywgc2xvdEF2YWlsYWJsZSwgb25DbGljayB9KSB7XHJcbiAgICAvL2luamVjdENvdXJzZUNhcmRTdHlsZXMoKTtcclxuICBcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJteUV4dC1jb3Vyc2UtY2FyZFwiO1xyXG4gIFxyXG4gICAgLy8gSEVBREVSXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9IFwibXlFeHQtY291cnNlLWhlYWRlclwiO1xyXG4gIFxyXG4gICAgY29uc3QgdGl0bGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwibXlFeHQtY291cnNlLXRpdGxlXCI7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGNvdXJzZTtcclxuICBcclxuICAgIGNvbnN0IHN1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzdWIuY2xhc3NOYW1lID0gXCJteUV4dC1jb3Vyc2Utc3ViXCI7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUobmV4dENvdXJzZSlcclxuICAgIHN1Yi50ZXh0Q29udGVudCA9IG5leHRDb3Vyc2UgPyBgJHtkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpfSAke2RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9YCA6IFwi4oCTXCI7XHJcbiAgXHJcbiAgICB0aXRsZVdyYXBwZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgdGl0bGVXcmFwcGVyLmFwcGVuZENoaWxkKHN1Yik7XHJcbiAgXHJcbiAgICBjb25zdCBzbG90c0JhZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHNsb3RzID0gc2xvdEF2YWlsYWJsZSA/IHJlcy5kYXRhLmJvb2tpbmdfc2xvdHNbMF0uYXZhaWxhYmlsaXR5IDogMDtcclxuICAgIHNsb3RzQmFkZ2UuY2xhc3NOYW1lID0gXCJteUV4dC1jb3Vyc2Utc2xvdHNcIjtcclxuICBcclxuICAgIGlmICghc2xvdEF2YWlsYWJsZSB8fCBzbG90cyA9PT0gMCkge1xyXG4gICAgICBzbG90c0JhZGdlLmNsYXNzTGlzdC5hZGQoXCJteUV4dC1jb3Vyc2Utc2xvdHMtLW5vbmVcIik7XHJcbiAgICAgIHNsb3RzQmFkZ2UudGV4dENvbnRlbnQgPSBcIktlaW5lIFNsb3RzIHZlcmbDvGdiYXJcIjtcclxuICAgIH0gZWxzZSBpZiAoc2xvdHMgPD0gMykge1xyXG4gICAgICBzbG90c0JhZGdlLmNsYXNzTGlzdC5hZGQoXCJteUV4dC1jb3Vyc2Utc2xvdHMtLWxvd1wiKTtcclxuICAgICAgc2xvdHNCYWRnZS50ZXh0Q29udGVudCA9IGAke3Nsb3RzfSBTbG90cyDigJMgZmFzdCB2b2xsYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNsb3RzQmFkZ2UudGV4dENvbnRlbnQgPSBgJHtzbG90c30gU2xvdHMgdmVyZsO8Z2JhcmA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVXcmFwcGVyKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzbG90c0JhZGdlKTtcclxuICBcclxuICAgIC8vIEZPT1RFUlxyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvb3Rlci5jbGFzc05hbWUgPSBcIm15RXh0LWNvdXJzZS1mb290ZXJcIjtcclxuICBcclxuICAgIGlmIChzbG90QXZhaWxhYmxlICYmIHNsb3RzID4gMCkge1xyXG4gICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBidG4uY2xhc3NOYW1lID0gXCJteUV4dC1jb3Vyc2UtYnV0dG9uXCI7XHJcbiAgICAgIGJ0bi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJteUV4dC1jb3Vyc2UtYnV0dG9uLWljb25cIj7wn5uSPC9zcGFuPjxzcGFuPkluIFdhcmVua29yYiBsZWdlbjwvc3Bhbj5gO1xyXG4gIFxyXG4gICAgICAvLyBhdHRhY2ggeW91ciBjbGljayBoYW5kbGVyIGhlcmVcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gVE9ETzogYWRkIGJvb2tpbmcgbG9naWNcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkluIFdhcmVua29yYiBsZWdlblwiLCBjb3Vyc2UpO1xyXG4gICAgICAgIGlmKHNsb3RBdmFpbGFibGUgJiYgb25DbGljaykgb25DbGljaygpXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG5vdEF2YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgbm90QXZhaWwuY2xhc3NOYW1lID0gXCJteUV4dC1jb3Vyc2Utbm90LWF2YWlsYWJsZVwiO1xyXG4gICAgICBub3RBdmFpbC50ZXh0Q29udGVudCA9IFwiTmljaHQgYnVjaGJhclwiO1xyXG4gICAgICBmb290ZXIuYXBwZW5kQ2hpbGQobm90QXZhaWwpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuICBcclxuICAgIC8vIEFwcGVuZCBzb21ld2hlcmUgc2Vuc2libGUg4oCTIGFkanVzdCBhcyBuZWVkZWRcclxuICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIGFwcGVuZFVuZGVyUHJvZHVjdEluZm8oY29udGFpbmVyKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXBwZW5kVW5kZXJQcm9kdWN0SW5mbyhlbCkge1xyXG4gICAgLy8gRmluZCB0aGUgdGFyZ2V0IGJsb2NrXHJcbiAgICBjb25zdCB0YXJnZXQgPVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZXN0aWQ9XCJwcm9kdWN0LW9mZmVyLWluZm9cIl0uZmxleC5mbGV4LWNvbC5nYXAteS00JykgfHxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVzdGlkPVwicHJvZHVjdC1vZmZlci1pbmZvXCJdJyk7XHJcbiAgXHJcbiAgICAvLyBJZiBmb3VuZCDihpIgaW5zZXJ0IGFmdGVyXHJcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5wYXJlbnROb2RlKSB7XHJcbiAgICAgIGlmICh0YXJnZXQubmV4dFNpYmxpbmcpIHtcclxuICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWwsIHRhcmdldC5uZXh0U2libGluZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBGYWxsYmFjayDihpIgdG9wIG9mIGJvZHlcclxuICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGVsKTtcclxuICAgIH1cclxuICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiO1xudmFyIHdlYnBhY2tRdWV1ZXMgPSBoYXNTeW1ib2wgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSBoYXNTeW1ib2wgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSBoYXNTeW1ib2wgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xuXG52YXIgcmVzb2x2ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlICYmIHF1ZXVlLmQgPCAxKSB7XG5cdFx0cXVldWUuZCA9IDE7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIHdyYXBEZXBzID0gKGRlcHMpID0+IChkZXBzLm1hcCgoZGVwKSA9PiB7XG5cdGlmKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKSB7XG5cblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAtMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHR2YXIgaGFuZGxlID0gKGRlcHMpID0+IHtcblx0XHRjdXJyZW50RGVwcyA9IHdyYXBEZXBzKGRlcHMpO1xuXHRcdHZhciBmbjtcblx0XHR2YXIgZ2V0UmVzdWx0ID0gKCkgPT4gKGN1cnJlbnREZXBzLm1hcCgoZCkgPT4ge1xuXG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fVxuXHR2YXIgZG9uZSA9IChlcnIpID0+ICgoZXJyID8gcmVqZWN0KHByb21pc2Vbd2VicGFja0Vycm9yXSA9IGVycikgOiBvdXRlclJlc29sdmUoZXhwb3J0cykpLCByZXNvbHZlUXVldWUocXVldWUpKVxuXHRib2R5KGhhbmRsZSwgZG9uZSk7XG5cdHF1ZXVlICYmIHF1ZXVlLmQgPCAwICYmIChxdWV1ZS5kID0gMCk7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgKHR5cGVvZiBjdXJyZW50ID09ICdvYmplY3QnIHx8IHR5cGVvZiBjdXJyZW50ID09ICdmdW5jdGlvbicpICYmICF+bGVhZlByb3RvdHlwZXMuaW5kZXhPZihjdXJyZW50KTsgY3VycmVudCA9IGdldFByb3RvKGN1cnJlbnQpKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkuZm9yRWFjaCgoa2V5KSA9PiAoZGVmW2tleV0gPSAoKSA9PiAodmFsdWVba2V5XSkpKTtcblx0fVxuXHRkZWZbJ2RlZmF1bHQnXSA9ICgpID0+ICh2YWx1ZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChucywgZGVmKTtcblx0cmV0dXJuIG5zO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuYnVuZGxlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInpocy1ib29raW5nLWV4dGVuc2lvbjpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImNvbnRlbnRcIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt6aHNfYm9va2luZ19leHRlbnNpb25cIl0gPSBzZWxmW1wid2VicGFja0NodW5remhzX2Jvb2tpbmdfZXh0ZW5zaW9uXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY29udGVudC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=