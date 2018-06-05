// run once the DOM is ready for javascript to execute.  This is the same as $()
$(document).ready(function() {

    // totals
    var totalWins = 0;
    var totalLosses = 0;

    var game = {

        // running total
        gamePoints: 0,

        // generate random number
        gameTargetNbr: 0,

        // generate each crystals random number.  Used to increment by that value when adding to total score.
        crystal1PointValue: 0,
        crystal2PointValue: 0,
        crystal3PointValue: 0,
        crystal4PointValue: 0,

        getRandomIntInclusive: function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;                       //The maximum is inclusive and the minimum is inclusive 
        },

        logTargetNumber: function() {
            console.log("Target: ", this.gameTargetNbr);
        },

        logCrystalPointValues: function() {
            console.log("Crystals 1-4: ", this.crystal1PointValue + " " + this.crystal2PointValue + " " + this.crystal3PointValue + " " + this.crystal4PointValue);
        },

        setTargetValue: function() {
            $("#game-target").text(this.gameTargetNbr.toString());
        },

        setGamePoints: function() {
            $("#total-score").text(this.gamePoints);
        },

        setCrystalPointValues: function() {
            $("#crystal-1").attr("value", this.crystal1PointValue.toString());
            $("#crystal-2").attr("value", this.crystal2PointValue.toString());
            $("#crystal-3").attr("value", this.crystal3PointValue.toString());
            $("#crystal-4").attr("value", this.crystal4PointValue.toString());
        },

        newGame: function() {
            // running total
            this.gamePoints = 0;

            // generate random number
            this.gameTargetNbr = this.getRandomIntInclusive(19,120);

            // generate each crystals random number.  Used to increment by that value when adding to total score.
            this.crystal1PointValue = this.getRandomIntInclusive(1,12);
            this.crystal2PointValue = this.getRandomIntInclusive(1,12);
            this.crystal3PointValue = this.getRandomIntInclusive(1,12);
            this.crystal4PointValue = this.getRandomIntInclusive(1,12);

            this.setCrystalPointValues();
            this.setTargetValue();
            this.setGamePoints();

            this.logTargetNumber();
            this.logCrystalPointValues();
        }
    };

    game.newGame();

    // handle btn click events for each crystal
    $(".crystal").on("click", function() {
        console.log("Value is: " + $(this).find("img").attr("value"));       

        var pointsToAdd = $(this).find("img").attr("value");
        game.gamePoints += parseInt(pointsToAdd);
        console.log("Running total: " + game.gamePoints);
        game.setGamePoints();

        if (game.gamePoints === game.gameTargetNbr) {         // win
            //alert("You win");                                                                             

            totalWins++;         
            $("#total-wins").text(totalWins);

            console.log("Wins: " + totalWins);
            game.newGame();
        } else if (game.gamePoints > game.gameTargetNbr) {    // lose
            //alert("You lose.");

            totalLosses++;
            $("#total-losses").text(totalLosses);

            console.log("Losses: " + totalLosses);
            game.newGame();
        };

    });

});     // end jquery