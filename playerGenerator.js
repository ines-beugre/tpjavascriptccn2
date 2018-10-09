// 7
const getMyPlayerRatio = require('./playerUtils');
const utils = require('./playerUtils');


function playerGenerator(name, attack, defense){
    let hp = 100;
    
    function displayMyPlayerInfo(){
        console.log("My name is " + this.name + ", I have " + this.attack + " attack, " + this.defense + " defense and " + this.hp + " health points.");            
    }

    let player= {
        "name": name,
        "attack": attack,
        "defense": defense,
        "hp":hp,
        displayMyPlayerInfo : displayMyPlayerInfo,
        fight : utils.fight
    }
    return player; 
}

 
module.exports = { playerGenerator };
