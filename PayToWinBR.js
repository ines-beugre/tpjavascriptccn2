const Player = require('./player');

class PayToWinPlayer extends Player {
    constructor(name, attack, defense) {
        super(name, attack, defense);
        this.attack = attack * 1.4;  
    }

    fight(one){
        super.fight(one);
    }

    displayMyPlayerInfo(){
        super.displayMyPlayerInfo();
        console.log("My super name is " + this.name + ", and i'm here to win");
    }
}

module.exports = { PayToWinPlayer }
