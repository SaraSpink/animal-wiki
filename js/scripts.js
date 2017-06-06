$(document).ready(function() {

  $("button#name1").click(function() {
    $("#horvath").show();
    $("#lisa").hide();
    $("#pandington").hide();
  });
  $("button#name2").click(function() {
    $("#lisa").show();
    $("#horvath").hide();
    $("#pandington").hide();
  });
  $("button#name3").click(function() {
    $("#pandington").show();
    $("#horvath").hide();
    $("#lisa").hide();

  });

});
