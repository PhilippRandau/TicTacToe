let fields = [];
let playerSign = 'cross.png'
let playerNames = [];

function init() {
    let i = 1;
    askPlayerNames(i);

}

function askPlayerNames(i) {


    if (i < 3) {
        document.getElementById('ask-playername').innerHTML = templateAskPlayerNames(i);
    } else {
        document.getElementById('ask-playername').innerHTML = '';
        document.getElementById('ask-playername').classList.add('d-none');
    }


}

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

function pushPlayerNames(i) {
    let inputPlayerName = document.getElementById('player-names');
    playerNames.push(inputPlayerName.value);
    i++;
    askPlayerNames(i);

}

function fillShape(id) {
    if (fieldEmpty(id) && conditionStart()) {
        fields[id] = `${player}`;
        showImages(id);
        playerChange();
    }

}

function fieldEmpty(id) {
    return !fields[id];
}

function conditionStart() {
    return playerNames.length == 2;
}

function playerChange() {
    let playerName = document.getElementById('player');
    if (playerSign == 'circle.png') {
        playerSign = 'cross.png'
        playerName.innerHTML = `Spieler: ${playerNames[0]}`;
    } else if (playerSign == 'cross.png') {
        playerSign = 'circle.png'
        playerName.innerHTML = `Spieler: ${playerNames[1]}`;
    }

}

function showImages(id) {
    let showCross = document.getElementById(`cross-${id}`);
    let showCircle = document.getElementById(`circle-${id}`);

    if (playerSign == 'circle.png') {
        showCross.classList.remove('d-none');
    } else if (playerSign == 'cross.png') {
        showCircle.classList.remove('d-none');
    }

}