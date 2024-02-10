const n = 10;
const arr = [];
const container = document.getElementById('container');

init();

function init() {
  for (let i = 0; i < n; ++i) {
    arr[i] = Math.random();
  }
  showBars();
}

function play() {
  bubbleSort(arr);
  showBars();
}

function bubbleSort(arr = []) {
  do {
    var swapped = false;
    for (let i = 1; i < arr.length; ++i) {
      if (arr[i - 1] > arr[i]) {
        swapped = true;
        // swap
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      }
    }
  } while (swapped);
}

function showBars() {
  container.innerHTML = '';
  for (let i = 0; i < n; ++i) {
    const bar = document.createElement('div');
    bar.style.height = arr[i] * 100 + '%';
    bar.classList.add('bar');
    container.appendChild(bar);
  }
}
