(this["webpackJsonpbukwild-fe-test"]=this["webpackJsonpbukwild-fe-test"]||[]).push([[0],{21:function(e,c,t){},22:function(e,c,t){},32:function(e,c,t){"use strict";t.r(c);var n=t(0),a=t.n(n),s=t(15),o=t.n(s),l=(t(21),t(14)),i=(t(22),t(11)),r=t(2),d=t.p+"static/media/abc_logo.c72ca4e0.svg",j=t(1),u=function(e){var c=e.data;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"row feature",children:[Object(j.jsx)("p",{className:"headline col col-stack",children:c.headline}),Object(j.jsx)("p",{className:"subhead col col-stack",children:c.subhead})]}),Object(j.jsxs)("div",{className:"row callToAction",children:[Object(j.jsx)("p",{className:"cta col col-stack",children:c.cta}),Object(j.jsxs)("p",{className:"col col-stack",children:["LET'S TALK. ",Object(j.jsx)("span",{className:"orange",children:"\u2192"})]})]})]})};var b=function(){var e=Object(n.useState)([]),c=Object(l.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)([]),o=Object(l.a)(s,2),b=o[0],h=o[1],g=function(e){var c=t.find((function(c,t){if(c.slug==e)return!0}));c&&(console.log("work"),h(c.blocks[0]))};return Object(n.useEffect)((function(){fetch("".concat("/Bukwild-FE-Test","/data/content.json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){a(e.pages)})),document.querySelector(".App").classList.add("fade-in")}),[]),Object(n.useEffect)((function(){t.length>0&&window.location.pathname.length>1?g(window.location.pathname.replace(/\\|\//g,"")):t.length>0&&window.location.pathname.length<=1&&(window.location.pathname="/".concat(t[0].slug))}),[t]),Object(j.jsx)("div",{className:"App",style:{backgroundImage:"url('".concat("/Bukwild-FE-Test","/backgrounds/").concat(b.background,"')")},children:Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("img",{src:d,className:"logo col",alt:"ABC Logo"}),Object(j.jsx)("div",{className:"contact col",children:"Contact Us"})]}),Object(j.jsx)("ul",{className:"menu",children:t.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{activeClassName:"orange",to:e.slug,onClick:function(){return g(e.slug)},children:e.title})},e.slug)}))})]}),Object(j.jsx)(r.a,{path:"/:slug",render:function(){return Object(j.jsx)(u,{data:b})}})]})})})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,s=c.getLCP,o=c.getTTFB;t(e),n(e),a(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),h()}},[[32,1,2]]]);
//# sourceMappingURL=main.63ec5ddf.chunk.js.map