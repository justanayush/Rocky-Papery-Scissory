const userResult = document.querySelector('.userResult');
const button = document.querySelector('.btn');
const cpuResult = document.querySelector('.cpuResult');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const userImg = document.querySelector('.userImg');
const cpuImg = document.querySelector('.cpuImg');
const arr = ["images/rock.png", "images/paper.png", "images/scissors.png"];
function shake(){
    userResult.classList.add('shake');
    cpuResult.classList.add('shake');
}

button.addEventListener('click',()=>{
    gamePlay()
})

function gamePlay(source){

    let randNum = Math.floor(Math.random() * 3);
    const url = arr[randNum]
    button.addEventListener('click', () => {
        shake();
        setTimeout(() => {
            userResult.classList.remove('shake');
            cpuResult.classList.remove('shake');
            console.log(source)
            userImg.setAttribute('src',source)
            cpuImg.setAttribute('src',url)
            conditions();
        },2000)
    })
}

function conditions(){
    if (userImg.getAttribute('src') === cpuImg.getAttribute('src')){
        button.innerText = "It's a drawww ;( \n Tap to Restart";
    
    }else if((userImg.getAttribute('src','images/rock.png') && cpuImg.getAttribute('src','images/scissors.png')) || (userImg.getAttribute('src','scissors/rock.png') && cpuImg.getAttribute('src','images/paper.png')) || (userImg.getAttribute('src','images/paper.png') && cpuImg.getAttribute('src','images/rock.png'))){
        button.innerText = "Congratulations :) \n You Won \n Tap to Restart ";
    
    }else if((userImg.getAttribute('src','images/rock.png') && cpuImg.getAttribute('src','images/paper.png')) || (userImg.getAttribute('src','scissors/rock.png') && cpuImg.getAttribute('src','images/rock.png')) || (userImg.getAttribute('src','images/paper.png') && cpuImg.getAttribute('src','images/scissors.png'))){
        button.innerText = "Oh! , you've lost \n Please Try Again...";
    }
}

rock.addEventListener('click', () => {
        const src = arr[0];
        rock.style.opacity = '1';
        paper.classList.add('none');
        scissor.classList.add('none');
        button.innerHTML = "Tap to Play !!!"
        button.style.pointerEvents = 'all';
        gamePlay("images/rock.png");
})
paper.addEventListener('click', () => {
        paper.style.opacity = '1';
        rock.classList.add('none');
        scissor.classList.add('none');
        button.innerHTML = "Tap to Play !!!"
        button.style.pointerEvents = 'all';
        gamePlay("images/paper.png");
})
scissor.addEventListener('click', () => {
        scissor.style.opacity = '1';
        paper.classList.add('none');
        rock.classList.add('none');
        button.innerHTML = "Tap to Play !!!"
        button.style.pointerEvents = 'all';
        gamePlay("images/scissors.png");
})


