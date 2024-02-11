const OPERATION_TYPES = {
  SWAP: 'swap',
  SHIFT: 'shift',
  MOVE_TO_CORRECT_POSITION: 'move_to_correct_position',
  COMPARE: 'compare',
};

const SORTING_ALGOS = {
  BUBBLE_SORT: 'bubblesort',
  INSERTION_SORT: 'insertionsort',
};

// Define meanings for different colors
const COLOR_MEANINGS = {
  red: OPERATION_TYPES.SWAP,
  green: OPERATION_TYPES.SHIFT,
  blue: OPERATION_TYPES.COMPARE,
  purple: OPERATION_TYPES.MOVE_TO_CORRECT_POSITION,
};

const ALGO_DESCRIPTIONS = {
  bubblesort:
    "Bubble sort moves the larger elements 'upwards' like bubbles in water, gradually sorting the array.",
  insertionsort:
    "Insertion sort inserts each element into its correct position, 'sliding' it into place within the sorted portion of the array.",
};
