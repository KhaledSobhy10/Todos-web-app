(()=>{"use strict";var e,t={searchText:"",hideCompleted:!1},n=function(e){var n=e.searchText,o=e.hideCompleted;"string"==typeof n&&(t.searchText=n),"boolean"==typeof o&&(t.hideCompleted=o)},o=new Uint8Array(16);function r(){if(!e&&!(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(o)}const a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,i=function(e){return"string"==typeof e&&a.test(e)};for(var c=[],d=0;d<256;++d)c.push((d+256).toString(16).substr(1));const u=function(e,t,n){var o=(e=e||{}).random||(e.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=o[a];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n}(o)};var s="todos",l=[],m=function(){localStorage.setItem(s,JSON.stringify(l))};!function(){try{l=JSON.parse(localStorage.getItem(s))||[]}catch(e){return[]}}();var p=function(){document.querySelector("#todos").innerHTML="";var e=y(l,t);e&&e.length>0?(g(h(C(e)),"#todos"),e.forEach((function(e){g(f(e),"#todos")}))):g(v(),"#todos")},f=function(e){var t=document.createElement("div"),n=document.createElement("label"),o=document.createElement("input"),r=document.createElement("span"),a=document.createElement("button");return n.className="list-item",r.className="list-item__title",a.className="button button--text",t.className="list-item__container",r.textContent=e.title,o.setAttribute("type","checkbox"),o.checked=e.completed,o.addEventListener("change",(function(t){!function(e){var t=l.find((function(t){return t.id===e}));t.completed=!t.completed,m()}(e.id),p()})),a.textContent="remove",a.addEventListener("click",(function(){var t,n;t=e.id,n=l.findIndex((function(e){return e.id==t})),n>-1&&(l.splice(n,1),m()),p()})),t.appendChild(o),t.appendChild(r),n.appendChild(t),n.appendChild(a),n},h=function(e){var t=document.createElement("p");t.className="list-title";var n=1===e?"":"s";return t.textContent="You have ".concat(e," todo").concat(n," left"),t},v=function(){var e=document.createElement("p");return e.className="empty-message",e.textContent="No todos to show !!",e},g=function(e,t){document.querySelector(t).appendChild(e)},y=function(e,t){return e.filter((function(e){var n=t.hideCompleted&&e.completed,o=e.title.toLowerCase().includes(t.searchText.toLowerCase());return!n&&o}))},C=function(e){return e.filter((function(e){return!e.completed})).length};p(),document.querySelector("#filter-input").addEventListener("input",(function(e){n({searchText:e.target.value}),p()})),document.querySelector("#hide-completed-cb").addEventListener("change",(function(e){n({hideCompleted:e.target.checked}),p()})),document.querySelector("#create-task-form").addEventListener("submit",(function(e){e.preventDefault();var t,n=e.target.elements.taskName.value;n&&""!==n.trim()&&(t=n,l.push({id:u(),title:t,completed:!1}),m(),p(),e.target.elements.taskName.value="")})),window.addEventListener("storage",(function(e){p()})),window.dispatchEvent(new Event("storage"))})();
//# sourceMappingURL=bundle.js.map