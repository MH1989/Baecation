$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    $("img").hide();

    var weatherVariable = $("select#weather").val();
    var vibeVariable = $("select#vibe").val();
    var terrainVariable = $("select#terrain").val();


        if (weatherVariable === "cold" && vibeVariable === "relax" && terrainVariable === "dry") {
          result = "Planet Frieza No. 79, an operations base, is home to military museums and manufacturing plants. Avoid eye contact with others in your fort camping grounds!";
          $("#frieza").show();

        } else if (weatherVariable === "hot" && vibeVariable === "relax" && terrainVariable === "wet") {
          result = "Gelbo, a planet with intense seismic activity, is a sacred place. If you enjoy camping, you'll enjoy your stay with the Gelboians.";
          $("#gelbo").show();

        } else if (weatherVariable === "hot" && vibeVariable === "relax" && terrainVariable === "dry") {
          result = "Imecka has a desert-like climate. The economy is incredibly poor due to high taxes so it's not a cheap place to vacate, keep that in mind.";
          $("#imecka").show();

        } else if (weatherVariable === "cold" && vibeVariable === "party" && terrainVariable === "dry") {
          result = "M-2 is a technologically advanced planet with a highly intelligent population. Many of its inhabitants are robots or mutants, so behave with confidence and you'll be just fine.";
          $("#m2").show();

        } else if (weatherVariable === "cold" && vibeVariable === "party" && terrainVariable === "wet") {
          result = "Planet Namek has 3 suns so it lacks a day/night cycle. If day drinking is your thing, this is the place to be.";
          $("#namek").show();

        } else if (weatherVariable === "hot" && vibeVariable === "party" && terrainVariable === "wet") {
          result = "Planet Plant is a harsh desert world with a yellow/red sky, which looks awesome. It's also known to possess at least ten times the gravity of planet Earth if that's your kind of thing.";
          $("#plant").show();

        } else if (weatherVariable === "cold" && vibeVariable === "relax" && terrainVariable === "wet") {
          result = "Polaris is a remote planet with a cold climate. If you want to lodge, ski or snowboard down mountains you'll have a peaceful time here.";
          $("#polaris").show();

        } else if (weatherVariable === "hot" && vibeVariable === "party" && terrainVariable === "dry") {
          result = "Rudeeze is a desert planet orbiting many stars, and populated by Sandipedes. If you want a safari wildlife adventure, you'll be pleased with this visit.";
          $("#rudeeze").show();

    }
    $("#position").text(result);
    $("#result").show();

    event.preventDefault();
  });

});
