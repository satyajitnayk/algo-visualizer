const algorithmSelect = document.getElementById('algorithms');
let timeoutIds = []; // Declare an array to store timeout IDs

/**
 *
 * @param {Array} arr
 * @param {String} algoName
 * @returns moves array
 */
function getMovesForAlgo(array, algoName) {
  if (algoName === SORTING_ALGOS.BUBBLE_SORT) {
    return bubbleSort(array);
  } else if (algoName === SORTING_ALGOS.INSERTION_SORT) {
    return insertionSort(array);
  }
}

function getSelectedAlgorithm() {
  const selectElement = document.getElementById('algorithms');
  const selectedValue = selectElement.value;
  return selectedValue;
}

function play() {
  // reset if animation already playing
  resetAnimation();
  // set selected algorithm
  const selectedAlgorithm = getSelectedAlgorithm();
  // sending copy of arr to keep original array intact.
  // After applying bubble sort array will be sorted & when we
  // apply moves on sorted array it doesnot work.
  const moves = getMovesForAlgo(arr.slice(), selectedAlgorithm);

  animate(moves);
}

function animate(moves) {
  for (const [index, move] of moves.entries()) {
    const timeoutId = setTimeout(function () {
      const [i, j] = move.indices;
      if (move.type === OPERATION_TYPES.SWAP) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        // console.log(`${newarr} after swapping ${i} ->${j}`);
      } else if (move.type === OPERATION_TYPES.SHIFT) {
        arr[i] = arr[j];
        // console.log(`${newarr} internal shift ${i} ->${j}`);
      } else if (move.type === OPERATION_TYPES.MOVE_TO_CORRECT_POSITION) {
        arr[i] = move.value;
      }

      showBars(move);
      // staggered delay allows you to see the visualization happening one after the other rather than all at once
    }, 200 * index);
    timeoutIds.push(timeoutId);
  }
}

// Set up event listener for the change event on the select list
algorithmSelect.addEventListener('change', function () {
  // reinitialize new bars
  initializeNewBars();
  // Get the selected algorithm
  const selectedAlgorithm = algorithmSelect.value;
  // Set the description based on the selected algorithm
  document.getElementById('algo-description').innerText =
    ALGO_DESCRIPTIONS[selectedAlgorithm];
});
