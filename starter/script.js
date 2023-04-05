'use strict';
/*
console.log(document.querySelector('.message').
textContent); 
document.querySelector('.message').textContent = 
'Correct Number!'; 

document.querySelector('.number').textContent = 13; 
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/ 

let number = Math.trunc(Math.random() * 20) + 1; 
let score = 20; 
let HScore = 0;

document.querySelector('.number').textContent = number;


document.querySelector('.again').addEventListener
('click', function(){
    number = Math.trunc(Math.random() * 20) + 1; 
    score = 20; 

    document.querySelector('.message').textContent =
    'Start guessing...';
    document.querySelector('.score').textContent =
    score; 
    document.querySelector('.guess').value = ''; 
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.
    backgroundColor = '#222';
    document.querySelector('.number').style.width = 
    '15rem';
});

document.querySelector('.check').addEventListener
('click', function(){
    const guess =Number(document.querySelector
        ('.guess').value);
    console.log(guess, typeof(guess));

    if(!guess){
        document.querySelector('.message').textContent = 
        'No Number!'; 
     }else if(guess > number){
        if(score > 1){
        document.querySelector('.message').textContent =
        'Guess is too high';
        score--; 
        document.querySelector('.score').textContent = 
        score; 
        }else{
            document.querySelector('.message').textContent = 
            'You lost!'; 
            document.querySelector('.score').textContent = 
            0; 
            document.querySelector('body').style.
            backgroundColor = 'red'; 
            document.querySelector('.number').textContent = number;
            document.querySelector('.number').style.width = 
            '30rem';
         };
     }else if(guess < number){ 
        if(score > 1){
        document.querySelector('.message').textContent =
        'Guess is too low';
        score--;
        document.querySelector('.score').textContent = 
        score; 
        }else{
            document.querySelector('.message').textContent = 
            'You lost!'; 
            document.querySelector('.score').textContent = 
            0; 
            document.querySelector('body').style.
            backgroundColor = 'red';
            document.querySelector('.number').textContent = number;
            document.querySelector('.number').style.width = 
            '30rem'; 
         };
     }else if(guess === number){
        document.querySelector('.message').textContent =
        'Correct Number!'; 
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