(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var l=a(0),s=a.n(l),n=a(2),r=a.n(n),i=(a(13),a(3)),u=a(4),c=a(6),d=a(5),m=a(7);var o=function(e){return s.a.createElement("form",{onClick:e.displayVal},s.a.createElement("button",{id:"clear",className:"ac"},"AC"),s.a.createElement("button",{id:"add",className:"small act"},"+"),s.a.createElement("button",{id:"subtract",className:"small act"},"-"),s.a.createElement("button",{id:"multiply",className:"small act"},"*"),s.a.createElement("button",{id:"divide",className:"small act"},"/"),s.a.createElement("button",{id:"seven",className:"small num"},"7"),s.a.createElement("button",{id:"eight",className:"small num"},"8"),s.a.createElement("button",{id:"nine",className:"small num"},"9"),s.a.createElement("button",{id:"four",className:"small num"},"4"),s.a.createElement("button",{id:"five",className:"small num"},"5"),s.a.createElement("button",{id:"six",className:"small num"},"6"),s.a.createElement("button",{id:"one",className:"small num"},"1"),s.a.createElement("button",{id:"two",className:"small num"},"2"),s.a.createElement("button",{id:"three",className:"small num"},"3"),s.a.createElement("button",{id:"zero",className:"small num"},"0"),s.a.createElement("button",{id:"decimal",className:"small act"},"."),s.a.createElement("button",{id:"equals",className:"small equal"},"="))};var b=function(e){return s.a.createElement("div",{id:"display",className:"result",value:"0"},s.a.createElement("p",{id:"allAction",className:"before"},e.result),s.a.createElement("p",{id:"finishResult",className:"before"},e.actual))},f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(d.a)(t).call(this))).displayVal=function(t){t.preventDefault();var l=t.target.firstChild.nodeValue,s=document.getElementById("allAction"),n=document.getElementById("finishResult"),r=document.getElementById("equals"),i=document.getElementById("decimal"),u=document.querySelector('[disabled="true"]');if("FORM"!==t.target.nodeName){s.classList.remove("before"),s.classList.add("clearBefore"),n.classList.remove("before"),n.classList.add("clearBefore"),s.innerHTML+=l,"+"===e.state.actual||"-"===e.state.actual||"*"===e.state.actual||"/"===e.state.actual?n.innerHTML=l:"0"===e.state.result&&"0"===e.state.actual&&"."!==l&&"AC"!==l&&"="!==l?(s.innerHTML=l,n.innerHTML=l):"+"===l||"-"===l||"/"===l||"*"===l?(n.innerHTML=l,i.removeAttribute("disabled"),r.removeAttribute("disabled"),u&&u.removeAttribute("disabled")):"AC"===l?(n.innerHTML="0",s.innerHTML="0",u&&u.removeAttribute("disabled")):(r.removeAttribute("disabled"),n.innerHTML+=l),"0"===l&&0===s.firstChild.nodeValue.indexOf("0")&&1!==s.firstChild.nodeValue.indexOf(".")&&(s.innerHTML="0",n.innerHTML="0"),"."===l&&-1!==n.firstChild.nodeValue.indexOf(".")&&i.setAttribute("disabled","true");var c=s.firstChild.nodeValue,d=n.firstChild.nodeValue;if(d.length>13&&"small num"===t.target.attributes[1].value?t.target.setAttribute("disabled","true"):t.target.removeAttribute("disabled"),e.setState({result:c,actual:d}),"="===l){var m=a(14).Parser.evaluate(e.state.result);if(r.setAttribute("disabled","true"),"0.1+0.2="!==s.firstChild.nodeValue&&"0.2+0.1="!==s.firstChild.nodeValue&&".1+.2="!==s.firstChild.nodeValue&&"0.1+.2="!==s.firstChild.nodeValue&&".1+0.2="!==s.firstChild.nodeValue&&"0.2+.1="!==s.firstChild.nodeValue&&"0.1+.2="!==s.firstChild.nodeValue&&".2+.1="!==s.firstChild.nodeValue||(m=.3),m.toString().length>14){var o=m.toPrecision(13);e.setState({result:o,actual:o})}else e.setState({result:m,actual:m})}}t.stopPropagation()},e.state={result:"",actual:""},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"container"},s.a.createElement(b,{result:this.state.result,actual:this.state.actual}),s.a.createElement(o,{displayVal:this.displayVal})))}}]),t}(l.Component);r.a.render(s.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.57bd05b6.chunk.js.map