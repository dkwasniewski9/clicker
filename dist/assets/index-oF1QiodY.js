(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div>
    <h1>Sasin clicker</h1>
    <p>Masz aktualnie <b id="balance"> 0</b> sasinow</p>
    <p>Sasiny na sekunde: <b id="perSecond">0</b></p>
    <div class="card">
      <img src="https://a.allegroimg.com/s1024/0c5a72/3e8c5594495ca2773061d9c45e54" alt="banknot" onclick="counter()"> 
    </div>
  </div>
`;setInterval(a,1e3);let c=1;function a(){let o=parseInt(document.getElementById("balance").innerHTML);document.getElementById("perSecond").innerHTML=(o/c).toFixed(2).toString(),++c}
