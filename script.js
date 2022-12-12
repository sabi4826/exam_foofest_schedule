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
  for (const newArr of Object.entries(scheduleList)) {
    // console.log(newArr);
    displaySchedule(newArr);
  }
  // console.log(newArr);

  // settings.displayedArray.forEach(displaySchedule);
  // console.log("hi", displaySchedule);
}
//==================display the stages(?) on the list==================

function displaySchedule(newArr) {
  // const days = Object.entries(newArr);
  console.log(newArr);
  const mon = newArr[1].mon;
  // console.table(mon);
  // console.log(stages[1].mon);
  mon.forEach((act) => {
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);

    clone.querySelector('[data-field="Midgard"]').textContent = act.act;
    // clone.querySelector('[data-field="Jotunheim"]').textContent = stages.Jotunheim;
    // clone.querySelector('[data-field="Vanaheim"]').textContent = stages.Vanaheim;

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
