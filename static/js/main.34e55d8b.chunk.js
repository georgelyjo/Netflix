(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{5:function(e,t,s){},56:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(16),i=s.n(c),n=(s(5),s(0));var o=function(){return Object(n.jsx)("div",{className:"navbar",children:Object(n.jsx)("img",{className:"logo",src:" https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"Netflix_2015_logo"})})},r="1fce6d8a14c0f4b051adbcd0182f4679",l="https://image.tmdb.org/t/p/original",d="discover/tv?api_key=".concat(r,"&with_networks=213"),j="discover/movie?api_key=".concat(r,"&with_genres=28"),b="discover/movie?api_key=".concat(r,"&with_genres=35"),u="discover/movie?api_key=".concat(r,"&with_genres=10749"),m="discover/movie?api_key=".concat(r,"&with_genres=27"),v=s(4),h=s(17),p=s.n(h).a.create({baseURL:"https://api.themoviedb.org/3"});var g=function(){var e=Object(a.useState)(),t=Object(v.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){p.get("/trending/all/week?api_key=".concat(r,"&language=en-US")).then((function(e){console.log(e.data.results[0]);var t=Math.floor(18*Math.random());c(e.data.results[t++])}))}),[]),Object(n.jsxs)("div",{style:{backgroundImage:"url( ".concat(s?l+s.backdrop_path:"",")")},className:"banner",children:[Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h1",{className:"title",children:s?s.title:""}),Object(n.jsxs)("div",{className:"banner_button",children:[Object(n.jsx)("button",{className:"button",children:"Play"}),Object(n.jsx)("button",{className:"button",children:"My list"})]}),Object(n.jsx)("h1",{className:"description",children:s?s.overview:""})]}),Object(n.jsx)("div",{className:"fade_bottom"})]})},O=s(18);var x=function(e){var t=Object(a.useState)([]),s=Object(v.a)(t,2),c=s[0],i=s[1],o=Object(a.useState)(""),d=Object(v.a)(o,2),j=d[0],b=d[1];return Object(a.useEffect)((function(){p.get(e.url).then((function(e){i(e.data.results)}))}),[]),Object(n.jsxs)("div",{className:"rowpost",children:[Object(n.jsx)("h2",{children:e.title}),Object(n.jsx)("div",{className:"posters",children:c.map((function(t){return Object(n.jsx)("img",{src:"".concat(l+t.backdrop_path),alt:"poster",className:e.issmall?"smallposter":"poster",onClick:function(){return e=t.id,void p.get("/movie/".concat(e,"/videos?api_key=").concat(r,"&language=en-US")).then((function(e){console.log(e.data.results[0]),0!==e.data.results?b(e.data.results[0]):console.log("array not found !!")}));var e}})}))}),j&&Object(n.jsx)(O.a,{opts:{height:"390",width:"100%",playerVars:{autoplay:1}},videoId:j.key})]})};function f(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(o,{}),Object(n.jsx)(g,{}),Object(n.jsx)(x,{url:d,title:"Netflix orginals"}),Object(n.jsx)(x,{url:j,title:"Action",issmall:!0}),Object(n.jsx)(x,{url:b,title:"Comedy Movies",issmall:!0}),Object(n.jsx)(x,{url:m,title:"Comedy Movies",issmall:!0}),Object(n.jsx)(x,{url:u,title:"Romance Movies",issmall:!0})]})}i.a.render(Object(n.jsx)(f,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.34e55d8b.chunk.js.map