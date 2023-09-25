const timeleft = 10;

document.getElementById('countdown-timer').textContent = timeleft;

const countdownTimer = setInterval(function() {
    timeleft--;

    document.getElementById('countdown-timer').textContent = timeleft;

    if (timeleft <= 0) {
        clearInterval(countdownTimer);
    };
}, 1000);