var v=document.getElementById.bind(document),r=v("scrollbar-container"),n=v("content"),c=v("scrollbar");n.addEventListener("scroll",()=>{c.style.height=`${r.clientHeight*n.clientHeight/n.scrollHeight}px`,c.style.top=`${r.clientHeight*n.scrollTop/n.scrollHeight}px`});var g=new Event("scroll");window.addEventListener("resize",n.dispatchEvent.bind(n,g));n.dispatchEvent(g);c.addEventListener("mousedown",e=>{e.preventDefault();let t=c.offsetTop,i=function(l){let s=l.pageY-e.pageY;c.style.top=`${Math.min(r.clientHeight-c.clientHeight,Math.max(0,t+s))}px`,n.scrollTop=n.scrollHeight*c.offsetTop/r.clientHeight};document.addEventListener("mousemove",i),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",i)})});var E=document.querySelector(".modal__button-close"),S=document.querySelector(".service__button"),L=document.querySelector(".modal");E.addEventListener("click",()=>{L.classList.toggle("modal__open")});S.addEventListener("click",()=>{L.classList.toggle("modal__open")});var b=document.querySelectorAll("[data-button]"),f=document.querySelectorAll(".slider-pagination__dot"),h=document.querySelector(".slider-pagination__dots"),w=document.querySelector(".slider-pagination"),o=w.querySelector(".slider-pagination__slides");b.forEach(e=>{e.addEventListener("click",()=>{let t=e.dataset.button==="next"?1:-1,i=o.querySelector("[data-active]"),l=h.querySelector(".slider-pagination__dot--active"),s=[...o.children].indexOf(i)+t,m=[...h.children].indexOf(l)+t;s<=0&&t===-1&&(e.disabled=!0),s>=o.children.length&&t===1&&(e.disabled=!0),s>=0&&s<o.children.length&&(f.forEach(y=>{y.classList.remove("slider-pagination__dot--active")}),h.children[m].classList.add("slider-pagination__dot--active"),o.children[s].dataset.active=!0,o.children[s].classList.remove("visually-hidden"),i.classList.add("visually-hidden"),delete i.dataset.active),e.disabled=!1})});f.forEach(e=>{e.addEventListener("click",t=>{let i=Number(t.target.closest(".slider-pagination__dot").dataset.id),l=o.querySelector("[data-active]");o.children[i].dataset.active=!0,o.children[i].classList.remove("visually-hidden"),f.forEach(m=>{m.classList.remove("slider-pagination__dot--active")}),e.classList.add("slider-pagination__dot--active"),Number(l.dataset.id)===i?e.disabled=!0:(l.classList.add("visually-hidden"),delete l.dataset.active),e.disabled=!1})});var a=document.querySelector(".main-container"),q=document.querySelector(".header"),H=document.querySelector(".hero__button"),d=document.querySelectorAll(".about__item"),u=!1,_=0,p,k=()=>{d.forEach(e=>{e.style.animation="first-swim 3s linear forwards",e.style.webkitAnimation="first-swim 3s linear forwards"}),d[2].style.animation="first-swim 2.5s linear 0.5s forwards",d[3].style.animation="first-swim 2.3s linear 0.7s forwards",d[4].style.animation="first-swim 2.3s linear 0.7s forwards"};a.addEventListener("mousedown",e=>{u=!0,_=e.clientX});a.addEventListener("mouseleave",()=>{u=!1});a.addEventListener("mouseup",e=>{u=!1,e.preventDefault;let t=e.clientX;p=_-t,p>0?a.scrollLeft+=1024:p<0&&(a.scrollLeft-=1024)});a.addEventListener("mousemove",()=>{});q.addEventListener("click",()=>{a.scrollLeft=0});H.addEventListener("click",()=>{k(),a.scrollLeft=1024});
