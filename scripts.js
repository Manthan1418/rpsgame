function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (userChoice === computerChoice) {
        result = "It's a tie😉";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win😍';
    } else {
        result = 'You lose😒';
    }

    document.getElementById('result-text').innerText = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}
function clearResults() { document.getElementById('result-text').innerText = ''; document.getElementById('computer-choice').innerText = ''; }