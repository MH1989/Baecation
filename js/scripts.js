$(document).ready(function() {
  $("form#questions").submit(function() {
    var weatherVal = $("select#weather").val();
    var vibeVal = $("select#vibe").val();
    var terrainVal = $("select#terrain").val();

    var personaVal = $("select#persona").val();
    var actionVal = $("select#action").val();

    var className = "." + weatherVal + "." + vibeVal + "." + terrainVal;

    if ( personaVal === "good" ) {
      $("p.persona").append("<br><strong>You'll find much support on your path to heroism!</strong>");
    } else if ( distanceVal === "notgood" ){
      $("p.persona").append("<br><strong>The life of a villan is a lonely one...</strong>");
    }

    if ( actionVal === "destroy" ) {
      $("#red").toggle();
    } else if ( factionVal === "build" ) {
      $("#green").toggle();
    }

    $("#first").toggle();
    $(className).toggle();

    event.preventDefault();
  });
});
