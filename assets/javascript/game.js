// run once the DOM is ready for javascript to execute.  This is the same as $()
$(document).ready(function() {

    // totals
    var totalWins = 0;
    var totalLosses = 0;

    // running total
    var gamePoints = 0;

    // generate random number
    var gameTargetNbr = getRandomIntInclusive(19,120);
    console.log("Target: ", gameTargetNbr);

    // generate each crystals random number.  Used to increment by that value when adding to total score.
    var crystal1PointValue = getRandomIntInclusive(1,12);
    var crystal2PointValue = getRandomIntInclusive(1,12);
    var crystal3PointValue = getRandomIntInclusive(1,12);
    var crystal4PointValue = getRandomIntInclusive(1,12);
    console.log("Crystals 1-4: ", crystal1PointValue + " " + crystal2PointValue + " " + crystal3PointValue + " " + crystal4PointValue);

    $("#crystal-1").attr("value", crystal1PointValue.toString());
    $("#crystal-2").attr("value", crystal2PointValue.toString());
    $("#crystal-3").attr("value", crystal3PointValue.toString());
    $("#crystal-4").attr("value", crystal4PointValue.toString());

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;       //The maximum is inclusive and the minimum is inclusive 
    }

    // handle btn click events for each crystal
    $(".crystal").on("click", function() {
        console.log("Value is: " + $(this).find("img").attr("value"));        //  $(this).find('a:first').attr('id')

        var pointsToAdd = $(this).find("img").attr("value");
        gamePoints += parseInt(pointsToAdd);
        console.log("Running total: " + gamePoints);

        if (gamePoints === gameTargetNbr) {         // win
            alert("You win");                                                                             //TODO temp remove and output
            totalWins++;         
            console.log("Wins: " + totalWins);
        } else if (gamePoints > gameTargetNbr) {    // lose
            alert("You lose.");
            totalLosses++;
            console.log("Losses: " + totalLosses);
        };
                                                                    //TODO reset game and put game in object
                                                                    // TODO  write stats to UI
    });
});