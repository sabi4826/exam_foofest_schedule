"use strict";

//starting the page up
window.addEventListener("DOMContentLoaded", init);

//==================all my variables==================

let allStages = [];
let allDays = [];
let scheduleList;
let midgardDisplay = "Midgard";
let vanaheimDisplay = "Vanaheim";
let jotunheimDisplay = "Jotunheim";

const settings = {
  filter: "all",
  sortDir: "asc",
  displayedArray: [],
  filterValue: "",
};
const scheduleURL = "http://localhost:8080/schedule";

//==================starting off the page==================
function init() {
  registerCat();
  loadSchedule();
}

function registerCat() {
  // document.querySelectorAll("[data-action='filter']").forEach((button) => button.addEventListener("click", selectFilter));
}

async function loadSchedule() {
  const response = await fetch(scheduleURL);
  scheduleList = await response.json();
  // console.log(scheduleList);
  displayList(scheduleList, midgardDisplay, vanaheimDisplay, jotunheimDisplay);
}
//==================display the list==================
function displayList(scheduleList, stageName) {
  let counter = -1;
  document.querySelector("#scheduleList").innerHTML = "";
  for (const stages of Object.entries(scheduleList)) {
    counter++;
    // console.log(stages);
    displaySchedule(stages, counter, stageName);
  }
  if (stageName === "Midgard") {
    console.log("midgard here");
    return midgardDisplay;
  } else if (stageName === "Vanaheim") {
    console.log("vana here");
    return vanaheimDisplay;
  } else if (stageName === "Jotunheim") {
    console.log("jo here");
    return jotunheimDisplay;
  }
}
//==================display the stages(?) on the list==================

function displaySchedule(stages, counter, stageName) {
  if (stages[0] !== stageName) {
    return;
  }
  console.log(stages[1].mon);

  const mon = stages[1].mon;
  const tue = stages[1].tue;
  const wed = stages[1].wed;
  const thu = stages[1].thu;
  const fri = stages[1].fri;
  const sat = stages[1].sat;
  const sun = stages[1].sun;

  mon.forEach((act) => {
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);
    clone.querySelector('[data-field="Start"]').textContent = act.start;
    clone.querySelector('[data-field="End"]').textContent = act.end;
    clone.querySelector('[data-field="Acts"]').textContent = `${act.act}`;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  tue.forEach((act) => {
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Acts"]').textContent = `${act.act}`;
    clone.querySelector('[data-field="Start"]').textContent = act.start;
    clone.querySelector('[data-field="End"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  wed.forEach((act) => {
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Acts"]').textContent = `${act.act}`;
    clone.querySelector('[data-field="Start"]').textContent = act.start;
    clone.querySelector('[data-field="End"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  thu.forEach((act) => {
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Acts"]').textContent = `${act.act}`;
    clone.querySelector('[data-field="Start"]').textContent = act.start;
    clone.querySelector('[data-field="End"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  fri.forEach((act) => {
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Acts"]').textContent = `${act.act}`;
    clone.querySelector('[data-field="Start"]').textContent = act.start;
    clone.querySelector('[data-field="End"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  sat.forEach((act) => {
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Acts"]').textContent = `${act.act}`;
    clone.querySelector('[data-field="Start"]').textContent = act.start;
    clone.querySelector('[data-field="End"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  sun.forEach((act) => {
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Acts"]').textContent = `${act.act}`;
    clone.querySelector('[data-field="Start"]').textContent = act.start;
    clone.querySelector('[data-field="End"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
}
//==================filtering stages==================

// function selectFilter(event) {
//   settings.filterValue = event.target.dataset.filter;
//   settings.filterType = event.target.dataset.type;
//   console.log(settings.filterValue);
//   setFilter(event);
//   settings.displayedArray = setFilter(event);
//   displayList();
// }
// function setFilter(stageName, event) {
//   if (stageName === "Midgard") {
//     console.log("midgard here");
//     return midgardDisplay;
//   } else if (stageName === "Vanaheim") {
//     console.log("vana here");
//     return vanaheimDisplay;
//   } else if (stageName === "Jotunheim") {
//     console.log("jo here");
//     return jotunheimDisplay;
//   }
//   // console.log(stageName);
// }
