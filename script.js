const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt('Guess a number between 1 and 100')
    guess = Number(guess);

if(isNaN(guess) || guess > 100 || guess < 1){
    window.alert("Why you do dis?");
}
else{
    attempts++;
    if(guess < answer){
            window.alert('Guess Higher');
        }
    else if(guess > answer){
            window.alert('Guess Lower')
                } 
    else{
        window.alert("Correct! Now go outside and touch grass.")
        running = false;
    }     
}
    }

