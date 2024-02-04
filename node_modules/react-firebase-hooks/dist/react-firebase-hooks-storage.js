!function(e,r,t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var n=function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var u in r=arguments[t])Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u]);return e},n.apply(this,arguments)},u=function(e){return{loading:null==e,value:e}},o=function(e){var r=e?e():void 0,o=t.useReducer((function(e,r){switch(r.type){case"error":return n(n({},e),{error:r.error,loading:!1,value:void 0});case"reset":return u(r.defaultValue);case"value":return n(n({},e),{error:void 0,loading:!1,value:r.value});default:return e}}),u(r)),a=o[0],i=o[1],l=t.useCallback((function(){var r=e?e():void 0;i({type:"reset",defaultValue:r})}),[e]),c=t.useCallback((function(e){i({type:"error",error:e})}),[]),s=t.useCallback((function(e){i({type:"value",value:e})}),[]);return t.useMemo((function(){return{error:a.error,loading:a.loading,reset:l,setError:c,setValue:s,value:a.value}}),[a.error,a.loading,l,c,s,a.value])},a=function(e,r){var t=!e&&!r,n=!!e&&!!r&&e.fullPath===r.fullPath;return t||n};
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
function i(e,r,t,n){return new(t||(t=Promise))((function(u,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function i(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var r;e.done?u(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,i)}l((n=n.apply(e,r||[])).next())}))}function l(e,r){var t,n,u,o,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(u=2&o[0]?n.return:o[0]?n.throw||((u=n.return)&&u.call(n),0):n.next)&&!(u=u.call(n,o[1])).done)return u;switch(n=0,u&&(o=[2&o[0],u.value]),o[0]){case 0:case 1:u=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(u=a.trys,(u=u.length>0&&u[u.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!u||o[1]>u[0]&&o[1]<u[3])){a.label=o[1];break}if(6===o[0]&&a.label<u[1]){a.label=u[1],u=o;break}if(u&&a.label<u[2]){a.label=u[2],a.ops.push(o);break}u[2]&&a.ops.pop(),a.trys.pop();continue}o=r.call(e,a)}catch(e){o=[6,e],n=0}finally{t=u=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}e.useDownloadURL=function(e){var n=o(),u=n.error,i=n.loading,l=n.reset,c=n.setError,s=n.setValue,f=n.value,v=function(e,r,n){var u=t.useRef(e);return t.useEffect((function(){r(e,u.current)||(u.current=e,n&&n())})),u}(e,a,l);return t.useEffect((function(){v.current?r.getDownloadURL(v.current).then(s).catch(c):s(void 0)}),[v.current]),[f,i,u]},e.useUploadFile=function(){var e=t.useState(),n=e[0],u=e[1],o=t.useState(!1),a=o[0],c=o[1],s=t.useState(),f=s[0],v=s[1],d=t.useCallback((function(e,t,n){return i(void 0,void 0,void 0,(function(){return l(this,(function(o){return[2,new Promise((function(o,a){c(!0),u(void 0);var i=r.uploadBytesResumable(e,t,n);i.on("state_changed",(function(e){v(e)}),(function(e){c(!1),u(e),o(void 0)}),(function(){c(!1),v(void 0),o({metadata:i.snapshot.metadata,ref:i.snapshot.ref})}))}))]}))}))}),[]);return[d,a,f,n]},Object.defineProperty(e,"__esModule",{value:!0})}(this["react-firebase-hooks"]=this["react-firebase-hooks"]||{},storage,react);
//# sourceMappingURL=react-firebase-hooks-storage.js.map
