     $(document).ready(function() {


    var numToGuess;// = getRandomToGuess();
    var total = 0;
    var crystalsValues = [];
    // var busted = false;
    var winLoseMsg = "";
    var winCounter = 0;
    var lossCounter = 0;


    $(".crystals").on("click", function() {
        //test image clicked
        var id = $(this).attr("id");
        //trim to reveal the index, locate crystal value
        var idx = id.replace("img","");
        // console.log(idx);
        
        //add crystal value to total
        total+= crystalsValues[idx]; 
        //test win lose
        testWin();
        updateDisplay();

    });
    function testWin() {
        if (total > numToGuess) {
            //lose
            winLoseMsg = "You Lost!";
            lossCounter++;
            startGame();
        }
        else if (total == numToGuess) {
            //win
            winLoseMsg = "You Won!  You matched "+numToGuess;
            winCounter++;
            startGame();
        }
    }
    function getRandomToGuess() {
       var n = numToGuess = Math.floor(Math.random() * 120) + 9;
        // console.log(numToGuess);
        return n;
    }
    function getRandomCrystalValue() {
        return  Math.floor(Math.random() * 12) + 1;
    }
    function setCrystalValues() {
        
        do{
            var val = getRandomCrystalValue();
            // console.log("value: "+val);
            // console.log("indexOf: "+crystalsValues.indexOf(val));
            if(crystalsValues.indexOf(val) == -1){
                crystalsValues.push(val);
                // console.log("pushing value: "+val);
            }
        }
        while(crystalsValues.length < 4);

    }

    function updateDisplay() {
        $("#targetNumber").text(numToGuess);
        $("#total").text(total);
        $("#winlose-banner").text(winLoseMsg);
        $("#wins").text(winCounter);
        $("#losses").text(lossCounter);
    }
    function startGame() {
        total = 0;
        getRandomToGuess();
        setCrystalValues();
        // console.log(crystalsValues);
        updateDisplay();
    }
    startGame();
});
