webpackJsonp([1],[,,,,,,,,,,,,,,function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},,,function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(36),o=n(139),i=n(75),u=Object.defineProperty;e.f=n(20)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(38)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},,,,,,function(t,e,n){var r=n(14),o=n(15),i=n(138),u=n(27),c=function(t,e,n){var s,a,f,l=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,h=t&c.B,y=t&c.W,m=p?o:o[e]||(o[e]={}),b=m.prototype,g=p?r:d?r[e]:(r[e]||{}).prototype;p&&(n=e);for(s in n)(a=!l&&g&&void 0!==g[s])&&s in m||(f=a?g[s]:n[s],m[s]=p&&"function"!=typeof g[s]?n[s]:h&&a?i(f,r):y&&g[s]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((m.virtual||(m.virtual={}))[s]=f,t&c.R&&b&&!b[s]&&u(b,s,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(19),o=n(49);t.exports=n(20)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(322),o=n(72);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(74)("wks"),o=n(48),i=n(14).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},,,,,,,function(t,e,n){var r=n(37);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},,,,,,,,,,function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},,,,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(74)("keys"),o=n(48);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(14),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var r=n(37);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=!0},function(t,e){t.exports={}},function(t,e,n){var r=n(36),o=n(321),i=n(81),u=n(73)("IE_PROTO"),c=function(){},s=function(){var t,e=n(140)("iframe"),r=i.length;for(e.style.display="none",n(326).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(144),o=n(81);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(19).f,o=n(18),i=n(29)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){e.f=n(29)},function(t,e,n){var r=n(14),o=n(15),i=n(77),u=n(83),c=n(19).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},function(t,e){e.f={}.propertyIsEnumerable},,,function(t,e,n){"use strict";function r(){var t=i.default.get(c).catch(function(t){return console.log("ERROR GETTING QUESTION: "+t)});return{type:u,payload:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.GET_QUESTIONS=void 0,e.getQuestions=r;var o=n(86),i=function(t){return t&&t.__esModule?t:{default:t}}(o),u=e.GET_QUESTIONS="GET_QUESTIONS",c="https://vtwd20wsbe.execute-api.eu-west-2.amazonaws.com/dev/question"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r=n(72);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(18),o=n(136),i=n(73)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(309);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){t.exports=!n(20)&&!n(38)(function(){return 7!=Object.defineProperty(n(140)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(37),o=n(14).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(316),i=r(o),u=n(331),c=r(u),s="function"==typeof c.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":typeof t};e.default="function"==typeof c.default&&"symbol"===s(i.default)?function(t){return void 0===t?"undefined":s(t)}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":void 0===t?"undefined":s(t)}},function(t,e,n){"use strict";var r=n(77),o=n(26),i=n(143),u=n(27),c=n(18),s=n(78),a=n(320),f=n(82),l=n(137),p=n(29)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,h,y,m,b){a(n,e,h);var g,_,x,w=function(t){if(!d&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",O="values"==y,E=!1,j=t.prototype,M=j[p]||j["@@iterator"]||y&&j[y],P=M||w(y),T=y?O?w("entries"):P:void 0,k="Array"==e?j.entries||M:M;if(k&&(x=l(k.call(new t)))!==Object.prototype&&x.next&&(f(x,S,!0),r||c(x,p)||u(x,p,v)),O&&M&&"values"!==M.name&&(E=!0,P=function(){return M.call(this)}),r&&!b||!d&&!E&&j[p]||u(j,p,P),s[e]=P,s[S]=v,y)if(g={values:O?P:w("values"),keys:m?P:w("keys"),entries:T},b)for(_ in g)_ in j||i(j,_,g[_]);else o(o.P+o.F*(d||E),e,g);return g}},function(t,e,n){t.exports=n(27)},function(t,e,n){var r=n(18),o=n(28),i=n(323)(!1),u=n(73)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),s=0,a=[];for(n in c)n!=u&&r(c,n)&&a.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~i(a,n)||a.push(n));return a}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(144),o=n(81).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(85),o=n(49),i=n(28),u=n(75),c=n(18),s=n(139),a=Object.getOwnPropertyDescriptor;e.f=n(20)?a:function(t,e){if(t=i(t),e=u(e,!0),s)try{return a(t,e)}catch(t){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){"use strict";function r(t,e){var n=i.default.post(c,{country:t,city:e}).catch(function(t){return console.log("ERROR GETTING QUESTION: "+t)});return{type:u,payload:n}}Object.defineProperty(e,"__esModule",{value:!0}),e.CHECK_ANSWER=void 0,e.checkAnswer=r;var o=n(86),i=function(t){return t&&t.__esModule?t:{default:t}}(o),u=e.CHECK_ANSWER="CHECK_ANSWER",c="https://vtwd20wsbe.execute-api.eu-west-2.amazonaws.com/dev/answer"},,,,,,function(t,e,n){"use strict";function r(t){return{type:o,payload:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.updateScore=r;var o=e.UPDATE_SCORE="UPDATE_SCORE"},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(21),i=r(o),u=n(96),c=r(u),s=n(68),a=n(35),f=n(131),l=r(f);n(133),n(289),n(291);var p=n(303),d=r(p),v=n(367),h=r(v),y=(0,a.applyMiddleware)(l.default)(a.createStore);c.default.render(i.default.createElement(s.Provider,{store:y(h.default)},i.default.createElement(d.default,null)),document.getElementById("app"))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r=n(290);"string"==typeof r&&(r=[[t.i,r,""]]);var o={};o.transform=void 0;n(135)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(134)(void 0),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,700);",""]),e.push([t.i,"*{box-sizing:border-box}body,html{font-family:Source Serif Pro,serif;color:#222;height:100%}h1,h2,h3,p{margin:0}#app,.wrapper{height:100%;background-color:#caceb5}.title{text-align:center;height:50px;line-height:50px;text-decoration:underline}@media (min-width:1024px){.title{height:100px;line-height:100px}}.main{height:calc(100% - 80px);width:95%;margin:0 auto;padding-top:10px;position:relative;border-left:20px solid transparent;border-right:20px solid transparent;display:flex;flex-flow:column wrap}.main ul{list-style-type:none;padding:0}.main ul li{padding:10px;margin:5px;border:2px solid #222;cursor:pointer;background-color:#fff;font-size:1.2em}@media (min-width:1024px){.main ul li{font-size:1.5em}}.main .response{height:40px;font-size:1.2em;font-weight:700}@media (min-width:1024px){.main .response{font-size:1.5em;height:100px}}.main .correct{color:green;background-color:#d2f7c3;font-weight:700}.main .incorrect{color:red;background-color:#f9ab9f}.main button{margin:0 auto;text-align:center;width:200px;padding:10px;cursor:pointer}@media (min-width:1024px){.main{height:calc(100% - 130px);width:60%}}.footer{text-align:center;font-weight:700;height:30px;line-height:30px}.footer a{color:#444}",""])},function(t,e,n){"use strict";var r=n(292);r.keys().forEach(r)},function(t,e,n){function r(t){return n(o(t))}function o(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./android-chrome-192x192.png":293,"./android-chrome-512x512.png":294,"./apple-touch-icon.png":295,"./browserconfig.xml":296,"./favicon-16x16.png":297,"./favicon-32x32.png":298,"./favicon.ico":299,"./manifest.json":300,"./mstile-150x150.png":301,"./safari-pinned-tab.svg":302};r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=292},function(t,e,n){t.exports=n.p+"assets/favicons/android-chrome-192x192.png"},function(t,e,n){t.exports=n.p+"assets/favicons/android-chrome-512x512.png"},function(t,e,n){t.exports=n.p+"assets/favicons/apple-touch-icon.png"},function(t,e,n){t.exports=n.p+"assets/favicons/browserconfig.xml"},function(t,e,n){t.exports=n.p+"assets/favicons/favicon-16x16.png"},function(t,e,n){t.exports=n.p+"assets/favicons/favicon-32x32.png"},function(t,e,n){t.exports=n.p+"assets/favicons/favicon.ico"},function(t,e,n){t.exports=n.p+"assets/favicons/manifest.json"},function(t,e,n){t.exports=n.p+"assets/favicons/mstile-150x150.png"},function(t,e,n){t.exports=n.p+"assets/favicons/safari-pinned-tab.svg"},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(21),i=r(o),u=n(304),c=r(u),s=function(){return i.default.createElement("div",{className:"wrapper"},i.default.createElement("h1",{className:"title"},"Capital Cities Quiz"),i.default.createElement(c.default,null),i.default.createElement("footer",{className:"footer"},"Coded by ",i.default.createElement("a",{href:"https://github.com/matt2112",target:"_blank",rel:"noreferrer noopener"},"Matt Lewis")))};e.default=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return{question:t.question,answer:t.answer,score:t.score}}function i(t){return(0,x.bindActionCreators)({checkAnswer:w.checkAnswer,getQuestions:S.getQuestions,updateScore:O.updateScore},t)}Object.defineProperty(e,"__esModule",{value:!0});var u=n(305),c=r(u),s=n(310),a=r(s),f=n(311),l=r(f),p=n(315),d=r(p),v=n(341),h=r(v),y=n(21),m=r(y),b=n(68),g=n(47),_=r(g),x=n(35),w=n(149),S=n(88),O=n(155),E=function(t){function e(t){(0,a.default)(this,e);var n=(0,d.default)(this,(e.__proto__||(0,c.default)(e)).call(this,t));return n.clickHandler=n.clickHandler.bind(n),n.renderAnswers=n.renderAnswers.bind(n),n.renderResponse=n.renderResponse.bind(n),n}return(0,h.default)(e,t),(0,l.default)(e,[{key:"componentDidMount",value:function(){this.props.getQuestions()}},{key:"componentDidUpdate",value:function(){!0===this.props.answer.correct&&!1===this.props.score.justUpdated&&this.props.updateScore({score:this.props.score.score,justUpdated:!0})}},{key:"clickHandler",value:function(t){if("LI"===t.target.tagName&&!1===this.props.score.justUpdated&&!1!==this.props.answer.correct){var e=this.props.question.country;this.props.checkAnswer(e,t.target.id)}else"BUTTON"===t.target.tagName&&(this.props.getQuestions(),this.props.updateScore({score:this.props.score.score,justUpdated:!1}))}},{key:"renderAnswers",value:function(){var t=this;return this.props.question.answers?this.props.question.answers.map(function(e){var n="";return t.props.answer.userAnswer===e?n=t.props.answer.correct?"correct":"incorrect":t.props.answer.correctAnswer===e&&(n="correct"),m.default.createElement("li",{key:e,id:e,className:"answer "+n,onClick:t.clickHandler},e)}):""}},{key:"renderResponse",value:function(){var t=this.props.answer.correct;return!0===t?"CORRECT!":!1===t?"INCORRECT!":""}},{key:"render",value:function(){return m.default.createElement("div",{className:"main"},m.default.createElement("h2",null,"What is the capital of ",this.props.question.country,"?"),m.default.createElement("h3",null,"Select the answer from the list below:"),m.default.createElement("ul",null,this.renderAnswers()),m.default.createElement("p",{className:"response"},"Score: ",this.props.score.score," ",this.renderResponse()),m.default.createElement("button",{onClick:this.clickHandler},"New Question"))}}]),e}(y.Component);E.propTypes={answer:_.default.object,checkAnswer:_.default.func,getQuestions:_.default.func,question:_.default.object,updateScore:_.default.func,score:_.default.object},e.default=(0,b.connect)(o,i)(E)},function(t,e,n){t.exports={default:n(306),__esModule:!0}},function(t,e,n){n(307),t.exports=n(15).Object.getPrototypeOf},function(t,e,n){var r=n(136),o=n(137);n(308)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(26),o=n(15),i=n(38);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(312),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={default:n(313),__esModule:!0}},function(t,e,n){n(314);var r=n(15).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(26);r(r.S+r.F*!n(20),"Object",{defineProperty:n(19).f})},function(t,e,n){"use strict";e.__esModule=!0;var r=n(141),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,o.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){t.exports={default:n(317),__esModule:!0}},function(t,e,n){n(318),n(327),t.exports=n(83).f("iterator")},function(t,e,n){"use strict";var r=n(319)(!0);n(142)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(76),o=n(72);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),s=r(n),a=c.length;return s<0||s>=a?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(79),o=n(49),i=n(82),u={};n(27)(u,n(29)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(19),o=n(36),i=n(80);t.exports=n(20)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,s=0;c>s;)r.f(t,n=u[s++],e[n]);return t}},function(t,e,n){var r=n(145);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(28),o=n(324),i=n(325);t.exports=function(t){return function(e,n,u){var c,s=r(e),a=o(s.length),f=i(u,a);if(t&&n!=n){for(;a>f;)if((c=s[f++])!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(76),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(76),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(14).document;t.exports=r&&r.documentElement},function(t,e,n){n(328);for(var r=n(14),o=n(27),i=n(78),u=n(29)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<c.length;s++){var a=c[s],f=r[a],l=f&&f.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,e,n){"use strict";var r=n(329),o=n(330),i=n(78),u=n(28);t.exports=n(142)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){t.exports={default:n(332),__esModule:!0}},function(t,e,n){n(333),n(338),n(339),n(340),t.exports=n(15).Symbol},function(t,e,n){"use strict";var r=n(14),o=n(18),i=n(20),u=n(26),c=n(143),s=n(334).KEY,a=n(38),f=n(74),l=n(82),p=n(48),d=n(29),v=n(83),h=n(84),y=n(335),m=n(336),b=n(36),g=n(28),_=n(75),x=n(49),w=n(79),S=n(337),O=n(148),E=n(19),j=n(80),M=O.f,P=E.f,T=S.f,k=r.Symbol,N=r.JSON,C=N&&N.stringify,A=d("_hidden"),R=d("toPrimitive"),L={}.propertyIsEnumerable,I=f("symbol-registry"),U=f("symbols"),F=f("op-symbols"),G=Object.prototype,Q="function"==typeof k,D=r.QObject,H=!D||!D.prototype||!D.prototype.findChild,W=i&&a(function(){return 7!=w(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=M(G,e);r&&delete G[e],P(t,e,n),r&&t!==G&&P(G,e,r)}:P,q=function(t){var e=U[t]=w(k.prototype);return e._k=t,e},z=Q&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},K=function(t,e,n){return t===G&&K(F,e,n),b(t),e=_(e,!0),b(n),o(U,e)?(n.enumerable?(o(t,A)&&t[A][e]&&(t[A][e]=!1),n=w(n,{enumerable:x(0,!1)})):(o(t,A)||P(t,A,x(1,{})),t[A][e]=!0),W(t,e,n)):P(t,e,n)},V=function(t,e){b(t);for(var n,r=y(e=g(e)),o=0,i=r.length;i>o;)K(t,n=r[o++],e[n]);return t},B=function(t,e){return void 0===e?w(t):V(w(t),e)},J=function(t){var e=L.call(this,t=_(t,!0));return!(this===G&&o(U,t)&&!o(F,t))&&(!(e||!o(this,t)||!o(U,t)||o(this,A)&&this[A][t])||e)},Y=function(t,e){if(t=g(t),e=_(e,!0),t!==G||!o(U,e)||o(F,e)){var n=M(t,e);return!n||!o(U,e)||o(t,A)&&t[A][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=T(g(t)),r=[],i=0;n.length>i;)o(U,e=n[i++])||e==A||e==s||r.push(e);return r},Z=function(t){for(var e,n=t===G,r=T(n?F:g(t)),i=[],u=0;r.length>u;)!o(U,e=r[u++])||n&&!o(G,e)||i.push(U[e]);return i};Q||(k=function(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(F,n),o(this,A)&&o(this[A],t)&&(this[A][t]=!1),W(this,t,x(1,n))};return i&&H&&W(G,t,{configurable:!0,set:e}),q(t)},c(k.prototype,"toString",function(){return this._k}),O.f=Y,E.f=K,n(147).f=S.f=X,n(85).f=J,n(146).f=Z,i&&!n(77)&&c(G,"propertyIsEnumerable",J,!0),v.f=function(t){return q(d(t))}),u(u.G+u.W+u.F*!Q,{Symbol:k});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)d($[tt++]);for(var et=j(d.store),nt=0;et.length>nt;)h(et[nt++]);u(u.S+u.F*!Q,"Symbol",{for:function(t){return o(I,t+="")?I[t]:I[t]=k(t)},keyFor:function(t){if(!z(t))throw TypeError(t+" is not a symbol!");for(var e in I)if(I[e]===t)return e},useSetter:function(){H=!0},useSimple:function(){H=!1}}),u(u.S+u.F*!Q,"Object",{create:B,defineProperty:K,defineProperties:V,getOwnPropertyDescriptor:Y,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),N&&u(u.S+u.F*(!Q||a(function(){var t=k();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!z(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&m(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!z(e))return e}),r[1]=e,C.apply(N,r)}}}),k.prototype[R]||n(27)(k.prototype,R,k.prototype.valueOf),l(k,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(48)("meta"),o=n(37),i=n(18),u=n(19).f,c=0,s=Object.isExtensible||function(){return!0},a=!n(38)(function(){return s(Object.preventExtensions({}))}),f=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!e)return"E";f(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!s(t))return!0;if(!e)return!1;f(t)}return t[r].w},d=function(t){return a&&v.NEED&&s(t)&&!i(t,r)&&f(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,e,n){var r=n(80),o=n(146),i=n(85);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),s=i.f,a=0;c.length>a;)s.call(t,u=c[a++])&&e.push(u);return e}},function(t,e,n){var r=n(145);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(28),o=n(147).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,e){},function(t,e,n){n(84)("asyncIterator")},function(t,e,n){n(84)("observable")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(342),i=r(o),u=n(346),c=r(u),s=n(141),a=r(s);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,a.default)(e)));t.prototype=(0,c.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i.default?(0,i.default)(t,e):t.__proto__=e)}},function(t,e,n){t.exports={default:n(343),__esModule:!0}},function(t,e,n){n(344),t.exports=n(15).Object.setPrototypeOf},function(t,e,n){var r=n(26);r(r.S,"Object",{setPrototypeOf:n(345).set})},function(t,e,n){var r=n(37),o=n(36),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(138)(Function.call,n(148).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){t.exports={default:n(347),__esModule:!0}},function(t,e,n){n(348);var r=n(15).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(26);r(r.S,"Object",{create:n(79)})},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(35),i=n(368),u=r(i),c=n(369),s=r(c),a=n(370),f=r(a),l=(0,o.combineReducers)({answer:u.default,question:s.default,score:f.default});e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];switch(e.type){case r.CHECK_ANSWER:return e.payload.data;case o.GET_QUESTIONS:return{};default:return t}};var r=n(149),o=n(88)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];switch(e.type){case r.GET_QUESTIONS:return e.payload.data;default:return t}};var r=n(88)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{score:0,justUpdated:!1},e=arguments[1];switch(e.type){case r.UPDATE_SCORE:var n=e.payload.score;return!0===e.payload.justUpdated&&(n=e.payload.score+1),{score:n,justUpdated:!0};default:return{score:t.score,justUpdated:!1}}};var r=n(155)}],[156]);