(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(){let n={year:2024,month:0,day:1,hour:0,minute:0,second:0};const o=setInterval(()=>{const s=new Date,e=new Date(n.year,n.month,n.day,n.hour,n.minute,n.second)-s,t=Math.floor(e/(1e3*60*60*24)),c=Math.floor(e%(1e3*60*60*24)/(1e3*60*60)),l=Math.floor(e%(1e3*60*60)/(1e3*60)),u=Math.floor(e%(1e3*60)/1e3),a=document.querySelector("dotlottie-player"),d=document.querySelector("h1"),i=document.querySelector("#countdown"),m=document.querySelector(".img__firework");i&&(i.innerHTML=`<p><span>${t}d</span> <span>${c}h</span> <span>${l}m</span> <span>${u}s</span></p>`),a&&e<=0&&(clearInterval(o),a.removeAttribute("hidden"),i.innerHTML="a vše nej nej nej v novém roce 2024 😊",d.textContent="Šťastný nový rok!",m.setAttribute("hidden",""))},1e3)}function p(){const n=document.querySelectorAll(".magic-nut");n.forEach(o=>{o.addEventListener("click",function(){console.log("Clicked element:",this),this.classList.add("magic-nut--active"),Array.from(n).every(r=>r.classList.contains("magic-nut--active"))&&document.querySelector(".link-next").classList.remove("disabled")})})}document.addEventListener("DOMContentLoaded",()=>{f(),p()});
