(this.webpackJsonpnewloan=this.webpackJsonpnewloan||[]).push([[0],{158:function(n,e,t){"use strict";t.r(e);var i,r=t(1),a=t.n(r),o=t(48),s=t.n(o),c=(t(57),t(3)),l=t(8),d=(t(58),t(4)),h=t.p+"static/media/tax.db94116a.svg",b=t(11),u=t.n(b),j=t.p+"static/media/github-link.15fd0c6d.svg",x=t(0);function p(n){return Object(r.useEffect)((function(){var e=document.getElementById("month-select"),t=document.getElementById("months-".concat(n.months));console.log(null===t||void 0===t?void 0:t.offsetLeft);var i=document.getElementById("indicator");if(parseFloat(null===i||void 0===i?void 0:i.style.left)>(null===t||void 0===t?void 0:t.offsetLeft))return i.style.left="".concat(null===t||void 0===t?void 0:t.offsetLeft,"px"),void setTimeout((function(){i.style.right="".concat(e.clientWidth-(null===t||void 0===t?void 0:t.offsetLeft)-(null===t||void 0===t?void 0:t.offsetWidth),"px")}),200);i.style.right="".concat(e.clientWidth-(null===t||void 0===t?void 0:t.offsetLeft)-(null===t||void 0===t?void 0:t.offsetWidth),"px"),setTimeout((function(){i.style.left="".concat(null===t||void 0===t?void 0:t.offsetLeft,"px")}),100)}),[n.months]),Object(x.jsxs)(g,{id:"month-select",children:[Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{id:"months-12",children:Object(x.jsx)("button",{onClick:function(e){return n.setMonths(12)},children:"12"})}),Object(x.jsx)("li",{id:"months-24",children:Object(x.jsx)("button",{onClick:function(e){return n.setMonths(24)},children:"24"})}),Object(x.jsx)("li",{id:"months-36",children:Object(x.jsx)("button",{onClick:function(e){return n.setMonths(36)},children:"36"})}),Object(x.jsx)("li",{id:"months-48",children:Object(x.jsx)("button",{onClick:function(e){return n.setMonths(48)},children:"48"})}),Object(x.jsx)("li",{id:"months-60",children:Object(x.jsx)("button",{onClick:function(e){return n.setMonths(60)},children:"60"})}),Object(x.jsx)("li",{id:"months-72",children:Object(x.jsx)("button",{onClick:function(e){return n.setMonths(72)},children:"72"})}),Object(x.jsx)("li",{id:"months-84",children:Object(x.jsx)("button",{onClick:function(e){return n.setMonths(84)},children:"84"})})]}),Object(x.jsxs)("div",{id:"month-indicator-container",children:[Object(x.jsx)("div",{id:"indicator",className:"indicator",children:n.months}),Object(x.jsx)("div",{className:"numbers"})]})]})}var m,g=d.a.div(i||(i=Object(c.a)(["\n    position: relative;\n    background: linear-gradient(to right, #4e2ffc, #862FFC);\n    height: 4rem;\n    border-radius: 2rem;\n    width: 100%;\n    box-shadow: 0 4px 16px rgba(0,0,0,.3);\n    overflow: hidden;\n    margin-bottom: 1rem;\n    ul{\n        display: flex;\n        flex-direction: row;\n        margin: 0;\n        position: relative;\n        list-style: none;\n        height: 100%;\n        align-items: center;\n        justify-content: space-around;\n        padding: 0 12px;\n        li{\n            display: block;\n            font-weight: 700;\n            font-size: 1rem;\n            height: 100%;\n            flex-basis: 1;\n            flex-grow: 1;\n            button{\n                height: 100%;\n                width: 100%;\n                display: flex;\n                border: none;\n                background: none;\n                align-items: center;\n                justify-content: center;\n                color: white;\n                font-weight: 700;\n                font-size: 1rem;\n                cursor: pointer;\n            }\n        }\n\n        \n    }\n    #month-indicator-container{\n            position: absolute;\n            z-index: 1;\n            pointer-events: none;\n            top:0;\n            left:0;\n            bottom:0;\n            right:0;\n            padding: 4px;\n            .indicator{\n                background: white;\n                color: #862FFC;\n                position: absolute;\n                box-shadow: 2px 2px 4px rgba(0,0,0,.3);\n                border-radius: 2rem;\n                top:8px;\n                bottom: 8px;\n                display: flex;\n                font-weight: 700;\n                font-size: 1rem;\n                align-items: center;\n                justify-content: center;\n                transition: left .4s ease-in-out, right .4s  ease-in-out;\n            }\n        }\n"])));function f(n){return Object(x.jsxs)(O,{children:[Object(x.jsx)("label",{htmlFor:"tax-select",children:"APR"}),Object(x.jsxs)("div",{className:"slider-wrap",children:[Object(x.jsx)("input",{type:"range",name:"tax-select",id:"tax-select",step:.1,min:.99,max:14.99,value:n.tax,onChange:function(e){return n.setTax(e.target.value)}}),Object(x.jsxs)("div",{className:"tax-output",style:{background:"linear-gradient(to right, hsl(".concat(140-10*n.tax,", 72%, 58%), hsl(").concat(110-10*n.tax,", 72%, 58%))")},children:[n.tax,"%"]})]})]})}var O=d.a.div(m||(m=Object(c.a)(['\n  width: 100%;\n  .slider-wrap{\n      display: flex;\n      flex-direction: row;\n  }\n  .tax-output{\n        color: white;\n        text-shadow: 2px 2px 2px rgba(0,0,0,.4);\n        padding: 1rem;\n        box-shadow: 3px 3px 6px rgba(0,0,0,.3);\n        border-radius: 2rem;\n        font-size: 1rem;\n        margin-left: 1rem;\n        font-weight: 800;\n        min-width: 4rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n  input[type="range"] {\n    outline: none;\n    cursor: pointer;\n    :active,\n    :focus {\n      outline: none;\n    }\n    background: transparent;\n    width: 100%;\n    -webkit-appearance: none;\n\n  \n\n    /* TRACK */\n\n    /* webkit */\n    ::-webkit-slider-runnable-track {\n      width: 100%;\n      background-color: rgb(38, 48, 60);\n\n      height: 12px;\n      border-radius: 8px;\n    }\n    ::-webkit-slider-thumb{\n        width: 36px;\n        height: 36px;\n        background: white;\n        border:none;\n    }\n\n    /* mozilla */\n    ::-moz-range-track {\n      width: 100%;\n      background-color: rgb(38, 48, 60);\n\n      height: 12px;\n      border-radius: 8px;\n    }\n    ::-moz-range-progress {\n      background: #862ffc;\n      height: 100%;\n      border-radius: 8px;\n      height: 12px;\n    }\n    ::-moz-range-thumb{\n        width: 36px;\n        height: 36px;\n        box-shadow: 3px 3px 8px rgba(0,0,0,.4);\n        border-radius: 100%;\n        background: linear-gradient(to top right, #bbb, #fff);\n        border:none;\n        position: relative;\n        \n    }\n\n\n\n    /* ms */\n    ::-ms-fill-lower {\n      background: #862ffc;\n      height: 100%;\n      border-radius: 8px;\n      height: 12px;\n\n    }\n\n   \n  }\n']))),v=t(19),w=t.p+"static/media/question.fdc220cc.svg",y=t(52);function k(n){return Object(x.jsxs)("div",{style:{height:"20px",display:"flex",justifyContent:"center",alignItems:"center"},"data-tip":n.tip,children:[Object(x.jsx)(y.a,{}),Object(x.jsx)("img",{src:w,alt:"tooltip-icon",width:20,style:{}})]})}var C,F,z,N,A,M,T,L,S,B=t.p+"static/media/close.2f92e606.svg";var R=d.a.div(C||(C=Object(c.a)(["\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  .tag {\n    margin-bottom: 8rem;\n    font-size: 0.6rem;\n    color: #b3bcd0;\n  }\n"]))),E=d.a.div(F||(F=Object(c.a)(["\n  margin: -8rem auto 0 auto;\n  display: grid;\n  grid-gap: 2rem;\n  max-width: 1280px;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n\n  /* justify-items: center; */\n"]))),I=d.a.div(z||(z=Object(c.a)(["\n  background: white;\n  border-radius: 2rem;\n  padding: 2rem;\n  /* min-width: 220px; */\n  position: relative;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  h2 {\n    margin: 0 0 2rem 0;\n    text-align: left;\n    font-weight: bold;\n  }\n  .subheader {\n    margin-top: 1.6rem;\n    font-weight: 500;\n    color: #454850;\n  }\n"]))),W=d.a.div(N||(N=Object(c.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, minmax(100px, 150px));\n  margin-top: 4rem;\n  grid-gap: 0.6rem;\n  margin-bottom: 2rem;\n  justify-content: center;\n"]))),P=d.a.div(A||(A=Object(c.a)(["\n  min-height: 10px;\n  background: #384052;\n  border-radius: 8px;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1rem 0.5rem;\n  .dollar{\n    color: #acb6ce;\n    font-size: 1rem;\n    /* display: inline-block; */\n  }\n  h2.stat-large {\n    margin: 0;\n    font-size: 1.6rem;\n    font-weight: 700;\n  }\n  h4 {\n    font-size: 0.7rem;\n    color: #8997bb;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin: 0.6rem 0 0 0;\n  }\n  @media (max-width: 520px) {\n    h2.stat-large {\n      font-size: 1rem;\n    }\n    h4 {\n      font-size: 0.5rem;\n    }\n  }\n  @media (min-width: 520px) {\n    padding: 1rem;\n  }\n"]))),J=function(){var n=563,e=Object(r.useState)(0),t=Object(l.a)(e,2),i=t[0],a=t[1],o=Object(r.useState)(1.99),s=Object(l.a)(o,2),c=s[0],d=s[1],b=Object(r.useState)(60),j=Object(l.a)(b,2),m=j[0],g=j[1],O=Object(r.useState)(0),w=Object(l.a)(O,2),y=w[0],C=w[1],F=Object(r.useState)(0),z=Object(l.a)(F,2),N=z[0],A=z[1],M=Object(r.useState)(0),T=Object(l.a)(M,2),L=T[0],S=T[1];function J(){return Math.round(i*(1+c/100*(m/12)))}Object(r.useEffect)((function(){S(J()),A(Math.round(J()-i)),C(Math.round(J()/m))}),[i,m,c]);var U={labels:["You","Average"],datasets:[{backgroundColor:["#4e2ffc","#862FFC"],data:[y>0?y:1,n]}]},K={labels:Array.from({length:m},(function(n,e){return"".concat(e)})),datasets:[{data:Array.from({length:m},(function(n,e){return"".concat(L-e*y)}))}],borderWidth:3},V={labels:["Base Price","Taxes"],datasets:[{backgroundColor:["#2ffc4a","#862FFC"],data:[i>0?i:1,N>0?N:1]}],borderWidth:3};return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)(D,{}),Object(x.jsxs)(R,{id:"header-content",style:{},children:[Object(x.jsxs)("div",{id:"header-intro",style:{marginTop:"4rem"},children:[Object(x.jsx)("img",{src:h,alt:"",style:{width:"80px"}}),Object(x.jsx)("h2",{children:"Car Loan Calculator"})]}),Object(x.jsx)("div",{id:"input-section",children:Object(x.jsxs)(Y,{children:[Object(x.jsxs)("div",{className:"label-wrapper",children:[Object(x.jsx)("label",{htmlFor:"base-price",children:"Loan Amount ($)"}),Object(x.jsx)(k,{tip:"This should be the amount of the loan, not the total price of the vehicle purchase."})]}),Object(x.jsxs)("div",{className:"input-wrap",style:{},children:[Object(x.jsx)($,{type:"text",name:"base-price",id:"base-price",onChange:function(n){return function(n){if(0!==(n=n.replaceAll(",","").replace(/^0+/g,"")).length){var e=parseFloat(n);e>999999999999||isNaN(e)||a(e)}else a(0)}(n.target.value)},value:u()(i.toString())}),i>0&&Object(x.jsx)("div",{className:"abs-button-wrap",children:Object(x.jsx)("button",{onClick:function(n){return a(0)},children:Object(x.jsx)("img",{src:B,alt:"",width:16})})})]}),Object(x.jsxs)("div",{className:"label-wrapper",children:[Object(x.jsx)("label",{htmlFor:"base-price",children:"Months"}),Object(x.jsx)(k,{tip:"Duration of the loan in months. The average new loan duration in the US is 67 months."})]}),Object(x.jsx)(p,{setMonths:g,months:m}),Object(x.jsx)(f,{tax:c,setTax:function(n){d(parseFloat(n))}})]})}),Object(x.jsxs)(W,{children:[Object(x.jsxs)(P,{children:[Object(x.jsxs)("h2",{className:"stat-large",children:[Object(x.jsx)("span",{className:"dollar",children:"$"}),u()(L)]}),Object(x.jsx)("h4",{children:"Total Cost"})]}),Object(x.jsxs)(P,{children:[Object(x.jsxs)("h2",{className:"stat-large",children:[Object(x.jsx)("span",{className:"dollar",children:"$"}),u()(y)]}),Object(x.jsx)("h4",{children:"Monthly"})]}),Object(x.jsxs)(P,{children:[Object(x.jsxs)("h2",{className:"stat-large",children:[Object(x.jsx)("span",{className:"dollar",children:"$"}),u()(N)]}),Object(x.jsx)("h4",{children:"Taxes and Fees"})]})]}),Object(x.jsx)("div",{className:"tag",style:{},children:"*All values are estimates and should only be used as but part of your car shopping research."})]})]}),Object(x.jsx)("section",{id:"outputs-wrapper",style:{padding:"4rem"},children:Object(x.jsxs)(E,{id:"outputs-grid",style:{transition:"all .2s linear",transform:"".concat(i>0?"translateY(0px)":"translateY(10px)"),opacity:i>0?1:0},children:[Object(x.jsxs)(I,{children:[Object(x.jsx)("h2",{children:"Taxes and Fees Payed"}),Object(x.jsx)(v.Doughnut,{data:V,options:{maintainAspectRatio:!0,legend:{position:"right",align:"start"}}}),Object(x.jsxs)("div",{className:"subheader",children:["Taxes and Fees contributed to"," ",N>0?(N/L*100).toFixed(0):0,"% of the overall cost."]})]}),Object(x.jsxs)(I,{children:[Object(x.jsxs)("h2",{children:["Remaining Balance Over ",m," Months"]}),Object(x.jsx)(v.Line,{data:K,options:{maintainAspectRatio:!0,legend:{display:!1}}})]}),Object(x.jsxs)(I,{children:[Object(x.jsx)("h2",{children:"Versus USA Average"}),Object(x.jsx)(v.Bar,{data:U,options:{maintainAspectRatio:!0,legend:{display:!1},scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{ticks:{beginAtZero:!0},gridLines:{}}]}}}),Object(x.jsxs)("div",{className:"subheader",children:["Your average payment is"," ",Math.abs((n-y)/n*100).toFixed(0),"% ",y<n?"lower":"higher"," than the national average"]})]})]})}),Object(x.jsx)(q,{children:Object(x.jsxs)("div",{children:["Built in ",Object(x.jsx)("a",{href:"https://github.com/facebook/react",children:"ReactJS"})," by ",Object(x.jsx)("a",{href:"https://github.com/jakermate",children:"Jake Miller"})]})})]})},Y=d.a.div(M||(M=Object(c.a)(["\n  flex-direction: column;\n  display: flex;\n  justify-content: start;\n  text-align: left;\n  min-width: 320px;\n  max-width: 420px;\n  @media (min-width: 640px) {\n    min-width: 400px;\n  }\n  label {\n    font-weight: 500;\n    font-size: 1rem;\n    color: #a1b8f3;\n  }\n  .label-wrapper {\n    margin: 0 0 1rem 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    img {\n      opacity: 0.5;\n      background: none;\n      border: none;\n      outline: none;\n      cursor: pointer;\n    }\n  }\n  .input-wrap {\n    position: relative;\n    margin-bottom: 1rem;\n  }\n  .abs-button-wrap {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n\n    justify-content: center;\n    align-items: center;\n    button {\n      padding: .4rem;\n      margin-right: 1rem;\n      background: none;\n      border: none;\n      outline: none;\n      cursor: pointer;\n    }\n  }\n"]))),$=d.a.input(T||(T=Object(c.a)(['\n  width: 100%;\n  padding: 1rem 1.4rem;\n  box-sizing: border-box;\n  background-color: rgb(49, 64, 82);\n  color: white;\n  border-radius: 2rem;\n  font-size: 1.3rem;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  /* color: #b7adec; */\n  ::before {\n    content: "hi";\n  }\n  ::active,\n  :focus {\n    outline: none;\n  }\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  &[type="number"] {\n    -moz-appearance: textfield;\n  }\n'])));function D(){return Object(x.jsx)(U,{children:Object(x.jsx)("a",{href:"https://github.com/jakermate/loan",target:"_blank",rel:"noreferrer",children:Object(x.jsx)("img",{src:j,alt:"github-icon",width:80})})})}var U=d.a.div(L||(L=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  transition: all 0.12s cubic-bezier(0.68, -0.6, 0.32, 1.6);\n  right: 0;\n  background-color: none;\n  :hover {\n    transform: translate(-6px, 6px) scale(1.2);\n  }\n"]))),q=d.a.footer(S||(S=Object(c.a)(["\n  padding: 4rem 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  a{\n    text-decoration: none;\n    font-weight: bold;\n  }\n"]))),K=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,160)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),i(n),r(n),a(n),o(n)}))};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(J,{})}),document.getElementById("root")),K()},57:function(n,e,t){},58:function(n,e,t){}},[[158,1,2]]]);
//# sourceMappingURL=main.ba4f7eba.chunk.js.map