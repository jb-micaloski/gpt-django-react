"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[977],{58363:(e,n)=>{n.Z=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return t.some((function(e){var n=e.trim().toLowerCase();return"."===n.charAt(0)?r.toLowerCase().endsWith(n):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n}))}return!0}},44977:(e,n,t)=>{t.d(n,{uI:()=>re});var r=t(67294),o=t(45697),i=t.n(o);function a(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))}function c(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=n.call(e,a)}catch(e){c=[6,e],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}function u(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a}Object.create,Object.create;var l=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function s(e,n){var t=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var t=n.split(".").pop().toLowerCase(),r=l.get(t);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof t.path){var r=e.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"==typeof n?n:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}var f=[".DS_Store","Thumbs.db"];function p(e){return"object"==typeof e&&null!==e}function d(e){return y(e.target.files).map((function(e){return s(e)}))}function v(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){switch(n.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,n.sent().map((function(e){return s(e)}))]}}))}))}function g(e,n){return a(this,void 0,void 0,(function(){var t;return c(this,(function(r){switch(r.label){case 0:return null===e?[2,[]]:e.items?(t=y(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,t]:[4,Promise.all(t.map(b))]):[3,2];case 1:return[2,m(h(r.sent()))];case 2:return[2,m(y(e.files).map((function(e){return s(e)})))]}}))}))}function m(e){return e.filter((function(e){return-1===f.indexOf(e.name)}))}function y(e){if(null===e)return[];for(var n=[],t=0;t<e.length;t++){var r=e[t];n.push(r)}return n}function b(e){if("function"!=typeof e.webkitGetAsEntry)return w(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?x(n):w(e)}function h(e){return e.reduce((function(e,n){return function(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(u(arguments[n]));return e}(e,Array.isArray(n)?h(n):[n])}),[])}function w(e){var n=e.getAsFile();if(!n)return Promise.reject(e+" is not a File");var t=s(n);return Promise.resolve(t)}function D(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){return[2,e.isDirectory?x(e):O(e)]}))}))}function x(e){var n=e.createReader();return new Promise((function(e,t){var r=[];!function o(){var i=this;n.readEntries((function(n){return a(i,void 0,void 0,(function(){var i,a,u;return c(this,(function(c){switch(c.label){case 0:if(n.length)return[3,5];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=c.sent(),e(i),[3,4];case 3:return a=c.sent(),t(a),[3,4];case 4:return[3,6];case 5:u=Promise.all(n.map(D)),r.push(u),o(),c.label=6;case 6:return[2]}}))}))}),(function(e){t(e)}))}()}))}function O(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){return[2,new Promise((function(n,t){e.file((function(t){var r=s(t,e.fullPath);n(r)}),(function(e){t(e)}))}))]}))}))}var j=t(58363);function F(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?F(Object(t),!0).forEach((function(n){k(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function k(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function P(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return E(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?E(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var S=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(n)}},C=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},z=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},R={code:"too-many-files",message:"Too many files"};function T(e,n){var t="application/x-moz-file"===e.type||(0,j.Z)(e,n);return[t,t?null:S(n)]}function I(e,n,t){if(L(e.size))if(L(n)&&L(t)){if(e.size>t)return[!1,C(t)];if(e.size<n)return[!1,z(n)]}else{if(L(n)&&e.size<n)return[!1,z(n)];if(L(t)&&e.size>t)return[!1,C(t)]}return[!0,null]}function L(e){return null!=e}function K(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function B(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function M(e){e.preventDefault()}function $(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return n.some((function(n){return!K(e)&&n&&n.apply(void 0,[e].concat(r)),K(e)}))}}function G(){return"showOpenFilePicker"in window}function q(e){return e="string"==typeof e?e.split(","):e,[{description:"everything",accept:Array.isArray(e)?e.filter((function(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)})).reduce((function(e,n){return A(A({},e),{},k({},n,[]))}),{}):{}}]}var N=["children"],U=["open"],W=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Z=["refKey","onChange","onClick"];function H(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||_(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,n){if(e){if("string"==typeof e)return J(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?J(e,n):void 0}}function J(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Q(Object(t),!0).forEach((function(n){X(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function X(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Y(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var ee=(0,r.forwardRef)((function(e,n){var t=e.children,o=re(Y(e,N)),i=o.open,a=Y(o,U);return(0,r.useImperativeHandle)(n,(function(){return{open:i}}),[i]),r.createElement(r.Fragment,null,t(V(V({},a),{},{open:i})))}));ee.displayName="Dropzone";var ne={disabled:!1,getFilesFromEvent:function(e){return a(this,void 0,void 0,(function(){return c(this,(function(n){return p(e)&&p(e.dataTransfer)?[2,g(e.dataTransfer,e.type)]:p(t=e)&&p(t.target)?[2,d(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,v(e)]:[2,[]];var t}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1};ee.defaultProps=ne,ee.propTypes={children:i().func,accept:i().oneOfType([i().string,i().arrayOf(i().string)]),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,validator:i().func};var te={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=V(V({},ne),e),t=n.accept,o=n.disabled,i=n.getFilesFromEvent,a=n.maxSize,c=n.minSize,u=n.multiple,l=n.maxFiles,s=n.onDragEnter,f=n.onDragLeave,p=n.onDragOver,d=n.onDrop,v=n.onDropAccepted,g=n.onDropRejected,m=n.onFileDialogCancel,y=n.onFileDialogOpen,b=n.useFsAccessApi,h=n.preventDropOnDocument,w=n.noClick,D=n.noKeyboard,x=n.noDrag,O=n.noDragEventsBubbling,j=n.validator,F=(0,r.useMemo)((function(){return"function"==typeof y?y:ie}),[y]),A=(0,r.useMemo)((function(){return"function"==typeof m?m:ie}),[m]),k=(0,r.useRef)(null),E=(0,r.useRef)(null),S=H((0,r.useReducer)(oe,te),2),C=S[0],z=S[1],L=C.isFocused,N=C.isFileDialogActive,U=C.draggedFiles,Q=function(){N&&setTimeout((function(){E.current&&(E.current.files.length||(z({type:"closeDialog"}),A()))}),300)};(0,r.useEffect)((function(){return b&&G()?function(){}:(window.addEventListener("focus",Q,!1),function(){window.removeEventListener("focus",Q,!1)})}),[E,N,A,b]);var ee=(0,r.useRef)([]),re=function(e){k.current&&k.current.contains(e.target)||(e.preventDefault(),ee.current=[])};(0,r.useEffect)((function(){return h&&(document.addEventListener("dragover",M,!1),document.addEventListener("drop",re,!1)),function(){h&&(document.removeEventListener("dragover",M),document.removeEventListener("drop",re))}}),[k,h]);var ae=(0,r.useCallback)((function(e){var n;e.preventDefault(),e.persist(),he(e),ee.current=[].concat(function(e){if(Array.isArray(e))return J(e)}(n=ee.current)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||_(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e.target]),B(e)&&Promise.resolve(i(e)).then((function(n){K(e)&&!O||(z({draggedFiles:n,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e))}))}),[i,s,O]),ce=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),he(e);var n=B(e);if(n&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return n&&p&&p(e),!1}),[p,O]),ue=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),he(e);var n=ee.current.filter((function(e){return k.current&&k.current.contains(e)})),t=n.indexOf(e.target);-1!==t&&n.splice(t,1),ee.current=n,n.length>0||(z({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),B(e)&&f&&f(e))}),[k,f,O]),le=(0,r.useCallback)((function(e,n){var r=[],o=[];e.forEach((function(e){var n=H(T(e,t),2),i=n[0],u=n[1],l=H(I(e,c,a),2),s=l[0],f=l[1],p=j?j(e):null;if(i&&s&&!p)r.push(e);else{var d=[u,f];p&&(d=d.concat(p)),o.push({file:e,errors:d.filter((function(e){return e}))})}})),(!u&&r.length>1||u&&l>=1&&r.length>l)&&(r.forEach((function(e){o.push({file:e,errors:[R]})})),r.splice(0)),z({acceptedFiles:r,fileRejections:o,type:"setFiles"}),d&&d(r,o,n),o.length>0&&g&&g(o,n),r.length>0&&v&&v(r,n)}),[z,u,t,c,a,l,d,v,g,j]),se=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),he(e),ee.current=[],B(e)&&Promise.resolve(i(e)).then((function(n){K(e)&&!O||le(n,e)})),z({type:"reset"})}),[i,le,O]),fe=(0,r.useCallback)((function(){if(b&&G()){z({type:"openDialog"}),F();var e={multiple:u,types:q(t)};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){return le(e,null)})).catch((function(e){return A(e)})).finally((function(){return z({type:"closeDialog"})}))}else E.current&&(z({type:"openDialog"}),F(),E.current.value=null,E.current.click())}),[z,F,A,b,le,t,u]),pe=(0,r.useCallback)((function(e){k.current&&k.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),fe()))}),[k,E,fe]),de=(0,r.useCallback)((function(){z({type:"focus"})}),[]),ve=(0,r.useCallback)((function(){z({type:"blur"})}),[]),ge=(0,r.useCallback)((function(){w||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?setTimeout(fe,0):fe())}),[E,w,fe]),me=function(e){return o?null:e},ye=function(e){return D?null:me(e)},be=function(e){return x?null:me(e)},he=function(e){O&&e.stopPropagation()},we=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,r=e.role,i=e.onKeyDown,a=e.onFocus,c=e.onBlur,u=e.onClick,l=e.onDragEnter,s=e.onDragOver,f=e.onDragLeave,p=e.onDrop,d=Y(e,W);return V(V(X({onKeyDown:ye($(i,pe)),onFocus:ye($(a,de)),onBlur:ye($(c,ve)),onClick:me($(u,ge)),onDragEnter:be($(l,ae)),onDragOver:be($(s,ce)),onDragLeave:be($(f,ue)),onDrop:be($(p,se)),role:"string"==typeof r&&""!==r?r:"button"},t,k),o||D?{}:{tabIndex:0}),d)}}),[k,pe,de,ve,ge,ae,ce,ue,se,D,x,o]),De=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),xe=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,r=void 0===n?"ref":n,o=e.onChange,i=e.onClick,a=Y(e,Z);return V(V({},X({accept:t,multiple:u,type:"file",style:{display:"none"},onChange:me($(o,se)),onClick:me($(i,De)),autoComplete:"off",tabIndex:-1},r,E)),a)}}),[E,t,u,se,o]),Oe=U.length,je=Oe>0&&function(e){var n=e.files,t=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles;return!(!i&&n.length>1||i&&a>=1&&n.length>a)&&n.every((function(e){var n=P(T(e,t),1)[0],i=P(I(e,r,o),1)[0];return n&&i}))}({files:U,accept:t,minSize:c,maxSize:a,multiple:u,maxFiles:l}),Fe=Oe>0&&!je;return V(V({},C),{},{isDragAccept:je,isDragReject:Fe,isFocused:L&&!o,getRootProps:we,getInputProps:xe,rootRef:k,inputRef:E,open:me(fe)})}function oe(e,n){switch(n.type){case"focus":return V(V({},e),{},{isFocused:!0});case"blur":return V(V({},e),{},{isFocused:!1});case"openDialog":return V(V({},te),{},{isFileDialogActive:!0});case"closeDialog":return V(V({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var t=n.isDragActive,r=n.draggedFiles;return V(V({},e),{},{draggedFiles:r,isDragActive:t});case"setFiles":return V(V({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return V({},te);default:return e}}function ie(){}}}]);