const n = 20;
const arr = [];

init();

function initializeScreen() {
  appendAlgosToOptions();
  updateColorLegend();
}

function initializeNewBars() {
  for (let i = 0; i < n; ++i) {
    arr[i] = Math.random();
  }
  showBars();
}

function init() {
  initializeScreen();
  initializeNewBars();
}

function resetAnimation() {
  for (const timeoutId of timeoutIds) {
    clearTimeout(timeoutId);
  }
  // Clear the timeouts array
  timeoutIds = [];
  initializeNewBars();
}

/**
 * Show the initial bars
 * @param {move} move
 */
function showBars(move) {
  const container = document.getElementById('container');
  container.innerHTML = '';
  for (let i = 0; i < n; ++i) {
    const bar = document.createElement('div');
    bar.style.height = arr[i] * 100 + '%';
    bar.classList.add('bar');

    // changing color of bar to show swapping pairs
    if (move && move.indices.includes(i)) {
      // mark bar color according to operation type
      // for compare "blue" & for swap "red"
      bar.style.backgroundColor = getBarColor(move.type);
    }
    container.appendChild(bar);
  }
}

/**
 * Function to update the color legend based on the selected algorithm
 */
function updateColorLegend() {
  const colorLegend = document.getElementById('colorLegend');
  colorLegend.innerHTML = '';

  const heading = document.createElement('h3');
  heading.innerText = 'OPERATIONS';
  colorLegend.appendChild(heading);

  // Iterate through the color meanings and display them dynamically
  for (const moveType of Object.values(OPERATION_TYPES)) {
    const legendItem = document.createElement('div');
    legendItem.classList.add('legend-item');

    const legendCircle = document.createElement('span');
    legendCircle.classList.add('legend-circle');
    legendCircle.style.backgroundColor = getBarColor(moveType);

    const legendText = document.createElement('span');
    legendText.innerText = moveType;

    legendItem.appendChild(legendCircle);
    legendItem.appendChild(legendText);

    colorLegend.appendChild(legendItem);
  }
}

/**
 * Function to dynamically add options to the select element
 */
function appendAlgosToOptions() {
  // Clear any existing options
  const selectElement = document.getElementById('algorithms');
  selectElement.innerHTML = '';

  // Iterate through the array and create options dynamically
  for (const algo in SORTING_ALGOS) {
    const option = document.createElement('option');
    option.value = SORTING_ALGOS[algo]; // Set the value of the option
    option.text = SORTING_ALGOS[algo]; // Set the text displayed in the dropdown
    selectElement.appendChild(option); // Append the option to the select element
  }
}

/**
 *
 * @param {String} moveType
 * @returns color for bar depends on type of the move
 */
function getBarColor(moveType) {
  if (moveType === OPERATION_TYPES.COMPARE) {
    return 'blue';
  } else if (moveType === OPERATION_TYPES.SWAP) {
    return 'red';
  } else if (moveType === OPERATION_TYPES.SHIFT) {
    return 'green';
  } else if (moveType === OPERATION_TYPES.MOVE_TO_CORRECT_POSITION) {
    return 'purple';
  } else {
    return 'black';
  }
}
