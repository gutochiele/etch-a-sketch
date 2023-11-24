
    for(y = 0; y < 16; y++){
    for(x = 0; x < 16; x++){
        var divBoard = document.createElement('div');
        divBoard.className = 'grid';
        document.getElementById('board').appendChild(divBoard);
    }
}

const grid = document.querySelectorAll('.grid');

grid.forEach((gridItem) => {
  gridItem.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'black';
  });
});