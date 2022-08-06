const board = document.querySelector(".container .board");
board.addEventListener("click", function (event) {
  const boxDivs = document.querySelectorAll(".container .board div div");
  const arr = [];
  boxDivs.forEach(function (boxDiv) {
    arr.push(boxDiv.className);
  });

  let crosses = 0;
  let circles = 0;
  for (let x of arr) {
    if (x == "addCross") {
      crosses += 1;
    } else if (x == "addCircle") {
      circles += 1;
    }
  }
  const boxDiv = event.target;

  if (boxDiv.className === "" && crosses <= circles) {
    boxDiv.innerHTML = document.querySelector(
      ".container .mf .times"
    ).innerHTML;
    boxDiv.classList.add("addCross");
  } else if (boxDiv.className === "" && circles <= crosses) {
    boxDiv.classList.add("addCircle");
  }
});
