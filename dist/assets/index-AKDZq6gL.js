(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div>
    <h1>Sasin clicker</h1>
    <p>Masz aktualnie <b id="balance"> 0</b> sasinow</p>
    <p>Sasiny na sekunde: <b id="perSecond">0</b></p>
    <div class="card">
      <img id="img" src="https://a.allegroimg.com/s1024/0c5a72/3e8c5594495ca2773061d9c45e54" alt="banknot"> 
    </div>
  </div>
`;const a=document.getElementById("img");a.addEventListener("click",d);function d(){let n=document.getElementById("balance").innerHTML;n=(parseInt(n)+1).toString(),document.getElementById("balance").innerHTML=n}setInterval(l,1e3);let c=1;function l(){let n=parseInt(document.getElementById("balance").innerHTML);document.getElementById("perSecond").innerHTML=(n/c).toFixed(2).toString(),++c}
