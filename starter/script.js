'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent= 'Coreect number';

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 21);
let Score = 20;
let highscore=0;

const displayMessage = function(message){
    document.querySelector('.message').textContent=message;
}
const displayScore = function(message){
    document.querySelector('.score').textContent=message;
}
document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        //NO INPUT
        if (!guess) {
            displayMessage('No Number');
        }
        //WINNING SCENARIO
        else if (guess === secretNumber) {
            displayMessage('Correct answer');
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor='green';

            document.querySelector('.number').style.width='30rem';
            if(Score>highscore){
                highscore=Score;
                document.querySelector('.highscore').textContent=highscore;
            }

        //WRONG GUESS
        }
        else if(guess!==secretNumber){
            if (Score > 1) {
                displayMessage(guess>secretNumber ? 'Too High' : 'Too low');
                Score--;
                displayScore(Score);
            }
            else {
                displayMessage('You lost the game');
                document.querySelector('.score').textContent = 0;
            }

        }
        // else if (guess > secretNumber) {
        //     if (Score > 1) {
        //         document.querySelector('.message').textContent = 'Too High';
        //         Score--;
        //         document.querySelector('.score').textContent = Score;
        //     }
        //     else {
        //         document.querySelector('.message').textContent = 'You lost the game';
        //         document.querySelector('.score').textContent = 0;
        //     }
        // }
        // else if (guess < secretNumber) {
        //     if (Score > 1) {
        //         document.querySelector('.message').textContent = 'Too Low';
        //         Score--;
        //         document.querySelector('.score').textContent = Score;
        //     }
        //     else {
        //         document.querySelector('.message').textContent = 'You lost the game';
        //         document.querySelector('.score').textContent = 0;
        //     }
        // }

    });

    document.querySelector('.again').addEventListener('click', function(){
        Score=20;
        secretNumber = Math.trunc(Math.random() * 21);
        displayMessage('Start gussing');
        document.querySelector('.score').textContent = Score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor='#222';

            document.querySelector('.number').style.width='15rem';



    })