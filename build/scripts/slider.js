var e=document.querySelector(".main-container"),a=document.querySelector(".header"),l=document.querySelector(".hero__button"),s=document.querySelectorAll(".about__item"),r=!1,i=0,n,c=()=>{s.forEach(t=>{t.style.animation="first-swim 3s linear forwards",t.style.webkitAnimation="first-swim 3s linear forwards"}),s[2].style.animation="first-swim 2.5s linear 0.5s forwards",s[3].style.animation="first-swim 2.3s linear 0.7s forwards",s[4].style.animation="first-swim 2.3s linear 0.7s forwards"};e.addEventListener("mousedown",t=>{r=!0,i=t.clientX});e.addEventListener("mouseleave",()=>{r=!1});e.addEventListener("mouseup",t=>{r=!1,t.preventDefault;let o=t.clientX;n=i-o,n>0?e.scrollLeft+=1024:n<0&&(e.scrollLeft-=1024)});e.addEventListener("mousemove",()=>{});a.addEventListener("click",()=>{e.scrollLeft=0});l.addEventListener("click",()=>{c(),e.scrollLeft=1024});
