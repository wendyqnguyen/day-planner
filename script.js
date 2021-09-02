
var pageContentEl = document.querySelector("#page-content");

// calendar elements
var dayEl = document.querySelector("#currentDay");

// current day
var timestamp = moment();

// var nineAm = document.querySelector("#nine-am-event");
// console.log(nineAm);
// nineAm.innerHTML= "some event";
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
  // console.log("color code");
    // color code calendar, hours in the past are grey, current hour is red, future hours are gree
  for (var i=9; i< 18; i++){
    if(timestamp.hour() == i){
      var hourEl = document.querySelector(`#${CSS.escape(i)}`);
      hourEl.style.backgroundColor = "red";
      console.log(i + " " + hourEl.getAttribute("style"));
    }else if (timestamp.hour()>i){
      var hourEl = document.querySelector(`#${CSS.escape(i)}`);
      hourEl.style.backgroundColor = "lightgrey";
      console.log(i + " " + hourEl.getAttribute("background-color"));
    }else{
      var hourEl = document.querySelector(`#${CSS.escape(i)}`);
      hourEl.style.backgroundColor = "#77dd77";
      console.log(i + " " + hourEl.getAttribute("background-color"));
    }
}
};

function loadCalendar () {
  
  // display the day in "Thursday, September 5th" format
  var displayDay = timestamp.format('dddd') + " " + timestamp.format('MMMM') + " " + timestamp.format('Mo');
  dayEl.innerHTML = displayDay;

  // color code calendar grid so that past time blocks are grey, current is red and future is green
  colorCodeCalendar ()
  // load events for the day
  var eventEl = document.createElement("div");
  // console.log(eventEl);
  for (var i = 9; i< 18; i++){
    eventEl = document.querySelector(`#${CSS.escape(i)}`);
    eventEl.innerText = localStorage.getItem(JSON.stringify(i))
    // console.log(eventEl);
  }
};




var hourHandler = function (event) {
  // get target element from event
  var targetRowEl = event.target;
  targetRowEl = targetRowEl.closest(".saveBtn");
  targetRowEl = targetRowEl.previousElementSibling;
  console.log(targetRowEl);

  // get text from hour row
  var eventDescription = targetRowEl.innerText;
  console.log (eventDescription);

  // get which hour was clicked 
  var hour = targetRowEl.id;
  console.log(hour);
  localStorage.setItem(hour, eventDescription);
  //get which hour cell was clicked
  // var 

}

// add event listener for when time block clicked
// pageContentEl.addEventListener("click", hourHandler);

// add event listener for any save button
var buttons = document.querySelectorAll(".save-btn").length;
for (var i = 0; i < buttons ; i++) {
    document.querySelectorAll(".save-btn")[i].addEventListener("click", hourHandler);
}

// load calendar for the first time
loadCalendar();
