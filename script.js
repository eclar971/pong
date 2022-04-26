var keys;
var leftBoard;
var rightBoard;
var ball;
var leftTop;
var rightTop;
var started = false;
var start = false;
var end = true;
var ballLeft = 0;
var ballTop = 0;
var moveLeft = 2;
var moveUp = 2;
var left = true;
var topp = true;
var leftScore = 0;
var rightScore = 0;
var scoreBoard;
var moveBoards;
var auto = false
window.onload = function () {
  leftBoard = document.getElementById("left");
  rightBoard = document.getElementById("right");
  scoreBoard = document.getElementById("scoreBoard");
  ball = document.getElementById("ball");
  leftBoard.style.left = leftBoard.offsetLeft + 8;
  rightBoard.style.left = window.innerWidth - 32;
  leftBoard.style.top = window.innerHeight / 2 - leftBoard.clientHeight / 2;
  rightBoard.style.top = window.innerHeight / 2 - rightBoard.clientHeight / 2;
  ball.style.top = window.innerHeight / 2 - 2.5;
  ball.style.left = window.innerWidth / 2 - 2.5;
  ballTop = window.innerHeight / 2 - 2.5;
  ballLeft = window.innerWidth / 2 - 2.5;
  leftTop = window.innerHeight / 2 - leftBoard.clientHeight / 2;
  rightTop = window.innerHeight / 2 - rightBoard.clientHeight / 2;
};
setInterval(function () {
  const rightMost = window.innerWidth - ball.offsetWidth - 16;
  const leftMost = -16;
  const highest = -16;
  const lowest = window.innerHeight - ball.offsetHeight - 14;
  if (start) {
    rightBoardX = window.innerWidth - 32;
    leftBoardX = leftBoard.offsetLeft + 8;
    checkRightXAxis =
      rightBoardX <= ballLeft + ball.clientWidth &&
      ballLeft + ball.clientWidth <= rightBoardX + rightBoard.clientWidth;
    checkRightYAxis =
      rightTop <= ballTop && ballTop <= rightTop + rightBoard.clientHeight;
    checkLeftXAxis =
      leftBoardX + leftBoard.clientWidth >= ballLeft + 16 &&
      ballLeft + 16 >= leftBoardX;
    checkLeftYAxis =
      leftTop <= ballTop && ballTop <= leftTop + leftBoard.clientHeight;
    if (checkRightXAxis && checkRightYAxis) {
      left = !left;
      rightScore += 1;
      scoreBoard.innerHTML = "Score " + leftScore + " : " + rightScore + "";
    }
    if (checkLeftXAxis && checkLeftYAxis) {
      left = !left;
      leftScore += 1;
      scoreBoard.innerHTML = "Score " + leftScore + " : " + rightScore + "";
    }
    if (left) {
      if (ballLeft <= rightMost) {
        ballLeft += moveLeft;
        ball.style.left = ballLeft + "px";
      } else {
        leftScore = 0;
        rightScore = 0;
        scoreBoard.innerHTML = "Score " + leftScore + " : " + rightScore + "";
        start = false;
        left = false;
      }
    } else if (!left) {
      if (ballLeft >= leftMost) {
        ballLeft -= moveLeft;
        ball.style.left = ballLeft + "px";
      } else {
        leftScore = 0;
        rightScore = 0;
        scoreBoard.innerHTML = "Score " + leftScore + " : " + rightScore + "";
        start = false;
        left = true;
      }
    }
    if (topp) {
      if (ballTop <= lowest) {
        if (!left) {
          moveLeftBoard = ballLeft;
        }
        ballTop += moveUp;
        ball.style.top = ballTop + "px";
      } else {
        topp = false;
      }
    } else if (!topp) {
      if (ballTop >= highest) {
        ballTop -= moveUp;
        ball.style.top = ballTop + "px";
      } else {
        topp = true;
      }
    }
  }
  if (auto) {
    rightBoardX = window.innerWidth - 32;
    leftBoardX = leftBoard.offsetLeft + 8;
    checkRightXAxis =
      rightBoardX <= ballLeft + ball.clientWidth &&
      ballLeft + ball.clientWidth <= rightBoardX + rightBoard.clientWidth;
    checkRightYAxis =
      rightTop <= ballTop && ballTop <= rightTop + rightBoard.clientHeight;
    checkLeftXAxis =
      leftBoardX + leftBoard.clientWidth >= ballLeft + 16 &&
      ballLeft + 16 >= leftBoardX;
    checkLeftYAxis =
      leftTop <= ballTop && ballTop <= leftTop + leftBoard.clientHeight;
    if (checkRightXAxis && checkRightYAxis) {
      left = !left;
      rightScore += 1;
      scoreBoard.innerHTML = "Score " + leftScore + " : " + rightScore + "";
    }
    if (checkLeftXAxis && checkLeftYAxis) {
      left = !left;
      leftScore += 1;
      scoreBoard.innerHTML = "Score " + leftScore + " : " + rightScore + "";
    }
    if (left) {
      if (ballLeft <= rightMost) {
        if (!topp && moveBoards > window.innerWidth/2){
          if (window.innerHeight - (window.innerWidth - moveBoards) > rightTop + 32){
            rightTop += 5
            rightBoard.style.top = rightTop + "px";
          }else if(window.innerHeight - (window.innerWidth - moveBoards) < rightTop + 32){
            rightTop -= 5
            rightBoard.style.top = rightTop + "px";
          }
        }else if (topp && moveBoards > window.innerWidth/2){
          if (window.innerWidth - moveBoards > rightTop + 87){
            rightTop += 5
            rightBoard.style.top = rightTop + "px";
          }else if(window.innerWidth - moveBoards < rightTop + 87){
            rightTop -= 5
            rightBoard.style.top = rightTop + "px";
          }
        }
        ballLeft += moveLeft;
        ball.style.left = ballLeft + "px";
      } else {
        left = false;
      }
    } else if (!left) {
      if (ballLeft >= leftMost) {
        if (!topp && moveBoards < window.innerWidth/2){
          if (window.innerHeight - moveBoards > leftTop + 32){
            leftTop += 5
            leftBoard.style.top = leftTop + "px";
          }else if(window.innerHeight - moveBoards < leftTop + 32){
            leftTop -= 5
            leftBoard.style.top = leftTop + "px";
          }
        }else if (topp && moveBoards < window.innerWidth/2){
          if (moveBoards - 8 > leftTop + 32){
            leftTop += 5
            leftBoard.style.top = leftTop + "px";
          }else if(moveBoards - 8 < leftTop + 32){
            leftTop -= 5
            leftBoard.style.top = leftTop + "px";
          }
        }
        ballLeft -= moveLeft;
        ball.style.left = ballLeft + "px";
      } else {
        left = true;
      }
    }
    if (topp) {
      if (ballTop <= lowest) {
        ballTop += moveUp;
        ball.style.top = ballTop + "px";
      } else {
        moveBoards = ballLeft;
        topp = false;
      }
    } else if (!topp) {
      if (ballTop >= highest) {
        ballTop -= moveUp;
        ball.style.top = ballTop + "px";
      } else {
        moveBoards = ballLeft;
        topp = true;
      }
    }
  }
}, 4);
window.addEventListener("keydown", function movement(obj) {
  keys = keys || [];
  keys[obj.key] = true;
  if (
    keys["ArrowDown"] &&
    rightTop < window.innerHeight - rightBoard.clientHeight * 1.5 &&
    !auto
  ) {
    rightTop += 10;
    rightBoard.style.top = rightTop + "px";
  }
  if (keys["ArrowUp"] && rightTop > 0 - rightBoard.clientHeight / 2 && !auto) {
    rightTop -= 10;
    rightBoard.style.top = rightTop + "px";
  }
  if (keys["w"] && leftTop > 0 - leftBoard.clientHeight / 2 && !auto) {
    leftTop -= 10;
    leftBoard.style.top = leftTop + "px";
  }
  if (keys["p"]) {
    auto = true;
    start = false;
  }
  if (
    keys["s"] &&
    leftTop < window.innerHeight - leftBoard.clientHeight * 1.5 &&
    !auto
  ) {
    leftTop += 10;
    leftBoard.style.top = leftTop + "px";
  }
  if (keys[" "] && !start) {
    leftBoard.style.left = 16;
    rightBoard.style.left = window.innerWidth - 32;
    leftBoard.style.top = window.innerHeight / 2 - leftBoard.clientHeight / 2;
    rightBoard.style.top = window.innerHeight / 2 - rightBoard.clientHeight / 2;
    ball.style.top = window.innerHeight / 2 - 2.5;
    ball.style.left = window.innerWidth / 2 - 2.5;
    ballTop = window.innerHeight / 2 - 2.5;
    ballLeft = window.innerWidth / 2 - 2.5;
    leftTop = window.innerHeight / 2 - leftBoard.clientHeight / 2;
    rightTop = window.innerHeight / 2 - rightBoard.clientHeight / 2;
    start = true;
    auto = false;
  }
});
document.addEventListener(
  "keyup",
  function movement(obj) {
    keys[obj.key] = false;
    stop();
  },
  false
);
