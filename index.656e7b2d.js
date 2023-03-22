function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var n,i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=l||u||Function("return this")(),s=Object.prototype.toString,p=Math.max,d=Math.min,g=function(){return c.Date.now()};function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=r.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):o.test(t)?NaN:+t}n=function(t,e,n){var i,o,r,a,f,l,u=0,c=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=i,r=o;return i=o=void 0,u=e,a=t.apply(r,n)}function b(t){return u=t,f=setTimeout(w,e),c?y(t):a}function x(t){var n=t-l;return void 0===l||n>=e||n<0||s&&t-u>=r}function w(){var t=g();if(x(t))return $(t);f=setTimeout(w,function(t){var n=e-(t-l);return s?d(n,r-(t-u)):n}(t))}function $(t){return f=void 0,v&&i?y(t):(i=o=void 0,a)}function T(){var t=g(),n=x(t);if(i=arguments,o=this,l=t,n){if(void 0===f)return b(l);if(s)return f=setTimeout(w,e),y(l)}return void 0===f&&(f=setTimeout(w,e)),a}return e=h(e)||0,m(n)&&(c=!!n.leading,r=(s="maxWait"in n)?p(h(n.maxWait)||0,e):r,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),u=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?a:$(g())},T};const v=document.querySelector("#search-box"),y=document.querySelector(".country-list");v.addEventListener("input",t(n)((t=>{var e;""!==t.target.value.trim()?(e=t.target.value.trim(),fetch(`https://restcountries.com/v2/name/${e}?fields=name,capital,population,flag,languages`).then((t=>{if(!t.ok)throw new Error("No valid");return t.json()})).then((t=>t))).then((t=>{t.length>10?Notify.info("Too many matches found. Please enter a more specific name."):t.length>1&&t.length<11?function(t){let e="";t.forEach((t=>{e+=`<li><div style="display: flex"><img src=${t.flag} alt="${t.name} falg" height="40px" width="70px"> <p style="margin-left: 15px; font-weight: bold;">${t.name}</p></div></li>`})),y.innerHTML=e}(t):1===t.length&&function(t){const e=`<li><div style="display: flex"><img src=${t[0].flag} alt="${t[0].name} falg" height="40px" width="70px"> \n<p style="margin:0 15px; font-weight: bold; font-size: 30px">${t[0].name}</p></div> <p><span>Capital: </span>${t[0].capital}</p><p><span>Population: </span>${t[0].population}</p><p><span>Language: </span>${t[0].languages[0].name}</p></li>`;y.innerHTML=e}(t)})).catch((t=>{"No valid"===t.message?Notify.failure("Oops, there is no country with that name"):console.log(t)})):y.innerHTML=""}),300));
//# sourceMappingURL=index.656e7b2d.js.map
