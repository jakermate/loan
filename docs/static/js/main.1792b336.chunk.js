(this.webpackJsonpnewloan=this.webpackJsonpnewloan||[]).push([[0],{163:function(n,e,t){"use strict";t.r(e);var i,r=t(1),a=t.n(r),o=t(47),c=t.n(o),s=(t(56),t(2)),l=t(7),d=(t(57),t(3)),h=t.p+"static/media/tax.db94116a.svg",b=t(19),j=t.n(b),x=t.p+"static/media/github-link.15fd0c6d.svg",u=t(48),m=t.n(u),p=t(0);function g(n){Object(r.useEffect)((function(){return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}));var e=m()((function(){console.log("call");var e=document.getElementById("month-select"),t=document.getElementById("months-".concat(n.months));console.log(null===t||void 0===t?void 0:t.offsetLeft);var i=document.getElementById("indicator");if(parseFloat(null===i||void 0===i?void 0:i.style.left)>(null===t||void 0===t?void 0:t.offsetLeft))return i.style.left="".concat(null===t||void 0===t?void 0:t.offsetLeft,"px"),void setTimeout((function(){i.style.right="".concat(e.clientWidth-(null===t||void 0===t?void 0:t.offsetLeft)-(null===t||void 0===t?void 0:t.offsetWidth),"px")}),200);i.style.right="".concat(e.clientWidth-(null===t||void 0===t?void 0:t.offsetLeft)-(null===t||void 0===t?void 0:t.offsetWidth),"px"),setTimeout((function(){i.style.left="".concat(null===t||void 0===t?void 0:t.offsetLeft,"px")}),100)}),400);return Object(r.useEffect)((function(){var e=document.getElementById("month-select"),t=document.getElementById("months-".concat(n.months));console.log(null===t||void 0===t?void 0:t.offsetLeft);var i=document.getElementById("indicator");if(parseFloat(null===i||void 0===i?void 0:i.style.left)>(null===t||void 0===t?void 0:t.offsetLeft))return i.style.left="".concat(null===t||void 0===t?void 0:t.offsetLeft,"px"),void setTimeout((function(){i.style.right="".concat(e.clientWidth-(null===t||void 0===t?void 0:t.offsetLeft)-(null===t||void 0===t?void 0:t.offsetWidth),"px")}),200);i.style.right="".concat(e.clientWidth-(null===t||void 0===t?void 0:t.offsetLeft)-(null===t||void 0===t?void 0:t.offsetWidth),"px"),setTimeout((function(){i.style.left="".concat(null===t||void 0===t?void 0:t.offsetLeft,"px")}),100)}),[n.months]),Object(p.jsxs)(O,{id:"month-select",children:[Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{id:"months-12",children:Object(p.jsx)("button",{onClick:function(e){return n.setMonths(12)},children:"12"})}),Object(p.jsx)("li",{id:"months-24",children:Object(p.jsx)("button",{onClick:function(e){return n.setMonths(24)},children:"24"})}),Object(p.jsx)("li",{id:"months-36",children:Object(p.jsx)("button",{onClick:function(e){return n.setMonths(36)},children:"36"})}),Object(p.jsx)("li",{id:"months-48",children:Object(p.jsx)("button",{onClick:function(e){return n.setMonths(48)},children:"48"})}),Object(p.jsx)("li",{id:"months-60",children:Object(p.jsx)("button",{onClick:function(e){return n.setMonths(60)},children:"60"})}),Object(p.jsx)("li",{id:"months-72",children:Object(p.jsx)("button",{onClick:function(e){return n.setMonths(72)},children:"72"})}),Object(p.jsx)("li",{id:"months-84",children:Object(p.jsx)("button",{onClick:function(e){return n.setMonths(84)},children:"84"})})]}),Object(p.jsxs)("div",{id:"month-indicator-container",children:[Object(p.jsx)("div",{id:"indicator",className:"indicator",children:n.months}),Object(p.jsx)("div",{className:"numbers"})]})]})}var f,O=d.a.div(i||(i=Object(s.a)(["\n    position: relative;\n    background: linear-gradient(to right, #4e2ffc, #862FFC);\n    height: 52px;\n    border-radius: 8px;\n    width: 100%;\n    box-shadow: 0 4px 16px rgba(0,0,0,.3);\n    overflow: hidden;\n    /* margin-bottom: 1rem; */\n    ul{\n        display: flex;\n        flex-direction: row;\n        margin: 0;\n        position: relative;\n        list-style: none;\n        height: 100%;\n        align-items: center;\n        justify-content: space-around;\n        padding: 0 12px;\n        li{\n            display: block;\n            font-weight: 700;\n            font-size: 1rem;\n            height: 100%;\n            flex-basis: 1;\n            flex-grow: 1;\n            button{\n                height: 100%;\n                width: 100%;\n                display: flex;\n                border: none;\n                background: none;\n                align-items: center;\n                justify-content: center;\n                color: white;\n                font-weight: 700;\n                font-size: 1rem;\n                cursor: pointer;\n                :hover{\n                    color: #222;\n                }\n                :active, :focus{\n                    outline: none;\n                }\n            }\n        }\n\n        \n    }\n    #month-indicator-container{\n            position: absolute;\n            z-index: 1;\n            pointer-events: none;\n            top:0;\n            left:0;\n            bottom:0;\n            right:0;\n            padding: 4px;\n            .indicator{\n                background: white;\n                color: #862FFC;\n                position: absolute;\n                box-shadow: 2px 2px 4px rgba(0,0,0,.3);\n                border-radius: 8px;\n                top:8px;\n                bottom: 8px;\n                display: flex;\n                font-weight: 700;\n                font-size: 1rem;\n                align-items: center;\n                justify-content: center;\n                transition: left .4s ease-in-out, right .4s  ease-in-out;\n            }\n        }\n"])));function v(n){return Object(p.jsxs)(W,{children:[Object(p.jsx)("label",{htmlFor:"tax-select",children:"APR"}),Object(p.jsxs)("div",{className:"slider-wrap",children:[Object(p.jsx)("input",{type:"range",name:"tax-select",id:"tax-select",step:.1,min:.99,max:14.99,value:n.tax,onChange:function(e){return n.setTax(e.target.value)}}),Object(p.jsxs)("div",{className:"tax-output",style:{background:"linear-gradient(to right, hsl(".concat(140-10*n.tax,", 72%, 58%), hsl(").concat(110-10*n.tax,", 72%, 58%))")},children:[n.tax,"%"]})]})]})}var w,y,k,N,z,F,A,C,L,T,S,E,M,B,I,P,W=d.a.div(f||(f=Object(s.a)(['\n  width: 100%;\n  \n  .slider-wrap{\n      display: flex;\n      flex-direction: row;\n  height: 52px;\n\n  }\n  .tax-output{\n        color: white;\n        text-shadow: 2px 2px 2px rgba(0,0,0,.4);\n        padding: 1rem;\n        box-shadow: 3px 3px 6px rgba(0,0,0,.3);\n        border-radius: 8px;\n        font-size: 1rem;\n        margin-left: 1rem;\n        font-weight: 800;\n        min-width: 4rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n  input[type="range"] {\n    outline: none;\n    cursor: pointer;\n    :active,\n    :focus {\n      outline: none;\n    }\n    background: transparent;\n    width: 100%;\n    -webkit-appearance: none;\n\n  \n\n    /* TRACK */\n\n    /* webkit */\n    ::-webkit-slider-runnable-track {\n      width: 100%;\n      background-color: rgb(38, 48, 60);\n\n      height: 12px;\n      border-radius: 8px;\n    }\n    ::-webkit-slider-thumb{\n        -webkit-appearance: none;\n        width: 36px;\n        height: 36px;\n        transform: translateY(-10px);\n        box-shadow: 3px 3px 8px rgba(0,0,0,.4);\n        border-radius: 100%;\n        background: linear-gradient(to top right, #bbb, #fff);\n        border:none;\n        position: relative;\n    }\n\n    /* mozilla */\n    ::-moz-range-track {\n      width: 100%;\n      background-color: rgb(38, 48, 60);\n\n      height: 12px;\n      border-radius: 8px;\n    }\n    ::-moz-range-progress {\n      background: #862ffc;\n      height: 100%;\n      border-radius: 8px;\n      height: 12px;\n    }\n    ::-moz-range-thumb{\n        width: 36px;\n        height: 36px;\n        box-shadow: 3px 3px 8px rgba(0,0,0,.4);\n        border-radius: 100%;\n        background: linear-gradient(to top right, #bbb, #fff);\n        border:none;\n        position: relative;\n        \n    }\n\n\n\n    /* ms */\n    ::-ms-fill-lower {\n      background: #862ffc;\n      height: 100%;\n      border-radius: 8px;\n      height: 12px;\n\n    }\n\n   \n  }\n']))),R=t(20),Y=t.p+"static/media/close.2f92e606.svg";var D=d.a.div(w||(w=Object(s.a)(["\n  width: 100%;\n  padding: 1rem;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n \n  .title{\n    margin-bottom: 0rem !important;\n  }\n  .subtitle{\n    font-size: 1rem;\n    margin: 1rem 0 2rem 0 ;\n  }\n  .tag {\n    margin-bottom: 8rem;\n    font-size: 0.6rem;\n    color: #b3bcd0;\n  }\n  hr{\n    opacity: .3\n  }\n  #input-section{\n    display: flex;\n    flex-direction: column;\n    max-width: 420px;\n    justify-content: start;\n    align-items: flex-start;\n    @media(min-width: 768px){\n      flex-direction: row;\n      max-width: 768px;\n    }\n  }\n"]))),$=d.a.section(y||(y=Object(s.a)(["\n  padding: 1rem;\n  @media(min-width: 420px){\n    padding: 2rem;\n  }\n  /* @media(min-width: 720px){\n    padding: 4rem;\n  } */\n"]))),J=d.a.div(k||(k=Object(s.a)(["\n  margin: -8rem auto 0 auto;\n  display: grid;\n  grid-gap: 2rem;\n  max-width: 1280px;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n\n  /* justify-items: center; */\n"]))),U=d.a.div(N||(N=Object(s.a)(["\n  background: white;\n  border-radius: 2rem;\n  padding: 2rem;\n  /* min-width: 220px; */\n  position: relative;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\n  h2 {\n    margin: 0 0 2rem 0;\n    text-align: left;\n    font-weight: bold;\n  }\n  .subheader {\n    margin-top: 1.6rem;\n    font-weight: 500;\n    color: #454850;\n  }\n  .box-content-wrap{\n    width: 100%;\n    height: 100%;\n  }\n"]))),q=d.a.div(z||(z=Object(s.a)(["\n box-shadow: 0 4px 16px -4px rgba(0,0,0,.3);\n  background: rgba(100,100,100,.1);\n  padding: 1rem;\n  width: 100%;\n  border-radius: 16px;\n  box-sizing: border-box;\n  margin-top: 2rem;\n\n  margin-bottom: 2rem;\n  h2{\n  margin: 0;\n  font-size: 1.7rem;\n  font-weight: 800;\n  margin-bottom: 1rem;\n\n}\n@media(min-width: 768px){\n  margin-top: 0;\n  margin-left: 1rem;\n  max-width: 280px;\n  text-align: left;\n  h2{\n    font-size: 1.2rem;\n  }\n}\n"]))),H=d.a.div(F||(F=Object(s.a)(["\n\n  display: grid;\n  grid-template-columns: repeat(3, minmax(120px, 150px));\n  @media(min-width: 768px){\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n  }\n  grid-gap: 0.6rem;\n  justify-content: center;\n \n"]))),K=d.a.div(A||(A=Object(s.a)(["\n  min-height: 10px;\n  background: #384052;\n  border-radius: 8px;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1rem 0.5rem;\n  .dollar{\n    color: #acb6ce;\n    font-size: 1rem;\n    /* display: inline-block; */\n  }\n  @media(min-width: 768px){\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    align-items:flex-start;\n  }\n  h2.stat-large {\n    margin: 0;\n    font-size: 1.6rem;\n    font-weight: 700;\n  }\n  h4 {\n    font-size: 0.7rem;\n    color: #8997bb;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin: 0.6rem 0 0 0;\n  }\n  @media (max-width: 520px) {\n    h2.stat-large {\n      font-size: 1rem;\n    }\n    h4 {\n      font-size: 0.5rem;\n    }\n  }\n  @media (min-width: 520px) {\n    padding: 1rem;\n  }\n"]))),V=function(){var n=563,e=Object(r.useState)(0),t=Object(l.a)(e,2),i=t[0],a=t[1],o=Object(r.useState)(1.99),c=Object(l.a)(o,2),s=c[0],d=c[1],b=Object(r.useState)(60),x=Object(l.a)(b,2),u=x[0],m=x[1],f=Object(r.useState)(0),O=Object(l.a)(f,2),w=O[0],y=O[1],k=Object(r.useState)(0),N=Object(l.a)(k,2),z=N[0],F=N[1],A=Object(r.useState)(0),C=Object(l.a)(A,2),L=C[0],T=C[1];function S(){return Math.round(i*(1+s/100*(u/12)))}Object(r.useEffect)((function(){T(S()),F(Math.round(S()-i)),y(Math.round(S()/u))}),[i,u,s]);var E={labels:["You","Average"],datasets:[{backgroundColor:["#4e2ffc","#862FFC"],data:[w>0?w:1,n]}]},M={labels:Array.from({length:u},(function(n,e){return"".concat(e)})),datasets:[{data:Array.from({length:u},(function(n,e){return"".concat(L-e*w)}))}],borderWidth:3},B={labels:["Base Price","Taxes"],datasets:[{backgroundColor:["#2ffc4a","#862FFC"],data:[i>0?i:1,z>0?z:1]}],borderWidth:3};return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)(Q,{}),Object(p.jsxs)(D,{id:"header-content",style:{},children:[Object(p.jsxs)("div",{id:"header-intro",style:{marginTop:"4rem"},children:[Object(p.jsx)("img",{src:h,alt:"",style:{width:"80px"}}),Object(p.jsx)("h2",{className:"title",children:"Car Loan Calculator"}),Object(p.jsx)("p",{className:"subtitle",children:"Estimate your monthly payment and total interest payed."})]}),Object(p.jsxs)("div",{id:"input-section",style:{},children:[Object(p.jsxs)(Z,{children:[Object(p.jsxs)("div",{style:{fontSize:"1rem",marginBottom:"2rem",fontWeight:700},children:["\ud83d\udcb5 Enter a loan amount to get started.",Object(p.jsx)("hr",{})]}),Object(p.jsxs)(on,{children:[Object(p.jsx)("div",{className:"label-wrapper",children:Object(p.jsx)("label",{htmlFor:"base-price",children:"Loan Amount ($)"})}),Object(p.jsxs)(G,{className:"input-field-wrapper",onClick:function(n){var e;return null===(e=document.getElementById("base-price"))||void 0===e?void 0:e.focus()},children:[Object(p.jsx)(_,{type:"text",name:"base-price",id:"base-price",onBlur:function(n){document.querySelectorAll(".input-field-wrapper").forEach((function(n){n.classList.toggle("active",!1)}))},onFocus:function(n){document.querySelectorAll(".input-field-wrapper").forEach((function(n){n.classList.toggle("active",!0)}))},onChange:function(n){return function(n){if(0!==(n=n.replaceAll(",","").replace(/^0+/g,"")).length){var e=parseFloat(n);e>999999999999||isNaN(e)||a(e)}else a(0)}(n.target.value)},value:i}),i>0&&Object(p.jsx)("div",{className:"abs-button-wrap",children:Object(p.jsx)("button",{onClick:function(n){return a(0)},children:Object(p.jsx)("img",{src:Y,alt:"",width:16})})})]}),Object(p.jsx)(rn,{hint:"This is the price of the car you are purchasing, minus your down payment amount."})]}),Object(p.jsxs)(on,{children:[Object(p.jsx)("div",{className:"label-wrapper",children:Object(p.jsx)("label",{htmlFor:"base-price",children:"Months"})}),Object(p.jsx)(g,{setMonths:m,months:u}),Object(p.jsx)(rn,{hint:"It's best not to take a loan longer than 36 months for used cars, and 60 months for new cars.  The longer your loan duration, the more you will pay in interest beyond the price of the car."})]}),Object(p.jsxs)(on,{children:[Object(p.jsx)(v,{tax:s,setTax:function(n){d(parseFloat(n))}}),Object(p.jsx)(rn,{hint:"New car purchases typically incentivise their purchase by offering lower interest rates than you can typically get on a used car purchase.  This will be partially based upon your credit score."})]})]}),Object(p.jsxs)(q,{children:[Object(p.jsx)("h2",{children:"Purchase Summary"}),Object(p.jsxs)(H,{children:[Object(p.jsxs)(K,{children:[Object(p.jsxs)("h2",{className:"stat-large",children:[Object(p.jsx)("span",{className:"dollar",children:"$"}),j()(L)]}),Object(p.jsx)("h4",{children:"Total Cost"})]}),Object(p.jsxs)(K,{children:[Object(p.jsxs)("h2",{className:"stat-large",children:[Object(p.jsx)("span",{className:"dollar",children:"$"}),j()(w)]}),Object(p.jsx)("h4",{children:"Monthly"})]}),Object(p.jsxs)(K,{children:[Object(p.jsxs)("h2",{className:"stat-large",children:[Object(p.jsx)("span",{className:"dollar",children:"$"}),j()(z)]}),Object(p.jsx)("h4",{children:"Taxes and Fees"})]})]})]})]}),Object(p.jsx)("div",{className:"tag",style:{marginTop:"1rem"},children:"*All values are estimates and should only be used as but part of your car shopping research."})]})]}),Object(p.jsx)($,{id:"outputs-wrapper",style:{},children:Object(p.jsxs)(J,{id:"outputs-grid",style:{transition:"all .2s linear",transform:"".concat(i>0?"translateY(0px)":"translateY(10px)"),opacity:i>0?1:0},children:[Object(p.jsx)(U,{children:i>0?Object(p.jsxs)("div",{className:"box-content-wrap",children:[Object(p.jsx)("h2",{children:"Taxes and Fees Payed"}),Object(p.jsx)(R.Doughnut,{data:B,options:{maintainAspectRatio:!0,legend:{position:"right",align:"start"}}}),Object(p.jsxs)("div",{className:"subheader",children:["Taxes and Fees contributed to"," ",z>0?(z/L*100).toFixed(0):0,"% of the overall cost."]})]}):Object(p.jsx)(tn,{})}),Object(p.jsx)(U,{children:i>0?Object(p.jsxs)("div",{className:"box-content-wrap",children:[Object(p.jsxs)("h2",{children:["Remaining Balance Over ",u," Months"]}),Object(p.jsx)(R.Line,{data:M,options:{maintainAspectRatio:!0,legend:{display:!1}}})]}):Object(p.jsx)(tn,{})}),Object(p.jsx)(U,{children:i>0?Object(p.jsxs)("div",{className:"box-content-wrap",children:[Object(p.jsx)("h2",{children:"Versus USA Average"}),Object(p.jsx)(R.Bar,{data:E,options:{maintainAspectRatio:!0,legend:{display:!1},scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{ticks:{beginAtZero:!0},gridLines:{}}]}}}),Object(p.jsxs)("div",{className:"subheader",children:["Your average payment is"," ",Math.abs((n-w)/n*100).toFixed(0),"% ",w<n?"lower":"higher"," than the national average"]})]}):Object(p.jsx)(tn,{})})]})}),Object(p.jsxs)(nn,{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"How to use the loan calculator."}),Object(p.jsx)("p",{children:"While this aims to help you in your car shopping, please note that there a many hidden costs and fees that may or may not apply to your purchase."}),Object(p.jsx)("p",{children:"Some examples:"}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("strong",{children:"Delivery Fee"})," (usually around $800 USD)"]}),Object(p.jsx)("li",{children:Object(p.jsx)("strong",{children:"Title, License, or Registration Fees"})}),Object(p.jsx)("li",{children:Object(p.jsx)("strong",{children:"Local Taxes"})})]}),Object(p.jsx)("p",{children:"As a result, it's impossible for this calulator to account for everything you may be charged while purchasing a vehicle."})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Typical Interest Rates"}),Object(p.jsx)("p",{children:"If you know your credit score, you can use the table below to estimate the interest rate you'll be offered by your lender."}),Object(p.jsxs)(cn,{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Credit Score"}),Object(p.jsx)("th",{children:"APR (New Purchase)"}),Object(p.jsx)("th",{children:"APR (Used Purchase)"})]})}),Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{className:"credit-score",children:[Object(p.jsx)("div",{className:"bracket-name",children:"Super Prime"}),Object(p.jsx)("div",{className:"bracket-range",children:"720-880"})]}),Object(p.jsx)("td",{children:"3.65%"}),Object(p.jsx)("td",{children:"4.29%"})]}),Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{className:"credit-score",children:[Object(p.jsx)("div",{className:"bracket-name",children:"Prime"}),Object(p.jsx)("div",{className:"bracket-range",children:"660-719"})]}),Object(p.jsx)("td",{children:"4.68%"}),Object(p.jsx)("td",{children:"6.04%"})]}),Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{className:"credit-score",children:[Object(p.jsx)("div",{className:"bracket-name",children:"Nonprime"}),Object(p.jsx)("div",{className:"bracket-range",children:"620-659"})]}),Object(p.jsx)("td",{children:"7.65%"}),Object(p.jsx)("td",{children:"11.26%"})]}),Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{className:"credit-score",children:[Object(p.jsx)("div",{className:"bracket-name",children:"Subprime"}),Object(p.jsx)("div",{className:"bracket-range",children:"580-619"})]}),Object(p.jsx)("td",{children:"11.92%"}),Object(p.jsx)("td",{children:"17.74%"})]}),Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{className:"credit-score",children:[Object(p.jsx)("div",{className:"bracket-name",children:"Deep Subprime"}),Object(p.jsx)("div",{className:"bracket-range",children:"0-579"})]}),Object(p.jsx)("td",{children:"14.39%"}),Object(p.jsx)("td",{children:"20.45%"})]}),Object(p.jsx)("tr",{children:Object(p.jsxs)("td",{className:"footer",colSpan:3,children:[Object(p.jsx)("em",{children:"Sourced from Experian.com"}),Object(p.jsx)("div",{style:{fontSize:12,color:"#b3bcd0",marginTop:6},children:"All values provided are averages, and do not take into account promotional offers available at dealers."})]})})]})]})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"About Auto Loans"}),Object(p.jsx)("p",{children:"This is where you learn about auto loans."}),Object(p.jsx)("p",{children:"You'll learn more here."})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"New vs. Used"}),Object(p.jsx)("p",{children:"This is where you learn about auto loans."}),Object(p.jsx)("p",{children:"You'll learn more here."})]})]}),Object(p.jsxs)(en,{children:[Object(p.jsxs)("div",{children:["Built in ",Object(p.jsx)("a",{href:"https://github.com/facebook/react",children:"ReactJS"})," by ",Object(p.jsx)("a",{href:"https://github.com/jakermate",children:"Jake Miller"})]}),Object(p.jsx)("div",{className:"copy",children:"\xa9 2021"})]})]})},Z=d.a.div(C||(C=Object(s.a)(["\n  flex-direction: column;\n  display: flex;\n  justify-content: start;\n  text-align: left;\n  min-width: 320px;\n  /* max-width: 420px; */\n  width: 100%;\n  box-shadow: 0 4px 16px -4px rgba(0,0,0,.3);\n  background: rgba(100,100,100,.1);\n  padding: 1.5rem 1rem;\n  box-sizing: border-box;\n  border-radius: 16px;\n  @media (min-width: 640px) {\n    min-width: 400px;\n  padding: 1.5rem 1rem;\n\n  }\n  label {\n    font-weight: 600;\n    font-size: 1rem;\n    color: #b7c6ee;\n  }\n  .label-wrapper {\n    margin: 0 0 .7rem 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    img {\n      opacity: 0.5;\n      background: none;\n      border: none;\n      outline: none;\n      cursor: pointer;\n    }\n  }\n  .input-wrap {\n    position: relative;\n    margin-bottom: 1rem;\n  }\n  .abs-button-wrap {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    button {\n      padding: .8rem;\n      background: none;\n      border: none;\n      transition: all .1s linear;\n      :hover{\n        transform: scale(1.2);\n      }\n      outline: none;\n      cursor: pointer;\n    }\n  }\n"]))),_=d.a.input(L||(L=Object(s.a)(['\n  width: 100%;\n  height: 100%;\n  background: none;\n  color: white;\n  font-size: 1.3rem;\n  font-weight: 600;\n  flex:1;\n  outline: none;\n  border: none;\n  /* color: #b7adec; */\n  ::before {\n    content: "hi";\n  }\n  ::active,\n  :focus {\n    outline: none;\n  }\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  &[type="number"] {\n    -moz-appearance: textfield;\n  }\n']))),G=d.a.div(T||(T=Object(s.a)(["\n  padding: 1rem .4rem 1rem 1rem;\n  width: 100%;\n  cursor: text;\n  display: flex;\n  flex-direction: row;\n  align-items:center;\n  justify-content: flex-start;\n  box-sizing: border-box;\n  background-color: rgb(49, 64, 82);\n  color: white;\n  height: 52px;\n  border-radius: 8px;\n  &.active{\n    background-color: rgb(68, 84, 104);\n    box-shadow: 0 0 6px rgba(96, 153, 223, 0.445);\n  }\n"])));function Q(){return Object(p.jsx)(X,{children:Object(p.jsx)("a",{href:"https://github.com/jakermate/loan",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("img",{src:x,alt:"github-icon",width:80})})})}var X=d.a.div(S||(S=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  transition: all 0.12s cubic-bezier(0.68, -0.6, 0.32, 1.6);\n  right: 0;\n  background-color: none;\n  :hover {\n    transform: translate(-6px, 6px) scale(1.2);\n  }\n"]))),nn=d.a.section(E||(E=Object(s.a)(["\n  max-width: 840px;\n  text-align: left;\n  margin: 0 auto;\n  padding: 0 1rem;\n  \n  @media(min-width: 1024px){\n    padding: 0;\n  }\n  h2{\n    margin: 2rem 0;\n    font-weight: 900;\n    font-size: 2rem;\n  }\n  p{\n\n  }\n"]))),en=d.a.footer(M||(M=Object(s.a)(["\n  padding: 4rem 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  background: linear-gradient(to bottom, #212a3d, #1a2335);\n  color: white;\n\n  .copy{\n    font-size: 10px;\n    margin-top: .4rem;\n  }\n  a{\n    text-decoration: none;\n    font-weight: bold;\n    :visited{\n      color: white;\n    }\n  }\n"])));function tn(){return Object(p.jsx)("div",{})}function rn(n){return Object(p.jsx)(an,{children:n.hint})}var an=d.a.p(B||(B=Object(s.a)(["\n  /* margin-top: 8px; */\n  font-size: 12px;\n  color: #a1b8f3;\n"]))),on=d.a.div(I||(I=Object(s.a)(["\n  margin-bottom: 1.5rem;\n  position: relative;\n"]))),cn=d.a.table(P||(P=Object(s.a)(["\n  background: linear-gradient(to bottom, #212a3d, #1a2335);\ncolor: white;\n/* border-radius: 16px; */\nborder-collapse: collapse;\nwidth: 100%;\nbox-shadow: 0 4px 6px #23242733;\n  td, th{\n    padding: 1rem;\n    border: 1px solid #555b69;\n  }\n  .bracket-name{\n    font-weight: 700;\n    margin-bottom: 6px;\n  }\n  .footer{\n  }\n  th{\n    background-color: #862FFC;\n  }\n  tr:nth-child(even){\n    background-color: #28334b;\n  }\n  tbody{\n    border-radius: 2rem;\n  }\n \n"]))),sn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,164)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),i(n),r(n),a(n),o(n)}))};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(V,{})}),document.getElementById("root")),sn()},56:function(n,e,t){},57:function(n,e,t){}},[[163,1,2]]]);
//# sourceMappingURL=main.1792b336.chunk.js.map