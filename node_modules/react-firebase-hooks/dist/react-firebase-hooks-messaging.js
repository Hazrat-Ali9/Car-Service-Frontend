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
    ***************************************************************************** */var a=function(){return a=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++)for(var u in r=arguments[t])Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u]);return e},a.apply(this,arguments)},u=function(e){return{loading:null==e,value:e}},n=function(e){var r=e?e():void 0,n=t.useReducer((function(e,r){switch(r.type){case"error":return a(a({},e),{error:r.error,loading:!1,value:void 0});case"reset":return u(r.defaultValue);case"value":return a(a({},e),{error:void 0,loading:!1,value:r.value});default:return e}}),u(r)),o=n[0],l=n[1],i=t.useCallback((function(){var r=e?e():void 0;l({type:"reset",defaultValue:r})}),[e]),s=t.useCallback((function(e){l({type:"error",error:e})}),[]),c=t.useCallback((function(e){l({type:"value",value:e})}),[]);return t.useMemo((function(){return{error:o.error,loading:o.loading,reset:i,setError:s,setValue:c,value:o.value}}),[o.error,o.loading,i,s,c,o.value])};e.useToken=function(e,a){var u=n(),o=u.error,l=u.loading,i=u.setError,s=u.setValue,c=u.value;return t.useEffect((function(){r.getToken(e,{vapidKey:a}).then(s).catch(i)}),[e]),[c,l,o]},Object.defineProperty(e,"__esModule",{value:!0})}(this["react-firebase-hooks"]=this["react-firebase-hooks"]||{},messaging,react);
//# sourceMappingURL=react-firebase-hooks-messaging.js.map
