(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(1),o=n.n(i),l=n(4),s=n.n(l),r=(n(11),n(5)),a=n(3);n(12),n(15);function d(t){var e=Object(i.useState)([]),n=Object(a.a)(e,2),o=n[0],l=n[1],s=Object(i.useState)({id:null,title:"",completed:!1}),d=Object(a.a)(s,2),u=d[0],f=d[1],p=Object(i.useState)(!1),j=Object(a.a)(p,2),b=j[0],h=j[1];function m(t){var e=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var i=n[c].trim();if(i.substring(0,t.length+1)===t+"="){e=decodeURIComponent(i.substring(t.length+1));break}}return e}function O(){console.log("Fetching...");fetch("http://127.0.0.1:8000/api/task-list/").then((function(t){return t.json()})).then((function(t){return l(t)}))}return Object(i.useEffect)((function(){O()}),[]),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{id:"task-container",children:[Object(c.jsx)("div",{id:"form-wrapper",children:Object(c.jsx)("form",{id:"form",onSubmit:function(t){t.preventDefault(),console.log("ITEM: ",u);var e=m("csrftoken"),n="http://127.0.0.1:8000/api/task-create/";if(1==b){n="http://127.0.0.1:8000/api/task-update/".concat(u.id);h(!1)}fetch(n,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":e},body:JSON.stringify(u)}).then((function(t){O(),f({id:null,title:"",completed:!1})})).catch((function(t){console.log("ERROR:",t)}))},children:Object(c.jsxs)("div",{className:"flex-wrapper",children:[Object(c.jsx)("div",{style:{flex:6},children:Object(c.jsx)("input",{id:"title",className:"form-control",onChange:function(t){var e=t.target.value;f(Object(r.a)(Object(r.a)({},u),{},{title:e}))},value:u.title,type:"text",name:"title",placeholder:"Add task"})}),Object(c.jsx)("div",{style:{flex:1},children:Object(c.jsx)("input",{id:"submit",className:"btn btn-warning",type:"submit"})})]})})}),Object(c.jsx)("div",{id:"list-wrapper",children:o.map((function(t,e){return Object(c.jsxs)("div",{className:"task-wrapper flex-wrapper",children:[Object(c.jsx)("div",{style:{flex:7},onClick:function(){return function(t){t.completed=!t.completed;var e=m("csrftoken"),n="http://127.0.0.1:8000/api/task-update/".concat(t.id);fetch(n,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":e},body:JSON.stringify({completed:t.completed,title:t.title})}).then((function(){O()})),console.log("TASK: ",t.completed)}(t)},children:0==t.completed?Object(c.jsx)("span",{children:t.title}):Object(c.jsx)("strike",{children:t.title})}),Object(c.jsx)("div",{style:{flex:1},children:Object(c.jsx)("button",{className:"btn btn-sm btn-outline-info",onClick:function(){return function(t){f(t),h(!0)}(t)},children:"Edit"})}),Object(c.jsx)("div",{style:{flex:1},children:Object(c.jsx)("button",{className:"btn btn-sm btn-outline-dark delete",onClick:function(){return function(t){var e=m("csrftoken"),n="http://127.0.0.1:8000/api/task-delete/".concat(t.id);fetch(n,{method:"DELETE",headers:{"Content-type":"application/json","X-CSRFToken":e}}).then((function(t){O()}))}(t)},children:"-"})})]},e)}))})]})})}var u=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,l=e.getTTFB;n(t),c(t),i(t),o(t),l(t)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),u()}},[[16,1,2]]]);
//# sourceMappingURL=main.425de08b.chunk.js.map