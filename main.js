let topPos = 50;
let leftPos = 50;

let topPlayer2 = 50
let leftPlayer2 = 50

document.body.onkeyup = function (e) {

    if (e.keyCode == 38) {
        topPos--;
        player1.style.top = topPos + '%';
        checkWinner();
    } else if (e.keyCode == 40) {
        topPos++;
        player1.style.top = topPos + '%';
        checkWinner();
    } else if (e.keyCode == 39) {
        leftPos++;
        player1.style.left = leftPos + '%';
        checkWinner();
    }
    else if (e.keyCode == 37) {
        leftPos--;
        player1.style.left = leftPos + '%';
        checkWinner();
    }

    if(e.keyCode == 87){
        topPlayer2--;
        player2.style.top = topPlayer2+ '%';
        checkWinner()
    }else if(e.keyCode == 83){
        topPlayer2++;
        player2.style.top = topPlayer2+ '%';
        checkWinner()
    }else if(e.keyCode == 65){
        leftPlayer2--
        player2.style.left = leftPlayer2+'%';
    }else if(e.keyCode == 68){
        leftPlayer2++
        player2.style.left = leftPlayer2+'%';
    }

    console.log(e.keyCode);
}

let targetTop = 50;
let targetLeft = 50;
function setTarget() {
    targetTop = Math.floor(Math.random() * 100);
    targetLeft = Math.floor(Math.random() * 100);
    target.style.top = targetTop + '%';
    target.style.left = targetLeft + '%';
}
setTarget();
let score1 = 0;
let score2 = 0;
function checkWinner() {
    if (topPos == targetTop && leftPos == targetLeft) {
        setTarget();
        score1++
        player1Score.innerText = score1

    }
    if(topPlayer2 == targetTop && leftPlayer2 == targetLeft){
        setTarget();
        score2++
        player2Score.value = score2
        
    }
    if(score1 == 3){
        alert('Зелений переможець!')
        score1 == 0
        score2 == 0
    }
    if(score2 == 3){
        alert('Синій переможець!')
        score1 == 0
        score2 == 0
    }
}