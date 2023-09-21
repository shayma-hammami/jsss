//setInterval(DisplayTime, 1000);
function DisplayTime()//function declaration
{
    //create varibale that contain the date ant time of system's clock
    const timeNow = new Date(); //console.log(typeof(timeNow))==object
    let hourOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let today = weekDay[timeNow.getDay()];//timeNow.getDay(): return number of day from 0 to 6
    let year = timeNow.getFullYear();
    let period = "AM";
    let months = timeNow.toLocaleString("default", { month: "long" });
    // write a condition that set our period to AM or PM

if(hourOfDay > 12) {
    hourOfDay -= 12;
    period = "PM";
    //This block checks whether the hour is greater than 12 and if that is true, 12 is subtracted from the hour. The result is then assigned back to ```hour``` and the period is set to PM. 12 is subtracted since we're building a 12-hour time clock//
 }
 
 if(hourOfDay == 0) {
    hourOfDay = 12;
    period = "AM";
   //This block checks whether the hour is equal to 0. If that is true, we assign 12 to the hourOfDay variable and the period is set to AM.//
 }
 //in this step i need to make sure that the time is in the format that i set at first (00:00:00)
 hourOfDay = hourOfDay < 10 ? "0" + hourOfDay : hourOfDay;
// if hourOfDay is less than 10, set hour position to 0 plus hourOfDay else set position to hourOfDay
minutes = minutes < 10 ? "0" + minutes : minutes;
// if minutes is less than 10, set minutes position to 0 plus minutes else set position to minutes
seconds = seconds < 10 ? "0" + seconds : seconds;
// if seconds is less than 10, set seconds position to 0 plus seconds else set position to seconds
//
//now we need to set the current time 
let time = hourOfDay + ":" + minutes + ":" + seconds + period;
document.getElementById('Clock').innerHTML = time + " " + today + " " + months + " " + year; 
}   
DisplayTime();
setInterval(displayTime, 1000);
/*setInterval(displayTime, 1000);

function displayTime() {

    const timeNow = new Date();

    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let today = weekDay[timeNow.getDay()];
    let months = timeNow.toLocaleString("default", {
        month: "long"
    });
    let year = timeNow.getFullYear();
    let period = "AM";

    if (hoursOfDay > 12) {
        hoursOfDay-= 12;
        period = "PM";
    }

    if (hoursOfDay === 0) {
        hoursOfDay = 12;
        period = "AM";
    }

    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hoursOfDay + ":" + minutes + ":" + seconds + period;

    document.getElementById('Clock').innerHTML = time + " " + today + " " + months + " " + year;

}
displayTime();*/