(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return o}));var a=n(3),r=(n(0),n(109));const l={title:"Error Codes"},b={unversionedId:"api/error-codes",id:"api/error-codes",isDocsHomePage:!1,title:"Error Codes",description:"If a particular native API call fails, Neutralinojs client library rejects the pending Promise with an error object.",source:"@site/docs/api/error-codes.md",slug:"/api/error-codes",permalink:"/docs/api/error-codes",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/error-codes.md",version:"current",sidebar:"docs",previous:{title:"Neutralino.updater",permalink:"/docs/api/updater"},next:{title:"Global Variables",permalink:"/docs/api/global-variables"}},i=[{value:"Native API error codes",id:"native-api-error-codes",children:[]}],c={toc:i};function o({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If a particular native API call fails, Neutralinojs client library rejects the pending Promise with an error object."),Object(r.b)("p",null,"The error object has the following structure."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'{\n    code: "<code>",\n    message: "<message>"\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"code")," String: Error code."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"message")," String: Error message")),Object(r.b)("h2",{id:"native-api-error-codes"},"Native API error codes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Error code"),Object(r.b)("th",{parentName:"tr",align:null},"Message"),Object(r.b)("th",{parentName:"tr",align:null},"Thrown by"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_FS_DIRCRER")),Object(r.b)("td",{parentName:"tr",align:null},"Unable to create directory."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"os.createDirectory"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_FS_RMDIRER")),Object(r.b)("td",{parentName:"tr",align:null},"Unable to remove directory."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"os.removeDirectory"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_FS_FILRDER")),Object(r.b)("td",{parentName:"tr",align:null},"File read error."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"filesystem.readFile"),", ",Object(r.b)("inlineCode",{parentName:"td"},"filesystem.readBinaryFile"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_FS_FILWRER")),Object(r.b)("td",{parentName:"tr",align:null},"File write error."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"filesystem.writeFile"),", ",Object(r.b)("inlineCode",{parentName:"td"},"filesystem.writeBinaryFile"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_FS_FILRMER")),Object(r.b)("td",{parentName:"tr",align:null},"File remove error."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"filesystem.removeFile"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_FS_NOPATHE")),Object(r.b)("td",{parentName:"tr",align:null},"No file or directory."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"filesystem.getStats"),", ",Object(r.b)("inlineCode",{parentName:"td"},"filesystem.readDirectory"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_FS_COPYFER")),Object(r.b)("td",{parentName:"tr",align:null},"File copy error."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"filesystem.copyFile"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_FS_MOVEFER")),Object(r.b)("td",{parentName:"tr",align:null},"File move error."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"filesystem.moveFile"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_OS_INVMSGA")),Object(r.b)("td",{parentName:"tr",align:null},"Invalid message box arguments."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"os.showMessageBox"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_OS_INVKNPT")),Object(r.b)("td",{parentName:"tr",align:null},"Invalid platform path name."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"os.getPath"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_ST_INVSTKY")),Object(r.b)("td",{parentName:"tr",align:null},"Invalid storage key."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"storage.getData"),", ",Object(r.b)("inlineCode",{parentName:"td"},"storage.setData"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_ST_STKEYWE")),Object(r.b)("td",{parentName:"tr",align:null},"Storage write error."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"storage.setData"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_RT_INVTOKN")),Object(r.b)("td",{parentName:"tr",align:null},"Invalid access token."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"all"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_RT_NATPRME")),Object(r.b)("td",{parentName:"tr",align:null},"No permission to execute the provided native method."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"all"),",")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_RT_APIPRME")),Object(r.b)("td",{parentName:"tr",align:null},"No permission to use the native API."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"all"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_RT_NATRTER")),Object(r.b)("td",{parentName:"tr",align:null},"Native method runtime error. Mostly occured due to missing parameters."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"all"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_RT_NATNTIM")),Object(r.b)("td",{parentName:"tr",align:null},"Native method is not implemented."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"internal"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_CL_NSEROFF")),Object(r.b)("td",{parentName:"tr",align:null},"Neutralino server is not reachable."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"all"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_EX_EXTNOTC")),Object(r.b)("td",{parentName:"tr",align:null},"Extension is not connected yet"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"extensions.dispatch"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_UP_CUPDMER")),Object(r.b)("td",{parentName:"tr",align:null},"Invalid update manifest or mismatching applicationId"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"updater.checkForUpdates"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_UP_CUPDERR")),Object(r.b)("td",{parentName:"tr",align:null},"Unable to fetch update manifest"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"updater.checkForUpdates"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_UP_UPDNOUF")),Object(r.b)("td",{parentName:"tr",align:null},"No update manifest loaded"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"updater.install"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NE_UP_UPDINER")),Object(r.b)("td",{parentName:"tr",align:null},"Update installation error"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"updater.install"))))))}o.isMDXComponent=!0},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},N=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(n),N=a,O=p["".concat(b,".").concat(N)]||p[N]||m[N]||l;return n?r.a.createElement(O,i(i({ref:t},o),{},{components:n})):r.a.createElement(O,i({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=N;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}N.displayName="MDXCreateElement"}}]);