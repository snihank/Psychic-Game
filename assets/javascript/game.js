// Declaring an array of alphabets
var alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

/* Variables for tracking our wins, losses and guesses. 
They begin at 0. We have 5 guesses each turn. */

var guesses = 5;
var wins = 0;
var losses = 0;

   
    

    document.getElementById("player-guess").innerHTML = "Guesses left: " + guesses;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    
    
   // When the user presses a key, it will run the following function...
    document.onkeyup = function(event) {

    // Determines which key was pressed
    var userGuess = (event.key).toLowerCase();
    console.log(userGuess);
    

    // Randomly chooses an alphabet from the alphabets array
    var computerChoice = alphabets[Math.floor(Math.random() * alphabets.length)];
    console.log(computerChoice)


    if(userGuess === computerChoice){
        wins++;
        guesses = 0;

        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("player-guess").innerHTML = "Guesses left: " + guesses;

        
    }

    else {
        guesses--;
        document.getElementById("player-guess").innerHTML = "Guesses left: " + guesses;
    }

    if((guesses === 0) && (userGuess !== computerChoice)){
        losses++;
        guesses = 0;

        document.getElementById("losses").innerHTML = "losses: " + losses;
        document.getElementById("player-guess").innerHTML = "Guesses left: " + guesses;
    }
    
};


