
// SCSCSCSC Chinmay's Countdown timer ( Limit - Days, can be extended with same logic ) 

window.setInterval(tick, 1000);

function tick() {
    box = document.getElementById("box");
    var due = new Date(2019, 6, 3, 9, 00);
    box.innerHTML = due;

    var today = new Date();    
    // Test code 

    today.setSeconds(today.getSeconds() + 1 )
    

    var root = (due.getTime() - today.getTime());
    (due.getTime() - today.getTime())

    // Multipliers

    var mDay = 1000 * 3600 * 24;
    console.log(mDay);
    var mHour = mDay / 24;
    console.log(mHour);
    var mMinute = mHour / 60;
    console.log(mMinute);
    var mSecond = mMinute / 60;
    console.log(mSecond);

    var ldays = Math.floor((root) / (mDay));
    console.log("Days left " + ldays)
    var lhours = Math.floor((root - (ldays * mDay)) / mHour);
    console.log("Hours left " + lhours)
    var lminutes = Math.floor((root - ((ldays * mDay) + (lhours * mHour))) / mMinute);
    console.log("Minutes left " + lminutes)
    var lseconds = Math.floor((root - ((ldays * mDay) + (lhours * mHour) + (lminutes * mMinute))) / mSecond);

    box.innerText = ldays + " Days, " + lhours + " Hours, " + lminutes + " Minutes and " + lseconds+ " Seconds! !"
    if ( today >= due  ){
        box.innerText = "R-NPSMUN 2019 has begun ! ! ! ! !" ;
    }
}
