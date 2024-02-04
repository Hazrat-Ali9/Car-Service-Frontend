!function(e,r){"use strict";
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
    ***************************************************************************** */var u=function(){return u=Object.assign||function(e){for(var r,u=1,t=arguments.length;u<t;u++)for(var n in r=arguments[u])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},u.apply(this,arguments)},t=function(e){return{loading:null==e,value:e}},n=function(e,u,t){var n=r.useRef(e);return r.useEffect((function(){u(e,n.current)||(n.current=e,t&&t())})),n},a=function(e,r){var u=!e&&!r,t=!!e&&!!r&&e.isEqual(r);return u||t};e.useComparatorRef=n,e.useIsEqualRef=function(e,r){return n(e,a,r)},e.useLoadingValue=function(e){var n=e?e():void 0,a=r.useReducer((function(e,r){switch(r.type){case"error":return u(u({},e),{error:r.error,loading:!1,value:void 0});case"reset":return t(r.defaultValue);case"value":return u(u({},e),{error:void 0,loading:!1,value:r.value});default:return e}}),t(n)),o=a[0],l=a[1],i=r.useCallback((function(){var r=e?e():void 0;l({type:"reset",defaultValue:r})}),[e]),s=r.useCallback((function(e){l({type:"error",error:e})}),[]),c=r.useCallback((function(e){l({type:"value",value:e})}),[]);return r.useMemo((function(){return{error:o.error,loading:o.loading,reset:i,setError:s,setValue:c,value:o.value}}),[o.error,o.loading,i,s,c,o.value])},Object.defineProperty(e,"__esModule",{value:!0})}(this["react-firebase-hooks"]=this["react-firebase-hooks"]||{},react);
//# sourceMappingURL=react-firebase-hooks-util.js.map
