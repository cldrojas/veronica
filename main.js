(()=>{"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function s(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(e){return 0===Object.keys(e).length}function r(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function c(e){e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function g(){return u(" ")}function p(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function f(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let v;function h(e){v=e}new Set,new Set;const y=[],b=[],$=[],x=[],w=Promise.resolve();let k=!1;function _(e){$.push(e)}let E=!1;const C=new Set;function q(){if(!E){E=!0;do{for(let e=0;e<y.length;e+=1){const t=y[e];h(t),H(t.$$)}for(h(null),y.length=0;b.length;)b.pop()();for(let e=0;e<$.length;e+=1){const t=$[e];C.has(t)||(C.add(t),t())}$.length=0}while(y.length);for(;x.length;)x.pop()();k=!1,E=!1,C.clear()}}function H(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_)}}const S=new Set;function A(e,t){e&&e.i&&(S.delete(e),e.i(t))}function z(e,t,n,o){if(e&&e.o){if(S.has(e))return;S.add(e),undefined.c.push((()=>{S.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}const M="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;let L;function T(e){e&&e.c()}function B(e,n,a,l){const{fragment:r,on_mount:i,on_destroy:c,after_update:d}=e.$$;r&&r.m(n,a),l||_((()=>{const n=i.map(t).filter(s);c?c.push(...n):o(n),e.$$.on_mount=[]})),d.forEach(_)}function j(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,s,a,l,r,i,d=[-1]){const u=v;h(t);const g=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:s.context||[]),callbacks:n(),dirty:d,skip_bound:!1};let p=!1;if(g.ctx=a?a(t,s.props||{},((e,n,...o)=>{const s=o.length?o[0]:n;return g.ctx&&r(g.ctx[e],g.ctx[e]=s)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](s),p&&function(e,t){-1===e.$$.dirty[0]&&(y.push(e),k||(k=!0,w.then(q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],g.update(),p=!0,o(g.before_update),g.fragment=!!l&&l(g.ctx),s.target){if(s.hydrate){const e=(m=s.target,Array.from(m.childNodes));g.fragment&&g.fragment.l(e),e.forEach(c)}else g.fragment&&g.fragment.c();s.intro&&A(t.$$.fragment),B(t,s.target,s.anchor,s.customElement),q()}var m;h(u)}new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(L=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(t).filter(s);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){j(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!l(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class P{$destroy(){j(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!l(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function N(t){let n;return{c(){n=d("div"),n.innerHTML='<a href="#Hero" class="svelte-ywg2a0">Verónica</a>',m(n,"class","logo svelte-ywg2a0")},m(e,t){i(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}const O=class extends P{constructor(e){var t;super(),document.getElementById("svelte-ywg2a0-style")||((t=d("style")).id="svelte-ywg2a0-style",t.textContent='.logo.svelte-ywg2a0{font-family:"Pattaya", sans-serif;font-size:40px}a.svelte-ywg2a0{text-decoration:none;color:var(--morado)}',r(document.head,t)),I(this,e,null,N,a,{})}};function V(t){let n,o,s,a,l,u,p,f,v,h,y,b;return l=new O({}),{c(){n=d("div"),o=d("div"),s=d("nav"),a=d("ul"),T(l.$$.fragment),u=g(),p=d("li"),p.innerHTML='<a href="#Services" class="svelte-1red8ao">Servicios</a>',f=g(),v=d("li"),v.innerHTML='<a href="#About" class="svelte-1red8ao">Sobre mi</a>',h=g(),y=d("li"),y.innerHTML='<a href="#Contact" class="active svelte-1red8ao">Contacto</a>',m(p,"class","svelte-1red8ao"),m(v,"class","svelte-1red8ao"),m(y,"class","svelte-1red8ao"),m(a,"class","svelte-1red8ao"),m(o,"class","header-content svelte-1red8ao"),m(n,"id","Header"),m(n,"class","Header sticky svelte-1red8ao")},m(e,t){i(e,n,t),r(n,o),r(o,s),r(s,a),B(l,a,null),r(a,u),r(a,p),r(a,f),r(a,v),r(a,h),r(a,y),b=!0},p:e,i(e){b||(A(l.$$.fragment,e),b=!0)},o(e){z(l.$$.fragment,e),b=!1},d(e){e&&c(n),j(l)}}}const F=class extends P{constructor(e){var t;super(),document.getElementById("svelte-1red8ao-style")||((t=d("style")).id="svelte-1red8ao-style",t.textContent=".Header.svelte-1red8ao{display:none}@media only screen and (min-width: 860px){.Header.svelte-1red8ao{position:sticky;z-index:2;height:60px;background-color:var(--morado-darker);display:flex;align-items:center;justify-content:center;font-weight:bold}.header-content.svelte-1red8ao{width:100%}ul.svelte-1red8ao{display:flex;justify-content:space-evenly;align-items:center;margin:0}li.svelte-1red8ao{line-height:60px;list-style:none}a.svelte-1red8ao{color:var(--white)}.active.svelte-1red8ao{background-color:var(--morado);padding:18px;border-radius:0}.sticky.svelte-1red8ao{top:0;width:100%}}",r(document.head,t)),I(this,e,null,V,a,{})}};function X(t){let n;return{c(){n=d("div"),n.innerHTML='<div class="hero-content svelte-b3bg0v"><div class="hero-image svelte-b3bg0v"></div> \n\t\t<div class="hero-title svelte-b3bg0v"><h2>Hola!</h2> \n\t\t\t<h4>Mi nombre es Verónica Crespo</h4> \n\t\t\t<h5>Fisioterapeuta</h5></div></div>',m(n,"id","Hero"),m(n,"class","Hero svelte-b3bg0v")},m(e,t){i(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}const D=class extends P{constructor(e){var t;super(),document.getElementById("svelte-b3bg0v-style")||((t=d("style")).id="svelte-b3bg0v-style",t.textContent='.Hero.svelte-b3bg0v{color:var(--white)}.hero-content.svelte-b3bg0v{height:750px}.hero-image.svelte-b3bg0v{background-image:url("./img/bg-hero.jpg");background-size:cover;height:100%}.hero-title.svelte-b3bg0v{position:absolute;z-index:1;top:47%;margin:10px;font-size:30px;text-align:center;display:block;width:90%;height:35%;background-color:#401770c9;padding:10px}@media only screen and (min-width: 860px){.hero-content.svelte-b3bg0v{padding:30px;background:var(--morado-darker)}.hero-image.svelte-b3bg0v{margin-left:10%;background-image:url("./img/bg-hero.jpg");background-size:contain;background-repeat:no-repeat}.hero-title.svelte-b3bg0v{background-color:#4f1e8859;top:25%;left:45%;width:40%;height:60%}}',r(document.head,t)),I(this,e,null,X,a,{})}},{document:G}=M;function J(t){let n,a,l,v,h,y,b,$,x,w,k,_,E,C,q,H,S,A,z,M,L,T,B,j,I,P,N,O,V,F=t[3]>0?"MXN":"";return{c(){n=d("div"),a=d("h2"),l=u(t[0]),v=g(),h=d("span"),y=u(t[1]),b=g(),$=d("button"),$.textContent="Ver detalles >>",x=g(),w=d("div"),k=d("div"),_=d("div"),E=d("h2"),C=u(t[0]),q=g(),H=d("p"),S=u(t[2]),A=g(),z=d("p"),M=u("Valor: "),L=u(t[3]),T=g(),B=u(F),j=g(),I=d("div"),P=d("button"),P.textContent="Agendar",m($,"class","svelte-1ydwcag"),m(n,"class","Service svelte-1ydwcag"),m(P,"class","svelte-1ydwcag"),m(I,"class","action"),m(_,"class","container"),m(k,"class","modal-content svelte-1ydwcag"),m(w,"id",N="modal-"+t[0]),m(w,"class","modal svelte-1ydwcag")},m(e,o){i(e,n,o),r(n,a),r(a,l),r(n,v),r(n,h),r(h,y),r(n,b),r(n,$),i(e,x,o),i(e,w,o),r(w,k),r(k,_),r(_,E),r(E,C),r(_,q),r(_,H),r(H,S),r(_,A),r(_,z),r(z,M),r(z,L),r(z,T),r(z,B),r(_,j),r(_,I),r(I,P),O||(V=[p(n,"click",t[4]),p(P,"click",(function(){s(K(t[0]))&&K(t[0]).apply(this,arguments)})),p(w,"click",t[4])],O=!0)},p(e,[n]){t=e,1&n&&f(l,t[0]),2&n&&f(y,t[1]),1&n&&f(C,t[0]),4&n&&f(S,t[2]),8&n&&f(L,t[3]),8&n&&F!==(F=t[3]>0?"MXN":"")&&f(B,F),1&n&&N!==(N="modal-"+t[0])&&m(w,"id",N)},i:e,o:e,d(e){e&&c(n),e&&c(x),e&&c(w),O=!1,o(V)}}}function K(e){console.log("Agendar hora para ",e)}function Q(e,t,n){let{title:o}=t,{description:s}=t,{details:a}=t,{cost:l}=t;var r=!1;return e.$$set=e=>{"title"in e&&n(0,o=e.title),"description"in e&&n(1,s=e.description),"details"in e&&n(2,a=e.details),"cost"in e&&n(3,l=e.cost)},[o,s,a,l,function(){(r=!r)?(document.getElementById("modal-"+o).style.display="block",document.body.classList.add("stop")):(document.body.classList.remove("stop"),document.getElementById("modal-"+o).style.display="none")}]}const R=class extends P{constructor(e){var t;super(),G.getElementById("svelte-1ydwcag-style")||((t=d("style")).id="svelte-1ydwcag-style",t.textContent=".Service.svelte-1ydwcag{width:70%;box-shadow:midnightblue 10px 10px;margin:auto;display:grid;background-color:var(--morado-dark);color:var(--white);justify-items:center;padding:30px}button.svelte-1ydwcag{background-color:transparent;border:none;margin-top:50px;font-weight:bold;color:var(--white)}.modal.svelte-1ydwcag{display:none;position:fixed;z-index:10;top:50%;left:50%;width:100%;height:100vh;transform:translate(-50%, -50%);background:#1b0f0f98}.modal-content.svelte-1ydwcag{position:absolute;width:70%;top:10%;left:50%;transform:translateX(-50%);z-index:100;background-color:rgb(140, 48, 245);color:var(--white);padding:30px}",r(G.head,t)),I(this,e,Q,J,a,{title:0,description:1,details:2,cost:3})}};function U(t){let n,o,s,a,l,u;return s=new R({props:{title:"Primer servicio",description:"Primer servicio agregado de forma manual",details:"Esta es la descripcion detallada del primer servicio agregado de forma manual",cost:"500"}}),l=new R({props:{title:"Segundo servicio",description:"Segundo servicio agregado de forma manual para probar el layout",details:"Esta es la descripcion detallada del segundo servicio agregado de forma manual",cost:"500"}}),{c(){n=d("div"),o=d("div"),T(s.$$.fragment),a=g(),T(l.$$.fragment),m(o,"class","Services-content svelte-1b93lrk"),m(n,"class","Services svelte-1b93lrk")},m(e,t){i(e,n,t),r(n,o),B(s,o,null),r(o,a),B(l,o,null),u=!0},p:e,i(e){u||(A(s.$$.fragment,e),A(l.$$.fragment,e),u=!0)},o(e){z(s.$$.fragment,e),z(l.$$.fragment,e),u=!1},d(e){e&&c(n),j(s),j(l)}}}const W=class extends P{constructor(e){var t;super(),document.getElementById("svelte-1b93lrk-style")||((t=d("style")).id="svelte-1b93lrk-style",t.textContent=".Services.svelte-1b93lrk{margin:10% 0}.Services-content.svelte-1b93lrk{display:grid;gap:20px}@media only screen and (min-width: 860px){.Services-content.svelte-1b93lrk{grid-template-columns:repeat(3, 1fr)}}",r(document.head,t)),I(this,e,null,U,a,{})}};function Y(t){let n;return{c(){n=d("div"),n.innerHTML='<div class="about-content svelte-ac6eoq"><p class="svelte-ac6eoq">Me gusta mucho ayudar a las personas a rehabilitarse, es mi manera de\n\t\t\taportar al mundo y shalala.</p></div>',m(n,"id","About"),m(n,"class","About svelte-ac6eoq")},m(e,t){i(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}const Z=class extends P{constructor(e){var t;super(),document.getElementById("svelte-ac6eoq-style")||((t=d("style")).id="svelte-ac6eoq-style",t.textContent='.About.svelte-ac6eoq.svelte-ac6eoq{font-family:"Pattaya", sans-serif;font-size:40px;height:550px;background-image:url("./img/bg-info.jpeg");background-size:cover;background-position:center;background-repeat:no-repeat;color:var(--white)}.about-content.svelte-ac6eoq.svelte-ac6eoq{display:grid;grid-template-rows:1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr;padding:40px;background-color:#008080c4;height:100%;grid-row:1 / -1;grid-column:1/ -1}.about-content.svelte-ac6eoq p.svelte-ac6eoq{display:grid;grid-column:1 /3;grid-row:2 / -1;font-size:30px}@media only screen and (min-width: 860px){.About.svelte-ac6eoq.svelte-ac6eoq{background-size:contain;background-position:center}.about-content.svelte-ac6eoq.svelte-ac6eoq{background-color:#008080c4}.about-content.svelte-ac6eoq p.svelte-ac6eoq{margin:0;font-size:30px}}',r(document.head,t)),I(this,e,null,Y,a,{})}};function ee(t){let n,o,s,a,l,u,p,f;return s=new O({}),{c(){n=d("div"),o=d("div"),T(s.$$.fragment),a=g(),l=d("div"),l.textContent="Aportando al bienestar de las personas",u=g(),p=d("div"),p.innerHTML='<ul class="svelte-1hn4e6g"><li class="svelte-1hn4e6g"><span class="fab fa-facebook-f"></span></li> \n\t\t\t\t<li class="svelte-1hn4e6g"><span class="fab fa-twitter"></span></li> \n\t\t\t\t<li class="svelte-1hn4e6g"><a href="/"><span class="fab fa-instagram svelte-1hn4e6g"></span></a></li></ul>',m(l,"class","description svelte-1hn4e6g"),m(p,"class","social svelte-1hn4e6g"),m(o,"class","footer-content svelte-1hn4e6g"),m(n,"id","Contact"),m(n,"class","Footer svelte-1hn4e6g")},m(e,t){i(e,n,t),r(n,o),B(s,o,null),r(o,a),r(o,l),r(o,u),r(o,p),f=!0},p:e,i(e){f||(A(s.$$.fragment,e),f=!0)},o(e){z(s.$$.fragment,e),f=!1},d(e){e&&c(n),j(s)}}}const te=class extends P{constructor(e){var t;super(),document.getElementById("svelte-1hn4e6g-style")||((t=d("style")).id="svelte-1hn4e6g-style",t.textContent=".Footer.svelte-1hn4e6g{background-color:#2b2b2b;color:var(--white)}.footer-content.svelte-1hn4e6g{padding:20px;display:grid;grid-template-columns:1fr 1fr;justify-content:space-between}.social.svelte-1hn4e6g{display:flex;grid-column:2 / -1;grid-row:1}.fa-instagram.svelte-1hn4e6g{color:var(--white)}.description.svelte-1hn4e6g{font-size:12px;grid-column:1/ 3}ul.svelte-1hn4e6g{width:100%;justify-content:space-evenly;align-items:center;text-align:start;display:flex;margin:0}li.svelte-1hn4e6g{font-size:25px;list-style:none}",r(document.head,t)),I(this,e,null,ee,a,{})}};function ne(t){let n,o,s,a,l,u,p,f,v,h,y,b;return s=new F({}),l=new D({}),p=new W({}),v=new Z({}),y=new te({}),{c(){n=d("main"),o=d("div"),T(s.$$.fragment),a=g(),T(l.$$.fragment),u=g(),T(p.$$.fragment),f=g(),T(v.$$.fragment),h=g(),T(y.$$.fragment),m(o,"class","App-content svelte-1ayyh7m"),m(n,"class","App svelte-1ayyh7m")},m(e,t){i(e,n,t),r(n,o),B(s,o,null),r(o,a),B(l,o,null),r(o,u),B(p,o,null),r(o,f),B(v,o,null),r(o,h),B(y,o,null),b=!0},p:e,i(e){b||(A(s.$$.fragment,e),A(l.$$.fragment,e),A(p.$$.fragment,e),A(v.$$.fragment,e),A(y.$$.fragment,e),b=!0)},o(e){z(s.$$.fragment,e),z(l.$$.fragment,e),z(p.$$.fragment,e),z(v.$$.fragment,e),z(y.$$.fragment,e),b=!1},d(e){e&&c(n),j(s),j(l),j(p),j(v),j(y)}}}new class extends P{constructor(e){var t;super(),document.getElementById("svelte-1ayyh7m-style")||((t=d("style")).id="svelte-1ayyh7m-style",t.textContent='@import url("https://fonts.googleapis.com/css2?family=Pattaya&display=swap");.App.svelte-1ayyh7m{overflow:hidden;color:white}.App-content.svelte-1ayyh7m{margin:0 auto}',r(document.head,t)),I(this,e,null,ne,a,{})}}({target:document.getElementById("root")})})();