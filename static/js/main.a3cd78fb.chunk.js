(this["webpackJsonprebew.club"]=this["webpackJsonprebew.club"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(7),r=s.n(a),i=(s(14),s(2)),l=function(e,t){var s=parseInt(t.currentTarget.value,10)||0;return console.debug(s),s>e?function(e,t){var s=t.toString().split("").pop()||"0";return console.debug(s),parseInt(s,10)}(0,s):s},o=function(e){return e.join(" ")},u=function(e){window.scrollTo({top:e.currentTarget.getBoundingClientRect().top,behavior:"smooth"})},j=(s(15),s(0)),b=function(e){var t=e.brew,s=e.selected,n=e.onClick,c=o(["brew","brew"===s?"selected":""]),a="number-".concat(t);return Object(j.jsx)("section",{className:c,children:Object(j.jsx)("button",{onClick:n,children:Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("label",{children:"Brew"}),Object(j.jsx)("h2",{className:"count "+a,children:t})]})})})},m=(s(17),function(e){var t=e.onNew,s=e.onOld;return Object(j.jsxs)("section",{className:"controls",children:[Object(j.jsx)("button",{className:"old",onClick:s,children:Object(j.jsx)("span",{children:" past "})}),Object(j.jsx)("button",{className:"new",onClick:t,children:Object(j.jsx)("span",{children:" new "})})]})}),d=(s(18),function(e,t){return o(["f-cc",e,e===t?"active":""])}),O=function(e){var t=e.color,s=e.setColor,n=(e.selected,e.setSelected),c=o(["color"]),a=function(e){n("color"),s(e)};return Object(j.jsxs)("section",{className:c,children:[Object(j.jsx)("button",{className:d("pu-erh",t),onClick:function(){return a("pu-erh")},children:Object(j.jsx)("span",{className:"text",children:"Pu-erh"})}),Object(j.jsx)("button",{className:d("black",t),onClick:function(){return a("black")},children:Object(j.jsx)("span",{className:"text",children:"Black"})}),Object(j.jsx)("button",{className:d("oolong",t),onClick:function(){return a("oolong")},children:Object(j.jsx)("span",{className:"text",children:Object(j.jsxs)("span",{className:"olong",children:[Object(j.jsx)("span",{className:"oo",children:"Oo"}),"long"]})})}),Object(j.jsx)("button",{className:d("green",t),onClick:function(){return a("green")},children:Object(j.jsx)("span",{className:"text",children:"Green"})}),Object(j.jsx)("button",{className:d("white",t),onClick:function(){return a("white")},children:Object(j.jsx)("span",{className:"text",children:"White"})})]})},h=(s(19),function(e){var t=e.temperature,s=e.setTemperature,n=e.isCelsius,c=e.setIsCelsius,a=e.selected,r=e.setSelected,i=o(["amount-label","fahrenheit",n?"":"active"]),b=o(["amount-label","celsius",n?"active":""]),m=o(["temperature","temperature"===a?"selected":""]);return Object(j.jsxs)("section",{className:m,children:[Object(j.jsx)("input",{type:"tel",className:"input--temperature",value:t,onClick:function(e){u(e),r("temperature")},onChange:function(e){return s(l(212,e))}}),Object(j.jsx)("div",{className:"value",children:Object(j.jsx)("div",{className:"circle",children:Object(j.jsx)("h2",{className:"amount",children:t})})}),Object(j.jsxs)("div",{className:"label",children:[Object(j.jsx)("button",{className:i,onClick:function(){return c(!1)},children:"\xb0F"}),Object(j.jsx)("button",{className:b,onClick:function(){return c(!0)},children:"\xb0C"})]})]})}),p=(s(20),function(e){return((e=e<0?0:e)<10?"0".concat(e):"".concat(e)).split("").map((function(e,t){return Object(j.jsx)("h2",{className:"value",children:e},"".concat(t,"-").concat(e))}))}),x=function(e){var t=e.time,s=e.setTime,n=e.selected,c=e.setSelected,a=function(e){var t=Math.floor(e/60);return[t,e-60*t]}(t),r=Object(i.a)(a,2),b=r[0],m=r[1],d=p(b),O=p(m),h=o(["timer","minutes"===n?"selected-min":"","seconds"===n?"selected-sec":""]);return Object(j.jsxs)("section",{className:h,children:[Object(j.jsxs)("section",{className:"capsule min",children:[Object(j.jsx)("input",{type:"tel",className:"input--timer",value:b,onClick:function(e){u(e),c("minutes")},onChange:function(e){return t=l(9,e),void s(60*t+m);var t}}),Object(j.jsx)("label",{className:"label",children:"min"}),Object(j.jsx)("div",{className:"values",children:d})]}),Object(j.jsxs)("section",{className:"capsule sec",children:[Object(j.jsx)("input",{type:"tel",className:"input--timer",value:m,onClick:function(e){u(e),c("seconds")},onChange:function(e){return t=l(59,e),void s(60*b+t);var t}}),Object(j.jsx)("label",{className:"label",children:"sec"}),Object(j.jsx)("div",{className:"values",children:O})]})]})},f=(s(21),function(e){var t=e.name,s=e.setName,n=e.selected,c=e.setSelected,a="Tea"===t,r=o(["f-cc","name","name"===n?"selected":"",a?"start":""]);return Object(j.jsxs)("section",{className:r,children:[Object(j.jsx)("input",{type:"text",className:"input--text",placeholder:"Tea",value:t,onClick:function(){c("name")},onChange:function(e){var t=e.currentTarget.value;a&&(t=t.replace("Tea","")),s(t)}}),Object(j.jsx)("h1",{className:"name__name",children:t})]})}),N=(s(22),function(e){var t=e.isDone,s=e.isOut,n=e.setIsOut,c=e.setTime,a=e.lastTime,r=o(["overlay",t?"done":"",s?"out":""]);return Object(j.jsx)("div",{onClick:function(){n(!0),c(a)},className:r})}),v=(s(23),function(e){var t=e.weight,s=e.setWeight,n=e.isMass,c=e.setIsMass,a=e.selected,r=e.setSelected,i=o(["amount-label","tsp",n?"":"active"]),b=o(["amount-label","g",n?"active":""]),m=o(["weight","weight"===a?"selected":""]);return Object(j.jsxs)("section",{className:m,children:[Object(j.jsx)("input",{type:"tel",className:"input--weight",value:t,onClick:function(e){u(e),r("weight")},onChange:function(e){return s(l(99,e))}}),Object(j.jsxs)("div",{className:"diamond",children:[Object(j.jsx)("button",{className:i,onClick:function(){return c(!1)},children:"tsp"}),Object(j.jsx)("h2",{className:"value",children:t}),Object(j.jsx)("button",{className:b,onClick:function(){return c(!0)},children:"g"})]})]})}),w=(s(24),function(e){var t=e.water,s=e.setWater,n=e.isMass,c=e.setIsMass,a=e.selected,r=e.setSelected,i=o(["amount-label","oz",n?"":"active"]),b=o(["amount-label","g",n?"active":""]),m=o(["water","water"===a?"selected":""]);return Object(j.jsxs)("section",{className:m,children:[Object(j.jsx)("input",{type:"tel",className:"input--water glass",value:t,onClick:function(e){u(e),r("water")},onChange:function(e){return s(l(999,e))}}),Object(j.jsx)("div",{className:"value",children:Object(j.jsx)("div",{className:"glass",children:Object(j.jsx)("h2",{className:"amount",children:t})})}),Object(j.jsxs)("div",{className:"label",children:[Object(j.jsx)("button",{className:i,onClick:function(){return c(!1)},children:"oz"}),Object(j.jsx)("button",{className:b,onClick:function(){return c(!0)},children:"g"})]})]})}),g=s(8),S=s.n(g),C=function(e){e.id;var t=e.label,s="".concat(t,".png");return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(S.a,{setup:function(t,n){t;var c=t.createCanvas(360,315).parent(n);t.frameRate(120),t.strokeWeight(5),t.stroke("#26906D"),t.clear();var a=t.createButton("clear");a.parent(n),a.position(350,445),a.mousePressed((function(){return t.clear()}));var r=t.createButton("back");r.parent(n),r.position(350,535),r.mousePressed((function(){return e.back()}));var i=t.createButton("save");i.parent(n),i.position(50,445),i.mousePressed((function(){var n=t.save(c,s);console.log(n),e.back()})),e.start()},touchMoved:function(e){e.line(e.mouseX,e.mouseY,e.pmouseX,e.pmouseY)},mouseDragged:function(e){e.line(e.mouseX,e.mouseY,e.pmouseX,e.pmouseY)}}),Object(j.jsxs)("p",{className:"subject",children:["Draw ",t]})]})},k=s(3),T=(s(25),function(e,t){return e?Object(j.jsxs)(j.Fragment,{children:[e,Object(j.jsx)("span",{className:"unit",children:t})]}):Object(j.jsx)("span",{children:"-"})}),y=function(e){var t=e.brew,s=t.brewNumber,n=t.time,c=t.temperature,a=t.water,r=t.weight,i=t.temperatureUnit,l=t.waterUnit,o=t.weightUnit;return Object(j.jsxs)("div",{className:"brew-session",children:[Object(j.jsx)("span",{className:"session-brew-number",children:s}),Object(j.jsx)("span",{className:"session-time",children:T(n,"s")}),Object(j.jsx)("span",{className:"session-weight",children:T(r,o)}),Object(j.jsx)("span",{className:"session-temperature",children:T(c,"\xb0".concat(i))}),Object(j.jsx)("span",{className:"session-water",children:T(a,l)})]})},I=(s(26),{id:1,name:"Hairy Crab",color:"oolong",brews:[{brewNumber:1,time:15,temperature:195,temperatureUnit:"\xb0F",water:120,waterUnit:"g",mass:9,massUnit:"g"},{brewNumber:2,time:30,temperature:195,temperatureUnit:"F",water:110,waterUnit:"g",mass:9,massUnit:"g"}]}),U=function(e){var t=e.session,s=t.id,n=t.name,c=t.color,a=t.brews,r=s.toString().padStart(3,"0"),i=a.map((function(e){return Object(j.jsx)(y,{brew:e},"".concat(r,"-").concat(e.brewNumber))}));return Object(j.jsxs)("article",{className:"tea-session",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{className:"name",children:"Tea"===n?Object(j.jsx)("span",{className:"mystery",children:"???"}):n}),c?"-":null," ",c]}),Object(j.jsxs)("span",{className:"id",children:[Object(j.jsx)("span",{className:"light",children:"("}),r,Object(j.jsx)("span",{className:"light",children:")"})]})]}),Object(j.jsxs)("div",{className:"labels",children:[Object(j.jsx)("span",{className:"labels-brew-number",children:"brew"}),Object(j.jsx)("span",{children:"time"}),Object(j.jsx)("span",{children:"weight"}),Object(j.jsx)("span",{children:"temperature"}),Object(j.jsx)("span",{children:"water"})]}),i]})},M=(s(9),"sessions"),F=[{id:1,name:"",color:"",brews:[]}];function B(){var e=JSON.stringify(F);return localStorage.setItem(M,e),e}function D(){var e=localStorage.getItem(M)||B();return JSON.parse(e)}function J(e){var t=JSON.stringify(e);return localStorage.setItem(M,t),e}function P(e){var t=D(),s=function(e){var t,s=D(),n=e.id-1;return(null===(t=s[n])||void 0===t?void 0:t.brews)||[]}(e),n=Object(k.a)(Object(k.a)({},e),{},{brews:s});t[e.id-1]=n;var c=JSON.stringify(t);return localStorage.setItem(M,c),n}Object(k.a)(Object(k.a)({},I),{},{id:2,name:"Mao Feng",color:"black"});var W=function(e){var t=e.onBack,s=D().sort((function(e,t){return t.id-e.id})).map((function(e){return Object(j.jsx)(U,{session:e},e.id)}));return Object(j.jsxs)("article",{className:"history",children:[Object(j.jsxs)("section",{className:"controls",children:[Object(j.jsx)("button",{className:"back",onClick:t,children:Object(j.jsx)("span",{children:" now "})}),Object(j.jsx)("button",{onClick:function(){window.confirm("really?")&&(localStorage.removeItem(M),t())},children:Object(j.jsx)("span",{children:" clear "})})]}),Object(j.jsx)("div",{className:"gap"}),Object(j.jsx)("section",{className:"sessions",children:s})]})},z=["apple","frog","tree","cylinder","cactus","rock","pilot","pencil","river","breakfast","camera","candle","machine","dream"],E=["calm","happy","long","beautiful","lazy","polite","repressed","unkempt","clean","evil","frail","modern","wild"],X=["a","e","i","o","u"],Y=(s(27),function(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||document.referrer.includes("android-app://")}),L=function(){var e=localStorage.getItem(M)||B();return JSON.parse(e).pop()}(),R=L.brews[L.brews.length-1]||{},_=function(e){return e+15};var G=function(){var e=Object(n.useState)(L.id),t=Object(i.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)(L.name||"Tea"),r=Object(i.a)(a,2),l=r[0],u=r[1],d=Object(n.useState)(L.color||""),p=Object(i.a)(d,2),g=p[0],S=p[1],k=Object(n.useState)(R.brewNumber||0),T=Object(i.a)(k,2),y=T[0],I=T[1],U=Object(n.useState)(R.temperature||0),M=Object(i.a)(U,2),F=M[0],B=M[1],G=Object(n.useState)("C"===R.temperatureUnit),H=Object(i.a)(G,2),q=H[0],A=H[1],K=Object(n.useState)(R.weight||0),Q=Object(i.a)(K,2),V=Q[0],Z=Q[1],$=Object(n.useState)("g"===R.weightUnit),ee=Object(i.a)($,2),te=ee[0],se=ee[1],ne=Object(n.useState)(R.water||0),ce=Object(i.a)(ne,2),ae=ce[0],re=ce[1],ie=Object(n.useState)("g"===R.waterUnit),le=Object(i.a)(ie,2),oe=le[0],ue=le[1],je=Object(n.useState)(R.time||_(0)),be=Object(i.a)(je,2),me=be[0],de=be[1],Oe=Object(n.useState)(me),he=Object(i.a)(Oe,2),pe=he[0],xe=he[1],fe=Object(n.useState)("main"),Ne=Object(i.a)(fe,2),ve=Ne[0],we=Ne[1],ge=Object(n.useState)(""),Se=Object(i.a)(ge,2),Ce=Se[0],ke=Se[1],Te=Object(n.useState)(!0),ye=Object(i.a)(Te,2),Ie=ye[0],Ue=(ye[1],Object(n.useState)(!1)),Me=Object(i.a)(Ue,2),Fe=Me[0],Be=Me[1],De=Object(n.useState)(!1),Je=Object(i.a)(De,2),Pe=Je[0],We=Je[1],ze=Object(n.useState)(!1),Ee=Object(i.a)(ze,2),Xe=Ee[0],Ye=Ee[1],Le={brewNumber:y,time:pe,temperature:F,weight:V,water:ae,temperatureUnit:q?"C":"F",waterUnit:oe?"ml":"oz",weightUnit:te?"g":"tsp"},Re={id:s,name:l,color:g},_e=function(e){return Be(!Fe),We(!1),Ye(!1),Ie&&xe(_(me)),I(e)};Object(n.useEffect)((function(){!function(){if(!Fe)return function(){};var e=setTimeout((function(){de(me-1),me<=0&&(Be(!1),We(!0),de(0))}),1e3)}()}),[Fe,me]),Object(n.useEffect)((function(){Pe&&Xe&&setTimeout((function(){We(!1),ke("overlay")}),200)}),[Pe,Xe]);var Ge=function(){0!==y&&(P(Re),function(e,t){var s=D(),n=e.id-1,c=s[n],a=t.brewNumber-1;c.brews[a]=t,s[n]=c,J(s)}(Re,Le))};Object(n.useEffect)((function(){Ge()}),[y]);var He=o(["main",Y()?"pwa":"",Ce?"selecting":""]);if("history"===ve)return Object(j.jsxs)("main",{children:[Object(j.jsx)(W,{onBack:function(){we("main")}}),Object(j.jsx)(N,{isDone:Pe,isOut:Xe,setIsOut:Ye,setTime:de,lastTime:pe})]});if("draw"===ve){var qe=function(e,t){var s=z[t%z.length],n=E[(e+t)%E.length],c=X.includes(n[0])?"an":"a";return"".concat(c," ").concat(n," ").concat(s)}(s,y);return Object(j.jsx)("main",{className:"draw",children:Object(j.jsxs)("article",{children:[Object(j.jsx)(C,{start:function(){},back:function(){return we("main")},isDone:Pe,label:qe,id:"".concat(s,"-").concat(y)}),Object(j.jsx)(x,{selected:Ce,setSelected:ke,time:me,setTime:de}),Object(j.jsx)(N,{isDone:Pe,isOut:Xe,setIsOut:Ye,setTime:de,lastTime:pe})]})})}return Object(j.jsxs)("main",{children:[Object(j.jsxs)("article",{className:He,children:[Object(j.jsx)("p",{className:"pwa",children:Y()?"pwa":"web"}),Object(j.jsx)(m,{onOld:function(){1===s&&0===y||we("history")},onNew:function(){u("Tea"),S(""),ke(""),_e(0),re(0),B(0),Z(0),de(Ie?_(0):0),We(!1),Be(!1),Ye(!1),c(s+1)}}),Object(j.jsx)(f,{selected:Ce,setSelected:ke,name:l,setName:u}),Object(j.jsx)(h,{selected:Ce,setSelected:ke,temperature:F,setTemperature:B,isCelsius:q,setIsCelsius:A}),Object(j.jsx)(O,{selected:Ce,setSelected:ke,color:g,setColor:S}),Object(j.jsx)(v,{selected:Ce,setSelected:ke,weight:V,setWeight:Z,isMass:te,setIsMass:se}),Object(j.jsx)(w,{selected:Ce,setSelected:ke,water:ae,setWater:re,isMass:oe,setIsMass:ue}),Object(j.jsx)(x,{selected:Ce,setSelected:ke,time:me,setTime:de}),Object(j.jsx)(b,{selected:Ce,brew:y,onClick:function(){Fe||(ke("brew"),_e(y+1));we("draw")}}),Object(j.jsx)("div",{className:"sip",children:"sip"})]}),Object(j.jsx)(N,{isDone:Pe,isOut:Xe,setIsOut:Ye,setTime:de,lastTime:pe})]})},H=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,29)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root")),H()}],[[28,1,2]]]);
//# sourceMappingURL=main.a3cd78fb.chunk.js.map