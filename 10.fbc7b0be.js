(window.webpackJsonp=window.webpackJsonp||[]).push([[10,11],{101:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(s){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),o};e.exports=n,e.exports.default=n},102:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var a=t[1],n=t[2],r=t[3];if(a&&r){var l=[],o=(a=parseInt(a))<(r=parseInt(r))?1:-1;"-"!=n&&".."!=n&&"\u2025"!=n||(r+=o);for(var s=a;s!=r;s+=o)l.push(s);return l}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(75),o=a(68),s=a(22),c=a(76),i=a(2),u=a(69),m=a(83),p=a(85),d=a(86),h=a(87),y=a(84),g=a(70),b=a(72),f=a(54),v=a.n(f);const k=(e,t)=>"link"===e.type?((e,t)=>{const a=e=>e.endsWith("/")?e:e+"/";return a(e)===a(t)})(e.href,t):"category"===e.type&&e.items.some((e=>k(e,t)));function j({item:e,onItemClick:t,collapsible:a,activePath:l,...o}){const{items:s,label:c}=e,m=k(e,l),p=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(m),[d,h]=Object(n.useState)((()=>!!a&&(!m&&e.collapsed)));Object(n.useEffect)((()=>{m&&!p&&d&&h(!1)}),[m,p,d]);const y=Object(n.useCallback)((e=>{e.preventDefault(),h((e=>!e))}),[h]);return 0===s.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:c},r.a.createElement("a",Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&m,[v.a.menuLinkText]:!a}),onClick:a?y:void 0,href:a?"#!":void 0},o),c),r.a.createElement("ul",{className:"menu__list"},s.map((e=>r.a.createElement(O,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:l})))))}function E({item:e,onItemClick:t,activePath:a,collapsible:n,...l}){const{href:o,label:s}=e,c=k(e,a);return r.a.createElement("li",{className:"menu__list-item",key:s},r.a.createElement(g.a,Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--active":c}),to:o},Object(b.a)(o)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},l),s))}function O(e){switch(e.item.type){case"category":return r.a.createElement(j,e);case"link":default:return r.a.createElement(E,e)}}var N=function({path:e,sidebar:t,sidebarCollapsible:a=!0}){const[l,s]=Object(n.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:c="",hideOnScroll:b=!1}={}}={}}={},isClient:f}=Object(o.a)(),{logoLink:k,logoLinkProps:j,logoImageUrl:E,logoAlt:N}=Object(h.a)(),{isAnnouncementBarClosed:C}=Object(m.a)(),{scrollY:x}=Object(y.a)();Object(p.a)(l);const _=Object(d.a)();return Object(n.useEffect)((()=>{_===d.b.desktop&&s(!1)}),[_]),r.a.createElement("div",{className:Object(u.a)(v.a.sidebar,{[v.a.sidebarWithHideableNavbar]:b})},b&&r.a.createElement(g.a,Object(i.a)({tabIndex:-1,className:v.a.sidebarLogo,to:k},j),null!=E&&r.a.createElement("img",{key:f,src:E,alt:N}),null!=c&&r.a.createElement("strong",null,c)),r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive",v.a.menu,{"menu--show":l,[v.a.menuWithAnnouncementBar]:!C&&0===x})},r.a.createElement("button",{"aria-label":l?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{s(!l)}},l?r.a.createElement("span",{className:Object(u.a)(v.a.sidebarMenuIcon,v.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:v.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},t.map((t=>r.a.createElement(O,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),s(!1)},collapsible:a,activePath:e}))))))},C={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},x={Prism:a(20).a,theme:C};function _(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var P=/\r\n|\r|\n/,L=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},T=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},S=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=w({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=w({},a,{backgroundColor:null}),r};function B(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var I=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),_(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?S(e.theme,e.language):void 0;return t.themeDict=a})),_(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=w({},B(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?w({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),_(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var o=n?{display:"inline-block"}:{},s=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(s))}})),_(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,o=w({},B(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?w({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,o=0,s=[],c=[s];o>-1;){for(;(l=n[o]++)<r[o];){var i=void 0,u=t[o],m=a[o][l];if("string"==typeof m?(u=o>0?u:["plain"],i=m):(u=T(u,m.type),m.alias&&(u=T(u,m.alias)),i=m.content),"string"==typeof i){var p=i.split(P),d=p.length;s.push({types:u,content:p[0]});for(var h=1;h<d;h++)L(s),c.push(s=[]),s.push({types:u,content:p[h]})}else o++,t.push(u),a.push(i),n.push(0),r.push(i.length)}o--,t.pop(),a.pop(),n.pop(),r.pop()}return L(s),c}(void 0!==o?t.tokenize(n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component),M=a(101),D=a.n(M),A=a(102),$=a.n(A),R={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},W=a(78);var F=()=>{const{siteConfig:{themeConfig:{prism:e={}}}}=Object(o.a)(),{isDarkTheme:t}=Object(W.a)(),a=e.theme||R,n=e.darkTheme||a;return t?n:a},z=a(55),J=a.n(z);const U=/{([\d,-]+)}/,H=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},Y=/title=".*"/;var q=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:l={}}}}=Object(o.a)(),[s,c]=Object(n.useState)(!1),[m,p]=Object(n.useState)(!1);Object(n.useEffect)((()=>{p(!0)}),[]);const d=Object(n.useRef)(null);let h=[],y="";const g=F();if(a&&U.test(a)){const e=a.match(U)[1];h=$.a.parse(e).filter((e=>e>0))}a&&Y.test(a)&&(y=a.match(Y)[0].split("title=")[1].replace(/"+/g,""));let b=t&&t.replace(/language-/,"");!b&&l.defaultLanguage&&(b=l.defaultLanguage);let f=e.replace(/\n$/,"");if(0===h.length&&void 0!==b){let t="";const a=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return H(["js","jsBlock"]);case"jsx":case"tsx":return H(["js","jsBlock","jsx"]);case"html":return H(["js","jsBlock","html"]);case"python":case"py":return H(["python"]);default:return H()}})(b),n=e.replace(/\n$/,"").split("\n");let r;for(let e=0;e<n.length;){const l=e+1,o=n[e].match(a);if(null!==o){switch(o.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":t+=l+",";break;case"highlight-start":r=l;break;case"highlight-end":t+=`${r}-${l-1},`}n.splice(e,1)}else e+=1}h=$.a.parse(t),f=n.join("\n")}const v=()=>{D()(f),c(!0),setTimeout((()=>c(!1)),2e3)};return r.a.createElement(I,Object(i.a)({},x,{key:String(m),theme:g,code:f,language:b}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:l})=>r.a.createElement(r.a.Fragment,null,y&&r.a.createElement("div",{style:t,className:J.a.codeBlockTitle},y),r.a.createElement("div",{className:J.a.codeBlockContent},r.a.createElement("button",{ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(u.a)(J.a.copyButton,{[J.a.copyButtonWithTitle]:y}),onClick:v},s?"Copied":"Copy"),r.a.createElement("div",{tabIndex:0,className:Object(u.a)(e,J.a.codeBlock,{[J.a.codeBlockWithTitle]:y})},r.a.createElement("div",{className:J.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return h.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(i.a)({key:t},a),e.map(((e,t)=>r.a.createElement("span",Object(i.a)({key:t},l({token:e,key:t}))))))}))))))))},G=(a(56),a(57)),K=a.n(G);var Q=e=>function({id:t,...a}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:n=!1}={}}={}}={}}=Object(o.a)();return t?r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(u.a)("anchor",{[K.a.enhancedAnchor]:!n}),id:t}),a.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#")):r.a.createElement(e,a)},V=a(58),X=a.n(V);var Z={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?r.a.createElement(q,e):r.a.createElement("code",e):t},a:e=>r.a.createElement(g.a,e),pre:e=>r.a.createElement("div",Object(i.a)({className:X.a.mdxCodeBlock},e)),h1:Q("h1"),h2:Q("h2"),h3:Q("h3"),h4:Q("h4"),h5:Q("h5"),h6:Q("h6")},ee=a(80),te=a(73),ae=a(77),ne=a(59),re=a.n(ne);function le({version:e,isLast:t}){const a=t?[e,"latest"]:[e];return r.a.createElement(ae.a,null,r.a.createElement("meta",{name:"docsearch:version",content:a.join(",")}))}function oe({currentDocRoute:e,versionMetadata:t,children:a}){var n,s;const{siteConfig:i,isClient:u}=Object(o.a)(),{permalinkToSidebar:m,docsSidebars:p,version:d,isLast:h}=t,y=m[e.path],g=p[y];return r.a.createElement(r.a.Fragment,null,r.a.createElement(le,{version:d,isLast:h}),r.a.createElement(c.a,{key:u},r.a.createElement("div",{className:re.a.docPage},g&&r.a.createElement("div",{className:re.a.docSidebarContainer,role:"complementary"},r.a.createElement(N,{key:y,sidebar:g,path:e.path,sidebarCollapsible:null===(n=null===(s=i.themeConfig)||void 0===s?void 0:s.sidebarCollapsible)||void 0===n||n})),r.a.createElement("main",{className:re.a.docMainContainer},r.a.createElement(l.a,{components:Z},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,l=t.find((e=>Object(te.matchPath)(n.pathname,e)));return l?r.a.createElement(oe,{currentDocRoute:l,versionMetadata:a},Object(s.a)(t)):r.a.createElement(ee.default,e)}},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(76);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);