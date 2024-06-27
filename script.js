document.getElementById('countdownForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const datetime = document.getElementById('datetime').value;
    if (datetime) {
        startCountdown(new Date(datetime));
    }
});

let countdownFunction;

function startCountdown(targetDate) {
    clearInterval(countdownFunction);
    countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById('countdown').innerHTML = "EXPIRED";
        }
    }, 1000);
}
