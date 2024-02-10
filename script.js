const n = 20;
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
  // Storing copy of arr to keep original array intact.
  // After applying bubble sort array will be sorted & when we
  // apply moves on sorted array it doesnot work.
  const arrcopy = [...arr];
  const moves = bubbleSort(arrcopy);
  animate(moves);
}

function animate(moves) {
  if (moves.length == 0) {
    // to remove swap apirs color after sorting done
    showBars();
    return;
  }
  const move = moves.shift();
  const [i, j] = move.indices;
  if (move.type === 'swap') {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  showBars(move);
  setTimeout(() => {
    animate(moves);
  }, 200);
}

function bubbleSort(arr = []) {
  const moves = [];
  do {
    var swapped = false;

    for (let i = 1; i < arr.length; ++i) {
      moves.push({ indices: [i - 1, i], type: 'compare' });
      if (arr[i - 1] > arr[i]) {
        swapped = true;
        // store moves
        moves.push({ indices: [i - 1, i], type: 'swap' });
        // swap
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      }
    }
  } while (swapped);
  return moves;
}

function showBars(move) {
  container.innerHTML = '';
  for (let i = 0; i < n; ++i) {
    const bar = document.createElement('div');
    bar.style.height = arr[i] * 100 + '%';
    bar.classList.add('bar');

    // changing color of bar to show swapping pairs
    if (move && move.indices.includes(i)) {
      // mark bar color according to operation type
      // for compare "blue" & for swap "red"
      bar.style.backgroundColor = move.type === 'swap' ? 'red' : 'blue';
    }
    container.appendChild(bar);
  }
}
