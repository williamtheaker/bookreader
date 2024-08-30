"use strict";(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[479],{4611:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,i(n.key),n)}}function i(t){var e=function(t,e){if("object"!=n(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==n(e)?e:e+""}r(2675),r(9463),r(2259),r(5700),r(8706),r(3792),r(2712),r(9572),r(8130),r(3851),r(875),r(6099),r(825),r(888),r(7495),r(7764),r(5440),r(2953),r(8408),r(2008),r(113),r(3418),r(8598),r(2062),r(4782),r(2010),r(5506),r(3921),r(9432),r(8781),r(1761),r(5746),r(2762),r(3500),r(3296),r(7208);var s,u=function(){return t=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.bookReaderOptions=e,this.urlSchema=[{name:"page",position:"path",default:"n0"},{name:"mode",position:"path",default:"2up"},{name:"search",position:"path",deprecated_for:"q"},{name:"q",position:"query_param"},{name:"sort",position:"query_param"},{name:"view",position:"query_param"},{name:"admin",position:"query_param"}],this.urlState={},this.urlMode=this.bookReaderOptions.urlMode||"hash",this.urlHistoryBasePath=this.bookReaderOptions.urlHistoryBasePath||"/",this.urlLocationPollId=null,this.oldLocationHash=null,this.oldUserHash=null},e=[{key:"urlStateToUrlString",value:function(t){var e=this,r=new URLSearchParams,n={};Object.keys(t).forEach((function(o){var a,i,s,u,l=e.urlSchema.find((function(t){return t.name===o}));null!==(a=l)&&void 0!==a&&a.deprecated_for&&(l=e.urlSchema.find((function(t){return t.name===l.deprecated_for}))),"path"==(null===(i=l)||void 0===i?void 0:i.position)?n[null===(s=l)||void 0===s?void 0:s.name]=t[o]:r.append((null===(u=l)||void 0===u?void 0:u.name)||o,t[o])}));var o=this.urlSchema.filter((function(t){return"path"==t.position})).map((function(t){return n[t.name]?"".concat(t.name,"/").concat(encodeURIComponent(n[t.name])):""})).join("/"),a="".concat(o.replace(/\/+/g,"/").replace(/\/+$/,"")),i="".concat(a,"?").concat(r.toString());return r.toString()?i:"".concat(a)}},{key:"urlStringToUrlState",value:function(t){var e={},r=new URL(t,"http://example.com"),n=Object.fromEntries(r.searchParams.entries()),a=r.pathname.match(/[^\\/]+\/[^\\/]+/g),i=a?Object.fromEntries(a.map((function(t){return t.split("/")}))):{},s=function(t,e){return Object.keys(t).some((function(t){return t==e}))};return this.urlSchema.filter((function(t){return"path"==t.position})).forEach((function(t){var r=s(i,t.name),n=s(t,"deprecated_for")&&r;if(r||n){var o=n?t.deprecated_for:t.name;e[o]=decodeURIComponent(i[t.name])}})),Object.entries(n).forEach((function(t){var r=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,s=[],u=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(s.push(n.value),s.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return s}}(t,e)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,2),n=r[0],a=r[1];e[n]=a})),e}},{key:"setUrlParam",value:function(t,e){this.urlState[t]=e,this.pushToAddressBar()}},{key:"removeUrlParam",value:function(t){delete this.urlState[t],this.pushToAddressBar()}},{key:"getUrlParam",value:function(t){return this.urlState[t]}},{key:"pushToAddressBar",value:function(){var t=this.urlStateToUrlString(this.urlState),e="/"!==t?t:"";if("history"==this.urlMode)if(window.history&&window.history.replaceState){var r="".concat(this.urlHistoryBasePath).concat(e).trim().replace(/(\/+)/g,"/");try{window.history.replaceState({},null,r)}catch(t){this.urlMode="hash"}}else this.options.urlMode="hash";"hash"==this.urlMode&&window.location.replace("#"+e),this.oldLocationHash=t}},{key:"listenForHashChanges",value:function(){var t=this;this.oldLocationHash=window.location.hash.substr(1),this.urlLocationPollId&&(clearInterval(this.urlLocationPollId),this.urlLocationPollId=null),this.urlLocationPollId=setInterval((function(){var e=window.location.hash.substr(1);e!=t.oldLocationHash&&(t.urlState=t.urlStringToUrlState(e))}),500)}},{key:"pullFromAddressBar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location,e="history"===this.urlMode?t.pathname.substr(this.urlHistoryBasePath.length)+t.search:t.hash.substr(1);this.urlState=this.urlStringToUrlState(e)}}],e&&a(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,h(n.key),n)}}function h(t){var e=function(t,e){if("object"!=l(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==l(e)?e:e+""}function f(t,e,r){return e=m(e),function(t,e){if(e&&("object"==l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,p()?Reflect.construct(e,r||[],m(t).constructor):e.apply(t,r))}function p(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(p=function(){return!!t})()}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},d.apply(null,arguments)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}r(1669).extend(BookReader.defaultOptions,{enableUrlPlugin:!0,bookId:"",defaults:null,updateWindowTitle:!1,urlMode:"hash",urlHistoryBasePath:"/",urlTrackedParams:["page","search","mode","region","highlight","view"],urlTrackIndex0:!1}),BookReader.prototype.setup=(s=BookReader.prototype.setup,function(t){s.call(this,t),this.bookId=t.bookId,this.defaults=t.defaults,this.locationPollId=null,this.oldLocationHash=null,this.oldUserHash=null}),BookReader.prototype.init=function(t){return function(){var e=this;this.options.enableUrlPlugin&&(this.bind(BookReader.eventNames.PostInit,(function(){var t=e.options,r=t.updateWindowTitle,n=t.urlMode;r&&(document.title=e.shortTitle(e.bookTitle,50)),"hash"===n&&e.urlStartLocationPolling()})),this.bind(BookReader.eventNames.fragmentChange,this.urlUpdateFragment.bind(this))),t.call(this)}}(BookReader.prototype.init),BookReader.prototype.shortTitle=function(t){return this.bookTitle.length<t?this.bookTitle:"".concat(this.bookTitle.substr(0,t-3),"...")},BookReader.prototype.urlStartLocationPolling=function(){var t=this;this.oldLocationHash=this.urlReadFragment(),this.locationPollId&&(clearInterval(this.locationPollId),this.locationPollId=null),this.locationPollId=setInterval((function(){var e=t.urlReadFragment();if(e!=t.oldLocationHash&&e!=t.oldUserHash){var r=t.paramsFromFragment(e),n=function(){return t.updateFromParams(r)};t.trigger(BookReader.eventNames.stop),t.animating?(t.autoStop&&t.autoStop(),t.animationFinishedCallback=n):n(),t.oldUserHash=e}}),500)},BookReader.prototype.urlUpdateFragment=function(){var t=this.paramsFromCurrent(),e=this.options,r=e.urlTrackIndex0,n=e.urlTrackedParams;r||void 0===t.index||0!==t.index||(delete t.index,delete t.page);var o=n.reduce((function(e,r){return r in t&&(e[r]=t[r]),e}),{}),a=this.fragmentFromParams(o,this.options.urlMode),i=this.urlReadFragment(),s=this.getLocationSearch(),u=this.queryStringFromParams(o,s,this.options.urlMode);if(i!==a||s!==u){if("history"===this.options.urlMode)if(window.history&&window.history.replaceState){var l=this.options.urlHistoryBasePath.replace(/\/+$/,""),c=""===a?"":"/".concat(a),h="".concat(l).concat(c).concat(u);try{window.history.replaceState({},null,h),this.oldLocationHash=a+u}catch(t){this.options.urlMode="hash"}}else this.options.urlMode="hash";if("hash"===this.options.urlMode){var f=this.urlParamsFiltersOnlySearch(this.readQueryString());window.location.replace("#"+a+f),this.oldLocationHash=a+f}}},BookReader.prototype.urlParamsFiltersOnlySearch=function(t){var e=new URLSearchParams(t);return e.has("q")?"?".concat(new URLSearchParams({q:e.get("q")})):""},BookReader.prototype.urlReadFragment=function(){var t=this.options,e=t.urlMode,r=t.urlHistoryBasePath;return"history"===e?window.location.pathname.substr(r.length):window.location.hash.substr(1)},BookReader.prototype.urlReadHashFragment=function(){return window.location.hash.substr(1)};var v=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(e,BookReader),r=e,(n=[{key:"init",value:function(){var t=this;this.options.enableUrlPlugin&&(this.urlPlugin=new u(this.options),this.bind(BookReader.eventNames.PostInit,(function(){"hash"===t.options.urlMode&&t.urlPlugin.listenForHashChanges()}))),d(m(e.prototype),"init",this).call(this)}}])&&c(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}();window.BookReader=v},6098:function(t,e,r){var n=r(9504),o=2147483647,a=/[^\0-\u007E]/,i=/[.\u3002\uFF0E\uFF61]/g,s="Overflow: input needs wider integers to process",u=RangeError,l=n(i.exec),c=Math.floor,h=String.fromCharCode,f=n("".charCodeAt),p=n([].join),d=n([].push),m=n("".replace),g=n("".split),v=n("".toLowerCase),y=function(t){return t+22+75*(t<26)},b=function(t,e,r){var n=0;for(t=r?c(t/700):t>>1,t+=c(t/e);t>455;)t=c(t/35),n+=36;return c(n+36*t/(t+38))},w=function(t){var e=[];t=function(t){for(var e=[],r=0,n=t.length;r<n;){var o=f(t,r++);if(o>=55296&&o<=56319&&r<n){var a=f(t,r++);56320==(64512&a)?d(e,((1023&o)<<10)+(1023&a)+65536):(d(e,o),r--)}else d(e,o)}return e}(t);var r,n,a=t.length,i=128,l=0,m=72;for(r=0;r<t.length;r++)(n=t[r])<128&&d(e,h(n));var g=e.length,v=g;for(g&&d(e,"-");v<a;){var w=o;for(r=0;r<t.length;r++)(n=t[r])>=i&&n<w&&(w=n);var P=v+1;if(w-i>c((o-l)/P))throw new u(s);for(l+=(w-i)*P,i=w,r=0;r<t.length;r++){if((n=t[r])<i&&++l>o)throw new u(s);if(n===i){for(var S=l,k=36;;){var R=k<=m?1:k>=m+26?26:k-m;if(S<R)break;var U=S-R,B=36-R;d(e,h(y(R+U%B))),S=c(U/B),k+=36}d(e,h(y(S))),m=b(l,P,v===g),l=0,v++}}l++,i++}return p(e,"")};t.exports=function(t){var e,r,n=[],o=g(m(v(t),i,"."),".");for(e=0;e<o.length;e++)r=o[e],d(n,l(a,r)?"xn--"+w(r):r);return p(n,".")}},706:function(t,e,r){var n=r(350).PROPER,o=r(9039),a=r(7452);t.exports=function(t){return o((function(){return!!a[t]()||"​᠎"!=="​᠎"[t]()||n&&a[t].name!==t}))}},5506:function(t,e,r){var n=r(6518),o=r(2357).entries;n({target:"Object",stat:!0},{entries:function(t){return o(t)}})},3921:function(t,e,r){var n=r(6518),o=r(2652),a=r(4659);n({target:"Object",stat:!0},{fromEntries:function(t){var e={};return o(t,(function(t,r){a(e,t,r)}),{AS_ENTRIES:!0}),e}})},2762:function(t,e,r){var n=r(6518),o=r(3802).trim;n({target:"String",proto:!0,forced:r(706)("trim")},{trim:function(){return o(this)}})},5806:function(t,e,r){r(7764);var n,o=r(6518),a=r(3724),i=r(7416),s=r(4475),u=r(6080),l=r(9504),c=r(6840),h=r(2106),f=r(679),p=r(9297),d=r(4213),m=r(7916),g=r(7680),v=r(8183).codeAt,y=r(6098),b=r(655),w=r(687),P=r(2812),S=r(8406),k=r(1181),R=k.set,U=k.getterFor("URL"),B=S.URLSearchParams,H=S.getState,L=s.URL,O=s.TypeError,j=s.parseInt,q=Math.floor,I=Math.pow,T=l("".charAt),A=l(/./.exec),F=l([].join),C=l(1..toString),_=l([].pop),E=l([].push),M=l("".replace),x=l([].shift),z=l("".split),$=l("".slice),N=l("".toLowerCase),D=l([].unshift),J="Invalid scheme",W="Invalid host",Q="Invalid port",G=/[a-z]/i,K=/[\d+-.a-z]/i,V=/\d/,X=/^0x/i,Y=/^[0-7]+$/,Z=/^\d+$/,tt=/^[\da-f]+$/i,et=/[\0\t\n\r #%/:<>?@[\\\]^|]/,rt=/[\0\t\n\r #/:<>?@[\\\]^|]/,nt=/^[\u0000-\u0020]+/,ot=/(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,at=/[\t\n\r]/g,it=function(t){var e,r,n,o;if("number"==typeof t){for(e=[],r=0;r<4;r++)D(e,t%256),t=q(t/256);return F(e,".")}if("object"==typeof t){for(e="",n=function(t){for(var e=null,r=1,n=null,o=0,a=0;a<8;a++)0!==t[a]?(o>r&&(e=n,r=o),n=null,o=0):(null===n&&(n=a),++o);return o>r&&(e=n,r=o),e}(t),r=0;r<8;r++)o&&0===t[r]||(o&&(o=!1),n===r?(e+=r?":":"::",o=!0):(e+=C(t[r],16),r<7&&(e+=":")));return"["+e+"]"}return t},st={},ut=d({},st,{" ":1,'"':1,"<":1,">":1,"`":1}),lt=d({},ut,{"#":1,"?":1,"{":1,"}":1}),ct=d({},lt,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),ht=function(t,e){var r=v(t,0);return r>32&&r<127&&!p(e,t)?t:encodeURIComponent(t)},ft={ftp:21,file:null,http:80,https:443,ws:80,wss:443},pt=function(t,e){var r;return 2===t.length&&A(G,T(t,0))&&(":"===(r=T(t,1))||!e&&"|"===r)},dt=function(t){var e;return t.length>1&&pt($(t,0,2))&&(2===t.length||"/"===(e=T(t,2))||"\\"===e||"?"===e||"#"===e)},mt=function(t){return"."===t||"%2e"===N(t)},gt={},vt={},yt={},bt={},wt={},Pt={},St={},kt={},Rt={},Ut={},Bt={},Ht={},Lt={},Ot={},jt={},qt={},It={},Tt={},At={},Ft={},Ct={},_t=function(t,e,r){var n,o,a,i=b(t);if(e){if(o=this.parse(i))throw new O(o);this.searchParams=null}else{if(void 0!==r&&(n=new _t(r,!0)),o=this.parse(i,null,n))throw new O(o);(a=H(new B)).bindURL(this),this.searchParams=a}};_t.prototype={type:"URL",parse:function(t,e,r){var o,a,i,s,u,l=this,c=e||gt,h=0,f="",d=!1,v=!1,y=!1;for(t=b(t),e||(l.scheme="",l.username="",l.password="",l.host=null,l.port=null,l.path=[],l.query=null,l.fragment=null,l.cannotBeABaseURL=!1,t=M(t,nt,""),t=M(t,ot,"$1")),t=M(t,at,""),o=m(t);h<=o.length;){switch(a=o[h],c){case gt:if(!a||!A(G,a)){if(e)return J;c=yt;continue}f+=N(a),c=vt;break;case vt:if(a&&(A(K,a)||"+"===a||"-"===a||"."===a))f+=N(a);else{if(":"!==a){if(e)return J;f="",c=yt,h=0;continue}if(e&&(l.isSpecial()!==p(ft,f)||"file"===f&&(l.includesCredentials()||null!==l.port)||"file"===l.scheme&&!l.host))return;if(l.scheme=f,e)return void(l.isSpecial()&&ft[l.scheme]===l.port&&(l.port=null));f="","file"===l.scheme?c=Ot:l.isSpecial()&&r&&r.scheme===l.scheme?c=bt:l.isSpecial()?c=kt:"/"===o[h+1]?(c=wt,h++):(l.cannotBeABaseURL=!0,E(l.path,""),c=At)}break;case yt:if(!r||r.cannotBeABaseURL&&"#"!==a)return J;if(r.cannotBeABaseURL&&"#"===a){l.scheme=r.scheme,l.path=g(r.path),l.query=r.query,l.fragment="",l.cannotBeABaseURL=!0,c=Ct;break}c="file"===r.scheme?Ot:Pt;continue;case bt:if("/"!==a||"/"!==o[h+1]){c=Pt;continue}c=Rt,h++;break;case wt:if("/"===a){c=Ut;break}c=Tt;continue;case Pt:if(l.scheme=r.scheme,a===n)l.username=r.username,l.password=r.password,l.host=r.host,l.port=r.port,l.path=g(r.path),l.query=r.query;else if("/"===a||"\\"===a&&l.isSpecial())c=St;else if("?"===a)l.username=r.username,l.password=r.password,l.host=r.host,l.port=r.port,l.path=g(r.path),l.query="",c=Ft;else{if("#"!==a){l.username=r.username,l.password=r.password,l.host=r.host,l.port=r.port,l.path=g(r.path),l.path.length--,c=Tt;continue}l.username=r.username,l.password=r.password,l.host=r.host,l.port=r.port,l.path=g(r.path),l.query=r.query,l.fragment="",c=Ct}break;case St:if(!l.isSpecial()||"/"!==a&&"\\"!==a){if("/"!==a){l.username=r.username,l.password=r.password,l.host=r.host,l.port=r.port,c=Tt;continue}c=Ut}else c=Rt;break;case kt:if(c=Rt,"/"!==a||"/"!==T(f,h+1))continue;h++;break;case Rt:if("/"!==a&&"\\"!==a){c=Ut;continue}break;case Ut:if("@"===a){d&&(f="%40"+f),d=!0,i=m(f);for(var w=0;w<i.length;w++){var P=i[w];if(":"!==P||y){var S=ht(P,ct);y?l.password+=S:l.username+=S}else y=!0}f=""}else if(a===n||"/"===a||"?"===a||"#"===a||"\\"===a&&l.isSpecial()){if(d&&""===f)return"Invalid authority";h-=m(f).length+1,f="",c=Bt}else f+=a;break;case Bt:case Ht:if(e&&"file"===l.scheme){c=qt;continue}if(":"!==a||v){if(a===n||"/"===a||"?"===a||"#"===a||"\\"===a&&l.isSpecial()){if(l.isSpecial()&&""===f)return W;if(e&&""===f&&(l.includesCredentials()||null!==l.port))return;if(s=l.parseHost(f))return s;if(f="",c=It,e)return;continue}"["===a?v=!0:"]"===a&&(v=!1),f+=a}else{if(""===f)return W;if(s=l.parseHost(f))return s;if(f="",c=Lt,e===Ht)return}break;case Lt:if(!A(V,a)){if(a===n||"/"===a||"?"===a||"#"===a||"\\"===a&&l.isSpecial()||e){if(""!==f){var k=j(f,10);if(k>65535)return Q;l.port=l.isSpecial()&&k===ft[l.scheme]?null:k,f=""}if(e)return;c=It;continue}return Q}f+=a;break;case Ot:if(l.scheme="file","/"===a||"\\"===a)c=jt;else{if(!r||"file"!==r.scheme){c=Tt;continue}switch(a){case n:l.host=r.host,l.path=g(r.path),l.query=r.query;break;case"?":l.host=r.host,l.path=g(r.path),l.query="",c=Ft;break;case"#":l.host=r.host,l.path=g(r.path),l.query=r.query,l.fragment="",c=Ct;break;default:dt(F(g(o,h),""))||(l.host=r.host,l.path=g(r.path),l.shortenPath()),c=Tt;continue}}break;case jt:if("/"===a||"\\"===a){c=qt;break}r&&"file"===r.scheme&&!dt(F(g(o,h),""))&&(pt(r.path[0],!0)?E(l.path,r.path[0]):l.host=r.host),c=Tt;continue;case qt:if(a===n||"/"===a||"\\"===a||"?"===a||"#"===a){if(!e&&pt(f))c=Tt;else if(""===f){if(l.host="",e)return;c=It}else{if(s=l.parseHost(f))return s;if("localhost"===l.host&&(l.host=""),e)return;f="",c=It}continue}f+=a;break;case It:if(l.isSpecial()){if(c=Tt,"/"!==a&&"\\"!==a)continue}else if(e||"?"!==a)if(e||"#"!==a){if(a!==n&&(c=Tt,"/"!==a))continue}else l.fragment="",c=Ct;else l.query="",c=Ft;break;case Tt:if(a===n||"/"===a||"\\"===a&&l.isSpecial()||!e&&("?"===a||"#"===a)){if(".."===(u=N(u=f))||"%2e."===u||".%2e"===u||"%2e%2e"===u?(l.shortenPath(),"/"===a||"\\"===a&&l.isSpecial()||E(l.path,"")):mt(f)?"/"===a||"\\"===a&&l.isSpecial()||E(l.path,""):("file"===l.scheme&&!l.path.length&&pt(f)&&(l.host&&(l.host=""),f=T(f,0)+":"),E(l.path,f)),f="","file"===l.scheme&&(a===n||"?"===a||"#"===a))for(;l.path.length>1&&""===l.path[0];)x(l.path);"?"===a?(l.query="",c=Ft):"#"===a&&(l.fragment="",c=Ct)}else f+=ht(a,lt);break;case At:"?"===a?(l.query="",c=Ft):"#"===a?(l.fragment="",c=Ct):a!==n&&(l.path[0]+=ht(a,st));break;case Ft:e||"#"!==a?a!==n&&("'"===a&&l.isSpecial()?l.query+="%27":l.query+="#"===a?"%23":ht(a,st)):(l.fragment="",c=Ct);break;case Ct:a!==n&&(l.fragment+=ht(a,ut))}h++}},parseHost:function(t){var e,r,n;if("["===T(t,0)){if("]"!==T(t,t.length-1))return W;if(e=function(t){var e,r,n,o,a,i,s,u=[0,0,0,0,0,0,0,0],l=0,c=null,h=0,f=function(){return T(t,h)};if(":"===f()){if(":"!==T(t,1))return;h+=2,c=++l}for(;f();){if(8===l)return;if(":"!==f()){for(e=r=0;r<4&&A(tt,f());)e=16*e+j(f(),16),h++,r++;if("."===f()){if(0===r)return;if(h-=r,l>6)return;for(n=0;f();){if(o=null,n>0){if(!("."===f()&&n<4))return;h++}if(!A(V,f()))return;for(;A(V,f());){if(a=j(f(),10),null===o)o=a;else{if(0===o)return;o=10*o+a}if(o>255)return;h++}u[l]=256*u[l]+o,2!=++n&&4!==n||l++}if(4!==n)return;break}if(":"===f()){if(h++,!f())return}else if(f())return;u[l++]=e}else{if(null!==c)return;h++,c=++l}}if(null!==c)for(i=l-c,l=7;0!==l&&i>0;)s=u[l],u[l--]=u[c+i-1],u[c+--i]=s;else if(8!==l)return;return u}($(t,1,-1)),!e)return W;this.host=e}else if(this.isSpecial()){if(t=y(t),A(et,t))return W;if(e=function(t){var e,r,n,o,a,i,s,u=z(t,".");if(u.length&&""===u[u.length-1]&&u.length--,(e=u.length)>4)return t;for(r=[],n=0;n<e;n++){if(""===(o=u[n]))return t;if(a=10,o.length>1&&"0"===T(o,0)&&(a=A(X,o)?16:8,o=$(o,8===a?1:2)),""===o)i=0;else{if(!A(10===a?Z:8===a?Y:tt,o))return t;i=j(o,a)}E(r,i)}for(n=0;n<e;n++)if(i=r[n],n===e-1){if(i>=I(256,5-e))return null}else if(i>255)return null;for(s=_(r),n=0;n<r.length;n++)s+=r[n]*I(256,3-n);return s}(t),null===e)return W;this.host=e}else{if(A(rt,t))return W;for(e="",r=m(t),n=0;n<r.length;n++)e+=ht(r[n],st);this.host=e}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"===this.scheme},includesCredentials:function(){return""!==this.username||""!==this.password},isSpecial:function(){return p(ft,this.scheme)},shortenPath:function(){var t=this.path,e=t.length;!e||"file"===this.scheme&&1===e&&pt(t[0],!0)||t.length--},serialize:function(){var t=this,e=t.scheme,r=t.username,n=t.password,o=t.host,a=t.port,i=t.path,s=t.query,u=t.fragment,l=e+":";return null!==o?(l+="//",t.includesCredentials()&&(l+=r+(n?":"+n:"")+"@"),l+=it(o),null!==a&&(l+=":"+a)):"file"===e&&(l+="//"),l+=t.cannotBeABaseURL?i[0]:i.length?"/"+F(i,"/"):"",null!==s&&(l+="?"+s),null!==u&&(l+="#"+u),l},setHref:function(t){var e=this.parse(t);if(e)throw new O(e);this.searchParams.update()},getOrigin:function(){var t=this.scheme,e=this.port;if("blob"===t)try{return new Et(t.path[0]).origin}catch(t){return"null"}return"file"!==t&&this.isSpecial()?t+"://"+it(this.host)+(null!==e?":"+e:""):"null"},getProtocol:function(){return this.scheme+":"},setProtocol:function(t){this.parse(b(t)+":",gt)},getUsername:function(){return this.username},setUsername:function(t){var e=m(b(t));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var r=0;r<e.length;r++)this.username+=ht(e[r],ct)}},getPassword:function(){return this.password},setPassword:function(t){var e=m(b(t));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var r=0;r<e.length;r++)this.password+=ht(e[r],ct)}},getHost:function(){var t=this.host,e=this.port;return null===t?"":null===e?it(t):it(t)+":"+e},setHost:function(t){this.cannotBeABaseURL||this.parse(t,Bt)},getHostname:function(){var t=this.host;return null===t?"":it(t)},setHostname:function(t){this.cannotBeABaseURL||this.parse(t,Ht)},getPort:function(){var t=this.port;return null===t?"":b(t)},setPort:function(t){this.cannotHaveUsernamePasswordPort()||(""===(t=b(t))?this.port=null:this.parse(t,Lt))},getPathname:function(){var t=this.path;return this.cannotBeABaseURL?t[0]:t.length?"/"+F(t,"/"):""},setPathname:function(t){this.cannotBeABaseURL||(this.path=[],this.parse(t,It))},getSearch:function(){var t=this.query;return t?"?"+t:""},setSearch:function(t){""===(t=b(t))?this.query=null:("?"===T(t,0)&&(t=$(t,1)),this.query="",this.parse(t,Ft)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var t=this.fragment;return t?"#"+t:""},setHash:function(t){""!==(t=b(t))?("#"===T(t,0)&&(t=$(t,1)),this.fragment="",this.parse(t,Ct)):this.fragment=null},update:function(){this.query=this.searchParams.serialize()||null}};var Et=function(t){var e=f(this,Mt),r=P(arguments.length,1)>1?arguments[1]:void 0,n=R(e,new _t(t,!1,r));a||(e.href=n.serialize(),e.origin=n.getOrigin(),e.protocol=n.getProtocol(),e.username=n.getUsername(),e.password=n.getPassword(),e.host=n.getHost(),e.hostname=n.getHostname(),e.port=n.getPort(),e.pathname=n.getPathname(),e.search=n.getSearch(),e.searchParams=n.getSearchParams(),e.hash=n.getHash())},Mt=Et.prototype,xt=function(t,e){return{get:function(){return U(this)[t]()},set:e&&function(t){return U(this)[e](t)},configurable:!0,enumerable:!0}};if(a&&(h(Mt,"href",xt("serialize","setHref")),h(Mt,"origin",xt("getOrigin")),h(Mt,"protocol",xt("getProtocol","setProtocol")),h(Mt,"username",xt("getUsername","setUsername")),h(Mt,"password",xt("getPassword","setPassword")),h(Mt,"host",xt("getHost","setHost")),h(Mt,"hostname",xt("getHostname","setHostname")),h(Mt,"port",xt("getPort","setPort")),h(Mt,"pathname",xt("getPathname","setPathname")),h(Mt,"search",xt("getSearch","setSearch")),h(Mt,"searchParams",xt("getSearchParams")),h(Mt,"hash",xt("getHash","setHash"))),c(Mt,"toJSON",(function(){return U(this).serialize()}),{enumerable:!0}),c(Mt,"toString",(function(){return U(this).serialize()}),{enumerable:!0}),L){var zt=L.createObjectURL,$t=L.revokeObjectURL;zt&&c(Et,"createObjectURL",u(zt,L)),$t&&c(Et,"revokeObjectURL",u($t,L))}w(Et,"URL"),o({global:!0,constructor:!0,forced:!i,sham:!a},{URL:Et})},3296:function(t,e,r){r(5806)},7208:function(t,e,r){var n=r(6518),o=r(9565);n({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return o(URL.prototype.toString,this)}})}},function(t){t(t.s=4611)}]);
//# sourceMappingURL=plugin.url.js.map