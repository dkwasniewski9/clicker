const interval = setInterval(cookiesPerSecond, 1000);
let time = 1;
function cookiesPerSecond() {
  let cookies = parseInt(document.getElementById("balance").innerHTML);
  document.getElementById("perSecond").innerHTML = (cookies / time)
    .toFixed(2)
    .toString();
  ++time;
}
