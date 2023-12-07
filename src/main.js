import "./style.css";
const Image = document.getElementById("img");
Image.addEventListener("click", counter);
function counter() {
  let value = document.getElementById("balance").innerHTML;
  let increment = document.getElementById("perClick").innerHTML;
  document.getElementById("balance").innerHTML = (
    parseInt(value) + parseInt(increment)
  ).toString();
  updateButtons(parseInt(value) + parseInt(increment));
}
function updateButtons(value) {
  if (value < 15) document.getElementById("elf").setAttribute("disabled", "");
  else document.getElementById("elf").removeAttribute("disabled");

  if (value < 50) document.getElementById("deer").setAttribute("disabled", "");
  else document.getElementById("deer").removeAttribute("disabled");

  if (value < 150)
    document.getElementById("santa").setAttribute("disabled", "");
  else document.getElementById("santa").removeAttribute("disabled");

  if (value < 300)
    document.getElementById("factory").setAttribute("disabled", "");
  else document.getElementById("factory").removeAttribute("disabled");

  if (value < 1000) document.getElementById("box").setAttribute("disabled", "");
  else document.getElementById("box").removeAttribute("disabled");
}
const interval = setInterval(cookiesPerSecond, 1000);
let perSecond = 0;
function cookiesPerSecond() {
  let cookies = parseInt(document.getElementById("balance").innerHTML);
  document.getElementById("balance").innerHTML = (
    cookies + perSecond
  ).toString();
  document.getElementById("perSecond").innerHTML = perSecond.toString();
  updateButtons(cookies + perSecond);
}
document.getElementById("elf").addEventListener("click", elfLevel);
function elfLevel() {
  let currentBalance = parseInt(document.getElementById("balance").innerHTML);
  if (currentBalance >= 15) {
    document.getElementById("balance").innerHTML = (
      currentBalance - 15
    ).toString();
    let level = parseInt(document.getElementById("elfLevel").innerHTML);
    document.getElementById("elfLevel").innerHTML = (level + 1).toString();
    perSecond += 1;
    updateButtons(currentBalance);
  }
}
document.getElementById("deer").addEventListener("click", deerLevel);
function deerLevel() {
  let currentBalance = parseInt(document.getElementById("balance").innerHTML);
  if (currentBalance >= 50) {
    document.getElementById("balance").innerHTML = (
      currentBalance - 50
    ).toString();
    let level = parseInt(document.getElementById("deerLevel").innerHTML);
    document.getElementById("deerLevel").innerHTML = (level + 1).toString();
    perSecond += 5;
    document.getElementById("perSecond").innerHTML = perSecond.toString();
    updateButtons(currentBalance - 50);
  }
}

document.getElementById("santa").addEventListener("click", santaLevel);
function santaLevel() {
  let currentBalance = parseInt(document.getElementById("balance").innerHTML);
  if (currentBalance >= 150) {
    document.getElementById("balance").innerHTML = (
      currentBalance - 150
    ).toString();
    let level = parseInt(document.getElementById("santaLevel").innerHTML);
    document.getElementById("santaLevel").innerHTML = (level + 1).toString();
    perSecond += 10;
    document.getElementById("perSecond").innerHTML = perSecond.toString();
    updateButtons(currentBalance - 150);
  }
}

document.getElementById("factory").addEventListener("click", factoryLevel);
function factoryLevel() {
  let currentBalance = parseInt(document.getElementById("balance").innerHTML);
  if (currentBalance >= 300) {
    document.getElementById("balance").innerHTML = (
      currentBalance - 300
    ).toString();
    let level = parseInt(document.getElementById("factoryLevel").innerHTML);
    document.getElementById("factoryLevel").innerHTML = (level + 1).toString();
    perSecond += 20;
    document.getElementById("perSecond").innerHTML = perSecond.toString();
    updateButtons(currentBalance - 300);
  }
}

document.getElementById("box").addEventListener("click", boxLevel);
function boxLevel() {
  let currentBalance = parseInt(document.getElementById("balance").innerHTML);
  if (currentBalance >= 1000) {
    document.getElementById("balance").innerHTML = (
      currentBalance - 1000
    ).toString();
    let level = parseInt(document.getElementById("boxLevel").innerHTML);
    document.getElementById("boxLevel").innerHTML = (level + 1).toString();
    perSecond += 30;
    document.getElementById("perSecond").innerHTML = perSecond.toString();
    updateButtons(currentBalance - 1000);
  }
}
