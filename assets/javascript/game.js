// declare global variables

var wins = 0;
var losses = 0;
var ties = 0;

// ===========================================================================

// Set The Game start function

        function scoreBoard(x, y) {
            document.getElementById(x).textContent = y;
        }

        scoreBoard("wins", wins);
        scoreBoard("losses", losses);
        scoreBoard("ties", ties);

        var letters = ["r", "s", "p"];

        var guestPick = '';

//============================================================================
// activate keys to be pressed 
// check if letters pressed match those chosen by computer
// log the scores in the scoreboard

        document.onkeyup = function (event) {
            var computerChoice = letters[Math.floor(Math.random() * 3)];

            guestPick = event.key.toLowerCase();

            if (letters.indexOf(guestPick) > -1) {

                if (computerChoice === guestPick) {

                    scoreBoard("gameon", "The computer picked " + computerChoice + " and you picked " + guestPick + "!! Tie !!")
                    
                    ties++;
                    
                    scoreBoard("ties", ties);

                } else {

                    if (
                        (guestPick === 'r' &&
                            computerChoice !== 'p') ||
                        (guestPick === 'p' &&
                            computerChoice !== 's') ||
                        (guestPick === 's' &&
                            computerChoice !== 'r')
                    ) {
                        scoreBoard("gameon", "The computer picked " + computerChoice + " and you picked " + guestPick + "!! You win !!")
                        wins++;
                        scoreBoard("wins", wins);
                    } else {
                        scoreBoard("gameon", "The computer picked " + computerChoice + " and you picked " + guestPick + "!! You lose !!")
                        losses++;
                        scoreBoard("losses", losses);
                    }
                }
            }
        }