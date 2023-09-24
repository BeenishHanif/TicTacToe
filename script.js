const boxes = [...document.querySelectorAll(".box")];

const overlay = document.querySelector(".overlay");
let currentPlayer = "X";

const winningIndex = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [3, 4, 5],
  [6, 7, 8],
  [2, 5, 8],
  [2, 4, 6],
];

function checkWin(player) {
  return winningIndex.some((combos) => {
    return combos.every((index) => boxes[index].innerHTML === player);
  });
}

function drawCheck() {
  return boxes.every((box) => box.innerHTML !== "");
}
function startGame() {
  boxes.forEach((box) =>
    box.addEventListener("click", (e) => {
      const boxInput = e.target;
      const indexofBox = boxes.indexOf(boxInput);

      if (box.innerHTML === "") {
        boxes[indexofBox].innerHTML = currentPlayer;

        if (checkWin(currentPlayer)) {
          overlay.classList.add("active");
          const winnerName = overlay.querySelector("p");
          winnerName.innerText = `${currentPlayer} wins`;
        } else if (drawCheck()) {
          overlay.classList.add("active");
          const draw = overlay.querySelector("p");
          draw.innerText = "DRAW";
        } else {
          currentPlayer = currentPlayer === "X" ? "0" : "X";
        }
      }
    })
  );
}

startGame();

function newGame() {
  overlay.classList.remove("active");
  boxes.forEach((box) => {
    box.innerHTML = "";
    box = "";
  });
}
