$(document).ready(function () {
  $("form#triangleTracker").submit(function (event) {
    event.preventDefault();
    let line1 = ""
    let line2 = ""
    let line3 = ""
    if ($("input#line1").val() === "") {
      $('#line1-input').addClass("has-error");
    } else {
      line1 = parseInt($("input#line1").val());
    }

    if ($("input#line2").val() === "") {
      $('#line2-input').addClass("has-error");
    } else {
      line2 = parseInt($("input#line2").val());
    }

    if ($("input#line3").val() === "") {
      $('#line3-input').addClass("has-error");
    } else {
      line3 = parseInt($("input#line3").val());
    }

    $('#results').show();

    if ((line1 + line2) <= line3 || (line1 + line3) <= line2 || (line2 + line3) <= line1) {
      $('#triangle').text("not be a");
    } else if (line1 == line2 && line2 == line3) {
      $('#triangle').text("be an equilateral");
    } else if (line1 == line2 || line1 == line3 || line2 == line3) {
      $('#triangle').text("be an isosceles");
    } else if ((line1 != line2) && (line2 != line3) && (line1 != line3)) {
      $('#triangle').text("be a scalene");
    }
  })
});