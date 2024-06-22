// Show rules for user
const rulesBtn = document.querySelector(".rules-btn");
const rulesDiv = document.querySelector(".rules");
const closeBtn = document.getElementById("closeRules");

const showRules = function () {
  rulesDiv.classList.toggle("hidden");
};

rulesBtn.addEventListener("click", showRules);
closeBtn.addEventListener("click", showRules);

// configure click

const classChoice = [".paper-circle", ".rock-circle", ".scissors-circle"];
const idChoises = [1, 2, 3];

let userChoice;
let pcChoice;

// Reload previos Score
window.onload = function () {
  const score = localStorage.getItem("Score");
  document.querySelector(".score h1").textContent = score;
};

function randomNumber() {
  return (Math.random() * (3 - 1) + 1).toFixed(0);
}

classChoice.forEach((e) => {
  document.querySelector(e).addEventListener("click", function () {
    userChoice = this.getAttribute("data-id");
    pcChoice = randomNumber();
    secoundStep(userChoice, pcChoice);
  });
});

const secoundStep = function (user, pc, result) {
  // Game Logic
  if (user == 1 && pc == 1) {
    user = "paper";
    pc = "paper";
    result = "draw";
  } else if (user == 1 && pc == 2) {
    user = "paper";
    pc = "rock";
    result = "you win";
  } else if (user == 1 && pc == 3) {
    user = "paper";
    pc = "scissors";
    result = "you lose";
  }
  if (user == 2 && pc == 1) {
    user = "rock";
    pc = "paper";
    result = "you lose";
  } else if (user == 2 && pc == 2) {
    user = "rock";
    pc = "rock";
    result = "draw";
  } else if (user == 2 && pc == 3) {
    user = "rock";
    pc = "scissors";
    result = "you win";
  }
  if (user == 3 && pc == 1) {
    user = "scissors";
    pc = "paper";
    result = "you win";
  } else if (user == 3 && pc == 2) {
    user = "scissors";
    pc = "rock";
    result = "you lose";
  } else if (user == 3 && pc == 3) {
    user = "scissors";
    pc = "scissors";
    result = "draw";
  }
  //apend picked
  const pickedDiv = `<div class="scale-125 ${user}-circle opacity-0" data-id="1">

  <img src="./assets/images/icon-${user}.svg" alt="${user}" /> 

 </div>`;

  const pcDiv = `<div class="scale-125 ${pc}-circle opacity-0" data-id="1">

  <img src="./assets/images/icon-${pc}.svg" alt="${pc}" /> 

 </div>`;

  const step4 = `
 <section class="result">
        <div class="picked">
          <h1>you picked</h1>
          <div id="userPick">
          
          </div>
        </div>
        <div class="result-state">
           <h1 class="state opacity-0">${result}</h1>
          <button id="Again" class="uppercase bg-white w-full px-[30px] py-[10px] rounded font-bold text-darkText  hover:text-rockTo duration-500">
            play again
          </button>
        </div>
        <div class="picked">
          <h1>the house picked</h1>
          <div id="pcPick"></div>
        </div>
      </section>
 `;
  document.querySelector(".step-1").classList.add("opacity-0");

  setTimeout(() => {
    document.querySelector("main").insertAdjacentHTML("afterbegin", step4);
    document
      .getElementById("userPick")
      .insertAdjacentHTML("afterbegin", pickedDiv);
    document.getElementById("pcPick").insertAdjacentHTML("afterbegin", pcDiv);

    document.querySelector(".step-1").classList.add("hidden");
    document.querySelector("#userPick div").classList.remove("opacity-0");
  }, 700);
  setTimeout(
    () => document.querySelector("#pcPick div").classList.remove("opacity-0"),
    1000
  );
  setTimeout(() => {
    document.querySelector(".state").classList.remove("opacity-0");
    if (result == "you win") {
      document.querySelector(".score h1").textContent =
        +document.querySelector(".score h1").textContent + 1;
      document.querySelector(`.${user}-circle`).classList.add("winner");
    } else if (result == "you lose") {
      if (document.querySelector(".score h1").textContent.trim() != "0") {
        document.querySelector(".score h1").textContent =
          +document.querySelector(".score h1").textContent - 1;
      }
      document.querySelector(`.${pc}-circle`).classList.add("winner");
    }
    localStorage.setItem(
      "Score",
      document.querySelector(".score h1").textContent
    );
    document.getElementById("Again").addEventListener("click", () => {
      document.querySelector(".step-1").classList.remove("opacity-0");
      document.querySelector(".step-1").classList.remove("hidden");
      document.querySelector(".result").remove();
    });
  }, 1500);
};
