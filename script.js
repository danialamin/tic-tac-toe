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
  } else if (boxDiv.className === "" && circles < crosses) {
    boxDiv.classList.add("addCircle");
  }

  //

  const boxDivs2 = document.querySelectorAll(".container .board div div");
  const arr2 = [];
  boxDivs.forEach(function (boxDiv) {
    arr2.push(boxDiv.className);
  });

  const message = document.querySelector(".message");
  const whoWon = message.querySelector(".message_container p span");

  if (arr2[2] == arr2[5] && arr2[2] == arr2[8] && arr2[2] != "") {
    if (arr2[2] == "addCross") {
      whoWon.innerText = "1";
    } else {
      whoWon.innerText = "2";
    }
    message.style.display = "flex";
  } else if (arr2[1] == arr2[4] && arr2[1] == arr2[7] && arr2[1] != "") {
    if (arr2[1] == "addCross") {
      whoWon.innerText = "1";
    } else {
      whoWon.innerText = "2";
    }
    message.style.display = "flex";
  } else if (arr2[0] == arr2[3] && arr2[0] == arr2[6] && arr2[0] != "") {
    if (arr2[0] == "addCross") {
      whoWon.innerText = "1";
    } else {
      whoWon.innerText = "2";
    }
    message.style.display = "flex";
  } else if (arr2[0] == arr2[1] && arr2[0] == arr2[2] && arr2[0] != "") {
    if (arr2[0] == "addCross") {
      whoWon.innerText = "1";
    } else {
      whoWon.innerText = "2";
    }
    message.style.display = "flex";
  } else if (arr2[3] == arr2[4] && arr2[3] == arr2[5] && arr2[3] != "") {
    if (arr2[3] == "addCross") {
      whoWon.innerText = "1";
    } else {
      whoWon.innerText = "2";
    }
    message.style.display = "flex";
  } else if (arr2[6] == arr2[7] && arr2[6] == arr2[8] && arr2[6] != "") {
    if (arr2[6] == "addCross") {
      whoWon.innerText = "1";
    } else {
      whoWon.innerText = "2";
    }
    message.style.display = "flex";
  } else if (arr2[0] == arr2[4] && arr2[0] == arr2[8] && arr2[0] != "") {
    if (arr2[0] == "addCross") {
      whoWon.innerText = "1";
    } else {
      whoWon.innerText = "2";
    }
    message.style.display = "flex";
  } else if (arr2[2] == arr2[4] && arr2[2] == arr2[6] && arr2[2] != "") {
    if (arr2[2] == "addCross") {
      whoWon.innerText = "1";
    } else {
      whoWon.innerText = "2";
    }
    message.style.display = "flex";
  } else if (arr2.indexOf("") == -1) {
    whoWon.parentElement.innerHTML = "It's a <span>tie</span>!";
    message.style.display = "flex";
  }
});

const reload = document.querySelector(".message .message_container img");
reload.addEventListener("click", function () {
  location.reload();
});
document
  .querySelector(".message .message_extras")
  .addEventListener("click", function () {
    location.reload();
  });
