const playerGenerator = require('./playerGenerator');
//let  player1 = playerGenerator.playerGenerator("Warr", 10, 20, 1300);

function getMyPlayerRatio(player, number){
    return player.attack - number;
}

function fight (player1, player2){

    let ratio1 = getMyPlayerRatio(player1, player2.defense);
    let ratio2 = getMyPlayerRatio(player2, player1.defense);
  
    console.log( 'player1.defense---player1',player1.defense);
    console.log( 'player2.defense---player2',player2.defense);


    console.log("attack1", player1.attack);
    console.log("attack2", player2.attack);

    console.log("ratio1", ratio1);
    console.log("ratio2", ratio2);


    let newHP1 = ratio2 * (player1.defense / ratio1);
    let newHP2 = ratio1 * (player2.defense / ratio2);


    console.log("NHP1", newHP1);
    console.log("nHP2", newHP2);


    if(ratio1 > ratio2){
        console.log("Fight: [ "+ player1.name +", "+player2.name + " ==//==> "+ player1.name+":"+ ratio1 +" points ]")
        console.log("Winner is " + player1.name + " with = " + newHP1);
        console.log("Looser is " + player2.name + " with 0 Health point ");
        player1.displayMyPlayerInfo();
        player2.hp = 0;
    }

    if(ratio1 < ratio2){
        console.log("Fight: [ "+ player1.name +", "+player2.name + " ==//==> "+ player2.name+":"+ ratio2 +" points ]")
        console.log("Winner is " + player2.name + " with = " + newHP2);
        console.log("Looser is "+ player1.name + " with 0 Health point ");
        player2.displayMyPlayerInfo();
        player1.hp = 0;


    }

    if(ratio1 == ratio2){
        console.log("Fight [ "+ player1.name +", "+player2.name + " ==//==> no winner]")

    }

}
module.exports = { getMyPlayerRatio, fight };
//module.exports = { getMyPlayerRatio, playerGenerator };



// let player3 = playerGenerator("Warior", 10, 20);
// //player3.displayMyPlayerInfo()
// player3.getMyPlayerRatio("Warrior", 12)

// console.log(getMyPlayerRatio(player3, 3));

// module.exports = { getMyPlayerRatio };


// let ration1 = player1.hp;
//     let ration2 = player2.hp;
//     let number1 = player1.defense;
//     let number2 = player2.defense;

//     let ratioPlayer1 = getMyPlayerRatioDef(player1, player2.defense);
//     let ratioPlayer2 = getMyPlayerRatioDef(player2, player1.defense);

//     console.log("ratioPlayer1", ratioPlayer1);
//     console.log("ratioPlayer2", ratioPlayer2);


//     if(ration1>ration2){
//         let hp1 = player1.hp - player2.hp;
//         console.log("hp1", player1.hp);
//         console.log("Fight: [ "+ player1.name +", "+player2.name + " ==//==> "+ player1.name+":"+ hp1 +" health points ]")
//     }
//     if(ration1<ration2) {
//         let hp2 = player2.hp - player1.hp;
//         console.log("hp2", player1.hp2);
//         console.log("Fight [ "+ player1.name +", "+player2.name + " ==//==> " + player2.name+":" + hp2+ " health points ]")
//     }
//     if(ration1==ration2) {
//         let hp2 = player2.hp - player1.hp;
//         console.log("hp2", player1.attack);
//         console.log("Fight [ "+ player1.name +", "+player2.name + " ==//==> no winner]")
//     }
    

class player{
    constructor()
}