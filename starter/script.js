'use strict';

let number = Math.trunc(Math.random() * 20) + 1; 
let score = 20; 
let HScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent =
    message
};

document.querySelector('.again').addEventListener
('click', function(){
    number = Math.trunc(Math.random() * 20) + 1; 
    score = 20; 

    document.querySelector('.message').textContent =
    'Start guessing...';
    document.querySelector('.score').textContent =
    score; 
    document.querySelector('.guess').value = ''; 
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.
    backgroundColor = '#222';
    document.querySelector('.number').style.width = 
    '15rem';
});

document.querySelector('.check').addEventListener
('click', function(){
    const guess =Number(document.querySelector
        ('.guess').value);

    if(!guess){
        displayMessage('No Number!'); 
     }else if(guess !== number){
        if(score > 1){
            displayMessage(guess > number ? 'Guess is too high!' : 'Guess is too low!');
            score--; 
            document.querySelector('.score').textContent = 
            score; 
            }else{
                displayMessage('You Lost!')
                document.querySelector('.score').textContent = 
                0; 
                document.querySelector('body').style.
                backgroundColor = 'red'; 
                document.querySelector('.number').textContent = number;
                document.querySelector('.number').style.width = 
                '30rem';
             };
     }else if(guess === number){
        displayMessage('Correct Number!') 
        document.querySelector('body').style.
        backgroundColor = '#60b347'; 
        document.querySelector('.number').textContent = number;
        document.querySelector('.number').style.width = 
        '30rem';
        if (score > HScore){
            HScore = score; 
            document.querySelector('.highscore').textContent =
            score; 
        };
     };
}); 