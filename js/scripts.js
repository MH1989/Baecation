$(document).ready(function() {
  $("form#questions").submit(function() {
    var questions = ["weather", "vibe", "terrain", "persona", "action"];

    questions.forEach(function(question) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    if ( personaVal === "good" ) {
      $("p.persona").append("<br><strong>You'll find much support on your vacation path to heroism!</strong>");
    } else if ( personaVal === "notgood" ){
      $("p.persona").append("<br><strong>The life of a villan is a lonely one...</strong>");
    }

    if ( actionVal === "destroy" ) {
      $("#fire").toggle();
    } else if ( actionVal === "build" ) {
      $("#water").toggle();
    }

    $("#first").toggle();
    $(className).toggle();

    event.preventDefault();
  });
});
