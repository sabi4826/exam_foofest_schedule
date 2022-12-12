"use strict";

//starting the page up
window.addEventListener("DOMContentLoaded", init);

//==================all my variables==================
let allStages = [];
let allDays = [];

const settings = {
  filter: "all",
  sortDir: "asc",
  displayedArray: [],
  filterValue: "",
};
const scheduleURL = "http://localhost:8080/schedule";

//==================starting off the page==================
function init() {
  loadSchedule();
}

function registerCat() {
  document.querySelectorAll("[data-action='filter']").forEach((button) => button.addEventListener("click", selectFilter));
}

async function loadSchedule() {
  // fetch("http://localhost:8080/schedule")
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));
  // displayList();
  const response = await fetch(scheduleURL);
  const scheduleList = await response.json();
  // console.log(scheduleList.Midgard);
  displayList(scheduleList);
}
//==================display the list==================
function displayList(scheduleList) {
  // console.log(scheduleList);
  document.querySelector("#scheduleList").innerHTML = "";
  // console.table(scheduleList);
  // const newArr = Object.entries(scheduleList);
  // newArr.forEach(displaySchedule);
  for (const stages of Object.entries(scheduleList)) {
    // console.log(newArr);
    displaySchedule(stages);
  }
  // console.log(newArr);

  // settings.displayedArray.forEach(displaySchedule);
  // console.log("hi", displaySchedule);
}
//==================display the stages(?) on the list==================

function displaySchedule(stages) {
  const mon = stages[1].mon;
  const tue = stages[1].tue;
  const wed = stages[1].wed;
  const thu = stages[1].thu;
  const fri = stages[1].fri;
  const sat = stages[1].sat;
  const sun = stages[1].sun;

  mon.forEach((act) => {
    // console.table(act);
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Midgard"]').textContent = `Monday ${act.act}`;
    clone.querySelector('[data-field="Jotunheim"]').textContent = act.start;
    clone.querySelector('[data-field="Vanaheim"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  tue.forEach((act) => {
    // console.table(act);
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Midgard"]').textContent = `Tuesday ${act.act}`;
    clone.querySelector('[data-field="Jotunheim"]').textContent = act.start;
    clone.querySelector('[data-field="Vanaheim"]').textContent = act.end;

    // clone.querySelector('[data-field="Jotunheim"]').textContent = stages.Jotunheim;
    // clone.querySelector('[data-field="Vanaheim"]').textContent = stages.Vanaheim;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  wed.forEach((act) => {
    // console.table(act);
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Midgard"]').textContent = `Wednesday ${act.act}`;
    clone.querySelector('[data-field="Jotunheim"]').textContent = act.start;
    clone.querySelector('[data-field="Vanaheim"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  thu.forEach((act) => {
    // console.table(act);
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Midgard"]').textContent = `Thursday ${act.act}`;
    clone.querySelector('[data-field="Jotunheim"]').textContent = act.start;
    clone.querySelector('[data-field="Vanaheim"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  fri.forEach((act) => {
    // console.table(act);
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Midgard"]').textContent = `Friday ${act.act}`;
    clone.querySelector('[data-field="Jotunheim"]').textContent = act.start;
    clone.querySelector('[data-field="Vanaheim"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  sat.forEach((act) => {
    // console.table(act);
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Midgard"]').textContent = `Saturday ${act.act}`;
    clone.querySelector('[data-field="Jotunheim"]').textContent = act.start;
    clone.querySelector('[data-field="Vanaheim"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
  sun.forEach((act) => {
    // console.table(act);
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Midgard"]').textContent = `Sunday ${act.act}`;
    clone.querySelector('[data-field="Jotunheim"]').textContent = act.start;
    clone.querySelector('[data-field="Vanaheim"]').textContent = act.end;

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  });
}
//==================filtering stages==================

function selectFilter(event) {
  settings.filterValue = event.target.dataset.filter;
  settings.filterType = event.target.dataset.type;

  console.log(settings.filterValue);
}
