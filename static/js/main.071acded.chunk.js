(this["webpackJsonprebew.club"]=this["webpackJsonprebew.club"]||[]).push([[0],Array(20).concat([function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),s=c(10),r=c.n(s),i=(c(20),c(1)),l=c(2),o=function(e,t){var c=parseInt(t.currentTarget.value,10)||0;return console.debug(c),c>e?function(e,t){var c=t.toString().split("").pop()||"0";return console.debug(c),parseInt(c,10)}(0,c):c},j=function(e){return e.join(" ")},b=function(e){window.scrollTo({top:e.currentTarget.getBoundingClientRect().top,behavior:"smooth"})},u=(c(22),c(0)),d=function(e){var t=e.onClick,c=Object(l.d)(se),n=Object(i.a)(c,1)[0],a=Object(l.d)(K),s=Object(i.a)(a,1)[0],r=j(["brew","brew"===s?"selected":""]),o="number-".concat(n);return Object(u.jsx)("section",{className:r,children:Object(u.jsx)("button",{onClick:t,children:Object(u.jsxs)("div",{className:"text",children:[Object(u.jsx)("label",{children:"Brew"}),Object(u.jsx)("h2",{className:"count "+o,children:n})]})})})},O=(c(24),function(e){var t=e.onNew,c=e.onOld;return Object(u.jsxs)("section",{className:"controls",children:[Object(u.jsx)("button",{className:"old",onClick:c,children:Object(u.jsx)("span",{children:" past "})}),Object(u.jsx)("button",{className:"new",onClick:t,children:Object(u.jsx)("span",{children:" new "})})]})}),m=(c(25),function(e,t){return j(["f-cc",e,e===t?"active":""])}),h=function(){var e=Object(l.d)(q),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(l.d)(K),s=Object(i.a)(a,2),r=(s[0],s[1]),o=j(["color"]),b=function(e){r("color"),n(e)};return Object(u.jsxs)("section",{className:o,children:[Object(u.jsx)("button",{className:m("pu-erh",c),onClick:function(){return b("pu-erh")},children:Object(u.jsx)("span",{className:"text",children:"Pu-erh"})}),Object(u.jsx)("button",{className:m("black",c),onClick:function(){return b("black")},children:Object(u.jsx)("span",{className:"text",children:"Black"})}),Object(u.jsx)("button",{className:m("oolong",c),onClick:function(){return b("oolong")},children:Object(u.jsx)("span",{className:"text",children:Object(u.jsxs)("span",{className:"olong",children:[Object(u.jsx)("span",{className:"oo",children:"Oo"}),"long"]})})}),Object(u.jsx)("button",{className:m("green",c),onClick:function(){return b("green")},children:Object(u.jsx)("span",{className:"text",children:"Green"})}),Object(u.jsx)("button",{className:m("white",c),onClick:function(){return b("white")},children:Object(u.jsx)("span",{className:"text",children:"White"})})]})},f=(c(26),function(){var e=Object(l.d)(Q),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(l.d)(V),s=Object(i.a)(a,2),r=s[0],d=s[1],O=Object(l.d)(K),m=Object(i.a)(O,2),h=m[0],f=m[1],p=j(["amount-label","fahrenheit","F"===r?"active":""]),x=j(["amount-label","celsius","C"===r?"active":""]),v=j(["temperature","temperature"===h?"selected":""]);return Object(u.jsxs)("section",{className:v,children:[Object(u.jsx)("input",{type:"tel",className:"input--temperature",value:c,onClick:function(e){b(e),f("temperature")},onChange:function(e){return n(o(212,e))}}),Object(u.jsx)("div",{className:"value",children:Object(u.jsx)("div",{className:"circle",children:Object(u.jsx)("h2",{className:"amount",children:c})})}),Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("button",{className:p,onClick:function(){return d("F")},children:"\xb0F"}),Object(u.jsx)("button",{className:x,onClick:function(){return d("C")},children:"\xb0C"})]})]})}),p=(c(27),function(e){return((e=e<0?0:e)<10?"0".concat(e):"".concat(e)).split("").map((function(e,t){return Object(u.jsx)("h2",{className:"value",children:e},"".concat(t,"-").concat(e))}))}),x=function(){var e=Object(l.d)(ce),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(l.d)(K),s=Object(i.a)(a,2),r=s[0],d=s[1],O=function(e){var t=Math.floor(e/60);return[t,e-60*t]}(c),m=Object(i.a)(O,2),h=m[0],f=m[1],x=p(h),v=p(f),N=j(["timer","minutes"===r?"selected-min":"","seconds"===r?"selected-sec":""]);return Object(u.jsxs)("section",{className:N,children:[Object(u.jsxs)("section",{className:"capsule min",children:[Object(u.jsx)("input",{type:"tel",className:"input--timer",value:h,onClick:function(e){b(e),d("minutes")},onChange:function(e){return t=o(9,e),void n(60*t+f);var t}}),Object(u.jsx)("label",{className:"label",children:"min"}),Object(u.jsx)("div",{className:"values",children:x})]}),Object(u.jsxs)("section",{className:"capsule sec",children:[Object(u.jsx)("input",{type:"tel",className:"input--timer",value:f,onClick:function(e){b(e),d("seconds")},onChange:function(e){return t=o(59,e),void n(60*h+t);var t}}),Object(u.jsx)("label",{className:"label",children:"sec"}),Object(u.jsx)("div",{className:"values",children:v})]})]})},v=(c(28),function(e){var t=e.name,c=e.setName,n=Object(l.d)(K),a=Object(i.a)(n,2),s=a[0],r=a[1],o="Tea"===t,b=j(["f-cc","name","name"===s?"selected":"",o?"start":""]);return Object(u.jsxs)("section",{className:b,children:[Object(u.jsx)("input",{type:"text",className:"input--text",placeholder:"Tea",value:t,onClick:function(){r("name")},onChange:function(e){var t=e.currentTarget.value;o&&(t=t.replace("Tea","")),c(t)}}),Object(u.jsx)("h1",{className:"name__name",children:t})]})}),N=(c(29),function(e){var t=e.isDone,c=e.isOut,n=e.clearOverlay,a=j(["overlay",t?"done":"",c?"out":""]);return Object(u.jsx)("div",{onClick:n,className:a})}),g=(c(30),function(){var e=Object(l.d)(Z),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(l.d)($),s=Object(i.a)(a,2),r=s[0],d=s[1],O=Object(l.d)(K),m=Object(i.a)(O,2),h=m[0],f=m[1],p=j(["amount-label","tsp","tsp"===r?"active":""]),x=j(["amount-label","g","g"===r?"active":""]),v=j(["weight","weight"===h?"selected":""]);return Object(u.jsxs)("section",{className:v,children:[Object(u.jsx)("input",{type:"tel",className:"input--weight",value:c,onClick:function(e){b(e),f("weight")},onChange:function(e){return n(o(33,e))}}),Object(u.jsxs)("div",{className:"diamond",children:[Object(u.jsx)("button",{className:p,onClick:function(){return d("tsp")},children:"tsp"}),Object(u.jsx)("h2",{className:"value",children:c}),Object(u.jsx)("button",{className:x,onClick:function(){return d("g")},children:"g"})]})]})}),w=(c(31),Object(l.c)({key:"waterUnit",get:function(e){return"g"===(0,e.get)(te)}})),k=function(){var e=Object(l.d)(ee),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(l.d)(K),s=Object(i.a)(a,2),r=s[0],d=s[1],O=Object(l.d)(te),m=Object(i.a)(O,2),h=(m[0],m[1]),f=Object(l.e)(w),p=j(["amount-label","oz",f?"":"active"]),x=j(["amount-label","g",f?"active":""]),v=j(["water","water"===r?"selected":""]);return Object(u.jsxs)("section",{className:v,children:[Object(u.jsx)("input",{type:"tel",className:"input--water glass",value:c,onClick:function(e){b(e),d("water")},onChange:function(e){return n(o(999,e))}}),Object(u.jsx)("div",{className:"value",children:Object(u.jsx)("div",{className:"glass",children:Object(u.jsx)("h2",{className:"amount",children:c})})}),Object(u.jsxs)("div",{className:"label",children:[Object(u.jsx)("button",{className:p,onClick:function(){return h("oz")},children:"oz"}),Object(u.jsx)("button",{className:x,onClick:function(){return h("g")},children:"ml"})]})]})},y=c(15),C=c.n(y),S=function(e){e.id;var t=e.label,c="".concat(t,".png");return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(C.a,{setup:function(t,n){t;var a=t.createCanvas(360,315).parent(n);t.frameRate(120),t.strokeWeight(5),t.stroke("#26906D"),t.clear();var s=t.createButton("clear");s.parent(n),s.position(350,445),s.mousePressed((function(){return t.clear()}));var r=t.createButton("back");r.parent(n),r.position(350,535),r.mousePressed((function(){return e.back()}));var i=t.createButton("save");i.parent(n),i.position(50,445),i.mousePressed((function(){var n=t.save(a,c);console.log(n),e.back()})),e.start()},touchMoved:function(e){e.line(e.mouseX,e.mouseY,e.pmouseX,e.pmouseY)},mouseDragged:function(e){e.line(e.mouseX,e.mouseY,e.pmouseX,e.pmouseY)}}),Object(u.jsxs)("p",{className:"subject",children:["Draw ",t]})]})},U=c(4),T=(c(32),function(e,t){return e?Object(u.jsxs)(u.Fragment,{children:[e,Object(u.jsx)("span",{className:"unit",children:t})]}):Object(u.jsx)("span",{children:"-"})}),F=function(e){var t=e.brew,c=t.brewNumber,n=t.time,a=t.temperature,s=t.water,r=t.weight,i=t.temperatureUnit,l=t.waterUnit,o=t.weightUnit;return Object(u.jsxs)("div",{className:"brew-session",children:[Object(u.jsx)("span",{className:"session-brew-number",children:c}),Object(u.jsx)("span",{className:"session-time",children:T(n,"s")}),Object(u.jsx)("span",{className:"session-weight",children:T(r,o)}),Object(u.jsx)("span",{className:"session-temperature",children:T(a,"\xb0".concat(i))}),Object(u.jsx)("span",{className:"session-water",children:T(s,l)})]})},B=(c(33),{id:1,name:"Hairy Crab",color:"oolong",brews:[{brewNumber:1,time:15,temperature:195,temperatureUnit:"\xb0F",water:120,waterUnit:"g",mass:9,massUnit:"g"},{brewNumber:2,time:30,temperature:195,temperatureUnit:"F",water:110,waterUnit:"g",mass:9,massUnit:"g"}]}),I=function(e){var t=e.session,c=t.id,n=t.name,a=t.color,s=t.brews,r=c.toString().padStart(3,"0"),i=s.map((function(e){return Object(u.jsx)(F,{brew:e},"".concat(r,"-").concat(e.brewNumber))}));return Object(u.jsxs)("article",{className:"tea-session",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("span",{className:"name",children:"Tea"===n?Object(u.jsx)("span",{className:"mystery",children:"???"}):n}),a?"-":null," ",a]}),Object(u.jsxs)("span",{className:"id",children:[Object(u.jsx)("span",{className:"light",children:"("}),r,Object(u.jsx)("span",{className:"light",children:")"})]})]}),Object(u.jsxs)("div",{className:"labels",children:[Object(u.jsx)("span",{className:"labels-brew-number",children:"brew"}),Object(u.jsx)("span",{children:"time"}),Object(u.jsx)("span",{children:"weight"}),Object(u.jsx)("span",{children:"temperature"}),Object(u.jsx)("span",{children:"water"})]}),i]})},D=(c(7),"sessions"),J=[{id:1,name:"",color:"",brews:[]}];function P(){var e=JSON.stringify(J);return localStorage.setItem(D,e),e}function M(){var e=localStorage.getItem(D)||P();return JSON.parse(e)}function z(e){var t=JSON.stringify(e);return localStorage.setItem(D,t),e}function E(e){var t=M(),c=function(e){var t,c=M(),n=e.id-1;return(null===(t=c[n])||void 0===t?void 0:t.brews)||[]}(e),n=Object(U.a)(Object(U.a)({},e),{},{brews:c});t[e.id-1]=n;var a=JSON.stringify(t);return localStorage.setItem(D,a),n}Object(U.a)(Object(U.a)({},B),{},{id:2,name:"Mao Feng",color:"black"});var X=function(e){var t=e.onBack,c=M().sort((function(e,t){return t.id-e.id})).map((function(e){return Object(u.jsx)(I,{session:e},e.id)}));return Object(u.jsxs)("article",{className:"history",children:[Object(u.jsxs)("section",{className:"controls",children:[Object(u.jsx)("button",{className:"back",onClick:t,children:Object(u.jsx)("span",{children:" now "})}),Object(u.jsx)("button",{onClick:function(){window.confirm("really?")&&(localStorage.removeItem(D),t())},children:Object(u.jsx)("span",{children:" clear "})})]}),Object(u.jsx)("div",{className:"gap"}),Object(u.jsx)("section",{className:"sessions",children:c})]})},Y=["apple","frog","tree","cylinder","cactus","rock","pilot","pencil","river","breakfast","camera","candle","machine","dream"],L=["calm","happy","long","beautiful","lazy","polite","repressed","unkempt","clean","evil","frail","modern","wild"],R=["a","e","i","o","u"],W=(c(34),function(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||document.referrer.includes("android-app://")}),_=function(){var e=localStorage.getItem(D)||P();return JSON.parse(e).pop()}(),A=_.brews[_.brews.length-1]||{},G=function(e){return e+15},H=Object(l.b)({key:"idState",default:_.id}),q=Object(l.b)({key:"colorState",default:_.color||""}),K=Object(l.b)({key:"selectedState",default:""}),Q=Object(l.b)({key:"temperatureState",default:A.temperature||0}),V=Object(l.b)({key:"temperatureUnitState",default:A.temperatureUnit||"F"}),Z=Object(l.b)({key:"weightState",default:A.weight||0}),$=Object(l.b)({key:"weightUnitState",default:A.weightUnit||"g"}),ee=Object(l.b)({key:"waterState",default:A.water||0}),te=Object(l.b)({key:"waterUnitState",default:A.waterUnit||"g"}),ce=Object(l.b)({key:"timeState",default:A.time||G(0)}),ne=Object(l.b)({key:"lastTimeState",default:A.time||G(0)}),ae=Object(l.b)({key:"nameState",default:_.name||"Tea"}),se=Object(l.b)({key:"brewNumberState",default:A.brewNumber||0}),re=Object(l.b)({key:"pageState",default:"main"}),ie=Object(l.b)({key:"isTickingState",default:!1});var le=function(){var e=Object(l.d)(H),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(l.d)(ae),r=Object(i.a)(s,2),o=r[0],b=r[1],m=Object(l.d)(q),p=Object(i.a)(m,2),w=p[0],y=p[1],C=Object(l.d)(se),U=Object(i.a)(C,2),T=U[0],F=U[1],B=Object(l.d)(Q),I=Object(i.a)(B,2),D=I[0],J=I[1],P=Object(l.d)(V),_=Object(i.a)(P,1)[0],A=Object(l.d)(ee),le=Object(i.a)(A,2),oe=le[0],je=le[1],be=Object(l.d)(te),ue=Object(i.a)(be,1)[0],de=Object(l.d)(Z),Oe=Object(i.a)(de,2),me=Oe[0],he=Oe[1],fe=Object(l.d)($),pe=Object(i.a)(fe,1)[0],xe=Object(l.d)(ce),ve=Object(i.a)(xe,2),Ne=ve[0],ge=ve[1],we=Object(l.d)(ne),ke=Object(i.a)(we,2),ye=ke[0],Ce=ke[1],Se=Object(l.d)(re),Ue=Object(i.a)(Se,2),Te=Ue[0],Fe=Ue[1],Be=Object(l.d)(K),Ie=Object(i.a)(Be,2),De=Ie[0],Je=Ie[1],Pe=Object(l.d)(ie),Me=Object(i.a)(Pe,2),ze=Me[0],Ee=Me[1],Xe=Object(n.useState)(!0),Ye=Object(i.a)(Xe,2),Le=Ye[0],Re=(Ye[1],Object(n.useState)(!1)),We=Object(i.a)(Re,2),_e=We[0],Ae=We[1],Ge=Object(n.useState)(!1),He=Object(i.a)(Ge,2),qe=He[0],Ke=He[1],Qe={brewNumber:T,time:ye,temperature:D,weight:me,water:oe,temperatureUnit:_,waterUnit:ue,weightUnit:pe},Ve={id:c,name:o,color:w},Ze=function(e){return Ee(!ze),Ae(!1),Ke(!1),Le&&Ce(G(Ne)),F(e)};Object(n.useEffect)((function(){!function(){if(!ze)return function(){};var e=setTimeout((function(){ge(Ne-1),Ne<=0&&(Ee(!1),Ae(!0),ge(0))}),1e3)}()}),[ze,Ne]),Object(n.useEffect)((function(){_e&&qe&&setTimeout((function(){Ae(!1),Je("overlay")}),200)}),[_e,qe]);var $e=function(){0!==T&&(E(Ve),function(e,t){var c=M(),n=e.id-1,a=c[n],s=t.brewNumber-1;a.brews[s]=t,c[n]=a,z(c)}(Ve,Qe))};Object(n.useEffect)((function(){$e()}),[T]);var et=j(["main",W()?"pwa":"",De?"selecting":""]),tt=function(){Ke(!0),ge(ye)};if("history"===Te)return Object(u.jsxs)("main",{children:[Object(u.jsx)(X,{onBack:function(){Fe("main")}}),Object(u.jsx)(N,{isDone:_e,isOut:qe,clearOverlay:tt})]});if("draw"===Te){var ct=function(e,t){var c=Y[t%Y.length],n=L[(e+t)%L.length],a=R.includes(n[0])?"an":"a";return"".concat(a," ").concat(n," ").concat(c)}(c,T);return Object(u.jsx)("main",{className:"draw",children:Object(u.jsxs)("article",{children:[Object(u.jsx)(S,{start:function(){},back:function(){return Fe("main")},isDone:_e,label:ct,id:"".concat(c,"-").concat(T)}),Object(u.jsx)(x,{}),Object(u.jsx)(N,{isDone:_e,isOut:qe,clearOverlay:tt})]})})}return Object(u.jsxs)("main",{children:[Object(u.jsxs)("article",{className:et,children:[Object(u.jsx)("p",{className:"pwa",children:W()?"pwa":"web"}),Object(u.jsx)(O,{onOld:function(){1===c&&0===T||Fe("history")},onNew:function(){b("Tea"),y(""),Je(""),Ze(0),je(0),J(0),he(0),ge(Le?G(0):0),Ae(!1),Ee(!1),Ke(!1),a(c+1)}}),Object(u.jsx)(v,{name:o,setName:b}),Object(u.jsx)(f,{}),Object(u.jsx)(h,{}),Object(u.jsx)(g,{}),Object(u.jsx)(k,{}),Object(u.jsx)(x,{}),Object(u.jsx)(d,{onClick:function(){ze||(Je("brew"),Ze(T+1));Fe("draw")}}),Object(u.jsx)("div",{className:"sip",children:"sip"})]}),Object(u.jsx)(N,{isDone:_e,isOut:qe,clearOverlay:tt})]})},oe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(l.a,{children:Object(u.jsx)(le,{})})}),document.getElementById("root")),oe()}]),[[35,1,2]]]);
//# sourceMappingURL=main.071acded.chunk.js.map