// Stopwatch Elements
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let resetBtn = document.querySelector('#reset');

// Stopwatch Variables
let hour = 0, minute = 0, second = 0, count = 0;
let timer;

// Event listeners for stopwatch buttons
startBtn.addEventListener('click', () => {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', () => {
    timer = false;
});

resetBtn.addEventListener('click', () => {
    timer = false;
    hour = 0; minute = 0; second = 0; count = 0;
    updateDisplay("00", "00", "00", "00");
});

// Controlling start and pause events with space bar
let clickSpace = false;

function toggleSpace() {
    clickSpace = !clickSpace;
    if (clickSpace) {
        timer = true;
        stopWatch();
    } else {
        timer = false;
    }
}

document.addEventListener('keypress', (e) => {
    if (e.keyCode === 32) {
        toggleSpace();
    }
    if (e.key === 'Enter') {
        timer = false;
        hour = 0; minute = 0; second = 0; count = 0;
        updateDisplay("00", "00", "00", "00");
    }
});

// Stopwatch main function
function stopWatch() {
    if (timer) {
        count++;
        if (count == 100) {
            second++;
            count = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        // Formatting values to display with leading zeros
        let hrString = hour < 10 ? "0" + hour : hour;
        let minString = minute < 10 ? "0" + minute : minute;
        let secString = second < 10 ? "0" + second : second;
        let countString = count < 10 ? "0" + count : count;

        // Update the display
        updateDisplay(hrString, minString, secString, countString);

        // Recursive call with a delay for smooth updating
        setTimeout(stopWatch, 10);
    }
}

// Function to update the display with new stopwatch values
function updateDisplay(hr, min, sec, count) {
    document.getElementById('hr').innerHTML = hr;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('count').innerHTML = count;
}

// Flip animation elements
let rotate = document.querySelector('.flip-btn');
let flipCard = document.querySelector('.flip-card');
let flipCardInner = document.querySelector('.flip-card-inner');
let flipCardBack = document.querySelector('.flip-card-back');
let flipToggle = false;

// Function to control the flip animation toggle
function flipToggleCntrl() {
    flipToggle = !flipToggle;
    if (flipToggle) {
        flipCardInner.style.transform = 'rotateY(-180deg)';
        rotate.innerHTML = "Click Here For Stop Watch";
    } else {
        flipCardInner.style.transform = 'rotateY(0deg)';
        rotate.innerHTML = "Click Here For Countdown Timer";
    }
}