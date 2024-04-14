"use strict";
let setDay = function (dayNumber) {
  if (dayNumber === 0) {
    return "SUN";
  } else if (dayNumber === 1) {
    return "MON";
  } else if (dayNumber === 2) {
    return "TUE";
  } else if (dayNumber === 3) {
    return "WED";
  } else if (dayNumber === 4) {
    return "THU";
  } else if (dayNumber === 5) {
    return "FRI";
  } else if (dayNumber === 6) {
    return "SAT";
  }
};

let setHour = function (hourNumber) {
  let amPm = "AM";
  if (hourNumber > 12 && hourNumber <= 24) {
    hourNumber = hourNumber - 12;
    if (hourNumber < 10) {
      hourNumber = "0" + hourNumber;
    }
    amPm = "PM";
  }
  if (hourNumber < 10) {
    hourNumber = "0" + hourNumber;
  }
  return [hourNumber, amPm];
};

let calculateCurrentTime = function () {
  let date = new Date();
  let dayNumber = date.getDay();
  let hourNumber = date.getHours();

  let day = document.getElementById("day");
  day.textContent = setDay(dayNumber);

  let hour = document.getElementById("hour");
  let [number] = setHour(hourNumber);
  hour.textContent = number;

  let bar1 = document.getElementById("bar1");
  bar1.textContent = ":";
  let bar2 = document.getElementById("bar2");
  bar2.textContent = ":";

  let ampm = document.getElementById("ampm");
  let [, ifam] = setHour(hourNumber);
  ampm.textContent = ifam;

  let minutes = document.getElementById("minute");
  if (date.getMinutes() < 10) {
    minutes.textContent = "0" + date.getMinutes();
  } else {
    minutes.textContent = date.getMinutes();
  }
  setTimeout(calculateCurrentTime, 200);
};
calculateCurrentTime();

window.addEventListener("load", calculateCurrentTime);
