  
let gridX = 16;
let gridY = 16;

function startPad(gridX, gridY) {
  board.innerHTML = '';

    for(let y = 0; y < gridY; y++){
      for(let x = 0; x < gridX; x++){
        const divBoard = document.createElement('div');
        divBoard.className = 'grid';
        divBoard.style.flex = `1 1 calc(100% / ${gridY})`;
        divBoard.style.height = `calc(100% / ${gridX})`;
        document.getElementById('board').appendChild(divBoard);
    }
}

const grid = document.querySelectorAll('.grid');

grid.forEach((gridItem) => {
  gridItem.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'black';
  });
});


}
startPad(gridX, gridY)

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  const userInput = prompt('How many elements per line in your grid? (max 100)');
  if (userInput !== null && userInput !== '' && userInput <= 100) {
    gridX = gridY = userInput;
    startPad(gridX, gridY);
}
})

const rstBtn = document.querySelector('.rstBtn')
rstBtn.addEventListener('click', () => {
  startPad(gridX, gridY)});