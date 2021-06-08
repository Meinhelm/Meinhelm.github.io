const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {

    var date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPosition = (hr*360/12 + (min*(360/60)/12)), minPosition = ((min*360/60) + (sec*(360/60)/60)), secPosition = sec*360/60;
    
    secPosition += 6;
    minPosition += (6/60);
    hrPosition += (3/360);

    if(hr >= 9 && hr <= 15)
    {
        document.getElementById("kick").hidden = false;
    }
    else
    {
        document.getElementById("kick").hidden = true;
    }
    
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
    console.log(sec);
}
var interval = setInterval(runTheClock, 1000);
