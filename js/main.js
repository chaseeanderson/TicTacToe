/*----- constants -----*/
const playerRef = {
  '1': {
    name: 'Player 1',
    image: 'url(https://i.imgur.com/gtWCMYK.png)'
  },
  '-1': {
    name: 'Player 2',
    image: 'url(https://i.imgur.com/XKdkLRn.png)',
  },
  '0': {
    image: '',
  },
};


/*----- app's state (variables) -----*/
let turn, winner, board; 



/*----- cached element references -----*/
const msgEl = document.getElementById('msg');
const cellEls = [...document.querySelectorAll('div')];
const replayBtn = document.querySelector('button'); 


/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleSelect);
replayBtn.addEventListener('click', init);

/*----- functions -----*/
init();

function getTie() {
  winner = board.includes(0) ? winner : 'T';
}; 

function getWinner () {
  winner = null;
  if (Math.abs(board[0] + board[1] + board[2]) === 3) {
    winner = turn * -1;
  };
  if (Math.abs(board[3] + board[4] + board[5]) === 3) {
    winner = turn * -1;
  };
  if (Math.abs(board[6] + board[7] + board[8]) === 3) {
    winner = turn * -1;
  };
  if (Math.abs(board[0] + board[3] + board[6]) === 3) {
    winner = turn * -1;
  };
  if (Math.abs(board[1] + board[4] + board[7]) === 3) {
    winner = turn * -1;
  };
  if (Math.abs(board[2] + board[5] + board[8]) === 3) {
    winner = turn * -1;
  };
  if (Math.abs(board[0] + board[4] + board[8]) === 3) {
    winner = turn * -1;
  };
  if (Math.abs(board[2] + board[4] + board[6]) === 3) {
    winner = turn * -1;
  };
  return winner; 
};

function handleSelect(evt) {
  // Get index of clicked cell
  const spaceIdx = cellEls.indexOf(evt.target);
  if (winner) return;
  if (board[spaceIdx] !== 0) return; // Blocks space from being selected more than once. 
  board[spaceIdx] = turn;
  turn *= -1;
  winner = getWinner();   
  getTie()

  render();
}

function init() {
  // Initialize all state
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Each idx is a space on board from top left across rows
  turn = 1; 
  winner = null; 

  
  render();
}

function render() {
  // Render the board
  // Iterate over each space
  board.forEach(function (space, spaceIdx) {
  // Update space to show player selection
    div = document.getElementById(`space ${spaceIdx}`);
    div.style.backgroundImage = playerRef[space].image; 
    div.style.backgroundSize = '17vmin 17vmin'; 
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
  };
  // Hide/Show Play Again Button
  replayBtn.style.visibility = winner ? 'visible' : 'hidden';
};