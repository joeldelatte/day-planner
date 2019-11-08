var dayDisplay = $("#header-date");
var timeDisplay = $("#header-time");
var save  = $(".save-button");
var hour1   = $("#input-1");
var hour2   = $("#input-2");
var hour3   = $("#input-3");
var hour4   = $("#input-4");
var hour5   = $("#input-5");
var hour6   = $("#input-6");
var hour7   = $("#input-7");
var hour8   = $("#input-8");
var hour9   = $("#input-9");
var  key1 = "hour1"
var  key2 = "hour2"
var  key3 = "hour3"
var  key4 = "hour4"
var  key5 = "hour5"
var  key6 = "hour6"
var  key7 = "hour7"
var  key8 = "hour8"
var  key9 = "hour9"
var currentTime = moment();

var hours = [hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8, hour9];
var keys = [key1, key2, key3, key4, key5, key6, key7, key8, key9]

dayDisplay.text(currentTime.format("dddd, MMM, Do"));
timeDisplay.text(currentTime.format("h:mm a"))

// add a for loop for all the save buttons?
save.on("click", function() {
    for (i = 0; i < keys.length; i++) {
    localStorage.setItem(keys[i], hours[i].val());
    console.log(keys[i])
    } 
})

function loadSaved() {
    for (i = 0; i < hours.length; i++) {
    var hourPrint = window.localStorage.getItem(keys[i]);
    hours[i].text(hourPrint);
    console.log(hourPrint);
    }
}



loadSaved()