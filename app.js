// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// assign min and max
minNum.textContent = 1;
maxNum.textContent = 10;

// play again
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

// listen to guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // check if won
  if(guess === winningNum){
    gameOver(true, `${winningNum} is correct. You have Won`);
  } else {
    guessesLeft -= 1;
    if(guessesLeft === 0){
      gameOver(false, `${winningNum} is the correct answer you lost. Tru Again!`);
    } else {
      setMessage(`you still have ${guessesLeft} trys left`);
    }
  }
})

function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';
  // disable input
  guessInput.disable = true;
  // color border
  guessInput.style.borderColor = color;
  // text color
  guessInput.style.color = color;
  // message
  setMessage(msg);


  // 
  guessBtn.value = 'Play Again';
  guessBtn.className = 'play-again';
}
// random number
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg; 
}
