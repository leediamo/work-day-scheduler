

var time = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(time);

$(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val(); 
    var time = $(this).parent().attr("id"); 
    localStorage.setItem(time, text);
})

let hour9 = ("#hour9")
let hour10 = ("#hour10")
let hour11 = ("#hour11")
let hour12 = ("#hour12")
let hour1 = ("#hour1")
let hour2 = ("#hour2")
let hour3 = ("#hour3")
let hour4 = ("#hour4")
let hour5 = ("#hour5")
let hour = ("hour9","hour10","hour11","hour12","hour1","hour2","hour3","hour4","hour5")

localStorage.setItem(hour);
var retrievedHour = localStorage.getItem('hour');