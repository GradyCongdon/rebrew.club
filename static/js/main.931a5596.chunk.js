(this["webpackJsonprebew.club"]=this["webpackJsonprebew.club"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(7),i=s.n(a),r=(s(13),s(2)),l=function(e,t){var s=parseInt(t.currentTarget.value,10)||0;return console.debug(s),s>e?function(e,t){var s=t.toString().split("").pop()||"0";return console.debug(s),parseInt(s,10)}(0,s):s},o=function(e){return e.join(" ")},u=function(e){window.scrollTo({top:e.currentTarget.getBoundingClientRect().top,behavior:"smooth"})},j=(s(14),s(0)),b=function(e){var t=e.brew,s=e.setBrew,c=e.selected,n=e.setSelected,a=e.isTicking,i=o(["brew","brew"===c?"selected":""]),r="number-".concat(t);return Object(j.jsx)("section",{className:i,children:Object(j.jsx)("button",{onClick:function(){a||(n("brew"),s(++t))},children:Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("label",{children:"Brew"}),Object(j.jsx)("h2",{className:"count "+r,children:t})]})})})},m=(s(16),function(e){var t=e.onNew,s=e.onOld;return Object(j.jsxs)("section",{className:"controls",children:[Object(j.jsx)("button",{className:"old",onClick:s,children:Object(j.jsx)("span",{children:" past "})}),Object(j.jsx)("button",{className:"new",onClick:t,children:Object(j.jsx)("span",{children:" new "})})]})}),d=(s(17),function(e,t){return o(["f-cc",e,e===t?"active":""])}),O=function(e){var t=e.color,s=e.setColor,c=(e.selected,e.setSelected),n=o(["color"]),a=function(e){c("color"),s(e)};return Object(j.jsxs)("section",{className:n,children:[Object(j.jsx)("button",{className:d("pu-erh",t),onClick:function(){return a("pu-erh")},children:Object(j.jsx)("span",{className:"text",children:"Pu-erh"})}),Object(j.jsx)("button",{className:d("black",t),onClick:function(){return a("black")},children:Object(j.jsx)("span",{className:"text",children:"Black"})}),Object(j.jsx)("button",{className:d("oolong",t),onClick:function(){return a("oolong")},children:Object(j.jsx)("span",{className:"text",children:Object(j.jsxs)("span",{className:"olong",children:[Object(j.jsx)("span",{className:"oo",children:"Oo"}),"long"]})})}),Object(j.jsx)("button",{className:d("green",t),onClick:function(){return a("green")},children:Object(j.jsx)("span",{className:"text",children:"Green"})}),Object(j.jsx)("button",{className:d("white",t),onClick:function(){return a("white")},children:Object(j.jsx)("span",{className:"text",children:"White"})})]})},h=(s(18),function(e){var t=e.temperature,s=e.setTemperature,c=e.isCelsius,n=e.setIsCelsius,a=e.selected,i=e.setSelected,r=o(["amount-label","fahrenheit",c?"":"active"]),b=o(["amount-label","celsius",c?"active":""]),m=o(["temperature","temperature"===a?"selected":""]);return Object(j.jsxs)("section",{className:m,children:[Object(j.jsx)("input",{type:"tel",className:"input--temperature",value:t,onClick:function(e){u(e),i("temperature")},onChange:function(e){return s(l(212,e))}}),Object(j.jsx)("div",{className:"value",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("h2",{className:"amount",children:t})})}),Object(j.jsxs)("div",{className:"label",children:[Object(j.jsx)("button",{className:r,onClick:function(){return n(!1)},children:"\xb0F"}),Object(j.jsx)("button",{className:b,onClick:function(){return n(!0)},children:"\xb0C"})]})]})}),x=(s(19),function(e){return((e=e<0?0:e)<10?"0".concat(e):"".concat(e)).split("").map((function(e,t){return Object(j.jsx)("h2",{className:"value",children:e},"".concat(t,"-").concat(e))}))}),p=function(e){var t=e.time,s=e.setTime,c=e.selected,n=e.setSelected,a=function(e){var t=Math.floor(e/60);return[t,e-60*t]}(t),i=Object(r.a)(a,2),b=i[0],m=i[1],d=x(b),O=x(m),h=o(["timer","minutes"===c?"selected-min":"","seconds"===c?"selected-sec":""]);return Object(j.jsxs)("section",{className:h,children:[Object(j.jsxs)("section",{className:"capsule min",children:[Object(j.jsx)("input",{type:"tel",className:"input--timer",value:b,onClick:function(e){u(e),n("minutes")},onChange:function(e){return t=l(9,e),void s(60*t+m);var t}}),Object(j.jsx)("label",{className:"label",children:"min"}),Object(j.jsx)("div",{className:"values",children:d})]}),Object(j.jsxs)("section",{className:"capsule sec",children:[Object(j.jsx)("input",{type:"tel",className:"input--timer",value:m,onClick:function(e){u(e),n("seconds")},onChange:function(e){return t=l(59,e),void s(60*b+t);var t}}),Object(j.jsx)("label",{className:"label",children:"sec"}),Object(j.jsx)("div",{className:"values",children:O})]})]})},f=(s(20),function(e){var t=e.name,s=e.setName,c=e.selected,n=e.setSelected,a="Tea"===t,i=o(["f-cc","name","name"===c?"selected":"",a?"start":""]);return Object(j.jsxs)("section",{className:i,children:[Object(j.jsx)("input",{type:"text",className:"input--text",placeholder:"Tea",value:t,onClick:function(){n("name")},onChange:function(e){var t=e.currentTarget.value;a&&(t=t.replace("Tea","")),s(t)}}),Object(j.jsx)("h1",{className:"name__name",children:t})]})}),N=(s(21),function(e){var t=e.isDone,s=e.isOut,c=e.setIsOut,n=e.setTime,a=e.lastTime,i=o(["overlay",t?"done":"",s?"out":""]);return Object(j.jsx)("div",{onClick:function(){c(!0),n(a)},className:i})}),w=(s(22),function(e){var t=e.weight,s=e.setWeight,c=e.isMass,n=e.setIsMass,a=e.selected,i=e.setSelected,r=o(["amount-label","tsp",c?"":"active"]),b=o(["amount-label","g",c?"active":""]),m=o(["weight","weight"===a?"selected":""]);return Object(j.jsxs)("section",{className:m,children:[Object(j.jsx)("input",{type:"tel",className:"input--weight",value:t,onClick:function(e){u(e),i("weight")},onChange:function(e){return s(l(99,e))}}),Object(j.jsxs)("div",{className:"diamond",children:[Object(j.jsx)("button",{className:r,onClick:function(){return n(!1)},children:"tsp"}),Object(j.jsx)("h2",{className:"value",children:t}),Object(j.jsx)("button",{className:b,onClick:function(){return n(!0)},children:"g"})]})]})}),g=(s(23),function(e){var t=e.water,s=e.setWater,c=e.isMass,n=e.setIsMass,a=e.selected,i=e.setSelected,r=o(["amount-label","oz",c?"":"active"]),b=o(["amount-label","g",c?"active":""]),m=o(["water","water"===a?"selected":""]);return Object(j.jsxs)("section",{className:m,children:[Object(j.jsx)("input",{type:"tel",className:"input--water glass",value:t,onClick:function(e){u(e),i("water")},onChange:function(e){return s(l(999,e))}}),Object(j.jsx)("div",{className:"value",children:Object(j.jsx)("div",{className:"glass",children:Object(j.jsx)("h2",{className:"amount",children:t})})}),Object(j.jsxs)("div",{className:"label",children:[Object(j.jsx)("button",{className:r,onClick:function(){return n(!1)},children:"oz"}),Object(j.jsx)("button",{className:b,onClick:function(){return n(!0)},children:"g"})]})]})}),v=s(3),S=(s(24),function(e,t){return e?Object(j.jsxs)(j.Fragment,{children:[e,Object(j.jsx)("span",{className:"unit",children:t})]}):Object(j.jsx)("span",{children:"-"})}),C=function(e){var t=e.brew,s=t.brewNumber,c=t.time,n=t.temperature,a=t.water,i=t.weight,r=t.temperatureUnit,l=t.waterUnit,o=t.weightUnit;return Object(j.jsxs)("div",{className:"brew-session",children:[Object(j.jsx)("span",{className:"session-brew-number",children:s}),Object(j.jsx)("span",{className:"session-time",children:S(c,"s")}),Object(j.jsx)("span",{className:"session-weight",children:S(i,o)}),Object(j.jsx)("span",{className:"session-temperature",children:S(n,"\xb0".concat(r))}),Object(j.jsx)("span",{className:"session-water",children:S(a,l)})]})},k=(s(25),{id:1,name:"Hairy Crab",color:"oolong",brews:[{brewNumber:1,time:15,temperature:195,temperatureUnit:"\xb0F",water:120,waterUnit:"g",mass:9,massUnit:"g"},{brewNumber:2,time:30,temperature:195,temperatureUnit:"F",water:110,waterUnit:"g",mass:9,massUnit:"g"}]}),T=function(e){var t=e.session,s=t.id,c=t.name,n=t.color,a=t.brews,i=s.toString().padStart(3,"0"),r=a.map((function(e){return Object(j.jsx)(C,{brew:e},"".concat(i,"-").concat(e.brewNumber))}));return Object(j.jsxs)("article",{className:"tea-session",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{className:"name",children:"Tea"===c?Object(j.jsx)("span",{className:"mystery",children:"???"}):c}),n?"-":null," ",n]}),Object(j.jsxs)("span",{className:"id",children:[Object(j.jsx)("span",{className:"light",children:"("}),i,Object(j.jsx)("span",{className:"light",children:")"})]})]}),Object(j.jsxs)("div",{className:"labels",children:[Object(j.jsx)("span",{className:"labels-brew-number",children:"brew"}),Object(j.jsx)("span",{children:"time"}),Object(j.jsx)("span",{children:"weight"}),Object(j.jsx)("span",{children:"temperature"}),Object(j.jsx)("span",{children:"water"})]}),r]})},y=(s(8),"sessions"),I=[{id:1,name:"",color:"",brews:[]}];function U(){var e=JSON.stringify(I);return localStorage.setItem(y,e),e}function M(){var e=localStorage.getItem(y)||U();return JSON.parse(e)}function F(e){var t=JSON.stringify(e);return localStorage.setItem(y,t),e}function B(e){var t=M(),s=function(e){var t,s=M(),c=e.id-1;return(null===(t=s[c])||void 0===t?void 0:t.brews)||[]}(e),c=Object(v.a)(Object(v.a)({},e),{},{brews:s});t[e.id-1]=c;var n=JSON.stringify(t);return localStorage.setItem(y,n),c}Object(v.a)(Object(v.a)({},k),{},{id:2,name:"Mao Feng",color:"black"});var J=function(e){var t=e.onBack,s=M().sort((function(e,t){return t.id-e.id})).map((function(e){return Object(j.jsx)(T,{session:e},e.id)}));return Object(j.jsxs)("article",{className:"history",children:[Object(j.jsxs)("section",{className:"controls",children:[Object(j.jsx)("button",{className:"back",onClick:t,children:Object(j.jsx)("span",{children:" now "})}),Object(j.jsx)("button",{onClick:function(){window.confirm("really?")&&(localStorage.removeItem(y),t())},children:Object(j.jsx)("span",{children:" clear "})})]}),Object(j.jsx)("div",{className:"gap"}),Object(j.jsx)("section",{className:"sessions",children:s})]})},W=(s(26),function(){var e=localStorage.getItem(y)||U();return JSON.parse(e).pop()}()),D=W.brews[W.brews.length-1]||{},E=function(e){return e+15};var z=function(){var e=Object(c.useState)(W.id),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(W.name||"Tea"),i=Object(r.a)(a,2),l=i[0],u=i[1],d=Object(c.useState)(W.color||""),x=Object(r.a)(d,2),v=x[0],S=x[1],C=Object(c.useState)(D.brewNumber||0),k=Object(r.a)(C,2),T=k[0],y=k[1],I=Object(c.useState)(D.temperature||0),U=Object(r.a)(I,2),z=U[0],P=U[1],L=Object(c.useState)("C"===D.temperatureUnit),_=Object(r.a)(L,2),G=_[0],H=_[1],R=Object(c.useState)(D.weight||0),q=Object(r.a)(R,2),A=q[0],K=q[1],Q=Object(c.useState)("g"===D.weightUnit),V=Object(r.a)(Q,2),X=V[0],Y=V[1],Z=Object(c.useState)(D.water||0),$=Object(r.a)(Z,2),ee=$[0],te=$[1],se=Object(c.useState)("g"===D.waterUnit),ce=Object(r.a)(se,2),ne=ce[0],ae=ce[1],ie=Object(c.useState)(D.time||E(0)),re=Object(r.a)(ie,2),le=re[0],oe=re[1],ue=Object(c.useState)(le),je=Object(r.a)(ue,2),be=je[0],me=je[1],de=Object(c.useState)("main"),Oe=Object(r.a)(de,2),he=Oe[0],xe=Oe[1],pe=Object(c.useState)(""),fe=Object(r.a)(pe,2),Ne=fe[0],we=fe[1],ge=Object(c.useState)(!0),ve=Object(r.a)(ge,2),Se=ve[0],Ce=(ve[1],Object(c.useState)(!1)),ke=Object(r.a)(Ce,2),Te=ke[0],ye=ke[1],Ie=Object(c.useState)(!1),Ue=Object(r.a)(Ie,2),Me=Ue[0],Fe=Ue[1],Be=Object(c.useState)(!1),Je=Object(r.a)(Be,2),We=Je[0],De=Je[1],Ee={brewNumber:T,time:be,temperature:z,weight:A,water:ee,temperatureUnit:G?"C":"F",waterUnit:ne?"g":"oz",weightUnit:X?"g":"tsp"},ze={id:s,name:l,color:v},Pe=function(e){return ye(!Te),Fe(!1),De(!1),Se&&me(E(le)),y(e)};Object(c.useEffect)((function(){if(!Te)return function(){};var e=setTimeout((function(){oe(le-1),le<=0&&(ye(!1),Fe(!0),oe(0))}),1e3);return function(){clearTimeout(e)}}),[Te,le]),Object(c.useEffect)((function(){Me&&We&&setTimeout((function(){Fe(!1),we("overlay")}),200)}),[Me,We]),Object(c.useEffect)((function(){0!==T&&(B(ze),function(e,t){var s=M(),c=e.id-1,n=s[c],a=t.brewNumber-1;n.brews[a]=t,s[c]=n,F(s)}(ze,Ee))}),[T]);var Le=o(["main",window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||document.referrer.includes("android-app://")?"pwa":"",Ne?"selecting":""]);return"history"===he?Object(j.jsxs)("main",{children:[Object(j.jsx)(J,{onBack:function(){xe("main")}}),Object(j.jsx)(N,{isDone:Me,isOut:We,setIsOut:De,setTime:oe,lastTime:be})]}):Object(j.jsxs)("main",{children:[Object(j.jsxs)("article",{className:Le,children:[Object(j.jsx)(m,{onOld:function(){1===s&&0===T||xe("history")},onNew:function(){u("Tea"),S(""),we(""),Pe(0),te(0),P(0),K(0),oe(Se?E(0):0),Fe(!1),ye(!1),De(!1),n(s+1)}}),Object(j.jsx)(f,{selected:Ne,setSelected:we,name:l,setName:u}),Object(j.jsx)(h,{selected:Ne,setSelected:we,temperature:z,setTemperature:P,isCelsius:G,setIsCelsius:H}),Object(j.jsx)(O,{selected:Ne,setSelected:we,color:v,setColor:S}),Object(j.jsx)(w,{selected:Ne,setSelected:we,weight:A,setWeight:K,isMass:X,setIsMass:Y}),Object(j.jsx)(g,{selected:Ne,setSelected:we,water:ee,setWater:te,isMass:ne,setIsMass:ae}),Object(j.jsx)(p,{selected:Ne,setSelected:we,time:le,setTime:oe}),Object(j.jsx)(b,{selected:Ne,setSelected:we,isTicking:Te,brew:T,setBrew:Pe}),Object(j.jsx)("div",{className:"sip",children:"sip"})]}),Object(j.jsx)(N,{isDone:Me,isOut:We,setIsOut:De,setTime:oe,lastTime:be})]})},P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,28)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root")),P()}],[[27,1,2]]]);
//# sourceMappingURL=main.931a5596.chunk.js.map