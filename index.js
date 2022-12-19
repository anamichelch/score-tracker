let homeScore = 0;
let guestScore = 0;
let homeScoreBoard = document.getElementById("home-score");
let guestScoreBoard = document.getElementById("guest-score");
function addOneHome() {
  homeScore += 1;
  homeScoreBoard.textContent = homeScore;
}
function addTwoHome() {
  homeScore += 2;
  homeScoreBoard.textContent = homeScore;
}
function addTrheeHome() {
  homeScore += 3;
  homeScoreBoard.textContent = homeScore;
}
function addOneGuest() {
  guestScore += 1;
  guestScoreBoard.textContent = guestScore;
}
function addTwoGuest() {
  guestScore += 2;
  guestScoreBoard.textContent = guestScore;
}
function addTrheeGuest() {
  guestScore += 3;
  guestScoreBoard.textContent = guestScore;
}
