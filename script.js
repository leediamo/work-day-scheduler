

var time = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(time);

$(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val(); 
    var time = $(this).parent().attr("id"); 
    localStorage.setItem(time, text);
})

