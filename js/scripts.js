$(document).ready(function() {
  var ageInput = parseInt(prompt("How old are you?"));

  if (ageInput > 17) {
    $("#over-age").show();
  } else {
    $("#blanks").show();
  }

  $("#blanks form").submit(function(event) {
    var voterInput = $("input#voter").val();
    var mascotInput= $("input#mascot").val();



    $(".voter").text(voterInput);
    $(".age").text(ageInput);
    $(".mascot").text(mascotInput);

    $("#thankYou").show();


    // $("#thankYou").show();
    // $("#over-age").show();
    event.preventDefault();
    });
});
