(this["webpackJsonpbukwild-fe-test"]=this["webpackJsonpbukwild-fe-test"]||[]).push([[0],{21:function(e,c,t){},22:function(e,c,t){},32:function(e,c,t){"use strict";t.r(c);var n=t(0),s=t.n(n),a=t(15),l=t.n(a),o=(t(21),t(14)),i=(t(22),t(2)),r=t(9),j=t.p+"static/media/abc_logo.c72ca4e0.svg",u=t(1),d=function(e){var c=e.data;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"row feature",children:[Object(u.jsx)("p",{className:"headline col col-stack",children:c.headline}),Object(u.jsx)("p",{className:"subhead col col-stack",children:c.subhead})]}),Object(u.jsxs)("div",{className:"row callToAction",children:[Object(u.jsx)("p",{className:"cta col col-stack",children:c.cta}),Object(u.jsxs)("p",{className:"col col-stack",children:["LET'S TALK. ",Object(u.jsx)("span",{className:"orange",children:"\u2192"})]})]})]})};var b=function(){var e=Object(n.useState)([]),c=Object(o.a)(e,2),t=c[0],s=c[1],a=Object(n.useState)([]),l=Object(o.a)(a,2),b=l[0],h=l[1],g=Object(i.e)(),f=function(e){var c=t.find((function(c){if(c.slug==e)return!0}));c&&(g.push("/"+c.slug),h(c.blocks[0]))};return Object(n.useEffect)((function(){fetch("".concat("/Bukwild-FE-Test","/data/content.json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){s(e.pages)})),document.querySelector(".App").classList.add("fade-in")}),[]),Object(n.useEffect)((function(){var e=window.location.href.replace(/(.*\/)/,"");console.log(e),t.length>0&&(e.length>0?(console.log(t),f(t[0].slug)):f(e))}),[t]),Object(u.jsx)("div",{className:"App",style:{backgroundImage:"url('".concat("/Bukwild-FE-Test","/backgrounds/").concat(b.background,"')")},children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("img",{src:j,className:"logo col",alt:"ABC Logo"}),Object(u.jsx)("div",{className:"contact col",children:"Contact Us"})]}),Object(u.jsx)("ul",{className:"menu",children:t.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{activeClassName:"orange",to:e.slug,onClick:function(){return f(e.slug)},children:e.title})},e.slug)}))})]}),Object(u.jsx)(i.a,{path:"/:slug",render:function(){return Object(u.jsx)(d,{data:b})}})]})})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,a=c.getLCP,l=c.getTTFB;t(e),n(e),s(e),a(e),l(e)}))};l.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(r.a,{children:Object(u.jsx)(b,{})})}),document.getElementById("root")),h()}},[[32,1,2]]]);
//# sourceMappingURL=main.982bbcf4.chunk.js.map