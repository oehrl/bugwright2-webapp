const wd=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};wd();const rt={};function Cd(n){rt.context=n}const Td=(n,e)=>n===e,dn=Symbol("solid-proxy"),ea=Symbol("solid-track"),_s={equals:Td};let Vc=$c;const ki={},On=1,bs=2,Gc={owned:null,cleanups:null,context:null,owner:null};var ot=null;let Lr=null,it=null,fr=null,mt=null,$t=null,ta=0;function hr(n,e){const t=it,i=ot,r=n.length===0,s=r?Gc:{owned:null,cleanups:null,context:null,owner:e||i},o=r?n:()=>n(()=>oa(s));ot=s,it=null;try{return sa(o,!0)}finally{it=t,ot=i}}function Ie(n,e){e=e?Object.assign({},_s,e):_s;const t={value:n,observers:null,observerSlots:null,pending:ki,comparator:e.equals||void 0},i=r=>(typeof r=="function"&&(r=r(t.pending!==ki?t.pending:t.value)),ra(t,r));return[Hc.bind(t),i]}function na(n,e,t){const i=Ls(n,e,!0,On);Yi(i)}function Ct(n,e,t){const i=Ls(n,e,!1,On);Yi(i)}function Ke(n,e,t){Vc=Ld;const i=Ls(n,e,!1,On),r=Va&&aa(ot,Va.id);r&&(i.suspense=r),i.user=!0,$t?$t.push(i):Yi(i)}function qe(n,e,t){t=t?Object.assign({},_s,t):_s;const i=Ls(n,e,!0,0);return i.pending=ki,i.observers=null,i.observerSlots=null,i.comparator=t.equals||void 0,Yi(i),Hc.bind(i)}function ji(n){if(fr)return n();let e;const t=fr=[];try{e=n()}finally{fr=null}return sa(()=>{for(let i=0;i<t.length;i+=1){const r=t[i];if(r.pending!==ki){const s=r.pending;r.pending=ki,ra(r,s)}}},!1),e}function Kt(n){let e,t=it;return it=null,e=n(),it=t,e}function Wc(n,e,t){const i=Array.isArray(n);let r,s=t&&t.defer;return o=>{let a;if(i){a=Array(n.length);for(let c=0;c<n.length;c++)a[c]=n[c]()}else a=n();if(s){s=!1;return}const l=Kt(()=>e(a,r,o));return r=a,l}}function Oi(n){Ke(()=>Kt(n))}function _t(n){return ot===null||(ot.cleanups===null?ot.cleanups=[n]:ot.cleanups.push(n)),n}function ia(){return it}function Jt(n){const e=Symbol("context");return{id:e,Provider:Rd(e),defaultValue:n}}function Mt(n){let e;return(e=aa(ot,n.id))!==void 0?e:n.defaultValue}function Rr(n){const e=qe(n);return qe(()=>Oo(e()))}let Va;function Hc(){const n=Lr;if(this.sources&&(this.state||n)){const e=mt;mt=null,this.state===On||n?Yi(this):ys(this),mt=e}if(it){const e=this.observers?this.observers.length:0;it.sources?(it.sources.push(this),it.sourceSlots.push(e)):(it.sources=[this],it.sourceSlots=[e]),this.observers?(this.observers.push(it),this.observerSlots.push(it.sources.length-1)):(this.observers=[it],this.observerSlots=[it.sources.length-1])}return this.value}function ra(n,e,t){if(fr)return n.pending===ki&&fr.push(n),n.pending=e,e;if(n.comparator&&n.comparator(n.value,e))return e;let i=!1;return n.value=e,n.observers&&n.observers.length&&sa(()=>{for(let r=0;r<n.observers.length;r+=1){const s=n.observers[r];i&&Lr.disposed.has(s),(i&&!s.tState||!i&&!s.state)&&(s.pure?mt.push(s):$t.push(s),s.observers&&qc(s)),i||(s.state=On)}if(mt.length>1e6)throw mt=[],new Error},!1),e}function Yi(n){if(!n.fn)return;oa(n);const e=ot,t=it,i=ta;it=ot=n,Ed(n,n.value,i),it=t,ot=e}function Ed(n,e,t){let i;try{i=n.fn(e)}catch(r){Xc(r)}(!n.updatedAt||n.updatedAt<=t)&&(n.observers&&n.observers.length?ra(n,i):n.value=i,n.updatedAt=t)}function Ls(n,e,t,i=On,r){const s={fn:n,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:ot,context:null,pure:t};return ot===null||ot!==Gc&&(ot.owned?ot.owned.push(s):ot.owned=[s]),s}function pr(n){const e=Lr;if(n.state===0||e)return;if(n.state===bs||e)return ys(n);if(n.suspense&&Kt(n.suspense.inFallback))return n.suspense.effects.push(n);const t=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<ta);)(n.state||e)&&t.push(n);for(let i=t.length-1;i>=0;i--)if(n=t[i],n.state===On||e)Yi(n);else if(n.state===bs||e){const r=mt;mt=null,ys(n,t[0]),mt=r}}function sa(n,e){if(mt)return n();let t=!1;e||(mt=[]),$t?t=!0:$t=[],ta++;try{const i=n();return Ad(t),i}catch(i){Xc(i)}finally{mt=null,t||($t=null)}}function Ad(n){mt&&($c(mt),mt=null),!n&&($t.length?ji(()=>{Vc($t),$t=null}):$t=null)}function $c(n){for(let e=0;e<n.length;e++)pr(n[e])}function Ld(n){let e,t=0;for(e=0;e<n.length;e++){const r=n[e];r.user?n[t++]=r:pr(r)}rt.context&&Cd();const i=n.length;for(e=0;e<t;e++)pr(n[e]);for(e=i;e<n.length;e++)pr(n[e])}function ys(n,e){const t=Lr;n.state=0;for(let i=0;i<n.sources.length;i+=1){const r=n.sources[i];r.sources&&(r.state===On||t?r!==e&&pr(r):(r.state===bs||t)&&ys(r,e))}}function qc(n){const e=Lr;for(let t=0;t<n.observers.length;t+=1){const i=n.observers[t];(!i.state||e)&&(i.state=bs,i.pure?mt.push(i):$t.push(i),i.observers&&qc(i))}}function oa(n){let e;if(n.sources)for(;n.sources.length;){const t=n.sources.pop(),i=n.sourceSlots.pop(),r=t.observers;if(r&&r.length){const s=r.pop(),o=t.observerSlots.pop();i<r.length&&(s.sourceSlots[o]=i,r[i]=s,t.observerSlots[i]=o)}}if(n.owned){for(e=0;e<n.owned.length;e++)oa(n.owned[e]);n.owned=null}if(n.cleanups){for(e=0;e<n.cleanups.length;e++)n.cleanups[e]();n.cleanups=null}n.state=0,n.context=null}function Xc(n){throw n}function aa(n,e){return n?n.context&&n.context[e]!==void 0?n.context[e]:aa(n.owner,e):void 0}function Oo(n){if(typeof n=="function"&&!n.length)return Oo(n());if(Array.isArray(n)){const e=[];for(let t=0;t<n.length;t++){const i=Oo(n[t]);Array.isArray(i)?e.push.apply(e,i):e.push(i)}return e}return n}function Rd(n){return function(t){let i;return na(()=>i=Kt(()=>(ot.context={[n]:t.value},Rr(()=>t.children)))),i}}const Dd=Symbol("fallback");function Ga(n){for(let e=0;e<n.length;e++)n[e]()}function jc(n,e,t={}){let i=[],r=[],s=[],o=0,a=e.length>1?[]:null;return _t(()=>Ga(s)),()=>{let l=n()||[],c,u;return l[ea],Kt(()=>{let f=l.length,m,x,p,h,g,b,w,C,M;if(f===0)o!==0&&(Ga(s),s=[],i=[],r=[],o=0,a&&(a=[])),t.fallback&&(i=[Dd],r[0]=hr(R=>(s[0]=R,t.fallback())),o=1);else if(o===0){for(r=new Array(f),u=0;u<f;u++)i[u]=l[u],r[u]=hr(d);o=f}else{for(p=new Array(f),h=new Array(f),a&&(g=new Array(f)),b=0,w=Math.min(o,f);b<w&&i[b]===l[b];b++);for(w=o-1,C=f-1;w>=b&&C>=b&&i[w]===l[C];w--,C--)p[C]=r[w],h[C]=s[w],a&&(g[C]=a[w]);for(m=new Map,x=new Array(C+1),u=C;u>=b;u--)M=l[u],c=m.get(M),x[u]=c===void 0?-1:c,m.set(M,u);for(c=b;c<=w;c++)M=i[c],u=m.get(M),u!==void 0&&u!==-1?(p[u]=r[c],h[u]=s[c],a&&(g[u]=a[c]),u=x[u],m.set(M,u)):s[c]();for(u=b;u<f;u++)u in p?(r[u]=p[u],s[u]=h[u],a&&(a[u]=g[u],a[u](u))):r[u]=hr(d);r=r.slice(0,o=f),i=l.slice(0)}return r});function d(f){if(s[u]=f,a){const[m,x]=Ie(u);return a[u]=x,e(l[u],m)}return e(l[u])}}}function T(n,e){return Kt(()=>n(e||{}))}function Hr(){return!0}const Yc={get(n,e,t){return e===dn?t:n.get(e)},has(n,e){return n.has(e)},set:Hr,deleteProperty:Hr,getOwnPropertyDescriptor(n,e){return{configurable:!0,enumerable:!0,get(){return n.get(e)},set:Hr,deleteProperty:Hr}},ownKeys(n){return n.keys()}};function Qs(n){return(n=typeof n=="function"?n():n)==null?{}:n}function ee(...n){return new Proxy({get(e){for(let t=n.length-1;t>=0;t--){const i=Qs(n[t])[e];if(i!==void 0)return i}},has(e){for(let t=n.length-1;t>=0;t--)if(e in Qs(n[t]))return!0;return!1},keys(){const e=[];for(let t=0;t<n.length;t++)e.push(...Object.keys(Qs(n[t])));return[...new Set(e)]}},Yc)}function Zt(n,...e){const t=new Set(e.flat()),i=Object.getOwnPropertyDescriptors(n),r=e.map(s=>{const o={};for(let a=0;a<s.length;a++){const l=s[a];Object.defineProperty(o,l,i[l]?i[l]:{get(){return n[l]},set(){return!0}})}return o});return r.push(new Proxy({get(s){return t.has(s)?void 0:n[s]},has(s){return t.has(s)?!1:s in n},keys(){return Object.keys(n).filter(s=>!t.has(s))}},Yc)),r}let Pd=0;function Id(){const n=rt.context;return n?`${n.id}${n.count++}`:`cl-${Pd++}`}function wn(n){const e="fallback"in n&&{fallback:()=>n.fallback};return qe(jc(()=>n.each,n.children,e||void 0))}function Ge(n){let e=!1;const t=qe(()=>n.when,void 0,{equals:(i,r)=>e?i===r:!i==!r});return qe(()=>{const i=t();if(i){const r=n.children;return(e=typeof r=="function"&&r.length>0)?Kt(()=>r(i)):r}return n.fallback})}function Fd(n){let e=!1;const t=Rr(()=>n.children),i=qe(()=>{let r=t();Array.isArray(r)||(r=[r]);for(let s=0;s<r.length;s++){const o=r[s].when;if(o)return[s,o,r[s]]}return[-1]},void 0,{equals:(r,s)=>r[0]===s[0]&&(e?r[1]===s[1]:!r[1]==!s[1])&&r[2]===s[2]});return qe(()=>{const[r,s,o]=i();if(r<0)return n.fallback;const a=o.children;return(e=typeof a=="function"&&a.length>0)?Kt(()=>a(s)):a})}function Wa(n){return n}const Nd=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],zd=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Nd]),kd=new Set(["innerHTML","textContent","innerText","children"]),Od={className:"class",htmlFor:"for"},Ha={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},Bd=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ud=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Vd={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Qe(n,e){return qe(n,void 0,e?void 0:{equals:e})}function Gd(n,e,t){let i=t.length,r=e.length,s=i,o=0,a=0,l=e[r-1].nextSibling,c=null;for(;o<r||a<s;){if(e[o]===t[a]){o++,a++;continue}for(;e[r-1]===t[s-1];)r--,s--;if(r===o){const u=s<i?a?t[a-1].nextSibling:t[s-a]:l;for(;a<s;)n.insertBefore(t[a++],u)}else if(s===a)for(;o<r;)(!c||!c.has(e[o]))&&e[o].remove(),o++;else if(e[o]===t[s-1]&&t[a]===e[r-1]){const u=e[--r].nextSibling;n.insertBefore(t[a++],e[o++].nextSibling),n.insertBefore(t[--s],u),e[r]=t[s]}else{if(!c){c=new Map;let d=a;for(;d<s;)c.set(t[d],d++)}const u=c.get(e[o]);if(u!=null)if(a<u&&u<s){let d=o,f=1,m;for(;++d<r&&d<s&&!((m=c.get(e[d]))==null||m!==u+f);)f++;if(f>u-a){const x=e[o];for(;a<u;)n.insertBefore(t[a++],x)}else n.replaceChild(t[a++],e[o++])}else o++;else e[o++].remove()}}}const $a="_$DX_DELEGATE";function Wd(n,e,t){let i;return hr(r=>{i=r,e===document?n():It(e,n(),e.firstChild?null:void 0,t)}),()=>{i(),e.textContent=""}}function ke(n,e,t){const i=document.createElement("template");i.innerHTML=n;let r=i.content.firstChild;return t&&(r=r.firstChild),r}function Hd(n,e=window.document){const t=e[$a]||(e[$a]=new Set);for(let i=0,r=n.length;i<r;i++){const s=n[i];t.has(s)||(t.add(s),e.addEventListener(s,Qd))}}function Ms(n,e,t){t==null?n.removeAttribute(e):n.setAttribute(e,t)}function $d(n,e,t,i){i==null?n.removeAttributeNS(e,t):n.setAttributeNS(e,t,i)}function qd(n,e){e==null?n.removeAttribute("class"):n.className=e}function Xd(n,e,t,i){if(i)Array.isArray(t)?(n[`$$${e}`]=t[0],n[`$$${e}Data`]=t[1]):n[`$$${e}`]=t;else if(Array.isArray(t)){const r=t[0];n.addEventListener(e,t[0]=s=>r.call(n,t[1],s))}else n.addEventListener(e,t)}function jd(n,e,t={}){const i=Object.keys(e||{}),r=Object.keys(t);let s,o;for(s=0,o=r.length;s<o;s++){const a=r[s];!a||a==="undefined"||e[a]||(qa(n,a,!1),delete t[a])}for(s=0,o=i.length;s<o;s++){const a=i[s],l=!!e[a];!a||a==="undefined"||t[a]===l||!l||(qa(n,a,!0),t[a]=l)}return t}function Rs(n,e,t={}){const i=n.style,r=typeof t=="string";if(e==null&&r||typeof e=="string")return i.cssText=e;r&&(i.cssText=void 0,t={}),e||(e={});let s,o;for(o in t)e[o]==null&&i.removeProperty(o),delete t[o];for(o in e)s=e[o],s!==t[o]&&(i.setProperty(o,s),t[o]=s);return t}function Yd(n,e,t,i){typeof e=="function"?Ct(r=>ja(n,e(),r,t,i)):ja(n,e,void 0,t,i)}function It(n,e,t,i){if(t!==void 0&&!i&&(i=[]),typeof e!="function")return Bi(n,e,i,t);Ct(r=>Bi(n,e(),r,t),i)}function Kd(n,e,t,i,r={},s=!1){e||(e={});for(const o in r)if(!(o in e)){if(o==="children")continue;Xa(n,o,null,r[o],t,s)}for(const o in e){if(o==="children"){i||Bi(n,e.children);continue}const a=e[o];r[o]=Xa(n,o,a,r[o],t,s)}}function Zd(n){let e,t;return!rt.context||!(e=rt.registry.get(t=ef()))?n.cloneNode(!0):(rt.completed&&rt.completed.add(e),rt.registry.delete(t),e)}function Jd(n){return n.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function qa(n,e,t){const i=e.trim().split(/\s+/);for(let r=0,s=i.length;r<s;r++)n.classList.toggle(i[r],t)}function Xa(n,e,t,i,r,s){let o,a,l;if(e==="style")return Rs(n,t,i);if(e==="classList")return jd(n,t,i);if(t===i)return i;if(e==="ref")s||t(n);else if(e.slice(0,3)==="on:"){const c=e.slice(3);i&&n.removeEventListener(c,i),t&&n.addEventListener(c,t)}else if(e.slice(0,10)==="oncapture:"){const c=e.slice(10);i&&n.removeEventListener(c,i,!0),t&&n.addEventListener(c,t,!0)}else if(e.slice(0,2)==="on"){const c=e.slice(2).toLowerCase(),u=Bd.has(c);if(!u&&i){const d=Array.isArray(i)?i[0]:i;n.removeEventListener(c,d)}(u||t)&&(Xd(n,c,t,u),u&&Hd([c]))}else if((l=kd.has(e))||!r&&(Ha[e]||(a=zd.has(e)))||(o=n.nodeName.includes("-")))e==="class"||e==="className"?qd(n,t):o&&!a&&!l?n[Jd(e)]=t:n[Ha[e]||e]=t;else{const c=r&&e.indexOf(":")>-1&&Vd[e.split(":")[0]];c?$d(n,c,e,t):Ms(n,Od[e]||e,t)}return t}function Qd(n){const e=`$$${n.type}`;let t=n.composedPath&&n.composedPath()[0]||n.target;for(n.target!==t&&Object.defineProperty(n,"target",{configurable:!0,value:t}),Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return t||document}}),rt.registry&&!rt.done&&(rt.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>i.remove()));t!==null;){const i=t[e];if(i&&!t.disabled){const r=t[`${e}Data`];if(r!==void 0?i.call(t,r,n):i.call(t,n),n.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function ja(n,e,t={},i,r){return e||(e={}),!r&&"children"in e&&Ct(()=>t.children=Bi(n,e.children,t.children)),e.ref&&e.ref(n),Ct(()=>Kd(n,e,i,!0,t,!0)),t}function Bi(n,e,t,i,r){for(rt.context&&!t&&(t=[...n.childNodes]);typeof t=="function";)t=t();if(e===t)return t;const s=typeof e,o=i!==void 0;if(n=o&&t[0]&&t[0].parentNode||n,s==="string"||s==="number"){if(rt.context)return t;if(s==="number"&&(e=e.toString()),o){let a=t[0];a&&a.nodeType===3?a.data=e:a=document.createTextNode(e),t=li(n,t,i,a)}else t!==""&&typeof t=="string"?t=n.firstChild.data=e:t=n.textContent=e}else if(e==null||s==="boolean"){if(rt.context)return t;t=li(n,t,i)}else{if(s==="function")return Ct(()=>{let a=e();for(;typeof a=="function";)a=a();t=Bi(n,a,t,i)}),()=>t;if(Array.isArray(e)){const a=[];if(Bo(a,e,r))return Ct(()=>t=Bi(n,a,t,i,!0)),()=>t;if(rt.context){for(let l=0;l<a.length;l++)if(a[l].parentNode)return t=a}if(a.length===0){if(t=li(n,t,i),o)return t}else Array.isArray(t)?t.length===0?Ya(n,a,i):Gd(n,t,a):(t&&li(n),Ya(n,a));t=a}else if(e instanceof Node){if(rt.context&&e.parentNode)return t=o?[e]:e;if(Array.isArray(t)){if(o)return t=li(n,t,i,e);li(n,t,null,e)}else t==null||t===""||!n.firstChild?n.appendChild(e):n.replaceChild(e,n.firstChild);t=e}}return t}function Bo(n,e,t){let i=!1;for(let r=0,s=e.length;r<s;r++){let o=e[r],a;if(o instanceof Node)n.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=Bo(n,o)||i;else if((a=typeof o)=="string")n.push(document.createTextNode(o));else if(a==="function")if(t){for(;typeof o=="function";)o=o();i=Bo(n,Array.isArray(o)?o:[o])||i}else n.push(o),i=!0;else n.push(document.createTextNode(o.toString()))}return i}function Ya(n,e,t){for(let i=0,r=e.length;i<r;i++)n.insertBefore(e[i],t)}function li(n,e,t,i){if(t===void 0)return n.textContent="";const r=i||document.createTextNode("");if(e.length){let s=!1;for(let o=e.length-1;o>=0;o--){const a=e[o];if(r!==a){const l=a.parentNode===n;!s&&!o?l?n.replaceChild(r,a):n.insertBefore(r,t):l&&a.remove()}else s=!0}}else n.insertBefore(r,t);return[r]}function ef(){const n=rt.context;return`${n.id}${n.count++}`}const tf="http://www.w3.org/2000/svg";function Kc(n,e=!1){return e?document.createElementNS(tf,n):document.createElement(n)}function nf(n){const{useShadow:e}=n,t=document.createTextNode(""),i=n.mount||document.body;function r(){if(rt.context){const[s,o]=Ie(!1);return queueMicrotask(()=>o(!0)),()=>s()&&n.children}else return()=>n.children}if(i instanceof HTMLHeadElement){const[s,o]=Ie(!1),a=()=>o(!0);hr(l=>It(i,()=>s()?l():r()(),null)),_t(()=>{rt.context?queueMicrotask(a):a()})}else{const s=Kc(n.isSVG?"g":"div",n.isSVG),o=e&&s.attachShadow?s.attachShadow({mode:"open"}):s;Object.defineProperty(s,"host",{get(){return t.parentNode}}),It(o,r()),i.appendChild(s),n.ref&&n.ref(s),_t(()=>i.removeChild(s))}return t}function Uo(n){const[e,t]=Zt(n,["component"]),i=qe(()=>e.component);return qe(()=>{const r=i();switch(typeof r){case"function":return Kt(()=>r(t));case"string":const s=Ud.has(r),o=rt.context?Zd():Kc(r,s);return Yd(o,t,s),o}})}function ar(n){return n!==null&&typeof n=="object"&&n.constructor===Object}function rf(n,e){for(const t of e){const i=n[t];delete n[t],n[t]=i}}function Dr(n,e,t={clone:!0}){const i=t.clone?{...n}:n;return ar(n)&&ar(e)&&(Object.keys(e).forEach(r=>{r!=="__proto__"&&(ar(e[r])&&r in n&&ar(n[r])?i[r]=Dr(n[r],e[r],t):i[r]=e[r])}),t.sortKeys&&rf(i,Object.keys(e))),i}function Vo(n){if(Array.isArray(n)){const e=[];for(const t of n)e.push(Vo(t));return e}else if(ar(n)){const e={};for(const t in n)t!=="__proto__"&&(e[t]=Vo(n[t]));return e}else return n}function Pr(n,...e){for(const t of e)Dr(n,Vo(t),{clone:!1});return n}const sf={};function of(n){return{...Pr({},sf,n??{})}}function af(n,e=void 0,t={}){return{toolbar:{minHeight:56,[`${n.up("xs")} and (orientation: landscape)`]:{minHeight:48},[n.up("sm")]:{minHeight:64}},...t}}const Kn={black:"#000",white:"#fff"},Ai={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Li={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Ri={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Di={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Pi={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},mr={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},lf={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function la(n,e=0,t=1){return Math.min(Math.max(e,n),t)}function cf(n){n=n.substr(1);const e=new RegExp(`.{1,${n.length>=6?2:1}}`,"g");let t=n.match(e);return t&&t[0].length===1&&(t=t.map(i=>i+i)),t?`rgb${t.length===4?"a":""}(${t.map((i,r)=>r<3?parseInt(i,16):Math.round(parseInt(i,16)/255*1e3)/1e3).join(", ")})`:""}function Zn(n){if(typeof n!="string")return n;if(n.charAt(0)==="#")return Zn(cf(n));const e=n.indexOf("("),t=n.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(t)===-1)throw new Error("MUI: Unsupported `%s` color.\nThe following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color(). "+n);const i=n.substring(e+1,n.length-1);let r,s;if(t==="color"){if(r=i.split(" "),s=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].substr(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(s)===-1)throw new Error("MUI: unsupported `%s` color space.\nThe following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020. "+s)}else r=i.split(",");return{type:t,values:r.map(o=>parseFloat(o)),colorSpace:s}}function Ds(n){const{type:e,colorSpace:t}=n,{values:i}=n;let r;return e.indexOf("rgb")!==-1?r=i.map((s,o)=>o<3?parseInt(s.toString(),10):s).join(","):e.indexOf("hsl")!==-1&&(r=i.map((s,o)=>o===1||o===2?`${s}%`:s).join(",")),e.indexOf("color")!==-1?r=`${t} ${i.join(" ")}`:r=`${i.join(", ")}`,`${e}(${r})`}function uf(n){const e=Zn(n),{values:t}=e,i=t[0],r=t[1]/100,s=t[2]/100,o=r*Math.min(s,1-s),a=(u,d=(u+i/30)%12)=>s-o*Math.max(Math.min(d-3,9-d,1),-1);let l="rgb";const c=[Math.round(a(0)*255),Math.round(a(8)*255),Math.round(a(4)*255)];return e.type==="hsla"&&(l+="a",c.push(t[3])),Ds({type:l,values:c})}function Ka(n){const{type:e,values:t}=Zn(n);let i=e==="hsl"?Zn(uf(n)).values:t;return i=i.map(r=>(e!=="color"&&(r/=255),r<=.03928?r/12.92:((r+.055)/1.055)**2.4)),Number((.2126*i[0]+.7152*i[1]+.0722*i[2]).toFixed(3))}function df(n,e){const t=Ka(n),i=Ka(e);return(Math.max(t,i)+.05)/(Math.min(t,i)+.05)}function pt(n,e){let{type:t,values:i}=Zn(n);return e=la(e),(t==="rgb"||t==="hsl")&&(t+="a"),t==="color"?i[3]=`/${e}`:i[3]=e,Ds({type:t,values:i})}function ff(n,e){const t=Zn(n);if(e=la(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let i=0;i<3;i+=1)t.values[i]*=1-e;return Ds(t)}function hf(n,e){const t=Zn(n);if(e=la(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let i=0;i<3;i+=1)t.values[i]+=(255-t.values[i])*e;else if(t.type.indexOf("color")!==-1)for(let i=0;i<3;i+=1)t.values[i]+=(1-t.values[i])*e;return Ds(t)}const pf=()=>({text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Kn.white,default:Kn.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}),mf={primary:{main:Ri[700],light:Ri[400],dark:Ri[800]},secondary:{main:Li[500],light:Li[300],dark:Li[700]},error:{main:Ai[700],light:Ai[400],dark:Ai[800]},info:{main:Di[700],light:Di[800],dark:Di[900]},success:{main:Pi[800],light:Pi[500],dark:Pi[900]},warning:{main:"#ED6C02",light:mr[500],dark:mr[900]}},gf=()=>({text:{primary:Kn.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Kn.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}),xf={primary:{main:Ri[200],light:Ri[50],dark:Ri[400]},secondary:{main:Li[200],light:Li[50],dark:Li[400]},error:{main:Ai[500],light:Ai[300],dark:Ai[700]},info:{main:Di[400],light:Di[300],dark:Di[700]},success:{main:Pi[400],light:Pi[300],dark:Pi[700]},warning:{main:mr[400],light:mr[300],dark:mr[700]}},vf={light:pf,dark:gf};function Zc(n,e){return df(n,Kn.white)>=e?Kn.white:"rgba(0, 0, 0, 0.87)"}function Za(n,e,t,i){const r=typeof i=="number"?i:i.light,s=typeof i=="number"?i*1.5:i.dark;n[e]||(n.hasOwnProperty(t)?n[e]=n[t]:e==="light"?n.light=hf(n.main,r):e==="dark"&&(n.dark=ff(n.main,s)))}function _f(n){const e={...n.color},t=n.mainShade??500;return!n.color.main&&n.color[t]&&(e.main=n.color[t]),Za(e,"light",n.lightShade??300,n.tonalOffset),Za(e,"dark",n.darkShade??700,n.tonalOffset),e.contrastText||(e.contrastText=Zc(e.main,n.contrastThreshold)),e}const bf=()=>({mode:"light",tonalOffset:.2,contrastThreshold:3,grey:lf,common:Kn});function yf(n){const e=["error","info","primary","secondary","success","warning"],t=bf(),i={...Pr({},t,vf[n?.mode??t.mode](),n),isColorName(s){return e.includes(s)},getColorObject(s){return i[s]},getColor(s){return i.mode==="light"?i[s].light:i[s].dark},augmentColor(s){return _f({...s,tonalOffset:i.tonalOffset,contrastThreshold:i.contrastThreshold})},getContrastText(s){return Zc(s,i.contrastThreshold)}},r=s=>i.mode==="light"?mf[s]:xf[s];return i.primary=i.augmentColor({color:i.primary||r("primary")}),i.secondary=i.augmentColor({color:i.secondary||r("secondary"),mainShade:"A400",lightShade:"A200",darkShade:"A700"}),i.error=i.augmentColor({color:i.error||r("error")}),i.warning=i.augmentColor({color:i.warning||r("warning")}),i.info=i.augmentColor({color:i.info||r("info")}),i.success=i.augmentColor({color:i.success||r("success")}),i}const eo={},Mf=.2,Sf=.14,wf=.12;function Ye(...n){return[`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${Mf})`,`${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${Sf})`,`${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${wf})`].join(",")}const Cf=[()=>"none",()=>Ye(0,2,1,-1,0,1,1,0,0,1,3,0),()=>Ye(0,3,1,-2,0,2,2,0,0,1,5,0),()=>Ye(0,3,3,-2,0,3,4,0,0,1,8,0),()=>Ye(0,2,4,-1,0,4,5,0,0,1,10,0),()=>Ye(0,3,5,-1,0,5,8,0,0,1,14,0),()=>Ye(0,3,5,-1,0,6,10,0,0,1,18,0),()=>Ye(0,4,5,-2,0,7,10,1,0,2,16,1),()=>Ye(0,5,5,-3,0,8,10,1,0,3,14,2),()=>Ye(0,5,6,-3,0,9,12,1,0,3,16,2),()=>Ye(0,6,6,-3,0,10,14,1,0,4,18,3),()=>Ye(0,6,7,-4,0,11,15,1,0,4,20,3),()=>Ye(0,7,8,-4,0,12,17,2,0,5,22,4),()=>Ye(0,7,8,-4,0,13,19,2,0,5,24,4),()=>Ye(0,7,9,-4,0,14,21,2,0,5,26,4),()=>Ye(0,8,9,-5,0,15,22,2,0,6,28,5),()=>Ye(0,8,10,-5,0,16,24,2,0,6,30,5),()=>Ye(0,8,11,-5,0,17,26,2,0,6,32,5),()=>Ye(0,9,11,-5,0,18,28,2,0,7,34,6),()=>Ye(0,9,12,-6,0,19,29,2,0,7,36,6),()=>Ye(0,10,13,-6,0,20,31,3,0,8,38,7),()=>Ye(0,10,13,-6,0,21,33,3,0,8,40,7),()=>Ye(0,10,14,-6,0,22,35,3,0,8,42,7),()=>Ye(0,11,14,-7,0,23,36,3,0,9,44,8),()=>Ye(0,11,15,-7,0,24,38,3,0,9,46,8)];function Tf(){return new Proxy([],{get:(n,e)=>typeof e!="string"||isNaN(Number(e))?n[e]:e in eo?eo[e]:eo[e]=Cf[e]()})}const Ef={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Af={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Ja(n){return`${Math.round(n)}ms`}function Lf(n){if(!n)return 0;const e=n/36;return Math.round((4+15*e**.25+e/5)*10)}function Rf(n){const e={...Ef,...n.easing},t={...Af,...n.duration};return{getAutoHeightDuration:Lf,create:(r=["all"],s={})=>{const{duration:o=t.standard,easing:a=e.easeInOut,delay:l=0,...c}=s;return(Array.isArray(r)?r:[r]).map(u=>`${u} ${typeof o=="string"?o:Ja(o)} ${a} ${typeof l=="string"?l:Ja(l)}`).join(",")},...n,easing:e,duration:t}}const At={light:300,regular:400,medium:500,bold:700},$r={fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:14,htmlFontSize:16,h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},subtitle1:{},subtitle2:{},body1:{},body2:{},button:{},caption:{},overline:{},fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700};function Df(n){return Math.round(n*1e5)/1e5}function Lt(n,e,t,i,r,s){return{fontFamily:n.fontFamily,fontWeight:e,fontSize:n.pxToRem(t),lineHeight:`${i}`,letterSpacing:`${Df(r/t)}em`,...s?{textTransform:"uppercase"}:{}}}function Pf(n={}){const e={fontFamily:n.fontFamily??$r.fontFamily,fontSize:n.fontSize??$r.fontSize,htmlFontSize:n?.htmlFontSize??$r.htmlFontSize,pxToRem:t=>{const i=e.fontSize/14;return`${t/e.htmlFontSize*i}rem`}};return Pr(e,{h1:Lt(e,At.light,96,1.167,-1.5),h2:Lt(e,At.light,60,1.2,-.5),h3:Lt(e,At.regular,48,1.167,0),h4:Lt(e,At.regular,34,1.235,.25),h5:Lt(e,At.regular,24,1.334,0),h6:Lt(e,At.medium,20,1.6,.15),subtitle1:Lt(e,At.regular,16,1.75,.15),subtitle2:Lt(e,At.medium,14,1.57,.1),body1:Lt(e,At.regular,16,1.5,.15),body2:Lt(e,At.regular,14,1.43,.15),button:Lt(e,At.medium,14,1.75,.4,!0),caption:Lt(e,At.regular,12,1.66,.4),overline:Lt(e,At.regular,12,2.66,1,!0)},$r,n)}const If={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function Ff(n){return{...Pr({},If,n)}}function to(n,e,t="px"){let i;if(n==="up")i=`(min-width:${e}${t})`;else if(n==="down")i=`(max-width:${e}${t})`;else if(n==="between"){const[r,s]=e;i=`(max-width:${r}${t}) and (min-width:${s}${t})`}else throw new Error(`Invalid comparator: ${n}`);return`@media ${i}`}const Nf={columns:12,keys:["xs","sm","md","lg","xl"],values:{xs:0,sm:600,md:900,lg:1200,xl:1536},unit:"px"};function Jc(n){const e={...Nf,...n??{},up:(t,i)=>{const r=to("up",e.resolve(t));return i?{[r]:i}:r},down:(t,i)=>{const r=to("down",e.resolve(t));return i?{[r]:i}:r},between:(t,i)=>{const r=to("between",[e.resolve(t[0]),e.resolve(t[1])]);return i?{[r]:i}:r},resolve:t=>typeof t=="number"?t:e.values[t]};return e}function Qc(n){return typeof n=="function"?n:(...t)=>t.map(i=>typeof i=="number"?`${i*(n??8)}px`:i).join(" ")}const zf={borderRadius:4};function eu(n){return{...Pr({},zf,n)}}function tu(n={}){const e={direction:"ltr",...n};function t(i,r){const s=n[i];Object.defineProperty(e,i,{configurable:!0,enumerable:!0,...typeof s=="function"?{get:s}:{value:r({[i]:s})}})}return t("breakpoints",i=>Jc(i.breakpoints)),t("components",i=>of(i.components)),t("palette",i=>yf(i.palette)),t("shape",i=>eu(i.shape)),t("spacing",i=>Qc(i.spacing)),t("typography",i=>Pf(i.typography)),t("shadows",()=>Tf()),t("transitions",()=>Rf({})),t("zIndex",i=>Ff(i.zIndex)),t("mixins",()=>af(e.breakpoints)),e}function nu(n){let e;return function(){return e||(e=n()),e}}var kf=nu(tu);const Ps=Jt({});function Of(n){return{direction:"ltr",shadows:void 0,transitions:void 0,components:void 0,palette:void 0,typography:void 0,zIndex:void 0,mixins:void 0,...n,breakpoints:Jc(n?.breakpoints),shape:eu(n?.shape),spacing:Qc(n?.spacing)}}var Bf=nu(Of);function Uf(n){for(const e in n)return!1;return!0}function Is(n=Bf,e=Ps){const t=Mt(e);if(Uf(t)&&n)return typeof n=="function"?n():n;if(!t)throw new Error("Theme is not defined");return t}function Ki(n=kf){return Is(n,Ps)}function Vf(n){return Is(n,Ps)}function Gf(n){const e=Vf(),t=r=>r,i=typeof n.propDefaults=="function"?n.propDefaults({set:t,inProps:n.props}):n.propDefaults;return ee(...i?[i]:[],()=>e.components?.[n.name]?.defaultProps||{},n.props)}function Wf(n){return T(Ps.Provider,{get value(){return n.theme},get children(){return n.children}})}const Hf=Jt({});function $f(n,e,t){const i={};return Object.keys(n).forEach(r=>{i[r]=n[r].reduce((s,o)=>(o&&(t&&t[o]&&s.push(t[o]),s.push(e(o))),s),[]).join(" ")}),i}const ca=Symbol("store-raw"),br=Symbol("store-node"),qf=Symbol("store-name");function iu(n,e){let t=n[dn];if(!t){Object.defineProperty(n,dn,{value:t=new Proxy(n,Xf)});const i=Object.keys(n),r=Object.getOwnPropertyDescriptors(n);for(let s=0,o=i.length;s<o;s++){const a=i[s];if(r[a].get){const l=r[a].get.bind(t);Object.defineProperty(n,a,{get:l})}}}return t}function yr(n){let e;return n!=null&&typeof n=="object"&&(n[dn]||!(e=Object.getPrototypeOf(n))||e===Object.prototype||Array.isArray(n))}function Jn(n,e=new Set){let t,i,r,s;if(t=n!=null&&n[ca])return t;if(!yr(n)||e.has(n))return n;if(Array.isArray(n)){Object.isFrozen(n)?n=n.slice(0):e.add(n);for(let o=0,a=n.length;o<a;o++)r=n[o],(i=Jn(r,e))!==r&&(n[o]=i)}else{Object.isFrozen(n)?n=Object.assign({},n):e.add(n);const o=Object.keys(n),a=Object.getOwnPropertyDescriptors(n);for(let l=0,c=o.length;l<c;l++)s=o[l],!a[s].get&&(r=n[s],(i=Jn(r,e))!==r&&(n[s]=i))}return n}function Fs(n){let e=n[br];return e||Object.defineProperty(n,br,{value:e={}}),e}function Ss(n,e,t){return n[e]||(n[e]=ou(t,!0))}function ru(n,e){const t=Reflect.getOwnPropertyDescriptor(n,e);return!t||t.get||!t.configurable||e===dn||e===br||e===qf||(delete t.value,delete t.writable,t.get=()=>n[dn][e]),t}function ua(n){if(ia()){const e=Fs(n);(e._||(e._=ou()))()}}function su(n){return ua(n),Reflect.ownKeys(n)}function ou(n,e){const[t,i]=Ie(n,e?{internal:!0}:{equals:!1,internal:!0});return t.$=i,t}const Xf={get(n,e,t){if(e===ca)return n;if(e===dn)return t;if(e===ea)return ua(n);const i=Fs(n),r=i[e];let s=r?i[e]():n[e];if(e===br||e==="__proto__")return s;if(!r){const o=Object.getOwnPropertyDescriptor(n,e);ia()&&(typeof s!="function"||n.hasOwnProperty(e))&&!(o&&o.get)&&(s=Ss(i,e,s)())}return yr(s)?iu(s):s},set(){return!0},deleteProperty(){return!0},ownKeys:su,getOwnPropertyDescriptor:ru};function Ui(n,e,t){if(n[e]===t)return;const i=n[e],r=n.length;t===void 0?delete n[e]:n[e]=t;let s=Fs(n),o;(o=Ss(s,e,i))&&o.$(()=>t),Array.isArray(n)&&n.length!==r&&(o=Ss(s,"length",r))&&o.$(n.length),(o=s._)&&o.$()}function au(n,e){const t=Object.keys(e);for(let i=0;i<t.length;i+=1){const r=t[i];Ui(n,r,e[r])}}function jf(n,e){if(typeof e=="function"&&(e=e(n)),e=Jn(e),Array.isArray(e)){if(n===e)return;let t=0,i=e.length;for(;t<i;t++){const r=e[t];n[t]!==r&&Ui(n,t,r)}Ui(n,"length",i)}else au(n,e)}function lr(n,e,t=[]){let i,r=n;if(e.length>1){i=e.shift();const o=typeof i,a=Array.isArray(n);if(Array.isArray(i)){for(let l=0;l<i.length;l++)lr(n,[i[l]].concat(e),t);return}else if(a&&o==="function"){for(let l=0;l<n.length;l++)i(n[l],l)&&lr(n,[l].concat(e),t);return}else if(a&&o==="object"){const{from:l=0,to:c=n.length-1,by:u=1}=i;for(let d=l;d<=c;d+=u)lr(n,[d].concat(e),t);return}else if(e.length>1){lr(n[i],e,[i].concat(t));return}r=n[i],t=[i].concat(t)}let s=e[0];typeof s=="function"&&(s=s(r,t),s===r)||i===void 0&&s==null||(s=Jn(s),i===void 0||yr(r)&&yr(s)&&!Array.isArray(s)?au(r,s):Ui(n,i,s))}function lu(n,e){const t=Jn(n||{}),i=Array.isArray(t),r=iu(t);function s(...o){ji(()=>{i&&o.length===1?jf(t,o[0]):lr(t,o)})}return[r,s]}const Yf={get(n,e,t){if(e===ca)return n;if(e===dn)return t;if(e===ea)return ua(n);const i=Fs(n),r=i[e];let s=r?i[e]():n[e];if(e===br||e==="__proto__")return s;if(!r){const o=Object.getOwnPropertyDescriptor(n,e),a=typeof s=="function";if(ia()&&(!a||n.hasOwnProperty(e))&&!(o&&o.get))s=Ss(i,e,s)();else if(s!=null&&a&&s===Array.prototype[e])return(...l)=>ji(()=>Array.prototype[e].apply(t,l))}return yr(s)?cu(s):s},set(n,e,t){return Ui(n,e,Jn(t)),!0},deleteProperty(n,e){return Ui(n,e,void 0),!0},ownKeys:su,getOwnPropertyDescriptor:ru};function cu(n,e){let t=n[dn];if(!t){Object.defineProperty(n,dn,{value:t=new Proxy(n,Yf)});const i=Object.keys(n),r=Object.getOwnPropertyDescriptors(n);for(let s=0,o=i.length;s<o;s++){const a=i[s];if(r[a].get){const l=r[a].get.bind(t);Object.defineProperty(n,a,{get:l})}if(r[a].set){const l=r[a].set;Object.defineProperty(n,a,{set:u=>ji(()=>l.call(t,u))})}}}return t}function da(n,e){const t=Jn(n||{});return cu(t)}function Re(){return function(n){function e(a){const l=!!n.slotClasses,c=()=>{if(!n.slotClasses)throw new Error("'slotClasses' option is not defined");if(!n.utilityClass)throw new Error("'utilityClass' option is not defined");return $f(n.slotClasses(a),n.utilityClass,a.classes??"")},u=da({});return l&&na(()=>{const d=c();ji(()=>{for(const f in d)u[f]=d[f]})}),u}function t(a){const[l,c]=Zt(a,n.selfPropNames);return{allProps:a,props:l,otherProps:c}}function i(a){return Gf({propDefaults:n.propDefaults,...a,name:n.name})}function r(a){const l=i({props:a});return t(l)}function s(a){return a.toString=()=>`${n.name}-root`,a}function o(a){const l=s(function(u){const{allProps:d,otherProps:f,props:m}=r(u),x=n.autoCallUseClasses??!0?e(d):{};return a({allProps:d,otherProps:f,props:m,classes:x})});return Object.defineProperty(l,"name",{value:a.name}),l}return{name:n.name,selfPropNames:n.selfPropNames,component:o,defineComponent:s,useClasses:e,useThemeProps:i,useProps:r,splitInProps:t}}}const Vi=function(e){if(!e.component)throw new Error("Component prop is empty");return T(Uo,e)};function Kf(n){const e=n.reduce((t,i)=>("name"in i&&(t[`--${i.name}`]="0"),Dr(t,i,{clone:!1,sortKeys:!0}),t),{});return delete e.name,e}function uu(n){return n.startsWith("--")}function Zf(n){return n.startsWith("__")}function du(n){return/[^a-z-]/i.test(n)&&!uu(n)}function fu(n){return n.startsWith("@global")}function hu(n){return n.startsWith("@media")}function pu(n){return n.startsWith("@keyframes")}function Qa(n){return n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function el(n,e,t=[],i={}){const r=n.split(",").map(s=>(s=s.trim(),s.includes("&")?s:`& ${s}`));return ws(e,(t.length?t:[""]).flatMap(s=>r.map(o=>o.replace(/&/g,s).trim())),{...i})}function ws(n,e=[],t={}){const i=[],r=[];for(let o in n){const a=n[o];if(!Zf(o))if(fu(o))for(const l in a)r.push(...el(l,a[l],[],t));else if(hu(o))r.push(...ws(a,e,{...t,sublevel:!0}).map(l=>`${o} {
${l}
}`));else if(uu(o))a!=null&&i.push(`${o}: ${a};`);else if(pu(o)){const l=[];for(const c in a)l.push(...ws(a[c],[/^\d+$/.test(c)?`${c}%`:c],{...t,sublevel:!0}));r.push(`${o} {
${l.join(`
`)}
}`)}else if(du(o))r.push(...el(o,a,e,t));else if(t.extraProperties&&o in t.extraProperties){const l=t.extraProperties[o](a);for(const c in l){const u=l[c],d=t.onPropertyValue?t.onPropertyValue(c,u):u;d!=null&&i.push(`${Qa(c)}: ${d};`)}}else{o=Qa(o);const l=t.onPropertyValue?t.onPropertyValue(o,a):a;l!=null&&i.push(`${o}: ${l};`)}}const s=o=>{const a="	".repeat(o);return`${a}${i.join(`
${a}`)}`};if(e.length){const o=t.sublevel?"	":"",a=o+e.join(`,
${o}`);return[...i.length?[`${a} {
${s(t.sublevel?2:1)}
${o}}`]:[],...r]}else return[...i.length?[s(0)]:[],...r]}function Jf(){return Math.random().toString(36).substring(2,15).slice(0,8)}function Qf(n,e){return typeof n=="function"&&(n=n(...e||[])),n}function mu(n){return n?Array.isArray(n)?n:[n]:[]}function eh(n,e){const t=Jf().slice(0,6);return{id:t,name:n,className:`${n}-${t}`,rules:e.replaceAll("$id",`${t}`)}}function th(n){const e=`${n.name}-$id`,i=mu(Qf(n.props)).map(s=>typeof s=="string"?`.${e} {
${s}
}`:ws(s,[`.${e}`],{extraProperties:n.extraProperties}).join(`
`)).join(`
`),r=n.cache?.get(i)||eh(n.name,i);return n.cache&&n.cache.set(i,r),r}function gu(n,e){"styleSheet"in n?n.styleSheet.cssText=e:(n.innerText="",n.appendChild(document.createTextNode(e)))}function nh(n,e){for(const t in e){const i=e[t];i!==void 0&&(i===null?n.removeAttribute(t):n.setAttribute(t,i))}}function ih(n,e){const t=document.createElement("style");return t.type="text/css",e&&nh(t,e),gu(t,n),t}function Go(n){let e=Number(n.getAttribute("data-uses"));e++,n.setAttribute("data-uses",e.toString())}function rh(n,e){Array.isArray(n)&&(n=n.join(`
`));const t=e?.id,i=document.head||document.getElementsByTagName("head")[0],r=t&&document.getElementById(t);if(r&&r instanceof HTMLStyleElement)return gu(r,n),Go(r),r;{r&&r.remove();const s=ih(n,e);return Go(s),i.appendChild(s),s}}function sh(n){return document.getElementById(n)}function tl(n){let e=Number(n.getAttribute("data-uses"));e--,e<=0?n.remove():n.setAttribute("data-uses",e.toString())}const oh=new Map;function ah(n){return n?(Array.isArray(n)?n:[n]).flat(1/0).filter(e=>!!e):[]}function xu(n){const e=Mt(Hf),[t,i]=Ie("");let r;return Ct(s=>{const o=n();let a;return o&&(a=th({name:"css",props:Kf(ah(o)),cache:oh}),r=sh(a.id),r?Go(r):r=rh(a.rules,{id:a.id,nonce:e.cache?.nonce})),s?.styleElement&&tl(s.styleElement),typeof a?.className=="string"?i(a.className):i(""),{className:a?.className,styleElement:r}},void 0),_t(()=>{r&&tl(r)}),t}const fa="__resolved";function Ti(n,e,t={}){for(const i in n){const r=n[i];if(fu(i))t[i]=Ti(r,e);else if(hu(i))t[i]=Ti(r,e);else if(pu(i)){t[i]={};for(const s in r)t[i][s]=Ti(r[s],e)}else if(du(i))t[i]=Ti(r,e);else{const s=e(i,r);s?Object.assign(t,s):t[i]=r}}return t}const lh=new Set(["animationIterationCount","borderImageOutset","borderImageSlice","borderImageWidth","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","columns","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridRow","gridRowEnd","gridRowSpan","gridRowStart","gridColumn","gridColumnEnd","gridColumnSpan","gridColumnStart","msGridRow","msGridRowSpan","msGridColumn","msGridColumnSpan","fontWeight","lineHeight","opacity","order","orphans","tabSize","widows","zIndex","zoom","WebkitLineClamp","fillOpacity","floodOpacity","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth"]);function vu(n,e){if(typeof e=="number")return{[n]:lh.has(n)?e.toString():`${e}px`}}function ch(n){return Ti(n,vu,{[fa]:!0})}function Mr(n,e,t){if(typeof t!="string")return t;const i=t.split(".");let r=n[e];for(let s=0;s<i.length&&(r=r?.[i[s]],!!r);s++);return r??t}function uh(n,e){return!e||typeof e!="string"?null:e.split(".").reduce((t,i)=>t&&t[i]?t[i]:null,n)}function dh(n,e,t,i){const r=uh(n,e)||t;return typeof r=="number"?s=>typeof s=="string"?s:r*s:Array.isArray(r)?s=>typeof s=="string"?s:r[s]:typeof r=="function"?r:()=>{}}const En={x:["Left","Right"],y:["Top","Bottom"]};function _u(n){return typeof n=="number"?`${n}px`:n}function bu(n,e){return(t,i)=>e(n,t,i)}function Y(n,e){return e?(t,i)=>({[n]:e(n,t,i)}):t=>({[n]:t})}function cr(n){return Y(n,(e,t)=>_u(t))}function Ft(n,e,t){const i=e.map(r=>`${n}${r}`);return t?(r,s)=>i.reduce((o,a)=>(o[a]=t(a,r,s),o),{}):r=>i.reduce((s,o)=>(s[o]=r,s),{})}function fh(){return{...hh(),...ph(),...mh(),...gh(),...xh(),...vh(),..._h(),...yh(),...bh()}}function hh(){return{displayPrint:bu("displayPrint",(n,e)=>({"@media print":{display:e}})),displayRaw:Y("display"),overflow:Y("overflow"),textOverflow:Y("textOverflow"),visibility:Y("visibility"),whiteSpace:Y("whiteSpace")}}function ph(){return{flexBasis:Y("flexBasis"),flexDirection:Y("flexDirection"),flexWrap:Y("flexWrap"),justifyContent:Y("justifyContent"),alignItems:Y("alignItems"),alignContent:Y("alignContent"),order:Y("order"),flex:Y("flex"),flexGrow:Y("flexGrow"),flexShrink:Y("flexShrink"),alignSelf:Y("alignSelf"),justifyItems:Y("justifyItems"),justifySelf:Y("justifySelf")}}function mh(){const n=(e,t,i)=>dh(i,"spacing",8)(t);return{gap:Y("gap",n),columnGap:Y("columnGap",n),rowGap:Y("rowGap",n),gridColumn:Y("gridColumn"),gridRow:Y("gridRow"),gridAutoFlow:Y("gridAutoFlow"),gridAutoColumns:Y("gridAutoColumns"),gridAutoRows:Y("gridAutoRows"),gridTemplateColumns:Y("gridTemplateColumns"),gridTemplateRows:Y("gridTemplateRows"),gridTemplateAreas:Y("gridTemplateAreas"),gridArea:Y("gridArea")}}function gh(){return{position:Y("position"),zIndex:Y("zIndex",(n,e,t)=>t.zIndex?.[n]??e),top:cr("top"),right:cr("right"),bottom:cr("bottom"),left:cr("left")}}function xh(){const n=(e,t,i)=>Mr(i,"palette",t);return{color:Y("color",n),bgcolor:Y("backgroundColor",n),backgroundColor:Y("backgroundColor",n)}}function vh(){const n=(e,t,i)=>(e==="maxWidth"&&(t=i.breakpoints.values[e]??t),typeof t=="number"&&(t=t>0&&t<=1?`${t*100}%`:`${t}px`),t);return{width:Y("width",n),maxWidth:Y("maxWidth",n),minWidth:Y("minWidth",n),height:Y("height",n),maxHeight:Y("maxHeight",n),minHeight:Y("minHeight",n),boxSizing:Y("boxSizing",n)}}function _h(){const n=(t,i)=>typeof i=="number"?`${i}px solid`:i,e=(t,i,r)=>Mr(r,"palette",i);return{border:Y("border",n),borderTop:Y("borderTop",n),borderRight:Y("borderRight",n),borderBottom:Y("borderBottom",n),borderLeft:Y("borderLeft",n),borderColor:Y("borderColor",e),borderTopColor:Y("borderTopColor",e),borderRightColor:Y("borderRightColor",e),borderBottomColor:Y("borderBottomColor",e),borderLeftColor:Y("borderLeftColor",e),borderRadius:Y("borderRadius",(t,i,r)=>typeof i=="number"?`${r.shape.borderRadius*i}px`:i)}}function bh(){const n=(e,t,i)=>Mr(i,"typography",t);return{typography:bu("typography",(e,t,i)=>Mr(i,"typography",t)),fontFamily:Y("fontFamily",n),fontSize:Y("fontSize",(e,t,i)=>_u(n(e,t,i))),fontStyle:Y("fontStyle",n),fontWeight:Y("fontWeight",n),letterSpacing:cr("letterSpacing"),lineHeight:Y("lineHeight"),textAlign:Y("textAlign"),textTransform:Y("textTransform")}}function yh(){const n=(i,r,s)=>s.spacing(r),e="margin",t="padding";return{m:Y(e,n),mt:Y("marginTop",n),mr:Y("marginRight",n),mb:Y("marginBottom",n),ml:Y("marginLeft",n),mx:Ft(e,En.x,n),my:Ft(e,En.y,n),margin:Y(e,n),marginTop:Y("marginTop",n),marginRight:Y("marginRight",n),marginBottom:Y("marginBottom",n),marginLeft:Y("marginLeft",n),marginX:Ft(e,En.x,n),marginY:Ft(e,En.y,n),marginInline:Ft(e,["Inline","InlineStart"],n),marginInlineStart:Y("marginInlineStart",n),marginInlineEnd:Y("marginInlineEnd",n),marginBlock:Ft(e,["BlockStart","BlockEnd"],n),marginBlockStart:Y("marginBlockStart",n),marginBlockEnd:Y("marginBlockEnd",n),p:Y(t,n),pt:Y("paddingTop",n),pr:Y("paddingRight",n),pb:Y("paddingBottom",n),pl:Y("paddingLeft",n),px:Ft(t,En.x,n),py:Ft(t,En.y,n),padding:Y(t,n),paddingTop:Y("paddingTop",n),paddingRight:Y("paddingRight",n),paddingBottom:Y("paddingBottom",n),paddingLeft:Y("paddingLeft",n),paddingX:Ft(t,En.x,n),paddingY:Ft(t,En.y,n),paddingInline:Ft(t,["Inline","InlineStart"],n),paddingInlineStart:Y("paddingInlineStart",n),paddingInlineEnd:Y("paddingInlineEnd",n),paddingBlock:Ft(t,["BlockStart","BlockEnd"],n),paddingBlockStart:Y("paddingBlockStart",n),paddingBlockEnd:Y("paddingBlockEnd",n)}}const ha=fh(),Mh=Object.keys(ha);function Sh(n,e,t){return ha[n](e,t)}function wh(n,e,t){return n in ha?Sh(n,e,t):vu(n,e)}function Ch(n,e){return Ti(n,(t,i)=>wh(t,i,e),{[fa]:!0})}function pa(n){const[e,t]=Zt(n,Mh),i=()=>{const r=n.sx;return r?Array.isArray(r)?[e,...r]:ee(e,r):e};return ee(t,{get sx(){return i()}})}const ma="__disableSystemProps",Th=["sx","theme",ma],ga=function(e){const t=e[ma];t||(e=pa(e));const[i,r]=Zt(e,Th),s=()=>e.theme||Is(),o=()=>!!e.component&&typeof e.component!="string",a=ee(r,{get component(){return r.component||"div"},get sx(){return o()?e.sx:void 0}}),l=xu(()=>{const u=s();return!(!t||!!i.sx)||o()?[]:mu(i.sx).map(f=>f[fa]?f:Ch(f,u))}),c=()=>{const u=r.className,d=l();return d?.length?u?`${u} ${d}`:d:u};return T(Vi,ee(a,{get className(){return c()}}))};function yu(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n))for(e=0;e<n.length;e++)n[e]&&(t=yu(n[e]))&&(i&&(i+=" "),i+=t);else for(e in n)n[e]&&(i&&(i+=" "),i+=e);return i}function Ee(){for(var n=0,e,t,i="";n<arguments.length;)(e=arguments[n++])&&(t=yu(e))&&(i&&(i+=" "),i+=t);return i}const Eh=Re()({name:"MuiBox",selfPropNames:[],utilityClass:n=>`MuiBox-${n}`,slotClasses:()=>({root:["root"]})}),Ot=Eh.component(function({otherProps:e,classes:t}){const i=Ki();return T(ga,ee({theme:i},e,{get className(){return Ee(t.root,e.className)}}))}),Mu=["ownerState","theme","sx","as"];function Ah(n,e,t,i){return qe(()=>t.reduce((r,s)=>{let o;return typeof s=="function"?o=s({ownerState:i.ownerState,theme:n,sx:i.sx,as:i.as,props:i}):s&&(o=s),o&&r.push({name:e,...ch(o)}),r},[]))}function Lh(n){return function(t,i={}){let r;if(i.name){const s=i.slot||"Root";r=`${i.name}-${s.slice(0,1).toLowerCase()+s.slice(1)}`}return function(...s){return function(o){const a=n?.onUseTheme?n.onUseTheme():Is(),[,l]=Zt(o,i.skipProps??Mu),c=Ah(a,r||"css",s,o),u=qe(()=>!i.skipSx&&o.sx?Array.isArray(o.sx)?o.sx:[o.sx]:[]),d=()=>[...c(),...u()];return typeof t=="string"?T(ga,ee(l,{get component(){return o.as||o.component||t},get sx(){return d()},theme:a,get className(){return Ee([o.className,r])}},{[ma]:!0})):T(t,ee(l,{get component(){return o.as},get sx(){return d()},theme:a,get className(){return Ee([o.className,r])},get ownerState(){return o.ownerState}}))}}}}const Ir=[...Mu,"classes"];var be=Lh({onUseTheme:()=>Ki()});const nl=Jt(),il=n=>n,Rh=()=>{let n=il;return{configure(e){n=e},generate(e){return n(e)},reset(){n=il}}},Dh=Rh(),Ph={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function We(n,e){return Ph[e]||`${Dh.generate(n)}-${e}`}function He(n,e){const t={};return e.forEach(i=>{t[i]=We(n,i)}),t}function Ih(n){return We("MuiGrid",n)}const Fh=[0,1,2,3,4,5,6,7,8,9,10],Nh=["column-reverse","column","row-reverse","row"],zh=["nowrap","wrap-reverse","wrap"],ir=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],xa=He("MuiGrid",["root","container","item","zeroMinWidth",...Fh.map(n=>`spacing-xs-${n}`),...Nh.map(n=>`direction-xs-${n}`),...zh.map(n=>`wrap-xs-${n}`),...ir.map(n=>`grid-xs-${n}`),...ir.map(n=>`grid-sm-${n}`),...ir.map(n=>`grid-md-${n}`),...ir.map(n=>`grid-lg-${n}`),...ir.map(n=>`grid-xl-${n}`)]),kh={xs:0,sm:600,md:900,lg:1200,xl:1536};function va(n,e,t){const i=n.theme||{};if(Array.isArray(e)){const s=i.breakpoints;return e.reduce((o,a,l)=>(o={...o,...s.up(s.keys[l],t(e[l]))},o),{})}if(typeof e=="object"){const s=i.breakpoints;return Object.keys(e).reduce((a,l)=>{if(Object.keys(s.values||kh).indexOf(l)!==-1)a={...a,...s.up(l,t(e[l],l))};else{const c=l;a[c]=e[c]}return a},{})}return t(e)}function Oh(n,e){const t={};if(typeof n!="object")return t;const i=Object.keys(e);return Array.isArray(n)?i.forEach((r,s)=>{s<n.length&&(t[r]=!0)}):i.forEach(r=>{n[r]!=null&&(t[r]=!0)}),t}function Ns(n){const e=n.values,t=n.base||Oh(e,n.breakpoints||{}),i=Object.keys(t);if(i.length===0)return n.values;let r;return i.reduce((s,o,a)=>(Array.isArray(e)?(s[o]=e[a]!=null?e[a]:e[r],r=a):typeof e=="number"?s[o]=e:(s[o]=e[o]!=null?e[o]:e[r],r=o),s),{})}const Bh=Re()({name:"MuiGrid",selfPropNames:["children","classes","columnSpacing","columns","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"],propDefaults:({set:n,inProps:e})=>n({columns:12,component:"div",container:!1,direction:"row",item:!1,lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1,get rowSpacing(){return e.rowSpacing??e.spacing??0},get columnSpacing(){return e.columnSpacing??e.spacing??0}}),utilityClass:Ih,slotClasses:n=>({root:["root",n.container&&"container",n.item&&"item",n.zeroMinWidth&&"zeroMinWidth",...Su(n.spacing,n.container),n.direction!=="row"&&`direction-xs-${String(n.direction)}`,n.wrap!=="wrap"&&`wrap-xs-${String(n.wrap)}`,n.xs!==!1&&`grid-xs-${String(n.xs)}`,n.sm!==!1&&`grid-sm-${String(n.sm)}`,n.md!==!1&&`grid-md-${String(n.md)}`,n.lg!==!1&&`grid-lg-${String(n.lg)}`,n.xl!==!1&&`grid-xl-${String(n.xl)}`]})});function Ii(n){const e=parseFloat(n);return`${e}${String(n).replace(String(e),"")||"px"}`}function Uh(n){const{theme:e,ownerState:t}=n;let i;return e.breakpoints.keys.reduce((r,s)=>{let o={};if(t[s]&&(i=t[s]),!i)return r;if(i===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=Ns({values:t.columns,breakpoints:e.breakpoints.values}),l=typeof a=="object"?a[s]:a;if(l==null)return r;const c=`${Math.round(i/l*1e8)/1e6}%`;let u={};if(t.container&&t.item&&t.columnSpacing!==0){const d=e.spacing(t.columnSpacing);if(d!=="0px"){const f=`calc(${c} + ${Ii(d)})`;u={flexBasis:f,maxWidth:f}}}o={flexBasis:c,flexGrow:0,maxWidth:c,...u}}return e.breakpoints.values[s]===0?Object.assign(r,o):r={...r,[e.breakpoints.up(s)]:o},r},{})}function Vh(n){const{theme:e,ownerState:t}=n,i=Ns({values:t.direction,breakpoints:e.breakpoints.values});return va({theme:e},i,r=>{let s={flexDirection:r};return r.indexOf("column")===0&&(s={...s,[`& > .${xa.item}`]:{maxWidth:"none"}}),s})}function Gh(n){const{theme:e,ownerState:t}=n,{container:i,rowSpacing:r}=t;let s={};if(i&&r!==0){const o=Ns({values:r,breakpoints:e.breakpoints.values});s=va({theme:e},o,a=>{const l=e.spacing(a);return l!=="0px"?{marginTop:`-${Ii(l)}`,[`& > .${xa.item}`]:{paddingTop:Ii(l)}}:{}})}return s}function Wh(n){const{theme:e,ownerState:t}=n,{container:i,columnSpacing:r}=t;let s={};if(i&&r!==0){const o=Ns({values:r,breakpoints:e.breakpoints.values});s=va({theme:e},o,a=>{const l=e.spacing(a);return l!=="0px"?{width:`calc(100% + ${Ii(l)})`,marginLeft:`-${Ii(l)}`,[`& > .${xa.item}`]:{paddingLeft:Ii(l)}}:{}})}return s}function Su(n,e,t={}){if(!e||!n||n<=0)return[];if(typeof n=="string"&&!Number.isNaN(Number(n))||typeof n=="number")return[t[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`];if(typeof n=="string"||Array.isArray(n))return[];const i=n.xs,r=n.sm,s=n.md,o=n.lg,a=n.xl;return[Number(i)>0&&(t[`spacing-xs-${String(i)}`]||`spacing-xs-${String(i)}`),Number(r)>0&&(t[`spacing-sm-${String(r)}`]||`spacing-sm-${String(r)}`),Number(s)>0&&(t[`spacing-md-${String(s)}`]||`spacing-md-${String(s)}`),Number(o)>0&&(t[`spacing-lg-${String(o)}`]||`spacing-lg-${String(o)}`),Number(a)>0&&(t[`spacing-xl-${String(a)}`]||`spacing-xl-${String(a)}`)]}const Hh=be("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,e)=>{const{container:t,direction:i,item:r,lg:s,md:o,sm:a,spacing:l,wrap:c,xl:u,xs:d,zeroMinWidth:f}=n.ownerState;return[e.root,t&&e.container,r&&e.item,f&&e.zeroMinWidth,...Su(l,t,e),i!=="row"&&e[`direction-xs-${String(i)}`],c!=="wrap"&&e[`wrap-xs-${String(c)}`],d!==!1&&e[`grid-xs-${String(d)}`],a!==!1&&e[`grid-sm-${String(a)}`],o!==!1&&e[`grid-md-${String(o)}`],s!==!1&&e[`grid-lg-${String(s)}`],u!==!1&&e[`grid-xl-${String(u)}`]]}})(({ownerState:n})=>({boxSizing:"border-box",...n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...n.item&&{margin:0},...n.zeroMinWidth&&{minWidth:0},...n.wrap!=="wrap"&&{flexWrap:n.wrap}}),Vh,Gh,Wh,Uh),no=Bh.component(function({allProps:e,props:t,otherProps:i,classes:r}){i=pa(i);const s=Mt(nl),o=t.columns||s||12;return(l=>o!==12?T(nl.Provider,{value:o,children:l}):l)(T(Hh,ee({ownerState:e,get className(){return Ee(r.root,i.className)}},i,{get children(){return t.children}})))});function $h(n){return We("MuiPaper",n)}He("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const qh=Re()({name:"MuiPaper",selfPropNames:["children","classes","elevation","square","variant"],propDefaults:({set:n})=>n({component:"div",elevation:1,square:!1,variant:"elevation"}),utilityClass:$h,slotClasses:n=>({root:["root",n.variant,!n.square&&"rounded",n.variant==="elevation"&&`elevation${n.elevation}`]})}),rl=n=>{let e;return n<1?e=5.11916*n**2:e=4.5*Math.log(n+1)+2,Number((e/100).toFixed(2))},Xh=be("div",{name:"MuiPaper",slot:"Root"})(({theme:n,ownerState:e})=>({backgroundColor:n.palette.background.paper,color:n.palette.text.primary,transition:n.transitions.create("box-shadow"),...!e.square&&{borderRadius:n.shape.borderRadius},...e.variant==="outlined"&&{border:`1px solid ${n.palette.divider}`},...e.variant==="elevation"&&{boxShadow:n.shadows[e.elevation],...n.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${pt("#fff",rl(e.elevation))}, ${pt("#fff",rl(e.elevation))})`}}})),wu=qh.component(function({allProps:e,props:t,otherProps:i,classes:r}){return T(Xh,ee(i,{ownerState:e,get className(){return Ee(r.root,e.className)},get children(){return t.children}}))});function Pe(n){if(typeof n!="string")throw new Error("MUI: `capitalize(string)` expects a string argument.");return n.charAt(0).toUpperCase()+n.slice(1)}function jh(n){return We("MuiAppBar",n)}He("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const Yh=Re()({name:"MuiAppBar",selfPropNames:["classes","color","enableColorOnDark","position"],utilityClass:jh,propDefaults:({set:n})=>n({component:"header",color:"primary",enableColorOnDark:!1,position:"fixed"}),slotClasses:n=>({root:["root",`color${Pe(n.color)}`,`position${Pe(n.position)}`]})}),Kh=be(wu,{name:"MuiAppBar",slot:"Root",overridesResolver:(n,e)=>[e.root,e[`position${Pe(n.ownerState.position)}`],e[`color${Pe(n.ownerState.color)}`]]})(({theme:n,ownerState:e})=>{const t=n.palette.mode==="light"?n.palette.grey[100]:n.palette.grey[900];return{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0,...e.position==="fixed"&&{position:"fixed",zIndex:n.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},...e.position==="absolute"&&{position:"absolute",zIndex:n.zIndex.appBar,top:0,left:"auto",right:0},...e.position==="sticky"&&{position:"sticky",zIndex:n.zIndex.appBar,top:0,left:"auto",right:0},...e.position==="static"&&{position:"static"},...e.position==="relative"&&{position:"relative"},...e.color==="default"&&{backgroundColor:t,color:n.palette.getContrastText(t)},...e.color&&e.color!=="default"&&e.color!=="inherit"&&e.color!=="transparent"&&{backgroundColor:n.palette[e.color].main,color:n.palette[e.color].contrastText},...e.color==="inherit"&&{color:"inherit"},...n.palette.mode==="dark"&&!e.enableColorOnDark&&{backgroundColor:void 0,color:void 0},...e.color==="transparent"&&{backgroundColor:"transparent",color:"inherit",...n.palette.mode==="dark"&&{backgroundImage:"none"}}}}),Zh=Yh.component(function({allProps:e,classes:t,props:i,otherProps:r}){return T(Kh,ee({square:!0,ownerState:e,elevation:4,get className(){return Ee(t.root,{"mui-fixed":i.position==="fixed"},r.className)}},r))});function Jh(n){return We("MuiToolbar",n)}He("MuiToolbar",["root","gutters","regular","dense"]);const Qh=Re()({name:"MuiToolbar",selfPropNames:["children","classes","disableGutters","variant"],propDefaults:({set:n})=>n({component:"div",disableGutters:!1,variant:"regular"}),utilityClass:Jh,slotClasses:n=>({root:["root",!n.disableGutters&&"gutters",n.variant]})}),ep=be("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,!t.disableGutters&&e.gutters,e[t.variant]]}})(({theme:n,ownerState:e})=>({position:"relative",display:"flex",alignItems:"center",...!e.disableGutters&&{paddingLeft:n.spacing(2),paddingRight:n.spacing(2),[n.breakpoints.up("sm")]:{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}},...e.variant==="dense"&&{minHeight:48}}),({theme:n,ownerState:e})=>e.variant==="regular"&&n.mixins.toolbar),tp=Qh.component(function({allProps:e,props:t,classes:i,otherProps:r}){return T(ep,ee(r,{get as(){return r.component},get className(){return Ee(i.root,r.className)},ownerState:e,get children(){return t.children}}))}),zs=Jt({dense:!1});function ks(){return Mt(zs)}const np=ke("<span></span>"),ip=Re()({name:"MuiRipple",selfPropNames:["className","classes","pulsate","rippleX","rippleY","rippleSize","in","onExited","timeout"],propDefaults:({set:n})=>n({pulsate:!1,classes:{}})}),rp=ip.component(function({props:e,otherProps:t}){const[i,r]=Ie(!1),s=qe(()=>Ee(e.className,e.classes.ripple,e.classes.rippleVisible,e.classes.ripplePulsate&&{[e.classes.ripplePulsate]:e.pulsate})),o=qe(()=>({width:`${e.rippleSize}px`,height:`${e.rippleSize}px`,top:`${-(e.rippleSize/2)+e.rippleY}px`,left:`${-(e.rippleSize/2)+e.rippleX}px`})),a=qe(()=>Ee(e.classes.child,e.classes.childLeaving&&{[e.classes.childLeaving]:i()},e.classes.childPulsate&&{[e.classes.childPulsate]:e.pulsate}));Ke(()=>{!e.in&&!i()&&r(!0)});let l;return Ke(()=>{!e.in&&e.onExited&&(clearTimeout(l),l=window.setTimeout(e.onExited,e.timeout))}),_t(()=>clearTimeout(l)),T(Ot,{component:"span",get className(){return s()},get style(){return o()},get sx(){return t.sx},get children(){const c=np.cloneNode(!0);return Ct(()=>c.className=a()),c}})}),zt=He("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);function Sr(n){const e=t=>{if(e.ref=e.current=t,typeof n=="function"){const i=n();typeof i=="function"&&i(t)}else typeof n?.ref=="function"&&n.ref(t)};return e}function Fr(n){return Sr(n)}const sp=Re()({name:"MuiTouchRipple",selfPropNames:["center","classes","ref"],propDefaults:({set:n})=>n({center:!1,classes:{}})}),Wo=550,op=80,ap=be("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),lp=be(rp,{name:"MuiTouchRipple",slot:"Ripple"})(({theme:n})=>({position:"absolute","@keyframes animation-enter-$id":{0:{transform:"scale(0)",opacity:.1},100:{transform:"scale(1)",opacity:.3}},"@keyframes animation-exit-$id":{0:{opacity:1},100:{opacity:0}},"@keyframes animation-pulsate-$id":{0:{transform:"scale(1)"},50:{transform:"scale(0.92)"},100:{transform:"scale(1)"}},[`&.${zt.rippleVisible}`]:{opacity:"0.3",transform:"scale(1)",animationName:"animation-enter-$id",animationDuration:`${Wo}ms`,animationTimingFunction:n.transitions.easing.easeInOut},[`&.${zt.ripplePulsate}`]:{animationDuration:`${n.transitions.duration.shorter}ms`},[`& .${zt.child}`]:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},[`& .${zt.childLeaving}`]:{opacity:0,animationName:"animation-exit-$id",animationDuration:`${Wo}ms`,animationTimingFunction:`${n.transitions.easing.easeInOut}`},[`& .${zt.childPulsate}`]:{position:"absolute",left:"0px",top:0,animationName:"animation-pulsate-$id",animationDuration:"2500ms",animationTimingFunction:`${n.transitions.easing.easeInOut}`,animationIterationCount:"infinite",animationDelay:"200ms"}})),cp=sp.component(function({props:e,otherProps:t}){let i=0;const[r,s]=Ie([]),o=da({});let a,l=!1,c,u;const d=Fr(t);_t(()=>{c&&clearTimeout(c)}),Ke(()=>{r(),a&&(a(),a=void 0)});const f=g=>{const b=i++;o[b]=!0,s(w=>[...w,{id:b,params:g}]),a=g.cb},m=(g,b={pulsate:!1,center:e.center},w)=>{if(b=ee(b,{center:b.center||b.pulsate}),g.type==="mousedown"&&l){l=!1;return}g.type==="touchstart"&&(l=!0);const C=d.ref?d.ref.getBoundingClientRect():{width:0,height:0,left:0,top:0};let M,R,P;if(b.center||g.clientX===0&&g.clientY===0||!g.clientX&&!g.touches)M=Math.round(C.width/2),R=Math.round(C.height/2);else{const{clientX:_,clientY:E}=g.touches?g.touches[0]:g;M=Math.round(_-C.left),R=Math.round(E-C.top)}if(b.center)P=Math.sqrt((2*C.width**2+C.height**2)/3),P%2===0&&(P+=1);else{const _=Math.max(Math.abs((d.ref?d.ref.clientWidth:0)-M),M)*2+2,E=Math.max(Math.abs((d.ref?d.ref.clientHeight:0)-R),R)*2+2;P=Math.sqrt(_**2+E**2)}g.touches?u||(u=()=>{f({pulsate:b.pulsate,rippleX:M,rippleY:R,rippleSize:P,cb:w})},c=setTimeout(()=>{u&&(u(),u=void 0)},op)):f({pulsate:b.pulsate,rippleX:M,rippleY:R,rippleSize:P,cb:w})},x=()=>m({},{pulsate:!0}),p=(g,b)=>{if(clearTimeout(c),g.type==="touchend"&&u){u(),u=void 0,c=setTimeout(()=>{p(g,b)});return}for(const w in o)o[w]=!1;u=void 0,a=b},h={pulsate:x,start:m,stop:p};return typeof e.ref=="function"&&e.ref(h),T(ap,ee({get className(){return Ee(e.classes.root,zt.root,t.className)},ref:d},t,{get children(){return jc(r,g=>T(lp,{get in(){return o[g.id]},onExited:()=>{s(b=>b.filter(w=>w.id!==g.id)),delete o[g.id]},get classes(){return{ripple:Ee(e.classes.ripple,zt.ripple),rippleVisible:Ee(e.classes.rippleVisible,zt.rippleVisible),ripplePulsate:Ee(e.classes.ripplePulsate,zt.ripplePulsate),child:Ee(e.classes.child,zt.child),childLeaving:Ee(e.classes.childLeaving,zt.childLeaving),childPulsate:Ee(e.classes.childPulsate,zt.childPulsate)}},timeout:Wo,get pulsate(){return g.params.pulsate},get rippleX(){return g.params.rippleX},get rippleY(){return g.params.rippleY},get rippleSize(){return g.params.rippleSize}}))}}))});function up(n){return We("MuiButtonBase",n)}const dp=He("MuiButtonBase",["root","disabled","focusVisible"]);let Os=!0,Ho=!1,sl;const fp={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function hp(n){const{type:e,tagName:t}=n;return!!(t==="INPUT"&&fp[e]&&!n.readOnly||t==="TEXTAREA"&&!n.readOnly||n.isContentEditable)}function pp(n){n.metaKey||n.altKey||n.ctrlKey||(Os=!0)}function io(){Os=!1}function mp(){this.visibilityState==="hidden"&&Ho&&(Os=!0)}function gp(n){n.addEventListener("keydown",pp,!0),n.addEventListener("mousedown",io,!0),n.addEventListener("pointerdown",io,!0),n.addEventListener("touchstart",io,!0),n.addEventListener("visibilitychange",mp,!0)}function xp(n){const{target:e}=n;try{return e.matches(":focus-visible")}catch{}return Os||hp(e)}function Cu(){const n=s=>{s!=null&&gp(s.ownerDocument)},[e,t]=Ie(!1);function i(){return e()?(Ho=!0,window.clearTimeout(sl),sl=window.setTimeout(()=>{Ho=!1},100),t(!1),!0):!1}function r(s){return xp(s)?(t(!0),!0):!1}return{isFocusVisibleRef:{get current(){return e()}},onFocus:r,onBlur:i,ref:n}}const ol=Re()({name:"MuiButtonBase",selfPropNames:["LinkComponent","TouchRippleProps","action","centerRipple","children","classes","disableRipple","disableRipple","disableTouchRipple","disabled","focusRipple","focusVisibleClassName","onFocusVisible","tabIndex","touchRippleRef"],propDefaults:({set:n})=>n({component:"button",disabled:!1,disableRipple:!1,disableTouchRipple:!1,focusRipple:!1,LinkComponent:"a",centerRipple:!1,tabIndex:0}),autoCallUseClasses:!1,utilityClass:up,slotClasses:n=>({root:["root",n.disabled&&"disabled",n.focusVisible&&"focusVisible"]})}),vp=be("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(n,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${dp.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),_a=ol.component(function({allProps:e,props:t,otherProps:i}){const r=Sr(i),s=Sr(()=>t.touchRippleRef),o=Cu();let a=!1;const[l,c]=Ie(!1),[u,d]=Ie(!1),f=ee(e,{get focusVisible(){return l()}}),m=ol.useClasses(f);Oi(()=>{d(!0)}),Ke(()=>{t.disabled&&l()&&c(!1)}),Ke(()=>{l()&&t.focusRipple&&!t.disableRipple&&s.ref.pulsate()});function x(A,N,W=t.disableTouchRipple){return H=>(typeof N=="function"&&N(H),!W&&s.ref&&s.ref[A](H),!0)}const p=x("start",i.onMouseDown),h=x("stop",i.onContextMenu),g=x("stop",i.onDragLeave),b=x("stop",i.onMouseUp),w=x("stop",A=>{l()&&A.preventDefault(),typeof i.onMouseLeave=="function"&&i.onMouseLeave(A)}),C=x("start",i.onTouchStart),M=x("stop",i.onTouchEnd),R=x("stop",i.onTouchMove),P=x("stop",A=>{o.onBlur(A),o.isFocusVisibleRef.current===!1&&c(!1),typeof i.onFocusOut=="function"&&i.onFocusOut(A)},!1),_=A=>{r.ref||(r.ref=A.currentTarget),o.onFocus(A),o.isFocusVisibleRef.current===!0&&(c(!0),t.onFocusVisible&&t.onFocusVisible(A)),typeof i.onFocusIn=="function"&&i.onFocusIn(A)},E=()=>i.component&&i.component!=="button"&&!(r.ref.tagName==="A"&&r.ref.hasAttribute("href")),B=A=>{t.focusRipple&&!a&&l()&&s.ref&&A.key===" "&&(a=!0,s.ref.stop(A,()=>{s.ref.start(A)})),A.target===A.currentTarget&&E()&&A.key===" "&&A.preventDefault(),typeof i.onKeyDown=="function"&&i.onKeyDown(A),A.target===A.currentTarget&&E()&&A.key==="Enter"&&!t.disabled&&(A.preventDefault(),typeof i.onClick=="function"&&i.onClick(A))},F=A=>{t.focusRipple&&A.key===" "&&s.ref&&l()&&!A.defaultPrevented&&(a=!1,s.ref.stop(A,()=>{s.ref.pulsate(A)})),typeof i.onKeyUp=="function"&&i.onKeyUp(A),typeof i.onClick=="function"&&A.target===A.currentTarget&&E()&&A.key===" "&&!A.defaultPrevented&&i.onClick(A)},K=qe(()=>{let A=i.component;return A==="button"&&(i.href||i.to)&&(A=t.LinkComponent),A}),Z=qe(()=>{const A={};return K()==="button"?(A.type=i.type===void 0?"button":i.type,A.disabled=t.disabled):(!i.href&&!i.to&&(A.role="button"),t.disabled&&(A["aria-disabled"]=t.disabled)),A}),I=()=>u()&&!t.disableRipple&&!t.disabled;return T(vp,ee(Z,i,{get className(){return Ee(m.root,i.className)},ownerState:f,onFocusOut:P,get onClick(){return i.onClick},onContextMenu:h,onFocusIn:_,onKeyDown:B,onKeyUp:F,onMouseDown:p,onMouseLeave:w,onMouseUp:b,onDragLeave:g,onTouchEnd:M,onTouchMove:R,onTouchStart:C,ref:r,get tabIndex(){return t.disabled?-1:t.tabIndex},get type(){return i.type},get component(){return K()},get children(){return[Qe(()=>t.children),T(Ge,{get when(){return I()},get children(){return T(cp,ee({ref:s,get center(){return t.centerRipple}},()=>t.TouchRippleProps||{}))}})]}}))});function _p(n){return We("MuiListItemButton",n)}const wi=He("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),bp=Re()({name:"MuiListItemButton",selfPropNames:["alignItems","autoFocus","children","classes","dense","disableGutters","disabled","divider","selected"],propDefaults:({set:n})=>n({alignItems:"center",autoFocus:!1,component:"div",dense:!1,disableGutters:!1,divider:!1,selected:!1,disabled:!1}),utilityClass:_p,slotClasses:n=>({root:["root",n.dense&&"dense",!n.disableGutters&&"gutters",n.divider&&"divider",n.disabled&&"disabled",n.alignItems==="flex-start"&&"alignItemsFlexStart",n.selected&&"selected"]})}),yp=be(_a,{skipProps:Ir.filter(n=>n!=="classes"),name:"MuiListItemButton",slot:"Root",overridesResolver:(n,e)=>[e.root,n.ownerState.dense&&e.dense,n.ownerState.alignItems==="flex-start"&&e.alignItemsFlexStart,n.ownerState.divider&&e.divider,!n.ownerState.disableGutters&&e.gutters]})(({theme:n,ownerState:e})=>({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${wi.selected}`]:{backgroundColor:pt(n.palette.primary.main,n.palette.action.selectedOpacity),[`&.${wi.focusVisible}`]:{backgroundColor:pt(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)}},[`&.${wi.selected}:hover`]:{backgroundColor:pt(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:pt(n.palette.primary.main,n.palette.action.selectedOpacity)}},[`&.${wi.focusVisible}`]:{backgroundColor:n.palette.action.focus},[`&.${wi.disabled}`]:{opacity:n.palette.action.disabledOpacity},...e.divider&&{borderBottom:`1px solid ${n.palette.divider}`,backgroundClip:"padding-box"},...e.alignItems==="flex-start"&&{alignItems:"flex-start"},...!e.disableGutters&&{paddingLeft:16,paddingRight:16},...e.dense&&{paddingTop:4,paddingBottom:4}})),wr=bp.component(function({allProps:e,classes:t,otherProps:i,props:r}){const s=ks(),o={get dense(){return r.dense||s.dense||!1},get alignItems(){return r.alignItems},get disableGutters(){return r.disableGutters}},a=ee(e,{get dense(){return o.dense}}),l=Fr(i);return Ke(()=>{r.autoFocus&&l.ref&&l.ref.focus()}),T(zs.Provider,{value:o,get children(){return T(yp,ee(i,{ref:l,get focusVisibleClassName(){return Ee(r.classes?.focusVisible,i.focusVisibleClassName)},ownerState:a,classes:t,get children(){return r.children}}))}})});function Mp(n){return We("MuiListItemSecondaryAction",n)}He("MuiListItemSecondaryAction",["root","disableGutters"]);const al=Re()({name:"MuiListItemSecondaryAction",selfPropNames:["alignItems","children","classes"],propDefaults:({set:n})=>n({}),autoCallUseClasses:!1,utilityClass:Mp,slotClasses:n=>({root:["root",n.disableGutters&&"disableGutters"]})}),Sp=be("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.disableGutters&&e.disableGutters]}})(({ownerState:n})=>({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",...n.disableGutters&&{right:0}})),wp=al.component(function({allProps:e,otherProps:t,props:i}){const r=ks(),s=ee({get disableGutters(){return!!r.disableGutters}},e),o=al.useClasses(s);return T(Sp,ee(t,{get className(){return Ee(o.root,t.className)},ownerState:s,get children(){return i.children}}))});function Cp(n){return We("MuiListItem",n)}const qr=He("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);function Qn(n){return typeof n=="string"}const Tp=Re()({name:"MuiListItem",selfPropNames:["alignItems","autoFocus","children","classes","components","componentsProps","dense","disableGutters","disablePadding","divider","secondaryAction"],propDefaults:({set:n})=>n({component:"li",alignItems:"center",autoFocus:!1,components:{},componentsProps:{},dense:!1,disableGutters:!1,disablePadding:!1,divider:!1}),utilityClass:Cp,slotClasses:n=>({root:["root",n.dense&&"dense",!n.disableGutters&&"gutters",!n.disablePadding&&"padding",n.divider&&"divider",n.alignItems==="flex-start"&&"alignItemsFlexStart"],container:["container"]})}),Ep=be("div",{name:"MuiListItem",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.dense&&e.dense,t.alignItems==="flex-start"&&e.alignItemsFlexStart,t.divider&&e.divider,!t.disableGutters&&e.gutters,!t.disablePadding&&e.padding,t.button&&e.button]}})(({theme:n,ownerState:e})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",...!e.disablePadding&&{paddingTop:8,paddingBottom:8,...e.dense&&{paddingTop:4,paddingBottom:4},...!e.disableGutters&&{paddingLeft:16,paddingRight:16},...!!e.secondaryAction&&{paddingRight:48}},...!!e.secondaryAction&&{[`& > .${wi.root}`]:{paddingRight:48}},[`&.${qr.focusVisible}`]:{backgroundColor:n.palette.action.focus},[`&.${qr.selected}`]:{backgroundColor:pt(n.palette.primary.main,n.palette.action.selectedOpacity),[`&.${qr.focusVisible}`]:{backgroundColor:pt(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)}},[`&.${qr.disabled}`]:{opacity:n.palette.action.disabledOpacity},...e.alignItems==="flex-start"&&{alignItems:"flex-start"},...e.divider&&{borderBottom:`1px solid ${n.palette.divider}`,backgroundClip:"padding-box"}})),Cr=Tp.component(function({allProps:e,classes:t,otherProps:i,props:r}){const s=Fr(i),o=ks(),a={get dense(){return r.dense||o.dense||!1},get alignItems(){return r.alignItems},get disableGutters(){return r.disableGutters}};Ke(()=>{r.autoFocus&&s.ref&&s.ref.focus()});const l=ee(e,{get dense(){return a.dense}}),c=()=>r.components.Root||Ep,u=()=>r.componentsProps.root||{},[,d]=Zt(ee({get className(){return Ee(t.root,u().className,i.className)}},i),["component","ref"]);return T(zs.Provider,{value:a,get children(){return T(Vi,ee({get component(){return c()},get as(){return i.component},ref:s,ownerState:l},()=>!Qn(c())&&{ownerState:ee(l,()=>u().ownerState||{})},d,{get children(){return[Qe(()=>r.children),T(Ge,{get when(){return!!r.secondaryAction},get children(){return T(wp,{get children(){return r.secondaryAction}})}})]}}))}})});function Ap(n){return We("MuiIconButton",n)}const Lp=He("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Rp=Re()({name:"MuiIconButton",selfPropNames:["children","classes","color","disableFocusRipple","disabled","edge","size"],propDefaults:({set:n})=>n({edge:!1,color:"default",disabled:!1,disableFocusRipple:!1,size:"medium"}),utilityClass:Ap,slotClasses:n=>({root:["root",n.disabled&&"disabled",n.color!=="default"&&`color${Pe(n.color)}`,n.edge&&`edge${Pe(n.edge)}`,`size${Pe(n.size)}`]})}),Dp=be(_a,{name:"MuiIconButton",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.color!=="default"&&e[`color${Pe(t.color)}`],t.edge&&e[`edge${Pe(t.edge)}`],e[`size${Pe(t.size)}`]]}})(({theme:n,ownerState:e})=>({textAlign:"center",flex:"0 0 auto",fontSize:n.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:n.palette.action.active,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),...!e.disableRipple&&{"&:hover":{backgroundColor:pt(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},...e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},...e.edge==="end"&&{marginRight:e.size==="small"?-3:-12}}),({theme:n,ownerState:e})=>({...e.color==="inherit"&&{color:"inherit"},...e.color!=="inherit"&&e.color!=="default"&&{color:n.palette[e.color].main,...!e.disableRipple&&{"&:hover":{backgroundColor:pt(n.palette[e.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}},...e.size==="small"&&{padding:5,fontSize:n.typography.pxToRem(18)},...e.size==="large"&&{padding:12,fontSize:n.typography.pxToRem(28)},[`&.${Lp.disabled}`]:{backgroundColor:"transparent",color:n.palette.action.disabled}})),ei=Rp.component(function({allProps:e,classes:t,otherProps:i,props:r}){return T(Dp,ee({get className(){return Ee(t.root,i.className)},centerRipple:!0,get focusRipple(){return!r.disableFocusRipple},get disabled(){return r.disabled},ownerState:e},i,{get children(){return r.children}}))}),Pp=Jt();function Ip(n){return We("MuiSvgIcon",n)}He("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Fp=ke("<title></title>"),Np=Re()({name:"MuiSvgIcon",selfPropNames:["children","classes","color","fontSize","htmlColor","inheritViewBox","shapeRendering","titleAccess","viewBox"],propDefaults:({set:n})=>{const e=Mt(Pp);return n({component:"svg",color:"inherit",get fontSize(){return e?.fontSize??"medium"},inheritViewBox:!1,viewBox:"0 0 24 24"})},utilityClass:Ip,slotClasses:n=>({root:["root",n.color!=="inherit"&&`color${Pe(n.color)}`,`fontSize${Pe(n.fontSize)}`]})}),zp=be("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.color!=="inherit"&&e[`color${Pe(t.color)}`],e[`fontSize${Pe(t.fontSize)}`]]}})(({theme:n,ownerState:e})=>({userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:n.transitions?.create?.("fill",{duration:n.transitions?.duration?.shorter}),fontSize:{inherit:"inherit",small:n.typography?.pxToRem?.(20)||"1.25rem",medium:n.typography?.pxToRem?.(24)||"1.5rem",large:n.typography?.pxToRem?.(35)||"2.1875"}[e.fontSize],color:n.palette?.[e.color]?.main??{action:n.palette?.action?.active,disabled:n.palette?.action?.disabled,inherit:void 0}[e.color]})),kp=Np.component(function({allProps:e,props:t,otherProps:i,classes:r}){return T(zp,ee({get["aria-hidden"](){return t.titleAccess?void 0:!0},get role(){return t.titleAccess?"img":void 0},get viewBox(){return t.inheritViewBox?void 0:t.viewBox}},{focusable:"false"},{get color(){return t.htmlColor}},i,{get className(){return Ee(r.root,i.className)},ownerState:e,get children(){return[Qe(()=>t.children),T(Ge,{get when(){return!!t.titleAccess},get children(){const s=Fp.cloneNode(!0);return It(s,()=>t.titleAccess),s}})]}}))});function hn(n,e){return i=>T(kp,ee({"data-testid":`${e}Icon`},i,{children:n}))}const Op=ke('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),Bp=ke('<svg><path d="M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"></path></svg>',4,!0);var Tu=hn(()=>[Op.cloneNode(!0),Bp.cloneNode(!0)],"Power");function Up(n){return We("MuiList",n)}He("MuiList",["root","padding","dense","subheader"]);const Vp=Re()({name:"MuiList",selfPropNames:["children","classes","dense","disablePadding","subheader"],propDefaults:({set:n})=>n({component:"ul",dense:!1,disablePadding:!1}),utilityClass:Up,slotClasses:n=>({root:["root",!n.disablePadding&&"padding",n.dense&&"dense",!!n.subheader&&"subheader"]})}),Gp=be("ul",{name:"MuiList",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})(({ownerState:n})=>({listStyle:"none",margin:0,padding:0,position:"relative",...!n.disablePadding&&{paddingTop:8,paddingBottom:8},...n.subheader&&{paddingTop:0}})),Eu=Vp.component(function({allProps:e,classes:t,otherProps:i,props:r}){return T(zs.Provider,{value:{get dense(){return r.dense}},get children(){return T(Gp,ee(i,{get className(){return Ee(t.root,i.className)},ownerState:e,get children(){return[Qe(()=>r.subheader),Qe(()=>r.children)]}}))}})}),Au=n=>n.scrollTop;function Cs(n,e){const{timeout:t,easing:i,style:r={}}=n;return{duration:r.transitionDuration??(typeof t=="number"?t:typeof t=="string"?0:t[e.mode]||0),easing:r.transitionTimingFunction??(typeof i=="object"?i[e.mode]:i),delay:r.transitionDelay}}function Lu(n){return typeof n=="number"?{exit:n,enter:n,appear:n}:{exit:n?.exit||0,enter:n?.enter||0,appear:n?.appear??n?.enter??0}}function Ru(n){const e=ee({in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0},n),t=qe(()=>Lu(e.timeout));let i;e.in?e.appear?i="exited":i="entered":e.unmountOnExit||e.mountOnEnter?i="unmounted":i="exited";const[r,s]=Ie(i);let o,a,l=!0;function c(d,f){const m=()=>setTimeout(f,d);let x,p=!1;const h=()=>{p=!0,x&&clearTimeout(x)};return e.addEndListener?e.addEndListener(()=>{p||(x=m())}):x=m(),h}const u=qe(Wc(()=>[r()],()=>{const d=r(),f=d!=="unmounted"?e.children(d):void 0;return l?(l=!1,f):(d==="entering"?(e.onEntering?.(),a&&(a(),a=void 0),o=c(t().enter,()=>s("entered"))):d==="entered"?e.onEntered?.():d==="exiting"?(e.onExiting?.(),o&&(o(),o=void 0),a=c(t().exit,()=>s("exited"))):d==="exited"&&e.onExited?.(),f)}));return Ke(d=>(e.in?(Kt(()=>e.onEnter?.()),s("entering")):d||(Kt(()=>e.onExit?.()),s("exiting")),!1),!0),_t(()=>{o?.(),a?.()}),u()}const Wp=Re()({name:"MuiGrow",propDefaults:({set:n})=>n({appear:!0,timeout:"auto"}),selfPropNames:["appear","children","easing","in","ref","timeout"]});function $o(n){return`scale(${n}, ${n**2})`}const Hp={entering:{opacity:1,transform:$o(1)},entered:{opacity:1,transform:"none"}},$p=Wp.component(function({props:e,otherProps:t}){const i={current:void 0},r=Ki(),s=Rr(()=>e.children);let o;return _t(()=>o&&clearTimeout(o)),T(Ru,ee(t,{get appear(){return e.appear},get in(){return e.in},onEnter:()=>{const a=s();Au(a);const{duration:l,delay:c,easing:u}=Cs({style:t.style,timeout:e.timeout,easing:e.easing},{mode:"enter"});let d;e.timeout==="auto"?(d=r.transitions.getAutoHeightDuration(a.clientHeight),i.current=d):d=l,a.style.transition=[r.transitions.create("opacity",{duration:d,delay:c}),r.transitions.create("transform",{duration:Number(d)*.666,delay:c,easing:u})].join(","),t.onEnter?.()},onExit:()=>{const a=s(),{duration:l,delay:c,easing:u}=Cs({style:t.style,timeout:e.timeout,easing:e.easing},{mode:"exit"});let d;e.timeout==="auto"?(d=r.transitions.getAutoHeightDuration(a.clientHeight),i.current=d):d=l,a.style.transition=[r.transitions.create("opacity",{duration:d,delay:c}),r.transitions.create("transform",{duration:Number(d)*.666,delay:c||Number(d)*.333,easing:u})].join(","),a.style.opacity="0",a.style.transform=$o(.75),t.onExit?.()},addEndListener:a=>{e.timeout==="auto"&&(o=setTimeout(a,i.current||0)),t.addEndListener&&t.addEndListener(a)},get timeout(){return e.timeout==="auto"?void 0:e.timeout},children:a=>{const l=s();l.style.opacity="0",l.style.transform=$o(.75),a==="exited"&&!e.in?l.style.visibility="hidden":l.style.removeProperty("visibility");const c={...Hp[a]||{},...t.style||{}};for(const u in c){const d=c[u];d===void 0?l.style.removeProperty(u):l.style[u]=d}return l}}))}),Du=Jt(),Pu=Re()({name:"MuiFader",selfPropNames:["appear","children","easing","in","timeout"],propDefaults:({set:n})=>{const e=Ki();return n({appear:!0,get timeout(){return{enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen}}})}}),qp=Pu.selfPropNames,Xp=Pu.component(function({props:e,otherProps:t}){const i=Ki(),r=Fr(e),s=qe(()=>Lu(e.timeout)),o=Rr(()=>e.children),a=Mt(Du);return T(Ru,ee({get in(){return e.in??a?.in},get appear(){return e.appear},get timeout(){return e.timeout}},t,{ref:r,onEnter:()=>{const l=o();Au(l);const c=Cs({style:t.style,timeout:s(),easing:e.easing},{mode:"enter"});l.style.transition=i.transitions.create("opacity",c),t.onEnter?.(),a?.onEnter?.()},onExit:()=>{const l=o(),c=Cs({style:t.style,timeout:s(),easing:e.easing},{mode:"enter"});l.style.transition=i.transitions.create("opacity",c),t.onExit?.()},onExited:()=>{t.onExited?.(),a?.onExited?.()},children:l=>{const c=o();return l==="exited"&&!e.in?c.style.visibility="hidden":c.style.removeProperty("visibility"),l==="entering"||l==="entered"?c.style.opacity="1":c.style.opacity="0",c}}))});function jp(n){return We("MuiBackdrop",n)}He("MuiBackdrop",["root","invisible"]);const Yp=Re()({name:"BackdropUnstyled",selfPropNames:["children","classes","components","componentsProps","invisible"],propDefaults:({set:n})=>n({component:"div",components:{},componentsProps:{},invisible:!1}),utilityClass:jp,slotClasses:n=>({root:["root",n.invisible&&"invisible"]})}),Kp=Yp.component(function({props:e,otherProps:t,allProps:i,classes:r}){const s=()=>e.components.Root||t.component,o=()=>e.componentsProps.root||{};return T(Vi,ee({"aria-hidden":!0},o,t,()=>!Qn(s())&&{ownerState:i},{get component(){return s()},get className(){return Ee(r.root,o().className,t.className)}}))}),Zp=Re()({name:"MuiBackdrop",selfPropNames:["classes","open","transitionDuration"],propDefaults:({set:n})=>n({open:!1,component:"div"})}),Jp=be("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.invisible&&e.invisible]}})(({ownerState:n})=>({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",...n.invisible&&{backgroundColor:"transparent"}})),Qp=Zp.component(function({props:e,otherProps:t}){const[i,r]=Zt(t,qp);return T(Xp,ee({get in(){return e.open},get timeout(){return e.transitionDuration}},i,{get children(){return T(Kp,ee(r,{get className(){return t.className},get invisible(){return t.invisible},get components(){return{Root:Jp,...t.components}},get componentsProps(){return{root:{...t.componentsProps?.root,...(!t.components?.Root||!Qn(t.components?.Root))&&{}}}},get classes(){return e.classes},get children(){return t.children}}))}}))});function em(n){const e=()=>n.container??document.body;return T(Ge,{get when(){return!n.disablePortal},get fallback(){return n.children},get children(){return T(nf,{get mount(){return e()},get children(){return n.children}})}})}function ti(n){return n&&n.ownerDocument||document}function Tr(n){return ti(n).defaultView||window}function tm(n){const e=n.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function nm(n){const e=ti(n);return e.body===n?Tr(n).innerWidth>e.documentElement.clientWidth:n.scrollHeight>n.clientHeight}function gr(n,e){e?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden")}function ll(n){return parseInt(Tr(n).getComputedStyle(n).paddingRight,10)||0}function cl(n,e,t=[],i){const r=[e,...t],s=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(n.children,o=>{r.indexOf(o)===-1&&s.indexOf(o.tagName)===-1&&gr(o,i)})}function ro(n,e){let t=-1;return n.some((i,r)=>e(i)?(t=r,!0):!1),t}function im(n,e){const t=[],i=n.container;if(!e.disableScrollLock){if(nm(i)){const l=tm(ti(i));t.push({value:i.style.paddingRight,property:"padding-right",el:i}),i.style.paddingRight=`${ll(i)+l}px`;const c=ti(i).querySelectorAll(".mui-fixed");[].forEach.call(c,u=>{t.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${ll(u)+l}px`})}const s=i.parentElement,o=Tr(i),a=s?.nodeName==="HTML"&&o.getComputedStyle(s).overflowY==="scroll"?s:i;t.push({value:a.style.overflow,property:"overflow",el:a},{value:a.style.overflowX,property:"overflow-x",el:a},{value:a.style.overflowY,property:"overflow-y",el:a}),a.style.overflow="hidden"}return()=>{t.forEach(({value:s,el:o,property:a})=>{s?o.style.setProperty(a,s):o.style.removeProperty(a)})}}function rm(n){const e=[];return[].forEach.call(n.children,t=>{t.getAttribute("aria-hidden")==="true"&&e.push(t)}),e}class sm{containers;modals;constructor(){this.modals=[],this.containers=[]}add(e,t){let i=this.modals.findIndex(o=>o.ref===e.ref);if(i!==-1)return i;i=this.modals.length,this.modals.push(e),gr(e.ref,!1);const r=rm(t);cl(t,e.ref,r,!0);const s=ro(this.containers,o=>o.container===t);return s!==-1?(this.containers[s].modals.push(e),i):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),i)}mount(e,t){const i=ro(this.containers,s=>!!s.modals.find(o=>o.ref===e.ref)),r=this.containers[i];r.restore||(r.restore=im(r,t))}remove(e){const t=this.modals.findIndex(s=>s.ref===e.ref);if(t===-1)return t;const i=ro(this.containers,s=>!!s.modals.find(o=>o.ref===e.ref)),r=this.containers[i];if(r.modals.splice(r.modals.findIndex(s=>s.ref===e.ref),1),this.modals.splice(t,1),r.modals.length===0)r.restore&&r.restore(),gr(e.ref,!0),cl(r.container,e.ref,r.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=r.modals[r.modals.length-1];gr(s.ref,!1)}return t}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1].ref===e.ref}}function om(n){return We("MuiModal",n)}He("MuiModal",["root","hidden"]);const am=Re()({name:"ModalUnstyled",propDefaults:({set:n})=>n({closeAfterTransition:!1,component:"div",components:{},componentsProps:{},disableAutoFocus:!1,disableEnforceFocus:!1,disableEscapeKeyDown:!1,disablePortal:!1,disableRestoreFocus:!1,disableScrollLock:!1,hideBackdrop:!1,keepMounted:!1,open:!1}),selfPropNames:["BackdropComponent","BackdropProps","children","classes","closeAfterTransition","components","componentsProps","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","open","transition"],utilityClass:om,slotClasses:n=>({root:["root",!n.open&&n.exited&&"hidden"]})});function lm(n){return typeof n=="function"?n():n}const cm=new sm,um=am.component(function({allProps:e,otherProps:t,classes:i,props:r}){const s=Fr(t),o=cm,a=()=>ti(s.ref),[l,c]=Ie(!0),u=()=>{o.mount(s,{disableScrollLock:r.disableScrollLock}),s.ref.scrollTop=0},d=()=>{const w=lm(r.container)||a().body;o.add(s,w),s.ref&&u()},f=()=>o.isTopModal(s),m=()=>o.remove(s);_t(m),Ke(w=>(w?(r.open&&d(),r.open&&f()?u():s.ref&&gr(s.ref,!0)):r.open?d():(!r.transition||!r.closeAfterTransition)&&m(),!1),!0);const x=w=>{w.target===w.currentTarget&&(r.onBackdropClick?.(w),r.onClose?.(w,"backdropClick"))},p=w=>{typeof t.onKeyDown=="function"&&t.onKeyDown?.(w),!(w.key!=="Escape"||!f())&&(r.disableEscapeKeyDown||(w.stopPropagation(),r.onClose?.(w,"escapeKeyDown")))},h=()=>r.components.Root||t.component,g=()=>r.componentsProps.root||{},b=()=>!r.keepMounted&&!r.open&&(!r.transition||l());return T(Du.Provider,{value:{get in(){return!!r.transition&&r.open},onEnter:()=>{r.transition&&c(!1)},onExited:()=>{r.transition&&(c(!0),r.closeAfterTransition&&m())}},get children(){return T(Ge,{get when(){return!b()},get children(){return T(em,{get container(){return r.container},get disablePortal(){return r.disablePortal},get children(){return T(Uo,ee(t,{get component(){return h()},role:"presentation"},g,()=>!Qn(h())&&{ownerState:e},{onKeyDown:p,get className(){return Ee(i.root,g().className,t.className)},ref:s,get children(){return[T(Ge,{get when(){return!r.hideBackdrop&&!!r.BackdropComponent},get children(){return T(Uo,ee({get component(){return r.BackdropComponent},get open(){return r.open},onClick:x},()=>r.BackdropProps??{}))}}),Qe(()=>r.children)]}}))}})}})}})}),ul=Re()({name:"MuiModal",selfPropNames:["BackdropComponent","BackdropProps"]}),dm=be("div",{name:"MuiModal",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,!t.open&&t.exited&&e.hidden]}})(({theme:n,ownerState:e})=>({position:"fixed",zIndex:n.zIndex.modal,right:0,bottom:0,top:0,left:0,...!e.open&&e.exited&&{visibility:"hidden"}})),fm=be(Qp,{name:"MuiModal",slot:"Backdrop",overridesResolver:(n,e)=>e.backdrop})({zIndex:-1}),Iu=ul.defineComponent(function(e){const t=ul.useThemeProps({props:e}),[,i]=Zt(t,["BackdropComponent","closeAfterTransition","children","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted"]),r=ee({BackdropComponent:fm,closeAfterTransition:!1,components:{},componentsProps:{},disableAutoFocus:!1,disableEnforceFocus:!1,disableEscapeKeyDown:!1,disablePortal:!1,disableRestoreFocus:!1,disableScrollLock:!1,hideBackdrop:!1,keepMounted:!1},t),[s]=Ie(!0),o={get closeAfterTransition(){return r.closeAfterTransition},get disableAutoFocus(){return r.disableAutoFocus},get disableEnforceFocus(){return r.disableEnforceFocus},get disableEscapeKeyDown(){return r.disableEscapeKeyDown},get disablePortal(){return r.disablePortal},get disableRestoreFocus(){return r.disableRestoreFocus},get disableScrollLock(){return r.disableScrollLock},get hideBackdrop(){return r.hideBackdrop},get keepMounted(){return r.keepMounted}},a=ee(t,o,{get exited(){return s()}});return T(um,ee({get components(){return ee({Root:dm},()=>r.components)},componentsProps:{get root(){return ee(()=>r.componentsProps.root||{},()=>!r.components.Root||!Qn(r.components.Root)&&{get ownerState(){return r.componentsProps.root?.ownerState||{}}}||{})}},get BackdropComponent(){return r.BackdropComponent}},i,{get classes(){return a.classes}},o,{get children(){return t.children}}))});function hm(n){return We("MuiPopover",n)}He("MuiPopover",["root","paper"]);function pm(n,e=166){let t;function i(...r){const s=()=>{n.apply(null,r)};clearTimeout(t),t=setTimeout(s,e)}return i.clear=()=>{clearTimeout(t)},i}const so=Re()({name:"MuiPopover",selfPropNames:["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","container","elevation","marginThreshold","onClose","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"],utilityClass:hm,slotClasses:()=>({root:["root"],paper:["paper"]})});function dl(n,e){let t=0;return typeof e=="number"?t=e:e==="center"?t=n.height/2:e==="bottom"&&(t=n.height),t}function fl(n,e){let t=0;return typeof e=="number"?t=e:e==="center"?t=n.width/2:e==="right"&&(t=n.width),t}function hl(n){return[n.horizontal,n.vertical].map(e=>typeof e=="number"?`${e}px`:e).join(" ")}function Xr(n){return typeof n=="function"?n():n}const mm=be(Iu,{name:"MuiPopover",slot:"Root",overridesResolver:(n,e)=>e.root})({}),gm=be(wu,{name:"MuiPopover",slot:"Paper",overridesResolver:(n,e)=>e.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),xm=so.defineComponent(function(e){const t=so.useThemeProps({props:e}),[,i]=Zt(t,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),r=ee({anchorOrigin:{vertical:"top",horizontal:"left"},anchorReference:"anchorEl",elevation:8,marginThreshold:16,PaperProps:{},transformOrigin:{vertical:"top",horizontal:"left"},TransitionComponent:$p,transitionDuration:"auto"},t),[,s]=Zt(ee(()=>t.TransitionProps||{}),["onEntering"]),o=Sr(()=>r.PaperProps.ref),a=ee(t,{get anchorOrigin(){return r.anchorOrigin},get anchorReference(){return r.anchorReference},get elevation(){return r.elevation},get marginThreshold(){return r.marginThreshold},get PaperProps(){return r.PaperProps},get transformOrigin(){return r.transformOrigin},get TransitionComponent(){return r.TransitionComponent},get transitionDuration(){return r.transitionDuration},TransitionProps:s}),l=so.useClasses(a),c=()=>{if(r.anchorReference==="anchorPosition")return t.anchorPosition;const h=Xr(t.anchorEl),b=(h&&h.nodeType===1?h:ti(o.current).body).getBoundingClientRect();return{top:b.top+dl(b,r.anchorOrigin.vertical),left:b.left+fl(b,r.anchorOrigin.horizontal)}},u=h=>({vertical:dl(h,r.transformOrigin.vertical),horizontal:fl(h,r.transformOrigin.horizontal)}),d=h=>{const g={width:h.offsetWidth,height:h.offsetHeight},b=u(g);if(r.anchorReference==="none")return{top:null,left:null,transformOrigin:hl(b)};const w=c();let C=w.top-b.vertical,M=w.left-b.horizontal;const R=C+g.height,P=M+g.width,_=Tr(Xr(t.anchorEl)),E=_.innerHeight-r.marginThreshold,B=_.innerWidth-r.marginThreshold;if(C<r.marginThreshold){const F=C-r.marginThreshold;C-=F,b.vertical+=F}else if(R>E){const F=R-E;C-=F,b.vertical+=F}if(M<r.marginThreshold){const F=M-r.marginThreshold;M-=F,b.horizontal+=F}else if(P>B){const F=P-B;M-=F,b.horizontal+=F}return{top:`${Math.round(C)}px`,left:`${Math.round(M)}px`,transformOrigin:hl(b)}},f=()=>{const h=o.current;if(!h)return;const g=d(h);g.top!==null&&(h.style.top=g.top),g.left!==null&&(h.style.left=g.left),h.style.transformOrigin=g.transformOrigin},m=()=>{t.TransitionProps?.onEntering&&t.TransitionProps?.onEntering(),f()};Ke(()=>{t.open&&f()}),typeof t.action=="function"&&t.action({updatePosition:()=>{t.open&&f()}}),Ke(Wc(()=>[t.anchorEl,t.open,f],()=>{if(!t.open)return;const h=pm(()=>{f()}),g=Tr(Xr(t.anchorEl));return g.addEventListener("resize",h),()=>{h.clear(),g.removeEventListener("resize",h)}}));const x=()=>{let h=t.transitionDuration;return t.transitionDuration==="auto"&&!t.TransitionComponent.muiSupportAuto&&(h=void 0),h},p=()=>t.container||(t.anchorEl?ti(Xr(t.anchorEl)).body:void 0);return T(mm,ee({BackdropProps:{invisible:!0},get className(){return Ee(l.root,t.className)},get container(){return p()},get open(){return t.open},ownerState:a},i,{get children(){return T(r.TransitionComponent,ee({appear:!0,get in(){return t.open},onEntering:m,get timeout(){return x()}},s,{get children(){return T(gm,ee({get elevation(){return r.elevation}},()=>r.PaperProps,{ref:o,get className(){return Ee(l.paper,r.PaperProps.className)},get children(){return t.children}}))}}))}}))}),ba=n=>{const[e,t]=Ie(null),i=a=>{t(a.currentTarget)},r=()=>{t(null)},s=()=>Boolean(e()),o=()=>s()?"simple-popover":void 0;return T(ei,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:i,get title(){return n.title},get children(){return[Qe(()=>Qe(()=>!!n.renderIcon,!0)()?n.renderIcon():T(Tu,{})),T(xm,{get id(){return o()},get open(){return s()},get anchorEl(){return e()},onClose:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},get children(){return T(Eu,{get children(){return n.children}})}})]}})},vm=ke('<svg><g><rect fill="none" height="24" width="24" y="0"></rect></g></svg>',6,!0),_m=ke('<svg><g><path d="M20,9V7c0-1.1-0.9-2-2-2h-3c0-1.66-1.34-3-3-3S9,3.34,9,5H6C4.9,5,4,5.9,4,7v2c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3v4 c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4c1.66,0,3-1.34,3-3C23,10.34,21.66,9,20,9z M7.5,11.5C7.5,10.67,8.17,10,9,10 s1.5,0.67,1.5,1.5S9.83,13,9,13S7.5,12.33,7.5,11.5z M16,17H8v-2h8V17z M15,13c-0.83,0-1.5-0.67-1.5-1.5S14.17,10,15,10 s1.5,0.67,1.5,1.5S15.83,13,15,13z"></path></g></svg>',6,!0);var bm=hn(()=>[vm.cloneNode(!0),_m.cloneNode(!0)],"SmartToy");const Fu=Jt({});function ym(n){return We("MuiButton",n)}const jr=He("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),Mm=Re()({name:"MuiButton",selfPropNames:["children","classes","color","disableElevation","disableFocusRipple","disabled","endIcon","fullWidth","href","size","startIcon","variant"],propDefaults:({set:n})=>{const e=Mt(Fu);return n({get color(){return e.color??"primary"},component:"button",get disabled(){return e.disabled??!1},get disableElevation(){return e.disableElevation??!1},get disableFocusRipple(){return e.disableFocusRipple??!1},get fullWidth(){return e.fullWidth??!1},get size(){return e.size??"medium"},get variant(){return e.variant??"text"}})},utilityClass:ym,slotClasses:n=>({root:["root",n.variant,`${n.variant}${Pe(n.color)}`,`size${Pe(n.size)}`,`${n.variant}Size${Pe(n.size)}`,n.color==="inherit"&&"colorInherit",n.disableElevation&&"disableElevation",n.fullWidth&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${Pe(n.size)}`],endIcon:["endIcon",`iconSize${Pe(n.size)}`]})}),Nu=n=>({...n.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},...n.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},...n.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}}),Sm=be(_a,{skipProps:Ir.filter(n=>n!=="classes"),name:"MuiButton",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[t.variant],e[`${t.variant}${Pe(t.color)}`],e[`size${Pe(t.size)}`],e[`${t.variant}Size${Pe(t.size)}`],t.color==="inherit"&&e.colorInherit,t.disableElevation&&e.disableElevation,t.fullWidth&&e.fullWidth]}})(({theme:n,ownerState:e})=>({...n.typography.button,minWidth:64,padding:"6px 16px",borderRadius:n.shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:pt(n.palette.text.primary,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},...e.variant==="text"&&e.color!=="inherit"&&{backgroundColor:pt(n.palette[e.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},...e.variant==="outlined"&&e.color!=="inherit"&&{border:`1px solid ${n.palette[e.color].main}`,backgroundColor:pt(n.palette[e.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},...e.variant==="contained"&&{backgroundColor:n.palette.grey.A100,boxShadow:n.shadows[4],"@media (hover: none)":{boxShadow:n.shadows[2],backgroundColor:n.palette.grey[300]}},...e.variant==="contained"&&e.color!=="inherit"&&{backgroundColor:n.palette[e.color].dark,"@media (hover: none)":{backgroundColor:n.palette[e.color].main}}},"&:active":{...e.variant==="contained"&&{boxShadow:n.shadows[8]}},[`&.${jr.focusVisible}`]:{...e.variant==="contained"&&{boxShadow:n.shadows[6]}},[`&.${jr.disabled}`]:{color:n.palette.action.disabled,...e.variant==="outlined"&&{border:`1px solid ${n.palette.action.disabledBackground}`},...e.variant==="outlined"&&e.color==="secondary"&&{border:`1px solid ${n.palette.action.disabled}`},...e.variant==="contained"&&{color:n.palette.action.disabled,boxShadow:n.shadows[0],backgroundColor:n.palette.action.disabledBackground}},...e.variant==="text"&&{padding:"6px 8px"},...e.variant==="text"&&e.color!=="inherit"&&{color:n.palette[e.color].main},...e.variant==="outlined"&&{padding:"5px 15px",border:`1px solid ${n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},...e.variant==="outlined"&&e.color!=="inherit"&&{color:n.palette[e.color].main,border:`1px solid ${pt(n.palette[e.color].main,.5)}`},...e.variant==="contained"&&{color:n.palette.getContrastText(n.palette.grey[300]),backgroundColor:n.palette.grey[300],boxShadow:n.shadows[2]},...e.variant==="contained"&&e.color!=="inherit"&&{color:n.palette[e.color].contrastText,backgroundColor:n.palette[e.color].main},...e.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},...e.size==="small"&&e.variant==="text"&&{padding:"4px 5px",fontSize:n.typography.pxToRem(13)},...e.size==="large"&&e.variant==="text"&&{padding:"8px 11px",fontSize:n.typography.pxToRem(15)},...e.size==="small"&&e.variant==="outlined"&&{padding:"3px 9px",fontSize:n.typography.pxToRem(13)},...e.size==="large"&&e.variant==="outlined"&&{padding:"7px 21px",fontSize:n.typography.pxToRem(15)},...e.size==="small"&&e.variant==="contained"&&{padding:"4px 10px",fontSize:n.typography.pxToRem(13)},...e.size==="large"&&e.variant==="contained"&&{padding:"8px 22px",fontSize:n.typography.pxToRem(15)},...e.fullWidth&&{width:"100%"}}),({ownerState:n})=>({...n.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${jr.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${jr.disabled}`]:{boxShadow:"none"}}})),wm=be("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.startIcon,e[`iconSize${Pe(t.size)}`]]}})(({ownerState:n})=>({display:"inherit",marginRight:8,marginLeft:-4,...n.size==="small"&&{marginLeft:-2},...Nu(n)})),Cm=be("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.endIcon,e[`iconSize${Pe(t.size)}`]]}})(({ownerState:n})=>({display:"inherit",marginRight:-4,marginLeft:8,...n.size==="small"&&{marginRight:-2},...Nu(n)})),ya=Mm.component(function({allProps:e,otherProps:t,props:i,classes:r}){const s=Mt(Fu);return T(Sm,ee({ownerState:e,get className(){return Ee(r.root,t.className,s.className)},get disabled(){return i.disabled},get focusRipple(){return!i.disableFocusRipple},get focusVisibleClassName(){return Ee(i.classes?.focusVisible,t.focusVisibleClassName)},get type(){return t.type},get href(){return i.href}},t,{get classes(){return i.classes},get children(){return[T(Ge,{get when(){return!!i.startIcon},get children(){return T(wm,{get className(){return r.startIcon},ownerState:e,get children(){return i.startIcon}})}}),Qe(()=>i.children),T(Ge,{get when(){return!!i.endIcon},get children(){return T(Cm,{get className(){return r.endIcon},ownerState:e,get children(){return i.endIcon}})}})]}}))}),Ma=Jt();function Tm(n){return We("MuiFormControl",n)}He("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const Em=Re()({name:"MuiFormControl",selfPropNames:["children","classes","color","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],propDefaults:({set:n})=>n({color:"primary",component:"div",disabled:!1,error:!1,fullWidth:!1,hiddenLabel:!1,margin:"none",required:!1,size:"medium",variant:"outlined"}),utilityClass:Tm,slotClasses:n=>({root:["root",n.margin!=="none"&&`margin${Pe(n.margin)}`,n.fullWidth&&"fullWidth"]})}),Am=be("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:n},e)=>({...e.root,...e[`margin${Pe(n.margin)}`],...n.fullWidth&&e.fullWidth})})(({ownerState:n})=>({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top",...n.margin==="normal"&&{marginTop:16,marginBottom:8},...n.margin==="dense"&&{marginTop:8,marginBottom:4},...n.fullWidth&&{width:"100%"}})),Sa=Em.component(function({allProps:e,classes:t,otherProps:i,props:r}){const[s,o]=Ie(!1),[a,l]=Ie(!1);Ke(()=>{r.disabled&&a()&&l(!1)});const c=()=>r.focused!==void 0&&!r.disabled?r.focused:a();let u;return T(Ma.Provider,{value:{get adornedStart(){return!1},setAdornedStart:()=>{},get margin(){return r.margin},get color(){return r.color},get disabled(){return r.disabled},get error(){return r.error},get filled(){return s()},get focused(){return c()},get fullWidth(){return r.fullWidth},get hiddenLabel(){return r.hiddenLabel},get size(){return r.size},onBlur:()=>{l(!1)},onEmpty:()=>{o(!1)},onFilled:()=>{o(!0)},onFocus:()=>{l(!0)},registerEffect:u,get required(){return r.required},get variant(){return r.variant}},get children(){return T(Am,ee(i,{ownerState:e,get className(){return Ee(t.root,i.className)},get children(){return r.children}}))}})});function Nr(){return Mt(Ma)}function zr(n){const e=()=>n.states.reduce((i,r)=>(i[r]=n.props[r],n.muiFormControl&&typeof n.props[r]>"u"&&(i[r]=n.muiFormControl[r]),i),{}),t=da({});return na(()=>{const i=e();ji(()=>{for(const s in i)t[s]!==i[s]&&(t[s]=i[s]);const r=Object.keys(i);for(const s in t)r.includes(s)||delete t[s]})}),t}const Lm=Re()({name:"MuiGlobalStyles",selfPropNames:["styles"]}),Rm=Lm.component(function({props:e}){return xu(()=>({"@global":e.styles||{}})),[]});function Dm(n){const e=n.controlled()!==void 0,[t,i]=Ie(n.default()),r=qe(()=>e?n.controlled():t());return e&&Ke(()=>{i(()=>r())}),[r,o=>{e||i(o)}]}function Pm(n){return We("MuiInputBase",n)}const Gi=He("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);function pl(n){return n!=null&&!(Array.isArray(n)&&n.length===0)}function Im(n,e=!1){return n&&(pl(n.value)&&n.value!==""||e&&pl(n.defaultValue)&&n.defaultValue!=="")}const ml=Re()({name:"MuiInputBase",propDefaults:({set:n})=>n({components:{},componentsProps:{},fullWidth:!1,inputComponent:"input",inputProps:{},multiline:!1,type:"text",disableInjectingGlobalStyles:!1}),selfPropNames:["aria-describedby","autoComplete","autoFocus","classes","color","components","componentsProps","defaultValue","disableInjectingGlobalStyles","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","required","rows","size","startAdornment","type","value"],utilityClass:Pm,autoCallUseClasses:!1,slotClasses:n=>({root:["root",`color${Pe(n.color)}`,!!n.disabled&&"disabled",!!n.error&&"error",!!n.fullWidth&&"fullWidth",n.focused&&"focused",!!n.formControl&&"formControl",n.size==="small"&&"sizeSmall",n.multiline&&"multiline",!!n.startAdornment&&"adornedStart",!!n.endAdornment&&"adornedEnd",!!n.hiddenLabel&&"hiddenLabel"],input:["input",!!n.disabled&&"disabled",n.type==="search"&&"inputTypeSearch",n.multiline&&"inputMultiline",n.size==="small"&&"inputSizeSmall",!!n.hiddenLabel&&"inputHiddenLabel",!!n.startAdornment&&"inputAdornedStart",!!n.endAdornment&&"inputAdornedEnd"]})}),Bs=(n,e)=>{const t=n.ownerState;return[e.root,!!t.formControl&&e.formControl,!!t.startAdornment&&e.adornedStart,!!t.endAdornment&&e.adornedEnd,!!t.error&&e.error,t.size==="small"&&e.sizeSmall,t.multiline&&e.multiline,t.color&&e[`color${Pe(t.color)}`],!!t.fullWidth&&e.fullWidth,!!t.hiddenLabel&&e.hiddenLabel]},Us=(n,e)=>{const t=n.ownerState;return[e.input,t.size==="small"&&e.inputSizeSmall,t.multiline&&e.inputMultiline,t.type==="search"&&e.inputTypeSearch,!!t.startAdornment&&e.inputAdornedStart,!!t.endAdornment&&e.inputAdornedEnd,!!t.hiddenLabel&&e.inputHiddenLabel]},Vs=be("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Bs})(({theme:n,ownerState:e})=>({...n.typography.body1,color:n.palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${Gi.disabled}`]:{color:n.palette.text.disabled,cursor:"default"},...e.multiline&&{padding:"4px 0 5px",...e.size==="small"&&{paddingTop:1}},...e.fullWidth&&{width:"100%"}})),Gs=be("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Us})(({theme:n,ownerState:e})=>{const t=n.palette.mode==="light",i={color:"currentColor",opacity:t?.42:.5,transition:n.transitions.create("opacity",{duration:n.transitions.duration.shorter})},r={opacity:"0 !important"},s={opacity:t?.42:.5};return{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":i,"&::-moz-placeholder":i,"&:-ms-input-placeholder":i,"&::-ms-input-placeholder":i,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${Gi.formControl} &`]:{"&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus::-webkit-input-placeholder":s,"&:focus::-moz-placeholder":s,"&:focus:-ms-input-placeholder":s,"&:focus::-ms-input-placeholder":s},[`&.${Gi.disabled}`]:{opacity:1,WebkitTextFillColor:n.palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"},...e.size==="small"&&{paddingTop:1},...e.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},...e.type==="search"&&{MozAppearance:"textfield"}}}),Fm=()=>T(Rm,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),wa=ml.component(function({allProps:e,otherProps:t,props:i}){const r=()=>i.inputProps.value!=null?i.inputProps.value:i.value,s=(r()??null)!==null,[o,a]=Dm({controlled:()=>r(),default:()=>i.defaultValue,name:"InputBase"}),l=Sr({ref:A=>{typeof i.inputRef=="function"&&i.inputRef(A)}});let c,u=!1;Oi(()=>{l.ref.addEventListener("input",A=>{const N=l.ref.value;c=l.ref.selectionStart??N.length,u=!1,typeof i.inputProps.onChange=="function"&&i.inputProps.onChange(A),a(N),typeof i.onChange=="function"&&i.onChange(A,N),s&&!u&&(l.ref.value=o()??"")})}),Ke(A=>{if(s||A){u=!0;const N=o();if(typeof N=="string"){const W=c??N.length;N!==l.ref.value&&(l.ref.value=N),l.ref.selectionStart!==W&&l.ref.setSelectionRange(W,W)}}return!1},!0);const[d,f]=Ie(!1),m=Nr(),x=zr({props:e,muiFormControl:m,states:["color","disabled","error","hiddenLabel","size","required","filled"]}),p=ee(x,{get focused(){return m?m.focused:d()}});Ke(()=>{!m&&i.disabled&&d()&&(f(!1),typeof i.onBlur=="function"&&i.onBlur?.(null))});const h=()=>m&&m.onFilled,g=()=>m&&m.onEmpty,b=A=>{Im(A)?h()?.():g()?.()};Ct(()=>{s&&b({value:o()})}),Oi(()=>{b(l.ref)});const w=()=>i.multiline&&i.inputComponent==="input",C=()=>{const A=i.inputComponent;return w(),A},M=qe(()=>{let A=i.inputProps;return w()&&(i.rows?A={type:void 0,minRows:i.rows,maxRows:i.rows,...A}:A={type:void 0,maxRows:i.maxRows,minRows:i.minRows,...A}),ee(A,()=>i.componentsProps.input||{})});Ke(()=>{m?.setAdornedStart(Boolean(i.startAdornment))});const R=ee(e,{get color(){return p.color||"primary"},get disabled(){return p.disabled},get error(){return p.error},get focused(){return p.focused},get formControl(){return m},get hiddenLabel(){return p.hiddenLabel},get size(){return p.size}}),P=ml.useClasses(R),_=()=>i.components.Root||Vs,E=()=>i.componentsProps.root||{},B=()=>i.components.Input||Gs,F=ee(R,()=>E().ownerState||{}),K=ee(R,()=>M().ownerState||{}),Z=ee(p,{get startAdornment(){return i.startAdornment}}),I=qe(()=>i.renderSuffix?.(Z));return[Qe((()=>{const A=Qe(()=>!i.disableInjectingGlobalStyles,!0);return()=>A()&&Fm()})()),T(Vi,ee(E,t,{get component(){return _()}},()=>!Qn(_())&&{ownerState:F},{onClick:A=>{l.ref&&A.currentTarget===A.target&&l.ref.focus(),typeof t.onClick=="function"&&t.onClick(A)},get className(){return Ee(P.root,E().className,t.className)},get children(){return[Qe(()=>i.startAdornment),T(Ma.Provider,{value:void 0,get children(){return T(Vi,ee({get component(){return B()},ownerState:R,get["aria-invalid"](){return p.error},get["aria-describedby"](){return i["aria-describedby"]},get autocomplete(){return i.autoComplete},get autofocus(){return i.autoFocus},get disabled(){return p.disabled},get id(){return i.id},onAnimationStart:A=>{b(A.animationName==="mui-auto-fill-cancel"?l.ref:{value:"x"})},get name(){return i.name},get placeholder(){return i.placeholder},get readOnly(){return i.readOnly},get required(){return p.required},get rows(){return i.rows},get onKeyDown(){return i.onKeyDown},get onKeyUp(){return i.onKeyUp},get type(){return i.type}},M,()=>!Qn(B())&&{as:C(),ownerState:K},{ref:l,get className(){return Ee(P.input,M().className)},onBlur:A=>{i.onBlur?.(A),typeof i.inputProps.onBlur=="function"&&i.inputProps.onBlur(A),m&&m.onBlur?m.onBlur():f(!1)},onInput:A=>{if(!s){const N=A.target||l.ref;if(N==null)throw new Error("MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.");b({value:N.value})}},onFocus:A=>{if(p.disabled){A.stopPropagation();return}typeof i.onFocus=="function"&&i.onFocus(A),typeof i.inputProps.onFocus=="function"&&i.inputProps.onFocus(A),m&&m.onFocus?m.onFocus():f(!0)}}))}}),Qe(()=>i.endAdornment),Qe(()=>I())]}}))]});function Nm(n){return We("MuiFilledInput",n)}const ci={...Gi,...He("MuiFilledInput",["root","underline","input"])},zm=Re()({name:"MuiFilledInput",propDefaults:({set:n})=>n({components:{},fullWidth:!1,inputComponent:"input",multiline:!1,type:"text",hiddenLabel:!1}),selfPropNames:["classes","disableUnderline","hiddenLabel"],utilityClass:Nm,slotClasses:n=>({root:["root",!n.disableUnderline&&"underline"],input:["input"]})}),km=be(Vs,{name:"MuiFilledInput",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[...Bs(n,e),!t.disableUnderline&&e.underline]}})(({theme:n,ownerState:e})=>{const t=n.palette.mode==="light",i=t?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",r=t?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)";return{position:"relative",backgroundColor:r,borderTopLeftRadius:n.shape.borderRadius,borderTopRightRadius:n.shape.borderRadius,transition:n.transitions.create("background-color",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),"&:hover":{backgroundColor:t?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)","@media (hover: none)":{backgroundColor:r}},[`&.${ci.focused}`]:{backgroundColor:r},[`&.${ci.disabled}`]:{backgroundColor:t?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)"},...!e.disableUnderline&&{"&:after":{borderBottom:`2px solid ${n.palette[e.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${ci.focused}:after`]:{transform:"scaleX(1)"},[`&.${ci.error}:after`]:{borderBottomColor:n.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:`1px solid ${i}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:n.transitions.create("border-bottom-color",{duration:n.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${ci.disabled}):before`]:{borderBottom:`1px solid ${n.palette.text.primary}`},[`&.${ci.disabled}:before`]:{borderBottomStyle:"dotted"}},...e.startAdornment&&{paddingLeft:12},...e.endAdornment&&{paddingRight:12},...e.multiline&&{padding:"25px 12px 8px",...e.size==="small"&&{paddingTop:21,paddingBottom:4},...e.hiddenLabel&&{paddingTop:16,paddingBottom:17}}}}),Om=be(Gs,{name:"MuiFilledInput",slot:"Input",overridesResolver:Us})(({theme:n,ownerState:e})=>({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12,"&:-webkit-autofill":{WebkitBoxShadow:n.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:n.palette.mode==="light"?null:"#fff",caretColor:n.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},...e.size==="small"&&{paddingTop:21,paddingBottom:4},...e.hiddenLabel&&{paddingTop:16,paddingBottom:17},...e.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},...e.startAdornment&&{paddingLeft:0},...e.endAdornment&&{paddingRight:0},...e.hiddenLabel&&e.size==="small"&&{paddingTop:8,paddingBottom:9}})),Bm=zm.component(function({allProps:e,classes:t,otherProps:i,props:r}){const s=qe(()=>{const a={root:{ownerState:e},input:{ownerState:e}};return i.componentsProps?Dr(i.componentsProps,a):a}),o=ee(()=>r.classes||{},t);return T(wa,ee(i,{get components(){return{Root:km,Input:Om,...i.components||{}}},get componentsProps(){return s()},classes:o}))});function Um(n){return We("MuiFormHelperText",n)}const gl=He("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),Vm=ke('<span class="notranslate">&#8203;</span>'),Gm=Re()({name:"MuiFormHelperText",propDefaults:({set:n})=>n({component:"p"}),selfPropNames:["children","classes","disabled","error","filled","focused","margin","required","variant"],utilityClass:Um,slotClasses:n=>({root:["root",!!n.disabled&&"disabled",!!n.error&&"error",!!n.size&&`size${Pe(n.size)}`,n.contained&&"contained",!!n.focused&&"focused",!!n.filled&&"filled",!!n.required&&"required"]})}),Wm=be("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.size&&e[`size${Pe(t.size)}`],t.contained&&e.contained,t.filled&&e.filled]}})(({theme:n,ownerState:e})=>({color:n.palette.text.secondary,...n.typography.caption,textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${gl.disabled}`]:{color:n.palette.text.disabled},[`&.${gl.error}`]:{color:n.palette.error.main},...e.size==="small"&&{marginTop:4},...e.contained&&{marginLeft:14,marginRight:14}})),Hm=Gm.component(function({allProps:e,classes:t,otherProps:i,props:r}){const s=Nr(),o=zr({props:e,muiFormControl:s,states:["variant","size","disabled","error","filled","focused","required"]}),a=ee(e,{get contained(){return o.variant==="filled"||o.variant==="outlined"},get variant(){return o.variant},get size(){return o.size},get disabled(){return o.disabled},get error(){return o.error},get filled(){return o.filled},get focused(){return o.focused},get required(){return o.required}}),l=Rr(()=>r.children);return T(Wm,ee(i,{get as(){return i.component},ownerState:a,get className(){return Ee(t.root,i.className)},get children(){return Qe(()=>l()===" ",!0)()?Vm.cloneNode(!0):l()}}))});function $m(n){return We("MuiInput",n)}const Yr={...Gi,...He("MuiInput",["root","underline","input"])},qm=Re()({name:"MuiInput",propDefaults:({set:n})=>n({components:{},fullWidth:!1,inputComponent:"input",multiline:!1,type:"text"}),selfPropNames:["classes","disableUnderline"],utilityClass:$m,slotClasses:n=>({root:["root",!n.disableUnderline&&"underline"],input:["input"]})}),Xm=be(Vs,{skipProps:Ir.filter(n=>n!=="classes"),name:"MuiInput",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[...Bs(n,e),!t.disableUnderline&&e.underline]}})(({theme:n,ownerState:e})=>{const i=n.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return{position:"relative",...e.formControl&&{"label + &":{marginTop:16}},...!e.disableUnderline&&{"&:after":{borderBottom:`2px solid ${n.palette[e.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Yr.focused}:after`]:{transform:"scaleX(1)"},[`&.${Yr.error}:after`]:{borderBottomColor:n.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:`1px solid ${i}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:n.transitions.create("border-bottom-color",{duration:n.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Yr.disabled}):before`]:{borderBottom:`2px solid ${n.palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${i}`}},[`&.${Yr.disabled}:before`]:{borderBottomStyle:"dotted"}}}}),jm=be(Gs,{name:"MuiInput",slot:"Input",overridesResolver:Us})({}),Ym=qm.component(function({classes:e,otherProps:t,props:i}){const r=qe(()=>{const a={root:{ownerState:{disableUnderline:i.disableUnderline}}};return t.componentsProps?Dr(t.componentsProps,a):a}),s=ee(e,()=>i.classes||{});return T(wa,ee(t,{get components(){return{Root:Xm,Input:jm,...t.components||{}}},get componentsProps(){return r()},classes:s}))});function Km(n){return We("MuiFormLabel",n)}const xr=He("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),xl=Re()({name:"MuiFormLabel",propDefaults:({set:n})=>n({component:"label"}),selfPropNames:["children","classes","color","disabled","error","filled","focused","required"],autoCallUseClasses:!1,utilityClass:Km,slotClasses:n=>({root:["root",`color${Pe(n.color)}`,!!n.disabled&&"disabled",!!n.error&&"error",!!n.filled&&"filled",!!n.focused&&"focused",!!n.required&&"required"],asterisk:["asterisk",!!n.error&&"error"]})}),Zm=be("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:n},e)=>({...e.root,...n.color==="secondary"&&e.colorSecondary,...n.filled&&e.filled})})(({theme:n,ownerState:e})=>({color:n.palette.text.secondary,...n.typography.body1,lineHeight:"1.4375em",padding:0,position:"relative",[`&.${xr.focused}`]:{color:n.palette[e.color].main},[`&.${xr.disabled}`]:{color:n.palette.text.disabled},[`&.${xr.error}`]:{color:n.palette.error.main}})),Jm=be("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(n,e)=>e.asterisk})(({theme:n})=>({[`&.${xr.error}`]:{color:n.palette.error.main}})),Qm=xl.component(function({allProps:e,otherProps:t,props:i}){const r=Nr(),s=zr({props:e,muiFormControl:r,states:["color","required","focused","disabled","error","filled"]}),o=ee(e,{get color(){return s.color||"primary"},get disabled(){return s.disabled},get error(){return s.error},get filled(){return s.filled},get focused(){return s.focused},get required(){return s.required}}),a=xl.useClasses(o);return T(Zm,ee(t,{get as(){return t.component},ownerState:o,get className(){return Ee(a.root,t.className)},get children(){return[Qe(()=>i.children),T(Ge,{get when(){return s.required},get children(){return T(Jm,{ownerState:o,"aria-hidden":!0,get className(){return a.asterisk},get children(){return["\u2009","*"]}})}})]}}))});function eg(n){return We("MuiInputLabel",n)}He("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const vl=Re()({name:"MuiInputLabel",propDefaults:({set:n})=>n({disableAnimation:!1}),selfPropNames:["children","classes","color","disableAnimation","disabled","error","focused","margin","required","shrink","variant"],autoCallUseClasses:!1,utilityClass:eg,slotClasses:n=>({root:["root",!!n.formControl&&"formControl",!n.disableAnimation&&"animated",!!n.shrink&&"shrink",n.size==="small"&&"sizeSmall",!!n.variant&&n.variant],asterisk:[!!n.required&&"asterisk"]})}),tg=be(Qm,{skipProps:Ir.filter(n=>n!=="classes"),name:"MuiInputLabel",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[{[`& .${xr.asterisk}`]:e.asterisk},e.root,t.formControl&&e.formControl,t.size==="small"&&e.sizeSmall,t.shrink&&e.shrink,!t.disableAnimation&&e.animated,e[t.variant]]}})(({theme:n,ownerState:e})=>({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",...e.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},...e.size==="small"&&{transform:"translate(0, 17px) scale(1)"},...e.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},...!e.disableAnimation&&{transition:n.transitions.create(["color","transform","max-width"],{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut})},...e.variant==="filled"&&{zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)",...e.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},...e.shrink&&{userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)",...e.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"}}},...e.variant==="outlined"&&{zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)",...e.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},...e.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 24px)",transform:"translate(14px, -9px) scale(0.75)"}}})),ng=vl.component(function({allProps:e,props:t}){const i=Nr(),[,r]=Zt(e,["disableAnimation","margin","shrink","variant"]),s=()=>{let u=t.shrink;return typeof u>"u"&&i&&(u=i.filled||i.focused||i.adornedStart),u},o=zr({props:e,muiFormControl:i,states:["size","variant","required"]}),a=ee(e,{get formControl(){return i},get shrink(){return s()},get size(){return o.size},get variant(){return o.variant},get required(){return o.required}}),l=vl.useClasses(a),c=ee(l,()=>t.classes||{});return T(tg,ee(r,{get["data-shrink"](){return s()},ownerState:a,classes:c}))}),ig=ke("<span></span>"),rg=ke('<span class="notranslate">&#8203;</span>'),sg=Re()({name:"MuiNotchedOutline",selfPropNames:["disabled","error","focused","label","notched"]}),og=be("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),ag=be("legend")(({ownerState:n,theme:e})=>({float:"unset",...!n.withLabel&&{padding:0,lineHeight:"11px",transition:e.transitions.create("width",{duration:150,easing:e.transitions.easing.easeOut})},...n.withLabel&&{display:"block",width:"auto",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:e.transitions.create("max-width",{duration:50,easing:e.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block"},...n.notched&&{maxWidth:"100%",transition:e.transitions.create("max-width",{duration:100,easing:e.transitions.easing.easeOut,delay:50})}}})),lg=sg.component(function({allProps:e,otherProps:t,props:i}){const r=()=>i.label!=null&&i.label!=="",s=ee(e,{get withLabel(){return r()}});return T(og,ee(t,{"aria-hidden":!0,get className(){return t.className},ownerState:s,get children(){return T(ag,{ownerState:s,get children(){return T(Ge,{get when(){return r()},get fallback(){return rg.cloneNode(!0)},get children(){const o=ig.cloneNode(!0);return It(o,()=>i.label),o}})}})}}))});function cg(n){return We("MuiOutlinedInput",n)}const An={...Gi,...He("MuiOutlinedInput",["root","notchedOutline","input"])},ug=Re()({name:"MuiOutlinedInput",propDefaults:({set:n})=>n({components:{},fullWidth:!1,inputComponent:"input",multiline:!1,type:"text"}),selfPropNames:["classes","label","notched"],utilityClass:cg,slotClasses:()=>({root:["root"],notchedOutline:["notchedOutline"],input:["input"]})}),dg=be(Vs,{skipProps:Ir.filter(n=>n!=="classes"),name:"MuiOutlinedInput",slot:"Root",overridesResolver:Bs})(({theme:n,ownerState:e})=>{const t=n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{position:"relative",borderRadius:n.shape.borderRadius,[`&:hover .${An.notchedOutline}`]:{borderColor:n.palette.text.primary},"@media (hover: none)":{[`&:hover .${An.notchedOutline}`]:{borderColor:t}},[`&.${An.focused} .${An.notchedOutline}`]:{borderColor:n.palette[e.color].main,borderWidth:2},[`&.${An.error} .${An.notchedOutline}`]:{borderColor:n.palette.error.main},[`&.${An.disabled} .${An.notchedOutline}`]:{borderColor:n.palette.action.disabled},...e.startAdornment&&{paddingLeft:14},...e.endAdornment&&{paddingRight:14},...e.multiline&&{padding:"16.5px 14px",...e.size==="small"&&{padding:"8.5px 14px"}}}}),fg=be(lg,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(n,e)=>e.notchedOutline})(({theme:n})=>({borderColor:n.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"})),hg=be(Gs,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:Us})(({theme:n,ownerState:e})=>({padding:"16.5px 14px","&:-webkit-autofill":{WebkitBoxShadow:n.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:n.palette.mode==="light"?null:"#fff",caretColor:n.palette.mode==="light"?null:"#fff",borderRadius:"inherit"},...e.size==="small"&&{padding:"8.5px 14px"},...e.multiline&&{padding:0},...e.startAdornment&&{paddingLeft:0},...e.endAdornment&&{paddingRight:0}})),pg=ug.component(function({allProps:e,classes:t,otherProps:i,props:r}){const s=Nr(),o=zr({props:e,muiFormControl:s,states:["required"]}),a=qe(()=>{const c=r.label;return c!=null&&c!==""&&o.required?[c,"\xA0","*"]:c}),l=ee(t,()=>r.classes||{},{notchedOutline:null});return T(wa,ee({renderSuffix:c=>T(fg,{get className(){return t.notchedOutline},get label(){return a()},get notched(){return Qe(()=>typeof r.notched<"u",!0)()?r.notched:Boolean(c.startAdornment||c.filled||c.focused)}})},i,{get components(){return{Root:dg,Input:hg,...i.components||{}}},classes:l}))});function mg(n){return We("MuiTextField",n)}He("MuiTextField",["root"]);function gg(n){return qe(()=>n?.()??`mui-${Id()}`)}const xg=Re()({name:"MuiTextField",propDefaults:({set:n})=>n({autoFocus:!1,color:"primary",disabled:!1,error:!1,fullWidth:!1,multiline:!1,required:!1,select:!1,variant:"outlined"}),selfPropNames:["FormHelperTextProps","InputLabelProps","InputProps","autoComplete","autoFocus","children","classes","color","defaultValue","disabled","error","fullWidth","helperText","id","inputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","size","type","value","variant"],utilityClass:mg,slotClasses:()=>({root:["root"]})}),vg={standard:Ym,filled:Bm,outlined:pg},_g=be(Sa,{name:"MuiTextField",slot:"Root",overridesResolver:(n,e)=>e.root})({}),Ca=xg.component(function({allProps:e,classes:t,otherProps:i,props:r}){const s=qe(()=>{const m={};return r.variant==="outlined"&&(r.InputLabelProps&&typeof r.InputLabelProps.shrink<"u"&&(m.notched=r.InputLabelProps.shrink),m.label=r.label),m}),o=gg(()=>r.id),a=()=>r.helperText&&o()?`${o()}-helper-text`:void 0,l=()=>r.label&&o()?`${o()}-label`:void 0,c=()=>vg[r.variant],u=()=>T(Vi,ee({get component(){return c()},get["aria-describedby"](){return a()},get autoComplete(){return r.autoComplete},get autoFocus(){return r.autoFocus},get defaultValue(){return r.defaultValue},get fullWidth(){return r.fullWidth},get multiline(){return r.multiline},get name(){return r.name},get rows(){return r.rows},get maxRows(){return r.maxRows},get minRows(){return r.minRows},get type(){return r.type},get value(){return r.value},get id(){return o()},get inputRef(){return r.inputRef},get onBlur(){return r.onBlur},get onChange(){return r.onChange},get onFocus(){return r.onFocus},get placeholder(){return r.placeholder},get inputProps(){return r.inputProps}},s,()=>r.InputProps||{})),d=()=>{const m=r.label;return m!=null&&m!==""&&T(ng,ee({get htmlFor(){return o()},get id(){return l()}},()=>r.InputLabelProps||{},{children:m}))},f=()=>{const m=r.helperText;if(m)return T(Hm,ee({get id(){return a()}},()=>r.FormHelperTextProps||{},{children:m}))};return T(_g,ee({get className(){return Ee(t.root,i.className)},get disabled(){return r.disabled},get error(){return r.error},get fullWidth(){return r.fullWidth},get required(){return r.required},get color(){return r.color},get variant(){return r.variant},ownerState:e},i,{get children(){return[Qe(()=>d()),Qe(()=>u()),Qe(()=>f())]}}))}),bg=ke('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),yg=ke('<svg><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>',4,!0);var Mg=hn(()=>[bg.cloneNode(!0),yg.cloneNode(!0)],"Close");const Sg=ke("<h1></h1>"),Ta=n=>{const e=Ki();return T(Iu,{get open(){return n.open},get children(){return T(Ot,{get sx(){return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:n.width||400,height:n.height||400,bgcolor:e.palette.background.paper,border:"2px solid #000",boxShadow:"24px",p:4,display:"flex",flexDirection:"column"}},get children(){return[T(Ot,{sx:{display:"flex",flexDirection:"row"},get children(){return[T(Ot,{sx:{flexGrow:1},get children(){const t=Sg.cloneNode(!0);return It(t,()=>n.title),t}}),T(Ot,{get children(){return T(ei,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},title:"Close",get onClick(){return n.close},get children(){return T(Mg,{})}})}})]}}),T(Ot,{sx:{overflow:"auto"},get children(){return n.children}})]}})}})};class _l{callbacks=[];get subscriptionCount(){return this.callbacks.filter(e=>e!==void 0).length}subscribe(e){const t=this.callbacks.findIndex(i=>!i);return t!==-1?(this.callbacks[t]=e,new bl(this,t)):(this.callbacks.push(e),new bl(this,this.callbacks.length-1))}unsubscribe(e){if(this.callbacks.length<=e||!this.callbacks[e])throw new Error("Invalid index passed to unsubscribe()");this.callbacks[e]=void 0}invoke(...e){for(const t of this.callbacks)t&&t(...e)}}class bl{constructor(e,t){this.event=e,this.deregistrationIndex=t}unsubscribe(){if(this.deregistrationIndex===void 0)throw new Error("Already unregistered");this.event.unsubscribe(this.deregistrationIndex),this.deregistrationIndex=void 0}}class wg{topicCallbacks={};serviceCallbacks={};onStatusChange=new _l;get url(){return this.socket.url}constructor(e){console.info(`Opening rosbridge connection to ${e}`),this.socket=new WebSocket(e),this.socket.onopen=()=>{console.info(`ROSBridge connection to ${e} is open`),this.onStatusChange.invoke("Connected")},this.socket.onclose=()=>{this.onStatusChange.invoke("Not Connected"),console.info(`ROSBridge connection to ${e} has been closed`)},this.socket.onerror=t=>{this.onStatusChange.invoke("Not Connected"),console.error(`Websocket error: ${t}`)},this.socket.onmessage=t=>{const i=JSON.parse(t.data);switch(i.op){case"publish":i.topic in this.topicCallbacks?(this.topicCallbacks[i.topic].invoke(i.msg),this.topicCallbacks[i.topic].subscriptionCount===0&&this.sendMessage({op:"unsubscribe",topic:i.topic})):this.sendMessage({op:"unsubscribe",topic:i.topic});break;case"service_response":if(i.service in this.serviceCallbacks)for(const r of this.serviceCallbacks[i.service])r(i.values);else console.error("Received service response for service not called.");break}}}close(){this.socket.close()}sendMessage(e){this.socket.send(JSON.stringify(e))}subscribe(e,t){return(!(e in this.topicCallbacks)||this.topicCallbacks[e].subscriptionCount===0)&&(this.sendMessage({op:"subscribe",topic:e}),this.topicCallbacks[e]=new _l),this.topicCallbacks[e].subscribe(t)}callService(e,t,i){e in this.serviceCallbacks?this.serviceCallbacks[e].push(t):this.serviceCallbacks[e]=[t],this.sendMessage({op:"call_service",service:e,args:i})}}function Ea(n,e){return Object.keys(n.topics).filter(t=>e.indexOf(n.topics[t])!==-1)}const kr=Jt();function Cg(n){const[e,t]=lu({});return T(kr.Provider,{value:{connections:e,setConnections:t,connect:i=>{const r=new wg(i);return r.url in e&&e[r.url].rosbridgeConnection.close(),t(r.url,{rosbridgeConnection:r,status:"Connecting",topics:{}}),r.onStatusChange.subscribe(s=>{r.url in e&&(t(r.url,"status",s),s==="Connected"&&r.callService("/rosapi/topics",o=>{const a={};for(let l=0;l<o.topics.length;++l)a[o.topics[l]]=o.types[l];t(r.url,"topics",a)}))}),r.url},disconnect:i=>{const r=e[i];r&&r.rosbridgeConnection.close()},remove:i=>{const r=e[i];r&&(r.rosbridgeConnection.close(),t(i,void 0))}},get children(){return n.children}})}function Ws(){return Mt(kr)}function zu(n,e){const[t,i]=Ie(void 0),r=n.rosbridgeConnection.subscribe(e,i);return _t(()=>r.unsubscribe()),t}const ku=Jt({add:()=>console.error("Invalid context"),robots:()=>[],remove:()=>console.error("Invalid context"),update:()=>console.error("Invalid context")});function Tg(n){const[e,t]=Ie([]);return T(ku.Provider,{value:{robots:e,add:i=>{t([...e(),i])},remove:i=>t(e().filter((r,s)=>i!==s)),update:(i,r)=>{const s=e();s.splice(i,1,r),t([...s])}},get children(){return n.children}})}function Aa(){return Mt(ku)}function Fi(){return Aa().robots()||[]}function Eg(n){const e=Fi();return n<e.length?e[n]:void 0}const yl=ke("<select><option></option></select>"),Ml=ke("<option></option>"),Ag=n=>{const e=Mt(kr),t=Aa(),i=()=>typeof n.index=="number"?Eg(n.index):void 0,[r,s]=Ie(i()?.name),[o,a]=Ie(i()?.connection),[l,c]=Ie(i()?.poseTopic);return Ke(()=>{const u=i();s(u?.name),a(u?.connection),c(u?.poseTopic)}),T(Ta,{get open(){return typeof n.index<"u"},title:"Robot Details",get close(){return n.close},get children(){return T(Sa,{get children(){return[T(Ca,{label:"Name",variant:"standard",get value(){return r()||""},onChange:(u,d)=>s(d)}),(()=>{const u=yl.cloneNode(!0);return u.firstChild,u.addEventListener("change",d=>a(d.currentTarget.value)),It(u,T(wn,{get each(){return Object.values(e?.connections||{})},children:d=>(()=>{const f=Ml.cloneNode(!0);return It(f,()=>d.rosbridgeConnection.url),Ct(()=>f.selected=d.rosbridgeConnection.url===o()),f})()}),null),u})(),(()=>{const u=yl.cloneNode(!0);return u.firstChild,u.addEventListener("change",d=>c(d.currentTarget.value)),It(u,T(Ge,{get when(){return e?.connections[o()||""]},children:d=>T(wn,{get each(){return Ea(d,["geometry_msgs/PointStamped","geometry_msgs/PoseStamped"])},children:f=>(()=>{const m=Ml.cloneNode(!0);return It(m,f),Ct(()=>m.selected=f===l()),m})()})}),null),u})(),T(ya,{variant:"text",onClick:()=>{t.update(n.index,{name:r(),connection:o(),poseTopic:l()}),n.close()},children:"Save"})]}})}})};function Lg(n){return We("MuiDivider",n)}He("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const Rg=Re()({name:"MuiDivider",selfPropNames:["absolute","children","classes","flexItem","light","orientation","textAlign","variant"],propDefaults:({set:n,inProps:e})=>n({absolute:!1,get component(){return e.children?"div":"hr"},flexItem:!1,light:!1,orientation:"horizontal",get role(){return e.component!=="hr"?"separator":void 0},textAlign:"center",variant:"fullWidth"}),utilityClass:Lg,slotClasses:n=>({root:["root",n.absolute&&"absolute",n.variant,n.light&&"light",n.orientation==="vertical"&&"vertical",n.flexItem&&"flexItem",!!n.children&&"withChildren",!!n.children&&n.orientation==="vertical"&&"withChildrenVertical",n.textAlign==="right"&&n.orientation!=="vertical"&&"textAlignRight",n.textAlign==="left"&&n.orientation!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",n.orientation==="vertical"&&"wrapperVertical"]})}),Dg=be("div",{name:"MuiDivider",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.absolute&&e.absolute,e[t.variant],t.light&&e.light,t.orientation==="vertical"&&e.vertical,t.flexItem&&e.flexItem,t.children&&e.withChildren,t.children&&t.orientation==="vertical"&&e.withChildrenVertical,t.textAlign==="right"&&t.orientation!=="vertical"&&e.textAlignRight,t.textAlign==="left"&&t.orientation!=="vertical"&&e.textAlignLeft]}})(({theme:n,ownerState:e})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:n.palette.divider,borderBottomWidth:"thin",...e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},...e.light&&{borderColor:pt(n.palette.divider,.08)},...e.variant==="inset"&&{marginLeft:72},...e.variant==="middle"&&e.orientation==="horizontal"&&{marginLeft:n.spacing(2),marginRight:n.spacing(2)},...e.variant==="middle"&&e.orientation==="vertical"&&{marginTop:n.spacing(1),marginBottom:n.spacing(1)},...e.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},...e.flexItem&&{alignSelf:"stretch",height:"auto"}}),({theme:n,ownerState:e})=>({...e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${n.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}}),({theme:n,ownerState:e})=>({...e.children&&e.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${n.palette.divider}`,transform:"translateX(0%)"}}}),({ownerState:n})=>({...n.textAlign==="right"&&n.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},...n.textAlign==="left"&&n.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}})),Pg=be("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.wrapper,t.orientation==="vertical"&&e.wrapperVertical]}})(({theme:n,ownerState:e})=>({display:"inline-block",paddingLeft:`calc(${n.spacing(1)} * 1.2)`,paddingRight:`calc(${n.spacing(1)} * 1.2)`,...e.orientation==="vertical"&&{paddingTop:`calc(${n.spacing(1)} * 1.2)`,paddingBottom:`calc(${n.spacing(1)} * 1.2)`}})),Ou=Rg.component(function({allProps:e,otherProps:t,classes:i}){return T(Dg,ee({get role(){return e.role}},t,{ownerState:e,get className(){return Ee(i.root,e.className)},get children(){return T(Ge,{get when(){return e.children},get children(){return T(Pg,{get className(){return i.wrapper},ownerState:e,get children(){return e.children}})}})}}))}),Ig=ke('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),Fg=ke('<svg><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>',4,!0);var Bu=hn(()=>[Ig.cloneNode(!0),Fg.cloneNode(!0)],"Delete");const Ng=n=>{const e=Aa(),[t,i]=Ie();return[T(Ag,{get index(){return t()},close:()=>i(void 0)}),T(ba,{title:"Manage Robots",renderIcon:()=>T(bm,{}),get children(){return[T(wn,{get each(){return Fi()},children:(r,s)=>T(Cr,{get children(){return[T(wr,{onClick:()=>i(s),get children(){return r.name}}),T(ei,{size:"small",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:()=>e.remove(s()),get children(){return T(Bu,{})}})]}})}),T(Ge,{get when(){return Fi().length>0},get children(){return T(Ou,{})}}),T(Cr,{get children(){return T(wr,{onClick:()=>{e.add({name:"New Robot"}),i(Fi().length)},children:"Add Robot"})}})]}})]},zg=ke('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),kg=ke('<svg><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path></svg>',4,!0);var Og=hn(()=>[zg.cloneNode(!0),kg.cloneNode(!0)],"Circle");const Bg=ke('<svg><path d="M18 14.49V9c0-1-1.01-2.01-2-2V3h-2v4h-4V3H8v2.48l9.51 9.5.49-.49zm-1.76 1.77L7.2 7.2l-.01.01L3.98 4 2.71 5.25l3.36 3.36C6.04 8.74 6 8.87 6 9v5.48L9.5 18v3h5v-3l.48-.48L19.45 22l1.26-1.28-4.47-4.46z"></path></svg>',4,!0);var Ug=hn(()=>Bg.cloneNode(!0),"PowerOff");function Vg(n){switch(n){case"Not Connected":return"error";case"Connecting":return"warning";case"Connected":return"success";default:return"error"}}const Gg=n=>{const e=Mt(kr),[t,i]=Ie(!1);return T(ei,{size:"small",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:()=>n.connection.status==="Connected"?e?.disconnect(n.connection.rosbridgeConnection.url):e?.connect(n.connection.rosbridgeConnection.url),get title(){return n.connection.status==="Connected"?"Disconnect":"Connect"},get children(){return T(Fd,{get children(){return[T(Wa,{get when(){return!t()},get children(){return T(Og,{get color(){return Vg(n.connection.status)}})}}),T(Wa,{get when(){return t()},get children(){return T(Ge,{get when(){return n.connection.status==="Connected"},get fallback(){return T(Tu,{color:"success"})},get children(){return T(Ug,{color:"error"})}})}})]}})}})},Wg=n=>{const[e,t]=Ie("ws://localhost:9090");return T(Ta,{open:!0,title:"Connection Details",get close(){return n.close},get children(){return T(Sa,{get children(){return[T(Ca,{label:"URL",variant:"standard",get value(){return e()},onChange:(i,r)=>t(r)}),T(ya,{variant:"text",onClick:()=>n.save(e()),children:"Connect"})]}})}})};function Hg(n){return We("MuiTypography",n)}He("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const $g=Re()({name:"MuiTypography",selfPropNames:["align","children","classes","gutterBottom","noWrap","paragraph","variant","variantMapping"],propDefaults:({set:n})=>n({align:"inherit",gutterBottom:!1,noWrap:!1,paragraph:!1,variant:"body1",variantMapping:{}}),utilityClass:Hg,slotClasses:n=>({root:["root",n.variant,n.align!=="inherit"&&`align${Pe(n.align)}`,n.gutterBottom&&"gutterBottom",n.noWrap&&"noWrap",n.paragraph&&"paragraph"]})}),qg=be("span",{name:"MuiTypography",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.variant&&e[t.variant],t.align!=="inherit"&&e[`align${Pe(t.align)}`],t.noWrap&&e.noWrap,t.gutterBottom&&e.gutterBottom,t.paragraph&&e.paragraph]}})(({theme:n,ownerState:e})=>({margin:0,color:e.color,...e.variant&&n.typography[e.variant],...e.align!=="inherit"&&{textAlign:e.align},...e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},...e.gutterBottom&&{marginBottom:"0.35em"},...e.paragraph&&{marginBottom:16}})),Xg={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},jg={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Yg=n=>jg[n]||n,Kg=$g.component(function({allProps:e,classes:t,otherProps:i,props:r}){const s=()=>i.component||(r.paragraph?"p":r.variantMapping[r.variant]||Xg[r.variant])||"span",o=ee(()=>{const l=Yg(e.color);return l?{color:l}:{}}),a=ee(e,o);return i=pa(ee(i,o)),T(qg,ee(i,{get component(){return s()},ownerState:a,get className(){return Ee(t.root,i.className)},get children(){return r.children}}))});function Zg(n){return We("MuiLink",n)}const Jg=He("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Sl=Re()({name:"MuiLink",autoCallUseClasses:!1,selfPropNames:["TypographyClasses","children","classes","color","underline","variant"],propDefaults:({set:n})=>n({color:"primary",component:"a",underline:"always",variant:"inherit"}),utilityClass:Zg,slotClasses:n=>({root:["root",`underline${Pe(n.underline)}`,n.component==="button"&&"button",n.focusVisible&&"focusVisible"]})}),Qg={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},e0=n=>Qg[n]||n,t0=be(Kg,{name:"MuiLink",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,e[`underline${Pe(t.underline)}`],t.component==="button"&&e.button]}})(({theme:n,ownerState:e})=>{const t=Mr(n,"palette",e0(e.color))||e.color;return{...e.underline==="none"&&{textDecoration:"none"},...e.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},...e.underline==="always"&&{textDecoration:"underline",textDecorationColor:t!=="inherit"?pt(t,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},...e.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Jg.focusVisible}`]:{outline:"auto"}}}}),n0=Sl.component(function({allProps:e,otherProps:t,props:i}){const r=Cu(),[s,o]=Ie(!1),a=ee(e,{get focusVisible(){return s()}}),l=Sl.useClasses(a);return T(t0,ee({get className(){return Ee(l.root,t.className)},get classes(){return i.TypographyClasses},get color(){return i.color},onBlur:c=>{r.onBlur(c),r.isFocusVisibleRef.current===!1&&o(!1),typeof t.onBlur=="function"&&t.onBlur(c)},onFocus:c=>{r.onFocus(c),r.isFocusVisibleRef.current===!0&&o(!0),typeof t.onFocus=="function"&&t.onFocus(c)},ownerState:e,get variant(){return i.variant}},t,{get component(){return t.component},get children(){return i.children}}))}),i0=ke("<h3>Topics</h3>"),r0=n=>{const e=(t,i)=>{const[r,s]=t.split("/");return`http://docs.ros.org/en/${i||"melodic"}/api/${r}/html/msg/${s}.html`};return T(Ta,{open:!0,title:"Connection Details",get close(){return n.close},width:800,get children(){return[T(Ca,{label:"URL",variant:"standard",get value(){return n.connection.rosbridgeConnection.url},InputProps:{readOnly:!0}}),i0.cloneNode(!0),T(Eu,{get children(){return T(wn,{get each(){return Object.keys(n.connection.topics)},children:t=>T(Cr,{sx:{whiteSpace:"nowrap"},get children(){return[t,":\u2003",T(n0,{get href(){return e(n.connection.topics[t])},target:"_blank",get children(){return n.connection.topics[t]}})]}})})}})]}})},s0=()=>{const n=Mt(kr),[e,t]=Ie(!1),[i,r]=Ie();return[T(Ge,{get when(){return e()},get children(){return T(Wg,{close:()=>t(!1),save:s=>{t(!1),r(n?.connect(s))}})}}),T(Ge,{get when(){return i()},children:s=>T(Ge,{get when(){return n?.connections[s]},children:o=>T(r0,{connection:o,close:()=>r()})})}),T(ba,{get children(){return[T(wn,{get each(){return Object.keys(n?.connections||{})},children:s=>T(Ge,{get when(){return n?.connections[s]},children:o=>T(Cr,{get id(){return o.rosbridgeConnection.url},get children(){return[T(Gg,{connection:o}),T(wr,{onClick:()=>r(s),get children(){return o.rosbridgeConnection.url}}),T(ei,{size:"small",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},onClick:()=>n?.remove(s),get children(){return T(Bu,{})}})]}})})}),T(Ge,{get when(){return Object.keys(n?.connections||{}).length>0},get children(){return T(Ou,{})}}),T(wr,{onClick:()=>t(!0),children:"Add Connection"})]}})]},o0=ke('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),a0=ke('<svg><path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"></path></svg>',4,!0);var l0=hn(()=>[o0.cloneNode(!0),a0.cloneNode(!0)],"DirectionsBoat");const c0=ke('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),u0=ke('<svg><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>',4,!0);var d0=hn(()=>[c0.cloneNode(!0),u0.cloneNode(!0)],"Check");const Uu={connections:{},robots:[],ship:{mesh:{connection:"Asdadsasd",topic:"asd"}}},Vu=Jt([Uu,()=>{}]);function f0(n){const[e,t]=lu(Uu);return T(Vu.Provider,{value:[e,t],get children(){return n.children}})}function h0(){return Mt(Vu)}function Gu(){const[n,e]=h0();return[n.ship.mesh,t=>{e("ship","mesh",t)}]}function p0(n){return We("MuiListItemIcon",n)}He("MuiListItemIcon",["root","alignItemsFlexStart"]);const m0=Re()({name:"MuiListItemIcon",selfPropNames:["alignItems","children","classes"],propDefaults:({set:n})=>n({component:"div"}),utilityClass:p0,slotClasses:n=>({root:["root",n.alignItems==="flex-start"&&"alignItemsFlexStart"]})}),g0=be("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:t}=n;return[e.root,t.alignItems==="flex-start"&&e.alignItemsFlexStart]}})(({theme:n,ownerState:e})=>({minWidth:56,color:n.palette.action.active,flexShrink:0,display:"inline-flex",...e.alignItems==="flex-start"&&{marginTop:8}})),x0=m0.component(function({allProps:e,classes:t,otherProps:i,props:r}){const s=ks(),o=ee({get alignItems(){return s.alignItems}},e);return T(g0,ee(i,{get className(){return Ee(t.root,i.className)},ownerState:o,get children(){return r.children}}))}),v0=n=>{const e=Ws(),[t,i]=Gu(),r=["mesh_msgs/MeshGeometryStamped"];return T(ba,{title:"Manage Ship",renderIcon:()=>T(l0,{}),get children(){return T(Ge,{get when(){return e?.connections},children:s=>T(wn,{get each(){return Object.values(s)},children:o=>T(wn,{get each(){return Ea(o,r)},children:a=>T(Cr,{get children(){return T(wr,{onClick:()=>{console.log(t),i({connection:o.rosbridgeConnection.url,topic:a}),console.log(t)},get children(){return[T(Ge,{get when(){return t?.connection===o.rosbridgeConnection.url&&t?.topic===a},get children(){return T(x0,{get children(){return T(d0,{})}})}}),Qe(()=>`${o.rosbridgeConnection.url}${a}`)]}})}})})})})}})},_0=n=>T(Zh,{position:"static",get children(){return T(tp,{get children(){return[T(s0,{}),T(Ng,{}),T(v0,{})]}})}}),b0=ke('<svg><path d="M14 7l-5 5 5 5V7z"></path></svg>',4,!0),y0=ke('<svg><path d="M24 0v24H0V0h24z" fill="none"></path></svg>',4,!0);var M0=hn(()=>[b0.cloneNode(!0),y0.cloneNode(!0)],"ArrowLeft");const S0=ke('<svg><path d="M10 17l5-5-5-5v10z"></path></svg>',4,!0),w0=ke('<svg><path d="M0 24V0h24v24H0z" fill="none"></path></svg>',4,!0);var C0=hn(()=>[S0.cloneNode(!0),w0.cloneNode(!0)],"ArrowRight");const T0=ke("<canvas></canvas>"),E0=ke("<img>"),A0=n=>{const[e,t]=Ie(null),i=zu(n.connection,n.topic);let r;return Ke(()=>{const s=i(),o=e();if(s&&o){(!r||r.width!==s.width||r.height!==s.height)&&(r=o.createImageData(s.width,s.height));const a=atob(s.data);switch(s.encoding){case"rgb8":for(let l=0;l<s.height;++l)for(let c=0;c<s.width;++c){const u=(l*s.width+c)*4,d=l*s.step+c*3;for(let f=0;f<3;++f)r.data[u+f]=a.charCodeAt(d+f);r.data[u+3]=255}break;default:console.error(`Unsupported encoding: ${s.encoding}`)}o.putImageData(r,0,0)}}),(()=>{const s=T0.cloneNode(!0);return(o=>t(o.getContext("2d")))(s),Ct(o=>{const a=n.style,l=i()?.width,c=i()?.height;return o._v$=Rs(s,a,o._v$),l!==o._v$2&&Ms(s,"width",o._v$2=l),c!==o._v$3&&Ms(s,"height",o._v$3=c),o},{_v$:void 0,_v$2:void 0,_v$3:void 0}),s})()},L0=n=>{const e=zu(n.connection,n.topic);return T(Ge,{get when(){return e()},fallback:"Loading...",children:t=>(()=>{const i=E0.cloneNode(!0);return Ct(r=>{const s=n.style,o=`data:image/${t.format};base64, ${t.data}`;return r._v$4=Rs(i,s,r._v$4),o!==r._v$5&&Ms(i,"src",r._v$5=o),r},{_v$4:void 0,_v$5:void 0}),i})()})},R0=n=>{const e=()=>n.connection.topics[n.topic];return[T(Ge,{get when(){return e()==="sensor_msgs/CompressedImage"},get children(){return T(L0,{get style(){return n.style},get connection(){return n.connection},get topic(){return n.topic}})}}),T(Ge,{get when(){return e()==="sensor_msgs/Image"},get children(){return T(A0,{get style(){return n.style},get connection(){return n.connection},get topic(){return n.topic}})}})]},D0=ke("<h3></h3>"),P0=n=>{const e=Ws(),[t,i]=Ie(0),r=()=>n.robot.connection?e?.connections[n.robot.connection]:void 0,s=()=>{const l=r();return l?Ea(l,["sensor_msgs/Image","sensor_msgs/CompressedImage"]):[]},o=()=>{i((t()+1)%s().length)},a=()=>{i(t()>0?t()-1:s().length-1)};return T(Ot,{sx:{width:"100%"},get children(){return[(()=>{const l=D0.cloneNode(!0);return It(l,()=>n.robot.name),l})(),T(Ge,{get when(){return r()},fallback:"Not connected",children:l=>T(Ge,{get when(){return t()<s().length},fallback:"No video feed available",get children(){return T(Ot,{sx:{flexGrow:1,display:"flex",flexDirection:"row"},get children(){return[T(ei,{onClick:a,get children(){return T(M0,{})}}),T(Ot,{sx:{flexGrow:1,position:"relative"},get children(){return[T(R0,{connection:l,get topic(){return s()[t()]},style:{"max-width":"100%"}}),T(Ot,{sx:{position:"absolute",bottom:0,backgroundColor:"black",opacity:.8},get children(){return s()[t()]}})]}}),T(ei,{onClick:o,get children(){return T(C0,{})}})]}})}})})]}})},I0=n=>T(Ot,{get children(){return T(wn,{get each(){return Fi()},children:e=>T(P0,{robot:e})})}});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const La="141",F0=0,wl=1,N0=2,Wu=1,z0=2,ur=3,Wi=0,jt=1,ni=2,k0=1,kn=0,Ni=1,Cl=2,Tl=3,El=4,O0=5,Ci=100,B0=101,U0=102,Al=103,Ll=104,V0=200,G0=201,W0=202,H0=203,Hu=204,$u=205,$0=206,q0=207,X0=208,j0=209,Y0=210,K0=0,Z0=1,J0=2,qo=3,Q0=4,ex=5,tx=6,nx=7,Hs=0,ix=1,rx=2,Mn=0,sx=1,ox=2,ax=3,lx=4,cx=5,qu=300,Hi=301,$i=302,Xo=303,jo=304,$s=306,Ts=1e3,Ht=1001,Yo=1002,wt=1003,Rl=1004,Dl=1005,kt=1006,ux=1007,qs=1008,ii=1009,dx=1010,fx=1011,Xu=1012,hx=1013,$n=1014,qn=1015,Er=1016,px=1017,mx=1018,zi=1020,gx=1021,xx=1022,qt=1023,vx=1024,_x=1025,jn=1026,qi=1027,bx=1028,yx=1029,Mx=1030,Sx=1031,wx=1033,oo=33776,ao=33777,lo=33778,co=33779,Pl=35840,Il=35841,Fl=35842,Nl=35843,Cx=36196,zl=37492,kl=37496,Ol=37808,Bl=37809,Ul=37810,Vl=37811,Gl=37812,Wl=37813,Hl=37814,$l=37815,ql=37816,Xl=37817,jl=37818,Yl=37819,Kl=37820,Zl=37821,Jl=36492,ri=3e3,Ze=3001,Tx=3200,Ex=3201,Zi=0,Ax=1,yn="srgb",Xn="srgb-linear",uo=7680,Lx=519,Ql=35044,ec="300 es",Ko=1035;class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ut=[];for(let n=0;n<256;n++)ut[n]=(n<16?"0":"")+n.toString(16);let tc=1234567;const vr=Math.PI/180,Es=180/Math.PI;function Qi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ut[n&255]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]+"-"+ut[e&255]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[t&63|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[i&255]+ut[i>>8&255]+ut[i>>16&255]+ut[i>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function Ra(n,e){return(n%e+e)%e}function Rx(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Dx(n,e,t){return n!==e?(t-n)/(e-n):0}function _r(n,e,t){return(1-t)*n+t*e}function Px(n,e,t,i){return _r(n,e,1-Math.exp(-t*i))}function Ix(n,e=1){return e-Math.abs(Ra(n,e*2)-e)}function Fx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Nx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function zx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function kx(n,e){return n+Math.random()*(e-n)}function Ox(n){return n*(.5-Math.random())}function Bx(n){n!==void 0&&(tc=n);let e=tc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ux(n){return n*vr}function Vx(n){return n*Es}function Zo(n){return(n&n-1)===0&&n!==0}function Gx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function As(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wx(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),m=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*x,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*x,a*c);break;case"ZYZ":n.set(l*x,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Hx(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $x(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var qx=Object.freeze({__proto__:null,DEG2RAD:vr,RAD2DEG:Es,generateUUID:Qi,clamp:vt,euclideanModulo:Ra,mapLinear:Rx,inverseLerp:Dx,lerp:_r,damp:Px,pingpong:Ix,smoothstep:Fx,smootherstep:Nx,randInt:zx,randFloat:kx,randFloatSpread:Ox,seededRandom:Bx,degToRad:Ux,radToDeg:Vx,isPowerOfTwo:Zo,ceilPowerOfTwo:Gx,floorPowerOfTwo:As,setQuaternionFromProperEuler:Wx,normalize:$x,denormalize:Hx});class Ne{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cn{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],m=i[5],x=i[8],p=r[0],h=r[3],g=r[6],b=r[1],w=r[4],C=r[7],M=r[2],R=r[5],P=r[8];return s[0]=o*p+a*b+l*M,s[3]=o*h+a*w+l*R,s[6]=o*g+a*C+l*P,s[1]=c*p+u*b+d*M,s[4]=c*h+u*w+d*R,s[7]=c*g+u*C+d*P,s[2]=f*p+m*b+x*M,s[5]=f*h+m*w+x*R,s[8]=f*g+m*C+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,m=c*s-o*l,x=t*d+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=d*p,e[1]=(r*c-u*i)*p,e[2]=(a*i-r*o)*p,e[3]=f*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*c,r[6]=t*a+i*u,r[1]=-i*s+t*l,r[4]=-i*o+t*c,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function ju(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function Ar(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const fo={[yn]:{[Xn]:Yn},[Xn]:{[yn]:xs}},Ut={legacyMode:!0,get workingColorSpace(){return Xn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(fo[e]&&fo[e][t]!==void 0){const i=fo[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},st={r:0,g:0,b:0},Vt={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function ho(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Zr(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Xn){return this.r=e,this.g=t,this.b=i,Ut.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Xn){if(e=Ra(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ho(o,s,e+1/3),this.g=ho(o,s,e),this.b=ho(o,s,e-1/3)}return Ut.toWorkingColorSpace(this,r),this}setStyle(e,t=yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ut.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ut.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ut.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ut.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=yn){const i=Yu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return Ut.fromWorkingColorSpace(Zr(this,st),e),vt(st.r*255,0,255)<<16^vt(st.g*255,0,255)<<8^vt(st.b*255,0,255)<<0}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xn){Ut.fromWorkingColorSpace(Zr(this,st),t);const i=st.r,r=st.g,s=st.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xn){return Ut.fromWorkingColorSpace(Zr(this,st),t),e.r=st.r,e.g=st.g,e.b=st.b,e}getStyle(e=yn){return Ut.fromWorkingColorSpace(Zr(this,st),e),e!==yn?`color(${e} ${st.r} ${st.g} ${st.b})`:`rgb(${st.r*255|0},${st.g*255|0},${st.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Vt),Vt.h+=e,Vt.s+=t,Vt.l+=i,this.setHSL(Vt.h,Vt.s,Vt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vt),e.getHSL(Kr);const i=_r(Vt.h,Kr.h,t),r=_r(Vt.s,Kr.s,t),s=_r(Vt.l,Kr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ge.NAMES=Yu;let ui;class Ku{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ui===void 0&&(ui=Ar("canvas")),ui.width=e.width,ui.height=e.height;const i=ui.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yn(t[i]/255)*255):t[i]=Yn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Zu{constructor(e=null){this.isSource=!0,this.uuid=Qi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(po(r[o].image)):s.push(po(r[o]))}else s=po(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ku.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xx=0;class Bt extends Ji{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=Ht,r=Ht,s=kt,o=qs,a=qt,l=ii,c=1,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Qi(),this.name="",this.source=new Zu(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new cn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ts:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case Yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ts:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case Yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=qu;class at{constructor(e=0,t=0,i=0,r=1){this.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],x=l[9],p=l[2],h=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-p)<.01&&Math.abs(x-h)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+p)<.1&&Math.abs(x+h)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,C=(m+1)/2,M=(g+1)/2,R=(u+f)/4,P=(d+p)/4,_=(x+h)/4;return w>C&&w>M?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=R/i,s=P/i):C>M?C<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(C),i=R/r,s=_/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=P/s,r=_/s),this.set(i,r,s,t),this}let b=Math.sqrt((h-x)*(h-x)+(d-p)*(d-p)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(h-x)/b,this.y=(d-p)/b,this.z=(f-u)/b,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sn extends Ji{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Bt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:kt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ju extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jx extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],m=s[o+1],x=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=p;return}if(d!==p||l!==f||c!==m||u!==x){let h=1-a;const g=l*f+c*m+u*x+d*p,b=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){const M=Math.sqrt(w),R=Math.atan2(M,g*b);h=Math.sin(h*R)/M,a=Math.sin(a*R)/M}const C=a*b;if(l=l*h+f*C,c=c*h+m*C,u=u*h+x*C,d=d*h+p*C,h===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+u*d+l*m-c*f,e[t+1]=l*x+u*f+c*d-a*m,e[t+2]=c*x+u*m+a*f-l*d,e[t+3]=u*x-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*m*x,this._y=c*m*d-f*u*x,this._z=c*u*x+f*m*d,this._w=c*u*d-f*m*x;break;case"YXZ":this._x=f*u*d+c*m*x,this._y=c*m*d-f*u*x,this._z=c*u*x-f*m*d,this._w=c*u*d+f*m*x;break;case"ZXY":this._x=f*u*d-c*m*x,this._y=c*m*d+f*u*x,this._z=c*u*x+f*m*d,this._w=c*u*d-f*m*x;break;case"ZYX":this._x=f*u*d-c*m*x,this._y=c*m*d+f*u*x,this._z=c*u*x-f*m*d,this._w=c*u*d+f*m*x;break;case"YZX":this._x=f*u*d+c*m*x,this._y=c*m*d+f*u*x,this._z=c*u*x-f*m*d,this._w=c*u*d-f*m*x;break;case"XZY":this._x=f*u*d-c*m*x,this._y=c*m*d-f*u*x,this._z=c*u*x+f*m*d,this._w=c*u*d+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){this.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,d=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=c*l+f*-s+u*-a-d*-o,this.y=u*l+f*-o+d*-s-c*-a,this.z=d*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new D,nc=new Or;class Br{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],f=e[l+2];u<t&&(t=u),d<i&&(i=d),f<r&&(r=f),u>s&&(s=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),f=e.getZ(l);u<t&&(t=u),d<i&&(i=d),f<r&&(r=f),u>s&&(s=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Un.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Un)}else i.boundingBox===null&&i.computeBoundingBox(),go.copy(i.boundingBox),go.applyMatrix4(e.matrixWorld),this.union(go);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),Jr.subVectors(this.max,rr),di.subVectors(e.a,rr),fi.subVectors(e.b,rr),hi.subVectors(e.c,rr),Ln.subVectors(fi,di),Rn.subVectors(hi,fi),Vn.subVectors(di,hi);let t=[0,-Ln.z,Ln.y,0,-Rn.z,Rn.y,0,-Vn.z,Vn.y,Ln.z,0,-Ln.x,Rn.z,0,-Rn.x,Vn.z,0,-Vn.x,-Ln.y,Ln.x,0,-Rn.y,Rn.x,0,-Vn.y,Vn.x,0];return!xo(t,di,fi,hi,Jr)||(t=[1,0,0,0,1,0,0,0,1],!xo(t,di,fi,hi,Jr))?!1:(Qr.crossVectors(Ln,Rn),t=[Qr.x,Qr.y,Qr.z],xo(t,di,fi,hi,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Un.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gn=[new D,new D,new D,new D,new D,new D,new D,new D],Un=new D,go=new Br,di=new D,fi=new D,hi=new D,Ln=new D,Rn=new D,Vn=new D,rr=new D,Jr=new D,Qr=new D,Gn=new D;function xo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Gn.fromArray(n,s);const a=r.x*Math.abs(Gn.x)+r.y*Math.abs(Gn.y)+r.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),u=i.dot(Gn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Yx=new Br,ic=new D,es=new D,vo=new D;class Da{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Yx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){vo.subVectors(e,this.center);const t=vo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(vo.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?es.set(0,0,1).multiplyScalar(e.radius):es.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ic.copy(e.center).add(es)),this.expandByPoint(ic.copy(e.center).sub(es)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new D,_o=new D,ts=new D,Dn=new D,bo=new D,ns=new D,yo=new D;class Kx{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.direction).multiplyScalar(t).add(this.origin),xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){_o.copy(e).add(t).multiplyScalar(.5),ts.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(_o);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ts),a=Dn.dot(this.direction),l=-Dn.dot(ts),c=Dn.lengthSq(),u=Math.abs(1-o*o);let d,f,m,x;if(u>0)if(d=o*l-a,f=o*a-l,x=s*u,d>=0)if(f>=-x)if(f<=x){const p=1/u;d*=p,f*=p,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(ts).multiplyScalar(f).add(_o),m}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const i=xn.dot(this.direction),r=xn.dot(xn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,i,r,s){bo.subVectors(t,e),ns.subVectors(i,e),yo.crossVectors(bo,ns);let o=this.direction.dot(yo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,e);const l=a*this.direction.dot(ns.crossVectors(Dn,ns));if(l<0)return null;const c=a*this.direction.dot(bo.cross(Dn));if(c<0||l+c>o)return null;const u=-a*Dn.dot(yo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c,u,d,f,m,x,p,h){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=m,g[7]=x,g[11]=p,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/pi.setFromMatrixColumn(e,0).length(),s=1/pi.setFromMatrixColumn(e,1).length(),o=1/pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*d,x=a*u,p=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+x*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,x=c*u,p=c*d;t[0]=f+p*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-x,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,x=c*u,p=c*d;t[0]=f-p*a,t[4]=-o*d,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*d,x=a*u,p=a*d;t[0]=l*u,t[4]=x*c-m,t[8]=f*c+p,t[1]=l*d,t[5]=p*c+f,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,x=a*l,p=a*c;t[0]=l*u,t[4]=p-f*d,t[8]=x*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+x,t[10]=f-p*d}else if(e.order==="XZY"){const f=o*l,m=o*c,x=a*l,p=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+p,t[5]=o*u,t[9]=m*d-x,t[2]=x*d-m,t[6]=a*u,t[10]=p*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zx,e,Jx)}lookAt(e,t,i){const r=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),Pn.crossVectors(i,Rt),Pn.lengthSq()===0&&(Math.abs(i.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),Pn.crossVectors(i,Rt)),Pn.normalize(),is.crossVectors(Rt,Pn),r[0]=Pn.x,r[4]=is.x,r[8]=Rt.x,r[1]=Pn.y,r[5]=is.y,r[9]=Rt.y,r[2]=Pn.z,r[6]=is.z,r[10]=Rt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],m=i[13],x=i[2],p=i[6],h=i[10],g=i[14],b=i[3],w=i[7],C=i[11],M=i[15],R=r[0],P=r[4],_=r[8],E=r[12],B=r[1],F=r[5],K=r[9],Z=r[13],I=r[2],A=r[6],N=r[10],W=r[14],H=r[3],O=r[7],X=r[11],ne=r[15];return s[0]=o*R+a*B+l*I+c*H,s[4]=o*P+a*F+l*A+c*O,s[8]=o*_+a*K+l*N+c*X,s[12]=o*E+a*Z+l*W+c*ne,s[1]=u*R+d*B+f*I+m*H,s[5]=u*P+d*F+f*A+m*O,s[9]=u*_+d*K+f*N+m*X,s[13]=u*E+d*Z+f*W+m*ne,s[2]=x*R+p*B+h*I+g*H,s[6]=x*P+p*F+h*A+g*O,s[10]=x*_+p*K+h*N+g*X,s[14]=x*E+p*Z+h*W+g*ne,s[3]=b*R+w*B+C*I+M*H,s[7]=b*P+w*F+C*A+M*O,s[11]=b*_+w*K+C*N+M*X,s[15]=b*E+w*Z+C*W+M*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],x=e[3],p=e[7],h=e[11],g=e[15];return x*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*m-i*l*m)+p*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+h*(+t*c*d-t*a*m-s*o*d+i*o*m+s*a*u-i*c*u)+g*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],x=e[12],p=e[13],h=e[14],g=e[15],b=d*h*c-p*f*c+p*l*m-a*h*m-d*l*g+a*f*g,w=x*f*c-u*h*c-x*l*m+o*h*m+u*l*g-o*f*g,C=u*p*c-x*d*c+x*a*m-o*p*m-u*a*g+o*d*g,M=x*d*l-u*p*l-x*a*f+o*p*f+u*a*h-o*d*h,R=t*b+i*w+r*C+s*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=b*P,e[1]=(p*f*s-d*h*s-p*r*m+i*h*m+d*r*g-i*f*g)*P,e[2]=(a*h*s-p*l*s+p*r*c-i*h*c-a*r*g+i*l*g)*P,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*m-i*l*m)*P,e[4]=w*P,e[5]=(u*h*s-x*f*s+x*r*m-t*h*m-u*r*g+t*f*g)*P,e[6]=(x*l*s-o*h*s-x*r*c+t*h*c+o*r*g-t*l*g)*P,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*P,e[8]=C*P,e[9]=(x*d*s-u*p*s-x*i*m+t*p*m+u*i*g-t*d*g)*P,e[10]=(o*p*s-x*a*s+x*i*c-t*p*c-o*i*g+t*a*g)*P,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*m-t*a*m)*P,e[12]=M*P,e[13]=(u*p*r-x*d*r+x*i*f-t*p*f-u*i*h+t*d*h)*P,e[14]=(x*a*r-o*p*r-x*i*l+t*p*l+o*i*h-t*a*h)*P,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,m=s*u,x=s*d,p=o*u,h=o*d,g=a*d,b=l*c,w=l*u,C=l*d,M=i.x,R=i.y,P=i.z;return r[0]=(1-(p+g))*M,r[1]=(m+C)*M,r[2]=(x-w)*M,r[3]=0,r[4]=(m-C)*R,r[5]=(1-(f+g))*R,r[6]=(h+b)*R,r[7]=0,r[8]=(x+w)*P,r[9]=(h-b)*P,r[10]=(1-(f+p))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=pi.set(r[0],r[1],r[2]).length();const o=pi.set(r[4],r[5],r[6]).length(),a=pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gt.copy(this);const c=1/s,u=1/o,d=1/a;return Gt.elements[0]*=c,Gt.elements[1]*=c,Gt.elements[2]*=c,Gt.elements[4]*=u,Gt.elements[5]*=u,Gt.elements[6]*=u,Gt.elements[8]*=d,Gt.elements[9]*=d,Gt.elements[10]*=d,t.setFromRotationMatrix(Gt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(o-s),d=(t+e)*l,f=(i+r)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const pi=new D,Gt=new et,Zx=new D(0,0,0),Jx=new D(1,1,1),Pn=new D,is=new D,Rt=new D,rc=new et,sc=new Or;class Ur{constructor(e=0,t=0,i=0,r=Ur.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sc.setFromEuler(this),this.setFromQuaternion(sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ur.DefaultOrder="XYZ";Ur.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Qu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qx=0;const oc=new D,mi=new Or,vn=new et,rs=new D,sr=new D,ev=new D,tv=new Or,ac=new D(1,0,0),lc=new D(0,1,0),cc=new D(0,0,1),nv={type:"added"},uc={type:"removed"};class Tt extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DefaultUp.clone();const e=new D,t=new Ur,i=new Or,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new et},normalMatrix:{value:new cn}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Tt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(ac,e)}rotateY(e){return this.rotateOnAxis(lc,e)}rotateZ(e){return this.rotateOnAxis(cc,e)}translateOnAxis(e,t){return oc.copy(e).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ac,e)}translateY(e){return this.translateOnAxis(lc,e)}translateZ(e){return this.translateOnAxis(cc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?rs.copy(e):rs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(sr,rs,this.up):vn.lookAt(rs,sr,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),mi.setFromRotationMatrix(vn),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(uc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,ev),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,tv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DefaultUp=new D(0,1,0);Tt.DefaultMatrixAutoUpdate=!0;const Wt=new D,_n=new D,Mo=new D,bn=new D,gi=new D,xi=new D,dc=new D,So=new D,wo=new D,Co=new D;class ln{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wt.subVectors(e,t),r.cross(Wt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wt.subVectors(r,t),_n.subVectors(i,t),Mo.subVectors(e,t);const o=Wt.dot(Wt),a=Wt.dot(_n),l=Wt.dot(Mo),c=_n.dot(_n),u=_n.dot(Mo),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(c*l-a*u)*f,x=(o*u-a*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,bn),bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,bn),l.set(0,0),l.addScaledVector(s,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(a,bn.z),l}static isFrontFacing(e,t,i,r){return Wt.subVectors(i,t),_n.subVectors(e,t),Wt.cross(_n).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Wt.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ln.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;gi.subVectors(r,i),xi.subVectors(s,i),So.subVectors(e,i);const l=gi.dot(So),c=xi.dot(So);if(l<=0&&c<=0)return t.copy(i);wo.subVectors(e,r);const u=gi.dot(wo),d=xi.dot(wo);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(gi,o);Co.subVectors(e,s);const m=gi.dot(Co),x=xi.dot(Co);if(x>=0&&m<=x)return t.copy(s);const p=m*c-l*x;if(p<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(xi,a);const h=u*x-m*d;if(h<=0&&d-u>=0&&m-x>=0)return dc.subVectors(s,r),a=(d-u)/(d-u+(m-x)),t.copy(r).addScaledVector(dc,a);const g=1/(h+p+f);return o=p*g,a=f*g,t.copy(i).addScaledVector(gi,o).addScaledVector(xi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let iv=0;class dt extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Ni,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Hu,this.blendDst=$u,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===k0;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}dt.fromType=function(){return null};class Xs extends dt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new D,ss=new Ne;class un{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Ql,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new ge),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Ne),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new D),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new at),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ed extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class td extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Yt extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let rv=0;const Nt=new et,To=new Tt,vi=new D,Dt=new Br,or=new Br,lt=new D;class Cn extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ju(e)?td:ed)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new cn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,i){return Nt.makeTranslation(e,t,i),this.applyMatrix4(Nt),this}scale(e,t,i){return Nt.makeScale(e,t,i),this.applyMatrix4(Nt),this}lookAt(e){return To.lookAt(e),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];or.setFromBufferAttribute(a),this.morphTargetsRelative?(lt.addVectors(Dt.min,or.min),Dt.expandByPoint(lt),lt.addVectors(Dt.max,or.max),Dt.expandByPoint(lt)):(Dt.expandByPoint(or.min),Dt.expandByPoint(or.max))}Dt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(lt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)lt.fromBufferAttribute(a,c),l&&(vi.fromBufferAttribute(e,c),lt.add(vi)),r=Math.max(r,i.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let B=0;B<a;B++)c[B]=new D,u[B]=new D;const d=new D,f=new D,m=new D,x=new Ne,p=new Ne,h=new Ne,g=new D,b=new D;function w(B,F,K){d.fromArray(r,B*3),f.fromArray(r,F*3),m.fromArray(r,K*3),x.fromArray(o,B*2),p.fromArray(o,F*2),h.fromArray(o,K*2),f.sub(d),m.sub(d),p.sub(x),h.sub(x);const Z=1/(p.x*h.y-h.x*p.y);!isFinite(Z)||(g.copy(f).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(Z),b.copy(m).multiplyScalar(p.x).addScaledVector(f,-h.x).multiplyScalar(Z),c[B].add(g),c[F].add(g),c[K].add(g),u[B].add(b),u[F].add(b),u[K].add(b))}let C=this.groups;C.length===0&&(C=[{start:0,count:i.length}]);for(let B=0,F=C.length;B<F;++B){const K=C[B],Z=K.start,I=K.count;for(let A=Z,N=Z+I;A<N;A+=3)w(i[A+0],i[A+1],i[A+2])}const M=new D,R=new D,P=new D,_=new D;function E(B){P.fromArray(s,B*3),_.copy(P);const F=c[B];M.copy(F),M.sub(P.multiplyScalar(P.dot(F))).normalize(),R.crossVectors(_,F);const Z=R.dot(u[B])<0?-1:1;l[B*4]=M.x,l[B*4+1]=M.y,l[B*4+2]=M.z,l[B*4+3]=Z}for(let B=0,F=C.length;B<F;++B){const K=C[B],Z=K.start,I=K.count;for(let A=Z,N=Z+I;A<N;A+=3)E(i[A+0]),E(i[A+1]),E(i[A+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),p=e.getX(f+1),h=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,h),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let d=0,f=c;d<u;d++,f++)o[f]=l[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,x=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*u;for(let g=0;g<u;g++)f[x++]=c[m++]}return new un(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const fc=new et,_i=new Kx,Eo=new Da,In=new D,Fn=new D,Nn=new D,Ao=new D,Lo=new D,Ro=new D,os=new D,as=new D,ls=new D,cs=new Ne,us=new Ne,ds=new Ne,Do=new D,fs=new D;class Xt extends Tt{constructor(e=new Cn,t=new Xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(s),e.ray.intersectsSphere(Eo)===!1)||(fc.copy(s).invert(),_i.copy(e.ray).applyMatrix4(fc),i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,d=i.attributes.uv,f=i.attributes.uv2,m=i.groups,x=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,h=m.length;p<h;p++){const g=m[p],b=r[g.materialIndex],w=Math.max(g.start,x.start),C=Math.min(a.count,Math.min(g.start+g.count,x.start+x.count));for(let M=w,R=C;M<R;M+=3){const P=a.getX(M),_=a.getX(M+1),E=a.getX(M+2);o=hs(this,b,e,_i,l,c,u,d,f,P,_,E),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),h=Math.min(a.count,x.start+x.count);for(let g=p,b=h;g<b;g+=3){const w=a.getX(g),C=a.getX(g+1),M=a.getX(g+2);o=hs(this,r,e,_i,l,c,u,d,f,w,C,M),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,h=m.length;p<h;p++){const g=m[p],b=r[g.materialIndex],w=Math.max(g.start,x.start),C=Math.min(l.count,Math.min(g.start+g.count,x.start+x.count));for(let M=w,R=C;M<R;M+=3){const P=M,_=M+1,E=M+2;o=hs(this,b,e,_i,l,c,u,d,f,P,_,E),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),h=Math.min(l.count,x.start+x.count);for(let g=p,b=h;g<b;g+=3){const w=g,C=g+1,M=g+2;o=hs(this,r,e,_i,l,c,u,d,f,w,C,M),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function sv(n,e,t,i,r,s,o,a){let l;if(e.side===jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==ni,a),l===null)return null;fs.copy(a),fs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fs);return c<t.near||c>t.far?null:{distance:c,point:fs.clone(),object:n}}function hs(n,e,t,i,r,s,o,a,l,c,u,d){In.fromBufferAttribute(r,c),Fn.fromBufferAttribute(r,u),Nn.fromBufferAttribute(r,d);const f=n.morphTargetInfluences;if(s&&f){os.set(0,0,0),as.set(0,0,0),ls.set(0,0,0);for(let x=0,p=s.length;x<p;x++){const h=f[x],g=s[x];h!==0&&(Ao.fromBufferAttribute(g,c),Lo.fromBufferAttribute(g,u),Ro.fromBufferAttribute(g,d),o?(os.addScaledVector(Ao,h),as.addScaledVector(Lo,h),ls.addScaledVector(Ro,h)):(os.addScaledVector(Ao.sub(In),h),as.addScaledVector(Lo.sub(Fn),h),ls.addScaledVector(Ro.sub(Nn),h)))}In.add(os),Fn.add(as),Nn.add(ls)}n.isSkinnedMesh&&(n.boneTransform(c,In),n.boneTransform(u,Fn),n.boneTransform(d,Nn));const m=sv(n,e,t,i,In,Fn,Nn,Do);if(m){a&&(cs.fromBufferAttribute(a,c),us.fromBufferAttribute(a,u),ds.fromBufferAttribute(a,d),m.uv=ln.getUV(Do,In,Fn,Nn,cs,us,ds,new Ne)),l&&(cs.fromBufferAttribute(l,c),us.fromBufferAttribute(l,u),ds.fromBufferAttribute(l,d),m.uv2=ln.getUV(Do,In,Fn,Nn,cs,us,ds,new Ne));const x={a:c,b:u,c:d,normal:new D,materialIndex:0};ln.getNormal(In,Fn,Nn,x.normal),m.face=x}return m}class Vr extends Cn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(d,2));function x(p,h,g,b,w,C,M,R,P,_,E){const B=C/P,F=M/_,K=C/2,Z=M/2,I=R/2,A=P+1,N=_+1;let W=0,H=0;const O=new D;for(let X=0;X<N;X++){const ne=X*F-Z;for(let j=0;j<A;j++){const J=j*B-K;O[p]=J*b,O[h]=ne*w,O[g]=I,c.push(O.x,O.y,O.z),O[p]=0,O[h]=0,O[g]=R>0?1:-1,u.push(O.x,O.y,O.z),d.push(j/P),d.push(1-X/_),W+=1}}for(let X=0;X<_;X++)for(let ne=0;ne<P;ne++){const j=f+ne+A*X,J=f+ne+A*(X+1),fe=f+(ne+1)+A*(X+1),pe=f+(ne+1)+A*X;l.push(j,J,pe),l.push(J,fe,pe),H+=6}a.addGroup(m,H,E),m+=H,f+=W}}static fromJSON(e){return new Vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ht(n){const e={};for(let t=0;t<n.length;t++){const i=Xi(n[t]);for(const r in i)e[r]=i[r]}return e}const Jo={clone:Xi,merge:ht};var ov=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends dt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=ov,this.fragmentShader=av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nd extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pt extends nd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bi=90,yi=1;class lv extends Tt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Pt(bi,yi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(1,0,0)),this.add(r);const s=new Pt(bi,yi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);const o=new Pt(bi,yi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new Pt(bi,yi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const l=new Pt(bi,yi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);const c=new Pt(bi,yi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Mn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Pa extends Bt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Hi,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cv extends Sn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pa(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vr(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:Xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:kn});s.uniforms.tEquirect.value=t;const o=new Xt(r,s),a=t.minFilter;return t.minFilter===qs&&(t.minFilter=kt),new lv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Po=new D,uv=new D,dv=new cn;class zn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Po.subVectors(i,t).cross(uv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Po),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||dv.getNormalMatrix(e),r=this.coplanarPoint(Po).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Da,ps=new D;class Ia{constructor(e=new zn,t=new zn,i=new zn,r=new zn,s=new zn,o=new zn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],d=i[7],f=i[8],m=i[9],x=i[10],p=i[11],h=i[12],g=i[13],b=i[14],w=i[15];return t[0].setComponents(a-r,d-l,p-f,w-h).normalize(),t[1].setComponents(a+r,d+l,p+f,w+h).normalize(),t[2].setComponents(a+s,d+c,p+m,w+g).normalize(),t[3].setComponents(a-s,d-c,p-m,w-g).normalize(),t[4].setComponents(a-o,d-u,p-x,w-b).normalize(),t[5].setComponents(a+o,d+u,p+x,w+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ps.x=r.normal.x>0?e.max.x:e.min.x,ps.y=r.normal.y>0?e.max.y:e.min.y,ps.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function id(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function fv(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,f=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,d,f),c.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const f=u.array,m=u.updateRange;n.bindBuffer(d,c),m.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class js extends Cn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,m=[],x=[],p=[],h=[];for(let g=0;g<u;g++){const b=g*f-o;for(let w=0;w<c;w++){const C=w*d-s;x.push(C,-b,0),p.push(0,0,1),h.push(w/a),h.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){const w=b+c*g,C=b+c*(g+1),M=b+1+c*(g+1),R=b+1+c*g;m.push(w,C,R),m.push(C,M,R)}this.setIndex(m),this.setAttribute("position",new Yt(x,3)),this.setAttribute("normal",new Yt(p,3)),this.setAttribute("uv",new Yt(h,2))}static fromJSON(e){return new js(e.width,e.height,e.widthSegments,e.heightSegments)}}var hv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,pv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,gv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_v="vec3 transformed = vec3( position );",bv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yv=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Mv=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Sv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Iv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ov=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$v=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Zv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qv=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,e_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,t_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,n_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,r_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,o_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,a_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,l_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,d_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,p_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,m_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,v_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,__=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,S_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,w_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,C_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,T_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,D_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,I_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,F_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,k_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,H_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,q_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,X_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tb=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,nb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ib=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,rb=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,sb=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ob=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ab=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,lb=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,cb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ub=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,db=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pb=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mb=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Eb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Db=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ib=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ob=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ub=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Le={alphamap_fragment:hv,alphamap_pars_fragment:pv,alphatest_fragment:mv,alphatest_pars_fragment:gv,aomap_fragment:xv,aomap_pars_fragment:vv,begin_vertex:_v,beginnormal_vertex:bv,bsdfs:yv,iridescence_fragment:Mv,bumpmap_pars_fragment:Sv,clipping_planes_fragment:wv,clipping_planes_pars_fragment:Cv,clipping_planes_pars_vertex:Tv,clipping_planes_vertex:Ev,color_fragment:Av,color_pars_fragment:Lv,color_pars_vertex:Rv,color_vertex:Dv,common:Pv,cube_uv_reflection_fragment:Iv,defaultnormal_vertex:Fv,displacementmap_pars_vertex:Nv,displacementmap_vertex:zv,emissivemap_fragment:kv,emissivemap_pars_fragment:Ov,encodings_fragment:Bv,encodings_pars_fragment:Uv,envmap_fragment:Vv,envmap_common_pars_fragment:Gv,envmap_pars_fragment:Wv,envmap_pars_vertex:Hv,envmap_physical_pars_fragment:t_,envmap_vertex:$v,fog_vertex:qv,fog_pars_vertex:Xv,fog_fragment:jv,fog_pars_fragment:Yv,gradientmap_pars_fragment:Kv,lightmap_fragment:Zv,lightmap_pars_fragment:Jv,lights_lambert_vertex:Qv,lights_pars_begin:e_,lights_toon_fragment:n_,lights_toon_pars_fragment:i_,lights_phong_fragment:r_,lights_phong_pars_fragment:s_,lights_physical_fragment:o_,lights_physical_pars_fragment:a_,lights_fragment_begin:l_,lights_fragment_maps:c_,lights_fragment_end:u_,logdepthbuf_fragment:d_,logdepthbuf_pars_fragment:f_,logdepthbuf_pars_vertex:h_,logdepthbuf_vertex:p_,map_fragment:m_,map_pars_fragment:g_,map_particle_fragment:x_,map_particle_pars_fragment:v_,metalnessmap_fragment:__,metalnessmap_pars_fragment:b_,morphcolor_vertex:y_,morphnormal_vertex:M_,morphtarget_pars_vertex:S_,morphtarget_vertex:w_,normal_fragment_begin:C_,normal_fragment_maps:T_,normal_pars_fragment:E_,normal_pars_vertex:A_,normal_vertex:L_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:D_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:I_,iridescence_pars_fragment:F_,output_fragment:N_,packing:z_,premultiplied_alpha_fragment:k_,project_vertex:O_,dithering_fragment:B_,dithering_pars_fragment:U_,roughnessmap_fragment:V_,roughnessmap_pars_fragment:G_,shadowmap_pars_fragment:W_,shadowmap_pars_vertex:H_,shadowmap_vertex:$_,shadowmask_pars_fragment:q_,skinbase_vertex:X_,skinning_pars_vertex:j_,skinning_vertex:Y_,skinnormal_vertex:K_,specularmap_fragment:Z_,specularmap_pars_fragment:J_,tonemapping_fragment:Q_,tonemapping_pars_fragment:eb,transmission_fragment:tb,transmission_pars_fragment:nb,uv_pars_fragment:ib,uv_pars_vertex:rb,uv_vertex:sb,uv2_pars_fragment:ob,uv2_pars_vertex:ab,uv2_vertex:lb,worldpos_vertex:cb,background_vert:ub,background_frag:db,cube_vert:fb,cube_frag:hb,depth_vert:pb,depth_frag:mb,distanceRGBA_vert:gb,distanceRGBA_frag:xb,equirect_vert:vb,equirect_frag:_b,linedashed_vert:bb,linedashed_frag:yb,meshbasic_vert:Mb,meshbasic_frag:Sb,meshlambert_vert:wb,meshlambert_frag:Cb,meshmatcap_vert:Tb,meshmatcap_frag:Eb,meshnormal_vert:Ab,meshnormal_frag:Lb,meshphong_vert:Rb,meshphong_frag:Db,meshphysical_vert:Pb,meshphysical_frag:Ib,meshtoon_vert:Fb,meshtoon_frag:Nb,points_vert:zb,points_frag:kb,shadow_vert:Ob,shadow_frag:Bb,sprite_vert:Ub,sprite_frag:Vb},se={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new cn},uv2Transform:{value:new cn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new cn}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new cn}}},an={basic:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.fog,se.lights,{emissive:{value:new ge(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:ht([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:ht([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:ht([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ge(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:ht([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:ht([se.points,se.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:ht([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:ht([se.common,se.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:ht([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:ht([se.sprite,se.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new cn},t2D:{value:null}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},cube:{uniforms:ht([se.envmap,{opacity:{value:1}}]),vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:ht([se.common,se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:ht([se.lights,se.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};an.physical={uniforms:ht([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};function Gb(n,e,t,i,r,s){const o=new ge(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function m(p,h){let g=!1,b=h.isScene===!0?h.background:null;b&&b.isTexture&&(b=e.get(b));const w=n.xr,C=w.getSession&&w.getSession();C&&C.environmentBlendMode==="additive"&&(b=null),b===null?x(o,a):b&&b.isColor&&(x(b,1),g=!0),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===$s)?(c===void 0&&(c=new Xt(new Vr(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Xi(an.cube.uniforms),vertexShader:an.cube.vertexShader,fragmentShader:an.cube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,(u!==b||d!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Xt(new js(2,2),new fn({name:"BackgroundMaterial",uniforms:Xi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,f=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,h){t.buffers.color.setClear(p.r,p.g,p.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),a=h,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,x(o,a)},render:m}}function Wb(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let c=l,u=!1;function d(I,A,N,W,H){let O=!1;if(o){const X=p(W,N,A);c!==X&&(c=X,m(c.object)),O=g(I,W,N,H),O&&b(I,W,N,H)}else{const X=A.wireframe===!0;(c.geometry!==W.id||c.program!==N.id||c.wireframe!==X)&&(c.geometry=W.id,c.program=N.id,c.wireframe=X,O=!0)}H!==null&&t.update(H,34963),(O||u)&&(u=!1,_(I,A,N,W),H!==null&&n.bindBuffer(34963,t.get(H).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function x(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,A,N){const W=N.wireframe===!0;let H=a[I.id];H===void 0&&(H={},a[I.id]=H);let O=H[A.id];O===void 0&&(O={},H[A.id]=O);let X=O[W];return X===void 0&&(X=h(f()),O[W]=X),X}function h(I){const A=[],N=[],W=[];for(let H=0;H<r;H++)A[H]=0,N[H]=0,W[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:W,object:I,attributes:{},index:null}}function g(I,A,N,W){const H=c.attributes,O=A.attributes;let X=0;const ne=N.getAttributes();for(const j in ne)if(ne[j].location>=0){const fe=H[j];let pe=O[j];if(pe===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(pe=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(pe=I.instanceColor)),fe===void 0||fe.attribute!==pe||pe&&fe.data!==pe.data)return!0;X++}return c.attributesNum!==X||c.index!==W}function b(I,A,N,W){const H={},O=A.attributes;let X=0;const ne=N.getAttributes();for(const j in ne)if(ne[j].location>=0){let fe=O[j];fe===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(fe=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(fe=I.instanceColor));const pe={};pe.attribute=fe,fe&&fe.data&&(pe.data=fe.data),H[j]=pe,X++}c.attributes=H,c.attributesNum=X,c.index=W}function w(){const I=c.newAttributes;for(let A=0,N=I.length;A<N;A++)I[A]=0}function C(I){M(I,0)}function M(I,A){const N=c.newAttributes,W=c.enabledAttributes,H=c.attributeDivisors;N[I]=1,W[I]===0&&(n.enableVertexAttribArray(I),W[I]=1),H[I]!==A&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,A),H[I]=A)}function R(){const I=c.newAttributes,A=c.enabledAttributes;for(let N=0,W=A.length;N<W;N++)A[N]!==I[N]&&(n.disableVertexAttribArray(N),A[N]=0)}function P(I,A,N,W,H,O){i.isWebGL2===!0&&(N===5124||N===5125)?n.vertexAttribIPointer(I,A,N,H,O):n.vertexAttribPointer(I,A,N,W,H,O)}function _(I,A,N,W){if(i.isWebGL2===!1&&(I.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const H=W.attributes,O=N.getAttributes(),X=A.defaultAttributeValues;for(const ne in O){const j=O[ne];if(j.location>=0){let J=H[ne];if(J===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){const fe=J.normalized,pe=J.itemSize,$=t.get(J);if($===void 0)continue;const je=$.buffer,we=$.type,Ce=$.bytesPerElement;if(J.isInterleavedBufferAttribute){const le=J.data,$e=le.stride,De=J.offset;if(le.isInstancedInterleavedBuffer){for(let ye=0;ye<j.locationSize;ye++)M(j.location+ye,le.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ye=0;ye<j.locationSize;ye++)C(j.location+ye);n.bindBuffer(34962,je);for(let ye=0;ye<j.locationSize;ye++)P(j.location+ye,pe/j.locationSize,we,fe,$e*Ce,(De+pe/j.locationSize*ye)*Ce)}else{if(J.isInstancedBufferAttribute){for(let le=0;le<j.locationSize;le++)M(j.location+le,J.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let le=0;le<j.locationSize;le++)C(j.location+le);n.bindBuffer(34962,je);for(let le=0;le<j.locationSize;le++)P(j.location+le,pe/j.locationSize,we,fe,pe*Ce,pe/j.locationSize*le*Ce)}}else if(X!==void 0){const fe=X[ne];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(j.location,fe);break;case 3:n.vertexAttrib3fv(j.location,fe);break;case 4:n.vertexAttrib4fv(j.location,fe);break;default:n.vertexAttrib1fv(j.location,fe)}}}}R()}function E(){K();for(const I in a){const A=a[I];for(const N in A){const W=A[N];for(const H in W)x(W[H].object),delete W[H];delete A[N]}delete a[I]}}function B(I){if(a[I.id]===void 0)return;const A=a[I.id];for(const N in A){const W=A[N];for(const H in W)x(W[H].object),delete W[H];delete A[N]}delete a[I.id]}function F(I){for(const A in a){const N=a[A];if(N[I.id]===void 0)continue;const W=N[I.id];for(const H in W)x(W[H].object),delete W[H];delete N[I.id]}}function K(){Z(),u=!0,c!==l&&(c=l,m(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:Z,dispose:E,releaseStatesOfGeometry:B,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:C,disableUnusedAttributes:R}}function Hb(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,d),t.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function $b(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),f=n.getParameter(35660),m=n.getParameter(3379),x=n.getParameter(34076),p=n.getParameter(34921),h=n.getParameter(36347),g=n.getParameter(36348),b=n.getParameter(36349),w=f>0,C=o||e.has("OES_texture_float"),M=w&&C,R=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:b,vertexTextures:w,floatFragmentTextures:C,floatVertexTextures:M,maxSamples:R}}function qb(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new zn,a=new cn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,m){const x=d.length!==0||f||i!==0||r;return r=f,t=u(d,m,0),i=d.length,x},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,f,m){const x=d.clippingPlanes,p=d.clipIntersection,h=d.clipShadows,g=n.get(d);if(!r||x===null||x.length===0||s&&!h)s?u(null):c();else{const b=s?0:i,w=b*4;let C=g.clippingState||null;l.value=C,C=u(x,f,w,m);for(let M=0;M!==w;++M)C[M]=t[M];g.clippingState=C,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,x){const p=d!==null?d.length:0;let h=null;if(p!==0){if(h=l.value,x!==!0||h===null){const g=m+p*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(h===null||h.length<g)&&(h=new Float32Array(g));for(let w=0,C=m;w!==p;++w,C+=4)o.copy(d[w]).applyMatrix4(b,a),o.normal.toArray(h,C),h[C+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function Xb(n){let e=new WeakMap;function t(o,a){return a===Xo?o.mapping=Hi:a===jo&&(o.mapping=$i),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Xo||a===jo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cv(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Fa extends nd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ei=4,hc=[.125,.215,.35,.446,.526,.582],Hn=20,Io=new Fa,pc=new ge;let Fo=null;const Wn=(1+Math.sqrt(5))/2,Si=1/Wn,mc=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Wn,Si),new D(0,Wn,-Si),new D(Si,0,Wn),new D(-Si,0,Wn),new D(Wn,Si,0),new D(-Wn,Si,0)];class gc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Fo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo),e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Er,format:qt,encoding:ri,depthBuffer:!1},r=xc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jb(s)),this._blurMaterial=Yb(s,e,t)}return r}_compileMaterial(e){const t=new Xt(this._lodPlanes[0],e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,i,r){const a=new Pt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(pc),u.toneMapping=Mn,u.autoClear=!1;const m=new Xs({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),x=new Xt(new Vr,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(pc),p=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):b===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const w=this._cubeSize;ms(r,b*w,g>2?w:0,w,w),u.setRenderTarget(r),p&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Hi||e.mapping===$i;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_c()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ms(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Io)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mc[(r-1)%mc.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Xt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Hn-1),p=s/x,h=isFinite(s)?1+Math.floor(u*p):Hn;h>Hn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Hn}`);const g=[];let b=0;for(let P=0;P<Hn;++P){const _=P/p,E=Math.exp(-_*_/2);g.push(E),P===0?b+=E:P<h&&(b+=2*E)}for(let P=0;P<g.length;P++)g[P]=g[P]/b;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=x,f.mipInt.value=w-i;const C=this._sizeLods[r],M=3*C*(r>w-Ei?r-w+Ei:0),R=4*(this._cubeSize-C);ms(t,M,R,3*C,2*C),l.setRenderTarget(t),l.render(d,Io)}}function jb(n){const e=[],t=[],i=[];let r=n;const s=n-Ei+1+hc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ei?l=hc[o-n+Ei-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,x=6,p=3,h=2,g=1,b=new Float32Array(p*x*m),w=new Float32Array(h*x*m),C=new Float32Array(g*x*m);for(let R=0;R<m;R++){const P=R%3*2/3-1,_=R>2?0:-1,E=[P,_,0,P+2/3,_,0,P+2/3,_+1,0,P,_,0,P+2/3,_+1,0,P,_+1,0];b.set(E,p*x*R),w.set(f,h*x*R);const B=[R,R,R,R,R,R];C.set(B,g*x*R)}const M=new Cn;M.setAttribute("position",new un(b,p)),M.setAttribute("uv",new un(w,h)),M.setAttribute("faceIndex",new un(C,g)),e.push(M),r>Ei&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xc(n,e,t){const i=new Sn(n,e,t);return i.texture.mapping=$s,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ms(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Yb(n,e,t){const i=new Float32Array(Hn),r=new D(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function vc(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function _c(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Na(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xo||l===jo,u=l===Hi||l===$i;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new gc(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new gc(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Zb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Jb(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const m=d.morphAttributes;for(const x in m){const p=m[x];for(let h=0,g=p.length;h<g;h++)e.update(p[h],34962)}}function c(d){const f=[],m=d.index,x=d.attributes.position;let p=0;if(m!==null){const b=m.array;p=m.version;for(let w=0,C=b.length;w<C;w+=3){const M=b[w+0],R=b[w+1],P=b[w+2];f.push(M,R,R,P,P,M)}}else{const b=x.array;p=x.version;for(let w=0,C=b.length/3-1;w<C;w+=3){const M=w+0,R=w+1,P=w+2;f.push(M,R,R,P,P,M)}}const h=new(ju(f)?td:ed)(f,1);h.version=p;const g=s.get(d);g&&e.remove(g),s.set(d,h)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Qb(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){n.drawElements(s,m,a,f*l),t.update(m,s,1)}function d(f,m,x){if(x===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,m,a,f*l,x),t.update(m,s,x)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function ey(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ty(n,e){return n[0]-e[0]}function ny(n,e){return Math.abs(e[1])-Math.abs(n[1])}function No(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function iy(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new at,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,h=p!==void 0?p.length:0;let g=s.get(u);if(g===void 0||g.count!==h){let N=function(){I.dispose(),s.delete(u),u.removeEventListener("dispose",N)};var x=N;g!==void 0&&g.texture.dispose();const C=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let B=0;C===!0&&(B=1),M===!0&&(B=2),R===!0&&(B=3);let F=u.attributes.position.count*B,K=1;F>e.maxTextureSize&&(K=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const Z=new Float32Array(F*K*4*h),I=new Ju(Z,F,K,h);I.type=qn,I.needsUpdate=!0;const A=B*4;for(let W=0;W<h;W++){const H=P[W],O=_[W],X=E[W],ne=F*K*4*W;for(let j=0;j<H.count;j++){const J=j*A;C===!0&&(o.fromBufferAttribute(H,j),H.normalized===!0&&No(o,H),Z[ne+J+0]=o.x,Z[ne+J+1]=o.y,Z[ne+J+2]=o.z,Z[ne+J+3]=0),M===!0&&(o.fromBufferAttribute(O,j),O.normalized===!0&&No(o,O),Z[ne+J+4]=o.x,Z[ne+J+5]=o.y,Z[ne+J+6]=o.z,Z[ne+J+7]=0),R===!0&&(o.fromBufferAttribute(X,j),X.normalized===!0&&No(o,X),Z[ne+J+8]=o.x,Z[ne+J+9]=o.y,Z[ne+J+10]=o.z,Z[ne+J+11]=X.itemSize===4?o.w:1)}}g={count:h,texture:I,size:new Ne(F,K)},s.set(u,g),u.addEventListener("dispose",N)}let b=0;for(let C=0;C<m.length;C++)b+=m[C];const w=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",w),f.getUniforms().setValue(n,"morphTargetInfluences",m),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const p=m===void 0?0:m.length;let h=i[u.id];if(h===void 0||h.length!==p){h=[];for(let M=0;M<p;M++)h[M]=[M,0];i[u.id]=h}for(let M=0;M<p;M++){const R=h[M];R[0]=M,R[1]=m[M]}h.sort(ny);for(let M=0;M<8;M++)M<p&&h[M][1]?(a[M][0]=h[M][0],a[M][1]=h[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(ty);const g=u.morphAttributes.position,b=u.morphAttributes.normal;let w=0;for(let M=0;M<8;M++){const R=a[M],P=R[0],_=R[1];P!==Number.MAX_SAFE_INTEGER&&_?(g&&u.getAttribute("morphTarget"+M)!==g[P]&&u.setAttribute("morphTarget"+M,g[P]),b&&u.getAttribute("morphNormal"+M)!==b[P]&&u.setAttribute("morphNormal"+M,b[P]),r[M]=_,w+=_):(g&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),b&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const C=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(n,"morphTargetBaseInfluence",C),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function ry(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const rd=new Bt,sd=new Ju,od=new jx,ad=new Pa,bc=[],yc=[],Mc=new Float32Array(16),Sc=new Float32Array(9),wc=new Float32Array(4);function er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=bc[r];if(s===void 0&&(s=new Float32Array(r),bc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ys(n,e){let t=yc[e];t===void 0&&(t=new Int32Array(e),yc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function sy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function cy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(bt(t,i))return;wc.set(i),n.uniformMatrix2fv(this.addr,!1,wc),yt(t,i)}}function uy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(bt(t,i))return;Sc.set(i),n.uniformMatrix3fv(this.addr,!1,Sc),yt(t,i)}}function dy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(bt(t,i))return;Mc.set(i),n.uniformMatrix4fv(this.addr,!1,Mc),yt(t,i)}}function fy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function hy(n,e){const t=this.cache;bt(t,e)||(n.uniform2iv(this.addr,e),yt(t,e))}function py(n,e){const t=this.cache;bt(t,e)||(n.uniform3iv(this.addr,e),yt(t,e))}function my(n,e){const t=this.cache;bt(t,e)||(n.uniform4iv(this.addr,e),yt(t,e))}function gy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xy(n,e){const t=this.cache;bt(t,e)||(n.uniform2uiv(this.addr,e),yt(t,e))}function vy(n,e){const t=this.cache;bt(t,e)||(n.uniform3uiv(this.addr,e),yt(t,e))}function _y(n,e){const t=this.cache;bt(t,e)||(n.uniform4uiv(this.addr,e),yt(t,e))}function by(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||rd,r)}function yy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||od,r)}function My(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ad,r)}function Sy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||sd,r)}function wy(n){switch(n){case 5126:return sy;case 35664:return oy;case 35665:return ay;case 35666:return ly;case 35674:return cy;case 35675:return uy;case 35676:return dy;case 5124:case 35670:return fy;case 35667:case 35671:return hy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return xy;case 36295:return vy;case 36296:return _y;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return Sy}}function Cy(n,e){n.uniform1fv(this.addr,e)}function Ty(n,e){const t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function Ey(n,e){const t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function Ay(n,e){const t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function Ly(n,e){const t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ry(n,e){const t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dy(n,e){const t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Py(n,e){n.uniform1iv(this.addr,e)}function Iy(n,e){n.uniform2iv(this.addr,e)}function Fy(n,e){n.uniform3iv(this.addr,e)}function Ny(n,e){n.uniform4iv(this.addr,e)}function zy(n,e){n.uniform1uiv(this.addr,e)}function ky(n,e){n.uniform2uiv(this.addr,e)}function Oy(n,e){n.uniform3uiv(this.addr,e)}function By(n,e){n.uniform4uiv(this.addr,e)}function Uy(n,e,t){const i=e.length,r=Ys(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||rd,r[s])}function Vy(n,e,t){const i=e.length,r=Ys(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||od,r[s])}function Gy(n,e,t){const i=e.length,r=Ys(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||ad,r[s])}function Wy(n,e,t){const i=e.length,r=Ys(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||sd,r[s])}function Hy(n){switch(n){case 5126:return Cy;case 35664:return Ty;case 35665:return Ey;case 35666:return Ay;case 35674:return Ly;case 35675:return Ry;case 35676:return Dy;case 5124:case 35670:return Py;case 35667:case 35671:return Iy;case 35668:case 35672:return Fy;case 35669:case 35673:return Ny;case 5125:return zy;case 36294:return ky;case 36295:return Oy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Wy}}class $y{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=wy(t.type)}}class qy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Hy(t.type)}}class Xy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function Cc(n,e){n.seq.push(e),n.map[e.id]=e}function jy(n,e,t){const i=n.name,r=i.length;for(zo.lastIndex=0;;){const s=zo.exec(i),o=zo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Cc(t,c===void 0?new $y(a,n,e):new qy(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Xy(a),Cc(t,d)),t=d}}}class vs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);jy(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Tc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Yy=0;function Ky(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Zy(n){switch(n){case ri:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Ec(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ky(n.getShaderSource(e),o)}else return r}function Jy(n,e){const t=Zy(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Qy(n,e){let t;switch(e){case sx:t="Linear";break;case ox:t="Reinhard";break;case ax:t="OptimizedCineon";break;case lx:t="ACESFilmic";break;case cx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function eM(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dr).join(`
`)}function tM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function dr(n){return n!==""}function Ac(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(n){return n.replace(iM,rM)}function rM(n,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Qo(t)}const sM=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,oM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(n){return n.replace(oM,ld).replace(sM,aM)}function aM(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ld(n,e,t,i)}function ld(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===z0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ur&&(e="SHADOWMAP_TYPE_VSM"),e}function cM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hi:case $i:e="ENVMAP_TYPE_CUBE";break;case $s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function dM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hs:e="ENVMAP_BLENDING_MULTIPLY";break;case ix:e="ENVMAP_BLENDING_MIX";break;case rx:e="ENVMAP_BLENDING_ADD";break}return e}function fM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function hM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=lM(t),c=cM(t),u=uM(t),d=dM(t),f=fM(t),m=t.isWebGL2?"":eM(t),x=tM(s),p=r.createProgram();let h,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[x].filter(dr).join(`
`),h.length>0&&(h+=`
`),g=[m,x].filter(dr).join(`
`),g.length>0&&(g+=`
`)):(h=[Dc(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),g=[m,Dc(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Le.tonemapping_pars_fragment:"",t.toneMapping!==Mn?Qy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,Jy("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),o=Qo(o),o=Ac(o,t),o=Lc(o,t),a=Qo(a),a=Ac(a,t),a=Lc(a,t),o=Rc(o),a=Rc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,g=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=b+h+o,C=b+g+a,M=Tc(r,35633,w),R=Tc(r,35632,C);if(r.attachShader(p,M),r.attachShader(p,R),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const E=r.getProgramInfoLog(p).trim(),B=r.getShaderInfoLog(M).trim(),F=r.getShaderInfoLog(R).trim();let K=!0,Z=!0;if(r.getProgramParameter(p,35714)===!1){K=!1;const I=Ec(r,M,"vertex"),A=Ec(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+I+`
`+A)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(B===""||F==="")&&(Z=!1);Z&&(this.diagnostics={runnable:K,programLog:E,vertexShader:{log:B,prefix:h},fragmentShader:{log:F,prefix:g}})}r.deleteShader(M),r.deleteShader(R);let P;this.getUniforms=function(){return P===void 0&&(P=new vs(r,p)),P};let _;return this.getAttributes=function(){return _===void 0&&(_=nM(r,p)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Yy++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=R,this}let pM=0;class mM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new gM(e);t.set(e,i)}return t.get(e)}}class gM{constructor(e){this.id=pM++,this.code=e,this.usedTimes=0}}function xM(n,e,t,i,r,s,o){const a=new Qu,l=new mM,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_,E,B,F,K){const Z=F.fog,I=K.geometry,A=_.isMeshStandardMaterial?F.environment:null,N=(_.isMeshStandardMaterial?t:e).get(_.envMap||A),W=!!N&&N.mapping===$s?N.image.height:null,H=x[_.type];_.precision!==null&&(m=r.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const O=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,X=O!==void 0?O.length:0;let ne=0;I.morphAttributes.position!==void 0&&(ne=1),I.morphAttributes.normal!==void 0&&(ne=2),I.morphAttributes.color!==void 0&&(ne=3);let j,J,fe,pe;if(H){const $e=an[H];j=$e.vertexShader,J=$e.fragmentShader}else j=_.vertexShader,J=_.fragmentShader,l.update(_),fe=l.getVertexShaderID(_),pe=l.getFragmentShaderID(_);const $=n.getRenderTarget(),je=_.alphaTest>0,we=_.clearcoat>0,Ce=_.iridescence>0;return{isWebGL2:u,shaderID:H,shaderName:_.type,vertexShader:j,fragmentShader:J,defines:_.defines,customVertexShaderID:fe,customFragmentShaderID:pe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:f,outputEncoding:$===null?n.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:ri,map:!!_.map,matcap:!!_.matcap,envMap:!!N,envMapMode:N&&N.mapping,envMapCubeUVHeight:W,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Ax,tangentSpaceNormalMap:_.normalMapType===Zi,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Ze,clearcoat:we,clearcoatMap:we&&!!_.clearcoatMap,clearcoatRoughnessMap:we&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!_.clearcoatNormalMap,iridescence:Ce,iridescenceMap:Ce&&!!_.iridescenceMap,iridescenceThicknessMap:Ce&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===Ni,alphaMap:!!_.alphaMap,alphaTest:je,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!I.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!Z,useFog:_.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:_.toneMapped?n.toneMapping:Mn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ni,flipSided:_.side===jt,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function h(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const B in _.defines)E.push(B),E.push(_.defines[B]);return _.isRawShaderMaterial===!1&&(g(E,_),b(E,_),E.push(n.outputEncoding)),E.push(_.customProgramCacheKey),E.join()}function g(_,E){_.push(E.precision),_.push(E.outputEncoding),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.combine),_.push(E.vertexUvs),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function b(_,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),E.fog&&a.enable(33),_.push(a.mask),a.disableAll(),E.useFog&&a.enable(0),E.flatShading&&a.enable(1),E.logarithmicDepthBuffer&&a.enable(2),E.skinning&&a.enable(3),E.morphTargets&&a.enable(4),E.morphNormals&&a.enable(5),E.morphColors&&a.enable(6),E.premultipliedAlpha&&a.enable(7),E.shadowMapEnabled&&a.enable(8),E.physicallyCorrectLights&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.specularIntensityMap&&a.enable(14),E.specularColorMap&&a.enable(15),E.transmission&&a.enable(16),E.transmissionMap&&a.enable(17),E.thicknessMap&&a.enable(18),E.sheen&&a.enable(19),E.sheenColorMap&&a.enable(20),E.sheenRoughnessMap&&a.enable(21),E.decodeVideoTexture&&a.enable(22),E.opaque&&a.enable(23),_.push(a.mask)}function w(_){const E=x[_.type];let B;if(E){const F=an[E];B=Jo.clone(F.uniforms)}else B=_.uniforms;return B}function C(_,E){let B;for(let F=0,K=c.length;F<K;F++){const Z=c[F];if(Z.cacheKey===E){B=Z,++B.usedTimes;break}}return B===void 0&&(B=new hM(n,E,_,s),c.push(B)),B}function M(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),_.destroy()}}function R(_){l.remove(_)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:w,acquireProgram:C,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:P}}function vM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function _M(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ic(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,m,x,p,h){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:m,groupOrder:x,renderOrder:d.renderOrder,z:p,group:h},n[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=m,g.groupOrder=x,g.renderOrder=d.renderOrder,g.z=p,g.group=h),e++,g}function a(d,f,m,x,p,h){const g=o(d,f,m,x,p,h);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function l(d,f,m,x,p,h){const g=o(d,f,m,x,p,h);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function c(d,f){t.length>1&&t.sort(d||_M),i.length>1&&i.sort(f||Pc),r.length>1&&r.sort(f||Pc)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function bM(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new Ic,n.set(i,[s])):r>=n.get(i).length?(s=new Ic,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function yM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ge};break;case"SpotLight":t={position:new D,direction:new D,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function MM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let SM=0;function wM(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function CM(n,e){const t=new yM,i=MM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,o=new et,a=new et;function l(u,d){let f=0,m=0,x=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let p=0,h=0,g=0,b=0,w=0,C=0,M=0,R=0;u.sort(wM);const P=d!==!0?Math.PI:1;for(let E=0,B=u.length;E<B;E++){const F=u[E],K=F.color,Z=F.intensity,I=F.distance,A=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=K.r*Z*P,m+=K.g*Z*P,x+=K.b*Z*P;else if(F.isLightProbe)for(let N=0;N<9;N++)r.probe[N].addScaledVector(F.sh.coefficients[N],Z);else if(F.isDirectionalLight){const N=t.get(F);if(N.color.copy(F.color).multiplyScalar(F.intensity*P),F.castShadow){const W=F.shadow,H=i.get(F);H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,r.directionalShadow[p]=H,r.directionalShadowMap[p]=A,r.directionalShadowMatrix[p]=F.shadow.matrix,C++}r.directional[p]=N,p++}else if(F.isSpotLight){const N=t.get(F);if(N.position.setFromMatrixPosition(F.matrixWorld),N.color.copy(K).multiplyScalar(Z*P),N.distance=I,N.coneCos=Math.cos(F.angle),N.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),N.decay=F.decay,F.castShadow){const W=F.shadow,H=i.get(F);H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,r.spotShadow[g]=H,r.spotShadowMap[g]=A,r.spotShadowMatrix[g]=F.shadow.matrix,R++}r.spot[g]=N,g++}else if(F.isRectAreaLight){const N=t.get(F);N.color.copy(K).multiplyScalar(Z),N.halfWidth.set(F.width*.5,0,0),N.halfHeight.set(0,F.height*.5,0),r.rectArea[b]=N,b++}else if(F.isPointLight){const N=t.get(F);if(N.color.copy(F.color).multiplyScalar(F.intensity*P),N.distance=F.distance,N.decay=F.decay,F.castShadow){const W=F.shadow,H=i.get(F);H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,r.pointShadow[h]=H,r.pointShadowMap[h]=A,r.pointShadowMatrix[h]=F.shadow.matrix,M++}r.point[h]=N,h++}else if(F.isHemisphereLight){const N=t.get(F);N.skyColor.copy(F.color).multiplyScalar(Z*P),N.groundColor.copy(F.groundColor).multiplyScalar(Z*P),r.hemi[w]=N,w++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const _=r.hash;(_.directionalLength!==p||_.pointLength!==h||_.spotLength!==g||_.rectAreaLength!==b||_.hemiLength!==w||_.numDirectionalShadows!==C||_.numPointShadows!==M||_.numSpotShadows!==R)&&(r.directional.length=p,r.spot.length=g,r.rectArea.length=b,r.point.length=h,r.hemi.length=w,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=R,_.directionalLength=p,_.pointLength=h,_.spotLength=g,_.rectAreaLength=b,_.hemiLength=w,_.numDirectionalShadows=C,_.numPointShadows=M,_.numSpotShadows=R,r.version=SM++)}function c(u,d){let f=0,m=0,x=0,p=0,h=0;const g=d.matrixWorldInverse;for(let b=0,w=u.length;b<w;b++){const C=u[b];if(C.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(C.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),x++}else if(C.isRectAreaLight){const M=r.rectArea[p];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(g),a.identity(),o.copy(C.matrixWorld),o.premultiply(g),a.extractRotation(o),M.halfWidth.set(C.width*.5,0,0),M.halfHeight.set(0,C.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(C.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(g),m++}else if(C.isHemisphereLight){const M=r.hemi[h];M.direction.setFromMatrixPosition(C.matrixWorld),M.direction.transformDirection(g),h++}}}return{setup:l,setupView:c,state:r}}function Fc(n,e){const t=new CM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function TM(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new Fc(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new Fc(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class cd extends dt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ud extends dt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const EM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LM(n,e,t){let i=new Ia;const r=new Ne,s=new Ne,o=new at,a=new cd({depthPacking:Ex}),l=new ud,c={},u=t.maxTextureSize,d={0:jt,1:Wi,2:ni},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:EM,fragmentShader:AM}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new Cn;x.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Xt(x,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wu,this.render=function(C,M,R){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||C.length===0)return;const P=n.getRenderTarget(),_=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),B=n.state;B.setBlending(kn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);for(let F=0,K=C.length;F<K;F++){const Z=C[F],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const A=I.getFrameExtents();if(r.multiply(A),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/A.x),r.x=s.x*A.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/A.y),r.y=s.y*A.y,I.mapSize.y=s.y)),I.map===null&&!I.isPointLightShadow&&this.type===ur&&(I.map=new Sn(r.x,r.y),I.map.texture.name=Z.name+".shadowMap",I.mapPass=new Sn(r.x,r.y),I.camera.updateProjectionMatrix()),I.map===null){const W={minFilter:wt,magFilter:wt,format:qt};I.map=new Sn(r.x,r.y,W),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const N=I.getViewportCount();for(let W=0;W<N;W++){const H=I.getViewport(W);o.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),B.viewport(o),I.updateMatrices(Z,W),i=I.getFrustum(),w(M,R,I.camera,Z,this.type)}!I.isPointLightShadow&&this.type===ur&&g(I,R),I.needsUpdate=!1}h.needsUpdate=!1,n.setRenderTarget(P,_,E)};function g(C,M){const R=e.update(p);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(M,null,R,f,p,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(M,null,R,m,p,null)}function b(C,M,R,P,_,E){let B=null;const F=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0?B=F:B=R.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const K=B.uuid,Z=M.uuid;let I=c[K];I===void 0&&(I={},c[K]=I);let A=I[Z];A===void 0&&(A=B.clone(),I[Z]=A),B=A}return B.visible=M.visible,B.wireframe=M.wireframe,E===ur?B.side=M.shadowSide!==null?M.shadowSide:M.side:B.side=M.shadowSide!==null?M.shadowSide:d[M.side],B.alphaMap=M.alphaMap,B.alphaTest=M.alphaTest,B.clipShadows=M.clipShadows,B.clippingPlanes=M.clippingPlanes,B.clipIntersection=M.clipIntersection,B.displacementMap=M.displacementMap,B.displacementScale=M.displacementScale,B.displacementBias=M.displacementBias,B.wireframeLinewidth=M.wireframeLinewidth,B.linewidth=M.linewidth,R.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(B.referencePosition.setFromMatrixPosition(R.matrixWorld),B.nearDistance=P,B.farDistance=_),B}function w(C,M,R,P,_){if(C.visible===!1)return;if(C.layers.test(M.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===ur)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const F=e.update(C),K=C.material;if(Array.isArray(K)){const Z=F.groups;for(let I=0,A=Z.length;I<A;I++){const N=Z[I],W=K[N.materialIndex];if(W&&W.visible){const H=b(C,W,P,R.near,R.far,_);n.renderBufferDirect(R,null,F,H,C,N)}}}else if(K.visible){const Z=b(C,K,P,R.near,R.far,_);n.renderBufferDirect(R,null,F,Z,C,null)}}const B=C.children;for(let F=0,K=B.length;F<K;F++)w(B[F],M,R,P,_)}}function RM(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const oe=new at;let re=null;const me=new at(0,0,0,0);return{setMask:function(ue){re!==ue&&!L&&(n.colorMask(ue,ue,ue,ue),re=ue)},setLocked:function(ue){L=ue},setClear:function(ue,ve,te,_e,Be){Be===!0&&(ue*=_e,ve*=_e,te*=_e),oe.set(ue,ve,te,_e),me.equals(oe)===!1&&(n.clearColor(ue,ve,te,_e),me.copy(oe))},reset:function(){L=!1,re=null,me.set(-1,0,0,0)}}}function s(){let L=!1,oe=null,re=null,me=null;return{setTest:function(ue){ue?pe(2929):$(2929)},setMask:function(ue){oe!==ue&&!L&&(n.depthMask(ue),oe=ue)},setFunc:function(ue){if(re!==ue){if(ue)switch(ue){case K0:n.depthFunc(512);break;case Z0:n.depthFunc(519);break;case J0:n.depthFunc(513);break;case qo:n.depthFunc(515);break;case Q0:n.depthFunc(514);break;case ex:n.depthFunc(518);break;case tx:n.depthFunc(516);break;case nx:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);re=ue}},setLocked:function(ue){L=ue},setClear:function(ue){me!==ue&&(n.clearDepth(ue),me=ue)},reset:function(){L=!1,oe=null,re=null,me=null}}}function o(){let L=!1,oe=null,re=null,me=null,ue=null,ve=null,te=null,_e=null,Be=null;return{setTest:function(Ue){L||(Ue?pe(2960):$(2960))},setMask:function(Ue){oe!==Ue&&!L&&(n.stencilMask(Ue),oe=Ue)},setFunc:function(Ue,gt,en){(re!==Ue||me!==gt||ue!==en)&&(n.stencilFunc(Ue,gt,en),re=Ue,me=gt,ue=en)},setOp:function(Ue,gt,en){(ve!==Ue||te!==gt||_e!==en)&&(n.stencilOp(Ue,gt,en),ve=Ue,te=gt,_e=en)},setLocked:function(Ue){L=Ue},setClear:function(Ue){Be!==Ue&&(n.clearStencil(Ue),Be=Ue)},reset:function(){L=!1,oe=null,re=null,me=null,ue=null,ve=null,te=null,_e=null,Be=null}}}const a=new r,l=new s,c=new o;let u={},d={},f=new WeakMap,m=[],x=null,p=!1,h=null,g=null,b=null,w=null,C=null,M=null,R=null,P=!1,_=null,E=null,B=null,F=null,K=null;const Z=n.getParameter(35661);let I=!1,A=0;const N=n.getParameter(7938);N.indexOf("WebGL")!==-1?(A=parseFloat(/^WebGL (\d)/.exec(N)[1]),I=A>=1):N.indexOf("OpenGL ES")!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),I=A>=2);let W=null,H={};const O=n.getParameter(3088),X=n.getParameter(2978),ne=new at().fromArray(O),j=new at().fromArray(X);function J(L,oe,re){const me=new Uint8Array(4),ue=n.createTexture();n.bindTexture(L,ue),n.texParameteri(L,10241,9728),n.texParameteri(L,10240,9728);for(let ve=0;ve<re;ve++)n.texImage2D(oe+ve,0,6408,1,1,0,6408,5121,me);return ue}const fe={};fe[3553]=J(3553,3553,1),fe[34067]=J(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pe(2929),l.setFunc(qo),ft(!1),St(wl),pe(2884),De(kn);function pe(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function $(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function je(L,oe){return d[L]!==oe?(n.bindFramebuffer(L,oe),d[L]=oe,i&&(L===36009&&(d[36160]=oe),L===36160&&(d[36009]=oe)),!0):!1}function we(L,oe){let re=m,me=!1;if(L)if(re=f.get(oe),re===void 0&&(re=[],f.set(oe,re)),L.isWebGLMultipleRenderTargets){const ue=L.texture;if(re.length!==ue.length||re[0]!==36064){for(let ve=0,te=ue.length;ve<te;ve++)re[ve]=36064+ve;re.length=ue.length,me=!0}}else re[0]!==36064&&(re[0]=36064,me=!0);else re[0]!==1029&&(re[0]=1029,me=!0);me&&(t.isWebGL2?n.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Ce(L){return x!==L?(n.useProgram(L),x=L,!0):!1}const le={[Ci]:32774,[B0]:32778,[U0]:32779};if(i)le[Al]=32775,le[Ll]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(le[Al]=L.MIN_EXT,le[Ll]=L.MAX_EXT)}const $e={[V0]:0,[G0]:1,[W0]:768,[Hu]:770,[Y0]:776,[X0]:774,[$0]:772,[H0]:769,[$u]:771,[j0]:775,[q0]:773};function De(L,oe,re,me,ue,ve,te,_e){if(L===kn){p===!0&&($(3042),p=!1);return}if(p===!1&&(pe(3042),p=!0),L!==O0){if(L!==h||_e!==P){if((g!==Ci||C!==Ci)&&(n.blendEquation(32774),g=Ci,C=Ci),_e)switch(L){case Ni:n.blendFuncSeparate(1,771,1,771);break;case Cl:n.blendFunc(1,1);break;case Tl:n.blendFuncSeparate(0,769,0,1);break;case El:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ni:n.blendFuncSeparate(770,771,1,771);break;case Cl:n.blendFunc(770,1);break;case Tl:n.blendFuncSeparate(0,769,0,1);break;case El:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,w=null,M=null,R=null,h=L,P=_e}return}ue=ue||oe,ve=ve||re,te=te||me,(oe!==g||ue!==C)&&(n.blendEquationSeparate(le[oe],le[ue]),g=oe,C=ue),(re!==b||me!==w||ve!==M||te!==R)&&(n.blendFuncSeparate($e[re],$e[me],$e[ve],$e[te]),b=re,w=me,M=ve,R=te),h=L,P=null}function ye(L,oe){L.side===ni?$(2884):pe(2884);let re=L.side===jt;oe&&(re=!re),ft(re),L.blending===Ni&&L.transparent===!1?De(kn):De(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const me=L.stencilWrite;c.setTest(me),me&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Qt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?pe(32926):$(32926)}function ft(L){_!==L&&(L?n.frontFace(2304):n.frontFace(2305),_=L)}function St(L){L!==F0?(pe(2884),L!==E&&(L===wl?n.cullFace(1029):L===N0?n.cullFace(1028):n.cullFace(1032))):$(2884),E=L}function Et(L){L!==B&&(I&&n.lineWidth(L),B=L)}function Qt(L,oe,re){L?(pe(32823),(F!==oe||K!==re)&&(n.polygonOffset(oe,re),F=oe,K=re)):$(32823)}function ct(L){L?pe(3089):$(3089)}function Xe(L){L===void 0&&(L=33984+Z-1),W!==L&&(n.activeTexture(L),W=L)}function pn(L,oe){W===null&&Xe();let re=H[W];re===void 0&&(re={type:void 0,texture:void 0},H[W]=re),(re.type!==L||re.texture!==oe)&&(n.bindTexture(L,oe||fe[L]),re.type=L,re.texture=oe)}function mn(){const L=H[W];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function v(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(L){ne.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ne.copy(L))}function de(L){j.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),j.copy(L))}function ce(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},W=null,H={},d={},f=new WeakMap,m=[],x=null,p=!1,h=null,g=null,b=null,w=null,C=null,M=null,R=null,P=!1,_=null,E=null,B=null,F=null,K=null,ne.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:pe,disable:$,bindFramebuffer:je,drawBuffers:we,useProgram:Ce,setBlending:De,setMaterial:ye,setFlipSided:ft,setCullFace:St,setLineWidth:Et,setPolygonOffset:Qt,setScissorTest:ct,activeTexture:Xe,bindTexture:pn,unbindTexture:mn,compressedTexImage2D:S,texImage2D:Me,texImage3D:V,texStorage2D:ie,texStorage3D:ae,texSubImage2D:v,texSubImage3D:G,compressedTexSubImage2D:Q,scissor:he,viewport:de,reset:ce}}function DM(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(S,v){return g?new OffscreenCanvas(S,v):Ar("canvas")}function w(S,v,G,Q){let ie=1;if((S.width>Q||S.height>Q)&&(ie=Q/Math.max(S.width,S.height)),ie<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ae=v?As:Math.floor,Me=ae(ie*S.width),V=ae(ie*S.height);p===void 0&&(p=b(Me,V));const he=G?b(Me,V):p;return he.width=Me,he.height=V,he.getContext("2d").drawImage(S,0,0,Me,V),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Me+"x"+V+")."),he}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function C(S){return Zo(S.width)&&Zo(S.height)}function M(S){return a?!1:S.wrapS!==Ht||S.wrapT!==Ht||S.minFilter!==wt&&S.minFilter!==kt}function R(S,v){return S.generateMipmaps&&v&&S.minFilter!==wt&&S.minFilter!==kt}function P(S){n.generateMipmap(S)}function _(S,v,G,Q,ie=!1){if(a===!1)return v;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ae=v;return v===6403&&(G===5126&&(ae=33326),G===5131&&(ae=33325),G===5121&&(ae=33321)),v===33319&&(G===5126&&(ae=33328),G===5131&&(ae=33327),G===5121&&(ae=33323)),v===6408&&(G===5126&&(ae=34836),G===5131&&(ae=34842),G===5121&&(ae=Q===Ze&&ie===!1?35907:32856),G===32819&&(ae=32854),G===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function E(S,v,G){return R(S,G)===!0||S.isFramebufferTexture&&S.minFilter!==wt&&S.minFilter!==kt?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function B(S){return S===wt||S===Rl||S===Dl?9728:9729}function F(S){const v=S.target;v.removeEventListener("dispose",F),Z(v),v.isVideoTexture&&x.delete(v)}function K(S){const v=S.target;v.removeEventListener("dispose",K),A(v)}function Z(S){const v=i.get(S);if(v.__webglInit===void 0)return;const G=S.source,Q=h.get(G);if(Q){const ie=Q[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&I(S),Object.keys(Q).length===0&&h.delete(G)}i.remove(S)}function I(S){const v=i.get(S);n.deleteTexture(v.__webglTexture);const G=S.source,Q=h.get(G);delete Q[v.__cacheKey],o.memory.textures--}function A(S){const v=S.texture,G=i.get(S),Q=i.get(v);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)n.deleteFramebuffer(G.__webglFramebuffer[ie]),G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[ie]);else{if(n.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ie=0;ie<G.__webglColorRenderbuffer.length;ie++)G.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[ie]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ie=0,ae=v.length;ie<ae;ie++){const Me=i.get(v[ie]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(v[ie])}i.remove(v),i.remove(S)}let N=0;function W(){N=0}function H(){const S=N;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),N+=1,S}function O(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.encoding),v.join()}function X(S,v){const G=i.get(S);if(S.isVideoTexture&&pn(S),S.isRenderTargetTexture===!1&&S.version>0&&G.__version!==S.version){const Q=S.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(G,S,v);return}}t.activeTexture(33984+v),t.bindTexture(3553,G.__webglTexture)}function ne(S,v){const G=i.get(S);if(S.version>0&&G.__version!==S.version){we(G,S,v);return}t.activeTexture(33984+v),t.bindTexture(35866,G.__webglTexture)}function j(S,v){const G=i.get(S);if(S.version>0&&G.__version!==S.version){we(G,S,v);return}t.activeTexture(33984+v),t.bindTexture(32879,G.__webglTexture)}function J(S,v){const G=i.get(S);if(S.version>0&&G.__version!==S.version){Ce(G,S,v);return}t.activeTexture(33984+v),t.bindTexture(34067,G.__webglTexture)}const fe={[Ts]:10497,[Ht]:33071,[Yo]:33648},pe={[wt]:9728,[Rl]:9984,[Dl]:9986,[kt]:9729,[ux]:9985,[qs]:9987};function $(S,v,G){if(G?(n.texParameteri(S,10242,fe[v.wrapS]),n.texParameteri(S,10243,fe[v.wrapT]),(S===32879||S===35866)&&n.texParameteri(S,32882,fe[v.wrapR]),n.texParameteri(S,10240,pe[v.magFilter]),n.texParameteri(S,10241,pe[v.minFilter])):(n.texParameteri(S,10242,33071),n.texParameteri(S,10243,33071),(S===32879||S===35866)&&n.texParameteri(S,32882,33071),(v.wrapS!==Ht||v.wrapT!==Ht)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,10240,B(v.magFilter)),n.texParameteri(S,10241,B(v.minFilter)),v.minFilter!==wt&&v.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(v.type===qn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Er&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(S,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function je(S,v){let G=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",F));const Q=v.source;let ie=h.get(Q);ie===void 0&&(ie={},h.set(Q,ie));const ae=O(v);if(ae!==S.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[ae].usedTimes++;const Me=ie[S.__cacheKey];Me!==void 0&&(ie[S.__cacheKey].usedTimes--,Me.usedTimes===0&&I(v)),S.__cacheKey=ae,S.__webglTexture=ie[ae].texture}return G}function we(S,v,G){let Q=3553;v.isDataArrayTexture&&(Q=35866),v.isData3DTexture&&(Q=32879);const ie=je(S,v),ae=v.source;if(t.activeTexture(33984+G),t.bindTexture(Q,S.__webglTexture),ae.version!==ae.__currentVersion||ie===!0){n.pixelStorei(37440,v.flipY),n.pixelStorei(37441,v.premultiplyAlpha),n.pixelStorei(3317,v.unpackAlignment),n.pixelStorei(37443,0);const Me=M(v)&&C(v.image)===!1;let V=w(v.image,Me,!1,u);V=mn(v,V);const he=C(V)||a,de=s.convert(v.format,v.encoding);let ce=s.convert(v.type),L=_(v.internalFormat,de,ce,v.encoding,v.isVideoTexture);$(Q,v,he);let oe;const re=v.mipmaps,me=a&&v.isVideoTexture!==!0,ue=ae.__currentVersion===void 0||ie===!0,ve=E(v,V,he);if(v.isDepthTexture)L=6402,a?v.type===qn?L=36012:v.type===$n?L=33190:v.type===zi?L=35056:L=33189:v.type===qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===jn&&L===6402&&v.type!==Xu&&v.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=$n,ce=s.convert(v.type)),v.format===qi&&L===6402&&(L=34041,v.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=zi,ce=s.convert(v.type))),ue&&(me?t.texStorage2D(3553,1,L,V.width,V.height):t.texImage2D(3553,0,L,V.width,V.height,0,de,ce,null));else if(v.isDataTexture)if(re.length>0&&he){me&&ue&&t.texStorage2D(3553,ve,L,re[0].width,re[0].height);for(let te=0,_e=re.length;te<_e;te++)oe=re[te],me?t.texSubImage2D(3553,te,0,0,oe.width,oe.height,de,ce,oe.data):t.texImage2D(3553,te,L,oe.width,oe.height,0,de,ce,oe.data);v.generateMipmaps=!1}else me?(ue&&t.texStorage2D(3553,ve,L,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,de,ce,V.data)):t.texImage2D(3553,0,L,V.width,V.height,0,de,ce,V.data);else if(v.isCompressedTexture){me&&ue&&t.texStorage2D(3553,ve,L,re[0].width,re[0].height);for(let te=0,_e=re.length;te<_e;te++)oe=re[te],v.format!==qt?de!==null?me?t.compressedTexSubImage2D(3553,te,0,0,oe.width,oe.height,de,oe.data):t.compressedTexImage2D(3553,te,L,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage2D(3553,te,0,0,oe.width,oe.height,de,ce,oe.data):t.texImage2D(3553,te,L,oe.width,oe.height,0,de,ce,oe.data)}else if(v.isDataArrayTexture)me?(ue&&t.texStorage3D(35866,ve,L,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,de,ce,V.data)):t.texImage3D(35866,0,L,V.width,V.height,V.depth,0,de,ce,V.data);else if(v.isData3DTexture)me?(ue&&t.texStorage3D(32879,ve,L,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,de,ce,V.data)):t.texImage3D(32879,0,L,V.width,V.height,V.depth,0,de,ce,V.data);else if(v.isFramebufferTexture){if(ue)if(me)t.texStorage2D(3553,ve,L,V.width,V.height);else{let te=V.width,_e=V.height;for(let Be=0;Be<ve;Be++)t.texImage2D(3553,Be,L,te,_e,0,de,ce,null),te>>=1,_e>>=1}}else if(re.length>0&&he){me&&ue&&t.texStorage2D(3553,ve,L,re[0].width,re[0].height);for(let te=0,_e=re.length;te<_e;te++)oe=re[te],me?t.texSubImage2D(3553,te,0,0,de,ce,oe):t.texImage2D(3553,te,L,de,ce,oe);v.generateMipmaps=!1}else me?(ue&&t.texStorage2D(3553,ve,L,V.width,V.height),t.texSubImage2D(3553,0,0,0,de,ce,V)):t.texImage2D(3553,0,L,de,ce,V);R(v,he)&&P(Q),ae.__currentVersion=ae.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Ce(S,v,G){if(v.image.length!==6)return;const Q=je(S,v),ie=v.source;if(t.activeTexture(33984+G),t.bindTexture(34067,S.__webglTexture),ie.version!==ie.__currentVersion||Q===!0){n.pixelStorei(37440,v.flipY),n.pixelStorei(37441,v.premultiplyAlpha),n.pixelStorei(3317,v.unpackAlignment),n.pixelStorei(37443,0);const ae=v.isCompressedTexture||v.image[0].isCompressedTexture,Me=v.image[0]&&v.image[0].isDataTexture,V=[];for(let te=0;te<6;te++)!ae&&!Me?V[te]=w(v.image[te],!1,!0,c):V[te]=Me?v.image[te].image:v.image[te],V[te]=mn(v,V[te]);const he=V[0],de=C(he)||a,ce=s.convert(v.format,v.encoding),L=s.convert(v.type),oe=_(v.internalFormat,ce,L,v.encoding),re=a&&v.isVideoTexture!==!0,me=ie.__currentVersion===void 0||Q===!0;let ue=E(v,he,de);$(34067,v,de);let ve;if(ae){re&&me&&t.texStorage2D(34067,ue,oe,he.width,he.height);for(let te=0;te<6;te++){ve=V[te].mipmaps;for(let _e=0;_e<ve.length;_e++){const Be=ve[_e];v.format!==qt?ce!==null?re?t.compressedTexSubImage2D(34069+te,_e,0,0,Be.width,Be.height,ce,Be.data):t.compressedTexImage2D(34069+te,_e,oe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?t.texSubImage2D(34069+te,_e,0,0,Be.width,Be.height,ce,L,Be.data):t.texImage2D(34069+te,_e,oe,Be.width,Be.height,0,ce,L,Be.data)}}}else{ve=v.mipmaps,re&&me&&(ve.length>0&&ue++,t.texStorage2D(34067,ue,oe,V[0].width,V[0].height));for(let te=0;te<6;te++)if(Me){re?t.texSubImage2D(34069+te,0,0,0,V[te].width,V[te].height,ce,L,V[te].data):t.texImage2D(34069+te,0,oe,V[te].width,V[te].height,0,ce,L,V[te].data);for(let _e=0;_e<ve.length;_e++){const Ue=ve[_e].image[te].image;re?t.texSubImage2D(34069+te,_e+1,0,0,Ue.width,Ue.height,ce,L,Ue.data):t.texImage2D(34069+te,_e+1,oe,Ue.width,Ue.height,0,ce,L,Ue.data)}}else{re?t.texSubImage2D(34069+te,0,0,0,ce,L,V[te]):t.texImage2D(34069+te,0,oe,ce,L,V[te]);for(let _e=0;_e<ve.length;_e++){const Be=ve[_e];re?t.texSubImage2D(34069+te,_e+1,0,0,ce,L,Be.image[te]):t.texImage2D(34069+te,_e+1,oe,ce,L,Be.image[te])}}}R(v,de)&&P(34067),ie.__currentVersion=ie.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function le(S,v,G,Q,ie){const ae=s.convert(G.format,G.encoding),Me=s.convert(G.type),V=_(G.internalFormat,ae,Me,G.encoding);i.get(v).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,V,v.width,v.height,v.depth,0,ae,Me,null):t.texImage2D(ie,0,V,v.width,v.height,0,ae,Me,null)),t.bindFramebuffer(36160,S),Xe(v)?f.framebufferTexture2DMultisampleEXT(36160,Q,ie,i.get(G).__webglTexture,0,ct(v)):n.framebufferTexture2D(36160,Q,ie,i.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function $e(S,v,G){if(n.bindRenderbuffer(36161,S),v.depthBuffer&&!v.stencilBuffer){let Q=33189;if(G||Xe(v)){const ie=v.depthTexture;ie&&ie.isDepthTexture&&(ie.type===qn?Q=36012:ie.type===$n&&(Q=33190));const ae=ct(v);Xe(v)?f.renderbufferStorageMultisampleEXT(36161,ae,Q,v.width,v.height):n.renderbufferStorageMultisample(36161,ae,Q,v.width,v.height)}else n.renderbufferStorage(36161,Q,v.width,v.height);n.framebufferRenderbuffer(36160,36096,36161,S)}else if(v.depthBuffer&&v.stencilBuffer){const Q=ct(v);G&&Xe(v)===!1?n.renderbufferStorageMultisample(36161,Q,35056,v.width,v.height):Xe(v)?f.renderbufferStorageMultisampleEXT(36161,Q,35056,v.width,v.height):n.renderbufferStorage(36161,34041,v.width,v.height),n.framebufferRenderbuffer(36160,33306,36161,S)}else{const Q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ie=0;ie<Q.length;ie++){const ae=Q[ie],Me=s.convert(ae.format,ae.encoding),V=s.convert(ae.type),he=_(ae.internalFormat,Me,V,ae.encoding),de=ct(v);G&&Xe(v)===!1?n.renderbufferStorageMultisample(36161,de,he,v.width,v.height):Xe(v)?f.renderbufferStorageMultisampleEXT(36161,de,he,v.width,v.height):n.renderbufferStorage(36161,he,v.width,v.height)}}n.bindRenderbuffer(36161,null)}function De(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);const Q=i.get(v.depthTexture).__webglTexture,ie=ct(v);if(v.depthTexture.format===jn)Xe(v)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ie):n.framebufferTexture2D(36160,36096,3553,Q,0);else if(v.depthTexture.format===qi)Xe(v)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ie):n.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function ye(S){const v=i.get(S),G=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");De(v.__webglFramebuffer,S)}else if(G){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=n.createRenderbuffer(),$e(v.__webglDepthbuffer[Q],S,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),$e(v.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function ft(S,v,G){const Q=i.get(S);v!==void 0&&le(Q.__webglFramebuffer,S,S.texture,36064,3553),G!==void 0&&ye(S)}function St(S){const v=S.texture,G=i.get(S),Q=i.get(v);S.addEventListener("dispose",K),S.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=v.version,o.memory.textures++);const ie=S.isWebGLCubeRenderTarget===!0,ae=S.isWebGLMultipleRenderTargets===!0,Me=C(S)||a;if(ie){G.__webglFramebuffer=[];for(let V=0;V<6;V++)G.__webglFramebuffer[V]=n.createFramebuffer()}else{if(G.__webglFramebuffer=n.createFramebuffer(),ae)if(r.drawBuffers){const V=S.texture;for(let he=0,de=V.length;he<de;he++){const ce=i.get(V[he]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&Xe(S)===!1){const V=ae?v:[v];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let he=0;he<V.length;he++){const de=V[he];G.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(36161,G.__webglColorRenderbuffer[he]);const ce=s.convert(de.format,de.encoding),L=s.convert(de.type),oe=_(de.internalFormat,ce,L,de.encoding),re=ct(S);n.renderbufferStorageMultisample(36161,re,oe,S.width,S.height),n.framebufferRenderbuffer(36160,36064+he,36161,G.__webglColorRenderbuffer[he])}n.bindRenderbuffer(36161,null),S.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),$e(G.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,Q.__webglTexture),$(34067,v,Me);for(let V=0;V<6;V++)le(G.__webglFramebuffer[V],S,v,36064,34069+V);R(v,Me)&&P(34067),t.unbindTexture()}else if(ae){const V=S.texture;for(let he=0,de=V.length;he<de;he++){const ce=V[he],L=i.get(ce);t.bindTexture(3553,L.__webglTexture),$(3553,ce,Me),le(G.__webglFramebuffer,S,ce,36064+he,3553),R(ce,Me)&&P(3553)}t.unbindTexture()}else{let V=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?V=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(V,Q.__webglTexture),$(V,v,Me),le(G.__webglFramebuffer,S,v,36064,V),R(v,Me)&&P(V),t.unbindTexture()}S.depthBuffer&&ye(S)}function Et(S){const v=C(S)||a,G=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0,ie=G.length;Q<ie;Q++){const ae=G[Q];if(R(ae,v)){const Me=S.isWebGLCubeRenderTarget?34067:3553,V=i.get(ae).__webglTexture;t.bindTexture(Me,V),P(Me),t.unbindTexture()}}}function Qt(S){if(a&&S.samples>0&&Xe(S)===!1){const v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],G=S.width,Q=S.height;let ie=16384;const ae=[],Me=S.stencilBuffer?33306:36096,V=i.get(S),he=S.isWebGLMultipleRenderTargets===!0;if(he)for(let de=0;de<v.length;de++)t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,V.__webglFramebuffer),n.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,V.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,V.__webglFramebuffer);for(let de=0;de<v.length;de++){ae.push(36064+de),S.depthBuffer&&ae.push(Me);const ce=V.__ignoreDepthValues!==void 0?V.__ignoreDepthValues:!1;if(ce===!1&&(S.depthBuffer&&(ie|=256),S.stencilBuffer&&(ie|=1024)),he&&n.framebufferRenderbuffer(36008,36064,36161,V.__webglColorRenderbuffer[de]),ce===!0&&(n.invalidateFramebuffer(36008,[Me]),n.invalidateFramebuffer(36009,[Me])),he){const L=i.get(v[de]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,L,0)}n.blitFramebuffer(0,0,G,Q,0,0,G,Q,ie,9728),m&&n.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),he)for(let de=0;de<v.length;de++){t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+de,36161,V.__webglColorRenderbuffer[de]);const ce=i.get(v[de]).__webglTexture;t.bindFramebuffer(36160,V.__webglFramebuffer),n.framebufferTexture2D(36009,36064+de,3553,ce,0)}t.bindFramebuffer(36009,V.__webglMultisampledFramebuffer)}}function ct(S){return Math.min(d,S.samples)}function Xe(S){const v=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function pn(S){const v=o.render.frame;x.get(S)!==v&&(x.set(S,v),S.update())}function mn(S,v){const G=S.encoding,Q=S.format,ie=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Ko||G!==ri&&(G===Ze?a===!1?e.has("EXT_sRGB")===!0&&Q===qt?(S.format=Ko,S.minFilter=kt,S.generateMipmaps=!1):v=Ku.sRGBToLinear(v):(Q!==qt||ie!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),v}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=X,this.setTexture2DArray=ne,this.setTexture3D=j,this.setTextureCube=J,this.rebindTextures=ft,this.setupRenderTarget=St,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Xe}function PM(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===ii)return 5121;if(s===px)return 32819;if(s===mx)return 32820;if(s===dx)return 5120;if(s===fx)return 5122;if(s===Xu)return 5123;if(s===hx)return 5124;if(s===$n)return 5125;if(s===qn)return 5126;if(s===Er)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===gx)return 6406;if(s===qt)return 6408;if(s===vx)return 6409;if(s===_x)return 6410;if(s===jn)return 6402;if(s===qi)return 34041;if(s===bx)return 6403;if(s===xx)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Ko)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===yx)return 36244;if(s===Mx)return 33319;if(s===Sx)return 33320;if(s===wx)return 36249;if(s===oo||s===ao||s===lo||s===co)if(o===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===oo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ao)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===oo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ao)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===co)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pl||s===Il||s===Fl||s===Nl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Pl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Il)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Cx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===zl||s===kl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===zl)return o===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===kl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ol||s===Bl||s===Ul||s===Vl||s===Gl||s===Wl||s===Hl||s===$l||s===ql||s===Xl||s===jl||s===Yl||s===Kl||s===Zl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ol)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Bl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ul)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$l)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ql)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Kl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Jl)return o===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===zi?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class IM extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gs extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FM={type:"move"};class ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FM))),c&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const b=new gs;b.matrixAutoUpdate=!1,b.visible=!1,c.joints[p.jointName]=b,c.add(b)}const g=c.joints[p.jointName];h!==null&&(g.matrix.fromArray(h.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=h.radius),g.visible=h!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class NM extends Bt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:jn,u!==jn&&u!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===jn&&(i=$n),i===void 0&&u===qi&&(i=zi),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1}}class zM extends Ji{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,d=null,f=null,m=null;const x=t.getContextAttributes();let p=null,h=null;const g=[],b=new Map,w=new Pt;w.layers.enable(1),w.viewport=new at;const C=new Pt;C.layers.enable(2),C.viewport=new at;const M=[w,C],R=new IM;R.layers.enable(1),R.layers.enable(2);let P=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let X=g[O];return X===void 0&&(X=new ko,g[O]=X),X.getTargetRaySpace()},this.getControllerGrip=function(O){let X=g[O];return X===void 0&&(X=new ko,g[O]=X),X.getGripSpace()},this.getHand=function(O){let X=g[O];return X===void 0&&(X=new ko,g[O]=X),X.getHandSpace()};function E(O){const X=b.get(O.inputSource);X!==void 0&&X.dispatchEvent({type:O.type,data:O.inputSource})}function B(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",F),b.forEach(function(O,X){O!==void 0&&O.disconnect(X)}),b.clear(),P=null,_=null,e.setRenderTarget(p),f=null,d=null,u=null,r=null,h=null,H.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",B),r.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:f}),h=new Sn(f.framebufferWidth,f.framebufferHeight,{format:qt,type:ii,encoding:e.outputEncoding})}else{let X=null,ne=null,j=null;x.depth&&(j=x.stencil?35056:33190,X=x.stencil?qi:jn,ne=x.stencil?zi:$n);const J={colorFormat:e.outputEncoding===Ze?35907:32856,depthFormat:j,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(J),r.updateRenderState({layers:[d]}),h=new Sn(d.textureWidth,d.textureHeight,{format:qt,type:ii,depthTexture:new NM(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const fe=e.properties.get(h);fe.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),H.setContext(r),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function F(O){const X=r.inputSources;for(let ne=0;ne<X.length;ne++){const j=X[ne].handedness==="right"?1:0;b.set(X[ne],g[j])}for(let ne=0;ne<O.removed.length;ne++){const j=O.removed[ne],J=b.get(j);J&&(J.dispatchEvent({type:"disconnected",data:j}),b.delete(j))}for(let ne=0;ne<O.added.length;ne++){const j=O.added[ne],J=b.get(j);J&&J.dispatchEvent({type:"connected",data:j})}}const K=new D,Z=new D;function I(O,X,ne){K.setFromMatrixPosition(X.matrixWorld),Z.setFromMatrixPosition(ne.matrixWorld);const j=K.distanceTo(Z),J=X.projectionMatrix.elements,fe=ne.projectionMatrix.elements,pe=J[14]/(J[10]-1),$=J[14]/(J[10]+1),je=(J[9]+1)/J[5],we=(J[9]-1)/J[5],Ce=(J[8]-1)/J[0],le=(fe[8]+1)/fe[0],$e=pe*Ce,De=pe*le,ye=j/(-Ce+le),ft=ye*-Ce;X.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(ft),O.translateZ(ye),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const St=pe+ye,Et=$+ye,Qt=$e-ft,ct=De+(j-ft),Xe=je*$/Et*St,pn=we*$/Et*St;O.projectionMatrix.makePerspective(Qt,ct,Xe,pn,St,Et)}function A(O,X){X===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(X.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;R.near=C.near=w.near=O.near,R.far=C.far=w.far=O.far,(P!==R.near||_!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),P=R.near,_=R.far);const X=O.parent,ne=R.cameras;A(R,X);for(let J=0;J<ne.length;J++)A(ne[J],X);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),O.position.copy(R.position),O.quaternion.copy(R.quaternion),O.scale.copy(R.scale),O.matrix.copy(R.matrix),O.matrixWorld.copy(R.matrixWorld);const j=O.children;for(let J=0,fe=j.length;J<fe;J++)j[J].updateMatrixWorld(!0);ne.length===2?I(R,w,C):R.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(O){d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)};let N=null;function W(O,X){if(c=X.getViewerPose(l||o),m=X,c!==null){const j=c.views;f!==null&&(e.setRenderTargetFramebuffer(h,f.framebuffer),e.setRenderTarget(h));let J=!1;j.length!==R.cameras.length&&(R.cameras.length=0,J=!0);for(let fe=0;fe<j.length;fe++){const pe=j[fe];let $=null;if(f!==null)$=f.getViewport(pe);else{const we=u.getViewSubImage(d,pe);$=we.viewport,fe===0&&(e.setRenderTargetTextures(h,we.colorTexture,d.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(h))}let je=M[fe];je===void 0&&(je=new Pt,je.layers.enable(fe),je.viewport=new at,M[fe]=je),je.matrix.fromArray(pe.transform.matrix),je.projectionMatrix.fromArray(pe.projectionMatrix),je.viewport.set($.x,$.y,$.width,$.height),fe===0&&R.matrix.copy(je.matrix),J===!0&&R.cameras.push(je)}}const ne=r.inputSources;for(let j=0;j<g.length;j++){const J=ne[j],fe=b.get(J);fe!==void 0&&fe.update(J,X,l||o)}N&&N(O,X),m=null}const H=new id;H.setAnimationLoop(W),this.setAnimationLoop=function(O){N=O},this.dispose=function(){}}}function kM(n,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,g,b,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),u(p,h)):h.isMeshPhongMaterial?(r(p,h),c(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&f(p,h,w)):h.isMeshMatcapMaterial?(r(p,h),m(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),x(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,g,b):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===jt&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===jt&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const g=e.get(h).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const C=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*C}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let b;h.map?b=h.map:h.specularMap?b=h.specularMap:h.displacementMap?b=h.displacementMap:h.normalMap?b=h.normalMap:h.bumpMap?b=h.bumpMap:h.roughnessMap?b=h.roughnessMap:h.metalnessMap?b=h.metalnessMap:h.alphaMap?b=h.alphaMap:h.emissiveMap?b=h.emissiveMap:h.clearcoatMap?b=h.clearcoatMap:h.clearcoatNormalMap?b=h.clearcoatNormalMap:h.clearcoatRoughnessMap?b=h.clearcoatRoughnessMap:h.iridescenceMap?b=h.iridescenceMap:h.iridescenceThicknessMap?b=h.iridescenceThicknessMap:h.specularIntensityMap?b=h.specularIntensityMap:h.specularColorMap?b=h.specularColorMap:h.transmissionMap?b=h.transmissionMap:h.thicknessMap?b=h.thicknessMap:h.sheenColorMap?b=h.sheenColorMap:h.sheenRoughnessMap&&(b=h.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let w;h.aoMap?w=h.aoMap:h.lightMap&&(w=h.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uv2Transform.value.copy(w.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,g,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*g,p.scale.value=b*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let w;h.map?w=h.map:h.alphaMap&&(w=h.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let g;h.map?g=h.map:h.alphaMap&&(g=h.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function f(p,h,g){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===jt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function OM(){const n=Ar("canvas");return n.style.display="block",n}function dd(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:OM(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let d=null,f=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ri,this.physicallyCorrectLights=!1,this.toneMapping=Mn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,g=0,b=0,w=null,C=-1,M=null;const R=new at,P=new at;let _=null,E=e.width,B=e.height,F=1,K=null,Z=null;const I=new at(0,0,E,B),A=new at(0,0,E,B);let N=!1;const W=new Ia;let H=!1,O=!1,X=null;const ne=new et,j=new Ne,J=new D,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return w===null?F:1}let $=t;function je(y,z){for(let U=0;U<y.length;U++){const k=y[U],q=e.getContext(k,z);if(q!==null)return q}return null}try{const y={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${La}`),e.addEventListener("webglcontextlost",L,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",re,!1),$===null){const z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&z.shift(),$=je(z,y),$===null)throw je(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let we,Ce,le,$e,De,ye,ft,St,Et,Qt,ct,Xe,pn,mn,S,v,G,Q,ie,ae,Me,V,he;function de(){we=new Zb($),Ce=new $b($,we,n),we.init(Ce),V=new PM($,we,Ce),le=new RM($,we,Ce),$e=new ey,De=new vM,ye=new DM($,we,le,De,Ce,V,$e),ft=new Xb(p),St=new Kb(p),Et=new fv($,Ce),he=new Wb($,we,Et,Ce),Qt=new Jb($,Et,$e,he),ct=new ry($,Qt,Et,$e),ie=new iy($,Ce,ye),v=new qb(De),Xe=new xM(p,ft,St,we,Ce,he,v),pn=new kM(p,De),mn=new bM,S=new TM(we,Ce),Q=new Gb(p,ft,le,ct,u,o),G=new LM(p,ct,Ce),ae=new Hb($,we,$e,Ce),Me=new Qb($,we,$e,Ce),$e.programs=Xe.programs,p.capabilities=Ce,p.extensions=we,p.properties=De,p.renderLists=mn,p.shadowMap=G,p.state=le,p.info=$e}de();const ce=new zM(p,$);this.xr=ce,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const y=we.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=we.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(y){y!==void 0&&(F=y,this.setSize(E,B,!1))},this.getSize=function(y){return y.set(E,B)},this.setSize=function(y,z,U){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=y,B=z,e.width=Math.floor(y*F),e.height=Math.floor(z*F),U!==!1&&(e.style.width=y+"px",e.style.height=z+"px"),this.setViewport(0,0,y,z)},this.getDrawingBufferSize=function(y){return y.set(E*F,B*F).floor()},this.setDrawingBufferSize=function(y,z,U){E=y,B=z,F=U,e.width=Math.floor(y*U),e.height=Math.floor(z*U),this.setViewport(0,0,y,z)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(I)},this.setViewport=function(y,z,U,k){y.isVector4?I.set(y.x,y.y,y.z,y.w):I.set(y,z,U,k),le.viewport(R.copy(I).multiplyScalar(F).floor())},this.getScissor=function(y){return y.copy(A)},this.setScissor=function(y,z,U,k){y.isVector4?A.set(y.x,y.y,y.z,y.w):A.set(y,z,U,k),le.scissor(P.copy(A).multiplyScalar(F).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(y){le.setScissorTest(N=y)},this.setOpaqueSort=function(y){K=y},this.setTransparentSort=function(y){Z=y},this.getClearColor=function(y){return y.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(y=!0,z=!0,U=!0){let k=0;y&&(k|=16384),z&&(k|=256),U&&(k|=1024),$.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",re,!1),mn.dispose(),S.dispose(),De.dispose(),ft.dispose(),St.dispose(),ct.dispose(),he.dispose(),Xe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Be),ce.removeEventListener("sessionend",Ue),X&&(X.dispose(),X=null),gt.stop()};function L(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const y=$e.autoReset,z=G.enabled,U=G.autoUpdate,k=G.needsUpdate,q=G.type;de(),$e.autoReset=y,G.enabled=z,G.autoUpdate=U,G.needsUpdate=k,G.type=q}function re(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function me(y){const z=y.target;z.removeEventListener("dispose",me),ue(z)}function ue(y){ve(y),De.remove(y)}function ve(y){const z=De.get(y).programs;z!==void 0&&(z.forEach(function(U){Xe.releaseProgram(U)}),y.isShaderMaterial&&Xe.releaseShaderCache(y))}this.renderBufferDirect=function(y,z,U,k,q,xe){z===null&&(z=fe);const Se=q.isMesh&&q.matrixWorld.determinant()<0,Ae=yd(y,z,U,k,q);le.setMaterial(k,Se);let Te=U.index;const Ve=U.attributes.position;if(Te===null){if(Ve===void 0||Ve.count===0)return}else if(Te.count===0)return;let Fe=1;k.wireframe===!0&&(Te=Qt.getWireframeAttribute(U),Fe=2),he.setup(q,k,Ae,U,Te);let ze,Je=ae;Te!==null&&(ze=Et.get(Te),Je=Me,Je.setIndex(ze));const Bn=Te!==null?Te.count:Ve.count,si=U.drawRange.start*Fe,oi=U.drawRange.count*Fe,tn=xe!==null?xe.start*Fe:0,Oe=xe!==null?xe.count*Fe:1/0,ai=Math.max(si,tn),tt=Math.min(Bn,si+oi,tn+Oe)-1,nn=Math.max(0,tt-ai+1);if(nn!==0){if(q.isMesh)k.wireframe===!0?(le.setLineWidth(k.wireframeLinewidth*pe()),Je.setMode(1)):Je.setMode(4);else if(q.isLine){let Tn=k.linewidth;Tn===void 0&&(Tn=1),le.setLineWidth(Tn*pe()),q.isLineSegments?Je.setMode(1):q.isLineLoop?Je.setMode(2):Je.setMode(3)}else q.isPoints?Je.setMode(0):q.isSprite&&Je.setMode(4);if(q.isInstancedMesh)Je.renderInstances(ai,nn,q.count);else if(U.isInstancedBufferGeometry){const Tn=Math.min(U.instanceCount,U._maxInstanceCount);Je.renderInstances(ai,nn,Tn)}else Je.render(ai,nn)}},this.compile=function(y,z){f=S.get(y),f.init(),x.push(f),y.traverseVisible(function(U){U.isLight&&U.layers.test(z.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(p.physicallyCorrectLights),y.traverse(function(U){const k=U.material;if(k)if(Array.isArray(k))for(let q=0;q<k.length;q++){const xe=k[q];Ks(xe,y,U)}else Ks(k,y,U)}),x.pop(),f=null};let te=null;function _e(y){te&&te(y)}function Be(){gt.stop()}function Ue(){gt.start()}const gt=new id;gt.setAnimationLoop(_e),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(y){te=y,ce.setAnimationLoop(y),y===null?gt.stop():gt.start()},ce.addEventListener("sessionstart",Be),ce.addEventListener("sessionend",Ue),this.render=function(y,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;y.autoUpdate===!0&&y.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(z),z=ce.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,z,w),f=S.get(y,x.length),f.init(),x.push(f),ne.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W.setFromProjectionMatrix(ne),O=this.localClippingEnabled,H=v.init(this.clippingPlanes,O,z),d=mn.get(y,m.length),d.init(),m.push(d),en(y,z,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(K,Z),H===!0&&v.beginShadows();const U=f.state.shadowsArray;if(G.render(U,y,z),H===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(d,y),f.setupLights(p.physicallyCorrectLights),z.isArrayCamera){const k=z.cameras;for(let q=0,xe=k.length;q<xe;q++){const Se=k[q];Ba(d,y,Se,Se.viewport)}}else Ba(d,y,z);w!==null&&(ye.updateMultisampleRenderTarget(w),ye.updateRenderTargetMipmap(w)),y.isScene===!0&&y.onAfterRender(p,y,z),he.resetDefaultState(),C=-1,M=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function en(y,z,U,k){if(y.visible===!1)return;if(y.layers.test(z.layers)){if(y.isGroup)U=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(z);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||W.intersectsSprite(y)){k&&J.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ne);const Se=ct.update(y),Ae=y.material;Ae.visible&&d.push(y,Se,Ae,U,J.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==$e.render.frame&&(y.skeleton.update(),y.skeleton.frame=$e.render.frame),!y.frustumCulled||W.intersectsObject(y))){k&&J.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ne);const Se=ct.update(y),Ae=y.material;if(Array.isArray(Ae)){const Te=Se.groups;for(let Ve=0,Fe=Te.length;Ve<Fe;Ve++){const ze=Te[Ve],Je=Ae[ze.materialIndex];Je&&Je.visible&&d.push(y,Se,Je,U,J.z,ze)}}else Ae.visible&&d.push(y,Se,Ae,U,J.z,null)}}const xe=y.children;for(let Se=0,Ae=xe.length;Se<Ae;Se++)en(xe[Se],z,U,k)}function Ba(y,z,U,k){const q=y.opaque,xe=y.transmissive,Se=y.transparent;f.setupLightsView(U),xe.length>0&&_d(q,z,U),k&&le.viewport(R.copy(k)),q.length>0&&Wr(q,z,U),xe.length>0&&Wr(xe,z,U),Se.length>0&&Wr(Se,z,U),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function _d(y,z,U){const k=Ce.isWebGL2;X===null&&(X=new Sn(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?Er:ii,minFilter:qs,samples:k&&s===!0?4:0})),p.getDrawingBufferSize(j),k?X.setSize(j.x,j.y):X.setSize(As(j.x),As(j.y));const q=p.getRenderTarget();p.setRenderTarget(X),p.clear();const xe=p.toneMapping;p.toneMapping=Mn,Wr(y,z,U),p.toneMapping=xe,ye.updateMultisampleRenderTarget(X),ye.updateRenderTargetMipmap(X),p.setRenderTarget(q)}function Wr(y,z,U){const k=z.isScene===!0?z.overrideMaterial:null;for(let q=0,xe=y.length;q<xe;q++){const Se=y[q],Ae=Se.object,Te=Se.geometry,Ve=k===null?Se.material:k,Fe=Se.group;Ae.layers.test(U.layers)&&bd(Ae,z,U,Te,Ve,Fe)}}function bd(y,z,U,k,q,xe){y.onBeforeRender(p,z,U,k,q,xe),y.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),q.onBeforeRender(p,z,U,k,y,xe),q.transparent===!0&&q.side===ni?(q.side=jt,q.needsUpdate=!0,p.renderBufferDirect(U,z,k,q,y,xe),q.side=Wi,q.needsUpdate=!0,p.renderBufferDirect(U,z,k,q,y,xe),q.side=ni):p.renderBufferDirect(U,z,k,q,y,xe),y.onAfterRender(p,z,U,k,q,xe)}function Ks(y,z,U){z.isScene!==!0&&(z=fe);const k=De.get(y),q=f.state.lights,xe=f.state.shadowsArray,Se=q.state.version,Ae=Xe.getParameters(y,q.state,xe,z,U),Te=Xe.getProgramCacheKey(Ae);let Ve=k.programs;k.environment=y.isMeshStandardMaterial?z.environment:null,k.fog=z.fog,k.envMap=(y.isMeshStandardMaterial?St:ft).get(y.envMap||k.environment),Ve===void 0&&(y.addEventListener("dispose",me),Ve=new Map,k.programs=Ve);let Fe=Ve.get(Te);if(Fe!==void 0){if(k.currentProgram===Fe&&k.lightsStateVersion===Se)return Ua(y,Ae),Fe}else Ae.uniforms=Xe.getUniforms(y),y.onBuild(U,Ae,p),y.onBeforeCompile(Ae,p),Fe=Xe.acquireProgram(Ae,Te),Ve.set(Te,Fe),k.uniforms=Ae.uniforms;const ze=k.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ze.clippingPlanes=v.uniform),Ua(y,Ae),k.needsLights=Sd(y),k.lightsStateVersion=Se,k.needsLights&&(ze.ambientLightColor.value=q.state.ambient,ze.lightProbe.value=q.state.probe,ze.directionalLights.value=q.state.directional,ze.directionalLightShadows.value=q.state.directionalShadow,ze.spotLights.value=q.state.spot,ze.spotLightShadows.value=q.state.spotShadow,ze.rectAreaLights.value=q.state.rectArea,ze.ltc_1.value=q.state.rectAreaLTC1,ze.ltc_2.value=q.state.rectAreaLTC2,ze.pointLights.value=q.state.point,ze.pointLightShadows.value=q.state.pointShadow,ze.hemisphereLights.value=q.state.hemi,ze.directionalShadowMap.value=q.state.directionalShadowMap,ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ze.spotShadowMap.value=q.state.spotShadowMap,ze.spotShadowMatrix.value=q.state.spotShadowMatrix,ze.pointShadowMap.value=q.state.pointShadowMap,ze.pointShadowMatrix.value=q.state.pointShadowMatrix);const Je=Fe.getUniforms(),Bn=vs.seqWithValue(Je.seq,ze);return k.currentProgram=Fe,k.uniformsList=Bn,Fe}function Ua(y,z){const U=De.get(y);U.outputEncoding=z.outputEncoding,U.instancing=z.instancing,U.skinning=z.skinning,U.morphTargets=z.morphTargets,U.morphNormals=z.morphNormals,U.morphColors=z.morphColors,U.morphTargetsCount=z.morphTargetsCount,U.numClippingPlanes=z.numClippingPlanes,U.numIntersection=z.numClipIntersection,U.vertexAlphas=z.vertexAlphas,U.vertexTangents=z.vertexTangents,U.toneMapping=z.toneMapping}function yd(y,z,U,k,q){z.isScene!==!0&&(z=fe),ye.resetTextureUnits();const xe=z.fog,Se=k.isMeshStandardMaterial?z.environment:null,Ae=w===null?p.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:ri,Te=(k.isMeshStandardMaterial?St:ft).get(k.envMap||Se),Ve=k.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Fe=!!k.normalMap&&!!U.attributes.tangent,ze=!!U.morphAttributes.position,Je=!!U.morphAttributes.normal,Bn=!!U.morphAttributes.color,si=k.toneMapped?p.toneMapping:Mn,oi=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,tn=oi!==void 0?oi.length:0,Oe=De.get(k),ai=f.state.lights;if(H===!0&&(O===!0||y!==M)){const rn=y===M&&k.id===C;v.setState(k,y,rn)}let tt=!1;k.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ai.state.version||Oe.outputEncoding!==Ae||q.isInstancedMesh&&Oe.instancing===!1||!q.isInstancedMesh&&Oe.instancing===!0||q.isSkinnedMesh&&Oe.skinning===!1||!q.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Te||k.fog===!0&&Oe.fog!==xe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==v.numPlanes||Oe.numIntersection!==v.numIntersection)||Oe.vertexAlphas!==Ve||Oe.vertexTangents!==Fe||Oe.morphTargets!==ze||Oe.morphNormals!==Je||Oe.morphColors!==Bn||Oe.toneMapping!==si||Ce.isWebGL2===!0&&Oe.morphTargetsCount!==tn)&&(tt=!0):(tt=!0,Oe.__version=k.version);let nn=Oe.currentProgram;tt===!0&&(nn=Ks(k,z,q));let Tn=!1,tr=!1,Zs=!1;const xt=nn.getUniforms(),nr=Oe.uniforms;if(le.useProgram(nn.program)&&(Tn=!0,tr=!0,Zs=!0),k.id!==C&&(C=k.id,tr=!0),Tn||M!==y){if(xt.setValue($,"projectionMatrix",y.projectionMatrix),Ce.logarithmicDepthBuffer&&xt.setValue($,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),M!==y&&(M=y,tr=!0,Zs=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const rn=xt.map.cameraPosition;rn!==void 0&&rn.setValue($,J.setFromMatrixPosition(y.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&xt.setValue($,"isOrthographic",y.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||q.isSkinnedMesh)&&xt.setValue($,"viewMatrix",y.matrixWorldInverse)}if(q.isSkinnedMesh){xt.setOptional($,q,"bindMatrix"),xt.setOptional($,q,"bindMatrixInverse");const rn=q.skeleton;rn&&(Ce.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),xt.setValue($,"boneTexture",rn.boneTexture,ye),xt.setValue($,"boneTextureSize",rn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Js=U.morphAttributes;return(Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0&&Ce.isWebGL2===!0)&&ie.update(q,U,k,nn),(tr||Oe.receiveShadow!==q.receiveShadow)&&(Oe.receiveShadow=q.receiveShadow,xt.setValue($,"receiveShadow",q.receiveShadow)),tr&&(xt.setValue($,"toneMappingExposure",p.toneMappingExposure),Oe.needsLights&&Md(nr,Zs),xe&&k.fog===!0&&pn.refreshFogUniforms(nr,xe),pn.refreshMaterialUniforms(nr,k,F,B,X),vs.upload($,Oe.uniformsList,nr,ye)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(vs.upload($,Oe.uniformsList,nr,ye),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&xt.setValue($,"center",q.center),xt.setValue($,"modelViewMatrix",q.modelViewMatrix),xt.setValue($,"normalMatrix",q.normalMatrix),xt.setValue($,"modelMatrix",q.matrixWorld),nn}function Md(y,z){y.ambientLightColor.needsUpdate=z,y.lightProbe.needsUpdate=z,y.directionalLights.needsUpdate=z,y.directionalLightShadows.needsUpdate=z,y.pointLights.needsUpdate=z,y.pointLightShadows.needsUpdate=z,y.spotLights.needsUpdate=z,y.spotLightShadows.needsUpdate=z,y.rectAreaLights.needsUpdate=z,y.hemisphereLights.needsUpdate=z}function Sd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(y,z,U){De.get(y.texture).__webglTexture=z,De.get(y.depthTexture).__webglTexture=U;const k=De.get(y);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=U===void 0,k.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,z){const U=De.get(y);U.__webglFramebuffer=z,U.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(y,z=0,U=0){w=y,g=z,b=U;let k=!0;if(y){const Te=De.get(y);Te.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),k=!1):Te.__webglFramebuffer===void 0?ye.setupRenderTarget(y):Te.__hasExternalTextures&&ye.rebindTextures(y,De.get(y.texture).__webglTexture,De.get(y.depthTexture).__webglTexture)}let q=null,xe=!1,Se=!1;if(y){const Te=y.texture;(Te.isData3DTexture||Te.isDataArrayTexture)&&(Se=!0);const Ve=De.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(q=Ve[z],xe=!0):Ce.isWebGL2&&y.samples>0&&ye.useMultisampledRTT(y)===!1?q=De.get(y).__webglMultisampledFramebuffer:q=Ve,R.copy(y.viewport),P.copy(y.scissor),_=y.scissorTest}else R.copy(I).multiplyScalar(F).floor(),P.copy(A).multiplyScalar(F).floor(),_=N;if(le.bindFramebuffer(36160,q)&&Ce.drawBuffers&&k&&le.drawBuffers(y,q),le.viewport(R),le.scissor(P),le.setScissorTest(_),xe){const Te=De.get(y.texture);$.framebufferTexture2D(36160,36064,34069+z,Te.__webglTexture,U)}else if(Se){const Te=De.get(y.texture),Ve=z||0;$.framebufferTextureLayer(36160,36064,Te.__webglTexture,U||0,Ve)}C=-1},this.readRenderTargetPixels=function(y,z,U,k,q,xe,Se){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=De.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){le.bindFramebuffer(36160,Ae);try{const Te=y.texture,Ve=Te.format,Fe=Te.type;if(Ve!==qt&&V.convert(Ve)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Fe===Er&&(we.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&we.has("EXT_color_buffer_float"));if(Fe!==ii&&V.convert(Fe)!==$.getParameter(35738)&&!(Fe===qn&&(Ce.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=y.width-k&&U>=0&&U<=y.height-q&&$.readPixels(z,U,k,q,V.convert(Ve),V.convert(Fe),xe)}finally{const Te=w!==null?De.get(w).__webglFramebuffer:null;le.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(y,z,U=0){const k=Math.pow(2,-U),q=Math.floor(z.image.width*k),xe=Math.floor(z.image.height*k);ye.setTexture2D(z,0),$.copyTexSubImage2D(3553,U,0,0,y.x,y.y,q,xe),le.unbindTexture()},this.copyTextureToTexture=function(y,z,U,k=0){const q=z.image.width,xe=z.image.height,Se=V.convert(U.format),Ae=V.convert(U.type);ye.setTexture2D(U,0),$.pixelStorei(37440,U.flipY),$.pixelStorei(37441,U.premultiplyAlpha),$.pixelStorei(3317,U.unpackAlignment),z.isDataTexture?$.texSubImage2D(3553,k,y.x,y.y,q,xe,Se,Ae,z.image.data):z.isCompressedTexture?$.compressedTexSubImage2D(3553,k,y.x,y.y,z.mipmaps[0].width,z.mipmaps[0].height,Se,z.mipmaps[0].data):$.texSubImage2D(3553,k,y.x,y.y,Se,Ae,z.image),k===0&&U.generateMipmaps&&$.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(y,z,U,k,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=y.max.x-y.min.x+1,Se=y.max.y-y.min.y+1,Ae=y.max.z-y.min.z+1,Te=V.convert(k.format),Ve=V.convert(k.type);let Fe;if(k.isData3DTexture)ye.setTexture3D(k,0),Fe=32879;else if(k.isDataArrayTexture)ye.setTexture2DArray(k,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,k.flipY),$.pixelStorei(37441,k.premultiplyAlpha),$.pixelStorei(3317,k.unpackAlignment);const ze=$.getParameter(3314),Je=$.getParameter(32878),Bn=$.getParameter(3316),si=$.getParameter(3315),oi=$.getParameter(32877),tn=U.isCompressedTexture?U.mipmaps[0]:U.image;$.pixelStorei(3314,tn.width),$.pixelStorei(32878,tn.height),$.pixelStorei(3316,y.min.x),$.pixelStorei(3315,y.min.y),$.pixelStorei(32877,y.min.z),U.isDataTexture||U.isData3DTexture?$.texSubImage3D(Fe,q,z.x,z.y,z.z,xe,Se,Ae,Te,Ve,tn.data):U.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Fe,q,z.x,z.y,z.z,xe,Se,Ae,Te,tn.data)):$.texSubImage3D(Fe,q,z.x,z.y,z.z,xe,Se,Ae,Te,Ve,tn),$.pixelStorei(3314,ze),$.pixelStorei(32878,Je),$.pixelStorei(3316,Bn),$.pixelStorei(3315,si),$.pixelStorei(32877,oi),q===0&&k.generateMipmaps&&$.generateMipmap(Fe),le.unbindTexture()},this.initTexture=function(y){ye.setTexture2D(y,0),le.unbindTexture()},this.resetState=function(){g=0,b=0,w=null,le.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class BM extends dd{}BM.prototype.isWebGL1Renderer=!0;class UM extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class VM extends dt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class fd extends dt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class GM extends dt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}new D;new D;new D;new D;new ln;class za extends Cn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new D,f=new D,m=[],x=[],p=[],h=[];for(let g=0;g<=i;g++){const b=[],w=g/i;let C=0;g==0&&o==0?C=.5/t:g==i&&l==Math.PI&&(C=-.5/t);for(let M=0;M<=t;M++){const R=M/t;d.x=-e*Math.cos(r+R*s)*Math.sin(o+w*a),d.y=e*Math.cos(o+w*a),d.z=e*Math.sin(r+R*s)*Math.sin(o+w*a),x.push(d.x,d.y,d.z),f.copy(d).normalize(),p.push(f.x,f.y,f.z),h.push(R+C,1-w),b.push(c++)}u.push(b)}for(let g=0;g<i;g++)for(let b=0;b<t;b++){const w=u[g][b+1],C=u[g][b],M=u[g+1][b],R=u[g+1][b+1];(g!==0||o>0)&&m.push(w,C,R),(g!==i-1||l<Math.PI)&&m.push(C,M,R)}this.setIndex(m),this.setAttribute("position",new Yt(x,3)),this.setAttribute("normal",new Yt(p,3)),this.setAttribute("uv",new Yt(h,2))}static fromJSON(e){return new za(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class WM extends dt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ge(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class HM extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hd extends dt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $M extends hd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pd extends dt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ge(16777215),this.specular=new ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qM extends dt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class XM extends dt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class jM extends dt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class YM extends dt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ge(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zi,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class KM extends fd{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const ZM={ShadowMaterial:WM,SpriteMaterial:VM,RawShaderMaterial:HM,ShaderMaterial:fn,PointsMaterial:GM,MeshPhysicalMaterial:$M,MeshStandardMaterial:hd,MeshPhongMaterial:pd,MeshToonMaterial:qM,MeshNormalMaterial:XM,MeshLambertMaterial:jM,MeshDepthMaterial:cd,MeshDistanceMaterial:ud,MeshBasicMaterial:Xs,MeshMatcapMaterial:YM,LineDashedMaterial:KM,LineBasicMaterial:fd,Material:dt};dt.fromType=function(n){return new ZM[n]};const Nc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class JM{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],x=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const QM=new JM;class ka{constructor(e){this.manager=e!==void 0?e:QM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class md extends ka{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Nc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ar("img");function l(){u(),Nc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class eS extends ka{constructor(e){super(e)}load(e,t,i,r){const s=new Pa,o=new md(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class tS extends ka{constructor(e){super(e)}load(e,t,i,r){const s=new Bt,o=new md(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class gd extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const zc=new et,kc=new D,Oc=new D;class nS{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(kc),Oc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oc),t.updateMatrixWorld(),zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iS extends nS{constructor(){super(new Fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rS extends gd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DefaultUp),this.updateMatrix(),this.target=new Tt,this.shadow=new iS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sS extends gd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Uc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Uc(){return(typeof performance>"u"?Date:performance).now()}const xd="\\[\\]\\.:\\/",Oa="[^"+xd+"]",oS="[^"+xd.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",Oa);/(WCOD+)?/.source.replace("WCOD",oS);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oa);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oa);const sn=new Uint32Array(512),on=new Uint32Array(512);for(let n=0;n<256;++n){const e=n-127;e<-27?(sn[n]=0,sn[n|256]=32768,on[n]=24,on[n|256]=24):e<-14?(sn[n]=1024>>-e-14,sn[n|256]=1024>>-e-14|32768,on[n]=-e-1,on[n|256]=-e-1):e<=15?(sn[n]=e+15<<10,sn[n|256]=e+15<<10|32768,on[n]=13,on[n|256]=13):e<128?(sn[n]=31744,sn[n|256]=64512,on[n]=24,on[n|256]=24):(sn[n]=31744,sn[n|256]=64512,on[n]=13,on[n|256]=13)}const vd=new Uint32Array(2048),Gr=new Uint32Array(64),aS=new Uint32Array(64);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,vd[n]=e|t}for(let n=1024;n<2048;++n)vd[n]=939524096+(n-1024<<13);for(let n=1;n<31;++n)Gr[n]=n<<23;Gr[31]=1199570944;Gr[32]=2147483648;for(let n=33;n<63;++n)Gr[n]=2147483648+(n-32<<23);Gr[63]=3347054592;for(let n=1;n<64;++n)n!==32&&(aS[n]=1024);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:La}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=La);class lS{target=new D(0,0,0);enabled=!0;movementSpeed=1;lookSpeed=.005;lookVertical=!0;autoForward=!1;activeLook=!1;heightSpeed=!1;heightCoef=1;heightMin=0;heightMax=1;constrainVertical=!1;verticalMin=0;verticalMax=Math.PI;autoSpeedFactor=0;mouseX=0;mouseY=0;lat=0;lon=0;phi=0;theta=0;moveForward=!1;moveBackward=!1;moveLeft=!1;moveRight=!1;moveUp=!1;moveDown=!1;mouseDragOn=!1;viewHalfX=0;viewHalfY=0;_contextMenu=this.contextMenu.bind(this);_onMouseMove=this.onMouseMove.bind(this);_onMouseDown=this.onMouseDown.bind(this);_onMouseUp=this.onMouseUp.bind(this);_onKeyDown=this.onKeyDown.bind(this);_onKeyUp=this.onKeyUp.bind(this);_onBlur=this.onBlur.bind(this);constructor(e,t=document){this.object=e,this.domElement=t,this.object=e,this.domElement!==document&&this.domElement.setAttribute("tabindex",-1),this.handleResize(),this.bindEvents()}handleResize(){this.domElement===document?(this.viewHalfX=window.innerWidth/2,this.viewHalfY=window.innerHeight/2):(this.viewHalfX=this.domElement.offsetWidth/2,this.viewHalfY=this.domElement.offsetHeight/2)}bindEvents(){this.domElement.addEventListener("contextmenu",this._contextMenu,!1),this.domElement.addEventListener("mousemove",this._onMouseMove,!1),this.domElement.addEventListener("mousedown",this._onMouseDown,!1),this.domElement.addEventListener("mouseup",this._onMouseUp,!1),this.domElement.addEventListener("keydown",this._onKeyDown,!1),this.domElement.addEventListener("keyup",this._onKeyUp,!1),this.domElement.addEventListener("blur",this._onBlur,!1)}onMouseDown(e){this.domElement!==document&&this.domElement.focus(),e.preventDefault(),e.stopPropagation(),this.mouseDragOn=!0,this.mouseX=e.clientX,this.mouseY=e.clientY}onMouseUp(e){if(e.preventDefault(),e.stopPropagation(),this.activeLook)switch(e.button){case 0:this.moveForward=!1;break;case 2:this.moveBackward=!1;break}this.mouseDragOn=!1}onMouseMove(e){const t=e.clientX-this.mouseX,i=e.clientY-this.mouseY;this.mouseDragOn&&(this.phi-=i*this.lookSpeed,this.theta+=t*this.lookSpeed),this.mouseX=e.clientX,this.mouseY=e.clientY}onKeyDown(e){switch(e.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"KeyE":this.moveUp=!0;break;case"KeyQ":this.moveDown=!0;break}}onKeyUp(e){switch(e.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"KeyE":this.moveUp=!1;break;case"KeyQ":this.moveDown=!1;break}}onBlur(e){this.mouseDragOn=!1}update(e){if(this.enabled===!1)return;if(this.heightSpeed){let o=qx.clamp(this.object.position.y,this.heightMin,this.heightMax)-this.heightMin;this.autoSpeedFactor=e*(o*this.heightCoef)}else this.autoSpeedFactor=0;let t=e*this.movementSpeed;(this.moveForward||this.autoForward&&!this.moveBackward)&&this.object.translateZ(-(t+this.autoSpeedFactor)),this.moveBackward&&this.object.translateZ(t),this.moveLeft&&this.object.translateX(-t),this.moveRight&&this.object.translateX(t),this.moveUp&&this.object.translateY(t),this.moveDown&&this.object.translateY(-t);let i=this.target,r=this.object.position;i.x=r.x+100*Math.cos(this.phi)*Math.sin(this.theta),i.y=r.y+100*Math.sin(this.phi),i.z=r.z-100*Math.cos(this.phi)*Math.cos(this.theta),this.object.lookAt(i)}contextMenu(e){e.preventDefault()}dispose(){this.domElement.removeEventListener("contextmenu",this._contextMenu,!1),this.domElement.removeEventListener("mousedown",this._onMouseDown,!1),this.domElement.removeEventListener("mousemove",this._onMouseMove,!1),this.domElement.removeEventListener("mouseup",this._onMouseUp,!1),this.domElement.removeEventListener("keydown",this._onKeyDown,!1),this.domElement.removeEventListener("keyup",this._onKeyUp,!1),this.domElement.removeEventListener("blur",this._onBlur,!1)}}const cS=ke("<div><canvas></canvas></div>"),uS=n=>{const[e,t]=Ie(!1),[i,r]=Ie(),s=navigator.xr;s?.isSessionSupported("immersive-vr").then(l=>t(l));let o;Oi(()=>{const l=n.cameraType==="orthographic"?new Fa(-10,10,10,-10,.1,1e3):new Pt(75,1,.1,1e3);l.position.z=20,l.position.y=2;const c=new dd({canvas:o,antialias:!0});c.setClearColor(2236962);const u=new lS(l,o);u.movementSpeed*=5,n.cameraType==="orthographic"&&(u.lookSpeed=0);const d=new Bc(!0);let f=0;const m=new Bc(!0);m.start(),setInterval(()=>{r(Math.round(f/m.getDelta())),f=0},1e3);let x=requestAnimationFrame(h);const p=g=>{};o.addEventListener("keypress",p,!1);function h(){x=requestAnimationFrame(h);const g=d.getDelta();u.update(g);const b=Math.round(o.clientWidth),w=Math.round(o.clientHeight);if(b!==o.width||w!==o.height)if(console.log(`Resize viewport to ${b}x${w}`),o.width=b,o.height=w,c.setViewport(0,0,b,w),"aspect"in l)l.aspect=b/w,l.updateProjectionMatrix();else{const M=(l.right-l.left)*(w/b);l.top=M/2,l.bottom=-M/2,l.updateProjectionMatrix()}c.render(n.scene,l),++f}_t(()=>{cancelAnimationFrame(x),o.removeEventListener("keypress",p,!1)})});const a=async()=>{const l=await s?.requestSession("immersive-vr",{});console.log(l);const c=()=>{console.log("Rendering"),l?.requestAnimationFrame(c)};l?.requestAnimationFrame(c)};return(()=>{const l=cS.cloneNode(!0),c=l.firstChild,u=o;return typeof u=="function"?u(c):o=c,c.style.setProperty("height","100%"),c.style.setProperty("width","100%"),It(l,T(ga,{sx:{margin:"0.5em",position:"absolute",top:0,right:0,background:"black",opacity:.7},get children(){return i()}}),null),It(l,T(ya,{sx:{position:"absolute",bottom:0,right:0},get disabled(){return!e()},onClick:a,get title(){return e()?"Switch to VR mode":"VR mode not available"},children:"VR"}),null),Ct(d=>Rs(l,{...n.style,position:"relative"},d)),l})()};function dS(n){const e=new sS;return Ke(()=>{e.color.set(n.color||16777215),e.intensity=n.intensity||1}),Oi(()=>n.scene.add(e)),_t(()=>n.scene.remove(e)),[]}function fS(n){return Ke(()=>{const t=new eS().load([n.east,n.west,n.up,n.down,n.north,n.south]);n.scene.background=t}),[]}class hS extends Xt{constructor(e,t={}){super(e),this.isWater=!0;const i=this,r=t.textureWidth!==void 0?t.textureWidth:512,s=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,u=t.sunDirection!==void 0?t.sunDirection:new D(.70707,.70707,0),d=new ge(t.sunColor!==void 0?t.sunColor:16777215),f=new ge(t.waterColor!==void 0?t.waterColor:8355711),m=t.eye!==void 0?t.eye:new D(0,0,0),x=t.distortionScale!==void 0?t.distortionScale:20,p=t.side!==void 0?t.side:Wi,h=t.fog!==void 0?t.fog:!1,g=new zn,b=new D,w=new D,C=new D,M=new et,R=new D(0,0,-1),P=new at,_=new D,E=new D,B=new at,F=new et,K=new Pt,Z=new Sn(r,s),I={uniforms:Jo.merge([se.fog,se.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new et},sunColor:{value:new ge(8355711)},sunDirection:{value:new D(.70707,.70707,0)},eye:{value:new D},waterColor:{value:new ge(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <fog_fragment>
				}`},A=new fn({fragmentShader:I.fragmentShader,vertexShader:I.vertexShader,uniforms:Jo.clone(I.uniforms),lights:!0,side:p,fog:h});A.uniforms.mirrorSampler.value=Z.texture,A.uniforms.textureMatrix.value=F,A.uniforms.alpha.value=a,A.uniforms.time.value=l,A.uniforms.normalSampler.value=c,A.uniforms.sunColor.value=d,A.uniforms.waterColor.value=f,A.uniforms.sunDirection.value=u,A.uniforms.distortionScale.value=x,A.uniforms.eye.value=m,i.material=A,i.onBeforeRender=function(N,W,H){if(w.setFromMatrixPosition(i.matrixWorld),C.setFromMatrixPosition(H.matrixWorld),M.extractRotation(i.matrixWorld),b.set(0,0,1),b.applyMatrix4(M),_.subVectors(w,C),_.dot(b)>0)return;_.reflect(b).negate(),_.add(w),M.extractRotation(H.matrixWorld),R.set(0,0,-1),R.applyMatrix4(M),R.add(C),E.subVectors(w,R),E.reflect(b).negate(),E.add(w),K.position.copy(_),K.up.set(0,1,0),K.up.applyMatrix4(M),K.up.reflect(b),K.lookAt(E),K.far=H.far,K.updateMatrixWorld(),K.projectionMatrix.copy(H.projectionMatrix),F.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),F.multiply(K.projectionMatrix),F.multiply(K.matrixWorldInverse),g.setFromNormalAndCoplanarPoint(b,w),g.applyMatrix4(K.matrixWorldInverse),P.set(g.normal.x,g.normal.y,g.normal.z,g.constant);const O=K.projectionMatrix;B.x=(Math.sign(P.x)+O.elements[8])/O.elements[0],B.y=(Math.sign(P.y)+O.elements[9])/O.elements[5],B.z=-1,B.w=(1+O.elements[10])/O.elements[14],P.multiplyScalar(2/P.dot(B)),O.elements[2]=P.x,O.elements[6]=P.y,O.elements[10]=P.z+1-o,O.elements[14]=P.w,m.setFromMatrixPosition(H.matrixWorld);const X=N.getRenderTarget(),ne=N.xr.enabled,j=N.shadowMap.autoUpdate;i.visible=!1,N.xr.enabled=!1,N.shadowMap.autoUpdate=!1,N.setRenderTarget(Z),N.state.buffers.depth.setMask(!0),N.autoClear===!1&&N.clear(),N.render(W,K),i.visible=!0,N.xr.enabled=ne,N.shadowMap.autoUpdate=j,N.setRenderTarget(X);const J=H.viewport;J!==void 0&&N.state.viewport(J)}}}function pS(n){let e;const t=setInterval(()=>{e.material.uniforms.time.value+=.0016666666666666666},16.666666666666668);return Ke(()=>{e&&n.scene.remove(e);const i=new js(n.width||100,n.height||100,1,1);i.computeVertexNormals(),e=new hS(i,{textureWidth:512,textureHeight:512,waterNormals:n.waterNormalsTexture?new tS().load(n.waterNormalsTexture,r=>{r.wrapS=r.wrapT=Ts}):void 0,sunDirection:new D,sunColor:16777215,waterColor:7695,distortionScale:3.7,fog:n.scene.fog!==void 0,alpha:.1}),n.scene.add(e),e.rotation.x=-Math.PI*.5}),_t(()=>{n.scene.remove(e),clearInterval(t)}),[]}function mS(n,e){const t=Ws(),[i,r]=Ie({}),s=()=>n?t?.connections[n]:void 0;let o;return Ke(()=>{if(o?.unsubscribe(),o=void 0,!e){r({});return}const a=s();if(!a){r({});return}a.topics[e]==="geometry_msgs/PointStamped"?o=a.rosbridgeConnection.subscribe(e,l=>{r({position:new D(l.point.y,l.point.z,l.point.x)})}):console.log(`Invalid transform topic: ${a.topics[e]}`)}),i}const gS=n=>{const e=mS(n.robot.connection,n.robot.poseTopic),t=new za(.1),i=new Xs({color:4294901760}),r=new Xt(t,i);return Ke(()=>{const s=e();r.position.copy(s.position||new D)}),Oi(()=>n.scene.add(r)),_t(()=>n.scene.remove(r)),[]},xS=n=>T(wn,{get each(){return Fi()},children:e=>T(gS,{get scene(){return n.scene},robot:e})});function vS(n){let e;const t=n.connection.rosbridgeConnection.subscribe(n.topic,i=>{console.log("Recevied mesh"),console.log(i);const r=new Cn,s=new Float32Array(i.mesh_geometry.vertices.length*3),o=[],a=new Array(i.mesh_geometry.faces.length*3);i.mesh_geometry.vertices.forEach((c,u)=>{s[u*3+0]=c.y,s[u*3+1]=c.z,s[u*3+2]=c.x});for(const c of i.mesh_geometry.vertex_normals)o.push(c.x,c.y,c.z);i.mesh_geometry.faces.forEach((c,u)=>{a[u*3+0]=c.vertex_indices[0],a[u*3+1]=c.vertex_indices[1],a[u*3+2]=c.vertex_indices[2]}),r.setIndex(a),r.setAttribute("position",new Yt(s,3)),r.computeVertexNormals();const l=new pd({side:ni,color:4294967295});e&&n.scene.remove(e),e=new Xt(r,l),n.scene.add(e)});return _t(()=>{n.scene.remove(e),t.unsubscribe()}),[]}function _S(n){const[e]=Gu(),t=Ws();return T(Ge,{get when(){return e?.connection},children:i=>T(Ge,{get when(){return t?.connections[i]},children:r=>T(Ge,{get when(){return e?.topic},children:s=>T(vS,{get scene(){return n.scene},connection:r,topic:s})})})})}var bS="./assets/waternormals.add9912b.jpg",yS="./assets/down.a8e02329.jpeg",MS="./assets/up.d9c1cf56.jpeg",SS="./assets/east.1d1fccdb.jpeg",wS="./assets/west.3b1319e3.jpeg",CS="./assets/north.172f5293.jpeg",TS="./assets/south.ba7f3f5e.jpeg";const ES=()=>{const n=new UM,e=new rS(16777215,.8);e.position.set(.1,1,2),n.add(e);const t=tu({palette:{mode:"dark"}});return T(Wf,{theme:t,get children(){return T(f0,{get children(){return T(Cg,{get children(){return T(Tg,{get children(){return T(Ot,{sx:{height:"100%",display:"flex",flexDirection:"column"},get children(){return[T(_0,{}),T(no,{container:!0,sx:{flexGrow:1,overflow:"auto"},get children(){return[T(no,{item:!0,md:3,sx:{height:"100%",padding:"0.5em",display:"flex",flexDirection:"column"},get children(){return T(I0,{})}}),T(no,{item:!0,md:9,sx:{height:"100%",padding:"0.5em",display:"flex",flexDirection:"column"},get children(){return[T(_S,{scene:n}),T(fS,{scene:n,east:SS,west:wS,up:MS,down:yS,north:CS,south:TS}),T(pS,{scene:n,waterNormalsTexture:bS,width:1e4,height:1e4}),T(dS,{scene:n,intensity:.3}),T(xS,{scene:n}),T(uS,{scene:n,style:{flexGrow:"1",height:"100%"}})]}})]}})]}})}})}})}})}})};Wd(()=>T(ES,{}),document.getElementById("root"));
