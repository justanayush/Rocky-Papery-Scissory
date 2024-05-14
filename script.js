// DOM elements
const userResult = document.querySelector('.userResult');
const button = document.querySelector('.btn');
const cpuResult = document.querySelector('.cpuResult');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const userImg = document.querySelector('.userImg');
const cpuImg = document.querySelector('.cpuImg');
const winLoss = document.querySelector('.win-loss');
const ops = document.querySelectorAll('.options')
// Function to add shake animation classes
function shake() {
    userResult.classList.add('shake');
    cpuResult.classList.add('shake');
}



// Array of choice images
const arr = ["images/rock.png", "images/paper.png", "images/scissor.png"];

// Reset game state
function resetGame() {
    rock.classList.add('options');
    paper.classList.add('options');
    scissor.classList.add('options');
    userResult.classList.remove('flip');
    userImg.setAttribute('src', 'images/rock.png');
    cpuImg.setAttribute('src', 'images/rock.png');
    button.innerText = "Select an Option";
    button.style.display = 'block';
    button.style.pointerEvents = 'none';
    rock.style.pointerEvents = 'all';
    paper.style.pointerEvents = 'all';
    scissor.style.pointerEvents = 'all';
    winLoss.innerText = '';
    winLoss.style.display = 'none';
}

// Function to handle user choice
function handleChoice(choiceElement, choiceUrl) {
    choiceElement.addEventListener('click', () => {
        const url = choiceUrl;
        choiceElement.style.opacity = '1';
        button.style.pointerEvents = 'all';
        rock.style.pointerEvents = 'none';
        paper.style.pointerEvents = 'none';
        scissor.style.pointerEvents = 'none';
        button.innerText = "Tap to Play";
        button.addEventListener('click', () => {
            shake();
            setTimeout(() => {
                userResult.classList.remove('shake');
                cpuResult.classList.remove('shake');
                userImg.setAttribute('src', url);
                userResult.classList.add('flip');
                const randNum = Math.floor(Math.random() * 3);
                cpuImg.setAttribute('src', arr[randNum]);
                const output = conditions[obj[url] + obj[arr[randNum]]];
                button.style.display = 'none';
                winLoss.innerText = output;
                winLoss.style.display = 'block';
                // Event listener for restarting the game
                winLoss.addEventListener('click', ()=>{
                    gamePlay();
                })
            }, 2000);
        });
    });
}

// Function to start the game
function gamePlay() {
    resetGame();
    handleChoice(rock, "images/rock.png");
    handleChoice(paper, "images/paper.png");
    handleChoice(scissor, "images/scissor.png");
}

// Object mapping choice images to their corresponding symbols
const obj = {
    "images/rock.png": "R",
    "images/paper.png": "P",
    "images/scissor.png": "S",
};

// Object mapping game outcomes to messages
const conditions = {
    "SS": "It's a Draw! \n Tap to Play Again!",
    "RR": "It's a Draw! \n Tap to Play Again!",
    "PP": "It's a Draw! \n Tap to Play Again!",
    "RS": "You Won :) \n Tap to Play Again!",
    "SP": "You Won :) \n Tap to Play Again!",
    "PR": "You Won :) \n Tap to Play Again!",
    "RP": "You Lose \n Try Again ;)",
    "PS": "You Lose \n Try Again ;)",
    "SR": "You Lose \n Try Again ;)"
};

// Initialize the game
gamePlay();

