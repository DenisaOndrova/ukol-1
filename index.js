const updateCounter = (value) => {
  const valueElm = document.querySelector('.counter__value');
  valueElm.textContent = String(value).padStart(2, '0');
};

let value = Number(document.querySelector('.counter__value').textContent);
const btnUp = document.querySelector('.counter__up');
const btnDown = document.querySelector('.counter__down');

btnUp.addEventListener('click', () => {
  if (value < 99) {
    value = value + 1;
    updateCounter(value);
  }
});

btnDown.addEventListener('click', () => {
  if (value > 0) {
    value = value - 1;
    updateCounter(value);
  }
});

updateCounter(value);
