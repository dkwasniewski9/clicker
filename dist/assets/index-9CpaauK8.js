(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
  <div>
    <h1>Sasin clicker</h1>
    <p>Masz aktualnie <b id="balance"> 0</b> sasinow</p>
    <p>Sasiny na sekunde: <b id="perSecond">0</b></p>
    <div class="card">
      <img src="/src/images/sasin.png" alt="banknot" onclick="counter()"> 
    </div>
  </div>
`;
