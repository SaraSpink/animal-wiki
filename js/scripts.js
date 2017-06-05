$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var voterInput = $("input#voter").val();
    var ageInput = $("input#age").val();
    var mascotInput= $("input#mascot").val();


    $(".voter").text(voterInput);
    $(".age").text(ageInput);
    $(".mascot").text(mascotInput);


    $("#thankYou").show();
    $("#over-age").show();
    event.preventDefault();
  });
});
