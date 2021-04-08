// -----Utility Logic-----
// This is an intil start to  link the input to the function
// const player1 = "O";
// const player2 = "X";

// let fullBoard = false;
// let boardFild = ["", "", "", "", "", "", "", "", ""];


function renameId(name) {
  let idSplit = name.split("")
  idSplit.forEach(function (element) {
    element.slice(0, 5)
  });
}

// -----Business Logic-----
function Game() {
  this.players = {};
  this.currentId = 0;
  this.blocks = {};//Pusing Every Block to the opject
  this.player1Win = {}//Whenever player1 pushes a button that specific block will be inputted into this object
  this.player2Win = {};//Whenever player2 pushes a button that specific blockw ill be inputted into this object
}

// Game.prototype.assignId = function () { //this method is for adding an id to every block
//   this.currentId += 1;
//   return this.currentId;
// }
// Game.prototype.addBlock = function (id) { //method for adding a block into the block object
//   block.id = this.assignId();
//   this.blocks[block.id] = id
// }

Game.prototype.player1Button = function (block) {
  this.player1Win[block] = block
} //accessing the block object in the game constructor we are adding a block for player 1

Game.prototype.player2Button = function (block) {
  this.player2Win[block] = block
} //accessing the block object in the game constructor we are adding a block for player 2



// function block() {
//   // We are not sure as of yet the outcome 
//   blocks = {
//     block0: [player1Button, player2Button],
//     block1: [player1Button, player2Button],
//     block2: [player1Button, player2Button],
//     block3: [player1Button, player2Button],
//     block4: [player1Button, player2Button],
//     block5: [player1Button, player2Button],
//     block6: [player1Button, player2Button],
//     block7: [player1Button, player2Button],
//     block8: [player1Button, player2Button],
//   }
//   block0.player1Button = $("#player1Button");
//   block0.player2Button = $("#player2Button");
// }

// -----User Interface Logic-----
// function player1Block() {
// $("#block0Player1").on("click", function () {
//   console.log(this)
// this.player1Win.push(this.id);
// }); else if ($("block1Player1").on) ("click", function () {
//   $("#block1").player1Win.push();
// }); else if ($("block2Player1").on) ("click", function () {
//   $("block2").player1Win.push();
// }); else if ($("block3Player1").on) ("click", function () {
//   $("block3").player1Win.push();
// }); else if ($("block4Player1").on) ("click", function () {
//   $("block4").player1Win.push();
// }); else if ($("block5Player1").on) ("click", function () {
//   $("block5").player1Win.push();
// }); else if ($("block6Player1").on) ("click", function () {
//   $("block6").player1Win.push();
// }); else if ($("block7Player1").on) ("click", function () {
//   $("block7").player1Win.push();
// }); else if ($("block8Player1").on) ("click", function () {
//   $("block8").player1Win.push();
// });
// })

//Notes for function player1Block--
// If block0Player1(this is the button for the player one inside of the block 0) is clicked then it will push block0 into the player1Win Object.

// function player2Block() {
//       if ($("block0Player2").on) ("click", function () {
//         $("block0").player1Win.push();
//       }); else if ($("block1Player2").on) ("click", function () {
//         $("block1").player1Win.push();
//       }); else if ($("block2Player2").on) ("click", function () {
//         $("block2").player1Win.push();
//       }); else if ($("block3Player2").on) ("click", function () {
//         $("block3").player1Win.push();
//       }); else if ($("block4Player2").on) ("click", function () {
//         $("block4").player1Win.push();
//       }); else if ($("block5Player2").on) ("click", function () {
//         $("block5").player1Win.push();
//       }); else if ($("block6Player2").on) ("click", function () {
//         $("block6").player1Win.push();
//       }); else if ($("block7Player2").on) ("click", function () {
//         $("block7").player1Win.push();
//       }); else if ($("block8Player2").on) ("click", function () {
//         $("block8").player1Win.push();
//       });
//     }


let allBlocks = new Game();
$(document).ready(function () {
  $("#block0Player1").on("click", function () {
    allBlocks.player1Button.renameId(this.id)
    console.log(this.id)
  })

  // 


  $("#addPlayer1").on("click", function () {
    $("button#block0Player1").show()
    $("button#block1Player1").show()
    $("button#block2Player1").show()
    $("button#block3Player1").show()
    $("button#block4Player1").show()
    $("button#block5Player1").show()
    $("button#block6Player1").show()
    $("button#block7Player1").show()
    $("button#block8Player1").show()
  }) //when addPlayer1 button is clicked then the player 1 buttons inside of the blocks are shown
  $("#addPlayer2").on("click", function () {
    $("button#block0Player2").show()
    $("button#block1Player2").show()
    $("button#block2Player2").show()
    $("button#block3Player2").show()
    $("button#block4Player2").show()
    $("button#block5Player2").show()
    $("button#block6Player2").show()
    $("button#block7Player2").show()
    $("button#block8Player2").show()//when addPlayer2 button is clicked then the player 2 buttons inside of the blocks are shown
  })
})

// function player1Block() {
//   if ($("block0Player1").on) ("click", function () {
//     $("block0").player1Win.push();
//   }); else if ($("block1Player1").on) ("click", function () {
//     $("block1").player1Win.push();
//   }); else if ($("block2Player1").on) ("click", function () {
//     $("block2").player1Win.push();
//   }); else if ($("block3Player1").on) ("click", function () {
//     $("block3").player1Win.push();
//   }); else if ($("block4Player1").on) ("click", function () {
//     $("block4").player1Win.push();
//   }); else if ($("block5Player1").on) ("click", function () {
//     $("block5").player1Win.push();
//   }); else if ($("block6Player1").on) ("click", function () {
//     $("block6").player1Win.push();
//   }); else if ($("block7Player1").on) ("click", function () {
//     $("block7").player1Win.push();
//   }); else if ($("block8Player1").on) ("click", function () {
//     $("block8").player1Win.push();
//   });
// }
// //Notes for function player1Block--
// // If block0Player1(this is the button for the player one inside of the block 0) is clicked then it will push block0 into the player1Win Object.

// function player2Block() {
//   if ($("block0Player2").on) ("click", function () {
//     $("block0").player1Win.push();
//   }); else if ($("block1Player2").on) ("click", function () {
//     $("block1").player1Win.push();
//   }); else if ($("block2Player2").on) ("click", function () {
//     $("block2").player1Win.push();
//   }); else if ($("block3Player2").on) ("click", function () {
//     $("block3").player1Win.push();
//   }); else if ($("block4Player2").on) ("click", function () {
//     $("block4").player1Win.push();
//   }); else if ($("block5Player2").on) ("click", function () {
//     $("block5").player1Win.push();
//   }); else if ($("block6Player2").on) ("click", function () {
//     $("block6").player1Win.push();
//   }); else if ($("block7Player2").on) ("click", function () {
//     $("block7").player1Win.push();
//   }); else if ($("block8Player2").on) ("click", function () {
//     $("block8").player1Win.push();
//   });
// }


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