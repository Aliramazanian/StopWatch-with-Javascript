"use strict";
let seconds = 0;
let tens = 0;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let buttonStart = document.getElementById("button-start");
let buttonStop = document.getElementById("button-stop");
let buttonReset = document.getElementById("button-reset");
let interval; // to store timer values
// this function will run when click on start
function StartTimer() {
    tens++;
    if (tens > 9) {
        if (appendTens instanceof HTMLElement) {
            appendTens.innerHTML = `${tens}`;
        }
    }
    if (tens > 99) {
        seconds++;
        if (appendSeconds instanceof HTMLElement) {
            appendSeconds.innerHTML = "0" + seconds;
        }
        tens = 0;
        if (appendTens instanceof HTMLElement) {
            appendTens.innerHTML = "00";
        }
    }
    if (seconds > 9) {
        if (appendSeconds instanceof HTMLElement) {
            appendSeconds.innerHTML = `${seconds}`;
        }
    }
}
buttonStart === null || buttonStart === void 0 ? void 0 : buttonStart.addEventListener("click", () => {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(StartTimer);
});
buttonStop === null || buttonStop === void 0 ? void 0 : buttonStop.addEventListener("click", () => {
    if (interval) {
        clearInterval(interval);
    }
});
buttonReset === null || buttonReset === void 0 ? void 0 : buttonReset.addEventListener("click", () => {
    if (interval) {
        clearInterval(interval);
    }
    tens = 0;
    seconds = 0;
    if (appendSeconds instanceof HTMLElement) {
        appendSeconds.innerHTML = `${seconds}`;
    }
    if (appendTens instanceof HTMLElement) {
        appendTens.innerHTML = `0${tens}`;
    }
});
//# sourceMappingURL=index.js.map