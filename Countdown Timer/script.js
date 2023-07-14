let timerInterval;
let currentTime = 0;
let timerRunning = false;

function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    timerRunning = true;
    timerInterval = setInterval(() => {
        currentTime--;
        document.getElementById('timer').textContent = formatTime(currentTime);

        if (currentTime <= 0) {
            clearInterval(timerInterval);
            timerRunning = false;
            document.getElementById('timer').textContent = '00:00:00';
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    currentTime = 0;
    document.getElementById('timer').textContent = '00:00:00';
}

function setTimer() {
    if (!timerRunning) {
        const timeInput = document.getElementById('timeInput');
        const time = parseInt(timeInput.value, 10);

        if (!isNaN(time) && time >= 0) {
            currentTime = time;
            document.getElementById('timer').textContent = formatTime(currentTime);
            timeInput.value = '';
        } else {
            alert('Please enter a valid positive number');
        }
    }
}

document.getElementById('set').addEventListener('click', setTimer);

document.getElementById('start').addEventListener('click', () => {
    if (!timerRunning) {
        startTimer();
    }
});

document.getElementById('stop').addEventListener('click', stopTimer);

document.getElementById('reset').addEventListener('click', resetTimer);
