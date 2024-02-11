/**
 * @param {Array} arr
 * @returns all operations in bubbleSort
 */
function bubbleSort(arr = []) {
  const moves = [];
  do {
    var swapped = false;

    for (let i = 1; i < arr.length; ++i) {
      moves.push({ indices: [i - 1, i], type: OPERATION_TYPES.COMPARE });
      if (arr[i - 1] > arr[i]) {
        swapped = true;
        // store moves
        moves.push({ indices: [i - 1, i], type: OPERATION_TYPES.SWAP });
        // swap
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      }
    }
  } while (swapped);
  return moves;
}

/**
 * @param {Array} arr
 * @returns all operations in insertionSort
 */
function insertionSort(arr = []) {
  const moves = [];
  const n = arr.length;

  for (let i = 1; i < n; ++i) {
    const current = arr[i];
    let j = i - 1;
    moves.push({ indices: [i, j], type: OPERATION_TYPES.COMPARE });
    while (j >= 0 && arr[j] > current) {
      moves.push({ indices: [j + 1, j], type: OPERATION_TYPES.SHIFT });
      arr[j + 1] = arr[j];
      j--;
    }
    if (i !== j + 1) {
      moves.push({
        indices: [j + 1],
        type: OPERATION_TYPES.MOVE_TO_CORRECT_POSITION,
        value: current,
      });
      arr[j + 1] = current;
    }
  }
  return moves;
}
