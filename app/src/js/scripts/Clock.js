class Clock {
    constructor(){
        const clock = document.getElementById("#clock");
        this.event();
    }
    event(){
        console.log(clock);
        digitalClock();
    }

}

function digitalClock(){
    let date = new Date();
    let hour = date.getHours(); // 0 - 23
    let minutes = date.getMinutes(); // 0 - 59
    let seconds = date.getSeconds();
    let session = "AM";
    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12;
        session = "PM"
    }

    hour = (hour < 10 ) ? "0" + hour : hour;
    minutes = (minutes < 10 ) ? "0" + minutes : minutes;
    seconds = (seconds < 10 ) ? "0" + seconds : seconds;

    let time = hour + ":" + minutes + ":" + seconds + " " + session;

    clock.textContent = time;
    
    setTimeout(digitalClock, 1000);
    
    
}





export default Clock;