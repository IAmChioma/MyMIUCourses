/**app.js */
setInterval(myClock, 1000);

function myClock(){
    let clock = document.getElementById("clock");
    let date = new Date();
    clock.innerText = date;
}