import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const startButton = document.querySelector("[data-start]");
const datetimePicker = document.getElementById("datetime-picker");
const daysElem = document.querySelector("[data-days]");
const hoursElem = document.querySelector("[data-hours]");
const minutesElem = document.querySelector("[data-minutes]");
const secondsElem = document.querySelector("[data-seconds]");

let userSelectedDate = null;
let timerInterval = null;

const options = { //готовый код дз
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];//готовый код дз
    if (selectedDate.getTime() < Date.now()) { // getTime() это Unix time, а Date.now() текущее время в миллисекундах
      iziToast.error({ title: "Error", message: "Please choose a date in the future", position: 'topRight' });
      startButton.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      startButton.disabled = false;
    }
  }
};

flatpickr(datetimePicker, options);

startButton.addEventListener("click", () => {
  startCountdown();
  startButton.disabled = true;
  datetimePicker.disabled = true;
});

function startCountdown() {
  timerInterval = setInterval(() => {
    const currentTime = new Date();
    const timeRemaining = userSelectedDate - currentTime;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      datetimePicker.disabled = false;
      return;
    }

    const time = convertMs(timeRemaining);
    updateTimerDisplay(time);
  }, 1000);
}

function updateTimerDisplay({ days, hours, minutes, seconds }) {
  daysElem.textContent = addLeadingZero(days);
  hoursElem.textContent = addLeadingZero(hours);
  minutesElem.textContent = addLeadingZero(minutes);
  secondsElem.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

//готовый код дз
function convertMs(ms) { 
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
  
