(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var l=a(0),s=a.n(l),n=a(2),r=a.n(n),i=(a(13),a(3)),c=a(4),u=a(6),m=a(5),d=a(7);var o=function(e){return s.a.createElement("form",{onClick:e.displayVal},s.a.createElement("button",{id:"clear",className:"ac"},"AC"),s.a.createElement("button",{id:"add",className:"small act"},"+"),s.a.createElement("button",{id:"subtract",className:"small act"},"-"),s.a.createElement("button",{id:"multiply",className:"small act"},"*"),s.a.createElement("button",{id:"divide",className:"small act"},"/"),s.a.createElement("button",{id:"seven",className:"small num"},"7"),s.a.createElement("button",{id:"eight",className:"small num"},"8"),s.a.createElement("button",{id:"nine",className:"small num"},"9"),s.a.createElement("button",{id:"four",className:"small num"},"4"),s.a.createElement("button",{id:"five",className:"small num"},"5"),s.a.createElement("button",{id:"six",className:"small num"},"6"),s.a.createElement("button",{id:"one",className:"small num"},"1"),s.a.createElement("button",{id:"two",className:"small num"},"2"),s.a.createElement("button",{id:"three",className:"small num"},"3"),s.a.createElement("button",{id:"zero",className:"small num"},"0"),s.a.createElement("button",{id:"decimal",className:"small act"},"."),s.a.createElement("button",{id:"equals",className:"small equal",disabled:!0},"="))};var b=function(e){return s.a.createElement("div",{id:"display",className:"result",value:"0"},s.a.createElement("p",{id:"allAction"},e.result),s.a.createElement("p",{id:"finishResult"},e.actual))},v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).displayVal=function(t){t.preventDefault();var l=t.target.firstChild.nodeValue,s=document.getElementById("allAction"),n=document.getElementById("finishResult"),r=document.getElementById("equals"),i=document.getElementById("decimal"),c=document.querySelector('[disabled="true"]');if("FORM"!==t.target.nodeName){s.innerHTML+=l,"+"===e.state.actual||"-"===e.state.actual||"*"===e.state.actual||"/"===e.state.actual?(n.innerHTML=l,r.removeAttribute("disabled")):"AC"===l?(s.innerHTML=0,n.innerHTML=0,s.classList.remove("clearAll"),n.classList.remove("clearAll"),c&&c.removeAttribute("disabled")):"."!==l||0!==e.state.result&&"0"!==e.state.result||0!==e.state.actual&&"0"!==e.state.actual?0!==e.state.result&&"0"!==e.state.result||0!==e.state.actual&&"0"!==e.state.actual||"+"===e.state.actual||"-"===e.state.actual||"*"===e.state.actual||"/"===e.state.actual?"0"===s.textContent&&"0"===n.textContent&&"."!==l&&"AC"!==l&&"="!==l?(s.innerHTML=l,n.innerHTML=l):"."===l&&n.textContent.includes(".")?(i.setAttribute("disabled","true"),s.innerHTML=e.state.result):"."===l&&n.textContent.includes(".")&&0!==e.state.result&&0!==e.state.actual?(i.setAttribute("disabled","true"),n.innerHTML+=l):!document.querySelector(".clearAll")||"+"!==l&&"-"!==l&&"/"!==l&&"*"!==l?document.querySelector(".clearAll")&&"."===l?(s.classList.remove("clearAll"),n.classList.remove("clearAll"),n.innerHTML+=l):"+"===l||"-"===l||"/"===l||"*"===l?(n.innerHTML=l,i.removeAttribute("disabled"),r.removeAttribute("disabled"),c&&c.removeAttribute("disabled")):document.querySelector(".clearAll")&&"+"!==l&&"-"!==l&&"/"!==l&&"*"!==l&&"AC"!==l&&"="!==l?(s.classList.remove("clearAll"),n.classList.remove("clearAll"),s.innerHTML=l,n.innerHTML=l):"+"!==l||"-"!==l||"/"!==l||"*"!==l||"AC"!==l||"="!==l?n.innerHTML+=l:(r.removeAttribute("disabled"),n.innerHTML+=l):(s.classList.remove("clearAll"),n.classList.remove("clearAll"),n.innerHTML=l):(s.innerHTML=l,n.innerHTML=l):n.innerHTML+=l;var u=s.firstChild.nodeValue,m=n.firstChild.nodeValue;if(m.length>10&&"small num"===t.target.attributes[1].value?t.target.setAttribute("disabled","true"):t.target.removeAttribute("disabled"),e.setState({result:u,actual:m}),"="===l){s.classList.add("clearAll"),n.classList.add("clearAll");var d=a(14).Parser.evaluate(e.state.result);if(r.setAttribute("disabled","true"),"0.1+0.2="!==s.firstChild.nodeValue&&"0.2+0.1="!==s.firstChild.nodeValue&&".1+.2="!==s.firstChild.nodeValue&&"0.1+.2="!==s.firstChild.nodeValue&&".1+0.2="!==s.firstChild.nodeValue&&"0.2+.1="!==s.firstChild.nodeValue&&"0.1+.2="!==s.firstChild.nodeValue&&".2+.1="!==s.firstChild.nodeValue||(d=d.toFixed(1)),d.toString().length>15){var o=d.toPrecision(15);e.setState({result:o,actual:o})}else e.setState({result:d,actual:d})}}t.stopPropagation()},e.state={result:0,actual:0},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"container"},s.a.createElement(b,{result:this.state.result,actual:this.state.actual}),s.a.createElement(o,{displayVal:this.displayVal})))}}]),t}(l.Component);r.a.render(s.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.07ab491a.chunk.js.map