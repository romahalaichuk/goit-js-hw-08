function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",o=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,g=Math.min,b=function(){return m.Date.now()};function y(e,t,n){var o,r,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function v(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function y(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=b();if(y(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,m&&o?v(e):(o=r=void 0,u)}function O(){var e=b(),n=y(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(h,t),s?v(e):u}(l);if(d)return f=setTimeout(h,t),v(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,j(n)&&(s=!!n.leading,a=(d="maxWait"in n)?p(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},O.flush=function(){return void 0===f?u:w(b())},O}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==r}(e))return o;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):u.test(e)?o:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};const h=document.querySelector(".feedback-form"),w=h.querySelector('input[name="email"]'),O=h.querySelector('textarea[name="message"]');h.addEventListener("input",e(t)((()=>{const e={email:w.value,message:O.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),h.addEventListener("submit",(e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state"),w.value="",O.value="",console.log("Feedback submitted:",{email:w.value,message:O.value})})),(()=>{const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);w.value=t.email,O.value=t.message}})();
//# sourceMappingURL=03-feedback.213ec0a8.js.map
