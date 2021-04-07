## 
  
Specs

Describe: Game()

Test: It will add this constructor to the game.
Code: function Game()
Output: No output yet.

Describe: Game.prototype.addPlayers

Test: It will add a player to the game object that the method is called on.
Code:
const players = new Game()
const player1 = ("Player1");
const player2 = ("Player2");
players.addPlayers(player1);
players.addPlayers(player2);
Expected Output:
players == {
  players: {"player1", "player2"}
} 

Describe: Game.prototype.assignId
Test: It will assign an ID for each player inputted.
Code: 
const players = new Game()
const player1 = ("Player1")
const player2 = ("Player2")
Expected Output:
players === {players: {"player1"(1), "player2"(2)}}

Describe: Game.prototype.assignPlayer
Test: It will assign an user for each player inputted.
Code: 
const player1 = players(1);
const player2 = players(2):
Expected Output:
players(1) should return player1 and player(2) should return player2. 



# _Tic-Tac-Toe Game_

#### _Let's two users play the tic-tac-toe game._

#### By _**Min Chang, Grafton Borge, & Rami Ahmed**_

## Technologies Used

* _HTML5_
* _CSS_
* _Javascript_
* _Jquery_
* _VScode_
* _Github_

## Description

__

## Setup/Installation Requirements

* _Open up my github profile_
* _Clone my repository into your desired local repository_
* _Open index.html into your browser_
* _Edit as needed_

_There is no extra servers or databases that need to be ran. The files in this current repository is all you will need to successfully run the application. It is recommended that you use the chrome browser to run this application successfully but it is not a requirement._

## Known Bugs

* _No known bugs._

## License

_Copyright (c) [2021] [Min Chang, Grafton Borge, & Rami Ahmed]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
_

## Contact Information

_Min Chang <minchangmhc@gmail.com>_
_Grafton Borge <graftonmborge@gmail.com>_
_Rami Ahmed <ramiahmedportland@gmail.com>_