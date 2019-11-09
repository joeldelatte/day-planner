var dayDisplay = $("#header-date")
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

var timeDisplay = null;
           time = null;

// diplays time
var uptime = function () {
    time = moment(new Date());
    timeDisplay.html(time.format("h:mm:ss a"));
}
// updates time every second
$(document).ready(function(){
    timeDisplay = $('#header-time')
    uptime();
    setInterval(uptime, 1000);
});

// displays date on refresh
dayDisplay.text(currentTime.format("dddd, MMM, Do"));

// Add a for loop for all the save buttons?
// Saves content of textareas in onclick function for the "save" buttons. 
// Uses for loop to apply to each button for each hour's text
save.on("click", function() {
    for (i = 0; i < keys.length; i++) {
    localStorage.setItem(keys[i], hours[i].val());
    } 
})
// Loads saved content for each textarea on page refresh, retrieves from local storage.
function loadSaved() {
    for (i = 0; i < hours.length; i++) {
    var hourPrint = window.localStorage.getItem(keys[i]);
    hours[i].text(hourPrint);
    }
}

// if statements that compares current time to time represented by each row
// changes css styling dynamically to represent if item/hour is past.
if (moment() > moment('9:00 am', ['h:m a', 'H:m'])) {
    $("#input-1").css({"background-color": "#d3d3d3", "color": "white"});
}
if (moment() > moment('10:00 am', ['h:m a', 'H:m'])) {
    $("#input-2").css({"background-color": "#d3d3d3", "color": "white"});
}
if (moment() > moment('11:00 am', ['h:m a', 'H:m'])) {
    $("#input-3").css({"background-color": "#d3d3d3", "color": "white"});
}
if (moment() > moment('12:00 pm', ['h:m a', 'H:m'])) {
    $("#input-4").css({"background-color": "#d3d3d3", "color": "white"});
}
if (moment() > moment('1:00 pm', ['h:m a', 'H:m'])) {
    $("#input-5").css({"background-color": "#d3d3d3", "color": "white"});
}
if (moment() > moment('2:00 pm', ['h:m a', 'H:m'])) {
    $("#input-6").css({"background-color": "#d3d3d3", "color": "white"});
}
if (moment() > moment('3:00 pm', ['h:m a', 'H:m'])) {
    $("#input-7").css({"background-color": "#d3d3d3", "color": "white"});
}
if (moment() > moment('4:00 pm', ['h:m a', 'H:m'])) {
    $("#input-8").css({"background-color": "#d3d3d3", "color": "white"});
}
if (moment() > moment('5:00 pm', ['h:m a', 'H:m'])) {
    $("#input-9").css({"background-color": "#d3d3d3", "color": "white"});
}

// if statements that compares current time to time represented by each row
// changes css styling dynamically to represent if item/hour is present.

if (moment() == moment('9:00 am', ['h:m a', 'H:m'])) {
    $("#input-1").css({"background-color": "#ff6961", "color": "white"});
}
if (moment() == moment('10:00 am', ['h:m a', 'H:m'])) {
    $("#input-2").css({"background-color": "#ff6961", "color": "white"});
}
if (moment() == moment('11:00 am', ['h:m a', 'H:m'])) {
    $("#input-3").css({"background-color": "#ff6961", "color": "white"});
}
if (moment() == moment('12:00 pm', ['h:m a', 'H:m'])) {
    $("#input-4").css({"background-color": "#ff6961", "color": "white"});
}
if (moment() == moment('1:00 pm', ['h:m a', 'H:m'])) {
    $("#input-5").css({"background-color": "#ff6961", "color": "white"});
}
if (moment() == moment('2:00m', ['h:m a', 'H:m'])) {
    $("#input-6").css({"background-color": "#ff6961", "color": "white"});
}
if (moment() == moment('3:00 pm', ['h:m a', 'H:m'])) {
    $("#input-7").css({"background-color": "#ff6961", "color": "white"});
}
if (moment() == moment('4:00 pm', ['h:m a', 'H:m'])) {
    $("#input-8").css({"background-color": "#ff6961", "color": "white"});
}
if (moment() == moment('5:00 pm', ['h:m a', 'H:m'])) {
    $("#input-9").css({"background-color": "#ff6961", "color": "white"});
}

// if statements that compares current time to time represented by each row
// changes css styling dynamically to represent if item/hour is in the future.
if (moment() < moment('9:00 am', ['h:m a', 'H:m'])) {
    $("#input-1").css({"background-color": "#77dd77", "color": "white"});
}
if (moment() < moment('10:00 am', ['h:m a', 'H:m'])) {
    $("#input-2").css({"background-color": "#77dd77", "color": "white"});
}
if (moment() < moment('11:00 am', ['h:m a', 'H:m'])) {
    $("#input-3").css({"background-color": "#77dd77", "color": "white"});
}
if (moment() < moment('12:00 pm', ['h:m a', 'H:m'])) {
    $("#input-4").css({"background-color": "#77dd77", "color": "white"});
}
if (moment() < moment('1:00 pm', ['h:m a', 'H:m'])) {
    $("#input-5").css({"background-color": "#77dd77", "color": "white"});
}
if (moment() < moment('2:00 pm', ['h:m a', 'H:m'])) {
    $("#input-6").css({"background-color": "#77dd77", "color": "white"});
}
if (moment() < moment('3:00 pm', ['h:m a', 'H:m'])) {
    $("#input-7").css({"background-color": "#77dd77", "color": "white"});
}
if (moment() < moment('4:00 pm', ['h:m a', 'H:m'])) {
    $("#input-8").css({"background-color": "#77dd77", "color": "white"});
}
if (moment() < moment('5:00 pm', ['h:m a', 'H:m'])) {
    $("#input-9").css({"background-color": "#77dd77", "color": "white"});
}
loadSaved()
