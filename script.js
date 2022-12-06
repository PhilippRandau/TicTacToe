let fields = [];
let playerSign = 'cross.png'
let playerNames = [];
let gameWinner = '';


function init() {
    let i = 1;
    askPlayerNames(i);

}

function askPlayerNames(i) {
    if (i < 3) {
        document.getElementById('blur-playfield').innerHTML = templateAskPlayerNames(i);
    } else {
        startGame();
    }
}

function startGame(){
    document.getElementById('blur-playfield').innerHTML = '';
    document.getElementById('blur-playfield').classList.add('d-none');
    playerChange();
}

function pushPlayerNames(i) {
    let inputPlayerName = document.getElementById('player-names');
    playerNames.push(inputPlayerName.value);
    i++;
    askPlayerNames(i);
}

function fillShape(id) {
    if (fieldEmpty(id) && conditionStart()) {
        fields[id] = `${playerSign}`;
        showImages(id);
        playerChange();
    }
    winner();
    draw();
}

function fieldEmpty(id) {
    return !fields[id];
}

function conditionStart() {
    return playerNames.length == 2;
}

function playerChange() {
    let playerName = document.getElementById('player');

    if (actualPlayerCircle()) {
        playerName.innerHTML = templatePlayerChange(playerNameFromSign());
        playerSign = 'cross.png'

    } else if (actualPlayerCross()) {
        playerName.innerHTML = templatePlayerChange(playerNameFromSign());
        playerSign = 'circle.png'
    }
}

function playerNameFromSign() {
    if (actualPlayerCircle()) {
        return playernumber = 0;
    } else if (actualPlayerCross()) {
        return playernumber = 1;
    }

}

function showImages(id) {
    let showCross = document.getElementById(`cross-${id}`);
    let showCircle = document.getElementById(`circle-${id}`);

    if (actualPlayerCircle()) {
        showCross.classList.remove('d-none');
    } else if (actualPlayerCross()) {
        showCircle.classList.remove('d-none');
    }
}

function actualPlayerCross() {
    return playerSign == 'cross.png';
}

function actualPlayerCircle() {
    return playerSign == 'circle.png';
}

function winner() {

    checkWinHorizontal_1();
    checkWinHorizontal_2();
    checkWinHorizontal_3();
    checkWinVertical_1();
    checkWinVertical_2();
    checkWinVertical_3();
    checkWinDiagonal0_8();
    checkWinDiagonal6_2();

    showWinnerEndScreen();
    showLineOfWinnerCircle();
    showLineOfWinnerCross();

}

function checkWinHorizontal_1() {
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        gameWinner = playerSign;
        console.log(gameWinner);
        document.getElementById('horizontal-row-1').style.transform = "scaleX(1)";
    }
}

function checkWinHorizontal_2() {
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        gameWinner = playerSign;
        console.log(gameWinner);
        document.getElementById('horizontal-row-2').style.transform = "scaleX(1)";
    }
}

function checkWinHorizontal_3() {
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        gameWinner = playerSign;
        console.log(gameWinner);
        document.getElementById('horizontal-row-3').style.transform = "scaleX(1)";
    }
}

function checkWinVertical_1() {
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        gameWinner = playerSign;
        console.log(gameWinner);
        document.getElementById('vertical-column-1').style.transform = "rotate(90deg) scaleX(1)";
    }
}

function checkWinVertical_2() {
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        gameWinner = playerSign;
        console.log(gameWinner);
        document.getElementById('vertical-column-2').style.transform = "rotate(90deg) scaleX(1)";
    }
}

function checkWinVertical_3() {
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        gameWinner = playerSign;
        console.log(gameWinner);
        document.getElementById('vertical-column-3').style.transform = "rotate(90deg) scaleX(1)";
    }
}

function checkWinDiagonal0_8() {
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        gameWinner = playerSign;
        console.log(gameWinner);
        document.getElementById('diagonal-0-8').style.transform = "rotate(45deg) scaleX(1)";
    }
}


function checkWinDiagonal6_2() {
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        gameWinner = playerSign;
        console.log(gameWinner);
        document.getElementById('diagonal-6-2').style.transform = "rotate(-45deg) scaleX(1)";
    }
}

function showWinnerEndScreen() {
    if (gameWinner != '') {
        document.getElementById('blur-playfield').innerHTML = templateGameWin(playerNameFromSign());
        document.getElementById('blur-playfield').classList.remove('d-none');
    }
}

function showLineOfWinnerCircle() {
    if (gameWinner == 'circle.png') {
        let elements = document.getElementsByClassName('horizontal-line'); // get all elements
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "#6E8ED6";
        }
    }
}

function showLineOfWinnerCross() {
    if (gameWinner == 'cross.png') {
        let elements = document.getElementsByClassName('horizontal-line'); // get all elements
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "#F0C44C";
        }
    }

}

function draw() {
    let occupiedSpaces = 0;
    for (let index = 0; index < 9; index++) {
        const element = fields[index];
        if (element == 'circle.png' || element == 'cross.png') {
            occupiedSpaces++;
        }
    }
    if (allSpacesOccupied(occupiedSpaces) && gameWinnerEmpty()) {
        showDrawEndScreen();
    }
}

function allSpacesOccupied(occupiedSpaces) {
    return occupiedSpaces == 9;
}

function gameWinnerEmpty() {
    return gameWinner == '';
}

function showDrawEndScreen() {
    document.getElementById('blur-playfield').innerHTML = templateGameDraw();
    document.getElementById('blur-playfield').classList.remove('d-none');
}

function restartGame() {
    fields = [];
    gameWinner = '';
    resetSigns();
    resetLines();
    document.getElementById('blur-playfield').classList.add('d-none');
}

function resetSigns() {
    for (let id = 0; id < 9; id++) {
        document.getElementById(`cross-${id}`).classList.add('d-none');
        document.getElementById(`circle-${id}`).classList.add('d-none');
    }
}


function resetLines() {
    document.getElementById('horizontal-row-1').style.transform = "scaleX(0)";
    document.getElementById('horizontal-row-2').style.transform = "scaleX(0)";
    document.getElementById('horizontal-row-3').style.transform = "scaleX(0)";
    document.getElementById('vertical-column-1').style.transform = "rotate(90deg) scaleX(0)";
    document.getElementById('vertical-column-2').style.transform = "rotate(90deg) scaleX(0)";
    document.getElementById('vertical-column-3').style.transform = "rotate(90deg) scaleX(0)";
    document.getElementById('diagonal-0-8').style.transform = "rotate(45deg) scaleX(0)";
    document.getElementById('diagonal-6-2').style.transform = "rotate(-45deg) scaleX(0)";
}



// Templates


function templateAskPlayerNames(i) {
    return /*html*/`
    <form class="ask-playername" onsubmit="pushPlayerNames(${i}); return false;">
    <span>
        Spieler${i}:<input required id="player-names" type="text" placeholder="Bitte Namen eingeben">
    </span> 
    <button class="btn" id="button">Bestätigen</button>
    </form>
    `;
}


function templatePlayerChange(playerNumber) {
    return /*html*/`
    <h2>Du bist dran:</h2>
    <span>Spieler: ${playerNames[playerNumber]} 
    <img class="player-sign" src="./img/${playerSign}" alt=""></span>
    
    `;
}

function templateGameDraw() {
    return /*html*/`
    <h1>DRAW</h1>
    <button onclick="restartGame()" class="btn restart-game" id="button">Bestätigen</button>
    `;
}

function templateGameWin(playerNumber) {
    return /*html*/`
    <h1>Win!</h1>
    <h2>${playerNames[playerNumber]}</h2>
    <button onclick="restartGame()" class="btn restart-game" id="button">Erneut spielen</button>
    `;
}