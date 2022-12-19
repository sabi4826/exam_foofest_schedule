"use strict";

//starting the page up
window.addEventListener("DOMContentLoaded", init);

//==================all my variables==================

let scheduleList;
let vanaheimDisplay = "Vanaheim";

const scheduleURL = "https://exam2022-reaction.fly.dev/schedule";

//==================starting off the page==================
function init() {
  loadSchedule();
}
//==================loading the schedule data==================
async function loadSchedule() {
  const response = await fetch(scheduleURL);
  scheduleList = await response.json();
  // console.log(scheduleList);
  displayList(scheduleList, vanaheimDisplay);
}
//==================display  the artist list on a table==================
function displayList(scheduleList, stageName) {
  // console.log(stageName);
  // let counter = -1;
  document.querySelector("#scheduleList").innerHTML = "";
  // object.entries (returns an array of a given objects own enumerable string-keyed property key-value pairs)
  for (const stages of Object.entries(scheduleList)) {
    // counter++;
    // console.log(stages);
    displaySchedule(stages, stageName);
  }
}
//==================display the days on the schedule list==================

function displaySchedule(stages, stageName) {
  if (stages[0] !== stageName) {
    return;
  }
  // console.log(stages[1].mon);

  const mon = stages[1].mon;
  const tue = stages[1].tue;
  const wed = stages[1].wed;
  const thu = stages[1].thu;
  const fri = stages[1].fri;
  const sat = stages[1].sat;
  const sun = stages[1].sun;
  // console.log(stages);
  const days = [mon, tue, wed, thu, fri, sat, sun];

  const myDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  // using the for loop to get the one day every time
  for (let i = 0; i < stages[1].mon.length; i++) {
    const clone = document.querySelector("template#scheduleTemplate").content.cloneNode(true);
    myDays.forEach((day) => {
      clone.querySelector(`[data-field="monStart"]`).textContent = stages[1][day][i].start;
      clone.querySelector(`[data-field="monEnd"]`).textContent = stages[1][day][i].end;
      clone.querySelector(`[data-field="${day}Acts"]`).textContent = stages[1][day][i].act;
    });

    const parent = document.querySelector("#scheduleList");

    parent.appendChild(clone);
  }
}
