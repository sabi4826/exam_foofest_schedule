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
// const scheduleURL = "http://localhost:8080/schedule";
// const bandsURL = "http://localhost:8080/bands";

//==================starting off the page==================
function init() {
  loadSchedule();
}

function registerCat() {
  document.querySelectorAll("[data-action='filter']").forEach((button) => button.addEventListener("click", selectFilter));
}

async function loadSchedule() {
  //   const response = await fetch(scheduleURL);
  //   const scheduleData = await response.json();
  //   displayList();

  fetch("http://localhost:8080/schedule")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  displayList();
}
//==================display the list==================
function displayList() {
  document.querySelector("#scheduleList").innerHTML = "";
  settings.displayedArray.forEach(displaySchedule);
  console.log("hi", displaySchedule);
}
//==================display the stages(?) on the list==================

function displaySchedule(stages) {
  const clone = document.querySelector("#scheduleList").textContent.cloneNode(true);

  clone.querySelector('[data-field="Midgard"]').textContent = stages.Midgard;
  clone.querySelector('[data-field="Jotunheim"]').textContent = stages.Jotunheim;
  clone.querySelector('[data-field="Vanaheim"]').textContent = stages.Vanaheim;
}
//==================filtering stages==================

function selectFilter(event) {
  settings.filterValue = event.target.dataset.filter;
  settings.filterType = event.target.dataset.type;

  console.log(settings.filterValue);
}
