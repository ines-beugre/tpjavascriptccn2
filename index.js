const playerGenerator = require('./playerGenerator');
const player = require('./player');

//name (string), attack (number, [10-30]), defense (number, [1-10]), hp (number, 100).
let  player1 = new player.Player("Warrior", 20, 4);
let  player2 = new player.Player("Build", 10, 6);
let  player3 = new player.PayToWinPlayer("Maven", 30, 7);


player1.displayMyPlayerInfo();
player3.displayMyPlayerInfo();
//player1.fight(player2);
player1.fight(player3);
// let  player1 = playerGenerator.playerGenerator("Warrior", 10, 4, 5);
// let  player2 = playerGenerator.playerGenerator("Build", 30, 6, 10);


//displayMyPlayerInfo();

// player1.displayMyPlayerInfo();
// player2.displayMyPlayerInfo();
// let war = fight.fight(player1, player2);

//let war= player1.fight(player2);
//module.exports = { displayMyPlayerInfo }