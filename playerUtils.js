const playerGenerator = require('./playerGenerator');
//let  player1 = playerGenerator.playerGenerator("Warr", 10, 20, 1300);

function getMyPlayerRatio(player, number){
    return player.attack - number;
}

function fight (player2){

    //let player1 = this;
    let ratio1 = getMyPlayerRatio(this, player2.defense);
    let ratio2 = getMyPlayerRatio(player2, this.defense);
    
    let newHP1 = ratio2 * (this.hp / ratio1);
    let newHP2 = ratio1 * (player2.hp / ratio2);

    this.hp = newHP1;
    player2.hp = newHP2;

    if(ratio1 > ratio2){
        console.log("Fight: [ "+ this.name +", "+player2.name + " ==//==> "+ this.name+":"+ ratio1 +" points ]")
        console.log("Winner is " + this.name + " with = " + newHP1);
        console.log("Looser is " + player2.name + " with 0 Health point ");
        this.displayMyPlayerInfo();
        console.log(this)
        player2.hp = 0;
    }

    else if(ratio1 < ratio2){
        console.log("Fight: [ "+ this.name +", "+player2.name + " ==//==> "+ player2.name+":"+ ratio2 +" points ]")
        console.log("Winner is " + player2.name + " with = " + newHP2);
        console.log("Looser is "+ this.name + " with 0 Health point ");
        player2.displayMyPlayerInfo();
        console.log(player2)
        this.hp = 0;
    }
    else{
        console.log("Fight [ "+ this.name +", "+player2.name + " ==//==> no winner]")
    }

}
module.exports = { getMyPlayerRatio, fight };
