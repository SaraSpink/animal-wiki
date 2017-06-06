$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var voterInput = $("input#voter").val();
    var ageInput = parseInt($("input#age").val());
    var mascotInput= $("input#mascot").val();

    if (ageInput > 17) {
      $("#over-age").show();
    } else {
      $("#thankYou").show();
    }


    $(".voter").text(voterInput);
    $(".age").text(ageInput);
    $(".mascot").text(mascotInput);


    // $("#thankYou").show();
    // $("#over-age").show();
    event.preventDefault();
    });
});
