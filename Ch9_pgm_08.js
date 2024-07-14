// A calendar event constructor
var CalendarEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;
  
    this.showEvent = function () {
        var timeString = "(" + this.startTime + " - " + this.endTime + ")";
        console.log(this.title + ": " + this.startDate + " - " + timeString);
    };
};

var calEvent1 = new CalendarEvent(
    "Annual Review",
    "3/5/16",
    "4.00pm",
    "5.00pm"
);

var calEvent2 = new CalendarEvent(
    "Project Meeting",
    "3/6/16",
    "10.00am",
    "12.00pm"
);

calEvent1.showEvent();
calEvent2.showEvent();



/* Further Adventures
 *
 * 1) Add a second event.
 *
 * 2) Call the showEvent method on your
 *    new calendar event.
 *
 * 3) Update the showEvent method so that
 *    its output looks like this:
 *    Annual Review: 3/5/16 - (4.00pm - 5.00pm)
 *
 */