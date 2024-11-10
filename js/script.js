/// <reference types="./@types/jquery" />
/*sideBar*/
$(".openBar").click(function () {
  $("#sideBar").animate({ width: "15.6rem" }, 50);
  $("#homeContent").animate({ marginleft: "15.6rem" }, 50);
});

$(".closeBtn").click(function () {
  $("#sideBar").animate({ width: "0rem" }, 50);
  $("#homeContent").animate({ marginleft: "0rem" }, 50);
});

/*scroll*/
$("#sideBar a").click(function () {
  let Id = $(this).attr("href");
  let scrollOf = $(Id).offset().top;
  $("html , body").animate({ scrollTop: scrollOf }, 2000);
});

/*sliderDown*/
$("#sliderDown .haed").click(function () {
  $(".inner").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

/*Counter*/
onload = function () {
  countDownToTime("25 october 2023 7:55:00");
};
function countDownToTime(countTo) {
  let xDate = new Date(countTo);
  xDate = xDate.getTime() / 1000;

  let yDate = new Date();
  yDate = yDate.getTime() / 1000;

  difference = xDate - yDate;
  let days = Math.floor(difference / (24 * 60 * 60));
  let hours = Math.floor((difference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (difference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    difference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}

/*chars*/
let maxText = 100;
$("textarea").keyup(function () {
  let length = $(this).val().length;
  let charsLeft = maxText - length;
  if (charsLeft <= 0) {
    $("#chars").text("your available character finished");
  } else {
    $("#chars").text(charsLeft);
  }
});
