!function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=10)}([function(n,e,r){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),i=[];function s(n){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===n){e=r;break}return e}function c(n,e){for(var r={},t=[],o=0;o<n.length;o++){var a=n[o],c=e.base?a[0]+e.base:a[0],l=r[c]||0,d="".concat(c," ").concat(l);r[c]=l+1;var u=s(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:h(f,e),references:1}),t.push(d)}return t}function l(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=r.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,u=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function f(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function p(n,e,r){var t=r.css,o=r.media,a=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var m=null,b=0;function h(n,e){var r,t,o;if(e.singleton){var a=b++;r=m||(m=l(e)),t=f.bind(null,r,a,!1),o=f.bind(null,r,a,!0)}else r=l(e),t=p.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=s(r[t]);i[o].references--}for(var a=c(n,e),l=0;l<r.length;l++){var d=s(r[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}r=a}}}},function(n,e,r){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=function(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var o=(i=t,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[r].concat(a).concat([o]).join("\n")}var i,s,c;return[r].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);t&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},function(n,e,r){"use strict";e.a={angry:["EPH.4.26-EPH.4.27","LEV.19.17-LEV.19.18","JAS.1.19","PRO.15.1","PRO.14.29","PRO.29.11","PSA.37.8","PRO.29.22","ECC.7.9","PRO.14.7","EPH.4.31","PRO.22.24"],anguished:["1PE.5.10","2CO.1.3-2CO.1.4","ROM.8.18","PSA.34.19","2CO.4.17","ROM.8.35","JOB.1.20-JOB.1.21","1PE.3.14","1PE.4.1","2CO.4.17","COL.1.24","ISA.43.2","JAS.1.12","JHN.16.33","PSA.34.19","ROM.5.3","2CO.1.3-2CO.1.4","1PE.4.12-1PE.4.13","1PE.1.6-1PE.1.7","2CO.4.8-2CO.4.10","JAS.1.2-JAS.1.4","MAT.5.10-MAT.5.12"],annoyed:["PRO.12.16","COL.3.12-COL.3.13","EPH.4.2","ECC.7.9","TIT.2.2","PRO.15.1","PRO.29.11","GAL.6.9","JAS.1.20","COL.3.8"],ashamed:["PSA.34.5","ROM.1.16","ISA.61.7","1PE.4.16","1JN.1.19","2COR.7.14","ROM.10.11","ISA.54.4","PSA.103.12","EPH.2.8-EPH.2.9","2CO.7.10","PSA.34.5","GAL.2.20"],bitter:["HEB.12.15","EPH.4.31","ACT.8.23","MAT.18.21-MAT.18.22","MAT.6.14-MAT.6.15","DAN.9.9","MRK.11.25"],bored:["ECC.3.1","PRO.19.15","COL.3.23","EPH.5.15-EPH.5.16","ECC.9.10","COL.3.17","ECC.2.24-ECC.2.25"],content:["PHP.4.11-PHP.4.13","1TI.6.6-1TI.6.8","2CO.12.9-2CO.12.10","PRO.19.23","PSA.34.10","LUK.3.14","PRO.14.30","HEB.13.5"],depressed:["DEU.31.8","PSA.34.17","PSA.41.1-PSA.41.3","PSA.42.11","JHN.16.33","ROM.8.38-ROM.8.39","2CO.1.3-2CO.1.4","PSA.37.23-PSA.37.24","ISA.41.10","PHP.4.8","PHP.4.13","JER.29.11","MAT.11.28","PSA.23.4","PSA.9.9","JHN.1.9","PSA.40.1-PSA.40.2","PSA.34.18","MAT.5.4","PSA.30.5","LUK.1.78-LUK.1.79"],excited:["1PE.1.3-1PE.1.4","PSA.20.4","JER.29.11","PRO.16.3","3JN.1.2","HEB.13.20-HEB.13.21","2CO.13.14"],fearful:["ISA.35.4","JHN.14.27","JOS.1.9","ISA.43.1","PSA.23.4","PSA.94.19","ROM.8.38-ROM.8.39","PSA.27.1","PSA.118.6","2TI.1.7","PSA.103.17","DEU.31.6","1CO.28.20","PSA.56.3-PSA.56.4","ISA.41.10","ISA.41.13","ISA.54.4","MAT.10.28"],happy:["PSA.144.15","PSA.16.8-PSA.16.9","ECC.2.26","PRO.10.28","PSA.37.4","PHP.4.4","JAS.5.13"],hopeful:["ROM.15.13","PSA.30.5","PSA.16.8-PSA.16.9","JER.29.11","ROM.5.5","PSA.130.7","PSA.25.5","HOS.2.15","ISA.40.31"],insecure:["EPH.2.19-EPH.2.22","PHP.4.6-PHP.4.7","ROM.5.1-ROM.5.2","PHP.4.13","ROM.8.1","ISA.40.29","1JN.4.18","JHN.14.27","PSA.139.14","EPH.2.10","2CO.10.12","1SA.16.7","1CO.6.11","MAT.10.29-MAT.10.31"],jealous:["1COR.13.4","ECC.4.4","PRO.14.30","JAS.4.2-JAS.4.3","PSA.37.1-PSA.37.3","JAS.3.16","GAL.5.14-GAL.5.15"],joyful:["ROM.15.13","ECC.9.7","PSA.30.5","PHP.4.4","NEH.8.10","PSA.19.8","1PE.4.13","PSA.16.11"],lonely:["PSA.142.4-PSA.142.5","MAT.28.20","HEB.13.5","DEU.31.8","PSA.25.16","PSA.27.10","ISA.41.10","PSA.68.5-PSA.68.6"],peaceful:["ROM.15.13","LUK.2.13-LUK.2.14","PSA.4.8","MAT.5.9","JHN.14.27","ROM.5.1-ROM.5.2","ISA.32.16-ISA.32.17"],sad:["PSA.30.5","PSA.126.5","PSA.107.13-PSA.107.14","PSA.34.18","JHN.16.33","ISA.40.29","PSA.119.50","MAT.5.4"]}},function(n,e,r){var t=r(0),o=r(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1},i=(t(o,a),o.locals?o.locals:{});n.exports=i},function(n,e,r){(e=r(1)(!1)).push([n.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]),n.exports=e},function(n,e,r){var t=r(0),o=r(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1},i=(t(o,a),o.locals?o.locals:{});n.exports=i},function(n,e,r){(e=r(1)(!1)).push([n.i,".page {\r\n  background-color: #247ba0;\r\n  text-align: center;\r\n  color: white;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.page__title {\r\n  font-family: 'Sriracha', cursive;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .page__sub-title {\r\n    width: 90%;\r\n    margin: 1rem auto;\r\n  }\r\n}\r\n",""]),n.exports=e},,,,function(n,e,r){"use strict";r.r(e);var t=r(2);r(3),r(5),r(11);const o=document.querySelector(".page__verses"),a=new URL(window.location.href).searchParams.get("emotion"),i=t.a[a];function s(n){const e=n.srcElement.parentNode.querySelector(".verse__reference").innerText,r=n.srcElement.parentNode.parentNode.querySelector(".verse__passage").innerText,t=n.srcElement.classList[1],o=`${r} - ${e}`,a=document.createElement("textarea");a.value=o,a.setAttribute("readOnly",""),a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),function(n){const e=document.querySelectorAll(".verse__copy-button"),r=document.querySelector(`.${n}`);e.forEach(n=>{n!==r&&(n.innerHTML="Copy")}),r.innerHTML="Copied!"}(t)}async function c(n,e){const r=document.createElement("li");r.className=`verse verse-${e}`;const t=function(){const n=document.createElement("div");n.className="loading-animation";for(let e=1;e<4;e+=1){const r=document.createElement("span");r.className=`loading-animation__dot loading-animation__dot_num_${e}`,n.appendChild(r)}return n}();r.appendChild(t),o.appendChild(r);const a=await async function(n){const e=new URL(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/passages/${n}`);Object.entries({"content-type":"text","include-notes":"false","include-titles":"false","include-chapter-numbers":"false","include-verse-numbers":"false","include-verse-spans":"false"}).forEach(([n,r])=>{e.searchParams.append(n,r)});const r=await fetch(e,{headers:{"api-key":"5743c0df2e397164a074f36e0ccc74d0"}}),t=await r.json(),{data:{reference:o,content:a}}=t;return{reference:o,content:a}}(n),{reference:i,content:c}=a,{verseHeader:l,versePassage:d}=function(n,e,r){const t=document.createElement("div"),o=document.createElement("div"),a=document.createElement("p"),i=document.createElement("button");return t.className="verse__header",o.className="verse__passage",a.className="verse__reference",i.className=`verse__copy-button verse__copy-button_id_${n}`,a.innerHTML=e,i.innerHTML="Copy",o.innerHTML=r,i.addEventListener("click",s),t.appendChild(a),t.appendChild(i),{verseHeader:t,versePassage:o}}(e,i,c);r.innerHTML="",r.appendChild(l),r.appendChild(d)}document.title=`When You're Feeling ${a[0].toUpperCase()+a.substring(1)}`,document.querySelector(".page__title").innerHTML=`When You're Feeling ${a[0].toUpperCase()+a.substring(1)}`;for(let n=0;n<i.length;n+=1)c(i[n],n+1)},function(n,e,r){var t=r(0),o=r(12);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1},i=(t(o,a),o.locals?o.locals:{});n.exports=i},function(n,e,r){(e=r(1)(!1)).push([n.i,".page__verses {\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  width: 60%;\r\n  list-style: none;\r\n}\r\n\r\n.verse {\r\n  background-color: #fff;\r\n  color: black;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.loading-animation {\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.loading-animation__dot {\r\n  width: 10px;\r\n  height: 10px;\r\n  background-color: #70c1b3;\r\n  display: inline-block;\r\n  margin: 0px 2px;\r\n  border-radius: 50%;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n  -webkit-animation-duration: 1.75s;\r\n          animation-duration: 1.75s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n}\r\n\r\n.loading-animation__dot_num_1 {\r\n  -webkit-animation-name: bounce-1;\r\n          animation-name: bounce-1;\r\n}\r\n\r\n.loading-animation__dot_num_2 {\r\n  -webkit-animation-name: bounce-2;\r\n          animation-name: bounce-2;\r\n}\r\n\r\n.loading-animation__dot_num_3 {\r\n  -webkit-animation-name: bounce-3;\r\n          animation-name: bounce-3;\r\n}\r\n\r\n@-webkit-keyframes bounce-1 {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  30% {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  55% {\r\n    transform: translateY(-10px);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@keyframes bounce-1 {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  30% {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  55% {\r\n    transform: translateY(-10px);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes bounce-2 {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  40% {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  70% {\r\n    transform: translateY(-10px);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@keyframes bounce-2 {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  40% {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  70% {\r\n    transform: translateY(-10px);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes bounce-3 {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  60% {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  80% {\r\n    transform: translateY(-10px);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@keyframes bounce-3 {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  60% {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  80% {\r\n    transform: translateY(-10px);\r\n  }\r\n\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n.verse__header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.verse__reference {\r\n  margin: 0;\r\n}\r\n\r\n.verse__copy-button {\r\n  padding: 5px;\r\n  border: none;\r\n  background-color: #70c1b3;\r\n  color: #fff;\r\n  border-radius: 5px;\r\n  transition: box-shadow 0.15s ease-in-out;\r\n}\r\n\r\n.verse__copy-button:hover {\r\n  cursor: pointer;\r\n  box-shadow: 0px 0px 0px 2px #70c1b3;\r\n}\r\n\r\n.verse__copy-button:focus {\r\n  outline: none;\r\n}\r\n\r\n.verse__passage {\r\n  margin: 0;\r\n  padding-top: 10px;\r\n  text-align: left;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .page__verses {\r\n    width: 90%;\r\n  }\r\n}\r\n",""]),n.exports=e}]);