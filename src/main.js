import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Sasin clicker</h1>
    <p>Masz aktualnie <b id="balance"> 0</b> sasinow</p>
    <p>Sasiny na sekunde: <b id="perSecond">0</b></p>
    <div class="card">
      <img src="/src/images/sasin.png" alt="banknot" onclick="counter()"> 
    </div>
  </div>
`;
