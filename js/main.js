/*----- constants -----*/
const playerRef = {
  '1': {
    name: 'Player 1',
    color: 'blue',
  },
  '-1': {
    name: 'Player 2',
    color: 'red',
  },
  '0': 'darkgray',
};


/*----- app's state (variables) -----*/
let turn, winner, board; 



/*----- cached element references -----*/
const msgEl = document.getElementById('msg');


/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleSelect);


/*----- functions -----*/
init();

function handleSelect(evt) {
  
}

function init() {
  // Initialize all state
  board = [
    [1, 0, 0], // Col 0
    [0, 0, 0], // Col 1
    [0, -1, 0], // Col 2
  ];
  turn = 1; 
  winner = null; 


  render();
}

function render() {
  // Render the board
  board.forEach(function(colArr, colIdx) {
    // Iterates over each col array to select individual cell
    colArr.forEach(function(cellVal, rowIdx) {
      // Selects the div that corrosponds to current cellVal
      div = document.getElementById(`c${colIdx}r${rowIdx}`);
      // Styles the div to represent current cellVal
      div.style.backgroundColor = playerRef[cellVal].color;
    });
  });
  // Render message
    // Tie Game Message
  if (winner === 'T') {
    msgEl.textContent = 'Tie Game!'
    // Winner Message
  } else if (winner) {
    msgEl.textContent = `${playerRef[winner].name} wins!`
    // Turn Message
  } else {
    msgEl.textContent = `${playerRef[turn].name}'s turn!`
  }
}