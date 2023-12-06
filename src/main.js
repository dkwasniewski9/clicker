import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Sasin clicker</h1>
    <p>Masz aktualnie <b id="balance"> 0</b> sasinow</p>
    <p>Sasiny na sekunde: <b id="perSecond">0</b></p>
    <div class="card">
      <img id="img" src="https://a.allegroimg.com/s1024/0c5a72/3e8c5594495ca2773061d9c45e54" alt="banknot"> 
    </div>
  </div>
`;
