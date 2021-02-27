/*----- constants -----*/



/*----- app's state (variables) -----*/
let turn, winner, board; 



/*----- cached element references -----*/



/*----- event listeners -----*/



/*----- functions -----*/
init();

function init() {
  // Initialize all state
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // Idx 0 starts at top left of board and reads left to right
  turn = 1; 
  winner = null; 


  render();
}

function render() {

}