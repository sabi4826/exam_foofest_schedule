"use strict";

//starting the page up
document.addEventListener("DOMContentLoaded", init);

//==================all my variables==================
let allStages = [];
let allDays = [];

// const scheduleURL = "http://localhost:8080/schedule";
// const bandsURL = "http://localhost:8080/bands";

//==================starting off the page==================
function init() {
  loadSchedule();
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
function displayList() {
  document.querySelector("#scheduleList").innerHTML = "";
}
