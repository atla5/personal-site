var time = new Date();

function calculateTime(){
    time = new Date();
    timeString = time.getHours()+":"+time.getMinutes() + 
        ":"+ time.getSeconds();
    postMessage(timeString);
    setTimeout("calculateTime()",1000)
    
}
calculateTime();