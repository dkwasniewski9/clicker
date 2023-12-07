import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Świąteczny clicker</h1>
    <p>Łącznie pierników: <b id="balance"> 0</b></p>
    <p>Pierników na sekunde: <b id="perSecond">0</b></p>
    <p>Pierników na klikniecie: <b id="perClick">0</b></p>
    <div class="card">
      <img id="img" src="src/public/gingerbread_man.png" alt="piernik"> 
    </div>
  </div>
`;
