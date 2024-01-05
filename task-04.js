const input = document.querySelector('input');
const boxesContainer = document.getElementById('boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(){
  const amount = input.valueAsNumber;

const boxes = [];
for (let i = 0; i < amount; i+= 1) {
  const box = document.createElement('div');
  box.style.width = `${30 + 10 * i}px`;
  box.style.height = `${30 + 10 * i}px`;
  box.style.backgroundColor = getRandomHexColor();
  boxes.push(box);

}
boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}