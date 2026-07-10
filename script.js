let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice() {
    const choices = ['batu', 'gunting', 'kertas'];
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(player, computer) {
    if (player === computer) return 'Seri!';
    
    if (player === 'batu' && computer === 'gunting') return 'Kamu Menang! 🎉';
    if (player === 'batu' && computer === 'kertas') return 'Kamu Kalah! 😢';
    
    if (player === 'gunting' && computer === 'kertas') return 'Kamu Menang! 🎉';
    if (player === 'gunting' && computer === 'batu') return 'Kamu Kalah! 😢';
    
    if (player === 'kertas' && computer === 'batu') return 'Kamu Menang! 🎉';
    if (player === 'kertas' && computer === 'gunting') return 'Kamu Kalah! 😢';
}

function main(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    
    // Play sound based on result
    if (result.includes('Menang')) {
        scorePlayer++;
        playSound('winSound');
    } else if (result.includes('Kalah')) {
        scoreComputer++;
        playSound('loseSound');
    } else if (result.includes('Seri')) {
        playSound('tieSound');
    }
    
    const resultText = `
        Kamu pilih: ${getEmoji(playerChoice)}<br>
        Komputer pilih: ${getEmoji(computerChoice)}<br>
        <strong>${result}</strong>
    `;
    
    document.getElementById('result-text').innerHTML = resultText;
    document.getElementById('score-text').textContent = 
        `Skor: Kamu ${scorePlayer} - ${scoreComputer} Komputer`;
}

function getEmoji(choice) {
    const emojis = {
        'batu': '🪨',
        'gunting': '✂️',
        'kertas': '📄'
    };
    return emojis[choice];
}

function reset() {
    scorePlayer = 0;
    scoreComputer = 0;
    document.getElementById('result-text').innerHTML = '';
    document.getElementById('score-text').textContent = '';
}

// Function untuk play sound
function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.currentTime = 0;  // Reset ke awal
    sound.play().catch(error => console.log('Sound tidak bisa diplay:', error));
}
