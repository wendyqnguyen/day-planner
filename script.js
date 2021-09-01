// calendar elements
var dayEl = document.querySelector("#currentDay");

// current day
var timestamp = moment();

console.log(timestamp.hour());

var nineAm = document.querySelector("#nine-am-event");
console.log(nineAm);
nineAm.innerHTML= "some event";
//calender events array example:
var calEvents = [
  {
    "hour": "9",
    "description": "event",
    "status": ""
  },
  {
    "hour": "10",
    "description": "event",
    "status": ""
  },
  {
    "hour": "11",
    "description": "event",
    "status": ""
  },
  {
    "hour": "12",
    "description": "event",
    "status": ""
  },
  {
    "hour": "13",
    "description": "event",
    "status": ""
  },
  {
    "hour": "14",
    "description": "event",
    "status": ""
  },
  {
    "hour": "15",
    "description": "event",
    "status": ""
  },
  {
    "hour": "16",
    "description": "event",
    "status": ""
  },
  {
    "hour": "5pm",
    "description": "event",
    "status": ""
  }
]
function colorCodeCalendar () {
    // color code calendar, hours in the past are grey, current hour is red, future hours are gree
    var currentHour = timestamp.hour();
    if (currentHour > 9){

    }
};

function loadCalendar () {
// display the day in "Thursday, September 5th" format
var displayDay = timestamp.format('dddd') + " " + timestamp.format('MMMM') + " " + timestamp.format('Mo');
dayEl.innerHTML = displayDay;

colorCodeCalendar ();


// console.log(timestamp.format('HH:mm'));

// color code calendar grid so that past time blocks are grey, current is red and future is green

// load events for the day
};

// add event listener for when time block clicked

// add event listener for any save button


// load calendar for the first time
loadCalendar();
