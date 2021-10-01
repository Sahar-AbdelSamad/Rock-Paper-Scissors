document.write("Hello World!") ;



function computerPlay(){
    const choices=["Rock","Paper","Scissors"];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
    }
    

function playRound(playerSelection,computerSelection){
  computerSelection=computerPlay();
  playerSelection=prompt("what is your choice","");
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    console.log(playerSelection+" playerselection")
    console.log(computerSelection+" computerSelection");
if(computerSelection==="rock"){
      if(playerSelection==="paper"){
        return true;
         }else if (playerSelection==="scissors"){
        return false;
        }
    }
if(computerSelection==="scissors"){
        if(playerSelection==="rock"){
        return true;
        }else if (playerSelection==="paper"){
        return false;
        }
      }
if(computerSelection==="paper"){
        if(playerSelection==="rock"){
        return false;
        }else if (playerSelection==="scissors"){
        return true;
        }
      }
return (`no one wins ${playerSelection} equals ${computerSelection}`);
}
function game(){
let user=0;
let machine=0;
let result;
for(let i=0;i<5;i++){
  result=playRound(playerSelection,computerSelection);
  console.log(result);
  if (result===true) user++;
  else if(result===false) machine++;
  else i--;
  console.log(user);
  console.log(machine);
  
}
if (user>machine) return "Great play u won";
  else if (user<machine) return "Better luck next time";
}
 let playerSelection;
 let computerSelection;
console.log(game());