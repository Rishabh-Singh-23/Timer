var center = document.querySelector(".center");
var first = document.querySelector(".first");
var second = document.querySelector(".second");
var days = document.querySelector("#days");
var hours = document.querySelector("#Hours");
var minutes = document.querySelector("#Minutes");
var Seconds = document.querySelector("#Second");

var targetTime = new Date(2026, 0);
setInterval(() => {
  let currentTime = new Date();
  let diff = targetTime - currentTime;
  if (diff > 0) {
    let num = parseInt(diff / (1000 * 60 * 60 * 24));
    days.innerHTML = `${num < 10 ? '0' + num : num}`;

    num = parseInt(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    hours.innerHTML = `${num < 10 ? '0' + num : num}`;

    num = parseInt(diff % (1000 * 60 * 60) / (1000 * 60));
    minutes.innerHTML = `${num < 10 ?'0' + num : num}`;

    num = parseInt(diff % (1000 * 60) / 1000);
    Seconds.innerHTML = `${num < 10 ? '0' + num : num}`;
  } 
  else {
    center.removeChild(second);
    first.innerHTML = "Happy New Year 2026";
  }
}, 1000);
