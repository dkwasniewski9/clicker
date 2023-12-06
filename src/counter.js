const sasinImage = document.getElementById("img");
sasinImage.addEventListener("click", counter);
function counter() {
  let value = document.getElementById("balance").innerHTML;
  value = (parseInt(value) + 1).toString();
  document.getElementById("balance").innerHTML = value;
}
