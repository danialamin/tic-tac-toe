const board = document.querySelector(".container .board");
board.addEventListener("click", function (event) {
  const boxDiv = event.target;

  if (boxDiv.className === "") {
    boxDiv.innerHTML = document.querySelector(
      ".container .mf .times"
    ).innerHTML;
    boxDiv.classList.add("addCross");
    next();
  }
});

function next() {
  board.addEventListener("click", function (event) {
    const boxDiv = event.target;
    if (boxDiv.className === "") {
      boxDiv.classList.add("addCircle");
    }
  });
}
