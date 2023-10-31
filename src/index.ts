
let seconds: number = 0;
let tens: number = 0;
let appendTens: HTMLElement | null = document.getElementById("tens");
let appendSeconds: HTMLElement | null = document.getElementById("seconds");
let buttonStart: HTMLElement | null = document.getElementById("button-start");
let buttonStop: HTMLElement | null = document.getElementById("button-stop");
let buttonReset: HTMLElement | null = document.getElementById("button-reset");
let interval: ReturnType<typeof setInterval>; // to store timer values

// this function will run when click on start

function StartTimer(): void {
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

buttonStart?.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(StartTimer);
});

buttonStop?.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
  }
});

buttonReset?.addEventListener("click", () => {
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
