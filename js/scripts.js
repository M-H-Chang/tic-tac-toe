// -----Utility Logic-----

// -----Business Logic-----
function Game() {
  this.players = {};
  this.currentId = 0;
}

Game.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

Game.prototype.addPlayers = function (player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  console.log(player1, player2)
}

Game.prototype.assignPlayer = function () {
  const player1 = player(1);
  const player2 = player(2);
}




// -----User Interface Logic-----
