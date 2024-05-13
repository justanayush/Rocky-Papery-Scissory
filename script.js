const userResult = document.querySelector('.userResult');
const button = document.querySelector('.btn');
const cpuResult = document.querySelector('.cpuResult');
const rock = document.querySelector('.rock');
const rockImg = document.querySelector('.rock-img');
const paperImg = document.querySelector('.paper-img');
const scissorImg = document.querySelector('.scissor-img');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const userImg = document.querySelector('.userImg');
const cpuImg = document.querySelector('.cpuImg');
const winLoss = document.querySelector('.win-loss');
function shake(){
    userResult.classList.add('shake');
    cpuResult.classList.add('shake');
}
rock.classList.add('options');
paper.classList.add('options');
scissor.classList.add('options');
const arr = ["images/rock.png", "images/paper.png", "images/scissor.png"];
function gamePlay(){
    let randNum = Math.floor(Math.random() * 3);
    
    winLoss.innerText = '';
    winLoss.style.display = 'none';
    button.innerText = "Select an Option";
    button.style.display = 'block';
    button.style.pointerEvents = 'none';
rock.addEventListener('click',() => {
    const url = rockImg.getAttribute('src');
    rock.style.opacity = '1';
    button.style.pointerEvents = 'all';
    paper.style.pointerEvents = 'none';
    scissor.style.pointerEvents = 'none';
    button.innerText = "Tap to Play";
    button.addEventListener('click',()=>{
        shake();
        setTimeout(()=>{
            userResult.classList.remove('shake');
            cpuResult.classList.remove('shake');
            userImg.setAttribute('src',url);
            cpuImg.setAttribute('src',arr[randNum]);
            const output = conditions[obj[url] + obj[arr[randNum]]];
            button.style.display = 'none';
            winLoss.innerText = output;
            winLoss.style.display = 'block';
            winLoss.addEventListener('click',()=>{
                userImg.setAttribute('src',"images/rock.png");
                cpuImg.setAttribute('src',"images/rock.png");
                randNum = Math.floor(Math.random() * 3);
                gamePlay();
            })
        },2000)
    })
   
})
paper.addEventListener('click',() => {
    const url = paperImg.getAttribute('src');
    paper.style.opacity = '1';
    button.style.pointerEvents = 'all';
    rock.style.pointerEvents = 'none';
    scissor.style.pointerEvents = 'none';
    button.innerText = "Tap to Play";
    button.addEventListener('click',()=>{
        shake();
        setTimeout(()=>{
            userResult.classList.remove('shake');
            cpuResult.classList.remove('shake');
            userImg.setAttribute('src',url);
            cpuImg.setAttribute('src',arr[randNum]);
            const output = conditions[obj[url] + obj[arr[randNum]]];
            button.innerText = output;
            button.style.display = 'none';
            winLoss.innerText = output;
            winLoss.style.display = 'block';
            winLoss.addEventListener('click',()=>{
                userImg.setAttribute('src',"images/rock.png");
                cpuImg.setAttribute('src',"images/rock.png");
                randNum = Math.floor(Math.random() * 3);
                gamePlay();
            })
        },2000)
    })
    
})
scissor.addEventListener('click',() => {
    const url = scissorImg.getAttribute('src');
    scissor.style.opacity = '1';
    button.style.pointerEvents = 'all';
    rock.style.pointerEvents = 'none';
    paper.style.pointerEvents = 'none';
    button.innerText = "Tap to Play";
    button.addEventListener('click',()=>{
        shake();
        setTimeout(()=>{
            userResult.classList.remove('shake');
            cpuResult.classList.remove('shake');
            userImg.setAttribute('src',url);
            cpuImg.setAttribute('src',arr[randNum]);
            const output = conditions[obj[url] + obj[arr[randNum]]];
            button.innerText = output;
            button.style.display = 'none';
            winLoss.innerText = output;
            winLoss.style.display = 'block';
            winLoss.addEventListener('click',()=>{
                userImg.setAttribute('src',"images/rock.png");
                cpuImg.setAttribute('src',"images/rock.png");
                randNum = Math.floor(Math.random() * 3);
                gamePlay();
            })
        },2000)
    })
    
})

}
const obj = {
    "images/rock.png":"R",
    "images/paper.png":"P",
    "images/scissor.png":"S",
}
const conditions = {
    "SS": "Its a Drawww ! \n Tap to Play Again !",
    "RR": "Its a Drawww ! \n Tap to Play Again !",
    "PP": "Its a Drawww ! \n Tap to Play Again !",
    "RS": "You Won :) \n Tap to Play Again !",
    "SP": "You Won :) \n Tap to Play Again !",
    "PR": "You Won :) \n Tap to Play Again !",
    "RP": "You Lose \n Try Again ;)",
    "PS": "You Lose \n Try Again ;)",
    "PR": "You Lose \n Try Again ;)"
}
gamePlay();