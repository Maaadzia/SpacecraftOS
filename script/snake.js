const playBoard = document.querySelector(".playBoard");

let foodX, foodY;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 15) + 1;
    foodY = Math.floor(Math.random() * 15) + 1;
}

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
changeFoodPosition();
initGame();