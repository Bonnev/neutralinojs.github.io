(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return n?i.a.createElement(m,o(o({ref:t},s),{},{components:n})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},110:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},116:function(e,t,n){"use strict";var a=n(0),i=n(117);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},117:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},122:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(116),l=n(110),o=n(58),c=n.n(o);const s=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:u,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:h}=Object(r.a)(),[j,O]=Object(a.useState)(o),g=a.Children.toArray(e.children),f=[];if(null!=p){const e=m[p];null!=e&&e!==j&&u.some((t=>t.value===e))&&O(e)}const v=e=>{const t=e.target,n=f.indexOf(t),a=g[n].props.value;O(a),null!=p&&(h(p,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:i}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:l}=window;return t>=0&&i<=l&&a<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},w=e=>{var t;let n;switch(e.keyCode){case b:{const t=f.indexOf(e.target)+1;n=f[t]||f[0];break}case s:{const t=f.indexOf(e.target)-1;n=f[t]||f[f.length-1];break}}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},d)},u.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>f.push(e),onKeyDown:w,onFocus:v,onClick:v},t)))),t?Object(a.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}},123:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),r=(n(0),n(109)),l=n(122),o=n(123),c={title:"Framework Developer Guide"},s={unversionedId:"contributing/framework-developer-guide",id:"contributing/framework-developer-guide",isDocsHomePage:!1,title:"Framework Developer Guide",description:"Great open-source software is a result of the collaboration of enthusiastic developers.",source:"@site/docs/contributing/framework-developer-guide.mdx",slug:"/contributing/framework-developer-guide",permalink:"/docs/contributing/framework-developer-guide",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/contributing/framework-developer-guide.mdx",version:"current",sidebar:"docs",previous:{title:"Distribution Overview",permalink:"/docs/distribution/overview"},next:{title:"Developer Support",permalink:"/docs/contributing/developer-support"}},b=[{value:"Setup and build the framework",id:"setup-and-build-the-framework",children:[{value:"Linux",id:"linux",children:[]},{value:"Windows",id:"windows",children:[]},{value:"macOS",id:"macos",children:[]}]},{value:"Setup and build the client",id:"setup-and-build-the-client",children:[]},{value:"Executing the test app",id:"executing-the-test-app",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Project directory structure",id:"project-directory-structure",children:[{value:"Framework",id:"framework",children:[]},{value:"Client library",id:"client-library",children:[]}]},{value:"Contribution guidelines",id:"contribution-guidelines",children:[]}],u={toc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Great open-source software is a result of the collaboration of enthusiastic developers.\nAnyone can help Neutralino by contributing code and reporting bugs. This document explains how to\nstart contributing Neutralinojs."),Object(r.b)("p",null,"Note that this guide is for contributors. If you are getting started with Neutralinojs app development,\nyou can start from ",Object(r.b)("a",{parentName:"p",href:"../getting-started/your-first-neutralinojs-app"},"here"),"."),Object(r.b)("h2",{id:"setup-and-build-the-framework"},"Setup and build the framework"),Object(r.b)("p",null,"First, clone the main repository."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/neutralinojs/neutralinojs.git\ncd neutralinojs\n")),Object(r.b)("h3",{id:"linux"},"Linux"),Object(r.b)("p",null,"No need for separate compilers because Linux distributions usually have GNU C/C++ compilers installed already."),Object(r.b)("p",null,"Install GTK, webkit, boost and other required libraries"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Ubuntu")),Object(r.b)("p",null,"If you are using a newer version of Ubuntu, some libraries may be pre-installed."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install \\\n    libboost-all-dev \\\n    libgtk-3-dev \\\n    libwebkit2gtk-4.0-37 \\\n    libwebkit2gtk-4.0-dev \\\n    libappindicator3-dev\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Fedora")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install \\\n    @development-tools \\\n    libappindicator-gtk3.x86_64 \\\n    gtk3 \\\n    webkit2gtk3.x86_64 \\\n    webkit2gtk3-devel.x86_64 \\\n    boost-devel\n")),Object(r.b)("p",null,"Compile the Neutralinojs framework."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"bash build_linux.sh # [ia32, x64, armhf, arm64]\n")),Object(r.b)("h3",{id:"windows"},"Windows"),Object(r.b)("p",null,"Install the latest Visual Studio IDE. Neutralinojs compilation on Windows will use MSVC (aka ",Object(r.b)("inlineCode",{parentName:"p"},"cl.exe"),") C++ compiler. Install Boost libraries via Chocolatey."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"choco install boost-msvc-14.1\n")),Object(r.b)("p",null,"Compile the Neutralinojs framework."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"./build_windows.bat # [ia32, x64, armhf, arm64]\n")),Object(r.b)("h3",{id:"macos"},"macOS"),Object(r.b)("p",null,"Install Xcode Command Line Tools. Install Boost libraries via Homebrew."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"brew install boost@1.76\n")),Object(r.b)("p",null,"Compile the Neutralinojs framework."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"bash build_macos.sh # [ia32, x64, armhf, arm64]\n")),Object(r.b)("h2",{id:"setup-and-build-the-client"},"Setup and build the client"),Object(r.b)("p",null,"Neutralinojs apps communicate with the Neutralinojs process via a WebSocket connection. This WebSocket connection\ngets initiated by the Neutralinojs client."),Object(r.b)("p",null,"Clone the client repository to the same directory where you downloaded the main repository."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/neutralinojs/neutralino.js.git\ncd neutralino.js\n")),Object(r.b)("p",null,"Install developer dependencies."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),Object(r.b)("h2",{id:"executing-the-test-app"},"Executing the test app"),Object(r.b)("p",null,"The main repository has a simple test application that you can use during development related activities.\nYou can enter the following command from the main repository to build and update the test app's client."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"bash ./scripts/update_client.sh\n")),Object(r.b)("p",null,"Now run the newly compiled test app with the following command."),Object(r.b)(l.a,{defaultValue:"Linux",values:[{label:"Linux",value:"Linux"},{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"Linux",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"  ./bin/neutralino-linux_x64 --load-dir-res\n"))),Object(r.b)(o.a,{value:"macOS",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"  ./bin/neutralino-mac_x64 --load-dir-res\n"))),Object(r.b)(o.a,{value:"Windows",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"  ./bin/neutralino-win_x64.exe --load-dir-res\n")))),Object(r.b)("h2",{id:"testing"},"Testing"),Object(r.b)("p",null,"Testing is a crucial part in every development activity. Every pull request in the main codebase will trigger\nthe following automated tests."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Builds on Linux, macOS, and Windows with x64 machines."),Object(r.b)("li",{parentName:"ul"},"Integration test suite.")),Object(r.b)("p",null,"However, you can run our integration test suite from your local computer too with the following command\nfrom the main codebase's directory."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cd spec\nnpm install\nnpm run test\n")),Object(r.b)("p",null,"It's always good to run the test suite for the module you've updated with the following command."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm run test <module> # Eg: npm run test filesystem\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you need to run tests for the ",Object(r.b)("inlineCode",{parentName:"p"},"extensions")," module, make sure to enter ",Object(r.b)("inlineCode",{parentName:"p"},"npm install")," from\n",Object(r.b)("inlineCode",{parentName:"p"},"./bin/extensions/sampleextension")," first."))),Object(r.b)("p",null,"The above command will run test only for the given module."),Object(r.b)("h2",{id:"project-directory-structure"},"Project directory structure"),Object(r.b)("h3",{id:"framework"},"Framework"),Object(r.b)("p",null,"Source: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralinojs"},"github.com/neutralinojs/neutralinojs")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"api"),": The native API implementation and controllers. Written in REST API style."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"auth"),": Authentication and permissions-related logic."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bin"),": Test app source code."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"lib"),": Third-party libraries' source files."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"server"),": WebSocket/HTTP communication endpoints."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"spec"),": Integration/API test suite.")),Object(r.b)("h3",{id:"client-library"},"Client library"),Object(r.b)("p",null,"Source: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralino.js"},"github.com/neutralinojs/neutralino.js")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"src/api"),": JavaScript API frontend and implementaion."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"src/browser"),": Browser-related API implementation."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"src/debug"),": Developer mode features."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"src/ws"),": WebSocket client implementaion.")),Object(r.b)("h2",{id:"contribution-guidelines"},"Contribution guidelines"),Object(r.b)("p",null,"Before, contributing to the codebase, please check the following things."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Discuss the feature/improvement/bug-fix with the Neutralinojs team via GitHub discussions."),Object(r.b)("li",{parentName:"ul"},"Get familiar with the code style. There is no specific code style guide yet, but, the codebase inherits\nsome guidelines from the ",Object(r.b)("a",{parentName:"li",href:"https://google.github.io/styleguide/cppguide.html"},"Google C++ code style guide"),"."),Object(r.b)("li",{parentName:"ul"},"Become familiar with all modules in the codebase."),Object(r.b)("li",{parentName:"ul"},"Avoid adding new features to only one platform.")),Object(r.b)("p",null,"Thanks for helping us to make Neutralinojs better!"))}p.isMDXComponent=!0}}]);