function countdown() {
    const timeLeft = +new Date("2021-02-27") - +new Date();

    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutesLeft = Math.floor((timeLeft / 1000) / 60 % 60);
    const secondsLeft = Math.floor((timeLeft / 1000) % 60);

    const timeLeftText = `${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes and ${secondsLeft} seconds.`;
    
    document.getElementById("timer").innerHTML = timeLeftText;
}