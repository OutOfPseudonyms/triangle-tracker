$(document).ready(functioin() {
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
      line1 = parseInt($("input#line2").val());
    }

    if ($("input#line3").val() === "") {
      $('#line3-input').addClass("has-error");
    } else {
      line1 = parseInt($("input#line3").val());
    }

    $('#results').show();

    if (line1 = line2 && line2 = line3) {
  $('#equilateral').text("Equilateral");
} else if (line1 = line2 && line3 > line1 + line2 || line1 = line3 && line2 > line1 + line2 || line2 = line3 && line1 > line2 + line3) {
  $('#isosceles').text("Isosceles");
} else if (line1 != line2 && line2 != line3 && line3 <= line1 + line2 && line2 <= line1 + line2 && line1 <= line2 + line3) {
  $('#scalene').text("Scalene");
} else if (line1 + line2 <= line3 || line1 + line3 <= line2 || line2 + line3 <= line1) {
  $('#notATriangle').text("Not a triangle");
}
})
});