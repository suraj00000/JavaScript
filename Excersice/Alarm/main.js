const alarmSubmit = document.getElementById('alarmSubmit');

alarmSubmit.addEventListener('click',setAlarm);

function setAlarm(e){
    e.preventDefault();
    const alarm = document.getElementById('alarm');

    alarmDate = new Date(alarm.value);
    console.log(`Setting alarm for ${alarmDate}`);
    now = new Date();
    let time =alarmDate-now;
    if(time>=0){
        setTimeout(()=>{
            console.log("Ringing now");
            ringBell();
        },time);
    }
}
function ringBell(){
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
    audio.play();
}