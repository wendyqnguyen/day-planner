
var pageContentEl = document.querySelector("#page-content");

// calendar elements
var dayEl = document.querySelector("#currentDay");

// current day
var timestamp = moment();

function colorCodeCalendar () {
    // color code calendar, hours in the past are grey, current hour is red, future hours are gree
  for (var i=9; i< 18; i++){
    if(timestamp.hour() == i){
      var hourEl = document.querySelector(`#${CSS.escape(i)}`);
      hourEl.style.backgroundColor = "red";
    }else if (timestamp.hour()>i){
      var hourEl = document.querySelector(`#${CSS.escape(i)}`);
      hourEl.style.backgroundColor = "lightgrey";
    }else{
      var hourEl = document.querySelector(`#${CSS.escape(i)}`);
      hourEl.style.backgroundColor = "#77dd77";
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
  for (var i = 9; i< 18; i++){
    eventEl = document.querySelector(`#${CSS.escape(i)}`);
    eventEl.innerText = localStorage.getItem(JSON.stringify(i))
  }
};

var saveHandler = function (event) {
  // get target element from event
  var targetRowEl = event.target;
  targetRowEl = targetRowEl.closest(".saveBtn");
  targetRowEl = targetRowEl.previousElementSibling;

  // get text from hour row
  var eventDescription = targetRowEl.innerText;

  // get which hour was clicked 
  var hour = targetRowEl.id;
  // save event to local storage
  localStorage.setItem(hour, eventDescription); 

}

// add event listener for any save button
var buttons = document.querySelectorAll(".save-btn").length;
for (var i = 0; i < buttons ; i++) {
    document.querySelectorAll(".save-btn")[i].addEventListener("click", saveHandler);
}

// compare current day to the current day value stored in local storage
// if current day is not the same as the day saved in local storage, clear all events from local storage and save the current day value to local storage

  if(!localStorage.getItem("today")){
    localStorage.setItem("today", JSON.stringify(timestamp));
  }else{
    var day = JSON.parse(localStorage.getItem("today"));
    var date1 = timestamp.format('YYYY-MM-DD');
    var date2 = moment(day).format('YYYY-MM-DD');
    localStorage.setItem("today", JSON.stringify(timestamp));
    if (date2!=date1){
      var eventEl = document.createElement("div");
      for (var i = 9; i< 18; i++){
        localStorage.setItem(JSON.stringify(i), "")
      }
    }
  }
  
// load calendar for the first time
loadCalendar();
