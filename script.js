let playButton = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health')

const updateGame = (p1, p2, gameState) => {
    // Update the DOM with the names and the latest health of players
    p1NameDiv.innerText = p1.name
    p2NameDiv.innerText = p2.name
    p1HealthDiv.innerText = p1.health
    p2HealthDiv.innerText = p2.health
  
    // Condition IF either player health is <= 0 then set isOver to true and declareWinner
    if (p1.health <= 0 || p2.health <= 0) {
      game.isOver = true
      gameState = game.isOver
      resultDiv.innerText = game.declareWinner(game.isOver, p1, p2)
      return gameState
    }
  }

  class Player {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  punch(player, enemy, strength) {
    let damage =Math.ceil(Math.random() * strength);
    enemy.health -= damage
    updateGame(p1, p2, game.isOver)
    return`${player.name} punches ${enemy.name} for ${damage} damage.`
    
  }

  kick(player, enemy, strength) {
    let damage =Math.ceil(Math.random() * strength);
    enemy.health -= damage
    updateGame(p1, p2, game.isOver)
    return`${player.name} kicks ${enemy.name} for ${damage} damage.`
    
  }

  heal(player) {
    let healthIncrease = Math.ceil(Math.random() * 5);
    player.health += healthIncrease;
    updateGame(p1, p2, game.isOver)
    return`${player.name} heals for ${healthIncrease} health and has ${player.health} health remaining.`
  }
}

// Example usage:
const player1 = new Player("Haris", 100, 10);
const player2 = new Player("Kakarot", 100, 30);
let p1=player1;
let p2=player2;
class Game {
    constructor() {
      this.isOver = false;
    }
    declareWinner(isOver, p1, p2) {
        let message='TIE';
        if (isOver == true && p1.health <= 0) {
            message = `${p2.name} Wins !!`
          }
          else if (isOver == true && p2.health <= 0) {
            message = `${p1.name} Wins !!`
          }
          document.getElementById('victory').play()
          return message
        }
        reset(p1, p2) { 
            // set p1 health and p2 health back to 100 and isOver back to false and clear resultDiv.innerText and don't forget to updateGame()
            p1.health=100
            p2.health=100
            game.isOver=false
            resultDiv.innerText=''
            updateGame(p1,p2,game.isOver)
          }
          play(p1, p2) {
            this.reset(p1,p2)
            while (this.isOver == false) { 
                p1.punch(p1,p2,p1.strength)
                p1.kick(p1,p2,p1.strength)
        p2.heal(p2)
        p2.punch(p2,p1,p2.strength)
        p2.kick(p1,p2,p1.strength)
        p1.heal(p1)
    }
    return this.declareWinner(this.isOver,p1,p2)
        }
    }
    let game = new Game()
    updateGame(p1,p2,game.isOver)
    let gameState;
    playButton.onclick=()=>{game.play(p1,p2)}

    document.addEventListener('keydown', function(e) {
        // if you press Q AND the enemy health is greater than 0 AND isOver is still false then strike()
        if (e.key == 'q' && p2.health > 0 && game.isOver == false) {
           // After striking then play attack sound
          p1.punch(p1, p2, p1.strength)
          document.getElementById('p1punch').play()
        }
      });
      document.addEventListener('keydown', function(e) {
        // if you press Q AND the enemy health is greater than 0 AND isOver is still false then strike()
        if (e.key == 'a' && p2.health > 0 && game.isOver == false) {
           // After striking then play attack sound
          p1.kick(p1, p2, p1.strength)
          document.getElementById('p1kick').play()
        }
      });
      document.addEventListener('keydown', function(e) {
        // if you press a AND the player health is greater than 0 AND isOver is still false then heal()
        if (e.key == 'z' && p2.health > 0 ) {
          // After healing then play heal sound
          p1.heal(p1)
          document.getElementById('p1heal').play()
        }
      });
      
      // ** Player 2 Controls **
      document.addEventListener('keydown', function(e) {
        // if you press Q AND the enemy health is greater than 0 AND isOver is still false then strike()
        if (e.key == 'p' && p1.health > 0 && game.isOver == false) {
           // After striking then play attack sound
          p2.punch(p2, p1, p2.strength)
          document.getElementById('p2punch').play()
        }
      });
      
      document.addEventListener('keydown', function(e) {
        // if you press Q AND the enemy health is greater than 0 AND isOver is still false then strike()
        if (e.key == 'l' && p1.health > 0 && game.isOver == false) {
           // After striking then play attack sound
          p2.kick(p2, p1, p2.strength)
          document.getElementById('p2kick').play()
        }
      });

      document.addEventListener('keydown', function(e) {
        // if you press l AND the player health is greater than 0 AND isOver is still false then heal()
          if (e.key == 'm' && p1.health > 0 && p1.health ) {
             // After healing then play heal sound
              p2.heal(p2)
              document.getElementById('p2heal').play()
            }
       });