let playerScore = 0;
let computerScore = 0;
const resultElement = document.getElementById('result');

function getComputerChoice () {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "it's a tie!";
    }
    if (
        (playerChoice === 'rock' && computerChoice ==='scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        return "You win!";
    }
    computerScore++;
    return "Computer wins!";
}

function updateScoreboard() {
    document.getElementById('scoreboard').innerText = `player: ${playerScore} | Computer: ${computerScore}`;
}

function play(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById('result');
    resultElement.classList.remove('animate-result');
    resultElement.innerText = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
    void resultElement.offsetWidth;
    resultElement.classList.add('animate-result');
    updateScoreboard();
 }
 function resetGame() {
    playerScore = 0;
    computerScore= 0;
    updateScoreboard();
    const resultElement = document.getElementById('result');
    resultElement.classList.remove('animate-result');
    resultElement.innerText = "Score resets! play again.";
    void resultElement.offsetWidth;
    resultElement.classList.add('animate-result'); 
 }