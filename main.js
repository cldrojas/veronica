(()=>{"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function s(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(e){return 0===Object.keys(e).length}function r(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function c(e){e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function g(){return u(" ")}function p(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function f(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let v;function h(e){v=e}new Set,new Set;const y=[],$=[],b=[],x=[],w=Promise.resolve();let k=!1;function q(e){b.push(e)}let _=!1;const E=new Set;function C(){if(!_){_=!0;do{for(let e=0;e<y.length;e+=1){const t=y[e];h(t),H(t.$$)}for(h(null),y.length=0;$.length;)$.pop()();for(let e=0;e<b.length;e+=1){const t=b[e];E.has(t)||(E.add(t),t())}b.length=0}while(y.length);for(;x.length;)x.pop()();k=!1,_=!1,E.clear()}}function H(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}const S=new Set;function A(e,t){e&&e.i&&(S.delete(e),e.i(t))}function z(e,t,n,o){if(e&&e.o){if(S.has(e))return;S.add(e),undefined.c.push((()=>{S.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}const M="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;let L;function T(e){e&&e.c()}function j(e,n,a,l){const{fragment:r,on_mount:i,on_destroy:c,after_update:d}=e.$$;r&&r.m(n,a),l||q((()=>{const n=i.map(t).filter(s);c?c.push(...n):o(n),e.$$.on_mount=[]})),d.forEach(q)}function B(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,s,a,l,r,i,d=[-1]){const u=v;h(t);const g=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:s.context||[]),callbacks:n(),dirty:d,skip_bound:!1};let p=!1;if(g.ctx=a?a(t,s.props||{},((e,n,...o)=>{const s=o.length?o[0]:n;return g.ctx&&r(g.ctx[e],g.ctx[e]=s)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](s),p&&function(e,t){-1===e.$$.dirty[0]&&(y.push(e),k||(k=!0,w.then(C)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],g.update(),p=!0,o(g.before_update),g.fragment=!!l&&l(g.ctx),s.target){if(s.hydrate){const e=(f=s.target,Array.from(f.childNodes));g.fragment&&g.fragment.l(e),e.forEach(c)}else g.fragment&&g.fragment.c();s.intro&&A(t.$$.fragment),j(t,s.target,s.anchor,s.customElement),C()}var f;h(u)}new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(L=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(t).filter(s);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){B(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!l(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class P{$destroy(){B(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!l(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function N(t){let n;return{c(){n=d("div"),n.innerHTML='<a href="#Hero" class="svelte-ywg2a0">Verónica</a>',f(n,"class","logo svelte-ywg2a0")},m(e,t){i(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}const O=class extends P{constructor(e){var t;super(),document.getElementById("svelte-ywg2a0-style")||((t=d("style")).id="svelte-ywg2a0-style",t.textContent='.logo.svelte-ywg2a0{font-family:"Pattaya", sans-serif;font-size:40px}a.svelte-ywg2a0{text-decoration:none;color:var(--morado)}',r(document.head,t)),I(this,e,null,N,a,{})}};function V(t){let n,o,s,a,l,u,p,m,v,h,y,$;return l=new O({}),{c(){n=d("div"),o=d("div"),s=d("nav"),a=d("ul"),T(l.$$.fragment),u=g(),p=d("li"),p.innerHTML='<a href="#Services" class="svelte-1red8ao">Servicios</a>',m=g(),v=d("li"),v.innerHTML='<a href="#About" class="svelte-1red8ao">Sobre mi</a>',h=g(),y=d("li"),y.innerHTML='<a href="#Contact" class="active svelte-1red8ao">Contacto</a>',f(p,"class","svelte-1red8ao"),f(v,"class","svelte-1red8ao"),f(y,"class","svelte-1red8ao"),f(a,"class","svelte-1red8ao"),f(o,"class","header-content svelte-1red8ao"),f(n,"id","Header"),f(n,"class","Header sticky svelte-1red8ao")},m(e,t){i(e,n,t),r(n,o),r(o,s),r(s,a),j(l,a,null),r(a,u),r(a,p),r(a,m),r(a,v),r(a,h),r(a,y),$=!0},p:e,i(e){$||(A(l.$$.fragment,e),$=!0)},o(e){z(l.$$.fragment,e),$=!1},d(e){e&&c(n),B(l)}}}const F=class extends P{constructor(e){var t;super(),document.getElementById("svelte-1red8ao-style")||((t=d("style")).id="svelte-1red8ao-style",t.textContent=".Header.svelte-1red8ao{display:none}@media only screen and (min-width: 860px){.Header.svelte-1red8ao{position:sticky;z-index:2;height:60px;background-color:var(--morado-darker);display:flex;align-items:center;justify-content:center;font-weight:bold}.header-content.svelte-1red8ao{width:100%}ul.svelte-1red8ao{display:flex;justify-content:space-evenly;align-items:center;margin:0}li.svelte-1red8ao{line-height:60px;list-style:none}a.svelte-1red8ao{color:var(--white)}.active.svelte-1red8ao{background-color:var(--morado);padding:18px;border-radius:0}.sticky.svelte-1red8ao{top:0;width:100%}}",r(document.head,t)),I(this,e,null,V,a,{})}};function X(t){let n;return{c(){n=d("div"),n.innerHTML='<div class="hero-content svelte-7vxn28"><div class="hero-image svelte-7vxn28"></div> \n\t\t<div class="hero-title svelte-7vxn28"><h2>Hola!</h2> \n\t\t\t<h4>Mi nombre es Verónica Crespo</h4> \n\t\t\t<h5>Fisioterapeuta</h5></div></div>',f(n,"id","Hero"),f(n,"class","Hero svelte-7vxn28")},m(e,t){i(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}const D=class extends P{constructor(e){var t;super(),document.getElementById("svelte-7vxn28-style")||((t=d("style")).id="svelte-7vxn28-style",t.textContent='.Hero.svelte-7vxn28{color:var(--white)}.hero-content.svelte-7vxn28{height:750px}.hero-image.svelte-7vxn28{background-image:url("./img/bg-hero.jpg");background-size:cover;height:100%}.hero-title.svelte-7vxn28{position:absolute;z-index:1;top:47%;margin:10px;font-size:30px;text-align:center;display:block;justify-content:left;width:90%;height:35%;background-color:#401770c9;padding:10px}@media only screen and (min-width: 860px){.hero-content.svelte-7vxn28{padding:30px;background:var(--morado-darker)}.hero-image.svelte-7vxn28{margin-left:10%;background-image:url("./img/bg-hero.jpeg");background-size:contain;background-repeat:no-repeat}.hero-title.svelte-7vxn28{background-color:#4f1e8859;top:25%;left:45%;width:40%;height:60%}}',r(document.head,t)),I(this,e,null,X,a,{})}},{document:G}=M;function J(t){let n,a,l,v,h,y,$,b,x,w,k,q,_,E,C,H,S,A,z,M,L,T,j,B,I,P,N,O,V,F=t[3]>0?"MXN":"";return{c(){n=d("div"),a=d("h2"),l=u(t[0]),v=g(),h=d("span"),y=u(t[1]),$=g(),b=d("button"),b.textContent="Ver detalles >>",x=g(),w=d("div"),k=d("div"),q=d("div"),_=d("h2"),E=u(t[0]),C=g(),H=d("p"),S=u(t[2]),A=g(),z=d("p"),M=u("Valor: "),L=u(t[3]),T=g(),j=u(F),B=g(),I=d("div"),P=d("button"),P.textContent="Agendar",f(b,"class","svelte-qdalss"),f(n,"class","Service svelte-qdalss"),f(P,"class","svelte-qdalss"),f(I,"class","action"),f(q,"class","container"),f(k,"class","modal-content svelte-qdalss"),f(w,"id",N="modal-"+t[0]),f(w,"class","modal svelte-qdalss")},m(e,o){i(e,n,o),r(n,a),r(a,l),r(n,v),r(n,h),r(h,y),r(n,$),r(n,b),i(e,x,o),i(e,w,o),r(w,k),r(k,q),r(q,_),r(_,E),r(q,C),r(q,H),r(H,S),r(q,A),r(q,z),r(z,M),r(z,L),r(z,T),r(z,j),r(q,B),r(q,I),r(I,P),O||(V=[p(n,"click",t[4]),p(P,"click",(function(){s(K(t[0]))&&K(t[0]).apply(this,arguments)})),p(w,"click",t[4])],O=!0)},p(e,[n]){t=e,1&n&&m(l,t[0]),2&n&&m(y,t[1]),1&n&&m(E,t[0]),4&n&&m(S,t[2]),8&n&&m(L,t[3]),8&n&&F!==(F=t[3]>0?"MXN":"")&&m(j,F),1&n&&N!==(N="modal-"+t[0])&&f(w,"id",N)},i:e,o:e,d(e){e&&c(n),e&&c(x),e&&c(w),O=!1,o(V)}}}function K(e){console.log("Agendar hora para ",e)}function Q(e,t,n){let{title:o}=t,{description:s}=t,{details:a}=t,{cost:l}=t;var r=!1;return e.$$set=e=>{"title"in e&&n(0,o=e.title),"description"in e&&n(1,s=e.description),"details"in e&&n(2,a=e.details),"cost"in e&&n(3,l=e.cost)},[o,s,a,l,function(){(r=!r)?(document.getElementById("modal-"+o).style.display="block",document.body.classList.add("stop")):(document.body.classList.remove("stop"),document.getElementById("modal-"+o).style.display="none")}]}const R=class extends P{constructor(e){var t;super(),G.getElementById("svelte-qdalss-style")||((t=d("style")).id="svelte-qdalss-style",t.textContent=".Service.svelte-qdalss{width:60%;box-shadow:midnightblue 10px 10px;margin:auto;display:grid;background-color:var(--morado-dark);color:var(--white);justify-items:center;padding:30px}button.svelte-qdalss{background-color:transparent;border:none;margin-top:50px;font-weight:bold;color:var(--white)}.modal.svelte-qdalss{display:none;position:fixed;top:50%;left:50%;width:100%;height:100vh;transform:translate(-50%, -50%);background:#1b0f0f98}.modal-content.svelte-qdalss{position:absolute;width:60%;top:10%;left:10%;z-index:2;background-color:#8c30f5ef;color:var(--white);padding:30px}",r(G.head,t)),I(this,e,Q,J,a,{title:0,description:1,details:2,cost:3})}};function U(t){let n,o,s,a,l,u;return s=new R({props:{title:"Primer servicio",description:"Primer servicio agregado de forma manual",details:"Esta es la descripcion detallada del primer servicio agregado de forma manual",cost:"500"}}),l=new R({props:{title:"Segundo servicio",description:"Segundo servicio agregado de forma manual para probar el layout",details:"Esta es la descripcion detallada del segundo servicio agregado de forma manual",cost:"500"}}),{c(){n=d("div"),o=d("div"),T(s.$$.fragment),a=g(),T(l.$$.fragment),f(o,"class","Services-content svelte-1b93lrk"),f(n,"class","Services svelte-1b93lrk")},m(e,t){i(e,n,t),r(n,o),j(s,o,null),r(o,a),j(l,o,null),u=!0},p:e,i(e){u||(A(s.$$.fragment,e),A(l.$$.fragment,e),u=!0)},o(e){z(s.$$.fragment,e),z(l.$$.fragment,e),u=!1},d(e){e&&c(n),B(s),B(l)}}}const W=class extends P{constructor(e){var t;super(),document.getElementById("svelte-1b93lrk-style")||((t=d("style")).id="svelte-1b93lrk-style",t.textContent=".Services.svelte-1b93lrk{margin:10% 0}.Services-content.svelte-1b93lrk{display:grid;gap:20px}@media only screen and (min-width: 860px){.Services-content.svelte-1b93lrk{grid-template-columns:repeat(3, 1fr)}}",r(document.head,t)),I(this,e,null,U,a,{})}};function Y(t){let n;return{c(){n=d("div"),n.innerHTML='<div class="about-content svelte-ac6eoq"><p class="svelte-ac6eoq">Me gusta mucho ayudar a las personas a rehabilitarse, es mi manera de\n\t\t\taportar al mundo y shalala.</p></div>',f(n,"id","About"),f(n,"class","About svelte-ac6eoq")},m(e,t){i(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}const Z=class extends P{constructor(e){var t;super(),document.getElementById("svelte-ac6eoq-style")||((t=d("style")).id="svelte-ac6eoq-style",t.textContent='.About.svelte-ac6eoq.svelte-ac6eoq{font-family:"Pattaya", sans-serif;font-size:40px;height:550px;background-image:url("./img/bg-info.jpeg");background-size:cover;background-position:center;background-repeat:no-repeat;color:var(--white)}.about-content.svelte-ac6eoq.svelte-ac6eoq{display:grid;grid-template-rows:1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr;padding:40px;background-color:#008080c4;height:100%;grid-row:1 / -1;grid-column:1/ -1}.about-content.svelte-ac6eoq p.svelte-ac6eoq{display:grid;grid-column:1 /3;grid-row:2 / -1;font-size:30px}@media only screen and (min-width: 860px){.About.svelte-ac6eoq.svelte-ac6eoq{background-size:contain;background-position:center}.about-content.svelte-ac6eoq.svelte-ac6eoq{background-color:#008080c4}.about-content.svelte-ac6eoq p.svelte-ac6eoq{margin:0;font-size:30px}}',r(document.head,t)),I(this,e,null,Y,a,{})}};function ee(t){let n,o,s,a,l,u,p,m;return s=new O({}),{c(){n=d("div"),o=d("div"),T(s.$$.fragment),a=g(),l=d("div"),l.textContent="Aportando al bienestar de las personas",u=g(),p=d("div"),p.innerHTML='<ul class="svelte-1hn4e6g"><li class="svelte-1hn4e6g"><span class="fab fa-facebook-f"></span></li> \n\t\t\t\t<li class="svelte-1hn4e6g"><span class="fab fa-twitter"></span></li> \n\t\t\t\t<li class="svelte-1hn4e6g"><a href="/"><span class="fab fa-instagram svelte-1hn4e6g"></span></a></li></ul>',f(l,"class","description svelte-1hn4e6g"),f(p,"class","social svelte-1hn4e6g"),f(o,"class","footer-content svelte-1hn4e6g"),f(n,"id","Contact"),f(n,"class","Footer svelte-1hn4e6g")},m(e,t){i(e,n,t),r(n,o),j(s,o,null),r(o,a),r(o,l),r(o,u),r(o,p),m=!0},p:e,i(e){m||(A(s.$$.fragment,e),m=!0)},o(e){z(s.$$.fragment,e),m=!1},d(e){e&&c(n),B(s)}}}const te=class extends P{constructor(e){var t;super(),document.getElementById("svelte-1hn4e6g-style")||((t=d("style")).id="svelte-1hn4e6g-style",t.textContent=".Footer.svelte-1hn4e6g{background-color:#2b2b2b;color:var(--white)}.footer-content.svelte-1hn4e6g{padding:20px;display:grid;grid-template-columns:1fr 1fr;justify-content:space-between}.social.svelte-1hn4e6g{display:flex;grid-column:2 / -1;grid-row:1}.fa-instagram.svelte-1hn4e6g{color:var(--white)}.description.svelte-1hn4e6g{font-size:12px;grid-column:1/ 3}ul.svelte-1hn4e6g{width:100%;justify-content:space-evenly;align-items:center;text-align:start;display:flex;margin:0}li.svelte-1hn4e6g{font-size:25px;list-style:none}",r(document.head,t)),I(this,e,null,ee,a,{})}};function ne(t){let n,o,s,a,l,u,p,m,v,h,y,$;return s=new F({}),l=new D({}),p=new W({}),v=new Z({}),y=new te({}),{c(){n=d("main"),o=d("div"),T(s.$$.fragment),a=g(),T(l.$$.fragment),u=g(),T(p.$$.fragment),m=g(),T(v.$$.fragment),h=g(),T(y.$$.fragment),f(o,"class","App-content svelte-1ayyh7m"),f(n,"class","App svelte-1ayyh7m")},m(e,t){i(e,n,t),r(n,o),j(s,o,null),r(o,a),j(l,o,null),r(o,u),j(p,o,null),r(o,m),j(v,o,null),r(o,h),j(y,o,null),$=!0},p:e,i(e){$||(A(s.$$.fragment,e),A(l.$$.fragment,e),A(p.$$.fragment,e),A(v.$$.fragment,e),A(y.$$.fragment,e),$=!0)},o(e){z(s.$$.fragment,e),z(l.$$.fragment,e),z(p.$$.fragment,e),z(v.$$.fragment,e),z(y.$$.fragment,e),$=!1},d(e){e&&c(n),B(s),B(l),B(p),B(v),B(y)}}}new class extends P{constructor(e){var t;super(),document.getElementById("svelte-1ayyh7m-style")||((t=d("style")).id="svelte-1ayyh7m-style",t.textContent='@import url("https://fonts.googleapis.com/css2?family=Pattaya&display=swap");.App.svelte-1ayyh7m{overflow:hidden;color:white}.App-content.svelte-1ayyh7m{margin:0 auto}',r(document.head,t)),I(this,e,null,ne,a,{})}}({target:document.getElementById("root")})})();