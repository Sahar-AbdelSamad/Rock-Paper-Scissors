function playRound(e) {
  playerSelection = e.target.innerText;
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay();
  computerSelection = computerSelection.toLowerCase();

  const body=document.querySelector("body");
  const div=document.createElement("div");
  div.classList.add("choix");
  const p1 = document.createElement("p");
  p1.innerText="The Computer choice is: "+computerSelection;
  const p2 = document.createElement("p");
  p2.innerText="Your choice is: "+playerSelection;
  div.appendChild(p1);
  div.appendChild(p2);
  body.appendChild(div);

    result = whoWin(computerSelection, playerSelection);
   if (result === true) {
        user++;
    }
    else if (result === false) {
      machine++;
    }
    if ((user===5)||(machine===5)){
      const cleare=document.getElementById("choice");
cleare.style.display="none";


const clear=document.getElementById("4");
clear.style.display="none";
if (user > machine) {
  const fin = document.createElement("p");
  fin.innerText="Fantastic! u won";
  fin.setAttribute('style','font-size:50px; font-weight:Bold;color:red');
  body.appendChild(fin);
}
if (user < machine) {
  const final = document.createElement("p");
  final.innerText="Game Over, Better luck next time!";
  final.setAttribute('style','font-size:50px; font-weight:Bold;color:red');
  body.appendChild(final);
}
    }
  if (result === true) {
  const pp = document.createElement("p");
  pp.innerText=`${playerSelection} beats ${computerSelection}`;
  const pp2 = document.createElement("p");
  pp2.innerText="You win this round";
  div.appendChild(pp);
  div.appendChild(pp2);
  }
  else if (result === false) {
  const p11 = document.createElement("p");
  p11.innerText=`${computerSelection} beats ${playerSelection}`;
  const p22 = document.createElement("p");
  p22.innerText="Better luck next time, Computer wins";
  div.appendChild(p11);
  div.appendChild(p22);
  }
    
document.querySelector(".insert").innerHTML=`Your score: ${user}. The Computer's score: ${machine} `;

const clear=document.getElementById("4");
const change=document.querySelectorAll("div.choix");
clear.addEventListener("click",remove);
function remove(){
  for(let i=0;i<change.length;i++){
    change[i].style.display="none";
  }
}

}

function whoWin(computerSelection, playerSelection) {
  if (computerSelection === "rock") {
    if (playerSelection === "paper") {
      return true;
    } else if (playerSelection === "scissors") {
      return false;
    }
  }
  if (computerSelection === "scissors") {
    if (playerSelection === "rock") {
      return true;
    } else if (playerSelection === "paper") {
      return false;
    }
  }
  if (computerSelection === "paper") {
    if (playerSelection === "rock") {
      return false;
    } else if (playerSelection === "scissors") {
      return true;
    }
  }
  const body=document.querySelector("body");
  const div=document.createElement("div");
  div.classList.add("choix");
  const p = document.createElement("p");
    p.innerText="No one wins, same choice";
    div.appendChild(p);
    body.appendChild(div);
  }

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

let user = 0;
  let machine = 0;
  let result;
let computerSelection;
let playerSelection;
const button = document.querySelectorAll("div button");
button.forEach(item => item.addEventListener("click", playRound));







