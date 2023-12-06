const interval = setInterval(sasinPerSecond, 1000);
let time = 1;
function sasinPerSecond() {
  let sasins = parseInt(document.getElementById("balance").innerHTML);
  document.getElementById("perSecond").innerHTML = (sasins / time)
    .toFixed(2)
    .toString();
  ++time;
  console.log(time);
}
