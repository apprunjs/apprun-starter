class t{constructor(){this._events={}}on(t,e,s={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:s})}off(t,e){let s=this._events[t];s&&((s=s.filter(t=>t.fn!==e)).length?this._events[t]=s:delete this._events[t])}run(t,...e){let s=this._events[t];return console.assert(!!s,"No subscriber for event: "+t),s&&((s=s.filter(s=>{const{fn:n,options:i}=s;return i.delay?this.delay(t,n,e,i):n.apply(this,e),!s.options.once})).length?this._events[t]=s:delete this._events[t]),s?s.length:0}once(t,e,s={}){this.on(t,e,Object.assign({},s,{once:!0}))}delay(t,e,s,n){n._t&&clearTimeout(n._t),n._t=setTimeout(()=>{clearTimeout(n._t),e.apply(this,s)},n.delay)}}let e;const s="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;s.app&&s._AppRunVersions?e=s.app:(e=new t,s.app=e,s._AppRunVersions="AppRun-2");var n=e;let i=0;function o(t,e,s=0){if(0===s&&(i=0),"string"==typeof t)return t;if(Array.isArray(t))return t.map(t=>o(t,e,i++));let r=t;return t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).t&&(r=function(t,e,s){const{tag:i,props:o,children:r}=t;let c=o&&o.id,h=`_${s}_`;c?h=`_${c}_`:c=`_${s}_`,e.s||(e.s={});let u=e.s[h];u||(u=e.s[h]=new i(Object.assign({},o,{children:r})).mount(c)),u.mounted&&u.mounted(o,r);const a=u.state;let l="";return a instanceof Promise||!u.view||(l=u.view(a,o),u.rendered&&setTimeout(()=>u.rendered(a,o))),n.createElement("section",Object.assign({},o,{id:c}),l)}(t,e,i++)),r&&r.children&&(r.children=r.children.map(t=>o(t,e,i++))),r}const r="_props";function c(t){const e=[],s=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>s(t)):s(t)}),e}const h={},u=function(t,e,s={}){if(null==e)return;if(e=o(e,s),!t)return;Array.isArray(e)?l(t,e):l(t,[e])};function a(t,e){console.assert(!!t),function(t,e){const s=t.nodeName,n=`${e.tag||""}`;return s.toUpperCase()===n.toUpperCase()}(t,e)?(l(t,e.children),p(t,e.props)):t.parentNode.replaceChild(d(e),t)}function l(t,e){const s=Math.min(t.childNodes.length,e.length);for(let n=0;n<s;n++){const s=e[n],i=t.childNodes[n];if("string"==typeof s)i.textContent!==s&&(3===i.nodeType?i.textContent=s:t.replaceChild(f(s),i));else{const e=s.props&&s.props.key;if(e)if(i.key===e)a(t.childNodes[n],s);else{const o=h[e];o?(t.insertBefore(o,i),t.appendChild(i),a(t.childNodes[n],s)):t.insertBefore(d(s),i)}else a(t.childNodes[n],s)}}let n=t.childNodes.length;for(;n>s;)t.removeChild(t.lastChild),n--;if(e.length>s){const n=document.createDocumentFragment();for(let t=s;t<e.length;t++)n.appendChild(d(e[t]));t.appendChild(n)}}function f(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function d(t,e=!1){if(console.assert(null!=t),"string"==typeof t)return f(t);if(!t.tag||"function"==typeof t.tag)return f(JSON.stringify(t));const s=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return p(s,t.props),t.children&&t.children.forEach(t=>s.appendChild(d(t,e))),s}function p(t,e){console.assert(!!t),e=function(t,e){e.class=e.class||e.className,delete e.className;const s={};return t&&Object.keys(t).forEach(t=>s[t]=null),e&&Object.keys(e).forEach(t=>s[t]=e[t]),s}(t[r]||{},e||{}),t[r]=e;for(const s in e){const n=e[s];if("style"===s){t.style.cssText&&(t.style.cssText="");for(const e in n)t.style[e]!==n[e]&&(t.style[e]=n[e])}else if(s.startsWith("data-")){const e=s.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==n&&(n||""===n?t.dataset[e]=n:delete t.dataset[e])}else"class"===s||s.startsWith("role")||s.indexOf("-")>0||t instanceof SVGElement||t.tagName.indexOf("-")>0?t.getAttribute(s)!==n&&(n?t.setAttribute(s,n):t.removeAttribute(s)):t[s]!==n&&(t[s]=n);"key"===s&&n&&(h[n]=t)}}const b={meta:new WeakMap,defineMetadata(t,e,s){this.meta.has(s)||this.meta.set(s,{}),this.meta.get(s)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function y(t,e={}){return(s,n,i)=>{const o=t?t.toString():n;return b.defineMetadata(`apprun-update:${o}`,{name:o,key:n,options:e},s),i}}function m(t,e={}){return function(s,n){const i=t?t.toString():n;b.defineMetadata(`apprun-update:${i}`,{name:i,key:n,options:e},s)}}function g(t){return function(e){return app.webComponent(t,e),e}}const j=(t,e)=>e?t.state[e]:t.state,w=(t,e,s)=>{if(e){const n=Object.assign({},t.state);n[e]=s,t.setState(n)}else t.setState(s)};var O=(t,e,s,n)=>{if(t.startsWith("$on")){const s=e[t];if(t=t.substring(1),"boolean"==typeof s)e[t]=e=>n.run(t,e);else if("string"==typeof s)e[t]=t=>n.run(s,t);else if("function"==typeof s)e[t]=t=>n.setState(s(n.state,t));else if(Array.isArray(s)){const[i,...o]=s;"string"==typeof i?e[t]=t=>n.run(i,...o,t):"function"==typeof i&&(e[t]=t=>n.setState(i(n.state,...o,t)))}}else if("$bind"===t){const i=e.type||"text",o="string"==typeof e[t]?e[t]:e.name;if("input"===s)switch(i){case"checkbox":e.checked=j(n,o),e.onclick=t=>w(n,o||t.target.name,t.target.checked);break;case"radio":e.checked=j(n,o)===e.value,e.onclick=t=>w(n,o||t.target.name,t.target.value);break;case"number":case"range":e.value=j(n,o),e.oninput=t=>w(n,o||t.target.name,Number(t.target.value));break;default:e.value=j(n,o),e.oninput=t=>w(n,o||t.target.name,t.target.value)}else"select"===s?(e.selectedIndex=j(n,o),e.onchange=t=>{t.target.multiple||w(n,o||t.target.name,t.target.selectedIndex)}):"option"===s&&(e.selected=j(n,o),e.onclick=t=>w(n,o||t.target.name,t.target.selected))}else app.run("$",{key:t,tag:s,props:e,component:n})};const v={};n.on("get-components",t=>t.components=v);const _=t=>t;class A{constructor(e,s,n,i){this.state=e,this.view=s,this.update=n,this.options=i,this._app=new t,this._actions=[],this._history=[],this._history_idx=-1,this.start=(t=null,e={render:!0})=>this.mount(t,Object.assign({},e,{render:!0}))}render(t,e){n.render(t,e,this)}renderState(t){if(!this.view)return;const e=n.createElement;n.createElement=(t,s,...n)=>(s&&Object.keys(s).forEach(e=>{e.startsWith("$")&&(O(e,s,t,this),delete s[e])}),e(t,s,...n));const s=this.view(t);if(n.createElement=e,n.run("debug",{component:this,state:t,vdom:s||"[vdom is null - no render]"}),"object"!=typeof document)return;const i="string"==typeof this.element?document.getElementById(this.element):this.element;if(i){const t="_c";if(this.unload){if(i._component!==this&&(this.tracking_id=(new Date).valueOf().toString(),i.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver)){const e=new MutationObserver(t=>{const{removedNodes:s,oldValue:n}=t[0];(n===this.tracking_id||Array.from(s).indexOf(i)>=0)&&(this.unload(),e.disconnect())});i.parentNode&&e.observe(i.parentNode,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]})}}else i.removeAttribute&&i.removeAttribute(t);i._component=this}this.render(i,s),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign({},this.options,e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history){const t=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},s=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1};this.on(e.history.prev||"history-prev",t),this.on(e.history.next||"history-next",s)}return this.add_actions(),void 0===this.state&&(this.state=null!=this.model?this.model:{}),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),v[t]=v[t]||[],v[t].push(this),this}is_global_event(t){return t&&(t.startsWith("#")||t.startsWith("/"))}add_action(t,e,s={}){e&&"function"==typeof e&&this.on(t,(...i)=>{const o=e(this.state,...i);n.run("debug",{component:this,event:t,e:i,state:this.state,newState:o,options:s}),this.setState(o,s)},s)}add_actions(){const t=this.update||{};b.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const s=b.getMetadata(e,this);t[s.name]=[this[s.key].bind(this),s.options]}});const e={};Array.isArray(t)?t.forEach(t=>{const[s,n,i]=t;s.toString().split(",").forEach(t=>e[t.trim()]=[n,i])}):Object.keys(t).forEach(s=>{const n=t[s];("function"==typeof n||Array.isArray(n))&&s.split(",").forEach(t=>e[t.trim()]=n)}),e["."]||(e["."]=_),Object.keys(e).forEach(t=>{const s=e[t];"function"==typeof s?this.add_action(t,s):Array.isArray(s)&&this.add_action(t,s[0],s[1])})}run(t,...e){const s=t.toString();return this.global_event||this.is_global_event(s)?n.run(s,...e):this._app.run(s,...e)}on(t,e,s){const i=t.toString();return this._actions.push({name:i,fn:e}),this.global_event||this.is_global_event(i)?n.on(i,e,s):this._app.on(i,e,s)}unmount(){this._actions.forEach(t=>{const{name:e,fn:s}=t;this.global_event||this.is_global_event(e)?n.off(e,s):this._app.off(e,s)})}}A.t=!0;const k=(t,e={})=>(class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return Object.assign({},e).observedAttributes}connectedCallback(){if(this.isConnected&&!this._component){const s=Object.assign({render:!0,shadow:!1},e);this._shadowRoot=s.shadow?this.attachShadow({mode:"open"}):this;const n={};Array.from(this.attributes).forEach(t=>n[t.name]=t.value),this.children&&(n.children=Array.from(this.children),n.children.forEach(t=>t.parentElement.removeChild(t))),this._component=new t(n).mount(this._shadowRoot,s),this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component)}}disconnectedCallback(){this._component.unmount(),this._component=null}attributeChangedCallback(...t){this._component&&this._component.run("attributeChanged",...t)}});const $="//",M="///",C=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...s]=t.split("/");n.run(e,...s)||n.run("///",e,...s),n.run("//",e,...s)}else if(t.startsWith("/")){const[e,s,...i]=t.split("/");n.run("/"+s,...i)||n.run("///","/"+s,...i),n.run("//","/"+s,...i)}else n.run(t)||n.run("///",t),n.run("//",t)};n.createElement=function(t,e,...s){const n=c(s);return"string"==typeof t?{tag:t,props:e,children:n}:Array.isArray(t)?t:void 0===t&&s?n:Object.getPrototypeOf(t).t?{tag:t,props:e,children:n}:t(e,n)},n.render=function(t,e,s){u(t,e,s)},n.Fragment=function(t,...e){return c(e)},n.webComponent=(t,e,s)=>{"undefined"!=typeof customElements&&customElements.define(t,k(e,s))},n.start=(t,e,s,n,i)=>{const o=Object.assign({},i,{render:!0,global_event:!0}),r=new A(e,s,n);return i&&i.rendered&&(r.rendered=i.rendered),r.mount(t,o),r};const x=t=>{};n.on("$",x),n.on("debug",t=>x),n.on("//",x),n.on("#",x),n.route=C,n.on("route",t=>n.route&&n.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{n.route===C&&(window.onpopstate=()=>C(location.hash),C(location.hash))}),"object"==typeof window&&(window.Component=A,window.React=n);export default n;export{A as Component,M as ROUTER_404_EVENT,$ as ROUTER_EVENT,n as app,g as customElement,y as event,m as on,y as update};
//# sourceMappingURL=apprun.esm.js.map
