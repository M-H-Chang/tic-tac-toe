// -----Utility Logic-----

// -----Business Logic-----
function Game() {
  this.players = {};
  this.currentId = 0;
  this.blocks = {};
  this.player1Win = {}
  this.player2Win = {};
}

Game.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

Game.prototype.addBlock = function (id) {
  block.id = this.assignId();
  this.blocks[block.id] = id
}

Game.prototype.assignPlayer = function () {
  const player1 = player(1);
  const player2 = player(2);
}

Game.prototype.player1Button = function (block) {
  this.player1Win[block] = block
  block0.player1Button = block0
  block0.player2Button
  const block0 = $("#block0")
}

Game.prototype.player2Button = function (block) {
  this.player2Win[block] = block
}

// -----User Interface Logic-----
let allBlocks = new Game();

function player1Block() {
  if ($("block0Player1").on) ("click", function () {
    $("block0").player1Win.push();
  }); else if ($("block1Player1").on) ("click", function () {
    $("block1").player1Win.push();
  }); else if ($("block2Player1").on) ("click", function () {
    $("block2").player1Win.push();
  }); else if ($("block3Player1").on) ("click", function () {
    $("block3").player1Win.push();
  }); else if ($("block4Player1").on) ("click", function () {
    $("block4").player1Win.push();
  }); else if ($("block5Player1").on) ("click", function () {
    $("block5").player1Win.push();
  }); else if ($("block6Player1").on) ("click", function () {
    $("block6").player1Win.push();
  }); else if ($("block7Player1").on) ("click", function () {
    $("block7").player1Win.push();
  }); else if ($("block8Player1").on) ("click", function () {
    $("block8").player1Win.push();
  });
}
//Notes for function player1Block--
// If block0Player1(this is the button for the player one inside of the block 0) is clicked then it will push block0 into the player1Win Object.


// $(document).ready(function () {
//   $("#addPlayer1").on("click", function () {
//     $("button#player1").show()
//   })
//   $("#addPlayer2").on("click", function () {
//     $("button#player2").show()
//   })

// })


//Notes
// if (player1Button is clicked) {
  //   then that block would go into the player1Button object
  // } else if (player2Button is clicked) {
  //   then that block would equal false = 
  // }
// if (player1(block1, block2, block3), is = true) player 1 win
// if (pla)
  // function Board() {
  //   let Blocks = { ["block0"[player1button,player2button]], ["block1"[1]], ["block2"[2]], ["block3"[3]], ["block4"[4]], ["block5"[5]], ["block6"[6]], ["block7"[7]], ["block8"[8]] 
  // blocks.block0.player1btton = "#block0Player1Button"