updateClock();
function updateClock() {
    let now = new Date();
    let currentHour = now.getHours();
    let currentMinutes = now.getMinutes();
    let currentSeconds = now.getSeconds();
    let timeOfDay = (currentHour<12)?"AM":"PM";
    console.log(now);
    // converting it into double digit
    currentHour=(currentHour<10?"0":"")+currentHour;
    currentSeconds=(currentSeconds<10?"0":"")+currentSeconds;
    currentMinutes=(currentMinutes<10?"0":"")+currentMinutes;
    // converting in 12 hour formet
    currentHour=(currentHour>12)?currentHour-12:currentHour;
    currentHour=currentHour==0?12:currentHour;
    
    
    const clock = document.getElementById("clock");
  clock.innerHTML = `${Math.abs(currentHour-12)}:${currentMinutes}:${currentSeconds} ${timeOfDay}`;

}
