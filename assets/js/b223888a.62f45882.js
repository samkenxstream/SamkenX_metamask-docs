"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3791],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(7462),n=a(7294),l=a(6010),o=a(2466),s=a(6550),i=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,u]=h({queryString:a,groupId:r}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),f=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var f=a(2389);const b="tabList__CuJ",v="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==s&&(p(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",v,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=k(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",b)},n.createElement(w,(0,r.Z)({},e,t)),n.createElement(g,(0,r.Z)({},e,t)))}function x(e){const t=(0,f.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},5718:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),o=a(5162);const s={},i="Use MetaMask SDK",u={unversionedId:"how-to/use-sdk/index",id:"how-to/use-sdk/index",title:"Use MetaMask SDK",description:"MetaMask SDK provides a reliable, secure, and seamless connection",source:"@site/wallet/how-to/use-sdk/index.md",sourceDirName:"how-to/use-sdk",slug:"/how-to/use-sdk/",permalink:"/wallet/how-to/use-sdk/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"walletSidebar",previous:{title:"How to",permalink:"/wallet/category/how-to"},next:{title:"Use MetaMask SDK with JavaScript",permalink:"/wallet/how-to/use-sdk/javascript/"}},c={},p=[{value:"How it works",id:"how-it-works",level:2}],d={toc:p};function m(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-metamask-sdk"},"Use MetaMask SDK"),(0,n.kt)("p",null,"MetaMask SDK provides a reliable, secure, and seamless ",(0,n.kt)("a",{parentName:"p",href:"/wallet/concepts/sdk-connections"},"connection"),"\nfrom your dapp to a MetaMask wallet client.\nIt supports the following dapp platforms:"),(0,n.kt)("div",{class:"cards"},(0,n.kt)("div",{class:"card"},(0,n.kt)("div",{class:"card__header"},(0,n.kt)("h3",null,(0,n.kt)("a",{href:"javascript"},"JavaScript"))),(0,n.kt)("div",{class:"card__body"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/react"},"React")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/pure-js"},"Pure JavaScript")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/other-web-frameworks"},"Other web frameworks")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/react-native"},"React Native")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/nodejs"},"Node.js")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/electron"},"Electron"))))),(0,n.kt)("div",{class:"card"},(0,n.kt)("div",{class:"card__header"},(0,n.kt)("h3",null,(0,n.kt)("a",{href:"mobile"},"Mobile"))),(0,n.kt)("div",{class:"card__body"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"javascript/react-native"},"React Native")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"mobile/ios"},"Native iOS")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"mobile/android"},"Native Android")," (coming soon)")))),(0,n.kt)("div",{class:"card"},(0,n.kt)("div",{class:"card__header"},(0,n.kt)("h3",null,(0,n.kt)("a",{href:"gaming"},"Gaming"))),(0,n.kt)("div",{class:"card__body"},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"gaming/unity"},"Unity")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"gaming/unreal-engine"},"Unreal Engine")," (coming soon)"))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"MetaMask SDK uses the ",(0,n.kt)("a",{parentName:"p",href:"/wallet/reference/provider-api"},"Ethereum provider")," that developers are\nalready used to, so existing dapps work out of the box with the SDK.")),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"The following are examples of how a user experiences a dapp with the SDK installed, on various platforms."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{label:"Desktop",value:"tab1",mdxType:"TabItem"},(0,n.kt)("p",null,"When a user accesses your web dapp on a desktop browser that doesn't have the MetaMask extension\ninstalled, a popup appears that prompts the user to either install the MetaMask extension or connect\nto MetaMask Mobile using a QR code."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SDK desktop browser example",src:a(4934).Z,width:"1726",height:"1034"})),(0,n.kt)("p",null,"You can try the\n",(0,n.kt)("a",{parentName:"p",href:"https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/test-dapp-2/"},"hosted test dapp with the SDK installed"),".\nYou can also download the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/examples/tree/main/metamask-with/metamask-sdk-create-react-app"},"React project example"),".\nInstall the example using ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn")," and run it using ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn start"),".")),(0,n.kt)(o.Z,{label:"Mobile",value:"tab2",mdxType:"TabItem"},(0,n.kt)("p",null,"When a user accesses your mobile dapp, or web dapp on a mobile browser, the SDK automatically\ndeeplinks to MetaMask Mobile (or if the user doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SDK mobile browser example",src:a(4994).Z,width:"334",height:"696"}))),(0,n.kt)("p",null,"You can try the\n",(0,n.kt)("a",{parentName:"p",href:"https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/test-dapp-2/"},"hosted test dapp with the SDK installed"),".\nYou can also download the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/examples/tree/main/metamask-with/metamask-sdk-create-react-app"},"React project example"),".\nInstall the example using ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn")," and run it using ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn start"),".")),(0,n.kt)(o.Z,{label:"Node.js",value:"tab3",mdxType:"TabItem"},(0,n.kt)("p",null,"When a user accesses your Node.js dapp, the SDK renders a QR code on the console which users can\nscan with their MetaMask Mobile app."),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SDK Node.js example",src:a(5712).Z,width:"871",height:"947"}))),(0,n.kt)("p",null,"You can download the\n",(0,n.kt)("a",{parentName:"p",href:"https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/downloads/nodejs_v0.0.1_beta5.zip"},"Node.js example"),".\nInstall the example using ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn")," and run it using ",(0,n.kt)("inlineCode",{parentName:"p"},"node ."),"."))))}m.isMDXComponent=!0},4934:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/sdk-desktop-browser-08daeb300da22c1fda2f50d7b63026a9.gif"},4994:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/sdk-mobile-browser-3a2065bba036d5910206697edcd2a298.gif"},5712:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/sdk-nodejs-53d5a8860c4b7d48902adc99a64a668f.gif"}}]);