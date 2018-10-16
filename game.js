
"use strict";

const startGame = () => {
  
  let play = prompt("Do you want to play the game?");

    if (play === "yes") {
      let userName = prompt("Enter your name.");
      startCombat(play, userName);
    }

    else {
      console.log("ok, we will play later");
     }
     return;
}




const startCombat = (play, userName) => {
  let userHealth = 40;
  let grantHealth = 10;
  let userWins = 0;

  while (play) {

    let choice = prompt ("do you want to attack or quit?");

    if (choice === "attack"){
    
      userHealth -= getDmg();
      grantHealth -= getDmg();


      console.log(`${userName} was attacked. ${userName} has ${userHealth} health left.`);
      console.log(`Grant was attacked. Grant has ${grantHealth} health left.`);
      if (grantHealth <= 0) {
        userWins++;
        grantHealth = 10;
        if (userWins === 3) {
          console.log(`${userName} is victorious!`);
          break;
        } else {
          console.log(`${userName} has beaten Grant. ${userName} must win ${3 - userWins} more time(s).`);
        }
      } 
      if (userHealth <= 0) {
        console.log("Grant beat you. Sucks to suck.");
        break;
      }
  
    }
    else{
      console.log("ok, we will play later");
    }
  }
}

const getDmg = () => {
   let damage = Math.floor(Math.random() * 5) + 1;
   return damage;
};

startGame();