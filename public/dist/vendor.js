/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F){'use strict';function O(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.6/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function xa(a){if(null==a||Wa(a))return!1;if(K(a)||I(a)||G&&a instanceof G)return!0;
var b="length"in Object(a)&&a.length;return Q(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function q(a,b,d){var c,e;if(a)if(E(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(K(a)||xa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(rc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)sa.call(a,c)&&b.call(d,a[c],c,a);return a}function sc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function tc(a){return function(b,d){a(d,b)}}function Yd(){return++pb}function Qb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(J(g)||E(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&J(n)?ha(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Rb(n)?a[m]=n.clone():(J(a[m])||(a[m]=K(n)?[]:{}),Qb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function P(a){return Qb(a,ya.call(arguments,1),!1)}function Zd(a){return Qb(a,ya.call(arguments,1),!0)}function $(a){return parseInt(a,10)}function Sb(a,b){return P(Object.create(a),b)}function C(){}function Ya(a){return a}function ca(a){return function(){return a}}function uc(a){return E(a.toString)&&a.toString!==ja}function y(a){return"undefined"===typeof a}function v(a){return"undefined"!==
typeof a}function J(a){return null!==a&&"object"===typeof a}function rc(a){return null!==a&&"object"===typeof a&&!vc(a)}function I(a){return"string"===typeof a}function Q(a){return"number"===typeof a}function ha(a){return"[object Date]"===ja.call(a)}function E(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===ja.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ea(a){return"boolean"===typeof a}function $d(a){return a&&Q(a.length)&&
ae.test(ja.call(a))}function Rb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function be(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ta(a){return L(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function oa(a,b){function d(a,b){var d=b.$$hashKey,e;if(K(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(rc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)sa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!J(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Wa(a)||Za(a))throw za("cpws");var b=!1,c=e(a);void 0===c&&(c=K(a)?[]:Object.create(vc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c}function e(a){switch(ja.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer));
case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(E(a.cloneNode))return a.cloneNode(!0)}var f=[],
g=[];if(b){if($d(b)||"[object ArrayBuffer]"===ja.call(b))throw za("cpta");if(a===b)throw za("cpi");K(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});f.push(a);g.push(b);return d(a,b)}return c(a)}function fa(a,b){if(K(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(J(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function na(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&
"object"==d)if(K(a)){if(!K(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!na(a[c],b[c]))return!1;return!0}}else{if(ha(a))return ha(b)?na(a.getTime(),b.getTime()):!1;if(Xa(a))return Xa(b)?a.toString()==b.toString():!1;if(Za(a)||Za(b)||Wa(a)||Wa(b)||K(b)||ha(b)||Xa(b))return!1;d=S();for(c in a)if("$"!==c.charAt(0)&&!E(a[c])){if(!na(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&v(b[c])&&!E(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(ya.call(b,
d))}function bb(a,b){var d=2<arguments.length?ya.call(arguments,2):[];return!E(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,ab(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function ce(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&F.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!y(a))return Q(b)||(b=b?2:null),JSON.stringify(a,ce,
b)}function wc(a){return I(a)?JSON.parse(a):a}function xc(a,b){a=a.replace(de,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Tb(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=xc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ua(a){a=G(a).clone();try{a.empty()}catch(b){}var d=G("<div>").append(a).html();try{return a[0].nodeType===Na?L(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+L(b)})}catch(c){return L(d)}}
function yc(a){try{return decodeURIComponent(a)}catch(b){}}function zc(a){var b={};q((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=yc(e),v(e)&&(f=v(f)?yc(f):!0,sa.call(b,e)?K(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Ub(a){var b=[];q(a,function(a,c){K(a)?q(a,function(a){b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))}):b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))});return b.length?b.join("&"):""}
function qb(a){return ia(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ia(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ee(a,b){var d,c,e=Oa.length;for(c=0;c<e;++c)if(d=Oa[c]+b,I(d=a.getAttribute(d)))return d;return null}function fe(a,b){var d,c,e={};q(Oa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});
q(Oa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==ee(d,"strict-di"),b(d,c?[c]:[],e))}function Ac(a,b,d){J(d)||(d={});d=P({strictDi:!1},d);var c=function(){a=G(a);if(a.injector()){var c=a[0]===F.document?"document":ua(a);throw za("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=db(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;F&&e.test(F.name)&&(d.debugInfoEnabled=!0,F.name=F.name.replace(e,""));if(F&&!f.test(F.name))return c();F.name=F.name.replace(f,"");da.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};E(da.resumeDeferredBootstrap)&&da.resumeDeferredBootstrap()}function ge(){F.name=
"NG_ENABLE_DEBUG_INFO!"+F.name;F.location.reload()}function he(a){a=da.element(a).injector();if(!a)throw za("test");return a.get("$$testability")}function Bc(a,b){b=b||"_";return a.replace(ie,function(a,c){return(c?b:"")+a.toLowerCase()})}function je(){var a;if(!Cc){var b=rb();(Y=y(b)?F.jQuery:b?F[b]:void 0)&&Y.fn.on?(G=Y,P(Y.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),a=Y.cleanData,Y.cleanData=function(b){for(var c,
e=0,f;null!=(f=b[e]);e++)(c=Y._data(f,"events"))&&c.$destroy&&Y(f).triggerHandler("$destroy");a(b)}):G=T;da.element=G;Cc=!0}}function sb(a,b,d){if(!a)throw za("areq",b||"?",d||"required");return a}function Qa(a,b,d){d&&K(a)&&(a=a[a.length-1]);sb(E(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ra(a,b){if("hasOwnProperty"===a)throw za("badname",b);}function Dc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=
b[g],a&&(a=(e=a)[c]);return!d&&E(a)?bb(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=G(ya.call(a,0,e))),c.push(b);return c||a}function S(){return Object.create(null)}function ke(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=O("$injector"),c=O("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||O;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&
(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return U}}function b(a,d){return function(b,e){e&&E(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return U}}if(!g)throw d("nomod",f);var c=[],e=[],p=[],x=a("$injector","invoke","push",e),U={_invokeQueue:c,_configBlocks:e,_runBlocks:p,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide",
"constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:x,run:function(a){p.push(a);return this}};h&&x(h);return U})}})}function le(a){P(a,{bootstrap:Ac,copy:oa,extend:P,merge:Zd,equals:na,element:G,forEach:q,injector:db,noop:C,bind:bb,toJson:cb,fromJson:wc,identity:Ya,isUndefined:y,
isDefined:v,isString:I,isFunction:E,isObject:J,isNumber:Q,isElement:Rb,isArray:K,version:me,isDate:ha,lowercase:L,uppercase:ub,callbacks:{counter:0},getTestability:he,$$minErr:O,$$csp:Fa,reloadWithDebugInfo:ge});Vb=ke(F);Vb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ne});a.provider("$compile",Ec).directive({a:oe,input:Fc,textarea:Fc,form:pe,script:qe,select:re,style:se,option:te,ngBind:ue,ngBindHtml:ve,ngBindTemplate:we,ngClass:xe,ngClassEven:ye,ngClassOdd:ze,ngCloak:Ae,ngController:Be,
ngForm:Ce,ngHide:De,ngIf:Ee,ngInclude:Fe,ngInit:Ge,ngNonBindable:He,ngPluralize:Ie,ngRepeat:Je,ngShow:Ke,ngStyle:Le,ngSwitch:Me,ngSwitchWhen:Ne,ngSwitchDefault:Oe,ngOptions:Pe,ngTransclude:Qe,ngModel:Re,ngList:Se,ngChange:Te,pattern:Gc,ngPattern:Gc,required:Hc,ngRequired:Hc,minlength:Ic,ngMinlength:Ic,maxlength:Jc,ngMaxlength:Jc,ngValue:Ue,ngModelOptions:Ve}).directive({ngInclude:We}).directive(vb).directive(Kc);a.provider({$anchorScroll:Xe,$animate:Ye,$animateCss:Ze,$$animateJs:$e,$$animateQueue:af,
$$AnimateRunner:bf,$$animateAsyncRun:cf,$browser:df,$cacheFactory:ef,$controller:ff,$document:gf,$exceptionHandler:hf,$filter:Lc,$$forceReflow:jf,$interpolate:kf,$interval:lf,$http:mf,$httpParamSerializer:nf,$httpParamSerializerJQLike:of,$httpBackend:pf,$xhrFactory:qf,$location:rf,$log:sf,$parse:tf,$rootScope:uf,$q:vf,$$q:wf,$sce:xf,$sceDelegate:yf,$sniffer:zf,$templateCache:Af,$templateRequest:Bf,$$testability:Cf,$timeout:Df,$window:Ef,$$rAF:Ff,$$jqLite:Gf,$$HashMap:Hf,$$cookieReader:If})}])}function eb(a){return a.replace(Jf,
function(a,d,c,e){return e?c.toUpperCase():c}).replace(Kf,"Moz$1")}function Mc(a){a=a.nodeType;return 1===a||!a||9===a}function Nc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Wb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Lf.exec(a)||["",""])[1].toLowerCase();c=ga[c]||ga._default;d.innerHTML=c[1]+a.replace(Mf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=ab(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});
return e}function Oc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function T(a){if(a instanceof T)return a;var b;I(a)&&(a=V(a),b=!0);if(!(this instanceof T)){if(b&&"<"!=a.charAt(0))throw Xb("nosel");return new T(a)}if(b){b=F.document;var d;a=(d=Nf.exec(a))?[b.createElement(d[1])]:(d=Nc(a,b))?d.childNodes:[]}Pc(this,a)}function Yb(a){return a.cloneNode(!0)}function wb(a,b){b||fb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)fb(d[c])}function Qc(a,
b,d,c){if(v(c))throw Xb("offargs");var e=(c=xb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];v(d)&&$a(c||[],d);v(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};q(b.split(" "),function(a){g(a);yb[a]&&g(yb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function fb(a,b){var d=a.ng339,c=d&&gb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Qc(a)),delete gb[d],a.ng339=void 0))}function xb(a,b){var d=
a.ng339,d=d&&gb[d];b&&!d&&(a.ng339=d=++Of,d=gb[d]={events:{},data:{},handle:void 0});return d}function Zb(a,b,d){if(Mc(a)){var c=v(d),e=!c&&b&&!J(b),f=!b;a=(a=xb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];P(a,b)}}}function zb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Ab(a,b){b&&a.setAttribute&&q(b.split(" "),function(b){a.setAttribute("class",V((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+V(b)+" "," ")))})}function Bb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=V(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",V(d))}}function Pc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Rc(a,b){return Cb(a,"$"+(b||"ngController")+"Controller")}function Cb(a,
b,d){9==a.nodeType&&(a=a.documentElement);for(b=K(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(v(d=G.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Sc(a){for(wb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Db(a,b){b||wb(a);var d=a.parentNode;d&&d.removeChild(a)}function Pf(a,b){b=b||F;if("complete"===b.document.readyState)b.setTimeout(a);else G(b).on("load",a)}function Tc(a,b){var d=Eb[b.toLowerCase()];return d&&Uc[ta(a)]&&d}function Qf(a,b){var d=function(c,
d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(y(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||Rf;1<g&&(f=fa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=
a;return d}function Rf(a,b,d){d.call(a,b)}function Sf(a,b,d){var c=b.relatedTarget;c&&(c===a||Tf.call(a,c))||d.call(a,b)}function Gf(){this.$get=function(){return P(T,{hasClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)}})}}function Ga(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=
d+":"+(b||Yd)():d+":"+a}function Sa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function Vc(a){a=(Function.prototype.toString.call(a)+" ").replace(Uf,"");return a.match(Vf)||a.match(Wf)}function Xf(a){return(a=Vc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function db(a,b){function d(a){return function(b,c){if(J(b))q(b,tc(a));else return a(b,c)}}function c(a,b){Ra(a,"service");if(E(b)||K(b))b=p.instantiate(b);if(!b.$get)throw Ha("pget",a);return n[a+"Provider"]=
b}function e(a,b){return function(){var c=z.invoke(b,this);if(y(c))throw Ha("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){sb(y(a)||K(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{I(a)?(c=Vb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):E(a)?b.push(p.invoke(a)):K(a)?b.push(p.invoke(a)):
Qa(a,"module")}catch(e){throw K(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ha("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=db.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];
if("string"!==typeof l)throw Ha("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);K(a)&&(a=a[a.length-1]);d=11>=Ba?!1:"function"===typeof a&&/^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=K(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,
a))},get:d,annotate:db.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Sa([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ca(b),!1)}),constant:d(function(a,b){Ra(a,"constant");n[a]=b;x[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=z.invoke(d,c);return z.invoke(b,null,
{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){da.isString(b)&&l.push(b);throw Ha("unpr",l.join(" <- "));}),x={},U=h(x,function(a,b){var c=p.get(a+"Provider",b);return z.invoke(c.$get,c,void 0,a)}),z=U;n.$injectorProvider={$get:ca(U)};var r=g(a),z=U.get("$injector");z.strictDi=b;q(r,function(a){a&&z.invoke(a)});return z}function Xe(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,
function(a){if("a"===ta(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;E(c)?c=c():Rb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Q(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=I(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===
b&&""===a||Pf(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;K(a)&&(a=a.join(" "));K(b)&&(b=b.join(" "));return a+" "+b}function Yf(a){I(a)&&(a=a.split(" "));var b=S();q(a,function(a){a.length&&(b[a]=!0)});return b}function Ia(a){return J(a)?a:{}}function Zf(a,b,d,c){function e(a){try{a.apply(null,ya.call(arguments,1))}finally{if(U--,0===U)for(;z.length;)try{z.pop()()}catch(b){d.error(b)}}}function f(){w=null;g();h()}function g(){r=ka();
r=y(r)?null:r;na(r,H)&&(r=H);H=r}function h(){if(u!==k.url()||D!==r)u=k.url(),D=r,q(B,function(a){a(k.url(),r)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,x={};k.isMock=!1;var U=0,z=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){U++};k.notifyWhenNoOutstandingRequests=function(a){0===U?a():z.push(a)};var r,D,u=l.href,t=b.find("base"),w=null,ka=c.history?function(){try{return m.state}catch(a){}}:C;g();D=r;k.url=function(b,d,e){y(e)&&(e=null);
l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=D===e;if(u===b&&(!c.history||f))return k;var h=u&&Ja(u)===Ja(b);u=b;D=e;!c.history||h&&f?(h||(w=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(w=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),D=r);w&&(w=b);return k}return w||l.href.replace(/%27/g,"'")};k.state=function(){return r};var B=[],A=!1,H=null;k.onUrlChange=function(b){if(!A){if(c.history)G(a).on("popstate",f);G(a).on("hashchange",
f);A=!0}B.push(b);return b};k.$$applicationDestroyed=function(){G(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=t.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;U++;c=n(function(){delete x[c];e(a)},b||0);x[c]=!0;return c};k.defer.cancel=function(a){return x[a]?(delete x[a],p(a),e(C),!0):!1}}function df(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new Zf(a,c,b,d)}]}function ef(){this.$get=
function(){function a(a,c){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw O("$cacheFactory")("iid",a);var g=0,h=P({},c,{id:a}),k=S(),l=c&&c.capacity||Number.MAX_VALUE,m=S(),n=null,p=null;return b[a]={put:function(a,b){if(!y(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},
remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=S();g=0;m=S();n=p=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return P({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Af(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Ec(a,b){function d(a,
b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=S();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==L(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!K(b)&&J(b)&&q(b,function(a,
c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,k=be("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=S();this.directive=function z(b,d){Ra(b,"directive");I(b)?(c(b),sb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(f[b],function(f,g){try{var h=a.invoke(f);E(h)?h={compile:ca(h)}:
!h.compile&&h.link&&(h.compile=ca(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);h.restrict=h.restrict||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(k){c(k)}});return d}])),f[b].push(d)):q(b,tc(z));return this};this.component=function(a,b){function c(a){function e(b){return E(b)||K(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Wc(b.controller)||b.controllerAs||"$ctrl",
template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,E(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return v(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(a){return v(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return v(a)?(p=a,this):p};var x=10;this.onChangesTtl=function(a){return arguments.length?(x=a,this):x};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,w,ka,B,A,H){function M(){try{if(!--oa)throw Y=void 0,ea("infchng",x);ka.$apply(function(){for(var a=
0,b=Y.length;a<b;++a)Y[a]();Y=void 0})}finally{oa++}}function Aa(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function R(a,b,c){la.innerHTML="<span "+b+">";b=la.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function N(a,b){try{a.addClass(b)}catch(c){}}function aa(a,b,c,d,e){a instanceof G||(a=G(a));for(var f=/\S+/,g=0,h=a.length;g<h;g++){var k=a[g];k.nodeType===Na&&k.nodeValue.match(f)&&
Oc(k,a[g]=F.document.createElement("span"))}var l=s(a,b,a,c,d,e);aa.$$addScopeClass(a);var m=null;return function(b,c,d){sb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);m||(m=(d=d&&d[0])?"foreignobject"!==ta(d)&&ja.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==m?G(ba(m,G("<div>").append(a).html())):c?Pa.clone.call(a):a;if(g)for(var h in g)d.data("$"+
h+"Controller",g[h].instance);aa.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function s(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,n,u,r;if(p)for(r=Array(c.length),m=0;m<h.length;m+=3)f=h[m],r[f]=c[f];else r=c;m=0;for(n=h.length;m<n;)k=r[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),aa.$$addScopeInfo(G(k),l)):l=a,u=c.transcludeOnThisElement?va(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?va(a,b):null,c(f,l,k,d,u)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k,l,m,n,p,u=0;u<
a.length;u++){k=new Aa;l=$b(a[u],[],k,0===u?d:void 0,e);(f=l.length?Ta(l,a[u],k,b,c,null,[],[],f):null)&&f.scope&&aa.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[u].childNodes)||!m.length?null:s(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(u,f,k),n=!0,p=p||f;f=null}return n?g:null}function va(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}
var e=d.$$slots=S(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?va(a,b.$$slots[f],c):null;return d}function $b(a,b,c,d,e){var f=c.$attr,k;switch(a.nodeType){case 1:Da(b,wa(ta(a)),"E",d,e);for(var l,m,n,p=a.attributes,u=0,r=p&&p.length;u<r;u++){var B=!1,x=!1;l=p[u];k=l.name;m=V(l.value);l=wa(k);if(n=xa.test(l))k=k.replace(Xc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(za))&&Q(l[1])&&(B=k,x=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=wa(k.toLowerCase());f[l]=
k;if(n||!c.hasOwnProperty(l))c[l]=m,Tc(a,l)&&(c[l]=!0);ha(a,b,m,l,n);Da(b,l,"A",d,e,B,x)}a=a.className;J(a)&&(a=a.animVal);if(I(a)&&""!==a)for(;k=h.exec(a);)l=wa(k[2]),Da(b,l,"C",d,e)&&(c[l]=V(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ba)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);$(b,a.nodeValue);break;case 8:try{if(k=g.exec(a.nodeValue))l=wa(k[1]),Da(b,l,"M",d,e)&&(c[l]=V(k[2]))}catch(A){}}b.sort(X);
return b}function Yc(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return G(d)}function O(a,b,c){return function(d,e,f,g,h){e=Yc(e[0],b,c);return a(d,e,f,g,h)}}function ac(a,b,c,d,e,f){var g;return a?aa(b,c,d,e,f):function(){g||(g=aa(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function Ta(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&
(a=O(a,c,d));a.require=t.require;a.directiveName=M;if(B===t||t.$$isolateScope)a=fa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=O(b,c,d));b.require=t.require;b.directiveName=M;if(B===t||t.$$isolateScope)b=fa(b,{isolateScope:!0});k.push(b)}}function n(a,c,e,f,g){function l(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);w&&(e=z);c||(c=w?D.parent():D);if(d){var f=g.$$slots[d];if(f)return f(a,b,e,c,Fb);if(y(f))throw ea("noslot",d,ua(D));}else return g(a,b,e,c,Fb)}var m,p,A,t,H,z,N,D;b===e?(f=d,D=d.$$element):
(D=G(e),f=new Aa(D,d));H=c;B?t=c.$new(!0):u&&(H=c.$parent);g&&(N=l,N.$$boundTransclude=g,N.isSlotFilled=function(a){return!!g.$$slots[a]});r&&(z=$f(D,f,N,r,t,c,B));B&&(aa.$$addScopeInfo(D,t,!0,!(x&&(x===B||x===B.$$originalDirective))),aa.$$addScopeClass(D,!0),t.$$isolateBindings=B.$$isolateBindings,p=ga(c,f,t,t.$$isolateBindings,B),p.removeWatches&&t.$on("$destroy",p.removeWatches));for(m in z){p=r[m];A=z[m];var R=p.$$bindings.bindToController;A.bindingInfo=A.identifier&&R?ga(H,f,A.instance,R,p):
{};var M=A();M!==A.instance&&(A.instance=M,D.data("$"+p.name+"Controller",M),A.bindingInfo.removeWatches&&A.bindingInfo.removeWatches(),A.bindingInfo=ga(H,f,A.instance,R,p))}q(r,function(a,b){var c=a.require;a.bindToController&&!K(c)&&J(c)&&P(z[b].instance,ib(b,c,D,z))});q(z,function(a){var b=a.instance;E(b.$onChanges)&&b.$onChanges(a.bindingInfo.initialChanges);E(b.$onInit)&&b.$onInit();E(b.$onDestroy)&&H.$on("$destroy",function(){b.$onDestroy()})});m=0;for(p=h.length;m<p;m++)A=h[m],ia(A,A.isolateScope?
t:c,D,f,A.require&&ib(A.directiveName,A.require,D,z),N);var Fb=c;B&&(B.template||null===B.templateUrl)&&(Fb=t);a&&a(Fb,e.childNodes,void 0,g);for(m=k.length-1;0<=m;m--)A=k[m],ia(A,A.isolateScope?t:c,D,f,A.require&&ib(A.directiveName,A.require,D,z),N);q(z,function(a){a=a.instance;E(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,u=l.newScopeDirective,r=l.controllerDirectives,B=l.newIsolateScopeDirective,x=l.templateDirective,A=l.nonTlbTranscludeDirective,H=!1,z=!1,w=l.hasElementTranscludeDirective,
N=d.$$element=G(b),t,M,R,ka=e,s,Ca=!1,va=!1,v,C=0,F=a.length;C<F;C++){t=a[C];var I=t.$$start,Ta=t.$$end;I&&(N=Yc(b,I,Ta));R=void 0;if(p>t.priority)break;if(v=t.scope)t.templateUrl||(J(v)?(W("new/isolated scope",B||u,t,N),B=t):W("new/isolated scope",B,t,N)),u=u||t;M=t.name;if(!Ca&&(t.replace&&(t.templateUrl||t.template)||t.transclude&&!t.$$tlb)){for(v=C+1;Ca=a[v++];)if(Ca.transclude&&!Ca.$$tlb||Ca.replace&&(Ca.templateUrl||Ca.template)){va=!0;break}Ca=!0}!t.templateUrl&&t.controller&&(v=t.controller,
r=r||S(),W("'"+M+"' controller",r[M],t,N),r[M]=t);if(v=t.transclude)if(H=!0,t.$$tlb||(W("transclusion",A,t,N),A=t),"element"==v)w=!0,p=t.priority,R=N,N=d.$$element=G(aa.$$createComment(M,d[M])),b=N[0],ca(f,ya.call(R,0),b),R[0].$$parentNode=R[0].parentNode,ka=ac(va,R,e,p,g&&g.name,{nonTlbTranscludeDirective:A});else{var L=S();R=G(Yb(b)).contents();if(J(v)){R=[];var Q=S(),Da=S();q(v,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Q[a]=b;L[b]=null;Da[b]=c});q(N.contents(),function(a){var b=
Q[wa(ta(a))];b?(Da[b]=!0,L[b]=L[b]||[],L[b].push(a)):R.push(a)});q(Da,function(a,b){if(!a)throw ea("reqslot",b);});for(var X in L)L[X]&&(L[X]=ac(va,L[X],e))}N.empty();ka=ac(va,R,e,void 0,void 0,{needsNewScope:t.$$isolateScope||t.$$newScope});ka.$$slots=L}if(t.template)if(z=!0,W("template",x,t,N),x=t,v=E(t.template)?t.template(N,d):t.template,v=ra(v),t.replace){g=t;R=Wb.test(v)?Zc(ba(t.templateNamespace,V(v))):[];b=R[0];if(1!=R.length||1!==b.nodeType)throw ea("tplrt",M,"");ca(f,N,b);F={$attr:{}};v=
$b(b,[],F);var $=a.splice(C+1,a.length-(C+1));(B||u)&&$c(v,B,u);a=a.concat(v).concat($);T(d,F);F=a.length}else N.html(v);if(t.templateUrl)z=!0,W("template",x,t,N),x=t,t.replace&&(g=t),n=Z(a.splice(C,a.length-C),N,d,f,H&&ka,h,k,{controllerDirectives:r,newScopeDirective:u!==t&&u,newIsolateScopeDirective:B,templateDirective:x,nonTlbTranscludeDirective:A}),F=a.length;else if(t.compile)try{s=t.compile(N,d,ka);var Y=t.$$originalDirective||t;E(s)?m(null,bb(Y,s),I,Ta):s&&m(bb(Y,s.pre),bb(Y,s.post),I,Ta)}catch(da){c(da,
ua(N))}t.terminal&&(n.terminal=!0,p=Math.max(p,t.priority))}n.scope=u&&!0===u.scope;n.transcludeOnThisElement=H;n.templateOnThisElement=z;n.transclude=ka;l.hasElementTranscludeDirective=w;return n}function ib(a,b,c,d){var e;if(I(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw ea("ctreq",b,a);}else if(K(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=
ib(a,b[g],c,d);else J(b)&&(e={},q(b,function(b,f){e[f]=ib(a,b,c,d)}));return e||null}function $f(a,b,c,d,e,f,g){var h=S(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"==n&&(n=b[l.name]);m=w(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function $c(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Sb(a[d],{$$isolateScope:b,$$newScope:c})}function Da(b,e,g,h,k,l,m){if(e===k)return null;k=null;if(f.hasOwnProperty(e)){var n;
e=a.get(e+"Directive");for(var p=0,u=e.length;p<u;p++)try{if(n=e[p],(y(h)||h>n.priority)&&-1!=n.restrict.indexOf(g)){l&&(n=Sb(n,{$$start:l,$$end:m}));if(!n.$$bindings){var r=n,B=n,A=n.name,x={isolateScope:null,bindToController:null};J(B.scope)&&(!0===B.bindToController?(x.bindToController=d(B.scope,A,!0),x.isolateScope={}):x.isolateScope=d(B.scope,A,!1));J(B.bindToController)&&(x.bindToController=d(B.bindToController,A,!0));if(J(x.bindToController)){var t=B.controller,H=B.controllerAs;if(!t)throw ea("noctrl",
A);if(!Wc(t,H))throw ea("noident",A);}var N=r.$$bindings=x;J(N.isolateScope)&&(n.$$isolateBindings=N.isolateScope)}b.push(n);k=n}}catch(w){c(w)}}return k}function Q(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function T(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(N(e,b),a["class"]=(a["class"]?
a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Z(a,b,c,d,f,g,h,k){var l=[],m,n,p=b[0],B=a.shift(),r=Sb(B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),A=E(B.templateUrl)?B.templateUrl(b,c):B.templateUrl,x=B.templateNamespace;b.empty();e(A).then(function(e){var u,t;e=ra(e);if(B.replace){e=Wb.test(e)?Zc(ba(x,V(e))):[];u=e[0];if(1!=e.length||1!==u.nodeType)throw ea("tplrt",
B.name,A);e={$attr:{}};ca(d,b,u);var H=$b(u,[],e);J(B.scope)&&$c(H,!0);a=H.concat(a);T(c,e)}else u=p,b.html(e);a.unshift(r);m=Ta(a,u,c,f,b,B,g,h,k);q(d,function(a,c){a==u&&(d[c]=b[0])});for(n=s(b[0].childNodes,f);l.length;){e=l.shift();t=l.shift();var z=l.shift(),D=l.shift(),H=b[0];if(!e.$$destroyed){if(t!==p){var w=t.className;k.hasElementTranscludeDirective&&B.replace||(H=Yb(u));ca(z,G(t),H);N(G(H),w)}t=m.transcludeOnThisElement?va(e,m.transclude,D):D;m(n,e,H,d,t)}}l=null});return function(a,b,
c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=va(b,m.transclude,e)),m(n,b,c,d,a)))}}function X(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function W(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ea("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function $(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&aa.$$addBindingClass(a);
return function(a,c){var e=c.parent();b||aa.$$addBindingClass(e);aa.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ba(a,b){a=L(a||"html");switch(a){case "svg":case "math":var c=F.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function da(a,b){if("srcdoc"==b)return B.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return B.RESOURCE_URL}function ha(a,
c,d,e,f){var g=da(a,e);f=k[e]||f;var h=b(d,!0,g,f);if(h){if("multiple"===e&&"select"===ta(a))throw ea("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,k){c=k.$$observers||(k.$$observers=S());if(m.test(e))throw ea("nodomevents");var l=k[e];l!==d&&(h=l&&b(l,!0,g,f),d=l);h&&(k[e]=h(a),(c[e]||(c[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||a).$watch(h,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)}))}}}})}}function ca(a,b,c){var d=b[0],
e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=F.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);G.hasData(d)&&(G.data(c,G.data(d)),G(d).off("$destroy"));G.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function fa(a,b){return P(function(){return a.apply(null,arguments)},
a,b)}function ia(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function ga(a,c,d,e,f){function g(b,c,e){E(d.$onChanges)&&c!==e&&(Y||(a.$$postDigest(M),Y=[]),m||(m={},Y.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Gb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,u,B,A,x;switch(e.mode){case "@":p||sa.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(I(a)||Ea(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;u=c[m];I(u)?d[h]=
b(u)(a):Ea(u)&&(d[h]=u);l[h]=new Gb(bc,d[h]);break;case "=":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;B=n(c[m]);x=B.literal?na:function(a,b){return a===b||a!==a&&b!==b};A=B.assign||function(){u=d[h]=B(a);throw ea("nonassign",c[m],m,f.name);};u=d[h]=B(a);p=function(b){x(b,d[h])||(x(b,u)?A(a,b=d[h]):d[h]=b);return u=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,B.literal);k.push(p);break;case "<":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;
B=n(c[m]);var H=d[h]=B(a);l[h]=new Gb(bc,d[h]);p=a.$watch(B,function(a,b){if(b===a){if(b===H)return;b=H}g(h,a,b);d[h]=a},B.literal);k.push(p);break;case "&":B=c.hasOwnProperty(m)?n(c[m]):C;if(B===C&&p)break;d[h]=function(b){return B(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var ma=/^\w/,la=F.document.createElement("div"),oa=x,Y;Aa.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&A.addClass(this.$$element,a)},$removeClass:function(a){a&&
0<a.length&&A.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ad(a,b);c&&c.length&&A.addClass(this.$$element,c);(c=ad(b,a))&&c.length&&A.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Tc(this.$$element[0],a),g=bd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Bc(a,"-"));f=ta(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=H(b,"src"===a);else if("img"===
f&&"srcset"===a&&v(b)){for(var f="",g=V(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+H(V(g[m]),!0),f=f+(" "+V(g[m+1]));g=V(g[2*l]).split(/\s/);f+=H(V(g[0]),!0);2===g.length&&(f+=" "+V(g[1]));this[a]=b=f}!1!==d&&(null===b||y(b)?this.$$element.removeAttr(e):ma.test(e)?this.$$element.attr(e,b):R(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,
d=c.$$observers||(c.$$observers=S()),e=d[a]||(d[a]=[]);e.push(b);ka.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||y(c[a])||b(c[a])});return function(){$a(e,b)}}};var pa=b.startSymbol(),qa=b.endSymbol(),ra="{{"==pa&&"}}"==qa?Ya:function(a){return a.replace(/\{\{/g,pa).replace(/}}/g,qa)},xa=/^ngAttr[A-Z]/,za=/^(.+)Start$/;aa.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];K(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:C;aa.$$addBindingClass=p?function(a){N(a,"ng-binding")}:
C;aa.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:C;aa.$$addScopeClass=p?function(a,b){N(a,b?"ng-isolate-scope":"ng-scope")}:C;aa.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return F.document.createComment(c)};return aa}]}function Gb(a,b){this.previousValue=a;this.currentValue=b}function wa(a){return eb(a.replace(Xc,""))}function ad(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=
c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function Zc(a){a=G(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&ag.call(a,b,1);return a}function Wc(a,b){if(b&&I(b))return b;if(I(a)){var d=cd.exec(a);if(d)return d[3]}}function ff(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ra(b,"controller");J(b)?P(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,
b,c,d){if(!a||!J(a.$scope))throw O("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&I(k)&&(n=k);if(I(f)){k=f.match(cd);if(!k)throw bg("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Dc(g.$scope,m,!0)||(b?Dc(c,m,!0):void 0);Qa(f,m,!0)}if(h)return h=(K(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,l,m||f.name),P(function(){var a=d.invoke(f,l,g,m);a!==l&&(J(a)||E(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=
d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function gf(){this.$get=["$window",function(a){return G(a.document)}]}function hf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function cc(a){return J(a)?ha(a)?a.toISOString():cb(a):a}function nf(){this.$get=function(){return function(a){if(!a)return"";var b=[];sc(a,function(a,c){null===a||y(a)||(K(a)?q(a,function(a){b.push(ia(c)+"="+ia(cc(a)))}):b.push(ia(c)+"="+ia(cc(a))))});return b.join("&")}}}function of(){this.$get=
function(){return function(a){function b(a,e,f){null===a||y(a)||(K(a)?q(a,function(a,c){b(a,e+"["+(J(a)?c:"")+"]")}):J(a)&&!ha(a)?sc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ia(e)+"="+ia(cc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function dc(a,b){if(I(a)){var d=a.replace(cg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(dd))||(c=(c=d.match(dg))&&eg[c[0]].test(d));c&&(a=wc(d))}}return a}function ed(a){var b=S(),d;I(a)?q(a.split("\n"),function(a){d=
a.indexOf(":");var e=L(V(a.substr(0,d)));a=V(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):J(a)&&q(a,function(a,d){var f=L(d),g=V(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function fd(a){var b;return function(d){b||(b=ed(a));return d?(d=b[L(d)],void 0===d&&(d=null),d):b}}function gd(a,b,d,c){if(E(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function mf(){var a=this.defaults={transformResponse:[dc],transformRequest:[function(a){return J(a)&&"[object File]"!==ja.call(a)&&"[object Blob]"!==
ja.call(a)&&"[object FormData]"!==ja.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:fa(ec),put:fa(ec),patch:fa(ec)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return v(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return v(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",
function(e,f,g,h,k,l){function m(b){function c(a){var b=P({},a);b.data=gd(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};q(a,function(a,e){E(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!J(b))throw O("$http")("badreq",b);if(!I(b.url))throw O("$http")("badreq",b.url);var f=P({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=
a.headers,d=P({},b.headers),f,g,h,c=P({},c.common,c[L(b.method)]);a:for(f in c){g=L(f);for(h in d)if(L(h)===g)continue a;d[f]=c[f]}return e(d,fa(b))}(b);f.method=ub(f.method);f.paramSerializer=I(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=gd(b.data,fd(d),void 0,b.transformRequest);y(e)&&q(d,function(a,b){"content-type"===L(b)&&delete d[b]});y(b.withCredentials)&&!y(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,e).then(c,
c)},void 0],h=k.when(f);for(q(U,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=g.shift();var m=g.shift(),h=h.then(b,m)}d?(h.success=function(a){Qa(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Qa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=hd("success"),h.error=hd("error"));return h}function n(c,d){function g(a){if(a){var c=
{};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){n(c,a,d,e)}H&&(200<=a&&300>a?H.put(R,[a,c,ed(d),e]):H.remove(R));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?B.resolve:B.reject)({data:a,status:b,headers:fd(d),config:c,statusText:e})}function w(a){n(a.data,a.status,fa(a.headers()),a.statusText)}function U(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,
1)}var B=k.defer(),A=B.promise,H,M,Aa=c.headers,R=p(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);A.then(U,U);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(H=J(c.cache)?c.cache:J(a.cache)?a.cache:x);H&&(M=H.get(R),v(M)?M&&E(M.then)?M.then(w,w):K(M)?n(M[1],M[0],fa(M[2]),M[3]):n(M,200,{},"OK"):H.put(R,A));y(M)&&((M=id(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(Aa[c.xsrfHeaderName||a.xsrfHeaderName]=M),e(c.method,R,d,l,Aa,c.timeout,c.withCredentials,
c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return A}function p(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var x=g("$http");a.paramSerializer=I(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var U=[];q(c,function(a){U.unshift(I(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){q(arguments,function(a){m[a]=function(b,c){return m(P({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){m[a]=function(b,
c,d){return m(P({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function qf(){this.$get=function(){return function(){return new F.XMLHttpRequest}}}function pf(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return fg(a,c,a.defer,b.angular.callbacks,d[0])}]}function fg(a,b,d,c,e){function f(a,b,d){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",
m,!1);e.body.removeChild(f);f=null;var g=-1,x="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),x=a.type,g="error"===a.type?404:200);d&&d(g,x)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,x,U,z){function r(){t&&t();w&&w.abort()}function D(b,c,e,f,g){v(B)&&d.cancel(B);t=w=null;b(c,e,f,g);a.$$completeOutstandingRequest(C)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==L(e)){var u="_"+(c.counter++).toString(36);
c[u]=function(a){c[u].data=a;c[u].called=!0};var t=f(h.replace("JSON_CALLBACK","angular.callbacks."+u),u,function(a,b){D(l,a,c[u].data,"",b);c[u]=C})}else{var w=b(e,h);w.open(e,h,!0);q(m,function(a,b){v(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==pa(h).protocol?404:0);D(l,c,b,w.getAllResponseHeaders(),a)};e=function(){D(l,-1,null,null,"")};w.onerror=e;w.onabort=e;q(U,function(a,
b){w.addEventListener(b,a)});q(z,function(a,b){w.upload.addEventListener(b,a)});p&&(w.withCredentials=!0);if(x)try{w.responseType=x}catch(ka){if("json"!==x)throw ka;}w.send(y(k)?null:k)}if(0<n)var B=d(r,n);else n&&E(n.then)&&n.then(r)}}function kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,
b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,n,p){function D(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var d;if(p&&!v(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=cb(a)}d=a}return d}catch(g){c(Ka.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var u;k||(k=g(f),u=ca(k),u.exp=f,u.expressions=[],u.$$watchDelegate=h);return u}p=!!p;var t,w,q=0,B=[],A=[];u=f.length;for(var H=[],M=[];q<
u;)if(-1!=(t=f.indexOf(a,q))&&-1!=(w=f.indexOf(b,t+l)))q!==t&&H.push(g(f.substring(q,t))),q=f.substring(t+l,w),B.push(q),A.push(d(q,D)),q=w+m,M.push(H.length),H.push("");else{q!==u&&H.push(g(f.substring(q)));break}n&&1<H.length&&Ka.throwNoconcat(f);if(!k||B.length){var Aa=function(a){for(var b=0,c=B.length;b<c;b++){if(p&&y(a[b]))return;H[M[b]]=a[b]}return H.join("")};return P(function(a){var b=0,d=B.length,e=Array(d);try{for(;b<d;b++)e[b]=A[b](a);return Aa(e)}catch(g){c(Ka.interr(f,g))}},{exp:f,expressions:B,
$$watchDelegate:function(a,b){var c;return a.$watchGroup(A,function(d,e){var f=Aa(d);E(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function lf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,x):f(r)}var p=4<arguments.length,x=p?ya.call(arguments,4):
[],q=b.setInterval,z=b.clearInterval,r=0,D=v(m)&&!m,u=(D?c:d).defer(),t=u.promise;l=v(l)?l:0;t.$$intervalId=q(function(){D?e.defer(n):a.$evalAsync(n);u.notify(r++);0<l&&r>=l&&(u.resolve(r),z(t.$$intervalId),delete g[t.$$intervalId]);D||a.$apply()},k);g[t.$$intervalId]=u;return t}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function fc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
qb(a[b]);return a.join("/")}function jd(a,b){var d=pa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=$(d.port)||gg[d.protocol]||null}function kd(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=pa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=zc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function la(a,b){if(0===b.lastIndexOf(a,0))return b.substr(a.length)}function Ja(a){var b=
a.indexOf("#");return-1==b?a:a.substr(0,b)}function jb(a){return a.replace(/(#.+)|#$/,"$1")}function gc(a,b,d){this.$$html5=!0;d=d||"";jd(a,this);this.$$parse=function(a){var d=la(b,a);if(!I(d))throw Hb("ipthprfx",a,b);kd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Ub(this.$$search),d=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;v(f=la(a,c))?(g=f,g=v(f=la(d,f))?b+(la("/",f)||f):a+g):v(f=la(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function hc(a,b,d){jd(a,this);this.$$parse=function(c){var e=la(a,c)||la(b,c),f;y(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",y(e)&&(a=c,this.replace())):(f=la(d,e),y(f)&&(f=e));kd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.lastIndexOf(e,0)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=
Ub(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ja(a)==Ja(b)?(this.$$parse(b),!0):!1}}function ld(a,b,d){this.$$html5=!0;hc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ja(c)?f=c:(g=la(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Ub(this.$$search),
e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Ib(a){return function(){return this[a]}}function md(a,b){return function(d){if(y(d))return this[a];this[a]=b(d);this.$$compose();return this}}function rf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return v(b)?(a=b,this):a};this.html5Mode=function(a){return Ea(a)?(b.enabled=a,this):J(a)?(Ea(a.enabled)&&(b.enabled=a.enabled),Ea(a.requireBase)&&
(b.requireBase=a.requireBase),Ea(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw Hb("nobase");p=n.substring(0,n.indexOf("/",
n.indexOf("//")+2))+(m||"/");m=e.history?gc:ld}else p=Ja(n),m=hc;var x=p.substr(0,Ja(p).lastIndexOf("/")+1);l=new m(p,x,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var q=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=G(a.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");J(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=
pa(h.animVal).href);q.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});jb(l.absUrl())!=jb(n)&&c.url(l.absUrl(),!0);var z=!0;c.onUrlChange(function(a,b){y(la(x,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=jb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=
e,h(c,!1,e)):(z=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=jb(c.url()),b=jb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(z||m)z=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function sf(){var a=!0,b=this;this.debugEnabled=function(b){return v(b)?
(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),
debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Ua(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw ba("isecfld",b);return a}function hg(a){return a+""}function qa(a,b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a.window===a)throw ba("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ba("isecdom",b);if(a===Object)throw ba("isecobj",b);}return a}function nd(a,
b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a===ig||a===jg||a===kg)throw ba("isecff",b);}}function Jb(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw ba("isecaf",b);}function lg(a,b){return"undefined"!==typeof a?a:b}function od(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Z(a,b){var d,c;switch(a.type){case s.Program:d=!0;q(a.body,function(a){Z(a.expression,b);d=
d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:Z(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:Z(a.left,b);Z(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:Z(a.left,b);Z(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:Z(a.test,
b);Z(a.alternate,b);Z(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:Z(a.object,b);a.computed&&Z(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){Z(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});
a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:Z(a.left,b);Z(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){Z(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){Z(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});
a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function pd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function qd(a){return a.type===s.Identifier||a.type===s.MemberExpression}function rd(a){if(1===a.body.length&&qd(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function sd(a){return 0===
a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function td(a,b){this.astBuilder=a;this.$filter=b}function ud(a,b){this.astBuilder=a;this.$filter=b}function Kb(a){return"constructor"==a}function ic(a){return E(a.valueOf)?a.valueOf():mg.call(a)}function tf(){var a=S(),b=S(),d={"true":!0,"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=
function(a,b){c=a;e=b;return this};this.$get=["$filter",function(f){function g(c,d,e){var g,k,A;e=e||D;switch(typeof c){case "string":A=c=c.trim();var H=e?b:a;g=H[A];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?r:z;var q=new jc(g);g=(new kc(q,f,g)).parse(c);g.constant?g.$$watchDelegate=p:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));H[A]=g}return x(g,d);case "function":return x(c,d);default:return x(C,d)}}function h(a){function b(c,d,e,f){var g=
D;D=!0;try{return a(c,d,e,f)}finally{D=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ic(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,
void 0,[b]),h=b&&ic(b));return g},b,c,e)}for(var l=[],m=[],n=0,p=f.length;n<p;n++)l[n]=k,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))m[c]=h,l[c]=h&&ic(h)}b&&(g=d(a,void 0,void 0,m));return g},b,c,e)}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;E(b)&&b.apply(this,arguments);v(a)&&d.$$postDigest(function(){v(f)&&e()})},c)}function n(a,b,c,d){function e(a){var b=!0;q(a,function(a){v(a)||(b=
!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;E(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function p(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function x(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return v(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:
b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var U=Fa().noUnsafeEval,z={csp:U,expensiveChecks:!1,literals:oa(d),isIdentifierStart:E(c)&&c,isIdentifierContinue:E(e)&&e},r={csp:U,expensiveChecks:!0,literals:oa(d),isIdentifierStart:E(c)&&c,isIdentifierContinue:E(e)&&e},D=!1;g.$$runningExpensiveChecks=function(){return D};return g}]}function vf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return vd(function(b){a.$evalAsync(b)},b)}]}function wf(){this.$get=
["$browser","$exceptionHandler",function(a,b){return vd(function(b){a.defer(b)},b)}]}function vd(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{E(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}
function f(){this.promise=new d}var g=O("$q",TypeError);P(d.prototype,{then:function(a,b,c){if(y(a)&&y(b)&&y(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});P(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?
this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(J(a)||E(a))g=a&&a.then;E(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=
2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(E(a)?a(c):c)}catch(h){b(h)}}})}});var h=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{E(c)&&(d=c())}catch(e){return h(e,!1)}return d&&E(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},l=function(a,b,c,d){var e=
new f;e.resolve(a);return e.promise.then(b,c,d)},m=function(a){if(!E(a))throw g("norslvr",a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};m.prototype=d.prototype;m.defer=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};m.reject=function(a){var b=new f;b.reject(a);return b.promise};m.when=l;m.resolve=l;m.all=function(a){var b=new f,c=0,d=K(a)?[]:{};q(a,function(a,e){c++;l(a).then(function(a){d.hasOwnProperty(e)||
(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return m}function Ff(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function uf(){function a(a){function b(){this.$$watchers=
this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=O("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ba&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=
a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(D.$$phase)throw d("inprog",D.$$phase);D.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function x(a,b,c){do a.$$listenerCount[c]-=
b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function z(){for(;w.length;)try{w.shift()()}catch(a){f(a)}e=null}function r(){null===e&&(e=h.defer(function(){D.$apply(z)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=
d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;E(b)||(l.fn=C);k||(k=h.$$watchers=[]);k.unshift(l);p(this,1);return function(){0<=$a(k,l)&&p(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&
b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!y(e)){if(J(e))if(xa(e))for(f!==n&&(f=n,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==
p&&(f=p={},u=0,l++);a=0;for(b in e)sa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)sa.call(e,b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},r=!0,u=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(J(e))if(xa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)sa.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,k,l,m,p,r,x,q=b,w,y=[],C,F;n("$digest");h.$$checkUrlChange();this===D&&null!==e&&(h.defer.cancel(e),z());c=null;do{x=!1;w=this;for(p=0;p<u.length;p++){try{F=u[p],F.scope.$eval(F.expression,F.locals)}catch(G){f(G)}c=null}u.length=0;a:do{if(p=w.$$watchers)for(r=p.length;r--;)try{if(a=p[r])if(m=a.get,(g=m(w))!==(k=a.last)&&!(a.eq?na(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))x=!0,c=a,a.last=a.eq?oa(g,null):g,l=a.fn,l(g,k===s?g:k,w),5>q&&(C=4-q,y[C]||(y[C]=[]),y[C].push({msg:E(a.exp)?
"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){x=!1;break a}}catch(I){f(I)}if(!(p=w.$$watchersCount&&w.$$childHead||w!==this&&w.$$nextSibling))for(;w!==this&&!(p=w.$$nextSibling);)w=w.$parent}while(w=p);if((x||u.length)&&!q--)throw D.$$phase=null,d("infdig",b,y);}while(x||u.length);for(D.$$phase=null;v<t.length;)try{t[v++]()}catch(J){f(J)}t.length=v=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===
D&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)x(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=C;this.$on=this.$watch=this.$watchGroup=
function(){return C};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){D.$$phase||u.length||h.defer(function(){u.length&&D.$digest()});u.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){t.push(a)},$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{D.$$phase=null}}catch(b){f(b)}finally{try{D.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&w.push(b);
a=g(a);r()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,x(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=
e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=ab([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,
1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var D=new m,u=D.$$asyncQueue=[],t=D.$$postDigestQueue=[],w=D.$$applyAsyncQueue=[],v=0;return D}]}function ne(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return v(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return v(a)?(b=a,this):b};
this.$get=function(){return function(d,c){var e=c?b:a,f;f=pa(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function ng(a){if("self"===a)return a;if(I(a)){if(-1<a.indexOf("***"))throw ra("iwcard",a);a=wd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ra("imatcher");}function xd(a){var b=[];v(a)&&q(a,function(a){b.push(ng(a))});return b}function yf(){this.SCE_CONTEXTS=ma;var a=["self"],b=[];this.resourceUrlWhitelist=
function(b){arguments.length&&(a=xd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=xd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?id(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ra("unsafe");
};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ra("icontext",a,b);if(null===b||y(b)||""===b)return b;if("string"!==typeof b)throw ra("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||y(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===ma.RESOURCE_URL){var g=
pa(e.toString()),n,p,x=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){x=!0;break}if(x)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){x=!1;break}if(x)return e;throw ra("insecurl",e.toString());}if(d===ma.HTML)return f(e);throw ra("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function xf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ba)throw ra("iequirks");var c=fa(ma);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;q(ma,function(a,b){var d=L(b);c[eb("parse_as_"+d)]=function(b){return e(a,b)};c[eb("get_trusted_"+d)]=function(b){return f(a,b)};c[eb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function zf(){this.$get=["$window",
"$document",function(a,b){var d={},c=!(a.chrome&&a.chrome.app&&a.chrome.app.runtime)&&a.history&&a.history.pushState,e=$((/android (\d+)/.exec(L((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var p in l)if(m=k.exec(p)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in
l);!e||m&&n||(m=I(l.webkitTransition),n=I(l.webkitAnimation))}return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&11>=Ba)return!1;if(y(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Fa(),vendorPrefix:h,transitions:m,animations:n,android:e}}]}function Bf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;if(!I(g)||y(b.get(g)))g=e.getTrustedResourceUrl(g);
var k=d.defaults&&d.defaults.transformResponse;K(k)?k=k.filter(function(a){return a!==dc}):k===dc&&(k=null);return d.get(g,P({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw og("tpload",g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function Cf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");
var g=[];q(a,function(a){var c=da.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+wd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}
function Df(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){E(f)||(l=k,k=f,f=C);var m=ya.call(arguments,3),n=v(l)&&!l,p=(n?c:d).defer(),x=p.promise,q;q=b.defer(function(){try{p.resolve(f.apply(null,m))}catch(b){p.reject(b),e(b)}finally{delete g[x.$$timeoutId]}n||a.$apply()},k);x.$$timeoutId=q;g[q]=p;return x}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):
!1};return f}]}function pa(a){Ba&&(X.setAttribute("href",a),a=X.href);X.setAttribute("href",a);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function id(a){a=I(a)?pa(a):a;return a.protocol===yd.protocol&&a.host===yd.host}function Ef(){this.$get=ca(F)}function zd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),y(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function If(){this.$get=zd}function Lc(a){function b(d,c){if(J(d)){var e={};q(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Ad);b("date",Bd);
b("filter",pg);b("json",qg);b("limitTo",rg);b("lowercase",sg);b("number",Cd);b("orderBy",Dd);b("uppercase",tg)}function pg(){return function(a,b,d){if(!xa(a)){if(null==a)return a;throw O("filter")("notarray",a);}var c;switch(lc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=ug(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function ug(a,b,d){var c=J(a)&&"$"in a;!0===b?b=na:E(b)||(b=function(a,b){if(y(a))return!1;if(null===
a||null===b)return a===b;if(J(b)||J(a)&&!uc(a))return!1;a=L(""+a);b=L(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!J(e)?La(e,a.$,b,!1):La(e,a,b,d)}}function La(a,b,d,c,e){var f=lc(a),g=lc(b);if("string"===g&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c);if(K(a))return a.some(function(a){return La(a,b,d,c)});switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&La(a[h],b,d,!0))return!0;return e?!1:La(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!E(e)&&!y(e)&&
(f="$"===h,!La(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function lc(a){return null===a?"null":typeof a}function Ad(a){var b=a.NUMBER_FORMATS;return function(a,c,e){y(c)&&(c=b.CURRENCY_SYM);y(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Ed(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Cd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ed(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function vg(a){var b=
0,d,c,e,f,g;-1<(c=a.indexOf(Fd))&&(a=a.replace(Fd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==mc;e++);if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==mc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Gd&&(d=d.splice(0,Gd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function wg(a,b,d,c){var e=a.d,f=e.length-a.i;b=y(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=
0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ed(a,b,d,c,e){if(!I(a)&&!Q(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=vg(h);wg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,
b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Lb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=mc+a;d&&(a=a.substr(a.length-b));return e+
a}function W(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12==d&&(f=12);return Lb(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Hd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Id(a){return function(b){var d=Hd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Lb(b,a)}}function nc(a,
b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Bd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=$(b[9]+b[10]),g=$(b[9]+b[11]));h.call(a,$(b[1]),$(b[2])-1,$(b[3]));f=$(b[4]||0)-f;g=$(b[5]||0)-g;h=$(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,
d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;I(c)&&(c=xg.test(c)?$(c):b(c));Q(c)&&(c=new Date(c));if(!ha(c)||!isFinite(c.getTime()))return c;for(;d;)(l=yg.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=xc(f,m),c=Tb(c,f,!0));q(h,function(b){k=zg[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function qg(){return function(a,b){y(b)&&(b=2);return cb(a,b)}}function rg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):$(b);if(isNaN(b))return a;Q(a)&&(a=a.toString());if(!K(a)&&!I(a))return a;d=!d||isNaN(d)?0:$(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?a.slice(d,d+b):0===d?a.slice(b,a.length):a.slice(Math.max(0,d+b),d)}}function Dd(a){function b(b,d){d=d?-1:1;return b.map(function(b){var c=1,h=Ya;if(E(b))h=b;else if(I(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(h=a(b),h.constant))var k=h(),h=function(a){return a[k]}}return{get:h,
descending:c*d}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(a,e,f){if(null==a)return a;if(!xa(a))throw O("orderBy")("notarray",a);K(e)||(e=[e]);0===e.length&&(e=["+"]);var g=b(e,f);g.push({get:function(){return{}},descending:f?-1:1});a=Array.prototype.map.call(a,function(a,b){return{value:a,predicateValues:g.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("string"===c)e=e.toLowerCase();else if("object"===
c)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),d(e)))break a;if(uc(e)&&(e=e.toString(),d(e)))break a;e=b}return{value:e,type:c}})}});a.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],x=0;c.type===f.type?c.value!==f.value&&(x=c.value<f.value?-1:1):x=c.type<f.type?-1:1;if(c=x*g[d].descending)break}return c});return a=a.map(function(a){return a.value})}}function Ma(a){E(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ca(a)}function Jd(a,
b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Mb;f.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];
f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(f.$pending,function(b,c){f.$setValidity(c,null,a)});q(f.$error,function(b,c){f.$setValidity(c,null,a)});q(f.$$success,function(b,c){f.$setValidity(c,null,a)});$a(g,a);a.$$parentForm=Mb};Kd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&($a(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Va);
c.addClass(a,Nb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Va,Nb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;q(g,function(a){a.$setPristine()})};f.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function oc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function lb(a,b,d,c,e,f){var g=L(b[0].type);
if(!e.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=V(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<
b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Ld[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Ob(a,b){return function(d,c){var e,f;if(ha(d))return d;if(I(d)){'"'==d.charAt(0)&&
'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Ag.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&
!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return v(a)&&!ha(a)?d(a)||void 0:a}Md(e,f,g,h);lb(e,f,g,h,k,l);var q=h&&h.$options&&h.$options.timezone,s;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,s),q&&(a=Tb(a,q)),a});h.$formatters.push(function(a){if(a&&!ha(a))throw nb("datefmt",a);if(n(a))return(s=a)&&q&&(s=Tb(s,q,!0)),m("date")(a,c,q);s=null;return""});if(v(g.min)||g.ngMin){var z;h.$validators.min=function(a){return!n(a)||y(z)||d(a)>=
z};g.$observe("min",function(a){z=p(a);h.$validate()})}if(v(g.max)||g.ngMax){var r;h.$validators.max=function(a){return!n(a)||y(r)||d(a)<=r};g.$observe("max",function(a){r=p(a);h.$validate()})}}}function Md(a,b,d,c){(c.$$hasNativeValidators=J(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Nd(a,b,d,c,e){if(v(c)){a=a(c);if(!a.constant)throw nb("constexpr",d,c);return a(b)}return e}function pc(a,b){a="ngClass"+a;return["$animate",
function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return K(a)?(q(a,function(a){b=b.concat(e(a))}),b):I(a)?a.split(" "):J(a)?(q(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=l(a,1);h.$addClass(a)}function l(a,b){var c=g.data("$classCounts")||S(),d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",
c);return d.join(" ")}function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(f.$index&1)===b){var c=e(a||[]);if(!p)k(c);else if(!na(a,p)){var d=e(p);m(d,c)}}p=K(a)?a.map(function(a){return fa(a)}):fa(a)}var p;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}
function Kd(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+Bc(a,"-"):"";b(ob+a,!0===c);b(Od+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Od]=!(f[ob]=e.hasClass(ob));c.$setValidity=function(a,e,f){y(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Pd(c.$pending)&&(c.$pending=void 0));Ea(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,
a,f),h(c.$$success,a,f));c.$pending?(b(Qd,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(Qd,!1),c.$valid=Pd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Pd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var Bg=/^\/(.+)\/([a-z]*)$/,sa=Object.prototype.hasOwnProperty,L=function(a){return I(a)?a.toLowerCase():a},ub=function(a){return I(a)?a.toUpperCase():a},Ba,
G,Y,ya=[].slice,ag=[].splice,Cg=[].push,ja=Object.prototype.toString,vc=Object.getPrototypeOf,za=O("ng"),da=F.angular||(F.angular={}),Vb,pb=0;Ba=F.document.documentMode;C.$inject=[];Ya.$inject=[];var K=Array.isArray,ae=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,V=function(a){return I(a)?a.trim():a},wd=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!v(Fa.rules)){var a=F.document.querySelector("[ng-csp]")||
F.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Fa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Fa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Fa.rules},rb=function(){if(v(rb.name_))return rb.name_;var a,b,d=Oa.length,c,e;for(b=0;b<d;++b)if(c=Oa[b],a=F.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+
"jq");break}return rb.name_=e},de=/:/g,Oa=["ng-","data-ng-","ng:","x-ng-"],ie=/[A-Z]/g,Cc=!1,Na=3,me={full:"1.5.6",major:1,minor:5,dot:6,codeName:"arrow-stringification"};T.expando="ng339";var gb=T.cache={},Of=1;T._data=function(a){return this.cache[a[this.expando]]||{}};var Jf=/([\:\-\_]+(.))/g,Kf=/^moz([A-Z])/,yb={mouseleave:"mouseout",mouseenter:"mouseover"},Xb=O("jqLite"),Nf=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Wb=/<|&#?\w+;/,Lf=/<([\w:-]+)/,Mf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
ga={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ga.optgroup=ga.option;ga.tbody=ga.tfoot=ga.colgroup=ga.caption=ga.thead;ga.th=ga.td;var Tf=F.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Pa=T.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===
F.document.readyState?F.setTimeout(b):(this.on("DOMContentLoaded",b),T(F).on("load",b))},toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?G(this[a]):G(this[this.length+a])},length:0,push:Cg,sort:[].sort,splice:[].splice},Eb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Eb[L(a)]=a});var Uc={};q("input select option textarea button form details".split(" "),function(a){Uc[a]=!0});var bd={ngMinlength:"minlength",
ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:Zb,removeData:fb,hasData:function(a){for(var b in gb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)fb(a[b])}},function(a,b){T[b]=a});q({data:Zb,inheritedData:Cb,scope:function(a){return G.data(a,"$scope")||Cb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return G.data(a,"$isolateScope")||G.data(a,"$isolateScopeNoTemplate")},controller:Rc,injector:function(a){return Cb(a,
"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:zb,css:function(a,b,d){b=eb(b);if(v(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Na&&2!==c&&8!==c)if(c=L(b),Eb[c])if(v(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||C).specified?c:void 0;else if(v(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(v(d))a[b]=
d;else return a[b]},text:function(){function a(a,d){if(y(d)){var c=a.nodeType;return 1===c||c===Na?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(y(b)){if(a.multiple&&"select"===ta(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(y(b))return a.innerHTML;wb(a,!0);a.innerHTML=b},empty:Sc},function(a,b){T.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Sc&&y(2==a.length&&
a!==zb&&a!==Rc?b:c)){if(J(b)){for(e=0;e<g;e++)if(a===Zb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=y(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});q({removeData:fb,on:function(a,b,d,c){if(v(c))throw Xb("onargs");if(Mc(a)){c=xb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Qf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=
c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],yb[b]?(h(yb[b],Sf),h(b,void 0,!0)):h(b)}},off:Qc,one:function(a,b,d){a=G(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;wb(a);q(new T(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,
b){var d=a.nodeType;if(1===d||11===d){b=new T(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new T(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Oc(a,G(b).eq(0).clone()[0])},remove:Db,detach:function(a){Db(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new T(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Bb,removeClass:Ab,toggleClass:function(a,b,d){b&&q(b.split(" "),
function(b){var e=d;y(e)&&(e=!zb(a,b));(e?Bb:Ab)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Yb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=xb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:C,type:f,target:a},b.type&&(c=P(c,b)),b=fa(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){T.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)y(f)?(f=a(this[g],b,c,e),v(f)&&(f=G(f))):Pc(f,a(this[g],b,c,e));return v(f)?f:this};T.prototype.bind=T.prototype.on;T.prototype.unbind=T.prototype.off});Sa.prototype={put:function(a,
b){this[Ga(a,this.nextUid)]=b},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var b=this[a=Ga(a,this.nextUid)];delete this[a];return b}};var Hf=[function(){this.$get=[function(){return Sa}]}],Vf=/^([^\(]+?)=>/,Wf=/^[^\(]*\(\s*([^\)]*)\)/m,Dg=/,/,Eg=/^\s*(_?)(\S+?)\1\s*$/,Uf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=O("$injector");db.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw I(d)&&d||(d=a.name||Xf(a)),Ha("strictdi",d);
b=Vc(a);q(b[1].split(Dg),function(a){a.replace(Eg,function(a,b,d){c.push(d)})})}a.$inject=c}}else K(a)?(b=a.length-1,Qa(a[b],"fn"),c=a.slice(0,b)):Qa(a,"fn",!0);return c};var Rd=O("$animate"),$e=function(){this.$get=C},af=function(){var a=new Sa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=I(b)?b.split(" "):K(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){q(b,function(b){var c=a.get(b);if(c){var d=Yf(b.attr("class")),e="",f="";q(c,
function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Bb(a,e);f&&Ab(a,f)});a.remove(b)}});b.length=0}return{enabled:C,on:C,off:C,pin:C,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Ye=["$provide",function(a){var b=this;this.$$registeredAnimations=
Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Rd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Rd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=
d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&G(f);g=g&&G(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ia(h))},move:function(e,f,g,h){f=f&&G(f);g=g&&G(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ia(h))},leave:function(b,c){return a.push(b,"leave",Ia(c),function(){b.remove()})},addClass:function(b,
c,g){g=Ia(g);g.addClass=hb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ia(g);g.removeClass=hb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ia(h);h.addClass=hb(h.addClass,c);h.removeClass=hb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ia(k);k.from=k.from?P(k.from,c):c;k.to=k.to?P(k.to,g):g;k.tempClasses=hb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],cf=function(){this.$get=
["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},bf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);
else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:C,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},
"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=
0,this._state=2)}};return f}]},Ze=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=oa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},ea=O("$compile"),bc=new function(){};
Ec.$inject=["$provide","$$sanitizeUriProvider"];Gb.prototype.isFirstChange=function(){return this.previousValue===bc};var Xc=/^((?:x|data)[\:\-_])/i,bg=O("$controller"),cd=/^(\S+)(\s+as\s+([\w$]+))?$/,jf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof G&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},dd="application/json",ec={"Content-Type":dd+";charset=utf-8"},dg=/^\[|^\{(?!\{)/,eg={"[":/]$/,"{":/}$/},cg=/^\)\]\}',?\n/,Fg=O("$http"),hd=function(a){return function(){throw Fg("legacy",
a);}},Ka=da.$interpolateMinErr=O("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString())};var Gg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,gg={http:80,https:443,ftp:21},Hb=O("$location"),Hg={$$html5:!1,$$replace:!1,absUrl:Ib("$$absUrl"),url:function(a){if(y(a))return this.$$url;var b=Gg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Ib("$$protocol"),
host:Ib("$$host"),port:Ib("$$port"),path:md("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(I(a)||Q(a))a=a.toString(),this.$$search=zc(a);else if(J(a))a=oa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Hb("isrcharg");break;default:y(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:md("$$hash",function(a){return null!==
a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([ld,hc,gc],function(a){a.prototype=Object.create(Hg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==gc||!this.$$html5)throw Hb("nostate");this.$$state=y(b)?null:b;return this}});var ba=O("$parse"),ig=Function.prototype.call,jg=Function.prototype.apply,kg=Function.prototype.bind,Pb=S();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Pb[a]=!0});var Ig={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},jc=function(a){this.options=a};jc.prototype={constructor:jc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;
else{var b=a+this.peek(),d=b+this.peek(2),c=Pb[b],e=Pb[d];Pb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||
"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,
b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=v(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ba("lexerr",
a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=L(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},
readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=Ig[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";
s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);
a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},
assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=
this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),
b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):
this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=oa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,
callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==
this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},
object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",
this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw ba("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw ba("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ba("ueoe",this.text);return this.tokens[0]},peek:function(a,b,
d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},$locals:{type:s.LocalsExpression}}};td.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},
assign:{vars:[],body:[],own:{}},inputs:[]};Z(c,d.$filter);var e="",f;this.stage="assign";if(f=rd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=pd(c.body);d.stage="inputs";q(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+
" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Ua,qa,nd,hg,Jb,lg,od,a);this.state=this.stage=void 0;e.literal=sd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+
b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},
recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||C;if(!f&&v(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case s.UnaryExpression:this.recurse(a.argument,void 0,void 0,
function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));
c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ua(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",
a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Kb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),
k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Ua(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Kb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},
function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);q(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),
m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!qd(a.left))throw ba("lval");this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+
h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=[];q(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===s.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,
a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.LocalsExpression:this.assign(b,"l");c("l");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=
this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;
c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),
";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},
getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(I(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+
"'";if(Q(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ba("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};ud.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;Z(c,d.$filter);var e,f;if(e=rd(c))f=this.recurse(e);e=pd(c.body);
var g;e&&(g=[],q(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];q(c.body,function(a){h.push(d.recurse(a.expression))});e=0===c.body.length?C:1===c.body.length?h[0]:function(a,b){var c;q(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=sd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,
b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Ua(a.name,f.expression),f.identifier(a.name,
f.expensiveChecks||Kb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Ua(a.property.name,f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?
function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,m){var n=e(a,c,d,m),p;if(null!=n.value){qa(n.context,f.expression);nd(n.value,f.expression);p=[];for(var q=0;q<g.length;++q)p.push(qa(g[q](a,c,d,m),f.expression));p=qa(n.value.apply(n.context,p),f.expression)}return b?{value:p}:p};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,
d,g,m);a=e(a,d,g,m);qa(n.value,f.expression);Jb(n.context);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),
function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=v(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,
f){d=a(d,c,e,f);d=v(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=od(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(v(h)?h:0)-(v(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=
a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&qa(g,e);return d?{context:f,name:a,
value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m+="",Ua(m,e),c&&1!==c&&(Jb(l),l&&!l[m]&&(l[m]={})),n=l[m],qa(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Jb(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||Kb(b))&&qa(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var kc=
function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(a,d);this.astCompiler=d.csp?new ud(this.ast,b):new td(this.ast,b)};kc.prototype={constructor:kc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var mg=Object.prototype.valueOf,ra=O("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},og=O("$compile"),X=F.document.createElement("a"),yd=pa(F.location.href);zd.$inject=["$document"];Lc.$inject=["$provide"];var Gd=22,
Fd=".",mc="0";Ad.$inject=["$locale"];Cd.$inject=["$locale"];var zg={yyyy:W("FullYear",4,0,!1,!0),yy:W("FullYear",2,0,!0,!0),y:W("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:W("Month",2,1),M:W("Month",1,1),LLLL:kb("Month",!1,!0),dd:W("Date",2),d:W("Date",1),HH:W("Hours",2),H:W("Hours",1),hh:W("Hours",2,-12),h:W("Hours",1,-12),mm:W("Minutes",2),m:W("Minutes",1),ss:W("Seconds",2),s:W("Seconds",1),sss:W("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?
b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Lb(Math[0<a?"floor":"ceil"](a/60),2)+Lb(Math.abs(a%60),2))},ww:Id(2),w:Id(1),G:nc,GG:nc,GGG:nc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},yg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,xg=/^\-?\d+$/;Bd.$inject=["$locale"];var sg=ca(L),tg=ca(ub);Dd.$inject=["$parse"];var oe=ca({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,
b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ja.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};q(Eb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=wa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});q(bd,function(a,b){vb[b]=function(){return{priority:100,link:function(a,
c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Bg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=wa("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ja.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ba&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});
var Mb={$addControl:C,$$renameControl:function(a,b){a.$name=b},$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C,$setSubmitted:C};Jd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Sd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||C}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Jd,compile:function(d,f){d.addClass(Va).addClass(ob);var g=f.name?"name":a&&f.ngForm?"ngForm":
!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var q=g?c(n.$name):C;g&&(q(a,n),e.$observe(g,function(b){n.$name!==b&&(q(a,void 0),n.$$parentForm.$$renameControl(n,b),q=c(n.$name),q(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);
q(a,void 0);P(n,Mb)})}}}}}]},pe=Sd(),Ce=Sd(!0),Ag=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Jg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Kg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Lg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Td=/^(\d{4,})-(\d{2})-(\d{2})$/,Ud=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
qc=/^(\d{4,})-W(\d\d)$/,Vd=/^(\d{4,})-(\d\d)$/,Wd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ld=S();q(["date","datetime-local","month","time","week"],function(a){Ld[a]=!0});var Xd={text:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);oc(c)},date:mb("date",Td,Ob(Td,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Ud,Ob(Ud,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Wd,Ob(Wd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",qc,function(a,b){if(ha(a))return a;
if(I(a)){qc.lastIndex=0;var d=qc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Hd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:mb("month",Vd,Ob(Vd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Md(a,b,d,c);lb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){if(c.$isEmpty(a))return null;if(Lg.test(a))return parseFloat(a)});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!Q(a))throw nb("numfmt",
a);a=a.toString()}return a});if(v(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||y(g)||a>=g};d.$observe("min",function(a){v(a)&&!Q(a)&&(a=parseFloat(a,10));g=Q(a)&&!isNaN(a)?a:void 0;c.$validate()})}if(v(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||y(h)||a<=h};d.$observe("max",function(a){v(a)&&!Q(a)&&(a=parseFloat(a,10));h=Q(a)&&!isNaN(a)?a:void 0;c.$validate()})}},url:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);oc(c);c.$$parserName="url";c.$validators.url=
function(a,b){var d=a||b;return c.$isEmpty(d)||Jg.test(d)}},email:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);oc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Kg.test(d)}},radio:function(a,b,d,c){y(d.name)&&b.attr("name",++pb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Nd(h,a,"ngTrueValue",d.ngTrueValue,
!0),l=Nd(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return na(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:C,button:C,submit:C,reset:C,file:C},Fc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Xd[L(g.type)]||Xd.text)(e,f,
g,h[0],b,a,d,c)}}}}],Mg=/^(true|false|\d+)$/,Ue=function(){return{restrict:"A",priority:100,compile:function(a,b){return Mg.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ue=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=y(a)?"":a})}}}}],we=["$interpolate","$compile",
function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=y(a)?"":a})}}}}],ve=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=
f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],Te=ca({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),xe=pc("",!0),ze=pc("Odd",0),ye=pc("Even",1),Ae=Ma({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Be=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Kc={},Ng={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=wa("ng-"+a);Kc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Ng[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ee=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=
b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Fe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:da.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var q=0,s,z,r,D=function(){z&&(z.remove(),z=null);s&&
(s.$destroy(),s=null);r&&(d.leave(r).then(function(){z=null}),z=r,r=null)};c.$watch(f,function(f){var m=function(){!v(h)||h&&!c.$eval(h)||b()},w=++q;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&w===q){var b=c.$new();n.template=a;a=p(b,function(a){D();d.enter(a,null,e).then(m)});s=b;r=a;s.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||w!==q||(D(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(D(),n.template=null)})}}}}],We=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,e){ja.call(d[0]).match(/SVG/)?(d.empty(),a(Nc(e.template,F.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ge=Ma({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Se=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?V(e):e;c.$parsers.push(function(a){if(!y(a)){var b=
[];a&&q(a.split(g),function(a){a&&b.push(f?V(a):a)});return b}});c.$formatters.push(function(a){if(K(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Od="ng-invalid",Va="ng-pristine",Nb="ng-dirty",Qd="ng-pending",nb=O("ngModel"),Og=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};
this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Mb;var m=e(d.ngModel),n=m.assign,p=m,s=n,F=null,z,r=this;this.$$setOptions=function(a){if((r.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");p=function(a){var c=m(a);E(c)&&(c=b(a));
return c};s=function(a,b){E(m(a))?f(a,{$$$p:b}):n(a,b)}}else if(!m.assign)throw nb("nonassign",d.ngModel,ua(c));};this.$render=C;this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){r.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var D=0;Kd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){r.$dirty=
!1;r.$pristine=!0;f.removeClass(c,Nb);f.addClass(c,Va)};this.$setDirty=function(){r.$dirty=!0;r.$pristine=!1;f.removeClass(c,Va);f.addClass(c,Nb);r.$$parentForm.$setDirty()};this.$setUntouched=function(){r.$touched=!1;r.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){r.$touched=!0;r.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(F);r.$viewValue=r.$$lastCommittedViewValue;r.$render()};this.$validate=function(){if(!Q(r.$modelValue)||
!isNaN(r.$modelValue)){var a=r.$$rawModelValue,b=r.$valid,c=r.$modelValue,d=r.$options&&r.$options.allowInvalid;r.$$runValidators(a,r.$$lastCommittedViewValue,function(e){d||b===e||(r.$modelValue=e?a:void 0,r.$modelValue!==c&&r.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;q(r.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(q(r.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(r.$asyncValidators,function(e,g){var h=
e(a,b);if(!h||!E(h.then))throw nb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},C):g(!0)}function f(a,b){h===D&&r.$setValidity(a,b)}function g(a){h===D&&c(a)}D++;var h=D;(function(){var a=r.$$parserName||"parse";if(y(z))f(a,null);else return z||(q(r.$validators,function(a,b){f(b,null)}),q(r.$asyncValidators,function(a,b){f(b,null)})),f(a,z),z;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=
r.$viewValue;g.cancel(F);if(r.$$lastCommittedViewValue!==a||""===a&&r.$$hasNativeValidators)r.$$updateEmptyClasses(a),r.$$lastCommittedViewValue=a,r.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=r.$$lastCommittedViewValue;if(z=y(b)?void 0:!0)for(var c=0;c<r.$parsers.length;c++)if(b=r.$parsers[c](b),y(b)){z=!1;break}Q(r.$modelValue)&&isNaN(r.$modelValue)&&(r.$modelValue=p(a));var d=r.$modelValue,e=r.$options&&r.$options.allowInvalid;r.$$rawModelValue=
b;e&&(r.$modelValue=b,r.$modelValue!==d&&r.$$writeModelToScope());r.$$runValidators(b,r.$$lastCommittedViewValue,function(a){e||(r.$modelValue=a?b:void 0,r.$modelValue!==d&&r.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,r.$modelValue);q(r.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){r.$viewValue=a;r.$options&&!r.$options.updateOnDefault||r.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=r.$options;
d&&v(d.debounce)&&(d=d.debounce,Q(d)?c=d:Q(d[b])?c=d[b]:Q(d["default"])&&(c=d["default"]));g.cancel(F);c?F=g(function(){r.$commitViewValue()},c):h.$$phase?r.$commitViewValue():a.$apply(function(){r.$commitViewValue()})};a.$watch(function(){var b=p(a);if(b!==r.$modelValue&&(r.$modelValue===r.$modelValue||b===b)){r.$modelValue=r.$$rawModelValue=b;z=void 0;for(var c=r.$formatters,d=c.length,e=b;d--;)e=c[d](e);r.$viewValue!==e&&(r.$$updateEmptyClasses(e),r.$viewValue=r.$$lastCommittedViewValue=e,r.$render(),
r.$$runValidators(b,e,C))}return b})}],Re=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Og,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,
c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Pg=/(\s+|^)default(\s+|$)/,Ve=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=oa(a.$eval(b.ngModelOptions));v(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=V(this.$options.updateOn.replace(Pg,
function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},He=Ma({terminal:!0,priority:1E3}),Qg=O("ngOptions"),Rg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Pe=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=
b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&xa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(Rg);if(!n)throw Qg("iexp",a,ua(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var z=a&&d(a)||b,r=s&&d(s),v=s?function(a,b){return r(c,b)}:function(a){return Ga(a)},u=function(a,b){return v(a,H(a,b))},t=d(n[2]||n[1]),w=d(n[3]||""),y=d(n[4]||""),B=d(n[8]),A={},H=q?function(a,b){A[q]=b;A[p]=
a;return A}:function(a){A[p]=a;return A};return{trackBy:s,getTrackByValue:u,getWatchables:d(B,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=H(l,h),l=v(l,h);b.push(l);if(n[2]||n[1])l=t(c,h),b.push(l);n[4]&&(h=y(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=B(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===g?n:g[n],q=H(d[p],p),r=z(c,q),p=v(r,q),x=t(c,q),A=w(c,q),q=y(c,q),r=new e(p,r,x,A,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,
getOptionFromViewValue:function(a){return b[u(a)]},getViewValueFromOption:function(a){return s?da.copy(a.viewValue):a.viewValue}}}}}var e=F.document.createElement("option"),f=F.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=C},post:function(d,h,k,l){function m(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function n(){var a=
w&&p.readValue();if(w)for(var b=w.items.length-1;0<=b;b--){var c=w.items[b];c.group?Db(c.element.parentNode):Db(c.element)}w=C.getOptions();var d={};u&&h.prepend(z);w.items.forEach(function(a){var b;if(v(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),B.appendChild(b),b.label=a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=B,c=e.cloneNode(!1);b.appendChild(c);m(a,c)});h[0].appendChild(B);s.$render();s.$isEmpty(a)||(b=p.readValue(),(C.trackBy||y?na(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var p=
l[0],s=l[1],y=k.multiple,z;l=0;for(var r=h.children(),D=r.length;l<D;l++)if(""===r[l].value){z=r.eq(l);break}var u=!!z,t=G(e.cloneNode(!1));t.val("?");var w,C=c(k.ngOptions,h,d),B=b[0].createDocumentFragment();y?(s.$isEmpty=function(a){return!a||0===a.length},p.writeValue=function(a){w.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=w.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=w.selectValueMap[a])&&
!a.disabled&&b.push(w.getViewValueFromOption(a))});return b},C.trackBy&&d.$watchCollection(function(){if(K(s.$viewValue))return s.$viewValue.map(function(a){return C.getTrackByValue(a)})},function(){s.$render()})):(p.writeValue=function(a){var b=w.getOptionFromViewValue(a);b?(h[0].value!==b.selectValue&&(t.remove(),u||z.remove(),h[0].value=b.selectValue,b.element.selected=!0),b.element.setAttribute("selected","selected")):null===a||u?(t.remove(),u||h.prepend(z),h.val(""),z.prop("selected",!0),z.attr("selected",
!0)):(u||z.remove(),h.prepend(t),h.val("?"),t.prop("selected",!0),t.attr("selected",!0))},p.readValue=function(){var a=w.selectValueMap[h.val()];return a&&!a.disabled?(u||z.remove(),t.remove(),w.getViewValueFromOption(a)):null},C.trackBy&&d.$watch(function(){return C.getTrackByValue(s.$viewValue)},function(){s.$render()}));u?(z.remove(),a(z)(d),z.removeClass("ng-scope")):z=G(e.cloneNode(!1));h.empty();n();d.$watchCollection(C.getWatchables,n)}}}}],Ie=["$locale","$interpolate","$log",function(a,b,
d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},s={},v=b.startSymbol(),z=b.endSymbol(),r=v+l+"-"+n+z,D=da.noop,u;q(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+L(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){s[d]=b(a.replace(c,r))});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in p||(c=a.pluralCat(c-n));c===u||e&&Q(u)&&isNaN(u)||(D(),e=s[c],y(e)?
(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),D=C,k()):D=f.$watch(e,k),u=c)})}}}],Je=["$parse","$animate","$compile",function(a,b,d){var c=O("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],s=l[4],l=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var v=l[3]||l[1],z=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var r,D,u,t,w={$id:Ga};s?r=a(s):(u=function(a,b){return Ga(b)},t=function(a){return a});return function(a,d,f,g,l){r&&(D=function(b,c,d){z&&(w[z]=b);w[v]=c;w.$index=
d;return r(a,w)});var m=S();a.$watchCollection(n,function(f){var g,n,r=d[0],s,x=S(),w,y,C,A,F,E,G;p&&(a[p]=f);if(xa(f))F=f,n=D||u;else for(G in n=D||t,F=[],f)sa.call(f,G)&&"$"!==G.charAt(0)&&F.push(G);w=F.length;G=Array(w);for(g=0;g<w;g++)if(y=f===F?g:F[g],C=f[y],A=n(y,C,g),m[A])E=m[A],delete m[A],x[A]=E,G[g]=E;else{if(x[A])throw q(G,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,A,C);G[g]={id:A,scope:void 0,clone:void 0};x[A]=!0}for(s in m){E=m[s];A=tb(E.clone);b.leave(A);if(A[0].parentNode)for(g=
0,n=A.length;g<n;g++)A[g].$$NG_REMOVED=!0;E.scope.$destroy()}for(g=0;g<w;g++)if(y=f===F?g:F[g],C=f[y],E=G[g],E.scope){s=r;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);E.clone[0]!=s&&b.move(tb(E.clone),null,r);r=E.clone[E.clone.length-1];e(E.scope,g,v,C,z,y,w)}else l(function(a,c){E.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;E.clone=a;x[E.id]=E;e(E.scope,g,v,C,z,y,w)});m=x})}}}}],Ke=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,
function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Le=Ma(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Me=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(){a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),
f)})})})}}}],Ne=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Oe=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Sg=O("ngTransclude"),Qe=Ma({restrict:"EAC",link:function(a,b,d,c,e){d.ngTransclude===
d.$attr.ngTransclude&&(d.ngTransclude="");if(!e)throw Sg("orphan",ua(b));e(function(a){a.length&&(b.empty(),b.append(a))},null,d.ngTransclude||d.ngTranscludeSlot)}}),qe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Tg={$setViewValue:C,$render:C},Ug=["$element","$scope",function(a,b){var d=this,c=new Sa;d.ngModelCtrl=Tg;d.unknownOption=G(F.document.createElement("option"));d.renderUnknownOption=function(b){b=
"? "+Ga(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",function(){d.renderUnknownOption=C});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,
b){if(8!==b[0].nodeType){Ra(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){v(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,e){c.$set("value",
a);e!==a&&d.removeOption(e);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],re=function(){return{restrict:"E",require:["select","?ngModel"],controller:Ug,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};
f.writeValue=function(a){var c=new Sa(a);q(b.find("option"),function(a){a.selected=v(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||na(g,e.$viewValue)||(g=fa(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},te=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(v(d.value))var c=a(d.value,!0);else{var e=
a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],se=ca({restrict:"E",terminal:!1}),Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,
b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){I(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw O("ngPattern")("noregexp",f,a,ua(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||y(e)||e.test(b)}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=$(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||
b.length<=e}}}}},Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=$(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};F.angular.bootstrap?F.console&&console.log("WARNING: Tried to load angular more than once."):(je(),le(da),da.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM",
"PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,
6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),G(F.document).ready(function(){fe(F.document,Ac)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

// Code goes here
angular
  .module('a-edit', ['ngMaterial', 'angularMoment', 'ngSanitize', 'cl.paging'])
  
  .run(['amMoment', '$templateCache', function(amMoment, $templateCache) {
    amMoment.changeLocale('ru');
    
    $templateCache.put('a-edit-image-popover.html', '<img class="img-responsive" ng-src="{{::image}}" alt="">');
    
    $templateCache.put('a-edit-date-input.html', '\
            <div class="date-input">\
            <span ng-if="viewMode">{{ngModelStr}}</span>\
            \
            <div ng-if="!viewMode" class="input-group">\
                <input\
                        type="text"\
                        class="form-control input-sm"\
                        \
                        name="{{$parent.name}}"\
                        ng-model="$parent.ngModel"\
                        placeholder="{{$parent.placeholder}}"\
                        \
                        uib-datepicker-popup="dd.MM.yyyy"\
                        datepicker-options="$parent.options"\
                        ng-init="$parent.ngModel = $parent.ngModel"\
                        is-open="isOpen"\
                        \
                        ng-enter="$parent.save()"\
                        ng-change="$parent.change()"/>\
                \
                <span class="input-group-btn">\
                  <button tabindex="-1" type="button" class="btn btn-sm btn-default" ng-click="isOpen=true"><i class="glyphicon glyphicon-calendar"></i></button>\
                </span>\
            </div>\
        \
        </div>\
    ');

    $templateCache.put('a-edit-bool-input.html', '<div>\
        <span ng-if="viewMode" ng-class="[\'glyphicon\',{\'glyphicon-check\': $parent.fakeModel, \'glyphicon-unchecked\': !$parent.fakeModel}]"></span>\
        <md-checkbox ng-if="!viewMode" ng-model="$parent.fakeModel" ng-change="$parent.change()">{{$parent.label}}</md-checkbox>\
    </div>');

    $templateCache.put('a-edit-popover-image.html', '\
        <a target="_blank" href="{{::image}}" uib-popover-template="imagePopoverPath" popover-placement="left" popover-trigger="mouseenter">\
            {{:: text || image}}\
        </a>\
    ');

      $templateCache.put('a-edit-paging.html', '\
        <md-content ng-if="ngModel.total_pages > 1">\
            <cl-paging flex cl-pages="ngModel.total_pages" cl-steps="ngModel.per_page" cl-page-changed="ngChange()" cl-align="center" cl-current-page="ngModel.current"></cl-paging>\
        </md-content>\
    ');
  }]);

angular
    .module('a-edit')
    .directive('aeBoolInput', ['$timeout', '$filter', function($timeout, $filter) {
        return {
            restrict: 'E',
            templateUrl: 'a-edit-bool-input.html',
            scope: {
                //require
                ngModel: '=',
                viewMode: '=',
                //callbacks
                ngChange: '&',
                onSave: '&',
                //sub
                name: '@',
                label: '@'
            },
            link: function (scope, element) {

                scope.$watch('ngModel', function(ngModel){
                    scope.fakeModel = ngModel == 1;
                });

                scope.change = function(){
                    scope.ngModel =  scope.fakeModel;

                    if(scope.ngChange)
                        $timeout(scope.ngChange);
                };
            }
        };
    }]);
angular
    .module('a-edit')
    .directive('aeDateInput', ['$timeout', '$filter', function($timeout, $filter) {
        return {
            restrict: 'E',
            templateUrl: 'a-edit-date-input.html',
            scope: {
                //require
                ngModel: '=',
                ngModelStr: '=?',
                ngModelSubStr: '=?',
                viewMode: '=',
                //callbacks
                ngChange: '&',
                onSave: '&',
                //sub
                placeholder: '@',
                name: '@'
            },
            link: function (scope, element) {

                scope.getDayClass = function(obj) {
                    if (obj.mode === 'day') {
                        var day = new Date(obj.date).getDay();
                        if (day == 0 || day == 6)
                            return 'day-off';
                    }
                };

                scope.options = {
                    startingDay: 1,
                    customClass: scope.getDayClass,
                    todayText: '',
                    currentText:'',
                    clearText: '',
                    closeText: 'Close',
                    appendToBody: false
                };

                scope.save = function(){
                    if(scope.onSave)
                        $timeout(scope.onSave);
                };

                scope.change = function(){
                    setStr();

                    if(scope.ngChange)
                        $timeout(scope.ngChange);
                };
                function setStr(){
                    if(scope.ngModel){
                        scope.ngModelStr = $filter('amDateFormat')(scope.ngModel, 'D MMM. YYYY');
                        scope.ngModelSubStr = $filter('amDateFormat')(scope.ngModel, 'DD.MM.YYYY');
                    }
                }

                scope.$watch('ngModel', setStr);
            }
        };
    }]);
angular
    .module('a-edit')

    .directive('aeFileUpload', ['$timeout', '$compile', 'FileUploader', function($timeout, $compile, FileUploader) {

        function getTemplateByType(type){
            var result = '';
            if(type == 'multifile'){
                result +='<ul class="list-unstyled">' +
                    '<li ng-repeat="item in ngModel">';
            }

            result += '<popover-image ng-model="' + (type == 'multifile' ? 'item' : 'ngModel') + '.file" text="' + (type == 'multifile' ? 'item' : 'ngModel') + '.name"></popover-image>';

            if(type == 'multifile'){
                result +=   '</li>' +
                    '</ul>';
            }

            result +=   '<ul ng-if="!viewMode" class="list-unstyled">' +
                '<li ng-repeat="item in uploader.queue">' +
                '<popover-image ng-model="item.file" text="item.file.name"></popover-image>' +
                '<a href ng-click="item.remove()"><span class="glyphicon glyphicon-remove"></span></a>' +
                '</li>' +
                '</ul>' +
                '<span ng-if="!viewMode && uploader" class="btn btn-sm btn-default btn-file">' +
                'Р—Р°РіСЂСѓР·РёС‚СЊ' +
                '<input type="file" nv-file-select uploader="uploader" ' + (type == 'multifile' ? 'multiple': '') + ' />' +
                '</span>';

            return result;
        }

        var typeTemplates = {
            'file': $compile(getTemplateByType('file')),
            'multifile': $compile(getTemplateByType('multifile'))
        };

        return {
            restrict: 'E',
            require: 'ngModel',
            scope: {
                ngModel: '=',
                viewMode: '=?',
                uploader: '=',
                //callbacks
                ngChange: '&',
                onSave: '&',
                //sub
                inputName: '@',
                url: '@',
                type: '@'
            },
            link: function (scope, element, attrs, ngModel) {

                var template = typeTemplates[scope.type || 'file'],
                    templateElement;

                template(scope, function (clonedElement, scope) {
                    templateElement = clonedElement;
                    element.append(templateElement);
                });

                template = null;

                element.on("$destroy", function () {
                    templateElement.remove();
                    templateElement = null;
                });

                function initUploader(){
                    scope.uploader = new FileUploader();
                    scope.uploader.url = scope.url;
                    scope.uploader.alias = scope.inputName;
                    scope.uploader.autoUpload = true;
                    scope.uploader.removeAfterUpload = true;

                    scope.uploader.onAfterAddingFile = function(item){
                        setImageSrc(item);
                    };
                    scope.uploader.onSuccessItem = function(item, response){
                        if(!scope.ngModel)
                            scope.ngModel = [];

                        scope.ngModel.push(response);
                        console.log(scope.ngModel);
                    };
                }

                if(!scope.viewMode)
                    initUploader();

                function setImageSrc (item){
                    var reader = new FileReader();

                    reader.onload = (function(theFile) {
                        return function(e) {
                            item.image_src = e.target.result;
                            scope.$apply();
                        };
                    })(item._file);

                    reader.readAsDataURL(item._file);
                }

                scope.save = function(){
                    if(scope.onSave)
                        $timeout(scope.onSave);
                };

                scope.$watch('ngModel', function(newVal){
                    if(!newVal && !scope.viewMode)
                        initUploader();
                });
                scope.$watch('viewMode', function(newVal){
                    if(!newVal)
                        initUploader();
                })
            }
        };
    }]);

angular
    .module('a-edit')
    .directive('aeGrid', ['$timeout', '$compile', '$filter', 'AEditHelpers', 'AEditConfig', 'AEditAjaxHelper', function($timeout, $compile, $filter, AEditHelpers, AEditConfig, AEditAjaxHelper) {
    return {
        restrict: 'E',
        require: 'ngModel',
        scope: {
            //require
            ngModel: '=',
            //sub
            options: '=',
            //callbacks
            ngChange: '&',
            onSave: '&'
        },
        link: function (scope, element, attrs, ngModel) {
            var defaultOptions = {
                search: true,
                create: true,
                edit: true,
                delete: true,
                paginate: false,
                bold_headers: true,
                modal_adder: false,
                ajax_handler: false,
                resource: null,
                order_by: '-id',
                track_by: '',
                default_attrs: {},
                modal_index: 0,
                search_debounce: 200,
                fields: [],
                lists: {},
                callbacks: {},
                row_height: '40px'
            };

            var new_item = {
                is_new: true
            };
            scope.new_item = angular.copy(new_item);
            scope.status = "";

            var mode = 'local';

            var variables = angular.extend({}, AEditConfig.grid_options.request_variables, AEditConfig.grid_options.response_variables);

            // *************************************************************
            // TEMPLATE INIT
            // *************************************************************

            scope.$watch('options', function(){
                if(!scope.options)
                    return;

                scope.actualOptions = angular.extend({}, defaultOptions, scope.options);
                AEditConfig.current_options = scope.actualOptions;

                scope.ajaxList = new AEditAjaxHelper(scope.actualOptions.resource);

                scope.select_options = angular.extend({}, AEditConfig.grid_options, scope.actualOptions);

                if(scope.actualOptions.resource){
                    mode = 'remote';
                    if(scope.actualOptions.get_list)
                        scope.getList();
                }

                var tplHtml = '' +
                    '<md-content layout="row" flex="grow" layout-wrap class="padding ae-grid">' +
                    '   <md-list flex>' +
                    '       <md-subheader class="md-no-sticky" ng-show="actualOptions.caption || actualOptions.search">';

                if(scope.actualOptions.search){
                    tplHtml +=
                        '       <md-input-container class="md-block no-margin" flex="grow">' +
                        '           <label>Search</label>' +
                        '           <input ng-model="ajaxList.search" ng-model-options="{ debounce: ' + scope.actualOptions.search_debounce + ' }">' +
                        '       </md-input-container>';
                }

                tplHtml += '' +
                    '           <span>{{actualOptions.caption}}</span>' +
                    '       </md-subheader>';


                var tableFieldsCount = 1;
                scope.actualOptions.fields.forEach(function(field){
                    if(!field.colspan)
                        field.colspan = 1;

                    if(!field.table_hide)
                        tableFieldsCount += parseInt(field.colspan);
                });

                var md_grid_list = '<md-grid-list flex="grow" md-cols="' + tableFieldsCount + '" md-row-height="' + scope.actualOptions.row_height + '">';

                var tplHead =
                    '<md-list-item class="md-1-line">' +
                        md_grid_list;

                var tplBodyNewItem =
                        '<md-list-item class="md-1-line new-item">' +
                        '   <md-content layout="row" flex="grow">' +
                                md_grid_list;

                if(!scope.actualOptions.track_by)
                    scope.actualOptions.track_by = mode == 'remote' ? 'id' : 'json_id';

                var tplBodyItem =
                        '<md-list-item ng-click="null" class="md-1-line word-wrap" ng-repeat="item in filtredList track by item.' + scope.actualOptions.track_by + '">' +
                        '   <md-content layout layout-fill layout-align="center" flex="grow">' +
                                md_grid_list;

                var select_list_request_options = {};
                select_list_request_options[variables['limit']] = scope.select_options.items_per_page;

                scope.actualOptions.fields.forEach(function(field, index){

                    if(field.resource && field.list && field.list != 'self'){
                        if(!scope.actualOptions.lists[field.list]){
                            scope.actualOptions.lists[field.list] = [];

                            AEditHelpers.getResourceQuery(field.resource, 'get', select_list_request_options).then(function(response){
                                scope.actualOptions.lists[field.list] = response[variables['list']] || response;
                            });
                        }
                    }

                    if(field.table_hide)
                        return;

                    if(field.resource){
                        scope[field.name + '_resource'] = field.resource;
                    }
                    if(field.fields){
                        scope[field.name + '_fields'] = field.fields;
                    }

                    tplHead +=
                        '<md-grid-tile md-colspan="' + field.colspan + '"><sorting ng-model="ajaxList.sorting.' + field.name + '" ng-change="getList()">' + field.label + '</sorting></md-grid-tile>';
                    //
                    //var style = 'style="';
                    //if(field.width)
                    //    style += 'width:' + field.width + ';';
                    //style += '"';

                    //for new item row
                    tplBodyNewItem +=
                        '<md-grid-tile md-colspan="' + field.colspan + '">';
                    //for regular item row
                    tplBodyItem +=
                        '<md-grid-tile md-colspan="' + field.colspan + '" ng-dblclick="editItem(item)">';

                    function getFieldDirective(is_new) {
                        var item_name = (is_new ? 'new_' : '' ) + 'item';
                        var field_name = field.name != 'self' ? field.name : '';

                        var list_variable;

                        if(field.list && field.list == 'self')
                            list_variable = 'ngModel';
                        else if(field.list)
                            list_variable = 'actualOptions.lists.' + field.list;

                        return AEditHelpers.generateDirectiveByConfig(field, {
                            item_name: item_name,
                            field_name: field_name,
                            readonly: field.readonly || !scope.actualOptions.edit,
                            always_edit: is_new,
                            is_new: is_new,
                            no_label: true,
                            list_variable: list_variable,
                            get_list: false,
                            ajax_search: AEditConfig.search
                        });
                    }

                    tplBodyNewItem += getFieldDirective(true) +
                        '</md-grid-tile>';
                    tplBodyItem += getFieldDirective(false) +
                        '</md-grid-tile>';
                });

                if(scope.actualOptions.edit){
                    tplHead +=
                        '<md-grid-tile></md-grid-tile>';

                    tplBodyNewItem +=
                        '<md-grid-tile>' +
                            '<md-button class="md-fab md-mini md-primary" ng-click="save(new_item)">' +
                                '<md-icon>save</md-icon>' +
                            '</md-button>' +
                        '</md-grid-tile>';

                    tplBodyItem +=
                        '<md-grid-tile>' +
                            '<md-menu>' +
                                '<md-button class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-menu-origin>more_vert</md-icon></md-button>' +
                                '<md-menu-content width="4">' +
                                    '<md-menu-item ng-show="item.id"><md-button ng-click="save(item)" ae-object-modal="item" modal-resource-options="actualOptions" on-save="save(item)"><md-icon>open_in_new</md-icon>Open</md-button></md-menu-item>' +
                                    '<md-menu-item ng-show="item.is_edit"><md-button ng-click="save(item)"><md-icon>save</md-icon>Save</md-button></md-menu-item>' +
                                    '<md-menu-item ng-show="item.is_edit"><md-button ng-click="editItem(item)"><md-icon>settings_backup_restore</md-icon>Cancel edit</md-button></md-menu-item>' +
                                    '<md-menu-item ng-hide="item.is_edit"><md-button ng-click="item.is_edit = true"><md-icon>mode_edit</md-icon>Edit</md-button></md-menu-item>' +
                                    (scope.actualOptions.delete ? '<md-menu-item><md-button ng-click="deleteConfirm(item)"><md-icon>delete</md-icon>Delete</md-button></md-menu-item>' : '') +
                                '</md-menu-content>' +
                            '</md-menu>' +
                        '</md-grid-tile>';
                }

                tplHead +=
                    '</md-grid-list>' +
                '</md-list-item>';

                tplBodyNewItem +=
                        '</md-grid-list>' +
                    '</md-content>' +
                '</md-list-item>';

                tplBodyItem +=
                        '</md-grid-list>' +
                    '</md-content>' +
                '</md-list-item>';

                var tableHtml = '';

                tableHtml += tplHead;

                if(scope.actualOptions.create){

                    if(scope.actualOptions.modal_adder)
                        tplHtml += '<button class="btn btn-success" ng-click=""><span class="glyphicon glyphicon-plus"></span> Add</button>';
                    else
                        tableHtml += tplBodyNewItem;
                }

                tableHtml += tplBodyItem;

                tplHtml += tableHtml +
                        '</md-list>' +
                    '</md-content>';

                if(scope.actualOptions.paginate) {
                    tplHtml += '<ae-paging ng-model="ajaxList.paging" ng-change="getList()"></ae-paging>';
                }

                angular.element(element).html('');

                var template = angular.element('<md-content layout="column" flex>' + tplHtml + '</md-content>');

                angular.element(element).append($compile(template)(scope));
            });
            
            scope.$watchCollection('options.lists', function(new_lists) {
                angular.extend(scope.actualOptions.lists, new_lists);
            });

            // *************************************************************
            // GET LIST, SEARCH, PAGINATION AND SORTING
            // *************************************************************

            scope.getList = function(){
                scope.ajaxList.getData(!scope.actualOptions.ajax_handler).$promise.then(function(list){
                    scope.ngModel = list;
                });
            };

            // *************************************************************
            // CLIENT SEARCH
            // *************************************************************

            scope.search = function(newQuery, oldQuery){
                scope.filtredList = scope.ngModel;

                if(newQuery == oldQuery && scope.actualOptions.ajax_handler)
                    return;

                if(scope.actualOptions.ajax_handler){
                    scope.getList();
                    return;
                }

                if(scope.searchQuery)
                    scope.filtredList = $filter('filter')(scope.ngModel, scope.searchQuery);

                if(scope.actualOptions.order_by)
                    scope.filtredList = $filter('orderBy')(scope.filtredList, scope.actualOptions.order_by);
            };

            scope.$watch('ajaxList.search', scope.search);

            // *************************************************************
            // EDIT
            // *************************************************************

            scope.editItem = function(item){
                if(!item.is_edit){
                    item.is_edit = true;
                } else {
                    scope.actualOptions.resource.get(item, function(response){
                        angular.extend(item, response);
                    });
                    item.is_edit = false;
                }
            };

            // *************************************************************
            // CREATE OR UPDATE
            // *************************************************************

            scope.save = function(item){
                if(!item)
                    return;

                item.errors || (item.errors = {});

                // validation - check required fields and password
                scope.actualOptions.fields.forEach(function(field){
                    //if field empty and required - add to errors, else delete from errors
                    if(field.required && !item[field.name])
                        item.errors[field.name] = true;
                    else if(item.errors[field.name])
                        delete item.errors[field.name];

                    //if password not changed and not new object
                    if(field.type == 'password' && item.id)
                        delete item.errors[field.name];

                    //if password not changed delete field from request data
                    if(field.type == 'password' && !item[field.name])
                        delete item[field.name];
                });

                // if there some errors
                if(!AEditHelpers.isEmptyObject(item.errors))
                    return;

                // actions after save
                function saveCallbacks(item){
                    if(scope.onSave)
                        $timeout(scope.onSave);

                    if(scope.actualOptions.callbacks.onSave)
                        $timeout(scope.actualOptions.callbacks.onSave);

                    if(scope.ngChange)
                        $timeout(scope.ngChange);

                    if(scope.actualOptions.callbacks.onChange)
                        $timeout(scope.actualOptions.callbacks.onChange);

                    scope.search();

                    item.is_edit = false;

                    scope.status = item.name + " saved!";
                    $timeout(function(){
                        scope.status = "";
                    }, 1000);

                    if(mode != 'remote'){
                        delete item.is_new;
                        delete item.is_edit;
                        delete item.errors;
                    }
                }

                // local json mode
                if(mode != 'remote'){
                    if(item.is_new){
                        var track_by = scope.actualOptions.track_by;

                        item[track_by] = 1;
                        scope.ngModel.forEach(function(local_item){
                            if(local_item[track_by] >= item[track_by])
                                item[track_by] = local_item[track_by] + 1;
                        });

                        scope.ngModel.unshift(item);
                        scope.new_item = angular.copy(new_item);
                    }

                    saveCallbacks(item);

                    return;
                }

                var request_object = angular.copy(item);

                // check for files from file uploader
                var uploaders = Object.keys(request_object).filter(function(k){ return ~k.indexOf("__uploader") });
                // if exists - upload each file and set to *field*_ids array database object of file
                // TODO: realize mode for take paths of files(not ids of database rows with paths)
                if(uploaders.length){

                    uploaders.forEach(function(key){

                        function sendAll(){
                            var prop_name = key.replace('__uploader','');
                            if(!request_object[prop_name]){
                                sendItem();
                                return;
                            }

                            request_object[prop_name.substring(0, prop_name.length - 1) + '_ids'] = request_object[prop_name].map(function(obj){
                                return obj.id;
                            });
                            delete request_object[key];
                            delete request_object[prop_name];
                            sendItem();
                        }

                        if(!request_object[key].queue.length){
                            sendAll();
                        } else {
                            request_object[key].onSuccessItem = function(){
                                if(!request_object[key].queue.length){
                                    sendAll();
                                }
                            };
                        }
                    });
                } else {
                    sendItem();
                }

                function sendItem(){
                    var resource = new scope.actualOptions.resource(request_object);

                    if('id' in request_object && request_object.id){
                        // update if id field exist
                        AEditHelpers.getResourceQuery(resource, 'update').then(function(updated_item){
                            angular.extend(item, updated_item);

                            saveCallbacks(item);
                        });
                    } else {
                        //create if id not exist
                        angular.forEach(scope.actualOptions.default_attrs, function(value, attr){
                            request_object[attr] = value;
                        });

                        AEditHelpers.getResourceQuery(resource, 'create').then(function(created_item){
                            created_item.is_new = true;

                            scope.ngModel.unshift(created_item);
                            delete scope.new_item;
                            scope.new_item = angular.copy(new_item);

                            saveCallbacks(item);
                        });
                    }
                }
            };
            // *************************************************************
            // DELETE
            // *************************************************************

            scope.deleteConfirm = function(item){
                var index = scope.ngModel.indexOf(item);

                function deleteCallbacks(){
                    scope.ngModel.splice(index, 1);
                    if(scope.ngChange)
                        $timeout(scope.ngChange);

                    if(scope.actualOptions.callbacks.onChange)
                        $timeout(scope.actualOptions.callbacks.onChange);
                }
                if(mode != 'remote'){
                    deleteCallbacks();
                    return;
                }

                if(confirm('Do you want delete object "' + (item.name || item.key || item.title) + '"?')){
                    AEditHelpers.getResourceQuery(new scope.actualOptions.resource(item), 'delete').then(function(){
                        deleteCallbacks();
                    });
                }
            };

            // *************************************************************
            // WATCHERS
            // *************************************************************

            scope.$watchCollection('ngModel', function(list){
                if(!list)
                    return;

                if(mode == 'local'){
                    var track_by = scope.actualOptions.track_by;
                    list.forEach(function(item, index){
                        if(!item[track_by] || item[track_by] == 0)
                            item[track_by] = list.length + index + 1;
                    })
                }

                scope.search();
                scope.actualOptions.lists['self'] = list;
            });
        }
    };
}]);

angular
    .module('a-edit')

    .directive('aeObjectModal', ['$timeout', '$log', '$cacheFactory', 'AEditHelpers', 'AEditConfig', '$mdDialog', function($timeout, $log, $cacheFactory, AEditHelpers, AEditConfig, $mdDialog) {
        var cache = $cacheFactory('aModal.Templates');

        return {
            restrict: 'A',
            scope: {
                //require
                aeObjectModal: '=',
                modalResourceOptions: '=?',
                viewMode: '=?',
                //callbacks
                onSave: '&'
            },
            link: function (scope, element, attrs) {

                var resource_name = attrs.aeObjectModal + new Date().getTime();
                scope.options = scope.modalResourceOptions || AEditConfig.current_options;

                element.on("click", function () {
                    var template = cache.get(resource_name) || '';
                    //'<button ng-click="cancel()" class="close pull-right"><span>&times;</span></button>' +
                    if(!template){
                        template +=
                            '<md-dialog class="ae-object-modal">' +
                                '<md-toolbar>' +
                                    '<div class="md-toolbar-tools">' +
                                        '<h3>Awesome modal!</h3>' +

                                        '<span flex></span>' +

                                        '<md-button class="md-icon-button" ng-click="object.is_edit = !object.is_edit">' +
                                            '<md-icon>mode_edit</md-icon>' +
                                        '</md-button>' +
                                    '</div>' +
                                '</md-toolbar>' +
                                '<md-dialog-content class="padding">';
                        
                        scope.options.fields.forEach(function(field){
                            template += '<md-content flex="grow" layout>';

                            template += '<div layout="column" layout-align="center" flex="30" style="text-align: right" class="padding"><label>' + field.label + '</label></div>';
                            template += '<div layout="column" layout-align="center" flex="70" class="padding">' + AEditHelpers.generateDirectiveByConfig(field, {
                                item_name: 'object',
                                lists_container: 'lists',
                                already_modal: true,
                                no_label: true
                            }) + '</div>';

                            template += '</md-content>';
                        });
                        
                        template +=
                                '</md-dialog-content>' +
                                '<md-dialog-actions>' +
                                    '<md-button ng-click="ok()" class="md-primary">OK</md-button>' +
                                '</md-dialog-actions>' +
                            '</md-dialog>';
                            
                        cache.put(resource_name, template);
                    }

                    var modalInstance = $mdDialog.show({
                        clickOutsideToClose: true,
                        template: template,
                        locals: {
                            data: {
                                object: angular.copy(scope.aeObjectModal),
                                resource: scope.options.resource,
                                lists: scope.options.lists,
                                viewMode: scope.viewMode
                            }
                        },
                        controller: ['$scope', '$mdDialog', 'data', function($scope, $mdDialog, data) {
                            angular.extend($scope, data);

                            AEditHelpers.getResourceQuery(new scope.options.resource($scope.object), 'show').then(function(object){
                                $scope.object = object;
                                $scope.object.is_edit = data.viewMode;
                            });
                            
                            $scope.ok = function () {
                                $scope.object.is_edit = false;
                                $mdDialog.hide($scope.object);
                            };
                            $scope.cancel = function () {
                                $mdDialog.cancel();
                            };
                        }]
                    });

                    modalInstance.then(function (object) {
                        angular.extend(scope.aeObjectModal, object);
                        
                        if(scope.onSave)
                            $timeout(scope.onSave);
                    }, function () {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                });

                scope.save = function(){
                    if(scope.onSave)
                        $timeout(scope.onSave);
                }
            }
        };
    }]);

angular
    .module('a-edit')
    .directive('aePaging', ['AppPaths', function(AppPaths) {
        return {
            restrict: 'E',
            templateUrl: 'a-edit-paging.html',
            scope: {
                ngModel: '=',
                ngChange: '&',
                totalItems: '='
            },
            link: function (scope, element) {
                scope.$watch('ngModel.total_items', function(totalItems){
                    scope.ngModel.total_pages = Math.ceil(parseInt(totalItems) / scope.ngModel.per_page);
                })
            }
        };
    }]);
angular
    .module('a-edit')

    .directive('aeSelectInput', ['$timeout', '$compile', '$templateCache', '$mdPanel', 'AEditHelpers' ,'AEditConfig', function($timeout, $compile, $templateCache, $mdPanel, AEditHelpers, AEditConfig) {
        function getTemplateByType(type, options){
            options = options || {};

            var mdSelect = {
                //attributes: '',
                //match: 'selectedName',
                //itemId: 'item.id',
                itemName: 'getNameFromObj(item)',
                //subClasses: ''
            };

            var template = '<label ng-if="!viewMode">{{label}}</label>';
            if(type == 'select' || type == 'textselect') {
                template += '<span ng-if="viewMode">{{getNameFromObj(options.selected)}}</span>';
            }

            if(type == 'multiselect') {
                template += '' +
                    '<md-chips ng-model="options.selected">' +
                        '<md-chip-template>' +
                            '<span>{{getNameFromObj($chip)}}</span>' +
                        '</md-chip-template>';
            }

            template +=
                        '<md-autocomplete ' +
                            (type == 'select' || type == 'textselect' ? 'ng-if="!viewMode" md-selected-item="$parent.options.selected" ' : ' ') +
                            'id="{{id}}" ' +
                            'md-search-text="options.search" ' +
                            'md-items="item in getListByResource(options.search)" ' + // | filter:options.search"
                            'md-no-cache="true" ' +
                            'ng-disabled="ngDisabled" ' +
                            'md-search-text-change="getListByResource(options.search)" ' +
                            'md-selected-item-change="selectedItemChange(item)" ' +
                            'md-item-text="' + mdSelect.itemName + '" ' +
                            'md-min-length="0" ' +
                            'placeholder="{{placeholder}}"> ' +
                                '<md-item-template> ' +
                                    '<span md-highlight-text="options.search" md-highlight-flags="^i">{{' + mdSelect.itemName + '}}</span> ' +
                                '</md-item-template>' +
                                '<md-not-found>' +
                                    'Not found. <a ng-click="newItem(options.search)" ng-show="adder">Create a new one?</a>' +
                                '</md-not-found>' +
                        '</md-autocomplete>';


            if(type == 'multiselect') {
                template += '' +
                    '</md-chips>';
            }

            return template;
        }

        var typeTemplates = {
            'select': $compile(getTemplateByType('select')),
            'textselect': $compile(getTemplateByType('textselect')),
            'multiselect': $compile(getTemplateByType('multiselect'))
        };

        return {
            restrict: 'E',
            require: 'ngModel',
            scope: {
                //require
                list: '=?',
                ngModel: '=',
                ngModelStr: '=?',
                viewMode: '=?',
                hasError: '=?',

                ngResource: '=?',
                ngResourceFields: '=?',

                refreshListOn: '=?',

                //callbacks
                ngChange: '&',
                onSave: '&',
                onSelect: '&',
                //sub
                adder: '=?',
                getList: '=?',
                nameField: '@',
                orNameField: '@',
                placeholder: '@',
                label: '@',
                name: '@',
                type: '@' //select or multiselect
            },
            link: function (scope, element, attrs, ngModel) {
                scope.id = 'ae-edit-select-xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});
                //=============================================================
                // Config
                //=============================================================
                var variables = angular.extend({}, AEditConfig.grid_options.request_variables, AEditConfig.grid_options.response_variables);

                scope.refreshDelay = AEditConfig.select_options.refresh_delay;
                scope.resetSearchInput = AEditConfig.select_options.reset_search_input;

                scope.options = {
                    selected: scope.type == 'multiselect' ? [] : null,
                    search: ''
                };

                scope.full_type = scope.type = scope.type || 'select';
                if(scope.adder)
                    scope.full_type += '-adder';

                scope.fakeModel = scope.ngModel;

                //=============================================================
                // Compile
                //=============================================================

                typeTemplates[scope.type](scope, function (clonedElement, scope) {
                    element.empty();
                    element.append(clonedElement);
                });

                //=============================================================
                // Output validation
                //=============================================================
                //scope.$watch('hasError', function(hasError){
                //    scope.input_class = hasError ? "has-error" : '';
                //});

                //=============================================================
                // Callbacks
                //=============================================================
                scope.selectedItemChange = function(){
                    $timeout(scope.onSelect);
                    $timeout(scope.ngChange);

                    if(scope.type == 'select')  {
                        scope.fakeModel =  scope.options.selected ?  scope.options.selected.id : null;
                    } else if(scope.type == 'multiselect'){
                        scope.fakeModel = scope.options.selected ?  scope.options.selected.map(function(item){return item.id;}) : [];
                    } else if(scope.type == 'textselect'){
                        scope.fakeModel = scope.options.selected;
                    }

                    scope.ngModel = scope.fakeModel;

                    //scope.options.search = '';

                    scope.getListByResource();
                };

                scope.$watch('ngModel', function(newVal){
                    if(scope.fakeModel == newVal)
                        return;

                    scope.fakeModel = newVal;

                    scope.setSelected();
                });

                //=============================================================
                // Init select list
                //=============================================================
                function initListGetByResource(){
                    if(!scope.ngResource || !scope.getList || (scope.local_list && scope.local_list.length))
                        return;

                    scope.getListByResource();
                }

                scope.getListByResource = function (query){
                    if(!scope.ngResource)
                        return;

                    var request_options = {};
                    if(scope.options.search)
                        request_options[variables['query']] = scope.options.search;
                    else
                        delete request_options[variables['query']];

                    request_options[variables['limit']] = AEditConfig.select_options.items_per_page;

                    if(scope.type == 'multiselect')
                        request_options[variables['id_not_in']] = scope.ngModel && scope.ngModel.length ? scope.ngModel.join(',') : [];

                    return AEditHelpers.getResourceQuery(scope.ngResource, 'get', request_options).then(function(list){
                        scope.local_list = list;

                        scope.setSelected();
                        return list;
                    });
                };

                scope.$watch('ngResource', initListGetByResource);
                scope.$watch('refreshListOn', initListGetByResource);

                //=============================================================
                // Output non edit mode
                //=============================================================
                scope.$watch('list', function(list){
                    scope.local_list = angular.copy(list);
                    scope.setSelected();
                });

                scope.setSelected = function(){
                    if(!scope.local_list || !scope.local_list.length)
                        return;

                    if(scope.type == 'textselect'){
                        scope.options.selected = scope.ngModel ? scope.ngModel : '';
                        return;
                    }

                    if(scope.type == 'multiselect' && scope.ngModel && scope.ngModel.length){
                        if(scope.options.selected && scope.options.selected.length && scope.fakeModel.length == scope.options.selected.length)
                            return;

                        scope.options.selected = [];

                        scope.ngModel.forEach(function(id, index){
                            var foundItem = null;
                            scope.local_list.some(function(item){
                                if(item.id == id)
                                    foundItem = item;

                                return item.id == id;
                            });

                            if(foundItem){
                                scope.options.selected[index] = foundItem;
                            } else {
                                getObjectFromServer(id).then(function(serverItem){
                                    scope.options.selected[index] = serverItem;
                                })
                            }
                        });
                    } else if(scope.type == 'select' && scope.ngModel)  {
                        if(scope.options.selected)
                            return;

                        var found = scope.local_list.some(function(item){
                            if(item.id == scope.ngModel)
                                scope.options.selected = item;

                            return item.id == scope.ngModel;
                        });
                        if(!found){
                            getObjectFromServer(scope.ngModel).then(function(serverItem){
                                scope.options.selected = serverItem;
                            })
                        }
                    }
                };

                function getObjectFromServer(id){
                    return AEditHelpers.getResourceQuery(scope.ngResource, 'show', {id: id});
                }
                scope.getNameFromObj = function(obj){
                    if(!obj)
                        return '';

                    if(scope.type == 'textselect')
                        return obj;

                    return obj[scope.nameField] || obj.name || obj[scope.orNameField];
                };

                scope.newItem = function(){
                    if(scope.type == 'textselect' || !scope.ngResourceFields || !scope.ngResourceFields.length)
                        scope.ngResourceFields = [{name: scope.nameField || 'name' || scope.orNameField, label: ''}];

                    var inputsHtml = '';
                    var data = { lists: {} };
                    scope.ngResourceFields.forEach(function(field){
                        if(field.name == scope.nameField || field.name == 'name' || field.name == scope.orNameField)
                            field.default_value = scope.options.search;

                        inputsHtml += '<div flex="grow" layout="row" layout-fill>' + AEditHelpers.generateDirectiveByConfig(field, {
                                            item_name: 'new_object',
                                            lists_container: 'lists',
                                            always_edit: true,
                                            get_list: true,
                                            is_new: true
                                            //already_modal: true
                                        }) + '</div>';

                        data.lists[field.list] = [];

                        if(field.resource){
                            data[field.name + '_resource'] = field.resource;
                        }

                        if(field.type == 'multiselect'){
                            data.new_object[field.name] = [];
                        }
                    });

                    var position = $mdPanel.newPanelPosition()
                        .relativeTo('#' + scope.id)
                        .addPanelPosition($mdPanel.xPosition.ALIGN_START, $mdPanel.yPosition.ABOVE);

                    $mdPanel.open({
                        clickOutsideToClose: false,
                        position: position,
                        focusOnOpen: false,
                        hasBackdrop: true,
                        bindToController: false,
                        panelClass: 'md-background md-hue-3',
                        locals: {
                            data: data
                        },
                        controller: ['$scope', 'mdPanelRef', 'data', function ($scope, mdPanelRef, data) {
                            angular.extend($scope, data);
                            $scope.save = function() {
                                mdPanelRef.save($scope.new_object);
                                mdPanelRef.hide();
                            };
                            $scope.cancel = function() {
                                mdPanelRef.hide();
                            };
                        }],
                        template: '' +
                        '<md-content layout="column">' +
                            '<md-toolbar class="md-primary"><div class="md-toolbar-tools"><h4>Create new</h4><span class="flex"></span><md-button class="md-icon-button" ng-click="cancel()"><md-icon>close</md-icon></md-button></div></md-toolbar>' +
                            '<md-content layout="row" class="padding" layout-wrap>' +
                                inputsHtml +
                            '</md-content>' +
                            '<md-content layout="row">' +
                                '<md-button ng-click="save()">Save</md-button>' +
                                '<md-button ng-click="cancel()">Cancel</md-button>' +
                            '</md-content>' +
                        '</md-content>'
                    }).then(function(mdPanelRef){
                        mdPanelRef.save = scope.saveToList;
                    });
                };

                //=============================================================
                // Add new item to select list by adder
                //=============================================================
                scope.saveToList = function(new_object){
                    if(scope.type == 'textselect'){
                        //get first property of object and add it to list
                        var is_first_prop = true;
                        angular.forEach(new_object, function(prop_value){
                            if(is_first_prop){
                                scope.local_list.unshift(prop_value);
                                scope.ngModel = prop_value;
                            }
                            is_first_prop = false;
                        });
                        return;
                    }

                    AEditHelpers.getResourceQuery(new scope.ngResource(new_object), 'create').then(function(object){
                        scope.options.search = '';

                        if(scope.type == 'multiselect')
                            scope.fakeModel.push(object.id);
                        else if(scope.type == 'select')
                            scope.fakeModel = object.id;

                        scope.ngModel = scope.fakeModel;

                        scope.setSelected();
                    });
                }
            }
        };
    }]);
angular
    .module('a-edit')
    .directive('aeTextInput', ['$timeout', '$compile', function($timeout, $compile) {
        function getTemplateByType(type, options){
            var text = '{{$parent.ngModel}}';
            var inputTagBegin = '<input type="text" ';
            var inputTagEnd = '';

            if(options && options.modal_link)
                text = '<a ae-object-modal="modalObject" modal-resource-options="modalOptions" on-save="save()" href>' + text + '</a>';
            else if(type == 'textarea'){
                text = '<pre ng-if="$parent.ngModel">{{$parent.ngModel}}</pre>';

                inputTagBegin = '<textarea ';
                inputTagEnd = '</textarea>';
            } else if(type == 'password'){
                text = '<small>[password hidden]</small>';

                inputTagBegin = '' +
                    '<a href ng-click="changePassword = true" ng-show="!isNew && !changePassword">Change password</a>' +
                    '<div ng-show="changePassword || isNew"><input type="password" ';
                inputTagEnd = '</div>';
            }

            inputTagBegin += 'ng-change="ngChange()" ';

            inputTagBegin = '<md-input-container flex="grow"><label>{{$parent.label}}</label>' + inputTagBegin;
            inputTagEnd += '</md-input-container>';

            return '' +
                '<div ng-if="viewMode">' +
                text +
                '</div>' +
                '<div ng-if="!viewMode" ng-class="input_class" layout>' +
                inputTagBegin +
                ' placeholder="{{$parent.placeholder}}" ' +
                ' ng-model="$parent.ngModel" ' + (type != 'textarea' ? 'ng-enter="$parent.save()"' : '') +
                ' ng-model-options="$parent.ngModelOptions || {}"' +
                ' ng-style="{ \'width\' : $parent.width + \'px\'}"' +
                ' ng-disabled="$parent.ngDisabled == 1" >' +
                inputTagEnd +
                '</div>';
        }

        var typeTemplates = {
            'text': $compile(getTemplateByType('text')),
            'password': $compile(getTemplateByType('password')),
            'text_modal_link': $compile(getTemplateByType('text', {modal_link: true})),
            'textarea': $compile(getTemplateByType('textarea'))
        };

        return {
            restrict: 'E',
            scope: {
                //require
                ngModel: '=',
                ngModelOptions: '=?',
                ngModelStr: '=?',
                isNew: '=?',
                viewMode: '=?',
                modalObject: '=?',
                modalOptions: '=?',
                hasError: '=?',
                ngDisabled: '=?',
                defaultValue: '@',
                //callbacks
                ngChange: '&',
                onSave: '&',
                //sub
                label: '@',
                placeholder: '@',
                name: '@',
                width: '@',
                required: '@',
                type: '@' //text or textarea
            },
            link: function (scope, element, attrs) {
                scope.type = scope.type || 'text';
                if(attrs.modalObject && scope.type == 'text')
                    scope.type = "text_modal_link";

                var template = typeTemplates[scope.type],
                    templateElement;

                template(scope, function (clonedElement, scope) {
                    templateElement = clonedElement;
                    element.append(templateElement);
                });

                template = null;

                element.on("$destroy", function () {
                    templateElement.remove();
                    templateElement = null;
                });

                scope.$watch('hasError', function(hasError){
                    scope.input_class = hasError ? "has-error" : '';
                });

                function setDefaultValue(){
                    if(!scope.ngModel && scope.defaultValue)
                        scope.ngModel = scope.defaultValue;
                }
                setDefaultValue();
                //scope.$watch('ngModel', setDefaultValue);
                //scope.$watch('defaultValue', setDefaultValue);

                scope.save = function(){
                    if(scope.required && !scope.ngModel){
                        scope.input_class = "has-error";
                        return;
                    }

                    scope.input_class = '';
                    if(scope.onSave)
                        $timeout(scope.onSave);
                }
            }
        };
    }]);

angular
    .module('a-edit')
    .directive('iconButton', ['$timeout', function($timeout) {
        return {
            restrict: 'E',
            template: '<button type="button" class="btn btn-{{type}} btn-{{size || \'xs\'}}" ng-click="click()">' +
            '<span class="glyphicon glyphicon-{{glyphicon}}" aria-hidden="true"></span>' +
            '</button>',
            scope: {
                type: '@',
                size: '@',
                glyphicon: '@'
            },
            link: function (scope, element) {

            }
        };
    }]);

angular
    .module('a-edit')

    .directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    });
angular
    .module('a-edit')
    .directive('popoverImage', ['$timeout', '$filter', function($timeout, $filter) {
        return {
            restrict: 'E',
            templateUrl: 'a-edit-popover-image.html',
            scope: {
                //require
                ngModel: '=',
                text: '=?'
            },
            link: function (scope, element) {
                scope.text = scope.text || scope.ngModel.name;
                scope.image = scope.ngModel.image_src || scope.ngModel.file || scope.ngModel;

                scope.imagePopoverPath = 'a-edit-image-popover.html';
            }
        };
    }]);

angular
    .module('a-edit')
    .service('AEditAjaxHelper', [function(){

        return function AjaxHelper(resource, queryOptions){
            var self = this;

            self.resource = resource;

            self.params = {
                _limit: 15,
                _config: 'meta-total-count,meta-filter-count'
            };

            if(queryOptions){
                angular.extend(self.params, queryOptions)
            }

            self.paging = {
                current: 1,
                per_page: 10
            };

            self.search = '';

            self.sorting = { };

            self.defaultSorting = {
                id: 'DESC'
            };

            self.getData = function(is_exclude_params){
                self.prepareQuery();

                return self.resource.query(is_exclude_params ? {} : self.temp_params, function(data, headers){
                    self.data = data;
                    self.paging.total_items = headers('Meta-Filter-Count');
                    return data;
                });
            };

            self.prepareQuery = function(){
                self.temp_params = angular.copy(self.params);

                self.searchToQuery();
                self.pagingToQuery();
                self.sortingToQuery();
                self.likeParamsToQuery();
            };

            self.searchToQuery = function(){
                if(self.search)
                    self.temp_params._q = self.search;
                else
                    delete self.temp_params._q;
            };

            self.pagingToQuery = function(){
                if(!self.paging)
                    return;

                self.temp_params._limit = self.paging.per_page;
                self.temp_params._offset = (self.paging.current - 1) * self.paging.per_page;
            };

            self.sortingToQuery = function(){
                self.temp_params._sort = '';

                var sorting = _.isEmpty(self.sorting) ? self.defaultSorting : self.sorting;

                if(!sorting)
                    return;

                _.forEach(sorting, function(value, name){
                    if(!value)
                        return;

                    if(self.temp_params._sort)
                        self.temp_params._sort += ',';

                    if(value == 'DESC')
                        self.temp_params._sort += '-';

                    self.temp_params._sort += name;
                });
            };

            self.likeParamsToQuery = function(){
                angular.forEach(self.temp_params, function callback(value, name){
                    if (name.indexOf('-lk') != -1) {
                        self.temp_params[name] = '*' + value + '*';
                    }
                });
            }
        };
    }]);
/**
 * Created by jonybang on 04.07.15.
 */
angular.module('a-edit')
    .factory('AEditConfig', [function() {
        this.templates_path = 'templates/';

        this.current_options = {};

        this.grid_options = {
            request_variables: {
                query: '_q',
                offset: '_offset',
                limit: '_limit',
                sort: '_sort',
                page: '_page',
                id_not_in: 'id-not-in'
            },
            additional_request_params:{},
            response_variables: {
                meta_info: 'meta', //container for total_count, current_page and etc.
                list: 'data', //container for data of response
                total_count: 'total_count',
                filter_count: 'filter_count'
            },
            items_per_page: 15
        };

        this.select_options = {
            ajax_handler: true,
            items_per_page: 15,
            refresh_delay: 200,
            reset_search_input: true
        };

        return this;
    }]);

/**
 * Created by jonybang on 04.07.15.
 */
angular.module('a-edit')
    .factory('AEditHelpers', [function() {
        var service = {
            //config:
            //  html_attributes
            //  lists_container
            //  list_variable
            //  item_name
            //  field_name
            //  always_edit
            generateDirectiveByConfig: function(field, config){
                var output = '';
                var directive = '';

                switch(field.type){
                    case 'select':
                    case 'textselect':
                    case 'multiselect':
                        directive = 'select-input';
                        break;
                    case 'date':
                        directive = 'date-input';
                        break;
                    case 'bool':
                        directive = 'bool-input';
                        break;
                    case 'file':
                    case 'multifile':
                        directive = 'file-upload';
                        break;
                    default:
                        directive = 'text-input';
                        break;
                }

                if(field.directive)
                    directive = field.directive;
                else
                    directive = 'ae-' + directive;

                output += '<' + directive + ' ';

                output += 'type="' + (field.type || '') + '" ' +
                    'input-name="' + (field.input_name || '') + '" ';

                //if(field.width)
                 //   output += 'width="' + field.width + '" ';

                if(field.required)
                    output += 'required="true" ';

                if('get_list' in config)
                    output += 'get-list="' + config.get_list + '" ';

                if(field.url)
                    output += 'url="' + field.url + '" ';

                if(field.resource)
                    output += 'ng-resource="' + field.name + '_resource" ';

                if(field.fields)
                    output += 'ng-resource-fields="' + field.name + '_fields" ';

                if(config.list_variable)
                    output += 'list="' + config.list_variable + '" ';
                else if(config.lists_container)
                    output += 'list="' + config.lists_container + '.' + field.list + '" ';

                var item_name = angular.isUndefined(config.item_name) ? 'item' : config.item_name;
                var field_name = angular.isUndefined(config.field_name) ? field.name : config.field_name;
                var item_field = item_name + (field.name != 'self' ? '.' : '') + field_name;

                var is_edit;
                if(field.readonly || config.readonly)
                    is_edit = 'false';
                else if(config.always_edit)
                    is_edit = 'true';
                else
                    is_edit = item_name + '.is_edit';
                    
                output += 'ng-model="' + item_field + '" ' +
                    'on-save="save(' + item_name + ')" ' +
                    'has-error="' + item_name + '.errors.' + field_name + '" ' +
                    'ng-model-str="' + item_name + '.' +  field_name + '_str" ' +
                    'ng-model-sub-str="' + item_name + '.' +  field_name + '_sub_str" ' +
                    (field.default_value ? 'default-value="' + field.default_value + '" ' : '') +
                    (config.no_label ? '' : 'label="' + field.label + '" ' )+
                    'view-mode="!' + is_edit + '" '+
                    'is-new="' + (config.is_new ? 'true': 'false') + '" '+
                    'ng-class="{\'edit\':' + (config.is_new ? 'true': is_edit) + '}" '+
                    'placeholder="' + ((config.always_edit ? field.new_placeholder : field.placeholder) || '') + '" ';

                if(directive == 'ae-file-upload')
                    output += 'uploader="' + item_name + '.' + field_name + '__uploader" ';

                if(directive == 'ae-select-input'){
                    output += 'name-field="' + (field.name_field || '') + '" ';
                    output += 'or-name-field="' + (field.or_name_field || '') + '" ';
                    output += 'adder="' + (field.adder || 'false') + '" ';
                }

                if(field.modal && !config.already_modal && field.modal == 'self'){
                    output += 'modal-object="' + item_name + '" ';
                    output += 'modal-options="actualOptions" ';
                }

                output += '></' + directive + '>';

                return output;
            },
            getResourceQuery: function(obj, action, options){
                options = options || {};
                
                var possibleFunctions;
                switch(action){
                    case 'search':
                        possibleFunctions = ['get'];
                        break;
                    case 'get':
                        possibleFunctions = ['query', 'get'];
                        break;
                    case 'show':
                        possibleFunctions = ['$get', 'get'];
                        break;
                    case 'create':
                        possibleFunctions = ['$save', 'create'];
                        break;
                    case 'update':
                        possibleFunctions = ['$update', 'update', '$save'];
                        break;
                    case 'delete':
                        possibleFunctions = ['$delete', 'delete'];
                        break;
                }
                
                var query;
                possibleFunctions.some(function(functionName){
                    if(obj[functionName])
                        query = obj[functionName](options);
                    
                    return obj[functionName];
                });
                
                if(!query){
                    console.error('Undefined model resource! Override getResourceQuery function in AEditHelpers service for define custom resource function.')
                }
                return query.$promise || query;
            },
            isEmptyObject: function(obj) {
                for(var prop in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                        return false;
                    }
                }
                return true;
            },
            getNameById: function(list, val, nameField, orNameField){
                var resultName = '';

                if(!list || !list.length)
                    return resultName;

                list.some(function(obj){
                    var result = obj.id == val;
                    if(result)
                        resultName = obj[nameField] || obj.name || obj[orNameField];
                    return result;
                });
                return resultName;
            },
            round5: function(x){
                return Math.floor(x/5)*5;
            }
        };

        return service;
    }]);

/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(S,B){'use strict';function Aa(a,b,c){if(!a)throw Ma("areq",b||"?",c||"required");return a}function Ba(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;ca(a)&&(a=a.join(" "));ca(b)&&(b=b.join(" "));return a+" "+b}function Na(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function Y(a,b,c){var d="";a=ca(a)?a:a&&P(a)&&a.length?a.split(/\s+/):[];s(a,function(a,l){a&&0<a.length&&(d+=0<l?" ":"",d+=c?b+a:a+b)});return d}function Oa(a){if(a instanceof E)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return E(da(a))}if(1===a.nodeType)return E(a)}function da(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Pa(a,b,c){s(b,function(b){a.addClass(b,c)})}function Qa(a,b,c){s(b,function(b){a.removeClass(b,c)})}function V(a){return function(b,c){c.addClass&&(Pa(a,b,c.addClass),c.addClass=null);c.removeClass&&(Qa(a,b,c.removeClass),c.removeClass=null)}}function pa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
R;a.domOperation=function(){a.$$domOperationFired=!0;b();b=R};a.$$prepared=!0}return a}function ha(a,b){Ca(a,b);Da(a,b)}function Ca(a,b){b.from&&(a.css(b.from),b.from=null)}function Da(a,b){b.to&&(a.css(b.to),b.to=null)}function W(a,b,c){var d=b.options||{};c=c.options||{};var e=(d.addClass||"")+" "+(c.addClass||""),l=(d.removeClass||"")+" "+(c.removeClass||"");a=Ra(a.attr("class"),e,l);c.preparationClasses&&(d.preparationClasses=Z(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
e=d.domOperation!==R?d.domOperation:null;Ea(d,c);e&&(d.domOperation=e);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ra(a,b,c){function d(a){P(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);s(b,function(a,b){e[b]=1});c=d(c);s(c,function(a,b){e[b]=1===e[b]?null:-1});var l={addClass:"",removeClass:""};s(e,function(b,c){var d,e;1===b?(d="addClass",
e=!a[c]):-1===b&&(d="removeClass",e=a[c]);e&&(l[d].length&&(l[d]+=" "),l[d]+=c)});return l}function z(a){return a instanceof B.element?a[0]:a}function Sa(a,b,c){var d="";b&&(d=Y(b,"ng-",!0));c.addClass&&(d=Z(d,Y(c.addClass,"-add")));c.removeClass&&(d=Z(d,Y(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function qa(a,b){var c=b?"-"+b+"s":"";la(a,[ma,c]);return[ma,c]}function ta(a,b){var c=b?"paused":"",d=$+"PlayState";la(a,[d,c]);return[d,c]}function la(a,b){a.style[b[0]]=
b[1]}function Z(a,b){return a?b?a+" "+b:a:b}function Fa(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};s(c,function(a,b){var c=e[a];if(c){var k=c.charAt(0);if("-"===k||"+"===k||0<=k)c=Ta(c);0===c&&(c=null);d[b]=c}});return d}function Ta(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function ua(a){return 0===a||null!=a}function Ga(a,b){var c=T,d=a+"s";b?c+="Duration":d+=" linear all";
return[c,d]}function Ha(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ia(a,b,c){s(c,function(c){a[c]=ea(a[c])?a[c]:b.style.getPropertyValue(c)})}var R=B.noop,Ja=B.copy,Ea=B.extend,E=B.element,s=B.forEach,ca=B.isArray,P=B.isString,va=B.isObject,O=B.isUndefined,ea=B.isDefined,Ka=B.isFunction,wa=B.isElement,T,xa,$,ya;O(S.ontransitionend)&&
ea(S.onwebkittransitionend)?(T="WebkitTransition",xa="webkitTransitionEnd transitionend"):(T="transition",xa="transitionend");O(S.onanimationend)&&ea(S.onwebkitanimationend)?($="WebkitAnimation",ya="webkitAnimationEnd animationend"):($="animation",ya="animationend");var ra=$+"Delay",za=$+"Duration",ma=T+"Delay",La=T+"Duration",Ma=B.$$minErr("ng"),Ua={transitionDuration:La,transitionDelay:ma,transitionProperty:T+"Property",animationDuration:za,animationDelay:ra,animationIterationCount:$+"IterationCount"},
Va={transitionDuration:La,transitionDelay:ma,animationDuration:za,animationDelay:ra};B.module("ngAnimate",[]).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,e,l,m){var I,k;b.$watchCollection(e.ngAnimateSwap||e["for"],function(e){I&&a.leave(I);k&&(k.$destroy(),k=null);if(e||0===e)k=b.$new(),m(k,function(b){I=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,
c,d){function e(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var l=d.ngAnimateChildren;B.isString(l)&&0===l.length?c.data("$$ngAnimateChildren",!0):(e(a(l)(b)),d.$observe("ngAnimateChildren",e))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),m=0;m<b.length;m++)b[m]();e||a(function(){e||c()})}}var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).provider("$$animateQueue",
["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return l[a].some(function(a){return a(b,c,d)})}function e(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var l=this.rules={skip:[],cancel:[],join:[]};l.join.push(function(a,b,c){return!b.structural&&e(b)});l.skip.push(function(a,
b,c){return!b.structural&&!e(b)});l.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});l.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});l.cancel.push(function(a,b,c){return c.structural&&b.structural});l.cancel.push(function(a,b,c){return 2===c.state&&b.structural});l.cancel.push(function(a,b,d){if(d.structural)return!1;a=b.addClass;b=b.removeClass;var e=d.addClass;d=d.removeClass;return O(a)&&O(b)||O(e)&&O(d)?!1:c(a,d)||c(b,e)});this.$get=["$$rAF","$rootScope",
"$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(b,c,k,l,w,Wa,Q,u,F,n){function K(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function J(a,b,c){var f=z(b),d=z(a),L=[];(a=h[c])&&s(a,function(a){y.call(a.node,f)?L.push(a.callback):"leave"===c&&y.call(a.node,d)&&L.push(a.callback)});return L}function r(a,b,c){var f=da(b);return a.filter(function(a){return!(a.node===f&&(!c||a.callback===c))})}function t(a,
h,x){function r(c,f,d,h){H(function(){var c=J(oa,a,f);c.length?b(function(){s(c,function(b){b(a,d,h)});"close"!==d||a[0].parentNode||sa.off(a)}):"close"!==d||a[0].parentNode||sa.off(a)});c.progress(f,d,h)}function g(b){var c=a,f=p;f.preparationClasses&&(c.removeClass(f.preparationClasses),f.preparationClasses=null);f.activeClasses&&(c.removeClass(f.activeClasses),f.activeClasses=null);D(a,p);ha(a,p);p.domOperation();n.complete(!b)}var p=Ja(x),t,oa;if(a=Oa(a))t=z(a),oa=a.parent();var p=pa(p),n=new Q,
H=K();ca(p.addClass)&&(p.addClass=p.addClass.join(" "));p.addClass&&!P(p.addClass)&&(p.addClass=null);ca(p.removeClass)&&(p.removeClass=p.removeClass.join(" "));p.removeClass&&!P(p.removeClass)&&(p.removeClass=null);p.from&&!va(p.from)&&(p.from=null);p.to&&!va(p.to)&&(p.to=null);if(!t)return g(),n;x=[t.className,p.addClass,p.removeClass].join(" ");if(!Xa(x))return g(),n;var k=0<=["enter","move","leave"].indexOf(h),y=l[0].hidden,u=!f||y||L.get(t);x=!u&&A.get(t)||{};var F=!!x.state;u||F&&1==x.state||
(u=!N(a,oa,h));if(u)return y&&r(n,h,"start"),g(),y&&r(n,h,"close"),n;k&&M(a);y={structural:k,element:a,event:h,addClass:p.addClass,removeClass:p.removeClass,close:g,options:p,runner:n};if(F){if(d("skip",a,y,x)){if(2===x.state)return g(),n;W(a,x,y);return x.runner}if(d("cancel",a,y,x))if(2===x.state)x.runner.end();else if(x.structural)x.close();else return W(a,x,y),x.runner;else if(d("join",a,y,x))if(2===x.state)W(a,y,{});else return Sa(a,k?h:null,p),h=y.event=x.event,p=W(a,x,y),x.runner}else W(a,
y,{});(F=y.structural)||(F="animate"===y.event&&0<Object.keys(y.options.to||{}).length||e(y));if(!F)return g(),ka(a),n;var w=(x.counter||0)+1;y.counter=w;G(a,1,y);c.$$postDigest(function(){var b=A.get(t),c=!b,b=b||{},f=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||e(b));if(c||b.counter!==w||!f){c&&(D(a,p),ha(a,p));if(c||k&&b.event!==h)p.domOperation(),n.end();f||ka(a)}else h=!b.structural&&e(b,!0)?"setClass":b.event,G(a,2),b=Wa(a,h,b.options),n.setHost(b),r(n,h,"start",{}),b.done(function(b){g(!b);
(b=A.get(t))&&b.counter===w&&ka(z(a));r(n,h,"close",{})})});return n}function M(a){a=z(a).querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=A.get(a);if(c)switch(b){case 2:c.runner.end();case 1:A.remove(a)}})}function ka(a){a=z(a);a.removeAttribute("data-ng-animate");A.remove(a)}function g(a,b){return z(a)===z(b)}function N(a,b,c){c=E(l[0].body);var f=g(a,c)||"HTML"===a[0].nodeName,d=g(a,k),h=!1,r,e=L.get(z(a));(a=E.data(a[0],"$ngAnimatePin"))&&
(b=a);for(b=z(b);b;){d||(d=g(b,k));if(1!==b.nodeType)break;a=A.get(b)||{};if(!h){var n=L.get(b);if(!0===n&&!1!==e){e=!0;break}else!1===n&&(e=!1);h=a.structural}if(O(r)||!0===r)a=E.data(b,"$$ngAnimateChildren"),ea(a)&&(r=a);if(h&&!1===r)break;f||(f=g(b,c));if(f&&d)break;if(!d&&(a=E.data(b,"$ngAnimatePin"))){b=z(a);continue}b=b.parentNode}return(!h||r)&&!0!==e&&d&&f}function G(a,b,c){c=c||{};c.state=b;a=z(a);a.setAttribute("data-ng-animate",b);c=(b=A.get(a))?Ea(b,c):c;A.put(a,c)}var A=new w,L=new w,
f=null,oa=c.$watch(function(){return 0===u.totalPendingRequests},function(a){a&&(oa(),c.$$postDigest(function(){c.$$postDigest(function(){null===f&&(f=!0)})}))}),h={},H=a.classNameFilter(),Xa=H?function(a){return H.test(a)}:function(){return!0},D=V(F),y=S.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)},sa={on:function(a,b,c){var f=da(b);h[a]=h[a]||[];h[a].push({node:f,callback:c});E(b).on("$destroy",function(){A.get(f)||sa.off(a,b,c)})},off:function(a,
b,c){if(1!==arguments.length||B.isString(arguments[0])){var f=h[a];f&&(h[a]=1===arguments.length?null:r(f,b,c))}else for(f in b=arguments[0],h)h[f]=r(h[f],b)},pin:function(a,b){Aa(wa(a),"element","not an element");Aa(wa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return t(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!f;else if(wa(a)){var d=z(a),h=L.get(d);1===c?b=!h:L.put(d,!b)}else b=f=!!a;return b}};return sa}]}]).provider("$$animation",
["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,d,e,l,m,I){function k(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,t=d.parentNode;e.put(d,a);for(var M;t;){if(M=e.get(t)){M.processed||(M=b(M));break}t=t.parentNode}(M||c).children.push(a);return a}var c={children:[]},d,e=new m;for(d=0;d<a.length;d++){var k=a[d];e.put(k.domNode,a[d]={domNode:k.domNode,fn:k.fn,children:[]})}for(d=
0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var e=0,g=[];for(d=0;d<c.length;d++){var n=c[d];0>=a&&(a=e,e=0,b.push(g),g=[]);g.push(n.fn);n.children.forEach(function(a){e++;c.push(a)});a--}g.length&&b.push(g);return b}(c)}var v=[],w=V(a);return function(m,Q,u){function F(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&
b.push(a)});return b}function n(a){var b=[],c={};s(a,function(a,d){var h=z(a.element),e=0<=["enter","move"].indexOf(a.event),h=a.structural?F(h):[];if(h.length){var g=e?"to":"from";s(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][g]={animationID:d,element:E(a)}})}else b.push(a)});var d={},e={};s(c,function(c,g){var r=c.from,n=c.to;if(r&&n){var A=a[r.animationID],t=a[n.animationID],m=r.animationID.toString();if(!e[m]){var k=e[m]={structural:!0,beforeStart:function(){A.beforeStart();
t.beforeStart()},close:function(){A.close();t.close()},classes:K(A.classes,t.classes),from:A,to:t,anchors:[]};k.classes.length?b.push(k):(b.push(A),b.push(t))}e[m].anchors.push({out:r.element,"in":n.element})}else r=r?r.animationID:n.animationID,n=r.toString(),d[n]||(d[n]=!0,b.push(a[r]))});return b}function K(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var e=a[d];if("ng-"!==e.substring(0,3))for(var r=0;r<b.length;r++)if(e===b[r]){c.push(e);break}}return c.join(" ")}function J(a){for(var c=
b.length-1;0<=c;c--){var d=b[c];if(e.has(d)&&(d=e.get(d)(a)))return d}}function r(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function t(){var a=m.data("$$animationRunner");!a||"leave"===Q&&u.$$domOperationFired||a.end()}function M(b){m.off("$destroy",t);m.removeData("$$animationRunner");w(m,u);ha(m,u);u.domOperation();G&&a.removeClass(m,G);m.removeClass("ng-animate");g.complete(!b)}u=pa(u);var ka=0<=["enter","move",
"leave"].indexOf(Q),g=new l({end:function(){M()},cancel:function(){M(!0)}});if(!b.length)return M(),g;m.data("$$animationRunner",g);var N=Ba(m.attr("class"),Ba(u.addClass,u.removeClass)),G=u.tempClasses;G&&(N+=" "+G,u.tempClasses=null);var A;ka&&(A="ng-"+Q+"-prepare",a.addClass(m,A));v.push({element:m,classes:N,event:Q,structural:ka,options:u,beforeStart:function(){m.addClass("ng-animate");G&&a.addClass(m,G);A&&(a.removeClass(m,A),A=null)},close:M});m.on("$destroy",t);if(1<v.length)return g;d.$$postDigest(function(){var a=
[];s(v,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});v.length=0;var b=n(a),c=[];s(b,function(a){c.push({domNode:z(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=J(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),r(a,b)):c()}})});I(k(c))});return g}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ha(),c=Ha();this.$get=["$window","$$jqLite",
"$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,e,l,m,I,k,v,w){function B(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++K))+"-"+a.getAttribute("class")+"-"+b}function Q(r,n,m,k){var g;0<b.count(m)&&(g=c.get(m),g||(n=Y(n,"-stagger"),e.addClass(r,n),g=Fa(a,r,k),g.animationDuration=Math.max(g.animationDuration,0),g.transitionDuration=Math.max(g.transitionDuration,0),e.removeClass(r,n),c.put(m,g)));return g||{}}function u(a){J.push(a);
v.waitUntilQuiet(function(){b.flush();c.flush();for(var a=I(),d=0;d<J.length;d++)J[d](a);J.length=0})}function F(c,e,n){e=b.get(n);e||(e=Fa(a,c,Ua),"infinite"===e.animationIterationCount&&(e.animationIterationCount=1));b.put(n,e);c=e;n=c.animationDelay;e=c.transitionDelay;c.maxDelay=n&&e?Math.max(n,e):n||e;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var n=V(e),K=0,J=[];return function(a,c){function d(){g()}function v(){g(!0)}function g(b){if(!(y||
E&&K)){y=!0;K=!1;f.$$skipPreparationClasses||e.removeClass(a,ga);e.removeClass(a,ea);ta(h,!1);qa(h,!1);s(H,function(a){h.style[a[0]]=""});n(a,f);ha(a,f);Object.keys(J).length&&s(J,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(f.onDone)f.onDone();fa&&fa.length&&a.off(fa.join(" "),A);var c=a.data("$$animateCss");c&&(m.cancel(c[0].timer),a.removeData("$$animateCss"));O&&O.complete(!b)}}function N(a){q.blockTransition&&qa(h,a);q.blockKeyframeAnimation&&ta(h,!!a)}function G(){O=
new l({end:d,cancel:v});u(R);g();return{$$willAnimate:!1,start:function(){return O},end:d}}function A(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-W,0)>=S&&b>=p&&(E=!0,g())}function L(){function b(){if(!y){N(!1);s(H,function(a){h.style[a[0]]=a[1]});n(a,f);e.addClass(a,ea);if(q.recalculateTimingStyles){na=h.className+" "+ga;ia=B(h,na);C=F(h,na,ia);aa=C.maxDelay;P=Math.max(aa,0);p=C.maxDuration;if(0===p){g();return}q.hasTransitions=
0<C.transitionDuration;q.hasAnimations=0<C.animationDuration}q.applyAnimationDelay&&(aa="boolean"!==typeof f.delay&&ua(f.delay)?parseFloat(f.delay):aa,P=Math.max(aa,0),C.animationDelay=aa,ba=[ra,aa+"s"],H.push(ba),h.style[ba[0]]=ba[1]);S=1E3*P;V=1E3*p;if(f.easing){var d,k=f.easing;q.hasTransitions&&(d=T+"TimingFunction",H.push([d,k]),h.style[d]=k);q.hasAnimations&&(d=$+"TimingFunction",H.push([d,k]),h.style[d]=k)}C.transitionDuration&&fa.push(xa);C.animationDuration&&fa.push(ya);W=Date.now();var L=
S+1.5*V;d=W+L;var k=a.data("$$animateCss")||[],l=!0;if(k.length){var G=k[0];(l=d>G.expectedEndTime)?m.cancel(G.timer):k.push(g)}l&&(L=m(c,L,!1),k[0]={timer:L,expectedEndTime:d},k.push(g),a.data("$$animateCss",k));if(fa.length)a.on(fa.join(" "),A);f.to&&(f.cleanupStyles&&Ia(J,h,Object.keys(f.to)),Da(a,f))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!y)if(h.parentNode){var d=function(a){if(E)K&&a&&(K=!1,g());else if(K=!a,C.animationDuration)if(a=
ta(h,K),K)H.push(a);else{var b=H,c=b.indexOf(a);0<=a&&b.splice(c,1)}},k=0<da&&(C.transitionDuration&&0===X.transitionDuration||C.animationDuration&&0===X.animationDuration)&&Math.max(X.animationDelay,X.transitionDelay);k?m(b,Math.floor(k*da*1E3),!1):b();x.resume=function(){d(!0)};x.pause=function(){d(!1)}}else g()}var f=c||{};f.$$prepared||(f=pa(Ja(f)));var J={},h=z(a);if(!h||!h.parentNode||!w.enabled())return G();var H=[],I=a.attr("class"),D=Na(f),y,K,E,O,x,P,S,p,V,W,fa=[];if(0===f.duration||!k.animations&&
!k.transitions)return G();var ja=f.event&&ca(f.event)?f.event.join(" "):f.event,Z="",U="";ja&&f.structural?Z=Y(ja,"ng-",!0):ja&&(Z=ja);f.addClass&&(U+=Y(f.addClass,"-add"));f.removeClass&&(U.length&&(U+=" "),U+=Y(f.removeClass,"-remove"));f.applyClassesEarly&&U.length&&n(a,f);var ga=[Z,U].join(" ").trim(),na=I+" "+ga,ea=Y(ga,"-active"),I=D.to&&0<Object.keys(D.to).length;if(!(0<(f.keyframeStyle||"").length||I||ga))return G();var ia,X;0<f.stagger?(D=parseFloat(f.stagger),X={transitionDelay:D,animationDelay:D,
transitionDuration:0,animationDuration:0}):(ia=B(h,na),X=Q(h,ga,ia,Va));f.$$skipPreparationClasses||e.addClass(a,ga);f.transitionStyle&&(D=[T,f.transitionStyle],la(h,D),H.push(D));0<=f.duration&&(D=0<h.style[T].length,D=Ga(f.duration,D),la(h,D),H.push(D));f.keyframeStyle&&(D=[$,f.keyframeStyle],la(h,D),H.push(D));var da=X?0<=f.staggerIndex?f.staggerIndex:b.count(ia):0;(ja=0===da)&&!f.skipBlocking&&qa(h,9999);var C=F(h,na,ia),aa=C.maxDelay;P=Math.max(aa,0);p=C.maxDuration;var q={};q.hasTransitions=
0<C.transitionDuration;q.hasAnimations=0<C.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"==C.transitionProperty;q.applyTransitionDuration=I&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=f.duration&&q.hasAnimations;q.applyTransitionDelay=ua(f.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=ua(f.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<U.length;if(q.applyTransitionDuration||q.applyAnimationDuration)p=
f.duration?parseFloat(f.duration):p,q.applyTransitionDuration&&(q.hasTransitions=!0,C.transitionDuration=p,D=0<h.style[T+"Property"].length,H.push(Ga(p,D))),q.applyAnimationDuration&&(q.hasAnimations=!0,C.animationDuration=p,H.push([za,p+"s"]));if(0===p&&!q.recalculateTimingStyles)return G();if(null!=f.delay){var ba;"boolean"!==typeof f.delay&&(ba=parseFloat(f.delay),P=Math.max(ba,0));q.applyTransitionDelay&&H.push([ma,ba+"s"]);q.applyAnimationDelay&&H.push([ra,ba+"s"])}null==f.duration&&0<C.transitionDuration&&
(q.recalculateTimingStyles=q.recalculateTimingStyles||ja);S=1E3*P;V=1E3*p;f.skipBlocking||(q.blockTransition=0<C.transitionDuration,q.blockKeyframeAnimation=0<C.animationDuration&&0<X.animationDelay&&0===X.animationDuration);f.from&&(f.cleanupStyles&&Ia(J,h,Object.keys(f.from)),Ca(a,f));q.blockTransition||q.blockKeyframeAnimation?N(p):f.skipBlocking||qa(h,!1);return{$$willAnimate:!0,end:d,start:function(){if(!y)return x={end:d,cancel:v,resume:null,pause:null},O=new l(x),u(L),O}}}}]}]).provider("$$animateCssDriver",
["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,l,m,I){function k(a){return a.replace(/\bng-\S+\b/g,"")}function v(a,b){P(a)&&(a=a.split(" "));P(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function w(c,e,m){function l(a){var b={},c=z(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];
switch(a){case "top":d+=u.scrollTop;break;case "left":d+=u.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function t(){var c=k(m.attr("class")||""),d=v(c,g),c=v(g,c),d=a(w,{to:l(m),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function I(){w.remove();e.removeClass("ng-animate-shim");m.removeClass("ng-animate-shim")}var w=E(z(e).cloneNode(!0)),g=k(w.attr("class")||"");e.addClass("ng-animate-shim");m.addClass("ng-animate-shim");w.addClass("ng-anchor");
F.append(w);var N;c=function(){var c=a(w,{addClass:"ng-anchor-out",delay:!0,from:l(e)});return c.$$willAnimate?c:null}();if(!c&&(N=t(),!N))return I();var G=c||N;return{start:function(){function a(){c&&c.end()}var b,c=G.start();c.done(function(){c=null;if(!N&&(N=t()))return c=N.start(),c.done(function(){c=null;I();b.complete()}),c;I();b.complete()});return b=new d({end:a,cancel:a})}}}function B(a,b,c,e){var k=Q(a,R),m=Q(b,R),l=[];s(e,function(a){(a=w(c,a.out,a["in"]))&&l.push(a)});if(k||m||0!==l.length)return{start:function(){function a(){s(b,
function(a){a.end()})}var b=[];k&&b.push(k.start());m&&b.push(m.start());s(l,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function Q(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=Z(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!l.animations&&!l.transitions)return R;var u=I[0].body;
c=z(e);var F=E(c.parentNode&&11===c.parentNode.nodeType||u.contains(c)?c:u);V(m);return function(a){return a.from&&a.to?B(a.from,a.to,a.classes,a.anchors):Q(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=ca(c)?c:c.split(" ");for(var d=[],e={},l=0;l<c.length;l++){var w=c[l],s=a.$$registeredAnimations[w];s&&!e[w]&&(d.push(b.get(s)),e[w]=!0)}return d}var l=V(d);return function(a,b,d,v){function w(){v.domOperation();
l(a,v)}function B(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,n,K,f];break;case "addClass":b=[b,n,f];break;case "removeClass":b=[b,K,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Ka(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Ka(a))return a;return R}function z(a,b,d,e,f){var g=[];s(e,function(e){var k=e[f];k&&g.push(function(){var e,f,h=!1,g=function(a){h||(h=!0,(f||R)(a),e.complete(!a))};e=new c({end:function(){g()},cancel:function(){g(!0)}});
f=B(k,a,b,d,function(a){g(!1===a)});return e})});return g}function u(a,b,d,e,f){var g=z(a,b,d,e,f);if(0===g.length){var h,k;"beforeSetClass"===f?(h=z(a,"removeClass",d,e,"beforeRemoveClass"),k=z(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=z(a,"removeClass",d,e,"removeClass"),k=z(a,"addClass",d,e,"addClass"));h&&(g=g.concat(h));k&&(g=g.concat(k))}if(0!==g.length)return function(a){var b=[];g.length&&s(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?
b.cancel():b.end()})}}}var F=!1;3===arguments.length&&va(d)&&(v=d,d=null);v=pa(v);d||(d=a.attr("class")||"",v.addClass&&(d+=" "+v.addClass),v.removeClass&&(d+=" "+v.removeClass));var n=v.addClass,K=v.removeClass,J=e(d),r,t;if(J.length){var M,E;"leave"==b?(E="leave",M="afterLeave"):(E="before"+b.charAt(0).toUpperCase()+b.substr(1),M=b);"enter"!==b&&"move"!==b&&(r=u(a,b,v,J,E));t=u(a,b,v,J,M)}if(r||t){var g;return{$$willAnimate:!0,end:function(){g?g.end():(F=!0,w(),ha(a,v),g=new c,g.complete(!0));return g},
start:function(){function b(c){F=!0;w();ha(a,v);g.complete(c)}if(g)return g;g=new c;var d,e=[];r&&e.push(function(a){d=r(a)});e.length?e.push(function(a){w();a(!0)}):w();t&&e.push(function(a){d=t(a)});g.setHost({end:function(){F||((d||R)(void 0),b(void 0))},cancel:function(){F||((d||R)(!0),b(!0))}});c.chain(e,b);return g}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,
c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),m=d(a.to);if(b||m)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());m&&d.push(m.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(t,p){'use strict';var b="BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),l=function(a,c){if(-1!==c.indexOf(a[0].nodeName))return!0};p.module("ngAria",["ng"]).provider("$aria",function(){function a(a,b,m,h){return function(d,f,e){var q=e.$normalize(b);!c[q]||l(f,m)||e[q]||d.$watch(e[a],function(a){a=h?!a:!!a;f.attr(b,a)})}}var c={ariaHidden:!0,ariaChecked:!0,ariaReadonly:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0,bindRoleForClick:!0};
this.config=function(a){c=p.extend(c,a)};this.$get=function(){return{config:function(a){return c[a]},$$watchExpr:a}}}).directive("ngShow",["$aria",function(a){return a.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(a){return a.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngValue",["$aria",function(a){return a.$$watchExpr("ngValue","aria-checked",b,!1)}]).directive("ngChecked",["$aria",function(a){return a.$$watchExpr("ngChecked","aria-checked",b,!1)}]).directive("ngReadonly",
["$aria",function(a){return a.$$watchExpr("ngReadonly","aria-readonly",b,!1)}]).directive("ngRequired",["$aria",function(a){return a.$$watchExpr("ngRequired","aria-required",b,!1)}]).directive("ngModel",["$aria",function(a){function c(c,h,d,f){return a.config(h)&&!d.attr(c)&&(f||!l(d,b))}function g(a,c){return!c.attr("role")&&c.attr("type")===a&&"INPUT"!==c[0].nodeName}function k(a,c){var d=a.type,f=a.role;return"checkbox"===(d||f)||"menuitemcheckbox"===f?"checkbox":"radio"===(d||f)||"menuitemradio"===
f?"radio":"range"===d||"progressbar"===f||"slider"===f?"range":""}return{restrict:"A",require:"ngModel",priority:200,compile:function(b,h){var d=k(h,b);return{pre:function(a,e,c,b){"checkbox"===d&&(b.$isEmpty=function(a){return!1===a})},post:function(f,e,b,n){function h(){return n.$modelValue}function k(a){e.attr("aria-checked",b.value==n.$viewValue)}function l(){e.attr("aria-checked",!n.$isEmpty(n.$viewValue))}var m=c("tabindex","tabindex",e,!1);switch(d){case "radio":case "checkbox":g(d,e)&&e.attr("role",
d);c("aria-checked","ariaChecked",e,!1)&&f.$watch(h,"radio"===d?k:l);m&&e.attr("tabindex",0);break;case "range":g(d,e)&&e.attr("role","slider");if(a.config("ariaValue")){var p=!e.attr("aria-valuemin")&&(b.hasOwnProperty("min")||b.hasOwnProperty("ngMin")),r=!e.attr("aria-valuemax")&&(b.hasOwnProperty("max")||b.hasOwnProperty("ngMax")),s=!e.attr("aria-valuenow");p&&b.$observe("min",function(a){e.attr("aria-valuemin",a)});r&&b.$observe("max",function(a){e.attr("aria-valuemax",a)});s&&f.$watch(h,function(a){e.attr("aria-valuenow",
a)})}m&&e.attr("tabindex",0)}!b.hasOwnProperty("ngRequired")&&n.$validators.required&&c("aria-required","ariaRequired",e,!1)&&b.$observe("required",function(){e.attr("aria-required",!!b.required)});c("aria-invalid","ariaInvalid",e,!0)&&f.$watch(function(){return n.$invalid},function(a){e.attr("aria-invalid",!!a)})}}}}}]).directive("ngDisabled",["$aria",function(a){return a.$$watchExpr("ngDisabled","aria-disabled",b,!1)}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",
link:function(a,b,g,k){b.attr("aria-live")||b.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(a,c){return{restrict:"A",compile:function(g,k){var m=c(k.ngClick,null,!0);return function(c,d,f){if(!l(d,b)&&(a.config("bindRoleForClick")&&!d.attr("role")&&d.attr("role","button"),a.config("tabindex")&&!d.attr("tabindex")&&d.attr("tabindex",0),a.config("bindKeypress")&&!f.ngKeypress))d.on("keypress",function(a){function b(){m(c,{$event:a})}var d=a.which||a.keyCode;32!==d&&
13!==d||c.$apply(b)})}}}}]).directive("ngDblclick",["$aria",function(a){return function(c,g,k){!a.config("tabindex")||g.attr("tabindex")||l(g,b)||g.attr("tabindex",0)}}])})(window,window.angular);
//# sourceMappingURL=angular-aria.min.js.map

(function (root, factory) {
  // AMD
  if (typeof define === 'function' && define.amd) define(['angular'], factory);
  // Global
  else factory(angular);
}(this, function (angular) {

  angular
  .module('ckeditor', [])
  .directive('ckeditor', ['$parse', ckeditorDirective]);

  // Polyfill setImmediate function.
  var setImmediate = window && window.setImmediate ? window.setImmediate : function (fn) {
    setTimeout(fn, 0);
  };

  /**
   * CKEditor directive.
   *
   * @example
   * <div ckeditor="options" ng-model="content" ready="onReady()"></div>
   */

  function ckeditorDirective($parse) {
    return {
      restrict: 'A',
      require: ['ckeditor', 'ngModel'],
      controller: [
        '$scope',
        '$element',
        '$attrs',
        '$parse',
        '$q',
        ckeditorController
      ],
      link: function (scope, element, attrs, ctrls) {
        // get needed controllers
        var controller = ctrls[0]; // our own, see below
        var ngModelController = ctrls[1];

        // Initialize the editor content when it is ready.
        controller.ready().then(function initialize() {
          // Sync view on specific events.
          ['dataReady', 'change', 'blur', 'saveSnapshot'].forEach(function (event) {
            controller.onCKEvent(event, function syncView() {
              ngModelController.$setViewValue(controller.instance.getData() || '');
            });
          });

          controller.instance.setReadOnly(!! attrs.readonly);
          attrs.$observe('readonly', function (readonly) {
            controller.instance.setReadOnly(!! readonly);
          });

          // Defer the ready handler calling to ensure that the editor is
          // completely ready and populated with data.
          setImmediate(function () {
            $parse(attrs.ready)(scope);
          });
        });

        // Set editor data when view data change.
        ngModelController.$render = function syncEditor() {
          controller.ready().then(function () {
            // "noSnapshot" prevent recording an undo snapshot
            controller.instance.setData(ngModelController.$viewValue || '', {
              noSnapshot: true,
              callback: function () {
                // Amends the top of the undo stack with the current DOM changes
                // ie: merge snapshot with the first empty one
                // http://docs.ckeditor.com/#!/api/CKEDITOR.editor-event-updateSnapshot
                controller.instance.fire('updateSnapshot');
              }
            });
          });
        };
      }
    };
  }

  /**
   * CKEditor controller.
   */

  function ckeditorController($scope, $element, $attrs, $parse, $q) {
    var config = $parse($attrs.ckeditor)($scope) || {};
    var editorElement = $element[0];
    var instance;
    var readyDeferred = $q.defer(); // a deferred to be resolved when the editor is ready

    // Create editor instance.
    if (editorElement.hasAttribute('contenteditable') &&
        editorElement.getAttribute('contenteditable').toLowerCase() == 'true') {
      instance = this.instance = CKEDITOR.inline(editorElement, config);
    }
    else {
      instance = this.instance = CKEDITOR.replace(editorElement, config);
    }

    /**
     * Listen on events of a given type.
     * This make all event asynchronous and wrapped in $scope.$apply.
     *
     * @param {String} event
     * @param {Function} listener
     * @returns {Function} Deregistration function for this listener.
     */

    this.onCKEvent = function (event, listener) {
      instance.on(event, asyncListener);

      function asyncListener() {
        var args = arguments;
        setImmediate(function () {
          applyListener.apply(null, args);
        });
      }

      function applyListener() {
        var args = arguments;
        $scope.$apply(function () {
          listener.apply(null, args);
        });
      }

      // Return the deregistration function
      return function $off() {
        instance.removeListener(event, applyListener);
      };
    };

    this.onCKEvent('instanceReady', function() {
      readyDeferred.resolve(true);
    });

    /**
     * Check if the editor if ready.
     *
     * @returns {Promise}
     */
    this.ready = function ready() {
      return readyDeferred.promise;
    };

    // Destroy editor when the scope is destroyed.
    $scope.$on('$destroy', function onDestroy() {
      // do not delete too fast or pending events will throw errors
      readyDeferred.promise.then(function() {
        instance.destroy(false);
      });
    });
  }
}));

angular.module("rt.debounce",[]).factory("debounce",["$timeout",function(a){return function(b,c){function d(){j=c.apply(i||this,h||[]),i=h=null}function e(){k&&(a.cancel(k),k=null)}function f(){i=this,h=arguments,e(),k=a(d,b)}function g(){var a=!!i;return a&&(e(),d()),a}var h,i,j,k;return f.flush=function(){return g()||k||d(),j},f.flushPending=function(){return g(),j},f.cancel=e,f}}]);
/**
 * angular-drag-and-drop-lists v1.4.0
 *
 * Copyright (c) 2014 Marcel Juenemann marcel@juenemann.cc
 * Copyright (c) 2014-2016 Google Inc.
 * https://github.com/marceljuenemann/angular-drag-and-drop-lists
 *
 * License: MIT
 */
angular.module("dndLists",[]).directive("dndDraggable",["$parse","$timeout","dndDropEffectWorkaround","dndDragTypeWorkaround",function(e,n,r,t){return function(a,d,o){d.attr("draggable","true"),o.dndDisableIf&&a.$watch(o.dndDisableIf,function(e){d.attr("draggable",!e)}),d.on("dragstart",function(i){return i=i.originalEvent||i,"false"==d.attr("draggable")?!0:(i.dataTransfer.setData("Text",angular.toJson(a.$eval(o.dndDraggable))),i.dataTransfer.effectAllowed=o.dndEffectAllowed||"move",d.addClass("dndDragging"),n(function(){d.addClass("dndDraggingSource")},0),r.dropEffect="none",t.isDragging=!0,t.dragType=o.dndType?a.$eval(o.dndType):void 0,i._dndHandle&&i.dataTransfer.setDragImage&&i.dataTransfer.setDragImage(d[0],0,0),e(o.dndDragstart)(a,{event:i}),void i.stopPropagation())}),d.on("dragend",function(i){i=i.originalEvent||i
var f=r.dropEffect
a.$apply(function(){switch(f){case"move":e(o.dndMoved)(a,{event:i})
break
case"copy":e(o.dndCopied)(a,{event:i})
break
case"none":e(o.dndCanceled)(a,{event:i})}e(o.dndDragend)(a,{event:i,dropEffect:f})}),d.removeClass("dndDragging"),n(function(){d.removeClass("dndDraggingSource")},0),t.isDragging=!1,i.stopPropagation()}),d.on("click",function(n){o.dndSelected&&(n=n.originalEvent||n,a.$apply(function(){e(o.dndSelected)(a,{event:n})}),n.stopPropagation())}),d.on("selectstart",function(){this.dragDrop&&this.dragDrop()})}}]).directive("dndList",["$parse","$timeout","dndDropEffectWorkaround","dndDragTypeWorkaround",function(e,n,r,t){return function(a,d,o){function i(e,n,r){var t=E?e.offsetX||e.layerX:e.offsetY||e.layerY,a=E?n.offsetWidth:n.offsetHeight,d=E?n.offsetLeft:n.offsetTop
return d=r?d:0,d+a/2>t}function f(){var e
return angular.forEach(d.children(),function(n){var r=angular.element(n)
r.hasClass("dndPlaceholder")&&(e=r)}),e||angular.element("<li class='dndPlaceholder'></li>")}function l(){return Array.prototype.indexOf.call(D.children,v)}function g(e){if(!t.isDragging&&!y)return!1
if(!c(e.dataTransfer.types))return!1
if(o.dndAllowedTypes&&t.isDragging){var n=a.$eval(o.dndAllowedTypes)
if(angular.isArray(n)&&-1===n.indexOf(t.dragType))return!1}return o.dndDisableIf&&a.$eval(o.dndDisableIf)?!1:!0}function s(){return p.remove(),d.removeClass("dndDragover"),!0}function u(n,r,d,o){return e(n)(a,{event:r,index:d,item:o||void 0,external:!t.isDragging,type:t.isDragging?t.dragType:void 0})}function c(e){if(!e)return!0
for(var n=0;n<e.length;n++)if("Text"===e[n]||"text/plain"===e[n])return!0
return!1}var p=f(),v=p[0],D=d[0]
p.remove()
var E=o.dndHorizontalList&&a.$eval(o.dndHorizontalList),y=o.dndExternalSources&&a.$eval(o.dndExternalSources)
d.on("dragenter",function(e){return e=e.originalEvent||e,g(e)?void e.preventDefault():!0}),d.on("dragover",function(e){if(e=e.originalEvent||e,!g(e))return!0
if(v.parentNode!=D&&d.append(p),e.target!==D){for(var n=e.target;n.parentNode!==D&&n.parentNode;)n=n.parentNode
n.parentNode===D&&n!==v&&(i(e,n)?D.insertBefore(v,n):D.insertBefore(v,n.nextSibling))}else if(i(e,v,!0))for(;v.previousElementSibling&&(i(e,v.previousElementSibling,!0)||0===v.previousElementSibling.offsetHeight);)D.insertBefore(v,v.previousElementSibling)
else for(;v.nextElementSibling&&!i(e,v.nextElementSibling,!0);)D.insertBefore(v,v.nextElementSibling.nextElementSibling)
return o.dndDragover&&!u(o.dndDragover,e,l())?s():(d.addClass("dndDragover"),e.preventDefault(),e.stopPropagation(),!1)}),d.on("drop",function(e){if(e=e.originalEvent||e,!g(e))return!0
e.preventDefault()
var n,t=e.dataTransfer.getData("Text")||e.dataTransfer.getData("text/plain")
try{n=JSON.parse(t)}catch(d){return s()}var i=l()
return o.dndDrop&&(n=u(o.dndDrop,e,i,n),!n)?s():(n!==!0&&a.$apply(function(){a.$eval(o.dndList).splice(i,0,n)}),u(o.dndInserted,e,i,n),"none"===e.dataTransfer.dropEffect?"copy"===e.dataTransfer.effectAllowed||"move"===e.dataTransfer.effectAllowed?r.dropEffect=e.dataTransfer.effectAllowed:r.dropEffect=e.ctrlKey?"copy":"move":r.dropEffect=e.dataTransfer.dropEffect,s(),e.stopPropagation(),!1)}),d.on("dragleave",function(e){e=e.originalEvent||e,d.removeClass("dndDragover"),n(function(){d.hasClass("dndDragover")||p.remove()},100)})}}]).directive("dndNodrag",function(){return function(e,n,r){n.attr("draggable","true"),n.on("dragstart",function(e){e=e.originalEvent||e,e._dndHandle||(e.dataTransfer.types&&e.dataTransfer.types.length||e.preventDefault(),e.stopPropagation())}),n.on("dragend",function(e){e=e.originalEvent||e,e._dndHandle||e.stopPropagation()})}}).directive("dndHandle",function(){return function(e,n,r){n.attr("draggable","true"),n.on("dragstart dragend",function(e){e=e.originalEvent||e,e._dndHandle=!0})}}).factory("dndDragTypeWorkaround",function(){return{}}).factory("dndDropEffectWorkaround",function(){return{}})

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.1
 *
 * Jonybang:
 * TEMPORARY FIX:
 * md-sidenav.md-THEME_NAME-theme, md-sidenav.md-THEME_NAME-theme md-content {  background-color: '{{background-hue-1}}'; }
 * TO:
 * md-sidenav.md-THEME_NAME-theme, md-sidenav.md-THEME_NAME-theme md-content {  background-color: '{{background-color}}'; }
 * ANOTHER FIX: https://github.com/angular/material/issues/2613
 * var n=t.element(e).controller("mdGridTile");return{row:parseInt(r.getResponsiveAttribute(n.$attrs
 * TO:
 * var n=t.element(e).controller("mdGridTile");if(!n) n = {$attrs: {}};return{row:parseInt(r.getResponsiveAttribute(n.$attrs
 */
!function(e,t,n){"use strict";!function(){t.module("ngMaterial",["ng","ngAnimate","ngAria","material.core","material.core.gestures","material.core.layout","material.core.meta","material.core.theming.palette","material.core.theming","material.core.animate","material.components.autocomplete","material.components.backdrop","material.components.bottomSheet","material.components.button","material.components.card","material.components.chips","material.components.checkbox","material.components.colors","material.components.content","material.components.datepicker","material.components.dialog","material.components.divider","material.components.fabActions","material.components.fabShared","material.components.fabSpeedDial","material.components.fabToolbar","material.components.gridList","material.components.icon","material.components.input","material.components.list","material.components.menu","material.components.menuBar","material.components.navBar","material.components.panel","material.components.progressCircular","material.components.progressLinear","material.components.radioButton","material.components.select","material.components.showHide","material.components.sidenav","material.components.slider","material.components.sticky","material.components.subheader","material.components.swipe","material.components.switch","material.components.tabs","material.components.toast","material.components.toolbar","material.components.tooltip","material.components.virtualRepeat","material.components.whiteframe"])}(),function(){function e(e,t){if(t.has("$swipe")){var n="You are using the ngTouch module. \nAngular Material already has mobile click, tap, and swipe support... \nngTouch is not supported with Angular Material!";e.warn(n)}}function n(e,t){e.decorator("$$rAF",["$delegate",o]),t.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("deep-orange").backgroundPalette("grey")}function o(e){return e.throttle=function(t){var n,o,i,r;return function(){n=arguments,r=this,i=t,o||(o=!0,e(function(){i.apply(r,Array.prototype.slice.call(n)),o=!1}))}},e}e.$inject=["$log","$injector"],n.$inject=["$provide","$mdThemingProvider"],o.$inject=["$delegate"],t.module("material.core",["ngAnimate","material.core.animate","material.core.layout","material.core.gestures","material.core.theming"]).config(n).run(e)}(),function(){function e(){return{restrict:"A",link:n}}function n(e,t,n){var o=n.mdAutoFocus||n.mdAutofocus||n.mdSidenavFocus;e.$watch(o,function(e){t.toggleClass("md-autofocus",e)})}t.module("material.core").directive("mdAutofocus",e).directive("mdAutoFocus",e).directive("mdSidenavFocus",e)}(),function(){function e(){function e(e){var t="#"===e[0]?e.substr(1):e,n=t.length/3,o=t.substr(0,n),i=t.substr(n,n),r=t.substr(2*n);return 1===n&&(o+=o,i+=i,r+=r),"rgba("+parseInt(o,16)+","+parseInt(i,16)+","+parseInt(r,16)+",0.1)"}function t(e){e=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);var t=e&&4===e.length?"#"+("0"+parseInt(e[1],10).toString(16)).slice(-2)+("0"+parseInt(e[2],10).toString(16)).slice(-2)+("0"+parseInt(e[3],10).toString(16)).slice(-2):"";return t.toUpperCase()}function n(e){return e.replace(")",", 0.1)").replace("(","a(")}function o(e){return e?e.replace("rgba","rgb").replace(/,[^\),]+\)/,")"):"rgb(0,0,0)"}return{rgbaToHex:t,hexToRgba:e,rgbToRgba:n,rgbaToRgb:o}}t.module("material.core").factory("$mdColorUtil",e)}(),function(){function e(e,n,o){function i(e){var t=d+"-"+e,n=a(t),o=n.charAt(0).toLowerCase()+n.substring(1);return r(e)?e:r(n)?n:r(o)?o:e}function r(e){return t.isDefined(c.style[e])}function a(e){return e.replace(l,function(e,t,n,o){return o?n.toUpperCase():n})}var d=e.vendorPrefix,s=/webkit/i.test(d),l=/([:\-_]+(.))/g,c=document.createElement("div"),m={isInputKey:function(e){return e.keyCode>=31&&e.keyCode<=90},isNumPadKey:function(e){return 3===e.location&&e.keyCode>=97&&e.keyCode<=105},isNavigationKey:function(e){var t=m.KEY_CODE,n=[t.SPACE,t.ENTER,t.UP_ARROW,t.DOWN_ARROW];return n.indexOf(e.keyCode)!=-1},KEY_CODE:{COMMA:188,SEMICOLON:186,ENTER:13,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,TAB:9,BACKSPACE:8,DELETE:46},CSS:{TRANSITIONEND:"transitionend"+(s?" webkitTransitionEnd":""),ANIMATIONEND:"animationend"+(s?" webkitAnimationEnd":""),TRANSFORM:i("transform"),TRANSFORM_ORIGIN:i("transformOrigin"),TRANSITION:i("transition"),TRANSITION_DURATION:i("transitionDuration"),ANIMATION_PLAY_STATE:i("animationPlayState"),ANIMATION_DURATION:i("animationDuration"),ANIMATION_NAME:i("animationName"),ANIMATION_TIMING:i("animationTimingFunction"),ANIMATION_DIRECTION:i("animationDirection")},MEDIA:{xs:"(max-width: 599px)","gt-xs":"(min-width: 600px)",sm:"(min-width: 600px) and (max-width: 959px)","gt-sm":"(min-width: 960px)",md:"(min-width: 960px) and (max-width: 1279px)","gt-md":"(min-width: 1280px)",lg:"(min-width: 1280px) and (max-width: 1919px)","gt-lg":"(min-width: 1920px)",xl:"(min-width: 1920px)",landscape:"(orientation: landscape)",portrait:"(orientation: portrait)",print:"print"},MEDIA_PRIORITY:["xl","gt-lg","lg","gt-md","md","gt-sm","sm","gt-xs","xs","landscape","portrait","print"]};return m}e.$inject=["$sniffer","$window","$document"],t.module("material.core").factory("$mdConstant",e)}(),function(){function e(e,n){function o(){return[].concat(v)}function i(){return v.length}function r(e){return v.length&&e>-1&&e<v.length}function a(e){return!!e&&r(u(e)+1)}function d(e){return!!e&&r(u(e)-1)}function s(e){return r(e)?v[e]:null}function l(e,t){return v.filter(function(n){return n[e]===t})}function c(e,n){return e?(t.isNumber(n)||(n=v.length),v.splice(n,0,e),u(e)):-1}function m(e){p(e)&&v.splice(u(e),1)}function u(e){return v.indexOf(e)}function p(e){return e&&u(e)>-1}function h(){return v.length?v[0]:null}function f(){return v.length?v[v.length-1]:null}function g(e,o,i,a){i=i||b;for(var d=u(o);;){if(!r(d))return null;var s=d+(e?-1:1),l=null;if(r(s)?l=v[s]:n&&(l=e?f():h(),s=u(l)),null===l||s===a)return null;if(i(l))return l;t.isUndefined(a)&&(a=s),d=s}}var b=function(){return!0};e&&!t.isArray(e)&&(e=Array.prototype.slice.call(e)),n=!!n;var v=e||[];return{items:o,count:i,inRange:r,contains:p,indexOf:u,itemAt:s,findBy:l,add:c,remove:m,first:h,last:f,next:t.bind(null,g,!1),previous:t.bind(null,g,!0),hasPrevious:d,hasNext:a}}t.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.iterator=e,t}])}])}(),function(){function e(e,n,o){function i(e){var n=u[e];t.isUndefined(n)&&(n=u[e]=r(e));var o=h[n];return t.isUndefined(o)&&(o=a(n)),o}function r(t){return e.MEDIA[t]||("("!==t.charAt(0)?"("+t+")":t)}function a(e){var t=p[e];return t||(t=p[e]=o.matchMedia(e)),t.addListener(d),h[t.media]=!!t.matches}function d(e){n.$evalAsync(function(){h[e.media]=!!e.matches})}function s(e){return p[e]}function l(t,n){for(var o=0;o<e.MEDIA_PRIORITY.length;o++){var i=e.MEDIA_PRIORITY[o];if(p[u[i]].matches){var r=m(t,n+"-"+i);if(t[r])return t[r]}}return t[m(t,n)]}function c(n,o,i){var r=[];return n.forEach(function(n){var a=m(o,n);t.isDefined(o[a])&&r.push(o.$observe(a,t.bind(void 0,i,null)));for(var d in e.MEDIA)a=m(o,n+"-"+d),t.isDefined(o[a])&&r.push(o.$observe(a,t.bind(void 0,i,d)))}),function(){r.forEach(function(e){e()})}}function m(e,t){return f[t]||(f[t]=e.$normalize(t))}var u={},p={},h={},f={};return i.getResponsiveAttribute=l,i.getQuery=s,i.watchResponsiveAttributes=c,i}e.$inject=["$mdConstant","$rootScope","$window"],t.module("material.core").factory("$mdMedia",e)}(),function(){function e(e,n){function o(e){return e=t.isArray(e)?e:[e],e.forEach(function(t){s.forEach(function(n){e.push(n+"-"+t)})}),e}function i(e){return e=t.isArray(e)?e:[e],o(e).map(function(e){return"["+e+"]"}).join(",")}function r(e,t){if(e=d(e),!e)return!1;for(var n=o(t),i=0;i<n.length;i++)if(e.hasAttribute(n[i]))return!0;return!1}function a(e,t){e=d(e),e&&o(t).forEach(function(t){e.removeAttribute(t)})}function d(e){if(e=e[0]||e,e.nodeType)return e}var s=["data","x"];return e?n?i(e):o(e):{buildList:o,buildSelector:i,hasAttribute:r,removeAttribute:a}}t.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.prefixer=e,t}])}])}(),function(){function o(o,r,a,d,s,l,c,m,u,p){function h(e){return e?f(e)||g(e)?e:e+"px":"0"}function f(e){return String(e).indexOf("px")>-1}function g(e){return String(e).indexOf("%")>-1}function b(e){return e[0]||e}var v=l.startSymbol(),E=l.endSymbol(),$="{{"===v&&"}}"===E,C=function(e,n,o){var i=!1;if(e&&e.length){var r=u.getComputedStyle(e[0]);i=t.isDefined(r[n])&&(!o||r[n]==o)}return i},M={dom:{},now:e.performance?t.bind(e.performance,e.performance.now):Date.now||function(){return(new Date).getTime()},bidi:function(e,n,i,r){var a=!("rtl"==o[0].dir||"rtl"==o[0].body.dir);if(0==arguments.length)return a?"ltr":"rtl";var d=t.element(e);a&&t.isDefined(i)?d.css(n,h(i)):!a&&t.isDefined(r)&&d.css(n,h(r))},bidiProperty:function(e,n,i,r){var a=!("rtl"==o[0].dir||"rtl"==o[0].body.dir),d=t.element(e);a&&t.isDefined(n)?(d.css(n,h(r)),d.css(i,"")):!a&&t.isDefined(i)&&(d.css(i,h(r)),d.css(n,""))},clientRect:function(e,t,n){var o=b(e);t=b(t||o.offsetParent||document.body);var i=o.getBoundingClientRect(),r=n?t.getBoundingClientRect():{left:0,top:0,width:0,height:0};return{left:i.left-r.left,top:i.top-r.top,width:i.width,height:i.height}},offsetRect:function(e,t){return M.clientRect(e,t,!0)},nodesToArray:function(e){e=e||[];for(var t=[],n=0;n<e.length;++n)t.push(e.item(n));return t},scrollTop:function(e){e=t.element(e||o[0].body);var i=e[0]==o[0].body?o[0].body:n,r=i?i.scrollTop+i.parentElement.scrollTop:0;return r||Math.abs(e[0].getBoundingClientRect().top)},findFocusTarget:function(e,n){function o(e,n){var o,i=e[0].querySelectorAll(n);return i&&i.length&&i.length&&t.forEach(i,function(e){e=t.element(e);var n=e.hasClass("md-autofocus");n&&(o=e)}),o}var i,r=this.prefixer("md-autofocus",!0);return i=o(e,n||r),i||n==r||(i=o(e,this.prefixer("md-auto-focus",!0)),i||(i=o(e,r))),i},disableScrollAround:function(e,n,i){function r(e){function n(e){e.preventDefault()}e=t.element(e||s);var o;return i&&i.disableScrollMask?o=e:(e=e[0],o=t.element('<div class="md-scroll-mask">  <div class="md-scroll-mask-bar"></div></div>'),e.appendChild(o[0])),o.on("wheel",n),o.on("touchmove",n),function(){o.off("wheel"),o.off("touchmove"),o[0].parentNode.removeChild(o[0]),delete M.disableScrollAround._enableScrolling}}function a(){var e=s.parentNode,t=e.style.cssText||"",n=s.style.cssText||"",o=M.scrollTop(s),i=s.clientWidth;return s.scrollHeight>s.clientHeight+1&&(d(s,{position:"fixed",width:"100%",top:-o+"px"}),e.style.overflowY="scroll"),s.clientWidth<i&&d(s,{overflow:"hidden"}),function(){s.style.cssText=n,e.style.cssText=t,s.scrollTop=o,e.scrollTop=o}}function d(e,t){for(var n in t)e.style[n]=t[n]}if(M.disableScrollAround._count=M.disableScrollAround._count||0,++M.disableScrollAround._count,M.disableScrollAround._enableScrolling)return M.disableScrollAround._enableScrolling;var s=o[0].body,l=a(),c=r(n);return M.disableScrollAround._enableScrolling=function(){--M.disableScrollAround._count||(l(),c(),delete M.disableScrollAround._enableScrolling)}},enableScrolling:function(){var e=this.disableScrollAround._enableScrolling;e&&e()},floatingScrollbars:function(){if(this.floatingScrollbars.cached===n){var e=t.element("<div><div></div></div>").css({width:"100%","z-index":-1,position:"absolute",height:"35px","overflow-y":"scroll"});e.children().css("height","60px"),o[0].body.appendChild(e[0]),this.floatingScrollbars.cached=e[0].offsetWidth==e[0].childNodes[0].offsetWidth,e.remove()}return this.floatingScrollbars.cached},forceFocus:function(t){var n=t[0]||t;document.addEventListener("click",function i(e){e.target===n&&e.$focus&&(n.focus(),e.stopImmediatePropagation(),e.preventDefault(),n.removeEventListener("click",i))},!0);var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!1,!0,e,{},0,0,0,0,!1,!1,!1,!1,0,null),o.$material=!0,o.$focus=!0,n.dispatchEvent(o)},createBackdrop:function(e,t){return a(M.supplant('<md-backdrop class="{0}">',[t]))(e)},supplant:function(e,t,n){return n=n||/\{([^\{\}]*)\}/g,e.replace(n,function(e,n){var o=n.split("."),i=t;try{for(var r in o)o.hasOwnProperty(r)&&(i=i[o[r]])}catch(a){i=e}return"string"==typeof i||"number"==typeof i?i:e})},fakeNgModel:function(){return{$fake:!0,$setTouched:t.noop,$setViewValue:function(e){this.$viewValue=e,this.$render(e),this.$viewChangeListeners.forEach(function(e){e()})},$isEmpty:function(e){return 0===(""+e).length},$parsers:[],$formatters:[],$viewChangeListeners:[],$render:t.noop}},debounce:function(e,t,o,i){var a;return function(){var d=o,s=Array.prototype.slice.call(arguments);r.cancel(a),a=r(function(){a=n,e.apply(d,s)},t||10,i)}},throttle:function(e,t){var n;return function(){var o=this,i=arguments,r=M.now();(!n||r-n>t)&&(e.apply(o,i),n=r)}},time:function(e){var t=M.now();return e(),M.now()-t},valueOnUse:function(e,t,n){var o=null,i=Array.prototype.slice.call(arguments),r=i.length>3?i.slice(3):[];Object.defineProperty(e,t,{get:function(){return null===o&&(o=n.apply(e,r)),o}})},nextUid:function(){return""+i++},disconnectScope:function(e){if(e&&e.$root!==e&&!e.$$destroyed){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e,n=t.$parent;t.$$disconnected=!1,t.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=t,n.$$childTail=t):n.$$childHead=n.$$childTail=t}},getClosest:function(e,n,o){if(t.isString(n)){var i=n.toUpperCase();n=function(e){return e.nodeName===i}}if(e instanceof t.element&&(e=e[0]),o&&(e=e.parentNode),!e)return null;do if(n(e))return e;while(e=e.parentNode);return null},elementContains:function(n,o){var i=e.Node&&e.Node.prototype&&Node.prototype.contains,r=i?t.bind(n,n.contains):t.bind(n,function(e){return n===o||!!(16&this.compareDocumentPosition(e))});return r(o)},extractElementByName:function(e,n,o,i){function r(e){return a(e)||(o?d(e):null)}function a(e){if(e)for(var t=0,o=e.length;t<o;t++)if(e[t].nodeName.toLowerCase()===n)return e[t];return null}function d(e){var t;if(e)for(var n=0,o=e.length;n<o;n++){var i=e[n];if(!t)for(var a=0,d=i.childNodes.length;a<d;a++)t=t||r([i.childNodes[a]])}return t}var s=r(e);return!s&&i&&c.warn(M.supplant("Unable to find node '{0}' in element '{1}'.",[n,e[0].outerHTML])),t.element(s||e)},initOptionalProperties:function(e,n,o){o=o||{},t.forEach(e.$$isolateBindings,function(i,r){if(i.optional&&t.isUndefined(e[r])){var a=t.isDefined(n[i.attrName]);e[r]=t.isDefined(o[r])?o[r]:a}})},nextTick:function(e,t,n){function o(){var e=i.queue,t=i.digest;i.queue=[],i.timeout=null,i.digest=!1,e.forEach(function(e){var t=e.scope&&e.scope.$$destroyed;t||e.callback()}),t&&d.$digest()}var i=M.nextTick,a=i.timeout,s=i.queue||[];return s.push({scope:n,callback:e}),null==t&&(t=!0),i.digest=i.digest||t,i.queue=s,a||(i.timeout=r(o,0,!1))},processTemplate:function(e){return $?e:e&&t.isString(e)?e.replace(/\{\{/g,v).replace(/}}/g,E):e},getParentWithPointerEvents:function(e){for(var t=e.parent();C(t,"pointer-events","none");)t=t.parent();return t},getNearestContentElement:function(e){for(var t=e.parent()[0];t&&t!==m[0]&&t!==document.body&&"MD-CONTENT"!==t.nodeName.toUpperCase();)t=t.parentNode;return t},checkStickySupport:function(){var e,n=t.element("<div>");o[0].body.appendChild(n[0]);for(var i=["sticky","-webkit-sticky"],r=0;r<i.length;++r)if(n.css({position:i[r],top:0,"z-index":2}),n.css("position")==i[r]){e=i[r];break}return n.remove(),e},parseAttributeBoolean:function(e,t){return""===e||!!e&&(t===!1||"false"!==e&&"0"!==e)},hasComputedStyle:C,isParentFormSubmitted:function(e){var n=M.getClosest(e,"form"),o=n?t.element(n).controller("form"):null;return!!o&&o.$submitted},animateScrollTo:function(e,t){function n(){var i=o();e.scrollTop=i,(d?i<t:i>t)&&p(n)}function o(){var e=1e3,t=M.now()-s;return i(t,r,a,e)}function i(e,t,n,o){if(e>o)return t+n;var i=(e/=o)*e,r=i*e;return t+n*(-2*r+3*i)}var r=e.scrollTop,a=t-r,d=r<t,s=M.now();p(n)}};return M.dom.animator=s(M),M}o.$inject=["$document","$timeout","$compile","$rootScope","$$mdAnimate","$interpolate","$log","$rootElement","$window","$$rAF"];var i=0;t.module("material.core").factory("$mdUtil",o),t.element.prototype.focus=t.element.prototype.focus||function(){return this.length&&this[0].focus(),this},t.element.prototype.blur=t.element.prototype.blur||function(){return this.length&&this[0].blur(),this}}(),function(){function e(){function e(){t.showWarnings=!1}var t=this;return t.showWarnings=!0,{disableWarnings:e,$get:["$$rAF","$log","$window","$interpolate",function(e,o,i,r){return n.apply(t,arguments)}]}}function n(e,n,o,i){function r(e,o,i){var r=t.element(e)[0]||e;!r||r.hasAttribute(o)&&0!==r.getAttribute(o).length||c(r,o)||(i=t.isString(i)?i.trim():"",i.length?e.attr(o,i):m&&n.warn('ARIA: Attribute "',o,'", required for accessibility, is missing on node:',r))}function a(t,n,o){e(function(){r(t,n,o())})}function d(e,t){var n=l(e)||"",o=n.indexOf(i.startSymbol())>-1;o?a(e,t,function(){return l(e)}):r(e,t,n)}function s(e,t){var n=l(e),o=n.indexOf(i.startSymbol())>-1;o||n||r(e,t,n)}function l(e){function t(t){for(;t.parentNode&&(t=t.parentNode)!==e;)if(t.getAttribute&&"true"===t.getAttribute("aria-hidden"))return!0}e=e[0]||e;for(var n,o=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,!1),i="";n=o.nextNode();)t(n)||(i+=n.textContent);return i.trim()||""}function c(e,t){function n(e){var t=e.currentStyle?e.currentStyle:o.getComputedStyle(e);return"none"===t.display}var i=e.hasChildNodes(),r=!1;if(i)for(var a=e.childNodes,d=0;d<a.length;d++){var s=a[d];1===s.nodeType&&s.hasAttribute(t)&&(n(s)||(r=!0))}return r}var m=this.showWarnings;return{expect:r,expectAsync:a,expectWithText:d,expectWithoutText:s}}n.$inject=["$$rAF","$log","$window","$interpolate"],t.module("material.core").provider("$mdAria",e)}(),function(){function e(e,n,o,i,r){this.compile=function(a){var d=a.templateUrl,s=a.template||"",l=a.controller,c=a.controllerAs,m=t.extend({},a.resolve||{}),u=t.extend({},a.locals||{}),p=a.transformTemplate||t.identity,h=a.bindToController;return t.forEach(m,function(e,n){t.isString(e)?m[n]=o.get(e):m[n]=o.invoke(e)}),t.extend(m,u),d?m.$template=n(d).then(function(e){return e}):m.$template=e.when(s),e.all(m).then(function(e){var n,o=p(e.$template,a),d=a.element||t.element("<div>").html(o.trim()).contents(),s=i(d);return n={locals:e,element:d,link:function(o){if(e.$scope=o,l){var i=r(l,e,!0,c);h&&t.extend(i.instance,e);var a=i();d.data("$ngControllerController",a),d.children().data("$ngControllerController",a),n.controller=a}return s(o)}}})}}e.$inject=["$q","$templateRequest","$injector","$compile","$controller"],t.module("material.core").service("$mdCompiler",e)}(),function(){function n(){}function o(n,o,i){function r(e){return function(t,n){n.distance<this.state.options.maxDistance&&this.dispatchEvent(t,e,n)}}function a(e,t,n){var o=h[t.replace(/^\$md./,"")];if(!o)throw new Error("Failed to register element with handler "+t+". Available handlers: "+Object.keys(h).join(", "));return o.registerElement(e,n)}function s(e,o){var i=new n(e);return t.extend(i,o),h[e]=i,v}function l(){for(var e=document.createElement("div"),n=["","webkit","Moz","MS","ms","o"],o=0;o<n.length;o++){var i=n[o],r=i?i+"TouchAction":"touchAction";if(t.isDefined(e.style[r]))return r}}var m=navigator.userAgent||navigator.vendor||e.opera,u=m.match(/ipad|iphone|ipod/i),p=m.match(/android/i),g=l(),b="undefined"!=typeof e.jQuery&&t.element===e.jQuery,v={handler:s,register:a,isIos:u,isAndroid:p,isHijackingClicks:(u||p)&&!b&&!f};if(v.isHijackingClicks){var E=6;v.handler("click",{options:{maxDistance:E},onEnd:r("click")}),v.handler("focus",{options:{maxDistance:E},onEnd:function(e,t){function n(e){var t=["INPUT","SELECT","BUTTON","TEXTAREA","VIDEO","AUDIO"];return"-1"!=e.getAttribute("tabindex")&&!e.hasAttribute("DISABLED")&&(e.hasAttribute("tabindex")||e.hasAttribute("href")||e.isContentEditable||t.indexOf(e.nodeName)!=-1)}t.distance<this.state.options.maxDistance&&n(e.target)&&(this.dispatchEvent(e,"focus",t),e.target.focus())}}),v.handler("mouseup",{options:{maxDistance:E},onEnd:r("mouseup")}),v.handler("mousedown",{onStart:function(e){this.dispatchEvent(e,"mousedown")}})}return v.handler("press",{onStart:function(e,t){this.dispatchEvent(e,"$md.pressdown")},onEnd:function(e,t){this.dispatchEvent(e,"$md.pressup")}}).handler("hold",{options:{maxDistance:6,delay:500},onCancel:function(){i.cancel(this.state.timeout)},onStart:function(e,n){return this.state.registeredParent?(this.state.pos={x:n.x,y:n.y},void(this.state.timeout=i(t.bind(this,function(){this.dispatchEvent(e,"$md.hold"),this.cancel()}),this.state.options.delay,!1))):this.cancel()},onMove:function(e,t){g||"touchmove"!==e.type||e.preventDefault();var n=this.state.pos.x-t.x,o=this.state.pos.y-t.y;Math.sqrt(n*n+o*o)>this.options.maxDistance&&this.cancel()},onEnd:function(){this.onCancel()}}).handler("drag",{options:{minDistance:6,horizontal:!0,cancelMultiplier:1.5},onSetup:function(e,t){g&&(this.oldTouchAction=e[0].style[g],e[0].style[g]=t.horizontal===!1?"pan-y":"pan-x")},onCleanup:function(e){this.oldTouchAction&&(e[0].style[g]=this.oldTouchAction)},onStart:function(e){this.state.registeredParent||this.cancel()},onMove:function(e,t){var n,o;g||"touchmove"!==e.type||e.preventDefault(),this.state.dragPointer?this.dispatchDragMove(e):(this.state.options.horizontal?(n=Math.abs(t.distanceX)>this.state.options.minDistance,o=Math.abs(t.distanceY)>this.state.options.minDistance*this.state.options.cancelMultiplier):(n=Math.abs(t.distanceY)>this.state.options.minDistance,o=Math.abs(t.distanceX)>this.state.options.minDistance*this.state.options.cancelMultiplier),n?(this.state.dragPointer=d(e),c(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragstart",this.state.dragPointer)):o&&this.cancel())},dispatchDragMove:o.throttle(function(e){this.state.isRunning&&(c(e,this.state.dragPointer),this.dispatchEvent(e,"$md.drag",this.state.dragPointer))}),onEnd:function(e,t){this.state.dragPointer&&(c(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragend",this.state.dragPointer))}}).handler("swipe",{options:{minVelocity:.65,minDistance:10},onEnd:function(e,t){var n;Math.abs(t.velocityX)>this.state.options.minVelocity&&Math.abs(t.distanceX)>this.state.options.minDistance?(n="left"==t.directionX?"$md.swipeleft":"$md.swiperight",this.dispatchEvent(e,n)):Math.abs(t.velocityY)>this.state.options.minVelocity&&Math.abs(t.distanceY)>this.state.options.minDistance&&(n="up"==t.directionY?"$md.swipeup":"$md.swipedown",this.dispatchEvent(e,n))}})}function i(e){this.name=e,this.state={}}function r(){function n(e,n,o){o=o||u;var i=new t.element.Event(n);i.$material=!0,i.pointer=o,i.srcEvent=e,t.extend(i,{clientX:o.x,clientY:o.y,screenX:o.x,screenY:o.y,pageX:o.x,pageY:o.y,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey}),t.element(o.target).trigger(i)}function o(t,n,o){o=o||u;var i;"click"===n||"mouseup"==n||"mousedown"==n?(i=document.createEvent("MouseEvents"),i.initMouseEvent(n,!0,!0,e,t.detail,o.x,o.y,o.x,o.y,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget||null)):(i=document.createEvent("CustomEvent"),i.initCustomEvent(n,!0,!0,{})),i.$material=!0,i.pointer=o,i.srcEvent=t,o.target.dispatchEvent(i)}var r="undefined"!=typeof e.jQuery&&t.element===e.jQuery;return i.prototype={options:{},dispatchEvent:r?n:o,onSetup:t.noop,onCleanup:t.noop,onStart:t.noop,onMove:t.noop,onEnd:t.noop,onCancel:t.noop,start:function(e,n){if(!this.state.isRunning){var o=this.getNearestParent(e.target),i=o&&o.$mdGesture[this.name]||{};this.state={isRunning:!0,options:t.extend({},this.options,i),registeredParent:o},this.onStart(e,n)}},move:function(e,t){this.state.isRunning&&this.onMove(e,t)},end:function(e,t){this.state.isRunning&&(this.onEnd(e,t),this.state.isRunning=!1)},cancel:function(e,t){this.onCancel(e,t),this.state={}},getNearestParent:function(e){for(var t=e;t;){if((t.$mdGesture||{})[this.name])return t;t=t.parentNode}return null},registerElement:function(e,t){function n(){delete e[0].$mdGesture[o.name],e.off("$destroy",n),o.onCleanup(e,t||{})}var o=this;return e[0].$mdGesture=e[0].$mdGesture||{},e[0].$mdGesture[this.name]=t||{},e.on("$destroy",n),o.onSetup(e,t||{}),n}},i}function a(e,n){function o(e){var t=!e.clientX&&!e.clientY;t||e.$material||e.isIonicTap||l(e)||(e.preventDefault(),e.stopPropagation())}function i(e){var t=0===e.clientX&&0===e.clientY;t||e.$material||e.isIonicTap||l(e)?(g=null,"label"==e.target.tagName.toLowerCase()&&(g={x:e.x,y:e.y})):(e.preventDefault(),e.stopPropagation(),g=null)}function r(e,t){var o;for(var i in h)o=h[i],o instanceof n&&("start"===e&&o.cancel(),o[e](t,u))}function a(e){if(!u){var t=+Date.now();p&&!s(e,p)&&t-p.endTime<1500||(u=d(e),r("start",e))}}function m(e){u&&s(e,u)&&(c(e,u),r("move",e))}function f(e){u&&s(e,u)&&(c(e,u),u.endTime=+Date.now(),r("end",e),p=u,u=null)}document.contains||(document.contains=function(e){return document.body.contains(e)}),!b&&e.isHijackingClicks&&(document.addEventListener("click",i,!0),document.addEventListener("mouseup",o,!0),document.addEventListener("mousedown",o,!0),document.addEventListener("focus",o,!0),b=!0);var v="mousedown touchstart pointerdown",E="mousemove touchmove pointermove",$="mouseup mouseleave touchend touchcancel pointerup pointercancel";t.element(document).on(v,a).on(E,m).on($,f).on("$$mdGestureReset",function(){p=u=null})}function d(e){var t=m(e),n={startTime:+Date.now(),target:e.target,type:e.type.charAt(0)};return n.startX=n.x=t.pageX,n.startY=n.y=t.pageY,n}function s(e,t){return e&&t&&e.type.charAt(0)===t.type}function l(e){return g&&g.x==e.x&&g.y==e.y}function c(e,t){var n=m(e),o=t.x=n.pageX,i=t.y=n.pageY;t.distanceX=o-t.startX,t.distanceY=i-t.startY,t.distance=Math.sqrt(t.distanceX*t.distanceX+t.distanceY*t.distanceY),t.directionX=t.distanceX>0?"right":t.distanceX<0?"left":"",t.directionY=t.distanceY>0?"down":t.distanceY<0?"up":"",t.duration=+Date.now()-t.startTime,t.velocityX=t.distanceX/t.duration,t.velocityY=t.distanceY/t.duration}function m(e){return e=e.originalEvent||e,e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0]||e}o.$inject=["$$MdGestureHandler","$$rAF","$timeout"],a.$inject=["$mdGesture","$$MdGestureHandler"];var u,p,h={},f=!1,g=null,b=!1;t.module("material.core.gestures",[]).provider("$mdGesture",n).factory("$$MdGestureHandler",r).run(a),n.prototype={skipClickHijack:function(){return f=!0},$get:["$$MdGestureHandler","$$rAF","$timeout",function(e,t,n){return new o(e,t,n)}]}}(),function(){function e(){function e(e){function n(e){return s.optionsFactory=e.options,s.methods=(e.methods||[]).concat(a),l}function o(e,t){return d[e]=t,l}function i(t,n){if(n=n||{},n.methods=n.methods||[],n.options=n.options||function(){return{}},/^cancel|hide|show$/.test(t))throw new Error("Preset '"+t+"' in "+e+" is reserved!");if(n.methods.indexOf("_options")>-1)throw new Error("Method '_options' in "+e+" is reserved!");return s.presets[t]={methods:n.methods.concat(a),optionsFactory:n.options,argOption:n.argOption},l}function r(n,o){function i(e){return e=e||{},e._options&&(e=e._options),m.show(t.extend({},c,e))}function r(e){return m.destroy(e)}function a(t,n){var i={};return i[e]=u,o.invoke(t||function(){return n},{},i)}var l,c,m=n(),u={hide:m.hide,cancel:m.cancel,show:i,destroy:r};return l=s.methods||[],c=a(s.optionsFactory,{}),t.forEach(d,function(e,t){u[t]=e}),t.forEach(s.presets,function(e,n){function o(e){this._options=t.extend({},i,e)}var i=a(e.optionsFactory,{}),r=(e.methods||[]).concat(l);if(t.extend(i,{$type:n}),t.forEach(r,function(e){o.prototype[e]=function(t){return this._options[e]=t,this}}),e.argOption){var d="show"+n.charAt(0).toUpperCase()+n.slice(1);u[d]=function(e){var t=u[n](e);return u.show(t)}}u[n]=function(n){return arguments.length&&e.argOption&&!t.isObject(n)&&!t.isArray(n)?(new o)[e.argOption](n):new o(n)}}),u}r.$inject=["$$interimElement","$injector"];var a=["onHide","onShow","onRemove"],d={},s={presets:{}},l={setDefaults:n,addPreset:i,addMethod:o,$get:r};return l.addPreset("build",{methods:["controller","controllerAs","resolve","template","templateUrl","themable","transformTemplate","parent"]}),l}function o(e,o,i,r,a,d,s,l,c,m,u){return function(){function p(e){e=e||{};var t=new b(e||{}),n=!e.skipHide&&$.length?v.cancel():o.when(!0);return n["finally"](function(){$.push(t),t.show()["catch"](function(e){return e})}),t.deferred.promise}function h(e,t){function i(n){return n.remove(e,!1,t||{})["catch"](function(e){return e}),n.deferred.promise}if(!$.length)return o.when(e);if(t=t||{},t.closeAll){var r=o.all($.reverse().map(i));return $=[],r}if(t.closeTo!==n)return o.all($.splice(t.closeTo).map(i));var a=$.pop();return i(a)}function f(e,n){var i=$.pop();return i?(i.remove(e,!0,n||{})["catch"](function(e){return e}),i.deferred.promise["catch"](t.noop)):o.when(e)}function g(e){var n=e?null:$.shift(),i=t.element(e).length?t.element(e)[0].parentNode:null;if(i){var r=$.filter(function(e){var t=e.options.element[0];return t===i});r.length>0&&(n=r[0],$.splice($.indexOf(n),1))}return n?n.remove(E,!1,{$destroy:!0}):o.when(E)}function b(u){function p(){return o(function(e,t){function n(e){y.deferred.reject(e),t(e)}u.onCompiling&&u.onCompiling(u),g(u).then(function(t){T=b(t,u),A=C(T,u,t.controller).then(e,n)},n)})}function h(e,n,i){function r(e){y.deferred.resolve(e)}function a(e){y.deferred.reject(e)}return T?(u=t.extend(u||{},i||{}),u.cancelAutoHide&&u.cancelAutoHide(),u.element.triggerHandler("$mdInterimElementRemove"),u.$destroy===!0?M(u.element,u).then(function(){n&&a(e)||r(e)}):(o.when(A)["finally"](function(){M(u.element,u).then(function(){n&&a(e)||r(e)},a)}),y.deferred.promise)):o.when(!1)}function f(e){return e=e||{},e.template&&(e.template=l.processTemplate(e.template)),t.extend({preserveScope:!1,cancelAutoHide:t.noop,scope:e.scope||r.$new(e.isolateScope),onShow:function(e,t,n){return s.enter(t,n.parent)},onRemove:function(e,t){return t&&s.leave(t)||o.when()}},e)}function g(e){var t=e.skipCompile?null:c.compile(e);return t||o(function(t){t({locals:{},link:function(){return e.element}})})}function b(e,n){t.extend(e.locals,n);var o=e.link(n.scope);return n.element=o,n.parent=E(o,n),n.themable&&m(o),o}function E(n,o){var i=o.parent;if(i=t.isFunction(i)?i(o.scope,n,o):t.isString(i)?t.element(e[0].querySelector(i)):t.element(i),!(i||{}).length){var r;return d[0]&&d[0].querySelector&&(r=d[0].querySelector(":not(svg) > body")),r||(r=d[0]),"#comment"==r.nodeName&&(r=e[0].body),t.element(r)}return i}function $(){var e,o=t.noop;u.hideDelay&&(e=a(v.hide,u.hideDelay),o=function(){a.cancel(e)}),u.cancelAutoHide=function(){o(),u.cancelAutoHide=n}}function C(e,n,i){var r=n.onShowing||t.noop,a=n.onComplete||t.noop;return r(n.scope,e,n,i),o(function(t,r){try{o.when(n.onShow(n.scope,e,n,i)).then(function(){a(n.scope,e,n),$(),t(e)},r)}catch(d){r(d.message)}})}function M(e,n){var o=n.onRemoving||t.noop;return i(function(t,r){try{var a=i.when(n.onRemove(n.scope,e,n)||!0);o(e,a),1==n.$destroy?t(e):a.then(function(){!n.preserveScope&&n.scope&&n.scope.$destroy(),t(e)},r)}catch(d){r(d)}})}var y,T,A=o.when(!0);return u=f(u),y={options:u,deferred:o.defer(),show:p,remove:h}}var v,E=!1,$=[];return v={show:p,hide:h,cancel:f,destroy:g,$injector_:u}}}return o.$inject=["$document","$q","$$q","$rootScope","$timeout","$rootElement","$animate","$mdUtil","$mdCompiler","$mdTheming","$injector"],e.$get=o,e}t.module("material.core").provider("$$interimElement",e)}(),function(){!function(){function e(e){function d(e){return e.replace(m,"").replace(u,function(e,t,n,o){return o?n.toUpperCase():n})}var m=/^((?:x|data)[\:\-_])/i,u=/([\:\-\_]+(.))/g,p=["","xs","gt-xs","sm","gt-sm","md","gt-md","lg","gt-lg","xl","print"],h=["layout","flex","flex-order","flex-offset","layout-align"],f=["show","hide","layout-padding","layout-margin"];
t.forEach(p,function(n){t.forEach(h,function(t){var o=n?t+"-"+n:t;e.directive(d(o),r(o))}),t.forEach(f,function(t){var o=n?t+"-"+n:t;e.directive(d(o),a(o))})}),e.provider("$$mdLayout",function(){return{$get:t.noop,validateAttributeValue:c,validateAttributeUsage:l,disableLayouts:function(e){A.enabled=e!==!0}}}).directive("mdLayoutCss",o).directive("ngCloak",i("ng-cloak")).directive("layoutWrap",a("layout-wrap")).directive("layoutNowrap",a("layout-nowrap")).directive("layoutNoWrap",a("layout-no-wrap")).directive("layoutFill",a("layout-fill")).directive("layoutLtMd",s("layout-lt-md",!0)).directive("layoutLtLg",s("layout-lt-lg",!0)).directive("flexLtMd",s("flex-lt-md",!0)).directive("flexLtLg",s("flex-lt-lg",!0)).directive("layoutAlignLtMd",s("layout-align-lt-md")).directive("layoutAlignLtLg",s("layout-align-lt-lg")).directive("flexOrderLtMd",s("flex-order-lt-md")).directive("flexOrderLtLg",s("flex-order-lt-lg")).directive("offsetLtMd",s("flex-offset-lt-md")).directive("offsetLtLg",s("flex-offset-lt-lg")).directive("hideLtMd",s("hide-lt-md")).directive("hideLtLg",s("hide-lt-lg")).directive("showLtMd",s("show-lt-md")).directive("showLtLg",s("show-lt-lg")).config(n)}function n(){var e=!!document.querySelector("[md-layouts-disabled]");A.enabled=!e}function o(){return A.enabled=!1,{restrict:"A",priority:"900"}}function i(e){return["$timeout",function(n){return{restrict:"A",priority:-10,compile:function(o){return A.enabled?(o.addClass(e),function(t,o){n(function(){o.removeClass(e)},10,!1)}):t.noop}}}]}function r(e){function n(t,n,o){var i=d(n,e,o),r=o.$observe(o.$normalize(e),i);i(p(e,o,"")),t.$on("$destroy",function(){r()})}return["$mdUtil","$interpolate","$log",function(o,i,r){return g=o,b=i,v=r,{restrict:"A",compile:function(o,i){var r;return A.enabled&&(l(e,i,o,v),c(e,p(e,i,""),m(o,e,i)),r=n),r||t.noop}}}]}function a(e){function n(t,n){n.addClass(e)}return["$mdUtil","$interpolate","$log",function(o,i,r){return g=o,b=i,v=r,{restrict:"A",compile:function(o,i){var r;return A.enabled&&(c(e,p(e,i,""),m(o,e,i)),n(null,o),r=n),r||t.noop}}}]}function d(e,n){var o;return function(i){var r=c(n,i||"");t.isDefined(r)&&(o&&e.removeClass(o),o=r?n+"-"+r.replace($,"-"):n,e.addClass(o))}}function s(e){var n=e.split("-");return["$log",function(o){return o.warn(e+"has been deprecated. Please use a `"+n[0]+"-gt-<xxx>` variant."),t.noop}]}function l(e,t,n,o){var i,r,a,d=n[0].nodeName.toLowerCase();switch(e.replace(E,"")){case"flex":"md-button"!=d&&"fieldset"!=d||(r="<"+d+" "+e+"></"+d+">",a="https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers",i="Markup '{0}' may not work as expected in IE Browsers. Consult '{1}' for details.",o.warn(g.supplant(i,[r,a])))}}function c(e,n,o){var i=n;if(!u(n)){switch(e.replace(E,"")){case"layout":h(n,M)||(n=M[0]);break;case"flex":h(n,C)||isNaN(n)&&(n="");break;case"flex-offset":case"flex-order":n&&!isNaN(+n)||(n="0");break;case"layout-align":var r=f(n);n=g.supplant("{main}-{cross}",r);break;case"layout-padding":case"layout-margin":case"layout-fill":case"layout-wrap":case"layout-nowrap":case"layout-nowrap":n=""}n!=i&&(o||t.noop)(n)}return n}function m(e,t,n){return function(e){u(e)||(n[n.$normalize(t)]=e)}}function u(e){return(e||"").indexOf(b.startSymbol())>-1}function p(e,t,n){var o=t.$normalize(e);return t[o]?t[o].replace($,"-"):n||null}function h(e,t,n){e=n&&e?e.replace($,n):e;var o=!1;return e&&t.forEach(function(t){t=n?t.replace($,n):t,o=o||t===e}),o}function f(e){var t,n={main:"start",cross:"stretch"};return e=e||"",0!==e.indexOf("-")&&0!==e.indexOf(" ")||(e="none"+e),t=e.toLowerCase().trim().replace($,"-").split("-"),t.length&&"space"===t[0]&&(t=[t[0]+"-"+t[1],t[2]]),t.length>0&&(n.main=t[0]||n.main),t.length>1&&(n.cross=t[1]||n.cross),y.indexOf(n.main)<0&&(n.main="start"),T.indexOf(n.cross)<0&&(n.cross="stretch"),n}var g,b,v,E=/(-gt)?-(sm|md|lg|print)/g,$=/\s+/g,C=["grow","initial","auto","none","noshrink","nogrow"],M=["row","column"],y=["","start","center","end","stretch","space-around","space-between"],T=["","start","center","end","stretch"],A={enabled:!0,breakpoints:[]};e(t.module("material.core.layout",["ng"]))}()}(),function(){t.module("material.core.meta",[]).provider("$$mdMeta",function(){function e(e){if(r[e])return!0;var n=document.getElementsByName(e)[0];return!!n&&(r[e]=t.element(n),!0)}function n(n,o){if(e(n),r[n])r[n].attr("content",o);else{var a=t.element('<meta name="'+n+'" content="'+o+'"/>');i.append(a),r[n]=a}return function(){r[n].attr("content",""),r[n].remove(),delete r[n]}}function o(t){if(!e(t))throw Error("$$mdMeta: could not find a meta tag with the name '"+t+"'");return r[t].attr("content")}var i=t.element(document.head),r={},a={setMeta:n,getMeta:o};return t.extend({},a,{$get:function(){return a}})})}(),function(){function e(e,o){function i(e){return e&&""!==e}var r,a=[],d={};return r={notFoundError:function(t,n){e.error((n||"")+"No instance found for handle",t)},getInstances:function(){return a},get:function(e){if(!i(e))return null;var t,n,o;for(t=0,n=a.length;t<n;t++)if(o=a[t],o.$$mdHandle===e)return o;return null},register:function(e,n){function o(){var t=a.indexOf(e);t!==-1&&a.splice(t,1)}function i(){var t=d[n];t&&(t.forEach(function(t){t.resolve(e)}),delete d[n])}return n?(e.$$mdHandle=n,a.push(e),i(),o):t.noop},when:function(e){if(i(e)){var t=o.defer(),a=r.get(e);return a?t.resolve(a):(d[e]===n&&(d[e]=[]),d[e].push(t)),t.promise}return o.reject("Invalid `md-component-id` value.")}}}e.$inject=["$log","$q"],t.module("material.core").factory("$mdComponentRegistry",e)}(),function(){!function(){function e(e){function n(e){return e.hasClass("md-icon-button")?{isMenuItem:e.hasClass("md-menu-item"),fitRipple:!0,center:!0}:{isMenuItem:e.hasClass("md-menu-item"),dimBackground:!0}}return{attach:function(o,i,r){return r=t.extend(n(i),r),e.attach(o,i,r)}}}e.$inject=["$mdInkRipple"],t.module("material.core").factory("$mdButtonInkRipple",e)}()}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!0,dimBackground:!1,fitRipple:!0},i))}return{attach:n}}e.$inject=["$mdInkRipple"],t.module("material.core").factory("$mdCheckboxInkRipple",e)}()}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},i))}return{attach:n}}e.$inject=["$mdInkRipple"],t.module("material.core").factory("$mdListInkRipple",e)}()}(),function(){function e(e,n){return{controller:t.noop,link:function(t,o,i){i.hasOwnProperty("mdInkRippleCheckbox")?n.attach(t,o):e.attach(t,o)}}}function n(){function e(){n=!0}var n=!1;return{disableInkRipple:e,$get:["$injector",function(e){function i(i,r,a){return n||r.controller("mdNoInk")?t.noop:e.instantiate(o,{$scope:i,$element:r,rippleOptions:a})}return{attach:i}}]}}function o(e,n,o,i,r,a,d){this.$window=i,this.$timeout=r,this.$mdUtil=a,this.$mdColorUtil=d,this.$scope=e,this.$element=n,this.options=o,this.mousedown=!1,this.ripples=[],this.timeout=null,this.lastRipple=null,a.valueOnUse(this,"container",this.createContainer),this.$element.addClass("md-ink-ripple"),(n.controller("mdInkRipple")||{}).createRipple=t.bind(this,this.createRipple),(n.controller("mdInkRipple")||{}).setColor=t.bind(this,this.color),this.bindEvents()}function i(e,n){(e.mousedown||e.lastRipple)&&(e.mousedown=!1,e.$mdUtil.nextTick(t.bind(e,n),!1))}function r(){return{controller:t.noop}}o.$inject=["$scope","$element","rippleOptions","$window","$timeout","$mdUtil","$mdColorUtil"],e.$inject=["$mdButtonInkRipple","$mdCheckboxInkRipple"],t.module("material.core").provider("$mdInkRipple",n).directive("mdInkRipple",e).directive("mdNoInk",r).directive("mdNoBar",r).directive("mdNoStretch",r);var a=450;o.prototype.color=function(e){function n(){var e=o.options&&o.options.colorElement?o.options.colorElement:[],t=e.length?e[0]:o.$element[0];return t?o.$window.getComputedStyle(t).color:"rgb(0,0,0)"}var o=this;return t.isDefined(e)&&(o._color=o._parseColor(e)),o._color||o._parseColor(o.inkRipple())||o._parseColor(n())},o.prototype.calculateColor=function(){return this.color()},o.prototype._parseColor=function(e,t){t=t||1;var n=this.$mdColorUtil;if(e)return 0===e.indexOf("rgba")?e.replace(/\d?\.?\d*\s*\)\s*$/,(.1*t).toString()+")"):0===e.indexOf("rgb")?n.rgbToRgba(e):0===e.indexOf("#")?n.hexToRgba(e):void 0},o.prototype.bindEvents=function(){this.$element.on("mousedown",t.bind(this,this.handleMousedown)),this.$element.on("mouseup touchend",t.bind(this,this.handleMouseup)),this.$element.on("mouseleave",t.bind(this,this.handleMouseup)),this.$element.on("touchmove",t.bind(this,this.handleTouchmove))},o.prototype.handleMousedown=function(e){if(!this.mousedown)if(e.hasOwnProperty("originalEvent")&&(e=e.originalEvent),this.mousedown=!0,this.options.center)this.createRipple(this.container.prop("clientWidth")/2,this.container.prop("clientWidth")/2);else if(e.srcElement!==this.$element[0]){var t=this.$element[0].getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top;this.createRipple(n,o)}else this.createRipple(e.offsetX,e.offsetY)},o.prototype.handleMouseup=function(){i(this,this.clearRipples)},o.prototype.handleTouchmove=function(){i(this,this.deleteRipples)},o.prototype.deleteRipples=function(){for(var e=0;e<this.ripples.length;e++)this.ripples[e].remove()},o.prototype.clearRipples=function(){for(var e=0;e<this.ripples.length;e++)this.fadeInComplete(this.ripples[e])},o.prototype.createContainer=function(){var e=t.element('<div class="md-ripple-container"></div>');return this.$element.append(e),e},o.prototype.clearTimeout=function(){this.timeout&&(this.$timeout.cancel(this.timeout),this.timeout=null)},o.prototype.isRippleAllowed=function(){var e=this.$element[0];do{if(!e.tagName||"BODY"===e.tagName)break;if(e&&t.isFunction(e.hasAttribute)){if(e.hasAttribute("disabled"))return!1;if("false"===this.inkRipple()||"0"===this.inkRipple())return!1}}while(e=e.parentNode);return!0},o.prototype.inkRipple=function(){return this.$element.attr("md-ink-ripple")},o.prototype.createRipple=function(e,n){function o(e,t,n){return e?Math.max(t,n):Math.sqrt(Math.pow(t,2)+Math.pow(n,2))}if(this.isRippleAllowed()){var i=this,r=i.$mdColorUtil,d=t.element('<div class="md-ripple"></div>'),s=this.$element.prop("clientWidth"),l=this.$element.prop("clientHeight"),c=2*Math.max(Math.abs(s-e),e),m=2*Math.max(Math.abs(l-n),n),u=o(this.options.fitRipple,c,m),p=this.calculateColor();d.css({left:e+"px",top:n+"px",background:"black",width:u+"px",height:u+"px",backgroundColor:r.rgbaToRgb(p),borderColor:r.rgbaToRgb(p)}),this.lastRipple=d,this.clearTimeout(),this.timeout=this.$timeout(function(){i.clearTimeout(),i.mousedown||i.fadeInComplete(d)},.35*a,!1),this.options.dimBackground&&this.container.css({backgroundColor:p}),this.container.append(d),this.ripples.push(d),d.addClass("md-ripple-placed"),this.$mdUtil.nextTick(function(){d.addClass("md-ripple-scaled md-ripple-active"),i.$timeout(function(){i.clearRipples()},a,!1)},!1)}},o.prototype.fadeInComplete=function(e){this.lastRipple===e?this.timeout||this.mousedown||this.removeRipple(e):this.removeRipple(e)},o.prototype.removeRipple=function(e){var t=this,n=this.ripples.indexOf(e);n<0||(this.ripples.splice(this.ripples.indexOf(e),1),e.removeClass("md-ripple-active"),e.addClass("md-ripple-remove"),0===this.ripples.length&&this.container.css({backgroundColor:""}),this.$timeout(function(){t.fadeOutComplete(e)},a,!1))},o.prototype.fadeOutComplete=function(e){e.remove(),this.lastRipple=null}}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},i))}return{attach:n}}e.$inject=["$mdInkRipple"],t.module("material.core").factory("$mdTabInkRipple",e)}()}(),function(){t.module("material.core.theming.palette",[]).constant("$mdColorPalette",{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 A100",contrastStrongLightColors:"400 500 600 700 A200 A400 A700"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"500 600 A200 A400 A700"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400 A700"},"deep-purple":{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},"light-blue":{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900 A700",contrastStrongLightColors:"600 700 800 A700"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},"light-green":{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00",contrastDefaultColor:"dark",contrastLightColors:"900",contrastStrongLightColors:"900"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600",contrastDefaultColor:"dark"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00",contrastDefaultColor:"dark"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},"deep-orange":{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100 A200",contrastStrongLightColors:"500 600 700 800 900 A400 A700"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100 A200",contrastStrongLightColors:"300 400"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#ffffff",A200:"#000000",A400:"#303030",A700:"#616161",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900 A200 A400 A700"},"blue-grey":{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 A100 A200",contrastStrongLightColors:"400 500 700"}})}(),function(){!function(e){function t(e){var t=!!document.querySelector("[md-themes-disabled]");e.disableTheming(t)}function o(t,o){function i(e,t){return t=t||{},p[e]=a(e,t),h}function r(t,n){return a(t,e.extend({},p[t]||{},n))}function a(e,t){var n=w.filter(function(e){return!t[e]});if(n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1",n.join(", ")).replace("%2",e));return t}function s(t,n){if(E[t])return E[t];n=n||"default";var o="string"==typeof n?E[n]:n,i=new c(t);return o&&e.forEach(o.colors,function(t,n){i.colors[n]={name:t.name,hues:e.extend({},t.hues)}}),E[t]=i,i}function c(t){function n(t){if(t=0===arguments.length||!!t,t!==o.isDark){o.isDark=t,o.foregroundPalette=o.isDark?g:f,o.foregroundShadow=o.isDark?b:v;var n=o.isDark?A:T,i=o.isDark?T:A;return e.forEach(n,function(e,t){var n=o.colors[t],r=i[t];if(n)for(var a in n.hues)n.hues[a]===r[a]&&(n.hues[a]=e[a])}),o}}var o=this;o.name=t,o.colors={},o.dark=n,n(!1),M.forEach(function(t){var n=(o.isDark?A:T)[t];o[t+"Palette"]=function(i,r){var a=o.colors[t]={name:i,hues:e.extend({},n,r)};return Object.keys(a.hues).forEach(function(e){if(!n[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1",e).replace("%2",o.name).replace("%3",i).replace("%4",Object.keys(n).join(", ")))}),Object.keys(a.hues).map(function(e){return a.hues[e]}).forEach(function(e){if(w.indexOf(e)==-1)throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1",e).replace("%2",o.name).replace("%3",t).replace("%4",i).replace("%5",w.join(", ")))}),o},o[t+"Color"]=function(){var e=Array.prototype.slice.call(arguments);return console.warn("$mdThemingProviderTheme."+t+"Color() has been deprecated. Use $mdThemingProviderTheme."+t+"Palette() instead."),o[t+"Palette"].apply(o,e)}})}function m(t,o){function i(e){return e===n||""===e||a.THEMES[e]!==n}function r(n,r){function a(){return l=r.controller("mdTheme")||n.data("$mdThemeController"),l&&l.$mdTheme||("default"==C?"":C)}function d(e){if(e){i(e)||o.warn("Attempted to use unregistered theme '"+e+"'. Register it with $mdThemingProvider.theme().");var t=n.data("$mdThemeName");t&&n.removeClass("md-"+t+"-theme"),n.addClass("md-"+e+"-theme"),n.data("$mdThemeName",e),l&&n.data("$mdThemeController",l)}}function s(){var e=r.controller("mdTheme");return!!e&&(n.on("$destroy",e.registerChanges(function(){d(a())})),!0)}var l=r.controller("mdTheme"),c=n.attr("md-theme-watch"),m=($||e.isDefined(c))&&"false"!=c;d(a()),($&&!s()||!$&&m)&&n.on("$destroy",t.$watch(a,d))}var a=function(e,o){o===n&&(o=e,e=n),e===n&&(e=t),a.inherit(o,o)};return a.THEMES=e.extend({},E),a.PALETTES=e.extend({},p),a.inherit=r,a.registered=i,a.defaultTheme=function(){return C},a.generateTheme=function(e){l(E[e],e,k.nonce)},a.setBrowserColor=x,a}m.$inject=["$rootScope","$log"],p={};var h,E={},$=!1,C="default";e.extend(p,t);var y=function(e){var t=o.setMeta("theme-color",e),n=o.setMeta("msapplication-navbutton-color",e);return function(){t(),n()}},x=function(t){t=e.isObject(t)?t:{};var n=t.theme||"default",o=t.hue||"800",i=p[t.palette]||p[E[n].colors[t.palette||"primary"].name],r=e.isObject(i[o])?i[o].hex:i[o];return y(r)};return h={definePalette:i,extendPalette:r,theme:s,configuration:function(){return e.extend({},k,{defaultTheme:C,alwaysWatchTheme:$,registeredStyles:[].concat(k.registeredStyles)})},disableTheming:function(t){k.disableTheming=e.isUndefined(t)||!!t},registerStyles:function(e){k.registeredStyles.push(e)},setNonce:function(e){k.nonce=e},generateThemesOnDemand:function(e){k.generateOnDemand=e},setDefaultTheme:function(e){C=e},alwaysWatchTheme:function(e){$=e},enableBrowserColor:x,$get:m,_LIGHT_DEFAULT_HUES:T,_DARK_DEFAULT_HUES:A,_PALETTES:p,_THEMES:E,_parseRules:d,_rgba:u}}function i(t,n,o){return{priority:100,link:{pre:function(i,r,a){var d=[],s={registerChanges:function(t,n){return n&&(t=e.bind(n,t)),d.push(t),function(){var e=d.indexOf(t);e>-1&&d.splice(e,1)}},$setTheme:function(e){t.registered(e)||o.warn("attempted to use unregistered theme '"+e+"'"),s.$mdTheme=e,d.forEach(function(e){e()})}};r.data("$mdThemeController",s),s.$setTheme(n(a.mdTheme)(i)),a.$observe("mdTheme",s.$setTheme)}}}}function r(){return k.disableTheming=!0,{restrict:"A",priority:"900"}}function a(e){return e}function d(t,n,o){c(t,n),o=o.replace(/THEME_NAME/g,t.name);var i=[],r=t.colors[n],a=new RegExp("\\.md-"+t.name+"-theme","g"),d=new RegExp("('|\")?{{\\s*("+n+")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?","g"),s=/'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow|default)-?(\d\.?\d*)?(contrast)?\s*\}\}'?"?/g,l=p[r.name];return o=o.replace(s,function(e,n,o,i,r){return"foreground"===n?"shadow"==o?t.foregroundShadow:t.foregroundPalette[o]||t.foregroundPalette[1]:(0!==o.indexOf("hue")&&"default"!==o||(o=t.colors[n].hues[o]),u((p[t.colors[n].name][o]||"")[r?"contrast":"value"],i))}),e.forEach(r.hues,function(e,n){var r=o.replace(d,function(t,n,o,i,r){return u(l[e]["color"===i?"value":"contrast"],r)});if("default"!==n&&(r=r.replace(a,".md-"+t.name+"-theme.md-"+n)),"default"==t.name){var s=/((?:(?:(?: |>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)+) )?)((?:(?:\w|\.|-)+)?)\.md-default-theme((?: |>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)*)/g;r=r.replace(s,function(e,t,n,o){return e+", "+t+n+o})}i.push(r)}),i}function s(t,n){function o(t,n){var o=t.contrastDefaultColor,i=t.contrastLightColors||[],r=t.contrastStrongLightColors||[],a=t.contrastDarkColors||[];"string"==typeof i&&(i=i.split(" ")),"string"==typeof r&&(r=r.split(" ")),"string"==typeof a&&(a=a.split(" ")),delete t.contrastDefaultColor,delete t.contrastLightColors,delete t.contrastStrongLightColors,delete t.contrastDarkColors,e.forEach(t,function(n,d){function s(){return"light"===o?a.indexOf(d)>-1?E:r.indexOf(d)>-1?C:$:i.indexOf(d)>-1?r.indexOf(d)>-1?C:$:E}if(!e.isObject(n)){var l=m(n);if(!l)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1",n).replace("%2",t.name).replace("%3",d));t[d]={hex:t[d],value:l,contrast:s()}}})}var i=document.head,r=i?i.firstElementChild:null,a=!k.disableTheming&&t.has("$MD_THEME_CSS")?t.get("$MD_THEME_CSS"):"";if(a+=k.registeredStyles.join(""),r&&0!==a.length){e.forEach(p,o);var d=a.split(/\}(?!(\}|'|"|;))/).filter(function(e){return e&&e.trim().length}).map(function(e){return e.trim()+"}"}),s=new RegExp("md-("+M.join("|")+")","g");M.forEach(function(e){x[e]=""}),d.forEach(function(e){for(var t,n=(e.match(s),0);t=M[n];n++)if(e.indexOf(".md-"+t)>-1)return x[t]+=e;for(n=0;t=M[n];n++)if(e.indexOf(t)>-1)return x[t]+=e;return x[y]+=e}),k.generateOnDemand||e.forEach(n.THEMES,function(e){h[e.name]||"default"!==n.defaultTheme()&&"default"===e.name||l(e,e.name,k.nonce)})}}function l(e,t,n){var o=document.head,i=o?o.firstElementChild:null;h[t]||(M.forEach(function(t){for(var r=d(e,t,x[t]);r.length;){var a=r.shift();if(a){var s=document.createElement("style");s.setAttribute("md-theme-style",""),n&&s.setAttribute("nonce",n),s.appendChild(document.createTextNode(a)),o.insertBefore(s,i)}}}),h[e.name]=!0)}function c(e,t){if(!p[(e.colors[t]||{}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1",e.name).replace("%2",t).replace("%3",Object.keys(p).join(", ")))}function m(t){if(e.isArray(t)&&3==t.length)return t;if(/^rgb/.test(t))return t.replace(/(^\s*rgba?\(|\)\s*$)/g,"").split(",").map(function(e,t){return 3==t?parseFloat(e,10):parseInt(e,10)});if("#"==t.charAt(0)&&(t=t.substring(1)),/^([a-fA-F0-9]{3}){1,2}$/g.test(t)){var n=t.length/3,o=t.substr(0,n),i=t.substr(n,n),r=t.substr(2*n);return 1===n&&(o+=o,i+=i,r+=r),[parseInt(o,16),parseInt(i,16),parseInt(r,16)]}}function u(t,n){return t?(4==t.length&&(t=e.copy(t),n?t.pop():n=t.pop()),n&&("number"==typeof n||"string"==typeof n&&n.length)?"rgba("+t.join(",")+","+n+")":"rgb("+t.join(",")+")"):"rgb('0,0,0')"}t.$inject=["$mdThemingProvider"],i.$inject=["$mdTheming","$interpolate","$log"],a.$inject=["$mdTheming"],o.$inject=["$mdColorPalette","$$mdMetaProvider"],s.$inject=["$injector","$mdTheming"],e.module("material.core.theming",["material.core.theming.palette","material.core.meta"]).directive("mdTheme",i).directive("mdThemable",a).directive("mdThemesDisabled",r).provider("$mdTheming",o).config(t).run(s);var p,h={},f={name:"dark",1:"rgba(0,0,0,0.87)",2:"rgba(0,0,0,0.54)",3:"rgba(0,0,0,0.38)",4:"rgba(0,0,0,0.12)"},g={name:"light",1:"rgba(255,255,255,1.0)",2:"rgba(255,255,255,0.7)",3:"rgba(255,255,255,0.5)",4:"rgba(255,255,255,0.12)"},b="1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",v="",E=m("rgba(0,0,0,0.87)"),$=m("rgba(255,255,255,0.87)"),C=m("rgb(255,255,255)"),M=["primary","accent","warn","background"],y="primary",T={accent:{"default":"A200","hue-1":"A100","hue-2":"A400","hue-3":"A700"},background:{"default":"50","hue-1":"A100","hue-2":"100","hue-3":"300"}},A={background:{"default":"A400","hue-1":"800","hue-2":"900","hue-3":"A200"}};M.forEach(function(e){var t={"default":"500","hue-1":"300","hue-2":"800","hue-3":"A100"};T[e]||(T[e]=t),A[e]||(A[e]=t)});var w=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"],k={disableTheming:!1,generateOnDemand:!1,registeredStyles:[],nonce:null},x={}}(e.angular)}(),function(){function n(n,o,i,r,a){var d;return d={translate3d:function(e,t,n,o){function i(n){return a(e,{to:n||t,addClass:o.transitionOutClass,removeClass:o.transitionInClass}).start()}return a(e,{from:t,to:n,addClass:o.transitionInClass,removeClass:o.transitionOutClass}).start().then(function(){return i})},waitTransitionEnd:function(t,n){var a=3e3;return o(function(o,d){function s(e){e&&e.target!==t[0]||(e&&i.cancel(c),t.off(r.CSS.TRANSITIONEND,s),o())}function l(n){return n=n||e.getComputedStyle(t[0]),"0s"==n.transitionDuration||!n.transition&&!n.transitionProperty}n=n||{},l(n.cachedTransitionStyles)&&(a=0);var c=i(s,n.timeout||a);t.on(r.CSS.TRANSITIONEND,s)})},calculateTransformValues:function(e,t){function n(){var t=e?e.parent():null,n=t?t.parent():null;return n?d.clientRect(n):null}var o=t.element,i=t.bounds;if(o||i){var r=o?d.clientRect(o)||n():d.copyRect(i),a=d.copyRect(e[0].getBoundingClientRect()),s=d.centerPointFor(a),l=d.centerPointFor(r);return{centerX:l.x-s.x,centerY:l.y-s.y,scaleX:Math.round(100*Math.min(.5,r.width/a.width))/100,scaleY:Math.round(100*Math.min(.5,r.height/a.height))/100}}return{centerX:0,centerY:0,scaleX:.5,scaleY:.5}},calculateZoomToOrigin:function(e,o){var i="translate3d( {centerX}px, {centerY}px, 0 ) scale( {scaleX}, {scaleY} )",r=t.bind(null,n.supplant,i);return r(d.calculateTransformValues(e,o))},calculateSlideToOrigin:function(e,o){var i="translate3d( {centerX}px, {centerY}px, 0 )",r=t.bind(null,n.supplant,i);return r(d.calculateTransformValues(e,o))},toCss:function(e){function n(e,n,i){t.forEach(n.split(" "),function(e){o[e]=i})}var o={},i="left top right bottom width height x y min-width min-height max-width max-height";return t.forEach(e,function(e,a){if(!t.isUndefined(e))if(i.indexOf(a)>=0)o[a]=e+"px";else switch(a){case"transition":n(a,r.CSS.TRANSITION,e);break;case"transform":n(a,r.CSS.TRANSFORM,e);break;case"transformOrigin":n(a,r.CSS.TRANSFORM_ORIGIN,e);break;case"font-size":o["font-size"]=e}}),o},toTransformCss:function(e,n,o){var i={};return t.forEach(r.CSS.TRANSFORM.split(" "),function(t){i[t]=e}),n&&(o=o||"all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important",i.transition=o),i},copyRect:function(e,n){return e?(n=n||{},t.forEach("left top right bottom width height".split(" "),function(t){n[t]=Math.round(e[t])}),n.width=n.width||n.right-n.left,n.height=n.height||n.bottom-n.top,n):null},clientRect:function(e){var n=t.element(e)[0].getBoundingClientRect(),o=function(e){return e&&e.width>0&&e.height>0};return o(n)?d.copyRect(n):null},centerPointFor:function(e){return e?{x:Math.round(e.left+e.width/2),y:Math.round(e.top+e.height/2)}:{x:0,y:0}}}}t.module("material.core").factory("$$mdAnimate",["$q","$timeout","$mdConstant","$animateCss",function(e,t,o,i){return function(r){return n(r,e,t,o,i)}}])}(),function(){t.version.minor>=4?t.module("material.core.animate",[]):!function(){function e(e){return e.replace(/-[a-z]/g,function(e){return e.charAt(1).toUpperCase()})}var n=t.forEach,o=t.isDefined(document.documentElement.style.WebkitAppearance),i=o?"-webkit-":"",r=(o?"webkitTransitionEnd ":"")+"transitionend",a=(o?"webkitAnimationEnd ":"")+"animationend",d=["$document",function(e){return function(){return e[0].body.clientWidth+1}}],s=["$$rAF",function(e){return function(){var t=!1;return e(function(){t=!0}),function(n){t?n():e(n)}}}],l=["$q","$$rAFMutex",function(e,o){function i(e){this.setHost(e),this._doneCallbacks=[],this._runInAnimationFrame=o(),this._state=0}var r=0,a=1,d=2;return i.prototype={setHost:function(e){this.host=e||{}},done:function(e){this._state===d?e():this._doneCallbacks.push(e)},progress:t.noop,getPromise:function(){if(!this.promise){var t=this;this.promise=e(function(e,n){t.done(function(t){t===!1?n():e()})})}return this.promise},then:function(e,t){return this.getPromise().then(e,t)},"catch":function(e){return this.getPromise()["catch"](e)},"finally":function(e){return this.getPromise()["finally"](e)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1)},complete:function(e){var t=this;t._state===r&&(t._state=a,t._runInAnimationFrame(function(){t._resolve(e)}))},_resolve:function(e){this._state!==d&&(n(this._doneCallbacks,function(t){t(e)}),this._doneCallbacks.length=0,this._state=d)}},i.all=function(e,t){function o(n){r=r&&n,++i===e.length&&t(r)}var i=0,r=!0;n(e,function(e){e.done(o)})},i}];t.module("material.core.animate",[]).factory("$$forceReflow",d).factory("$$AnimateRunner",l).factory("$$rAFMutex",s).factory("$animateCss",["$window","$$rAF","$$AnimateRunner","$$forceReflow","$$jqLite","$timeout","$animate",function(t,d,s,l,c,m,u){function p(o,d){var l=[],c=C(o),p=c&&u.enabled(),g=!1,y=!1;p&&(d.transitionStyle&&l.push([i+"transition",d.transitionStyle]),d.keyframeStyle&&l.push([i+"animation",d.keyframeStyle]),d.delay&&l.push([i+"transition-delay",d.delay+"s"]),d.duration&&l.push([i+"transition-duration",d.duration+"s"]),
g=d.keyframeStyle||d.to&&(d.duration>0||d.transitionStyle),y=!!d.addClass||!!d.removeClass,M(o,!0));var T=p&&(g||y);E(o,d);var A,w,k=!1;return{close:t.close,start:function(){function t(){if(!k)return k=!0,A&&w&&o.off(A,w),h(o,d),v(o,d),n(l,function(t){c.style[e(t[0])]=""}),u.complete(!0),u}var u=new s;return b(function(){if(M(o,!1),!T)return t();n(l,function(t){var n=t[0],o=t[1];c.style[e(n)]=o}),h(o,d);var s=f(o);if(0===s.duration)return t();var u=[];d.easing&&(s.transitionDuration&&u.push([i+"transition-timing-function",d.easing]),s.animationDuration&&u.push([i+"animation-timing-function",d.easing])),d.delay&&s.animationDelay&&u.push([i+"animation-delay",d.delay+"s"]),d.duration&&s.animationDuration&&u.push([i+"animation-duration",d.duration+"s"]),n(u,function(t){var n=t[0],o=t[1];c.style[e(n)]=o,l.push(t)});var p=s.delay,g=1e3*p,b=s.duration,v=1e3*b,E=Date.now();A=[],s.transitionDuration&&A.push(r),s.animationDuration&&A.push(a),A=A.join(" "),w=function(e){e.stopPropagation();var n=e.originalEvent||e,o=n.timeStamp||Date.now(),i=parseFloat(n.elapsedTime.toFixed(3));Math.max(o-E,0)>=g&&i>=b&&t()},o.on(A,w),$(o,d),m(t,g+1.5*v,!1)}),u}}}function h(e,t){t.addClass&&(c.addClass(e,t.addClass),t.addClass=null),t.removeClass&&(c.removeClass(e,t.removeClass),t.removeClass=null)}function f(e){function n(e){return o?"Webkit"+e.charAt(0).toUpperCase()+e.substr(1):e}var i=C(e),r=t.getComputedStyle(i),a=g(r[n("transitionDuration")]),d=g(r[n("animationDuration")]),s=g(r[n("transitionDelay")]),l=g(r[n("animationDelay")]);d*=parseInt(r[n("animationIterationCount")],10)||1;var c=Math.max(d,a),m=Math.max(l,s);return{duration:c,delay:m,animationDuration:d,transitionDuration:a,animationDelay:l,transitionDelay:s}}function g(e){var t=0,o=(e||"").split(/\s*,\s*/);return n(o,function(e){"s"==e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),e=parseFloat(e)||0,t=t?Math.max(e,t):e}),t}function b(e){y&&y(),T.push(e),y=d(function(){y=null;for(var e=l(),t=0;t<T.length;t++)T[t](e);T.length=0})}function v(e,t){E(e,t),$(e,t)}function E(e,t){t.from&&(e.css(t.from),t.from=null)}function $(e,t){t.to&&(e.css(t.to),t.to=null)}function C(e){for(var t=0;t<e.length;t++)if(1===e[t].nodeType)return e[t]}function M(t,n){var o=C(t),r=e(i+"transition-delay");o.style[r]=n?"-9999s":""}var y,T=[];return p}])}()}(),function(){t.module("material.components.autocomplete",["material.core","material.components.icon","material.components.virtualRepeat"])}(),function(){t.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",["$mdTheming","$mdUtil","$animate","$rootElement","$window","$log","$$rAF","$document",function(e,n,o,i,r,a,d,s){function l(l,m,u){function p(){var e=parseInt(h.height,10)+Math.abs(parseInt(h.top,10));m.css("height",e+"px")}o.pin&&o.pin(m,i);var h;d(function(){if(h=r.getComputedStyle(s[0].body),"fixed"===h.position){var o=n.debounce(function(){h=r.getComputedStyle(s[0].body),p()},60,null,!1);p(),t.element(r).on("resize",o),l.$on("$destroy",function(){t.element(r).off("resize",o)})}var i=m.parent();if(i.length){"BODY"===i[0].nodeName&&m.css("position","fixed");var d=r.getComputedStyle(i[0]);"static"===d.position&&a.warn(c),e.inherit(m,i)}})}var c="<md-backdrop> may not work properly in a scrolled, static-positioned parent container.";return{restrict:"E",link:l}}])}(),function(){function e(e){return{restrict:"E",link:function(t,n){n.addClass("_md"),t.$on("$destroy",function(){e.destroy()})}}}function n(e){function n(e,n,r,a,d,s,l,c){function m(o,i,l,m){if(i=r.extractElementByName(i,"md-bottom-sheet"),i.attr("tabindex","-1"),i.hasClass("ng-cloak")){var u="$mdBottomSheet: using `<md-bottom-sheet ng-cloak >` will affect the bottom-sheet opening animations.";c.warn(u,i[0])}l.disableBackdrop||(h=r.createBackdrop(o,"md-bottom-sheet-backdrop md-opaque"),h[0].tabIndex=-1,l.clickOutsideToClose&&h.on("click",function(){r.nextTick(d.cancel,!0)}),a.inherit(h,l.parent),e.enter(h,l.parent,null));var f=new p(i,l.parent);return l.bottomSheet=f,a.inherit(f.element,l.parent),l.disableParentScroll&&(l.restoreScroll=r.disableScrollAround(f.element,l.parent)),e.enter(f.element,l.parent,h).then(function(){var e=r.findFocusTarget(i)||t.element(i[0].querySelector("button")||i[0].querySelector("a")||i[0].querySelector(r.prefixer("ng-click",!0)))||h;l.escapeToClose&&(l.rootElementKeyupCallback=function(e){e.keyCode===n.KEY_CODE.ESCAPE&&r.nextTick(d.cancel,!0)},s.on("keyup",l.rootElementKeyupCallback),e&&e.focus())})}function u(t,n,o){var i=o.bottomSheet;return o.disableBackdrop||e.leave(h),e.leave(i.element).then(function(){o.disableParentScroll&&(o.restoreScroll(),delete o.restoreScroll),i.cleanup()})}function p(e,t){function a(t){e.css(n.CSS.TRANSITION_DURATION,"0ms")}function s(t){var o=t.pointer.distanceY;o<5&&(o=Math.max(-i,o/2)),e.css(n.CSS.TRANSFORM,"translate3d(0,"+(i+o)+"px,0)")}function c(t){if(t.pointer.distanceY>0&&(t.pointer.distanceY>20||Math.abs(t.pointer.velocityY)>o)){var i=e.prop("offsetHeight")-t.pointer.distanceY,a=Math.min(i/t.pointer.velocityY*.75,500);e.css(n.CSS.TRANSITION_DURATION,a+"ms"),r.nextTick(d.cancel,!0)}else e.css(n.CSS.TRANSITION_DURATION,""),e.css(n.CSS.TRANSFORM,"")}var m=l.register(t,"drag",{horizontal:!1});return t.on("$md.dragstart",a).on("$md.drag",s).on("$md.dragend",c),{element:e,cleanup:function(){m(),t.off("$md.dragstart",a),t.off("$md.drag",s),t.off("$md.dragend",c)}}}var h;return{themable:!0,onShow:m,onRemove:u,disableBackdrop:!1,escapeToClose:!0,clickOutsideToClose:!0,disableParentScroll:!0}}n.$inject=["$animate","$mdConstant","$mdUtil","$mdTheming","$mdBottomSheet","$rootElement","$mdGesture","$log"];var o=.5,i=80;return e("$mdBottomSheet").setDefaults({methods:["disableParentScroll","escapeToClose","clickOutsideToClose"],options:n})}e.$inject=["$mdBottomSheet"],n.$inject=["$$interimElementProvider"],t.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",e).provider("$mdBottomSheet",n)}(),function(){function e(e){return{restrict:"E",link:function(t,n){e(n)}}}function n(e,n,o,i){function r(e){return t.isDefined(e.href)||t.isDefined(e.ngHref)||t.isDefined(e.ngLink)||t.isDefined(e.uiSref)}function a(e,t){if(r(t))return'<a class="md-button" ng-transclude></a>';var n="undefined"==typeof t.type?"button":t.type;return'<button class="md-button" type="'+n+'" ng-transclude></button>'}function d(a,d,s){n(d),e.attach(a,d),o.expectWithoutText(d,"aria-label"),r(s)&&t.isDefined(s.ngDisabled)&&a.$watch(s.ngDisabled,function(e){d.attr("tabindex",e?-1:0)}),d.on("click",function(e){s.disabled===!0&&(e.preventDefault(),e.stopImmediatePropagation())}),d.hasClass("md-no-focus")||(a.mouseActive=!1,d.on("mousedown",function(){a.mouseActive=!0,i(function(){a.mouseActive=!1},100)}).on("focus",function(){a.mouseActive===!1&&d.addClass("md-focused")}).on("blur",function(e){d.removeClass("md-focused")}))}return{restrict:"EA",replace:!0,transclude:!0,template:a,link:d}}n.$inject=["$mdButtonInkRipple","$mdTheming","$mdAria","$timeout"],e.$inject=["$mdTheming"],t.module("material.components.button",["material.core"]).directive("mdButton",n).directive("a",e)}(),function(){function e(e){return{restrict:"E",link:function(t,n,o){n.addClass("_md"),e(n)}}}e.$inject=["$mdTheming"],t.module("material.components.card",["material.core"]).directive("mdCard",e)}(),function(){t.module("material.components.chips",["material.core","material.components.autocomplete"])}(),function(){function e(e,n,o,i,r,a){function d(d,s){function l(d,s,l,c){function m(e,t,n){l[e]&&d.$watch(l[e],function(e){n[e]&&s.attr(t,n[e])})}function u(e){var t=e.which||e.keyCode;t!==o.KEY_CODE.SPACE&&t!==o.KEY_CODE.ENTER||(e.preventDefault(),s.addClass("md-focused"),p(e))}function p(e){s[0].hasAttribute("disabled")||d.skipToggle||d.$apply(function(){var t=l.ngChecked?l.checked:!c.$viewValue;c.$setViewValue(t,e&&e.type),c.$render()})}function h(){s.toggleClass("md-checked",!!c.$viewValue&&!g)}function f(e){g=e!==!1,g&&s.attr("aria-checked","mixed"),s.toggleClass("md-indeterminate",g)}var g;c=c||r.fakeNgModel(),i(s),s.children().on("focus",function(){s.focus()}),r.parseAttributeBoolean(l.mdIndeterminate)&&(f(),d.$watch(l.mdIndeterminate,f)),l.ngChecked&&d.$watch(d.$eval.bind(d,l.ngChecked),function(e){c.$setViewValue(e),c.$render()}),m("ngDisabled","tabindex",{"true":"-1","false":l.tabindex}),n.expectWithText(s,"aria-label"),e.link.pre(d,{on:t.noop,0:{}},l,[c]),d.mouseActive=!1,s.on("click",p).on("keypress",u).on("mousedown",function(){d.mouseActive=!0,a(function(){d.mouseActive=!1},100)}).on("focus",function(){d.mouseActive===!1&&s.addClass("md-focused")}).on("blur",function(){s.removeClass("md-focused")}),c.$render=h}return s.$set("tabindex",s.tabindex||"0"),s.$set("type","checkbox"),s.$set("role",s.type),{pre:function(e,t){t.on("click",function(e){this.hasAttribute("disabled")&&e.stopImmediatePropagation()})},post:l}}return e=e[0],{restrict:"E",transclude:!0,require:"?ngModel",priority:210,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',compile:d}}e.$inject=["inputDirective","$mdAria","$mdConstant","$mdTheming","$mdUtil","$timeout"],t.module("material.components.checkbox",["material.core"]).directive("mdCheckbox",e)}(),function(){!function(){function e(e,n,o){function r(e,t){try{t&&e.css(s(t))}catch(n){o.error(n.message)}}function a(e){var t=c(e);return d(t)}function d(t,o){o=o||!1;var i=e.PALETTES[t.palette][t.hue];return i=o?i.contrast:i.value,n.supplant("rgba({0}, {1}, {2}, {3})",[i[0],i[1],i[2],i[3]||t.opacity])}function s(e){var n={},o=e.hasOwnProperty("color");return t.forEach(e,function(e,t){var i=c(e),r=t.indexOf("background")>-1;n[t]=d(i),r&&!o&&(n.color=d(i,!0))}),n}function l(n){return t.isDefined(e.THEMES[n.split("-")[0]])}function c(n){var o=n.split("-"),i=t.isDefined(e.THEMES[o[0]]),r=i?o.splice(0,1)[0]:e.defaultTheme();return{theme:r,palette:m(o,r),hue:u(o,r),opacity:o[2]||1}}function m(t,o){var r=t.length>1&&i.indexOf(t[1])!==-1,a=t[0].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();if(r&&(a=t[0]+"-"+t.splice(1,1)),i.indexOf(a)===-1){var d=e.THEMES[o].colors[a];if(!d)throw new Error(n.supplant("mdColors: couldn't find '{palette}' in the palettes.",{palette:a}));a=d.name}return a}function u(t,o){var i=e.THEMES[o].colors;if("hue"===t[1]){var r=parseInt(t.splice(2,1)[0],10);if(r<1||r>3)throw new Error(n.supplant("mdColors: 'hue-{hueNumber}' is not a valid hue, can be only 'hue-1', 'hue-2' and 'hue-3'",{hueNumber:r}));if(t[1]="hue-"+r,!(t[0]in i))throw new Error(n.supplant("mdColors: 'hue-x' can only be used with [{availableThemes}], but was used with '{usedTheme}'",{availableThemes:Object.keys(i).join(", "),usedTheme:t[0]}));return i[t[0]].hues[t[1]]}return t[1]||i[t[0]in i?t[0]:"primary"].hues["default"]}return i=i||Object.keys(e.PALETTES),{applyThemeColors:r,getThemeColor:a,hasTheme:l}}function n(e,n,i,r){return{restrict:"A",require:["^?mdTheme"],compile:function(a,d){function s(){var e=d.mdColors,i=e.indexOf("::")>-1,r=!!i||o.test(d.mdColors);d.mdColors=e.replace("::","");var a=t.isDefined(d.mdColorsWatch);return!i&&!r&&(!a||n.parseAttributeBoolean(d.mdColorsWatch))}var l=s();return function(n,o,a,d){var s=d[0],c={},m=function(t){"string"!=typeof t&&(t=""),a.mdColors||(a.mdColors="{}");var o=r(a.mdColors)(n);return s&&Object.keys(o).forEach(function(n){var i=o[n];e.hasTheme(i)||(o[n]=(t||s.$mdTheme)+"-"+i)}),u(o),o},u=function(e){if(!t.equals(e,c)){var n=Object.keys(c);c.background&&!n.color&&n.push("color"),n.forEach(function(e){o.css(e,"")})}c=e},p=t.noop;s&&(p=s.registerChanges(function(t){e.applyThemeColors(o,m(t))})),n.$on("$destroy",function(){p()});try{l?n.$watch(m,t.bind(this,e.applyThemeColors,o),!0):e.applyThemeColors(o,m())}catch(h){i.error(h.message)}}}}}n.$inject=["$mdColors","$mdUtil","$log","$parse"],e.$inject=["$mdTheming","$mdUtil","$log"];var o=/^{((\s|,)*?["'a-zA-Z-]+?\s*?:\s*?('|")[a-zA-Z0-9-.]*('|"))+\s*}$/,i=null;t.module("material.components.colors",["material.core"]).directive("mdColors",n).service("$mdColors",e)}()}(),function(){function e(e){function t(e,t){this.$scope=e,this.$element=t}return{restrict:"E",controller:["$scope","$element",t],link:function(t,o){o.addClass("_md"),e(o),t.$broadcast("$mdContentLoaded",o),n(o[0])}}}function n(e){t.element(e).on("$md.pressdown",function(t){"t"===t.pointer.type&&(t.$materialScrollFixed||(t.$materialScrollFixed=!0,0===e.scrollTop?e.scrollTop=1:e.scrollHeight===e.scrollTop+e.offsetHeight&&(e.scrollTop-=1)))})}e.$inject=["$mdTheming"],t.module("material.components.content",["material.core"]).directive("mdContent",e)}(),function(){t.module("material.components.datepicker",["material.core","material.components.icon","material.components.virtualRepeat"])}(),function(){function e(e,n,o){return{restrict:"E",link:function(i,r){r.addClass("_md"),n(r),e(function(){function e(){r.toggleClass("md-content-overflow",a.scrollHeight>a.clientHeight)}var n,a=r[0].querySelector("md-dialog-content");a&&(n=a.getElementsByTagName("img"),e(),t.element(n).on("load",e)),i.$on("$destroy",function(){o.destroy(r)})})}}}function o(e){function o(e,t){return{template:['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}" ng-class="dialog.css">','  <md-dialog-content class="md-dialog-content" role="document" tabIndex="-1">','    <h2 class="md-title">{{ dialog.title }}</h2>','    <div ng-if="::dialog.mdHtmlContent" class="md-dialog-content-body" ','        ng-bind-html="::dialog.mdHtmlContent"></div>','    <div ng-if="::!dialog.mdHtmlContent" class="md-dialog-content-body">',"      <p>{{::dialog.mdTextContent}}</p>","    </div>",'    <md-input-container md-no-float ng-if="::dialog.$type == \'prompt\'" class="md-prompt-input-container">','      <input ng-keypress="dialog.keypress($event)" md-autofocus ng-model="dialog.result"              placeholder="{{::dialog.placeholder}}">',"    </md-input-container>","  </md-dialog-content>","  <md-dialog-actions>",'    <md-button ng-if="dialog.$type === \'confirm\' || dialog.$type === \'prompt\'"               ng-click="dialog.abort()" class="md-primary md-cancel-button">',"      {{ dialog.cancel }}","    </md-button>",'    <md-button ng-click="dialog.hide()" class="md-primary md-confirm-button" md-autofocus="dialog.$type===\'alert\'">',"      {{ dialog.ok }}","    </md-button>","  </md-dialog-actions>","</md-dialog>"].join("").replace(/\s\s+/g,""),controller:function(){var n="prompt"==this.$type;n&&this.initialValue&&(this.result=this.initialValue),this.hide=function(){e.hide(!n||this.result)},this.abort=function(){e.cancel()},this.keypress=function(n){n.keyCode===t.KEY_CODE.ENTER&&e.hide(this.result)}},controllerAs:"dialog",bindToController:!0}}function i(e,o,i,d,s,l,c,m,u,p,h){function f(e){E(e),e.contentElement&&(e.restoreContentElement=$(e))}function g(e,t,n,o){if(o){if(o.mdHtmlContent=o.htmlContent||n.htmlContent||"",o.mdTextContent=o.textContent||n.textContent||o.content||n.content||"",o.mdHtmlContent&&!p.has("$sanitize"))throw Error("The ngSanitize module must be loaded in order to use htmlContent.");if(o.mdHtmlContent&&o.mdTextContent)throw Error("md-dialog cannot have both `htmlContent` and `textContent`")}}function b(e,n,o,r){function a(){n[0].querySelector(".md-actions")&&u.warn("Using a class of md-actions is deprecated, please use <md-dialog-actions>.")}function d(){function e(){var e=n[0].querySelector(".dialog-close");if(!e){var t=n[0].querySelectorAll(".md-actions button, md-dialog-actions button");e=t[t.length-1]}return e}if(o.focusOnOpen){var t=i.findFocusTarget(n)||e()||s;t.focus()}}t.element(l[0].body).addClass("md-dialog-is-showing");var s=n.find("md-dialog");if(s.hasClass("ng-cloak")){var c="$mdDialog: using `<md-dialog ng-cloak >` will affect the dialog opening animations.";u.warn(c,n[0])}return C(o),T(s,o),y(e,n,o),M(n,o),k(n,o).then(function(){A(n,o),a(),d()})}function v(e,n,o){function i(){return x(n,o)}function d(){t.element(l[0].body).removeClass("md-dialog-is-showing"),o.contentElement?(o.reverseContainerStretch(),o.restoreContentElement()):n.remove(),o.$destroy||o.origin.focus()}return o.deactivateListeners(),o.unlockScreenReader(),o.hideBackdrop(o.$destroy),r&&r.parentNode&&r.parentNode.removeChild(r),a&&a.parentNode&&a.parentNode.removeChild(a),o.$destroy?d():i().then(d)}function E(e){if(!e.theme&&(e.theme=h.defaultTheme(),e.targetEvent&&e.targetEvent.target)){var n=t.element(e.targetEvent.target);e.theme=(n.controller("mdTheme")||{}).$mdTheme||e.theme}}function $(e){function n(e){var t=e.parentNode,n=e.nextElementSibling;return function(){n?t.insertBefore(e,n):t.appendChild(e)}}var o=e.contentElement,i=null;return t.isString(o)?(o=document.querySelector(o),i=n(o)):(o=o[0]||o,i=document.contains(o)?n(o):function(){o.parentNode.removeChild(o)}),e.element=t.element(o),e.skipCompile=!0,i}function C(e){function o(e,o){var i=t.element(e||{});if(i&&i.length){var r={top:0,left:0,height:0,width:0},a=t.isFunction(i[0].getBoundingClientRect);return t.extend(o||{},{element:a?i:n,bounds:a?i[0].getBoundingClientRect():t.extend({},r,i[0]),focus:t.bind(i,i.focus)})}}function i(e,n){return t.isString(e)&&(e=l[0].querySelector(e)),t.element(e||n)}e.origin=t.extend({element:null,bounds:null,focus:t.noop},e.origin||{}),e.parent=i(e.parent,m),e.closeTo=o(i(e.closeTo)),e.openFrom=o(i(e.openFrom)),e.targetEvent&&(e.origin=o(e.targetEvent.target,e.origin))}function M(n,o){var r=t.element(c),a=i.debounce(function(){w(n,o)},60),s=[],l=function(){var t="alert"==o.$type?e.hide:e.cancel;i.nextTick(t,!0)};if(o.escapeToClose){var m=o.parent,u=function(e){e.keyCode===d.KEY_CODE.ESCAPE&&(e.stopPropagation(),e.preventDefault(),l())};n.on("keydown",u),m.on("keydown",u),s.push(function(){n.off("keydown",u),m.off("keydown",u)})}if(r.on("resize",a),s.push(function(){r.off("resize",a)}),o.clickOutsideToClose){var p,h=n,f=function(e){p=e.target},g=function(e){p===h[0]&&e.target===h[0]&&(e.stopPropagation(),e.preventDefault(),l())};h.on("mousedown",f),h.on("mouseup",g),s.push(function(){h.off("mousedown",f),h.off("mouseup",g)})}o.deactivateListeners=function(){s.forEach(function(e){e()}),o.deactivateListeners=null}}function y(e,t,n){n.disableParentScroll&&(n.restoreScroll=i.disableScrollAround(t,n.parent)),n.hasBackdrop&&(n.backdrop=i.createBackdrop(e,"md-dialog-backdrop md-opaque"),s.enter(n.backdrop,n.parent)),n.hideBackdrop=function(e){n.backdrop&&(e?n.backdrop.remove():s.leave(n.backdrop)),n.disableParentScroll&&(n.restoreScroll(),delete n.restoreScroll),n.hideBackdrop=null}}function T(e,t){var n="alert"===t.$type?"alertdialog":"dialog",d=e.find("md-dialog-content"),s=e.attr("id"),l="dialogContent_"+(s||i.nextUid());e.attr({role:n,tabIndex:"-1"}),0===d.length&&(d=e,s&&(l=s)),d.attr("id",l),e.attr("aria-describedby",l),t.ariaLabel?o.expect(e,"aria-label",t.ariaLabel):o.expectAsync(e,"aria-label",function(){var e=d.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ")}),r=document.createElement("div"),r.classList.add("md-dialog-focus-trap"),r.tabIndex=0,a=r.cloneNode(!1);var c=function(){e.focus()};r.addEventListener("focus",c),a.addEventListener("focus",c),e[0].parentNode.insertBefore(r,e[0]),e.after(a)}function A(e,t){function n(e){for(;e.parentNode;){if(e===document.body)return;for(var t=e.parentNode.children,i=0;i<t.length;i++)e===t[i]||_(t[i],["SCRIPT","STYLE"])||t[i].setAttribute("aria-hidden",o);n(e=e.parentNode)}}var o=!0;n(e[0]),t.unlockScreenReader=function(){o=!1,n(e[0]),t.unlockScreenReader=null}}function w(e,t){var n="fixed"==c.getComputedStyle(l[0].body).position,o=t.backdrop?c.getComputedStyle(t.backdrop[0]):null,r=o?Math.min(l[0].body.clientHeight,Math.ceil(Math.abs(parseInt(o.height,10)))):0,a={top:e.css("top"),height:e.css("height")};return e.css({top:(n?i.scrollTop(t.parent):0)+"px",height:r?r+"px":"100%"}),function(){e.css(a)}}function k(e,t){t.parent.append(e),t.reverseContainerStretch=w(e,t);var n=e.find("md-dialog"),o=i.dom.animator,r=o.calculateZoomToOrigin,a={transitionInClass:"md-transition-in",transitionOutClass:"md-transition-out"},d=o.toTransformCss(r(n,t.openFrom||t.origin)),s=o.toTransformCss("");return n.toggleClass("md-dialog-fullscreen",!!t.fullscreen),o.translate3d(n,d,s,a).then(function(e){return t.reverseAnimate=function(){return delete t.reverseAnimate,t.closeTo?(a={transitionInClass:"md-transition-out",transitionOutClass:"md-transition-in"},d=s,s=o.toTransformCss(r(n,t.closeTo)),o.translate3d(n,d,s,a)):e(s=o.toTransformCss(r(n,t.origin)))},t.clearAnimate=function(){return delete t.clearAnimate,n.removeClass([a.transitionOutClass,a.transitionInClass].join(" ")),o.translate3d(n,s,o.toTransformCss(""),{})},!0})}function x(e,t){return t.reverseAnimate().then(function(){t.contentElement&&t.clearAnimate()})}function _(e,t){if(t.indexOf(e.nodeName)!==-1)return!0}return{hasBackdrop:!0,isolateScope:!0,onCompiling:f,onShow:b,onShowing:g,onRemove:v,clickOutsideToClose:!1,escapeToClose:!0,targetEvent:null,contentElement:null,closeTo:null,openFrom:null,focusOnOpen:!0,disableParentScroll:!0,autoWrap:!0,fullscreen:!1,transformTemplate:function(e,t){function n(e){return t.autoWrap&&!/<\/md-dialog>/g.test(e)?"<md-dialog>"+(e||"")+"</md-dialog>":e||""}return'<div class="md-dialog-container" tabindex="-1">'+n(e)+"</div>"}}}o.$inject=["$mdDialog","$mdConstant"],i.$inject=["$mdDialog","$mdAria","$mdUtil","$mdConstant","$animate","$document","$window","$rootElement","$log","$injector","$mdTheming"];var r,a;return e("$mdDialog").setDefaults({methods:["disableParentScroll","hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent","closeTo","openFrom","parent","fullscreen","contentElement"],options:i}).addPreset("alert",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","theme","css"],options:o}).addPreset("confirm",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","cancel","theme","css"],options:o}).addPreset("prompt",{methods:["title","htmlContent","textContent","initialValue","content","placeholder","ariaLabel","ok","cancel","theme","css"],options:o})}e.$inject=["$$rAF","$mdTheming","$mdDialog"],o.$inject=["$$interimElementProvider"],t.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",e).provider("$mdDialog",o)}(),function(){function e(e){return{restrict:"E",link:e}}e.$inject=["$mdTheming"],t.module("material.components.divider",["material.core"]).directive("mdDivider",e)}(),function(){!function(){function e(e){return{restrict:"E",require:["^?mdFabSpeedDial","^?mdFabToolbar"],compile:function(t,n){var o=t.children(),i=e.prefixer().hasAttribute(o,"ng-repeat");i?o.addClass("md-fab-action-item"):o.wrap('<div class="md-fab-action-item">')}}}e.$inject=["$mdUtil"],t.module("material.components.fabActions",["material.core"]).directive("mdFabActions",e)}()}(),function(){!function(){function e(e,n,o,i,r,a){function d(){S.direction=S.direction||"down",S.isOpen=S.isOpen||!1,c(),n.addClass("md-animations-waiting")}function s(){var o=["click","focusin","focusout"];t.forEach(o,function(e){n.on(e,l)}),e.$on("$destroy",function(){t.forEach(o,function(e){n.off(e,l)}),h()})}function l(e){"click"==e.type&&k(e),"focusout"!=e.type||D||(D=a(function(){S.close()},100,!1)),"focusin"==e.type&&D&&(a.cancel(D),D=null)}function c(){S.currentActionIndex=-1}function m(){e.$watch("vm.direction",function(e,t){o.removeClass(n,"md-"+t),o.addClass(n,"md-"+e),c()});var t,i;e.$watch("vm.isOpen",function(e){c(),t&&i||(t=x(),i=_()),e?p():h();var r=e?"md-is-open":"",a=e?"":"md-is-open";t.attr("aria-haspopup",!0),t.attr("aria-expanded",e),i.attr("aria-hidden",!e),o.setClass(n,r,a)})}function u(){n[0].scrollHeight>0?o.addClass(n,"_md-animations-ready").then(function(){n.removeClass("md-animations-waiting")}):N<10&&(a(u,100),N+=1)}function p(){n.on("keydown",g),i.nextTick(function(){t.element(document).on("click touchend",f)})}function h(){n.off("keydown",g),t.element(document).off("click touchend",f)}function f(e){if(e.target){var t=i.getClosest(e.target,"md-fab-trigger"),n=i.getClosest(e.target,"md-fab-actions");t||n||S.close()}}function g(e){switch(e.which){case r.KEY_CODE.ESCAPE:return S.close(),e.preventDefault(),!1;case r.KEY_CODE.LEFT_ARROW:return C(e),!1;case r.KEY_CODE.UP_ARROW:return M(e),!1;case r.KEY_CODE.RIGHT_ARROW:return y(e),!1;case r.KEY_CODE.DOWN_ARROW:return T(e),!1}}function b(e){E(e,-1)}function v(e){E(e,1)}function E(e,n){var o=$();S.currentActionIndex=S.currentActionIndex+n,S.currentActionIndex=Math.min(o.length-1,S.currentActionIndex),S.currentActionIndex=Math.max(0,S.currentActionIndex);var i=t.element(o[S.currentActionIndex]).children()[0];t.element(i).attr("tabindex",0),i.focus(),e.preventDefault(),e.stopImmediatePropagation()}function $(){var e=_()[0].querySelectorAll(".md-fab-action-item");return t.forEach(e,function(e){t.element(t.element(e).children()[0]).attr("tabindex",-1)}),e}function C(e){"left"===S.direction?v(e):b(e)}function M(e){"down"===S.direction?b(e):v(e)}function y(e){"left"===S.direction?b(e):v(e)}function T(e){"up"===S.direction?b(e):v(e)}function A(e){return i.getClosest(e,"md-fab-trigger")}function w(e){return i.getClosest(e,"md-fab-actions")}function k(e){A(e.target)&&S.toggle(),w(e.target)&&S.close()}function x(){return n.find("md-fab-trigger")}function _(){return n.find("md-fab-actions")}var S=this;S.open=function(){e.$evalAsync("vm.isOpen = true")},S.close=function(){e.$evalAsync("vm.isOpen = false"),n.find("md-fab-trigger")[0].focus()},S.toggle=function(){e.$evalAsync("vm.isOpen = !vm.isOpen")},d(),s(),m();var N=0;u();var D}e.$inject=["$scope","$element","$animate","$mdUtil","$mdConstant","$timeout"],t.module("material.components.fabShared",["material.core"]).controller("MdFabController",e)}()}(),function(){!function(){function n(){function e(e,t){t.prepend('<div class="_md-css-variables"></div>')}return{restrict:"E",scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"MdFabController",controllerAs:"vm",link:e}}function o(n){function o(e){n(e,r,!1)}function i(n){if(!n.hasClass("md-animations-waiting")||n.hasClass("_md-animations-ready")){var o=n[0],i=n.controller("mdFabSpeedDial"),r=o.querySelectorAll(".md-fab-action-item"),a=o.querySelector("md-fab-trigger"),d=o.querySelector("._md-css-variables"),s=parseInt(e.getComputedStyle(d).zIndex);t.forEach(r,function(e,t){var n=e.style;n.transform=n.webkitTransform="",n.transitionDelay="",n.opacity=1,n.zIndex=r.length-t+s}),a.style.zIndex=s+r.length+1,i.isOpen||t.forEach(r,function(e,t){var n,o,r=e.style,d=(a.clientHeight-e.clientHeight)/2,s=(a.clientWidth-e.clientWidth)/2;switch(i.direction){case"up":n=e.scrollHeight*(t+1)+d,o="Y";break;case"down":n=-(e.scrollHeight*(t+1)+d),o="Y";break;case"left":n=e.scrollWidth*(t+1)+s,o="X";break;case"right":n=-(e.scrollWidth*(t+1)+s),o="X"}var l="translate"+o+"("+n+"px)";r.transform=r.webkitTransform=l})}}return{addClass:function(e,t,n){e.hasClass("md-fling")?(i(e),o(n)):n()},removeClass:function(e,t,n){i(e),o(n)}}}function i(n){function o(e){n(e,r,!1)}function i(n){var o=n[0],i=n.controller("mdFabSpeedDial"),r=o.querySelectorAll(".md-fab-action-item"),d=o.querySelector("._md-css-variables"),s=parseInt(e.getComputedStyle(d).zIndex);t.forEach(r,function(e,t){var n=e.style,o=t*a;n.opacity=i.isOpen?1:0,n.transform=n.webkitTransform=i.isOpen?"scale(1)":"scale(0)",n.transitionDelay=(i.isOpen?o:r.length-o)+"ms",n.zIndex=r.length-t+s})}var a=65;return{addClass:function(e,t,n){i(e),o(n)},removeClass:function(e,t,n){i(e),o(n)}}}o.$inject=["$timeout"],i.$inject=["$timeout"];var r=300;t.module("material.components.fabSpeedDial",["material.core","material.components.fabShared","material.components.fabActions"]).directive("mdFabSpeedDial",n).animation(".md-fling",o).animation(".md-scale",i).service("mdFabSpeedDialFlingAnimation",o).service("mdFabSpeedDialScaleAnimation",i)}()}(),function(){!function(){function n(){function e(e,t,n){t.addClass("md-fab-toolbar"),t.find("md-fab-trigger").find("button").prepend('<div class="md-fab-toolbar-background"></div>')}return{restrict:"E",transclude:!0,template:'<div class="md-fab-toolbar-wrapper">  <div class="md-fab-toolbar-content" ng-transclude></div></div>',scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"MdFabController",controllerAs:"vm",link:e}}function o(){function n(n,o,i){if(o){var r=n[0],a=n.controller("mdFabToolbar"),d=r.querySelector(".md-fab-toolbar-background"),s=r.querySelector("md-fab-trigger button"),l=r.querySelector("md-toolbar"),c=r.querySelector("md-fab-trigger button md-icon"),m=n.find("md-fab-actions").children();if(s&&d){var u=e.getComputedStyle(s).getPropertyValue("background-color"),p=r.offsetWidth,h=(r.offsetHeight,2*(p/s.offsetWidth));d.style.backgroundColor=u,d.style.borderRadius=p+"px",a.isOpen?(l.style.pointerEvents="inherit",d.style.width=s.offsetWidth+"px",d.style.height=s.offsetHeight+"px",d.style.transform="scale("+h+")",d.style.transitionDelay="0ms",c&&(c.style.transitionDelay=".3s"),t.forEach(m,function(e,t){e.style.transitionDelay=25*(m.length-t)+"ms"})):(l.style.pointerEvents="none",d.style.transform="scale(1)",d.style.top="0",n.hasClass("md-right")&&(d.style.left="0",d.style.right=null),n.hasClass("md-left")&&(d.style.right="0",d.style.left=null),d.style.transitionDelay="200ms",c&&(c.style.transitionDelay="0ms"),t.forEach(m,function(e,t){e.style.transitionDelay=200+25*t+"ms"}))}}}return{addClass:function(e,t,o){n(e,t,o),o()},removeClass:function(e,t,o){n(e,t,o),o()}}}t.module("material.components.fabToolbar",["material.core","material.components.fabShared","material.components.fabActions"]).directive("mdFabToolbar",n).animation(".md-fab-toolbar",o).service("mdFabToolbarAnimation",o)}()}(),function(){function e(e,o,i,r){function a(n,a,d,s){function l(){for(var e in o.MEDIA)r(e),r.getQuery(o.MEDIA[e]).addListener(y);return r.watchResponsiveAttributes(["md-cols","md-row-height","md-gutter"],d,m)}function c(){s.layoutDelegate=t.noop,T();for(var e in o.MEDIA)r.getQuery(o.MEDIA[e]).removeListener(y)}function m(e){null==e?s.invalidateLayout():r(e)&&s.invalidateLayout()}function u(e){var o=g(),r={tileSpans:b(o),colCount:v(),rowMode:C(),rowHeight:$(),gutter:E()};if(e||!t.equals(r,A)){var d=i(r.colCount,r.tileSpans,o).map(function(e,n){return{grid:{element:a,style:f(r.colCount,n,r.gutter,r.rowMode,r.rowHeight)},tiles:e.map(function(e,i){return{element:t.element(o[i]),style:h(e.position,e.spans,r.colCount,n,r.gutter,r.rowMode,r.rowHeight)}})}}).reflow().performance();n.mdOnLayout({$event:{performance:d}}),A=r}}function p(e){return w+e+k}function h(e,t,n,o,i,r,a){var d=1/n*100,s=(n-1)/n,l=x({share:d,gutterShare:s,gutter:i}),c={left:_({unit:l,offset:e.col,gutter:i}),width:S({unit:l,span:t.col,gutter:i}),paddingTop:"",marginTop:"",top:"",height:""};switch(r){case"fixed":c.top=_({unit:a,offset:e.row,gutter:i}),c.height=S({unit:a,span:t.row,gutter:i});break;case"ratio":var m=d/a,u=x({share:m,gutterShare:s,gutter:i});c.paddingTop=S({unit:u,span:t.row,gutter:i}),c.marginTop=_({unit:u,offset:e.row,gutter:i});break;case"fit":var p=(o-1)/o,m=1/o*100,u=x({share:m,gutterShare:p,gutter:i});c.top=_({unit:u,offset:e.row,gutter:i}),c.height=S({unit:u,span:t.row,gutter:i})}return c}function f(e,t,n,o,i){var r={};switch(o){case"fixed":r.height=S({unit:i,span:t,gutter:n}),r.paddingBottom="";break;case"ratio":var a=1===e?0:(e-1)/e,d=1/e*100,s=d*(1/i),l=x({share:s,gutterShare:a,gutter:n});r.height="",r.paddingBottom=S({unit:l,span:t,gutter:n});break;case"fit":}return r}function g(){return[].filter.call(a.children(),function(e){return"MD-GRID-TILE"==e.tagName&&!e.$$mdDestroyed})}function b(e){return[].map.call(e,function(e){var n=t.element(e).controller("mdGridTile");if(!n) n = {$attrs: {}};return{row:parseInt(r.getResponsiveAttribute(n.$attrs,"md-rowspan"),10)||1,col:parseInt(r.getResponsiveAttribute(n.$attrs,"md-colspan"),10)||1}})}function v(){var e=parseInt(r.getResponsiveAttribute(d,"md-cols"),10);if(isNaN(e))throw"md-grid-list: md-cols attribute was not found, or contained a non-numeric value";
return e}function E(){return M(r.getResponsiveAttribute(d,"md-gutter")||1)}function $(){var e=r.getResponsiveAttribute(d,"md-row-height");if(!e)throw"md-grid-list: md-row-height attribute was not found";switch(C()){case"fixed":return M(e);case"ratio":var t=e.split(":");return parseFloat(t[0])/parseFloat(t[1]);case"fit":return 0}}function C(){var e=r.getResponsiveAttribute(d,"md-row-height");if(!e)throw"md-grid-list: md-row-height attribute was not found";return"fit"==e?"fit":e.indexOf(":")!==-1?"ratio":"fixed"}function M(e){return/\D$/.test(e)?e:e+"px"}a.addClass("_md"),a.attr("role","list"),s.layoutDelegate=u;var y=t.bind(s,s.invalidateLayout),T=l();n.$on("$destroy",c);var A,w=e.startSymbol(),k=e.endSymbol(),x=e(p("share")+"% - ("+p("gutter")+" * "+p("gutterShare")+")"),_=e("calc(("+p("unit")+" + "+p("gutter")+") * "+p("offset")+")"),S=e("calc(("+p("unit")+") * "+p("span")+" + ("+p("span")+" - 1) * "+p("gutter")+")")}return{restrict:"E",controller:n,scope:{mdOnLayout:"&"},link:a}}function n(e){this.layoutInvalidated=!1,this.tilesInvalidated=!1,this.$timeout_=e.nextTick,this.layoutDelegate=t.noop}function o(e){function n(t,n){var o,a,d,s,l,c;return s=e.time(function(){a=i(t,n)}),o={layoutInfo:function(){return a},map:function(t){return l=e.time(function(){var e=o.layoutInfo();d=t(e.positioning,e.rowCount)}),o},reflow:function(t){return c=e.time(function(){var e=t||r;e(d.grid,d.tiles)}),o},performance:function(){return{tileCount:n.length,layoutTime:s,mapTime:l,reflowTime:c,totalTime:s+l+c}}}}function o(e,t){e.element.css(e.style),t.forEach(function(e){e.element.css(e.style)})}function i(e,t){function n(t,n){if(t.col>e)throw"md-grid-list: Tile at position "+n+" has a colspan ("+t.col+") that exceeds the column count ("+e+")";for(var a=0,c=0;c-a<t.col;)d>=e?o():(a=l.indexOf(0,d),a!==-1&&(c=r(a+1))!==-1?d=c+1:(a=c=0,o()));return i(a,t.col,t.row),d=a+t.col,{col:a,row:s}}function o(){d=0,s++,i(0,e,-1)}function i(e,t,n){for(var o=e;o<e+t;o++)l[o]=Math.max(l[o]+n,0)}function r(e){var t;for(t=e;t<l.length;t++)if(0!==l[t])return t;if(t===l.length)return t}function a(){for(var t=[],n=0;n<e;n++)t.push(0);return t}var d=0,s=0,l=a();return{positioning:t.map(function(e,t){return{spans:e,position:n(e,t)}}),rowCount:s+Math.max.apply(Math,l)}}var r=o;return n.animateWith=function(e){r=t.isFunction(e)?e:o},n}function i(e){function n(n,o,i,r){o.attr("role","listitem");var a=e.watchResponsiveAttributes(["md-colspan","md-rowspan"],i,t.bind(r,r.invalidateLayout));r.invalidateTiles(),n.$on("$destroy",function(){o[0].$$mdDestroyed=!0,a(),r.invalidateLayout()}),t.isDefined(n.$parent.$index)&&n.$watch(function(){return n.$parent.$index},function(e,t){e!==t&&r.invalidateTiles()})}return{restrict:"E",require:"^mdGridList",template:"<figure ng-transclude></figure>",transclude:!0,scope:{},controller:["$attrs",function(e){this.$attrs=e}],link:n}}function r(){return{template:"<figcaption ng-transclude></figcaption>",transclude:!0}}n.$inject=["$mdUtil"],o.$inject=["$mdUtil"],e.$inject=["$interpolate","$mdConstant","$mdGridLayout","$mdMedia"],i.$inject=["$mdMedia"],t.module("material.components.gridList",["material.core"]).directive("mdGridList",e).directive("mdGridTile",i).directive("mdGridTileFooter",r).directive("mdGridTileHeader",r).factory("$mdGridLayout",o),n.prototype={invalidateTiles:function(){this.tilesInvalidated=!0,this.invalidateLayout()},invalidateLayout:function(){this.layoutInvalidated||(this.layoutInvalidated=!0,this.$timeout_(t.bind(this,this.layout)))},layout:function(){try{this.layoutDelegate(this.tilesInvalidated)}finally{this.layoutInvalidated=!1,this.tilesInvalidated=!1}}}}(),function(){t.module("material.components.icon",["material.core"])}(),function(){function n(e,t){function n(t){var n=t[0].querySelector(r),o=t[0].querySelector(a);return n&&t.addClass("md-icon-left"),o&&t.addClass("md-icon-right"),function(t,n){e(n)}}function o(e,n,o,i){var r=this;r.isErrorGetter=o.mdIsError&&t(o.mdIsError),r.delegateClick=function(){r.input.focus()},r.element=n,r.setFocused=function(e){n.toggleClass("md-input-focused",!!e)},r.setHasValue=function(e){n.toggleClass("md-input-has-value",!!e)},r.setHasPlaceholder=function(e){n.toggleClass("md-input-has-placeholder",!!e)},r.setInvalid=function(e){e?i.addClass(n,"md-input-invalid"):i.removeClass(n,"md-input-invalid")},e.$watch(function(){return r.label&&r.input},function(e){e&&!r.label.attr("for")&&r.label.attr("for",r.input.attr("id"))})}o.$inject=["$scope","$element","$attrs","$animate"];var i=["INPUT","TEXTAREA","SELECT","MD-SELECT"],r=i.reduce(function(e,t){return e.concat(["md-icon ~ "+t,".md-icon ~ "+t])},[]).join(","),a=i.reduce(function(e,t){return e.concat([t+" ~ md-icon",t+" ~ .md-icon"])},[]).join(",");return{restrict:"E",compile:n,controller:o}}function o(){return{restrict:"E",require:"^?mdInputContainer",link:function(e,t,n,o){!o||n.mdNoFloat||t.hasClass("md-container-ignore")||(o.label=t,e.$on("$destroy",function(){o.label=null}))}}}function i(e,n,o,i,r){function a(a,d,s,l){function c(e){return h.setHasValue(!g.$isEmpty(e)),e}function m(){h.label&&s.$observe("required",function(e){h.label.toggleClass("md-required",e&&!E)})}function u(){h.setHasValue(d.val().length>0||(d[0].validity||{}).badInput)}function p(){function o(){d.attr("rows",1).css("height","auto").addClass("md-no-flex");var e=l();if(!$){var t=d[0].style.padding||"";$=d.css("padding",0).prop("offsetHeight"),d[0].style.padding=t}if(b&&$&&(e=Math.max(e,$*b)),v&&$){var n=$*v;n<e?(d.attr("md-no-autogrow",""),e=n):d.removeAttr("md-no-autogrow")}$&&d.attr("rows",Math.round(e/$)),d.css("height",e+"px").removeClass("md-no-flex")}function l(){var e=C.offsetHeight,t=C.scrollHeight-e;return e+Math.max(t,0)}function c(t){return e.nextTick(o),t}function m(){if(p&&(p=!1,t.element(n).off("resize",o),E&&E(),d.attr("md-no-autogrow","").off("input",o),f)){var e=g.$formatters.indexOf(c);e>-1&&g.$formatters.splice(e,1)}}function u(){function n(e){e.preventDefault(),u=!0,p=e.clientY,f=parseFloat(d.css("height"))||d.prop("offsetHeight")}function o(e){u&&(e.preventDefault(),m(),g.addClass("md-input-resized"))}function i(t){u&&d.css("height",f+(t.pointer.y-p)-e.scrollTop()+"px")}function l(e){u&&(u=!1,g.removeClass("md-input-resized"))}if(!s.hasOwnProperty("mdNoResize")){var c=t.element('<div class="md-resize-handle"></div>'),u=!1,p=null,f=0,g=h.element,b=r.register(c,"drag",{horizontal:!1});d.wrap('<div class="md-resize-wrapper">').after(c),c.on("mousedown",n),g.on("$md.dragstart",o).on("$md.drag",i).on("$md.dragend",l),a.$on("$destroy",function(){c.off("mousedown",n).remove(),g.off("$md.dragstart",o).off("$md.drag",i).off("$md.dragend",l),b(),c=null,g=null,b=null})}}var p=!s.hasOwnProperty("mdNoAutogrow");if(u(),p){var b=s.hasOwnProperty("rows")?parseInt(s.rows):NaN,v=s.hasOwnProperty("maxRows")?parseInt(s.maxRows):NaN,E=a.$on("md-resize-textarea",o),$=null,C=d[0];if(i(function(){e.nextTick(o)},10,!1),d.on("input",o),f&&g.$formatters.push(c),b||d.attr("rows",1),t.element(n).on("resize",o),a.$on("$destroy",m),s.hasOwnProperty("mdDetectHidden")){var M=function(){var e=!1;return function(){var t=0===C.offsetHeight;t===!1&&e===!0&&o(),e=t}}();a.$watch(function(){return e.nextTick(M,!1),!0})}}}var h=l[0],f=!!l[1],g=l[1]||e.fakeNgModel(),b=l[2],v=t.isDefined(s.readonly),E=e.parseAttributeBoolean(s.mdNoAsterisk),$=d[0].tagName.toLowerCase();if(h){if("hidden"===s.type)return void d.attr("aria-hidden","true");if(h.input){if(h.input[0].contains(d[0]))return;throw new Error("<md-input-container> can only have *one* <input>, <textarea> or <md-select> child element!")}h.input=d,m();var C=t.element('<div class="md-errors-spacer">');d.after(C),h.label||o.expect(d,"aria-label",s.placeholder),d.addClass("md-input"),d.attr("id")||d.attr("id","input_"+e.nextUid()),"input"===$&&"number"===s.type&&s.min&&s.max&&!s.step?d.attr("step","any"):"textarea"===$&&p(),f||u();var M=h.isErrorGetter||function(){return g.$invalid&&(g.$touched||b&&b.$submitted)};a.$watch(M,h.setInvalid),s.ngValue&&s.$observe("value",u),g.$parsers.push(c),g.$formatters.push(c),d.on("input",u),v||d.on("focus",function(t){e.nextTick(function(){h.setFocused(!0)})}).on("blur",function(t){e.nextTick(function(){h.setFocused(!1),u()})}),a.$on("$destroy",function(){h.setFocused(!1),h.setHasValue(!1),h.input=null})}}return{restrict:"E",require:["^?mdInputContainer","?ngModel","?^form"],link:a}}function r(e,n){function o(o,i,r,a){function d(e){return l.parent?(l.text(String(i.val()||e||"").length+" / "+s),e):e}var s,l,c,m=a[0],u=a[1];n.nextTick(function(){c=t.element(u.element[0].querySelector(".md-errors-spacer")),l=t.element('<div class="md-char-counter">'),c.append(l),r.$set("ngTrim","false"),m.$formatters.push(d),m.$viewChangeListeners.push(d),i.on("input keydown keyup",function(){d()}),o.$watch(r.mdMaxlength,function(n){s=n,t.isNumber(n)&&n>0?(l.parent().length||e.enter(l,c),d()):e.leave(l)}),m.$validators["md-maxlength"]=function(e,n){return!t.isNumber(s)||s<0||(e||i.val()||n||"").length<=s}})}return{restrict:"A",require:["ngModel","^mdInputContainer"],link:o}}function a(e){function n(n,o,i,r){if(r){var a=r.element.find("label"),d=r.element.attr("md-no-float");if(a&&a.length||""===d||n.$eval(d))return void r.setHasPlaceholder(!0);if("MD-SELECT"!=o[0].nodeName){var s=t.element('<label ng-click="delegateClick()" tabindex="-1">'+i.placeholder+"</label>");i.$set("placeholder",null),r.element.addClass("md-icon-float").prepend(s),e(s)(n)}}}return{restrict:"A",require:"^^?mdInputContainer",priority:200,link:{pre:n}}}function d(e){function t(t,n,o){function i(){a=!0,e(function(){n[0].select(),a=!1},1,!1)}function r(e){a&&e.preventDefault()}if("INPUT"===n[0].nodeName||"TEXTAREA"===n[0].nodeName){var a=!1;n.on("focus",i).on("mouseup",r),t.$on("$destroy",function(){n.off("focus",i).off("mouseup",r)})}}return{restrict:"A",link:t}}function s(){function e(e,n,o,i){i&&(n.toggleClass("md-input-messages-animation",!0),n.toggleClass("md-auto-hide",!0),("false"==o.mdAutoHide||t(o))&&n.toggleClass("md-auto-hide",!1))}function t(e){return y.some(function(t){return e[t]})}return{restrict:"EA",link:e,require:"^^?mdInputContainer"}}function l(e){function t(t){function n(){for(var e=t[0];e=e.parentNode;)if(e.nodeType===Node.DOCUMENT_FRAGMENT_NODE)return!0;return!1}function o(t){return!!e.getClosest(t,"md-input-container")}function i(e){e.toggleClass("md-input-message-animation",!0)}if(o(t))i(t);else if(n())return function(e,n){o(n)&&i(t)}}return{restrict:"EA",compile:t,priority:100}}function c(e,t,n){return E(e,t,n),{addClass:function(e,t,n){p(e,n)}}}function m(e,t,n){return E(e,t,n),{enter:function(e,t){p(e,t)},leave:function(e,t){h(e,t)},addClass:function(e,t,n){"ng-hide"==t?h(e,n):n()},removeClass:function(e,t,n){"ng-hide"==t?p(e,n):n()}}}function u(e,t,n){return E(e,t,n),{enter:function(e,t){var n=f(e);n.start().done(t)},leave:function(e,t){var n=g(e);n.start().done(t)}}}function p(e,n){var o,i=[],r=v(e);t.forEach(r.children(),function(e){o=f(t.element(e)),i.push(o.start())}),$.all(i,n)}function h(e,n){var o,i=[],r=v(e);t.forEach(r.children(),function(e){o=g(t.element(e)),i.push(o.start())}),$.all(i,n)}function f(t){var n=parseInt(e.getComputedStyle(t[0]).height),o=parseInt(e.getComputedStyle(t[0]).marginTop),i=v(t),r=b(t),a=o>-n;return a||i.hasClass("md-auto-hide")&&!r.hasClass("md-input-invalid")?C(t,{}):C(t,{event:"enter",structural:!0,from:{opacity:0,"margin-top":-n+"px"},to:{opacity:1,"margin-top":"0"},duration:.3})}function g(t){var n=t[0].offsetHeight,o=e.getComputedStyle(t[0]);return 0==o.opacity?C(t,{}):C(t,{event:"leave",structural:!0,from:{opacity:1,"margin-top":0},to:{opacity:0,"margin-top":-n+"px"},duration:.3})}function b(e){var t=e.controller("mdInputContainer");return t.element}function v(e){return e.hasClass("md-input-message-animation")?t.element(M.getClosest(e,function(e){return e.classList.contains("md-input-messages-animation")})):t.element(e[0].querySelector(".md-input-messages-animation"))}function E(e,t,n){$=e,C=t,M=n}n.$inject=["$mdTheming","$parse"],i.$inject=["$mdUtil","$window","$mdAria","$timeout","$mdGesture"],r.$inject=["$animate","$mdUtil"],a.$inject=["$compile"],l.$inject=["$mdUtil"],d.$inject=["$timeout"],c.$inject=["$$AnimateRunner","$animateCss","$mdUtil"],m.$inject=["$$AnimateRunner","$animateCss","$mdUtil"],u.$inject=["$$AnimateRunner","$animateCss","$mdUtil"],t.module("material.components.input",["material.core"]).directive("mdInputContainer",n).directive("label",o).directive("input",i).directive("textarea",i).directive("mdMaxlength",r).directive("placeholder",a).directive("ngMessages",s).directive("ngMessage",l).directive("ngMessageExp",l).directive("mdSelectOnFocus",d).animation(".md-input-invalid",c).animation(".md-input-messages-animation",m).animation(".md-input-message-animation",u).service("mdInputInvalidAnimation",c).service("mdInputMessagesAnimation",m).service("mdInputMessageAnimation",u);var $,C,M,y=["ngIf","ngShow","ngHide","ngSwitchWhen","ngSwitchDefault"]}(),function(){function e(e){return{restrict:"E",compile:function(t){return t[0].setAttribute("role","list"),e}}}function n(e,n,o,i){var r=["md-checkbox","md-switch","md-menu"];return{restrict:"E",controller:"MdListController",compile:function(a,d){function s(){for(var e,t,n=["md-switch","md-checkbox"],o=0;t=n[o];++o)if((e=a.find(t)[0])&&!e.hasAttribute("aria-label")){var i=a.find("p")[0];if(!i)return;e.setAttribute("aria-label","Toggle "+i.textContent)}}function l(){var e=t.element(E),n=e.parent().hasClass("md-secondary-container")||E.parentNode.firstElementChild!==E,o="left";n&&(o="right"),e.attr("md-position-mode")||e.attr("md-position-mode",o+" target");var i=e.children().eq(0);g(i[0])||i.attr("ng-click","$mdOpenMenu($event)"),i.attr("aria-label")||i.attr("aria-label","Open List Menu")}function c(e){if("div"==e)C=t.element('<div class="md-no-style md-list-item-inner">'),C.append(a.contents()),a.addClass("md-proxy-focus");else{C=t.element('<div class="md-button md-no-style">   <div class="md-list-item-inner"></div></div>');var n=t.element('<md-button class="md-no-style"></md-button>');n[0].setAttribute("aria-label",a[0].textContent),p(a[0],n[0]),a.hasClass("md-no-focus")&&n.addClass("md-no-focus"),C.prepend(n),C.children().eq(1).append(a.contents()),a.addClass("_md-button-wrap")}a[0].setAttribute("tabindex","-1"),a.append(C)}function m(){var e=t.element('<div class="md-secondary-container">');t.forEach($,function(t){u(t,e)}),C.append(e)}function u(n,o){if(n&&!f(n)&&n.hasAttribute("ng-click")){e.expect(n,"aria-label");var i=t.element('<md-button class="md-secondary md-icon-button">');p(n,i[0],["ng-if","ng-hide","ng-show"]),n.setAttribute("tabindex","-1"),i.append(n),n=i[0]}n&&(!g(n)||!d.ngClick&&h(n))&&t.element(n).removeClass("md-secondary"),a.addClass("md-with-secondary"),o.append(n)}function p(e,n,i){var r=o.prefixer(["ng-if","ng-click","ng-dblclick","aria-label","ng-disabled","ui-sref","href","ng-href","target","ng-attr-ui-sref","ui-sref-opts"]);i&&(r=r.concat(o.prefixer(i))),t.forEach(r,function(t){e.hasAttribute(t)&&(n.setAttribute(t,e.getAttribute(t)),e.removeAttribute(t))})}function h(e){return r.indexOf(e.nodeName.toLowerCase())!=-1}function f(e){var t=e.nodeName.toUpperCase();return"MD-BUTTON"==t||"BUTTON"==t}function g(e){for(var t=e.attributes,n=0;n<t.length;n++)if("ngClick"===d.$normalize(t[n].name))return!0;return!1}function b(e,a,d,s){function l(){p&&p.children&&!b&&t.forEach(r,function(e){t.forEach(p.querySelectorAll(e+":not(.md-secondary)"),function(e){u.push(e)})})}function c(){(1==u.length||b)&&(a.addClass("md-clickable"),b||s.attachRipple(e,t.element(a[0].querySelector(".md-no-style"))))}function m(e){var t=["md-slider"];if(!e.path)return t.indexOf(e.target.tagName.toLowerCase())!==-1;for(var n=e.path.indexOf(a.children()[0]),o=0;o<n;o++)if(t.indexOf(e.path[o].tagName.toLowerCase())!==-1)return!0}a.addClass("_md");var u=[],p=a[0].firstElementChild,h=a.hasClass("_md-button-wrap"),f=h?p.firstElementChild:p,b=f&&g(f);l(),c(),a.hasClass("md-proxy-focus")&&u.length&&t.forEach(u,function(n){n=t.element(n),e.mouseActive=!1,n.on("mousedown",function(){e.mouseActive=!0,i(function(){e.mouseActive=!1},100)}).on("focus",function(){e.mouseActive===!1&&a.addClass("md-focused"),n.on("blur",function t(){a.removeClass("md-focused"),n.off("blur",t)})})});var v=function(e){if("INPUT"!=e.target.nodeName&&"TEXTAREA"!=e.target.nodeName&&!e.target.isContentEditable){var t=e.which||e.keyCode;t==n.KEY_CODE.SPACE&&f&&(f.click(),e.preventDefault(),e.stopPropagation())}};b||u.length||f&&f.addEventListener("keypress",v),a.off("click"),a.off("keypress"),1==u.length&&f&&a.children().eq(0).on("click",function(e){if(!m(e)){var n=o.getClosest(e.target,"BUTTON");!n&&f.contains(e.target)&&t.forEach(u,function(n){e.target===n||n.contains(e.target)||("MD-MENU"===n.nodeName&&(n=n.children[0]),t.element(n).triggerHandler("click"))})}}),e.$on("$destroy",function(){f&&f.removeEventListener("keypress",v)})}var v,E,$=a[0].querySelectorAll(".md-secondary"),C=a;if(a[0].setAttribute("role","listitem"),d.ngClick||d.ngDblclick||d.ngHref||d.href||d.uiSref||d.ngAttrUiSref)c("button");else{for(var M,y=0;M=r[y];++y)if(E=a[0].querySelector(M)){v=!0;break}v?c("div"):a[0].querySelector("md-button:not(.md-secondary):not(.md-exclude)")||a.addClass("md-no-proxy")}return m(),s(),v&&"MD-MENU"===E.nodeName&&l(),b}}}function o(e,t,n){function o(e,t){var o={};n.attach(e,t,o)}var i=this;i.attachRipple=o}o.$inject=["$scope","$element","$mdListInkRipple"],e.$inject=["$mdTheming"],n.$inject=["$mdAria","$mdConstant","$mdUtil","$timeout"],t.module("material.components.list",["material.core"]).controller("MdListController",o).directive("mdList",e).directive("mdListItem",n)}(),function(){t.module("material.components.menu",["material.core","material.components.backdrop"])}(),function(){t.module("material.components.menuBar",["material.core","material.components.icon","material.components.menu"])}(),function(){function e(e,n){return{restrict:"E",transclude:!0,controller:o,controllerAs:"ctrl",bindToController:!0,scope:{mdSelectedNavItem:"=?",navBarAriaLabel:"@?"},template:'<div class="md-nav-bar"><nav role="navigation"><ul class="_md-nav-bar-list" ng-transclude role="listbox"tabindex="0"ng-focus="ctrl.onFocus()"ng-blur="ctrl.onBlur()"ng-keydown="ctrl.onKeydown($event)"aria-label="{{ctrl.navBarAriaLabel}}"></ul></nav><md-nav-ink-bar></md-nav-ink-bar></div>',link:function(o,i,r,a){n(i),a.navBarAriaLabel||e.expectAsync(i,"aria-label",t.noop)}}}function o(e,t,n,o){this._$timeout=n,this._$scope=t,this._$mdConstant=o,this.mdSelectedNavItem,this.navBarAriaLabel,this._navBarEl=e[0],this._inkbar;var i=this,r=this._$scope.$watch(function(){return i._navBarEl.querySelectorAll("._md-nav-button").length},function(e){e>0&&(i._initTabs(),r())})}function i(e){return{restrict:"E",require:["mdNavItem","^mdNavBar"],controller:r,bindToController:!0,controllerAs:"ctrl",replace:!0,transclude:!0,template:'<li class="md-nav-item" role="option" aria-selected="{{ctrl.isSelected()}}"><md-button ng-if="ctrl.mdNavSref" class="_md-nav-button md-accent"ng-class="ctrl.getNgClassMap()"tabindex="-1"ui-sref="{{ctrl.mdNavSref}}"><span ng-transclude class="_md-nav-button-text"></span></md-button><md-button ng-if="ctrl.mdNavHref" class="_md-nav-button md-accent"ng-class="ctrl.getNgClassMap()"tabindex="-1"ng-href="{{ctrl.mdNavHref}}"><span ng-transclude class="_md-nav-button-text"></span></md-button><md-button ng-if="ctrl.mdNavClick" class="_md-nav-button md-accent"ng-class="ctrl.getNgClassMap()"tabindex="-1"ng-click="ctrl.mdNavClick()"><span ng-transclude class="_md-nav-button-text"></span></md-button></li>',scope:{mdNavClick:"&?",mdNavHref:"@?",mdNavSref:"@?",name:"@"},link:function(n,o,i,r){var a=r[0],d=r[1];e(function(){a.name||(a.name=t.element(o[0].querySelector("._md-nav-button-text")).text().trim());var e=t.element(o[0].querySelector("._md-nav-button"));e.on("click",function(){d.mdSelectedNavItem=a.name,n.$apply()})})}}}function r(e){this._$element=e,this.mdNavClick,this.mdNavHref,this.name,this._selected=!1,this._focused=!1;var t=!!e.attr("md-nav-click"),n=!!e.attr("md-nav-href"),o=!!e.attr("md-nav-sref");if((t?1:0)+(n?1:0)+(o?1:0)>1)throw Error("Must specify exactly one of md-nav-click, md-nav-href, md-nav-sref for nav-item directive")}o.$inject=["$element","$scope","$timeout","$mdConstant"],i.$inject=["$$rAF"],r.$inject=["$element"],e.$inject=["$mdAria","$mdTheming"],t.module("material.components.navBar",["material.core"]).controller("MdNavBarController",o).directive("mdNavBar",e).controller("MdNavItemController",r).directive("mdNavItem",i),o.prototype._initTabs=function(){this._inkbar=t.element(this._navBarEl.getElementsByTagName("md-nav-ink-bar")[0]);var e=this;this._$timeout(function(){e._updateTabs(e.mdSelectedNavItem,n)}),this._$scope.$watch("ctrl.mdSelectedNavItem",function(t,n){e._$timeout(function(){e._updateTabs(t,n)})})},o.prototype._updateTabs=function(e,t){var n=this,o=this._getTabs(),i=-1,r=-1,a=this._getTabByName(e),d=this._getTabByName(t);d&&(d.setSelected(!1),i=o.indexOf(d)),a&&(a.setSelected(!0),r=o.indexOf(a)),this._$timeout(function(){n._updateInkBarStyles(a,r,i)})},o.prototype._updateInkBarStyles=function(e,t,n){if(this._inkbar.toggleClass("_md-left",t<n).toggleClass("_md-right",t>n),this._inkbar.css({display:t<0?"none":""}),e){var o=e.getButtonEl(),i=o.offsetLeft;this._inkbar.css({left:i+"px",width:o.offsetWidth+"px"})}},o.prototype._getTabs=function(){var e=Array.prototype.slice.call(this._navBarEl.querySelectorAll(".md-nav-item"));return e.map(function(e){return t.element(e).controller("mdNavItem")})},o.prototype._getTabByName=function(e){return this._findTab(function(t){return t.getName()==e})},o.prototype._getSelectedTab=function(){return this._findTab(function(e){return e.isSelected()})},o.prototype.getFocusedTab=function(){return this._findTab(function(e){return e.hasFocus()})},o.prototype._findTab=function(e){for(var t=this._getTabs(),n=0;n<t.length;n++)if(e(t[n]))return t[n];return null},o.prototype.onFocus=function(){var e=this._getSelectedTab();e&&e.setFocused(!0)},o.prototype.onBlur=function(){var e=this.getFocusedTab();e&&e.setFocused(!1)},o.prototype._moveFocus=function(e,t){e.setFocused(!1),t.setFocused(!0)},o.prototype.onKeydown=function(e){var t=this._$mdConstant.KEY_CODE,n=this._getTabs(),o=this.getFocusedTab();if(o){var i=n.indexOf(o);switch(e.keyCode){case t.UP_ARROW:case t.LEFT_ARROW:i>0&&this._moveFocus(o,n[i-1]);break;case t.DOWN_ARROW:case t.RIGHT_ARROW:i<n.length-1&&this._moveFocus(o,n[i+1]);break;case t.SPACE:case t.ENTER:this._$timeout(function(){o.getButtonEl().click()})}}},r.prototype.getNgClassMap=function(){return{"md-active":this._selected,"md-primary":this._selected,"md-unselected":!this._selected,"md-focused":this._focused}},r.prototype.getName=function(){return this.name},r.prototype.getButtonEl=function(){return this._$element[0].querySelector("._md-nav-button")},r.prototype.setSelected=function(e){this._selected=e},r.prototype.isSelected=function(){return this._selected},r.prototype.setFocused=function(e){this._focused=e},r.prototype.hasFocus=function(){return this._focused}}(),function(){function e(e,n,o,a){this._defaultConfigOptions={bindToController:!0,clickOutsideToClose:!1,disableParentScroll:!1,escapeToClose:!1,focusOnOpen:!0,fullscreen:!1,hasBackdrop:!1,propagateContainerEvents:!1,transformTemplate:t.bind(this,this._wrapTemplate),trapFocus:!1,zIndex:d},this._config={},this._$rootElement=e,this._$rootScope=n,this._$injector=o,this._$window=a,this._trackedPanels={},this.animation=r.animation,this.xPosition=i.xPosition,this.yPosition=i.yPosition}function o(e,t){this._$q=t.get("$q"),this._$mdCompiler=t.get("$mdCompiler"),this._$mdConstant=t.get("$mdConstant"),this._$mdUtil=t.get("$mdUtil"),this._$rootScope=t.get("$rootScope"),this._$animate=t.get("$animate"),this._$mdPanel=t.get("$mdPanel"),this._$log=t.get("$log"),this._$window=t.get("$window"),this._$$rAF=t.get("$$rAF"),this.id=e.id,this.config=e,this.panelContainer,this.panelEl,this.isAttached=!1,this._removeListeners=[],this._topFocusTrap,this._bottomFocusTrap,this._backdropRef,this._restoreScroll=null}function i(e){this._$window=e.get("$window"),this._isRTL="rtl"===e.get("$mdUtil").bidi(),this._absolute=!1,this._relativeToEl,this._top="",this._bottom="",this._left="",this._right="",this._translateX=[],this._translateY=[],this._positions=[],this._actualPosition}function r(e){this._$mdUtil=e.get("$mdUtil"),this._openFrom,this._closeTo,this._animationClass=""}function a(e){var n=t.isString(e)?document.querySelector(e):e;return t.element(n)}e.$inject=["$rootElement","$rootScope","$injector","$window"],t.module("material.components.panel",["material.core","material.components.backdrop"]).service("$mdPanel",e);var d=80,s="_md-panel-hidden",l=t.element('<div class="_md-panel-focus-trap" tabindex="0"></div>');e.prototype.create=function(e){if(e=e||{},t.isDefined(e.id)&&this._trackedPanels[e.id])return this._trackedPanels[e.id];this._config={id:e.id||"panel_"+this._$injector.get("$mdUtil").nextUid(),scope:this._$rootScope.$new(!0),attachTo:this._$rootElement},t.extend(this._config,this._defaultConfigOptions,e);var n=new o(this._config,this._$injector);return this._trackedPanels[e.id]=n,n},e.prototype.open=function(e){var t=this.create(e);return t.open().then(function(){return t})},e.prototype.newPanelPosition=function(){return new i(this._$injector)},e.prototype.newPanelAnimation=function(){return new r(this._$injector)},e.prototype._wrapTemplate=function(e){var t=e||"";return'<div class="md-panel-outer-wrapper">  <div class="md-panel" style="left: -9999px;">'+t+"</div></div>"},o.prototype.open=function(){var e=this;return this._$q(function(t,n){var o=e._done(t,e),i=e._simpleBind(e.show,e);e.attach().then(i).then(o)["catch"](n)})},o.prototype.close=function(){var e=this;return this._$q(function(t,n){var o=e._done(t,e),i=e._simpleBind(e.detach,e);e.hide().then(i).then(o)["catch"](n)})},o.prototype.attach=function(){if(this.isAttached&&this.panelEl)return this._$q.when(this);var e=this;return this._$q(function(n,o){var i=e._done(n,e),r=e.config.onDomAdded||t.noop,a=function(t){return e.isAttached=!0,e._addEventListeners(),t};e._$q.all([e._createBackdrop(),e._createPanel().then(a)["catch"](o)]).then(r).then(i)["catch"](o)})},o.prototype.detach=function(){if(!this.isAttached)return this._$q.when(this);var e=this,n=e.config.onDomRemoved||t.noop,o=function(){return e._removeEventListeners(),e._topFocusTrap&&e._topFocusTrap.parentNode&&e._topFocusTrap.parentNode.removeChild(e._topFocusTrap),e._bottomFocusTrap&&e._bottomFocusTrap.parentNode&&e._bottomFocusTrap.parentNode.removeChild(e._bottomFocusTrap),e.panelContainer.remove(),e.isAttached=!1,e._$q.when(e)};return this._restoreScroll&&(this._restoreScroll(),this._restoreScroll=null),this._$q(function(t,i){var r=e._done(t,e);e._$q.all([o(),!e._backdropRef||e._backdropRef.detach()]).then(n).then(r)["catch"](i)})},o.prototype.destroy=function(){this.config.scope.$destroy(),this.config.locals=null},o.prototype.show=function(){if(!this.panelContainer)return this._$q(function(e,t){t("Panel does not exist yet. Call open() or attach().")});if(!this.panelContainer.hasClass(s))return this._$q.when(this);var e=this,n=function(){return e.panelContainer.removeClass(s),e._animateOpen()};return this._$q(function(o,i){var r=e._done(o,e),a=e.config.onOpenComplete||t.noop;e._$q.all([e._backdropRef?e._backdropRef.show():e,n().then(function(){e._focusOnOpen()},i)]).then(a).then(r)["catch"](i)})},o.prototype.hide=function(){if(!this.panelContainer)return this._$q(function(e,t){t("Panel does not exist yet. Call open() or attach().")});if(this.panelContainer.hasClass(s))return this._$q.when(this);var e=this;return this._$q(function(n,o){var i=e._done(n,e),r=e.config.onRemoving||t.noop,d=function(){var t=e.config.origin;t&&a(t).focus()},l=function(){e.panelContainer.addClass(s)};e._$q.all([e._backdropRef?e._backdropRef.hide():e,e._animateClose().then(r).then(l).then(d)["catch"](o)]).then(i,o)})},o.prototype.addClass=function(e,t){if(this._$log.warn("The addClass method is in the process of being deprecated. Full deprecation is scheduled for the Angular Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."),!this.panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");t||this.panelContainer.hasClass(e)?t&&!this.panelEl.hasClass(e)&&this.panelEl.addClass(e):this.panelContainer.addClass(e)},o.prototype.removeClass=function(e,t){if(this._$log.warn("The removeClass method is in the process of being deprecated. Full deprecation is scheduled for the Angular Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."),!this.panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");!t&&this.panelContainer.hasClass(e)?this.panelContainer.removeClass(e):t&&this.panelEl.hasClass(e)&&this.panelEl.removeClass(e)},o.prototype.toggleClass=function(e,t){if(this._$log.warn("The toggleClass method is in the process of being deprecated. Full deprecation is scheduled for the Angular Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."),!this.panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");t?this.panelEl.toggleClass(e):this.panelContainer.toggleClass(e)},o.prototype._createPanel=function(){var e=this;return this._$q(function(n,o){e.config.locals||(e.config.locals={}),e.config.locals.mdPanelRef=e,e._$mdCompiler.compile(e.config).then(function(i){e.panelContainer=i.link(e.config.scope),a(e.config.attachTo).append(e.panelContainer),e.config.disableParentScroll&&(e._restoreScroll=e._$mdUtil.disableScrollAround(null,e.panelContainer,{disableScrollMask:!0})),e.panelEl=t.element(e.panelContainer[0].querySelector(".md-panel")),e.config.panelClass&&e.panelEl.addClass(e.config.panelClass),e.config.propagateContainerEvents&&e.panelContainer.css("pointer-events","none"),e._$animate.pin&&e._$animate.pin(e.panelContainer,a(e.config.attachTo)),e._configureTrapFocus(),e._addStyles().then(function(){n(e)},o)},o)})},o.prototype._addStyles=function(){var e=this;return this._$q(function(t){e.panelContainer.css("z-index",e.config.zIndex),e.panelEl.css("z-index",e.config.zIndex+1);var n=function(){e.panelEl.css("left",""),e.panelContainer.addClass(s),t(e)};if(e.config.fullscreen)return e.panelEl.addClass("_md-panel-fullscreen"),void n();var o=e.config.position;return o?void e._$rootScope.$$postDigest(function(){e._updatePosition(!0),t(e)}):void n()})},o.prototype.updatePosition=function(e){if(!this.panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");this.config.position=e,this._updatePosition()},o.prototype._updatePosition=function(e){var t=this.config.position;if(t){t._setPanelPosition(this.panelEl),e&&this.panelContainer.addClass(s),this.panelEl.css(i.absPosition.TOP,t.getTop()),this.panelEl.css(i.absPosition.BOTTOM,t.getBottom()),this.panelEl.css(i.absPosition.LEFT,t.getLeft()),this.panelEl.css(i.absPosition.RIGHT,t.getRight());var n=this._$mdConstant.CSS.TRANSFORM;this.panelEl.css(n,t.getTransform())}},o.prototype._focusOnOpen=function(){if(this.config.focusOnOpen){var e=this;this._$rootScope.$$postDigest(function(){var t=e._$mdUtil.findFocusTarget(e.panelEl)||e.panelEl;t.focus()})}},o.prototype._createBackdrop=function(){if(this.config.hasBackdrop){if(!this._backdropRef){var e=this._$mdPanel.newPanelAnimation().openFrom(this.config.attachTo).withAnimation({open:"_md-opaque-enter",close:"_md-opaque-leave"}),t={animation:e,attachTo:this.config.attachTo,focusOnOpen:!1,panelClass:"_md-panel-backdrop",zIndex:this.config.zIndex-1};this._backdropRef=this._$mdPanel.create(t)}if(!this._backdropRef.isAttached)return this._backdropRef.attach()}},o.prototype._addEventListeners=function(){this._configureEscapeToClose(),this._configureClickOutsideToClose(),
this._configureScrollListener()},o.prototype._removeEventListeners=function(){this._removeListeners&&this._removeListeners.forEach(function(e){e()}),this._removeListeners=[]},o.prototype._configureEscapeToClose=function(){if(this.config.escapeToClose){var e=a(this.config.attachTo),t=this,n=function(e){e.keyCode===t._$mdConstant.KEY_CODE.ESCAPE&&(e.stopPropagation(),e.preventDefault(),t.close())};this.panelContainer.on("keydown",n),e.on("keydown",n),this._removeListeners.push(function(){t.panelContainer.off("keydown",n),e.off("keydown",n)})}},o.prototype._configureClickOutsideToClose=function(){if(this.config.clickOutsideToClose){var e,t=this.panelContainer,n=function(t){e=t.target},o=this,i=function(n){e===t[0]&&n.target===t[0]&&(n.stopPropagation(),n.preventDefault(),o.close())};t.on("mousedown",n),t.on("mouseup",i),this._removeListeners.push(function(){t.off("mousedown",n),t.off("mouseup",i)})}},o.prototype._configureScrollListener=function(){var e=t.bind(this,this._updatePosition),n=this._$$rAF.throttle(e),o=this,i=function(){o.config.disableParentScroll||n()};this._$window.addEventListener("scroll",i,!0),this._removeListeners.push(function(){o._$window.removeEventListener("scroll",i,!0)})},o.prototype._configureTrapFocus=function(){if(this.panelEl.attr("tabIndex","-1"),this.config.trapFocus){var e=this.panelEl;this._topFocusTrap=l.clone()[0],this._bottomFocusTrap=l.clone()[0];var t=function(){e.focus()};this._topFocusTrap.addEventListener("focus",t),this._bottomFocusTrap.addEventListener("focus",t),this._removeListeners.push(this._simpleBind(function(){this._topFocusTrap.removeEventListener("focus",t),this._bottomFocusTrap.removeEventListener("focus",t)},this)),e[0].parentNode.insertBefore(this._topFocusTrap,e[0]),e.after(this._bottomFocusTrap)}},o.prototype._animateOpen=function(){this.panelContainer.addClass("md-panel-is-showing");var e=this.config.animation;if(!e)return this.panelContainer.addClass("_md-panel-shown"),this._$q.when(this);var t=this;return this._$q(function(n){var o=t._done(n,t),i=function(){t._$log.warn("MdPanel Animations failed. Showing panel without animating."),o()};e.animateOpen(t.panelEl).then(o,i)})},o.prototype._animateClose=function(){var e=this.config.animation;if(!e)return this.panelContainer.removeClass("md-panel-is-showing"),this.panelContainer.removeClass("_md-panel-shown"),this._$q.when(this);var t=this;return this._$q(function(n){var o=function(){t.panelContainer.removeClass("md-panel-is-showing"),n(t)},i=function(){t._$log.warn("MdPanel Animations failed. Hiding panel without animating."),o()};e.animateClose(t.panelEl).then(o,i)})},o.prototype._simpleBind=function(e,t){return function(n){return e.apply(t,n)}},o.prototype._done=function(e,t){return function(){e(t)}},i.xPosition={CENTER:"center",ALIGN_START:"align-start",ALIGN_END:"align-end",OFFSET_START:"offset-start",OFFSET_END:"offset-end"},i.yPosition={CENTER:"center",ALIGN_TOPS:"align-tops",ALIGN_BOTTOMS:"align-bottoms",ABOVE:"above",BELOW:"below"},i.absPosition={TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},i.prototype.absolute=function(){return this._absolute=!0,this},i.prototype._setPosition=function(e,n){if(e===i.absPosition.RIGHT||e===i.absPosition.LEFT)this._left=this._right="";else{if(e!==i.absPosition.BOTTOM&&e!==i.absPosition.TOP){var o=Object.keys(i.absPosition).join().toLowerCase();throw new Error("Position must be one of "+o+".")}this._top=this._bottom=""}return this["_"+e]=t.isString(n)?n:"0",this},i.prototype.top=function(e){return this._setPosition(i.absPosition.TOP,e)},i.prototype.bottom=function(e){return this._setPosition(i.absPosition.BOTTOM,e)},i.prototype.start=function(e){var t=this._isRTL?i.absPosition.RIGHT:i.absPosition.LEFT;return this._setPosition(t,e)},i.prototype.end=function(e){var t=this._isRTL?i.absPosition.LEFT:i.absPosition.RIGHT;return this._setPosition(t,e)},i.prototype.left=function(e){return this._setPosition(i.absPosition.LEFT,e)},i.prototype.right=function(e){return this._setPosition(i.absPosition.RIGHT,e)},i.prototype.centerHorizontally=function(){return this._left="50%",this._right="",this._translateX=["-50%"],this},i.prototype.centerVertically=function(){return this._top="50%",this._bottom="",this._translateY=["-50%"],this},i.prototype.center=function(){return this.centerHorizontally().centerVertically()},i.prototype.relativeTo=function(e){return this._absolute=!1,this._relativeToEl=a(e),this},i.prototype.addPanelPosition=function(e,t){if(!this._relativeToEl)throw new Error("addPanelPosition can only be used with relative positioning. Set relativeTo first.");return this._validateXPosition(e),this._validateYPosition(t),this._positions.push({x:e,y:t}),this},i.prototype._validateYPosition=function(e){if(null!=e){for(var t,n=Object.keys(i.yPosition),o=[],r=0;t=n[r];r++){var a=i.yPosition[t];if(o.push(a),a===e)return}throw new Error("Panel y position only accepts the following values:\n"+o.join(" | "))}},i.prototype._validateXPosition=function(e){if(null!=e){for(var t,n=Object.keys(i.xPosition),o=[],r=0;t=n[r];r++){var a=i.xPosition[t];if(o.push(a),a===e)return}throw new Error("Panel x Position only accepts the following values:\n"+o.join(" | "))}},i.prototype.withOffsetX=function(e){return this._translateX.push(e),this},i.prototype.withOffsetY=function(e){return this._translateY.push(e),this},i.prototype.getTop=function(){return this._top},i.prototype.getBottom=function(){return this._bottom},i.prototype.getLeft=function(){return this._left},i.prototype.getRight=function(){return this._right},i.prototype.getTransform=function(){var e=this._reduceTranslateValues("translateX",this._translateX),t=this._reduceTranslateValues("translateY",this._translateY);return(e+" "+t).trim()},i.prototype._isOnscreen=function(e){var t=parseInt(this.getLeft()),n=parseInt(this.getTop()),o=t+e[0].offsetWidth,i=n+e[0].offsetHeight;return t>=0&&n>=0&&i<=this._$window.innerHeight&&o<=this._$window.innerWidth},i.prototype.getActualPosition=function(){return this._actualPosition},i.prototype._reduceTranslateValues=function(e,t){return t.map(function(t){return e+"("+t+")"}).join(" ")},i.prototype._setPanelPosition=function(e){if(!this._absolute){if(this._actualPosition)return void this._calculatePanelPosition(e,this._actualPosition);for(var t=0;t<this._positions.length&&(this._actualPosition=this._positions[t],this._calculatePanelPosition(e,this._actualPosition),!this._isOnscreen(e));t++);}},i.prototype._reverseXPosition=function(e){if(e!==i.xPosition.CENTER){var t="start",n="end";return e.indexOf(t)>-1?e.replace(t,n):e.replace(n,t)}},i.prototype._bidi=function(e){return this._isRTL?this._reverseXPosition(e):e},i.prototype._calculatePanelPosition=function(e,t){var n=e[0].getBoundingClientRect(),o=n.width,r=n.height,a=this._relativeToEl[0].getBoundingClientRect(),d=a.left,s=a.right,l=a.width;switch(this._bidi(t.x)){case i.xPosition.OFFSET_START:this._left=d-o+"px";break;case i.xPosition.ALIGN_END:this._left=s-o+"px";break;case i.xPosition.CENTER:var c=d+.5*l-.5*o;this._left=c+"px";break;case i.xPosition.ALIGN_START:this._left=d+"px";break;case i.xPosition.OFFSET_END:this._left=s+"px"}var m=a.top,u=a.bottom,p=a.height;switch(t.y){case i.yPosition.ABOVE:this._top=m-r+"px";break;case i.yPosition.ALIGN_BOTTOMS:this._top=u-r+"px";break;case i.yPosition.CENTER:var h=m+.5*p-.5*r;this._top=h+"px";break;case i.yPosition.ALIGN_TOPS:this._top=m+"px";break;case i.yPosition.BELOW:this._top=u+"px"}},r.animation={SLIDE:"md-panel-animate-slide",SCALE:"md-panel-animate-scale",FADE:"md-panel-animate-fade"},r.prototype.openFrom=function(e){return e=e.target?e.target:e,this._openFrom=this._getPanelAnimationTarget(e),this._closeTo||(this._closeTo=this._openFrom),this},r.prototype.closeTo=function(e){return this._closeTo=this._getPanelAnimationTarget(e),this},r.prototype._getPanelAnimationTarget=function(e){return t.isDefined(e.top)||t.isDefined(e.left)?{element:n,bounds:{top:e.top||0,left:e.left||0}}:this._getBoundingClientRect(a(e))},r.prototype.withAnimation=function(e){return this._animationClass=e,this},r.prototype.animateOpen=function(e){var n=this._$mdUtil.dom.animator;this._fixBounds(e);var o={},i=e[0].style.transform||"",a=n.toTransformCss(i),d=n.toTransformCss(i);switch(this._animationClass){case r.animation.SLIDE:e.css("opacity","1"),o={transitionInClass:"_md-panel-animate-enter"};var s=n.calculateSlideToOrigin(e,this._openFrom)||"";a=n.toTransformCss(s+" "+i);break;case r.animation.SCALE:o={transitionInClass:"_md-panel-animate-enter"};var l=n.calculateZoomToOrigin(e,this._openFrom)||"";a=n.toTransformCss(l+" "+i);break;case r.animation.FADE:o={transitionInClass:"_md-panel-animate-enter"};break;default:o=t.isString(this._animationClass)?{transitionInClass:this._animationClass}:{transitionInClass:this._animationClass.open,transitionOutClass:this._animationClass.close}}return n.translate3d(e,a,d,o)},r.prototype.animateClose=function(e){var n=this._$mdUtil.dom.animator,o={},i=e[0].style.transform||"",a=n.toTransformCss(i),d=n.toTransformCss(i);switch(this._animationClass){case r.animation.SLIDE:e.css("opacity","1"),o={transitionInClass:"_md-panel-animate-leave"};var s=n.calculateSlideToOrigin(e,this._closeTo)||"";d=n.toTransformCss(s+" "+i);break;case r.animation.SCALE:o={transitionInClass:"_md-panel-animate-scale-out _md-panel-animate-leave"};var l=n.calculateZoomToOrigin(e,this._closeTo)||"";d=n.toTransformCss(l+" "+i);break;case r.animation.FADE:o={transitionInClass:"_md-panel-animate-fade-out _md-panel-animate-leave"};break;default:o=t.isString(this._animationClass)?{transitionOutClass:this._animationClass}:{transitionInClass:this._animationClass.close,transitionOutClass:this._animationClass.open}}return n.translate3d(e,a,d,o)},r.prototype._fixBounds=function(e){var t=e[0].offsetWidth,n=e[0].offsetHeight;this._openFrom&&null==this._openFrom.bounds.height&&(this._openFrom.bounds.height=n),this._openFrom&&null==this._openFrom.bounds.width&&(this._openFrom.bounds.width=t),this._closeTo&&null==this._closeTo.bounds.height&&(this._closeTo.bounds.height=n),this._closeTo&&null==this._closeTo.bounds.width&&(this._closeTo.bounds.width=t)},r.prototype._getBoundingClientRect=function(e){if(e instanceof t.element)return{element:e,bounds:e[0].getBoundingClientRect()}}}(),function(){t.module("material.components.progressCircular",["material.core"])}(),function(){function e(e,n,o){function i(e,t,n){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),r}function r(o,i,r){function u(){r.$observe("value",function(e){var t=a(e);i.attr("aria-valuenow",t),h()!=c&&f($,t)}),r.$observe("mdBufferValue",function(e){f(E,a(e))}),r.$observe("disabled",function(e){b=e===!0||e===!1?!!e:t.isDefined(e),i.toggleClass(m,b),C.toggleClass(g,!b)}),r.$observe("mdMode",function(e){switch(g&&C.removeClass(g),e){case c:case l:case d:case s:C.addClass(g="md-mode-"+e);break;default:C.addClass(g="md-mode-"+s)}})}function p(){if(t.isUndefined(r.mdMode)){var e=t.isDefined(r.value),n=e?d:s;i.attr("md-mode",n),r.mdMode=n}}function h(){var e=(r.mdMode||"").trim();if(e)switch(e){case d:case s:case l:case c:break;default:e=s}return e}function f(e,o){if(!b&&h()){var i=n.supplant("translateX({0}%) scale({1},1)",[(o-100)/2,o/100]),r=v({transform:i});t.element(e).css(r)}}e(i);var g,b=r.hasOwnProperty("disabled"),v=n.dom.animator.toCss,E=t.element(i[0].querySelector(".md-bar1")),$=t.element(i[0].querySelector(".md-bar2")),C=t.element(i[0].querySelector(".md-container"));i.attr("md-mode",h()).toggleClass(m,b),p(),u()}function a(e){return Math.max(0,Math.min(e||0,100))}var d="determinate",s="indeterminate",l="buffer",c="query",m="_md-progress-linear-disabled";return{restrict:"E",template:'<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',compile:i}}e.$inject=["$mdTheming","$mdUtil","$log"],t.module("material.components.progressLinear",["material.core"]).directive("mdProgressLinear",e)}(),function(){function e(e,n,o,i){function r(r,a,d,s){function l(){a.hasClass("md-focused")||a.addClass("md-focused")}function c(o){var i=o.which||o.keyCode;if(i==n.KEY_CODE.ENTER||o.currentTarget==o.target)switch(i){case n.KEY_CODE.LEFT_ARROW:case n.KEY_CODE.UP_ARROW:o.preventDefault(),m.selectPrevious(),l();break;case n.KEY_CODE.RIGHT_ARROW:case n.KEY_CODE.DOWN_ARROW:o.preventDefault(),m.selectNext(),l();break;case n.KEY_CODE.ENTER:var r=t.element(e.getClosest(a[0],"form"));r.length>0&&r.triggerHandler("submit")}}a.addClass("_md"),o(a);var m=s[0],u=s[1]||e.fakeNgModel();m.init(u),r.mouseActive=!1,a.attr({role:"radiogroup",tabIndex:a.attr("tabindex")||"0"}).on("keydown",c).on("mousedown",function(e){r.mouseActive=!0,i(function(){r.mouseActive=!1},100)}).on("focus",function(){r.mouseActive===!1&&m.$element.addClass("md-focused")}).on("blur",function(){m.$element.removeClass("md-focused")})}function a(e){this._radioButtonRenderFns=[],this.$element=e}function d(){return{init:function(e){this._ngModelCtrl=e,this._ngModelCtrl.$render=t.bind(this,this.render)},add:function(e){this._radioButtonRenderFns.push(e)},remove:function(e){var t=this._radioButtonRenderFns.indexOf(e);t!==-1&&this._radioButtonRenderFns.splice(t,1)},render:function(){this._radioButtonRenderFns.forEach(function(e){e()})},setViewValue:function(e,t){this._ngModelCtrl.$setViewValue(e,t),this.render()},getViewValue:function(){return this._ngModelCtrl.$viewValue},selectNext:function(){return s(this.$element,1)},selectPrevious:function(){return s(this.$element,-1)},setActiveDescendant:function(e){this.$element.attr("aria-activedescendant",e)},isDisabled:function(){return this.$element[0].hasAttribute("disabled")}}}function s(n,o){var i=e.iterator(n[0].querySelectorAll("md-radio-button"),!0);if(i.count()){var r=function(e){return!t.element(e).attr("disabled")},a=n[0].querySelector("md-radio-button.md-checked"),d=i[o<0?"previous":"next"](a,r)||i.first();t.element(d).triggerHandler("click")}}return a.prototype=d(),{restrict:"E",controller:["$element",a],require:["mdRadioGroup","?ngModel"],link:{pre:r}}}function n(e,t,n){function o(o,r,a,d){function s(){if(!d)throw"RadioButton: No RadioGroupController could be found.";d.add(c),a.$observe("value",c),r.on("click",l).on("$destroy",function(){d.remove(c)})}function l(e){r[0].hasAttribute("disabled")||d.isDisabled()||o.$apply(function(){d.setViewValue(a.value,e&&e.type)})}function c(){function e(e){"MD-RADIO-GROUP"!=r.parent()[0].nodeName&&r.parent()[e?"addClass":"removeClass"](i)}var t=d.getViewValue()==a.value;t!==u&&(u=t,r.attr("aria-checked",t),t?(e(!0),r.addClass(i),d.setActiveDescendant(r.attr("id"))):(e(!1),r.removeClass(i)))}function m(n,o){function i(){return a.id||"radio_"+t.nextUid()}o.ariaId=i(),n.attr({id:o.ariaId,role:"radio","aria-checked":"false"}),e.expectWithText(n,"aria-label")}var u;n(r),m(r,o),s()}var i="md-checked";return{restrict:"E",require:"^mdRadioGroup",transclude:!0,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',link:o}}e.$inject=["$mdUtil","$mdConstant","$mdTheming","$timeout"],n.$inject=["$mdAria","$mdUtil","$mdTheming"],t.module("material.components.radioButton",["material.core"]).directive("mdRadioGroup",e).directive("mdRadioButton",n)}(),function(){function o(e,o,i,r,a,d,s){function l(d,l){var c=t.element("<md-select-value><span></span></md-select-value>");if(c.append('<span class="md-select-icon" aria-hidden="true"></span>'),c.addClass("md-select-value"),c[0].hasAttribute("id")||c.attr("id","select_value_label_"+o.nextUid()),d.find("md-content").length||d.append(t.element("<md-content>").append(d.contents())),l.mdOnOpen&&(d.find("md-content").prepend(t.element('<div> <md-progress-circular md-mode="indeterminate" ng-if="$$loadingAsyncDone === false" md-diameter="25px"></md-progress-circular></div>')),d.find("md-option").attr("ng-show","$$loadingAsyncDone")),l.name){var m=t.element('<select class="md-visually-hidden">');m.attr({name:l.name,"aria-hidden":"true",tabindex:"-1"});var u=d.find("md-option");t.forEach(u,function(e){var n=t.element("<option>"+e.innerHTML+"</option>");e.hasAttribute("ng-value")?n.attr("ng-value",e.getAttribute("ng-value")):e.hasAttribute("value")&&n.attr("value",e.getAttribute("value")),m.append(n)}),m.append('<option ng-value="'+l.ngModel+'" selected></option>'),d.parent().append(m)}var p=o.parseAttributeBoolean(l.multiple),h=p?"multiple":"",f='<div class="md-select-menu-container" aria-hidden="true"><md-select-menu {0}>{1}</md-select-menu></div>';return f=o.supplant(f,[h,d.html()]),d.empty().append(c),d.append(f),l.tabindex||l.$set("tabindex",0),function(d,l,c,m){function u(){var e=l.attr("aria-label")||l.attr("placeholder");!e&&y&&y.label&&(e=y.label.text()),C=e,a.expect(l,"aria-label",e)}function h(){N&&(H=H||N.find("md-select-menu").controller("mdSelectMenu"),T.setLabelText(H.selectedLabels()))}function f(){if(C){var e=H.selectedLabels({mode:"aria"});l.attr("aria-label",e.length?C+": "+e:C)}}function g(){y&&y.setHasValue(H.selectedLabels().length>0||(l[0].validity||{}).badInput)}function b(){if(N=t.element(l[0].querySelector(".md-select-menu-container")),D=d,c.mdContainerClass){var e=N[0].getAttribute("class")+" "+c.mdContainerClass;N[0].setAttribute("class",e)}H=N.find("md-select-menu").controller("mdSelectMenu"),H.init(A,c.ngModel),l.on("$destroy",function(){N.remove()})}function v(e){if(i.isNavigationKey(e))e.preventDefault(),E(e);else if(i.isInputKey(e)||i.isNumPadKey(e)){e.preventDefault();var n=H.optNodeForKeyboardSearch(e);if(!n||n.hasAttribute("disabled"))return;var o=t.element(n).controller("mdOption");H.isMultiple||H.deselect(Object.keys(H.selected)[0]),H.select(o.hashKey,o.value),H.refreshViewValue()}}function E(){D._mdSelectIsOpen=!0,l.attr("aria-expanded","true"),e.show({scope:D,preserveScope:!0,skipCompile:!0,element:N,target:l[0],selectCtrl:T,preserveElement:!0,hasBackdrop:!0,loadingAsync:!!c.mdOnOpen&&(d.$eval(c.mdOnOpen)||!0)})["finally"](function(){D._mdSelectIsOpen=!1,l.focus(),l.attr("aria-expanded","false"),A.$setTouched()})}var $,C,M=!0,y=m[0],T=m[1],A=m[2],w=m[3],k=l.find("md-select-value"),x=t.isDefined(c.readonly),_=o.parseAttributeBoolean(c.mdNoAsterisk);if(_&&l.addClass("md-no-asterisk"),y){var S=y.isErrorGetter||function(){return A.$invalid&&(A.$touched||w&&w.$submitted)};if(y.input&&l.find("md-select-header").find("input")[0]!==y.input[0])throw new Error("<md-input-container> can only have *one* child <input>, <textarea> or <select> element!");y.input=l,y.label||a.expect(l,"aria-label",l.attr("placeholder")),d.$watch(S,y.setInvalid)}var N,D,H;b(),r(l),w&&t.isDefined(c.multiple)&&o.nextTick(function(){var e=A.$modelValue||A.$viewValue;e&&w.$setPristine()});var I=A.$render;A.$render=function(){I(),h(),f(),g()},c.$observe("placeholder",A.$render),y&&y.label&&c.$observe("required",function(e){y.label.toggleClass("md-required",e&&!_)}),T.setLabelText=function(e){if(T.setIsPlaceholder(!e),c.mdSelectedText)e=s(c.mdSelectedText)(d);else{var t=c.placeholder||(y&&y.label?y.label.text():"");e=e||t||""}var n=k.children().eq(0);n.html(e)},T.setIsPlaceholder=function(e){e?(k.addClass("md-select-placeholder"),y&&y.label&&y.label.addClass("md-placeholder")):(k.removeClass("md-select-placeholder"),y&&y.label&&y.label.removeClass("md-placeholder"))},x||(l.on("focus",function(e){y&&y.setFocused(!0)}),l.on("blur",function(e){M&&(M=!1,D._mdSelectIsOpen&&e.stopImmediatePropagation()),D._mdSelectIsOpen||(y&&y.setFocused(!1),g())})),T.triggerClose=function(){s(c.mdOnClose)(d)},d.$$postDigest(function(){u(),h(),f()}),d.$watch(function(){return H.selectedLabels()},h);var O;c.$observe("ngMultiple",function(e){O&&O();var t=s(e);O=d.$watch(function(){return t(d)},function(e,t){e===n&&t===n||(e?l.attr("multiple","multiple"):l.removeAttr("multiple"),l.attr("aria-multiselectable",e?"true":"false"),N&&(H.setMultiple(e),I=A.$render,A.$render=function(){I(),h(),f(),g()},A.$render()))})}),c.$observe("disabled",function(e){t.isString(e)&&(e=!0),$!==n&&$===e||($=e,e?l.attr({"aria-disabled":"true"}).removeAttr("tabindex").off("click",E).off("keydown",v):l.attr({tabindex:c.tabindex,"aria-disabled":"false"}).on("click",E).on("keydown",v))}),c.hasOwnProperty("disabled")||c.hasOwnProperty("ngDisabled")||(l.attr({"aria-disabled":"false"}),l.on("click",E),l.on("keydown",v));var R={role:"listbox","aria-expanded":"false","aria-multiselectable":p&&!c.ngMultiple?"true":"false"};l[0].hasAttribute("id")||(R.id="select_"+o.nextUid());var L="select_container_"+o.nextUid();N.attr("id",L),R["aria-owns"]=L,l.attr(R),d.$on("$destroy",function(){e.destroy()["finally"](function(){y&&(y.setFocused(!1),y.setHasValue(!1),y.input=null),A.$setTouched()})})}}var c=i.KEY_CODE;[c.SPACE,c.ENTER,c.UP_ARROW,c.DOWN_ARROW];return{restrict:"E",require:["^?mdInputContainer","mdSelect","ngModel","?^form"],compile:l,controller:function(){}}}function i(e,o,i,r){function a(e,n,i,a){function d(e){13!=e.keyCode&&32!=e.keyCode||s(e)}function s(n){var i=o.getClosest(n.target,"md-option"),r=i&&t.element(i).data("$mdOptionController");if(i&&r){if(i.hasAttribute("disabled"))return n.stopImmediatePropagation(),!1;var a=l.hashGetter(r.value),d=t.isDefined(l.selected[a]);e.$apply(function(){l.isMultiple?d?l.deselect(a):l.select(a,r.value):d||(l.deselect(Object.keys(l.selected)[0]),l.select(a,r.value)),l.refreshViewValue()})}}var l=a[0];n.addClass("_md"),r(n),n.on("click",s),n.on("keypress",d)}function d(r,a,d){function s(){var e=m.ngModel.$modelValue||m.ngModel.$viewValue||[];if(t.isArray(e)){var n=Object.keys(m.selected),o=e.map(m.hashGetter),i=n.filter(function(e){return o.indexOf(e)===-1});i.forEach(m.deselect),o.forEach(function(t,n){m.select(t,e[n])})}}function l(){var e=m.ngModel.$viewValue||m.ngModel.$modelValue;Object.keys(m.selected).forEach(m.deselect),m.select(m.hashGetter(e),e)}var m=this;m.isMultiple=t.isDefined(a.multiple),m.selected={},m.options={},r.$watchCollection(function(){return m.options},function(){m.ngModel.$render()});var u,p;m.setMultiple=function(e){function n(e,n){return t.isArray(e||n||[])}var o=m.ngModel;p=p||o.$isEmpty,m.isMultiple=e,u&&u(),m.isMultiple?(o.$validators["md-multiple"]=n,o.$render=s,r.$watchCollection(m.modelBinding,function(e){n(e)&&s(e),m.ngModel.$setPristine()}),o.$isEmpty=function(e){return!e||0===e.length}):(delete o.$validators["md-multiple"],o.$render=l)};var h,f,g,b="",v=300;m.optNodeForKeyboardSearch=function(e){h&&clearTimeout(h),h=setTimeout(function(){h=n,b="",g=n,f=n},v);var o=e.keyCode-(i.isNumPadKey(e)?48:0);b+=String.fromCharCode(o);var r=new RegExp("^"+b,"i");f||(f=d.find("md-option"),g=new Array(f.length),t.forEach(f,function(e,t){g[t]=e.textContent.trim()}));for(var a=0;a<g.length;++a)if(r.test(g[a]))return f[a]},m.init=function(n,o){if(m.ngModel=n,m.modelBinding=o,m.ngModel.$isEmpty=function(e){return!m.options[m.hashGetter(e)]},n.$options&&n.$options.trackBy){var i={},a=e(n.$options.trackBy);m.hashGetter=function(e,t){return i.$value=e,a(t||r,i)}}else m.hashGetter=function(e){return t.isObject(e)?"object_"+(e.$$mdSelectId||(e.$$mdSelectId=++c)):e};m.setMultiple(m.isMultiple)},m.selectedLabels=function(e){e=e||{};var t=e.mode||"html",n=o.nodesToArray(d[0].querySelectorAll("md-option[selected]"));if(n.length){var i;return"html"==t?i=function(e){if(e.hasAttribute("md-option-empty"))return"";var t=e.innerHTML,n=e.querySelector(".md-ripple-container");n&&(t=t.replace(n.outerHTML,""));var o=e.querySelector(".md-container");return o&&(t=t.replace(o.outerHTML,"")),t}:"aria"==t&&(i=function(e){return e.hasAttribute("aria-label")?e.getAttribute("aria-label"):e.textContent}),n.map(i).join(", ")}return""},m.select=function(e,t){var n=m.options[e];n&&n.setSelected(!0),m.selected[e]=t},m.deselect=function(e){var t=m.options[e];t&&t.setSelected(!1),delete m.selected[e]},m.addOption=function(e,n){if(t.isDefined(m.options[e]))throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "'+n.value+'" found.');m.options[e]=n,t.isDefined(m.selected[e])&&(m.select(e,n.value),t.isDefined(m.ngModel.$modelValue)&&m.hashGetter(m.ngModel.$modelValue)===e&&m.ngModel.$validate(),m.refreshViewValue())},m.removeOption=function(e){delete m.options[e]},m.refreshViewValue=function(){var e,n=[];for(var o in m.selected)(e=m.options[o])?n.push(e.value):n.push(m.selected[o]);var i=m.ngModel.$options&&m.ngModel.$options.trackBy,r=m.isMultiple?n:n[0],a=m.ngModel.$modelValue;(i?t.equals(a,r):a==r)||(m.ngModel.$setViewValue(r),m.ngModel.$render())}}return d.$inject=["$scope","$attrs","$element"],{restrict:"E",require:["mdSelectMenu"],scope:!1,controller:d,link:{pre:a}}}function r(e,n){function o(e,n){return e.append(t.element('<div class="md-text">').append(e.contents())),e.attr("tabindex",n.tabindex||"0"),i(n)||e.attr("md-option-empty",""),r}function i(e){var t=e.value,n=e.ngValue;return t||n}function r(o,i,r,a){function d(e,t,n){if(!c.hashGetter)return void(n||o.$$postDigest(function(){d(e,t,!0)}));var i=c.hashGetter(t,o),r=c.hashGetter(e,o);l.hashKey=r,l.value=e,c.removeOption(i,l),c.addOption(r,l)}function s(){var e={role:"option","aria-selected":"false"};i[0].hasAttribute("id")||(e.id="select_option_"+n.nextUid()),i.attr(e)}var l=a[0],c=a[1];c.isMultiple&&(i.addClass("md-checkbox-enabled"),i.prepend(m.clone())),t.isDefined(r.ngValue)?o.$watch(r.ngValue,d):t.isDefined(r.value)?d(r.value):o.$watch(function(){return i.text().trim()},d),r.$observe("disabled",function(e){e?i.attr("tabindex","-1"):i.attr("tabindex","0")}),o.$$postDigest(function(){r.$observe("selected",function(e){t.isDefined(e)&&("string"==typeof e&&(e=!0),e?(c.isMultiple||c.deselect(Object.keys(c.selected)[0]),c.select(l.hashKey,l.value)):c.deselect(l.hashKey),c.refreshViewValue())})}),e.attach(o,i),s(),o.$on("$destroy",function(){c.removeOption(l.hashKey,l)})}function a(e){this.selected=!1,this.setSelected=function(t){t&&!this.selected?e.attr({selected:"selected","aria-selected":"true"}):!t&&this.selected&&(e.removeAttr("selected"),e.attr("aria-selected","false")),this.selected=t}}return a.$inject=["$element"],{restrict:"E",require:["mdOption","^^mdSelectMenu"],controller:a,compile:o}}function a(){function e(e,n){function o(){return e.parent().find("md-select-header").length}function i(){var o=e.find("label");o.length||(o=t.element("<label>"),e.prepend(o)),o.addClass("md-container-ignore"),n.label&&o.text(n.label)}o()||i()}return{restrict:"E",compile:e}}function d(){return{restrict:"E"}}function s(o){function i(o,i,c,m,u,p,h,f,g){function b(e,t,n){function o(){return h(t,{addClass:"md-leave"}).start()}function i(){t.removeClass("md-active"),t.attr("aria-hidden","true"),t[0].style.display="none",E(n),!n.$destroy&&n.restoreFocus&&n.target.focus()}return n=n||{},n.cleanupInteraction(),n.cleanupResizing(),n.hideBackdrop(),n.$destroy===!0?i():o().then(i)}function v(e,r,a){function d(e,t,n){return n.parent.append(t),u(function(e,n){try{h(t,{removeClass:"md-leave",duration:0}).start().then(s).then(e)}catch(o){n(o)}})}function s(){return u(function(t){if(a.isRemoved)return u.reject(!1);var n=$(e,r,a);n.container.element.css(M.toCss(n.container.styles)),n.dropDown.element.css(M.toCss(n.dropDown.styles)),p(function(){r.addClass("md-active"),n.dropDown.element.css(M.toCss({transform:""})),b(a.focusedNode),t()})})}function l(e,t,n){return n.disableParentScroll&&!c.getClosest(n.target,"MD-DIALOG")?n.restoreScroll=c.disableScrollAround(n.element,n.parent):n.disableParentScroll=!1,n.hasBackdrop&&(n.backdrop=c.createBackdrop(e,"md-select-backdrop md-click-catcher"),f.enter(n.backdrop,g[0].body,null,{duration:0})),function(){n.backdrop&&n.backdrop.remove(),n.disableParentScroll&&n.restoreScroll(),delete n.restoreScroll}}function b(e){e&&!e.hasAttribute("disabled")&&e.focus()}function v(e,n){var o=r.find("md-select-menu");if(!n.target)throw new Error(c.supplant(C,[n.target]));t.extend(n,{isRemoved:!1,target:t.element(n.target),parent:t.element(n.parent),selectEl:o,contentEl:r.find("md-content"),optionNodes:o[0].getElementsByTagName("md-option")})}function E(){var n=function(e,t,n){return function(){if(!n.isRemoved){var o=$(e,t,n),i=o.container,r=o.dropDown;i.element.css(M.toCss(i.styles)),r.element.css(M.toCss(r.styles))}}}(e,r,a),o=t.element(m);return o.on("resize",n),o.on("orientationchange",n),function(){o.off("resize",n),o.off("orientationchange",n)}}function T(){a.loadingAsync&&!a.isRemoved&&(e.$$loadingAsyncDone=!1,u.when(a.loadingAsync).then(function(){e.$$loadingAsyncDone=!0,delete a.loadingAsync}).then(function(){p(s)}))}function A(){function e(e){e.preventDefault(),e.stopPropagation(),a.restoreFocus=!1,c.nextTick(o.hide,!0)}function t(e){switch(e.preventDefault(),e.stopPropagation(),e.keyCode){case y.UP_ARROW:return l();case y.DOWN_ARROW:return s();case y.SPACE:case y.ENTER:var t=c.getClosest(e.target,"md-option");t&&(u.triggerHandler({type:"click",target:t}),e.preventDefault()),m(e);break;case y.TAB:case y.ESCAPE:e.stopPropagation(),e.preventDefault(),a.restoreFocus=!0,c.nextTick(o.hide,!0);break;default:if(i.isInputKey(e)||i.isNumPadKey(e)){var n=u.controller("mdSelectMenu").optNodeForKeyboardSearch(e);a.focusedNode=n||a.focusedNode,n&&n.focus()}}}function d(e){var t,o=c.nodesToArray(a.optionNodes),i=o.indexOf(a.focusedNode);do i===-1?i=0:"next"===e&&i<o.length-1?i++:"prev"===e&&i>0&&i--,t=o[i],t.hasAttribute("disabled")&&(t=n);while(!t&&i<o.length-1&&i>0);t&&t.focus(),a.focusedNode=t}function s(){d("next")}function l(){d("prev")}function m(e){function t(){var t=!1;if(e&&e.currentTarget.children.length>0){var n=e.currentTarget.children[0],o=n.scrollHeight>n.clientHeight;if(o&&n.children.length>0){var i=e.pageX-e.currentTarget.getBoundingClientRect().left;i>n.querySelector("md-option").offsetWidth&&(t=!0)}}return t}if(!(e&&"click"==e.type&&e.currentTarget!=u[0]||t())){var n=c.getClosest(e.target,"md-option");n&&n.hasAttribute&&!n.hasAttribute("disabled")&&(e.preventDefault(),e.stopPropagation(),p.isMultiple||(a.restoreFocus=!0,c.nextTick(function(){o.hide(p.ngModel.$viewValue)},!0)))}}if(!a.isRemoved){var u=a.selectEl,p=u.controller("mdSelectMenu")||{};return r.addClass("md-clickable"),a.backdrop&&a.backdrop.on("click",e),u.on("keydown",t),u.on("click",m),function(){a.backdrop&&a.backdrop.off("click",e),u.off("keydown",t),u.off("click",m),r.removeClass("md-clickable"),a.isRemoved=!0}}}return T(),v(e,a),a.hideBackdrop=l(e,r,a),d(e,r,a).then(function(e){return r.attr("aria-hidden","false"),a.alreadyOpen=!0,a.cleanupInteraction=A(),a.cleanupResizing=E(),e},a.hideBackdrop)}function E(e){var t=e.selectCtrl;if(t){var n=e.selectEl.controller("mdSelectMenu");t.setLabelText(n?n.selectedLabels():""),t.triggerClose()}}function $(n,o,i){var u,p=o[0],h=i.target[0].children[0],f=g[0].body,b=i.selectEl[0],v=i.contentEl[0],E=f.getBoundingClientRect(),$=h.getBoundingClientRect(),C=!1,M={left:E.left+l,top:l,bottom:E.height-l,right:E.width-l-(c.floatingScrollbars()?16:0)},y={top:$.top-M.top,left:$.left-M.left,right:M.right-($.left+$.width),bottom:M.bottom-($.top+$.height)},T=E.width-2*l,A=b.querySelector("md-option[selected]"),w=b.getElementsByTagName("md-option"),k=b.getElementsByTagName("md-optgroup"),x=s(o,v),_=r(i.loadingAsync);u=_?v.firstElementChild||v:A?A:k.length?k[0]:w.length?w[0]:v.firstElementChild||v,v.offsetWidth>T?v.style["max-width"]=T+"px":v.style.maxWidth=null,C&&(v.style["min-width"]=$.width+"px"),x&&b.classList.add("md-overflow");var S=u;"MD-OPTGROUP"===(S.tagName||"").toUpperCase()&&(S=w[0]||v.firstElementChild||v,u=S),i.focusedNode=S,p.style.display="block";var N=b.getBoundingClientRect(),D=d(u);if(u){var H=m.getComputedStyle(u);D.paddingLeft=parseInt(H.paddingLeft,10)||0,D.paddingRight=parseInt(H.paddingRight,10)||0}if(x){var I=v.offsetHeight/2;v.scrollTop=D.top+D.height/2-I,y.top<I?v.scrollTop=Math.min(D.top,v.scrollTop+I-y.top):y.bottom<I&&(v.scrollTop=Math.max(D.top+D.height-N.height,v.scrollTop-I+y.bottom))}var O,R,L,P,F;C?(O=$.left,R=$.top+$.height,L="50% 0",R+N.height>M.bottom&&(R=$.top-N.height,
L="50% 100%")):(O=$.left+D.left-D.paddingLeft+2,R=Math.floor($.top+$.height/2-D.height/2-D.top+v.scrollTop)+2,L=D.left+$.width/2+"px "+(D.top+D.height/2-v.scrollTop)+"px 0px",P=Math.min($.width+D.paddingLeft+D.paddingRight,T),F=e.getComputedStyle(h)["font-size"]);var B=p.getBoundingClientRect(),U=Math.round(100*Math.min($.width/N.width,1))/100,j=Math.round(100*Math.min($.height/N.height,1))/100;return{container:{element:t.element(p),styles:{left:Math.floor(a(M.left,O,M.right-B.width)),top:Math.floor(a(M.top,R,M.bottom-B.height)),"min-width":P,"font-size":F}},dropDown:{element:t.element(b),styles:{transformOrigin:L,transform:i.alreadyOpen?"":c.supplant("scale({0},{1})",[U,j])}}}}var C="$mdSelect.show() expected a target element in options.target but got '{0}'!",M=c.dom.animator,y=i.KEY_CODE;return{parent:"body",themable:!0,onShow:v,onRemove:b,hasBackdrop:!0,disableParentScroll:!0}}function r(e){return e&&t.isFunction(e.then)}function a(e,t,n){return Math.max(e,Math.min(t,n))}function d(e){return e?{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}:{left:0,top:0,width:0,height:0}}function s(e,t){var n=!1;try{var o=e[0].style.display;e[0].style.display="block",n=t.scrollHeight>t.offsetHeight,e[0].style.display=o}finally{}return n}return i.$inject=["$mdSelect","$mdConstant","$mdUtil","$window","$q","$$rAF","$animateCss","$animate","$document"],o("$mdSelect").setDefaults({methods:["target"],options:i})}o.$inject=["$mdSelect","$mdUtil","$mdConstant","$mdTheming","$mdAria","$compile","$parse"],i.$inject=["$parse","$mdUtil","$mdConstant","$mdTheming"],r.$inject=["$mdButtonInkRipple","$mdUtil"],s.$inject=["$$interimElementProvider"];var l=8,c=0,m=t.element('<div class="md-container"><div class="md-icon"></div></div>');t.module("material.components.select",["material.core","material.components.backdrop"]).directive("mdSelect",o).directive("mdSelectMenu",i).directive("mdOption",r).directive("mdOptgroup",a).directive("mdSelectHeader",d).provider("$mdSelect",s)}(),function(){function e(e,t){return["$mdUtil","$window",function(n,o){return{restrict:"A",multiElement:!0,link:function(i,r,a){var d=i.$on("$md-resize-enable",function(){d();var s=r[0],l=s.nodeType===o.Node.ELEMENT_NODE?o.getComputedStyle(s):{};i.$watch(a[e],function(e){if(!!e===t){n.nextTick(function(){i.$broadcast("$md-resize")});var o={cachedTransitionStyles:l};n.dom.animator.waitTransitionEnd(r,o).then(function(){i.$broadcast("$md-resize")})}})})}}}]}t.module("material.components.showHide",["material.core"]).directive("ngShow",e("ngShow",!0)).directive("ngHide",e("ngHide",!1))}(),function(){function e(e,o,i,r){function a(e,n){var r=function(){return!1},a=function(){return i.when(o.supplant(l,[n||""]))};return t.extend({isLockedOpen:r,isOpen:r,toggle:a,open:a,close:a,onClose:t.noop,then:function(e){return s(n).then(e||t.noop)}},e)}function d(t,i){var a=e.get(t);return a||i?a:(r.error(o.supplant(l,[t||""])),n)}function s(t){return e.when(t)["catch"](r.error)}var l="SideNav '{0}' is not available! Did you use md-component-id='{0}'?",c={find:d,waitFor:s};return function(e,n){if(t.isUndefined(e))return c;var o=n===!0,i=c.find(e,o);return!i&&o?c.waitFor(e):!i&&t.isUndefined(n)?a(c,e):i}}function o(){return{restrict:"A",require:"^mdSidenav",link:function(e,t,n,o){}}}function i(e,o,i,r,a,d,s,l,c,m){function u(d,u,p,h){function f(e,t){d.isLockedOpen=e,e===t?u.toggleClass("md-locked-open",!!e):a[e?"addClass":"removeClass"](u,"md-locked-open"),y&&y.toggleClass("md-locked-open",!!e)}function g(e){var t=o.findFocusTarget(u)||o.findFocusTarget(u,"[md-sidenav-focus]")||u,n=u.parent();n[e?"on":"off"]("keydown",$),y&&y[e?"on":"off"]("click",C);var i=b(n,e);return e&&(w=m[0].activeElement),v(e),k=c.all([e&&y?a.enter(y,n):y?a.leave(y):c.when(!0),a[e?"removeClass":"addClass"](u,"md-closed")]).then(function(){d.isOpen&&t&&t.focus(),i&&i()})}function b(e,t){var n=u[0],o=e[0].scrollTop;if(t&&o){T={top:n.style.top,bottom:n.style.bottom,height:n.style.height};var i={top:o+"px",bottom:"auto",height:e[0].clientHeight+"px"};u.css(i),y.css(i)}if(!t&&T)return function(){n.style.top=T.top,n.style.bottom=T.bottom,n.style.height=T.height,y[0].style.top=null,y[0].style.bottom=null,y[0].style.height=null,T=null}}function v(e){e&&!M?(M=A.css("overflow"),A.css("overflow","hidden")):t.isDefined(M)&&(A.css("overflow",M),M=n)}function E(e){return d.isOpen==e?c.when(!0):(d.isOpen&&h.onCloseCb&&h.onCloseCb(),c(function(t){d.isOpen=e,o.nextTick(function(){k.then(function(e){d.isOpen||(w&&w.focus(),w=null),t(e)})})}))}function $(e){var t=e.keyCode===i.KEY_CODE.ESCAPE;return t?C(e):c.when(!0)}function C(e){return e.preventDefault(),h.close()}var M,y,T,A=null,w=null,k=c.when(!0),x=s(p.mdIsLockedOpen),_=function(){return x(d.$parent,{$media:function(t){return l.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."),e(t)},$mdMedia:e})};p.mdDisableScrollTarget&&(A=m[0].querySelector(p.mdDisableScrollTarget),A?A=t.element(A):l.warn(o.supplant('mdSidenav: couldn\'t find element matching selector "{selector}". Falling back to parent.',{selector:p.mdDisableScrollTarget}))),A||(A=u.parent()),p.hasOwnProperty("mdDisableBackdrop")||(y=o.createBackdrop(d,"md-sidenav-backdrop md-opaque ng-enter")),u.addClass("_md"),r(u),y&&r.inherit(y,u),u.on("$destroy",function(){y&&y.remove(),h.destroy()}),d.$on("$destroy",function(){y&&y.remove()}),d.$watch(_,f),d.$watch("isOpen",g),h.$toggleOpen=E}return{restrict:"E",scope:{isOpen:"=?mdIsOpen"},controller:"$mdSidenavController",compile:function(e){return e.addClass("md-closed"),e.attr("tabIndex","-1"),u}}}function r(e,t,n,o,i){var r=this;r.isOpen=function(){return!!e.isOpen},r.isLockedOpen=function(){return!!e.isLockedOpen},r.onClose=function(e){return r.onCloseCb=e,r},r.open=function(){return r.$toggleOpen(!0)},r.close=function(){return r.$toggleOpen(!1)},r.toggle=function(){return r.$toggleOpen(!e.isOpen)},r.$toggleOpen=function(t){return i.when(e.isOpen=t)},r.destroy=o.register(r,n.mdComponentId)}e.$inject=["$mdComponentRegistry","$mdUtil","$q","$log"],i.$inject=["$mdMedia","$mdUtil","$mdConstant","$mdTheming","$animate","$compile","$parse","$log","$q","$document"],r.$inject=["$scope","$element","$attrs","$mdComponentRegistry","$q"],t.module("material.components.sidenav",["material.core","material.components.backdrop"]).factory("$mdSidenav",e).directive("mdSidenav",i).directive("mdSidenavFocus",o).controller("$mdSidenavController",r)}(),function(){function e(){return{controller:function(){},compile:function(e){var o=e.find("md-slider");if(o){var i=o.attr("md-vertical");return i!==n&&e.attr("md-vertical",""),o.attr("flex")||o.attr("flex",""),function(e,n,o,i){function r(e){n.children().attr("disabled",e),n.find("input").attr("disabled",e)}n.addClass("_md");var a=t.noop;o.disabled?r(!0):o.ngDisabled&&(a=e.$watch(o.ngDisabled,function(e){r(e)})),e.$on("$destroy",function(){a()});var d;i.fitInputWidthToTextLength=function(e){var t=n[0].querySelector("md-input-container");if(t){var o=getComputedStyle(t),i=parseInt(o.minWidth),r=2*parseInt(o.padding);d=d||parseInt(o.maxWidth);var a=Math.max(d,i+r+i/2*e);t.style.maxWidth=a+"px"}}}}}}}function o(e,n,o,i,r,a,d,s,l,c){function m(e,n){var i=t.element(e[0].getElementsByClassName("md-slider-wrapper")),r=n.tabindex||0;return i.attr("tabindex",r),(n.disabled||n.ngDisabled)&&i.attr("tabindex",-1),i.attr("role","slider"),o.expect(e,"aria-label"),u}function u(o,m,u,p){function h(){M(),_()}function f(e){se=parseFloat(e),m.attr("aria-valuemin",e),h()}function g(e){le=parseFloat(e),m.attr("aria-valuemax",e),h()}function b(e){ce=parseFloat(e)}function v(e){me=S(parseInt(e),0,6)}function E(){m.attr("aria-disabled",!!Y())}function $(){if(ie&&!Y()&&!t.isUndefined(ce)){if(ce<=0){var e="Slider step value must be greater than zero when in discrete mode";throw l.error(e),new Error(e)}var o=Math.floor((le-se)/ce);ue||(ue=t.element("<canvas>").css("position","absolute"),J.append(ue),pe=ue[0].getContext("2d"));var i=y();!i||i.height||i.width||(M(),i=he),ue[0].width=i.width,ue[0].height=i.height;for(var r,a=0;a<=o;a++){var d=n.getComputedStyle(J[0]);pe.fillStyle=d.color||"black",r=Math.floor((oe?i.height:i.width)*(a/o)),pe.fillRect(oe?0:r-1,oe?r-1:0,oe?i.width:2,oe?2:i.height)}}}function C(){if(ue&&pe){var e=y();pe.clearRect(0,0,e.width,e.height)}}function M(){he=Q[0].getBoundingClientRect()}function y(){return te(),he}function T(e){if(!Y()){var t;(oe?e.keyCode===r.KEY_CODE.DOWN_ARROW:e.keyCode===r.KEY_CODE.LEFT_ARROW)?t=-ce:(oe?e.keyCode===r.KEY_CODE.UP_ARROW:e.keyCode===r.KEY_CODE.RIGHT_ARROW)&&(t=ce),t=re?-t:t,t&&((e.metaKey||e.ctrlKey||e.altKey)&&(t*=4),e.preventDefault(),e.stopPropagation(),o.$evalAsync(function(){x(W.$viewValue+t)}))}}function A(){$(),o.mouseActive=!0,ee.removeClass("md-focused"),c(function(){o.mouseActive=!1},100)}function w(){o.mouseActive===!1&&ee.addClass("md-focused")}function k(){ee.removeClass("md-focused"),m.removeClass("md-active"),C()}function x(e){W.$setViewValue(S(N(e)))}function _(){isNaN(W.$viewValue)&&(W.$viewValue=W.$modelValue),W.$viewValue=S(W.$viewValue);var e=z(W.$viewValue);o.modelValue=W.$viewValue,m.attr("aria-valuenow",W.$viewValue),D(e),G.text(W.$viewValue)}function S(e,n,o){if(t.isNumber(e))return n=t.isNumber(n)?n:se,o=t.isNumber(o)?o:le,Math.max(n,Math.min(o,e))}function N(e){if(t.isNumber(e)){var n=Math.round((e-se)/ce)*ce+se;return n=Math.round(n*Math.pow(10,me))/Math.pow(10,me),V&&V.fitInputWidthToTextLength&&i.debounce(function(){V.fitInputWidthToTextLength(n.toString().length)},100)(),n}}function D(e){e=U(e);var t=100*e+"%",n=re?100*(1-e)+"%":t;oe?X.css("bottom",t):i.bidiProperty(X,"left","right",t),Z.css(oe?"height":"width",n),m.toggleClass(re?"md-max":"md-min",0===e),m.toggleClass(re?"md-min":"md-max",1===e)}function H(e){if(!Y()){m.addClass("md-active"),m[0].focus(),M();var t=q(j(oe?e.pointer.y:e.pointer.x)),n=S(N(t));o.$apply(function(){x(n),D(z(n))})}}function I(e){if(!Y()){m.removeClass("md-dragging");var t=q(j(oe?e.pointer.y:e.pointer.x)),n=S(N(t));o.$apply(function(){x(n),_()})}}function O(e){Y()||(fe=!0,e.stopPropagation(),m.addClass("md-dragging"),P(e))}function R(e){fe&&(e.stopPropagation(),P(e))}function L(e){fe&&(e.stopPropagation(),fe=!1)}function P(e){ie?B(oe?e.pointer.y:e.pointer.x):F(oe?e.pointer.y:e.pointer.x)}function F(e){o.$evalAsync(function(){x(q(j(e)))})}function B(e){var t=q(j(e)),n=S(N(t));D(j(e)),G.text(n)}function U(e){return Math.max(0,Math.min(e||0,1))}function j(e){var t=oe?he.top:he.left,n=oe?he.height:he.width,o=(e-t)/n;return oe||"rtl"!==i.bidi()||(o=1-o),Math.max(0,Math.min(1,oe?1-o:o))}function q(e){var t=re?1-e:e;return se+t*(le-se)}function z(e){var t=(e-se)/(le-se);return re?1-t:t}a(m);var W=p[0]||{$setViewValue:function(e){this.$viewValue=e,this.$viewChangeListeners.forEach(function(e){e()})},$parsers:[],$formatters:[],$viewChangeListeners:[]},V=p[1],Y=(t.element(i.getClosest(m,"_md-slider-container",!0)),u.ngDisabled?t.bind(null,s(u.ngDisabled),o.$parent):function(){return m[0].hasAttribute("disabled")}),K=t.element(m[0].querySelector(".md-thumb")),G=t.element(m[0].querySelector(".md-thumb-text")),X=K.parent(),Q=t.element(m[0].querySelector(".md-track-container")),Z=t.element(m[0].querySelector(".md-track-fill")),J=t.element(m[0].querySelector(".md-track-ticks")),ee=t.element(m[0].getElementsByClassName("md-slider-wrapper")),te=(t.element(m[0].getElementsByClassName("md-slider-content")),i.throttle(M,5e3)),ne=3,oe=t.isDefined(u.mdVertical),ie=t.isDefined(u.mdDiscrete),re=t.isDefined(u.mdInvert);t.isDefined(u.min)?u.$observe("min",f):f(0),t.isDefined(u.max)?u.$observe("max",g):g(100),t.isDefined(u.step)?u.$observe("step",b):b(1),t.isDefined(u.round)?u.$observe("round",v):v(ne);var ae=t.noop;u.ngDisabled&&(ae=o.$parent.$watch(u.ngDisabled,E)),d.register(ee,"drag",{horizontal:!oe}),o.mouseActive=!1,ee.on("keydown",T).on("mousedown",A).on("focus",w).on("blur",k).on("$md.pressdown",H).on("$md.pressup",I).on("$md.dragstart",O).on("$md.drag",R).on("$md.dragend",L),setTimeout(h,0);var de=e.throttle(h);t.element(n).on("resize",de),o.$on("$destroy",function(){t.element(n).off("resize",de)}),W.$render=_,W.$viewChangeListeners.push(_),W.$formatters.push(S),W.$formatters.push(N);var se,le,ce,me,ue,pe,he={};M();var fe=!1}return{scope:{},require:["?ngModel","?^mdSliderContainer"],template:'<div class="md-slider-wrapper"><div class="md-slider-content"><div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div></div></div>',compile:m}}o.$inject=["$$rAF","$window","$mdAria","$mdUtil","$mdConstant","$mdTheming","$mdGesture","$parse","$log","$timeout"],t.module("material.components.slider",["material.core"]).directive("mdSlider",o).directive("mdSliderContainer",e)}(),function(){function e(e,t,o,i){function r(i){function r(e,t){t.addClass("md-sticky-clone");var n={element:e,clone:t};return f.items.push(n),o.nextTick(function(){p.prepend(n.clone)}),h(),function(){f.items.forEach(function(t,n){t.element[0]===e[0]&&(f.items.splice(n,1),t.clone.remove())}),h()}}function d(){f.items.forEach(s),f.items=f.items.sort(function(e,t){return e.top<t.top?-1:1});for(var e,t=p.prop("scrollTop"),n=f.items.length-1;n>=0;n--)if(t>f.items[n].top){e=f.items[n];break}c(e)}function s(e){var t=e.element[0];for(e.top=0,e.left=0,e.right=0;t&&t!==p[0];)e.top+=t.offsetTop,e.left+=t.offsetLeft,t.offsetParent&&(e.right+=t.offsetParent.offsetWidth-t.offsetWidth-t.offsetLeft),t=t.offsetParent;e.height=e.element.prop("offsetHeight");var i=o.floatingScrollbars()?"0":n;o.bidi(e.clone,"margin-left",e.left,i),o.bidi(e.clone,"margin-right",i,e.right)}function l(){var e=p.prop("scrollTop"),t=e>(l.prevScrollTop||0);if(l.prevScrollTop=e,0===e)return void c(null);if(t){if(f.next&&f.next.top<=e)return void c(f.next);if(f.current&&f.next&&f.next.top-e<=f.next.height)return void u(f.current,e+(f.next.top-f.next.height-e))}if(!t){if(f.current&&f.prev&&e<f.current.top)return void c(f.prev);if(f.next&&f.current&&e>=f.next.top-f.current.height)return void u(f.current,e+(f.next.top-e-f.current.height))}f.current&&u(f.current,e)}function c(e){if(f.current!==e){f.current&&(u(f.current,null),m(f.current,null)),e&&m(e,"active"),f.current=e;var t=f.items.indexOf(e);f.next=f.items[t+1],f.prev=f.items[t-1],m(f.next,"next"),m(f.prev,"prev")}}function m(e,t){e&&e.state!==t&&(e.state&&(e.clone.attr("sticky-prev-state",e.state),e.element.attr("sticky-prev-state",e.state)),e.clone.attr("sticky-state",t),e.element.attr("sticky-state",t),e.state=t)}function u(t,i){t&&(null===i||i===n?t.translateY&&(t.translateY=null,t.clone.css(e.CSS.TRANSFORM,"")):(t.translateY=i,o.bidi(t.clone,e.CSS.TRANSFORM,"translate3d("+t.left+"px,"+i+"px,0)","translateY("+i+"px)")))}var p=i.$element,h=t.throttle(d);a(p),p.on("$scrollstart",h),p.on("$scroll",l);var f;return f={prev:null,current:null,next:null,items:[],add:r,refreshElements:d}}function a(e){function n(){+o.now()-r>a?(i=!1,e.triggerHandler("$scrollend")):(e.triggerHandler("$scroll"),t.throttle(n))}var i,r,a=200;e.on("scroll touchmove",function(){i||(i=!0,t.throttle(n),e.triggerHandler("$scrollstart")),e.triggerHandler("$scroll"),r=+o.now()})}var d=o.checkStickySupport();return function(e,t,n){var o=t.controller("mdContent");if(o)if(d)t.css({position:d,top:0,"z-index":2});else{var a=o.$element.data("$$sticky");a||(a=r(o),o.$element.data("$$sticky",a));var s=n||i(t.clone())(e),l=a.add(t,s);e.$on("$destroy",l)}}}e.$inject=["$mdConstant","$$rAF","$mdUtil","$compile"],t.module("material.components.sticky",["material.core","material.components.content"]).factory("$mdSticky",e)}(),function(){function e(e,n,o,i){return{restrict:"E",replace:!0,transclude:!0,template:'<div class="md-subheader _md">  <div class="md-subheader-inner">    <div class="md-subheader-content"></div>  </div></div>',link:function(r,a,d,s,l){function c(e){return t.element(e[0].querySelector(".md-subheader-content"))}o(a),a.addClass("_md"),i.prefixer().removeAttribute(a,"ng-repeat");var m=a[0].outerHTML;l(r,function(e){c(a).append(e)}),a.hasClass("md-no-sticky")||l(r,function(t){var o=n('<div class="md-subheader-wrapper">'+m+"</div>")(r);i.nextTick(function(){c(o).append(t)}),e(r,a,o)})}}}e.$inject=["$mdSticky","$compile","$mdTheming","$mdUtil"],t.module("material.components.subheader",["material.core","material.components.sticky"]).directive("mdSubheader",e)}(),function(){function e(e){function t(e){function t(t,i,r){var a=e(r[n]);i.on(o,function(e){t.$applyAsync(function(){a(t,{$event:e})})})}return{restrict:"A",link:t}}t.$inject=["$parse"];var n="md"+e,o="$md."+e.toLowerCase();return t}t.module("material.components.swipe",["material.core"]).directive("mdSwipeLeft",e("SwipeLeft")).directive("mdSwipeRight",e("SwipeRight")).directive("mdSwipeUp",e("SwipeUp")).directive("mdSwipeDown",e("SwipeDown"))}(),function(){function e(e,n,o,i,r,a,d){function s(e,s){var c=l.compile(e,s).post;return e.addClass("md-dragging"),function(e,s,l,m){function u(t){g&&g(e)||(t.stopPropagation(),s.addClass("md-dragging"),E={width:b.prop("offsetWidth")})}function p(e){if(E){e.stopPropagation(),e.srcEvent&&e.srcEvent.preventDefault();var t=e.pointer.distanceX/E.width,n=m.$viewValue?1+t:t;n=Math.max(0,Math.min(1,n)),b.css(o.CSS.TRANSFORM,"translate3d("+100*n+"%,0,0)"),E.translate=n}}function h(t){if(E){t.stopPropagation(),s.removeClass("md-dragging"),b.css(o.CSS.TRANSFORM,"");var n=m.$viewValue?E.translate<.5:E.translate>.5;n&&f(!m.$viewValue),E=null,e.skipToggle=!0,d(function(){e.skipToggle=!1},1)}}function f(t){e.$apply(function(){m.$setViewValue(t),m.$render()})}m=m||n.fakeNgModel();var g=null;null!=l.disabled?g=function(){return!0}:l.ngDisabled&&(g=i(l.ngDisabled));var b=t.element(s[0].querySelector(".md-thumb-container")),v=t.element(s[0].querySelector(".md-container"));r(function(){s.removeClass("md-dragging")}),c(e,s,l,m),g&&e.$watch(g,function(e){s.attr("tabindex",e?-1:0)}),a.register(v,"drag"),v.on("$md.dragstart",u).on("$md.drag",p).on("$md.dragend",h);var E}}var l=e[0];return{restrict:"E",priority:210,transclude:!0,template:'<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',require:"?ngModel",compile:s}}e.$inject=["mdCheckboxDirective","$mdUtil","$mdConstant","$parse","$$rAF","$mdGesture","$timeout"],t.module("material.components.switch",["material.core","material.components.checkbox"]).directive("mdSwitch",e)}(),function(){t.module("material.components.tabs",["material.core","material.components.icon"])}(),function(){function e(e){return{restrict:"E",link:function(t,n){n.addClass("_md"),t.$on("$destroy",function(){e.destroy()})}}}function n(e){function n(e){i=e}function o(e,n,o,r){function a(t,a,d){i=d.textContent||d.content;var c=!r("gt-sm");return a=o.extractElementByName(a,"md-toast",!0),d.element=a,d.onSwipe=function(e,t){var i=e.type.replace("$md.",""),r=i.replace("swipe","");"down"===r&&d.position.indexOf("top")!=-1&&!c||"up"===r&&(d.position.indexOf("bottom")!=-1||c)||("left"!==r&&"right"!==r||!c)&&(a.addClass("md-"+i),o.nextTick(n.cancel))},d.openClass=s(d.position),a.addClass(d.toastClass),d.parent.addClass(d.openClass),o.hasComputedStyle(d.parent,"position","static")&&d.parent.css("position","relative"),a.on(l,d.onSwipe),a.addClass(c?"md-bottom":d.position.split(" ").map(function(e){return"md-"+e}).join(" ")),d.parent&&d.parent.addClass("md-toast-animating"),e.enter(a,d.parent).then(function(){d.parent&&d.parent.removeClass("md-toast-animating")})}function d(t,n,i){return n.off(l,i.onSwipe),i.parent&&i.parent.addClass("md-toast-animating"),i.openClass&&i.parent.removeClass(i.openClass),(1==i.$destroy?n.remove():e.leave(n)).then(function(){i.parent&&i.parent.removeClass("md-toast-animating"),o.hasComputedStyle(i.parent,"position","static")&&i.parent.css("position","")})}function s(e){return r("gt-xs")?"md-toast-open-"+(e.indexOf("top")>-1?"top":"bottom"):"md-toast-open-bottom"}var l="$md.swipeleft $md.swiperight $md.swipeup $md.swipedown";return{onShow:a,onRemove:d,toastClass:"",position:"bottom left",themable:!0,hideDelay:3e3,autoWrap:!0,transformTemplate:function(e,n){var o=n.autoWrap&&e&&!/md-toast-content/g.test(e);if(o){var i=document.createElement("md-template");i.innerHTML=e;for(var r=0;r<i.children.length;r++)if("MD-TOAST"===i.children[r].nodeName){var a=t.element('<div class="md-toast-content">');a.append(t.element(i.children[r].childNodes)),i.children[r].appendChild(a[0])}return i.innerHTML}return e||""}}}o.$inject=["$animate","$mdToast","$mdUtil","$mdMedia"];var i,r="ok",a=e("$mdToast").setDefaults({methods:["position","hideDelay","capsule","parent","position","toastClass"],options:o}).addPreset("simple",{argOption:"textContent",methods:["textContent","content","action","highlightAction","highlightClass","theme","parent"],options:["$mdToast","$mdTheming",function(e,t){return{template:'<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">  <div class="md-toast-content">    <span class="md-toast-text" role="alert" aria-relevant="all" aria-atomic="true">      {{ toast.content }}    </span>    <md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()"         ng-class="highlightClasses">      {{ toast.action }}    </md-button>  </div></md-toast>',controller:["$scope",function(t){var n=this;n.highlightAction&&(t.highlightClasses=["md-highlight",n.highlightClass]),t.$watch(function(){return i},function(){n.content=i}),this.resolve=function(){e.hide(r)}}],theme:t.defaultTheme(),controllerAs:"toast",bindToController:!0}}]}).addMethod("updateTextContent",n).addMethod("updateContent",n);return a}e.$inject=["$mdToast"],n.$inject=["$$interimElementProvider"],t.module("material.components.toast",["material.core","material.components.button"]).directive("mdToast",e).provider("$mdToast",n)}(),function(){function e(e,n,o,i,r){var a=t.bind(null,o.supplant,"translate3d(0,{0}px,0)");return{template:"",restrict:"E",link:function(d,s,l){function c(){function i(e){var t=s.parent().find("md-content");!f&&t.length&&c(null,t),e=d.$eval(e),e===!1?g():g=u()}function c(e,t){t&&s.parent()[0]===t.parent()[0]&&(f&&f.off("scroll",$),f=t,g=u())}function m(e){var t=e?e.target.scrollTop:v;C(),b=Math.min(h/E,Math.max(0,b+t-v)),s.css(n.CSS.TRANSFORM,a([-b*E])),f.css(n.CSS.TRANSFORM,a([(h-b)*E])),v=t,o.nextTick(function(){var e=s.hasClass("md-whiteframe-z1");e&&!b?r.removeClass(s,"md-whiteframe-z1"):!e&&b&&r.addClass(s,"md-whiteframe-z1")})}function u(){return f?(f.on("scroll",$),f.attr("scroll-shrink","true"),o.nextTick(p,!1),function(){f.off("scroll",$),f.attr("scroll-shrink","false"),p()}):t.noop}function p(){h=s.prop("offsetHeight");var e=-h*E+"px";f.css({"margin-top":e,"margin-bottom":e}),m()}var h,f,g=t.noop,b=0,v=0,E=l.mdShrinkSpeedFactor||.5,$=e.throttle(m),C=o.debounce(p,5e3);d.$on("$mdContentLoaded",c),l.$observe("mdScrollShrink",i),l.ngShow&&d.$watch(l.ngShow,p),l.ngHide&&d.$watch(l.ngHide,p),d.$on("$destroy",g)}s.addClass("_md"),i(s),o.nextTick(function(){s.addClass("_md-toolbar-transitions")},!1),t.isDefined(l.mdScrollShrink)&&c()}}}e.$inject=["$$rAF","$mdConstant","$mdUtil","$mdTheming","$animate"],t.module("material.components.toolbar",["material.core","material.components.content"]).directive("mdToolbar",e)}(),function(){function e(e,n,o,i,r,a,d,s,l,c){function m(d,l,m){function b(){d.delay=d.delay||f}function v(){var e="center top";switch(d.direction){case"left":e="right center";break;case"right":e="left center";break;case"top":e="center bottom";break;case"bottom":e="center top"}S.css("transform-origin",e)}function E(e){e?A():w()}function $(){if(l[0]&&"MutationObserver"in n){var e=new MutationObserver(function(e){e.forEach(function(e){"md-visible"===e.attributeName&&(d.visibleWatcher||(d.visibleWatcher=d.$watch("visible",E))),"md-direction"===e.attributeName&&k(d.direction)})});e.observe(l[0],{attributes:!0}),m.hasOwnProperty("mdVisible")&&(d.visibleWatcher=d.$watch("visible",E))}else d.visibleWatcher=d.$watch("visible",E),d.$watch("direction",k);var t=function(){d.$destroy()};l.one("$destroy",t),_.one("$destroy",t),d.$on("$destroy",function(){T(!1),l.remove(),e&&e.disconnect()}),l.text().indexOf(c.startSymbol())>-1&&d.$watch(function(){return l.text().trim()},C)}function C(e){if((e||!_.attr("aria-label"))&&!_.text().trim()){var t=e||l.text().trim(),n=c(t)(_.scope());_.attr("aria-label",n)}}function M(){l.detach(),l.attr("role","tooltip")}function y(){function o(){T(!1)}var a=!1;if(_[0]&&"MutationObserver"in n){var s=new MutationObserver(function(e){e.some(function(e){return"disabled"===e.attributeName&&_[0].disabled})&&r.nextTick(function(){T(!1)})});s.observe(_[0],{attributes:!0})}var l=function(){c=document.activeElement===_[0]},c=!1;t.element(n).on("blur",l).on("resize",H),document.addEventListener("scroll",o,!0),d.$on("$destroy",function(){t.element(n).off("blur",l).off("resize",H),_.off(u,h).off(p,f).off("mousedown",g),f(),document.removeEventListener("scroll",o,!0),s&&s.disconnect()});var h=function(e){"focus"===e.type&&c?c=!1:d.visible||(_.on(p,f),T(!0),"touchstart"===e.type&&_.one("touchend",function(){r.nextTick(function(){i.one("touchend",f)},!1)}))},f=function(){var t=d.hasOwnProperty("autohide")?d.autohide:m.hasOwnProperty("mdAutohide");(t||a||i[0].activeElement!==_[0])&&(D&&(e.cancel(D),T.queued=!1,D=null),_.off(p,f),_.triggerHandler("blur"),T(!1)),a=!1},g=function(){a=!0};_.on("mousedown",g),_.on(u,h)}function T(t){T.queued&&T.value===!!t||!T.queued&&d.visible===!!t||(T.value=!!t,T.queued||(t?(T.queued=!0,D=e(function(){d.visible=T.value,T.queued=!1,D=null,d.visibleWatcher||E(d.visible)},d.delay)):r.nextTick(function(){d.visible=!1,d.visibleWatcher||E(!1)})))}function A(){if(l[0].textContent.trim()){if(l.css({top:0,left:0}),N.append(l),r.hasComputedStyle(l,"display","none"))return d.visible=!1,void l.detach();k(),s.addClass(S,h).then(function(){l.addClass(h)})}}function w(){s.removeClass(S,h).then(function(){l.removeClass(h),d.visible||l.detach()})}function k(){d.visible&&(v(),x())}function x(){function e(e){var t={left:e.left,top:e.top};return t.left=Math.min(t.left,N.prop("scrollWidth")-n.width-g),t.left=Math.max(t.left,g),t.top=Math.min(t.top,N.prop("scrollHeight")-n.height-g),t.top=Math.max(t.top,g),t}function t(e){return"left"===e?{left:o.left-n.width-g,top:o.top+o.height/2-n.height/2}:"right"===e?{left:o.left+o.width+g,top:o.top+o.height/2-n.height/2}:"top"===e?{left:o.left+o.width/2-n.width/2,top:o.top-n.height-g}:{left:o.left+o.width/2-n.width/2,top:o.top+o.height+g}}var n=r.offsetRect(l,N),o=r.offsetRect(_,N),i=t(d.direction),a=l.prop("offsetParent");d.direction?i=e(i):a&&i.top>a.scrollHeight-n.height-g&&(i=e(t("top"))),l.css({left:i.left+"px",top:i.top+"px"})}a(l);var _=r.getParentWithPointerEvents(l),S=t.element(l[0].getElementsByClassName("md-content")[0]),N=t.element(document.body),D=null,H=o.throttle(function(){k()});s.pin&&s.pin(l,_),b(),M(),y(),v(),$(),C()}var u="focus touchstart mouseenter",p="blur touchcancel mouseleave",h="md-show",f=0,g=8;return{restrict:"E",transclude:!0,priority:210,template:'<div class="md-content _md" ng-transclude></div>',scope:{delay:"=?mdDelay",visible:"=?mdVisible",autohide:"=?mdAutohide",direction:"@?mdDirection"},compile:function(e,t){return t.mdDirection||t.$set("mdDirection","bottom"),m}}}e.$inject=["$timeout","$window","$$rAF","$document","$mdUtil","$mdTheming","$rootElement","$animate","$q","$interpolate"],t.module("material.components.tooltip",["material.core"]).directive("mdTooltip",e)}(),function(){function e(){return{controller:o,template:n,compile:function(e,t){e.addClass("md-virtual-repeat-container").addClass(t.hasOwnProperty("mdOrientHorizontal")?"md-orient-horizontal":"md-orient-vertical")}}}function n(e){return'<div class="md-virtual-repeat-scroller"><div class="md-virtual-repeat-sizer"></div><div class="md-virtual-repeat-offsetter">'+e[0].innerHTML+"</div></div>"}function o(e,n,o,i,r,a,d,s){this.$rootScope=i,this.$scope=a,this.$element=d,this.$attrs=s,this.size=0,this.scrollSize=0,this.scrollOffset=0,this.horizontal=this.$attrs.hasOwnProperty("mdOrientHorizontal"),this.repeater=null,this.autoShrink=this.$attrs.hasOwnProperty("mdAutoShrink"),this.autoShrinkMin=parseInt(this.$attrs.mdAutoShrinkMin,10)||0,this.originalSize=null,this.offsetSize=parseInt(this.$attrs.mdOffsetSize,10)||0,this.oldElementSize=null,this.$attrs.mdTopIndex?(this.bindTopIndex=o(this.$attrs.mdTopIndex),this.topIndex=this.bindTopIndex(this.$scope),t.isDefined(this.topIndex)||(this.topIndex=0,this.bindTopIndex.assign(this.$scope,0)),this.$scope.$watch(this.bindTopIndex,t.bind(this,function(e){e!==this.topIndex&&this.scrollToIndex(e)}))):this.topIndex=0,this.scroller=d[0].querySelector(".md-virtual-repeat-scroller"),this.sizer=this.scroller.querySelector(".md-virtual-repeat-sizer"),this.offsetter=this.scroller.querySelector(".md-virtual-repeat-offsetter");var l=t.bind(this,this.updateSize);e(t.bind(this,function(){l();var e=n.debounce(l,10,null,!1),o=t.element(r);this.size||e(),o.on("resize",e),a.$on("$destroy",function(){o.off("resize",e)}),a.$emit("$md-resize-enable"),a.$on("$md-resize",l)}))}function i(e){return{controller:r,priority:1e3,require:["mdVirtualRepeat","^^mdVirtualRepeatContainer"],restrict:"A",terminal:!0,transclude:"element",compile:function(t,n){var o=n.mdVirtualRepeat,i=o.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/),r=i[1],a=e(i[2]),d=n.mdExtraName&&e(n.mdExtraName);return function(e,t,n,o,i){o[0].link_(o[1],i,r,a,d)}}}}function r(e,n,o,i,r,a,d,s){this.$scope=e,this.$element=n,this.$attrs=o,this.$browser=i,this.$document=r,this.$rootScope=a,this.$$rAF=d,this.onDemand=s.parseAttributeBoolean(o.mdOnDemand),this.browserCheckUrlChange=i.$$checkUrlChange,this.newStartIndex=0,this.newEndIndex=0,this.newVisibleEnd=0,this.startIndex=0,this.endIndex=0,this.itemSize=e.$eval(o.mdItemSize)||null,this.isFirstRender=!0,this.isVirtualRepeatUpdating_=!1,this.itemsLength=0,this.unwatchItemSize_=t.noop,this.blocks={},this.pooledBlocks=[],e.$on("$destroy",t.bind(this,this.cleanupBlocks_))}function a(e){if(!t.isFunction(e.getItemAtIndex)||!t.isFunction(e.getLength))throw Error("When md-on-demand is enabled, the Object passed to md-virtual-repeat must implement functions getItemAtIndex() and getLength() ");this.model=e}o.$inject=["$$rAF","$mdUtil","$parse","$rootScope","$window","$scope","$element","$attrs"],r.$inject=["$scope","$element","$attrs","$browser","$document","$rootScope","$$rAF","$mdUtil"],i.$inject=["$parse"],t.module("material.components.virtualRepeat",["material.core","material.components.showHide"]).directive("mdVirtualRepeatContainer",e).directive("mdVirtualRepeat",i);var d=1533917,s=3;o.prototype.register=function(e){this.repeater=e,t.element(this.scroller).on("scroll wheel touchmove touchend",t.bind(this,this.handleScroll_))},o.prototype.isHorizontal=function(){return this.horizontal},o.prototype.getSize=function(){return this.size},o.prototype.setSize_=function(e){var t=this.getDimensionName_();this.size=e,this.$element[0].style[t]=e+"px"},o.prototype.unsetSize_=function(){this.$element[0].style[this.getDimensionName_()]=this.oldElementSize,this.oldElementSize=null},o.prototype.updateSize=function(){this.originalSize||(this.size=this.isHorizontal()?this.$element[0].clientWidth:this.$element[0].clientHeight,this.handleScroll_(),this.repeater&&this.repeater.containerUpdated())},o.prototype.getScrollSize=function(){return this.scrollSize},o.prototype.getDimensionName_=function(){return this.isHorizontal()?"width":"height"},o.prototype.sizeScroller_=function(e){var t=this.getDimensionName_(),n=this.isHorizontal()?"height":"width";if(this.sizer.innerHTML="",e<d)this.sizer.style[t]=e+"px";else{this.sizer.style[t]="auto",this.sizer.style[n]="auto";
var o=Math.floor(e/d),i=document.createElement("div");i.style[t]="1533917px",i.style[n]="1px";for(var r=0;r<o;r++)this.sizer.appendChild(i.cloneNode(!1));i.style[t]=e-o*d+"px",this.sizer.appendChild(i)}},o.prototype.autoShrink_=function(e){var t=Math.max(e,this.autoShrinkMin*this.repeater.getItemSize());if(this.autoShrink&&t!==this.size){null===this.oldElementSize&&(this.oldElementSize=this.$element[0].style[this.getDimensionName_()]);var n=this.originalSize||this.size;if(!n||t<n)this.originalSize||(this.originalSize=this.size),this.setSize_(t);else if(null!==this.originalSize){this.unsetSize_();var o=this.originalSize;this.originalSize=null,o||this.updateSize(),this.setSize_(o||this.size)}this.repeater.containerUpdated()}},o.prototype.setScrollSize=function(e){var t=e+this.offsetSize;this.scrollSize!==t&&(this.sizeScroller_(t),this.autoShrink_(t),this.scrollSize=t)},o.prototype.getScrollOffset=function(){return this.scrollOffset},o.prototype.scrollTo=function(e){this.scroller[this.isHorizontal()?"scrollLeft":"scrollTop"]=e,this.handleScroll_()},o.prototype.scrollToIndex=function(e){var t=this.repeater.getItemSize(),n=this.repeater.itemsLength;e>n&&(e=n-1),this.scrollTo(t*e)},o.prototype.resetScroll=function(){this.scrollTo(0)},o.prototype.handleScroll_=function(){var e=t.element(document)[0],n="rtl"!=e.dir&&"rtl"!=e.body.dir;n||this.maxSize||(this.scroller.scrollLeft=this.scrollSize,this.maxSize=this.scroller.scrollLeft);var o=this.isHorizontal()?n?this.scroller.scrollLeft:this.maxSize-this.scroller.scrollLeft:this.scroller.scrollTop;if(!(o===this.scrollOffset||o>this.scrollSize-this.size)){var i=this.repeater.getItemSize();if(i){var r=Math.max(0,Math.floor(o/i)-s),a=(this.isHorizontal()?"translateX(":"translateY(")+(!this.isHorizontal()||n?r*i:-(r*i))+"px)";if(this.scrollOffset=o,this.offsetter.style.webkitTransform=a,this.offsetter.style.transform=a,this.bindTopIndex){var d=Math.floor(o/i);d!==this.topIndex&&d<this.repeater.getItemCount()&&(this.topIndex=d,this.bindTopIndex.assign(this.$scope,d),this.$rootScope.$$phase||this.$scope.$digest())}this.repeater.containerUpdated()}}},r.Block,r.prototype.link_=function(e,n,o,i,r){this.container=e,this.transclude=n,this.repeatName=o,this.rawRepeatListExpression=i,this.extraName=r,this.sized=!1,this.repeatListExpression=t.bind(this,this.repeatListExpression_),this.container.register(this)},r.prototype.cleanupBlocks_=function(){t.forEach(this.pooledBlocks,function(e){e.element.remove()})},r.prototype.readItemSize_=function(){if(!this.itemSize){this.items=this.repeatListExpression(this.$scope),this.parentNode=this.$element[0].parentNode;var e=this.getBlock_(0);e.element[0].parentNode||this.parentNode.appendChild(e.element[0]),this.itemSize=e.element[0][this.container.isHorizontal()?"offsetWidth":"offsetHeight"]||null,this.blocks[0]=e,this.poolBlock_(0),this.itemSize&&this.containerUpdated()}},r.prototype.repeatListExpression_=function(e){var t=this.rawRepeatListExpression(e);if(this.onDemand&&t){var n=new a(t);return n.$$includeIndexes(this.newStartIndex,this.newVisibleEnd),n}return t},r.prototype.containerUpdated=function(){return this.itemSize?(this.sized||(this.items=this.repeatListExpression(this.$scope)),this.sized||(this.unwatchItemSize_(),this.sized=!0,this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,function(e,t){this.isVirtualRepeatUpdating_||this.virtualRepeatUpdate_(e,t)}))),this.updateIndexes_(),void((this.newStartIndex!==this.startIndex||this.newEndIndex!==this.endIndex||this.container.getScrollOffset()>this.container.getScrollSize())&&(this.items instanceof a&&this.items.$$includeIndexes(this.newStartIndex,this.newEndIndex),this.virtualRepeatUpdate_(this.items,this.items)))):(this.unwatchItemSize_&&this.unwatchItemSize_!==t.noop&&this.unwatchItemSize_(),this.unwatchItemSize_=this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,function(e){e&&e.length&&this.readItemSize_()})),void(this.$rootScope.$$phase||this.$scope.$digest()))},r.prototype.getItemSize=function(){return this.itemSize},r.prototype.getItemCount=function(){return this.itemsLength},r.prototype.virtualRepeatUpdate_=function(e,n){this.isVirtualRepeatUpdating_=!0;var o=e&&e.length||0,i=!1;if(this.items&&o<this.items.length&&0!==this.container.getScrollOffset()){this.items=e;var r=this.container.getScrollOffset();this.container.resetScroll(),this.container.scrollTo(r)}if(o!==this.itemsLength&&(i=!0,this.itemsLength=o),this.items=e,(e!==n||i)&&this.updateIndexes_(),this.parentNode=this.$element[0].parentNode,i&&this.container.setScrollSize(o*this.itemSize),this.isFirstRender){this.isFirstRender=!1;var a=this.$attrs.mdStartIndex?this.$scope.$eval(this.$attrs.mdStartIndex):this.container.topIndex;this.container.scrollToIndex(a)}Object.keys(this.blocks).forEach(function(e){var t=parseInt(e,10);(t<this.newStartIndex||t>=this.newEndIndex)&&this.poolBlock_(t)},this),this.$browser.$$checkUrlChange=t.noop;var d,s,l=[],c=[];for(d=this.newStartIndex;d<this.newEndIndex&&null==this.blocks[d];d++)s=this.getBlock_(d),this.updateBlock_(s,d),l.push(s);for(;null!=this.blocks[d];d++)this.updateBlock_(this.blocks[d],d);for(var m=d-1;d<this.newEndIndex;d++)s=this.getBlock_(d),this.updateBlock_(s,d),c.push(s);l.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(l),this.$element[0].nextSibling),c.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(c),this.blocks[m]&&this.blocks[m].element[0].nextSibling),this.$browser.$$checkUrlChange=this.browserCheckUrlChange,this.startIndex=this.newStartIndex,this.endIndex=this.newEndIndex,this.isVirtualRepeatUpdating_=!1},r.prototype.getBlock_=function(e){if(this.pooledBlocks.length)return this.pooledBlocks.pop();var n;return this.transclude(t.bind(this,function(t,o){n={element:t,"new":!0,scope:o},this.updateScope_(o,e),this.parentNode.appendChild(t[0])})),n},r.prototype.updateBlock_=function(e,t){this.blocks[t]=e,(e["new"]||e.scope.$index!==t||e.scope[this.repeatName]!==this.items[t])&&(e["new"]=!1,this.updateScope_(e.scope,t),this.$rootScope.$$phase||e.scope.$digest())},r.prototype.updateScope_=function(e,t){e.$index=t,e[this.repeatName]=this.items&&this.items[t],this.extraName&&(e[this.extraName(this.$scope)]=this.items[t])},r.prototype.poolBlock_=function(e){this.pooledBlocks.push(this.blocks[e]),this.parentNode.removeChild(this.blocks[e].element[0]),delete this.blocks[e]},r.prototype.domFragmentFromBlocks_=function(e){var t=this.$document[0].createDocumentFragment();return e.forEach(function(e){t.appendChild(e.element[0])}),t},r.prototype.updateIndexes_=function(){var e=this.items?this.items.length:0,t=Math.ceil(this.container.getSize()/this.itemSize);this.newStartIndex=Math.max(0,Math.min(e-t,Math.floor(this.container.getScrollOffset()/this.itemSize))),this.newVisibleEnd=this.newStartIndex+t+s,this.newEndIndex=Math.min(e,this.newVisibleEnd),this.newStartIndex=Math.max(0,this.newStartIndex-s)},a.prototype.$$includeIndexes=function(e,t){for(var n=e;n<t;n++)this.hasOwnProperty(n)||(this[n]=this.model.getItemAtIndex(n));this.length=this.model.getLength()}}(),function(){function e(e){function t(t,a,d){var s="";d.$observe("mdWhiteframe",function(t){t=parseInt(t,10)||r,t!=n&&(t>i||t<o)&&(e.warn("md-whiteframe attribute value is invalid. It should be a number between "+o+" and "+i,a[0]),t=r);var l=t==n?"":"md-whiteframe-"+t+"dp";d.$updateClass(l,s),s=l})}var n=-1,o=1,i=24,r=4;return{link:t}}e.$inject=["$log"],t.module("material.components.whiteframe",["material.core"]).directive("mdWhiteframe",e)}(),function(){function e(e,o,d,s,l,c,m,u,p,h,f){function g(){d.initOptionalProperties(e,p,{searchText:"",selectedItem:null}),l(o),C(),d.nextTick(function(){y(),E(),e.autofocus&&o.on("focus",$)})}function b(){e.requireMatch&&Se&&Se.$setValidity("md-require-match",!!e.selectedItem)}function v(){function t(){var e=0,t=o.find("md-input-container");if(t.length){var n=t.find("input");e=t.prop("offsetHeight"),e-=n.prop("offsetTop"),e-=n.prop("offsetHeight"),e+=t.prop("offsetTop")}return e}function n(){var e=Me.scrollContainer.getBoundingClientRect(),t={};e.right>m.right-r&&(t.left=l.right-e.width+"px"),Me.$.scrollContainer.css(t)}if(!Me)return d.nextTick(v,!1,e);var s,l=Me.wrap.getBoundingClientRect(),c=Me.snap.getBoundingClientRect(),m=Me.root.getBoundingClientRect(),u=c.bottom-m.top,h=m.bottom-c.top,f=l.left-m.left,g=l.width,b=t();p.mdFloatingLabel&&(f+=a,g-=2*a),s={left:f+"px",minWidth:g+"px",maxWidth:Math.max(l.right-m.left,m.right-l.left)-r+"px"},u>h&&m.height-l.bottom-r<i?(s.top="auto",s.bottom=h+"px",s.maxHeight=Math.min(i,l.top-m.top-r)+"px"):(s.top=u-b+"px",s.bottom="auto",s.maxHeight=Math.min(i,m.bottom+d.scrollTop()-l.bottom-r)+"px"),Me.$.scrollContainer.css(s),d.nextTick(n,!1)}function E(){Me.$.root.length&&(l(Me.$.scrollContainer),Me.$.scrollContainer.detach(),Me.$.root.append(Me.$.scrollContainer),m.pin&&m.pin(Me.$.scrollContainer,u))}function $(){Me.input.focus()}function C(){var n=parseInt(e.delay,10)||0;p.$observe("disabled",function(e){Ee.isDisabled=d.parseAttributeBoolean(e,!1)}),p.$observe("required",function(e){Ee.isRequired=d.parseAttributeBoolean(e,!1)}),p.$observe("readonly",function(e){Ee.isReadonly=d.parseAttributeBoolean(e,!1)}),e.$watch("searchText",n?d.debounce(L,n):L),e.$watch("selectedItem",N),t.element(c).on("resize",v),e.$on("$destroy",M)}function M(){if(Ee.hidden||d.enableScrolling(),t.element(c).off("resize",v),Me){var e=["ul","scroller","scrollContainer","input"];t.forEach(e,function(e){Me.$[e].remove()})}}function y(){Me={main:o[0],scrollContainer:o[0].querySelector(".md-virtual-repeat-container"),scroller:o[0].querySelector(".md-virtual-repeat-scroller"),ul:o.find("ul")[0],input:o.find("input")[0],wrap:o.find("md-autocomplete-wrap")[0],root:document.body},Me.li=Me.ul.getElementsByTagName("li"),Me.snap=T(),Me.$=A(Me),Se=Me.$.input.controller("ngModel")}function T(){for(var e=o;e.length;e=e.parent())if(t.isDefined(e.attr("md-autocomplete-snap")))return e[0];return Me.wrap}function A(e){var n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=t.element(e[o]));return n}function w(e,n){!e&&n?(v(),Me&&(d.disableScrollAround(Me.ul),_e=k(t.element(Me.wrap)))):e&&!n&&(d.enableScrolling(),_e&&(_e(),_e=null))}function k(e){function t(e){e.preventDefault()}return e.on("wheel",t),e.on("touchmove",t),function(){e.off("wheel",t),e.off("touchmove",t)}}function x(){Te=!0}function _(){we||Ee.hidden||Me.input.focus(),Te=!1,Ee.hidden=Y()}function S(){Me.input.focus()}function N(t,n){b(),t?q(t).then(function(o){e.searchText=o,I(t,n)}):n&&e.searchText&&q(n).then(function(t){t.toString().toLowerCase()===e.searchText.toLowerCase()&&(e.searchText="")}),t!==n&&D()}function D(){t.isFunction(e.itemChange)&&e.itemChange(z(e.selectedItem))}function H(){t.isFunction(e.textChange)&&e.textChange()}function I(e,t){Ae.forEach(function(n){n(e,t)})}function O(e){Ae.indexOf(e)==-1&&Ae.push(e)}function R(e){var t=Ae.indexOf(e);t!=-1&&Ae.splice(t,1)}function L(t,n){Ee.index=W(),t!==n&&(b(),q(e.selectedItem).then(function(o){t!==o&&(e.selectedItem=null,t!==n&&H(),ne()?fe():(Ee.matches=[],V(!1),le()))}))}function P(e){we=!1,Te||(Ee.hidden=Y(),ve("ngBlur",{$event:e}))}function F(e){e&&(Te=!1,we=!1),Me.input.blur()}function B(e){we=!0,K()&&ne()&&fe(),Ee.hidden=Y(),ve("ngFocus",{$event:e})}function U(t){switch(t.keyCode){case s.KEY_CODE.DOWN_ARROW:if(Ee.loading)return;t.stopPropagation(),t.preventDefault(),Ee.index=Math.min(Ee.index+1,Ee.matches.length-1),me(),le();break;case s.KEY_CODE.UP_ARROW:if(Ee.loading)return;t.stopPropagation(),t.preventDefault(),Ee.index=Ee.index<0?Ee.matches.length-1:Math.max(0,Ee.index-1),me(),le();break;case s.KEY_CODE.TAB:if(_(),Ee.hidden||Ee.loading||Ee.index<0||Ee.matches.length<1)return;ie(Ee.index);break;case s.KEY_CODE.ENTER:if(Ee.hidden||Ee.loading||Ee.index<0||Ee.matches.length<1)return;if(J())return;t.stopPropagation(),t.preventDefault(),ie(Ee.index);break;case s.KEY_CODE.ESCAPE:if(t.preventDefault(),!G())return;t.stopPropagation(),ae(),e.searchText&&X("clear")&&de(),Ee.hidden=!0,X("blur")&&F(!0)}}function j(){return t.isNumber(e.minLength)?e.minLength:1}function q(n){function o(t){return t&&e.itemText?e.itemText(z(t)):null}return h.when(o(n)||n).then(function(e){return e&&!t.isString(e)&&f.warn("md-autocomplete: Could not resolve display value to a string. Please check the `md-item-text` attribute."),e})}function z(e){if(!e)return n;var t={};return Ee.itemName&&(t[Ee.itemName]=e),t}function W(){return e.autoselect?0:-1}function V(e){Ee.loading!=e&&(Ee.loading=e),Ee.hidden=Y()}function Y(){return!K()||!Q()}function K(){return!(Ee.loading&&!Z())&&(!J()&&!!we)}function G(){return X("blur")||!Ee.hidden||Ee.loading||X("clear")&&e.searchText}function X(t){return!e.escapeOptions||e.escapeOptions.toLowerCase().indexOf(t)!==-1}function Q(){return ne()&&Z()||he()}function Z(){return!!Ee.matches.length}function J(){return!!Ee.scope.selectedItem}function ee(){return Ee.loading&&!J()}function te(){return q(Ee.matches[Ee.index])}function ne(){return(e.searchText||"").length>=j()}function oe(e,t,n){Object.defineProperty(Ee,e,{get:function(){return n},set:function(e){var o=n;n=e,t(e,o)}})}function ie(t){d.nextTick(function(){q(Ee.matches[t]).then(function(e){var t=Me.$.input.controller("ngModel");t.$setViewValue(e),t.$render()})["finally"](function(){e.selectedItem=Ee.matches[t],V(!1)})},!1)}function re(){ae(),de()}function ae(){Ee.index=0,Ee.matches=[]}function de(){V(!0),e.searchText="";var t=document.createEvent("CustomEvent");t.initCustomEvent("change",!0,!0,{value:""}),Me.input.dispatchEvent(t),Me.input.blur(),e.searchText="",Me.input.focus()}function se(n){function o(t){t&&(t=h.when(t),xe++,V(!0),d.nextTick(function(){t.then(i)["finally"](function(){0===--xe&&V(!1)})},!0,e))}function i(t){ye[a]=t,(n||"")===(e.searchText||"")&&ge(t)}var r=e.$parent.$eval(Ce),a=n.toLowerCase(),s=t.isArray(r),l=!!r.then;s?i(r):l&&o(r)}function le(){te().then(function(e){Ee.messages=[ce(),e]})}function ce(){if(ke===Ee.matches.length)return"";switch(ke=Ee.matches.length,Ee.matches.length){case 0:return"There are no matches available.";case 1:return"There is 1 match available.";default:return"There are "+Ee.matches.length+" matches available."}}function me(){if(Me.li[0]){var e=Me.li[0].offsetHeight,t=e*Ee.index,n=t+e,o=Me.scroller.clientHeight,i=Me.scroller.scrollTop;t<i?pe(t):n>i+o&&pe(n-o)}}function ue(){return 0!==xe}function pe(e){Me.$.scrollContainer.controller("mdVirtualRepeatContainer").scrollTo(e)}function he(){var e=(Ee.scope.searchText||"").length;return Ee.hasNotFound&&!Z()&&(!Ee.loading||ue())&&e>=j()&&(we||Te)&&!J()}function fe(){var t=e.searchText||"",n=t.toLowerCase();!e.noCache&&ye[n]?ge(ye[n]):se(t),Ee.hidden=Y()}function ge(t){Ee.matches=t,Ee.hidden=Y(),Ee.loading&&V(!1),e.selectOnMatch&&be(),le(),v()}function be(){var t=e.searchText,n=Ee.matches,o=n[0];1===n.length&&q(o).then(function(n){var o=t==n;e.matchInsensitive&&!o&&(o=t.toLowerCase()==n.toLowerCase()),o&&ie(0)})}function ve(t,n){p[t]&&e.$parent.$eval(p[t],n||{})}var Ee=this,$e=e.itemsExpr.split(/ in /i),Ce=$e[1],Me=null,ye={},Te=!1,Ae=[],we=!1,ke=0,xe=0,_e=null,Se=null;return oe("hidden",w,!0),Ee.scope=e,Ee.parent=e.$parent,Ee.itemName=$e[0],Ee.matches=[],Ee.loading=!1,Ee.hidden=!0,Ee.index=null,Ee.messages=[],Ee.id=d.nextUid(),Ee.isDisabled=null,Ee.isRequired=null,Ee.isReadonly=null,Ee.hasNotFound=!1,Ee.keydown=U,Ee.blur=P,Ee.focus=B,Ee.clear=re,Ee.select=ie,Ee.listEnter=x,Ee.listLeave=_,Ee.mouseUp=S,Ee.getCurrentDisplayValue=te,Ee.registerSelectedItemWatcher=O,Ee.unregisterSelectedItemWatcher=R,Ee.notFoundVisible=he,Ee.loadingIsVisible=ee,Ee.positionDropdown=v,g()}e.$inject=["$scope","$element","$mdUtil","$mdConstant","$mdTheming","$window","$animate","$rootElement","$attrs","$q","$log"],t.module("material.components.autocomplete").controller("MdAutocompleteCtrl",e);var o=41,i=5.5*o,r=8,a=2}(),function(){function e(e){return{controller:"MdAutocompleteCtrl",controllerAs:"$mdAutocompleteCtrl",scope:{inputName:"@mdInputName",inputMinlength:"@mdInputMinlength",inputMaxlength:"@mdInputMaxlength",searchText:"=?mdSearchText",selectedItem:"=?mdSelectedItem",itemsExpr:"@mdItems",itemText:"&mdItemText",placeholder:"@placeholder",noCache:"=?mdNoCache",requireMatch:"=?mdRequireMatch",selectOnMatch:"=?mdSelectOnMatch",matchInsensitive:"=?mdMatchCaseInsensitive",itemChange:"&?mdSelectedItemChange",textChange:"&?mdSearchTextChange",minLength:"=?mdMinLength",delay:"=?mdDelay",autofocus:"=?mdAutofocus",floatingLabel:"@?mdFloatingLabel",autoselect:"=?mdAutoselect",menuClass:"@?mdMenuClass",inputId:"@?mdInputId",escapeOptions:"@?mdEscapeOptions"},link:function(e,t,n,o){o.hasNotFound=!!t.attr("md-has-not-found")},template:function(t,n){function o(){var e=t.find("md-item-template").detach(),n=e.length?e.html():t.html();return e.length||t.empty(),"<md-autocomplete-parent-scope md-autocomplete-replace>"+n+"</md-autocomplete-parent-scope>"}function i(){var e=t.find("md-not-found").detach(),n=e.length?e.html():"";return n?'<li ng-if="$mdAutocompleteCtrl.notFoundVisible()"                         md-autocomplete-parent-scope>'+n+"</li>":""}function r(){return n.mdFloatingLabel?'            <md-input-container ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  '+(null!=l?'tabindex="'+l+'"':"")+'                  id="{{ inputId || \'fl-input-\' + $mdAutocompleteCtrl.id }}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="$mdAutocompleteCtrl.isRequired"                  ng-readonly="$mdAutocompleteCtrl.isReadonly"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-model-options="{ allowInvalid: true }"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur($event)"                  ng-focus="$mdAutocompleteCtrl.focus($event)"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  '+(null!=n.mdNoAsterisk?'md-no-asterisk="'+n.mdNoAsterisk+'"':"")+"                  "+(null!=n.mdSelectOnFocus?'md-select-on-focus=""':"")+'                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  role="combobox"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>'+s+"</div>            </md-input-container>":'            <input type="search"                '+(null!=l?'tabindex="'+l+'"':"")+'                id="{{ inputId || \'input-\' + $mdAutocompleteCtrl.id }}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="$mdAutocompleteCtrl.isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-readonly="$mdAutocompleteCtrl.isReadonly"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur($event)"                ng-focus="$mdAutocompleteCtrl.focus($event)"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                '+(null!=n.mdSelectOnFocus?'md-select-on-focus=""':"")+'                aria-label="{{placeholder}}"                aria-autocomplete="list"                role="combobox"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>            <button                type="button"                tabindex="-1"                ng-if="$mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled"                ng-click="$mdAutocompleteCtrl.clear($event)">              <md-icon md-svg-src="'+e.mdClose+'"></md-icon>              <span class="md-visually-hidden">Clear</span>            </button>                '}var a=i(),d=o(),s=t.html(),l=n.tabindex;return a&&t.attr("md-has-not-found",!0),t.attr("tabindex","-1"),"        <md-autocomplete-wrap            ng-class=\"{ 'md-whiteframe-z1': !floatingLabel, 'md-menu-showing': !$mdAutocompleteCtrl.hidden }\">          "+r()+'          <md-progress-linear              class="'+(n.mdFloatingLabel?"md-inline":"")+'"              ng-if="$mdAutocompleteCtrl.loadingIsVisible()"              md-mode="indeterminate"></md-progress-linear>          <md-virtual-repeat-container              md-auto-shrink              md-auto-shrink-min="1"              ng-mouseenter="$mdAutocompleteCtrl.listEnter()"              ng-mouseleave="$mdAutocompleteCtrl.listLeave()"              ng-mouseup="$mdAutocompleteCtrl.mouseUp()"              ng-hide="$mdAutocompleteCtrl.hidden"              class="md-autocomplete-suggestions-container md-whiteframe-z1"              ng-class="{ \'md-not-found\': $mdAutocompleteCtrl.notFoundVisible() }"              role="presentation">            <ul class="md-autocomplete-suggestions"                ng-class="::menuClass"                id="ul-{{$mdAutocompleteCtrl.id}}">              <li md-virtual-repeat="item in $mdAutocompleteCtrl.matches"                  ng-class="{ selected: $index === $mdAutocompleteCtrl.index }"                  ng-click="$mdAutocompleteCtrl.select($index)"                  md-extra-name="$mdAutocompleteCtrl.itemName">                  '+d+"                  </li>"+a+'            </ul>          </md-virtual-repeat-container>        </md-autocomplete-wrap>        <aria-status            class="md-visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages track by $index" ng-if="message">{{message}}</p>        </aria-status>'}}}e.$inject=["$$mdSvgRegistry"],t.module("material.components.autocomplete").directive("mdAutocomplete",e)}(),function(){function e(e,t){function n(e,n,o){return function(e,n,i){function r(n,o){s[o]=e[n],e.$watch(n,function(e){t.nextTick(function(){s[o]=e})})}function a(){var t=!1,n=!1;e.$watch(function(){n||t||(t=!0,e.$$postDigest(function(){n||s.$digest(),t=n=!1}))}),s.$watch(function(){n=!0})}var d=e.$mdAutocompleteCtrl,s=d.parent.$new(),l=d.itemName;r("$index","$index"),r("item",l),a(),o(s,function(e){n.after(e)})}}return{restrict:"AE",compile:n,terminal:!0,transclude:"element"}}e.$inject=["$compile","$mdUtil"],t.module("material.components.autocomplete").directive("mdAutocompleteParentScope",e)}(),function(){function e(e,t,n){this.$scope=e,this.$element=t,this.$attrs=n,this.regex=null}e.$inject=["$scope","$element","$attrs"],t.module("material.components.autocomplete").controller("MdHighlightCtrl",e),e.prototype.init=function(e,t){this.flags=this.$attrs.mdHighlightFlags||"",this.unregisterFn=this.$scope.$watch(function(n){return{term:e(n),contentText:t(n)}}.bind(this),this.onRender.bind(this),!0),this.$element.on("$destroy",this.unregisterFn)},e.prototype.onRender=function(e,t){var n=e.contentText;null!==this.regex&&e.term===t.term||(this.regex=this.createRegex(e.term,this.flags)),e.term?this.applyRegex(n):this.$element.text(n)},e.prototype.applyRegex=function(e){var n=this.resolveTokens(e);this.$element.empty(),n.forEach(function(e){if(e.isMatch){var n=t.element('<span class="highlight">').text(e.text);this.$element.append(n)}else this.$element.append(document.createTextNode(e))}.bind(this))},e.prototype.resolveTokens=function(e){function t(t,o){var i=e.slice(t,o);i&&n.push(i)}var n=[],o=0;return e.replace(this.regex,function(e,i){t(o,i),n.push({text:e,isMatch:!0}),o=i+e.length}),t(o),n},e.prototype.createRegex=function(e,t){var n="",o="",i=this.sanitizeRegex(e);return t.indexOf("^")>=0&&(n="^"),t.indexOf("$")>=0&&(o="$"),new RegExp(n+i+o,t.replace(/[$\^]/g,""))},e.prototype.sanitizeRegex=function(e){return e&&e.toString().replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g,"\\$&")}}(),function(){function e(e,t){return{terminal:!0,controller:"MdHighlightCtrl",compile:function(n,o){var i=t(o.mdHighlightText),r=e(n.html());return function(e,t,n,o){o.init(i,r)}}}}e.$inject=["$interpolate","$parse"],t.module("material.components.autocomplete").directive("mdHighlightText",e)}(),function(){function o(e,t,o,i,r){this.$scope=e,this.$element=t,this.$mdConstant=o,this.$timeout=i,this.$mdUtil=r,this.isEditting=!1,this.parentController=n,this.enableChipEdit=!1}o.$inject=["$scope","$element","$mdConstant","$timeout","$mdUtil"],t.module("material.components.chips").controller("MdChipCtrl",o),o.prototype.init=function(e){this.parentController=e,this.enableChipEdit=this.parentController.enableChipEdit,this.enableChipEdit&&(this.$element.on("keydown",this.chipKeyDown.bind(this)),this.$element.on("mousedown",this.chipMouseDown.bind(this)),this.getChipContent().addClass("_md-chip-content-edit-is-enabled"))},o.prototype.getChipContent=function(){var e=this.$element[0].getElementsByClassName("md-chip-content");return t.element(e[0])},o.prototype.getContentElement=function(){return t.element(this.getChipContent().children()[0])},o.prototype.getChipIndex=function(){return parseInt(this.$element.attr("index"))},o.prototype.goOutOfEditMode=function(){if(this.isEditting){this.isEditting=!1,this.$element.removeClass("_md-chip-editing"),this.getChipContent()[0].contentEditable="false";var e=this.getChipIndex(),t=this.getContentElement().text();t?(this.parentController.updateChipContents(e,this.getContentElement().text()),this.$mdUtil.nextTick(function(){this.parentController.selectedChip===e&&this.parentController.focusChip(e)}.bind(this))):this.parentController.removeChipAndFocusInput(e)}},o.prototype.selectNodeContents=function(t){var n,o;document.body.createTextRange?(n=document.body.createTextRange(),n.moveToElementText(t),n.select()):e.getSelection&&(o=e.getSelection(),n=document.createRange(),n.selectNodeContents(t),o.removeAllRanges(),o.addRange(n))},o.prototype.goInEditMode=function(){this.isEditting=!0,this.$element.addClass("_md-chip-editing"),this.getChipContent()[0].contentEditable="true",this.getChipContent().on("blur",function(){this.goOutOfEditMode()}.bind(this)),this.selectNodeContents(this.getChipContent()[0])},o.prototype.chipKeyDown=function(e){this.isEditting||e.keyCode!==this.$mdConstant.KEY_CODE.ENTER&&e.keyCode!==this.$mdConstant.KEY_CODE.SPACE?this.isEditting&&e.keyCode===this.$mdConstant.KEY_CODE.ENTER&&(e.preventDefault(),this.goOutOfEditMode()):(e.preventDefault(),this.goInEditMode())},o.prototype.chipMouseDown=function(){this.getChipIndex()==this.parentController.selectedChip&&this.enableChipEdit&&!this.isEditting&&this.goInEditMode()}}(),function(){function e(e,o){function i(n,i){return n.append(o.processTemplate(r)),function(n,o,i,r){var a=r.shift(),d=r.shift();e(o),a&&(d.init(a),t.element(o[0].querySelector(".md-chip-content")).on("blur",function(){a.resetSelectedChip(),a.$scope.$applyAsync()}))}}var r=o.processTemplate(n);return{restrict:"E",require:["^?mdChips","mdChip"],compile:i,controller:"MdChipCtrl"}}e.$inject=["$mdTheming","$mdUtil"],t.module("material.components.chips").directive("mdChip",e);var n='    <span ng-if="!$mdChipsCtrl.readonly" class="md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>'}(),function(){function e(e){function t(t,n,o,i){n.on("click",function(e){t.$apply(function(){i.removeChip(t.$$replacedScope.$index)})}),e(function(){n.attr({tabindex:-1,"aria-hidden":!0}),n.find("button").attr("tabindex","-1")})}return{restrict:"A",require:"^mdChips",scope:!1,link:t}}e.$inject=["$timeout"],t.module("material.components.chips").directive("mdChipRemove",e)}(),function(){function e(e){function t(t,n,o){var i=t.$parent.$mdChipsCtrl,r=i.parent.$new(!1,i.parent);r.$$replacedScope=t,r.$chip=t.$chip,r.$index=t.$index,r.$mdChipsCtrl=i;var a=i.$scope.$eval(o.mdChipTransclude);n.html(a),e(n.contents())(r)}return{restrict:"EA",terminal:!0,link:t,scope:!1}}e.$inject=["$compile"],t.module("material.components.chips").directive("mdChipTransclude",e)}(),function(){function e(e,t,n,o,i,r,a){this.$timeout=r,this.$mdConstant=n,this.$scope=e,this.parent=e.$parent,this.$log=o,this.$element=i,this.ngModelCtrl=null,this.userInputNgModelCtrl=null,this.autocompleteCtrl=null,this.userInputElement=null,this.items=[],this.selectedChip=-1,this.enableChipEdit=a.parseAttributeBoolean(t.mdEnableChipEdit),this.addOnBlur=a.parseAttributeBoolean(t.mdAddOnBlur),this.deleteHint="Press delete to remove this chip.",this.deleteButtonLabel="Remove",this.chipBuffer="",this.useTransformChip=!1,this.useOnAdd=!1,this.useOnRemove=!1}e.$inject=["$scope","$attrs","$mdConstant","$log","$element","$timeout","$mdUtil"],t.module("material.components.chips").controller("MdChipsCtrl",e),e.prototype.inputKeydown=function(e){var t=this.getChipBuffer();if(!(this.autocompleteCtrl&&e.isDefaultPrevented&&e.isDefaultPrevented())){if(e.keyCode===this.$mdConstant.KEY_CODE.BACKSPACE){if(0!==this.getCursorPosition(e.target))return;return e.preventDefault(),e.stopPropagation(),void(this.items.length&&this.selectAndFocusChipSafe(this.items.length-1))}if((!this.separatorKeys||this.separatorKeys.length<1)&&(this.separatorKeys=[this.$mdConstant.KEY_CODE.ENTER]),this.separatorKeys.indexOf(e.keyCode)!==-1){if(this.autocompleteCtrl&&this.requireMatch||!t)return;if(e.preventDefault(),this.hasMaxChipsReached())return;this.appendChip(t.trim()),this.resetChipBuffer()}}},e.prototype.getCursorPosition=function(e){try{if(e.selectionStart===e.selectionEnd)return e.selectionStart}catch(t){if(!e.value)return 0}},e.prototype.updateChipContents=function(e,t){e>=0&&e<this.items.length&&(this.items[e]=t,this.ngModelCtrl.$setDirty())},e.prototype.isEditingChip=function(){return!!this.$element[0].getElementsByClassName("_md-chip-editing").length},e.prototype.isRemovable=function(){return!!this.ngModelCtrl&&(this.readonly?this.removable:!t.isDefined(this.removable)||this.removable)},e.prototype.chipKeydown=function(e){if(!this.getChipBuffer()&&!this.isEditingChip())switch(e.keyCode){case this.$mdConstant.KEY_CODE.BACKSPACE:case this.$mdConstant.KEY_CODE.DELETE:if(this.selectedChip<0)return;if(e.preventDefault(),!this.isRemovable())return;this.removeAndSelectAdjacentChip(this.selectedChip);break;case this.$mdConstant.KEY_CODE.LEFT_ARROW:e.preventDefault(),this.selectedChip<0&&(this.selectedChip=this.items.length),this.items.length&&this.selectAndFocusChipSafe(this.selectedChip-1);break;case this.$mdConstant.KEY_CODE.RIGHT_ARROW:e.preventDefault(),this.selectAndFocusChipSafe(this.selectedChip+1);break;case this.$mdConstant.KEY_CODE.ESCAPE:case this.$mdConstant.KEY_CODE.TAB:if(this.selectedChip<0)return;e.preventDefault(),this.onFocus()}},e.prototype.getPlaceholder=function(){var e=this.items&&this.items.length&&(""==this.secondaryPlaceholder||this.secondaryPlaceholder);return e?this.secondaryPlaceholder:this.placeholder},e.prototype.removeAndSelectAdjacentChip=function(e){var n=this.getAdjacentChipIndex(e);this.removeChip(e),this.$timeout(t.bind(this,function(){this.selectAndFocusChipSafe(n)}))},e.prototype.resetSelectedChip=function(){this.selectedChip=-1},e.prototype.getAdjacentChipIndex=function(e){var t=this.items.length-1;return 0==t?-1:e==t?e-1:e},e.prototype.appendChip=function(e){if(this.useTransformChip&&this.transformChip){var n=this.transformChip({$chip:e});t.isDefined(n)&&(e=n)}if(t.isObject(e)){var o=this.items.some(function(n){return t.equals(e,n)});if(o)return}if(!(null==e||this.items.indexOf(e)+1)){var i=this.items.push(e);this.ngModelCtrl.$setDirty(),this.validateModel(),this.useOnAdd&&this.onAdd&&this.onAdd({$chip:e,$index:i})}},e.prototype.useTransformChipExpression=function(){this.useTransformChip=!0},e.prototype.useOnAddExpression=function(){this.useOnAdd=!0},e.prototype.useOnRemoveExpression=function(){this.useOnRemove=!0},e.prototype.useOnSelectExpression=function(){this.useOnSelect=!0;
},e.prototype.getChipBuffer=function(){return this.userInputElement?this.userInputNgModelCtrl?this.userInputNgModelCtrl.$viewValue:this.userInputElement[0].value:this.chipBuffer},e.prototype.resetChipBuffer=function(){this.userInputElement?this.userInputNgModelCtrl?(this.userInputNgModelCtrl.$setViewValue(""),this.userInputNgModelCtrl.$render()):this.userInputElement[0].value="":this.chipBuffer=""},e.prototype.hasMaxChipsReached=function(){return t.isString(this.maxChips)&&(this.maxChips=parseInt(this.maxChips,10)||0),this.maxChips>0&&this.items.length>=this.maxChips},e.prototype.validateModel=function(){this.ngModelCtrl.$setValidity("md-max-chips",!this.hasMaxChipsReached())},e.prototype.removeChip=function(e){var t=this.items.splice(e,1);this.ngModelCtrl.$setDirty(),this.validateModel(),t&&t.length&&this.useOnRemove&&this.onRemove&&this.onRemove({$chip:t[0],$index:e})},e.prototype.removeChipAndFocusInput=function(e){this.removeChip(e),this.autocompleteCtrl?(this.autocompleteCtrl.hidden=!0,this.$mdUtil.nextTick(this.onFocus.bind(this))):this.onFocus()},e.prototype.selectAndFocusChipSafe=function(e){return this.items.length?e===this.items.length?this.onFocus():(e=Math.max(e,0),e=Math.min(e,this.items.length-1),this.selectChip(e),void this.focusChip(e)):(this.selectChip(-1),void this.onFocus())},e.prototype.selectChip=function(e){e>=-1&&e<=this.items.length?(this.selectedChip=e,this.useOnSelect&&this.onSelect&&this.onSelect({$chip:this.items[this.selectedChip]})):this.$log.warn("Selected Chip index out of bounds; ignoring.")},e.prototype.selectAndFocusChip=function(e){this.selectChip(e),e!=-1&&this.focusChip(e)},e.prototype.focusChip=function(e){this.$element[0].querySelector('md-chip[index="'+e+'"] .md-chip-content').focus()},e.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.items=t.ngModelCtrl.$viewValue}},e.prototype.onFocus=function(){var e=this.$element[0].querySelector("input");e&&e.focus(),this.resetSelectedChip()},e.prototype.onInputFocus=function(){this.inputHasFocus=!0,this.resetSelectedChip()},e.prototype.onInputBlur=function(){this.inputHasFocus=!1;var e=this.getChipBuffer().trim();this.validateModel();var t=this.ngModelCtrl.$valid;this.userInputNgModelCtrl&&(t&=this.userInputNgModelCtrl.$valid),this.addOnBlur&&e&&t&&(this.appendChip(e),this.resetChipBuffer())},e.prototype.configureUserInput=function(e){this.userInputElement=e;var n=e.controller("ngModel");n!=this.ngModelCtrl&&(this.userInputNgModelCtrl=n);var o=this.$scope,i=this,r=function(e,n){o.$evalAsync(t.bind(i,n,e))};e.attr({tabindex:0}).on("keydown",function(e){r(e,i.inputKeydown)}).on("focus",function(e){r(e,i.onInputFocus)}).on("blur",function(e){r(e,i.onInputBlur)})},e.prototype.configureAutocomplete=function(e){e&&(this.autocompleteCtrl=e,e.registerSelectedItemWatcher(t.bind(this,function(e){if(e){if(this.hasMaxChipsReached())return;this.appendChip(e),this.resetChipBuffer()}})),this.$element.find("input").on("focus",t.bind(this,this.onInputFocus)).on("blur",t.bind(this,this.onInputBlur)))},e.prototype.hasFocus=function(){return this.inputHasFocus||this.selectedChip>=0}}(),function(){function e(e,t,a,d,s,l){function c(n,o){function i(e){if(o.ngModel){var t=r[0].querySelector(e);return t&&t.outerHTML}}var r=o.$mdUserTemplate;o.$mdUserTemplate=null;var c=i("md-chips>md-chip-template"),m=t.prefixer().buildList("md-chip-remove").map(function(e){return"md-chips>*["+e+"]"}).join(","),p=i(m)||u.remove,h=c||u["default"],f=i("md-chips>md-autocomplete")||i("md-chips>input")||u.input,g=r.find("md-chip");return r[0].querySelector("md-chip-template>*[md-chip-remove]")&&d.warn("invalid placement of md-chip-remove within md-chip-template."),function(n,i,r,d){t.initOptionalProperties(n,o),e(i);var m=d[0];if(c&&(m.enableChipEdit=!1),m.chipContentsTemplate=h,m.chipRemoveTemplate=p,m.chipInputTemplate=f,m.mdCloseIcon=l.mdClose,i.attr({"aria-hidden":!0,tabindex:-1}).on("focus",function(){m.onFocus()}),o.ngModel&&(m.configureNgModel(i.controller("ngModel")),r.mdTransformChip&&m.useTransformChipExpression(),r.mdOnAppend&&m.useOnAppendExpression(),r.mdOnAdd&&m.useOnAddExpression(),r.mdOnRemove&&m.useOnRemoveExpression(),r.mdOnSelect&&m.useOnSelectExpression(),f!=u.input&&n.$watch("$mdChipsCtrl.readonly",function(e){e||t.nextTick(function(){if(0===f.indexOf("<md-autocomplete")){var e=i.find("md-autocomplete");m.configureAutocomplete(e.controller("mdAutocomplete"))}m.configureUserInput(i.find("input"))})}),t.nextTick(function(){var e=i.find("input");e&&e.toggleClass("md-input",!0)})),g.length>0){var b=a(g.clone())(n.$parent);s(function(){i.find("md-chips-wrap").prepend(b)})}}}function m(){return{chips:t.processTemplate(n),input:t.processTemplate(o),"default":t.processTemplate(i),remove:t.processTemplate(r)}}var u=m();return{template:function(e,t){return t.$mdUserTemplate=e.clone(),u.chips},require:["mdChips"],restrict:"E",controller:"MdChipsCtrl",controllerAs:"$mdChipsCtrl",bindToController:!0,compile:c,scope:{readonly:"=readonly",removable:"=mdRemovable",placeholder:"@",secondaryPlaceholder:"@",maxChips:"@mdMaxChips",transformChip:"&mdTransformChip",onAppend:"&mdOnAppend",onAdd:"&mdOnAdd",onRemove:"&mdOnRemove",onSelect:"&mdOnSelect",deleteHint:"@",deleteButtonLabel:"@",separatorKeys:"=?mdSeparatorKeys",requireMatch:"=?mdRequireMatch"}}}e.$inject=["$mdTheming","$mdUtil","$compile","$log","$timeout","$$mdSvgRegistry"],t.module("material.components.chips").directive("mdChips",e);var n='      <md-chips-wrap          ng-keydown="$mdChipsCtrl.chipKeydown($event)"          ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus(),                       \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly,                      \'md-removable\': $mdChipsCtrl.isRemovable() }"          class="md-chips">        <md-chip ng-repeat="$chip in $mdChipsCtrl.items"            index="{{$index}}"            ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index, \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly}">          <div class="md-chip-content"              tabindex="-1"              aria-hidden="true"              ng-click="!$mdChipsCtrl.readonly && $mdChipsCtrl.focusChip($index)"              ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"              md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>          <div ng-if="$mdChipsCtrl.isRemovable()"               class="md-chip-remove-container"               md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>        </md-chip>        <div class="md-chip-input-container" ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl">          <div md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>        </div>      </md-chips-wrap>',o='        <input            class="md-input"            tabindex="0"            placeholder="{{$mdChipsCtrl.getPlaceholder()}}"            aria-label="{{$mdChipsCtrl.getPlaceholder()}}"            ng-model="$mdChipsCtrl.chipBuffer"            ng-focus="$mdChipsCtrl.onInputFocus()"            ng-blur="$mdChipsCtrl.onInputBlur()"            ng-keydown="$mdChipsCtrl.inputKeydown($event)">',i="      <span>{{$chip}}</span>",r='      <button          class="md-chip-remove"          ng-if="$mdChipsCtrl.isRemovable()"          ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"          type="button"          aria-hidden="true"          tabindex="-1">        <md-icon md-svg-src="{{ $mdChipsCtrl.mdCloseIcon }}"></md-icon>        <span class="md-visually-hidden">          {{$mdChipsCtrl.deleteButtonLabel}}        </span>      </button>'}(),function(){function e(){this.selectedItem=null,this.searchText=""}t.module("material.components.chips").controller("MdContactChipsCtrl",e),e.prototype.queryContact=function(e){var n=this.contactQuery({$query:e});return this.filterSelected?n.filter(t.bind(this,this.filterSelectedContacts)):n},e.prototype.itemName=function(e){return e[this.contactName]},e.prototype.filterSelectedContacts=function(e){return this.contacts.indexOf(e)==-1}}(),function(){function e(e,t){function o(n,o){return function(n,i,r,a){t.initOptionalProperties(n,o),e(i),i.attr("tabindex","-1")}}return{template:function(e,t){return n},restrict:"E",controller:"MdContactChipsCtrl",controllerAs:"$mdContactChipsCtrl",bindToController:!0,compile:o,scope:{contactQuery:"&mdContacts",placeholder:"@",secondaryPlaceholder:"@",contactName:"@mdContactName",contactImage:"@mdContactImage",contactEmail:"@mdContactEmail",contacts:"=ngModel",requireMatch:"=?mdRequireMatch",highlightFlags:"@?mdHighlightFlags"}}}e.$inject=["$mdTheming","$mdUtil"],t.module("material.components.chips").directive("mdContactChips",e);var n='      <md-chips class="md-contact-chips"          ng-model="$mdContactChipsCtrl.contacts"          md-require-match="$mdContactChipsCtrl.requireMatch"          md-autocomplete-snap>          <md-autocomplete              md-menu-class="md-contact-chips-suggestions"              md-selected-item="$mdContactChipsCtrl.selectedItem"              md-search-text="$mdContactChipsCtrl.searchText"              md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"              md-item-text="$mdContactChipsCtrl.itemName(item)"              md-no-cache="true"              md-autoselect              placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                  $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">            <div class="md-contact-suggestion">              <img                   ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                  alt="{{item[$mdContactChipsCtrl.contactName]}}"                  ng-if="item[$mdContactChipsCtrl.contactImage]" />              <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText"                    md-highlight-flags="{{$mdContactChipsCtrl.highlightFlags}}">                {{item[$mdContactChipsCtrl.contactName]}}              </span>              <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>            </div>          </md-autocomplete>          <md-chip-template>            <div class="md-contact-avatar">              <img                   ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                  alt="{{$chip[$mdContactChipsCtrl.contactName]}}"                  ng-if="$chip[$mdContactChipsCtrl.contactImage]" />            </div>            <div class="md-contact-name">              {{$chip[$mdContactChipsCtrl.contactName]}}            </div>          </md-chip-template>      </md-chips>'}(),function(){!function(){function e(){return{template:function(e,t){var n=t.hasOwnProperty("ngIf")?"":'ng-if="calendarCtrl.isInitialized"',o='<div ng-switch="calendarCtrl.currentView" '+n+'><md-calendar-year ng-switch-when="year"></md-calendar-year><md-calendar-month ng-switch-default></md-calendar-month></div>';return o},scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",dateFilter:"=mdDateFilter",_currentView:"@mdCurrentView"},require:["ngModel","mdCalendar"],controller:n,controllerAs:"calendarCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1];r.configureNgModel(i)}}}function n(e,n,o,r,a,d,s,l,c){d(e),this.$element=e,this.$scope=n,this.dateUtil=o,this.$mdUtil=r,this.keyCode=a.KEY_CODE,this.$$rAF=s,this.today=this.dateUtil.createDateAtMidnight(),this.ngModelCtrl=null,this.currentView=this._currentView||"month",this.SELECTED_DATE_CLASS="md-calendar-selected-date",this.TODAY_CLASS="md-calendar-date-today",this.FOCUSED_DATE_CLASS="md-focus",this.id=i++,this.displayDate=null,this.selectedDate=null,this.firstRenderableDate=null,this.lastRenderableDate=null,this.isInitialized=!1,this.width=0,this.scrollbarWidth=0,l.tabindex||e.attr("tabindex","-1");var m=t.bind(this,this.handleKeyEvent);t.element(document.body).on("keydown",m),n.$on("$destroy",function(){t.element(document.body).off("keydown",m)}),this.minDate&&this.minDate>c.firstRenderableDate?this.firstRenderableDate=this.minDate:this.firstRenderableDate=c.firstRenderableDate,this.maxDate&&this.maxDate<c.lastRenderableDate?this.lastRenderableDate=this.maxDate:this.lastRenderableDate=c.lastRenderableDate}n.$inject=["$element","$scope","$$mdDateUtil","$mdUtil","$mdConstant","$mdTheming","$$rAF","$attrs","$mdDateLocale"],t.module("material.components.datepicker").directive("mdCalendar",e);var o=340,i=0;n.prototype.configureNgModel=function(e){var t=this;t.ngModelCtrl=e,t.$mdUtil.nextTick(function(){t.isInitialized=!0}),e.$render=function(){var e=this.$viewValue;t.$scope.$broadcast("md-calendar-parent-changed",e),t.selectedDate||(t.selectedDate=e),t.displayDate||(t.displayDate=t.selectedDate||t.today)}},n.prototype.setNgModelValue=function(e){var t=this.dateUtil.createDateAtMidnight(e);return this.focus(t),this.$scope.$emit("md-calendar-change",t),this.ngModelCtrl.$setViewValue(t),this.ngModelCtrl.$render(),t},n.prototype.setCurrentView=function(e,n){var o=this;o.$mdUtil.nextTick(function(){o.currentView=e,n&&(o.displayDate=t.isDate(n)?n:new Date(n))})},n.prototype.focus=function(e){if(this.dateUtil.isValidDate(e)){var t=this.$element[0].querySelector(".md-focus");t&&t.classList.remove(this.FOCUSED_DATE_CLASS);var n=this.getDateId(e,this.currentView),o=document.getElementById(n);o&&(o.classList.add(this.FOCUSED_DATE_CLASS),o.focus(),this.displayDate=e)}else{var i=this.$element[0].querySelector("[ng-switch]");i&&i.focus()}},n.prototype.getActionFromKeyEvent=function(e){var t=this.keyCode;switch(e.which){case t.ENTER:return"select";case t.RIGHT_ARROW:return"move-right";case t.LEFT_ARROW:return"move-left";case t.DOWN_ARROW:return e.metaKey?"move-page-down":"move-row-down";case t.UP_ARROW:return e.metaKey?"move-page-up":"move-row-up";case t.PAGE_DOWN:return"move-page-down";case t.PAGE_UP:return"move-page-up";case t.HOME:return"start";case t.END:return"end";default:return null}},n.prototype.handleKeyEvent=function(e){var t=this;this.$scope.$apply(function(){if(e.which==t.keyCode.ESCAPE||e.which==t.keyCode.TAB)return t.$scope.$emit("md-calendar-close"),void(e.which==t.keyCode.TAB&&e.preventDefault());var n=t.getActionFromKeyEvent(e);n&&(e.preventDefault(),e.stopPropagation(),t.$scope.$broadcast("md-calendar-parent-action",n))})},n.prototype.hideVerticalScrollbar=function(e){function t(){var t=n.width||o,i=n.scrollbarWidth,a=e.calendarScroller;r.style.width=t+"px",a.style.width=t+i+"px",a.style.paddingRight=i+"px"}var n=this,i=e.$element[0],r=i.querySelector(".md-calendar-scroll-mask");n.width>0?t():n.$$rAF(function(){var o=e.calendarScroller;n.scrollbarWidth=o.offsetWidth-o.clientWidth,n.width=i.querySelector("table").offsetWidth,t()})},n.prototype.getDateId=function(e,t){if(!t)throw new Error("A namespace for the date id has to be specified.");return["md",this.id,t,e.getFullYear(),e.getMonth(),e.getDate()].join("-")},n.prototype.updateVirtualRepeat=function(){var e=this.$scope,t=e.$on("$md-resize-enable",function(){e.$$phase||e.$apply(),t()})}}()}(),function(){!function(){function e(){return{template:'<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="'+(i-o)+'"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-month-body role="rowgroup" md-virtual-repeat="i in monthCtrl.items" md-month-offset="$index" class="md-calendar-month" md-start-index="monthCtrl.getSelectedMonthIndex()" md-item-size="'+o+'"></tbody></table></md-virtual-repeat-container></div>',require:["^^mdCalendar","mdCalendarMonth"],controller:n,controllerAs:"monthCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1];r.initialize(i)}}}function n(e,t,n,o,i,r){this.$element=e,this.$scope=t,this.$animate=n,this.$q=o,this.dateUtil=i,this.dateLocale=r,this.calendarScroller=e[0].querySelector(".md-virtual-repeat-scroller"),this.isInitialized=!1,this.isMonthTransitionInProgress=!1;var a=this;this.cellClickHandler=function(){var e=i.getTimestampFromNode(this);a.$scope.$apply(function(){a.calendarCtrl.setNgModelValue(e)})},this.headerClickHandler=function(){a.calendarCtrl.setCurrentView("year",i.getTimestampFromNode(this))}}n.$inject=["$element","$scope","$animate","$q","$$mdDateUtil","$mdDateLocale"],t.module("material.components.datepicker").directive("mdCalendarMonth",e);var o=265,i=45;n.prototype.initialize=function(e){this.items={length:this.dateUtil.getMonthDistance(e.firstRenderableDate,e.lastRenderableDate)+2},this.calendarCtrl=e,this.attachScopeListeners(),e.updateVirtualRepeat(),e.ngModelCtrl&&e.ngModelCtrl.$render()},n.prototype.getSelectedMonthIndex=function(){var e=this.calendarCtrl;return this.dateUtil.getMonthDistance(e.firstRenderableDate,e.displayDate||e.selectedDate||e.today)},n.prototype.changeSelectedDate=function(e){var t=this,n=t.calendarCtrl,o=n.selectedDate;n.selectedDate=e,this.changeDisplayDate(e).then(function(){var t=n.SELECTED_DATE_CLASS,i="month";if(o){var r=document.getElementById(n.getDateId(o,i));r&&(r.classList.remove(t),r.setAttribute("aria-selected","false"))}if(e){var a=document.getElementById(n.getDateId(e,i));a&&(a.classList.add(t),a.setAttribute("aria-selected","true"))}})},n.prototype.changeDisplayDate=function(e){if(!this.isInitialized)return this.buildWeekHeader(),this.calendarCtrl.hideVerticalScrollbar(this),this.isInitialized=!0,this.$q.when();if(!this.dateUtil.isValidDate(e)||this.isMonthTransitionInProgress)return this.$q.when();this.isMonthTransitionInProgress=!0;var t=this.animateDateChange(e);this.calendarCtrl.displayDate=e;var n=this;return t.then(function(){n.isMonthTransitionInProgress=!1}),t},n.prototype.animateDateChange=function(e){if(this.dateUtil.isValidDate(e)){var t=this.dateUtil.getMonthDistance(this.calendarCtrl.firstRenderableDate,e);this.calendarScroller.scrollTop=t*o}return this.$q.when()},n.prototype.buildWeekHeader=function(){for(var e=this.dateLocale.firstDayOfWeek,t=this.dateLocale.shortDays,n=document.createElement("tr"),o=0;o<7;o++){var i=document.createElement("th");i.textContent=t[(o+e)%7],n.appendChild(i)}this.$element.find("thead").append(n)},n.prototype.attachScopeListeners=function(){var e=this;e.$scope.$on("md-calendar-parent-changed",function(t,n){e.changeSelectedDate(n)}),e.$scope.$on("md-calendar-parent-action",t.bind(this,this.handleKeyEvent))},n.prototype.handleKeyEvent=function(e,t){var n=this.calendarCtrl,o=n.displayDate;if("select"===t)n.setNgModelValue(o);else{var i=null,r=this.dateUtil;switch(t){case"move-right":i=r.incrementDays(o,1);break;case"move-left":i=r.incrementDays(o,-1);break;case"move-page-down":i=r.incrementMonths(o,1);break;case"move-page-up":i=r.incrementMonths(o,-1);break;case"move-row-down":i=r.incrementDays(o,7);break;case"move-row-up":i=r.incrementDays(o,-7);break;case"start":i=r.getFirstDateOfMonth(o);break;case"end":i=r.getLastDateOfMonth(o)}i&&(i=this.dateUtil.clampDate(i,n.minDate,n.maxDate),this.changeDisplayDate(i).then(function(){n.focus(i)}))}}}()}(),function(){!function(){function e(e,t){var o=e('<md-icon md-svg-src="'+t.mdTabsArrow+'"></md-icon>')({})[0];return{require:["^^mdCalendar","^^mdCalendarMonth","mdCalendarMonthBody"],scope:{offset:"=mdMonthOffset"},controller:n,controllerAs:"mdMonthBodyCtrl",bindToController:!0,link:function(e,t,n,i){var r=i[0],a=i[1],d=i[2];d.calendarCtrl=r,d.monthCtrl=a,d.arrowIcon=o.cloneNode(!0),e.$watch(function(){return d.offset},function(e,t){e!==t&&d.generateContent()})}}}function n(e,t,n){this.$element=e,this.dateUtil=t,this.dateLocale=n,this.monthCtrl=null,this.calendarCtrl=null,this.offset=null,this.focusAfterAppend=null}e.$inject=["$compile","$$mdSvgRegistry"],n.$inject=["$element","$$mdDateUtil","$mdDateLocale"],t.module("material.components.datepicker").directive("mdCalendarMonthBody",e),n.prototype.generateContent=function(){var e=this.dateUtil.incrementMonths(this.calendarCtrl.firstRenderableDate,this.offset);this.$element.empty().append(this.buildCalendarForMonth(e)),this.focusAfterAppend&&(this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS),this.focusAfterAppend.focus(),this.focusAfterAppend=null)},n.prototype.buildDateCell=function(e){var t=this.monthCtrl,n=this.calendarCtrl,o=document.createElement("td");if(o.tabIndex=-1,o.classList.add("md-calendar-date"),o.setAttribute("role","gridcell"),e){o.setAttribute("tabindex","-1"),o.setAttribute("aria-label",this.dateLocale.longDateFormatter(e)),o.id=n.getDateId(e,"month"),o.setAttribute("data-timestamp",e.getTime()),this.dateUtil.isSameDay(e,n.today)&&o.classList.add(n.TODAY_CLASS),this.dateUtil.isValidDate(n.selectedDate)&&this.dateUtil.isSameDay(e,n.selectedDate)&&(o.classList.add(n.SELECTED_DATE_CLASS),o.setAttribute("aria-selected","true"));var i=this.dateLocale.dates[e.getDate()];if(this.isDateEnabled(e)){var r=document.createElement("span");r.classList.add("md-calendar-date-selection-indicator"),r.textContent=i,o.appendChild(r),o.addEventListener("click",t.cellClickHandler),n.displayDate&&this.dateUtil.isSameDay(e,n.displayDate)&&(this.focusAfterAppend=o)}else o.classList.add("md-calendar-date-disabled"),o.textContent=i}return o},n.prototype.isDateEnabled=function(e){return this.dateUtil.isDateWithinRange(e,this.calendarCtrl.minDate,this.calendarCtrl.maxDate)&&(!t.isFunction(this.calendarCtrl.dateFilter)||this.calendarCtrl.dateFilter(e))},n.prototype.buildDateRow=function(e){var t=document.createElement("tr");return t.setAttribute("role","row"),t.setAttribute("aria-label",this.dateLocale.weekNumberFormatter(e)),t},n.prototype.buildCalendarForMonth=function(e){var t=this.dateUtil.isValidDate(e)?e:new Date,n=this.dateUtil.getFirstDateOfMonth(t),o=this.getLocaleDay_(n),i=this.dateUtil.getNumberOfDaysInMonth(t),r=document.createDocumentFragment(),a=1,d=this.buildDateRow(a);r.appendChild(d);var s=this.offset===this.monthCtrl.items.length-1,l=0,c=document.createElement("td"),m=document.createElement("span");if(m.textContent=this.dateLocale.monthHeaderFormatter(t),c.appendChild(m),c.classList.add("md-calendar-month-label"),this.calendarCtrl.maxDate&&n>this.calendarCtrl.maxDate?c.classList.add("md-calendar-month-label-disabled"):(c.addEventListener("click",this.monthCtrl.headerClickHandler),c.setAttribute("data-timestamp",n.getTime()),c.setAttribute("aria-label",this.dateLocale.monthFormatter(t)),c.appendChild(this.arrowIcon.cloneNode(!0))),o<=2){c.setAttribute("colspan","7");var u=this.buildDateRow();if(u.appendChild(c),r.insertBefore(u,d),s)return r}else l=3,c.setAttribute("colspan","3"),d.appendChild(c);for(var p=l;p<o;p++)d.appendChild(this.buildDateCell());for(var h=o,f=n,g=1;g<=i;g++){if(7===h){if(s)return r;h=0,a++,d=this.buildDateRow(a),r.appendChild(d)}f.setDate(g);var b=this.buildDateCell(f);d.appendChild(b),h++}for(;d.childNodes.length<7;)d.appendChild(this.buildDateCell());for(;r.childNodes.length<6;){for(var v=this.buildDateRow(),E=0;E<7;E++)v.appendChild(this.buildDateCell());r.appendChild(v)}return r},n.prototype.getLocaleDay_=function(e){return(e.getDay()+(7-this.dateLocale.firstDayOfWeek))%7}}()}(),function(){!function(){function e(){return{template:'<div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-year-body role="rowgroup" md-virtual-repeat="i in yearCtrl.items" md-year-offset="$index" class="md-calendar-year" md-start-index="yearCtrl.getFocusedYearIndex()" md-item-size="'+o+'"></tbody></table></md-virtual-repeat-container></div>',require:["^^mdCalendar","mdCalendarYear"],controller:n,controllerAs:"yearCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1];r.initialize(i)}}}function n(e,t,n,o,i){this.$element=e,this.$scope=t,this.$animate=n,this.$q=o,this.dateUtil=i,this.calendarScroller=e[0].querySelector(".md-virtual-repeat-scroller"),this.isInitialized=!1,this.isMonthTransitionInProgress=!1;var r=this;this.cellClickHandler=function(){r.calendarCtrl.setCurrentView("month",i.getTimestampFromNode(this))}}n.$inject=["$element","$scope","$animate","$q","$$mdDateUtil"],t.module("material.components.datepicker").directive("mdCalendarYear",e);var o=88;n.prototype.initialize=function(e){this.items={length:this.dateUtil.getYearDistance(e.firstRenderableDate,e.lastRenderableDate)+1},this.calendarCtrl=e,this.attachScopeListeners(),e.updateVirtualRepeat(),e.ngModelCtrl&&e.ngModelCtrl.$render()},n.prototype.getFocusedYearIndex=function(){var e=this.calendarCtrl;return this.dateUtil.getYearDistance(e.firstRenderableDate,e.displayDate||e.selectedDate||e.today)},n.prototype.changeDate=function(e){if(!this.isInitialized)return this.calendarCtrl.hideVerticalScrollbar(this),this.isInitialized=!0,this.$q.when();if(this.dateUtil.isValidDate(e)&&!this.isMonthTransitionInProgress){var t=this,n=this.animateDateChange(e);return t.isMonthTransitionInProgress=!0,t.calendarCtrl.displayDate=e,n.then(function(){t.isMonthTransitionInProgress=!1})}},n.prototype.animateDateChange=function(e){if(this.dateUtil.isValidDate(e)){var t=this.dateUtil.getYearDistance(this.calendarCtrl.firstRenderableDate,e);this.calendarScroller.scrollTop=t*o}return this.$q.when()},n.prototype.handleKeyEvent=function(e,t){var n=this.calendarCtrl,o=n.displayDate;if("select"===t)this.changeDate(o).then(function(){n.setCurrentView("month",o),n.focus(o)});else{var i=null,r=this.dateUtil;switch(t){case"move-right":i=r.incrementMonths(o,1);break;case"move-left":i=r.incrementMonths(o,-1);break;case"move-row-down":i=r.incrementMonths(o,6);break;case"move-row-up":i=r.incrementMonths(o,-6)}if(i){var a=n.minDate?r.getFirstDateOfMonth(n.minDate):null,d=n.maxDate?r.getFirstDateOfMonth(n.maxDate):null;i=r.getFirstDateOfMonth(this.dateUtil.clampDate(i,a,d)),this.changeDate(i).then(function(){n.focus(i)})}}},n.prototype.attachScopeListeners=function(){var e=this;e.$scope.$on("md-calendar-parent-changed",function(t,n){e.changeDate(n)}),e.$scope.$on("md-calendar-parent-action",t.bind(e,e.handleKeyEvent))}}()}(),function(){!function(){function e(){return{require:["^^mdCalendar","^^mdCalendarYear","mdCalendarYearBody"],scope:{offset:"=mdYearOffset"},controller:n,controllerAs:"mdYearBodyCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1],a=o[2];a.calendarCtrl=i,a.yearCtrl=r,e.$watch(function(){return a.offset},function(e,t){e!==t&&a.generateContent()})}}}function n(e,t,n){this.$element=e,this.dateUtil=t,this.dateLocale=n,this.calendarCtrl=null,this.yearCtrl=null,this.offset=null,this.focusAfterAppend=null}n.$inject=["$element","$$mdDateUtil","$mdDateLocale"],t.module("material.components.datepicker").directive("mdCalendarYearBody",e),n.prototype.generateContent=function(){var e=this.dateUtil.incrementYears(this.calendarCtrl.firstRenderableDate,this.offset);this.$element.empty().append(this.buildCalendarForYear(e)),this.focusAfterAppend&&(this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS),this.focusAfterAppend.focus(),this.focusAfterAppend=null)},n.prototype.buildMonthCell=function(e,t){var n=this.calendarCtrl,o=this.yearCtrl,i=this.buildBlankCell(),r=new Date(e,t,1);i.setAttribute("aria-label",this.dateLocale.monthFormatter(r)),i.id=n.getDateId(r,"year"),i.setAttribute("data-timestamp",r.getTime()),this.dateUtil.isSameMonthAndYear(r,n.today)&&i.classList.add(n.TODAY_CLASS),this.dateUtil.isValidDate(n.selectedDate)&&this.dateUtil.isSameMonthAndYear(r,n.selectedDate)&&(i.classList.add(n.SELECTED_DATE_CLASS),i.setAttribute("aria-selected","true"));var a=this.dateLocale.shortMonths[t];if(this.dateUtil.isMonthWithinRange(r,n.minDate,n.maxDate)){var d=document.createElement("span");d.classList.add("md-calendar-date-selection-indicator"),d.textContent=a,i.appendChild(d),i.addEventListener("click",o.cellClickHandler),n.displayDate&&this.dateUtil.isSameMonthAndYear(r,n.displayDate)&&(this.focusAfterAppend=i)}else i.classList.add("md-calendar-date-disabled"),i.textContent=a;return i},n.prototype.buildBlankCell=function(){var e=document.createElement("td");return e.tabIndex=-1,e.classList.add("md-calendar-date"),e.setAttribute("role","gridcell"),e.setAttribute("tabindex","-1"),e},n.prototype.buildCalendarForYear=function(e){var t,n=e.getFullYear(),o=document.createDocumentFragment(),i=document.createElement("tr"),r=document.createElement("td");for(r.className="md-calendar-month-label",r.textContent=n,i.appendChild(r),t=0;t<6;t++)i.appendChild(this.buildMonthCell(n,t));o.appendChild(i);var a=document.createElement("tr");for(a.appendChild(this.buildBlankCell()),t=6;t<12;t++)a.appendChild(this.buildMonthCell(n,t));return o.appendChild(a),o}}()}(),function(){!function(){t.module("material.components.datepicker").config(["$provide",function(e){function t(){this.months=null,this.shortMonths=null,this.days=null,this.shortDays=null,this.dates=null,this.firstDayOfWeek=0,this.formatDate=null,this.parseDate=null,this.monthHeaderFormatter=null,this.weekNumberFormatter=null,this.longDateFormatter=null,this.msgCalendar="",this.msgOpenCalendar=""}t.prototype.$get=function(e,t){function n(e){if(!e)return"";var n=e.toLocaleTimeString(),o=e;return 0!=e.getHours()||n.indexOf("11:")===-1&&n.indexOf("23:")===-1||(o=new Date(e.getFullYear(),e.getMonth(),e.getDate(),1,0,0)),t("date")(o,"M/d/yyyy")}function o(e){return new Date(e)}function i(e){e=e.trim();var t=/^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/;return t.test(e)}function r(e){return g.shortMonths[e.getMonth()]+" "+e.getFullYear()}function a(e){return g.months[e.getMonth()]+" "+e.getFullYear()}function d(e){return"Week "+e}function s(e){return[g.days[e.getDay()],g.months[e.getMonth()],g.dates[e.getDate()],e.getFullYear()].join(" ")}for(var l=e.DATETIME_FORMATS.SHORTDAY.map(function(e){return e.substring(0,1)}),c=Array(32),m=1;m<=31;m++)c[m]=m;var u="Calendar",p="Open calendar",h=new Date(1880,0,1),f=new Date(h.getFullYear()+250,0,1),g={months:this.months||e.DATETIME_FORMATS.MONTH,shortMonths:this.shortMonths||e.DATETIME_FORMATS.SHORTMONTH,days:this.days||e.DATETIME_FORMATS.DAY,shortDays:this.shortDays||l,dates:this.dates||c,firstDayOfWeek:this.firstDayOfWeek||0,formatDate:this.formatDate||n,parseDate:this.parseDate||o,isDateComplete:this.isDateComplete||i,monthHeaderFormatter:this.monthHeaderFormatter||r,monthFormatter:this.monthFormatter||a,weekNumberFormatter:this.weekNumberFormatter||d,longDateFormatter:this.longDateFormatter||s,msgCalendar:this.msgCalendar||u,msgOpenCalendar:this.msgOpenCalendar||p,firstRenderableDate:this.firstRenderableDate||h,lastRenderableDate:this.lastRenderableDate||f};return g},t.prototype.$get.$inject=["$locale","$filter"],e.provider("$mdDateLocale",new t)}])}()}(),function(){!function(){t.module("material.components.datepicker").factory("$$mdDateUtil",function(){function e(e){return new Date(e.getFullYear(),e.getMonth(),1)}function n(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function o(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}function i(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}function r(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function a(e,t){return e.getDate()==t.getDate()&&r(e,t)}function d(e,t){var n=o(e);return r(n,t)}function s(e,t){var n=i(e);return r(t,n)}function l(e,t){return b((e.getTime()+t.getTime())/2)}function c(t){var n=e(t);return Math.floor((n.getDay()+t.getDate()-1)/7)}function m(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function u(e,t){var o=new Date(e.getFullYear(),e.getMonth()+t,1),i=n(o);return i<e.getDate()?o.setDate(i):o.setDate(e.getDate()),o}function p(e,t){return 12*(t.getFullYear()-e.getFullYear())+(t.getMonth()-e.getMonth())}function h(e){return new Date(e.getFullYear(),e.getMonth(),n(e))}function f(e){return null!=e&&e.getTime&&!isNaN(e.getTime())}function g(e){f(e)&&e.setHours(0,0,0,0)}function b(e){var n;return n=t.isUndefined(e)?new Date:new Date(e),g(n),n}function v(e,t,n){
var o=b(e),i=f(t)?b(t):null,r=f(n)?b(n):null;return(!i||i<=o)&&(!r||r>=o)}function E(e,t){return u(e,12*t)}function $(e,t){return t.getFullYear()-e.getFullYear()}function C(e,t,n){var o=e;return t&&e<t&&(o=new Date(t.getTime())),n&&e>n&&(o=new Date(n.getTime())),o}function M(e){if(e&&e.hasAttribute("data-timestamp"))return Number(e.getAttribute("data-timestamp"))}function y(e,t,n){var o=e.getMonth(),i=e.getFullYear();return(!t||t.getFullYear()<i||t.getMonth()<=o)&&(!n||n.getFullYear()>i||n.getMonth()>=o)}return{getFirstDateOfMonth:e,getNumberOfDaysInMonth:n,getDateInNextMonth:o,getDateInPreviousMonth:i,isInNextMonth:d,isInPreviousMonth:s,getDateMidpoint:l,isSameMonthAndYear:r,getWeekOfMonth:c,incrementDays:m,incrementMonths:u,getLastDateOfMonth:h,isSameDay:a,getMonthDistance:p,isValidDate:f,setDateTimeToMidnight:g,createDateAtMidnight:b,isDateWithinRange:v,incrementYears:E,getYearDistance:$,clampDate:C,getTimestampFromNode:M,isMonthWithinRange:y}})}()}(),function(){!function(){function n(e,n,i,r){return{template:function(t,n){var o=n.mdHideIcons,i=n.ariaLabel||n.mdPlaceholder,r="all"===o||"calendar"===o?"":'<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" aria-label="md-calendar" md-svg-src="'+e.mdCalendar+'"></md-icon></md-button>',a="all"===o||"triangle"===o?"":'<md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.dateLocale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button>';return r+'<div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input '+(i?'aria-label="'+i+'" ':"")+'class="md-datepicker-input" aria-haspopup="true" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)"> '+a+'</div><div class="md-datepicker-calendar-pane md-whiteframe-z1"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.dateLocale.msgCalendar}}" md-current-view="{{::ctrl.currentView}}"md-min-date="ctrl.minDate"md-max-date="ctrl.maxDate"md-date-filter="ctrl.dateFilter"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>'},require:["ngModel","mdDatepicker","?^mdInputContainer","?^form"],scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",placeholder:"@mdPlaceholder",currentView:"@mdCurrentView",dateFilter:"=mdDateFilter",isOpen:"=?mdIsOpen",debounceInterval:"=mdDebounceInterval"},controller:o,controllerAs:"ctrl",bindToController:!0,link:function(e,o,a,l){var c=l[0],m=l[1],u=l[2],p=l[3],h=n.parseAttributeBoolean(a.mdNoAsterisk);if(m.configureNgModel(c,u,r),u){var f=o[0].querySelector(".md-errors-spacer");f&&o.after(t.element("<div>").append(f)),u.setHasPlaceholder(a.mdPlaceholder),u.input=o,u.element.addClass(d).toggleClass(s,"calendar"!==a.mdHideIcons&&"all"!==a.mdHideIcons),u.label?h||a.$observe("required",function(e){u.label.toggleClass("md-required",!!e)}):i.expect(o,"aria-label",a.mdPlaceholder),e.$watch(u.isErrorGetter||function(){return c.$invalid&&(c.$touched||p&&p.$submitted)},u.setInvalid)}else if(p)var g=e.$watch(function(){return p.$submitted},function(e){e&&(m.updateErrorState(),g())})}}}function o(e,n,o,i,r,a,d,s,l,c,m,u){this.$window=i,this.dateLocale=s,this.dateUtil=l,this.$mdConstant=r,this.$mdUtil=d,this.$$rAF=c,this.documentElement=t.element(document.documentElement),this.ngModelCtrl=null,this.inputElement=n[0].querySelector("input"),this.ngInputElement=t.element(this.inputElement),this.inputContainer=n[0].querySelector(".md-datepicker-input-container"),this.calendarPane=n[0].querySelector(".md-datepicker-calendar-pane"),this.calendarButton=n[0].querySelector(".md-datepicker-button"),this.inputMask=t.element(n[0].querySelector(".md-datepicker-input-mask-opaque")),this.$element=n,this.$attrs=o,this.$scope=e,this.date=null,this.isFocused=!1,this.isDisabled,this.setDisabled(n[0].disabled||t.isString(o.disabled)),this.isCalendarOpen=!1,this.openOnFocus=o.hasOwnProperty("mdOpenOnFocus"),this.mdInputContainer=null,this.calendarPaneOpenedFrom=null,this.calendarPane.id="md-date-pane"+d.nextUid(),this.bodyClickHandler=t.bind(this,this.handleBodyClick),this.windowEventName=m.isIos||m.isAndroid?"orientationchange":"resize",this.windowEventHandler=d.debounce(t.bind(this,this.closeCalendarPane),100),this.windowBlurHandler=t.bind(this,this.handleWindowBlur),this.ngDateFilter=u("date"),this.leftMargin=20,this.topMargin=null,o.tabindex?(this.ngInputElement.attr("tabindex",o.tabindex),o.$set("tabindex",null)):o.$set("tabindex","-1"),a(n),a(t.element(this.calendarPane)),this.installPropertyInterceptors(),this.attachChangeListeners(),this.attachInteractionListeners();var p=this;e.$on("$destroy",function(){p.detachCalendarPane()}),o.mdIsOpen&&e.$watch("ctrl.isOpen",function(e){e?p.openCalendarPane({target:p.inputElement}):p.closeCalendarPane()})}o.$inject=["$scope","$element","$attrs","$window","$mdConstant","$mdTheming","$mdUtil","$mdDateLocale","$$mdDateUtil","$$rAF","$mdGesture","$filter"],n.$inject=["$$mdSvgRegistry","$mdUtil","$mdAria","inputDirective"],t.module("material.components.datepicker").directive("mdDatepicker",n);var i=3,r="md-datepicker-invalid",a="md-datepicker-open",d="_md-datepicker-floating-label",s="_md-datepicker-has-calendar-icon",l=500,c=368,m=360;o.prototype.configureNgModel=function(e,n,o){this.ngModelCtrl=e,this.mdInputContainer=n,this.$attrs.$set("type","date"),o[0].link.pre(this.$scope,{on:t.noop,val:t.noop,0:{}},this.$attrs,[e]);var i=this;i.ngModelCtrl.$formatters.push(function(e){if(e&&!(e instanceof Date))throw Error("The ng-model for md-datepicker must be a Date instance. Currently the model is a: "+typeof e);return i.date=e,i.inputElement.value=i.dateLocale.formatDate(e),i.mdInputContainer&&i.mdInputContainer.setHasValue(!!e),i.resizeInputElement(),i.updateErrorState(),e}),e.$viewChangeListeners.unshift(t.bind(this,this.updateErrorState))},o.prototype.attachChangeListeners=function(){var e=this;e.$scope.$on("md-calendar-change",function(t,n){e.setModelValue(n),e.date=n,e.inputElement.value=e.dateLocale.formatDate(n),e.mdInputContainer&&e.mdInputContainer.setHasValue(!!n),e.closeCalendarPane(),e.resizeInputElement(),e.updateErrorState()}),e.ngInputElement.on("input",t.bind(e,e.resizeInputElement));var n=t.isDefined(this.debounceInterval)?this.debounceInterval:l;e.ngInputElement.on("input",e.$mdUtil.debounce(e.handleInputEvent,n,e))},o.prototype.attachInteractionListeners=function(){var e=this,n=this.$scope,o=this.$mdConstant.KEY_CODE;e.ngInputElement.on("keydown",function(t){t.altKey&&t.keyCode==o.DOWN_ARROW&&(e.openCalendarPane(t),n.$digest())}),e.openOnFocus&&(e.ngInputElement.on("focus",t.bind(e,e.openCalendarPane)),t.element(e.$window).on("blur",e.windowBlurHandler),n.$on("$destroy",function(){t.element(e.$window).off("blur",e.windowBlurHandler)})),n.$on("md-calendar-close",function(){e.closeCalendarPane()})},o.prototype.installPropertyInterceptors=function(){var e=this;if(this.$attrs.ngDisabled){var t=this.$scope.$parent;t&&t.$watch(this.$attrs.ngDisabled,function(t){e.setDisabled(t)})}Object.defineProperty(this,"placeholder",{get:function(){return e.inputElement.placeholder},set:function(t){e.inputElement.placeholder=t||""}})},o.prototype.setDisabled=function(e){this.isDisabled=e,this.inputElement.disabled=e,this.calendarButton&&(this.calendarButton.disabled=e)},o.prototype.updateErrorState=function(e){var n=e||this.date;if(this.clearErrorState(),this.dateUtil.isValidDate(n)){if(n=this.dateUtil.createDateAtMidnight(n),this.dateUtil.isValidDate(this.minDate)){var o=this.dateUtil.createDateAtMidnight(this.minDate);this.ngModelCtrl.$setValidity("mindate",n>=o)}if(this.dateUtil.isValidDate(this.maxDate)){var i=this.dateUtil.createDateAtMidnight(this.maxDate);this.ngModelCtrl.$setValidity("maxdate",n<=i)}t.isFunction(this.dateFilter)&&this.ngModelCtrl.$setValidity("filtered",this.dateFilter(n))}else this.ngModelCtrl.$setValidity("valid",null==n);this.ngModelCtrl.$valid||this.inputContainer.classList.add(r)},o.prototype.clearErrorState=function(){this.inputContainer.classList.remove(r),["mindate","maxdate","filtered","valid"].forEach(function(e){this.ngModelCtrl.$setValidity(e,!0)},this)},o.prototype.resizeInputElement=function(){this.inputElement.size=this.inputElement.value.length+i},o.prototype.handleInputEvent=function(){var e=this.inputElement.value,t=e?this.dateLocale.parseDate(e):null;this.dateUtil.setDateTimeToMidnight(t);var n=""==e||this.dateUtil.isValidDate(t)&&this.dateLocale.isDateComplete(e)&&this.isDateEnabled(t);n&&(this.setModelValue(t),this.date=t),this.updateErrorState(t)},o.prototype.isDateEnabled=function(e){return this.dateUtil.isDateWithinRange(e,this.minDate,this.maxDate)&&(!t.isFunction(this.dateFilter)||this.dateFilter(e))},o.prototype.attachCalendarPane=function(){var e=this.calendarPane,n=document.body;e.style.transform="",this.$element.addClass(a),this.mdInputContainer&&this.mdInputContainer.element.addClass(a),t.element(n).addClass("md-datepicker-is-showing");var o=this.inputContainer.getBoundingClientRect(),i=n.getBoundingClientRect();(!this.topMargin||this.topMargin<0)&&(this.topMargin=(this.inputMask.parent().prop("clientHeight")-this.ngInputElement.prop("clientHeight"))/2);var r=o.top-i.top-this.topMargin,d=o.left-i.left-this.leftMargin,s=i.top<0&&0==document.body.scrollTop?-i.top:document.body.scrollTop,l=i.left<0&&0==document.body.scrollLeft?-i.left:document.body.scrollLeft,u=s+this.$window.innerHeight,p=l+this.$window.innerWidth;if(this.inputMask.css({position:"absolute",left:this.leftMargin+"px",top:this.topMargin+"px",width:o.width-1+"px",height:o.height-2+"px"}),d+m>p){if(p-m>0)d=p-m;else{d=l;var h=this.$window.innerWidth/m;e.style.transform="scale("+h+")"}e.classList.add("md-datepicker-pos-adjusted")}r+c>u&&u-c>s&&(r=u-c,e.classList.add("md-datepicker-pos-adjusted")),e.style.left=d+"px",e.style.top=r+"px",document.body.appendChild(e),this.$$rAF(function(){e.classList.add("md-pane-open")})},o.prototype.detachCalendarPane=function(){this.$element.removeClass(a),this.mdInputContainer&&this.mdInputContainer.element.removeClass(a),t.element(document.body).removeClass("md-datepicker-is-showing"),this.calendarPane.classList.remove("md-pane-open"),this.calendarPane.classList.remove("md-datepicker-pos-adjusted"),this.isCalendarOpen&&this.$mdUtil.enableScrolling(),this.calendarPane.parentNode&&this.calendarPane.parentNode.removeChild(this.calendarPane)},o.prototype.openCalendarPane=function(t){if(!this.isCalendarOpen&&!this.isDisabled&&!this.inputFocusedOnWindowBlur){this.isCalendarOpen=this.isOpen=!0,this.calendarPaneOpenedFrom=t.target,this.$mdUtil.disableScrollAround(this.calendarPane),this.attachCalendarPane(),this.focusCalendar(),this.evalAttr("ngFocus");var n=this;this.$mdUtil.nextTick(function(){n.documentElement.on("click touchstart",n.bodyClickHandler)},!1),e.addEventListener(this.windowEventName,this.windowEventHandler)}},o.prototype.closeCalendarPane=function(){function t(){n.isCalendarOpen=n.isOpen=!1}if(this.isCalendarOpen){var n=this;n.detachCalendarPane(),n.ngModelCtrl.$setTouched(),n.evalAttr("ngBlur"),n.documentElement.off("click touchstart",n.bodyClickHandler),e.removeEventListener(n.windowEventName,n.windowEventHandler),n.calendarPaneOpenedFrom.focus(),n.calendarPaneOpenedFrom=null,n.openOnFocus?n.$mdUtil.nextTick(t):t()}},o.prototype.getCalendarCtrl=function(){return t.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar")},o.prototype.focusCalendar=function(){var e=this;this.$mdUtil.nextTick(function(){e.getCalendarCtrl().focus()},!1)},o.prototype.setFocused=function(e){e||this.ngModelCtrl.$setTouched(),this.openOnFocus||this.evalAttr(e?"ngFocus":"ngBlur"),this.isFocused=e},o.prototype.handleBodyClick=function(e){if(this.isCalendarOpen){var t=this.$mdUtil.getClosest(e.target,"md-calendar");t||this.closeCalendarPane(),this.$scope.$digest()}},o.prototype.handleWindowBlur=function(){this.inputFocusedOnWindowBlur=document.activeElement===this.inputElement},o.prototype.evalAttr=function(e){this.$attrs[e]&&this.$scope.$parent.$eval(this.$attrs[e])},o.prototype.setModelValue=function(e){this.ngModelCtrl.$setViewValue(this.ngDateFilter(e,"yyyy-MM-dd"))}}()}(),function(){function e(e,t,n,o){function i(o,i,r){function a(){var e=i.parent();return!(!e.attr("aria-label")&&!e.text())||!(!e.parent().attr("aria-label")&&!e.parent().text())}function d(){r.mdSvgIcon||r.mdSvgSrc||(r.mdFontIcon&&i.addClass("md-font "+r.mdFontIcon),i.addClass(c))}function s(){if(!r.mdSvgIcon&&!r.mdSvgSrc){r.mdFontIcon&&(i.removeClass(l),i.addClass(r.mdFontIcon),l=r.mdFontIcon);var t=e.fontSet(r.mdFontSet);c!==t&&(i.removeClass(c),i.addClass(t),c=t)}}t(i);var l=r.mdFontIcon,c=e.fontSet(r.mdFontSet);d(),r.$observe("mdFontIcon",s),r.$observe("mdFontSet",s);var m=(i[0].getAttribute(r.$attr.mdSvgSrc),r.alt||r.mdFontIcon||r.mdSvgIcon||i.text()),u=r.$normalize(r.$attr.mdSvgIcon||r.$attr.mdSvgSrc||"");r["aria-label"]||(""===m||a()?i.text()||n.expect(i,"aria-hidden","true"):(n.expect(i,"aria-label",m),n.expect(i,"role","img"))),u&&r.$observe(u,function(t){i.empty(),t&&e(t).then(function(e){i.empty(),i.append(e)})})}return{restrict:"E",link:i}}t.module("material.components.icon").directive("mdIcon",["$mdIcon","$mdTheming","$mdAria","$sce",e])}(),function(){function n(){}function o(e,t){this.url=e,this.viewBoxSize=t||r.defaultViewBoxSize}function i(n,o,i,r,a,d){function s(e){if(e=e||"",t.isString(e)||(e=d.getTrustedUrl(e)),E[e])return i.when(c(E[e]));if(C.test(e)||M.test(e))return h(e).then(m(e));e.indexOf(":")==-1&&(e="$default:"+e);var o=n[e]?u:p;return o(e).then(m(e))}function l(e){var o=t.isUndefined(e)||!(e&&e.length);if(o)return n.defaultFontSet;var i=e;return t.forEach(n.fontSets,function(t){t.alias==e&&(i=t.fontSet||i)}),i}function c(e){var n=e.clone(),o="_cache"+a.nextUid();return n.id&&(n.id+=o),t.forEach(n.querySelectorAll("[id]"),function(e){e.id+=o}),n}function m(e){return function(t){return E[e]=f(t)?t:new g(t,n[e]),E[e].clone()}}function u(e){var t=n[e];return h(t.url).then(function(e){return new g(e,t)})}function p(e){function t(t){var n=e.slice(e.lastIndexOf(":")+1),i=t.querySelector("#"+n);return i?new g(i,d):o(e)}function o(e){var t="icon "+e+" not found";return r.warn(t),i.reject(t||e)}var a=e.substring(0,e.lastIndexOf(":"))||"$default",d=n[a];return d?h(d.url).then(t):o(e)}function h(n){function a(n){var o=M.exec(n),r=/base64/i.test(n),a=r?e.atob(o[2]):o[2];return i.when(t.element(a)[0])}function d(e){return i(function(n,i){var a=function(e){var n=t.isString(e)?e:e.message||e.data||e.statusText;r.warn(n),i(e)},d=function(o){$[e]||($[e]=t.element("<div>").append(o)[0].querySelector("svg")),n($[e])};o(e,!0).then(d,a)})}return M.test(n)?a(n):d(n)}function f(e){return t.isDefined(e.element)&&t.isDefined(e.config)}function g(e,n){e&&"svg"!=e.tagName&&(e=t.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e.cloneNode(!0))[0]),e.getAttribute("xmlns")||e.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.element=e,this.config=n,this.prepare()}function b(){var e=this.config?this.config.viewBoxSize:n.defaultViewBoxSize;t.forEach({fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:this.element.getAttribute("viewBox")||"0 0 "+e+" "+e,focusable:!1},function(e,t){this.element.setAttribute(t,e)},this)}function v(){return this.element.cloneNode(!0)}var E={},$={},C=/[-\w@:%\+.~#?&\/\/=]{2,}\.[a-z]{2,4}\b(\/[-\w@:%\+.~#?&\/\/=]*)?/i,M=/^data:image\/svg\+xml[\s*;\w\-\=]*?(base64)?,(.*)$/i;return g.prototype={clone:v,prepare:b},s.fontSet=l,s}i.$inject=["config","$templateRequest","$q","$log","$mdUtil","$sce"],t.module("material.components.icon").constant("$$mdSvgRegistry",{mdTabsArrow:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyICIvPjwvZz48L3N2Zz4=",mdClose:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xOSA2LjQxbC0xLjQxLTEuNDEtNS41OSA1LjU5LTUuNTktNS41OS0xLjQxIDEuNDEgNS41OSA1LjU5LTUuNTkgNS41OSAxLjQxIDEuNDEgNS41OS01LjU5IDUuNTkgNS41OSAxLjQxLTEuNDEtNS41OS01LjU5eiIvPjwvZz48L3N2Zz4=",mdCancel:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xMiAyYy01LjUzIDAtMTAgNC40Ny0xMCAxMHM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTAtNC40Ny0xMC0xMC0xMHptNSAxMy41OWwtMS40MSAxLjQxLTMuNTktMy41OS0zLjU5IDMuNTktMS40MS0xLjQxIDMuNTktMy41OS0zLjU5LTMuNTkgMS40MS0xLjQxIDMuNTkgMy41OSAzLjU5LTMuNTkgMS40MSAxLjQxLTMuNTkgMy41OSAzLjU5IDMuNTl6Ii8+PC9nPjwvc3ZnPg==",mdMenu:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0zLDZIMjFWOEgzVjZNMywxMUgyMVYxM0gzVjExTTMsMTZIMjFWMThIM1YxNloiIC8+PC9zdmc+",mdToggleArrow:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiPjxwYXRoIGQ9Ik0yNCAxNmwtMTIgMTIgMi44MyAyLjgzIDkuMTctOS4xNyA5LjE3IDkuMTcgMi44My0yLjgzeiIvPjxwYXRoIGQ9Ik0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==",mdCalendar:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY4aDE0djExek03IDEwaDV2NUg3eiIvPjwvc3ZnPg==",mdChecked:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXoiLz48L2c+PC9zdmc+"}).provider("$mdIcon",n);var r={defaultViewBoxSize:24,defaultFontSet:"material-icons",fontSets:[]};n.prototype={icon:function(e,t,n){return e.indexOf(":")==-1&&(e="$default:"+e),r[e]=new o(t,n),this},iconSet:function(e,t,n){return r[e]=new o(t,n),this},defaultIconSet:function(e,t){var n="$default";return r[n]||(r[n]=new o(e,t)),r[n].viewBoxSize=t||r.defaultViewBoxSize,this},defaultViewBoxSize:function(e){return r.defaultViewBoxSize=e,this},fontSet:function(e,t){return r.fontSets.push({alias:e,fontSet:t||e}),this},defaultFontSet:function(e){return r.defaultFontSet=e?e:"",this},defaultIconSize:function(e){return r.defaultIconSize=e,this},$get:["$templateRequest","$q","$log","$mdUtil","$sce",function(e,t,n,o,a){return i(r,e,t,n,o,a)}]}}(),function(){function e(e,o,i,r,a,d,s,l){var c,m,u=a.prefixer(),p=this;this.nestLevel=parseInt(o.mdNestLevel,10)||0,this.init=function(n,o){o=o||{},c=n,m=i[0].querySelector(u.buildSelector(["ng-click","ng-mouseenter"])),m.setAttribute("aria-expanded","false"),this.isInMenuBar=o.isInMenuBar,this.nestedMenus=a.nodesToArray(c[0].querySelectorAll(".md-nested-menu")),c.on("$mdInterimElementRemove",function(){p.isOpen=!1,a.nextTick(function(){p.onIsOpenChanged(p.isOpen)})}),a.nextTick(function(){p.onIsOpenChanged(p.isOpen)});var d="menu_container_"+a.nextUid();c.attr("id",d),t.element(m).attr({"aria-owns":d,"aria-haspopup":"true"}),r.$on("$destroy",t.bind(this,function(){this.disableHoverListener(),e.destroy()})),c.on("$destroy",function(){e.destroy()})};var h,f,g=[];this.enableHoverListener=function(){g.push(s.$on("$mdMenuOpen",function(e,t){c[0].contains(t[0])&&(p.currentlyOpenMenu=t.controller("mdMenu"),p.isAlreadyOpening=!1,p.currentlyOpenMenu.registerContainerProxy(p.triggerContainerProxy.bind(p)))})),g.push(s.$on("$mdMenuClose",function(e,t){c[0].contains(t[0])&&(p.currentlyOpenMenu=n)})),f=t.element(a.nodesToArray(c[0].children[0].children)),f.on("mouseenter",p.handleMenuItemHover),f.on("mouseleave",p.handleMenuItemMouseLeave)},this.disableHoverListener=function(){for(;g.length;)g.shift()();f&&f.off("mouseenter",p.handleMenuItemHover),f&&f.off("mouseleave",p.handleMenuItemMouseLeave)},this.handleMenuItemHover=function(e){if(!p.isAlreadyOpening){var n=e.target.querySelector("md-menu")||a.getClosest(e.target,"MD-MENU");h=d(function(){if(n&&(n=t.element(n).controller("mdMenu")),p.currentlyOpenMenu&&p.currentlyOpenMenu!=n){var e=p.nestLevel+1;p.currentlyOpenMenu.close(!0,{closeTo:e}),p.isAlreadyOpening=!!n,n&&n.open()}else n&&!n.isOpen&&n.open&&(p.isAlreadyOpening=!!n,n&&n.open())},n?100:250);var o=e.currentTarget.querySelector(".md-button:not([disabled])");o&&o.focus()}},this.handleMenuItemMouseLeave=function(){h&&(d.cancel(h),h=n)},this.open=function(t){t&&t.stopPropagation(),t&&t.preventDefault(),p.isOpen||(p.enableHoverListener(),p.isOpen=!0,a.nextTick(function(){p.onIsOpenChanged(p.isOpen)}),m=m||(t?t.target:i[0]),m.setAttribute("aria-expanded","true"),r.$emit("$mdMenuOpen",i),e.show({scope:r,mdMenuCtrl:p,nestLevel:p.nestLevel,element:c,target:m,preserveElement:!0,parent:"body"})["finally"](function(){m.setAttribute("aria-expanded","false"),p.disableHoverListener()}))},r.$mdOpenMenu=this.open,this.onIsOpenChanged=function(e){e?(c.attr("aria-hidden","false"),i[0].classList.add("md-open"),t.forEach(p.nestedMenus,function(e){e.classList.remove("md-open")})):(c.attr("aria-hidden","true"),i[0].classList.remove("md-open")),r.$mdMenuIsOpen=p.isOpen},this.focusMenuContainer=function(){var e=c[0].querySelector(u.buildSelector(["md-menu-focus-target","md-autofocus"]));e||(e=c[0].querySelector(".md-button")),e.focus()},this.registerContainerProxy=function(e){this.containerProxy=e},this.triggerContainerProxy=function(e){this.containerProxy&&this.containerProxy(e)},this.destroy=function(){return p.isOpen?e.destroy():l.when(!1)},this.close=function(n,o){if(p.isOpen){p.isOpen=!1,a.nextTick(function(){p.onIsOpenChanged(p.isOpen)});var d=t.extend({},o,{skipFocus:n});if(r.$emit("$mdMenuClose",i,d),e.hide(null,o),!n){var s=p.restoreFocusTo||i.find("button")[0];s instanceof t.element&&(s=s[0]),s&&s.focus()}}},this.positionMode=function(){var e=(o.mdPositionMode||"target").split(" ");return 1==e.length&&e.push(e[0]),{left:e[0],top:e[1]}},this.offsets=function(){var e=(o.mdOffset||"0 0").split(" ").map(parseFloat);if(2==e.length)return{left:e[0],top:e[1]};if(1==e.length)return{top:e[0],left:e[0]};throw Error("Invalid offsets specified. Please follow format <x, y> or <n>")}}e.$inject=["$mdMenu","$attrs","$element","$scope","$mdUtil","$timeout","$rootScope","$q"],t.module("material.components.menu").controller("mdMenuCtrl",e)}(),function(){function e(e){function o(n){n.addClass("md-menu");var o=n.children()[0],a=e.prefixer();if(a.hasAttribute(o,"ng-click")||(o=o.querySelector(a.buildSelector(["ng-click","ng-mouseenter"]))||o),!o||"MD-BUTTON"!=o.nodeName&&"BUTTON"!=o.nodeName||o.hasAttribute("type")||o.setAttribute("type","button"),2!=n.children().length)throw Error(r+"Expected two children elements.");o&&o.setAttribute("aria-haspopup","true");var d=n[0].querySelectorAll("md-menu"),s=parseInt(n[0].getAttribute("md-nest-level"),10)||0;return d&&t.forEach(e.nodesToArray(d),function(e){e.hasAttribute("md-position-mode")||e.setAttribute("md-position-mode","cascade"),e.classList.add("_md-nested-menu"),e.setAttribute("md-nest-level",s+1)}),i}function i(e,o,i,r){var a=r[0],d=r[1]!=n,s=t.element('<div class="_md md-open-menu-container md-whiteframe-z2"></div>'),l=o.children()[1];o.addClass("_md"),l.hasAttribute("role")||l.setAttribute("role","menu"),s.append(l),o.on("$destroy",function(){s.remove()}),o.append(s),s[0].style.display="none",a.init(s,{isInMenuBar:d})}var r="Invalid HTML for md-menu: ";return{restrict:"E",require:["mdMenu","?^mdMenuBar"],controller:"mdMenuCtrl",scope:!0,compile:o}}e.$inject=["$mdUtil"],t.module("material.components.menu").directive("mdMenu",e)}(),function(){function e(e){function o(e,o,a,d,s,l,c,m,u){function p(n,o,i){return i.nestLevel?t.noop:(i.disableParentScroll&&!e.getClosest(i.target,"MD-DIALOG")?i.restoreScroll=e.disableScrollAround(i.element,i.parent):i.disableParentScroll=!1,i.hasBackdrop&&(i.backdrop=e.createBackdrop(n,"md-menu-backdrop md-click-catcher"),u.enter(i.backdrop,d[0].body)),function(){i.backdrop&&i.backdrop.remove(),i.disableParentScroll&&i.restoreScroll()})}function h(e,t,n){function o(){return m(t,{addClass:"md-leave"}).start()}function i(){t.removeClass("md-active"),v(t,n),n.alreadyOpen=!1}return n.cleanupInteraction&&n.cleanupInteraction(),n.cleanupResizing(),n.hideBackdrop(),n.$destroy===!0?i():o().then(i)}function f(n,i,r){function d(){return r.parent.append(i),i[0].style.display="",l(function(e){var t=E(i,r);i.removeClass("md-leave"),m(i,{addClass:"md-active",from:C.toCss(t),to:C.toCss({transform:""})}).start().then(e)})}function u(){if(!r.target)throw Error("$mdMenu.show() expected a target to animate from in options.target");t.extend(r,{alreadyOpen:!1,isRemoved:!1,target:t.element(r.target),parent:t.element(r.parent),menuContentEl:t.element(i[0].querySelector("md-menu-content"))})}function h(){var e=function(e,t){return c.throttle(function(){if(!r.isRemoved){var n=E(e,t);e.css(C.toCss(n))}})}(i,r);return s.addEventListener("resize",e),s.addEventListener("orientationchange",e),function(){s.removeEventListener("resize",e),s.removeEventListener("orientationchange",e)}}function f(){function t(t){var n;switch(t.keyCode){case a.KEY_CODE.ESCAPE:r.mdMenuCtrl.close(!1,{closeAll:!0}),n=!0;break;case a.KEY_CODE.UP_ARROW:g(t,r.menuContentEl,r,-1)||r.nestLevel||r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.DOWN_ARROW:g(t,r.menuContentEl,r,1)||r.nestLevel||r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.LEFT_ARROW:r.nestLevel?r.mdMenuCtrl.close():r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.RIGHT_ARROW:var o=e.getClosest(t.target,"MD-MENU");o&&o!=r.parent[0]?t.target.click():r.mdMenuCtrl.triggerContainerProxy(t),n=!0}n&&(t.preventDefault(),t.stopImmediatePropagation())}function o(e){e.preventDefault(),e.stopPropagation(),n.$apply(function(){r.mdMenuCtrl.close(!0,{closeAll:!0})})}function d(t){function o(){n.$apply(function(){r.mdMenuCtrl.close(!0,{closeAll:!0})})}function i(e,t){if(!e)return!1;for(var n,o=0;n=t[o];++o)if($.hasAttribute(e,n))return!0;return!1}var a=t.target;do{if(a==r.menuContentEl[0])return;if((i(a,["ng-click","ng-href","ui-sref"])||"BUTTON"==a.nodeName||"MD-BUTTON"==a.nodeName)&&!i(a,["md-prevent-menu-close"])){var d=e.getClosest(a,"MD-MENU");a.hasAttribute("disabled")||d&&d!=r.parent[0]||o();break}}while(a=a.parentNode)}i.addClass("md-clickable"),r.backdrop&&r.backdrop.on("click",o),r.menuContentEl.on("keydown",t),r.menuContentEl[0].addEventListener("click",d,!0);var s=r.menuContentEl[0].querySelector($.buildSelector(["md-menu-focus-target","md-autofocus"]));if(!s){var l=r.menuContentEl[0].firstElementChild;s=l&&(l.querySelector(".md-button:not([disabled])")||l.firstElementChild)}return s&&s.focus(),function(){i.removeClass("md-clickable"),r.backdrop&&r.backdrop.off("click",o),r.menuContentEl.off("keydown",t),r.menuContentEl[0].removeEventListener("click",d,!0)}}return u(r),o.inherit(r.menuContentEl,r.target),r.cleanupResizing=h(),r.hideBackdrop=p(n,i,r),d().then(function(e){return r.alreadyOpen=!0,r.cleanupInteraction=f(),e})}function g(t,n,o,i){for(var r,a=e.getClosest(t.target,"MD-MENU-ITEM"),d=e.nodesToArray(n[0].children),s=d.indexOf(a),l=s+i;l>=0&&l<d.length;l+=i){var c=d[l].querySelector(".md-button");if(r=b(c))break}return r}function b(e){if(e&&e.getAttribute("tabindex")!=-1)return e.focus(),d[0].activeElement==e}function v(e,t){t.preserveElement?i(e).style.display="none":i(e).parentNode===i(t.parent)&&i(t.parent).removeChild(i(e))}function E(t,o){function i(e){e.top=Math.max(Math.min(e.top,v.bottom-c.offsetHeight),v.top),e.left=Math.max(Math.min(e.left,v.right-c.offsetWidth),v.left)}function a(){for(var e=0;e<m.children.length;++e)if("none"!=s.getComputedStyle(m.children[e]).display)return m.children[e]}var l,c=t[0],m=t[0].firstElementChild,u=m.getBoundingClientRect(),p=d[0].body,h=p.getBoundingClientRect(),f=s.getComputedStyle(m),g=o.target[0].querySelector($.buildSelector("md-menu-origin"))||o.target[0],b=g.getBoundingClientRect(),v={left:h.left+r,top:Math.max(h.top,0)+r,bottom:Math.max(h.bottom,Math.max(h.top,0)+h.height)-r,right:h.right-r},E={top:0,left:0,right:0,bottom:0},C={top:0,left:0,right:0,bottom:0},M=o.mdMenuCtrl.positionMode();"target"!=M.top&&"target"!=M.left&&"target-right"!=M.left||(l=a(),l&&(l=l.firstElementChild||l,l=l.querySelector($.buildSelector("md-menu-align-target"))||l,E=l.getBoundingClientRect(),C={top:parseFloat(c.style.top||0),left:parseFloat(c.style.left||0)}));var y={},T="top ";switch(M.top){case"target":y.top=C.top+b.top-E.top;break;case"cascade":y.top=b.top-parseFloat(f.paddingTop)-g.style.top;break;case"bottom":y.top=b.top+b.height;break;default:throw new Error('Invalid target mode "'+M.top+'" specified for md-menu on Y axis.')}var A="rtl"==e.bidi();switch(M.left){case"target":y.left=C.left+b.left-E.left,T+=A?"right":"left";break;case"target-left":y.left=b.left,T+="left";break;case"target-right":y.left=b.right-u.width+(u.right-E.right),T+="right";break;case"cascade":var w=A?b.left-u.width<v.left:b.right+u.width<v.right;y.left=w?b.right-g.style.left:b.left-g.style.left-u.width,T+=w?"left":"right";break;case"right":A?(y.left=b.right-b.width,T+="left"):(y.left=b.right-u.width,T+="right");break;case"left":A?(y.left=b.right-u.width,T+="right"):(y.left=b.left,T+="left");break;default:throw new Error('Invalid target mode "'+M.left+'" specified for md-menu on X axis.')}var k=o.mdMenuCtrl.offsets();y.top+=k.top,y.left+=k.left,i(y);var x=Math.round(100*Math.min(b.width/c.offsetWidth,1))/100,_=Math.round(100*Math.min(b.height/c.offsetHeight,1))/100;return{top:Math.round(y.top),left:Math.round(y.left),transform:o.alreadyOpen?n:e.supplant("scale({0},{1})",[x,_]),transformOrigin:T}}var $=e.prefixer(),C=e.dom.animator;return{parent:"body",onShow:f,onRemove:h,hasBackdrop:!0,disableParentScroll:!0,skipCompile:!0,preserveScope:!0,skipHide:!0,themable:!0}}function i(e){return e instanceof t.element&&(e=e[0]),e}o.$inject=["$mdUtil","$mdTheming","$mdConstant","$document","$window","$q","$$rAF","$animateCss","$animate"];var r=8;return e("$mdMenu").setDefaults({methods:["target"],options:o})}e.$inject=["$$interimElementProvider"],t.module("material.components.menu").provider("$mdMenu",e)}(),function(){function e(e,n,i,r,a,d,s,l){this.$element=i,this.$attrs=r,this.$mdConstant=a,this.$mdUtil=s,this.$document=d,this.$scope=e,this.$rootScope=n,this.$timeout=l;var c=this;t.forEach(o,function(e){c[e]=t.bind(c,c[e])})}e.$inject=["$scope","$rootScope","$element","$attrs","$mdConstant","$document","$mdUtil","$timeout"],t.module("material.components.menuBar").controller("MenuBarController",e);var o=["handleKeyDown","handleMenuHover","scheduleOpenHoveredMenu","cancelScheduledOpen"];e.prototype.init=function(){var e=this.$element,t=this.$mdUtil,o=this.$scope,i=this,r=[];e.on("keydown",this.handleKeyDown),this.parentToolbar=t.getClosest(e,"MD-TOOLBAR"),r.push(this.$rootScope.$on("$mdMenuOpen",function(t,n){i.getMenus().indexOf(n[0])!=-1&&(e[0].classList.add("md-open"),n[0].classList.add("md-open"),i.currentlyOpenMenu=n.controller("mdMenu"),i.currentlyOpenMenu.registerContainerProxy(i.handleKeyDown),i.enableOpenOnHover())})),r.push(this.$rootScope.$on("$mdMenuClose",function(o,r,a){var d=i.getMenus();if(d.indexOf(r[0])!=-1&&(e[0].classList.remove("md-open"),r[0].classList.remove("md-open")),e[0].contains(r[0])){for(var s=r[0];s&&d.indexOf(s)==-1;)s=t.getClosest(s,"MD-MENU",!0);s&&(a.skipFocus||s.querySelector("button:not([disabled])").focus(),i.currentlyOpenMenu=n,i.disableOpenOnHover(),i.setKeyboardMode(!0))}})),o.$on("$destroy",function(){for(i.disableOpenOnHover();r.length;)r.shift()()}),this.setKeyboardMode(!0)},e.prototype.setKeyboardMode=function(e){e?this.$element[0].classList.add("md-keyboard-mode"):this.$element[0].classList.remove("md-keyboard-mode")},e.prototype.enableOpenOnHover=function(){if(!this.openOnHoverEnabled){
var e=this;e.openOnHoverEnabled=!0,e.parentToolbar&&(e.parentToolbar.classList.add("md-has-open-menu"),e.$mdUtil.nextTick(function(){t.element(e.parentToolbar).on("click",e.handleParentClick)},!1)),t.element(e.getMenus()).on("mouseenter",e.handleMenuHover)}},e.prototype.handleMenuHover=function(e){this.setKeyboardMode(!1),this.openOnHoverEnabled&&this.scheduleOpenHoveredMenu(e)},e.prototype.disableOpenOnHover=function(){this.openOnHoverEnabled&&(this.openOnHoverEnabled=!1,this.parentToolbar&&(this.parentToolbar.classList.remove("md-has-open-menu"),t.element(this.parentToolbar).off("click",this.handleParentClick)),t.element(this.getMenus()).off("mouseenter",this.handleMenuHover))},e.prototype.scheduleOpenHoveredMenu=function(e){var n=t.element(e.currentTarget),o=n.controller("mdMenu");this.setKeyboardMode(!1),this.scheduleOpenMenu(o)},e.prototype.scheduleOpenMenu=function(e){var t=this,o=this.$timeout;e!=t.currentlyOpenMenu&&(o.cancel(t.pendingMenuOpen),t.pendingMenuOpen=o(function(){t.pendingMenuOpen=n,t.currentlyOpenMenu&&t.currentlyOpenMenu.close(!0,{closeAll:!0}),e.open()},200,!1))},e.prototype.handleKeyDown=function(e){var n=this.$mdConstant.KEY_CODE,o=this.currentlyOpenMenu,i=o&&o.isOpen;this.setKeyboardMode(!0);var r,a,d;switch(e.keyCode){case n.DOWN_ARROW:o?o.focusMenuContainer():this.openFocusedMenu(),r=!0;break;case n.UP_ARROW:o&&o.close(),r=!0;break;case n.LEFT_ARROW:a=this.focusMenu(-1),i&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),r=!0;break;case n.RIGHT_ARROW:a=this.focusMenu(1),i&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),r=!0}r&&(e&&e.preventDefault&&e.preventDefault(),e&&e.stopImmediatePropagation&&e.stopImmediatePropagation())},e.prototype.focusMenu=function(e){var t=this.getMenus(),n=this.getFocusedMenuIndex();n==-1&&(n=this.getOpenMenuIndex());var o=!1;if(n==-1?(n=0,o=!0):(e<0&&n>0||e>0&&n<t.length-e)&&(n+=e,o=!0),o)return t[n].querySelector("button").focus(),t[n]},e.prototype.openFocusedMenu=function(){var e=this.getFocusedMenu();e&&t.element(e).controller("mdMenu").open()},e.prototype.getMenus=function(){var e=this.$element;return this.$mdUtil.nodesToArray(e[0].children).filter(function(e){return"MD-MENU"==e.nodeName})},e.prototype.getFocusedMenu=function(){return this.getMenus()[this.getFocusedMenuIndex()]},e.prototype.getFocusedMenuIndex=function(){var e=this.$mdUtil,t=e.getClosest(this.$document[0].activeElement,"MD-MENU");if(!t)return-1;var n=this.getMenus().indexOf(t);return n},e.prototype.getOpenMenuIndex=function(){for(var e=this.getMenus(),t=0;t<e.length;++t)if(e[t].classList.contains("md-open"))return t;return-1},e.prototype.handleParentClick=function(e){var n=this.querySelector("md-menu.md-open");n&&!n.contains(e.target)&&t.element(n).controller("mdMenu").close()}}(),function(){function e(e,n){return{restrict:"E",require:"mdMenuBar",controller:"MenuBarController",compile:function(o,i){return i.ariaRole||o[0].setAttribute("role","menubar"),t.forEach(o[0].children,function(n){if("MD-MENU"==n.nodeName){n.hasAttribute("md-position-mode")||(n.setAttribute("md-position-mode","left bottom"),n.querySelector("button, a, md-button").setAttribute("role","menuitem"));var o=e.nodesToArray(n.querySelectorAll("md-menu-content"));t.forEach(o,function(e){e.classList.add("md-menu-bar-menu"),e.classList.add("md-dense"),e.hasAttribute("width")||e.setAttribute("width",5)})}}),o.find("md-menu-item").addClass("md-in-menu-bar"),function(e,t,o,i){t.addClass("_md"),n(e,t),i.init()}}}}e.$inject=["$mdUtil","$mdTheming"],t.module("material.components.menuBar").directive("mdMenuBar",e)}(),function(){function e(){return{restrict:"E",compile:function(e,t){t.role||e[0].setAttribute("role","separator")}}}t.module("material.components.menuBar").directive("mdMenuDivider",e)}(),function(){function e(e,t,n){this.$element=t,this.$attrs=n,this.$scope=e}e.$inject=["$scope","$element","$attrs"],t.module("material.components.menuBar").controller("MenuItemController",e),e.prototype.init=function(e){var t=this.$element,n=this.$attrs;this.ngModel=e,"checkbox"!=n.type&&"radio"!=n.type||(this.mode=n.type,this.iconEl=t[0].children[0],this.buttonEl=t[0].children[1],e&&this.initClickListeners())},e.prototype.clearNgAria=function(){var e=this.$element[0],n=["role","tabindex","aria-invalid","aria-checked"];t.forEach(n,function(t){e.removeAttribute(t)})},e.prototype.initClickListeners=function(){function e(){if("radio"==d){var e=a.ngValue?r.$eval(a.ngValue):a.value;return i.$modelValue==e}return i.$modelValue}function n(e){e?l.off("click",c):l.on("click",c)}var o=this,i=this.ngModel,r=this.$scope,a=this.$attrs,d=(this.$element,this.mode);this.handleClick=t.bind(this,this.handleClick);var s=this.iconEl,l=t.element(this.buttonEl),c=this.handleClick;a.$observe("disabled",n),n(a.disabled),i.$render=function(){o.clearNgAria(),e()?(s.style.display="",l.attr("aria-checked","true")):(s.style.display="none",l.attr("aria-checked","false"))},r.$$postDigest(i.$render)},e.prototype.handleClick=function(e){var t,n=this.mode,o=this.ngModel,i=this.$attrs;"checkbox"==n?t=!o.$modelValue:"radio"==n&&(t=i.ngValue?this.$scope.$eval(i.ngValue):i.value),o.$setViewValue(t),o.$render()}}(),function(){function e(e,n){return{controller:"MenuItemController",require:["mdMenuItem","?ngModel"],priority:210,compile:function(o,i){function r(e,n,i){i=i||o,i instanceof t.element&&(i=i[0]),i.hasAttribute(e)||i.setAttribute(e,n)}function a(n){var i=e.prefixer(n);t.forEach(i,function(e){if(o[0].hasAttribute(e)){var t=o[0].getAttribute(e);c[0].setAttribute(e,t),o[0].removeAttribute(e)}})}var d=i.type,s="md-in-menu-bar";if("checkbox"!=d&&"radio"!=d||!o.hasClass(s))r("role","menuitem",o[0].querySelector("md-button, button, a"));else{var l=o[0].textContent,c=t.element('<md-button type="button"></md-button>'),m='<md-icon md-svg-src="'+n.mdChecked+'"></md-icon>';c.html(l),c.attr("tabindex","0"),o.html(""),o.append(t.element(m)),o.append(c),o.addClass("md-indent").removeClass(s),r("role","checkbox"==d?"menuitemcheckbox":"menuitemradio",c),a("ng-disabled")}return function(e,t,n,o){var i=o[0],r=o[1];i.init(r)}}}}e.$inject=["$mdUtil","$$mdSvgRegistry"],t.module("material.components.menuBar").directive("mdMenuItem",e)}(),function(){function e(e,n,o,i,r,a){function d(a,d,l){function f(t,o,r,d,l){var c=++N,h=i.now(),f=o-t,g=m(a.mdDiameter),b=g-u(g),v=r||n.easeFn,E=d||n.duration;o===t?k.attr("d",s(o,g,b,l)):y=p(function $(){var n=e.Math.max(0,e.Math.min(i.now()-h,E));k.attr("d",s(v(n,t,f,E),g,b,l)),c===N&&n<E&&(y=p($))})}function $(){f(x,_,n.easeFnIndeterminate,n.durationIndeterminate,S),S=(S+_)%100;var e=x;x=-_,_=-e}function C(){T||(T=r($,n.durationIndeterminate+50,0,!1),$(),d.addClass(E).removeAttr("aria-valuenow"))}function M(){T&&(r.cancel(T),T=null,d.removeClass(E))}var y,T,A=d[0],w=t.element(A.querySelector("svg")),k=t.element(A.querySelector("path")),x=n.startIndeterminate,_=n.endIndeterminate,S=0,N=0;o(d),d.toggleClass(v,l.hasOwnProperty("disabled")),a.mdMode===b&&C(),a.$on("$destroy",function(){M(),y&&h(y)}),a.$watchGroup(["value","mdMode",function(){var e=A.disabled;return e===!0||e===!1?e:t.isDefined(d.attr("disabled"))}],function(e,t){var n=e[1],o=e[2],i=t[2];if(o!==i&&d.toggleClass(v,!!o),o)M();else if(n!==g&&n!==b&&(n=b,l.$set("mdMode",n)),n===b)C();else{var r=c(e[0]);M(),d.attr("aria-valuenow",r),f(c(t[0]),r)}}),a.$watch("mdDiameter",function(e){var t=m(e),n=u(t),o=t/2+"px",i={width:t+"px",height:t+"px"};w[0].setAttribute("viewBox","0 0 "+t+" "+t),w.css(i).css("transform-origin",o+" "+o+" "+o),d.css(i),k.css("stroke-width",n+"px")})}function s(e,t,n,o){var i,r=3.5999,a=o||0,d=t/2,s=n/2,c=a*r,m=e*r,u=l(d,s,c),p=l(d,s,m+c),h=m<0?0:1;return i=m<0?m>=-180?0:1:m<=180?0:1,"M"+u+"A"+s+","+s+" 0 "+i+","+h+" "+p}function l(t,n,o){var i=(o-90)*f;return t+n*e.Math.cos(i)+","+(t+n*e.Math.sin(i))}function c(t){return e.Math.max(0,e.Math.min(t||0,100))}function m(e){var t=n.progressSize;if(e){var o=parseFloat(e);return e.lastIndexOf("%")===e.length-1&&(o=o/100*t),o}return t}function u(e){return n.strokeWidth/100*e}var p=e.requestAnimationFrame||e.webkitRequestAnimationFrame||t.noop,h=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.webkitCancelRequestAnimationFrame||t.noop,f=e.Math.PI/180,g="determinate",b="indeterminate",v="_md-progress-circular-disabled",E="md-mode-indeterminate";return{restrict:"E",scope:{value:"@",mdDiameter:"@",mdMode:"@"},template:'<svg xmlns="http://www.w3.org/2000/svg"><path fill="none"/></svg>',compile:function(e,n){if(e.attr({"aria-valuemin":0,"aria-valuemax":100,role:"progressbar"}),t.isUndefined(n.mdMode)){var o=t.isDefined(n.value),i=o?g:b;n.$set("mdMode",i)}else n.$set("mdMode",n.mdMode.trim());return d}}}e.$inject=["$window","$mdProgressCircular","$mdTheming","$mdUtil","$interval","$log"],t.module("material.components.progressCircular").directive("mdProgressCircular",e)}(),function(){function e(){function e(e,t,n,o){return n*e/o+t}function n(e,t,n,o){var i=(e/=o)*e,r=i*e;return t+n*(6*r*i+-15*i*i+10*r)}var o={progressSize:50,strokeWidth:10,duration:100,easeFn:e,durationIndeterminate:500,startIndeterminate:3,endIndeterminate:80,easeFnIndeterminate:n,easingPresets:{linearEase:e,materialEase:n}};return{configure:function(e){return o=t.extend(o,e||{})},$get:function(){return o}}}t.module("material.components.progressCircular").provider("$mdProgressCircular",e)}(),function(){function e(){function e(e,o,i,r){if(r){var a=r.getTabElementIndex(o),d=n(o,"md-tab-body").remove(),s=n(o,"md-tab-label").remove(),l=r.insertTab({scope:e,parent:e.$parent,index:a,element:o,template:d.html(),label:s.html()},a);e.select=e.select||t.noop,e.deselect=e.deselect||t.noop,e.$watch("active",function(e){e&&r.select(l.getIndex(),!0)}),e.$watch("disabled",function(){r.refreshIndex()}),e.$watch(function(){return r.getTabElementIndex(o)},function(e){l.index=e,r.updateTabOrder()}),e.$on("$destroy",function(){r.removeTab(l)})}}function n(e,n){for(var o=e[0].children,i=0,r=o.length;i<r;i++){var a=o[i];if(a.tagName===n.toUpperCase())return t.element(a)}return t.element()}return{require:"^?mdTabs",terminal:!0,compile:function(o,i){var r=n(o,"md-tab-label"),a=n(o,"md-tab-body");if(0==r.length&&(r=t.element("<md-tab-label></md-tab-label>"),i.label?r.text(i.label):r.append(o.contents()),0==a.length)){var d=o.contents().detach();a=t.element("<md-tab-body></md-tab-body>"),a.append(d)}return o.append(r),a.html()&&o.append(a),e},scope:{active:"=?mdActive",disabled:"=?ngDisabled",select:"&?mdOnSelect",deselect:"&?mdOnDeselect"}}}t.module("material.components.tabs").directive("mdTab",e)}(),function(){function e(){return{require:"^?mdTabs",link:function(e,t,n,o){o&&o.attachRipple(e,t)}}}t.module("material.components.tabs").directive("mdTabItem",e)}(),function(){function e(){return{terminal:!0}}t.module("material.components.tabs").directive("mdTabLabel",e)}(),function(){function e(e){return{restrict:"A",compile:function(t,n){var o=e(n.mdTabScroll,null,!0);return function(e,t){t.on("mousewheel",function(t){e.$apply(function(){o(e,{$event:t})})})}}}}e.$inject=["$parse"],t.module("material.components.tabs").directive("mdTabScroll",e)}(),function(){function e(e,o,i,r,a,d,s,l,c,m){function u(){ce.selectedIndex=ce.selectedIndex||0,p(),f(),h(),m(o),d.nextTick(function(){ue=F(),re(),te(),ae(),ce.tabs[ce.selectedIndex]&&ce.tabs[ce.selectedIndex].scope.select(),fe=!0,Y()})}function p(){var e=l.$mdTabsTemplate,n=t.element(o[0].querySelector("md-tab-data"));n.html(e),c(n.contents())(ce.parent),delete l.$mdTabsTemplate}function h(){t.element(i).on("resize",I),e.$on("$destroy",v)}function f(){e.$watch("$mdTabsCtrl.selectedIndex",w)}function g(e,t){var n=l.$normalize("md-"+e);t&&V(e,t),l.$observe(n,function(t){ce[e]=t})}function b(e,t){function n(t){ce[e]="false"!==t}var o=l.$normalize("md-"+e);t&&V(e,t),l.hasOwnProperty(o)&&n(l[o]),l.$observe(o,n)}function v(){he=!0,t.element(i).off("resize",I)}function E(e){var n=F();t.element(n.wrapper).toggleClass("md-stretch-tabs",j()),ae()}function $(e){ce.shouldCenterTabs=q()}function C(e,n){if(e!==n){var o=F();t.forEach(o.tabs,function(t){t.style.maxWidth=e+"px"}),d.nextTick(ce.updateInkBarStyles)}}function M(e,t){e!==t&&(ce.maxTabWidth=Q(),ce.shouldCenterTabs=q(),d.nextTick(function(){ce.maxTabWidth=Q(),te(ce.selectedIndex)}))}function y(e){o[e?"removeClass":"addClass"]("md-no-tab-content")}function T(n){var o=F(),i=ce.shouldCenterTabs?"":"-"+n+"px";t.element(o.paging).css(r.CSS.TRANSFORM,"translate3d("+i+", 0, 0)"),e.$broadcast("$mdTabsPaginationChanged")}function A(e,t){e!==t&&F().tabs[e]&&(te(),ee())}function w(t,n){t!==n&&(ce.selectedIndex=W(t),ce.lastSelectedIndex=n,ce.updateInkBarStyles(),re(),te(t),e.$broadcast("$mdTabsChanged"),ce.tabs[n]&&ce.tabs[n].scope.deselect(),ce.tabs[t]&&ce.tabs[t].scope.select())}function k(e){var t=o[0].getElementsByTagName("md-tab");return Array.prototype.indexOf.call(t,e[0])}function x(){x.watcher||(x.watcher=e.$watch(function(){d.nextTick(function(){x.watcher&&o.prop("offsetParent")&&(x.watcher(),x.watcher=null,I())},!1)}))}function _(e){switch(e.keyCode){case r.KEY_CODE.LEFT_ARROW:e.preventDefault(),J(-1,!0);break;case r.KEY_CODE.RIGHT_ARROW:e.preventDefault(),J(1,!0);break;case r.KEY_CODE.SPACE:case r.KEY_CODE.ENTER:e.preventDefault(),me||S(ce.focusIndex)}ce.lastClick=!1}function S(e,t){me||(ce.focusIndex=ce.selectedIndex=e),ce.lastClick=!0,t&&ce.noSelectClick||d.nextTick(function(){ce.tabs[e].element.triggerHandler("click")},!1)}function N(e){ce.shouldPaginate&&(e.preventDefault(),ce.offsetLeft=se(ce.offsetLeft-e.wheelDelta))}function D(){var e,t,n=F(),o=n.canvas.clientWidth,i=o+ce.offsetLeft;for(e=0;e<n.tabs.length&&(t=n.tabs[e],!(t.offsetLeft+t.offsetWidth>i));e++);o>t.offsetWidth?ce.offsetLeft=se(t.offsetLeft):ce.offsetLeft=se(t.offsetLeft+(t.offsetWidth-o+1))}function H(){var e,t,n=F();for(e=0;e<n.tabs.length&&(t=n.tabs[e],!(t.offsetLeft+t.offsetWidth>=ce.offsetLeft));e++);n.canvas.clientWidth>t.offsetWidth?ce.offsetLeft=se(t.offsetLeft+t.offsetWidth-n.canvas.clientWidth):ce.offsetLeft=se(t.offsetLeft)}function I(){ce.lastSelectedIndex=ce.selectedIndex,ce.offsetLeft=se(ce.offsetLeft),d.nextTick(function(){ce.updateInkBarStyles(),Y()})}function O(e){t.element(F().inkBar).toggleClass("ng-hide",e)}function R(e){o.toggleClass("md-dynamic-height",e)}function L(e){if(!he){var t=ce.selectedIndex,n=ce.tabs.splice(e.getIndex(),1)[0];ie(),ce.selectedIndex===t&&(n.scope.deselect(),ce.tabs[ce.selectedIndex]&&ce.tabs[ce.selectedIndex].scope.select()),d.nextTick(function(){Y(),ce.offsetLeft=se(ce.offsetLeft)})}}function P(e,n){var o=fe,i={getIndex:function(){return ce.tabs.indexOf(r)},isActive:function(){return this.getIndex()===ce.selectedIndex},isLeft:function(){return this.getIndex()<ce.selectedIndex},isRight:function(){return this.getIndex()>ce.selectedIndex},shouldRender:function(){return!ce.noDisconnect||this.isActive()},hasFocus:function(){return!ce.lastClick&&ce.hasFocus&&this.getIndex()===ce.focusIndex},id:d.nextUid()},r=t.extend(i,e);return t.isDefined(n)?ce.tabs.splice(n,0,r):ce.tabs.push(r),ne(),oe(),d.nextTick(function(){Y(),o&&ce.autoselect&&d.nextTick(function(){d.nextTick(function(){S(ce.tabs.indexOf(r))})})}),r}function F(){var e={},t=o[0];return e.wrapper=t.querySelector("md-tabs-wrapper"),e.canvas=e.wrapper.querySelector("md-tabs-canvas"),e.paging=e.canvas.querySelector("md-pagination-wrapper"),e.inkBar=e.paging.querySelector("md-ink-bar"),e.contents=t.querySelectorAll("md-tabs-content-wrapper > md-tab-content"),e.tabs=e.paging.querySelectorAll("md-tab-item"),e.dummies=e.canvas.querySelectorAll("md-dummy-tab"),e}function B(){return ce.offsetLeft>0}function U(){var e=F(),t=e.tabs[e.tabs.length-1];return t&&t.offsetLeft+t.offsetWidth>e.canvas.clientWidth+ce.offsetLeft}function j(){switch(ce.stretchTabs){case"always":return!0;case"never":return!1;default:return!ce.shouldPaginate&&i.matchMedia("(max-width: 600px)").matches}}function q(){return ce.centerTabs&&!ce.shouldPaginate}function z(){if(ce.noPagination||!fe)return!1;var e=o.prop("clientWidth");return t.forEach(F().dummies,function(t){e-=t.offsetWidth}),e<0}function W(e){if(e===-1)return-1;var t,n,o=Math.max(ce.tabs.length-e,e);for(t=0;t<=o;t++){if(n=ce.tabs[e+t],n&&n.scope.disabled!==!0)return n.getIndex();if(n=ce.tabs[e-t],n&&n.scope.disabled!==!0)return n.getIndex()}return e}function V(e,t,n){Object.defineProperty(ce,e,{get:function(){return n},set:function(e){var o=n;n=e,t&&t(e,o)}})}function Y(){K(),ce.maxTabWidth=Q(),ce.shouldPaginate=z()}function K(){var e=F();j()?t.element(e.paging).css("width",""):t.element(e.paging).css("width",G()+"px")}function G(){return X(F().dummies)}function X(e){var n=0;return t.forEach(e,function(e){n+=Math.max(e.offsetWidth,e.getBoundingClientRect().width)}),Math.ceil(n)}function Q(){return o.prop("clientWidth")}function Z(){var e=ce.tabs[ce.selectedIndex],t=ce.tabs[ce.focusIndex];ce.tabs=ce.tabs.sort(function(e,t){return e.index-t.index}),ce.selectedIndex=ce.tabs.indexOf(e),ce.focusIndex=ce.tabs.indexOf(t)}function J(e,t){var n,o=t?"focusIndex":"selectedIndex",i=ce[o];for(n=i+e;ce.tabs[n]&&ce.tabs[n].scope.disabled;n+=e);ce.tabs[n]&&(ce[o]=n)}function ee(){F().dummies[ce.focusIndex].focus()}function te(e){var t=F();if(null==e&&(e=ce.focusIndex),t.tabs[e]&&!ce.shouldCenterTabs){var n=t.tabs[e],o=n.offsetLeft,i=n.offsetWidth+o;ce.offsetLeft=Math.max(ce.offsetLeft,se(i-t.canvas.clientWidth+64)),ce.offsetLeft=Math.min(ce.offsetLeft,se(o))}}function ne(){pe.forEach(function(e){d.nextTick(e)}),pe=[]}function oe(){var e=!1;t.forEach(ce.tabs,function(t){t.template&&(e=!0)}),ce.hasContent=e}function ie(){ce.selectedIndex=W(ce.selectedIndex),ce.focusIndex=W(ce.focusIndex)}function re(){if(!ce.dynamicHeight)return o.css("height","");if(!ce.tabs.length)return pe.push(re);var e=F(),t=e.contents[ce.selectedIndex],i=t?t.offsetHeight:0,r=e.wrapper.offsetHeight,a=i+r,l=o.prop("clientHeight");if(l!==a){"bottom"===o.attr("md-align-tabs")&&(l-=r,a-=r,o.attr("md-border-bottom")!==n&&++l),me=!0;var c={height:l+"px"},m={height:a+"px"};o.css(c),s(o,{from:c,to:m,easing:"cubic-bezier(0.35, 0, 0.25, 1)",duration:.5}).start().done(function(){o.css({transition:"none",height:""}),d.nextTick(function(){o.css("transition","")}),me=!1})}}function ae(){var e=F();if(!e.tabs[ce.selectedIndex])return void t.element(e.inkBar).css({left:"auto",right:"auto"});if(!ce.tabs.length)return pe.push(ce.updateInkBarStyles);if(!o.prop("offsetParent"))return x();var n=ce.selectedIndex,i=e.paging.offsetWidth,r=e.tabs[n],a=r.offsetLeft,s=i-a-r.offsetWidth;if(ce.shouldCenterTabs){var l=X(e.tabs);i>l&&d.nextTick(ae,!1)}de(),t.element(e.inkBar).css({left:a+"px",right:s+"px"})}function de(){var e=F(),n=ce.selectedIndex,o=ce.lastSelectedIndex,i=t.element(e.inkBar);t.isNumber(o)&&i.toggleClass("md-left",n<o).toggleClass("md-right",n>o)}function se(e){var t=F();if(!t.tabs.length||!ce.shouldPaginate)return 0;var n=t.tabs[t.tabs.length-1],o=n.offsetLeft+n.offsetWidth;return e=Math.max(0,e),e=Math.min(o-t.canvas.clientWidth,e)}function le(e,n){var o=F(),i={colorElement:t.element(o.inkBar)};a.attach(e,n,i)}var ce=this,me=!1,ue=F(),pe=[],he=!1,fe=!1;g("stretchTabs",E),V("focusIndex",A,ce.selectedIndex||0),V("offsetLeft",T,0),V("hasContent",y,!1),V("maxTabWidth",C,Q()),V("shouldPaginate",M,!1),b("noInkBar",O),b("dynamicHeight",R),b("noPagination"),b("swipeContent"),b("noDisconnect"),b("autoselect"),b("noSelectClick"),b("centerTabs",$,!1),b("enableDisconnect"),ce.scope=e,ce.parent=e.$parent,ce.tabs=[],ce.lastSelectedIndex=null,ce.hasFocus=!1,ce.lastClick=!0,ce.shouldCenterTabs=q(),ce.updatePagination=d.debounce(Y,100),ce.redirectFocus=ee,ce.attachRipple=le,ce.insertTab=P,ce.removeTab=L,ce.select=S,ce.scroll=N,ce.nextPage=D,ce.previousPage=H,ce.keydown=_,ce.canPageForward=U,ce.canPageBack=B,ce.refreshIndex=ie,ce.incrementIndex=J,ce.getTabElementIndex=k,ce.updateInkBarStyles=d.debounce(ae,100),ce.updateTabOrder=d.debounce(Z,100),u()}e.$inject=["$scope","$element","$window","$mdConstant","$mdTabInkRipple","$mdUtil","$animateCss","$attrs","$compile","$mdTheming"],t.module("material.components.tabs").controller("MdTabsController",e)}(),function(){function e(e){return{scope:{selectedIndex:"=?mdSelected"},template:function(t,n){return n.$mdTabsTemplate=t.html(),'<md-tabs-wrapper> <md-tab-data></md-tab-data> <md-prev-button tabindex="-1" role="button" aria-label="Previous Page" aria-disabled="{{!$mdTabsCtrl.canPageBack()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.previousPage()"> <md-icon md-svg-src="'+e.mdTabsArrow+'"></md-icon> </md-prev-button> <md-next-button tabindex="-1" role="button" aria-label="Next Page" aria-disabled="{{!$mdTabsCtrl.canPageForward()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.nextPage()"> <md-icon md-svg-src="'+e.mdTabsArrow+'"></md-icon> </md-next-button> <md-tabs-canvas tabindex="{{ $mdTabsCtrl.hasFocus ? -1 : 0 }}" aria-activedescendant="tab-item-{{$mdTabsCtrl.tabs[$mdTabsCtrl.focusIndex].id}}" ng-focus="$mdTabsCtrl.redirectFocus()" ng-class="{ \'md-paginated\': $mdTabsCtrl.shouldPaginate, \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" ng-keydown="$mdTabsCtrl.keydown($event)" role="tablist"> <md-pagination-wrapper ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" md-tab-scroll="$mdTabsCtrl.scroll($event)"> <md-tab-item tabindex="-1" class="md-tab" ng-repeat="tab in $mdTabsCtrl.tabs" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-click="$mdTabsCtrl.select(tab.getIndex())" ng-class="{ \'md-active\':    tab.isActive(), \'md-focused\':   tab.hasFocus(), \'md-disabled\':  tab.scope.disabled }" ng-disabled="tab.scope.disabled" md-swipe-left="$mdTabsCtrl.nextPage()" md-swipe-right="$mdTabsCtrl.previousPage()" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-tab-item> <md-ink-bar></md-ink-bar> </md-pagination-wrapper> <md-tabs-dummy-wrapper class="md-visually-hidden md-dummy-wrapper"> <md-dummy-tab class="md-tab" tabindex="-1" id="tab-item-{{::tab.id}}" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-focus="$mdTabsCtrl.hasFocus = true" ng-blur="$mdTabsCtrl.hasFocus = false" ng-repeat="tab in $mdTabsCtrl.tabs" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-dummy-tab> </md-tabs-dummy-wrapper> </md-tabs-canvas> </md-tabs-wrapper> <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent && $mdTabsCtrl.selectedIndex >= 0" class="_md"> <md-tab-content id="tab-content-{{::tab.id}}" class="_md" role="tabpanel" aria-labelledby="tab-item-{{::tab.id}}" md-swipe-left="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(1)" md-swipe-right="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(-1)" ng-if="$mdTabsCtrl.hasContent" ng-repeat="(index, tab) in $mdTabsCtrl.tabs" ng-class="{ \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null, \'md-active\':        tab.isActive(), \'md-left\':          tab.isLeft(), \'md-right\':         tab.isRight(), \'md-no-scroll\':     $mdTabsCtrl.dynamicHeight }"> <div md-tabs-template="::tab.template" md-connected-if="tab.isActive()" md-scope="::tab.parent" ng-if="$mdTabsCtrl.enableDisconnect || tab.shouldRender()"></div> </md-tab-content> </md-tabs-content-wrapper>'},controller:"MdTabsController",controllerAs:"$mdTabsCtrl",bindToController:!0}}e.$inject=["$$mdSvgRegistry"],t.module("material.components.tabs").directive("mdTabs",e)}(),function(){function e(e,t){return{require:"^?mdTabs",link:function(n,o,i,r){if(r){var a,d,s=function(){r.updatePagination(),r.updateInkBarStyles()};if("MutationObserver"in t){var l={childList:!0,subtree:!0,characterData:!0};a=new MutationObserver(s),a.observe(o[0],l),d=a.disconnect.bind(a)}else{var c=e.debounce(s,15,null,!1);o.on("DOMSubtreeModified",c),d=o.off.bind(o,"DOMSubtreeModified",c)}n.$on("$destroy",function(){d()})}}}}e.$inject=["$mdUtil","$window"],t.module("material.components.tabs").directive("mdTabsDummyWrapper",e)}(),function(){function e(e,t){function n(n,o,i,r){function a(){n.$watch("connected",function(e){e===!1?d():s()}),n.$on("$destroy",s)}function d(){r.enableDisconnect&&t.disconnectScope(l)}function s(){r.enableDisconnect&&t.reconnectScope(l)}if(r){var l=r.enableDisconnect?n.compileScope.$new():n.compileScope;return o.html(n.template),e(o.contents())(l),t.nextTick(a)}}return{restrict:"A",link:n,scope:{template:"=mdTabsTemplate",connected:"=?mdConnectedIf",compileScope:"=mdScope"},require:"^?mdTabs"}}e.$inject=["$compile","$mdUtil"],t.module("material.components.tabs").directive("mdTabsTemplate",e)}(),function(){t.module("material.core").constant("$MD_THEME_CSS","md-autocomplete.md-THEME_NAME-theme {  background: '{{background-A100}}'; }  md-autocomplete.md-THEME_NAME-theme[disabled]:not([md-floating-label]) {    background: '{{background-100}}'; }  md-autocomplete.md-THEME_NAME-theme button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete.md-THEME_NAME-theme button:after {    background: '{{background-600-0.3}}'; }.md-autocomplete-suggestions-container.md-THEME_NAME-theme {  background: '{{background-A100}}'; }  .md-autocomplete-suggestions-container.md-THEME_NAME-theme li {    color: '{{background-900}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li .highlight {      color: '{{background-600}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li:hover, .md-autocomplete-suggestions-container.md-THEME_NAME-theme li.selected {      background: '{{background-200}}'; }md-backdrop {  background-color: '{{background-900-0.0}}'; }  md-backdrop.md-opaque.md-THEME_NAME-theme {    background-color: '{{background-900-1.0}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-list-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }.md-button.md-THEME_NAME-theme:not([disabled]):hover {  background-color: '{{background-500-0.2}}'; }.md-button.md-THEME_NAME-theme:not([disabled]).md-focused {  background-color: '{{background-500-0.2}}'; }.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover {  background-color: transparent; }.md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab md-icon {    color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }.md-button.md-THEME_NAME-theme.md-primary {  color: '{{primary-color}}'; }  .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {    color: '{{primary-contrast}}';    background-color: '{{primary-color}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon {      color: '{{primary-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover {      background-color: '{{primary-600}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused {      background-color: '{{primary-600}}'; }  .md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon {    color: '{{primary-color}}'; }.md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon {    color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }.md-button.md-THEME_NAME-theme.md-raised {  color: '{{background-900}}';  background-color: '{{background-50}}'; }  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]) md-icon {    color: '{{background-900}}'; }  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover {    background-color: '{{background-50}}'; }  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused {    background-color: '{{background-200}}'; }.md-button.md-THEME_NAME-theme.md-warn {  color: '{{warn-color}}'; }  .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {    color: '{{warn-contrast}}';    background-color: '{{warn-color}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon {      color: '{{warn-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover {      background-color: '{{warn-600}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused {      background-color: '{{warn-600}}'; }  .md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon {    color: '{{warn-color}}'; }.md-button.md-THEME_NAME-theme.md-accent {  color: '{{accent-color}}'; }  .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {    color: '{{accent-contrast}}';    background-color: '{{accent-color}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon {      color: '{{accent-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover {      background-color: '{{accent-A700}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused {      background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon {    color: '{{accent-color}}'; }.md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled], .md-button.md-THEME_NAME-theme.md-accent[disabled], .md-button.md-THEME_NAME-theme.md-warn[disabled] {  color: '{{foreground-3}}';  cursor: default; }  .md-button.md-THEME_NAME-theme[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon {    color: '{{foreground-3}}'; }.md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {  background-color: '{{foreground-4}}'; }.md-button.md-THEME_NAME-theme[disabled] {  background-color: transparent; }._md a.md-THEME_NAME-theme:not(.md-button).md-primary {  color: '{{primary-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-primary:hover {    color: '{{primary-700}}'; }._md a.md-THEME_NAME-theme:not(.md-button).md-accent {  color: '{{accent-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-accent:hover {    color: '{{accent-700}}'; }._md a.md-THEME_NAME-theme:not(.md-button).md-accent {  color: '{{accent-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-accent:hover {    color: '{{accent-A700}}'; }._md a.md-THEME_NAME-theme:not(.md-button).md-warn {  color: '{{warn-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-warn:hover {    color: '{{warn-700}}'; }md-card.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-hue-1}}';  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }  md-card.md-THEME_NAME-theme md-card-header md-card-avatar md-icon {    color: '{{background-color}}';    background-color: '{{foreground-3}}'; }  md-card.md-THEME_NAME-theme md-card-header md-card-header-text .md-subhead {    color: '{{foreground-2}}'; }  md-card.md-THEME_NAME-theme md-card-title md-card-title-text:not(:only-child) .md-subhead {    color: '{{foreground-2}}'; }md-chips.md-THEME_NAME-theme .md-chips {  box-shadow: 0 1px '{{foreground-4}}'; }  md-chips.md-THEME_NAME-theme .md-chips.md-focused {    box-shadow: 0 2px '{{primary-color}}'; }  md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input {    color: '{{foreground-1}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-webkit-input-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input:-moz-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-moz-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input:-ms-input-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-webkit-input-placeholder {      color: '{{foreground-3}}'; }md-chips.md-THEME_NAME-theme md-chip {  background: '{{background-300}}';  color: '{{background-800}}'; }  md-chips.md-THEME_NAME-theme md-chip md-icon {    color: '{{background-700}}'; }  md-chips.md-THEME_NAME-theme md-chip.md-focused {    background: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-chips.md-THEME_NAME-theme md-chip.md-focused md-icon {      color: '{{primary-contrast}}'; }  md-chips.md-THEME_NAME-theme md-chip._md-chip-editing {    background: transparent;    color: '{{background-800}}'; }md-chips.md-THEME_NAME-theme md-chip-remove .md-button md-icon path {  fill: '{{background-500}}'; }.md-contact-suggestion span.md-contact-email {  color: '{{background-400}}'; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-A700}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked.md-focused .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not(.md-checked) .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{accent-contrast-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary:not(.md-checked) .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked.md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{primary-contrast-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-indeterminate[disabled] .md-container {  color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn:not(.md-checked) .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled]:not(.md-checked) .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon:after {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-label {  color: '{{foreground-3}}'; }md-content.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-default}}'; }/** Theme styles for mdCalendar. */.md-calendar.md-THEME_NAME-theme {  background: '{{background-A100}}';  color: '{{background-A200-0.87}}'; }  .md-calendar.md-THEME_NAME-theme tr:last-child td {    border-bottom-color: '{{background-200}}'; }.md-THEME_NAME-theme .md-calendar-day-header {  background: '{{background-300}}';  color: '{{background-A200-0.87}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator {  border: 1px solid '{{primary-500}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled {  color: '{{primary-500-0.6}}'; }.md-calendar-date.md-focus .md-THEME_NAME-theme .md-calendar-date-selection-indicator, .md-THEME_NAME-theme .md-calendar-date-selection-indicator:hover {  background: '{{background-300}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,.md-THEME_NAME-theme .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator {  background: '{{primary-500}}';  color: '{{primary-500-contrast}}';  border-color: transparent; }.md-THEME_NAME-theme .md-calendar-date-disabled,.md-THEME_NAME-theme .md-calendar-month-label-disabled {  color: '{{background-A200-0.435}}'; }/** Theme styles for mdDatepicker. */.md-THEME_NAME-theme .md-datepicker-input {  color: '{{foreground-1}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input:-moz-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-moz-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-input-container {  border-bottom-color: '{{foreground-4}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {    border-bottom-color: '{{primary-color}}'; }    .md-accent .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {      border-bottom-color: '{{accent-color}}'; }    .md-warn .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {      border-bottom-color: '{{warn-A700}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-invalid {    border-bottom-color: '{{warn-A700}}'; }.md-THEME_NAME-theme .md-datepicker-calendar-pane {  border-color: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button .md-datepicker-expand-triangle {  border-top-color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button:hover .md-datepicker-expand-triangle {  border-top-color: '{{foreground-2}}'; }.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  color: '{{primary-color}}'; }.md-THEME_NAME-theme .md-datepicker-open.md-accent .md-datepicker-calendar-icon, .md-accent .md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  color: '{{accent-color}}'; }.md-THEME_NAME-theme .md-datepicker-open.md-warn .md-datepicker-calendar-icon, .md-warn .md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  color: '{{warn-A700}}'; }.md-THEME_NAME-theme .md-datepicker-calendar {  background: '{{background-A100}}'; }.md-THEME_NAME-theme .md-datepicker-input-mask-opaque {  box-shadow: 0 0 0 9999px \"{{background-hue-1}}\"; }.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-input-container {  background: \"{{background-hue-1}}\"; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-hue-1}}';  color: '{{foreground-1}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions, md-dialog.md-THEME_NAME-theme.md-content-overflow md-dialog-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }.layout-row > md-divider.md-THEME_NAME-theme,.layout-xs-row > md-divider.md-THEME_NAME-theme, .layout-gt-xs-row > md-divider.md-THEME_NAME-theme,.layout-sm-row > md-divider.md-THEME_NAME-theme, .layout-gt-sm-row > md-divider.md-THEME_NAME-theme,.layout-md-row > md-divider.md-THEME_NAME-theme, .layout-gt-md-row > md-divider.md-THEME_NAME-theme,.layout-lg-row > md-divider.md-THEME_NAME-theme, .layout-gt-lg-row > md-divider.md-THEME_NAME-theme,.layout-xl-row > md-divider.md-THEME_NAME-theme {  border-right-color: '{{foreground-4}}'; }md-icon.md-THEME_NAME-theme {  color: '{{foreground-2}}'; }  md-icon.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  md-icon.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  md-icon.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme > md-icon {  color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme label,md-input-container.md-THEME_NAME-theme .md-placeholder {  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme label.md-required:after {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-focused):not(.md-input-invalid) label.md-required:after {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme .md-input-messages-animation, md-input-container.md-THEME_NAME-theme .md-input-message-animation {  color: '{{warn-A700}}'; }  md-input-container.md-THEME_NAME-theme .md-input-messages-animation .md-char-counter, md-input-container.md-THEME_NAME-theme .md-input-message-animation .md-char-counter {    color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input, md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-resized .md-input {  border-color: '{{primary-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon {  color: '{{primary-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent md-icon {  color: '{{accent-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn md-icon {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid label,md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input-message-animation,md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled],[disabled] md-input-container.md-THEME_NAME-theme .md-input {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, \"{{foreground-3}}\" 0%, \"{{foreground-3}}\" 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, \"{{foreground-3}}\" 100%); }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h4,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h3,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h4 {  color: '{{foreground-1}}'; }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text p,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text p {  color: '{{foreground-2}}'; }md-list.md-THEME_NAME-theme .md-proxy-focus.md-focused div.md-no-style {  background-color: '{{background-100}}'; }md-list.md-THEME_NAME-theme md-list-item .md-avatar-icon {  background-color: '{{foreground-3}}';  color: '{{background-color}}'; }md-list.md-THEME_NAME-theme md-list-item > md-icon {  color: '{{foreground-2}}'; }  md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight {    color: '{{primary-color}}'; }    md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight.md-accent {      color: '{{accent-color}}'; }md-menu-content.md-THEME_NAME-theme {  background-color: '{{background-A100}}'; }  md-menu-content.md-THEME_NAME-theme md-menu-item {    color: '{{background-A200-0.87}}'; }    md-menu-content.md-THEME_NAME-theme md-menu-item md-icon {      color: '{{background-A200-0.54}}'; }    md-menu-content.md-THEME_NAME-theme md-menu-item .md-button[disabled] {      color: '{{background-A200-0.25}}'; }      md-menu-content.md-THEME_NAME-theme md-menu-item .md-button[disabled] md-icon {        color: '{{background-A200-0.25}}'; }  md-menu-content.md-THEME_NAME-theme md-menu-divider {    background-color: '{{background-A200-0.11}}'; }md-menu-bar.md-THEME_NAME-theme > button.md-button {  color: '{{foreground-2}}';  border-radius: 2px; }md-menu-bar.md-THEME_NAME-theme md-menu.md-open > button, md-menu-bar.md-THEME_NAME-theme md-menu > button:focus {  outline: none;  background: '{{background-200}}'; }md-menu-bar.md-THEME_NAME-theme.md-open:not(.md-keyboard-mode) md-menu:hover > button {  background-color: '{{ background-500-0.2}}'; }md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:hover,md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:focus {  background: transparent; }md-menu-content.md-THEME_NAME-theme .md-menu > .md-button:after {  color: '{{background-A200-0.54}}'; }md-menu-content.md-THEME_NAME-theme .md-menu.md-open > .md-button {  background-color: '{{ background-500-0.2}}'; }md-toolbar.md-THEME_NAME-theme.md-menu-toolbar {  background-color: '{{background-A100}}';  color: '{{background-A200}}'; }  md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler {    background-color: '{{primary-color}}';    color: '{{background-A100-0.87}}'; }    md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler md-icon {      color: '{{background-A100-0.87}}'; }md-nav-bar.md-THEME_NAME-theme .md-nav-bar {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-nav-bar.md-THEME_NAME-theme .md-button._md-nav-button.md-unselected {  color: '{{foreground-2}}'; }md-nav-bar.md-THEME_NAME-theme md-nav-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }.md-panel {  background-color: '{{background-900-0.0}}'; }  .md-panel._md-panel-backdrop.md-THEME_NAME-theme {    background-color: '{{background-900-1.0}}'; }md-progress-circular.md-THEME_NAME-theme path {  stroke: '{{primary-color}}'; }md-progress-circular.md-THEME_NAME-theme.md-warn path {  stroke: '{{warn-color}}'; }md-progress-circular.md-THEME_NAME-theme.md-accent path {  stroke: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient(\"{{warn-100}}\" 0%, \"{{warn-100}}\" 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient(\"{{accent-100}}\" 0%, \"{{accent-100}}\" 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-A700}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-group.md-THEME_NAME-theme[disabled],md-radio-button.md-THEME_NAME-theme[disabled] {  color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-off,  md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {    border-color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-on,  md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {    border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme .md-checked .md-ink-ripple {  color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-primary .md-checked:not([disabled]) .md-ink-ripple, md-radio-group.md-THEME_NAME-theme .md-checked:not([disabled]).md-primary .md-ink-ripple {  color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme .md-checked.md-primary .md-ink-ripple {  color: '{{warn-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-primary .md-checked .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-primary .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-warn .md-checked .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-warn .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-input-container md-select.md-THEME_NAME-theme .md-select-value span:first-child:after {  color: '{{warn-A700}}'; }md-input-container:not(.md-input-focused):not(.md-input-invalid) md-select.md-THEME_NAME-theme .md-select-value span:first-child:after {  color: '{{foreground-3}}'; }md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-THEME_NAME-theme .md-select-value {  color: '{{primary-color}}'; }  md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder {    color: '{{primary-color}}'; }md-input-container.md-input-invalid md-select.md-THEME_NAME-theme .md-select-value {  color: '{{warn-A700}}' !important;  border-bottom-color: '{{warn-A700}}' !important; }md-input-container.md-input-invalid md-select.md-THEME_NAME-theme.md-no-underline .md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  border-bottom-color: transparent;  background-image: linear-gradient(to right, \"{{foreground-3}}\" 0%, \"{{foreground-3}}\" 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, \"{{foreground-3}}\" 100%); }md-select.md-THEME_NAME-theme .md-select-value {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme .md-select-value span:first-child:after {    color: '{{warn-A700}}'; }md-select.md-THEME_NAME-theme.md-no-underline .md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme.ng-invalid.ng-touched .md-select-value {  color: '{{warn-A700}}' !important;  border-bottom-color: '{{warn-A700}}' !important; }md-select.md-THEME_NAME-theme.ng-invalid.ng-touched.md-no-underline .md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value.md-select-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-no-underline .md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-value {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-value {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-value {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-value.md-select-placeholder {    color: '{{foreground-3}}'; }md-select-menu.md-THEME_NAME-theme md-content {  background: '{{background-A100}}'; }  md-select-menu.md-THEME_NAME-theme md-content md-optgroup {    color: '{{background-600-0.87}}'; }  md-select-menu.md-THEME_NAME-theme md-content md-option {    color: '{{background-900-0.87}}'; }    md-select-menu.md-THEME_NAME-theme md-content md-option[disabled] .md-text {      color: '{{background-400-0.87}}'; }    md-select-menu.md-THEME_NAME-theme md-content md-option:not([disabled]):focus, md-select-menu.md-THEME_NAME-theme md-content md-option:not([disabled]):hover {      background: '{{background-200}}'; }    md-select-menu.md-THEME_NAME-theme md-content md-option[selected] {      color: '{{primary-500}}'; }      md-select-menu.md-THEME_NAME-theme md-content md-option[selected]:focus {        color: '{{primary-600}}'; }      md-select-menu.md-THEME_NAME-theme md-content md-option[selected].md-accent {        color: '{{accent-color}}'; }        md-select-menu.md-THEME_NAME-theme md-content md-option[selected].md-accent:focus {          color: '{{accent-A700}}'; }.md-checkbox-enabled.md-THEME_NAME-theme .md-ripple {  color: '{{primary-600}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ripple {  color: '{{background-600}}'; }.md-checkbox-enabled.md-THEME_NAME-theme .md-ink-ripple {  color: '{{foreground-2}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ink-ripple {  color: '{{primary-color-0.87}}'; }.md-checkbox-enabled.md-THEME_NAME-theme:not(.md-checked) .md-icon {  border-color: '{{foreground-2}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-icon {  background-color: '{{primary-color-0.87}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected].md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-icon:after {  border-color: '{{primary-contrast-0.87}}'; }.md-checkbox-enabled.md-THEME_NAME-theme .md-indeterminate[disabled] .md-container {  color: '{{foreground-3}}'; }.md-checkbox-enabled.md-THEME_NAME-theme md-option .md-text {  color: '{{background-900-0.87}}'; }md-sidenav.md-THEME_NAME-theme, md-sidenav.md-THEME_NAME-theme md-content {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  color: '{{background-contrast}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  background-color: '{{accent-A200-0.2}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-color}}';  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-color}}';  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme.md-min .md-focus-ring {  background-color: '{{foreground-3-0.38}}'; }md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-thumb:after {  background-color: '{{background-contrast}}';  border-color: transparent; }md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-sign {  background-color: '{{background-400}}'; }  md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-sign:after {    border-top-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme.md-min[md-discrete][md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme[md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-focus-ring {  background-color: '{{warn-200-0.38}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn[md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-focus-ring {  background-color: '{{primary-200-0.38}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary[md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: transparent; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after, md-slider.md-THEME_NAME-theme[disabled][md-discrete] .md-thumb:after {  background-color: '{{foreground-3}}';  border-color: transparent; }md-slider.md-THEME_NAME-theme[disabled][readonly] .md-sign {  background-color: '{{background-400}}'; }  md-slider.md-THEME_NAME-theme[disabled][readonly] .md-sign:after {    border-top-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme[disabled][readonly][md-vertical] .md-sign:after {  border-top-color: transparent;  border-left-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme[disabled][readonly] .md-disabled-thumb {  border-color: transparent;  background-color: transparent; }md-slider-container[disabled] > *:first-child:not(md-slider),md-slider-container[disabled] > *:last-child:not(md-slider) {  color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-default}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-ink-ripple {  color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-focused .md-thumb:before {  background-color: '{{accent-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-ink-ripple {  color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary.md-focused .md-thumb:before {  background-color: '{{primary-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-ink-ripple {  color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn.md-focused .md-thumb:before {  background-color: '{{warn-color-0.26}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme md-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme .md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme .md-tab[disabled], md-tabs.md-THEME_NAME-theme .md-tab[disabled] md-icon {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-active, md-tabs.md-THEME_NAME-theme .md-tab.md-active md-icon, md-tabs.md-THEME_NAME-theme .md-tab.md-focused, md-tabs.md-THEME_NAME-theme .md-tab.md-focused md-icon {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    background: '{{primary-color-0.1}}'; }  md-tabs.md-THEME_NAME-theme .md-tab .md-ripple-container {    color: '{{accent-A100}}'; }md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-A100}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{accent-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{primary-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{warn-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{primary-contrast}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-A100}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{accent-contrast}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{warn-contrast}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toast.md-THEME_NAME-theme .md-toast-content {  background-color: #323232;  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-toast-content .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight {      color: '{{accent-color}}'; }      md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-primary {        color: '{{primary-color}}'; }      md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-warn {        color: '{{warn-color}}'; }md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) md-icon {    color: '{{primary-contrast}}';    fill: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) .md-button[disabled] md-icon {    color: '{{primary-contrast-0.26}}';    fill: '{{primary-contrast-0.26}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }    md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent .md-ink-ripple {      color: '{{accent-contrast}}'; }    md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent md-icon {      color: '{{accent-contrast}}';      fill: '{{accent-contrast}}'; }    md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent .md-button[disabled] md-icon {      color: '{{accent-contrast-0.26}}';      fill: '{{accent-contrast-0.26}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-700-contrast}}'; }  md-tooltip.md-THEME_NAME-theme .md-content {    background-color: '{{background-700}}'; }/*  Only used with Theme processes */html.md-THEME_NAME-theme, body.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-color}}'; }");
}()}(window,window.angular),window.ngMaterial={version:{full:"1.1.1"}};
/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(A,d){'use strict';function p(){return["$animate",function(w){return{restrict:"AE",transclude:"element",priority:1,terminal:!0,require:"^^ngMessages",link:function(n,l,a,c,m){var k=l[0],f,q=a.ngMessage||a.when;a=a.ngMessageExp||a.whenExp;var d=function(a){f=a?x(a)?a:a.split(/[\s,]+/):null;c.reRender()};a?(d(n.$eval(a)),n.$watchCollection(a,d)):d(q);var e,r;c.register(k,r={test:function(a){var g=f;a=g?x(g)?0<=g.indexOf(a):g.hasOwnProperty(a):void 0;return a},attach:function(){e||m(n,function(a){w.enter(a,
null,l);e=a;var g=e.$$attachId=c.getAttachId();e.on("$destroy",function(){e&&e.$$attachId===g&&(c.deregister(k),r.detach())})})},detach:function(){if(e){var a=e;e=null;w.leave(a)}}})}}}]}var x=d.isArray,t=d.forEach,y=d.isString,z=d.element;d.module("ngMessages",[]).directive("ngMessages",["$animate",function(d){function n(a,c){return y(c)&&0===c.length||l(a.$eval(c))}function l(a){return y(a)?a.length:!!a}return{require:"ngMessages",restrict:"AE",controller:["$element","$scope","$attrs",function(a,
c,m){function k(a,c){for(var b=c,f=[];b&&b!==a;){var h=b.$$ngMessageNode;if(h&&h.length)return e[h];b.childNodes.length&&-1==f.indexOf(b)?(f.push(b),b=b.childNodes[b.childNodes.length-1]):b.previousSibling?b=b.previousSibling:(b=b.parentNode,f.push(b))}}var f=this,q=0,p=0;this.getAttachId=function(){return p++};var e=this.messages={},r,s;this.render=function(g){g=g||{};r=!1;s=g;for(var e=n(c,m.ngMessagesMultiple)||n(c,m.multiple),b=[],q={},h=f.head,k=!1,p=0;null!=h;){p++;var u=h.message,v=!1;k||t(g,
function(a,b){!v&&l(a)&&u.test(b)&&!q[b]&&(v=q[b]=!0,u.attach())});v?k=!e:b.push(u);h=h.next}t(b,function(a){a.detach()});b.length!==p?d.setClass(a,"ng-active","ng-inactive"):d.setClass(a,"ng-inactive","ng-active")};c.$watchCollection(m.ngMessages||m["for"],f.render);a.on("$destroy",function(){t(e,function(a){a.message.detach()})});this.reRender=function(){r||(r=!0,c.$evalAsync(function(){r&&s&&f.render(s)}))};this.register=function(g,c){var b=q.toString();e[b]={message:c};var d=a[0],h=e[b];f.head?
(d=k(d,g))?(h.next=d.next,d.next=h):(h.next=f.head,f.head=h):f.head=h;g.$$ngMessageNode=b;q++;f.reRender()};this.deregister=function(c){var d=c.$$ngMessageNode;delete c.$$ngMessageNode;var b=e[d];(c=k(a[0],c))?c.next=b.next:f.head=b.next;delete e[d];f.reRender()}}]}}]).directive("ngMessagesInclude",["$templateRequest","$document","$compile",function(d,n,l){return{restrict:"AE",require:"^^ngMessages",link:function(a,c,m){var k=m.ngMessagesInclude||m.src;d(k).then(function(d){a.$$destroyed||l(d)(a,
function(a){c.after(a);a=l.$$createComment?l.$$createComment("ngMessagesInclude",k):n[0].createComment(" ngMessagesInclude: "+k+" ");a=z(a);c.after(a);c.remove()})})}}}]).directive("ngMessage",p()).directive("ngMessageExp",p())})(window,window.angular);
//# sourceMappingURL=angular-messages.min.js.map

"format amd";!function(){"use strict";function a(a,b){return a.module("angularMoment",[]).constant("angularMomentConfig",{preprocess:null,timezone:"",format:null,statefulFilters:!0}).constant("moment",b).constant("amTimeAgoConfig",{withoutSuffix:!1,serverTime:null,titleFormat:null,fullDateThreshold:null,fullDateFormat:null}).directive("amTimeAgo",["$window","moment","amMoment","amTimeAgoConfig","angularMomentConfig",function(b,c,d,e,f){return function(g,h,i){function j(){var a;if(p)a=p;else if(e.serverTime){var b=(new Date).getTime(),d=b-w+e.serverTime;a=c(d)}else a=c();return a}function k(){q&&(b.clearTimeout(q),q=null)}function l(a){var c=j().diff(a,"day"),d=u&&c>=u;if(h.text(d?a.format(v):a.from(j(),s)),t&&!h.attr("title")&&h.attr("title",a.local().format(t)),!d){var e=Math.abs(j().diff(a,"minute")),f=3600;1>e?f=1:60>e?f=30:180>e&&(f=300),q=b.setTimeout(function(){l(a)},1e3*f)}}function m(a){z&&h.attr("datetime",a)}function n(){if(k(),o){var a=d.preprocessDate(o,x,r);l(a),m(a.toISOString())}}var o,p,q=null,r=f.format,s=e.withoutSuffix,t=e.titleFormat,u=e.fullDateThreshold,v=e.fullDateFormat,w=(new Date).getTime(),x=f.preprocess,y=i.amTimeAgo,z="TIME"===h[0].nodeName.toUpperCase();g.$watch(y,function(a){return"undefined"==typeof a||null===a||""===a?(k(),void(o&&(h.text(""),m(""),o=null))):(o=a,void n())}),a.isDefined(i.amFrom)&&g.$watch(i.amFrom,function(a){p="undefined"==typeof a||null===a||""===a?null:c(a),n()}),a.isDefined(i.amWithoutSuffix)&&g.$watch(i.amWithoutSuffix,function(a){"boolean"==typeof a?(s=a,n()):s=e.withoutSuffix}),i.$observe("amFormat",function(a){"undefined"!=typeof a&&(r=a,n())}),i.$observe("amPreprocess",function(a){x=a,n()}),i.$observe("amFullDateThreshold",function(a){u=a,n()}),i.$observe("amFullDateFormat",function(a){v=a,n()}),g.$on("$destroy",function(){k()}),g.$on("amMoment:localeChanged",function(){n()})}}]).service("amMoment",["moment","$rootScope","$log","angularMomentConfig",function(b,c,d,e){this.preprocessors={utc:b.utc,unix:b.unix},this.changeLocale=function(d,e){var f=b.locale(d,e);return a.isDefined(d)&&c.$broadcast("amMoment:localeChanged"),f},this.changeTimezone=function(a){e.timezone=a,c.$broadcast("amMoment:timezoneChanged")},this.preprocessDate=function(c,f,g){return a.isUndefined(f)&&(f=e.preprocess),this.preprocessors[f]?this.preprocessors[f](c,g):(f&&d.warn("angular-moment: Ignoring unsupported value for preprocess: "+f),!isNaN(parseFloat(c))&&isFinite(c)?b(parseInt(c,10)):b(c,g))},this.applyTimezone=function(a,b){return(b=b||e.timezone)?(b.match(/^Z|[+-]\d\d:?\d\d$/i)?a=a.utcOffset(b):a.tz?a=a.tz(b):d.warn("angular-moment: named timezone specified but moment.tz() is undefined. Did you forget to include moment-timezone.js?"),a):a}}]).filter("amCalendar",["moment","amMoment","angularMomentConfig",function(a,b,c){function d(c,d,e){if("undefined"==typeof c||null===c)return"";c=b.preprocessDate(c,d);var f=a(c);return f.isValid()?b.applyTimezone(f,e).calendar():""}return d.$stateful=c.statefulFilters,d}]).filter("amDifference",["moment","amMoment","angularMomentConfig",function(a,b,c){function d(c,d,e,f,g,h){if("undefined"==typeof c||null===c)return"";c=b.preprocessDate(c,g);var i=a(c);if(!i.isValid())return"";var j;if("undefined"==typeof d||null===d)j=a();else if(d=b.preprocessDate(d,h),j=a(d),!j.isValid())return"";return b.applyTimezone(i).diff(b.applyTimezone(j),e,f)}return d.$stateful=c.statefulFilters,d}]).filter("amDateFormat",["moment","amMoment","angularMomentConfig",function(a,b,c){function d(d,e,f,g,h){var i=h||c.format;if("undefined"==typeof d||null===d)return"";d=b.preprocessDate(d,f,i);var j=a(d);return j.isValid()?b.applyTimezone(j,g).format(e):""}return d.$stateful=c.statefulFilters,d}]).filter("amDurationFormat",["moment","angularMomentConfig",function(a,b){function c(b,c,d){return"undefined"==typeof b||null===b?"":a.duration(b,c).humanize(d)}return c.$stateful=b.statefulFilters,c}]).filter("amTimeAgo",["moment","amMoment","angularMomentConfig",function(a,b,c){function d(c,d,e,f){var g,h;return"undefined"==typeof c||null===c?"":(c=b.preprocessDate(c,d),g=a(c),g.isValid()?(h=a(f),"undefined"!=typeof f&&h.isValid()?b.applyTimezone(g).from(h,e):b.applyTimezone(g).fromNow(e)):"")}return d.$stateful=c.statefulFilters,d}]).filter("amSubtract",["moment","angularMomentConfig",function(a,b){function c(b,c,d){return"undefined"==typeof b||null===b?"":a(b).subtract(parseInt(c,10),d)}return c.$stateful=b.statefulFilters,c}]).filter("amAdd",["moment","angularMomentConfig",function(a,b){function c(b,c,d){return"undefined"==typeof b||null===b?"":a(b).add(parseInt(c,10),d)}return c.$stateful=b.statefulFilters,c}])}"function"==typeof define&&define.amd?define(["angular","moment"],a):"undefined"!=typeof module&&module&&module.exports?(a(angular,require("moment")),module.exports="angularMoment"):a(angular,("undefined"!=typeof global?global:window).moment)}();
//# sourceMappingURL=angular-moment.min.js.map
/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(P,d){'use strict';function G(t,g){g=g||{};d.forEach(g,function(d,q){delete g[q]});for(var q in t)!t.hasOwnProperty(q)||"$"===q.charAt(0)&&"$"===q.charAt(1)||(g[q]=t[q]);return g}var z=d.$$minErr("$resource"),M=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;d.module("ngResource",["ng"]).provider("$resource",function(){var t=/^https?:\/\/[^\/]*/,g=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};
this.$get=["$http","$log","$q","$timeout",function(q,L,H,I){function A(d,h){return encodeURIComponent(d).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,h?"%20":"+")}function B(d,h){this.template=d;this.defaults=v({},g.defaults,h);this.urlParams={}}function J(e,h,n,k){function c(a,b){var c={};b=v({},h,b);u(b,function(b,h){x(b)&&(b=b());var f;if(b&&b.charAt&&"@"==b.charAt(0)){f=a;var l=b.substr(1);if(null==l||""===l||"hasOwnProperty"===l||!M.test("."+
l))throw z("badmember",l);for(var l=l.split("."),m=0,k=l.length;m<k&&d.isDefined(f);m++){var r=l[m];f=null!==f?f[r]:void 0}}else f=b;c[h]=f});return c}function N(a){return a.resource}function m(a){G(a||{},this)}var t=new B(e,k);n=v({},g.defaults.actions,n);m.prototype.toJSON=function(){var a=v({},this);delete a.$promise;delete a.$resolved;return a};u(n,function(a,b){var h=/^(POST|PUT|PATCH)$/i.test(a.method),e=a.timeout,E=d.isDefined(a.cancellable)?a.cancellable:k&&d.isDefined(k.cancellable)?k.cancellable:
g.defaults.cancellable;e&&!d.isNumber(e)&&(L.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),delete a.timeout,e=null);m[b]=function(f,l,k,g){var r={},n,w,C;switch(arguments.length){case 4:C=g,w=k;case 3:case 2:if(x(l)){if(x(f)){w=f;C=l;break}w=l;C=k}else{r=f;n=l;w=k;break}case 1:x(f)?
w=f:h?n=f:r=f;break;case 0:break;default:throw z("badargs",arguments.length);}var D=this instanceof m,p=D?n:a.isArray?[]:new m(n),s={},A=a.interceptor&&a.interceptor.response||N,B=a.interceptor&&a.interceptor.responseError||void 0,y,F;u(a,function(a,b){switch(b){default:s[b]=O(a);case "params":case "isArray":case "interceptor":case "cancellable":}});!D&&E&&(y=H.defer(),s.timeout=y.promise,e&&(F=I(y.resolve,e)));h&&(s.data=n);t.setUrlParams(s,v({},c(n,a.params||{}),r),a.url);r=q(s).then(function(f){var c=
f.data;if(c){if(d.isArray(c)!==!!a.isArray)throw z("badcfg",b,a.isArray?"array":"object",d.isArray(c)?"array":"object",s.method,s.url);if(a.isArray)p.length=0,u(c,function(b){"object"===typeof b?p.push(new m(b)):p.push(b)});else{var l=p.$promise;G(c,p);p.$promise=l}}f.resource=p;return f},function(b){(C||K)(b);return H.reject(b)});r["finally"](function(){p.$resolved=!0;!D&&E&&(p.$cancelRequest=d.noop,I.cancel(F),y=F=s.timeout=null)});r=r.then(function(b){var a=A(b);(w||K)(a,b.headers);return a},B);
return D?r:(p.$promise=r,p.$resolved=!1,E&&(p.$cancelRequest=y.resolve),p)};m.prototype["$"+b]=function(a,c,d){x(a)&&(d=c,c=a,a={});a=m[b].call(this,a,this,c,d);return a.$promise||a}});m.bind=function(a){return J(e,v({},h,a),n)};return m}var K=d.noop,u=d.forEach,v=d.extend,O=d.copy,x=d.isFunction;B.prototype={setUrlParams:function(e,h,n){var k=this,c=n||k.template,g,m,q="",a=k.urlParams={};u(c.split(/\W/),function(b){if("hasOwnProperty"===b)throw z("badname");!/^\d+$/.test(b)&&b&&(new RegExp("(^|[^\\\\]):"+
b+"(\\W|$)")).test(c)&&(a[b]={isQueryParamValue:(new RegExp("\\?.*=:"+b+"(?:\\W|$)")).test(c)})});c=c.replace(/\\:/g,":");c=c.replace(t,function(a){q=a;return""});h=h||{};u(k.urlParams,function(a,e){g=h.hasOwnProperty(e)?h[e]:k.defaults[e];d.isDefined(g)&&null!==g?(m=a.isQueryParamValue?A(g,!0):A(g,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),c=c.replace(new RegExp(":"+e+"(\\W|$)","g"),function(a,b){return m+b})):c=c.replace(new RegExp("(/?):"+e+"(\\W|$)","g"),function(a,b,c){return"/"==
c.charAt(0)?c:b+c})});k.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");e.url=q+c.replace(/\/\\\./,"/.");u(h,function(a,c){k.urlParams[c]||(e.params=e.params||{},e.params[c]=a)})}};return J}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,e){'use strict';function B(a){var c=[];w(c,e.noop).chars(a);return c.join("")}function h(a,c){var b={},d=a.split(","),l;for(l=0;l<d.length;l++)b[c?e.lowercase(d[l]):d[l]]=!0;return b}function C(a,c){null===a||void 0===a?a="":"string"!==typeof a&&(a=""+a);g.innerHTML=a;var b=5;do{if(0===b)throw x("uinput");b--;n.document.documentMode&&t(g);a=g.innerHTML;g.innerHTML=a}while(a!==g.innerHTML);for(b=g.firstChild;b;){switch(b.nodeType){case 1:c.start(b.nodeName.toLowerCase(),D(b.attributes));
break;case 3:c.chars(b.textContent)}var d;if(!(d=b.firstChild)&&(1==b.nodeType&&c.end(b.nodeName.toLowerCase()),d=b.nextSibling,!d))for(;null==d;){b=b.parentNode;if(b===g)break;d=b.nextSibling;1==b.nodeType&&c.end(b.nodeName.toLowerCase())}b=d}for(;b=g.firstChild;)g.removeChild(b)}function D(a){for(var c={},b=0,d=a.length;b<d;b++){var l=a[b];c[l.name]=l.value}return c}function y(a){return a.replace(/&/g,"&amp;").replace(E,function(a){var b=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(b-55296)+
(a-56320)+65536)+";"}).replace(F,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function w(a,c){var b=!1,d=e.bind(a,a.push);return{start:function(a,f){a=e.lowercase(a);!b&&G[a]&&(b=a);b||!0!==u[a]||(d("<"),d(a),e.forEach(f,function(b,f){var g=e.lowercase(f),h="img"===a&&"src"===g||"background"===g;!0!==H[g]||!0===z[g]&&!c(b,h)||(d(" "),d(f),d('="'),d(y(b)),d('"'))}),d(">"))},end:function(a){a=e.lowercase(a);b||!0!==u[a]||!0===A[a]||(d("</"),d(a),d(">"));a==
b&&(b=!1)},chars:function(a){b||d(y(a))}}}function t(a){if(a.nodeType===n.Node.ELEMENT_NODE)for(var c=a.attributes,b=0,d=c.length;b<d;b++){var e=c[b],f=e.name.toLowerCase();if("xmlns:ns1"===f||0===f.lastIndexOf("ns1:",0))a.removeAttributeNode(e),b--,d--}(c=a.firstChild)&&t(c);(c=a.nextSibling)&&t(c)}var x=e.$$minErr("$sanitize"),E=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,F=/([^\#-~ |!])/g,A=h("area,br,col,hr,img,wbr"),q=h("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),k=h("rp,rt"),v=e.extend({},k,q),
q=e.extend({},q,h("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),k=e.extend({},k,h("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),I=h("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
G=h("script,style"),u=e.extend({},A,q,k,v),z=h("background,cite,href,longdesc,src,xlink:href"),v=h("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),k=h("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),H=e.extend({},z,k,v),g;(function(a){if(a.document&&a.document.implementation)a=a.document.implementation.createHTMLDocument("inert");else throw x("noinert");var c=(a.documentElement||a.getDocumentElement()).getElementsByTagName("body");1===c.length?g=c[0]:(c=a.createElement("html"),g=a.createElement("body"),c.appendChild(g),a.appendChild(c))})(n);e.module("ngSanitize",[]).provider("$sanitize",function(){var a=!1;this.$get=["$$sanitizeUri",function(c){a&&e.extend(u,I);return function(a){var d=
[];C(a,w(d,function(a,b){return!/^unsafe:/.test(c(a,b))}));return d.join("")}}];this.enableSvg=function(c){return e.isDefined(c)?(a=c,this):a}});e.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,b=/^mailto:/i,d=e.$$minErr("linky"),g=e.isString;return function(f,h,m){function k(a){a&&p.push(B(a))}function q(a,b){var c;p.push("<a ");e.isFunction(m)&&(m=m(a));if(e.isObject(m))for(c in m)p.push(c+
'="'+m[c]+'" ');else m={};!e.isDefined(h)||"target"in m||p.push('target="',h,'" ');p.push('href="',a.replace(/"/g,"&quot;"),'">');k(b);p.push("</a>")}if(null==f||""===f)return f;if(!g(f))throw d("notstring",f);for(var r=f,p=[],s,n;f=r.match(c);)s=f[0],f[2]||f[4]||(s=(f[3]?"http://":"mailto:")+s),n=f.index,k(r.substr(0,n)),q(s,f[0].replace(b,"")),r=r.substring(n+f[0].length);k(r);return a(p.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(x,n){'use strict';function s(f,k){var e=!1,a=!1;this.ngClickOverrideEnabled=function(b){return n.isDefined(b)?(b&&!a&&(a=!0,t.$$moduleName="ngTouch",k.directive("ngClick",t),f.decorator("ngClickDirective",["$delegate",function(a){if(e)a.shift();else for(var b=a.length-1;0<=b;){if("ngTouch"===a[b].$$moduleName){a.splice(b,1);break}b--}return a}])),e=b,this):e};this.$get=function(){return{ngClickOverrideEnabled:function(){return e}}}}function v(f,k,e){p.directive(f,["$parse","$swipe",function(a,
b){return function(l,u,g){function h(c){if(!d)return!1;var a=Math.abs(c.y-d.y);c=(c.x-d.x)*k;return r&&75>a&&0<c&&30<c&&.3>a/c}var m=a(g[f]),d,r,c=["touch"];n.isDefined(g.ngSwipeDisableMouse)||c.push("mouse");b.bind(u,{start:function(c,a){d=c;r=!0},cancel:function(c){r=!1},end:function(c,d){h(c)&&l.$apply(function(){u.triggerHandler(e);m(l,{$event:d})})}},c)}}])}var p=n.module("ngTouch",[]);p.provider("$touch",s);s.$inject=["$provide","$compileProvider"];p.factory("$swipe",[function(){function f(a){a=
a.originalEvent||a;var b=a.touches&&a.touches.length?a.touches:[a];a=a.changedTouches&&a.changedTouches[0]||b[0];return{x:a.clientX,y:a.clientY}}function k(a,b){var l=[];n.forEach(a,function(a){(a=e[a][b])&&l.push(a)});return l.join(" ")}var e={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};return{bind:function(a,b,l){var e,g,h,m,d=!1;l=l||["mouse","touch"];a.on(k(l,"start"),function(c){h=f(c);d=!0;g=e=0;m=
h;b.start&&b.start(h,c)});var r=k(l,"cancel");if(r)a.on(r,function(c){d=!1;b.cancel&&b.cancel(c)});a.on(k(l,"move"),function(c){if(d&&h){var a=f(c);e+=Math.abs(a.x-m.x);g+=Math.abs(a.y-m.y);m=a;10>e&&10>g||(g>e?(d=!1,b.cancel&&b.cancel(c)):(c.preventDefault(),b.move&&b.move(a,c)))}});a.on(k(l,"end"),function(c){d&&(d=!1,b.end&&b.end(f(c),c))})}}}]);var t=["$parse","$timeout","$rootElement",function(f,k,e){function a(a,d,b){for(var c=0;c<a.length;c+=2){var g=a[c+1],e=b;if(25>Math.abs(a[c]-d)&&25>Math.abs(g-
e))return a.splice(c,c+2),!0}return!1}function b(b){if(!(2500<Date.now()-u)){var d=b.touches&&b.touches.length?b.touches:[b],e=d[0].clientX,d=d[0].clientY;if(!(1>e&&1>d||h&&h[0]===e&&h[1]===d)){h&&(h=null);var c=b.target;"label"===n.lowercase(c.nodeName||c[0]&&c[0].nodeName)&&(h=[e,d]);a(g,e,d)||(b.stopPropagation(),b.preventDefault(),b.target&&b.target.blur&&b.target.blur())}}}function l(a){a=a.touches&&a.touches.length?a.touches:[a];var b=a[0].clientX,e=a[0].clientY;g.push(b,e);k(function(){for(var a=
0;a<g.length;a+=2)if(g[a]==b&&g[a+1]==e){g.splice(a,a+2);break}},2500,!1)}var u,g,h;return function(h,d,k){var c=f(k.ngClick),w=!1,q,p,s,t;d.on("touchstart",function(a){w=!0;q=a.target?a.target:a.srcElement;3==q.nodeType&&(q=q.parentNode);d.addClass("ng-click-active");p=Date.now();a=a.originalEvent||a;a=(a.touches&&a.touches.length?a.touches:[a])[0];s=a.clientX;t=a.clientY});d.on("touchcancel",function(a){w=!1;d.removeClass("ng-click-active")});d.on("touchend",function(c){var h=Date.now()-p,f=c.originalEvent||
c,m=(f.changedTouches&&f.changedTouches.length?f.changedTouches:f.touches&&f.touches.length?f.touches:[f])[0],f=m.clientX,m=m.clientY,v=Math.sqrt(Math.pow(f-s,2)+Math.pow(m-t,2));w&&750>h&&12>v&&(g||(e[0].addEventListener("click",b,!0),e[0].addEventListener("touchstart",l,!0),g=[]),u=Date.now(),a(g,f,m),q&&q.blur(),n.isDefined(k.disabled)&&!1!==k.disabled||d.triggerHandler("click",[c]));w=!1;d.removeClass("ng-click-active")});d.onclick=function(a){};d.on("click",function(a,b){h.$apply(function(){c(h,
{$event:b||a})})});d.on("mousedown",function(a){d.addClass("ng-click-active")});d.on("mousemove mouseup",function(a){d.removeClass("ng-click-active")})}}];v("ngSwipeLeft",-1,"swipeleft");v("ngSwipeRight",1,"swiperight")})(window,window.angular);
//# sourceMappingURL=angular-touch.min.js.map

/**
 * State-based routing for AngularJS
 * @version v0.2.18
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return R(new(R(function(){},{prototype:a})),b)}function e(a){return Q(arguments,function(b){b!==a&&Q(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return Q(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l]&&i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return R({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return Q(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return Q(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=P(a),d=c?[]:{};return Q(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=P(a)?[]:{};return Q(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=R(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,N(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);Q(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return O(a)&&a.then&&a.$$promises}if(!O(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return Q(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!L(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;Q(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!O(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=R({},d),u=1+q.length/3,v=!1;if(L(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),R(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return L(a.template)?this.fromString(a.template,b):L(a.templateUrl)?this.fromUrl(a.templateUrl,b):L(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return M(a)?a(b):a},this.fromUrl=function(c,d){return M(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new U.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:f=f.replace(/\/$/,""),e=["(?:/(",")|/)?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),h&&(j=U.type(h)||d(U.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)})),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=R({params:{}},O(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new U.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){R(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/~/g,"~~").replace(/\//g,"~2F"):a}function e(a){return null!=a?a.toString().replace(/~2F/g,"/").replace(/~~/g,"~"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return M(a)||P(a)&&M(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){R(this,a||{})}U=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!L(a)||"string"==typeof a},pattern:/[^\/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return L(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^\/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return L(a)&&(m=a),m},this.strictMode=function(a){return L(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!L(a))return q;if(a!==!0&&a!==!1&&!N(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,R(f(),b))},this.isMatcher=function(a){if(!O(a))return!1;var b=!0;return Q(r.prototype,function(c,d){M(c)&&(b=b&&L(a[d])&&M(a[d]))}),b},this.type=function(a,b,c){if(!L(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(R({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},Q(x,function(a,b){u[b]=new s(R({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),Q(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,d,e,f){function j(a){var b=O(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function k(c,d,e){if(c.type&&d)throw new Error("Param '"+a+"' has two type configurations.");return d?d:c.type?b.isString(c.type)?u[c.type]:c.type instanceof s?c.type:new s(c.type):"config"===e?u.any:u.string}function m(){var b={array:"search"===f?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return R(b,c,e).array}function p(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!L(c)||null==c)return q;if(c===!0||N(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function r(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=P(a.replace)?a.replace:[],N(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function t(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(e.$$fn);if(null!==a&&a!==c&&!x.type.is(a))throw new Error("Default value ("+a+") for parameter '"+x.id+"' is not an instance of Type ("+x.type.name+")");return a}function v(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(x.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),L(a)?x.type.$normalize(a):t()}function w(){return"{Param:"+a+" "+d+" squash: '"+A+"' optional: "+z+"}"}var x=this;e=j(e),d=k(e,d,f);var y=m();d=y?d.$asArray(y,"search"===f):d,"string"!==d.name||y||"path"!==f||e.value!==c||(e.value="");var z=e.value!==c,A=p(e,z),B=r(e,y,z,A);R(this,{id:a,type:d,location:f,array:y,squash:A,replace:B,isOptional:z,value:v,dynamic:c,config:e,toString:w})},k.prototype={$$new:function(){return d(this,R(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),Q(b,function(b){Q(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return Q(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return Q(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return L(d)?d:!0}function h(d,e,f,g,h){function m(a,b,c){return"/"===q?a:b?q.slice(0,-1)+a:c?q.slice(1)+a:a}function n(a){function b(a){var b=a(f,d);return b?(N(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){p&&d.url()===p;p=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function o(){return i=i||e.$on("$locationChangeSuccess",n)}var p,q=g.baseHref(),r=d.url();return l||o(),{sync:function(){n()},listen:function(){return o()},update:function(a){return a?void(r=d.url()):void(d.url()!==r&&(d.url(r),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),p=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled),g=g&&h.history;var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=m(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!M(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(N(a)){var b=a;a=function(){return b}}else if(!M(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=N(b);if(N(a)&&(a=d.compile(a)),!h&&!M(b)&&!P(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),R(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:N(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),R(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=N(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!N(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):N(b.parent)?b.parent:O(b.parent)&&N(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)M(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return N(a)&&!L(b)?C[a]:M(b)&&N(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return O(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return Q(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(M(d.controllerProvider)||P(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,R({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=R({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!L(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!L(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,H=[];if(f.reload){if(N(f.reload)||O(f.reload)){if(O(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var I=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!I)throw new Error("No such reload state '"+(N(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==I;)G=H[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=H[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,S(y.params,n),S(k(b.params.$$keys(),n),b.locals.globals.$stateParams),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),r&&(c["#"]=r),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l,f).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),null==y.transition&&p.update(),C;for(var J=e.when(G),K=D;K<z.length;K++,F=z[K])G=H[K]=d(G),J=v(F,c,F===b,J,G,f);var M=y.transition=J.then(function(){var d,e,g;if(y.transition!==M)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return y.transition!==M?A:(y.$current=b,y.current=b.self,y.params=c,S(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)},function(d){return y.transition!==M?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return M},y.is=function(a,b,d){d=R({relative:y.$current},d||{});var e=m(a,d.relative);return L(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=R({relative:y.$current},d||{}),N(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return L(e)?L(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=R({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!L(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new U.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(L(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=d(a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(N(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new U.ParamSet;return Q(a.params||{},function(a,c){b[c]||(b[c]=new U.Param(c,null,a,"config"))}),b},params:function(a){var b=l(a.ownParams,a.ownParams.$$keys());return a.parent&&a.parent.params?R(a.parent.params.$$new(),b):new U.ParamSet},views:function(a){var b={};return Q(L(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?R({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(a,c){var d,e={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return c=R(e,c),c.view&&(d=b.fromConfig(c.view,c.params,c.locals)),d}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,c){function d(a){return 1===V&&W>=4?!!j.enabled(a):1===V&&W>=2?!!j.enabled():!!i}var e={enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}};if(a.noanimation)return e;if(j)return{enter:function(a,c,f){d(a)?b.version.minor>2?j.enter(a,null,c).then(f):j.enter(a,null,c,f):e.enter(a,c,f)},leave:function(a,c){d(a)?b.version.minor>2?j.leave(a).then(c):j.leave(a,c):e.leave(a,c)}};if(i){var f=i&&i(c,a);return{enter:function(a,b,c){f.enter(a,null,b),c()},leave:function(a,b){f.leave(a),b()}}}return e}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){function a(){b&&b.remove(),c&&c.$destroy()}var b=l,c=n;c&&(c._willBeDestroyed=!0),m?(r.leave(m,function(){a(),l=null}),l=m):(a(),l=null),m=null,n=null}function k(g){var k,l=A(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if((g||s!==o)&&!c._willBeDestroyed){k=c.$new(),o=a.$current.locals[l],k.$emit("$viewContentLoading",l);var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded",l),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),k(!0)}}};return k}function z(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=A(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e,k.$element=g;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a){var b="[object SVGAnimatedString]"===Object.prototype.toString.call(a.prop("href")),c="FORM"===a[0].nodeName;return{attr:c?"action":b?"xlink:href":"href",isAnchor:"A"===a.prop("tagName").toUpperCase(),clickable:!c}}function E(a,b,c,d,e){return function(f){var g=f.which||f.button,h=e();if(!(g>1||f.ctrlKey||f.metaKey||f.shiftKey||a.attr("target"))){var i=c(function(){b.go(h.state,h.params,h.options)});f.preventDefault();var j=d.isAnchor&&!h.href?1:0;f.preventDefault=function(){j--<=0&&c.cancel(i)}}}}function F(a,b){return{relative:C(a)||b.$current,inherit:!0}}function G(a,c){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(d,e,f,g){var h=B(f.uiSref,a.current.name),i={state:h.state,href:null,params:null},j=D(e),k=g[1]||g[0];i.options=R(F(e,a),f.uiSrefOpts?d.$eval(f.uiSrefOpts):{});var l=function(c){c&&(i.params=b.copy(c)),i.href=a.href(h.state,i.params,i.options),k&&k.$$addStateInfo(h.state,i.params),null!==i.href&&f.$set(j.attr,i.href)};h.paramExpr&&(d.$watch(h.paramExpr,function(a){a!==i.params&&l(a)},!0),i.params=b.copy(d.$eval(h.paramExpr))),l(),j.clickable&&e.bind("click",E(e,a,c,j,function(){return i}))}}}function H(a,b){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(c,d,e,f){function g(b){l.state=b[0],l.params=b[1],l.options=b[2],l.href=a.href(l.state,l.params,l.options),i&&i.$$addStateInfo(l.state,l.params),l.href&&e.$set(h.attr,l.href)}var h=D(d),i=f[1]||f[0],j=[e.uiState,e.uiStateParams||null,e.uiStateOpts||null],k="["+j.map(function(a){return a||"null"}).join(", ")+"]",l={state:null,params:null,options:null,href:null};c.$watch(k,g,!0),g(c.$eval(k)),h.clickable&&d.bind("click",E(d,a,b,h,function(){return l}))}}}function I(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(b,d,e,f){function g(b,c,e){var f=a.get(b,C(d)),g=h(b,c);p.push({state:f||{name:b},params:c,hash:g}),q[g]=e}function h(a,c){if(!N(a))throw new Error("state should be a string");return O(c)?a+T(c):(c=b.$eval(c),O(c)?a+T(c):a)}function i(){for(var a=0;a<p.length;a++)l(p[a].state,p[a].params)?j(d,q[p[a].hash]):k(d,q[p[a].hash]),m(p[a].state,p[a].params)?j(d,n):k(d,n)}function j(a,b){f(function(){a.addClass(b)})}function k(a,b){a.removeClass(b)}function l(b,c){return a.includes(b.name,c)}function m(b,c){return a.is(b.name,c)}var n,o,p=[],q={};n=c(e.uiSrefActiveEq||"",!1)(b);try{o=b.$eval(e.uiSrefActive)}catch(r){}o=o||c(e.uiSrefActive||"",!1)(b),O(o)&&Q(o,function(c,d){if(N(c)){var e=B(c,a.current.name);g(e.state,b.$eval(e.paramExpr),d)}}),this.$$addStateInfo=function(a,b){O(o)&&p.length>0||(g(a,b,o),i())},b.$on("$stateChangeSuccess",i),i()}]}}function J(a){var b=function(b,c){return a.is(b,c)};return b.$stateful=!0,b}function K(a){var b=function(b,c,d){return a.includes(b,c,d)};return b.$stateful=!0,b}var L=b.isDefined,M=b.isFunction,N=b.isString,O=b.isObject,P=b.isArray,Q=b.forEach,R=b.extend,S=b.copy,T=b.toJson;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var U;r.prototype.concat=function(a,b){var c={caseInsensitive:U.caseInsensitive(),strict:U.strictMode(),squash:U.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,R(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var l,m;for(e=0;j>e;e++){for(g=h[e],l=this.params[g],m=d[e+1],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}for(;i>e;e++){for(g=h[e],k[g]=this.params[g].value(b[g]),l=this.params[g],m=b[g],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}return k},r.prototype.parameters=function(a){return L(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1],t=f+1===h;if(q===!1)null!=r&&(j+=P(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var u=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(u)[1]}else N(q)&&(j+=q+s);t&&m.squash===!0&&"/"===j.slice(-1)&&(j=j.slice(0,-1))}else{if(null==r||p&&q!==!1)continue;if(P(r)||(r=[r]),0===r.length)continue;r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return P(a)?a:L(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){if(P(c)&&0===c.length)return c;c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").factory("$stateParams",function(){return{}}).provider("$state",v),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x);var V=b.version.major,W=b.version.minor;y.$inject=["$state","$injector","$uiViewScroll","$interpolate"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),G.$inject=["$state","$timeout"],H.$inject=["$state","$timeout"],I.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",G).directive("uiSrefActive",I).directive("uiSrefActiveEq",I).directive("uiState",H),
J.$inject=["$state"],K.$inject=["$state"],b.module("ui.router.state").filter("isState",J).filter("includedByState",K)}(window,window.angular);
//https://github.com/Crawlink/material-angular-paging
!function(){"use strict";function ClPagingDirective(){return{restrict:"EA",scope:{clPages:"=",clAlign:"@",clAlignModel:"=",clPageChanged:"&",clSteps:"=",clCurrentPage:"="},controller:ClPagingController,controllerAs:"vm",template:['<div layout="row" layout-align="{{ clAlign || clAlignModel }}">','<md-button class="md-icon-button md-raised md-warn" aria-label="First" ng-click="vm.gotoFirst()">{{ vm.first }}</md-button>','<md-button class="md-icon-button md-raised" aria-label="Previous" ng-click="vm.gotoPrev()" ng-show="vm.index - 1 >= 0">&#8230;</md-button>','<md-button class="md-icon-button md-raised" aria-label="Go to page {{i+1}}" ng-repeat="i in vm.stepInfo"',' ng-click="vm.goto(vm.index + i)" ng-show="vm.page[vm.index + i]" '," ng-class=\"{'md-primary': vm.page[vm.index + i] == clCurrentPage}\">"," {{ vm.page[vm.index + i] }}","</md-button>",'<md-button class="md-icon-button md-raised" aria-label="Next" ng-click="vm.gotoNext()" ng-show="vm.index + vm.clSteps < clPages">&#8230;</md-button>','<md-button class="md-icon-button md-raised md-warn" aria-label="Last" ng-click="vm.gotoLast()">{{ vm.last }}</md-button>',"</div>"].join("")}}function ClPagingController($scope){var vm=this;vm.first="<<",vm.last=">>",vm.index=0,vm.clSteps=$scope.clSteps,vm["goto"]=function(index){$scope.clCurrentPage=vm.page[index]},vm.gotoPrev=function(){$scope.clCurrentPage=vm.index,vm.index-=vm.clSteps},vm.gotoNext=function(){vm.index+=vm.clSteps,$scope.clCurrentPage=vm.index+1},vm.gotoFirst=function(){vm.index=0,$scope.clCurrentPage=1},vm.gotoLast=function(){vm.index=parseInt($scope.clPages/vm.clSteps)*vm.clSteps,vm.index===$scope.clPages?vm.index=vm.index-vm.clSteps:"",$scope.clCurrentPage=$scope.clPages},$scope.$watch("clCurrentPage",function(value){vm.index=parseInt((value-1)/vm.clSteps)*vm.clSteps,$scope.clPageChanged()}),$scope.$watch("clPages",function(){vm.init()}),vm.init=function(){vm.stepInfo=function(){for(var result=[],i=0;i<vm.clSteps;i++)result.push(i);return result}(),vm.page=function(){for(var result=[],i=1;i<=$scope.clPages;i++)result.push(i);return result}()}}var app=angular.module("cl.paging",[]);app.directive("clPaging",ClPagingDirective),ClPagingDirective.$inject=[],ClPagingController.$inject=["$scope"]}();
//
//! MarkdownDeep - http://www.toptensoftware.com/markdowndeep
//! Copyright (C) 2010-2011 Topten Software
//
//   Licensed under the Apache License, Version 2.0 (the "License"); you may not use this product except in
//   compliance with the License. You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software distributed under the License is
//   distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and limitations under the License.
//


/////////////////////////////////////////////////////////////////////////////
// Markdown

var MarkdownDeep = new function () {


    function array_indexOf(array, obj) {
        if (array.indexOf !== undefined)
            return array.indexOf(obj);

        for (var i = 0; i < array.length; i++) {
            if (array[i] === obj)
                return i;
        }

        return -1;
    };

    // private:p.
    // private:.m_*

    function Markdown() {
        this.m_SpanFormatter = new SpanFormatter(this);
        this.m_SpareBlocks = [];
        this.m_StringBuilder = new StringBuilder();
        this.m_StringBuilderFinal = new StringBuilder();
    }

    Markdown.prototype =
    {
        SafeMode: false,
        ExtraMode: false,
        MarkdownInHtml: false,
        AutoHeadingIDs: false,
        UrlBaseLocation: null,
        UrlRootLocation: null,
        NewWindowForExternalLinks: false,
        NewWindowForLocalLinks: false,
        NoFollowLinks: false,
        HtmlClassFootnotes: "footnotes",
        HtmlClassTitledImages: null,
        RenderingTitledImage: false,
        FormatCodeBlockAttributes: null,
        FormatCodeBlock: null,
        ExtractHeadBlocks: false,
        HeadBlockContent: ""
    };

    var p = Markdown.prototype;

    function splice_array(dest, position, del, ins) {
        return dest.slice(0, position).concat(ins).concat(dest.slice(position + del));
    }

    Markdown.prototype.GetListItems = function (input, offset) {
        // Parse content into blocks
        var blocks = this.ProcessBlocks(input);


        // Find the block
        var i;
        for (i = 0; i < blocks.length; i++) {
            var b = blocks[i];

            if ((b.blockType == BlockType_Composite || b.blockType == BlockType_html || b.blockType == BlockType_HtmlTag) && b.children) {
                blocks = splice_array(blocks, i, 1, b.children);
                i--;
                continue;
            }

            if (offset < b.lineStart) {
                break;
            }
        }

        i--;

        // Quit if at top
        if (i < 0)
            return null;

        // Get the block before
        var block = blocks[i];

        // Check if it's a list
        if (block.blockType != BlockType_ul && block.blockType != BlockType_ol)
            return null;

        // Build list of line offsets
        var list = [];
        var items = block.children;
        for (var j = 0; j < items.length; j++) {
            list.push(items[j].lineStart);
        }

        // Also push the line offset of the following block
        i++;
        if (i < blocks.length) {
            list.push(blocks[i].lineStart);
        }
        else {
            list.push(input.length);
        }

        return list;
    }

    // Main entry point
    Markdown.prototype.Transform = function (input) {
        // Normalize line ends
        var rpos = input.indexOf("\r");
        if (rpos >= 0) {
            var npos = input.indexOf("\n");
            if (npos >= 0) {
                if (npos < rpos) {
                    input = input.replace(/\n\r/g, "\n");
                }
                else {
                    input = input.replace(/\r\n/g, "\n");
                }
            }

            input = input.replace(/\r/g, "\n");
        }

        this.HeadBlockContent = "";

        var blocks = this.ProcessBlocks(input);

        // Sort abbreviations by length, longest to shortest
        if (this.m_Abbreviations != null) {
            var list = [];
            for (var a in this.m_Abbreviations) {
                list.push(this.m_Abbreviations[a]);
            }
            list.sort(
                function (a, b) {
                    return b.Abbr.length - a.Abbr.length;
                }
            );
            this.m_Abbreviations = list;
        }

        // Render
        var sb = this.m_StringBuilderFinal;
        sb.Clear();
        for (var i = 0; i < blocks.length; i++) {
            var b = blocks[i];
            b.Render(this, sb);
        }

        // Render footnotes
        if (this.m_UsedFootnotes.length > 0) {

            sb.Append("\n<div class=\"");
            sb.Append(this.HtmlClassFootnotes);
            sb.Append("\">\n");
            sb.Append("<hr />\n");
            sb.Append("<ol>\n");
            for (var i = 0; i < this.m_UsedFootnotes.length; i++) {
                var fn = this.m_UsedFootnotes[i];

                sb.Append("<li id=\"#fn:");
                sb.Append(fn.data); // footnote id
                sb.Append("\">\n");


                // We need to get the return link appended to the last paragraph
                // in the footnote
                var strReturnLink = "<a href=\"#fnref:" + fn.data + "\" rev=\"footnote\">&#8617;</a>";

                // Get the last child of the footnote
                var child = fn.children[fn.children.length - 1];
                if (child.blockType == BlockType_p) {
                    child.blockType = BlockType_p_footnote;
                    child.data = strReturnLink;
                }
                else {
                    child = new Block();
                    child.contentLen = 0;
                    child.blockType = BlockType_p_footnote;
                    child.data = strReturnLink;
                    fn.children.push(child);
                }


                fn.Render(this, sb);

                sb.Append("</li>\n");
            }
            sb.Append("</ol\n");
            sb.Append("</div>\n");
        }


        // Done
        return sb.ToString();
    }

    Markdown.prototype.OnQualifyUrl = function (url) {
        // Is the url already fully qualified?
        if (IsUrlFullyQualified(url))
            return url;

        if (starts_with(url, "/")) {
            var rootLocation = this.UrlRootLocation;
            if (!rootLocation) {
                // Quit if we don't have a base location
                if (!this.UrlBaseLocation)
                    return url;

                // Need to find domain root
                var pos = this.UrlBaseLocation.indexOf("://");
                if (pos == -1)
                    pos = 0;
                else
                    pos += 3;

                // Find the first slash after the protocol separator
                pos = this.UrlBaseLocation.indexOf('/', pos);

                // Get the domain name
                rootLocation = pos < 0 ? this.UrlBaseLocation : this.UrlBaseLocation.substr(0, pos);
            }

            // Join em
            return rootLocation + url;
        }
        else {
            // Quit if we don't have a base location
            if (!this.UrlBaseLocation)
                return url;

            if (!ends_with(this.UrlBaseLocation, "/"))
                return this.UrlBaseLocation + "/" + url;
            else
                return this.UrlBaseLocation + url;
        }
    }


    // Override and return an object with width and height properties
    Markdown.prototype.OnGetImageSize = function (image, TitledImage) {
        return null;
    }

    Markdown.prototype.OnPrepareLink = function (tag) {
        var url = tag.attributes["href"];

        // No follow?
        if (this.NoFollowLinks) {
            tag.attributes["rel"] = "nofollow";
        }

        // New window?
        if ((this.NewWindowForExternalLinks && IsUrlFullyQualified(url)) ||
            (this.NewWindowForLocalLinks && !IsUrlFullyQualified(url))) {
            tag.attributes["target"] = "_blank";
        }

        // Qualify url
        tag.attributes["href"] = this.OnQualifyUrl(url);
    }

    Markdown.prototype.OnPrepareImage = function (tag, TitledImage) {
        // Try to determine width and height
        var size = this.OnGetImageSize(tag.attributes["src"], TitledImage);
        if (size != null) {
            tag.attributes["width"] = size.width;
            tag.attributes["height"] = size.height;
        }

        // Now qualify the url
        tag.attributes["src"] = this.OnQualifyUrl(tag.attributes["src"]);
    }

    // Get a link definition
    Markdown.prototype.GetLinkDefinition = function (id) {
        var x = this.m_LinkDefinitions[id];
        if (x == undefined)
            return null;
        else
            return x;
    }



    p.ProcessBlocks = function (str) {
        // Reset the list of link definitions
        this.m_LinkDefinitions = [];
        this.m_Footnotes = [];
        this.m_UsedFootnotes = [];
        this.m_UsedHeaderIDs = [];
        this.m_Abbreviations = null;

        // Process blocks
        return new BlockProcessor(this, this.MarkdownInHtml).Process(str);
    }

    // Add a link definition
    p.AddLinkDefinition = function (link) {
        this.m_LinkDefinitions[link.id] = link;
    }

    p.AddFootnote = function (footnote) {
        this.m_Footnotes[footnote.data] = footnote;
    }

    // Look up a footnote, claim it and return it's index (or -1 if not found)
    p.ClaimFootnote = function (id) {
        var footnote = this.m_Footnotes[id];
        if (footnote != undefined) {
            // Move the foot note to the used footnote list
            this.m_UsedFootnotes.push(footnote);
            delete this.m_Footnotes[id];

            // Return it's display index
            return this.m_UsedFootnotes.length - 1;
        }
        else
            return -1;
    }

    p.AddAbbreviation = function (abbr, title) {
        if (this.m_Abbreviations == null) {
            this.m_Abbreviations = [];
        }

        // Store abbreviation
        this.m_Abbreviations[abbr] = { Abbr: abbr, Title: title };
    }

    p.GetAbbreviations = function () {
        return this.m_Abbreviations;
    }




    // private
    p.MakeUniqueHeaderID = function (strHeaderText, startOffset, length) {
        if (!this.AutoHeadingIDs)
            return null;

        // Extract a pandoc style cleaned header id from the header text
        var strBase = this.m_SpanFormatter.MakeID(strHeaderText, startOffset, length);

        // If nothing left, use "section"
        if (!strBase)
            strBase = "section";

        // Make sure it's unique by append -n counter
        var strWithSuffix = strBase;
        var counter = 1;
        while (this.m_UsedHeaderIDs[strWithSuffix] != undefined) {
            strWithSuffix = strBase + "-" + counter.toString();
            counter++;
        }

        // Store it
        this.m_UsedHeaderIDs[strWithSuffix] = true;

        // Return it
        return strWithSuffix;
    }


    // private
    p.GetStringBuilder = function () {
        this.m_StringBuilder.Clear();
        return this.m_StringBuilder;
    }

    /////////////////////////////////////////////////////////////////////////////
    // CharTypes

    function is_digit(ch) {
        return ch >= '0' && ch <= '9';
    }
    function is_hex(ch) {
        return (ch >= '0' && ch <= '9') || (ch >= 'a' && ch <= 'f') || (ch >= 'A' && ch <= 'F');
    }
    function is_alpha(ch) {
        return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
    }
    function is_alphadigit(ch) {
        return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9');
    }
    function is_whitespace(ch) {
        return (ch == ' ' || ch == '\t' || ch == '\r' || ch == '\n');
    }
    function is_linespace(ch) {
        return (ch == ' ' || ch == '\t');
    }
    function is_lineend(ch) {
        return (ch == '\r' || ch == '\n');
    }
    function is_emphasis(ch) {
        return (ch == '*' || ch == '_');
    }
    function is_escapable(ch, ExtraMode) {
        switch (ch) {
            case '\\':
            case '`':
            case '*':
            case '_':
            case '{':
            case '}':
            case '[':
            case ']':
            case '(':
            case ')':
            case '>':
            case '#':
            case '+':
            case '-':
            case '.':
            case '!':
                return true;

            case ':':
            case '|':
            case '=':
            case '<':
                return ExtraMode;
        }

        return false;
    }


    // Utility functions

    // Check if str[pos] looks like a html entity
    // Returns -1 if not, or offset of character after it yes.
    function SkipHtmlEntity(str, pos) {
        if (str.charAt(pos) != '&')
            return -1;

        var save = pos;
        pos++;

        var fn_test;
        if (str.charAt(pos) == '#') {
            pos++;
            if (str.charAt(pos) == 'x' || str.charAt(pos) == 'X') {
                pos++;
                fn_test = is_hex;
            }
            else {
                fn_test = is_digit;
            }
        }
        else {
            fn_test = is_alphadigit;
        }

        if (fn_test(str.charAt(pos))) {
            pos++;
            while (fn_test(str.charAt(pos)))
                pos++;

            if (str.charAt(pos) == ';') {
                pos++;
                return pos;
            }
        }

        pos = save;
        return -1;
    }

    function UnescapeString(str, ExtraMode) {
        // Find first backslash
        var bspos = str.indexOf('\\');
        if (bspos < 0)
            return str;

        // Build new string with escapable backslashes removed
        var b = new StringBuilder();
        var piece = 0;
        while (bspos >= 0) {
            if (is_escapable(str.charAt(bspos + 1), ExtraMode)) {
                if (bspos > piece)
                    b.Append(str.substr(piece, bspos - piece));

                piece = bspos + 1;
            }

            bspos = str.indexOf('\\', bspos + 1);
        }

        if (piece < str.length)
            b.Append(str.substr(piece, str.length - piece));

        return b.ToString();
    }

    function Trim(str) {
        var i = 0;
        var l = str.length;

        while (i < l && is_whitespace(str.charAt(i)))
            i++;
        while (l - 1 > i && is_whitespace(str.charAt(l - 1)))
            l--;

        return str.substr(i, l - i);
    }


    /*
     * These two functions IsEmailAddress and IsWebAddress
     * are intended as a quick and dirty way to tell if a
     * <autolink> url is email, web address or neither.
     *
     * They are not intended as validating checks.
     *
     * (use of Regex for more correct test unnecessarily
     *  slowed down some test documents by up to 300%.)
     */

    // Check if a string looks like an email address
    function IsEmailAddress(str) {
        var posAt = str.indexOf('@');
        if (posAt < 0)
            return false;

        var posLastDot = str.lastIndexOf('.');
        if (posLastDot < posAt)
            return false;

        return true;
    }

    // Check if a string looks like a url
    function IsWebAddress(str) {
        str = str.toLowerCase();
        if (str.substr(0, 7) == "http://")
            return true;
        if (str.substr(0, 8) == "https://")
            return true;
        if (str.substr(0, 6) == "ftp://")
            return true;
        if (str.substr(0, 7) == "file://")
            return true;

        return false;
    }


    // Check if a string is a valid HTML ID identifier
    function IsValidHtmlID(str) {
        if (!str)
            return false;

        // Must start with a letter
        if (!is_alpha(str.charAt(0)))
            return false;

        // Check the rest
        for (var i = 0; i < str.length; i++) {
            var ch = str.charAt(i);
            if (is_alphadigit(ch) || ch == '_' || ch == '-' || ch == ':' || ch == '.')
                continue;

            return false;
        }

        // OK
        return true;
    }

    // Strip the trailing HTML ID from a header string
    // ie:      ## header text ##			{#<idhere>}
    //			^start           ^out end              ^end
    //
    // Returns null if no header id
    function StripHtmlID(str, start, end) {
        // Skip trailing whitespace
        var pos = end - 1;
        while (pos >= start && is_whitespace(str.charAt(pos))) {
            pos--;
        }

        // Skip closing '{'
        if (pos < start || str.charAt(pos) != '}')
            return null;

        var endId = pos;
        pos--;

        // Find the opening '{'
        while (pos >= start && str.charAt(pos) != '{')
            pos--;

        // Check for the #
        if (pos < start || str.charAt(pos + 1) != '#')
            return null;

        // Extract and check the ID
        var startId = pos + 2;
        var strID = str.substr(startId, endId - startId);
        if (!IsValidHtmlID(strID))
            return null;

        // Skip any preceeding whitespace
        while (pos > start && is_whitespace(str.charAt(pos - 1)))
            pos--;

        // Done!
        return { id: strID, end: pos };
    }

    function starts_with(str, match) {
        return str.substr(0, match.length) == match;
    }

    function ends_with(str, match) {
        return str.substr(-match.length) == match;
    }

    function IsUrlFullyQualified(url) {
        return url.indexOf("://") >= 0 || starts_with(url, "mailto:");
    }


    /////////////////////////////////////////////////////////////////////////////
    // StringBuilder

    function StringBuilder() {
        this.m_content = [];
    }

    p = StringBuilder.prototype;

    p.Append = function (value) {
        if (value)
            this.m_content.push(value);
    }
    p.Clear = function () {
        this.m_content.length = 0;
    }
    p.ToString = function () {
        return this.m_content.join("");
    }

    p.HtmlRandomize = function (url) {
        // Randomize
        var len = url.length;
        for (var i = 0; i < len; i++) {
            var x = Math.random();
            if (x > 0.90 && url.charAt(i) != '@') {
                this.Append(url.charAt(i));
            }
            else if (x > 0.45) {
                this.Append("&#");
                this.Append(url.charCodeAt(i).toString());
                this.Append(";");
            }
            else {
                this.Append("&#x");
                this.Append(url.charCodeAt(i).toString(16));
                this.Append(";");
            }
        }
    }

    p.HtmlEncode = function (str, startOffset, length) {
        var end = startOffset + length;
        var piece = startOffset;
        var i;
        for (i = startOffset; i < end; i++) {
            switch (str.charAt(i)) {
                case '&':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&amp;");
                    piece = i + 1;
                    break;

                case '<':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&lt;");
                    piece = i + 1;
                    break;

                case '>':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&gt;");
                    piece = i + 1;
                    break;

                case '\"':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&quot;");
                    piece = i + 1;
                    break;
            }
        }

        if (i > piece)
            this.Append(str.substr(piece, i - piece));
    }

    p.SmartHtmlEncodeAmpsAndAngles = function (str, startOffset, length) {
        var end = startOffset + length;
        var piece = startOffset;
        var i;
        for (i = startOffset; i < end; i++) {
            switch (str.charAt(i)) {
                case '&':
                    var after = SkipHtmlEntity(str, i);
                    if (after < 0) {
                        if (i > piece) {
                            this.Append(str.substr(piece, i - piece));
                        }
                        this.Append("&amp;");
                        piece = i + 1;
                    }
                    else {
                        i = after - 1;
                    }
                    break;

                case '<':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&lt;");
                    piece = i + 1;
                    break;

                case '>':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&gt;");
                    piece = i + 1;
                    break;

                case '\"':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&quot;");
                    piece = i + 1;
                    break;
            }
        }

        if (i > piece)
            this.Append(str.substr(piece, i - piece));
    }

    p.SmartHtmlEncodeAmps = function (str, startOffset, length) {
        var end = startOffset + length;
        var piece = startOffset;
        var i;
        for (i = startOffset; i < end; i++) {
            switch (str.charAt(i)) {
                case '&':
                    var after = SkipHtmlEntity(str, i);
                    if (after < 0) {
                        if (i > piece) {
                            this.Append(str.substr(piece, i - piece));
                        }
                        this.Append("&amp;");
                        piece = i + 1;
                    }
                    else {
                        i = after - 1;
                    }
                    break;
            }
        }

        if (i > piece)
            this.Append(str.substr(piece, i - piece));
    }


    p.HtmlEncodeAndConvertTabsToSpaces = function (str, startOffset, length) {
        var end = startOffset + length;
        var piece = startOffset;
        var pos = 0;
        var i;
        for (i = startOffset; i < end; i++) {
            switch (str.charAt(i)) {
                case '\t':

                    if (i > piece) {
                        this.Append(str.substr(piece, i - piece));
                    }
                    piece = i + 1;

                    this.Append(' ');
                    pos++;
                    while ((pos % 4) != 0) {
                        this.Append(' ');
                        pos++;
                    }
                    pos--; 	// Compensate for the pos++ below
                    break;

                case '\r':
                case '\n':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append('\n');
                    piece = i + 1;
                    continue;

                case '&':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&amp;");
                    piece = i + 1;
                    break;

                case '<':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&lt;");
                    piece = i + 1;
                    break;

                case '>':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&gt;");
                    piece = i + 1;
                    break;

                case '\"':
                    if (i > piece)
                        this.Append(str.substr(piece, i - piece));
                    this.Append("&quot;");
                    piece = i + 1;
                    break;
            }

            pos++;
        }

        if (i > piece)
            this.Append(str.substr(piece, i - piece));
    }




    /////////////////////////////////////////////////////////////////////////////
    // StringScanner

    function StringScanner() {
        this.reset.apply(this, arguments);
    }

    p = StringScanner.prototype;
    p.bof = function () {
        return this.m_position == this.start;
    }

    p.eof = function () {
        return this.m_position >= this.end;
    }

    p.eol = function () {
        if (this.m_position >= this.end)
            return true;
        var ch = this.buf.charAt(this.m_position);
        return ch == '\r' || ch == '\n' || ch == undefined || ch == '';
    }

    p.reset = function (/*string, position, length*/) {
        this.buf = arguments.length > 0 ? arguments[0] : null;
        this.start = arguments.length > 1 ? arguments[1] : 0;
        this.end = arguments.length > 2 ? this.start + arguments[2] : (this.buf == null ? 0 : this.buf.length);
        this.m_position = this.start;
        this.charset_offsets = {};
    }

    p.current = function () {
        if (this.m_position >= this.end)
            return "\0";
        return this.buf.charAt(this.m_position);
    }

    p.remainder = function () {
        return this.buf.substr(this.m_position);
    }

    p.SkipToEof = function () {
        this.m_position = this.end;
    }

    p.SkipForward = function (count) {
        this.m_position += count;
    }

    p.SkipToEol = function () {
        this.m_position = this.buf.indexOf('\n', this.m_position);
        if (this.m_position < 0)
            this.m_position = this.end;
    }

    p.SkipEol = function () {
        var save = this.m_position;
        if (this.buf.charAt(this.m_position) == '\r')
            this.m_position++;
        if (this.buf.charAt(this.m_position) == '\n')
            this.m_position++;
        return this.m_position != save;
    }

    p.SkipToNextLine = function () {
        this.SkipToEol();
        this.SkipEol();
    }

    p.CharAtOffset = function (offset) {
        if (this.m_position + offset >= this.end)
            return "\0";
        return this.buf.charAt(this.m_position + offset);
    }

    p.SkipChar = function (ch) {
        if (this.buf.charAt(this.m_position) == ch) {
            this.m_position++;
            return true;
        }
        return false;
    }
    p.SkipString = function (s) {
        if (this.buf.substr(this.m_position, s.length) == s) {
            this.m_position += s.length;
            return true;
        }
        return false;
    }
    p.SkipWhitespace = function () {
        var save = this.m_position;
        while (true) {
            var ch = this.buf.charAt(this.m_position);
            if (ch != ' ' && ch != '\t' && ch != '\r' && ch != '\n')
                break;
            this.m_position++;
        }
        return this.m_position != save;
    }
    p.SkipLinespace = function () {
        var save = this.m_position;
        while (true) {
            var ch = this.buf.charAt(this.m_position);
            if (ch != ' ' && ch != '\t')
                break;
            this.m_position++;
        }
        return this.m_position != save;
    }
    p.FindRE = function (re) {
        re.lastIndex = this.m_position;
        var result = re.exec(this.buf);
        if (result == null) {
            this.m_position = this.end;
            return false;
        }

        if (result.index + result[0].length > this.end) {
            this.m_position = this.end;
            return false;
        }

        this.m_position = result.index;
        return true;
    }
    p.FindOneOf = function (charset) {
        var next = -1;
        for (var ch in charset) {
            var charset_info = charset[ch];

            // Setup charset_info for this character
            if (charset_info == null) {
                charset_info = {};
                charset_info.m_searched_from = -1;
                charset_info.m_found_at = -1;
                charset[ch] = charset_info;
            }

            // Search again?
            if (charset_info.m_searched_from == -1 ||
                this.m_position < charset_info.m_searched_from ||
                (this.m_position >= charset_info.m_found_at && charset_info.m_found_at != -1)) {
                charset_info.m_searched_from = this.m_position;
                charset_info.m_found_at = this.buf.indexOf(ch, this.m_position);
            }

            // Is this character next?
            if (next == -1 || charset_info.m_found_at < next) {
                next = charset_info.m_found_at;
            }

        }

        if (next == -1) {
            next = this.end;
            return false;
        }

        p.m_position = next;
        return true;
    }
    p.Find = function (s) {
        this.m_position = this.buf.indexOf(s, this.m_position);
        if (this.m_position < 0) {
            this.m_position = this.end;
            return false;
        }
        return true;
    }
    p.Mark = function () {
        this.mark = this.m_position;
    }
    p.Extract = function () {
        if (this.mark >= this.m_position)
            return "";
        else
            return this.buf.substr(this.mark, this.m_position - this.mark);
    }
    p.SkipIdentifier = function () {
        var ch = this.buf.charAt(this.m_position);
        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || ch == '_') {
            this.m_position++;
            while (true) {
                ch = this.buf.charAt(this.m_position);
                if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || ch == '_' || (ch >= '0' && ch <= '9'))
                    this.m_position++;
                else
                    return true;
            }
        }
        return false;
    }

    p.SkipFootnoteID = function () {
        var savepos = this.m_position;

        this.SkipLinespace();

        this.Mark();

        while (true) {
            var ch = this.current();
            if (is_alphadigit(ch) || ch == '-' || ch == '_' || ch == ':' || ch == '.' || ch == ' ')
                this.SkipForward(1);
            else
                break;
        }

        if (this.m_position > this.mark) {
            var id = Trim(this.Extract());
            if (id.length > 0) {
                this.SkipLinespace();
                return id;
            }
        }

        this.m_position = savepos;
        return null;
    }

    p.SkipHtmlEntity = function () {
        if (this.buf.charAt(this.m_position) != '&')
            return false;

        var newpos = SkipHtmlEntity(this.buf, this.m_position);
        if (newpos < 0)
            return false;

        this.m_position = newpos;
        return true;
    }

    p.SkipEscapableChar = function (ExtraMode) {
        if (this.buf.charAt(this.m_position) == '\\' && is_escapable(this.buf.charAt(this.m_position + 1), ExtraMode)) {
            this.m_position += 2;
            return true;
        }
        else {
            if (this.m_position < this.end)
                this.m_position++;
            return false;
        }
    }


    /////////////////////////////////////////////////////////////////////////////
    // HtmlTag

    var HtmlTagFlags_Block = 0x0001; 	// Block tag
    var HtmlTagFlags_Inline = 0x0002; 	// Inline tag
    var HtmlTagFlags_NoClosing = 0x0004; 	// No closing tag (eg: <hr> and <!-- -->)
    var HtmlTagFlags_ContentAsSpan = 0x0008;        // When markdown=1 treat content as span, not block


    function HtmlTag(name) {
        this.name = name;
        this.attributes = {};
        this.flags = 0;
        this.closed = false;
        this.closing = false;
    }

    p = HtmlTag.prototype;

    p.attributeCount = function () {
        if (!this.attributes)
            return 0;

        var count = 0;
        for (var x in this.attributes)
            count++;

        return count;
    }

    p.get_Flags = function () {
        if (this.flags == 0) {
            this.flags = tag_flags[this.name.toLowerCase()];
            if (this.flags == undefined) {
                this.flags = HtmlTagFlags_Inline;
            }
        }
        return this.flags;
    }

    p.IsSafe = function () {
        var name_lower = this.name.toLowerCase();

        // Check if tag is in whitelist
        if (!allowed_tags[name_lower])
            return false;

        // Find allowed attributes
        var allowed = allowed_attributes[name_lower];
        if (!allowed) {
            return this.attributeCount() == 0;
        }

        // No attributes?
        if (!this.attributes)
            return true;

        // Check all are allowed
        for (var i in this.attributes) {
            if (!allowed[i.toLowerCase()])
                return false;
        }

        // Check href attribute is ok
        if (this.attributes["href"]) {
            if (!IsSafeUrl(this.attributes["href"]))
                return false;
        }

        if (this.attributes["src"]) {
            if (!IsSafeUrl(this.attributes["src"]))
                return false;
        }

        // Passed all white list checks, allow it
        return true;
    }

    // Render opening tag (eg: <tag attr="value">
    p.RenderOpening = function (dest) {
        dest.Append("<");
        dest.Append(this.name);
        for (var i in this.attributes) {
            dest.Append(" ");
            dest.Append(i);
            dest.Append("=\"");
            dest.Append(this.attributes[i]);
            dest.Append("\"");
        }

        if (this.closed)
            dest.Append(" />");
        else
            dest.Append(">");
    }

    // Render closing tag (eg: </tag>)
    p.RenderClosing = function (dest) {
        dest.Append("</");
        dest.Append(this.name);
        dest.Append(">");
    }



    function IsSafeUrl(url) {
        url = url.toLowerCase();
        return (url.substr(0, 7) == "http://" ||
        url.substr(0, 8) == "https://" ||
        url.substr(0, 6) == "ftp://");
    }

    function ParseHtmlTag(p) {
        // Save position
        var savepos = p.m_position;

        // Parse it
        var ret = ParseHtmlTagHelper(p);
        if (ret != null)
            return ret;

        // Rewind if failed
        p.m_position = savepos;
        return null;
    }

    function ParseHtmlTagHelper(p) {
        // Does it look like a tag?
        if (p.current() != '<')
            return null;

        // Skip '<'
        p.SkipForward(1);

        // Is it a comment?
        if (p.SkipString("!--")) {
            p.Mark();

            if (p.Find("-->")) {
                var t = new HtmlTag("!");
                t.attributes["content"] = p.Extract();
                t.closed = true;
                p.SkipForward(3);
                return t;
            }
        }

        // Is it a closing tag eg: </div>
        var bClosing = p.SkipChar('/');

        // Get the tag name
        p.Mark();
        if (!p.SkipIdentifier())
            return null;

        // Probably a tag, create the HtmlTag object now
        var tag = new HtmlTag(p.Extract());
        tag.closing = bClosing;

        // If it's a closing tag, no attributes
        if (bClosing) {
            if (p.current() != '>')
                return null;

            p.SkipForward(1);
            return tag;
        }


        while (!p.eof()) {
            // Skip whitespace
            p.SkipWhitespace();

            // Check for closed tag eg: <hr />
            if (p.SkipString("/>")) {
                tag.closed = true;
                return tag;
            }

            // End of tag?
            if (p.SkipChar('>')) {
                return tag;
            }

            // attribute name
            p.Mark();
            if (!p.SkipIdentifier())
                return null;
            var attributeName = p.Extract();

            // Skip whitespace
            p.SkipWhitespace();

            // Skip equal sign
            if (!p.SkipChar('='))
                return null;

            // Skip whitespace
            p.SkipWhitespace();

            // Optional quotes
            if (p.SkipChar('\"')) {
                // Scan the value
                p.Mark();
                if (!p.Find('\"'))
                    return null;

                // Store the value
                tag.attributes[attributeName] = p.Extract();

                // Skip closing quote
                p.SkipForward(1);
            }
            else {
                // Scan the value
                p.Mark();
                while (!p.eof() && !is_whitespace(p.current()) && p.current() != '>' && p.current() != '/')
                    p.SkipForward(1);

                if (!p.eof()) {
                    // Store the value
                    tag.attributes[attributeName] = p.Extract();
                }
            }
        }

        return null;
    }


    var allowed_tags = {
        "b": 1, "blockquote": 1, "code": 1, "dd": 1, "dt": 1, "dl": 1, "del": 1, "em": 1,
        "h1": 1, "h2": 1, "h3": 1, "h4": 1, "h5": 1, "h6": 1, "i": 1, "kbd": 1, "li": 1, "ol": 1, "ul": 1,
        "p": 1, "pre": 1, "s": 1, "sub": 1, "sup": 1, "strong": 1, "strike": 1, "img": 1, "a": 1
    };

    var allowed_attributes = {
        "a": { "href": 1, "title": 1 },
        "img": { "src": 1, "width": 1, "height": 1, "alt": 1, "title": 1 }
    };

    var b = HtmlTagFlags_Block;
    var i = HtmlTagFlags_Inline;
    var n = HtmlTagFlags_NoClosing;
    var s = HtmlTagFlags_ContentAsSpan;
    var tag_flags = {
        "p": b | s,
        "div": b,
        "h1": b | s,
        "h2": b | s,
        "h3": b | s,
        "h4": b | s,
        "h5": b | s,
        "h6": b | s,
        "blockquote": b,
        "pre": b,
        "table": b,
        "dl": b,
        "ol": b,
        "ul": b,
        "form": b,
        "fieldset": b,
        "iframe": b,
        "script": b | i,
        "noscript": b | i,
        "math": b | i,
        "ins": b | i,
        "del": b | i,
        "img": b | i,
        "li": s,
        "dd": s,
        "dt": s,
        "td": s,
        "th": s,
        "legend": s,
        "address": s,
        "hr": b | n,
        "!": b | n,
        "head": b
    };
    delete b;
    delete i;
    delete n;



    /////////////////////////////////////////////////////////////////////////////
    // LinkDefinition

    function LinkDefinition(id, url, title) {
        this.id = id;
        this.url = url;
        if (title == undefined)
            this.title = null;
        else
            this.title = title;
    }

    p = LinkDefinition.prototype;
    p.RenderLink = function (m, b, link_text) {
        if (this.url.substr(0, 7).toLowerCase() == "mailto:") {
            b.Append("<a href=\"");
            b.HtmlRandomize(this.url);
            b.Append('\"');
            if (this.title) {
                b.Append(" title=\"");
                b.SmartHtmlEncodeAmpsAndAngles(this.title, 0, this.title.length);
                b.Append('\"');
            }
            b.Append('>');
            b.HtmlRandomize(link_text);
            b.Append("</a>");
        }
        else {
            var tag = new HtmlTag("a");

            // encode url
            var sb = m.GetStringBuilder();
            sb.SmartHtmlEncodeAmpsAndAngles(this.url, 0, this.url.length);
            tag.attributes["href"] = sb.ToString();

            // encode title
            if (this.title) {
                sb.Clear();
                sb.SmartHtmlEncodeAmpsAndAngles(this.title, 0, this.title.length);
                tag.attributes["title"] = sb.ToString();
            }

            // Do user processing
            m.OnPrepareLink(tag);

            // Render the opening tag
            tag.RenderOpening(b);

            b.Append(link_text);   // Link text already escaped by SpanFormatter
            b.Append("</a>");
        }
    }

    p.RenderImg = function (m, b, alt_text) {
        var tag = new HtmlTag("img");

        // encode url
        var sb = m.GetStringBuilder();
        sb.SmartHtmlEncodeAmpsAndAngles(this.url, 0, this.url.length);
        tag.attributes["src"] = sb.ToString();

        // encode alt text
        if (alt_text) {
            sb.Clear();
            sb.SmartHtmlEncodeAmpsAndAngles(alt_text, 0, alt_text.length);
            tag.attributes["alt"] = sb.ToString();
        }

        // encode title
        if (this.title) {
            sb.Clear();
            sb.SmartHtmlEncodeAmpsAndAngles(this.title, 0, this.title.length);
            tag.attributes["title"] = sb.ToString();
        }

        tag.closed = true;

        m.OnPrepareImage(tag, m.RenderingTitledImage);

        tag.RenderOpening(b);

        /*
         b.Append("<img src=\"");
         b.SmartHtmlEncodeAmpsAndAngles(this.url, 0, this.url.length);
         b.Append('\"');
         if (alt_text)
         {
         b.Append(" alt=\"");
         b.SmartHtmlEncodeAmpsAndAngles(alt_text, 0, alt_text.length);
         b.Append('\"');
         }
         if (this.title)
         {
         b.Append(" title=\"");
         b.SmartHtmlEncodeAmpsAndAngles(this.title, 0, this.title.length);
         b.Append('\"');
         }
         b.Append(" />");
         */
    }

    function ParseLinkDefinition(p, ExtraMode) {
        var savepos = p.m_position;
        var l = ParseLinkDefinitionInternal(p, ExtraMode);
        if (l == null)
            p.m_position = savepos;
        return l;
    }

    function ParseLinkDefinitionInternal(p, ExtraMode) {
        // Skip leading white space
        p.SkipWhitespace();

        // Must start with an opening square bracket
        if (!p.SkipChar('['))
            return null;

        // Extract the id
        p.Mark();
        if (!p.Find(']'))
            return null;
        var id = p.Extract();
        if (id.length == 0)
            return null;
        if (!p.SkipString("]:"))
            return null;

        // Parse the url and title
        var link = ParseLinkTarget(p, id, ExtraMode);

        // and trailing whitespace
        p.SkipLinespace();

        // Trailing crap, not a valid link reference...
        if (!p.eol())
            return null;

        return link;
    }

    // Parse just the link target
    // For reference link definition, this is the bit after "[id]: thisbit"
    // For inline link, this is the bit in the parens: [link text](thisbit)
    function ParseLinkTarget(p, id, ExtraMode) {
        // Skip whitespace
        p.SkipWhitespace();

        // End of string?
        if (p.eol())
            return null;

        // Create the link definition
        var r = new LinkDefinition(id);

        // Is the url enclosed in angle brackets
        if (p.SkipChar('<')) {
            // Extract the url
            p.Mark();

            // Find end of the url
            while (p.current() != '>') {
                if (p.eof())
                    return null;
                p.SkipEscapableChar(ExtraMode);
            }

            var url = p.Extract();
            if (!p.SkipChar('>'))
                return null;

            // Unescape it
            r.url = UnescapeString(Trim(url), ExtraMode);

            // Skip whitespace
            p.SkipWhitespace();
        }
        else {
            // Find end of the url
            p.Mark();
            var paren_depth = 1;
            while (!p.eol()) {
                var ch = p.current();
                if (is_whitespace(ch))
                    break;
                if (id == null) {
                    if (ch == '(')
                        paren_depth++;
                    else if (ch == ')') {
                        paren_depth--;
                        if (paren_depth == 0)
                            break;
                    }
                }

                p.SkipEscapableChar(ExtraMode);
            }

            r.url = UnescapeString(Trim(p.Extract()), ExtraMode);
        }

        p.SkipLinespace();

        // End of inline target
        if (p.current() == ')')
            return r;

        var bOnNewLine = p.eol();
        var posLineEnd = p.m_position;
        if (p.eol()) {
            p.SkipEol();
            p.SkipLinespace();
        }

        // Work out what the title is delimited with
        var delim;
        switch (p.current()) {
            case '\'':
            case '\"':
                delim = p.current();
                break;

            case '(':
                delim = ')';
                break;

            default:
                if (bOnNewLine) {
                    p.m_position = posLineEnd;
                    return r;
                }
                else
                    return null;
        }

        // Skip the opening title delimiter
        p.SkipForward(1);

        // Find the end of the title
        p.Mark();
        while (true) {
            if (p.eol())
                return null;

            if (p.current() == delim) {

                if (delim != ')') {
                    var savepos = p.m_position;

                    // Check for embedded quotes in title

                    // Skip the quote and any trailing whitespace
                    p.SkipForward(1);
                    p.SkipLinespace();

                    // Next we expect either the end of the line for a link definition
                    // or the close bracket for an inline link
                    if ((id == null && p.current() != ')') ||
                        (id != null && !p.eol())) {
                        continue;
                    }

                    p.m_position = savepos;
                }

                // End of title
                break;
            }

            p.SkipEscapableChar(ExtraMode);
        }

        // Store the title
        r.title = UnescapeString(p.Extract(), ExtraMode);

        // Skip closing quote
        p.SkipForward(1);

        // Done!
        return r;
    }


    /////////////////////////////////////////////////////////////////////////////
    // LinkInfo

    function LinkInfo(def, link_text) {
        this.def = def;
        this.link_text = link_text;
    }


    /////////////////////////////////////////////////////////////////////////////
    // Token

    var TokenType_Text = 0;
    var TokenType_HtmlTag = 1;
    var TokenType_Html = 2;
    var TokenType_open_em = 3;
    var TokenType_close_em = 4;
    var TokenType_open_strong = 5;
    var TokenType_close_strong = 6;
    var TokenType_code_span = 7;
    var TokenType_br = 8;
    var TokenType_link = 9;
    var TokenType_img = 10;
    var TokenType_opening_mark = 11;
    var TokenType_closing_mark = 12;
    var TokenType_internal_mark = 13;
    var TokenType_footnote = 14;
    var TokenType_abbreviation = 15;

    function Token(type, startOffset, length) {
        this.type = type;
        this.startOffset = startOffset;
        this.length = length;
        this.data = null;
    }

    /////////////////////////////////////////////////////////////////////////////
    // SpanFormatter

    function SpanFormatter(markdown) {
        this.m_Markdown = markdown;
        this.m_Scanner = new StringScanner();
        this.m_SpareTokens = [];
        this.m_DisableLinks = false;
        this.m_Tokens = [];
    }

    p = SpanFormatter.prototype;

    p.FormatParagraph = function (dest, str, start, len) {
        // Parse the string into a list of tokens
        this.Tokenize(str, start, len);

        // Titled image?
        if (this.m_Tokens.length == 1 && this.m_Markdown.HtmlClassTitledImages != null && this.m_Tokens[0].type == TokenType_img) {
            // Grab the link info
            var li = this.m_Tokens[0].data;

            // Render the div opening
            dest.Append("<div class=\"");
            dest.Append(this.m_Markdown.HtmlClassTitledImages);
            dest.Append("\">\n");

            // Render the img
            this.m_Markdown.RenderingTitledImage = true;
            this.Render(dest, str);
            this.m_Markdown.RenderingTitledImage = false;
            dest.Append("\n");

            // Render the title
            if (li.def.title) {
                dest.Append("<p>");
                dest.SmartHtmlEncodeAmpsAndAngles(li.def.title, 0, li.def.title.length);
                dest.Append("</p>\n");
            }

            dest.Append("</div>\n");
        }
        else {
            // Render the paragraph
            dest.Append("<p>");
            this.Render(dest, str);
            dest.Append("</p>\n");
        }

    }

    // Format part of a string into a destination string builder
    p.Format2 = function (dest, str) {
        this.Format(dest, str, 0, str.length);
    }

    // Format part of a string into a destination string builder
    p.Format = function (dest, str, start, len) {
        // Parse the string into a list of tokens
        this.Tokenize(str, start, len);

        // Render all tokens
        this.Render(dest, str);
    }

    // Format a string and return it as a new string
    // (used in formatting the text of links)
    p.FormatDirect = function (str) {
        var dest = new StringBuilder();
        this.Format(dest, str, 0, str.length);
        return dest.ToString();
    }

    p.MakeID = function (str, start, len) {
        // Parse the string into a list of tokens
        this.Tokenize(str, start, len);
        var tokens = this.m_Tokens;

        var sb = new StringBuilder();
        for (var i = 0; i < tokens.length; i++) {
            var t = tokens[i];
            switch (t.type) {
                case TokenType_Text:
                    sb.Append(str.substr(t.startOffset, t.length));
                    break;

                case TokenType_link:
                    sb.Append(t.data.link_text);
                    break;
            }
            this.FreeToken(t);
        }

        // Now clean it using the same rules as pandoc
        var p = this.m_Scanner;
        p.reset(sb.ToString());

        // Skip everything up to the first letter
        while (!p.eof()) {
            if (is_alpha(p.current()))
                break;
            p.SkipForward(1);
        }

        // Process all characters
        sb.Clear();
        while (!p.eof()) {
            var ch = p.current();
            if (is_alphadigit(ch) || ch == '_' || ch == '-' || ch == '.')
                sb.Append(ch.toLowerCase());
            else if (ch == ' ')
                sb.Append("-");
            else if (is_lineend(ch)) {
                sb.Append("-");
                p.SkipEol();
                continue;
            }

            p.SkipForward(1);
        }

        return sb.ToString();
    }



    // Render a list of tokens to a destination string builder.
    p.Render = function (sb, str) {
        var tokens = this.m_Tokens;
        var len = tokens.length;
        for (var i = 0; i < len; i++) {
            var t = tokens[i];
            switch (t.type) {
                case TokenType_Text:
                    // Append encoded text
                    sb.HtmlEncode(str, t.startOffset, t.length);
                    break;

                case TokenType_HtmlTag:
                    // Append html as is
                    sb.SmartHtmlEncodeAmps(str, t.startOffset, t.length);
                    break;

                case TokenType_Html:
                case TokenType_opening_mark:
                case TokenType_closing_mark:
                case TokenType_internal_mark:
                    // Append html as is
                    sb.Append(str.substr(t.startOffset, t.length));
                    break;

                case TokenType_br:
                    sb.Append("<br />\n");
                    break;

                case TokenType_open_em:
                    sb.Append("<em>");
                    break;

                case TokenType_close_em:
                    sb.Append("</em>");
                    break;

                case TokenType_open_strong:
                    sb.Append("<strong>");
                    break;

                case TokenType_close_strong:
                    sb.Append("</strong>");
                    break;

                case TokenType_code_span:
                    sb.Append("<code>");
                    sb.HtmlEncode(str, t.startOffset, t.length);
                    sb.Append("</code>");
                    break;

                case TokenType_link:
                    var li = t.data;
                    var sf = new SpanFormatter(this.m_Markdown);
                    sf.m_DisableLinks = true;

                    li.def.RenderLink(this.m_Markdown, sb, sf.FormatDirect(li.link_text));
                    break;

                case TokenType_img:
                    var li = t.data;
                    li.def.RenderImg(this.m_Markdown, sb, li.link_text);
                    break;

                case TokenType_footnote:
                    var r = t.data;
                    sb.Append("<sup id=\"fnref:");
                    sb.Append(r.id);
                    sb.Append("\"><a href=\"#fn:");
                    sb.Append(r.id);
                    sb.Append("\" rel=\"footnote\">");
                    sb.Append(r.index + 1);
                    sb.Append("</a></sup>");
                    break;

                case TokenType_abbreviation:
                    var a = t.data;
                    sb.Append("<abbr");
                    if (a.Title) {
                        sb.Append(" title=\"");
                        sb.HtmlEncode(a.Title, 0, a.Title.length);
                        sb.Append("\"");
                    }
                    sb.Append(">");
                    sb.HtmlEncode(a.Abbr, 0, a.Abbr.length);
                    sb.Append("</abbr>");
                    break;


            }

            this.FreeToken(t);
        }
    }

    p.Tokenize = function (str, start, len) {
        // Reset the string scanner
        var p = this.m_Scanner;
        p.reset(str, start, len);

        var tokens = this.m_Tokens;
        tokens.length = 0;

        var emphasis_marks = null;
        var Abbreviations = this.m_Markdown.GetAbbreviations();

        var re = Abbreviations == null ? /[\*\_\`\[\!\<\&\ \\]/g : null;

        var ExtraMode = this.m_Markdown.ExtraMode;

        // Scan string
        var start_text_token = p.m_position;
        while (!p.eof()) {
            if (re != null && !p.FindRE(re))
                break;

            var end_text_token = p.m_position;

            // Work out token
            var token = null;
            switch (p.current()) {
                case '*':
                case '_':

                    // Create emphasis mark
                    token = this.CreateEmphasisMark();

                    if (token != null) {
                        // Store marks in a separate list the we'll resolve later
                        switch (token.type) {
                            case TokenType_internal_mark:
                            case TokenType_opening_mark:
                            case TokenType_closing_mark:
                                if (emphasis_marks == null) {
                                    emphasis_marks = [];
                                }
                                emphasis_marks.push(token);
                                break;
                        }
                    }
                    break;

                case '`':
                    token = this.ProcessCodeSpan();
                    break;

                case '[':
                case '!':
                    // Process link reference
                    var linkpos = p.m_position;
                    token = this.ProcessLinkOrImageOrFootnote();

                    // Rewind if invalid syntax
                    // (the '[' or '!' will be treated as a regular character and processed below)
                    if (token == null)
                        p.m_position = linkpos;
                    break;

                case '<':
                    // Is it a valid html tag?
                    var save = p.m_position;
                    var tag = ParseHtmlTag(p);
                    if (tag != null) {
                        // Yes, create a token for it
                        if (!this.m_Markdown.SafeMode || tag.IsSafe()) {
                            // Yes, create a token for it
                            token = this.CreateToken(TokenType_HtmlTag, save, p.m_position - save);
                        }
                        else {
                            // No, rewrite and encode it
                            p.m_position = save;
                        }
                    }
                    else {
                        // No, rewind and check if it's a valid autolink eg: <google.com>
                        p.m_position = save;
                        token = this.ProcessAutoLink();

                        if (token == null)
                            p.m_position = save;
                    }
                    break;

                case '&':
                    // Is it a valid html entity
                    var save = p.m_position;
                    if (p.SkipHtmlEntity()) {
                        // Yes, create a token for it
                        token = this.CreateToken(TokenType_Html, save, p.m_position - save);
                    }

                    break;

                case ' ':
                    // Check for double space at end of a line
                    if (p.CharAtOffset(1) == ' ' && is_lineend(p.CharAtOffset(2))) {
                        // Yes, skip it
                        p.SkipForward(2);

                        // Don't put br's at the end of a paragraph
                        if (!p.eof()) {
                            p.SkipEol();
                            token = this.CreateToken(TokenType_br, end_text_token, 0);
                        }
                    }
                    break;

                case '\\':
                    // Check followed by an escapable character
                    if (is_escapable(p.CharAtOffset(1), ExtraMode)) {
                        token = this.CreateToken(TokenType_Text, p.m_position + 1, 1);
                        p.SkipForward(2);
                    }
                    break;
            }

            // Look for abbreviations.
            if (token == null && Abbreviations != null && !is_alphadigit(p.CharAtOffset(-1))) {
                var savepos = p.m_position;
                for (var i in Abbreviations) {
                    var abbr = Abbreviations[i];
                    if (p.SkipString(abbr.Abbr) && !is_alphadigit(p.current())) {
                        token = this.CreateDataToken(TokenType_abbreviation, abbr);
                        break;
                    }

                    p.position = savepos;
                }
            }


            // If token found, append any preceeding text and the new token to the token list
            if (token != null) {
                // Create a token for everything up to the special character
                if (end_text_token > start_text_token) {
                    tokens.push(this.CreateToken(TokenType_Text, start_text_token, end_text_token - start_text_token));
                }

                // Add the new token
                tokens.push(token);

                // Remember where the next text token starts
                start_text_token = p.m_position;
            }
            else {
                // Skip a single character and keep looking
                p.SkipForward(1);
            }
        }

        // Append a token for any trailing text after the last token.
        if (p.m_position > start_text_token) {
            tokens.push(this.CreateToken(TokenType_Text, start_text_token, p.m_position - start_text_token));
        }

        // Do we need to resolve and emphasis marks?
        if (emphasis_marks != null) {
            this.ResolveEmphasisMarks(tokens, emphasis_marks);
        }
    }

    /*
     * Resolving emphasis tokens is a two part process
     *
     * 1. Find all valid sequences of * and _ and create `mark` tokens for them
     *		this is done by CreateEmphasisMarks during the initial character scan
     *		done by Tokenize
     *
     * 2. Looks at all these emphasis marks and tries to pair them up
     *		to make the actual <em> and <strong> tokens
     *
     * Any unresolved emphasis marks are rendered unaltered as * or _
     */

    // Create emphasis mark for sequences of '*' and '_' (part 1)
    p.CreateEmphasisMark = function () {
        var p = this.m_Scanner;

        // Capture current state
        var ch = p.current();
        var altch = ch == '*' ? '_' : '*';
        var savepos = p.m_position;

        // Check for a consecutive sequence of just '_' and '*'
        if (p.bof() || is_whitespace(p.CharAtOffset(-1))) {
            while (is_emphasis(p.current()))
                p.SkipForward(1);

            if (p.eof() || is_whitespace(p.current())) {
                return this.CreateToken(TokenType_Html, savepos, p.m_position - savepos);
            }

            // Rewind
            p.m_position = savepos;
        }

        // Scan backwards and see if we have space before
        while (is_emphasis(p.CharAtOffset(-1)))
            p.SkipForward(-1);
        var bSpaceBefore = p.bof() || is_whitespace(p.CharAtOffset(-1));
        p.m_position = savepos;

        // Count how many matching emphasis characters
        while (p.current() == ch) {
            p.SkipForward(1);
        }
        var count = p.m_position - savepos;

        // Scan forwards and see if we have space after
        while (is_emphasis(p.CharAtOffset(1)))
            p.SkipForward(1);
        var bSpaceAfter = p.eof() || is_whitespace(p.current());
        p.m_position = savepos + count;

        if (bSpaceBefore) {
            return this.CreateToken(TokenType_opening_mark, savepos, p.m_position - savepos);
        }

        if (bSpaceAfter) {
            return this.CreateToken(TokenType_closing_mark, savepos, p.m_position - savepos);
        }

        if (this.m_Markdown.ExtraMode && ch == '_')
            return null;


        return this.CreateToken(TokenType_internal_mark, savepos, p.m_position - savepos);
    }

    // Split mark token
    p.SplitMarkToken = function (tokens, marks, token, position) {
        // Create the new rhs token
        var tokenRhs = this.CreateToken(token.type, token.startOffset + position, token.length - position);

        // Adjust down the length of this token
        token.length = position;

        // Insert the new token into each of the parent collections
        marks.splice(array_indexOf(marks, token) + 1, 0, tokenRhs);
        tokens.splice(array_indexOf(tokens, token) + 1, 0, tokenRhs);

        // Return the new token
        return tokenRhs;
    }

    // Resolve emphasis marks (part 2)
    p.ResolveEmphasisMarks = function (tokens, marks) {
        var input = this.m_Scanner.buf;

        var bContinue = true;
        while (bContinue) {
            bContinue = false;
            for (var i = 0; i < marks.length; i++) {
                // Get the next opening or internal mark
                var opening_mark = marks[i];
                if (opening_mark.type != TokenType_opening_mark && opening_mark.type != TokenType_internal_mark)
                    continue;

                // Look for a matching closing mark
                for (var j = i + 1; j < marks.length; j++) {
                    // Get the next closing or internal mark
                    var closing_mark = marks[j];
                    if (closing_mark.type != TokenType_closing_mark && closing_mark.type != TokenType_internal_mark)
                        break;

                    // Ignore if different type (ie: `*` vs `_`)
                    if (input.charAt(opening_mark.startOffset) != input.charAt(closing_mark.startOffset))
                        continue;

                    // strong or em?
                    var style = Math.min(opening_mark.length, closing_mark.length);

                    // Triple or more on both ends?
                    if (style >= 3) {
                        style = (style % 2) == 1 ? 1 : 2;
                    }

                    // Split the opening mark, keeping the RHS
                    if (opening_mark.length > style) {
                        opening_mark = this.SplitMarkToken(tokens, marks, opening_mark, opening_mark.length - style);
                        i--;
                    }

                    // Split the closing mark, keeping the LHS
                    if (closing_mark.length > style) {
                        this.SplitMarkToken(tokens, marks, closing_mark, style);
                    }

                    // Connect them
                    opening_mark.type = style == 1 ? TokenType_open_em : TokenType_open_strong;
                    closing_mark.type = style == 1 ? TokenType_close_em : TokenType_close_strong;

                    // Remove the matched marks
                    marks.splice(array_indexOf(marks, opening_mark), 1);
                    marks.splice(array_indexOf(marks, closing_mark), 1);
                    bContinue = true;

                    break;
                }
            }
        }
    }

    // Process auto links eg: <google.com>
    p.ProcessAutoLink = function () {
        if (this.m_DisableLinks)
            return null;

        var p = this.m_Scanner;

        // Skip the angle bracket and remember the start
        p.SkipForward(1);
        p.Mark();

        var ExtraMode = this.m_Markdown.ExtraMode;

        // Allow anything up to the closing angle, watch for escapable characters
        while (!p.eof()) {
            var ch = p.current();

            // No whitespace allowed
            if (is_whitespace(ch))
                break;

            // End found?
            if (ch == '>') {
                var url = UnescapeString(p.Extract(), ExtraMode);

                var li = null;
                if (IsEmailAddress(url)) {
                    var link_text;
                    if (url.toLowerCase().substr(0, 7) == "mailto:") {
                        link_text = url.substr(7);
                    }
                    else {
                        link_text = url;
                        url = "mailto:" + url;
                    }

                    li = new LinkInfo(new LinkDefinition("auto", url, null), link_text);
                }
                else if (IsWebAddress(url)) {
                    li = new LinkInfo(new LinkDefinition("auto", url, null), url);
                }

                if (li != null) {
                    p.SkipForward(1);
                    return this.CreateDataToken(TokenType_link, li);
                }

                return null;
            }

            p.SkipEscapableChar(ExtraMode);
        }

        // Didn't work
        return null;
    }

    // Process [link] and ![image] directives
    p.ProcessLinkOrImageOrFootnote = function () {
        var p = this.m_Scanner;

        // Link or image?
        var token_type = p.SkipChar('!') ? TokenType_img : TokenType_link;

        // Opening '['
        if (!p.SkipChar('['))
            return null;

        // Is it a foonote?
        var savepos = this.m_position;
        if (this.m_Markdown.ExtraMode && token_type == TokenType_link && p.SkipChar('^')) {
            p.SkipLinespace();

            // Parse it
            p.Mark();
            var id = p.SkipFootnoteID();
            if (id != null && p.SkipChar(']')) {
                // Look it up and create footnote reference token
                var footnote_index = this.m_Markdown.ClaimFootnote(id);
                if (footnote_index >= 0) {
                    // Yes it's a footnote
                    return this.CreateDataToken(TokenType_footnote, { index: footnote_index, id: id });
                }
            }

            // Rewind
            this.m_position = savepos;
        }

        if (this.m_DisableLinks)
            return null;

        var ExtraMode = this.m_Markdown.ExtraMode;

        // Find the closing square bracket, allowing for nesting, watching for
        // escapable characters
        p.Mark();
        var depth = 1;
        while (!p.eof()) {
            var ch = p.current();
            if (ch == '[') {
                depth++;
            }
            else if (ch == ']') {
                depth--;
                if (depth == 0)
                    break;
            }

            p.SkipEscapableChar(ExtraMode);
        }

        // Quit if end
        if (p.eof())
            return null;

        // Get the link text and unescape it
        var link_text = UnescapeString(p.Extract(), ExtraMode);

        // The closing ']'
        p.SkipForward(1);

        // Save position in case we need to rewind
        savepos = p.m_position;

        // Inline links must follow immediately
        if (p.SkipChar('(')) {
            // Extract the url and title
            var link_def = ParseLinkTarget(p, null, this.m_Markdown.ExtraMode);
            if (link_def == null)
                return null;

            // Closing ')'
            p.SkipWhitespace();
            if (!p.SkipChar(')'))
                return null;

            // Create the token
            return this.CreateDataToken(token_type, new LinkInfo(link_def, link_text));
        }

        // Optional space or tab
        if (!p.SkipChar(' '))
            p.SkipChar('\t');

        // If there's line end, we're allow it and as must line space as we want
        // before the link id.
        if (p.eol()) {
            p.SkipEol();
            p.SkipLinespace();
        }

        // Reference link?
        var link_id = null;
        if (p.current() == '[') {
            // Skip the opening '['
            p.SkipForward(1);

            // Find the start/end of the id
            p.Mark();
            if (!p.Find(']'))
                return null;

            // Extract the id
            link_id = p.Extract();

            // Skip closing ']'
            p.SkipForward(1);
        }
        else {
            // Rewind to just after the closing ']'
            p.m_position = savepos;
        }

        // Link id not specified?
        if (!link_id) {
            link_id = link_text;

            // Convert all whitespace+line end to a single space
            while (true) {
                // Find carriage return
                var i = link_id.indexOf("\n");
                if (i < 0)
                    break;

                var start = i;
                while (start > 0 && is_whitespace(link_id.charAt(start - 1)))
                    start--;

                var end = i;
                while (end < link_id.length && is_whitespace(link_id.charAt(end)))
                    end++;

                link_id = link_id.substr(0, start) + " " + link_id.substr(end);
            }
        }

        // Find the link definition, abort if not defined
        var def = this.m_Markdown.GetLinkDefinition(link_id);
        if (def == null)
            return null;

        // Create a token
        return this.CreateDataToken(token_type, new LinkInfo(def, link_text));
    }

    // Process a ``` code span ```
    p.ProcessCodeSpan = function () {
        var p = this.m_Scanner;
        var start = p.m_position;

        // Count leading ticks
        var tickcount = 0;
        while (p.SkipChar('`')) {
            tickcount++;
        }

        // Skip optional leading space...
        p.SkipWhitespace();

        // End?
        if (p.eof())
            return this.CreateToken(TokenType_Text, start, p.m_position - start);

        var startofcode = p.m_position;

        // Find closing ticks
        if (!p.Find(p.buf.substr(start, tickcount)))
            return this.CreateToken(TokenType_Text, start, p.m_position - start);

        // Save end position before backing up over trailing whitespace
        var endpos = p.m_position + tickcount;
        while (is_whitespace(p.CharAtOffset(-1)))
            p.SkipForward(-1);

        // Create the token, move back to the end and we're done
        var ret = this.CreateToken(TokenType_code_span, startofcode, p.m_position - startofcode);
        p.m_position = endpos;
        return ret;
    }

    p.CreateToken = function (type, startOffset, length) {
        if (this.m_SpareTokens.length != 0) {
            var t = this.m_SpareTokens.pop();
            t.type = type;
            t.startOffset = startOffset;
            t.length = length;
            t.data = null;
            return t;
        }
        else
            return new Token(type, startOffset, length);
    }

    // CreateToken - create or re-use a token object
    p.CreateDataToken = function (type, data) {
        if (this.m_SpareTokens.length != 0) {
            var t = this.m_SpareTokens.pop();
            t.type = type;
            t.data = data;
            return t;
        }
        else {
            var t = new Token(type, 0, 0);
            t.data = data;
            return t;
        }
    }

    // FreeToken - return a token to the spare token pool
    p.FreeToken = function (token) {
        token.data = null;
        this.m_SpareTokens.push(token);
    }



    /////////////////////////////////////////////////////////////////////////////
    // Block

    var BlockType_Blank = 0;
    var BlockType_h1 = 1;
    var BlockType_h2 = 2;
    var BlockType_h3 = 3;
    var BlockType_h4 = 4;
    var BlockType_h5 = 5;
    var BlockType_h6 = 6;
    var BlockType_post_h1 = 7;
    var BlockType_post_h2 = 8;
    var BlockType_quote = 9;
    var BlockType_ol_li = 10;
    var BlockType_ul_li = 11;
    var BlockType_p = 12;
    var BlockType_indent = 13;
    var BlockType_hr = 14;
    var BlockType_html = 15;
    var BlockType_unsafe_html = 16;
    var BlockType_span = 17;
    var BlockType_codeblock = 18;
    var BlockType_li = 19;
    var BlockType_ol = 20;
    var BlockType_ul = 21;
    var BlockType_HtmlTag = 22;
    var BlockType_Composite = 23;
    var BlockType_table_spec = 24;
    var BlockType_dd = 25;
    var BlockType_dt = 26;
    var BlockType_dl = 27;
    var BlockType_footnote = 28;
    var BlockType_p_footnote = 29;


    function Block() {
    }


    p = Block.prototype;
    p.buf = null;
    p.blockType = BlockType_Blank;
    p.contentStart = 0;
    p.contentLen = 0;
    p.lineStart = 0;
    p.lineLen = 0;
    p.children = null;
    p.data = null;

    p.get_Content = function () {
        if (this.buf == null)
            return null;
        if (this.contentStart == -1)
            return this.buf;

        return this.buf.substr(this.contentStart, this.contentLen);
    }


    p.get_CodeContent = function () {
        var s = new StringBuilder();
        for (var i = 0; i < this.children.length; i++) {
            s.Append(this.children[i].get_Content());
            s.Append('\n');
        }
        return s.ToString();
    }


    p.RenderChildren = function (m, b) {
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].Render(m, b);
        }
    }

    p.ResolveHeaderID = function (m) {
        // Already resolved?
        if (this.data != null)
            return this.data;

        // Approach 1 - PHP Markdown Extra style header id
        var res = StripHtmlID(this.buf, this.contentStart, this.get_contentEnd());
        var id = null;
        if (res != null) {
            this.set_contentEnd(res.end);
            id = res.id;
        }
        else {
            // Approach 2 - pandoc style header id
            id = m.MakeUniqueHeaderID(this.buf, this.contentStart, this.contentLen);
        }

        this.data = id;
        return id;
    }

    p.Render = function (m, b) {
        switch (this.blockType) {
            case BlockType_Blank:
                return;

            case BlockType_p:
                m.m_SpanFormatter.FormatParagraph(b, this.buf, this.contentStart, this.contentLen);
                break;

            case BlockType_span:
                m.m_SpanFormatter.Format(b, this.buf, this.contentStart, this.contentLen);
                b.Append("\n");
                break;

            case BlockType_h1:
            case BlockType_h2:
            case BlockType_h3:
            case BlockType_h4:
            case BlockType_h5:
            case BlockType_h6:
                if (m.ExtraMode && !m.SafeMode) {
                    b.Append("<h" + (this.blockType - BlockType_h1 + 1).toString());
                    var id = this.ResolveHeaderID(m);
                    if (id) {
                        b.Append(" id=\"");
                        b.Append(id);
                        b.Append("\">");
                    }
                    else {
                        b.Append(">");
                    }
                }
                else {
                    b.Append("<h" + (this.blockType - BlockType_h1 + 1).toString() + ">");
                }
                m.m_SpanFormatter.Format(b, this.buf, this.contentStart, this.contentLen);
                b.Append("</h" + (this.blockType - BlockType_h1 + 1).toString() + ">\n");
                break;

            case BlockType_hr:
                b.Append("<hr />\n");
                return;

            case BlockType_ol_li:
            case BlockType_ul_li:
                b.Append("<li>");
                m.m_SpanFormatter.Format(b, this.buf, this.contentStart, this.contentLen);
                b.Append("</li>\n");
                break;

            case BlockType_html:
                b.Append(this.buf.substr(this.contentStart, this.contentLen));
                return;

            case BlockType_unsafe_html:
                b.HtmlEncode(this.buf, this.contentStart, this.contentLen);
                return;

            case BlockType_codeblock:
                b.Append("<pre");
                if (m.FormatCodeBlockAttributes != null) {
                    b.Append(m.FormatCodeBlockAttributes(this.data));
                }
                b.Append("><code>");

                var btemp = b;
                if (m.FormatCodeBlock) {
                    btemp = b;
                    b = new StringBuilder();
                }

                for (var i = 0; i < this.children.length; i++) {
                    var line = this.children[i];
                    b.HtmlEncodeAndConvertTabsToSpaces(line.buf, line.contentStart, line.contentLen);
                    b.Append("\n");
                }

                if (m.FormatCodeBlock) {
                    btemp.Append(m.FormatCodeBlock(b.ToString(), this.data));
                    b = btemp;
                }
                b.Append("</code></pre>\n\n");
                return;

            case BlockType_quote:
                b.Append("<blockquote>\n");
                this.RenderChildren(m, b);
                b.Append("</blockquote>\n");
                return;

            case BlockType_li:
                b.Append("<li>\n");
                this.RenderChildren(m, b);
                b.Append("</li>\n");
                return;

            case BlockType_ol:
                b.Append("<ol>\n");
                this.RenderChildren(m, b);
                b.Append("</ol>\n");
                return;

            case BlockType_ul:
                b.Append("<ul>\n");
                this.RenderChildren(m, b);
                b.Append("</ul>\n");
                return;

            case BlockType_HtmlTag:
                var tag = this.data;

                // Prepare special tags
                var name = tag.name.toLowerCase();
                if (name == "a") {
                    m.OnPrepareLink(tag);
                }
                else if (name == "img") {
                    m.OnPrepareImage(tag, m.RenderingTitledImage);
                }

                tag.RenderOpening(b);
                b.Append("\n");
                this.RenderChildren(m, b);
                tag.RenderClosing(b);
                b.Append("\n");
                return;

            case BlockType_Composite:
            case BlockType_footnote:
                this.RenderChildren(m, b);
                return;

            case BlockType_table_spec:
                this.data.Render(m, b);
                return;

            case BlockType_dd:
                b.Append("<dd>");
                if (this.children != null) {
                    b.Append("\n");
                    this.RenderChildren(m, b);
                }
                else
                    m.m_SpanFormatter.Format(b, this.buf, this.contentStart, this.contentLen);
                b.Append("</dd>\n");
                break;

            case BlockType_dt:
                if (this.children == null) {
                    var lines = this.get_Content().split("\n");
                    for (var i = 0; i < lines.length; i++) {
                        var l = lines[i];
                        b.Append("<dt>");
                        m.m_SpanFormatter.Format2(b, Trim(l));
                        b.Append("</dt>\n");
                    }
                }
                else {
                    b.Append("<dt>\n");
                    this.RenderChildren(m, b);
                    b.Append("</dt>\n");
                }
                break;

            case BlockType_dl:
                b.Append("<dl>\n");
                this.RenderChildren(m, b);
                b.Append("</dl>\n");
                return;

            case BlockType_p_footnote:
                b.Append("<p>");
                if (this.contentLen > 0) {
                    m.m_SpanFormatter.Format(b, this.buf, this.contentStart, this.contentLen);
                    b.Append("&nbsp;");
                }
                b.Append(this.data);
                b.Append("</p>\n");
                break;

        }
    }

    p.RevertToPlain = function () {
        this.blockType = BlockType_p;
        this.contentStart = this.lineStart;
        this.contentLen = this.lineLen;
    }

    p.get_contentEnd = function () {
        return this.contentStart + this.contentLen;
    }

    p.set_contentEnd = function (value) {
        this.contentLen = value - this.contentStart;
    }

    // Count the leading spaces on a block
    // Used by list item evaluation to determine indent levels
    // irrespective of indent line type.
    p.get_leadingSpaces = function () {
        var count = 0;
        for (var i = this.lineStart; i < this.lineStart + this.lineLen; i++) {
            if (this.buf.charAt(i) == ' ') {
                count++;
            }
            else {
                break;
            }
        }
        return count;
    }

    p.CopyFrom = function (other) {
        this.blockType = other.blockType;
        this.buf = other.buf;
        this.contentStart = other.contentStart;
        this.contentLen = other.contentLen;
        this.lineStart = other.lineStart;
        this.lineLen = other.lineLen;
        return this;
    }

    /////////////////////////////////////////////////////////////////////////////
    // BlockProcessor


    function BlockProcessor(m, MarkdownInHtml) {
        this.m_Markdown = m;
        this.m_parentType = BlockType_Blank;
        this.m_bMarkdownInHtml = MarkdownInHtml;
    }

    p = BlockProcessor.prototype;

    p.Process = function (str) {
        // Reset string scanner
        var p = new StringScanner(str);

        return this.ScanLines(p);
    }

    p.ProcessRange = function (str, startOffset, len) {
        // Reset string scanner
        var p = new StringScanner(str, startOffset, len);

        return this.ScanLines(p);
    }

    p.StartTable = function (p, spec, lines) {
        // Mustn't have more than 1 preceeding line
        if (lines.length > 1)
            return false;

        // Rewind, parse the header row then fast forward back to current pos
        if (lines.length == 1) {
            var savepos = p.m_position;
            p.m_position = lines[0].lineStart;
            spec.m_Headers = spec.ParseRow(p);
            if (spec.m_Headers == null)
                return false;
            p.m_position = savepos;
            lines.length = 0;
        }

        // Parse all .m_Rows
        while (true) {
            var savepos = p.m_position;

            var row = spec.ParseRow(p);
            if (row != null) {
                spec.m_Rows.push(row);
                continue;
            }

            p.m_position = savepos;
            break;
        }

        return true;
    }



    p.ScanLines = function (p) {
        // The final set of blocks will be collected here
        var blocks = [];

        // The current paragraph/list/codeblock etc will be accumulated here
        // before being collapsed into a block and store in above `blocks` list
        var lines = [];

        // Add all blocks
        var PrevBlockType = -1;
        while (!p.eof()) {
            // Remember if the previous line was blank
            var bPreviousBlank = PrevBlockType == BlockType_Blank;

            // Get the next block
            var b = this.EvaluateLine(p);
            PrevBlockType = b.blockType;

            // For dd blocks, we need to know if it was preceeded by a blank line
            // so store that fact as the block's data.
            if (b.blockType == BlockType_dd) {
                b.data = bPreviousBlank;
            }


            // SetExt header?
            if (b.blockType == BlockType_post_h1 || b.blockType == BlockType_post_h2) {
                if (lines.length > 0) {
                    // Remove the previous line and collapse the current paragraph
                    var prevline = lines.pop();
                    this.CollapseLines(blocks, lines);

                    // If previous line was blank,
                    if (prevline.blockType != BlockType_Blank) {
                        // Convert the previous line to a heading and add to block list
                        prevline.RevertToPlain();
                        prevline.blockType = b.blockType == BlockType_post_h1 ? BlockType_h1 : BlockType_h2;
                        blocks.push(prevline);
                        continue;
                    }
                }


                // Couldn't apply setext header to a previous line

                if (b.blockType == BlockType_post_h1) {
                    // `===` gets converted to normal paragraph
                    b.RevertToPlain();
                    lines.push(b);
                }
                else {
                    // `---` gets converted to hr
                    if (b.contentLen >= 3) {
                        b.blockType = BlockType_hr;
                        blocks.push(b);
                    }
                    else {
                        b.RevertToPlain();
                        lines.push(b);
                    }
                }

                continue;
            }


            // Work out the current paragraph type
            var currentBlockType = lines.length > 0 ? lines[0].blockType : BlockType_Blank;

            // Starting a table?
            if (b.blockType == BlockType_table_spec) {
                // Get the table spec, save position
                var spec = b.data;
                var savepos = p.m_position;
                if (!this.StartTable(p, spec, lines)) {
                    // Not a table, revert the tablespec row to plain,
                    // fast forward back to where we were up to and continue
                    // on as if nothing happened
                    p.m_position = savepos;
                    b.RevertToPlain();
                }
                else {
                    blocks.push(b);
                    continue;
                }
            }

            // Process this line
            switch (b.blockType) {
                case BlockType_Blank:
                    switch (currentBlockType) {
                        case BlockType_Blank:
                            this.FreeBlock(b);
                            break;

                        case BlockType_p:
                            this.CollapseLines(blocks, lines);
                            this.FreeBlock(b);
                            break;

                        case BlockType_quote:
                        case BlockType_ol_li:
                        case BlockType_ul_li:
                        case BlockType_dd:
                        case BlockType_footnote:
                        case BlockType_indent:
                            lines.push(b);
                            break;
                    }
                    break;

                case BlockType_p:
                    switch (currentBlockType) {
                        case BlockType_Blank:
                        case BlockType_p:
                            lines.push(b);
                            break;

                        case BlockType_quote:
                        case BlockType_ol_li:
                        case BlockType_ul_li:
                        case BlockType_dd:
                        case BlockType_footnote:
                            var prevline = lines[lines.length - 1];
                            if (prevline.blockType == BlockType_Blank) {
                                this.CollapseLines(blocks, lines);
                                lines.push(b);
                            }
                            else {
                                lines.push(b);
                            }
                            break;

                        case BlockType_indent:
                            this.CollapseLines(blocks, lines);
                            lines.push(b);
                            break;
                    }
                    break;

                case BlockType_indent:
                    switch (currentBlockType) {
                        case BlockType_Blank:
                            // Start a code block
                            lines.push(b);
                            break;

                        case BlockType_p:
                        case BlockType_quote:
                            var prevline = lines[lines.length - 1];
                            if (prevline.blockType == BlockType_Blank) {
                                // Start a code block after a paragraph
                                this.CollapseLines(blocks, lines);
                                lines.push(b);
                            }
                            else {
                                // indented line in paragraph, just continue it
                                b.RevertToPlain();
                                lines.push(b);
                            }
                            break;


                        case BlockType_ol_li:
                        case BlockType_ul_li:
                        case BlockType_indent:
                        case BlockType_dd:
                        case BlockType_footnote:
                            lines.push(b);
                            break;
                    }
                    break;

                case BlockType_quote:
                    if (currentBlockType != BlockType_quote) {
                        this.CollapseLines(blocks, lines);
                    }
                    lines.push(b);
                    break;

                case BlockType_ol_li:
                case BlockType_ul_li:
                    switch (currentBlockType) {
                        case BlockType_Blank:
                            lines.push(b);
                            break;

                        case BlockType_p:
                        case BlockType_quote:
                            var prevline = lines[lines.length - 1];
                            if (prevline.blockType == BlockType_Blank || this.m_parentType == BlockType_ol_li || this.m_parentType == BlockType_ul_li || this.m_parentType == BlockType_dd) {
                                // List starting after blank line after paragraph or quote
                                this.CollapseLines(blocks, lines);
                                lines.push(b);
                            }
                            else {
                                // List's can't start in middle of a paragraph
                                b.RevertToPlain();
                                lines.push(b);
                            }
                            break;

                        case BlockType_ol_li:
                        case BlockType_ul_li:
                        case BlockType_dd:
                        case BlockType_footnote:
                            if (b.blockType != currentBlockType) {
                                this.CollapseLines(blocks, lines);
                            }
                            lines.push(b);
                            break;

                        case BlockType_indent:
                            // List after code block
                            this.CollapseLines(blocks, lines);
                            lines.push(b);
                            break;
                    }
                    break;

                case BlockType_dd:
                case BlockType_footnote:
                    switch (currentBlockType) {
                        case BlockType_Blank:
                        case BlockType_p:
                        case BlockType_dd:
                        case BlockType_footnote:
                            this.CollapseLines(blocks, lines);
                            lines.push(b);
                            break;

                        default:
                            b.RevertToPlain();
                            lines.push(b);
                            break;
                    }
                    break;

                default:
                    this.CollapseLines(blocks, lines);
                    blocks.push(b);
                    break;
            }
        }

        this.CollapseLines(blocks, lines);

        if (this.m_Markdown.ExtraMode) {
            this.BuildDefinitionLists(blocks);
        }

        return blocks;
    }

    p.CreateBlock = function (lineStart) {
        var b;
        if (this.m_Markdown.m_SpareBlocks.length > 1) {
            b = this.m_Markdown.m_SpareBlocks.pop();
        }
        else {
            b = new Block();
        }
        b.lineStart = lineStart;
        return b;
    }

    p.FreeBlock = function (b) {
        this.m_Markdown.m_SpareBlocks.push(b);
    }

    p.FreeBlocks = function (blocks) {
        for (var i = 0; i < blocks.length; i++)
            this.m_Markdown.m_SpareBlocks.push(blocks[i]);
        blocks.length = 0;
    }

    p.RenderLines = function (lines) {
        var b = this.m_Markdown.GetStringBuilder();
        for (var i = 0; i < lines.length; i++) {
            var l = lines[i];
            b.Append(l.buf.substr(l.contentStart, l.contentLen));
            b.Append('\n');
        }
        return b.ToString();
    }

    p.CollapseLines = function (blocks, lines) {
        // Remove trailing blank lines
        while (lines.length > 0 && lines[lines.length - 1].blockType == BlockType_Blank) {
            this.FreeBlock(lines.pop());
        }

        // Quit if empty
        if (lines.length == 0) {
            return;
        }


        // What sort of block?
        switch (lines[0].blockType) {
            case BlockType_p:
                // Collapse all lines into a single paragraph
                var para = this.CreateBlock(lines[0].lineStart);
                para.blockType = BlockType_p;
                para.buf = lines[0].buf;
                para.contentStart = lines[0].contentStart;
                para.set_contentEnd(lines[lines.length - 1].get_contentEnd());
                blocks.push(para);
                this.FreeBlocks(lines);
                break;

            case BlockType_quote:
                // Get the content
                var str = this.RenderLines(lines);

                // Create the new block processor
                var bp = new BlockProcessor(this.m_Markdown, this.m_bMarkdownInHtml);
                bp.m_parentType = BlockType_quote;

                // Create a new quote block
                var quote = this.CreateBlock(lines[0].lineStart);
                quote.blockType = BlockType_quote;
                quote.children = bp.Process(str);
                this.FreeBlocks(lines);
                blocks.push(quote);
                break;

            case BlockType_ol_li:
            case BlockType_ul_li:
                blocks.push(this.BuildList(lines));
                break;

            case BlockType_dd:
                if (blocks.length > 0) {
                    var prev = blocks[blocks.length - 1];
                    switch (prev.blockType) {
                        case BlockType_p:
                            prev.blockType = BlockType_dt;
                            break;

                        case BlockType_dd:
                            break;

                        default:
                            var wrapper = this.CreateBlock(prev.lineStart);
                            wrapper.blockType = BlockType_dt;
                            wrapper.children = [];
                            wrapper.children.push(prev);
                            blocks.pop();
                            blocks.push(wrapper);
                            break;
                    }

                }
                blocks.push(this.BuildDefinition(lines));
                break;

            case BlockType_footnote:
                this.m_Markdown.AddFootnote(this.BuildFootnote(lines));
                break;


            case BlockType_indent:
                var codeblock = this.CreateBlock(lines[0].lineStart);
                codeblock.blockType = BlockType_codeblock;
                codeblock.children = [];
                var firstline = lines[0].get_Content();
                if (firstline.substr(0, 2) == "{{" && firstline.substr(firstline.length - 2, 2) == "}}") {
                    codeblock.data = firstline.substr(2, firstline.length - 4);
                    lines.splice(0, 1);
                }
                for (var i = 0; i < lines.length; i++) {
                    codeblock.children.push(lines[i]);
                }
                blocks.push(codeblock);
                lines.length = 0;
                break;
        }
    }

    p.EvaluateLine = function (p) {
        // Create a block
        var b = this.CreateBlock(p.m_position);

        // Store line start
        b.buf = p.buf;

        // Scan the line
        b.contentStart = p.m_position;
        b.contentLen = -1;
        b.blockType = this.EvaluateLineInternal(p, b);


        // If end of line not returned, do it automatically
        if (b.contentLen < 0) {
            // Move to end of line
            p.SkipToEol();
            b.contentLen = p.m_position - b.contentStart;
        }

        // Setup line length
        b.lineLen = p.m_position - b.lineStart;

        // Next line
        p.SkipEol();

        // Create block
        return b;
    }

    p.EvaluateLineInternal = function (p, b) {
        // Empty line?
        if (p.eol())
            return BlockType_Blank;

        // Save start of line position
        var line_start = p.m_position;

        // ## Heading ##
        var ch = p.current();
        if (ch == '#') {
            // Work out heading level
            var level = 1;
            p.SkipForward(1);
            while (p.current() == '#') {
                level++;
                p.SkipForward(1);
            }

            // Limit of 6
            if (level > 6)
                level = 6;

            // Skip any whitespace
            p.SkipLinespace();

            // Save start position
            b.contentStart = p.m_position;

            // Jump to end
            p.SkipToEol();

            // In extra mode, check for a trailing HTML ID
            if (this.m_Markdown.ExtraMode && !this.m_Markdown.SafeMode) {
                var res = StripHtmlID(p.buf, b.contentStart, p.m_position);
                if (res != null) {
                    b.data = res.id;
                    p.m_position = res.end;
                }
            }

            // Rewind over trailing hashes
            while (p.m_position > b.contentStart && p.CharAtOffset(-1) == '#') {
                p.SkipForward(-1);
            }

            // Rewind over trailing spaces
            while (p.m_position > b.contentStart && is_whitespace(p.CharAtOffset(-1))) {
                p.SkipForward(-1);
            }

            // Create the heading block
            b.contentLen = p.m_position - b.contentStart;

            p.SkipToEol();
            return BlockType_h1 + (level - 1);
        }

        // Check for entire line as - or = for setext h1 and h2
        if (ch == '-' || ch == '=') {
            // Skip all matching characters
            var chType = ch;
            while (p.current() == chType) {
                p.SkipForward(1);
            }

            // Trailing whitespace allowed
            p.SkipLinespace();

            // If not at eol, must have found something other than setext header
            if (p.eol()) {
                return chType == '=' ? BlockType_post_h1 : BlockType_post_h2;
            }

            p.m_position = line_start;
        }

        if (this.m_Markdown.ExtraMode) {
            // MarkdownExtra Table row indicator?
            var spec = TableSpec_Parse(p);
            if (spec != null) {
                b.data = spec;
                return BlockType_table_spec;
            }

            p.m_position = line_start;


            // Fenced code blocks?
            if (ch == '~') {
                if (this.ProcessFencedCodeBlock(p, b))
                    return b.blockType;

                // Rewind
                p.m_position = line_start;
            }
        }

        // Scan the leading whitespace, remembering how many spaces and where the first tab is
        var tabPos = -1;
        var leadingSpaces = 0;
        while (!p.eol()) {
            if (p.current() == ' ') {
                if (tabPos < 0)
                    leadingSpaces++;
            }
            else if (p.current() == '\t') {
                if (tabPos < 0)
                    tabPos = p.m_position;
            }
            else {
                // Something else, get out
                break;
            }
            p.SkipForward(1);
        }

        // Blank line?
        if (p.eol()) {
            b.contentLen = 0;
            return BlockType_Blank;
        }

        // 4 leading spaces?
        if (leadingSpaces >= 4) {
            b.contentStart = line_start + 4;
            return BlockType_indent;
        }

        // Tab in the first 4 characters?
        if (tabPos >= 0 && tabPos - line_start < 4) {
            b.contentStart = tabPos + 1;
            return BlockType_indent;
        }

        // Treat start of line as after leading whitespace
        b.contentStart = p.m_position;

        // Get the next character
        ch = p.current();

        // Html block?
        if (ch == '<') {
            if (this.ScanHtml(p, b))
                return b.blockType;

            // Rewind
            p.m_position = b.contentStart;
        }

        // Block quotes start with '>' and have one space or one tab following
        if (ch == '>') {
            // Block quote followed by space
            if (is_linespace(p.CharAtOffset(1))) {
                // Skip it and create quote block
                p.SkipForward(2);
                b.contentStart = p.m_position;
                return BlockType_quote;
            }

            p.SkipForward(1);
            b.contentStart = p.m_position;
            return BlockType_quote;
        }

        // Horizontal rule - a line consisting of 3 or more '-', '_' or '*' with optional spaces and nothing else
        if (ch == '-' || ch == '_' || ch == '*') {
            var count = 0;
            while (!p.eol()) {
                var chType = p.current();
                if (p.current() == ch) {
                    count++;
                    p.SkipForward(1);
                    continue;
                }

                if (is_linespace(p.current())) {
                    p.SkipForward(1);
                    continue;
                }

                break;
            }

            if (p.eol() && count >= 3) {
                return BlockType_hr;
            }

            // Rewind
            p.m_position = b.contentStart;
        }

        // Abbreviation definition?
        if (this.m_Markdown.ExtraMode && ch == '*' && p.CharAtOffset(1) == '[') {
            p.SkipForward(2);
            p.SkipLinespace();

            p.Mark();
            while (!p.eol() && p.current() != ']') {
                p.SkipForward(1);
            }

            var abbr = Trim(p.Extract());
            if (p.current() == ']' && p.CharAtOffset(1) == ':' && abbr) {
                p.SkipForward(2);
                p.SkipLinespace();

                p.Mark();

                p.SkipToEol();

                var title = p.Extract();

                this.m_Markdown.AddAbbreviation(abbr, title);

                return BlockType_Blank;
            }

            p.m_position = b.contentStart;
        }


        // Unordered list
        if ((ch == '*' || ch == '+' || ch == '-') && is_linespace(p.CharAtOffset(1))) {
            // Skip it
            p.SkipForward(1);
            p.SkipLinespace();
            b.contentStart = p.m_position;
            return BlockType_ul_li;
        }

        // Definition
        if (ch == ':' && this.m_Markdown.ExtraMode && is_linespace(p.CharAtOffset(1))) {
            p.SkipForward(1);
            p.SkipLinespace();
            b.contentStart = p.m_position;
            return BlockType_dd;
        }

        // Ordered list
        if (is_digit(ch)) {
            // Ordered list?  A line starting with one or more digits, followed by a '.' and a space or tab

            // Skip all digits
            p.SkipForward(1);
            while (is_digit(p.current()))
                p.SkipForward(1);

            if (p.SkipChar('.') && p.SkipLinespace()) {
                b.contentStart = p.m_position;
                return BlockType_ol_li;
            }

            p.m_position = b.contentStart;
        }

        // Reference link definition?
        if (ch == '[') {
            // Footnote definition?
            if (this.m_Markdown.ExtraMode && p.CharAtOffset(1) == '^') {
                var savepos = p.m_position;

                p.SkipForward(2);

                var id = p.SkipFootnoteID();
                if (id != null && p.SkipChar(']') && p.SkipChar(':')) {
                    p.SkipLinespace();
                    b.contentStart = p.m_position;
                    b.data = id;
                    return BlockType_footnote;
                }

                p.m_position = savepos;
            }

            // Parse a link definition
            var l = ParseLinkDefinition(p, this.m_Markdown.ExtraMode);
            if (l != null) {
                this.m_Markdown.AddLinkDefinition(l);
                return BlockType_Blank;
            }
        }

        // Nothing special
        return BlockType_p;
    }

    var MarkdownInHtmlMode_NA = 0;
    var MarkdownInHtmlMode_Block = 1;
    var MarkdownInHtmlMode_Span = 2;
    var MarkdownInHtmlMode_Deep = 3;
    var MarkdownInHtmlMode_Off = 4;

    p.GetMarkdownMode = function (tag) {
        // Get the markdown attribute
        var md = tag.attributes["markdown"];
        if (md == undefined) {
            if (this.m_bMarkdownInHtml)
                return MarkdownInHtmlMode_Deep;
            else
                return MarkdownInHtmlMode_NA;
        }

        // Remove it
        delete tag.attributes["markdown"];

        // Parse mode
        if (md == "1")
            return (tag.get_Flags() & HtmlTagFlags_ContentAsSpan) != 0 ? MarkdownInHtmlMode_Span : MarkdownInHtmlMode_Block;

        if (md == "block")
            return MarkdownInHtmlMode_Block;

        if (md == "deep")
            return MarkdownInHtmlMode_Deep;

        if (md == "span")
            return MarkdownInHtmlMode_Span;

        return MarkdownInHtmlMode_Off;
    }

    p.ProcessMarkdownEnabledHtml = function (p, b, openingTag, mode) {
        // Current position is just after the opening tag

        // Scan until we find matching closing tag
        var inner_pos = p.m_position;
        var depth = 1;
        var bHasUnsafeContent = false;
        while (!p.eof()) {
            // Find next angle bracket
            if (!p.Find('<'))
                break;

            // Is it a html tag?
            var tagpos = p.m_position;
            var tag = ParseHtmlTag(p);
            if (tag == null) {
                // Nope, skip it
                p.SkipForward(1);
                continue;
            }

            // In markdown off mode, we need to check for unsafe tags
            if (this.m_Markdown.SafeMode && mode == MarkdownInHtmlMode_Off && !bHasUnsafeContent) {
                if (!tag.IsSafe())
                    bHasUnsafeContent = true;
            }

            // Ignore self closing tags
            if (tag.closed)
                continue;

            // Same tag?
            if (tag.name == openingTag.name) {
                if (tag.closing) {
                    depth--;
                    if (depth == 0) {
                        // End of tag?
                        p.SkipLinespace();
                        p.SkipEol();

                        b.blockType = BlockType_HtmlTag;
                        b.data = openingTag;
                        b.set_contentEnd(p.m_position);

                        switch (mode) {
                            case MarkdownInHtmlMode_Span:
                                var span = this.CreateBlock(inner_pos);
                                span.buf = p.buf;
                                span.blockType = BlockType_span;
                                span.contentStart = inner_pos;
                                span.contentLen = tagpos - inner_pos;

                                b.children = [];
                                b.children.push(span);
                                break;

                            case MarkdownInHtmlMode_Block:
                            case MarkdownInHtmlMode_Deep:
                                // Scan the internal content
                                var bp = new BlockProcessor(this.m_Markdown, mode == MarkdownInHtmlMode_Deep);
                                b.children = bp.ProcessRange(p.buf, inner_pos, tagpos - inner_pos);
                                break;

                            case MarkdownInHtmlMode_Off:
                                if (bHasUnsafeContent) {
                                    b.blockType = BlockType_unsafe_html;
                                    b.set_contentEnd(p.m_position);
                                }
                                else {
                                    var span = this.CreateBlock(inner_pos);
                                    span.buf = p.buf;
                                    span.blockType = BlockType_html;
                                    span.contentStart = inner_pos;
                                    span.contentLen = tagpos - inner_pos;

                                    b.children = [];
                                    b.children.push(span);
                                }
                                break;
                        }


                        return true;
                    }
                }
                else {
                    depth++;
                }
            }
        }

        // Missing closing tag(s).
        return false;
    }

    p.ScanHtml = function (p, b) {
        // Remember start of html
        var posStartPiece = p.m_position;

        // Parse a HTML tag
        var openingTag = ParseHtmlTag(p);
        if (openingTag == null)
            return false;

        // Closing tag?
        if (openingTag.closing)
            return false;

        // Safe mode?
        var bHasUnsafeContent = false;
        if (this.m_Markdown.SafeMode && !openingTag.IsSafe())
            bHasUnsafeContent = true;

        var flags = openingTag.get_Flags();

        // Is it a block level tag?
        if ((flags & HtmlTagFlags_Block) == 0)
            return false;

        // Closed tag, hr or comment?
        if ((flags & HtmlTagFlags_NoClosing) != 0 || openingTag.closed) {
            p.SkipLinespace();
            p.SkipEol();
            b.contentLen = p.m_position - b.contentStart;
            b.blockType = bHasUnsafeContent ? BlockType_unsafe_html : BlockType_html;
            return true;
        }

        // Can it also be an inline tag?
        if ((flags & HtmlTagFlags_Inline) != 0) {
            // Yes, opening tag must be on a line by itself
            p.SkipLinespace();
            if (!p.eol())
                return false;
        }

        // Head block extraction?
        var bHeadBlock = this.m_Markdown.ExtractHeadBlocks && openingTag.name.toLowerCase() == "head";
        var headStart = p.m_position;

        // Work out the markdown mode for this element
        if (!bHeadBlock && this.m_Markdown.ExtraMode) {
            var MarkdownMode = this.GetMarkdownMode(openingTag);
            if (MarkdownMode != MarkdownInHtmlMode_NA) {
                return this.ProcessMarkdownEnabledHtml(p, b, openingTag, MarkdownMode);
            }
        }

        var childBlocks = null;

        // Now capture everything up to the closing tag and put it all in a single HTML block
        var depth = 1;

        while (!p.eof()) {
            if (!p.Find('<'))
                break;

            // Save position of current tag
            var posStartCurrentTag = p.m_position;

            var tag = ParseHtmlTag(p);
            if (tag == null) {
                p.SkipForward(1);
                continue;
            }

            // Safe mode checks
            if (this.m_Markdown.SafeMode && !tag.IsSafe())
                bHasUnsafeContent = true;


            // Ignore self closing tags
            if (tag.closed)
                continue;

            // Markdown enabled content?
            if (!bHeadBlock && !tag.closing && this.m_Markdown.ExtraMode && !bHasUnsafeContent) {
                var MarkdownMode = this.GetMarkdownMode(tag);
                if (MarkdownMode != MarkdownInHtmlMode_NA) {
                    var markdownBlock = this.CreateBlock(posStartPiece);
                    if (this.ProcessMarkdownEnabledHtml(p, markdownBlock, tag, MarkdownMode)) {
                        if (childBlocks == null) {
                            childBlocks = [];
                        }

                        // Create a block for everything before the markdown tag
                        if (posStartCurrentTag > posStartPiece) {
                            var htmlBlock = this.CreateBlock(posStartPiece);
                            htmlBlock.buf = p.buf;
                            htmlBlock.blockType = BlockType_html;
                            htmlBlock.contentStart = posStartPiece;
                            htmlBlock.contentLen = posStartCurrentTag - posStartPiece;

                            childBlocks.push(htmlBlock);
                        }

                        // Add the markdown enabled child block
                        childBlocks.push(markdownBlock);

                        // Remember start of the next piece
                        posStartPiece = p.m_position;

                        continue;
                    }
                    else {
                        this.FreeBlock(markdownBlock);
                    }
                }
            }

            // Same tag?
            if (tag.name == openingTag.name && !tag.closed) {
                if (tag.closing) {
                    depth--;
                    if (depth == 0) {
                        // End of tag?
                        p.SkipLinespace();
                        p.SkipEol();

                        // If anything unsafe detected, just encode the whole block
                        if (bHasUnsafeContent) {
                            b.blockType = BlockType_unsafe_html;
                            b.set_contentEnd(p.m_position);
                            return true;
                        }

                        // Did we create any child blocks
                        if (childBlocks != null) {
                            // Create a block for the remainder
                            if (p.m_position > posStartPiece) {
                                var htmlBlock = this.CreateBlock(posStartPiece);
                                htmlBlock.buf = p.buf;
                                htmlBlock.blockType = BlockType_html;
                                htmlBlock.contentStart = posStartPiece;
                                htmlBlock.contentLen = p.m_position - posStartPiece;

                                childBlocks.push(htmlBlock);
                            }

                            // Return a composite block
                            b.blockType = BlockType_Composite;
                            b.set_contentEnd(p.m_position);
                            b.children = childBlocks;
                            return true;
                        }

                        // Extract the head block content
                        if (bHeadBlock) {
                            var content = p.buf.substr(headStart, posStartCurrentTag - headStart);
                            this.m_Markdown.HeadBlockContent = this.m_Markdown.HeadBlockContent + Trim(content) + "\n";
                            b.blockType = BlockType_html;
                            b.contentStart = p.position;
                            b.contentEnd = p.position;
                            b.lineStart = p.position;
                            return true;
                        }

                        // Straight html block
                        b.blockType = BlockType_html;
                        b.contentLen = p.m_position - b.contentStart;
                        return true;
                    }
                }
                else {
                    depth++;
                }
            }
        }

        // Missing closing tag(s).
        return BlockType_Blank;
    }

    /*
     * BuildList - build a single <ol> or <ul> list
     */
    p.BuildList = function (lines) {
        // What sort of list are we dealing with
        var listType = lines[0].blockType;

        // Preprocess
        // 1. Collapse all plain lines (ie: handle hardwrapped lines)
        // 2. Promote any unindented lines that have more leading space
        //    than the original list item to indented, including leading
        //    special chars
        var leadingSpace = lines[0].get_leadingSpaces();
        for (var i = 1; i < lines.length; i++) {
            // Join plain paragraphs
            if ((lines[i].blockType == BlockType_p) &&
                (lines[i - 1].blockType == BlockType_p || lines[i - 1].blockType == listType)) {
                lines[i - 1].set_contentEnd(lines[i].get_contentEnd());
                this.FreeBlock(lines[i]);
                lines.splice(i, 1);
                i--;
                continue;
            }

            if (lines[i].blockType != BlockType_indent && lines[i].blockType != BlockType_Blank) {
                var thisLeadingSpace = lines[i].get_leadingSpaces();
                if (thisLeadingSpace > leadingSpace) {
                    // Change line to indented, including original leading chars
                    // (eg: '* ', '>', '1.' etc...)
                    lines[i].blockType = BlockType_indent;
                    var saveend = lines[i].get_contentEnd();
                    lines[i].contentStart = lines[i].lineStart + thisLeadingSpace;
                    lines[i].set_contentEnd(saveend);
                }
            }
        }


        // Create the wrapping list item
        var List = this.CreateBlock(0);
        List.blockType = (listType == BlockType_ul_li ? BlockType_ul : BlockType_ol);
        List.children = [];

        // Process all lines in the range
        for (var i = 0; i < lines.length; i++) {
            // Find start of item, including leading blanks
            var start_of_li = i;
            while (start_of_li > 0 && lines[start_of_li - 1].blockType == BlockType_Blank)
                start_of_li--;

            // Find end of the item, including trailing blanks
            var end_of_li = i;
            while (end_of_li < lines.length - 1 && lines[end_of_li + 1].blockType != listType)
                end_of_li++;

            // Is this a simple or complex list item?
            if (start_of_li == end_of_li) {
                // It's a simple, single line item item
                List.children.push(this.CreateBlock().CopyFrom(lines[i]));
            }
            else {
                // Build a new string containing all child items
                var bAnyBlanks = false;
                var sb = this.m_Markdown.GetStringBuilder();
                for (var j = start_of_li; j <= end_of_li; j++) {
                    var l = lines[j];
                    sb.Append(l.buf.substr(l.contentStart, l.contentLen));
                    sb.Append('\n');

                    if (lines[j].blockType == BlockType_Blank) {
                        bAnyBlanks = true;
                    }
                }

                // Create the item and process child blocks
                var item = this.CreateBlock();
                item.blockType = BlockType_li;
                item.lineStart = lines[start_of_li].lineStart;
                var bp = new BlockProcessor(this.m_Markdown);
                bp.m_parentType = listType;
                item.children = bp.Process(sb.ToString());

                // If no blank lines, change all contained paragraphs to plain text
                if (!bAnyBlanks) {
                    for (var j = 0; j < item.children.length; j++) {
                        var child = item.children[j];
                        if (child.blockType == BlockType_p) {
                            child.blockType = BlockType_span;
                        }
                    }
                }

                // Add the complex item
                List.children.push(item);
            }

            // Continue processing from end of li
            i = end_of_li;
        }

        List.lineStart = List.children[0].lineStart;

        this.FreeBlocks(lines);
        lines.length = 0;

        // Continue processing after this item
        return List;
    }

    /*
     * BuildDefinition - build a single <dd> item
     */
    p.BuildDefinition = function (lines) {
        // Collapse all plain lines (ie: handle hardwrapped lines)
        for (var i = 1; i < lines.length; i++) {
            // Join plain paragraphs
            if ((lines[i].blockType == BlockType_p) &&
                (lines[i - 1].blockType == BlockType_p || lines[i - 1].blockType == BlockType_dd)) {
                lines[i - 1].set_contentEnd(lines[i].get_contentEnd());
                this.FreeBlock(lines[i]);
                lines.splice(i, 1);
                i--;
                continue;
            }
        }

        // Single line definition
        var bPreceededByBlank = lines[0].data;
        if (lines.length == 1 && !bPreceededByBlank) {
            var ret = lines[0];
            lines.length = 0;
            return ret;
        }

        // Build a new string containing all child items
        var sb = this.m_Markdown.GetStringBuilder();
        for (var i = 0; i < lines.length; i++) {
            var l = lines[i];
            sb.Append(l.buf.substr(l.contentStart, l.contentLen));
            sb.Append('\n');
        }

        // Create the item and process child blocks
        var item = this.CreateBlock(lines[0].lineStart);
        item.blockType = BlockType_dd;
        var bp = new BlockProcessor(this.m_Markdown);
        bp.m_parentType = BlockType_dd;
        item.children = bp.Process(sb.ToString());

        this.FreeBlocks(lines);
        lines.length = 0;

        // Continue processing after this item
        return item;
    }

    p.BuildDefinitionLists = function (blocks) {
        var currentList = null;
        for (var i = 0; i < blocks.length; i++) {
            switch (blocks[i].blockType) {
                case BlockType_dt:
                case BlockType_dd:
                    if (currentList == null) {
                        currentList = this.CreateBlock(blocks[i].lineStart);
                        currentList.blockType = BlockType_dl;
                        currentList.children = [];
                        blocks.splice(i, 0, currentList);
                        i++;
                    }

                    currentList.children.push(blocks[i]);
                    blocks.splice(i, 1);
                    i--;
                    break;

                default:
                    currentList = null;
                    break;
            }
        }
    }


    p.BuildFootnote = function (lines) {
        // Collapse all plain lines (ie: handle hardwrapped lines)
        for (var i = 1; i < lines.length; i++) {
            // Join plain paragraphs
            if ((lines[i].blockType == BlockType_p) &&
                (lines[i - 1].blockType == BlockType_p || lines[i - 1].blockType == BlockType_footnote)) {
                lines[i - 1].set_contentEnd(lines[i].get_contentEnd());
                this.FreeBlock(lines[i]);
                lines.splice(i, 1);
                i--;
                continue;
            }
        }

        // Build a new string containing all child items
        var sb = this.m_Markdown.GetStringBuilder();
        for (var i = 0; i < lines.length; i++) {
            var l = lines[i];
            sb.Append(l.buf.substr(l.contentStart, l.contentLen));
            sb.Append('\n');
        }

        var bp = new BlockProcessor(this.m_Markdown);
        bp.m_parentType = BlockType_footnote;

        // Create the item and process child blocks
        var item = this.CreateBlock(lines[0].lineStart);
        item.blockType = BlockType_footnote;
        item.data = lines[0].data;
        item.children = bp.Process(sb.ToString());

        this.FreeBlocks(lines);
        lines.length = 0;

        // Continue processing after this item
        return item;
    }


    p.ProcessFencedCodeBlock = function (p, b) {
        var fenceStart = p.m_position;

        // Extract the fence
        p.Mark();
        while (p.current() == '~')
            p.SkipForward(1);
        var strFence = p.Extract();

        // Must be at least 3 long
        if (strFence.length < 3)
            return false;

        // Rest of line must be blank
        p.SkipLinespace();
        if (!p.eol())
            return false;

        // Skip the eol and remember start of code
        p.SkipEol();
        var startCode = p.m_position;

        // Find the end fence
        if (!p.Find(strFence))
            return false;

        // Character before must be a eol char
        if (!is_lineend(p.CharAtOffset(-1)))
            return false;

        var endCode = p.m_position;

        // Skip the fence
        p.SkipForward(strFence.length);

        // Whitespace allowed at end
        p.SkipLinespace();
        if (!p.eol())
            return false;

        // Create the code block
        b.blockType = BlockType_codeblock;
        b.children = [];

        // Remove the trailing line end
        // (Javascript version has already normalized line ends to \n)
        endCode--;

        // Create the child block with the entire content
        var child = this.CreateBlock(fenceStart);
        child.blockType = BlockType_indent;
        child.buf = p.buf;
        child.contentStart = startCode;
        child.contentLen = endCode - startCode;
        b.children.push(child);

        // Done
        return true;
    }


    var ColumnAlignment_NA = 0;
    var ColumnAlignment_Left = 1;
    var ColumnAlignment_Right = 2;
    var ColumnAlignment_Center = 3;

    function TableSpec() {
        this.m_Columns = [];
        this.m_Headers = null;
        this.m_Rows = [];
    }

    p = TableSpec.prototype;

    p.LeadingBar = false;
    p.TrailingBar = false;

    p.ParseRow = function (p) {
        p.SkipLinespace();

        if (p.eol())
            return null; 	// Blank line ends the table

        var bAnyBars = this.LeadingBar;
        if (this.LeadingBar && !p.SkipChar('|')) {
            bAnyBars = true;
            return null;
        }

        // Create the row
        var row = [];

        // Parse all columns except the last

        while (!p.eol()) {
            // Find the next vertical bar
            p.Mark();
            while (!p.eol() && p.current() != '|')
                p.SkipForward(1);

            row.push(Trim(p.Extract()));

            bAnyBars |= p.SkipChar('|');
        }

        // Require at least one bar to continue the table
        if (!bAnyBars)
            return null;

        // Add missing columns
        while (row.length < this.m_Columns.length) {
            row.push("&nbsp;");
        }

        p.SkipEol();
        return row;
    }

    p.RenderRow = function (m, b, row, type) {
        for (var i = 0; i < row.length; i++) {
            b.Append("\t<");
            b.Append(type);

            if (i < this.m_Columns.length) {
                switch (this.m_Columns[i]) {
                    case ColumnAlignment_Left:
                        b.Append(" align=\"left\"");
                        break;
                    case ColumnAlignment_Right:
                        b.Append(" align=\"right\"");
                        break;
                    case ColumnAlignment_Center:
                        b.Append(" align=\"center\"");
                        break;
                }
            }

            b.Append(">");
            m.m_SpanFormatter.Format2(b, row[i]);
            b.Append("</");
            b.Append(type);
            b.Append(">\n");
        }
    }

    p.Render = function (m, b) {
        b.Append("<table>\n");
        if (this.m_Headers != null) {
            b.Append("<thead>\n<tr>\n");
            this.RenderRow(m, b, this.m_Headers, "th");
            b.Append("</tr>\n</thead>\n");
        }

        b.Append("<tbody>\n");
        for (var i = 0; i < this.m_Rows.length; i++) {
            var row = this.m_Rows[i];
            b.Append("<tr>\n");
            this.RenderRow(m, b, row, "td");
            b.Append("</tr>\n");
        }
        b.Append("</tbody>\n");

        b.Append("</table>\n");
    }

    function TableSpec_Parse(p) {
        // Leading line space allowed
        p.SkipLinespace();

        // Quick check for typical case
        if (p.current() != '|' && p.current() != ':' && p.current() != '-')
            return null;

        // Don't create the spec until it at least looks like one
        var spec = null;

        // Leading bar, looks like a table spec
        if (p.SkipChar('|')) {
            spec = new TableSpec();
            spec.LeadingBar = true;
        }


        // Process all columns
        while (true) {
            // Parse column spec
            p.SkipLinespace();

            // Must have something in the spec
            if (p.current() == '|')
                return null;

            var AlignLeft = p.SkipChar(':');
            while (p.current() == '-')
                p.SkipForward(1);
            var AlignRight = p.SkipChar(':');
            p.SkipLinespace();

            // Work out column alignment
            var col = ColumnAlignment_NA;
            if (AlignLeft && AlignRight)
                col = ColumnAlignment_Center;
            else if (AlignLeft)
                col = ColumnAlignment_Left;
            else if (AlignRight)
                col = ColumnAlignment_Right;

            if (p.eol()) {
                // Not a spec?
                if (spec == null)
                    return null;

                // Add the final spec?
                spec.m_Columns.push(col);
                return spec;
            }

            // We expect a vertical bar
            if (!p.SkipChar('|'))
                return null;

            // Create the table spec
            if (spec == null)
                spec = new TableSpec();

            // Add the column
            spec.m_Columns.push(col);

            // Check for trailing vertical bar
            p.SkipLinespace();
            if (p.eol()) {
                spec.TrailingBar = true;
                return spec;
            }

            // Next column
        }
    }

    // Exposed stuff
    this.Markdown = Markdown;
    this.HtmlTag = HtmlTag;
} ();


//
//! MarkdownDeep - http://www.toptensoftware.com/markdowndeep
//! Copyright (C) 2010-2011 Topten Software
//
//   Licensed under the Apache License, Version 2.0 (the "License"); you may not use this product except in
//   compliance with the License. You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software distributed under the License is
//   distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and limitations under the License.
//

/*
 Usage:

 // 1. Create the editor an bind to a text area, output div and an optional source view div
 - text area: the text area that user types to.
 - output div: a div where the transformed html will be displayed
 - source view view: an optional div where a "source" view of the rendered html will be placed

 var editor=new MarkdownDeepEditor.Editor(textarea_element, output_div, source_div)

 // 2. Optionally set options

 editor.disableShortCutKeys=true;    // Disable Ctrl+B, Ctrl+I etc...
 editor.disableAutoIndent=true;      // Disable auto indent on enter key
 editor.disableTabHandling=true;     // Disable tab/shift+tab for indent

 // 3. Optionally install hooks

 editor.onPreTransform=function(editor, markdown) {}
 editor.onPostTransform=function(editor, html) {}
 editor.onPostUpdateDom=function(editor) {}

 // 4. Optionally create a toolbar/UI that calls editor.InvokeCommand(cmd) where cmd is one of:

 - "undo",
 - "redo",
 - "bold",
 - "italic",
 - "heading",
 - "code",
 - "ullist",
 - "ollist",
 - "indent",
 - "outdent",
 - "link",
 - "img",
 - "hr",
 - "h0",
 - "h1",
 - "h2",
 - "h3",
 - "h4",
 - "h5",
 - "h6"

 eg: editor.InvokeCommand("heading") to toggle heading style of selection

 */

var MarkdownDeepEditor=new function(){

    // private:priv.
    // private:.m_*
    // private:.m_listType
    // private:.m_prefixLen


    var ie=false;

    // Various keycodes
    var keycode_tab = 9;
    var keycode_enter = 13;
    var keycode_pgup = 33;
    var keycode_pgdn = 34;
    var keycode_home = 36;
    var keycode_end = 35;
    var keycode_left = 37;
    var keycode_right = 39;
    var keycode_up = 38;
    var keycode_down = 40;
    var keycode_backspace = 8;
    var keycode_delete = 46;

    // Undo modes for the undo stack
    var undomode_unknown = 0;
    var undomode_text = 1;
    var undomode_erase = 2;
    var undomode_navigate = 3;
    var undomode_whitespace = 4;

    // Shortcut keys Ctrl+key
    var shortcut_keys={
        "Z": "undo",
        "Y": "redo",
        "B": "bold",
        "I": "italic",
        "H": "heading",
        "K": "code",
        "U": "ullist",
        "O": "ollist",
        "Q": "indent",
        "E": "outdent",
        "L": "link",
        "G": "img",
        "R": "hr",
        "0": "h0",
        "1": "h1",
        "2": "h2",
        "3": "h3",
        "4": "h4",
        "5": "h5",
        "6": "h6"
    }

    function starts_with(str, match)
    {
        return str.substr(0, match.length)==match;
    }

    function ends_with(str, match)
    {
        return str.substr(-match.length)==match;
    }

    function is_whitespace(ch)
    {
        return (ch==' ' || ch=='\t' || ch=='\r' || ch=='\n');
    }

    function is_crlf(ch)
    {
        return (ch=='\r' || ch=='\n');
    }

    function trim(str)
    {
        var i=0;
        var l=str.length;

        while (i<l && is_whitespace(str.charAt(i)))
            i++;
        while (l-1>i && is_whitespace(str.charAt(l-1)))
            l--;

        return str.substr(i, l-i);
    }


    // Helper for binding events
    function BindEvent(obj, event, handler)
    {
        if (obj.addEventListener)
        {
            obj.addEventListener(event, handler, false);
        }
        else if (obj.attachEvent)
        {
            obj.attachEvent("on"+event, handler);
        }
    }

    // Helper for unbinding events
    function UnbindEvent(obj, event, handler)
    {
        if (obj.removeEventListener)
        {
            obj.removeEventListener(event, handler, false);
        }
        else if (obj.detachEvent)
        {
            obj.detachEvent("on"+event, handler);
        }
    }

    function PreventEventDefault(event)
    {
        if (event.preventDefault)
        {
            event.preventDefault();
        }
        if (event.cancelBubble!==undefined)
        {
            event.cancelBubble=true;
            event.keyCode=0;
            event.returnValue=false;
        }
        return false;
    }

    function offsetToRangeCharacterMove(el, offset)
    {
        return offset - (el.value.slice(0, offset).split("\r\n").length - 1);
    }

    // EditorState represents the initial and final state of an edit
    function EditorState()
    {
    }

    priv=EditorState.prototype;

    priv.InitFromTextArea=function(textarea)
    {
        this.m_textarea=textarea;
        if (ie)
        {
            var sel=document.selection.createRange();
            var temp=sel.duplicate();
            temp.moveToElementText(textarea);
            var basepos=-temp.moveStart('character', -10000000);

            this.m_selectionStart = -sel.moveStart('character', -10000000)-basepos;
            this.m_selectionEnd = -sel.moveEnd('character', -10000000)-basepos;
            this.m_text=textarea.value.replace(/\r\n/gm,"\n");
        }
        else
        {
            this.m_selectionStart = textarea.selectionStart;
            this.m_selectionEnd = textarea.selectionEnd;
            this.m_text=textarea.value;
        }
    }

    priv.Duplicate=function()
    {
        var other=new EditorState();
        other.m_textarea=this.m_textarea;
        other.m_selectionEnd=this.m_selectionEnd;
        other.m_selectionStart=this.m_selectionStart;
        other.m_text=this.m_text;
        return other;
    }

    priv.Apply=function()
    {
        if (ie)
        {
            this.m_textarea.value=this.m_text;
            this.m_textarea.focus();
            var r=this.m_textarea.createTextRange();
            r.collapse(true);
            r.moveEnd("character", this.m_selectionEnd);
            r.moveStart("character", this.m_selectionStart);
            r.select();
        }
        else
        {
            // Set the new text
            var scrollTop=this.m_textarea.scrollTop;
            this.m_textarea.value=this.m_text;
            this.m_textarea.focus();
            this.m_textarea.setSelectionRange(this.m_selectionStart, this.m_selectionEnd);
            this.m_textarea.scrollTop=scrollTop;
        }
    }

    priv.ReplaceSelection=function(str)
    {
        this.m_text=this.m_text.substr(0, this.m_selectionStart) + str + this.m_text.substr(this.m_selectionEnd);
        this.m_selectionEnd=this.m_selectionStart + str.length;
    }

    function adjust_pos(pos2, editpos, del, ins)
    {
        if (pos2<editpos)
            return pos2;
        return pos2<editpos+del ? editpos : pos2 + ins - del;
    }

    priv.ReplaceAt=function(pos, len, str)
    {
        this.m_text=this.m_text.substr(0, pos) + str + this.m_text.substr(pos+len);
        this.m_selectionStart=adjust_pos(this.m_selectionStart, pos, len, str.length);
        this.m_selectionEnd=adjust_pos(this.m_selectionEnd, pos, len, str.length);
    }

    priv.getSelectedText=function()
    {
        return this.m_text.substr(this.m_selectionStart, this.m_selectionEnd-this.m_selectionStart);
    }

    priv.InflateSelection=function(ds, de)
    {
        this.m_selectionEnd+=de;
        this.m_selectionStart-=ds;
    }

    priv.PreceededBy=function(str)
    {
        return this.m_selectionStart >= str.length && this.m_text.substr(this.m_selectionStart-str.length, str.length)==str;
    }

    priv.FollowedBy=function(str)
    {
        return this.m_text.substr(this.m_selectionEnd, str.length)==str;
    }

    priv.TrimSelection=function()
    {
        while (is_whitespace(this.m_text.charAt(this.m_selectionStart)))
            this.m_selectionStart++;
        while (this.m_selectionEnd>this.m_selectionStart && is_whitespace(this.m_text.charAt(this.m_selectionEnd-1)))
            this.m_selectionEnd--;
    }

    priv.IsStartOfLine=function(pos)
    {
        return pos==0 || is_crlf(this.m_text.charAt(pos-1));
    }

    priv.FindStartOfLine=function(pos)
    {
        // Move start of selection back to line start
        while (pos>0 && !is_crlf(this.m_text.charAt(pos-1)))
        {
            pos--;
        }
        return pos;
    }

    priv.FindEndOfLine=function(pos)
    {
        while (pos<this.m_text.length && !is_crlf(this.m_text.charAt(pos)))
        {
            pos++;
        }
        return pos;
    }

    priv.FindNextLine=function(pos)
    {
        return this.SkipEol(this.FindEndOfLine(pos));
    }

    priv.SkipWhiteSpace=function(pos)
    {
        while (pos<this.m_text.length && is_whitespace(this.m_text.charAt(pos)))
            pos++;
        return pos;
    }

    priv.SkipEol=function(pos)
    {
        if (this.m_text.substr(pos, 2)=="\r\n")
            return pos+2;
        if (is_crlf(this.m_text.charAt(pos)))
            return pos+1;
        return pos;
    }

    priv.SkipPreceedingEol=function(pos)
    {
        if (pos>2 && this.m_text.substr(pos-2, 2)=="\r\n")
            return pos-2;
        if (pos>1 && is_crlf(this.m_text.charAt(pos-1)))
            return pos-1;
        return pos;
    }

    priv.SelectWholeLines=function()
    {
        // Move selection to start of line
        this.m_selectionStart=this.FindStartOfLine(this.m_selectionStart);

        // Move end of selection to start of the next line
        if (!this.IsStartOfLine(this.m_selectionEnd))
        {
            this.m_selectionEnd=this.SkipEol(this.FindEndOfLine(this.m_selectionEnd));
        }
    }

    priv.SkipPreceedingWhiteSpace=function(pos)
    {
        while (pos>0 && is_whitespace(this.m_text.charAt(pos-1)))
        {
            pos--;
        }
        return pos;
    }

    priv.SkipFollowingWhiteSpace=function(pos)
    {
        while (is_whitespace(this.m_text.charAt(pos)))
        {
            pos++;
        }
        return pos;
    }
    priv.SelectSurroundingWhiteSpace=function()
    {
        this.m_selectionStart=this.SkipPreceedingWhiteSpace(this.m_selectionStart);
        this.m_selectionEnd=this.SkipFollowingWhiteSpace(this.m_selectionEnd);
    }

    priv.CheckSimpleSelection=function()
    {
        var text=this.getSelectedText();
        var m=text.match(/\n[ \t\r]*\n/);

        if (m)
        {
            alert("Please make a selection that doesn't include a paragraph break");
            return false;
        }

        return true;
    }

    // Check if line is completely blank
    priv.IsBlankLine=function(p)
    {
        var len=this.m_text.length;
        for (var i=p; i<len; i++)
        {
            var ch=this.m_text[i];
            if (is_crlf(ch))
                return true;
            if (!is_whitespace(this.m_text.charAt(i)))
                return false;
        }

        return true;
    }

    priv.FindStartOfParagraph=function(pos)
    {
        var savepos=pos;

        // Move to start of first line
        pos=this.FindStartOfLine(pos);

        if (this.IsBlankLine(pos))
            return pos;

        // Move to first line after blank line
        while (pos>0)
        {
            var p=this.FindStartOfLine(this.SkipPreceedingEol(pos));
            if (p==0)
                break;
            if (this.IsBlankLine(p))
                break;
            pos=p;
        }

        // Is it a list?
        if (this.DetectListType(pos).m_prefixLen!=0)
        {
            // Do it again, but stop at line with list prefix
            pos=this.FindStartOfLine(savepos);

            // Move to first line after blank line
            while (pos>0)
            {
                if (this.DetectListType(pos).m_prefixLen!=0)
                    return pos;

                // go to line before
                pos=this.FindStartOfLine(this.SkipPreceedingEol(pos));
            }
        }

        return pos;
    }

    priv.FindEndOfParagraph=function(pos)
    {
        // Skip all lines that aren't blank
        while (pos<this.m_text.length)
        {
            if (this.IsBlankLine(pos))
                break;

            pos=this.FindNextLine(pos);
        }

        return pos;
    }

    // Select the paragraph
    priv.SelectParagraph=function()
    {
        this.m_selectionStart=this.FindStartOfParagraph(this.m_selectionStart);
        this.m_selectionEnd=this.FindEndOfParagraph(this.m_selectionStart);
    }

    // Starting at position pos, return the list type
    // returns { m_listType, m_prefixLen }
    priv.DetectListType=function(pos)
    {
        var prefix=this.m_text.substr(pos, 10);
        var m=prefix.match(/^\s{0,3}(\*|\d+\.)(?:\ |\t)*/);
        if (!m)
            return {m_listType:"", m_prefixLen:0};

        if (m[1]=='*')
            return {m_listType:"*", m_prefixLen:m[0].length};
        else
            return {m_listType:"1", m_prefixLen:m[0].length};
    }




    // Editor
    function Editor(textarea, div_html)
    {
        // Is it IE?
        if (!textarea.setSelectionRange)
        {
            ie=true;
        }

        // Initialize
        this.m_lastContent=null;
        this.m_undoStack=[];
        this.m_undoPos=0;
        this.m_undoMode=undomode_navigate;
        this.Markdown=new MarkdownDeep.Markdown();
        this.Markdown.SafeMode=false;
        this.Markdown.ExtraMode=true;
        this.Markdown.NewWindowForLocalLinks=true;
        this.Markdown.NewWindowForExternalLinks=true;

        // Store DOM elements
        this.m_textarea=textarea;
        this.m_divHtml=div_html;

        // Bind events
        var ed=this;
        BindEvent(textarea, "keyup", function(){ed.onMarkdownChanged();});
        BindEvent(textarea, "keydown", function(e){return ed.onKeyDown(e);});
        BindEvent(textarea, "paste", function(){ed.onMarkdownChanged();});
        BindEvent(textarea, "input", function(){ed.onMarkdownChanged();});
        BindEvent(textarea, "mousedown", function(){ed.SetUndoMode(undomode_navigate);});

        // Do initial update
        this.onMarkdownChanged();
    }

    var priv=Editor.prototype;
    var pub=Editor.prototype;


    priv.onKeyDown=function(e)
    {
        var newMode=null;
        var retv=true;

        // Normal keys only
        if(e.ctrlKey || e.metaKey)
        {
            var key=String.fromCharCode(e.charCode||e.keyCode);

            // Built in short cut key?
            if (!this.disableShortCutKeys && shortcut_keys[key]!=undefined)
            {
                this.InvokeCommand(shortcut_keys[key]);
                return PreventEventDefault(e);
            }

            // Standard keys
            switch (key)
            {
                case "V":   // Paste
                    newMode=undomode_text;
                    break;

                case "X":   // Cut
                    newMode=undomode_erase;
                    break;
            }
        }
        else
        {
            switch (e.keyCode)
            {
                case keycode_tab:
                    if (!this.disableTabHandling)
                    {
                        this.InvokeCommand(e.shiftKey ? "untab" : "tab");
                        return PreventEventDefault(e);
                    }
                    else
                    {
                        newMode=undomode_text;
                    }
                    break;


                case keycode_left:
                case keycode_right:
                case keycode_up:
                case keycode_down:
                case keycode_home:
                case keycode_end:
                case keycode_pgup:
                case keycode_pgdn:
                    // Navigation mode
                    newMode=undomode_navigate;
                    break;

                case keycode_backspace:
                case keycode_delete:
                    // Delete mode
                    newMode=undomode_erase;
                    break;

                case keycode_enter:
                    // New lines mode
                    newMode=undomode_whitespace;
                    break;

                default:
                    // Text mode
                    newMode=undomode_text;
            }
        }

        if (newMode!=null)
            this.SetUndoMode(newMode);

        // Special handling for enter key
        if (!this.disableAutoIndent)
        {
            if (e.keyCode==keycode_enter && (!ie || e.ctrlKey))
            {
                this.IndentNewLine();
            }
        }
    }

    priv.SetUndoMode=function(newMode)
    {
        // Same mode?
        if (this.m_undoMode==newMode)
            return;

        // Enter new mode, after capturing current state
        this.m_undoMode=newMode;

        // Capture undo state
        this.CaptureUndoState();
    }


    priv.CaptureUndoState=function()
    {
        // Store a copy on the undo stack
        var state=new EditorState();
        state.InitFromTextArea(this.m_textarea);
        this.m_undoStack.splice(this.m_undoPos, this.m_undoStack.length-this.m_undoPos, state);
        this.m_undoPos=this.m_undoStack.length;
    }

    priv.onMarkdownChanged=function(bCreateUndoUnit)
    {
        // Get the markdown, see if it's changed
        var new_content=this.m_textarea.value;
        if (new_content===this.m_lastContent && this.m_lastContent!==null)
            return;

        // Call pre hook
        if (this.onPreTransform)
            this.onPreTransform(this, new_content);

        // Transform
        var output=this.Markdown.Transform(new_content);

        // Call post hook
        if (this.onPostTransform)
            this.onPostTransform(this, output);

        // Update the DOM
        if (this.m_divHtml)
            this.m_divHtml.innerHTML=output;
        /*
         if (this.m_divSource)
         {
         this.m_divSource.innerHTML="";
         this.m_divSource.appendChild(document.createTextNode(output));
         }
         */

        // Call post update dom handler
        if (this.onPostUpdateDom)
            this.onPostUpdateDom(this);

        // Save previous content
        this.m_lastContent=new_content;
    }

    // Public method, should be called by client code if any of the MarkdownDeep
    // transform options have changed
    pub.onOptionsChanged=function()
    {
        this.m_lastContent=null;
        this.onMarkdownChanged();
    }

    pub.cmd_undo=function()
    {
        if (this.m_undoPos > 0)
        {
            // Capture current state at end of undo buffer.
            if (this.m_undoPos==this.m_undoStack.length)
            {
                this.CaptureUndoState();
                this.m_undoPos--;
            }

            this.m_undoPos--;
            this.m_undoStack[this.m_undoPos].Apply();
            this.m_undoMode=undomode_unknown;

            // Update markdown rendering
            this.onMarkdownChanged();
        }
    }

    pub.cmd_redo=function()
    {
        if (this.m_undoPos+1 < this.m_undoStack.length)
        {
            this.m_undoPos++;
            this.m_undoStack[this.m_undoPos].Apply();
            this.m_undoMode=undomode_unknown;

            // Update markdown rendering
            this.onMarkdownChanged();

            // We're back at the current state
            if (this.m_undoPos==this.m_undoStack.length-1)
            {
                this.m_undoStack.pop();
            }
        }
    }

    priv.setHeadingLevel=function(state, headingLevel)
    {
        // Select the entire heading
        state.SelectParagraph();
        state.SelectSurroundingWhiteSpace();

        // Get the selected text
        var text=state.getSelectedText();

        // Trim all whitespace
        text=trim(text);

        var currentHeadingLevel=0;
        var m=text.match(/^(\#+)(.*?)(\#+)?$/);
        if (m)
        {
            text=trim(m[2]);
            currentHeadingLevel=m[1].length;
        }
        else
        {
            m=text.match(/^(.*?)(?:\r\n|\n|\r)\s*(\-*|\=*)$/);
            if (m)
            {
                text=trim(m[1]);
                currentHeadingLevel=m[2].charAt(0)=="=" ? 1 : 0;
            }
            else
            {
                // Remove blank lines
                text=text.replace(/(\r\n|\n|\r)/gm,"");
                currentHeadingLevel=0;
            }
        }

        if (headingLevel==-1)
            headingLevel=(currentHeadingLevel+1) % 4;

        // Removing a heading
        var selOffset=0;
        var selLen=0;
        if (headingLevel==0)
        {
            // Deleting selection
            if (text=="Heading")
            {
                state.ReplaceSelection("");
                return true;
            }

            selLen=text.length;
            selOffset=0;
        }
        else
        {
            if (text=="")
                text="Heading";

            selOffset=headingLevel+1;
            selLen=text.length;

            var h="";
            for (var i=0; i<headingLevel; i++)
                h+="#";

            text=h + " " + text + " " + h;

        }

        // Require blank after
        text+="\n\n";

        if (state.m_selectionStart!=0)
        {
            text="\n\n" + text;
            selOffset+=2;
        }

        // Replace text
        state.ReplaceSelection(text);

        // Update selection
        state.m_selectionStart+=selOffset;
        state.m_selectionEnd=state.m_selectionStart + selLen;

        return true;
    }

    pub.cmd_heading=function(state)
    {
        return this.setHeadingLevel(state, -1);
    }

    pub.cmd_h0=function(state)
    {
        return this.setHeadingLevel(state, 0);
    }

    pub.cmd_h1=function(state)
    {
        return this.setHeadingLevel(state, 1);
    }

    pub.cmd_h2=function(state)
    {
        return this.setHeadingLevel(state, 2);
    }

    pub.cmd_h3=function(state)
    {
        return this.setHeadingLevel(state, 3);
    }

    pub.cmd_h4=function(state)
    {
        return this.setHeadingLevel(state, 4);
    }

    pub.cmd_h5=function(state)
    {
        return this.setHeadingLevel(state, 5);
    }

    pub.cmd_h6=function(state)
    {
        return this.setHeadingLevel(state, 6);
    }

    priv.IndentCodeBlock=function(state, indent)
    {
        // Make sure whole lines are selected
        state.SelectWholeLines();

        // Get the text, split into lines
        var lines=state.getSelectedText().split("\n");

        // Convert leading tabs to spaces
        for (var i=0; i<lines.length; i++)
        {
            if (lines[i].charAt(0)=="\t")
            {
                var newLead="";
                var p=0;
                while (lines[i].charAt(p)=="\t")
                {
                    newLead+="    ";
                    p++;
                }

                var newLine=newLead + lines[i].substr(p);
                lines.splice(i, 1, newLine);
            }
        }

        // Toggle indent/unindent?
        if (indent===null)
        {
            var i;
            for (i=0; i<lines.length; i++)
            {
                // Blank lines are allowed
                if (trim(lines[i])=="")
                    continue;

                // Convert leading tabs to spaces
                if (lines[i].charAt(0)=="\t")
                {
                    var newLead="";
                    var p=0;
                    while (lines[i].charAt(p)=="\t")
                    {
                        newLead+="    ";
                        p++;
                    }

                    var newLine=newLead + lines[i].substr(i);
                    lines.splice(i, 1, newLine);
                }

                // Tabbed line
                if (!starts_with(lines[i], "    "))
                    break;
            }

            // Are we adding or removing indent
            indent=i!=lines.length;
        }

        // Apply the changes
        for (var i=0; i<lines.length; i++)
        {
            // Blank line?
            if (trim(lines[i])=="")
                continue;

            // Tabbed line
            var newline=lines[i];
            if (indent)
            {
                newline="    " + lines[i];
            }
            else
            {
                if (starts_with(lines[i], "\t"))
                    newline=lines[i].substr(1);
                else if (starts_with(lines[i], "    "))
                    newline=lines[i].substr(4);
            }

            lines.splice(i, 1, newline);
        }

        // Replace
        state.ReplaceSelection(lines.join("\n"));
    }

    // Code
    pub.cmd_code=function(state)
    {
        // Cursor on a blank line?
        if (state.m_selectionStart==state.m_selectionEnd)
        {
            var line=state.FindStartOfLine(state.m_selectionStart);
            if (state.IsBlankLine(line))
            {
                state.SelectSurroundingWhiteSpace();
                state.ReplaceSelection("\n\n    Code\n\n");
                state.m_selectionStart+=6;
                state.m_selectionEnd=state.m_selectionStart + 4;
                return true;
            }
        }

        // If the current text is preceeded by a non-whitespace, or followed by a non-whitespace
        // then do an inline code
        if (state.getSelectedText().indexOf("\n")<0)
        {
            // Expand selection to include leading/trailing stars
            state.TrimSelection();
            if (state.PreceededBy("`"))
                state.m_selectionStart--;
            if (state.FollowedBy("`"))
                state.m_selectionEnd++;
            return this.bold_or_italic(state, "`");
        }

        this.IndentCodeBlock(state, null);
        return true;
    }

    pub.cmd_tab=function(state)
    {
        if (state.getSelectedText().indexOf("\n")>0)
        {
            this.IndentCodeBlock(state, true);
        }
        else
        {
            // If we're in the leading whitespace of a line
            // insert spaces instead of an actual tab character
            var lineStart=state.FindStartOfLine(state.m_selectionStart);
            var p;
            for (p=lineStart; p<state.m_selectionStart; p++)
            {
                if (state.m_text.charAt(p)!=' ')
                    break;
            }

            // All spaces?
            if (p==state.m_selectionStart)
            {
                var spacesToNextTabStop=4-((p-lineStart)%4);
                state.ReplaceSelection("    ".substr(0, spacesToNextTabStop));
            }
            else
            {
                state.ReplaceSelection("\t");
            }
            state.m_selectionStart=state.m_selectionEnd;
        }
        return true;
    }

    pub.cmd_untab=function(state)
    {
        if (state.getSelectedText().indexOf("\n")>0)
        {
            this.IndentCodeBlock(state, false);
            return true;
        }
        return false;
    }

    priv.bold_or_italic=function(state, marker)
    {
        var t=state.m_text;
        var ml=marker.length;

        // Work out if we're adding or removing bold markers
        var text=state.getSelectedText();
        if (starts_with(text, marker) && ends_with(text, marker))
        {
            // Remove
            state.ReplaceSelection(text.substr(ml, text.length-ml*2));
        }
        else
        {
            // Add
            state.TrimSelection();
            text=state.getSelectedText();
            if (!text)
                text="text";
            else
                text=text.replace(/(\r\n|\n|\r)/gm,"");
            state.ReplaceSelection(marker + text + marker);
            state.InflateSelection(-ml, -ml);
        }
        return true;
    }

    // Bold
    pub.cmd_bold=function(state)
    {
        if (!state.CheckSimpleSelection())
            return false;
        state.TrimSelection();

        // Expand selection to include leading/trailing stars
        if (state.PreceededBy("**"))
            state.m_selectionStart-=2;
        if (state.FollowedBy("**"))
            state.m_selectionEnd+=2;

        return this.bold_or_italic(state, "**");
    }

    // Italic
    pub.cmd_italic=function(state)
    {
        if (!state.CheckSimpleSelection())
            return false;
        state.TrimSelection();

        // Expand selection to include leading/trailing stars
        if ((state.PreceededBy("*") && !state.PreceededBy("**")) || state.PreceededBy("***"))
            state.m_selectionStart-=1;
        if ((state.FollowedBy("*") && !state.PreceededBy("**")) || state.FollowedBy("***"))
            state.m_selectionEnd+=1;

        return this.bold_or_italic(state, "*");
    }

    priv.indent_or_outdent=function(state, outdent)
    {
        if (false && state.m_selectionStart==state.m_selectionEnd)
        {
            state.SelectSurroundingWhiteSpace();
            state.ReplaceSelection("\n\n> Quote\n\n");
            state.m_selectionStart+=4;
            state.m_selectionEnd=state.m_selectionStart+5;
            return true;
        }

        // Make sure whole lines are selected
        state.SelectWholeLines();

        // Get the text, split into lines and check if all lines
        // are indented
        var lines=state.getSelectedText().split("\n");

        // Apply the changes
        for (var i=0; i<lines.length-1; i++)
        {
            // Tabbed line
            var newline=lines[i];
            if (outdent)
            {
                if (starts_with(lines[i], "> "))
                    newline=lines[i].substr(2);
            }
            else
            {
                newline="> " + lines[i];
            }

            lines.splice(i, 1, newline);
        }

        // Replace
        state.ReplaceSelection(lines.join("\n"));

        return true;
    }

    // Quote
    pub.cmd_indent=function(state)
    {
        return this.indent_or_outdent(state, false);
    }

    pub.cmd_outdent=function(state)
    {
        return this.indent_or_outdent(state, true);
    }

    priv.handle_list=function(state, type)
    {
        // Build an array of selected line offsets
        var lines=[];
        if (state.getSelectedText().indexOf("\n")>0)
        {
            state.SelectWholeLines();

            var line=state.m_selectionStart;
            lines.push(line);

            while (true)
            {
                line=state.FindNextLine(line);
                if (line>=state.m_selectionEnd)
                    break;
                lines.push(line);
            }
        }
        else
        {
            lines.push(state.FindStartOfLine(state.m_selectionStart));
        }

        // Now work out the new list type
        // If the current selection only contains the current list type
        // then remove list items
        var prefix = type=="*" ? "* " : "1. ";
        for (var i=0; i<lines.length; i++)
        {
            var lt=state.DetectListType(lines[i]);
            if (lt.m_listType==type)
            {
                prefix="";
                break;
            }
        }

        // Update the prefix on all lines
        for (var i=lines.length-1; i>=0; i--)
        {
            var line=lines[i];
            var lt=state.DetectListType(line);
            state.ReplaceAt(line, lt.m_prefixLen, prefix);
        }

        // We now need to find any surrounding lists and renumber them
        var mdd=new MarkdownDeep.Markdown();
        mdd.ExtraMode=true;
        var listitems=mdd.GetListItems(state.m_text, state.m_selectionStart);

        while (listitems!=null)
        {
            // Process each list item
            var dx=0;
            for (var i=0; i<listitems.length-1; i++)
            {
                // Detect the list type
                var lt=state.DetectListType(listitems[i]+dx);
                if (lt.m_listType!="1")
                    break;

                // Format new number prefix
                var newNumber=(i+1).toString() + ". ";

                // Replace it
                state.ReplaceAt(listitems[i]+dx, lt.m_prefixLen, newNumber);

                // Adjust things if new prefix is different length to the previos
                dx += newNumber.length - lt.m_prefixLen;
            }


            var newlistitems=mdd.GetListItems(state.m_text, listitems[listitems.length-1]+dx);
            if (newlistitems!=null && newlistitems[0]!=listitems[0])
                listitems=newlistitems;
            else
                listitems=null;
        }


        // Select lines
        if (lines.length>1)
        {
            state.SelectWholeLines();
        }

        return true;
    }


    pub.cmd_ullist=function(state)
    {
        return this.handle_list(state, "*");
    }

    pub.cmd_ollist=function(state)
    {
        return this.handle_list(state, "1");
    }

    pub.cmd_link=function(ctx)
    {
        ctx.TrimSelection();
        if (!ctx.CheckSimpleSelection())
            return false;

        var url=prompt("Enter the target URL:");
        if (url===null)
            return false;

        var text=ctx.getSelectedText();
        if (text.length==0)
        {
            text="link text";
        }

        var str="[" + text + "](" + url + ")";

        ctx.ReplaceSelection(str);
        ctx.m_selectionStart++;
        ctx.m_selectionEnd=ctx.m_selectionStart + text.length;
        return true;
    }

    pub.cmd_img=function(ctx)
    {
        ctx.TrimSelection();
        if (!ctx.CheckSimpleSelection())
            return false;

        var url=prompt("Enter the image URL");
        if (url===null)
            return false;

        var alttext=ctx.getSelectedText();
        if (alttext.length==0)
        {
            alttext="Image Text";
        }

        var str="![" + alttext + "](" + url + ")";

        ctx.ReplaceSelection(str);
        ctx.m_selectionStart+=2;
        ctx.m_selectionEnd=ctx.m_selectionStart + alttext.length;
        return true;
    }

    pub.cmd_hr=function(state)
    {
        state.SelectSurroundingWhiteSpace();
        if (state.m_selectionStart==0)
            state.ReplaceSelection("----------\n\n");
        else
            state.ReplaceSelection("\n\n----------\n\n");
        state.m_selectionStart=state.m_selectionEnd;;
        return true;
    }

    pub.IndentNewLine=function()
    {
        var editor=this;
        var timer;
        var handler=function()
        {
            window.clearInterval(timer);

            // Create an editor state from the current selection
            var state=new EditorState();
            state.InitFromTextArea(editor.m_textarea);

            // Find start of previous line
            var prevline=state.FindStartOfLine(state.SkipPreceedingEol(state.m_selectionStart));

            // Count spaces and tabs
            var i=prevline;
            while (true)
            {
                var ch=state.m_text.charAt(i);
                if (ch!=' ' && ch!='\t')
                    break;
                i++;
            }

            // Copy spaces and tabs to the new line
            if (i>prevline)
            {
                state.ReplaceSelection(state.m_text.substr(prevline, i-prevline));
                state.m_selectionStart=state.m_selectionEnd;
            }

            state.Apply();
        }

        timer=window.setInterval(handler, 1);

        return false;
    }

    pub.cmd_indented_newline=function(state)
    {
        // Do default new line
        state.ReplaceSelection("\n");
        state.m_selectionStart=state.m_selectionEnd;

        // Find start of previous line
        var prevline=state.FindStartOfLine(state.SkipPreceedingEol(state.m_selectionStart));

        // Count spaces and tabs
        var i=prevline;
        while (true)
        {
            var ch=state.m_text.charAt(i);
            if (ch!=' ' && ch!='\t')
                break;
            i++;
        }

        // Copy spaces and tabs to the new line
        if (i>prevline)
        {
            state.ReplaceSelection(state.m_text.substr(prevline, i-prevline));
            state.m_selectionStart=state.m_selectionEnd;
        }

        return true;
    }

    // Handle toolbar button
    pub.InvokeCommand=function(id)
    {
        // Special handling for undo and redo
        if (id=="undo" || id=="redo")
        {
            this["cmd_"+id]();
            this.m_textarea.focus();
            return;
        }

        // Create an editor state from the current selection
        var state=new EditorState();
        state.InitFromTextArea(this.m_textarea);

        // Create a copy for undo buffer
        var originalState=state.Duplicate();

        // Call the handler and apply changes
        if (this["cmd_"+id](state))
        {
            // Save current state on undo stack
            this.m_undoMode=undomode_unknown;
            this.m_undoStack.splice(this.m_undoPos, this.m_undoStack.length-this.m_undoPos, originalState);
            this.m_undoPos++;

            // Apply new state
            state.Apply();

            // Update markdown rendering
            this.onMarkdownChanged();

            return true;
        }
        else
        {
            this.m_textarea.focus();
            return false;
        }
    }

    delete priv;
    delete pub;

    // Exports
    this.Editor=Editor;
}();

var hljs=new function(){function k(v){return v.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(v){return v.nodeName.toLowerCase()}function i(w,x){var v=w&&w.exec(x);return v&&v.index==0}function d(v){return Array.prototype.map.call(v.childNodes,function(w){if(w.nodeType==3){return b.useBR?w.nodeValue.replace(/\n/g,""):w.nodeValue}if(t(w)=="br"){return"\n"}return d(w)}).join("")}function r(w){var v=(w.className+" "+(w.parentNode?w.parentNode.className:"")).split(/\s+/);v=v.map(function(x){return x.replace(/^language-/,"")});return v.filter(function(x){return j(x)||x=="no-highlight"})[0]}function o(x,y){var v={};for(var w in x){v[w]=x[w]}if(y){for(var w in y){v[w]=y[w]}}return v}function u(x){var v=[];(function w(y,z){for(var A=y.firstChild;A;A=A.nextSibling){if(A.nodeType==3){z+=A.nodeValue.length}else{if(t(A)=="br"){z+=1}else{if(A.nodeType==1){v.push({event:"start",offset:z,node:A});z=w(A,z);v.push({event:"stop",offset:z,node:A})}}}}return z})(x,0);return v}function q(w,y,C){var x=0;var F="";var z=[];function B(){if(!w.length||!y.length){return w.length?w:y}if(w[0].offset!=y[0].offset){return(w[0].offset<y[0].offset)?w:y}return y[0].event=="start"?w:y}function A(H){function G(I){return" "+I.nodeName+'="'+k(I.value)+'"'}F+="<"+t(H)+Array.prototype.map.call(H.attributes,G).join("")+">"}function E(G){F+="</"+t(G)+">"}function v(G){(G.event=="start"?A:E)(G.node)}while(w.length||y.length){var D=B();F+=k(C.substr(x,D[0].offset-x));x=D[0].offset;if(D==w){z.reverse().forEach(E);do{v(D.splice(0,1)[0]);D=B()}while(D==w&&D.length&&D[0].offset==x);z.reverse().forEach(A)}else{if(D[0].event=="start"){z.push(D[0].node)}else{z.pop()}v(D.splice(0,1)[0])}}return F+k(C.substr(x))}function m(y){function v(z){return(z&&z.source)||z}function w(A,z){return RegExp(v(A),"m"+(y.cI?"i":"")+(z?"g":""))}function x(D,C){if(D.compiled){return}D.compiled=true;D.k=D.k||D.bK;if(D.k){var z={};function E(G,F){if(y.cI){F=F.toLowerCase()}F.split(" ").forEach(function(H){var I=H.split("|");z[I[0]]=[G,I[1]?Number(I[1]):1]})}if(typeof D.k=="string"){E("keyword",D.k)}else{Object.keys(D.k).forEach(function(F){E(F,D.k[F])})}D.k=z}D.lR=w(D.l||/\b[A-Za-z0-9_]+\b/,true);if(C){if(D.bK){D.b=D.bK.split(" ").join("|")}if(!D.b){D.b=/\B|\b/}D.bR=w(D.b);if(!D.e&&!D.eW){D.e=/\B|\b/}if(D.e){D.eR=w(D.e)}D.tE=v(D.e)||"";if(D.eW&&C.tE){D.tE+=(D.e?"|":"")+C.tE}}if(D.i){D.iR=w(D.i)}if(D.r===undefined){D.r=1}if(!D.c){D.c=[]}var B=[];D.c.forEach(function(F){if(F.v){F.v.forEach(function(G){B.push(o(F,G))})}else{B.push(F=="self"?D:F)}});D.c=B;D.c.forEach(function(F){x(F,D)});if(D.starts){x(D.starts,C)}var A=D.c.map(function(F){return F.bK?"\\.?\\b("+F.b+")\\b\\.?":F.b}).concat([D.tE]).concat([D.i]).map(v).filter(Boolean);D.t=A.length?w(A.join("|"),true):{exec:function(F){return null}};D.continuation={}}x(y)}function c(S,L,J,R){function v(U,V){for(var T=0;T<V.c.length;T++){if(i(V.c[T].bR,U)){return V.c[T]}}}function z(U,T){if(i(U.eR,T)){return U}if(U.eW){return z(U.parent,T)}}function A(T,U){return !J&&i(U.iR,T)}function E(V,T){var U=M.cI?T[0].toLowerCase():T[0];return V.k.hasOwnProperty(U)&&V.k[U]}function w(Z,X,W,V){var T=V?"":b.classPrefix,U='<span class="'+T,Y=W?"":"</span>";U+=Z+'">';return U+X+Y}function N(){var U=k(C);if(!I.k){return U}var T="";var X=0;I.lR.lastIndex=0;var V=I.lR.exec(U);while(V){T+=U.substr(X,V.index-X);var W=E(I,V);if(W){H+=W[1];T+=w(W[0],V[0])}else{T+=V[0]}X=I.lR.lastIndex;V=I.lR.exec(U)}return T+U.substr(X)}function F(){if(I.sL&&!f[I.sL]){return k(C)}var T=I.sL?c(I.sL,C,true,I.continuation.top):g(C);if(I.r>0){H+=T.r}if(I.subLanguageMode=="continuous"){I.continuation.top=T.top}return w(T.language,T.value,false,true)}function Q(){return I.sL!==undefined?F():N()}function P(V,U){var T=V.cN?w(V.cN,"",true):"";if(V.rB){D+=T;C=""}else{if(V.eB){D+=k(U)+T;C=""}else{D+=T;C=U}}I=Object.create(V,{parent:{value:I}})}function G(T,X){C+=T;if(X===undefined){D+=Q();return 0}var V=v(X,I);if(V){D+=Q();P(V,X);return V.rB?0:X.length}var W=z(I,X);if(W){var U=I;if(!(U.rE||U.eE)){C+=X}D+=Q();do{if(I.cN){D+="</span>"}H+=I.r;I=I.parent}while(I!=W.parent);if(U.eE){D+=k(X)}C="";if(W.starts){P(W.starts,"")}return U.rE?0:X.length}if(A(X,I)){throw new Error('Illegal lexeme "'+X+'" for mode "'+(I.cN||"<unnamed>")+'"')}C+=X;return X.length||1}var M=j(S);if(!M){throw new Error('Unknown language: "'+S+'"')}m(M);var I=R||M;var D="";for(var K=I;K!=M;K=K.parent){if(K.cN){D=w(K.cN,D,true)}}var C="";var H=0;try{var B,y,x=0;while(true){I.t.lastIndex=x;B=I.t.exec(L);if(!B){break}y=G(L.substr(x,B.index-x),B[0]);x=B.index+y}G(L.substr(x));for(var K=I;K.parent;K=K.parent){if(K.cN){D+="</span>"}}return{r:H,value:D,language:S,top:I}}catch(O){if(O.message.indexOf("Illegal")!=-1){return{r:0,value:k(L)}}else{throw O}}}function g(y,x){x=x||b.languages||Object.keys(f);var v={r:0,value:k(y)};var w=v;x.forEach(function(z){if(!j(z)){return}var A=c(z,y,false);A.language=z;if(A.r>w.r){w=A}if(A.r>v.r){w=v;v=A}});if(w.language){v.second_best=w}return v}function h(v){if(b.tabReplace){v=v.replace(/^((<[^>]+>|\t)+)/gm,function(w,z,y,x){return z.replace(/\t/g,b.tabReplace)})}if(b.useBR){v=v.replace(/\n/g,"<br>")}return v}function p(z){var y=d(z);var A=r(z);if(A=="no-highlight"){return}var v=A?c(A,y,true):g(y);var w=u(z);if(w.length){var x=document.createElementNS("http://www.w3.org/1999/xhtml","pre");x.innerHTML=v.value;v.value=q(w,u(x),y)}v.value=h(v.value);z.innerHTML=v.value;z.className+=" hljs "+(!A&&v.language||"");z.result={language:v.language,re:v.r};if(v.second_best){z.second_best={language:v.second_best.language,re:v.second_best.r}}}var b={classPrefix:"hljs-",tabReplace:null,useBR:false,languages:undefined};function s(v){b=o(b,v)}function l(){if(l.called){return}l.called=true;var v=document.querySelectorAll("pre code");Array.prototype.forEach.call(v,p)}function a(){addEventListener("DOMContentLoaded",l,false);addEventListener("load",l,false)}var f={};var n={};function e(v,x){var w=f[v]=x(this);if(w.aliases){w.aliases.forEach(function(y){n[y]=v})}}function j(v){return f[v]||f[n[v]]}this.highlight=c;this.highlightAuto=g;this.fixMarkup=h;this.highlightBlock=p;this.configure=s;this.initHighlighting=l;this.initHighlightingOnLoad=a;this.registerLanguage=e;this.getLanguage=j;this.inherit=o;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE]};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE]};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gim]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]};this.TM={cN:"title",b:this.IR,r:0};this.UTM={cN:"title",b:this.UIR,r:0}}();hljs.registerLanguage("bash",function(b){var a={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)\}/}]};var d={cN:"string",b:/"/,e:/"/,c:[b.BE,a,{cN:"variable",b:/\$\(/,e:/\)/,c:[b.BE]}]};var c={cN:"string",b:/'/,e:/'/};return{l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for break continue while in do done exit return set declare case esac export exec",literal:"true false",built_in:"printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:true,c:[b.inherit(b.TM,{b:/\w[\w\d_]*/})],r:0},b.HCM,b.NM,d,c,a]}});hljs.registerLanguage("cs",function(b){var a="abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await ascending descending from get group into join let orderby partial select set value var where yield";return{k:a,c:[{cN:"comment",b:"///",e:"$",rB:true,c:[{cN:"xmlDocTag",b:"///|<!--|-->"},{cN:"xmlDocTag",b:"</?",e:">"}]},b.CLCM,b.CBLCLM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line region endregion pragma checksum"},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},b.ASM,b.QSM,b.CNM,{bK:"protected public private internal",e:/[{;=]/,k:a,c:[{bK:"class namespace interface",starts:{c:[b.TM]}},{b:b.IR+"\\s*\\(",rB:true,c:[b.TM]}]}]}});hljs.registerLanguage("ruby",function(e){var h="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";var g="and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor";var a={cN:"yardoctag",b:"@[A-Za-z]+"};var i={cN:"comment",v:[{b:"#",e:"$",c:[a]},{b:"^\\=begin",e:"^\\=end",c:[a],r:10},{b:"^__END__",e:"\\n$"}]};var c={cN:"subst",b:"#\\{",e:"}",k:g};var d={cN:"string",c:[e.BE,c],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:"%[qw]?\\(",e:"\\)"},{b:"%[qw]?\\[",e:"\\]"},{b:"%[qw]?{",e:"}"},{b:"%[qw]?<",e:">",r:10},{b:"%[qw]?/",e:"/",r:10},{b:"%[qw]?%",e:"%",r:10},{b:"%[qw]?-",e:"-",r:10},{b:"%[qw]?\\|",e:"\\|",r:10},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]};var b={cN:"params",b:"\\(",e:"\\)",k:g};var f=[d,i,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]},i]},{cN:"function",bK:"def",e:" |$|;",r:0,c:[e.inherit(e.TM,{b:h}),b,i]},{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:":",c:[d,{b:h}],r:0},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:[i,{cN:"regexp",c:[e.BE,c],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}],r:0}];c.c=f;b.c=f;return{k:g,c:f}});hljs.registerLanguage("diff",function(a){return{c:[{cN:"chunk",r:10,v:[{b:/^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/},{b:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{b:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{cN:"header",v:[{b:/Index: /,e:/$/},{b:/=====/,e:/=====$/},{b:/^\-\-\-/,e:/$/},{b:/^\*{3} /,e:/$/},{b:/^\+\+\+/,e:/$/},{b:/\*{5}/,e:/\*{5}$/}]},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}});hljs.registerLanguage("javascript",function(a){return{aliases:["js"],k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require"},c:[{cN:"pi",b:/^\s*('|")use strict('|")/,r:10},a.ASM,a.QSM,a.CLCM,a.CBLCLM,a.CNM,{b:"("+a.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[a.CLCM,a.CBLCLM,a.REGEXP_MODE,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,c:[a.inherit(a.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[a.CLCM,a.CBLCLM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+a.IR,r:0}]}});hljs.registerLanguage("xml",function(a){var c="[A-Za-z0-9\\._:-]+";var d={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"};var b={eW:true,i:/</,r:0,c:[d,{cN:"attribute",b:c,r:0},{b:"=",r:0,c:[{cN:"value",v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html"],cI:true,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[b],starts:{e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[b],starts:{e:"<\/script>",rE:true,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},d,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ /><]+",r:0},b]}]}});hljs.registerLanguage("markdown",function(a){return{c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|\t)",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].+?[\\)\\]]",rB:true,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:true,rE:true,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:true,eE:true},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:true,eE:true,}],r:10},{b:"^\\[.+\\]:",e:"$",rB:true,c:[{cN:"link_reference",b:"\\[",e:"\\]",eB:true,eE:true},{cN:"link_url",b:"\\s",e:"$"}]}]}});hljs.registerLanguage("css",function(a){var b="[a-zA-Z-][a-zA-Z0-9_-]*";var c={cN:"function",b:b+"\\(",e:"\\)",c:["self",a.NM,a.ASM,a.QSM]};return{cI:true,i:"[=/|']",c:[a.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:true,eE:true,r:0,c:[c,a.ASM,a.QSM,a.NM]}]},{cN:"tag",b:b,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[a.CBLCLM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[c,a.NM,a.QSM,a.ASM,a.CBLCLM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]}]}]}});hljs.registerLanguage("http",function(a){return{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:true,e:"$",c:[{cN:"string",b:" ",e:" ",eB:true,eE:true}]},{cN:"attribute",b:"^\\w",e:": ",eE:true,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:true}}]}});hljs.registerLanguage("java",function(b){var a="false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws";return{k:a,i:/<\//,c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"(^|\\s)@[A-Za-z]+"}],r:10},b.CLCM,b.CBLCLM,b.ASM,b.QSM,{bK:"protected public private",e:/[{;=]/,k:a,c:[{cN:"class",bK:"class interface",eW:true,i:/[:"<>]/,c:[{bK:"extends implements",r:10},b.UTM]},{b:b.UIR+"\\s*\\(",rB:true,c:[b.UTM]}]},b.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}});hljs.registerLanguage("php",function(b){var e={cN:"variable",b:"\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"};var a={cN:"preprocessor",b:/<\?(php)?|\?>/};var c={cN:"string",c:[b.BE,a],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},b.inherit(b.ASM,{i:null}),b.inherit(b.QSM,{i:null})]};var d={v:[b.BNM,b.CNM]};return{cI:true,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[b.CLCM,b.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"},a]},{cN:"comment",b:"__halt_compiler.+?;",eW:true,k:"__halt_compiler",l:b.UIR},{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[b.BE]},a,e,{cN:"function",bK:"function",e:/[;{]/,i:"\\$|\\[|%",c:[b.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",e,b.CBLCLM,c,d]}]},{cN:"class",bK:"class interface",e:"{",i:/[:\(\$"]/,c:[{bK:"extends implements",r:10},b.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[b.UTM]},{bK:"use",e:";",c:[b.UTM]},{b:"=>"},c,d]}});hljs.registerLanguage("python",function(a){var f={cN:"prompt",b:/^(>>>|\.\.\.) /};var b={cN:"string",c:[a.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[f],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[f],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/,},{b:/(b|br)"/,e:/"/,},a.ASM,a.QSM]};var d={cN:"number",r:0,v:[{b:a.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:a.CNR+"[lLjJ]?"}]};var e={cN:"params",b:/\(/,e:/\)/,c:["self",f,d,b]};var c={e:/:/,i:/[${=;\n]/,c:[a.UTM,e]};return{k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},i:/(<\/|->|\?)/,c:[f,d,b,a.HCM,a.inherit(c,{cN:"function",bK:"def",r:10}),a.inherit(c,{cN:"class",bK:"class"}),{cN:"decorator",b:/@/,e:/$/},{b:/\b(print|exec)\(/}]}});hljs.registerLanguage("sql",function(a){return{cI:true,i:/[<>]/,c:[{cN:"operator",b:"\\b(begin|end|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant|merge)\\b(?!:)",e:";",eW:true,k:{keyword:"all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number trigger if before after each row merge matched database",aggregate:"count sum min max avg"},c:[{cN:"string",b:"'",e:"'",c:[a.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[a.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[a.BE]},a.CNM]},a.CBLCLM,{cN:"comment",b:"--",e:"$"}]}});hljs.registerLanguage("ini",function(a){return{cI:true,i:/\S/,c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:true,k:"on off true false yes no",c:[a.QSM,a.NM],r:0}]}]}});hljs.registerLanguage("perl",function(c){var d="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when";var f={cN:"subst",b:"[$@]\\{",e:"\\}",k:d};var g={b:"->{",e:"}"};var a={cN:"variable",v:[{b:/\$\d/},{b:/[\$\%\@\*](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/},{b:/[\$\%\@\*][^\s\w{]/,r:0}]};var e={cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5};var h=[c.BE,f,a];var b=[a,c.HCM,e,{cN:"comment",b:"^\\=\\w",e:"\\=cut",eW:true},g,{cN:"string",c:h,v:[{b:"q[qwxr]?\\s*\\(",e:"\\)",r:5},{b:"q[qwxr]?\\s*\\[",e:"\\]",r:5},{b:"q[qwxr]?\\s*\\{",e:"\\}",r:5},{b:"q[qwxr]?\\s*\\|",e:"\\|",r:5},{b:"q[qwxr]?\\s*\\<",e:"\\>",r:5},{b:"qw\\s+q",e:"q",r:5},{b:"'",e:"'",c:[c.BE]},{b:'"',e:'"'},{b:"`",e:"`",c:[c.BE]},{b:"{\\w+}",c:[],r:0},{b:"-?\\w+\\s*\\=\\>",c:[],r:0}]},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\/\\/|"+c.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[c.HCM,e,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[c.BE],r:0}]},{cN:"sub",bK:"sub",e:"(\\s*\\(.*?\\))?[;{]",r:5},{cN:"operator",b:"-\\w\\b",r:0}];f.c=b;g.c=b;return{k:d,c:b}});hljs.registerLanguage("objectivec",function(a){var d={keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign self synchronized id nonatomic super unichar IBOutlet IBAction strong weak @private @protected @public @try @property @end @throw @catch @finally @synthesize @dynamic @selector @optional @required",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"};var c=/[a-zA-Z@][a-zA-Z0-9_]*/;var b="@interface @class @protocol @implementation";return{k:d,l:c,i:"</",c:[a.CLCM,a.CBLCLM,a.CNM,a.QSM,{cN:"string",b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"},{cN:"preprocessor",b:"#import",e:"$",c:[{cN:"title",b:'"',e:'"'},{cN:"title",b:"<",e:">"}]},{cN:"preprocessor",b:"#",e:"$"},{cN:"class",b:"("+b.split(" ").join("|")+")\\b",e:"({|$)",k:b,l:c,c:[a.UTM]},{cN:"variable",b:"\\."+a.UIR,r:0}]}});hljs.registerLanguage("coffeescript",function(c){var b={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",built_in:"npm require console print module exports global window document"};var a="[A-Za-z$_][0-9A-Za-z$_]*";var f=c.inherit(c.TM,{b:a});var e={cN:"subst",b:/#\{/,e:/}/,k:b};var d=[c.BNM,c.inherit(c.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[c.BE]},{b:/'/,e:/'/,c:[c.BE]},{b:/"""/,e:/"""/,c:[c.BE,e]},{b:/"/,e:/"/,c:[c.BE,e]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[e,c.HCM]},{b:"//[gim]*",r:0},{b:"/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"}]},{cN:"property",b:"@"+a},{b:"`",e:"`",eB:true,eE:true,sL:"javascript"}];e.c=d;return{k:b,c:d.concat([{cN:"comment",b:"###",e:"###"},c.HCM,{cN:"function",b:"("+a+"\\s*=\\s*)?(\\(.*\\))?\\s*\\B[-=]>",e:"[-=]>",rB:true,c:[f,{cN:"params",b:"\\(",rB:true,c:[{b:/\(/,e:/\)/,k:b,c:["self"].concat(d)}]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:true,i:/[:="\[\]]/,c:[f]},f]},{cN:"attribute",b:a+":",e:":",rB:true,eE:true,r:0}])}});hljs.registerLanguage("nginx",function(c){var b={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+c.UIR}]};var a={eW:true,l:"[a-z/_]+",k:{built_in:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[c.HCM,{cN:"string",c:[c.BE,b],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{cN:"url",b:"([a-z]+):/",e:"\\s",eW:true,eE:true},{cN:"regexp",c:[c.BE,b],v:[{b:"\\s\\^",e:"\\s|{|;",rE:true},{b:"~\\*?\\s+",e:"\\s|{|;",rE:true},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0},b]};return{c:[c.HCM,{b:c.UIR+"\\s",e:";|{",rB:true,c:[c.inherit(c.UTM,{starts:a})],r:0}],i:"[^\\s\\}]"}});hljs.registerLanguage("json",function(a){var e={literal:"true false null"};var d=[a.QSM,a.CNM];var c={cN:"value",e:",",eW:true,eE:true,c:d,k:e};var b={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:true,eE:true,c:[a.BE],i:"\\n",starts:c}],i:"\\S"};var f={b:"\\[",e:"\\]",c:[a.inherit(c,{cN:null})],i:"\\S"};d.splice(d.length,0,b,f);return{c:d,k:e,i:"\\S"}});hljs.registerLanguage("apache",function(a){var b={cN:"number",b:"[\\$%]\\d+"};return{cI:true,c:[a.HCM,{cN:"tag",b:"</?",e:">"},{cN:"keyword",b:/\w+/,r:0,k:{common:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{e:/$/,r:0,k:{literal:"on off all"},c:[{cN:"sqbracket",b:"\\s\\[",e:"\\]$"},{cN:"cbracket",b:"[\\$%]\\{",e:"\\}",c:["self",b]},b,a.QSM]}}],i:/\S/}});hljs.registerLanguage("cpp",function(a){var b={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"};return{aliases:["c"],k:b,i:"</",c:[a.CLCM,a.CBLCLM,a.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},a.CNM,{cN:"preprocessor",b:"#",e:"$",c:[{b:"include\\s*<",e:">",i:"\\n"},a.CLCM]},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:b,r:10,c:["self"]}]}});hljs.registerLanguage("makefile",function(a){var b={cN:"variable",b:/\$\(/,e:/\)/,c:[a.BE]};return{c:[a.HCM,{b:/^\w+\s*\W*=/,rB:true,r:0,starts:{cN:"constant",e:/\s*\W*=/,eE:true,starts:{e:/$/,r:0,c:[b],}}},{cN:"title",b:/^[\w]+:\s*$/},{cN:"phony",b:/^\.PHONY:/,e:/$/,k:".PHONY",l:/[\.\w]+/},{b:/^\t+/,e:/$/,c:[a.QSM,b]}]}});
angular.module('wiz.markdown', [
    'ngSanitize'
]);
angular.module('wiz.markdown')

    .factory('wizMarkdownSvc', [function () {
        var markdownSvc = new MarkdownDeep.Markdown();
        markdownSvc.ExtraMode = true;
        markdownSvc.SafeMode = false;
        markdownSvc.NewWindowForExternalLinks = true;
        markdownSvc.AutoHeadingIDs = true;
        markdownSvc.MarkdownDeepEditor = MarkdownDeepEditor;

        return markdownSvc;
    }]);
angular.module('wiz.markdown')

    .filter('wizMarkdownFltr', ['wizMarkdownSvc', function (wizMarkdownSvc) {
        return function (input) {
            if (input) return wizMarkdownSvc.Transform(input);
        };
    }]);
angular.module('wiz.markdown')

    .directive('wizMarkdown', ['$filter', 'wizMarkdownSvc', function ($filter, wizMarkdownSvc) {
        return {
            restrict: 'E',
            scope: {
                'content': '='
            },
            replace: true,
            template: '<div class="markdown-output"></div>',
            link: function (scope, elem, attrs) {
                scope.$watch('content', function () {
                    if (!scope.content) {
                        elem.html('');
                        return;
                    }
                    elem.html(wizMarkdownSvc.Transform(scope.content));
                    // Apply highlighting when required
                    angular.forEach(elem.find('pre'), function (value) {
                        hljs.highlightBlock(value);
                    });
                });
            }
        };
    }]);
angular.module('wiz.markdown')

    .directive('wizMarkdownEditor', ['$timeout', function ($timeout) {
        return {
            restrict: 'E',
            scope: {
                'content': '=',
                'textareaclass':'@?',
                'ngChange':'&'
            },
            replace: true,
            transclude: true,
            template: '<div class="markdown-editor">' +
            '<div class="markdown-toolbar" ng-if="!toolbarBottom" ng-transclude></div>' +
            '<textarea class="markdown-input {{textareaclass}}" ng-change="ngChange()" ng-model="content"></textarea>' +
            '<div class="markdown-toolbar" ng-if="toolbarBottom" ng-transclude></div>' +
            '</div>',
            controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) { }],
            link: function (scope, elem, attrs, ctrl) {
                var editor = new MarkdownDeepEditor.Editor(elem.find('textarea')[0], null);
                editor.onPostUpdateDom = function (editor) {
                    $timeout(function () {
                        scope.content = elem.find('textarea').val();
                    });
                };
                scope.toolbarBottom = attrs.toolbar === 'bottom';
                // Exposes editor to other directives
                ctrl.editor = editor;
            }
        };
    }]);

angular.module('wiz.markdown')

    .directive('wizMarkdownInput', ['$timeout', function ($timeout) {
        return {
            restrict: 'E',
            scope: {
                'content': '='
            },
            replace: true,
            transclude: true,
            template: '<textarea class="markdown-input" ng-model="content"></textarea>',
            link: function (scope, elem, attrs, ctrl) {
                var editor = new MarkdownDeepEditor.Editor(elem[0], null);
                editor.onPostUpdateDom = function (editor) {
                    $timeout(function () {
                        scope.content = elem.val();
                    });
                };
            }
        };
    }]);

angular.module('wiz.markdown')

    .directive('wizToolbarButton', function () {
        return {
            require: '^wizMarkdownEditor',
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                'buttonclass':'@?'
            },
            template: '<button class="{{buttonclass}}" type="button" ng-click="format()" ng-transclude></button>',
            link: function (scope, elem, attrs, wizMarkdownEditorCtrl) {
                if (attrs.command) {
                    scope.format = function () {
                        wizMarkdownEditorCtrl.editor.InvokeCommand(attrs.command);
                    };
                } else {
                    console.error('wiz-toolbar-button requires a "command" attribute e.g: command="bold" ')
                }
            }
        };
    });