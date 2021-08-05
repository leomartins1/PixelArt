function generateBoard() {
  const pixelBoardSize = document.querySelector("#board-size").value;
  const pixelBoard = document.querySelector('#pixel-board');
  for (let indexLine = 0; indexLine < pixelBoardSize; indexLine += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'row';
    pixelBoard.appendChild(pixelLine);
    for (let indexColumn = 0; indexColumn < pixelBoardSize; indexColumn += 1) {
      const pixelColumn = document.createElement('div');
      pixelColumn.className = 'pixel';
      pixelLine.appendChild(pixelColumn);
    }
  }
}

function eraseBoard() {
  let pixelRow = document.querySelectorAll('.row');
  for (let index = 0; index<pixelRow.length; index += 1) {
    pixelRow[index].remove();
  }
}

window.onload = generateBoard;

document.querySelector("#resize-btn").addEventListener('click', () =>{
  eraseBoard();
  generateBoard();
})

const colors = document.getElementsByClassName('color');
function selectColor(selectedColor) {
  for (let index = 0; index < colors.length; index += 1) {
    for (let indexColors = 0; indexColors < colors.length; indexColors += 1) {
      colors[indexColors].classList.remove('selected');
    }
    const eventTarget = selectedColor.target;
    eventTarget.classList.add('selected');
  }
}
document.getElementById('color-palette').addEventListener('click', selectColor);

const pixelBoard2 = document.getElementById('pixel-board');

function changeColor(event) {
  const selected = document.querySelector('.selected');
  const color = getComputedStyle(selected).backgroundColor;
  event.target.style.backgroundColor = color;
}
pixelBoard2.addEventListener('click', changeColor);

function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
  }
}
document.getElementById('clear-btn').addEventListener('click', clearBoard);
