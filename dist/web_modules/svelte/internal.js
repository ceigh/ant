function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function f(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function l(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let s;function d(t){s=t}const p=[],h=[],$=[],g=[],m=Promise.resolve();let y=!1;function b(t){$.push(t)}let _=!1;const x=new Set;function E(){if(!_){_=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];d(n),v(n.$$)}for(p.length=0;h.length;)h.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];x.has(n)||(x.add(n),n())}$.length=0}while(p.length);for(;g.length;)g.pop()();y=!1,_=!1,x.clear()}}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(b)}}const w=new Set;function A(t,n){-1===t.$$.dirty[0]&&(p.push(t),y||(y=!0,m.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function k(c,f,u,i,l,p,h=[-1]){const $=s;d(c);const g=f.props||{},m=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map($?$.$$.context:[]),callbacks:e(),dirty:h};let y=!1;if(m.ctx=u?u(c,g,(t,n,...e)=>{const o=e.length?e[0]:n;return m.ctx&&l(m.ctx[t],m.ctx[t]=o)&&(m.bound[t]&&m.bound[t](o),y&&A(c,t)),n}):[],m.update(),y=!0,o(m.before_update),m.fragment=!!i&&i(m.ctx),f.target){if(f.hydrate){const t=function(t){return Array.from(t.childNodes)}(f.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();f.intro&&((_=c.$$.fragment)&&_.i&&(w.delete(_),_.i(x))),function(t,e,c){const{fragment:f,on_mount:u,on_destroy:a,after_update:i}=t.$$;f&&f.m(e,c),b(()=>{const e=u.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]}),i.forEach(b)}(c,f.target,f.anchor),E()}var _,x;d($)}class j{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{j as SvelteComponent,f as append,l as attr,a as detach,i as element,k as init,u as insert,t as noop,c as safe_not_equal};
//# sourceMappingURL=internal.js.map
