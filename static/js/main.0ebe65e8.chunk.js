(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a(42)},21:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),o=a.n(r),s=(a(21),a(3)),i=a.n(s),l=a(14),m=a(2),u=a(15),p=a.n(u),d=(a(40),function(e){var t=e.posts;return e.loading?c.a.createElement("h2",{className:"text-primary"},"Loading..."):c.a.createElement("div",{className:"row"},t.map((function(e){return c.a.createElement("div",{key:e.id,className:"col-md-3"},c.a.createElement("div",{className:"card mb-5"},c.a.createElement("img",{src:e.thumbnailUrl,width:"100%",alt:""}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Card number ",e.id),c.a.createElement("p",{className:"card-text"},e.title))))})))}),h=function(e){for(var t=e.totalPosts,a=e.paginate,n=[],r=1;r<=t;r++)n.push(r);return c.a.createElement("nav",null,c.a.createElement("ul",{className:"pagination"},n.map((function(e){return c.a.createElement("li",{key:e,className:"page-item"},c.a.createElement("a",{onClick:function(){return a(e)},href:"!#",className:"page-link"},e))}))))};var f=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(m.a)(o,2),u=s[0],f=s[1],E=Object(n.useState)(1),v=Object(m.a)(E,2),b=v[0],g=v[1],w=Object(n.useState)(300),y=Object(m.a)(w,1)[0];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,p.a.get("https://jsonplaceholder.typicode.com/photos");case 3:t=e.sent,r(t.data),f(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var N=b*y,j=N-y,O=a.slice(j,N),k=Math.ceil(a.length/y);return c.a.createElement("div",{className:"container mt-5"},c.a.createElement("h1",{className:"text-primary mb-3"},"My blog"),c.a.createElement(h,{totalPosts:k,paginate:function(e){return g(e)}}),c.a.createElement(d,{posts:O,loading:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(41);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.0ebe65e8.chunk.js.map