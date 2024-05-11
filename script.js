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


function gamePlay(src){
    let randNum = Math.floor(Math.random() * 3);
    const source = src;
    button.addEventListener('click', () => {
        shake();
        setTimeout((source) => {
            userResult.classList.remove('shake');
            cpuResult.classList.remove('shake');
            console.log(source)
            userImg.setAttribute('src', source);
        },2000)
    })
}

rock.addEventListener('click', () => {
        const src = arr[0];
        rock.style.opacity = '1';
        paper.classList.add('none');
        scissor.classList.add('none');
        button.innerHTML = "Tap to Play !!!"
        button.style.pointerEvents = 'all';
        gamePlay(src);
})
paper.addEventListener('click', () => {
        paper.style.opacity = '1';
        rock.classList.add('none');
        scissor.classList.add('none');
        button.innerHTML = "Tap to Play !!!"
        button.style.pointerEvents = 'all';
        gamePlay(this);
})
scissor.addEventListener('click', () => {
        scissor.style.opacity = '1';
        paper.classList.add('none');
        rock.classList.add('none');
        button.innerHTML = "Tap to Play !!!"
        button.style.pointerEvents = 'all';
        gamePlay(this);
})


