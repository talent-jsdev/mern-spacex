(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,a,n){},103:function(e,a,n){"use strict";n.r(a);var t=n(1),c=n.n(t),l=n(75),r=n.n(l),s=(n(91),n(53)),m=n(54),o=n(73),i=n(48),u=n(10),d=n(55),h=n(56),E=n.n(h),p=n(76),g=n.n(p);function b(e){var a=e.launch,n=a.id,t=(a.flight_number,a.name),l=a.date_local,r=a.success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission: ",c.a.createElement("span",{className:E()({"text-success":r,"text-danger":!r})},t)),c.a.createElement("p",null,"Date: ",c.a.createElement(g.a,{format:"YYYY-MM-DD HH:mm"},l))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(i.b,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch Details"))))}function f(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"))}var v=n(51),N=n(74);function y(){var e=Object(d.a)(["\n  query LaunchesQuery {\n    launches {\n      id\n      flight_number\n      name\n      date_local\n      success\n    }\n  }\n"]);return y=function(){return e},e}var w=Object(v.a)(y());function x(){var e=Object(N.a)(w),a=e.loading,n=e.error,l=e.data;return a?c.a.createElement("p",null,"Loading..."):n?c.a.createElement("p",null,"Error :("):c.a.createElement(t.Fragment,null,c.a.createElement("h1",{className:"display-4 my-3"},"Launches"),c.a.createElement(f,null),l.launches.map((function(e){return c.a.createElement(b,{key:e.flight_number,launch:e})})))}function k(){var e=Object(d.a)(["\n  query LaunchQuery($id: String!) {\n    launch(id: $id) {\n      flight_number\n      name\n      success\n      date_local\n      rocket\n    }\n  }\n"]);return k=function(){return e},e}var _=Object(v.a)(k());function L(e){var a=e.match.params.id,n=Object(N.a)(_,{variables:{id:a}}),t=n.loading,l=n.error,r=n.data;if(t)return c.a.createElement("h4",null,"Loading...");l&&console.log(l);var s=r.launch,m=(s.name,s.flight_number),o=s.success;s.rocket,s.date_local;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission:"),r.launch.name),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:"," ",c.a.createElement("span",{className:E()({"text-success":o,"text-danger":!o})},o?"Yes":"No"))),c.a.createElement("hr",null),c.a.createElement(i.b,{to:"/",className:"btn btn-secondary"},"Back"))}n(101);var j=n(80),O=n.n(j),D=new s.a({uri:"/graphql",cache:new m.a});var M=function(){return c.a.createElement(o.a,{client:D},c.a.createElement(i.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:O.a,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(u.a,{exact:!0,path:"/",component:x}),c.a.createElement(u.a,{exact:!0,path:"/launch/:id",component:L}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,a,n){e.exports=n.p+"static/media/logo.01458c7d.png"},86:function(e,a,n){e.exports=n(103)},91:function(e,a,n){}},[[86,1,2]]]);
//# sourceMappingURL=main.aa684d7c.chunk.js.map