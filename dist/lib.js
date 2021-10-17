'use strict';var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(y,E,D){y instanceof String&&(y=String(y));for(var v=y.length,M=0;M<v;M++){var ja=y[M];if(E.call(D,ja,M,y))return{i:M,v:ja}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(y,E,D){if(y==Array.prototype||y==Object.prototype)return y;y[E]=D.value;return y};$jscomp.getGlobal=function(y){y=["object"==typeof globalThis&&globalThis,y,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var E=0;E<y.length;++E){var D=y[E];if(D&&D.Math==Math)return D}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(y,E){var D=$jscomp.propertyToPolyfillSymbol[E];if(null==D)return y[E];D=y[D];return void 0!==D?D:y[E]};
$jscomp.polyfill=function(y,E,D,v){E&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(y,E,D,v):$jscomp.polyfillUnisolated(y,E,D,v))};$jscomp.polyfillUnisolated=function(y,E,D,v){D=$jscomp.global;y=y.split(".");for(v=0;v<y.length-1;v++){var M=y[v];if(!(M in D))return;D=D[M]}y=y[y.length-1];v=D[y];E=E(v);E!=v&&null!=E&&$jscomp.defineProperty(D,y,{configurable:!0,writable:!0,value:E})};
$jscomp.polyfillIsolated=function(y,E,D,v){var M=y.split(".");y=1===M.length;v=M[0];v=!y&&v in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var ja=0;ja<M.length-1;ja++){var ka=M[ja];if(!(ka in v))return;v=v[ka]}M=M[M.length-1];D=$jscomp.IS_SYMBOL_NATIVE&&"es6"===D?v[M]:null;E=E(D);null!=E&&(y?$jscomp.defineProperty($jscomp.polyfills,M,{configurable:!0,writable:!0,value:E}):E!==D&&(void 0===$jscomp.propertyToPolyfillSymbol[M]&&(D=1E9*Math.random()>>>0,$jscomp.propertyToPolyfillSymbol[M]=
$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(M):$jscomp.POLYFILL_PREFIX+D+"$"+M),$jscomp.defineProperty(v,$jscomp.propertyToPolyfillSymbol[M],{configurable:!0,writable:!0,value:E})))};$jscomp.polyfill("Array.prototype.find",function(y){return y?y:function(E,D){return $jscomp.findInternal(this,E,D).v}},"es6","es3");
(function(y,E){"object"===typeof exports&&"undefined"!==typeof module?module.exports=E():"function"===typeof define&&define.amd?define(E):(y=y||self,y.CodeMirror=E())})(this,function(){function y(a){return new RegExp("(^|\\s)"+a+"(?:$|\\s)\\s*")}function E(a){for(var b=a.childNodes.length;0<b;--b)a.removeChild(a.firstChild);return a}function D(a,b){return E(a).appendChild(b)}function v(a,b,d,c){a=document.createElement(a);d&&(a.className=d);c&&(a.style.cssText=c);if("string"==typeof b)a.appendChild(document.createTextNode(b));
else if(b)for(d=0;d<b.length;++d)a.appendChild(b[d]);return a}function M(a,b,d,c){a=v(a,b,d,c);a.setAttribute("role","presentation");return a}function ja(a,b){3==b.nodeType&&(b=b.parentNode);if(a.contains)return a.contains(b);do if(11==b.nodeType&&(b=b.host),b==a)return!0;while(b=b.parentNode)}function ka(){try{var a=document.activeElement}catch(b){a=document.body||null}for(;a&&a.shadowRoot&&a.shadowRoot.activeElement;)a=a.shadowRoot.activeElement;return a}function Wa(a,b){var d=a.className;y(b).test(d)||
(a.className+=(d?" ":"")+b)}function ed(a,b){a=a.split(" ");for(var d=0;d<a.length;d++)a[d]&&!y(a[d]).test(b)&&(b+=" "+a[d]);return b}function fd(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b)}}function Xa(a,b,d){b||(b={});for(var c in a)!a.hasOwnProperty(c)||!1===d&&b.hasOwnProperty(c)||(b[c]=a[c]);return b}function wa(a,b,d,c,e){null==b&&(b=a.search(/[^\s\u00a0]/),-1==b&&(b=a.length));c=c||0;for(e=e||0;;){var f=a.indexOf("\t",c);if(0>f||f>=b)return e+(b-
c);e+=f-c;e+=d-e%d;c=f+1}}function ea(a,b){for(var d=0;d<a.length;++d)if(a[d]==b)return d;return-1}function gd(a,b,d){for(var c=0,e=0;;){var f=a.indexOf("\t",c);-1==f&&(f=a.length);var g=f-c;if(f==a.length||e+g>=b)return c+Math.min(g,b-e);e+=f-c;e+=d-e%d;c=f+1;if(e>=b)return c}}function hd(a){for(;tc.length<=a;)tc.push(J(tc)+" ");return tc[a]}function J(a){return a[a.length-1]}function uc(a,b){for(var d=[],c=0;c<a.length;c++)d[c]=b(a[c],c);return d}function wg(a,b,d){for(var c=0,e=d(b);c<a.length&&
d(a[c])<=e;)c++;a.splice(c,0,b)}function ne(){}function oe(a,b){Object.create?a=Object.create(a):(ne.prototype=a,a=new ne);b&&Xa(b,a);return a}function id(a){return/\w/.test(a)||"\u0080"<a&&(a.toUpperCase()!=a.toLowerCase()||xg.test(a))}function vc(a,b){return b?-1<b.source.indexOf("\\w")&&id(a)?!0:b.test(a):id(a)}function pe(a){for(var b in a)if(a.hasOwnProperty(b)&&a[b])return!1;return!0}function jd(a){return 768<=a.charCodeAt(0)&&yg.test(a)}function qe(a,b,d){for(;(0>d?0<b:b<a.length)&&jd(a.charAt(b));)b+=
d;return b}function Hb(a,b,d){for(var c=b>d?-1:1;;){if(b==d)return b;var e=(b+d)/2;e=0>c?Math.ceil(e):Math.floor(e);if(e==b)return a(e)?b:d;a(e)?d=e:b=e+c}}function zg(a,b,d,c){if(!a)return c(b,d,"ltr",0);for(var e=!1,f=0;f<a.length;++f){var g=a[f];if(g.from<d&&g.to>b||b==d&&g.to==b)c(Math.max(g.from,b),Math.min(g.to,d),1==g.level?"rtl":"ltr",f),e=!0}e||c(b,d,"ltr")}function Ib(a,b,d){var c;Jb=null;for(var e=0;e<a.length;++e){var f=a[e];if(f.from<b&&f.to>b)return e;f.to==b&&(f.from!=f.to&&"before"==
d?c=e:Jb=e);f.from==b&&(f.from!=f.to&&"before"!=d?c=e:Jb=e)}return null!=c?c:Jb}function Ja(a,b){var d=a.order;null==d&&(d=a.order=Ag(a.text,b));return d}function sa(a,b,d){if(a.removeEventListener)a.removeEventListener(b,d,!1);else if(a.detachEvent)a.detachEvent("on"+b,d);else{var c=(a=a._handlers)&&a[b];c&&(d=ea(c,d),-1<d&&(a[b]=c.slice(0,d).concat(c.slice(d+1))))}}function W(a,b){var d=a._handlers&&a._handlers[b]||wc;if(d.length)for(var c=Array.prototype.slice.call(arguments,2),e=0;e<d.length;++e)d[e].apply(null,
c)}function Z(a,b,d){"string"==typeof b&&(b={type:b,preventDefault:function(){this.defaultPrevented=!0}});W(a,d||b.type,a,b);return kd(b)||b.codemirrorIgnore}function re(a){var b=a._handlers&&a._handlers.cursorActivity;if(b){a=a.curOp.cursorActivityHandlers||(a.curOp.cursorActivityHandlers=[]);for(var d=0;d<b.length;++d)-1==ea(a,b[d])&&a.push(b[d])}}function xa(a,b){return 0<(a._handlers&&a._handlers[b]||wc).length}function nb(a){a.prototype.on=function(b,d){z(this,b,d)};a.prototype.off=function(b,
d){sa(this,b,d)}}function la(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function se(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0}function kd(a){return null!=a.defaultPrevented?a.defaultPrevented:0==a.returnValue}function Kb(a){la(a);se(a)}function te(a){var b=a.which;null==b&&(a.button&1?b=1:a.button&2?b=3:a.button&4&&(b=2));ya&&a.ctrlKey&&1==b&&(b=3);return b}function Bg(a,b){2<arguments.length&&(b.dependencies=Array.prototype.slice.call(arguments,2));ld[a]=b}function xc(a){if("string"==
typeof a&&ob.hasOwnProperty(a))a=ob[a];else if(a&&"string"==typeof a.name&&ob.hasOwnProperty(a.name)){var b=ob[a.name];"string"==typeof b&&(b={name:b});a=oe(b,a);a.name=b.name}else{if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+xml$/.test(a))return xc("application/xml");if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+json$/.test(a))return xc("application/json")}return"string"==typeof a?{name:a}:a||{name:"null"}}function md(a,b){b=xc(b);var d=ld[b.name];if(!d)return md(a,"text/plain");a=d(a,b);if(pb.hasOwnProperty(b.name)){d=
pb[b.name];for(var c in d)d.hasOwnProperty(c)&&(a.hasOwnProperty(c)&&(a["_"+c]=a[c]),a[c]=d[c])}a.name=b.name;b.helperType&&(a.helperType=b.helperType);if(b.modeProps)for(var e in b.modeProps)a[e]=b.modeProps[e];return a}function Cg(a,b){a=pb.hasOwnProperty(a)?pb[a]:pb[a]={};Xa(b,a)}function Ya(a,b){if(!0===b)return b;if(a.copyState)return a.copyState(b);a={};for(var d in b){var c=b[d];c instanceof Array&&(c=c.concat([]));a[d]=c}return a}function nd(a,b){for(var d;a.innerMode;){d=a.innerMode(b);if(!d||
d.mode==a)break;b=d.state;a=d.mode}return d||{mode:a,state:b}}function ue(a,b,d){return a.startState?a.startState(b,d):!0}function w(a,b){b-=a.first;if(0>b||b>=a.size)throw Error("There is no line "+(b+a.first)+" in the document.");for(;!a.lines;)for(var d=0;;++d){var c=a.children[d],e=c.chunkSize();if(b<e){a=c;break}b-=e}return a.lines[b]}function Za(a,b,d){var c=[],e=b.line;a.iter(b.line,d.line+1,function(f){f=f.text;e==d.line&&(f=f.slice(0,d.ch));e==b.line&&(f=f.slice(b.ch));c.push(f);++e});return c}
function od(a,b,d){var c=[];a.iter(b,d,function(e){c.push(e.text)});return c}function Da(a,b){if(b-=a.height)for(;a;a=a.parent)a.height+=b}function N(a){if(null==a.parent)return null;var b=a.parent;a=ea(b.lines,a);for(var d=b.parent;d;b=d,d=d.parent)for(var c=0;d.children[c]!=b;++c)a+=d.children[c].chunkSize();return a+b.first}function $a(a,b){var d=a.first;a:do{for(var c=0;c<a.children.length;++c){var e=a.children[c],f=e.height;if(b<f){a=e;continue a}b-=f;d+=e.chunkSize()}return d}while(!a.lines);
for(c=0;c<a.lines.length;++c){e=a.lines[c].height;if(b<e)break;b-=e}return d+c}function Lb(a,b){return b>=a.first&&b<a.first+a.size}function pd(a,b){return String(a.lineNumberFormatter(b+a.firstLineNumber))}function t(a,b,d){void 0===d&&(d=null);if(!(this instanceof t))return new t(a,b,d);this.line=a;this.ch=b;this.sticky=d}function B(a,b){return a.line-b.line||a.ch-b.ch}function qd(a,b){return a.sticky==b.sticky&&0==B(a,b)}function rd(a){return t(a.line,a.ch)}function yc(a,b){return 0>B(a,b)?b:a}
function zc(a,b){return 0>B(a,b)?a:b}function C(a,b){if(b.line<a.first)return t(a.first,0);var d=a.first+a.size-1;if(b.line>d)return t(d,w(a,d).text.length);a=w(a,b.line).text.length;d=b.ch;b=null==d||d>a?t(b.line,a):0>d?t(b.line,0):b;return b}function ve(a,b){for(var d=[],c=0;c<b.length;c++)d[c]=C(a,b[c]);return d}function we(a,b,d,c){var e=[a.state.modeGen],f={};xe(a,b.text,a.doc.mode,d,function(k,l){return e.push(k,l)},f,c);var g=d.state;c=function(k){d.baseTokens=e;var l=a.state.overlays[k],m=
1,n=0;d.state=!0;xe(a,b.text,l.mode,d,function(p,q){for(var r=m;n<p;){var u=e[m];u>p&&e.splice(m,1,p,e[m+1],u);m+=2;n=Math.min(p,u)}if(q)if(l.opaque)e.splice(r,m-r,p,"overlay "+q),m=r+2;else for(;r<m;r+=2)p=e[r+1],e[r+1]=(p?p+" ":"")+"overlay "+q},f);d.state=g;d.baseTokens=null;d.baseTokenPos=1};for(var h=0;h<a.state.overlays.length;++h)c(h);return{styles:e,classes:f.bgClass||f.textClass?f:null}}function ye(a,b,d){if(!b.styles||b.styles[0]!=a.state.modeGen){var c=Mb(a,N(b)),e=b.text.length>a.options.maxHighlightLength&&
Ya(a.doc.mode,c.state),f=we(a,b,c);e&&(c.state=e);b.stateAfter=c.save(!e);b.styles=f.styles;f.classes?b.styleClasses=f.classes:b.styleClasses&&(b.styleClasses=null);d===a.doc.highlightFrontier&&(a.doc.modeFrontier=Math.max(a.doc.modeFrontier,++a.doc.highlightFrontier))}return b.styles}function Mb(a,b,d){var c=a.doc,e=a.display;if(!c.mode.startState)return new Ea(c,!0,b);var f=Dg(a,b,d),g=f>c.first&&w(c,f-1).stateAfter,h=g?Ea.fromSaved(c,g,f):new Ea(c,ue(c.mode),f);c.iter(f,b,function(k){sd(a,k.text,
h);var l=h.line;k.stateAfter=l==b-1||0==l%5||l>=e.viewFrom&&l<e.viewTo?h.save():null;h.nextLine()});d&&(c.modeFrontier=h.line);return h}function sd(a,b,d,c){var e=a.doc.mode;a=new X(b,a.options.tabSize,d);a.start=a.pos=c||0;for(""==b&&ze(e,d.state);!a.eol();)td(e,a,d.state),a.start=a.pos}function ze(a,b){if(a.blankLine)return a.blankLine(b);if(a.innerMode&&(a=nd(a,b),a.mode.blankLine))return a.mode.blankLine(a.state)}function td(a,b,d,c){for(var e=0;10>e;e++){c&&(c[0]=nd(a,d).mode);var f=a.token(b,
d);if(b.pos>b.start)return f}throw Error("Mode "+a.name+" failed to advance stream.");}function Ae(a,b,d,c){var e=a.doc,f=e.mode;b=C(e,b);var g=w(e,b.line);d=Mb(a,b.line,d);a=new X(g.text,a.options.tabSize,d);var h;for(c&&(h=[]);(c||a.pos<b.ch)&&!a.eol();){a.start=a.pos;var k=td(f,a,d.state);c&&h.push(new Be(a,k,Ya(e.mode,d.state)))}return c?h:new Be(a,k,d.state)}function Ce(a,b){if(a)for(;;){var d=a.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!d)break;a=a.slice(0,d.index)+a.slice(d.index+d[0].length);
var c=d[1]?"bgClass":"textClass";null==b[c]?b[c]=d[2]:(new RegExp("(?:^|\\s)"+d[2]+"(?:$|\\s)")).test(b[c])||(b[c]+=" "+d[2])}return a}function xe(a,b,d,c,e,f,g){var h=d.flattenSpans;null==h&&(h=a.options.flattenSpans);var k=0,l=null,m=new X(b,a.options.tabSize,c),n=a.options.addModeClass&&[null];for(""==b&&Ce(ze(d,c.state),f);!m.eol();){if(m.pos>a.options.maxHighlightLength){h=!1;g&&sd(a,b,c,m.pos);m.pos=b.length;var p=null}else p=Ce(td(d,m,c.state,n),f);if(n){var q=n[0].name;q&&(p="m-"+(p?q+" "+
p:q))}if(!h||l!=p){for(;k<m.start;)k=Math.min(m.start,k+5E3),e(k,l);l=p}m.start=m.pos}for(;k<m.pos;)a=Math.min(m.pos,k+5E3),e(a,l),k=a}function Dg(a,b,d){for(var c,e,f=a.doc,g=d?-1:b-(a.doc.mode.innerMode?1E3:100);b>g;--b){if(b<=f.first)return f.first;var h=w(f,b-1),k=h.stateAfter;if(k&&(!d||b+(k instanceof Ac?k.lookAhead:0)<=f.modeFrontier))return b;h=wa(h.text,null,a.options.tabSize);if(null==e||c>h)e=b-1,c=h}return e}function Eg(a,b){a.modeFrontier=Math.min(a.modeFrontier,b);if(!(a.highlightFrontier<
b-10)){for(var d=a.first,c=b-1;c>d;c--){var e=w(a,c).stateAfter;if(e&&(!(e instanceof Ac)||c+e.lookAhead<b)){d=c+1;break}}a.highlightFrontier=Math.min(a.highlightFrontier,d)}}function Bc(a,b,d){this.marker=a;this.from=b;this.to=d}function Nb(a,b){if(a)for(var d=0;d<a.length;++d){var c=a[d];if(c.marker==b)return c}}function ud(a,b){if(b.full)return null;var d=Lb(a,b.from.line)&&w(a,b.from.line).markedSpans,c=Lb(a,b.to.line)&&w(a,b.to.line).markedSpans;if(!d&&!c)return null;a=b.from.ch;var e=b.to.ch,
f=0==B(b.from,b.to),g;if(d)for(var h=0;h<d.length;++h){var k=d[h],l=k.marker;if(null==k.from||(l.inclusiveLeft?k.from<=a:k.from<a)||!(k.from!=a||"bookmark"!=l.type||f&&k.marker.insertLeft)){var m=null==k.to||(l.inclusiveRight?k.to>=a:k.to>a);(g||(g=[])).push(new Bc(l,k.from,m?null:k.to))}}d=g;var n;if(c)for(g=0;g<c.length;++g)if(h=c[g],k=h.marker,null==h.to||(k.inclusiveRight?h.to>=e:h.to>e)||h.from==e&&"bookmark"==k.type&&(!f||h.marker.insertLeft))l=null==h.from||(k.inclusiveLeft?h.from<=e:h.from<
e),(n||(n=[])).push(new Bc(k,l?null:h.from-e,null==h.to?null:h.to-e));c=1==b.text.length;e=J(b.text).length+(c?a:0);if(d)for(f=0;f<d.length;++f)if(g=d[f],null==g.to)(h=Nb(n,g.marker),h)?c&&(g.to=null==h.to?null:h.to+e):g.to=a;if(n)for(a=0;a<n.length;++a)f=n[a],null!=f.to&&(f.to+=e),null==f.from?Nb(d,f.marker)||(f.from=e,c&&(d||(d=[])).push(f)):(f.from+=e,c&&(d||(d=[])).push(f));d&&(d=De(d));n&&n!=d&&(n=De(n));a=[d];if(!c){b=b.text.length-2;var p;if(0<b&&d)for(c=0;c<d.length;++c)null==d[c].to&&(p||
(p=[])).push(new Bc(d[c].marker,null,null));for(d=0;d<b;++d)a.push(p);a.push(n)}return a}function De(a){for(var b=0;b<a.length;++b){var d=a[b];null!=d.from&&d.from==d.to&&!1!==d.marker.clearWhenEmpty&&a.splice(b--,1)}return a.length?a:null}function Fg(a,b,d){var c=null;a.iter(b.line,d.line+1,function(m){if(m.markedSpans)for(var n=0;n<m.markedSpans.length;++n){var p=m.markedSpans[n].marker;!p.readOnly||c&&-1!=ea(c,p)||(c||(c=[])).push(p)}});if(!c)return null;a=[{from:b,to:d}];for(b=0;b<c.length;++b){d=
c[b];for(var e=d.find(0),f=0;f<a.length;++f){var g=a[f];if(!(0>B(g.to,e.from)||0<B(g.from,e.to))){var h=[f,1],k=B(g.from,e.from),l=B(g.to,e.to);(0>k||!d.inclusiveLeft&&!k)&&h.push({from:g.from,to:e.from});(0<l||!d.inclusiveRight&&!l)&&h.push({from:e.to,to:g.to});a.splice.apply(a,h);f+=h.length-3}}}return a}function Ee(a){var b=a.markedSpans;if(b){for(var d=0;d<b.length;++d)b[d].marker.detachLine(a);a.markedSpans=null}}function Fe(a,b){if(b){for(var d=0;d<b.length;++d)b[d].marker.attachLine(a);a.markedSpans=
b}}function vd(a,b){var d=a.lines.length-b.lines.length;if(0!=d)return d;d=a.find();var c=b.find(),e=B(d.from,c.from)||(a.inclusiveLeft?-1:0)-(b.inclusiveLeft?-1:0);return e?-e:(d=B(d.to,c.to)||(a.inclusiveRight?1:0)-(b.inclusiveRight?1:0))?d:b.id-a.id}function qb(a,b){a=Ka&&a.markedSpans;if(a)for(var d,c=0;c<a.length;++c)if(d=a[c],d.marker.collapsed&&null==(b?d.from:d.to)&&(!e||0>vd(e,d.marker)))var e=d.marker;return e}function Ge(a,b,d,c,e){a=w(a,b);if(a=Ka&&a.markedSpans)for(b=0;b<a.length;++b){var f=
a[b];if(f.marker.collapsed){var g=f.marker.find(0),h=B(g.from,d)||(f.marker.inclusiveLeft?-1:0)-(e.inclusiveLeft?-1:0),k=B(g.to,c)||(f.marker.inclusiveRight?1:0)-(e.inclusiveRight?1:0);if(!(0<=h&&0>=k||0>=h&&0<=k)&&(0>=h&&(f.marker.inclusiveRight&&e.inclusiveLeft?0<=B(g.to,d):0<B(g.to,d))||0<=h&&(f.marker.inclusiveRight&&e.inclusiveLeft?0>=B(g.from,c):0>B(g.from,c))))return!0}}}function Fa(a){for(var b;b=qb(a,!0);)a=b.find(-1,!0).line;return a}function wd(a,b){a=w(a,b);var d=Fa(a);return a==d?b:N(d)}
function He(a,b){if(b>a.lastLine())return b;var d=w(a,b);if(!Oa(a,d))return b;for(;a=qb(d,!1);)d=a.find(1,!0).line;return N(d)+1}function Oa(a,b){var d=Ka&&b.markedSpans;if(d)for(var c,e=0;e<d.length;++e)if(c=d[e],c.marker.collapsed&&(null==c.from||!c.marker.widgetNode&&0==c.from&&c.marker.inclusiveLeft&&xd(a,b,c)))return!0}function xd(a,b,d){if(null==d.to)return b=d.marker.find(1,!0),xd(a,b.line,Nb(b.line.markedSpans,d.marker));if(d.marker.inclusiveRight&&d.to==b.text.length)return!0;for(var c,e=
0;e<b.markedSpans.length;++e)if(c=b.markedSpans[e],c.marker.collapsed&&!c.marker.widgetNode&&c.from==d.to&&(null==c.to||c.to!=d.from)&&(c.marker.inclusiveLeft||d.marker.inclusiveRight)&&xd(a,b,c))return!0}function Ga(a){a=Fa(a);for(var b=0,d=a.parent,c=0;c<d.lines.length;++c){var e=d.lines[c];if(e==a)break;else b+=e.height}for(a=d.parent;a;d=a,a=d.parent)for(c=0;c<a.children.length&&(e=a.children[c],e!=d);++c)b+=e.height;return b}function Cc(a){if(0==a.height)return 0;for(var b=a.text.length,d,c=
a;d=qb(c,!0);)d=d.find(0,!0),c=d.from.line,b+=d.from.ch-d.to.ch;for(c=a;d=qb(c,!1);)a=d.find(0,!0),b-=c.text.length-a.from.ch,c=a.to.line,b+=c.text.length-a.to.ch;return b}function yd(a){var b=a.display;a=a.doc;b.maxLine=w(a,a.first);b.maxLineLength=Cc(b.maxLine);b.maxLineChanged=!0;a.iter(function(d){var c=Cc(d);c>b.maxLineLength&&(b.maxLineLength=c,b.maxLine=d)})}function Ie(a,b){if(!a||/^\s*$/.test(a))return null;b=b.addModeClass?Gg:Hg;return b[a]||(b[a]=a.replace(/\S+/g,"cm-$&"))}function Je(a,
b){var d=M("span",null,null,fa?"padding-right: .1px":null);d={pre:M("pre",[d],"CodeMirror-line"),content:d,col:0,pos:0,cm:a,trailingSpace:!1,splitSpaces:a.getOption("lineWrapping")};b.measure={};for(var c=0;c<=(b.rest?b.rest.length:0);c++){var e=c?b.rest[c-1]:b.line,f=void 0;d.pos=0;d.addToken=Ig;var g=a.display.measure;if(null!=zd)g=zd;else{var h=D(g,document.createTextNode("A\u062eA")),k=Ob(h,0,1).getBoundingClientRect();h=Ob(h,1,2).getBoundingClientRect();E(g);g=k&&k.left!=k.right?zd=3>h.right-
k.right:!1}g&&(f=Ja(e,a.doc.direction))&&(d.addToken=Jg(d.addToken,f));d.map=[];var l=b!=a.display.externalMeasured&&N(e);a:{var m=h=k=g=void 0,n=void 0,p=void 0,q=void 0;f=d;l=ye(a,e,l);var r=e.markedSpans,u=e.text,A=0;if(r)for(var Y=u.length,x=0,P=1,K="",Q=0;;){if(Q==x){n=m=h=p="";k=g=null;Q=Infinity;for(var S=[],F=void 0,R=0;R<r.length;++R){var H=r[R],L=H.marker;if("bookmark"==L.type&&H.from==x&&L.widgetNode)S.push(L);else if(H.from<=x&&(null==H.to||H.to>x||L.collapsed&&H.to==x&&H.from==x)){null!=
H.to&&H.to!=x&&Q>H.to&&(Q=H.to,m="");L.className&&(n+=" "+L.className);L.css&&(p=(p?p+";":"")+L.css);L.startStyle&&H.from==x&&(h+=" "+L.startStyle);L.endStyle&&H.to==Q&&(F||(F=[])).push(L.endStyle,H.to);L.title&&((g||(g={})).title=L.title);if(L.attributes)for(var ha in L.attributes)(g||(g={}))[ha]=L.attributes[ha];L.collapsed&&(!k||0>vd(k.marker,L))&&(k=H)}else H.from>x&&Q>H.from&&(Q=H.from)}if(F)for(R=0;R<F.length;R+=2)F[R+1]==Q&&(m+=" "+F[R]);if(!k||k.from==x)for(F=0;F<S.length;++F)Ke(f,0,S[F]);
if(k&&(k.from||0)==x){Ke(f,(null==k.to?Y+1:k.to)-x,k.marker,null==k.from);if(null==k.to)break a;k.to==x&&(k=!1)}}if(x>=Y)break;for(S=Math.min(Y,Q);;){if(K){F=x+K.length;k||(R=F>S?K.slice(0,S-x):K,f.addToken(f,R,q?q+n:n,h,x+R.length==Q?m:"",p,g));if(F>=S){K=K.slice(S-x);x=S;break}x=F;h=""}K=u.slice(A,A=l[P++]);q=Ie(l[P++],f.cm.options)}}else for(g=1;g<l.length;g+=2)f.addToken(f,u.slice(A,A=l[g]),Ie(l[g+1],f.cm.options))}e.styleClasses&&(e.styleClasses.bgClass&&(d.bgClass=ed(e.styleClasses.bgClass,
d.bgClass||"")),e.styleClasses.textClass&&(d.textClass=ed(e.styleClasses.textClass,d.textClass||"")));0==d.map.length&&(e=d.map,f=e.push,g=d.content,k=g.appendChild,h=a.display.measure,null==Ad&&(m=v("span","\u200b"),D(h,v("span",[m,document.createTextNode("x")])),0!=h.firstChild.offsetHeight&&(Ad=1>=m.offsetWidth&&2<m.offsetHeight&&!(G&&8>T))),h=Ad?v("span","\u200b"):v("span","\u00a0",null,"display: inline-block; width: 1px; margin-right: -1px"),h.setAttribute("cm-text",""),f.call(e,0,0,k.call(g,
h)));0==c?(b.measure.map=d.map,b.measure.cache={}):((b.measure.maps||(b.measure.maps=[])).push(d.map),(b.measure.caches||(b.measure.caches=[])).push({}))}fa&&(ha=d.content.lastChild,/\bcm-tab\b/.test(ha.className)||ha.querySelector&&ha.querySelector(".cm-tab"))&&(d.content.className="cm-tab-wrap-hack");W(a,"renderLine",a,b.line,d.pre);d.pre.className&&(d.textClass=ed(d.pre.className,d.textClass||""));return d}function Kg(a){var b=v("span","\u2022","cm-invalidchar");b.title="\\u"+a.charCodeAt(0).toString(16);
b.setAttribute("aria-label",b.title);return b}function Ig(a,b,d,c,e,f,g){if(b){if(a.splitSpaces){var h=a.trailingSpace;if(1<b.length&&!/  /.test(b))h=b;else{for(var k="",l=0;l<b.length;l++){var m=b.charAt(l);" "!=m||!h||l!=b.length-1&&32!=b.charCodeAt(l+1)||(m="\u00a0");k+=m;h=" "==m}h=k}}else h=b;k=h;l=a.cm.state.specialChars;m=!1;if(l.test(b)){h=document.createDocumentFragment();for(var n=0;;){l.lastIndex=n;var p=l.exec(b),q=p?p.index-n:b.length-n;if(q){var r=document.createTextNode(k.slice(n,n+
q));G&&9>T?h.appendChild(v("span",[r])):h.appendChild(r);a.map.push(a.pos,a.pos+q,r);a.col+=q;a.pos+=q}if(!p)break;n+=q+1;"\t"==p[0]?(p=a.cm.options.tabSize,p-=a.col%p,q=h.appendChild(v("span",hd(p),"cm-tab")),q.setAttribute("role","presentation"),q.setAttribute("cm-text","\t"),a.col+=p):("\r"==p[0]||"\n"==p[0]?(q=h.appendChild(v("span","\r"==p[0]?"\u240d":"\u2424","cm-invalidchar")),q.setAttribute("cm-text",p[0])):(q=a.cm.options.specialCharPlaceholder(p[0]),q.setAttribute("cm-text",p[0]),G&&9>T?
h.appendChild(v("span",[q])):h.appendChild(q)),a.col+=1);a.map.push(a.pos,a.pos+1,q);a.pos++}}else a.col+=b.length,h=document.createTextNode(k),a.map.push(a.pos,a.pos+b.length,h),G&&9>T&&(m=!0),a.pos+=b.length;a.trailingSpace=32==k.charCodeAt(b.length-1);if(d||c||e||m||f||g){b=d||"";c&&(b+=c);e&&(b+=e);c=v("span",[h],b,f);if(g)for(var u in g)g.hasOwnProperty(u)&&"style"!=u&&"class"!=u&&c.setAttribute(u,g[u]);return a.content.appendChild(c)}a.content.appendChild(h)}}function Jg(a,b){return function(d,
c,e,f,g,h,k){e=e?e+" cm-force-border":"cm-force-border";for(var l=d.pos,m=l+c.length;;){for(var n=void 0,p=0;p<b.length&&!(n=b[p],n.to>l&&n.from<=l);p++);if(n.to>=m)return a(d,c,e,f,g,h,k);a(d,c.slice(0,n.to-l),e,f,null,h,k);f=null;c=c.slice(n.to-l);l=n.to}}}function Ke(a,b,d,c){var e=!c&&d.widgetNode;e&&a.map.push(a.pos,a.pos+b,e);!c&&a.cm.display.input.needsContentAttribute&&(e||(e=a.content.appendChild(document.createElement("span"))),e.setAttribute("cm-marker",d.id));e&&(a.cm.display.input.setUneditable(e),
a.content.appendChild(e));a.pos+=b;a.trailingSpace=!1}function Le(a,b,d){for(var c=this.line=b,e;c=qb(c,!1);)c=c.find(1,!0).line,(e||(e=[])).push(c);this.size=(this.rest=e)?N(J(this.rest))-d+1:1;this.node=this.text=null;this.hidden=Oa(a,b)}function Dc(a,b,d){var c=[],e;for(e=b;e<d;)b=new Le(a.doc,w(a.doc,e),e),e+=b.size,c.push(b);return c}function Lg(a,b){if(a=a.ownsGroup)try{var d=a.delayedCallbacks,c=0;do{for(;c<d.length;c++)d[c].call(null);for(var e=0;e<a.ops.length;e++){var f=a.ops[e];if(f.cursorActivityHandlers)for(;f.cursorActivityCalled<
f.cursorActivityHandlers.length;)f.cursorActivityHandlers[f.cursorActivityCalled++].call(null,f.cm)}}while(c<d.length)}finally{rb=null,b(a)}}function aa(a,b){var d=a._handlers&&a._handlers[b]||wc;if(d.length){var c=Array.prototype.slice.call(arguments,2);if(rb)var e=rb.delayedCallbacks;else Pb?e=Pb:(e=Pb=[],setTimeout(Mg,0));for(var f=function(h){e.push(function(){return d[h].apply(null,c)})},g=0;g<d.length;++g)f(g)}}function Mg(){var a=Pb;Pb=null;for(var b=0;b<a.length;++b)a[b]()}function Me(a,b,
d,c){for(var e=0;e<b.changes.length;e++){var f=b.changes[e];if("text"==f){f=a;var g=b,h=g.text.className,k=Ne(f,g);g.text==g.node&&(g.node=k.pre);g.text.parentNode.replaceChild(k.pre,g.text);g.text=k.pre;k.bgClass!=g.bgClass||k.textClass!=g.textClass?(g.bgClass=k.bgClass,g.textClass=k.textClass,Bd(f,g)):h&&(g.text.className=h)}else if("gutter"==f)Oe(a,b,d,c);else if("class"==f)Bd(a,b);else if("widget"==f){f=a;g=b;h=c;g.alignable&&(g.alignable=null);k=y("CodeMirror-linewidget");for(var l=g.node.firstChild,
m;l;l=m)m=l.nextSibling,k.test(l.className)&&g.node.removeChild(l);Pe(f,g,h)}}b.changes=null}function Qb(a){a.node==a.text&&(a.node=v("div",null,null,"position: relative"),a.text.parentNode&&a.text.parentNode.replaceChild(a.node,a.text),a.node.appendChild(a.text),G&&8>T&&(a.node.style.zIndex=2));return a.node}function Ne(a,b){var d=a.display.externalMeasured;return d&&d.line==b.line?(a.display.externalMeasured=null,b.measure=d.measure,d.built):Je(a,b)}function Bd(a,b){var d=b.bgClass?b.bgClass+" "+
(b.line.bgClass||""):b.line.bgClass;d&&(d+=" CodeMirror-linebackground");if(b.background)d?b.background.className=d:(b.background.parentNode.removeChild(b.background),b.background=null);else if(d){var c=Qb(b);b.background=c.insertBefore(v("div",null,d),c.firstChild);a.display.input.setUneditable(b.background)}b.line.wrapClass?Qb(b).className=b.line.wrapClass:b.node!=b.text&&(b.node.className="");b.text.className=(b.textClass?b.textClass+" "+(b.line.textClass||""):b.line.textClass)||""}function Oe(a,
b,d,c){b.gutter&&(b.node.removeChild(b.gutter),b.gutter=null);b.gutterBackground&&(b.node.removeChild(b.gutterBackground),b.gutterBackground=null);if(b.line.gutterClass){var e=Qb(b);b.gutterBackground=v("div",null,"CodeMirror-gutter-background "+b.line.gutterClass,"left: "+(a.options.fixedGutter?c.fixedPos:-c.gutterTotalWidth)+"px; width: "+c.gutterTotalWidth+"px");a.display.input.setUneditable(b.gutterBackground);e.insertBefore(b.gutterBackground,b.text)}e=b.line.gutterMarkers;if(a.options.lineNumbers||
e){var f=Qb(b),g=b.gutter=v("div",null,"CodeMirror-gutter-wrapper","left: "+(a.options.fixedGutter?c.fixedPos:-c.gutterTotalWidth)+"px");g.setAttribute("aria-hidden","true");a.display.input.setUneditable(g);f.insertBefore(g,b.text);b.line.gutterClass&&(g.className+=" "+b.line.gutterClass);!a.options.lineNumbers||e&&e["CodeMirror-linenumbers"]||(b.lineNumber=g.appendChild(v("div",pd(a.options,d),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+c.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+
a.display.lineNumInnerWidth+"px")));if(e)for(b=0;b<a.display.gutterSpecs.length;++b)d=a.display.gutterSpecs[b].className,(f=e.hasOwnProperty(d)&&e[d])&&g.appendChild(v("div",[f],"CodeMirror-gutter-elt","left: "+c.gutterLeft[d]+"px; width: "+c.gutterWidth[d]+"px"))}}function Ng(a,b,d,c){var e=Ne(a,b);b.text=b.node=e.pre;e.bgClass&&(b.bgClass=e.bgClass);e.textClass&&(b.textClass=e.textClass);Bd(a,b);Oe(a,b,d,c);Pe(a,b,c);return b.node}function Pe(a,b,d){Qe(a,b.line,b,d,!0);if(b.rest)for(var c=0;c<b.rest.length;c++)Qe(a,
b.rest[c],b,d,!1)}function Qe(a,b,d,c,e){if(b.widgets){var f=Qb(d),g=0;for(b=b.widgets;g<b.length;++g){var h=b[g],k=v("div",[h.node],"CodeMirror-linewidget"+(h.className?" "+h.className:""));h.handleMouseEvents||k.setAttribute("cm-ignore-events","true");var l=h,m=k,n=c;if(l.noHScroll){(d.alignable||(d.alignable=[])).push(m);var p=n.wrapperWidth;m.style.left=n.fixedPos+"px";l.coverGutter||(p-=n.gutterTotalWidth,m.style.paddingLeft=n.gutterTotalWidth+"px");m.style.width=p+"px"}l.coverGutter&&(m.style.zIndex=
5,m.style.position="relative",l.noHScroll||(m.style.marginLeft=-n.gutterTotalWidth+"px"));a.display.input.setUneditable(k);e&&h.above?f.insertBefore(k,d.gutter||d.text):f.appendChild(k);aa(h,"redraw")}}}function Rb(a){if(null!=a.height)return a.height;var b=a.doc.cm;if(!b)return 0;if(!ja(document.body,a.node)){var d="position: relative;";a.coverGutter&&(d+="margin-left: -"+b.display.gutters.offsetWidth+"px;");a.noHScroll&&(d+="width: "+b.display.wrapper.clientWidth+"px;");D(b.display.measure,v("div",
[a.node],null,d))}return a.height=a.node.parentNode.offsetHeight}function La(a,b){for(b=b.target||b.srcElement;b!=a.wrapper;b=b.parentNode)if(!b||1==b.nodeType&&"true"==b.getAttribute("cm-ignore-events")||b.parentNode==a.sizer&&b!=a.mover)return!0}function Cd(a){return a.mover.offsetHeight-a.lineSpace.offsetHeight}function Re(a){if(a.cachedPaddingH)return a.cachedPaddingH;var b=D(a.measure,v("pre","x","CodeMirror-line-like"));b=window.getComputedStyle?window.getComputedStyle(b):b.currentStyle;b={left:parseInt(b.paddingLeft),
right:parseInt(b.paddingRight)};isNaN(b.left)||isNaN(b.right)||(a.cachedPaddingH=b);return b}function Ha(a){return 50-a.display.nativeBarWidth}function ab(a){return a.display.scroller.clientWidth-Ha(a)-a.display.barWidth}function Dd(a){return a.display.scroller.clientHeight-Ha(a)-a.display.barHeight}function Se(a,b,d){if(a.line==b)return{map:a.measure.map,cache:a.measure.cache};for(var c=0;c<a.rest.length;c++)if(a.rest[c]==b)return{map:a.measure.maps[c],cache:a.measure.caches[c]};for(b=0;b<a.rest.length;b++)if(N(a.rest[b])>
d)return{map:a.measure.maps[b],cache:a.measure.caches[b],before:!0}}function Ed(a,b){if(b>=a.display.viewFrom&&b<a.display.viewTo)return a.display.view[bb(a,b)];if((a=a.display.externalMeasured)&&b>=a.lineN&&b<a.lineN+a.size)return a}function cb(a,b){var d=N(b),c=Ed(a,d);c&&!c.text?c=null:c&&c.changes&&(Me(a,c,d,Fd(a)),a.curOp.forceUpdate=!0);if(!c){var e=Fa(b);c=N(e);e=a.display.externalMeasured=new Le(a.doc,e,c);e.lineN=c;c=e.built=Je(a,e);e.text=c.pre;D(a.display.lineMeasure,c.pre);c=e}a=Se(c,
b,d);return{line:b,view:c,rect:null,map:a.map,cache:a.cache,before:a.before,hasHeights:!1}}function za(a,b,d,c,e){b.before&&(d=-1);var f=d+(c||"");if(b.cache.hasOwnProperty(f))a=b.cache[f];else{b.rect||(b.rect=b.view.text.getBoundingClientRect());if(!b.hasHeights){var g=b.view,h=b.rect,k=a.options.lineWrapping,l=k&&ab(a);if(!g.measure.heights||k&&g.measure.width!=l){var m=g.measure.heights=[];if(k)for(g.measure.width=l,g=g.text.firstChild.getClientRects(),k=0;k<g.length-1;k++){l=g[k];var n=g[k+1];
2<Math.abs(l.bottom-n.bottom)&&m.push((l.bottom+n.top)/2-h.top)}m.push(h.bottom-h.top)}b.hasHeights=!0}m=c;g=Te(b.map,d,m);c=g.node;h=g.start;k=g.end;d=g.collapse;if(3==c.nodeType){for(var p=0;4>p;p++){for(;h&&jd(b.line.text.charAt(g.coverStart+h));)--h;for(;g.coverStart+k<g.coverEnd&&jd(b.line.text.charAt(g.coverStart+k));)++k;if(G&&9>T&&0==h&&k==g.coverEnd-g.coverStart)var q=c.parentNode.getBoundingClientRect();else{q=Ob(c,h,k).getClientRects();k=Ue;if("left"==m)for(l=0;l<q.length&&(k=q[l]).left==
k.right;l++);else for(l=q.length-1;0<=l&&(k=q[l]).left==k.right;l--);q=k}if(q.left||q.right||0==h)break;k=h;--h;d="right"}G&&11>T&&((p=!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI)||(null!=Gd?p=Gd:(m=D(a.display.measure,v("span","x")),p=m.getBoundingClientRect(),m=Ob(m,0,1).getBoundingClientRect(),p=Gd=1<Math.abs(p.left-m.left)),p=!p),p||(p=screen.logicalXDPI/screen.deviceXDPI,m=screen.logicalYDPI/screen.deviceYDPI,q={left:q.left*p,right:q.right*p,top:q.top*m,bottom:q.bottom*
m}))}else 0<h&&(d=m="right"),q=a.options.lineWrapping&&1<(p=c.getClientRects()).length?p["right"==m?p.length-1:0]:c.getBoundingClientRect();!(G&&9>T)||h||q&&(q.left||q.right)||(q=(q=c.parentNode.getClientRects()[0])?{left:q.left,right:q.left+sb(a.display),top:q.top,bottom:q.bottom}:Ue);c=q.top-b.rect.top;h=q.bottom-b.rect.top;p=(c+h)/2;m=b.view.measure.heights;for(g=0;g<m.length-1&&!(p<m[g]);g++);d={left:("right"==d?q.right:q.left)-b.rect.left,right:("left"==d?q.left:q.right)-b.rect.left,top:g?m[g-
1]:0,bottom:m[g]};q.left||q.right||(d.bogus=!0);a.options.singleCursorHeightPerLine||(d.rtop=c,d.rbottom=h);a=d;a.bogus||(b.cache[f]=a)}return{left:a.left,right:a.right,top:e?a.rtop:a.top,bottom:e?a.rbottom:a.bottom}}function Te(a,b,d){for(var c,e,f,g,h,k,l=0;l<a.length;l+=3){h=a[l];k=a[l+1];if(b<h)e=0,f=1,g="left";else if(b<k)e=b-h,f=e+1;else if(l==a.length-3||b==k&&a[l+3]>b)f=k-h,e=f-1,b>=k&&(g="right");if(null!=e){c=a[l+2];h==k&&d==(c.insertLeft?"left":"right")&&(g=d);if("left"==d&&0==e)for(;l&&
a[l-2]==a[l-3]&&a[l-1].insertLeft;)c=a[(l-=3)+2],g="left";if("right"==d&&e==k-h)for(;l<a.length-3&&a[l+3]==a[l+4]&&!a[l+5].insertLeft;)c=a[(l+=3)+2],g="right";break}}return{node:c,start:e,end:f,collapse:g,coverStart:h,coverEnd:k}}function Ve(a){if(a.measure&&(a.measure.cache={},a.measure.heights=null,a.rest))for(var b=0;b<a.rest.length;b++)a.measure.caches[b]={}}function We(a){a.display.externalMeasure=null;E(a.display.lineMeasure);for(var b=0;b<a.display.view.length;b++)Ve(a.display.view[b])}function Sb(a){We(a);
a.display.cachedCharWidth=a.display.cachedTextHeight=a.display.cachedPaddingH=null;a.options.lineWrapping||(a.display.maxLineChanged=!0);a.display.lineNumChars=null}function Xe(){return Ec&&Fc?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function Ye(){return Ec&&Fc?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||
(document.documentElement||document.body).scrollTop}function Hd(a){var b=0;if(a.widgets)for(var d=0;d<a.widgets.length;++d)a.widgets[d].above&&(b+=Rb(a.widgets[d]));return b}function Gc(a,b,d,c,e){e||(e=Hd(b),d.top+=e,d.bottom+=e);if("line"==c)return d;c||(c="local");b=Ga(b);b="local"==c?b+a.display.lineSpace.offsetTop:b-a.display.viewOffset;if("page"==c||"window"==c)a=a.display.lineSpace.getBoundingClientRect(),b+=a.top+("window"==c?0:Ye()),c=a.left+("window"==c?0:Xe()),d.left+=c,d.right+=c;d.top+=
b;d.bottom+=b;return d}function Ze(a,b,d){if("div"==d)return b;var c=b.left;b=b.top;"page"==d?(c-=Xe(),b-=Ye()):"local"!=d&&d||(d=a.display.sizer.getBoundingClientRect(),c+=d.left,b+=d.top);a=a.display.lineSpace.getBoundingClientRect();return{left:c-a.left,top:b-a.top}}function Hc(a,b,d,c,e){c||(c=w(a.doc,b.line));var f=c;b=b.ch;c=za(a,cb(a,c),b,e);return Gc(a,f,c,d)}function Aa(a,b,d,c,e,f){function g(p,q){p=za(a,e,p,q?"right":"left",f);q?p.left=p.right:p.right=p.left;return Gc(a,c,p,d)}function h(p,
q,r){return g(r?p-1:p,1==k[q].level!=r)}c=c||w(a.doc,b.line);e||(e=cb(a,c));var k=Ja(c,a.doc.direction),l=b.ch;b=b.sticky;l>=c.text.length?(l=c.text.length,b="before"):0>=l&&(l=0,b="after");if(!k)return g("before"==b?l-1:l,"before"==b);var m=Ib(k,l,b),n=Jb;m=h(l,m,"before"==b);null!=n&&(m.other=h(l,n,"before"!=b));return m}function $e(a,b){var d=0;b=C(a.doc,b);a.options.lineWrapping||(d=sb(a.display)*b.ch);b=w(a.doc,b.line);a=Ga(b)+a.display.lineSpace.offsetTop;return{left:d,right:d,top:a,bottom:a+
b.height}}function Id(a,b,d,c,e){a=t(a,b,d);a.xRel=e;c&&(a.outside=c);return a}function Jd(a,b,d){var c=a.doc;d+=a.display.viewOffset;if(0>d)return Id(c.first,0,null,-1,-1);var e=$a(c,d),f=c.first+c.size-1;if(e>f)return Id(c.first+c.size-1,w(c,f).text.length,null,1,1);0>b&&(b=0);for(var g=w(c,e);;){f=Og(a,g,e,b,d);var h=void 0;var k=f.ch+(0<f.xRel||0<f.outside?1:0);if(g=Ka&&g.markedSpans)for(var l=0;l<g.length;++l){var m=g[l];m.marker.collapsed&&(null==m.from||m.from<k)&&(null==m.to||m.to>k)&&(!h||
0>vd(h,m.marker))&&(h=m.marker)}if(!h)return f;f=h.find(1);if(f.line==e)return f;g=w(c,e=f.line)}}function af(a,b,d,c){c-=Hd(b);b=b.text.length;var e=Hb(function(f){return za(a,d,f-1).bottom<=c},b,0);b=Hb(function(f){return za(a,d,f).top>c},e,b);return{begin:e,end:b}}function bf(a,b,d,c){d||(d=cb(a,b));c=Gc(a,b,za(a,d,c),"line").top;return af(a,b,d,c)}function Kd(a,b,d,c){return a.bottom<=d?!1:a.top>d?!0:(c?a.left:a.right)>b}function Og(a,b,d,c,e){e-=Ga(b);var f=cb(a,b),g=Hd(b),h=0,k=b.text.length,
l=!0,m=Ja(b,a.doc.direction);m&&(m=(a.options.lineWrapping?Pg:Qg)(a,b,d,f,m,c,e),h=(l=1!=m.level)?m.from:m.to-1,k=l?m.to:m.from-1);var n=null,p=null;m=Hb(function(r){var u=za(a,f,r);u.top+=g;u.bottom+=g;if(!Kd(u,c,e,!1))return!1;u.top<=e&&u.left<=c&&(n=r,p=u);return!0},h,k);var q=!1;p?(h=c-p.left<p.right-c,l=h==l,m=n+(l?0:1),l=l?"after":"before",h=h?p.left:p.right):(l||m!=k&&m!=h||m++,l=0==m?"after":m==b.text.length?"before":za(a,f,m-(l?1:0)).bottom+g<=e==l?"after":"before",q=Aa(a,t(d,m,l),"line",
b,f),h=q.left,q=e<q.top?-1:e>=q.bottom?1:0);m=qe(b.text,m,1);return Id(d,m,l,q,c-h)}function Qg(a,b,d,c,e,f,g){var h=Hb(function(m){m=e[m];var n=1!=m.level;return Kd(Aa(a,t(d,n?m.to:m.from,n?"before":"after"),"line",b,c),f,g,!0)},0,e.length-1),k=e[h];if(0<h){var l=1!=k.level;l=Aa(a,t(d,l?k.from:k.to,l?"after":"before"),"line",b,c);Kd(l,f,g,!0)&&l.top>g&&(k=e[h-1])}return k}function Pg(a,b,d,c,e,f,g){g=af(a,b,c,g);d=g.begin;g=g.end;/\s/.test(b.text.charAt(g-1))&&g--;for(var h=b=null,k=0;k<e.length;k++){var l=
e[k];if(!(l.from>=g||l.to<=d)){var m=za(a,c,1!=l.level?Math.min(g,l.to)-1:Math.max(d,l.from)).right;m=m<f?f-m+1E9:m-f;if(!b||h>m)b=l,h=m}}b||(b=e[e.length-1]);b.from<d&&(b={from:d,to:b.to,level:b.level});b.to>g&&(b={from:b.from,to:g,level:b.level});return b}function tb(a){if(null!=a.cachedTextHeight)return a.cachedTextHeight;if(null==db){db=v("pre",null,"CodeMirror-line-like");for(var b=0;49>b;++b)db.appendChild(document.createTextNode("x")),db.appendChild(v("br"));db.appendChild(document.createTextNode("x"))}D(a.measure,
db);b=db.offsetHeight/50;3<b&&(a.cachedTextHeight=b);E(a.measure);return b||1}function sb(a){if(null!=a.cachedCharWidth)return a.cachedCharWidth;var b=v("span","xxxxxxxxxx"),d=v("pre",[b],"CodeMirror-line-like");D(a.measure,d);b=b.getBoundingClientRect();b=(b.right-b.left)/10;2<b&&(a.cachedCharWidth=b);return b||10}function Fd(a){for(var b=a.display,d={},c={},e=b.gutters.clientLeft,f=b.gutters.firstChild,g=0;f;f=f.nextSibling,++g){var h=a.display.gutterSpecs[g].className;d[h]=f.offsetLeft+f.clientLeft+
e;c[h]=f.clientWidth}return{fixedPos:Ld(b),gutterTotalWidth:b.gutters.offsetWidth,gutterLeft:d,gutterWidth:c,wrapperWidth:b.wrapper.clientWidth}}function Ld(a){return a.scroller.getBoundingClientRect().left-a.sizer.getBoundingClientRect().left}function cf(a){var b=tb(a.display),d=a.options.lineWrapping,c=d&&Math.max(5,a.display.scroller.clientWidth/sb(a.display)-3);return function(e){if(Oa(a.doc,e))return 0;var f=0;if(e.widgets)for(var g=0;g<e.widgets.length;g++)e.widgets[g].height&&(f+=e.widgets[g].height);
return d?f+(Math.ceil(e.text.length/c)||1)*b:f+b}}function Md(a){var b=a.doc,d=cf(a);b.iter(function(c){var e=d(c);e!=c.height&&Da(c,e)})}function eb(a,b,d,c){var e=a.display;if(!d&&"true"==(b.target||b.srcElement).getAttribute("cm-not-content"))return null;d=e.lineSpace.getBoundingClientRect();try{var f=b.clientX-d.left;var g=b.clientY-d.top}catch(k){return null}b=Jd(a,f,g);var h;c&&0<b.xRel&&(h=w(a.doc,b.line).text).length==b.ch&&(c=wa(h,h.length,a.options.tabSize)-h.length,b=t(b.line,Math.max(0,
Math.round((f-Re(a.display).left)/sb(a.display))-c)));return b}function bb(a,b){if(b>=a.display.viewTo)return null;b-=a.display.viewFrom;if(0>b)return null;a=a.display.view;for(var d=0;d<a.length;d++)if(b-=a[d].size,0>b)return d}function ma(a,b,d,c){null==b&&(b=a.doc.first);null==d&&(d=a.doc.first+a.doc.size);c||(c=0);var e=a.display;c&&d<e.viewTo&&(null==e.updateLineNumbers||e.updateLineNumbers>b)&&(e.updateLineNumbers=b);a.curOp.viewChanged=!0;if(b>=e.viewTo)Ka&&wd(a.doc,b)<e.viewTo&&Pa(a);else if(d<=
e.viewFrom)Ka&&He(a.doc,d+c)>e.viewFrom?Pa(a):(e.viewFrom+=c,e.viewTo+=c);else if(b<=e.viewFrom&&d>=e.viewTo)Pa(a);else if(b<=e.viewFrom){var f=Ic(a,d,d+c,1);f?(e.view=e.view.slice(f.index),e.viewFrom=f.lineN,e.viewTo+=c):Pa(a)}else if(d>=e.viewTo)(f=Ic(a,b,b,-1))?(e.view=e.view.slice(0,f.index),e.viewTo=f.lineN):Pa(a);else{f=Ic(a,b,b,-1);var g=Ic(a,d,d+c,1);f&&g?(e.view=e.view.slice(0,f.index).concat(Dc(a,f.lineN,g.lineN)).concat(e.view.slice(g.index)),e.viewTo+=c):Pa(a)}if(a=e.externalMeasured)d<
a.lineN?a.lineN+=c:b<a.lineN+a.size&&(e.externalMeasured=null)}function Qa(a,b,d){a.curOp.viewChanged=!0;var c=a.display,e=a.display.externalMeasured;e&&b>=e.lineN&&b<e.lineN+e.size&&(c.externalMeasured=null);b<c.viewFrom||b>=c.viewTo||(a=c.view[bb(a,b)],null!=a.node&&(a=a.changes||(a.changes=[]),-1==ea(a,d)&&a.push(d)))}function Pa(a){a.display.viewFrom=a.display.viewTo=a.doc.first;a.display.view=[];a.display.viewOffset=0}function Ic(a,b,d,c){var e=bb(a,b),f=a.display.view;if(!Ka||d==a.doc.first+
a.doc.size)return{index:e,lineN:d};for(var g=a.display.viewFrom,h=0;h<e;h++)g+=f[h].size;if(g!=b){if(0<c){if(e==f.length-1)return null;b=g+f[e].size-b;e++}else b=g-b;d+=b}for(;wd(a.doc,d)!=d;){if(e==(0>c?0:f.length-1))return null;d+=c*f[e-(0>c?1:0)].size;e+=c}return{index:e,lineN:d}}function df(a){a=a.display.view;for(var b=0,d=0;d<a.length;d++){var c=a[d];c.hidden||c.node&&!c.changes||++b}return b}function Tb(a){a.display.input.showSelection(a.display.input.prepareSelection())}function ef(a,b){void 0===
b&&(b=!0);for(var d=a.doc,c={},e=c.cursors=document.createDocumentFragment(),f=c.selection=document.createDocumentFragment(),g=0;g<d.sel.ranges.length;g++)if(b||g!=d.sel.primIndex){var h=d.sel.ranges[g];if(!(h.from().line>=a.display.viewTo||h.to().line<a.display.viewFrom)){var k=h.empty();(k||a.options.showCursorWhenSelecting)&&ff(a,h.head,e);k||Rg(a,h,f)}}return c}function ff(a,b,d){var c=Aa(a,b,"div",null,null,!a.options.singleCursorHeightPerLine),e=d.appendChild(v("div","\u00a0","CodeMirror-cursor"));
e.style.left=c.left+"px";e.style.top=c.top+"px";e.style.height=Math.max(0,c.bottom-c.top)*a.options.cursorHeight+"px";/\bcm-fat-cursor\b/.test(a.getWrapperElement().className)&&(a=Hc(a,b,"div",null,null),0<a.right-a.left&&(e.style.width=a.right-a.left+"px"));c.other&&(d=d.appendChild(v("div","\u00a0","CodeMirror-cursor CodeMirror-secondarycursor")),d.style.display="",d.style.left=c.other.left+"px",d.style.top=c.other.top+"px",d.style.height=.85*(c.other.bottom-c.other.top)+"px")}function Jc(a,b){return a.top-
b.top||a.left-b.left}function Rg(a,b,d){function c(q,r,u,A){0>r&&(r=0);r=Math.round(r);A=Math.round(A);h.appendChild(v("div",null,"CodeMirror-selected","position: absolute; left: "+q+"px;\n                             top: "+r+"px; width: "+(null==u?m-q:u)+"px;\n                             height: "+(A-r)+"px"))}function e(q,r,u){function A(F,R){return Hc(a,t(q,F),"div",x,R)}function Y(F,R,H){F=bf(a,x,null,F);R="ltr"==R==("after"==H)?"left":"right";H="after"==H?F.begin:F.end-(/\s/.test(x.text.charAt(F.end-
1))?2:1);return A(H,R)[R]}var x=w(g,q),P=x.text.length,K,Q,S=Ja(x,g.direction);zg(S,r||0,null==u?P:u,function(F,R,H,L){var ha="ltr"==H,na=A(F,ha?"left":"right"),ta=A(R-1,ha?"right":"left"),fb=null==r&&0==F,gb=null==u&&R==P,Nd=0==L;L=!S||L==S.length-1;3>=ta.top-na.top?(R=(n?fb:gb)&&Nd?l:(ha?na:ta).left,c(R,na.top,((n?gb:fb)&&L?m:(ha?ta:na).right)-R,na.bottom)):(ha?(ha=n&&fb&&Nd?l:na.left,fb=n?m:Y(F,H,"before"),F=n?l:Y(R,H,"after"),gb=n&&gb&&L?m:ta.right):(ha=n?Y(F,H,"before"):l,fb=!n&&fb&&Nd?m:na.right,
F=!n&&gb&&L?l:ta.left,gb=n?Y(R,H,"after"):m),c(ha,na.top,fb-ha,na.bottom),na.bottom<ta.top&&c(l,na.bottom,null,ta.top),c(F,ta.top,gb-F,ta.bottom));if(!K||0>Jc(na,K))K=na;0>Jc(ta,K)&&(K=ta);if(!Q||0>Jc(na,Q))Q=na;0>Jc(ta,Q)&&(Q=ta)});return{start:K,end:Q}}var f=a.display,g=a.doc,h=document.createDocumentFragment(),k=Re(a.display),l=k.left,m=Math.max(f.sizerWidth,ab(a)-f.sizer.offsetLeft)-k.right,n="ltr"==g.direction;f=b.from();b=b.to();if(f.line==b.line)e(f.line,f.ch,b.ch);else{var p=w(g,f.line);k=
w(g,b.line);k=Fa(p)==Fa(k);f=e(f.line,f.ch,k?p.text.length+1:null).end;b=e(b.line,k?0:null,b.ch).start;k&&(f.top<b.top-2?(c(f.right,f.top,null,f.bottom),c(l,b.top,b.left,b.bottom)):c(f.right,f.top,b.left-f.right,f.bottom));f.bottom<b.top&&c(l,f.bottom,null,b.top)}d.appendChild(h)}function Od(a){if(a.state.focused){var b=a.display;clearInterval(b.blinker);var d=!0;b.cursorDiv.style.visibility="";0<a.options.cursorBlinkRate?b.blinker=setInterval(function(){a.hasFocus()||ub(a);b.cursorDiv.style.visibility=
(d=!d)?"":"hidden"},a.options.cursorBlinkRate):0>a.options.cursorBlinkRate&&(b.cursorDiv.style.visibility="hidden")}}function gf(a){a.hasFocus()||(a.display.input.focus(),a.state.focused||Pd(a))}function Qd(a){a.state.delayingBlurEvent=!0;setTimeout(function(){a.state.delayingBlurEvent&&(a.state.delayingBlurEvent=!1,a.state.focused&&ub(a))},100)}function Pd(a,b){a.state.delayingBlurEvent&&!a.state.draggingText&&(a.state.delayingBlurEvent=!1);"nocursor"!=a.options.readOnly&&(a.state.focused||(W(a,
"focus",a,b),a.state.focused=!0,Wa(a.display.wrapper,"CodeMirror-focused"),a.curOp||a.display.selForContextMenu==a.doc.sel||(a.display.input.reset(),fa&&setTimeout(function(){return a.display.input.reset(!0)},20)),a.display.input.receivedFocus()),Od(a))}function ub(a,b){a.state.delayingBlurEvent||(a.state.focused&&(W(a,"blur",a,b),a.state.focused=!1,hb(a.display.wrapper,"CodeMirror-focused")),clearInterval(a.display.blinker),setTimeout(function(){a.state.focused||(a.display.shift=!1)},150))}function Kc(a){for(var b=
a.display,d=b.lineDiv.offsetTop,c=Math.max(0,b.scroller.getBoundingClientRect().top),e=b.lineDiv.getBoundingClientRect().top,f=0,g=0;g<b.view.length;g++){var h=b.view[g],k=a.options.lineWrapping,l=0;if(!h.hidden){e+=h.line.height;if(G&&8>T){k=h.node.offsetTop+h.node.offsetHeight;var m=k-d;d=k}else{var n=h.node.getBoundingClientRect();m=n.bottom-n.top;!k&&h.text.firstChild&&(l=h.text.firstChild.getBoundingClientRect().right-n.left-1)}k=h.line.height-m;if(.005<k||-.005>k)if(e<c&&(f-=k),Da(h.line,m),
hf(h.line),h.rest)for(m=0;m<h.rest.length;m++)hf(h.rest[m]);l>a.display.sizerWidth&&(l=Math.ceil(l/sb(a.display)),l>a.display.maxLineLength&&(a.display.maxLineLength=l,a.display.maxLine=h.line,a.display.maxLineChanged=!0))}}2<Math.abs(f)&&(b.scroller.scrollTop+=f)}function hf(a){if(a.widgets)for(var b=0;b<a.widgets.length;++b){var d=a.widgets[b],c=d.node.parentNode;c&&(d.height=c.offsetHeight)}}function Lc(a,b,d){var c=d&&null!=d.top?Math.max(0,d.top):a.scroller.scrollTop;c=Math.floor(c-a.lineSpace.offsetTop);
var e=d&&null!=d.bottom?d.bottom:c+a.wrapper.clientHeight;c=$a(b,c);e=$a(b,e);if(d&&d.ensure){var f=d.ensure.from.line;d=d.ensure.to.line;f<c?(c=f,e=$a(b,Ga(w(b,f))+a.wrapper.clientHeight)):Math.min(d,b.lastLine())>=e&&(c=$a(b,Ga(w(b,d))-a.wrapper.clientHeight),e=d)}return{from:c,to:Math.max(e,c+1)}}function Rd(a,b){var d=a.display,c=tb(a.display);0>b.top&&(b.top=0);var e=a.curOp&&null!=a.curOp.scrollTop?a.curOp.scrollTop:d.scroller.scrollTop,f=Dd(a),g={};b.bottom-b.top>f&&(b.bottom=b.top+f);var h=
a.doc.height+Cd(d),k=b.top<c;c=b.bottom>h-c;b.top<e?g.scrollTop=k?0:b.top:b.bottom>e+f&&(f=Math.min(b.top,(c?h:b.bottom)-f),f!=e&&(g.scrollTop=f));e=a.options.fixedGutter?0:d.gutters.offsetWidth;f=a.curOp&&null!=a.curOp.scrollLeft?a.curOp.scrollLeft:d.scroller.scrollLeft-e;a=ab(a)-d.gutters.offsetWidth;if(d=b.right-b.left>a)b.right=b.left+a;10>b.left?g.scrollLeft=0:b.left<f?g.scrollLeft=Math.max(0,b.left+e-(d?0:10)):b.right>a+f-3&&(g.scrollLeft=b.right+(d?0:10)-a);return g}function Mc(a,b){null!=
b&&(Nc(a),a.curOp.scrollTop=(null==a.curOp.scrollTop?a.doc.scrollTop:a.curOp.scrollTop)+b)}function vb(a){Nc(a);var b=a.getCursor();a.curOp.scrollToPos={from:b,to:b,margin:a.options.cursorScrollMargin}}function Ub(a,b,d){null==b&&null==d||Nc(a);null!=b&&(a.curOp.scrollLeft=b);null!=d&&(a.curOp.scrollTop=d)}function Nc(a){var b=a.curOp.scrollToPos;if(b){a.curOp.scrollToPos=null;var d=$e(a,b.from),c=$e(a,b.to);jf(a,d,c,b.margin)}}function jf(a,b,d,c){b=Rd(a,{left:Math.min(b.left,d.left),top:Math.min(b.top,
d.top)-c,right:Math.max(b.right,d.right),bottom:Math.max(b.bottom,d.bottom)+c});Ub(a,b.scrollLeft,b.scrollTop)}function Vb(a,b){2>Math.abs(a.doc.scrollTop-b)||(Ma||Sd(a,{top:b}),kf(a,b,!0),Ma&&Sd(a),Wb(a,100))}function kf(a,b,d){b=Math.max(0,Math.min(a.display.scroller.scrollHeight-a.display.scroller.clientHeight,b));if(a.display.scroller.scrollTop!=b||d)a.doc.scrollTop=b,a.display.scrollbars.setScrollTop(b),a.display.scroller.scrollTop!=b&&(a.display.scroller.scrollTop=b)}function ib(a,b,d,c){b=
Math.max(0,Math.min(b,a.display.scroller.scrollWidth-a.display.scroller.clientWidth));(d?b==a.doc.scrollLeft:2>Math.abs(a.doc.scrollLeft-b))&&!c||(a.doc.scrollLeft=b,lf(a),a.display.scroller.scrollLeft!=b&&(a.display.scroller.scrollLeft=b),a.display.scrollbars.setScrollLeft(b))}function Xb(a){var b=a.display,d=b.gutters.offsetWidth,c=Math.round(a.doc.height+Cd(a.display));return{clientHeight:b.scroller.clientHeight,viewHeight:b.wrapper.clientHeight,scrollWidth:b.scroller.scrollWidth,clientWidth:b.scroller.clientWidth,
viewWidth:b.wrapper.clientWidth,barLeft:a.options.fixedGutter?d:0,docHeight:c,scrollHeight:c+Ha(a)+b.barHeight,nativeBarWidth:b.nativeBarWidth,gutterWidth:d}}function wb(a,b){b||(b=Xb(a));var d=a.display.barWidth,c=a.display.barHeight;mf(a,b);for(b=0;4>b&&d!=a.display.barWidth||c!=a.display.barHeight;b++)d!=a.display.barWidth&&a.options.lineWrapping&&Kc(a),mf(a,Xb(a)),d=a.display.barWidth,c=a.display.barHeight}function mf(a,b){var d=a.display,c=d.scrollbars.update(b);d.sizer.style.paddingRight=(d.barWidth=
c.right)+"px";d.sizer.style.paddingBottom=(d.barHeight=c.bottom)+"px";d.heightForcer.style.borderBottom=c.bottom+"px solid transparent";c.right&&c.bottom?(d.scrollbarFiller.style.display="block",d.scrollbarFiller.style.height=c.bottom+"px",d.scrollbarFiller.style.width=c.right+"px"):d.scrollbarFiller.style.display="";c.bottom&&a.options.coverGutterNextToScrollbar&&a.options.fixedGutter?(d.gutterFiller.style.display="block",d.gutterFiller.style.height=c.bottom+"px",d.gutterFiller.style.width=b.gutterWidth+
"px"):d.gutterFiller.style.display=""}function nf(a){a.display.scrollbars&&(a.display.scrollbars.clear(),a.display.scrollbars.addClass&&hb(a.display.wrapper,a.display.scrollbars.addClass));a.display.scrollbars=new of[a.options.scrollbarStyle](function(b){a.display.wrapper.insertBefore(b,a.display.scrollbarFiller);z(b,"mousedown",function(){a.state.focused&&setTimeout(function(){return a.display.input.focus()},0)});b.setAttribute("cm-not-content","true")},function(b,d){"horizontal"==d?ib(a,b):Vb(a,
b)},a);a.display.scrollbars.addClass&&Wa(a.display.wrapper,a.display.scrollbars.addClass)}function jb(a){a.curOp={cm:a,viewChanged:!1,startHeight:a.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Sg,markArrays:null};a=a.curOp;rb?rb.ops.push(a):a.ownsGroup=rb={ops:[a],delayedCallbacks:[]}}function kb(a){(a=a.curOp)&&Lg(a,function(b){for(var d=
0;d<b.ops.length;d++)b.ops[d].cm.curOp=null;b=b.ops;for(d=0;d<b.length;d++){var c=b[d],e=c.cm,f=e.display,g=e.display;!g.scrollbarsClipped&&g.scroller.offsetWidth&&(g.nativeBarWidth=g.scroller.offsetWidth-g.scroller.clientWidth,g.heightForcer.style.height=Ha(e)+"px",g.sizer.style.marginBottom=-g.nativeBarWidth+"px",g.sizer.style.borderRightWidth=Ha(e)+"px",g.scrollbarsClipped=!0);c.updateMaxLine&&yd(e);c.mustUpdate=c.viewChanged||c.forceUpdate||null!=c.scrollTop||c.scrollToPos&&(c.scrollToPos.from.line<
f.viewFrom||c.scrollToPos.to.line>=f.viewTo)||f.maxLineChanged&&e.options.lineWrapping;c.update=c.mustUpdate&&new Oc(e,c.mustUpdate&&{top:c.scrollTop,ensure:c.scrollToPos},c.forceUpdate)}for(d=0;d<b.length;d++)c=b[d],c.updatedDisplay=c.mustUpdate&&Td(c.cm,c.update);for(d=0;d<b.length;d++)if(c=b[d],e=c.cm,f=e.display,c.updatedDisplay&&Kc(e),c.barMeasure=Xb(e),f.maxLineChanged&&!e.options.lineWrapping&&(g=f.maxLine.text.length,g=za(e,cb(e,f.maxLine),g,void 0),c.adjustWidthTo=g.left+3,e.display.sizerWidth=
c.adjustWidthTo,c.barMeasure.scrollWidth=Math.max(f.scroller.clientWidth,f.sizer.offsetLeft+c.adjustWidthTo+Ha(e)+e.display.barWidth),c.maxScrollLeft=Math.max(0,f.sizer.offsetLeft+c.adjustWidthTo-ab(e))),c.updatedDisplay||c.selectionChanged)c.preparedSelection=f.input.prepareSelection();for(d=0;d<b.length;d++)c=b[d],e=c.cm,null!=c.adjustWidthTo&&(e.display.sizer.style.minWidth=c.adjustWidthTo+"px",c.maxScrollLeft<e.doc.scrollLeft&&ib(e,Math.min(e.display.scroller.scrollLeft,c.maxScrollLeft),!0),e.display.maxLineChanged=
!1),f=c.focus&&c.focus==ka(),c.preparedSelection&&e.display.input.showSelection(c.preparedSelection,f),(c.updatedDisplay||c.startHeight!=e.doc.height)&&wb(e,c.barMeasure),c.updatedDisplay&&Ud(e,c.barMeasure),c.selectionChanged&&Od(e),e.state.focused&&c.updateInput&&e.display.input.reset(c.typing),f&&gf(c.cm);for(d=0;d<b.length;d++){var h=void 0;c=b[d];e=c.cm;f=e.display;g=e.doc;c.updatedDisplay&&pf(e,c.update);null==f.wheelStartX||null==c.scrollTop&&null==c.scrollLeft&&!c.scrollToPos||(f.wheelStartX=
f.wheelStartY=null);null!=c.scrollTop&&kf(e,c.scrollTop,c.forceScroll);null!=c.scrollLeft&&ib(e,c.scrollLeft,!0,!0);if(c.scrollToPos){var k=C(g,c.scrollToPos.from);var l=C(g,c.scrollToPos.to);var m=c.scrollToPos.margin;null==m&&(m=0);e.options.lineWrapping||k!=l||(l="before"==k.sticky?t(k.line,k.ch+1,"before"):k,k=k.ch?t(k.line,"before"==k.sticky?k.ch-1:k.ch,"after"):k);for(var n=0;5>n;n++){var p=!1;h=Aa(e,k);var q=l&&l!=k?Aa(e,l):h;h={left:Math.min(h.left,q.left),top:Math.min(h.top,q.top)-m,right:Math.max(h.left,
q.left),bottom:Math.max(h.bottom,q.bottom)+m};q=Rd(e,h);var r=e.doc.scrollTop,u=e.doc.scrollLeft;null!=q.scrollTop&&(Vb(e,q.scrollTop),1<Math.abs(e.doc.scrollTop-r)&&(p=!0));null!=q.scrollLeft&&(ib(e,q.scrollLeft),1<Math.abs(e.doc.scrollLeft-u)&&(p=!0));if(!p)break}l=h;Z(e,"scrollCursorIntoView")||(m=e.display,n=m.sizer.getBoundingClientRect(),k=null,0>l.top+n.top?k=!0:l.bottom+n.top>(window.innerHeight||document.documentElement.clientHeight)&&(k=!1),null==k||Tg||(l=v("div","\u200b",null,"position: absolute;\n                         top: "+
(l.top-m.viewOffset-e.display.lineSpace.offsetTop)+"px;\n                         height: "+(l.bottom-l.top+Ha(e)+m.barHeight)+"px;\n                         left: "+l.left+"px; width: "+Math.max(2,l.right-l.left)+"px;"),e.display.lineSpace.appendChild(l),l.scrollIntoView(k),e.display.lineSpace.removeChild(l)))}l=c.maybeHiddenMarkers;k=c.maybeUnhiddenMarkers;if(l)for(m=0;m<l.length;++m)l[m].lines.length||W(l[m],"hide");if(k)for(l=0;l<k.length;++l)k[l].lines.length&&W(k[l],"unhide");f.wrapper.offsetHeight&&
(g.scrollTop=e.display.scroller.scrollTop);c.changeObjs&&W(e,"changes",e,c.changeObjs);c.update&&c.update.finish()}})}function qa(a,b){if(a.curOp)return b();jb(a);try{return b()}finally{kb(a)}}function ba(a,b){return function(){if(a.curOp)return b.apply(a,arguments);jb(a);try{return b.apply(a,arguments)}finally{kb(a)}}}function ia(a){return function(){if(this.curOp)return a.apply(this,arguments);jb(this);try{return a.apply(this,arguments)}finally{kb(this)}}}function ca(a){return function(){var b=
this.cm;if(!b||b.curOp)return a.apply(this,arguments);jb(b);try{return a.apply(this,arguments)}finally{kb(b)}}}function Wb(a,b){a.doc.highlightFrontier<a.display.viewTo&&a.state.highlight.set(b,fd(Ug,a))}function Ug(a){var b=a.doc;if(!(b.highlightFrontier>=a.display.viewTo)){var d=+new Date+a.options.workTime,c=Mb(a,b.highlightFrontier),e=[];b.iter(c.line,Math.min(b.first+b.size,a.display.viewTo+500),function(f){if(c.line>=a.display.viewFrom){var g=f.styles,h=f.text.length>a.options.maxHighlightLength?
Ya(b.mode,c.state):null,k=we(a,f,c,!0);h&&(c.state=h);f.styles=k.styles;h=f.styleClasses;(k=k.classes)?f.styleClasses=k:h&&(f.styleClasses=null);k=!g||g.length!=f.styles.length||h!=k&&(!h||!k||h.bgClass!=k.bgClass||h.textClass!=k.textClass);for(h=0;!k&&h<g.length;++h)k=g[h]!=f.styles[h];k&&e.push(c.line);f.stateAfter=c.save()}else f.text.length<=a.options.maxHighlightLength&&sd(a,f.text,c),f.stateAfter=0==c.line%5?c.save():null;c.nextLine();if(+new Date>d)return Wb(a,a.options.workDelay),!0});b.highlightFrontier=
c.line;b.modeFrontier=Math.max(b.modeFrontier,c.line);e.length&&qa(a,function(){for(var f=0;f<e.length;f++)Qa(a,e[f],"text")})}}function Td(a,b){var d=a.display,c=a.doc;if(b.editorIsHidden)return Pa(a),!1;if(!b.force&&b.visible.from>=d.viewFrom&&b.visible.to<=d.viewTo&&(null==d.updateLineNumbers||d.updateLineNumbers>=d.viewTo)&&d.renderedView==d.view&&0==df(a))return!1;qf(a)&&(Pa(a),b.dims=Fd(a));var e=c.first+c.size,f=Math.max(b.visible.from-a.options.viewportMargin,c.first),g=Math.min(e,b.visible.to+
a.options.viewportMargin);d.viewFrom<f&&20>f-d.viewFrom&&(f=Math.max(c.first,d.viewFrom));d.viewTo>g&&20>d.viewTo-g&&(g=Math.min(e,d.viewTo));Ka&&(f=wd(a.doc,f),g=He(a.doc,g));c=f!=d.viewFrom||g!=d.viewTo||d.lastWrapHeight!=b.wrapperHeight||d.lastWrapWidth!=b.wrapperWidth;e=a.display;0==e.view.length||f>=e.viewTo||g<=e.viewFrom?(e.view=Dc(a,f,g),e.viewFrom=f):(e.viewFrom>f?e.view=Dc(a,f,e.viewFrom).concat(e.view):e.viewFrom<f&&(e.view=e.view.slice(bb(a,f))),e.viewFrom=f,e.viewTo<g?e.view=e.view.concat(Dc(a,
e.viewTo,g)):e.viewTo>g&&(e.view=e.view.slice(0,bb(a,g))));e.viewTo=g;d.viewOffset=Ga(w(a.doc,d.viewFrom));a.display.mover.style.top=d.viewOffset+"px";g=df(a);if(!c&&0==g&&!b.force&&d.renderedView==d.view&&(null==d.updateLineNumbers||d.updateLineNumbers>=d.viewTo))return!1;a.hasFocus()?f=null:(f=ka())&&ja(a.display.lineDiv,f)?(f={activeElt:f},window.getSelection&&(e=window.getSelection(),e.anchorNode&&e.extend&&ja(a.display.lineDiv,e.anchorNode)&&(f.anchorNode=e.anchorNode,f.anchorOffset=e.anchorOffset,
f.focusNode=e.focusNode,f.focusOffset=e.focusOffset))):f=null;4<g&&(d.lineDiv.style.display="none");Vg(a,d.updateLineNumbers,b.dims);4<g&&(d.lineDiv.style.display="");d.renderedView=d.view;(g=f)&&g.activeElt&&g.activeElt!=ka()&&(g.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(g.activeElt.nodeName)&&g.anchorNode&&ja(document.body,g.anchorNode)&&ja(document.body,g.focusNode)&&(f=window.getSelection(),e=document.createRange(),e.setEnd(g.anchorNode,g.anchorOffset),e.collapse(!1),f.removeAllRanges(),f.addRange(e),
f.extend(g.focusNode,g.focusOffset)));E(d.cursorDiv);E(d.selectionDiv);d.gutters.style.height=d.sizer.style.minHeight=0;c&&(d.lastWrapHeight=b.wrapperHeight,d.lastWrapWidth=b.wrapperWidth,Wb(a,400));d.updateLineNumbers=null;return!0}function pf(a,b){for(var d=b.viewport,c=!0;;c=!1){if(c&&a.options.lineWrapping&&b.oldDisplayWidth!=ab(a))c&&(b.visible=Lc(a.display,a.doc,d));else if(d&&null!=d.top&&(d={top:Math.min(a.doc.height+Cd(a.display)-Dd(a),d.top)}),b.visible=Lc(a.display,a.doc,d),b.visible.from>=
a.display.viewFrom&&b.visible.to<=a.display.viewTo)break;if(!Td(a,b))break;Kc(a);c=Xb(a);Tb(a);wb(a,c);Ud(a,c);b.force=!1}b.signal(a,"update",a);if(a.display.viewFrom!=a.display.reportedViewFrom||a.display.viewTo!=a.display.reportedViewTo)b.signal(a,"viewportChange",a,a.display.viewFrom,a.display.viewTo),a.display.reportedViewFrom=a.display.viewFrom,a.display.reportedViewTo=a.display.viewTo}function Sd(a,b){b=new Oc(a,b);if(Td(a,b)){Kc(a);pf(a,b);var d=Xb(a);Tb(a);wb(a,d);Ud(a,d);b.finish()}}function Vg(a,
b,d){function c(p){var q=p.nextSibling;fa&&ya&&a.display.currentWheelTarget==p?p.style.display="none":p.parentNode.removeChild(p);return q}var e=a.display,f=a.options.lineNumbers,g=e.lineDiv,h=g.firstChild,k=e.view;e=e.viewFrom;for(var l=0;l<k.length;l++){var m=k[l];if(!m.hidden)if(m.node&&m.node.parentNode==g){for(;h!=m.node;)h=c(h);h=f&&null!=b&&b<=e&&m.lineNumber;m.changes&&(-1<ea(m.changes,"gutter")&&(h=!1),Me(a,m,e,d));h&&(E(m.lineNumber),m.lineNumber.appendChild(document.createTextNode(pd(a.options,
e))));h=m.node.nextSibling}else{var n=Ng(a,m,e,d);g.insertBefore(n,h)}e+=m.size}for(;h;)h=c(h)}function Vd(a){a.sizer.style.marginLeft=a.gutters.offsetWidth+"px";aa(a,"gutterChanged",a)}function Ud(a,b){a.display.sizer.style.minHeight=b.docHeight+"px";a.display.heightForcer.style.top=b.docHeight+"px";a.display.gutters.style.height=b.docHeight+a.display.barHeight+Ha(a)+"px"}function lf(a){var b=a.display,d=b.view;if(b.alignWidgets||b.gutters.firstChild&&a.options.fixedGutter){for(var c=Ld(b)-b.scroller.scrollLeft+
a.doc.scrollLeft,e=b.gutters.offsetWidth,f=c+"px",g=0;g<d.length;g++)if(!d[g].hidden){a.options.fixedGutter&&(d[g].gutter&&(d[g].gutter.style.left=f),d[g].gutterBackground&&(d[g].gutterBackground.style.left=f));var h=d[g].alignable;if(h)for(var k=0;k<h.length;k++)h[k].style.left=f}a.options.fixedGutter&&(b.gutters.style.left=c+e+"px")}}function qf(a){if(!a.options.lineNumbers)return!1;var b=a.doc;b=pd(a.options,b.first+b.size-1);var d=a.display;if(b.length!=d.lineNumChars){var c=d.measure.appendChild(v("div",
[v("div",b)],"CodeMirror-linenumber CodeMirror-gutter-elt")),e=c.firstChild.offsetWidth;c=c.offsetWidth-e;d.lineGutter.style.width="";d.lineNumInnerWidth=Math.max(e,d.lineGutter.offsetWidth-c)+1;d.lineNumWidth=d.lineNumInnerWidth+c;d.lineNumChars=d.lineNumInnerWidth?b.length:-1;d.lineGutter.style.width=d.lineNumWidth+"px";Vd(a.display);return!0}return!1}function Wd(a,b){for(var d=[],c=!1,e=0;e<a.length;e++){var f=a[e],g=null;"string"!=typeof f&&(g=f.style,f=f.className);if("CodeMirror-linenumbers"==
f)if(b)c=!0;else continue;d.push({className:f,style:g})}b&&!c&&d.push({className:"CodeMirror-linenumbers",style:null});return d}function rf(a){var b=a.gutters,d=a.gutterSpecs;E(b);a.lineGutter=null;for(var c=0;c<d.length;++c){var e=d[c],f=e.className;e=e.style;var g=b.appendChild(v("div",null,"CodeMirror-gutter "+f));e&&(g.style.cssText=e);"CodeMirror-linenumbers"==f&&(a.lineGutter=g,g.style.width=(a.lineNumWidth||1)+"px")}b.style.display=d.length?"":"none";Vd(a)}function Yb(a){rf(a.display);ma(a);
lf(a)}function Wg(a,b,d,c){this.input=d;this.scrollbarFiller=v("div",null,"CodeMirror-scrollbar-filler");this.scrollbarFiller.setAttribute("cm-not-content","true");this.gutterFiller=v("div",null,"CodeMirror-gutter-filler");this.gutterFiller.setAttribute("cm-not-content","true");this.lineDiv=M("div",null,"CodeMirror-code");this.selectionDiv=v("div",null,null,"position: relative; z-index: 1");this.cursorDiv=v("div",null,"CodeMirror-cursors");this.measure=v("div",null,"CodeMirror-measure");this.lineMeasure=
v("div",null,"CodeMirror-measure");this.lineSpace=M("div",[this.measure,this.lineMeasure,this.selectionDiv,this.cursorDiv,this.lineDiv],null,"position: relative; outline: none");var e=M("div",[this.lineSpace],"CodeMirror-lines");this.mover=v("div",[e],null,"position: relative");this.sizer=v("div",[this.mover],"CodeMirror-sizer");this.sizerWidth=null;this.heightForcer=v("div",null,null,"position: absolute; height: 50px; width: 1px;");this.gutters=v("div",null,"CodeMirror-gutters");this.lineGutter=
null;this.scroller=v("div",[this.sizer,this.heightForcer,this.gutters],"CodeMirror-scroll");this.scroller.setAttribute("tabIndex","-1");this.wrapper=v("div",[this.scrollbarFiller,this.gutterFiller,this.scroller],"CodeMirror");this.wrapper.setAttribute("translate","no");G&&8>T&&(this.gutters.style.zIndex=-1,this.scroller.style.paddingRight=0);fa||Ma&&Zb||(this.scroller.draggable=!0);a&&(a.appendChild?a.appendChild(this.wrapper):a(this.wrapper));this.reportedViewFrom=this.reportedViewTo=this.viewFrom=
this.viewTo=b.first;this.view=[];this.externalMeasured=this.renderedView=null;this.lastWrapHeight=this.lastWrapWidth=this.viewOffset=0;this.updateLineNumbers=null;this.nativeBarWidth=this.barHeight=this.barWidth=0;this.scrollbarsClipped=!1;this.lineNumWidth=this.lineNumInnerWidth=this.lineNumChars=null;this.alignWidgets=!1;this.maxLine=this.cachedCharWidth=this.cachedTextHeight=this.cachedPaddingH=null;this.maxLineLength=0;this.maxLineChanged=!1;this.wheelDX=this.wheelDY=this.wheelStartX=this.wheelStartY=
null;this.shift=!1;this.activeTouch=this.selForContextMenu=null;this.gutterSpecs=Wd(c.gutters,c.lineNumbers);rf(this);d.init(this)}function sf(a){var b=a.wheelDeltaX,d=a.wheelDeltaY;null==b&&a.detail&&a.axis==a.HORIZONTAL_AXIS&&(b=a.detail);null==d&&a.detail&&a.axis==a.VERTICAL_AXIS?d=a.detail:null==d&&(d=a.wheelDelta);return{x:b,y:d}}function Xg(a){a=sf(a);a.x*=ua;a.y*=ua;return a}function tf(a,b){var d=sf(b),c=d.x;d=d.y;var e=a.display,f=e.scroller,g=f.scrollWidth>f.clientWidth,h=f.scrollHeight>
f.clientHeight;if(c&&g||d&&h){if(d&&ya&&fa){g=b.target;var k=e.view;a:for(;g!=f;g=g.parentNode)for(var l=0;l<k.length;l++)if(k[l].node==g){a.display.currentWheelTarget=g;break a}}!c||Ma||Ba||null==ua?(d&&null!=ua&&(b=d*ua,h=a.doc.scrollTop,g=h+e.wrapper.clientHeight,0>b?h=Math.max(0,h+b-50):g=Math.min(a.doc.height,g+b+50),Sd(a,{top:h,bottom:g})),20>Pc&&(null==e.wheelStartX?(e.wheelStartX=f.scrollLeft,e.wheelStartY=f.scrollTop,e.wheelDX=c,e.wheelDY=d,setTimeout(function(){if(null!=e.wheelStartX){var m=
f.scrollLeft-e.wheelStartX,n=f.scrollTop-e.wheelStartY;m=n&&e.wheelDY&&n/e.wheelDY||m&&e.wheelDX&&m/e.wheelDX;e.wheelStartX=e.wheelStartY=null;m&&(ua=(ua*Pc+m)/(Pc+1),++Pc)}},200)):(e.wheelDX+=c,e.wheelDY+=d))):(d&&h&&Vb(a,Math.max(0,f.scrollTop+d*ua)),ib(a,Math.max(0,f.scrollLeft+c*ua)),(!d||d&&h)&&la(b),e.wheelStartX=null)}}function Ca(a,b,d){a=a&&a.options.selectionsMayTouch;d=b[d];b.sort(function(k,l){return B(k.from(),l.from())});d=ea(b,d);for(var c=1;c<b.length;c++){var e=b[c],f=b[c-1],g=B(f.to(),
e.from());if(a&&!e.empty()?0<g:0<=g){g=zc(f.from(),e.from());var h=yc(f.to(),e.to());e=f.empty()?e.from()==e.head:f.from()==f.head;c<=d&&--d;b.splice(--c,2,new I(e?h:g,e?g:h))}}return new va(b,d)}function Na(a,b){return new va([new I(a,b||a)],0)}function Ra(a){return a.text?t(a.from.line+a.text.length-1,J(a.text).length+(1==a.text.length?a.from.ch:0)):a.to}function uf(a,b){if(0>B(a,b.from))return a;if(0>=B(a,b.to))return Ra(b);var d=a.line+b.text.length-(b.to.line-b.from.line)-1,c=a.ch;a.line==b.to.line&&
(c+=Ra(b).ch-b.to.ch);return t(d,c)}function Xd(a,b){for(var d=[],c=0;c<a.sel.ranges.length;c++){var e=a.sel.ranges[c];d.push(new I(uf(e.anchor,b),uf(e.head,b)))}return Ca(a.cm,d,a.sel.primIndex)}function vf(a,b,d){return a.line==b.line?t(d.line,a.ch-b.ch+d.ch):t(d.line+(a.line-b.line),a.ch)}function Yd(a){a.doc.mode=md(a.options,a.doc.modeOption);$b(a)}function $b(a){a.doc.iter(function(b){b.stateAfter&&(b.stateAfter=null);b.styles&&(b.styles=null)});a.doc.modeFrontier=a.doc.highlightFrontier=a.doc.first;
Wb(a,100);a.state.modeGen++;a.curOp&&ma(a)}function wf(a,b){return 0==b.from.ch&&0==b.to.ch&&""==J(b.text)&&(!a.cm||a.cm.options.wholeLineUpdateBefore)}function Zd(a,b,d,c){function e(r,u,A){r.text=u;r.stateAfter&&(r.stateAfter=null);r.styles&&(r.styles=null);null!=r.order&&(r.order=null);Ee(r);Fe(r,A);u=c?c(r):1;u!=r.height&&Da(r,u);aa(r,"change",r,b)}function f(r,u){for(var A=[];r<u;++r)A.push(new xb(k[r],d?d[r]:null,c));return A}var g=b.from,h=b.to,k=b.text,l=w(a,g.line),m=w(a,h.line),n=J(k),p=
d?d[k.length-1]:null,q=h.line-g.line;b.full?(a.insert(0,f(0,k.length)),a.remove(k.length,a.size-k.length)):wf(a,b)?(h=f(0,k.length-1),e(m,m.text,p),q&&a.remove(g.line,q),h.length&&a.insert(g.line,h)):l==m?1==k.length?e(l,l.text.slice(0,g.ch)+n+l.text.slice(h.ch),p):(q=f(1,k.length-1),q.push(new xb(n+l.text.slice(h.ch),p,c)),e(l,l.text.slice(0,g.ch)+k[0],d?d[0]:null),a.insert(g.line+1,q)):1==k.length?(e(l,l.text.slice(0,g.ch)+k[0]+m.text.slice(h.ch),d?d[0]:null),a.remove(g.line+1,q)):(e(l,l.text.slice(0,
g.ch)+k[0],d?d[0]:null),e(m,n+m.text.slice(h.ch),p),p=f(1,k.length-1),1<q&&a.remove(g.line+1,q-1),a.insert(g.line+1,p));aa(a,"change",a,b)}function Sa(a,b,d){function c(e,f,g){if(e.linked)for(var h=0;h<e.linked.length;++h){var k=e.linked[h];if(k.doc!=f){var l=g&&k.sharedHist;if(!d||l)b(k.doc,l),c(k.doc,e,l)}}}c(a,null,!0)}function xf(a,b){if(b.cm)throw Error("This document is already in use.");a.doc=b;b.cm=a;Md(a);Yd(a);yf(a);a.options.direction=b.direction;a.options.lineWrapping||yd(a);a.options.mode=
b.modeOption;ma(a)}function yf(a){("rtl"==a.doc.direction?Wa:hb)(a.display.lineDiv,"CodeMirror-rtl")}function Yg(a){qa(a,function(){yf(a);ma(a)})}function Qc(a){this.done=[];this.undone=[];this.undoDepth=a?a.undoDepth:Infinity;this.lastModTime=this.lastSelTime=0;this.lastOrigin=this.lastSelOrigin=this.lastOp=this.lastSelOp=null;this.generation=this.maxGeneration=a?a.maxGeneration:1}function $d(a,b){var d={from:rd(b.from),to:Ra(b),text:Za(a,b.from,b.to)};zf(a,d,b.from.line,b.to.line+1);Sa(a,function(c){return zf(c,
d,b.from.line,b.to.line+1)},!0);return d}function Af(a){for(;a.length;)if(J(a).ranges)a.pop();else break}function Bf(a,b,d,c){var e=a.history;e.undone.length=0;var f=+new Date,g;if(g=e.lastOp==c||e.lastOrigin==b.origin&&b.origin&&("+"==b.origin.charAt(0)&&e.lastModTime>f-(a.cm?a.cm.options.historyEventDelay:500)||"*"==b.origin.charAt(0))){if(e.lastOp==c){Af(e.done);var h=J(e.done)}else e.done.length&&!J(e.done).ranges?h=J(e.done):1<e.done.length&&!e.done[e.done.length-2].ranges?(e.done.pop(),h=J(e.done)):
h=void 0;g=h}if(g){var k=J(h.changes);0==B(b.from,b.to)&&0==B(b.from,k.to)?k.to=Ra(b):h.changes.push($d(a,b))}else for((h=J(e.done))&&h.ranges||Rc(a.sel,e.done),h={changes:[$d(a,b)],generation:e.generation},e.done.push(h);e.done.length>e.undoDepth;)e.done.shift(),e.done[0].ranges||e.done.shift();e.done.push(d);e.generation=++e.maxGeneration;e.lastModTime=e.lastSelTime=f;e.lastOp=e.lastSelOp=c;e.lastOrigin=e.lastSelOrigin=b.origin;k||W(a,"historyAdded")}function Rc(a,b){var d=J(b);d&&d.ranges&&d.equals(a)||
b.push(a)}function zf(a,b,d,c){var e=b["spans_"+a.id],f=0;a.iter(Math.max(a.first,d),Math.min(a.first+a.size,c),function(g){g.markedSpans&&((e||(e=b["spans_"+a.id]={}))[f]=g.markedSpans);++f})}function Cf(a,b){var d;if(d=b["spans_"+a.id]){for(var c=[],e=0;e<b.text.length;++e){var f=c,g=f.push;var h=void 0;var k=d[e];if(k){for(var l=0;l<k.length;++l)k[l].marker.explicitlyCleared?h||(h=k.slice(0,l)):h&&h.push(k[l]);h=h?h.length?h:null:k}else h=null;g.call(f,h)}d=c}else d=null;a=ud(a,b);if(!d)return a;
if(!a)return d;for(b=0;b<d.length;++b)if(c=d[b],e=a[b],c&&e)a:for(f=0;f<e.length;++f){g=e[f];for(h=0;h<c.length;++h)if(c[h].marker==g.marker)continue a;c.push(g)}else e&&(d[b]=e);return d}function yb(a,b,d){for(var c=[],e=0;e<a.length;++e){var f=a[e];if(f.ranges)c.push(d?va.prototype.deepCopy.call(f):f);else{f=f.changes;var g=[];c.push({changes:g});for(var h=0;h<f.length;++h){var k=f[h],l;g.push({from:k.from,to:k.to,text:k.text});if(b)for(var m in k)(l=m.match(/^spans_(\d+)$/))&&-1<ea(b,Number(l[1]))&&
(J(g)[m]=k[m],delete k[m])}}}return c}function ae(a,b,d,c){return c?(a=a.anchor,d&&(c=0>B(b,a),c!=0>B(d,a)?(a=b,b=d):c!=0>B(b,d)&&(b=d)),new I(a,b)):new I(d||b,b)}function Sc(a,b,d,c,e){null==e&&(e=a.cm&&(a.cm.display.shift||a.extend));da(a,new va([ae(a.sel.primary(),b,d,e)],0),c)}function Df(a,b,d){for(var c=[],e=a.cm&&(a.cm.display.shift||a.extend),f=0;f<a.sel.ranges.length;f++)c[f]=ae(a.sel.ranges[f],b[f],null,e);b=Ca(a.cm,c,a.sel.primIndex);da(a,b,d)}function be(a,b,d,c){var e=a.sel.ranges.slice(0);
e[b]=d;da(a,Ca(a.cm,e,a.sel.primIndex),c)}function Zg(a,b,d){d={ranges:b.ranges,update:function(c){this.ranges=[];for(var e=0;e<c.length;e++)this.ranges[e]=new I(C(a,c[e].anchor),C(a,c[e].head))},origin:d&&d.origin};W(a,"beforeSelectionChange",a,d);a.cm&&W(a.cm,"beforeSelectionChange",a.cm,d);return d.ranges!=b.ranges?Ca(a.cm,d.ranges,d.ranges.length-1):b}function Ef(a,b,d){var c=a.history.done,e=J(c);e&&e.ranges?(c[c.length-1]=b,Tc(a,b,d)):da(a,b,d)}function da(a,b,d){Tc(a,b,d);b=a.sel;var c=a.cm?
a.cm.curOp.id:NaN,e=a.history,f=d&&d.origin,g;if(!(g=c==e.lastSelOp)&&(g=f&&e.lastSelOrigin==f)&&!(g=e.lastModTime==e.lastSelTime&&e.lastOrigin==f)){g=J(e.done);var h=f.charAt(0);g="*"==h||"+"==h&&g.ranges.length==b.ranges.length&&g.somethingSelected()==b.somethingSelected()&&new Date-a.history.lastSelTime<=(a.cm?a.cm.options.historyEventDelay:500)}g?e.done[e.done.length-1]=b:Rc(b,e.done);e.lastSelTime=+new Date;e.lastSelOrigin=f;e.lastSelOp=c;d&&!1!==d.clearRedo&&Af(e.undone)}function Tc(a,b,d){if(xa(a,
"beforeSelectionChange")||a.cm&&xa(a.cm,"beforeSelectionChange"))b=Zg(a,b,d);var c=d&&d.bias||(0>B(b.primary().head,a.sel.primary().head)?-1:1);Ff(a,Gf(a,b,c,!0));d&&!1===d.scroll||!a.cm||"nocursor"==a.cm.getOption("readOnly")||vb(a.cm)}function Ff(a,b){b.equals(a.sel)||(a.sel=b,a.cm&&(a.cm.curOp.updateInput=1,a.cm.curOp.selectionChanged=!0,re(a.cm)),aa(a,"cursorActivity",a))}function Hf(a){Ff(a,Gf(a,a.sel,null,!1))}function Gf(a,b,d,c){for(var e,f=0;f<b.ranges.length;f++){var g=b.ranges[f],h=b.ranges.length==
a.sel.ranges.length&&a.sel.ranges[f],k=Uc(a,g.anchor,h&&h.anchor,d,c);h=Uc(a,g.head,h&&h.head,d,c);if(e||k!=g.anchor||h!=g.head)e||(e=b.ranges.slice(0,f)),e[f]=new I(k,h)}return e?Ca(a.cm,e,b.primIndex):b}function zb(a,b,d,c,e){var f=w(a,b.line);if(f.markedSpans)for(var g=0;g<f.markedSpans.length;++g){var h=f.markedSpans[g],k=h.marker,l="selectLeft"in k?!k.selectLeft:k.inclusiveLeft,m="selectRight"in k?!k.selectRight:k.inclusiveRight;if((null==h.from||(l?h.from<=b.ch:h.from<b.ch))&&(null==h.to||(m?
h.to>=b.ch:h.to>b.ch))){if(e&&(W(k,"beforeCursorEnter"),k.explicitlyCleared))if(f.markedSpans){--g;continue}else break;if(k.atomic){if(d){g=k.find(0>c?1:-1);h=void 0;if(0>c?m:l)g=If(a,g,-c,g&&g.line==b.line?f:null);if(g&&g.line==b.line&&(h=B(g,d))&&(0>c?0>h:0<h))return zb(a,g,b,c,e)}d=k.find(0>c?-1:1);if(0>c?l:m)d=If(a,d,c,d.line==b.line?f:null);return d?zb(a,d,b,c,e):null}}}return b}function Uc(a,b,d,c,e){c=c||1;b=zb(a,b,d,c,e)||!e&&zb(a,b,d,c,!0)||zb(a,b,d,-c,e)||!e&&zb(a,b,d,-c,!0);return b?b:
(a.cantEdit=!0,t(a.first,0))}function If(a,b,d,c){return 0>d&&0==b.ch?b.line>a.first?C(a,t(b.line-1)):null:0<d&&b.ch==(c||w(a,b.line)).text.length?b.line<a.first+a.size-1?t(b.line+1,0):null:new t(b.line,b.ch+d)}function Jf(a){a.setSelection(t(a.firstLine(),0),t(a.lastLine()),Ia)}function Kf(a,b,d){var c={canceled:!1,from:b.from,to:b.to,text:b.text,origin:b.origin,cancel:function(){return c.canceled=!0}};d&&(c.update=function(e,f,g,h){e&&(c.from=C(a,e));f&&(c.to=C(a,f));g&&(c.text=g);void 0!==h&&(c.origin=
h)});W(a,"beforeChange",a,c);a.cm&&W(a.cm,"beforeChange",a.cm,c);return c.canceled?(a.cm&&(a.cm.curOp.updateInput=2),null):{from:c.from,to:c.to,text:c.text,origin:c.origin}}function Ab(a,b,d){if(a.cm){if(!a.cm.curOp)return ba(a.cm,Ab)(a,b,d);if(a.cm.state.suppressEdits)return}if(xa(a,"beforeChange")||a.cm&&xa(a.cm,"beforeChange"))if(b=Kf(a,b,!0),!b)return;if(d=Lf&&!d&&Fg(a,b.from,b.to))for(var c=d.length-1;0<=c;--c)Mf(a,{from:d[c].from,to:d[c].to,text:c?[""]:b.text,origin:b.origin});else Mf(a,b)}
function Mf(a,b){if(1!=b.text.length||""!=b.text[0]||0!=B(b.from,b.to)){var d=Xd(a,b);Bf(a,b,d,a.cm?a.cm.curOp.id:NaN);ac(a,b,d,ud(a,b));var c=[];Sa(a,function(e,f){f||-1!=ea(c,e.history)||(Nf(e.history,b),c.push(e.history));ac(e,b,null,ud(e,b))})}}function Vc(a,b,d){var c=a.cm&&a.cm.state.suppressEdits;if(!c||d){for(var e=a.history,f,g=a.sel,h="undo"==b?e.done:e.undone,k="undo"==b?e.undone:e.done,l=0;l<h.length&&(f=h[l],d?!f.ranges||f.equals(a.sel):f.ranges);l++);if(l!=h.length){for(e.lastOrigin=
e.lastSelOrigin=null;;)if(f=h.pop(),f.ranges){Rc(f,k);if(d&&!f.equals(a.sel)){da(a,f,{clearRedo:!1});return}g=f}else{if(c){h.push(f);return}break}var m=[];Rc(g,k);k.push({changes:m,generation:e.generation});e.generation=f.generation||++e.maxGeneration;var n=xa(a,"beforeChange")||a.cm&&xa(a.cm,"beforeChange");d=function(p){var q=f.changes[p];q.origin=b;if(n&&!Kf(a,q,!1))return h.length=0,{};m.push($d(a,q));var r=p?Xd(a,q):J(h);ac(a,q,r,Cf(a,q));!p&&a.cm&&a.cm.scrollIntoView({from:q.from,to:Ra(q)});
var u=[];Sa(a,function(A,Y){Y||-1!=ea(u,A.history)||(Nf(A.history,q),u.push(A.history));ac(A,q,null,Cf(A,q))})};for(c=f.changes.length-1;0<=c;--c)if(e=d(c))return e.v}}}function Of(a,b){if(0!=b&&(a.first+=b,a.sel=new va(uc(a.sel.ranges,function(e){return new I(t(e.anchor.line+b,e.anchor.ch),t(e.head.line+b,e.head.ch))}),a.sel.primIndex),a.cm)){ma(a.cm,a.first,a.first-b,b);for(var d=a.cm.display,c=d.viewFrom;c<d.viewTo;c++)Qa(a.cm,c,"gutter")}}function ac(a,b,d,c){if(a.cm&&!a.cm.curOp)return ba(a.cm,
ac)(a,b,d,c);if(b.to.line<a.first)Of(a,b.text.length-1-(b.to.line-b.from.line));else if(!(b.from.line>a.lastLine())){if(b.from.line<a.first){var e=b.text.length-1-(a.first-b.from.line);Of(a,e);b={from:t(a.first,0),to:t(b.to.line+e,b.to.ch),text:[J(b.text)],origin:b.origin}}e=a.lastLine();b.to.line>e&&(b={from:b.from,to:t(e,w(a,e).text.length),text:[b.text[0]],origin:b.origin});b.removed=Za(a,b.from,b.to);d||(d=Xd(a,b));a.cm?$g(a.cm,b,c):Zd(a,b,c);Tc(a,d,Ia);a.cantEdit&&Uc(a,t(a.firstLine(),0))&&(a.cantEdit=
!1)}}function $g(a,b,d){var c=a.doc,e=a.display,f=b.from,g=b.to,h=!1,k=f.line;a.options.lineWrapping||(k=N(Fa(w(c,f.line))),c.iter(k,g.line+1,function(l){if(l==e.maxLine)return h=!0}));-1<c.sel.contains(b.from,b.to)&&re(a);Zd(c,b,d,cf(a));a.options.lineWrapping||(c.iter(k,f.line+b.text.length,function(l){var m=Cc(l);m>e.maxLineLength&&(e.maxLine=l,e.maxLineLength=m,e.maxLineChanged=!0,h=!1)}),h&&(a.curOp.updateMaxLine=!0));Eg(c,f.line);Wb(a,400);d=b.text.length-(g.line-f.line)-1;b.full?ma(a):f.line!=
g.line||1!=b.text.length||wf(a.doc,b)?ma(a,f.line,g.line+1,d):Qa(a,f.line,"text");d=xa(a,"changes");if((c=xa(a,"change"))||d)b={from:f,to:g,text:b.text,removed:b.removed,origin:b.origin},c&&aa(a,"change",a,b),d&&(a.curOp.changeObjs||(a.curOp.changeObjs=[])).push(b);a.display.selForContextMenu=null}function Bb(a,b,d,c,e){c||(c=d);0>B(c,d)&&(c=[c,d],d=c[0],c=c[1]);"string"==typeof b&&(b=a.splitLines(b));Ab(a,{from:d,to:c,text:b,origin:e})}function Pf(a,b,d,c){d<a.line?a.line+=c:b<a.line&&(a.line=b,
a.ch=0)}function Qf(a,b,d,c){for(var e=0;e<a.length;++e){var f=a[e],g=!0;if(f.ranges)for(f.copied||(f=a[e]=f.deepCopy(),f.copied=!0),g=0;g<f.ranges.length;g++)Pf(f.ranges[g].anchor,b,d,c),Pf(f.ranges[g].head,b,d,c);else{for(var h=0;h<f.changes.length;++h){var k=f.changes[h];if(d<k.from.line)k.from=t(k.from.line+c,k.from.ch),k.to=t(k.to.line+c,k.to.ch);else if(b<=k.to.line){g=!1;break}}g||(a.splice(0,e+1),e=0)}}}function Nf(a,b){var d=b.from.line,c=b.to.line;b=b.text.length-(c-d)-1;Qf(a.done,d,c,b);
Qf(a.undone,d,c,b)}function bc(a,b,d,c){var e=b,f=b;"number"==typeof b?f=w(a,Math.max(a.first,Math.min(b,a.first+a.size-1))):e=N(b);if(null==e)return null;c(f,e)&&a.cm&&Qa(a.cm,e,d);return f}function cc(a){this.lines=a;this.parent=null;for(var b=0,d=0;d<a.length;++d)a[d].parent=this,b+=a[d].height;this.height=b}function dc(a){this.children=a;for(var b=0,d=0,c=0;c<a.length;++c){var e=a[c];b+=e.chunkSize();d+=e.height;e.parent=this}this.size=b;this.height=d;this.parent=null}function ah(a,b,d,c){var e=
new ec(a,d,c),f=a.cm;f&&e.noHScroll&&(f.display.alignWidgets=!0);bc(a,b,"widget",function(g){var h=g.widgets||(g.widgets=[]);null==e.insertAt?h.push(e):h.splice(Math.min(h.length,Math.max(0,e.insertAt)),0,e);e.line=g;f&&!Oa(a,g)&&(h=Ga(g)<a.scrollTop,Da(g,g.height+Rb(e)),h&&Mc(f,e.height),f.curOp.forceUpdate=!0);return!0});f&&aa(f,"lineWidgetAdded",f,e,"number"==typeof b?b:N(b));return e}function Cb(a,b,d,c,e){if(c&&c.shared)return bh(a,b,d,c,e);if(a.cm&&!a.cm.curOp)return ba(a.cm,Cb)(a,b,d,c,e);
var f=new Ta(a,e);e=B(b,d);c&&Xa(c,f,!1);if(0<e||0==e&&!1!==f.clearWhenEmpty)return f;f.replacedWith&&(f.collapsed=!0,f.widgetNode=M("span",[f.replacedWith],"CodeMirror-widget"),c.handleMouseEvents||f.widgetNode.setAttribute("cm-ignore-events","true"),c.insertLeft&&(f.widgetNode.insertLeft=!0));if(f.collapsed){if(Ge(a,b.line,b,d,f)||b.line!=d.line&&Ge(a,d.line,b,d,f))throw Error("Inserting collapsed marker partially overlapping an existing one");Ka=!0}f.addToHistory&&Bf(a,{from:b,to:d,origin:"markText"},
a.sel,NaN);var g=b.line,h=a.cm,k;a.iter(g,d.line+1,function(l){h&&f.collapsed&&!h.options.lineWrapping&&Fa(l)==h.display.maxLine&&(k=!0);f.collapsed&&g!=b.line&&Da(l,0);var m=new Bc(f,g==b.line?b.ch:null,g==d.line?d.ch:null),n=a.cm&&a.cm.curOp;(n=n&&window.WeakSet&&(n.markedSpans||(n.markedSpans=new WeakSet)))&&n.has(l.markedSpans)?l.markedSpans.push(m):(l.markedSpans=l.markedSpans?l.markedSpans.concat([m]):[m],n&&n.add(l.markedSpans));m.marker.attachLine(l);++g});f.collapsed&&a.iter(b.line,d.line+
1,function(l){Oa(a,l)&&Da(l,0)});f.clearOnEnter&&z(f,"beforeCursorEnter",function(){return f.clear()});f.readOnly&&(Lf=!0,(a.history.done.length||a.history.undone.length)&&a.clearHistory());f.collapsed&&(f.id=++Rf,f.atomic=!0);if(h){k&&(h.curOp.updateMaxLine=!0);if(f.collapsed)ma(h,b.line,d.line+1);else if(f.className||f.startStyle||f.endStyle||f.css||f.attributes||f.title)for(c=b.line;c<=d.line;c++)Qa(h,c,"text");f.atomic&&Hf(h.doc);aa(h,"markerAdded",h,f)}return f}function bh(a,b,d,c,e){c=Xa(c);
c.shared=!1;var f=[Cb(a,b,d,c,e)],g=f[0],h=c.widgetNode;Sa(a,function(k){h&&(c.widgetNode=h.cloneNode(!0));f.push(Cb(k,C(k,b),C(k,d),c,e));for(var l=0;l<k.linked.length;++l)if(k.linked[l].isParent)return;g=J(f)});return new fc(f,g)}function Sf(a){return a.findMarks(t(a.first,0),a.clipPos(t(a.lastLine())),function(b){return b.parent})}function ch(a){for(var b=function(c){c=a[c];var e=[c.primary.doc];Sa(c.primary.doc,function(h){return e.push(h)});for(var f=0;f<c.markers.length;f++){var g=c.markers[f];
-1==ea(e,g.doc)&&(g.parent=null,c.markers.splice(f--,1))}},d=0;d<a.length;d++)b(d)}function dh(a){var b=this;Tf(b);if(!Z(b,a)&&!La(b.display,a)){la(a);G&&(Uf=+new Date);var d=eb(b,a,!0),c=a.dataTransfer.files;if(d&&!b.isReadOnly())if(c&&c.length&&window.FileReader&&window.File)for(var e=c.length,f=Array(e),g=0,h=function(){++g==e&&ba(b,function(){d=C(b.doc,d);var m={from:d,to:d,text:b.doc.splitLines(f.filter(function(n){return null!=n}).join(b.doc.lineSeparator())),origin:"paste"};Ab(b.doc,m);Ef(b.doc,
Na(C(b.doc,d),C(b.doc,Ra(m))))})()},k=function(m,n){if(b.options.allowDropFileTypes&&-1==ea(b.options.allowDropFileTypes,m.type))h();else{var p=new FileReader;p.onerror=function(){return h()};p.onload=function(){var q=p.result;/[\x00-\x08\x0e-\x1f]{2}/.test(q)||(f[n]=q);h()};p.readAsText(m)}},l=0;l<c.length;l++)k(c[l],l);else if(b.state.draggingText&&-1<b.doc.sel.contains(d))b.state.draggingText(a),setTimeout(function(){return b.display.input.focus()},20);else try{if(k=a.dataTransfer.getData("Text")){b.state.draggingText&&
!b.state.draggingText.copy&&(l=b.listSelections());Tc(b.doc,Na(d,d));if(l)for(c=0;c<l.length;++c)Bb(b.doc,"",l[c].anchor,l[c].head,"drag");b.replaceSelection(k,"around","paste");b.display.input.focus()}}catch(m){}}}function Tf(a){a.display.dragCursor&&(a.display.lineSpace.removeChild(a.display.dragCursor),a.display.dragCursor=null)}function Vf(a){if(document.getElementsByClassName){for(var b=document.getElementsByClassName("CodeMirror"),d=[],c=0;c<b.length;c++){var e=b[c].CodeMirror;e&&d.push(e)}d.length&&
d[0].operation(function(){for(var f=0;f<d.length;f++)a(d[f])})}}function eh(){var a;z(window,"resize",function(){null==a&&(a=setTimeout(function(){a=null;Vf(fh)},100))});z(window,"blur",function(){return Vf(ub)})}function fh(a){var b=a.display;b.cachedCharWidth=b.cachedTextHeight=b.cachedPaddingH=null;b.scrollbarsClipped=!1;a.setSize()}function gh(a){var b=a.split(/-(?!$)/);a=b[b.length-1];for(var d,c,e,f,g=0;g<b.length-1;g++){var h=b[g];if(/^(cmd|meta|m)$/i.test(h))f=!0;else if(/^a(lt)?$/i.test(h))d=
!0;else if(/^(c|ctrl|control)$/i.test(h))c=!0;else if(/^s(hift)?$/i.test(h))e=!0;else throw Error("Unrecognized modifier name: "+h);}d&&(a="Alt-"+a);c&&(a="Ctrl-"+a);f&&(a="Cmd-"+a);e&&(a="Shift-"+a);return a}function hh(a){var b={},d;for(d in a)if(a.hasOwnProperty(d)){var c=a[d];if(!/^(name|fallthrough|(de|at)tach)$/.test(d)){if("..."!=c)for(var e=uc(d.split(" "),gh),f=0;f<e.length;f++){if(f==e.length-1){var g=e.join(" ");var h=c}else g=e.slice(0,f+1).join(" "),h="...";var k=b[g];if(!k)b[g]=h;else if(k!=
h)throw Error("Inconsistent bindings for "+g);}delete a[d]}}for(var l in b)a[l]=b[l];return a}function Db(a,b,d,c){b=Wc(b);var e=b.call?b.call(a,c):b[a];if(!1===e)return"nothing";if("..."===e)return"multi";if(null!=e&&d(e))return"handled";if(b.fallthrough){if("[object Array]"!=Object.prototype.toString.call(b.fallthrough))return Db(a,b.fallthrough,d,c);for(e=0;e<b.fallthrough.length;e++){var f=Db(a,b.fallthrough[e],d,c);if(f)return f}}}function Wf(a){a="string"==typeof a?a:Ua[a.keyCode];return"Ctrl"==
a||"Alt"==a||"Shift"==a||"Mod"==a}function Xf(a,b,d){var c=a;b.altKey&&"Alt"!=c&&(a="Alt-"+a);(Yf?b.metaKey:b.ctrlKey)&&"Ctrl"!=c&&(a="Ctrl-"+a);(Yf?b.ctrlKey:b.metaKey)&&"Mod"!=c&&(a="Cmd-"+a);!d&&b.shiftKey&&"Shift"!=c&&(a="Shift-"+a);return a}function Zf(a,b){if(Ba&&34==a.keyCode&&a["char"])return!1;var d=Ua[a.keyCode];if(null==d||a.altGraphKey)return!1;3==a.keyCode&&a.code&&(d=a.code);return Xf(d,a,b)}function Wc(a){return"string"==typeof a?gc[a]:a}function Eb(a,b){for(var d=a.doc.sel.ranges,
c=[],e=0;e<d.length;e++){for(var f=b(d[e]);c.length&&0>=B(f.from,J(c).to);){var g=c.pop();if(0>B(g.from,f.from)){f.from=g.from;break}}c.push(f)}qa(a,function(){for(var h=c.length-1;0<=h;h--)Bb(a.doc,"",c[h].from,c[h].to,"+delete");vb(a)})}function ce(a,b,d){b=qe(a.text,b+d,d);return 0>b||b>a.text.length?null:b}function de(a,b,d){a=ce(a,b.ch,d);return null==a?null:new t(b.line,a,0>d?"after":"before")}function ee(a,b,d,c,e){if(a&&("rtl"==b.doc.direction&&(e=-e),a=Ja(d,b.doc.direction))){a=0>e?J(a):
a[0];var f=0>e==(1==a.level)?"after":"before";if(0<a.level||"rtl"==b.doc.direction){var g=cb(b,d);var h=0>e?d.text.length-1:0;var k=za(b,g,h).top;h=Hb(function(l){return za(b,g,l).top==k},0>e==(1==a.level)?a.from:a.to-1,h);"before"==f&&(h=ce(d,h,1))}else h=0>e?a.to:a.from;return new t(c,h,f)}return new t(c,0>e?d.text.length:0,0>e?"before":"after")}function ih(a,b,d,c){var e=Ja(b,a.doc.direction);if(!e)return de(b,d,c);d.ch>=b.text.length?(d.ch=b.text.length,d.sticky="before"):0>=d.ch&&(d.ch=0,d.sticky=
"after");var f=Ib(e,d.ch,d.sticky),g=e[f];if("ltr"==a.doc.direction&&0==g.level%2&&(0<c?g.to>d.ch:g.from<d.ch))return de(b,d,c);var h=function(q,r){return ce(b,q instanceof t?q.ch:q,r)},k,l=function(q){if(!a.options.lineWrapping)return{begin:0,end:b.text.length};k=k||cb(a,b);return bf(a,b,k,q)},m=l("before"==d.sticky?h(d,-1):d.ch);if("rtl"==a.doc.direction||1==g.level){var n=1==g.level==0>c,p=h(d,n?1:-1);if(null!=p&&(n?p<=g.to&&p<=m.end:p>=g.from&&p>=m.begin))return new t(d.line,p,n?"before":"after")}g=
function(q,r,u){for(var A=function(K,Q){return Q?new t(d.line,h(K,1),"before"):new t(d.line,K,"after")};0<=q&&q<e.length;q+=r){var Y=e[q],x=0<r==(1!=Y.level),P=x?u.begin:h(u.end,-1);if(Y.from<=P&&P<Y.to)return A(P,x);P=x?Y.from:h(Y.to,-1);if(u.begin<=P&&P<u.end)return A(P,x)}};if(f=g(f+c,c,m))return f;m=0<c?m.end:h(m.begin,-1);return null==m||0<c&&m==b.text.length||!(f=g(0<c?0:e.length-1,c,l(m)))?null:f}function $f(a,b){var d=w(a.doc,b),c=Fa(d);c!=d&&(b=N(c));return ee(!0,a,c,b,1)}function ag(a,b){var d=
$f(a,b.line),c=w(a.doc,d.line);a=Ja(c,a.doc.direction);return a&&0!=a[0].level?d:(c=Math.max(d.ch,c.text.search(/\S/)),t(d.line,b.line==d.line&&b.ch<=c&&b.ch?0:c,d.sticky))}function Xc(a,b,d){if("string"==typeof b&&(b=hc[b],!b))return!1;a.display.input.ensurePolled();var c=a.display.shift,e=!1;try{a.isReadOnly()&&(a.state.suppressEdits=!0),d&&(a.display.shift=!1),e=b(a)!=Yc}finally{a.display.shift=c,a.state.suppressEdits=!1}return e}function ic(a,b,d,c){var e=a.state.keySeq;if(e){if(Wf(b))return"handled";
/'$/.test(b)?a.state.keySeq=null:jh.set(50,function(){a.state.keySeq==e&&(a.state.keySeq=null,a.display.input.reset())});if(bg(a,e+" "+b,d,c))return!0}return bg(a,b,d,c)}function bg(a,b,d,c){a:{for(var e=0;e<a.state.keyMaps.length;e++){var f=Db(b,a.state.keyMaps[e],c,a);if(f){c=f;break a}}c=a.options.extraKeys&&Db(b,a.options.extraKeys,c,a)||Db(b,a.options.keyMap,c,a)}"multi"==c&&(a.state.keySeq=b);"handled"==c&&aa(a,"keyHandled",a,b,d);if("handled"==c||"multi"==c)la(d),Od(a);return!!c}function cg(a,
b){var d=Zf(b,!0);return d?b.shiftKey&&!a.state.keySeq?ic(a,"Shift-"+d,b,function(c){return Xc(a,c,!0)})||ic(a,d,b,function(c){if("string"==typeof c?/^go[A-Z]/.test(c):c.motion)return Xc(a,c)}):ic(a,d,b,function(c){return Xc(a,c)}):!1}function kh(a,b,d){return ic(a,"'"+d+"'",b,function(c){return Xc(a,c,!0)})}function dg(a){if(!a.target||a.target==this.display.input.getField())if(this.curOp.focus=ka(),!Z(this,a)){G&&11>T&&27==a.keyCode&&(a.returnValue=!1);var b=a.keyCode;this.display.shift=16==b||
a.shiftKey;var d=cg(this,a);Ba&&(fe=d?b:null,!d&&88==b&&!lh&&(ya?a.metaKey:a.ctrlKey)&&this.replaceSelection("",null,"cut"));Ma&&!ya&&!d&&46==b&&a.shiftKey&&!a.ctrlKey&&document.execCommand&&document.execCommand("cut");18!=b||/\bCodeMirror-crosshair\b/.test(this.display.lineDiv.className)||mh(this)}}function mh(a){function b(c){18!=c.keyCode&&c.altKey||(hb(d,"CodeMirror-crosshair"),sa(document,"keyup",b),sa(document,"mouseover",b))}var d=a.display.lineDiv;Wa(d,"CodeMirror-crosshair");z(document,"keyup",
b);z(document,"mouseover",b)}function eg(a){16==a.keyCode&&(this.doc.sel.shift=!1);Z(this,a)}function fg(a){if(!(a.target&&a.target!=this.display.input.getField()||La(this.display,a)||Z(this,a)||a.ctrlKey&&!a.altKey||ya&&a.metaKey)){var b=a.keyCode,d=a.charCode;if(Ba&&b==fe)fe=null,la(a);else if(!Ba||a.which&&!(10>a.which)||!cg(this,a))if(b=String.fromCharCode(null==d?b:d),"\b"!=b&&!kh(this,a,b))this.display.input.onKeyPress(a)}}function nh(a,b){var d=+new Date;if(jc&&jc.compare(d,a,b))return kc=
jc=null,"triple";if(kc&&kc.compare(d,a,b))return jc=new ge(d,a,b),kc=null,"double";kc=new ge(d,a,b);jc=null;return"single"}function gg(a){var b=this.display;if(!(Z(this,a)||b.activeTouch&&b.input.supportsTouch()))if(b.input.ensurePolled(),b.shift=a.shiftKey,La(b,a))fa||(b.scroller.draggable=!1,setTimeout(function(){return b.scroller.draggable=!0},100));else if(!Zc(this,a,"gutterClick",!0)){var d=eb(this,a),c=te(a),e=d?nh(d,c):"single";window.focus();1==c&&this.state.selectingText&&this.state.selectingText(a);
if(!d||!oh(this,c,d,e,a))if(1==c)d?ph(this,d,e,a):(a.target||a.srcElement)==b.scroller&&la(a);else if(2==c)d&&Sc(this.doc,d),setTimeout(function(){return b.input.focus()},20);else if(3==c)if(he)this.display.input.onContextMenu(a);else Qd(this)}}function oh(a,b,d,c,e){var f="Click";"double"==c?f="Double"+f:"triple"==c&&(f="Triple"+f);return ic(a,Xf((1==b?"Left":2==b?"Middle":"Right")+f,e),e,function(g){"string"==typeof g&&(g=hc[g]);if(!g)return!1;var h=!1;try{a.isReadOnly()&&(a.state.suppressEdits=
!0),h=g(a,d)!=Yc}finally{a.state.suppressEdits=!1}return h})}function ph(a,b,d,c){G?setTimeout(fd(gf,a),0):a.curOp.focus=ka();var e=a.getOption("configureMouse");e=e?e(a,d,c):{};null==e.unit&&(e.unit=(qh?c.shiftKey&&c.metaKey:c.altKey)?"rectangle":"single"==d?"char":"double"==d?"word":"line");if(null==e.extend||a.doc.extend)e.extend=a.doc.extend||c.shiftKey;null==e.addNew&&(e.addNew=ya?c.metaKey:c.ctrlKey);null==e.moveOnDrag&&(e.moveOnDrag=!(ya?c.altKey:c.ctrlKey));var f=a.doc.sel,g;a.options.dragDrop&&
rh&&!a.isReadOnly()&&"single"==d&&-1<(g=f.contains(b))&&(0>B((g=f.ranges[g]).from(),b)||0<b.xRel)&&(0<B(g.to(),b)||0>b.xRel)?sh(a,c,b,e):th(a,c,b,e)}function sh(a,b,d,c){var e=a.display,f=!1,g=ba(a,function(l){fa&&(e.scroller.draggable=!1);a.state.draggingText=!1;a.state.delayingBlurEvent&&(a.hasFocus()?a.state.delayingBlurEvent=!1:Qd(a));sa(e.wrapper.ownerDocument,"mouseup",g);sa(e.wrapper.ownerDocument,"mousemove",h);sa(e.scroller,"dragstart",k);sa(e.scroller,"drop",g);f||(la(l),c.addNew||Sc(a.doc,
d,null,null,c.extend),fa&&!$c||G&&9==T?setTimeout(function(){e.wrapper.ownerDocument.body.focus({preventScroll:!0});e.input.focus()},20):e.input.focus())}),h=function(l){f=f||10<=Math.abs(b.clientX-l.clientX)+Math.abs(b.clientY-l.clientY)},k=function(){return f=!0};fa&&(e.scroller.draggable=!0);a.state.draggingText=g;g.copy=!c.moveOnDrag;z(e.wrapper.ownerDocument,"mouseup",g);z(e.wrapper.ownerDocument,"mousemove",h);z(e.scroller,"dragstart",k);z(e.scroller,"drop",g);a.state.delayingBlurEvent=!0;setTimeout(function(){return e.input.focus()},
20);e.scroller.dragDrop&&e.scroller.dragDrop()}function hg(a,b,d){if("char"==d)return new I(b,b);if("word"==d)return a.findWordAt(b);if("line"==d)return new I(t(b.line,0),C(a.doc,t(b.line+1,0)));a=d(a,b);return new I(a.from,a.to)}function th(a,b,d,c){function e(x){if(0!=B(q,x))if(q=x,"rectangle"==c.unit){var P=[],K=a.options.tabSize,Q=wa(w(k,d.line).text,d.ch,K),S=wa(w(k,x.line).text,x.ch,K),F=Math.min(Q,S);Q=Math.max(Q,S);S=Math.min(d.line,x.line);for(var R=Math.min(a.lastLine(),Math.max(d.line,
x.line));S<=R;S++){var H=w(k,S).text,L=gd(H,F,K);F==Q?P.push(new I(t(S,L),t(S,L))):H.length>L&&P.push(new I(t(S,L),t(S,gd(H,Q,K))))}P.length||P.push(new I(d,d));da(k,Ca(a,l.ranges.slice(0,n).concat(P),n),{origin:"*mouse",scroll:!1});a.scrollIntoView(x)}else P=p,F=hg(a,x,c.unit),x=P.anchor,0<B(F.anchor,x)?(K=F.head,x=zc(P.from(),F.anchor)):(K=F.anchor,x=yc(P.to(),F.head)),P=l.ranges.slice(0),P[n]=uh(a,new I(C(k,x),K)),da(k,Ca(a,P,n),ie)}function f(x){var P=++u,K=eb(a,x,!0,"rectangle"==c.unit);if(K)if(0!=
B(K,q)){a.curOp.focus=ka();e(K);var Q=Lc(h,k);(K.line>=Q.to||K.line<Q.from)&&setTimeout(ba(a,function(){u==P&&f(x)}),150)}else{var S=x.clientY<r.top?-20:x.clientY>r.bottom?20:0;S&&setTimeout(ba(a,function(){u==P&&(h.scroller.scrollTop+=S,f(x))}),50)}}function g(x){a.state.selectingText=!1;u=Infinity;x&&(la(x),h.input.focus());sa(h.wrapper.ownerDocument,"mousemove",A);sa(h.wrapper.ownerDocument,"mouseup",Y);k.history.lastSelOrigin=null}G&&Qd(a);var h=a.display,k=a.doc;la(b);var l=k.sel,m=l.ranges;
if(c.addNew&&!c.extend){var n=k.sel.contains(d);var p=-1<n?m[n]:new I(d,d)}else p=k.sel.primary(),n=k.sel.primIndex;"rectangle"==c.unit?(c.addNew||(p=new I(d,d)),d=eb(a,b,!0,!0),n=-1):(b=hg(a,d,c.unit),p=c.extend?ae(p,b.anchor,b.head,c.extend):b);c.addNew?-1==n?(n=m.length,da(k,Ca(a,m.concat([p]),n),{scroll:!1,origin:"*mouse"})):1<m.length&&m[n].empty()&&"char"==c.unit&&!c.extend?(da(k,Ca(a,m.slice(0,n).concat(m.slice(n+1)),0),{scroll:!1,origin:"*mouse"}),l=k.sel):be(k,n,p,ie):(n=0,da(k,new va([p],
0),ie),l=k.sel);var q=d,r=h.wrapper.getBoundingClientRect(),u=0,A=ba(a,function(x){0!==x.buttons&&te(x)?f(x):g(x)}),Y=ba(a,g);a.state.selectingText=Y;z(h.wrapper.ownerDocument,"mousemove",A);z(h.wrapper.ownerDocument,"mouseup",Y)}function uh(a,b){var d=b.anchor,c=b.head,e=w(a.doc,d.line);if(0==B(d,c)&&d.sticky==c.sticky)return b;e=Ja(e);if(!e)return b;var f=Ib(e,d.ch,d.sticky),g=e[f];if(g.from!=d.ch&&g.to!=d.ch)return b;var h=f+(g.from==d.ch==(1!=g.level)?0:1);if(0==h||h==e.length)return b;c.line!=
d.line?a=0<(c.line-d.line)*("ltr"==a.doc.direction?1:-1):(a=Ib(e,c.ch,c.sticky),f=a-f||(c.ch-d.ch)*(1==g.level?-1:1),a=a==h-1||a==h?0>f:0<f);e=e[h+(a?-1:0)];e=(h=a==(1==e.level))?e.from:e.to;h=h?"after":"before";return d.ch==e&&d.sticky==h?b:new I(new t(d.line,e,h),c)}function Zc(a,b,d,c){if(b.touches){var e=b.touches[0].clientX;var f=b.touches[0].clientY}else try{e=b.clientX,f=b.clientY}catch(k){return!1}if(e>=Math.floor(a.display.gutters.getBoundingClientRect().right))return!1;c&&la(b);c=a.display;
var g=c.lineDiv.getBoundingClientRect();if(f>g.bottom||!xa(a,d))return kd(b);f-=g.top-c.viewOffset;for(g=0;g<a.display.gutterSpecs.length;++g){var h=c.gutters.childNodes[g];if(h&&h.getBoundingClientRect().right>=e)return e=$a(a.doc,f),W(a,d,a,e,a.display.gutterSpecs[g].className,b),kd(b)}}function ig(a,b){var d;(d=La(a.display,b))||(d=xa(a,"gutterContextMenu")?Zc(a,b,"gutterContextMenu",!1):!1);if(!d&&!Z(a,b,"contextmenu")&&!he)a.display.input.onContextMenu(b)}function jg(a){a.display.wrapper.className=
a.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+a.options.theme.replace(/(^|\s)\s*/g," cm-s-");Sb(a)}function vh(a,b,d){!b!=!(d&&d!=Fb)&&(d=a.display.dragFunctions,b=b?z:sa,b(a.display.scroller,"dragstart",d.start),b(a.display.scroller,"dragenter",d.enter),b(a.display.scroller,"dragover",d.over),b(a.display.scroller,"dragleave",d.leave),b(a.display.scroller,"drop",d.drop))}function wh(a){a.options.lineWrapping?(Wa(a.display.wrapper,"CodeMirror-wrap"),a.display.sizer.style.minWidth="",a.display.sizerWidth=
null):(hb(a.display.wrapper,"CodeMirror-wrap"),yd(a));Md(a);ma(a);Sb(a);setTimeout(function(){return wb(a)},100)}function U(a,b){var d=this;if(!(this instanceof U))return new U(a,b);this.options=b=b?Xa(b):{};Xa(kg,b,!1);var c=b.value;"string"==typeof c?c=new oa(c,b.mode,null,b.lineSeparator,b.direction):b.mode&&(c.modeOption=b.mode);this.doc=c;var e=new U.inputStyles[b.inputStyle](this);a=this.display=new Wg(a,c,e,b);a.wrapper.CodeMirror=this;jg(this);b.lineWrapping&&(this.display.wrapper.className+=
" CodeMirror-wrap");nf(this);this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new Va,keySeq:null,specialChars:null};b.autofocus&&!Zb&&a.input.focus();G&&11>T&&setTimeout(function(){return d.display.input.reset(!0)},20);xh(this);lg||(eh(),lg=!0);jb(this);this.curOp.forceUpdate=!0;xf(this,c);b.autofocus&&!Zb||this.hasFocus()?setTimeout(function(){d.hasFocus()&&!d.state.focused&&
Pd(d)},20):ub(this);for(var f in ad)if(ad.hasOwnProperty(f))ad[f](this,b[f],Fb);qf(this);b.finishInit&&b.finishInit(this);for(c=0;c<je.length;++c)je[c](this);kb(this);fa&&b.lineWrapping&&"optimizelegibility"==getComputedStyle(a.lineDiv).textRendering&&(a.lineDiv.style.textRendering="auto")}function xh(a){function b(){c.activeTouch&&(e=setTimeout(function(){return c.activeTouch=null},1E3),f=c.activeTouch,f.end=+new Date)}function d(h,k){if(null==k.left)return!0;var l=k.left-h.left;h=k.top-h.top;return 400<
l*l+h*h}var c=a.display;z(c.scroller,"mousedown",ba(a,gg));G&&11>T?z(c.scroller,"dblclick",ba(a,function(h){if(!Z(a,h)){var k=eb(a,h);!k||Zc(a,h,"gutterClick",!0)||La(a.display,h)||(la(h),h=a.findWordAt(k),Sc(a.doc,h.anchor,h.head))}})):z(c.scroller,"dblclick",function(h){return Z(a,h)||la(h)});z(c.scroller,"contextmenu",function(h){return ig(a,h)});z(c.input.getField(),"contextmenu",function(h){c.scroller.contains(h.target)||ig(a,h)});var e,f={end:0};z(c.scroller,"touchstart",function(h){var k;if(k=
!Z(a,h))1!=h.touches.length?k=!1:(k=h.touches[0],k=1>=k.radiusX&&1>=k.radiusY),k=!k;k&&!Zc(a,h,"gutterClick",!0)&&(c.input.ensurePolled(),clearTimeout(e),k=+new Date,c.activeTouch={start:k,moved:!1,prev:300>=k-f.end?f:null},1==h.touches.length&&(c.activeTouch.left=h.touches[0].pageX,c.activeTouch.top=h.touches[0].pageY))});z(c.scroller,"touchmove",function(){c.activeTouch&&(c.activeTouch.moved=!0)});z(c.scroller,"touchend",function(h){var k=c.activeTouch;if(k&&!La(c,h)&&null!=k.left&&!k.moved&&300>
new Date-k.start){var l=a.coordsChar(c.activeTouch,"page");k=!k.prev||d(k,k.prev)?new I(l,l):!k.prev.prev||d(k,k.prev.prev)?a.findWordAt(l):new I(t(l.line,0),C(a.doc,t(l.line+1,0)));a.setSelection(k.anchor,k.head);a.focus();la(h)}b()});z(c.scroller,"touchcancel",b);z(c.scroller,"scroll",function(){c.scroller.clientHeight&&(Vb(a,c.scroller.scrollTop),ib(a,c.scroller.scrollLeft,!0),W(a,"scroll",a))});z(c.scroller,"mousewheel",function(h){return tf(a,h)});z(c.scroller,"DOMMouseScroll",function(h){return tf(a,
h)});z(c.wrapper,"scroll",function(){return c.wrapper.scrollTop=c.wrapper.scrollLeft=0});c.dragFunctions={enter:function(h){Z(a,h)||Kb(h)},over:function(h){if(!Z(a,h)){var k=eb(a,h);if(k){var l=document.createDocumentFragment();ff(a,k,l);a.display.dragCursor||(a.display.dragCursor=v("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),a.display.lineSpace.insertBefore(a.display.dragCursor,a.display.cursorDiv));D(a.display.dragCursor,l)}Kb(h)}},start:function(h){if(G&&(!a.state.draggingText||100>
+new Date-Uf))Kb(h);else if(!Z(a,h)&&!La(a.display,h)&&(h.dataTransfer.setData("Text",a.getSelection()),h.dataTransfer.effectAllowed="copyMove",h.dataTransfer.setDragImage&&!$c)){var k=v("img",null,null,"position: fixed; left: 0; top: 0;");k.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";Ba&&(k.width=k.height=1,a.display.wrapper.appendChild(k),k._top=k.offsetTop);h.dataTransfer.setDragImage(k,0,0);Ba&&k.parentNode.removeChild(k)}},drop:ba(a,dh),leave:function(h){Z(a,
h)||Tf(a)}};var g=c.input.getField();z(g,"keyup",function(h){return eg.call(a,h)});z(g,"keydown",ba(a,dg));z(g,"keypress",ba(a,fg));z(g,"focus",function(h){return Pd(a,h)});z(g,"blur",function(h){return ub(a,h)})}function lc(a,b,d,c){var e=a.doc,f;null==d&&(d="add");"smart"==d&&(e.mode.indent?f=Mb(a,b).state:d="prev");var g=a.options.tabSize,h=w(e,b),k=wa(h.text,null,g);h.stateAfter&&(h.stateAfter=null);var l=h.text.match(/^\s*/)[0];if(!c&&!/\S/.test(h.text)){var m=0;d="not"}else if("smart"==d&&(m=
e.mode.indent(f,h.text.slice(l.length),h.text),m==Yc||150<m)){if(!c)return;d="prev"}"prev"==d?m=b>e.first?wa(w(e,b-1).text,null,g):0:"add"==d?m=k+a.options.indentUnit:"subtract"==d?m=k-a.options.indentUnit:"number"==typeof d&&(m=k+d);m=Math.max(0,m);d="";c=0;if(a.options.indentWithTabs)for(a=Math.floor(m/g);a;--a)c+=g,d+="\t";c<m&&(d+=hd(m-c));if(d!=l)return Bb(e,d,t(b,0),t(b,l.length),"+input"),h.stateAfter=null,!0;for(g=0;g<e.sel.ranges.length;g++)if(h=e.sel.ranges[g],h.head.line==b&&h.head.ch<
l.length){b=t(b,l.length);be(e,g,new I(b,b));break}}function ke(a,b,d,c,e){var f=a.doc;a.display.shift=!1;c||(c=f.sel);var g=+new Date-200,h="paste"==e||a.state.pasteIncoming>g,k=le(b),l=null;if(h&&1<c.ranges.length)if(ra&&ra.text.join("\n")==b){if(0==c.ranges.length%ra.text.length){l=[];for(var m=0;m<ra.text.length;m++)l.push(f.splitLines(ra.text[m]))}}else k.length==c.ranges.length&&a.options.pasteLinesPerSelection&&(l=uc(k,function(u){return[u]}));m=a.curOp.updateInput;for(var n=c.ranges.length-
1;0<=n;n--){var p=c.ranges[n],q=p.from(),r=p.to();p.empty()&&(d&&0<d?q=t(q.line,q.ch-d):a.state.overwrite&&!h?r=t(r.line,Math.min(w(f,r.line).text.length,r.ch+J(k).length)):h&&ra&&ra.lineWise&&ra.text.join("\n")==k.join("\n")&&(q=r=t(q.line,0)));p={from:q,to:r,text:l?l[n%l.length]:k,origin:e||(h?"paste":a.state.cutIncoming>g?"cut":"+input")};Ab(a.doc,p);aa(a,"inputRead",a,p)}b&&!h&&mg(a,b);vb(a);2>a.curOp.updateInput&&(a.curOp.updateInput=m);a.curOp.typing=!0;a.state.pasteIncoming=a.state.cutIncoming=
-1}function ng(a,b){var d=a.clipboardData&&a.clipboardData.getData("Text");if(d)return a.preventDefault(),b.isReadOnly()||b.options.disableInput||qa(b,function(){return ke(b,d,0,null,"paste")}),!0}function mg(a,b){if(a.options.electricChars&&a.options.smartIndent)for(var d=a.doc.sel,c=d.ranges.length-1;0<=c;c--){var e=d.ranges[c];if(!(100<e.head.ch||c&&d.ranges[c-1].head.line==e.head.line)){var f=a.getModeAt(e.head),g=!1;if(f.electricChars)for(var h=0;h<f.electricChars.length;h++){if(-1<b.indexOf(f.electricChars.charAt(h))){g=
lc(a,e.head.line,"smart");break}}else f.electricInput&&f.electricInput.test(w(a.doc,e.head.line).text.slice(0,e.head.ch))&&(g=lc(a,e.head.line,"smart"));g&&aa(a,"electricInput",a,e.head.line)}}}function og(a){for(var b=[],d=[],c=0;c<a.doc.sel.ranges.length;c++){var e=a.doc.sel.ranges[c].head.line;e={anchor:t(e,0),head:t(e+1,0)};d.push(e);b.push(a.getRange(e.anchor,e.head))}return{text:b,ranges:d}}function pg(a,b,d,c){a.setAttribute("autocorrect",d?"":"off");a.setAttribute("autocapitalize",c?"":"off");
a.setAttribute("spellcheck",!!b)}function qg(){var a=v("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),b=v("div",[a],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");fa?a.style.width="1000px":a.setAttribute("wrap","off");mc&&(a.style.border="1px solid black");pg(a);return b}function me(a,b,d,c,e){function f(u){if("codepoint"==c){var A=k.text.charCodeAt(b.ch+(0<d?0:-1));A=isNaN(A)?null:new t(b.line,Math.max(0,Math.min(k.text.length,
b.ch+d*((0<d?55296<=A&&56320>A:56320<=A&&57343>A)?2:1))),-d)}else A=e?ih(a.cm,k,b,d):de(k,b,d);if(null==A){if(u=!u)u=b.line+l,u<a.first||u>=a.first+a.size?u=!1:(b=new t(u,b.ch,b.sticky),u=k=w(a,u));if(u)b=ee(e,a.cm,k,b.line,l);else return!1}else b=A;return!0}var g=b,h=d,k=w(a,b.line),l=e&&"rtl"==a.direction?-d:d;if("char"==c||"codepoint"==c)f();else if("column"==c)f(!0);else if("word"==c||"group"==c)for(var m=null,n="group"==c,p=a.cm&&a.cm.getHelper(b,"wordChars"),q=!0;!(0>d)||f(!q);q=!1){var r=k.text.charAt(b.ch)||
"\n";r=vc(r,p)?"w":n&&"\n"==r?"n":!n||/\s/.test(r)?null:"p";!n||q||r||(r="s");if(m&&m!=r){0>d&&(d=1,f(),b.sticky="after");break}r&&(m=r);if(0<d&&!f(!q))break}h=Uc(a,b,g,h,!0);qd(g,h)&&(h.hitSide=!0);return h}function rg(a,b,d,c){var e=a.doc,f=b.left;if("page"==c){var g=Math.max(Math.min(a.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight)-.5*tb(a.display),3);g=(0<d?b.bottom:b.top)+d*g}else"line"==c&&(g=0<d?b.bottom+3:b.top-3);for(;;){b=Jd(a,f,g);if(!b.outside)break;
if(0>d?0>=g:g>=e.height){b.hitSide=!0;break}g+=5*d}return b}function sg(a,b){var d=Ed(a,b.line);if(!d||d.hidden)return null;var c=w(a.doc,b.line);d=Se(d,c,b.line);a=Ja(c,a.doc.direction);c="left";a&&(c=Ib(a,b.ch)%2?"right":"left");b=Te(d.map,b.ch,c);b.offset="right"==b.collapse?b.end:b.start;return b}function yh(a){for(;a;a=a.parentNode)if(/CodeMirror-gutter-wrapper/.test(a.className))return!0;return!1}function Gb(a,b){b&&(a.bad=!0);return a}function zh(a,b,d,c,e){function f(q){return function(r){return r.id==
q}}function g(){m&&(l+=n,p&&(l+=n),m=p=!1)}function h(q){q&&(g(),l+=q)}function k(q){if(1==q.nodeType){var r=q.getAttribute("cm-text");if(r)h(r);else{r=q.getAttribute("cm-marker");var u;if(r)q=a.findMarks(t(c,0),t(e+1,0),f(+r)),q.length&&(u=q[0].find(0))&&h(Za(a.doc,u.from,u.to).join(n));else if("false"!=q.getAttribute("contenteditable")&&(u=/^(pre|div|p|li|table|br)$/i.test(q.nodeName),/^br$/i.test(q.nodeName)||0!=q.textContent.length)){u&&g();for(r=0;r<q.childNodes.length;r++)k(q.childNodes[r]);
/^(pre|p)$/i.test(q.nodeName)&&(p=!0);u&&(m=!0)}}}else 3==q.nodeType&&h(q.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(var l="",m=!1,n=a.doc.lineSeparator(),p=!1;;){k(b);if(b==d)break;b=b.nextSibling;p=!1}return l}function bd(a,b,d){if(b==a.display.lineDiv){var c=a.display.lineDiv.childNodes[d];if(!c)return Gb(a.clipPos(t(a.display.viewTo-1)),!0);b=null;d=0}else for(c=b;;c=c.parentNode){if(!c||c==a.display.lineDiv)return null;if(c.parentNode&&c.parentNode==a.display.lineDiv)break}for(var e=
0;e<a.display.view.length;e++){var f=a.display.view[e];if(f.node==c)return Ah(f,b,d)}}function Ah(a,b,d){function c(m,n,p){for(var q=-1;q<(l?l.length:0);q++)for(var r=0>q?k.map:l[q],u=0;u<r.length;u+=3){var A=r[u+2];if(A==m||A==n){n=N(0>q?a.line:a.rest[q]);q=r[u]+p;if(0>p||A!=m)q=r[u+(p?1:0)];return t(n,q)}}}var e=a.text.firstChild,f=!1;if(!b||!ja(e,b))return Gb(t(N(a.line),0),!0);if(b==e&&(f=!0,b=e.childNodes[d],d=0,!b))return d=a.rest?J(a.rest):a.line,Gb(t(N(d),d.text.length),f);var g=3==b.nodeType?
b:null,h=b;g||1!=b.childNodes.length||3!=b.firstChild.nodeType||(g=b.firstChild,d&&(d=g.nodeValue.length));for(;h.parentNode!=e;)h=h.parentNode;var k=a.measure,l=k.maps;if(b=c(g,h,d))return Gb(b,f);e=h.nextSibling;for(g=g?g.nodeValue.length-d:0;e;e=e.nextSibling){if(b=c(e,e.firstChild,0))return Gb(t(b.line,b.ch-g),f);g+=e.textContent.length}for(h=h.previousSibling;h;h=h.previousSibling){if(b=c(h,h.firstChild,-1))return Gb(t(b.line,b.ch+d),f);d+=h.textContent.length}}var pa=navigator.userAgent,tg=
navigator.platform,Ma=/gecko\/\d/i.test(pa),ug=/MSIE \d/.test(pa),vg=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(pa),cd=/Edge\/(\d+)/.exec(pa),G=ug||vg||cd,T=G&&(ug?document.documentMode||6:+(cd||vg)[1]),fa=!cd&&/WebKit\//.test(pa),Bh=fa&&/Qt\/\d+\.\d+/.test(pa),Ec=!cd&&/Chrome\//.test(pa),Ba=/Opera\//.test(pa),$c=/Apple Computer/.test(navigator.vendor),Ch=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(pa),Tg=/PhantomJS/.test(pa),mc=$c&&(/Mobile\/\w+/.test(pa)||2<navigator.maxTouchPoints),Fc=/Android/.test(pa),
Zb=mc||Fc||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(pa),ya=mc||/Mac/.test(tg),qh=/\bCrOS\b/.test(pa),Dh=/win/i.test(tg),lb=Ba&&pa.match(/Version\/(\d*\.\d*)/);lb&&(lb=Number(lb[1]));lb&&15<=lb&&(Ba=!1,fa=!0);var Yf=ya&&(Bh||Ba&&(null==lb||12.11>lb)),he=Ma||G&&9<=T,hb=function(a,b){var d=a.className;if(b=y(b).exec(d)){var c=d.slice(b.index+b[0].length);a.className=d.slice(0,b.index)+(c?b[1]+c:"")}};var Ob=document.createRange?function(a,b,d,c){var e=document.createRange();e.setEnd(c||
a,d);e.setStart(a,b);return e}:function(a,b,d){var c=document.body.createTextRange();try{c.moveToElementText(a.parentNode)}catch(e){return c}c.collapse(!0);c.moveEnd("character",d);c.moveStart("character",b);return c};var nc=function(a){a.select()};mc?nc=function(a){a.selectionStart=0;a.selectionEnd=a.value.length}:G&&(nc=function(a){try{a.select()}catch(b){}});var Va=function(){this.f=this.id=null;this.time=0;this.handler=fd(this.onTimeout,this)};Va.prototype.onTimeout=function(a){a.id=0;a.time<=
+new Date?a.f():setTimeout(a.handler,a.time-+new Date)};Va.prototype.set=function(a,b){this.f=b;b=+new Date+a;if(!this.id||b<this.time)clearTimeout(this.id),this.id=setTimeout(this.handler,a),this.time=b};var Yc={toString:function(){return"CodeMirror.Pass"}},Ia={scroll:!1},ie={origin:"*mouse"},oc={origin:"+move"},tc=[""],xg=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,yg=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
Jb=null,Ag=function(){function a(g,h,k){this.level=g;this.from=h;this.to=k}var b=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,d=/[stwN]/,c=/[LRr]/,e=/[Lb1n]/,f=/[1n]/;return function(g,h){var k="ltr"==h?"L":"R";if(0==g.length||"ltr"==h&&!b.test(g))return!1;for(var l=g.length,m=[],n=0;n<l;++n){var p=m,q=p.push;var r=g.charCodeAt(n);r=247>=r?"bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(r):
1424<=r&&1524>=r?"R":1536<=r&&1785>=r?"nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(r-1536):1774<=r&&2220>=r?"r":8192<=r&&8203>=r?"w":8204==r?"b":"L";q.call(p,r)}n=0;for(p=k;n<l;++n)q=m[n],"m"==q?m[n]=p:p=q;n=0;for(p=k;n<l;++n)q=m[n],"1"==q&&"r"==p?m[n]="n":c.test(q)&&(p=q,"r"==q&&(m[n]=
"R"));n=1;for(p=m[0];n<l-1;++n)q=m[n],"+"==q&&"1"==p&&"1"==m[n+1]?m[n]="1":","!=q||p!=m[n+1]||"1"!=p&&"n"!=p||(m[n]=p),p=q;for(n=0;n<l;++n)if(p=m[n],","==p)m[n]="N";else if("%"==p){for(p=n+1;p<l&&"%"==m[p];++p);for(q=n&&"!"==m[n-1]||p<l&&"1"==m[p]?"1":"N";n<p;++n)m[n]=q;n=p-1}n=0;for(p=k;n<l;++n)q=m[n],"L"==p&&"1"==q?m[n]="L":c.test(q)&&(p=q);for(p=0;p<l;++p)if(d.test(m[p])){for(n=p+1;n<l&&d.test(m[n]);++n);q="L"==(p?m[p-1]:k);for(q=q==("L"==(n<l?m[n]:k))?q?"L":"R":k;p<n;++p)m[p]=q;p=n-1}k=[];var u;
for(n=0;n<l;)if(e.test(m[n])){p=n;for(++n;n<l&&e.test(m[n]);++n);k.push(new a(0,p,n))}else{var A=n;p=k.length;q="rtl"==h?1:0;for(++n;n<l&&"L"!=m[n];++n);for(r=A;r<n;)if(f.test(m[r])){A<r&&(k.splice(p,0,new a(1,A,r)),p+=q);A=r;for(++r;r<n&&f.test(m[r]);++r);k.splice(p,0,new a(2,A,r));p+=q;A=r}else++r;A<n&&k.splice(p,0,new a(1,A,n))}"ltr"==h&&(1==k[0].level&&(u=g.match(/^\s+/))&&(k[0].from=u[0].length,k.unshift(new a(0,0,u[0].length))),1==J(k).level&&(u=g.match(/\s+$/))&&(J(k).to-=u[0].length,k.push(new a(0,
l-u[0].length,l))));return"rtl"==h?k.reverse():k}}(),wc=[],z=function(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent?a.attachEvent("on"+b,d):(a=a._handlers||(a._handlers={}),a[b]=(a[b]||wc).concat(d))},rh=function(){if(G&&9>T)return!1;var a=v("div");return"draggable"in a||"dragDrop"in a}(),Ad,zd,le=3!="\n\nb".split(/\n/).length?function(a){for(var b=0,d=[],c=a.length;b<=c;){var e=a.indexOf("\n",b);-1==e&&(e=a.length);var f=a.slice(b,"\r"==a.charAt(e-1)?e-1:e),g=f.indexOf("\r");
-1!=g?(d.push(f.slice(0,g)),b+=g+1):(d.push(f),b=e+1)}return d}:function(a){return a.split(/\r\n?|\n/)},Eh=window.getSelection?function(a){try{return a.selectionStart!=a.selectionEnd}catch(b){return!1}}:function(a){try{var b=a.ownerDocument.selection.createRange()}catch(d){}return b&&b.parentElement()==a?0!=b.compareEndPoints("StartToEnd",b):!1},lh=function(){var a=v("div");if("oncopy"in a)return!0;a.setAttribute("oncopy","return;");return"function"==typeof a.oncopy}(),Gd=null,ld={},ob={},pb={},X=
function(a,b,d){this.pos=this.start=0;this.string=a;this.tabSize=b||8;this.lineStart=this.lastColumnPos=this.lastColumnValue=0;this.lineOracle=d};X.prototype.eol=function(){return this.pos>=this.string.length};X.prototype.sol=function(){return this.pos==this.lineStart};X.prototype.peek=function(){return this.string.charAt(this.pos)||void 0};X.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)};X.prototype.eat=function(a){var b=this.string.charAt(this.pos);
if("string"==typeof a?b==a:b&&(a.test?a.test(b):a(b)))return++this.pos,b};X.prototype.eatWhile=function(a){for(var b=this.pos;this.eat(a););return this.pos>b};X.prototype.eatSpace=function(){for(var a=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>a};X.prototype.skipToEnd=function(){this.pos=this.string.length};X.prototype.skipTo=function(a){a=this.string.indexOf(a,this.pos);if(-1<a)return this.pos=a,!0};X.prototype.backUp=function(a){this.pos-=a};X.prototype.column=
function(){this.lastColumnPos<this.start&&(this.lastColumnValue=wa(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start);return this.lastColumnValue-(this.lineStart?wa(this.string,this.lineStart,this.tabSize):0)};X.prototype.indentation=function(){return wa(this.string,null,this.tabSize)-(this.lineStart?wa(this.string,this.lineStart,this.tabSize):0)};X.prototype.match=function(a,b,d){if("string"==typeof a){var c=function(f){return d?f.toLowerCase():
f},e=this.string.substr(this.pos,a.length);if(c(e)==c(a))return!1!==b&&(this.pos+=a.length),!0}else{if((a=this.string.slice(this.pos).match(a))&&0<a.index)return null;a&&!1!==b&&(this.pos+=a[0].length);return a}};X.prototype.current=function(){return this.string.slice(this.start,this.pos)};X.prototype.hideFirstChars=function(a,b){this.lineStart+=a;try{return b()}finally{this.lineStart-=a}};X.prototype.lookAhead=function(a){var b=this.lineOracle;return b&&b.lookAhead(a)};X.prototype.baseToken=function(){var a=
this.lineOracle;return a&&a.baseToken(this.pos)};var Ac=function(a,b){this.state=a;this.lookAhead=b},Ea=function(a,b,d,c){this.state=b;this.doc=a;this.line=d;this.maxLookAhead=c||0;this.baseTokens=null;this.baseTokenPos=1};Ea.prototype.lookAhead=function(a){var b=this.doc.getLine(this.line+a);null!=b&&a>this.maxLookAhead&&(this.maxLookAhead=a);return b};Ea.prototype.baseToken=function(a){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=a;)this.baseTokenPos+=2;var b=this.baseTokens[this.baseTokenPos+
1];return{type:b&&b.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-a}};Ea.prototype.nextLine=function(){this.line++;0<this.maxLookAhead&&this.maxLookAhead--};Ea.fromSaved=function(a,b,d){return b instanceof Ac?new Ea(a,Ya(a.mode,b.state),d,b.lookAhead):new Ea(a,Ya(a.mode,b),d)};Ea.prototype.save=function(a){a=!1!==a?Ya(this.doc.mode,this.state):this.state;return 0<this.maxLookAhead?new Ac(a,this.maxLookAhead):a};var Be=function(a,b,d){this.start=a.start;this.end=a.pos;this.string=
a.current();this.type=b||null;this.state=d},Lf=!1,Ka=!1,xb=function(a,b,d){this.text=a;Fe(this,b);this.height=d?d(this):1};xb.prototype.lineNo=function(){return N(this)};nb(xb);var Hg={},Gg={},rb=null,Pb=null,Ue={left:0,right:0,top:0,bottom:0},db,mb=function(a,b,d){this.cm=d;var c=this.vert=v("div",[v("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),e=this.horiz=v("div",[v("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");c.tabIndex=e.tabIndex=-1;a(c);a(e);z(c,
"scroll",function(){c.clientHeight&&b(c.scrollTop,"vertical")});z(e,"scroll",function(){e.clientWidth&&b(e.scrollLeft,"horizontal")});this.checkedZeroWidth=!1;G&&8>T&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};mb.prototype.update=function(a){var b=a.scrollWidth>a.clientWidth+1,d=a.scrollHeight>a.clientHeight+1,c=a.nativeBarWidth;d?(this.vert.style.display="block",this.vert.style.bottom=b?c+"px":"0",this.vert.firstChild.style.height=Math.max(0,a.scrollHeight-a.clientHeight+(a.viewHeight-
(b?c:0)))+"px"):(this.vert.style.display="",this.vert.firstChild.style.height="0");b?(this.horiz.style.display="block",this.horiz.style.right=d?c+"px":"0",this.horiz.style.left=a.barLeft+"px",this.horiz.firstChild.style.width=Math.max(0,a.scrollWidth-a.clientWidth+(a.viewWidth-a.barLeft-(d?c:0)))+"px"):(this.horiz.style.display="",this.horiz.firstChild.style.width="0");!this.checkedZeroWidth&&0<a.clientHeight&&(0==c&&this.zeroWidthHack(),this.checkedZeroWidth=!0);return{right:d?c:0,bottom:b?c:0}};
mb.prototype.setScrollLeft=function(a){this.horiz.scrollLeft!=a&&(this.horiz.scrollLeft=a);this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")};mb.prototype.setScrollTop=function(a){this.vert.scrollTop!=a&&(this.vert.scrollTop=a);this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")};mb.prototype.zeroWidthHack=function(){this.horiz.style.height=this.vert.style.width=ya&&!Ch?"12px":"18px";this.horiz.style.pointerEvents=this.vert.style.pointerEvents=
"none";this.disableHoriz=new Va;this.disableVert=new Va};mb.prototype.enableZeroWidthBar=function(a,b,d){function c(){var e=a.getBoundingClientRect();("vert"==d?document.elementFromPoint(e.right-1,(e.top+e.bottom)/2):document.elementFromPoint((e.right+e.left)/2,e.bottom-1))!=a?a.style.pointerEvents="none":b.set(1E3,c)}a.style.pointerEvents="auto";b.set(1E3,c)};mb.prototype.clear=function(){var a=this.horiz.parentNode;a.removeChild(this.horiz);a.removeChild(this.vert)};var pc=function(){};pc.prototype.update=
function(){return{bottom:0,right:0}};pc.prototype.setScrollLeft=function(){};pc.prototype.setScrollTop=function(){};pc.prototype.clear=function(){};var of={"native":mb,"null":pc},Sg=0,Oc=function(a,b,d){var c=a.display;this.viewport=b;this.visible=Lc(c,a.doc,b);this.editorIsHidden=!c.wrapper.offsetWidth;this.wrapperHeight=c.wrapper.clientHeight;this.wrapperWidth=c.wrapper.clientWidth;this.oldDisplayWidth=ab(a);this.force=d;this.dims=Fd(a);this.events=[]};Oc.prototype.signal=function(a,b){xa(a,b)&&
this.events.push(arguments)};Oc.prototype.finish=function(){for(var a=0;a<this.events.length;a++)W.apply(null,this.events[a])};var Pc=0,ua=null;G?ua=-.53:Ma?ua=15:Ec?ua=-.7:$c&&(ua=-1/3);var va=function(a,b){this.ranges=a;this.primIndex=b};va.prototype.primary=function(){return this.ranges[this.primIndex]};va.prototype.equals=function(a){if(a==this)return!0;if(a.primIndex!=this.primIndex||a.ranges.length!=this.ranges.length)return!1;for(var b=0;b<this.ranges.length;b++){var d=this.ranges[b],c=a.ranges[b];
if(!qd(d.anchor,c.anchor)||!qd(d.head,c.head))return!1}return!0};va.prototype.deepCopy=function(){for(var a=[],b=0;b<this.ranges.length;b++)a[b]=new I(rd(this.ranges[b].anchor),rd(this.ranges[b].head));return new va(a,this.primIndex)};va.prototype.somethingSelected=function(){for(var a=0;a<this.ranges.length;a++)if(!this.ranges[a].empty())return!0;return!1};va.prototype.contains=function(a,b){b||(b=a);for(var d=0;d<this.ranges.length;d++){var c=this.ranges[d];if(0<=B(b,c.from())&&0>=B(a,c.to()))return d}return-1};
var I=function(a,b){this.anchor=a;this.head=b};I.prototype.from=function(){return zc(this.anchor,this.head)};I.prototype.to=function(){return yc(this.anchor,this.head)};I.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};cc.prototype={chunkSize:function(){return this.lines.length},removeInner:function(a,b){for(var d=a,c=a+b;d<c;++d){var e=this.lines[d];this.height-=e.height;var f=e;f.parent=null;Ee(f);aa(e,"delete")}this.lines.splice(a,b)},collapse:function(a){a.push.apply(a,
this.lines)},insertInner:function(a,b,d){this.height+=d;this.lines=this.lines.slice(0,a).concat(b).concat(this.lines.slice(a));for(a=0;a<b.length;++a)b[a].parent=this},iterN:function(a,b,d){for(b=a+b;a<b;++a)if(d(this.lines[a]))return!0}};dc.prototype={chunkSize:function(){return this.size},removeInner:function(a,b){this.size-=b;for(var d=0;d<this.children.length;++d){var c=this.children[d],e=c.chunkSize();if(a<e){var f=Math.min(b,e-a),g=c.height;c.removeInner(a,f);this.height-=g-c.height;e==f&&(this.children.splice(d--,
1),c.parent=null);if(0==(b-=f))break;a=0}else a-=e}25>this.size-b&&(1<this.children.length||!(this.children[0]instanceof cc))&&(a=[],this.collapse(a),this.children=[new cc(a)],this.children[0].parent=this)},collapse:function(a){for(var b=0;b<this.children.length;++b)this.children[b].collapse(a)},insertInner:function(a,b,d){this.size+=b.length;this.height+=d;for(var c=0;c<this.children.length;++c){var e=this.children[c],f=e.chunkSize();if(a<=f){e.insertInner(a,b,d);if(e.lines&&50<e.lines.length){for(b=
a=e.lines.length%25+25;b<e.lines.length;)d=new cc(e.lines.slice(b,b+=25)),e.height-=d.height,this.children.splice(++c,0,d),d.parent=this;e.lines=e.lines.slice(0,a);this.maybeSpill()}break}a-=f}},maybeSpill:function(){if(!(10>=this.children.length)){var a=this;do{var b=a.children.splice(a.children.length-5,5);b=new dc(b);if(a.parent){a.size-=b.size;a.height-=b.height;var d=ea(a.parent.children,a);a.parent.children.splice(d+1,0,b)}else d=new dc(a.children),d.parent=a,a.children=[d,b],a=d;b.parent=a.parent}while(10<
a.children.length);a.parent.maybeSpill()}},iterN:function(a,b,d){for(var c=0;c<this.children.length;++c){var e=this.children[c],f=e.chunkSize();if(a<f){f=Math.min(b,f-a);if(e.iterN(a,f,d))return!0;if(0==(b-=f))break;a=0}else a-=f}}};var ec=function(a,b,d){if(d)for(var c in d)d.hasOwnProperty(c)&&(this[c]=d[c]);this.doc=a;this.node=b};ec.prototype.clear=function(){var a=this.doc.cm,b=this.line.widgets,d=this.line,c=N(d);if(null!=c&&b){for(var e=0;e<b.length;++e)b[e]==this&&b.splice(e--,1);b.length||
(d.widgets=null);var f=Rb(this);Da(d,Math.max(0,d.height-f));a&&(qa(a,function(){var g=-f;Ga(d)<(a.curOp&&a.curOp.scrollTop||a.doc.scrollTop)&&Mc(a,g);Qa(a,c,"widget")}),aa(a,"lineWidgetCleared",a,this,c))}};ec.prototype.changed=function(){var a=this,b=this.height,d=this.doc.cm,c=this.line;this.height=null;var e=Rb(this)-b;e&&(Oa(this.doc,c)||Da(c,c.height+e),d&&qa(d,function(){d.curOp.forceUpdate=!0;Ga(c)<(d.curOp&&d.curOp.scrollTop||d.doc.scrollTop)&&Mc(d,e);aa(d,"lineWidgetChanged",d,a,N(c))}))};
nb(ec);var Rf=0,Ta=function(a,b){this.lines=[];this.type=b;this.doc=a;this.id=++Rf};Ta.prototype.clear=function(){if(!this.explicitlyCleared){var a=this.doc.cm,b=a&&!a.curOp;b&&jb(a);if(xa(this,"clear")){var d=this.find();d&&aa(this,"clear",d.from,d.to)}for(var c=d=null,e=0;e<this.lines.length;++e){var f=this.lines[e],g=Nb(f.markedSpans,this);a&&!this.collapsed?Qa(a,N(f),"text"):a&&(null!=g.to&&(c=N(f)),null!=g.from&&(d=N(f)));for(var h=f,k=void 0,l=f.markedSpans,m=g,n=0;n<l.length;++n)l[n]!=m&&(k||
(k=[])).push(l[n]);h.markedSpans=k;null==g.from&&this.collapsed&&!Oa(this.doc,f)&&a&&Da(f,tb(a.display))}if(a&&this.collapsed&&!a.options.lineWrapping)for(e=0;e<this.lines.length;++e)f=Fa(this.lines[e]),g=Cc(f),g>a.display.maxLineLength&&(a.display.maxLine=f,a.display.maxLineLength=g,a.display.maxLineChanged=!0);null!=d&&a&&this.collapsed&&ma(a,d,c+1);this.lines.length=0;this.explicitlyCleared=!0;this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,a&&Hf(a.doc));a&&aa(a,"markerCleared",a,this,d,
c);b&&kb(a);this.parent&&this.parent.clear()}};Ta.prototype.find=function(a,b){null==a&&"bookmark"==this.type&&(a=1);for(var d,c,e=0;e<this.lines.length;++e){var f=this.lines[e],g=Nb(f.markedSpans,this);if(null!=g.from&&(d=t(b?f:N(f),g.from),-1==a))return d;if(null!=g.to&&(c=t(b?f:N(f),g.to),1==a))return c}return d&&{from:d,to:c}};Ta.prototype.changed=function(){var a=this,b=this.find(-1,!0),d=this,c=this.doc.cm;b&&c&&qa(c,function(){var e=b.line,f=N(b.line);if(f=Ed(c,f))Ve(f),c.curOp.selectionChanged=
c.curOp.forceUpdate=!0;c.curOp.updateMaxLine=!0;Oa(d.doc,e)||null==d.height||(f=d.height,d.height=null,(f=Rb(d)-f)&&Da(e,e.height+f));aa(c,"markerChanged",c,a)})};Ta.prototype.attachLine=function(a){if(!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;b.maybeHiddenMarkers&&-1!=ea(b.maybeHiddenMarkers,this)||(b.maybeUnhiddenMarkers||(b.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(a)};Ta.prototype.detachLine=function(a){this.lines.splice(ea(this.lines,a),1);!this.lines.length&&this.doc.cm&&
(a=this.doc.cm.curOp,(a.maybeHiddenMarkers||(a.maybeHiddenMarkers=[])).push(this))};nb(Ta);var fc=function(a,b){this.markers=a;this.primary=b;for(b=0;b<a.length;++b)a[b].parent=this};fc.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var a=0;a<this.markers.length;++a)this.markers[a].clear();aa(this,"clear")}};fc.prototype.find=function(a,b){return this.primary.find(a,b)};nb(fc);var Fh=0,oa=function(a,b,d,c,e){if(!(this instanceof oa))return new oa(a,b,d,c,e);null==
d&&(d=0);dc.call(this,[new cc([new xb("",null)])]);this.first=d;this.scrollTop=this.scrollLeft=0;this.cantEdit=!1;this.cleanGeneration=1;this.modeFrontier=this.highlightFrontier=d;d=t(d,0);this.sel=Na(d);this.history=new Qc(null);this.id=++Fh;this.modeOption=b;this.lineSep=c;this.direction="rtl"==e?"rtl":"ltr";this.extend=!1;"string"==typeof a&&(a=this.splitLines(a));Zd(this,{from:d,to:d,text:a});da(this,Na(d),Ia)};oa.prototype=oe(dc.prototype,{constructor:oa,iter:function(a,b,d){d?this.iterN(a-this.first,
b-a,d):this.iterN(this.first,this.first+this.size,a)},insert:function(a,b){for(var d=0,c=0;c<b.length;++c)d+=b[c].height;this.insertInner(a-this.first,b,d)},remove:function(a,b){this.removeInner(a-this.first,b)},getValue:function(a){var b=od(this,this.first,this.first+this.size);return!1===a?b:b.join(a||this.lineSeparator())},setValue:ca(function(a){var b=t(this.first,0),d=this.first+this.size-1;Ab(this,{from:b,to:t(d,w(this,d).text.length),text:this.splitLines(a),origin:"setValue",full:!0},!0);this.cm&&
Ub(this.cm,0,0);da(this,Na(b),Ia)}),replaceRange:function(a,b,d,c){b=C(this,b);d=d?C(this,d):b;Bb(this,a,b,d,c)},getRange:function(a,b,d){a=Za(this,C(this,a),C(this,b));return!1===d?a:""===d?a.join(""):a.join(d||this.lineSeparator())},getLine:function(a){return(a=this.getLineHandle(a))&&a.text},getLineHandle:function(a){if(Lb(this,a))return w(this,a)},getLineNumber:function(a){return N(a)},getLineHandleVisualStart:function(a){"number"==typeof a&&(a=w(this,a));return Fa(a)},lineCount:function(){return this.size},
firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(a){return C(this,a)},getCursor:function(a){var b=this.sel.primary();return null==a||"head"==a?b.head:"anchor"==a?b.anchor:"end"==a||"to"==a||!1===a?b.to():b.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:ca(function(a,b,d){a=C(this,"number"==typeof a?t(a,b||0):a);da(this,Na(a,null),d)}),setSelection:ca(function(a,
b,d){var c=C(this,a);a=C(this,b||a);da(this,Na(c,a),d)}),extendSelection:ca(function(a,b,d){Sc(this,C(this,a),b&&C(this,b),d)}),extendSelections:ca(function(a,b){Df(this,ve(this,a),b)}),extendSelectionsBy:ca(function(a,b){a=uc(this.sel.ranges,a);Df(this,ve(this,a),b)}),setSelections:ca(function(a,b,d){if(a.length){for(var c=[],e=0;e<a.length;e++)c[e]=new I(C(this,a[e].anchor),C(this,a[e].head||a[e].anchor));null==b&&(b=Math.min(a.length-1,this.sel.primIndex));da(this,Ca(this.cm,c,b),d)}}),addSelection:ca(function(a,
b,d){var c=this.sel.ranges.slice(0);c.push(new I(C(this,a),C(this,b||a)));da(this,Ca(this.cm,c,c.length-1),d)}),getSelection:function(a){for(var b=this.sel.ranges,d,c=0;c<b.length;c++){var e=Za(this,b[c].from(),b[c].to());d=d?d.concat(e):e}return!1===a?d:d.join(a||this.lineSeparator())},getSelections:function(a){for(var b=[],d=this.sel.ranges,c=0;c<d.length;c++){var e=Za(this,d[c].from(),d[c].to());!1!==a&&(e=e.join(a||this.lineSeparator()));b[c]=e}return b},replaceSelection:function(a,b,d){for(var c=
[],e=0;e<this.sel.ranges.length;e++)c[e]=a;this.replaceSelections(c,b,d||"+input")},replaceSelections:ca(function(a,b,d){for(var c=[],e=this.sel,f=0;f<e.ranges.length;f++){var g=e.ranges[f];c[f]={from:g.from(),to:g.to(),text:this.splitLines(a[f]),origin:d}}if(a=b&&"end"!=b){a=[];e=d=t(this.first,0);for(f=0;f<c.length;f++){var h=c[f];g=vf(h.from,d,e);var k=vf(Ra(h),d,e);d=h.to;e=k;"around"==b?(h=this.sel.ranges[f],h=0>B(h.head,h.anchor),a[f]=new I(h?k:g,h?g:k)):a[f]=new I(g,g)}a=new va(a,this.sel.primIndex)}b=
a;for(a=c.length-1;0<=a;a--)Ab(this,c[a]);b?Ef(this,b):this.cm&&vb(this.cm)}),undo:ca(function(){Vc(this,"undo")}),redo:ca(function(){Vc(this,"redo")}),undoSelection:ca(function(){Vc(this,"undo",!0)}),redoSelection:ca(function(){Vc(this,"redo",!0)}),setExtending:function(a){this.extend=a},getExtending:function(){return this.extend},historySize:function(){for(var a=this.history,b=0,d=0,c=0;c<a.done.length;c++)a.done[c].ranges||++b;for(c=0;c<a.undone.length;c++)a.undone[c].ranges||++d;return{undo:b,
redo:d}},clearHistory:function(){var a=this;this.history=new Qc(this.history);Sa(this,function(b){return b.history=a.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(a){a&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null);return this.history.generation},isClean:function(a){return this.history.generation==(a||this.cleanGeneration)},getHistory:function(){return{done:yb(this.history.done),undone:yb(this.history.undone)}},
setHistory:function(a){var b=this.history=new Qc(this.history);b.done=yb(a.done.slice(0),null,!0);b.undone=yb(a.undone.slice(0),null,!0)},setGutterMarker:ca(function(a,b,d){return bc(this,a,"gutter",function(c){var e=c.gutterMarkers||(c.gutterMarkers={});e[b]=d;!d&&pe(e)&&(c.gutterMarkers=null);return!0})}),clearGutter:ca(function(a){var b=this;this.iter(function(d){d.gutterMarkers&&d.gutterMarkers[a]&&bc(b,d,"gutter",function(){d.gutterMarkers[a]=null;pe(d.gutterMarkers)&&(d.gutterMarkers=null);
return!0})})}),lineInfo:function(a){if("number"==typeof a){if(!Lb(this,a))return null;var b=a;a=w(this,a);if(!a)return null}else if(b=N(a),null==b)return null;return{line:b,handle:a,text:a.text,gutterMarkers:a.gutterMarkers,textClass:a.textClass,bgClass:a.bgClass,wrapClass:a.wrapClass,widgets:a.widgets}},addLineClass:ca(function(a,b,d){return bc(this,a,"gutter"==b?"gutter":"class",function(c){var e="text"==b?"textClass":"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass";if(c[e]){if(y(d).test(c[e]))return!1;
c[e]+=" "+d}else c[e]=d;return!0})}),removeLineClass:ca(function(a,b,d){return bc(this,a,"gutter"==b?"gutter":"class",function(c){var e="text"==b?"textClass":"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass",f=c[e];if(f)if(null==d)c[e]=null;else{var g=f.match(y(d));if(!g)return!1;var h=g.index+g[0].length;c[e]=f.slice(0,g.index)+(g.index&&h!=f.length?" ":"")+f.slice(h)||null}else return!1;return!0})}),addLineWidget:ca(function(a,b,d){return ah(this,a,b,d)}),removeLineWidget:function(a){a.clear()},
markText:function(a,b,d){return Cb(this,C(this,a),C(this,b),d,d&&d.type||"range")},setBookmark:function(a,b){b={replacedWith:b&&(null==b.nodeType?b.widget:b),insertLeft:b&&b.insertLeft,clearWhenEmpty:!1,shared:b&&b.shared,handleMouseEvents:b&&b.handleMouseEvents};a=C(this,a);return Cb(this,a,a,b,"bookmark")},findMarksAt:function(a){a=C(this,a);var b=[],d=w(this,a.line).markedSpans;if(d)for(var c=0;c<d.length;++c){var e=d[c];(null==e.from||e.from<=a.ch)&&(null==e.to||e.to>=a.ch)&&b.push(e.marker.parent||
e.marker)}return b},findMarks:function(a,b,d){a=C(this,a);b=C(this,b);var c=[],e=a.line;this.iter(a.line,b.line+1,function(f){if(f=f.markedSpans)for(var g=0;g<f.length;g++){var h=f[g];null!=h.to&&e==a.line&&a.ch>=h.to||null==h.from&&e!=a.line||null!=h.from&&e==b.line&&h.from>=b.ch||d&&!d(h.marker)||c.push(h.marker.parent||h.marker)}++e});return c},getAllMarks:function(){var a=[];this.iter(function(b){if(b=b.markedSpans)for(var d=0;d<b.length;++d)null!=b[d].from&&a.push(b[d].marker)});return a},posFromIndex:function(a){var b,
d=this.first,c=this.lineSeparator().length;this.iter(function(e){e=e.text.length+c;if(e>a)return b=a,!0;a-=e;++d});return C(this,t(d,b))},indexFromPos:function(a){a=C(this,a);var b=a.ch;if(a.line<this.first||0>a.ch)return 0;var d=this.lineSeparator().length;this.iter(this.first,a.line,function(c){b+=c.text.length+d});return b},copy:function(a){var b=new oa(od(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);b.scrollTop=this.scrollTop;b.scrollLeft=this.scrollLeft;
b.sel=this.sel;b.extend=!1;a&&(b.history.undoDepth=this.history.undoDepth,b.setHistory(this.getHistory()));return b},linkedDoc:function(a){a||(a={});var b=this.first,d=this.first+this.size;null!=a.from&&a.from>b&&(b=a.from);null!=a.to&&a.to<d&&(d=a.to);b=new oa(od(this,b,d),a.mode||this.modeOption,b,this.lineSep,this.direction);a.sharedHist&&(b.history=this.history);(this.linked||(this.linked=[])).push({doc:b,sharedHist:a.sharedHist});b.linked=[{doc:this,isParent:!0,sharedHist:a.sharedHist}];a=Sf(this);
for(d=0;d<a.length;d++){var c=a[d],e=c.find(),f=b.clipPos(e.from);e=b.clipPos(e.to);B(f,e)&&(f=Cb(b,f,e,c.primary,c.primary.type),c.markers.push(f),f.parent=c)}return b},unlinkDoc:function(a){a instanceof U&&(a=a.doc);if(this.linked)for(var b=0;b<this.linked.length;++b)if(this.linked[b].doc==a){this.linked.splice(b,1);a.unlinkDoc(this);ch(Sf(this));break}if(a.history==this.history){var d=[a.id];Sa(a,function(c){return d.push(c.id)},!0);a.history=new Qc(null);a.history.done=yb(this.history.done,d);
a.history.undone=yb(this.history.undone,d)}},iterLinkedDocs:function(a){Sa(this,a)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(a){return this.lineSep?a.split(this.lineSep):le(a)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:ca(function(a){"rtl"!=a&&(a="ltr");a!=this.direction&&(this.direction=a,this.iter(function(b){return b.order=null}),this.cm&&Yg(this.cm))})});oa.prototype.eachLine=oa.prototype.iter;for(var Uf=0,lg=!1,Ua={3:"Pause",
8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",
63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},qc=0;10>qc;qc++)Ua[qc+48]=Ua[qc+96]=String(qc);for(var dd=65;90>=dd;dd++)Ua[dd]=String.fromCharCode(dd);for(var rc=1;12>=rc;rc++)Ua[rc+111]=Ua[rc+63235]="F"+rc;var gc={basic:{Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",
Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},pcDefault:{"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev",
"Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},emacsy:{"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars",
"Ctrl-O":"openLine"},macDefault:{"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace",
"Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]}};gc["default"]=ya?gc.macDefault:gc.pcDefault;var hc={selectAll:Jf,singleSelection:function(a){return a.setSelection(a.getCursor("anchor"),a.getCursor("head"),Ia)},killLine:function(a){return Eb(a,function(b){if(b.empty()){var d=
w(a.doc,b.head.line).text.length;return b.head.ch==d&&b.head.line<a.lastLine()?{from:b.head,to:t(b.head.line+1,0)}:{from:b.head,to:t(b.head.line,d)}}return{from:b.from(),to:b.to()}})},deleteLine:function(a){return Eb(a,function(b){return{from:t(b.from().line,0),to:C(a.doc,t(b.to().line+1,0))}})},delLineLeft:function(a){return Eb(a,function(b){return{from:t(b.from().line,0),to:b.from()}})},delWrappedLineLeft:function(a){return Eb(a,function(b){var d=a.charCoords(b.head,"div").top+5;return{from:a.coordsChar({left:0,
top:d},"div"),to:b.from()}})},delWrappedLineRight:function(a){return Eb(a,function(b){var d=a.charCoords(b.head,"div").top+5;d=a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:d},"div");return{from:b.from(),to:d}})},undo:function(a){return a.undo()},redo:function(a){return a.redo()},undoSelection:function(a){return a.undoSelection()},redoSelection:function(a){return a.redoSelection()},goDocStart:function(a){return a.extendSelection(t(a.firstLine(),0))},goDocEnd:function(a){return a.extendSelection(t(a.lastLine()))},
goLineStart:function(a){return a.extendSelectionsBy(function(b){return $f(a,b.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(a){return a.extendSelectionsBy(function(b){return ag(a,b.head)},{origin:"+move",bias:1})},goLineEnd:function(a){return a.extendSelectionsBy(function(b){b=b.head.line;var d=w(a.doc,b);var c=d;for(var e;e=qb(c,!1);)c=e.find(1,!0).line;c!=d&&(b=N(c));return ee(!0,a,d,b,-1)},{origin:"+move",bias:-1})},goLineRight:function(a){return a.extendSelectionsBy(function(b){b=
a.cursorCoords(b.head,"div").top+5;return a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:b},"div")},oc)},goLineLeft:function(a){return a.extendSelectionsBy(function(b){b=a.cursorCoords(b.head,"div").top+5;return a.coordsChar({left:0,top:b},"div")},oc)},goLineLeftSmart:function(a){return a.extendSelectionsBy(function(b){var d=a.cursorCoords(b.head,"div").top+5;d=a.coordsChar({left:0,top:d},"div");return d.ch<a.getLine(d.line).search(/\S/)?ag(a,b.head):d},oc)},goLineUp:function(a){return a.moveV(-1,
"line")},goLineDown:function(a){return a.moveV(1,"line")},goPageUp:function(a){return a.moveV(-1,"page")},goPageDown:function(a){return a.moveV(1,"page")},goCharLeft:function(a){return a.moveH(-1,"char")},goCharRight:function(a){return a.moveH(1,"char")},goColumnLeft:function(a){return a.moveH(-1,"column")},goColumnRight:function(a){return a.moveH(1,"column")},goWordLeft:function(a){return a.moveH(-1,"word")},goGroupRight:function(a){return a.moveH(1,"group")},goGroupLeft:function(a){return a.moveH(-1,
"group")},goWordRight:function(a){return a.moveH(1,"word")},delCharBefore:function(a){return a.deleteH(-1,"codepoint")},delCharAfter:function(a){return a.deleteH(1,"char")},delWordBefore:function(a){return a.deleteH(-1,"word")},delWordAfter:function(a){return a.deleteH(1,"word")},delGroupBefore:function(a){return a.deleteH(-1,"group")},delGroupAfter:function(a){return a.deleteH(1,"group")},indentAuto:function(a){return a.indentSelection("smart")},indentMore:function(a){return a.indentSelection("add")},
indentLess:function(a){return a.indentSelection("subtract")},insertTab:function(a){return a.replaceSelection("\t")},insertSoftTab:function(a){for(var b=[],d=a.listSelections(),c=a.options.tabSize,e=0;e<d.length;e++){var f=d[e].from();f=wa(a.getLine(f.line),f.ch,c);b.push(hd(c-f%c))}a.replaceSelections(b)},defaultTab:function(a){a.somethingSelected()?a.indentSelection("add"):a.execCommand("insertTab")},transposeChars:function(a){return qa(a,function(){for(var b=a.listSelections(),d=[],c=0;c<b.length;c++)if(b[c].empty()){var e=
b[c].head,f=w(a.doc,e.line).text;if(f)if(e.ch==f.length&&(e=new t(e.line,e.ch-1)),0<e.ch)e=new t(e.line,e.ch+1),a.replaceRange(f.charAt(e.ch-1)+f.charAt(e.ch-2),t(e.line,e.ch-2),e,"+transpose");else if(e.line>a.doc.first){var g=w(a.doc,e.line-1).text;g&&(e=new t(e.line,1),a.replaceRange(f.charAt(0)+a.doc.lineSeparator()+g.charAt(g.length-1),t(e.line-1,g.length-1),e,"+transpose"))}d.push(new I(e,e))}a.setSelections(d)})},newlineAndIndent:function(a){return qa(a,function(){for(var b=a.listSelections(),
d=b.length-1;0<=d;d--)a.replaceRange(a.doc.lineSeparator(),b[d].anchor,b[d].head,"+input");b=a.listSelections();for(d=0;d<b.length;d++)a.indentLine(b[d].from().line,null,!0);vb(a)})},openLine:function(a){return a.replaceSelection("\n","start")},toggleOverwrite:function(a){return a.toggleOverwrite()}},jh=new Va,fe=null,ge=function(a,b,d){this.time=a;this.pos=b;this.button=d};ge.prototype.compare=function(a,b,d){return this.time+400>a&&0==B(b,this.pos)&&d==this.button};var kc,jc,Fb={toString:function(){return"CodeMirror.Init"}},
kg={},ad={};U.defaults=kg;U.optionHandlers=ad;var je=[];U.defineInitHook=function(a){return je.push(a)};var ra=null,O=function(a){this.cm=a;this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null;this.polling=new Va;this.composing=null;this.gracePeriod=!1;this.readDOMTimeout=null};O.prototype.init=function(a){function b(h){for(h=h.target;h;h=h.parentNode){if(h==g)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(h.className))break}return!1}function d(h){if(b(h)&&!Z(f,
h)){if(f.somethingSelected())ra={lineWise:!1,text:f.getSelections()},"cut"==h.type&&f.replaceSelection("",null,"cut");else if(f.options.lineWiseCopyCut){var k=og(f);ra={lineWise:!0,text:k.text};"cut"==h.type&&f.operation(function(){f.setSelections(k.ranges,0,Ia);f.replaceSelection("",null,"cut")})}else return;if(h.clipboardData){h.clipboardData.clearData();var l=ra.text.join("\n");h.clipboardData.setData("Text",l);if(h.clipboardData.getData("Text")==l){h.preventDefault();return}}var m=qg();h=m.firstChild;
f.display.lineSpace.insertBefore(m,f.display.lineSpace.firstChild);h.value=ra.text.join("\n");var n=ka();nc(h);setTimeout(function(){f.display.lineSpace.removeChild(m);n.focus();n==g&&e.showPrimarySelection()},50)}}var c=this,e=this,f=e.cm,g=e.div=a.lineDiv;g.contentEditable=!0;pg(g,f.options.spellcheck,f.options.autocorrect,f.options.autocapitalize);z(g,"paste",function(h){!b(h)||Z(f,h)||ng(h,f)||11>=T&&setTimeout(ba(f,function(){return c.updateFromDOM()}),20)});z(g,"compositionstart",function(h){c.composing=
{data:h.data,done:!1}});z(g,"compositionupdate",function(h){c.composing||(c.composing={data:h.data,done:!1})});z(g,"compositionend",function(h){c.composing&&(h.data!=c.composing.data&&c.readFromDOMSoon(),c.composing.done=!0)});z(g,"touchstart",function(){return e.forceCompositionEnd()});z(g,"input",function(){c.composing||c.readFromDOMSoon()});z(g,"copy",d);z(g,"cut",d)};O.prototype.screenReaderLabelChanged=function(a){a?this.div.setAttribute("aria-label",a):this.div.removeAttribute("aria-label")};
O.prototype.prepareSelection=function(){var a=ef(this.cm,!1);a.focus=ka()==this.div;return a};O.prototype.showSelection=function(a,b){a&&this.cm.display.view.length&&((a.focus||b)&&this.showPrimarySelection(),this.showMultipleSelections(a))};O.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()};O.prototype.showPrimarySelection=function(){var a=this.getSelection(),b=this.cm,d=b.doc.sel.primary(),c=d.from();d=d.to();if(b.display.viewTo==b.display.viewFrom||
c.line>=b.display.viewTo||d.line<b.display.viewFrom)a.removeAllRanges();else{var e=bd(b,a.anchorNode,a.anchorOffset),f=bd(b,a.focusNode,a.focusOffset);if(!e||e.bad||!f||f.bad||0!=B(zc(e,f),c)||0!=B(yc(e,f),d))if(e=b.display.view,c=c.line>=b.display.viewFrom&&sg(b,c)||{node:e[0].measure.map[2],offset:0},d=d.line<b.display.viewTo&&sg(b,d),d||(d=e[e.length-1].measure,d=d.maps?d.maps[d.maps.length-1]:d.map,d={node:d[d.length-1],offset:d[d.length-2]-d[d.length-3]}),c&&d){e=a.rangeCount&&a.getRangeAt(0);
try{var g=Ob(c.node,c.offset,d.offset,d.node)}catch(h){}g&&(!Ma&&b.state.focused?(a.collapse(c.node,c.offset),g.collapsed||(a.removeAllRanges(),a.addRange(g))):(a.removeAllRanges(),a.addRange(g)),e&&null==a.anchorNode?a.addRange(e):Ma&&this.startGracePeriod());this.rememberSelection()}else a.removeAllRanges()}};O.prototype.startGracePeriod=function(){var a=this;clearTimeout(this.gracePeriod);this.gracePeriod=setTimeout(function(){a.gracePeriod=!1;a.selectionChanged()&&a.cm.operation(function(){return a.cm.curOp.selectionChanged=
!0})},20)};O.prototype.showMultipleSelections=function(a){D(this.cm.display.cursorDiv,a.cursors);D(this.cm.display.selectionDiv,a.selection)};O.prototype.rememberSelection=function(){var a=this.getSelection();this.lastAnchorNode=a.anchorNode;this.lastAnchorOffset=a.anchorOffset;this.lastFocusNode=a.focusNode;this.lastFocusOffset=a.focusOffset};O.prototype.selectionInEditor=function(){var a=this.getSelection();if(!a.rangeCount)return!1;a=a.getRangeAt(0).commonAncestorContainer;return ja(this.div,a)};
O.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()&&ka()==this.div||this.showSelection(this.prepareSelection(),!0),this.div.focus())};O.prototype.blur=function(){this.div.blur()};O.prototype.getField=function(){return this.div};O.prototype.supportsTouch=function(){return!0};O.prototype.receivedFocus=function(){function a(){d.cm.state.focused&&(d.pollSelection(),d.polling.set(d.cm.options.pollInterval,a))}var b=this,d=this;this.selectionInEditor()?setTimeout(function(){return b.pollSelection()},
20):qa(this.cm,function(){return d.cm.curOp.selectionChanged=!0});this.polling.set(this.cm.options.pollInterval,a)};O.prototype.selectionChanged=function(){var a=this.getSelection();return a.anchorNode!=this.lastAnchorNode||a.anchorOffset!=this.lastAnchorOffset||a.focusNode!=this.lastFocusNode||a.focusOffset!=this.lastFocusOffset};O.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var a=this.getSelection(),b=this.cm;if(Fc&&Ec&&this.cm.display.gutterSpecs.length&&
yh(a.anchorNode))this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();else if(!this.composing){this.rememberSelection();var d=bd(b,a.anchorNode,a.anchorOffset),c=bd(b,a.focusNode,a.focusOffset);d&&c&&qa(b,function(){da(b.doc,Na(d,c),Ia);if(d.bad||c.bad)b.curOp.selectionChanged=!0})}}};O.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null);var a=this.cm,b=a.display,d=a.doc.sel.primary(),
c=d.from(),e=d.to();0==c.ch&&c.line>a.firstLine()&&(c=t(c.line-1,w(a.doc,c.line-1).length));e.ch==w(a.doc,e.line).text.length&&e.line<a.lastLine()&&(e=t(e.line+1,0));if(c.line<b.viewFrom||e.line>b.viewTo-1)return!1;var f;c.line==b.viewFrom||0==(f=bb(a,c.line))?(d=N(b.view[0].line),f=b.view[0].node):(d=N(b.view[f].line),f=b.view[f-1].node.nextSibling);var g=bb(a,e.line);g==b.view.length-1?(e=b.viewTo-1,b=b.lineDiv.lastChild):(e=N(b.view[g+1].line)-1,b=b.view[g+1].node.previousSibling);if(!f)return!1;
b=a.doc.splitLines(zh(a,f,b,d,e));for(f=Za(a.doc,t(d,0),t(e,w(a.doc,e).text.length));1<b.length&&1<f.length;)if(J(b)==J(f))b.pop(),f.pop(),e--;else if(b[0]==f[0])b.shift(),f.shift(),d++;else break;var h=0;g=0;for(var k=b[0],l=f[0],m=Math.min(k.length,l.length);h<m&&k.charCodeAt(h)==l.charCodeAt(h);)++h;k=J(b);l=J(f);for(m=Math.min(k.length-(1==b.length?h:0),l.length-(1==f.length?h:0));g<m&&k.charCodeAt(k.length-g-1)==l.charCodeAt(l.length-g-1);)++g;if(1==b.length&&1==f.length&&d==c.line)for(;h&&h>
c.ch&&k.charCodeAt(k.length-g-1)==l.charCodeAt(l.length-g-1);)h--,g++;b[b.length-1]=k.slice(0,k.length-g).replace(/^\u200b+/,"");b[0]=b[0].slice(h).replace(/\u200b+$/,"");c=t(d,h);d=t(e,f.length?J(f).length-g:0);if(1<b.length||b[0]||B(c,d))return Bb(a.doc,b,c,d,"+input"),!0};O.prototype.ensurePolled=function(){this.forceCompositionEnd()};O.prototype.reset=function(){this.forceCompositionEnd()};O.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=
null,this.updateFromDOM(),this.div.blur(),this.div.focus())};O.prototype.readFromDOMSoon=function(){var a=this;null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){a.readDOMTimeout=null;if(a.composing)if(a.composing.done)a.composing=null;else return;a.updateFromDOM()},80))};O.prototype.updateFromDOM=function(){var a=this;!this.cm.isReadOnly()&&this.pollContent()||qa(this.cm,function(){return ma(a.cm)})};O.prototype.setUneditable=function(a){a.contentEditable="false"};O.prototype.onKeyPress=
function(a){0==a.charCode||this.composing||(a.preventDefault(),this.cm.isReadOnly()||ba(this.cm,ke)(this.cm,String.fromCharCode(null==a.charCode?a.keyCode:a.charCode),0))};O.prototype.readOnlyChanged=function(a){this.div.contentEditable=String("nocursor"!=a)};O.prototype.onContextMenu=function(){};O.prototype.resetPosition=function(){};O.prototype.needsContentAttribute=!0;var V=function(a){this.cm=a;this.prevInput="";this.pollingFast=!1;this.polling=new Va;this.hasSelection=!1;this.composing=null};
V.prototype.init=function(a){function b(g){if(!Z(e,g)){if(e.somethingSelected())ra={lineWise:!1,text:e.getSelections()};else if(e.options.lineWiseCopyCut){var h=og(e);ra={lineWise:!0,text:h.text};"cut"==g.type?e.setSelections(h.ranges,null,Ia):(c.prevInput="",f.value=h.text.join("\n"),nc(f))}else return;"cut"==g.type&&(e.state.cutIncoming=+new Date)}}var d=this,c=this,e=this.cm;this.createField(a);var f=this.textarea;a.wrapper.insertBefore(this.wrapper,a.wrapper.firstChild);mc&&(f.style.width="0px");
z(f,"input",function(){G&&9<=T&&d.hasSelection&&(d.hasSelection=null);c.poll()});z(f,"paste",function(g){Z(e,g)||ng(g,e)||(e.state.pasteIncoming=+new Date,c.fastPoll())});z(f,"cut",b);z(f,"copy",b);z(a.scroller,"paste",function(g){if(!La(a,g)&&!Z(e,g))if(f.dispatchEvent){var h=new Event("paste");h.clipboardData=g.clipboardData;f.dispatchEvent(h)}else e.state.pasteIncoming=+new Date,c.focus()});z(a.lineSpace,"selectstart",function(g){La(a,g)||la(g)});z(f,"compositionstart",function(){var g=e.getCursor("from");
c.composing&&c.composing.range.clear();c.composing={start:g,range:e.markText(g,e.getCursor("to"),{className:"CodeMirror-composing"})}});z(f,"compositionend",function(){c.composing&&(c.poll(),c.composing.range.clear(),c.composing=null)})};V.prototype.createField=function(a){this.wrapper=qg();this.textarea=this.wrapper.firstChild};V.prototype.screenReaderLabelChanged=function(a){a?this.textarea.setAttribute("aria-label",a):this.textarea.removeAttribute("aria-label")};V.prototype.prepareSelection=function(){var a=
this.cm,b=a.display,d=a.doc,c=ef(a);if(a.options.moveInputWithCursor){a=Aa(a,d.sel.primary().head,"div");d=b.wrapper.getBoundingClientRect();var e=b.lineDiv.getBoundingClientRect();c.teTop=Math.max(0,Math.min(b.wrapper.clientHeight-10,a.top+e.top-d.top));c.teLeft=Math.max(0,Math.min(b.wrapper.clientWidth-10,a.left+e.left-d.left))}return c};V.prototype.showSelection=function(a){var b=this.cm.display;D(b.cursorDiv,a.cursors);D(b.selectionDiv,a.selection);null!=a.teTop&&(this.wrapper.style.top=a.teTop+
"px",this.wrapper.style.left=a.teLeft+"px")};V.prototype.reset=function(a){if(!this.contextMenuPending&&!this.composing){var b=this.cm;b.somethingSelected()?(this.prevInput="",a=b.getSelection(),this.textarea.value=a,b.state.focused&&nc(this.textarea),G&&9<=T&&(this.hasSelection=a)):a||(this.prevInput=this.textarea.value="",G&&9<=T&&(this.hasSelection=null))}};V.prototype.getField=function(){return this.textarea};V.prototype.supportsTouch=function(){return!1};V.prototype.focus=function(){if("nocursor"!=
this.cm.options.readOnly&&(!Zb||ka()!=this.textarea))try{this.textarea.focus()}catch(a){}};V.prototype.blur=function(){this.textarea.blur()};V.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0};V.prototype.receivedFocus=function(){this.slowPoll()};V.prototype.slowPoll=function(){var a=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){a.poll();a.cm.state.focused&&a.slowPoll()})};V.prototype.fastPoll=function(){function a(){d.poll()||b?
(d.pollingFast=!1,d.slowPoll()):(b=!0,d.polling.set(60,a))}var b=!1,d=this;d.pollingFast=!0;d.polling.set(20,a)};V.prototype.poll=function(){var a=this,b=this.cm,d=this.textarea,c=this.prevInput;if(this.contextMenuPending||!b.state.focused||Eh(d)&&!c&&!this.composing||b.isReadOnly()||b.options.disableInput||b.state.keySeq)return!1;var e=d.value;if(e==c&&!b.somethingSelected())return!1;if(G&&9<=T&&this.hasSelection===e||ya&&/[\uf700-\uf7ff]/.test(e))return b.display.input.reset(),!1;if(b.doc.sel==
b.display.selForContextMenu){var f=e.charCodeAt(0);8203!=f||c||(c="\u200b");if(8666==f)return this.reset(),this.cm.execCommand("undo")}var g=0;for(f=Math.min(c.length,e.length);g<f&&c.charCodeAt(g)==e.charCodeAt(g);)++g;qa(b,function(){ke(b,e.slice(g),c.length-g,null,a.composing?"*compose":null);1E3<e.length||-1<e.indexOf("\n")?d.value=a.prevInput="":a.prevInput=e;a.composing&&(a.composing.range.clear(),a.composing.range=b.markText(a.composing.start,b.getCursor("to"),{className:"CodeMirror-composing"}))});
return!0};V.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)};V.prototype.onKeyPress=function(){G&&9<=T&&(this.hasSelection=null);this.fastPoll()};V.prototype.onContextMenu=function(a){function b(){if(null!=g.selectionStart){var q=e.somethingSelected(),r="\u200b"+(q?g.value:"");g.value="\u21da";g.value=r;c.prevInput=q?"":"\u200b";g.selectionStart=1;g.selectionEnd=r.length;f.selForContextMenu=e.doc.sel}}function d(){if(c.contextMenuPending==d&&(c.contextMenuPending=
!1,c.wrapper.style.cssText=m,g.style.cssText=l,G&&9>T&&f.scrollbars.setScrollTop(f.scroller.scrollTop=k),null!=g.selectionStart)){(!G||G&&9>T)&&b();var q=0,r=function(){f.selForContextMenu==e.doc.sel&&0==g.selectionStart&&0<g.selectionEnd&&"\u200b"==c.prevInput?ba(e,Jf)(e):10>q++?f.detectingSelectAll=setTimeout(r,500):(f.selForContextMenu=null,f.input.reset())};f.detectingSelectAll=setTimeout(r,200)}}var c=this,e=c.cm,f=e.display,g=c.textarea;c.contextMenuPending&&c.contextMenuPending();var h=eb(e,
a),k=f.scroller.scrollTop;if(h&&!Ba){e.options.resetSelectionOnContextMenu&&-1==e.doc.sel.contains(h)&&ba(e,da)(e.doc,Na(h),Ia);var l=g.style.cssText,m=c.wrapper.style.cssText;h=c.wrapper.offsetParent.getBoundingClientRect();c.wrapper.style.cssText="position: static";g.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(a.clientY-h.top-5)+"px; left: "+(a.clientX-h.left-5)+"px;\n      z-index: 1000; background: "+(G?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
if(fa)var n=window.scrollY;f.input.focus();fa&&window.scrollTo(null,n);f.input.reset();e.somethingSelected()||(g.value=c.prevInput=" ");c.contextMenuPending=d;f.selForContextMenu=e.doc.sel;clearTimeout(f.detectingSelectAll);G&&9<=T&&b();if(he){Kb(a);var p=function(){sa(window,"mouseup",p);setTimeout(d,20)};z(window,"mouseup",p)}else setTimeout(d,50)}};V.prototype.readOnlyChanged=function(a){a||this.reset();this.textarea.disabled="nocursor"==a;this.textarea.readOnly=!!a};V.prototype.setUneditable=
function(){};V.prototype.needsContentAttribute=!1;(function(a){function b(c,e,f,g){a.defaults[c]=e;f&&(d[c]=g?function(h,k,l){l!=Fb&&f(h,k,l)}:f)}var d=a.optionHandlers;a.defineOption=b;a.Init=Fb;b("value","",function(c,e){return c.setValue(e)},!0);b("mode",null,function(c,e){c.doc.modeOption=e;Yd(c)},!0);b("indentUnit",2,Yd,!0);b("indentWithTabs",!1);b("smartIndent",!0);b("tabSize",4,function(c){$b(c);Sb(c);ma(c)},!0);b("lineSeparator",null,function(c,e){if(c.doc.lineSep=e){var f=[],g=c.doc.first;
c.doc.iter(function(k){for(var l=0;;){var m=k.text.indexOf(e,l);if(-1==m)break;l=m+e.length;f.push(t(g,m))}g++});for(var h=f.length-1;0<=h;h--)Bb(c.doc,e,f[h],t(f[h].line,f[h].ch+e.length))}});b("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,function(c,e,f){c.state.specialChars=new RegExp(e.source+(e.test("\t")?"":"|\t"),"g");f!=Fb&&c.refresh()});b("specialCharPlaceholder",Kg,function(c){return c.refresh()},!0);b("electricChars",!0);b("inputStyle",
Zb?"contenteditable":"textarea",function(){throw Error("inputStyle can not (yet) be changed in a running editor");},!0);b("spellcheck",!1,function(c,e){return c.getInputField().spellcheck=e},!0);b("autocorrect",!1,function(c,e){return c.getInputField().autocorrect=e},!0);b("autocapitalize",!1,function(c,e){return c.getInputField().autocapitalize=e},!0);b("rtlMoveVisually",!Dh);b("wholeLineUpdateBefore",!0);b("theme","default",function(c){jg(c);Yb(c)},!0);b("keyMap","default",function(c,e,f){e=Wc(e);
(f=f!=Fb&&Wc(f))&&f.detach&&f.detach(c,e);e.attach&&e.attach(c,f||null)});b("extraKeys",null);b("configureMouse",null);b("lineWrapping",!1,wh,!0);b("gutters",[],function(c,e){c.display.gutterSpecs=Wd(e,c.options.lineNumbers);Yb(c)},!0);b("fixedGutter",!0,function(c,e){c.display.gutters.style.left=e?Ld(c.display)+"px":"0";c.refresh()},!0);b("coverGutterNextToScrollbar",!1,function(c){return wb(c)},!0);b("scrollbarStyle","native",function(c){nf(c);wb(c);c.display.scrollbars.setScrollTop(c.doc.scrollTop);
c.display.scrollbars.setScrollLeft(c.doc.scrollLeft)},!0);b("lineNumbers",!1,function(c,e){c.display.gutterSpecs=Wd(c.options.gutters,e);Yb(c)},!0);b("firstLineNumber",1,Yb,!0);b("lineNumberFormatter",function(c){return c},Yb,!0);b("showCursorWhenSelecting",!1,Tb,!0);b("resetSelectionOnContextMenu",!0);b("lineWiseCopyCut",!0);b("pasteLinesPerSelection",!0);b("selectionsMayTouch",!1);b("readOnly",!1,function(c,e){"nocursor"==e&&(ub(c),c.display.input.blur());c.display.input.readOnlyChanged(e)});b("screenReaderLabel",
null,function(c,e){c.display.input.screenReaderLabelChanged(""===e?null:e)});b("disableInput",!1,function(c,e){e||c.display.input.reset()},!0);b("dragDrop",!0,vh);b("allowDropFileTypes",null);b("cursorBlinkRate",530);b("cursorScrollMargin",0);b("cursorHeight",1,Tb,!0);b("singleCursorHeightPerLine",!0,Tb,!0);b("workTime",100);b("workDelay",100);b("flattenSpans",!0,$b,!0);b("addModeClass",!1,$b,!0);b("pollInterval",100);b("undoDepth",200,function(c,e){return c.doc.history.undoDepth=e});b("historyEventDelay",
1250);b("viewportMargin",10,function(c){return c.refresh()},!0);b("maxHighlightLength",1E4,$b,!0);b("moveInputWithCursor",!0,function(c,e){e||c.display.input.resetPosition()});b("tabindex",null,function(c,e){return c.display.input.getField().tabIndex=e||""});b("autofocus",null);b("direction","ltr",function(c,e){return c.doc.setDirection(e)},!0);b("phrases",null)})(U);(function(a){var b=a.optionHandlers,d=a.helpers={};a.prototype={constructor:a,focus:function(){window.focus();this.display.input.focus()},
setOption:function(c,e){var f=this.options,g=f[c];if(f[c]!=e||"mode"==c)f[c]=e,b.hasOwnProperty(c)&&ba(this,b[c])(this,e,g),W(this,"optionChange",this,c)},getOption:function(c){return this.options[c]},getDoc:function(){return this.doc},addKeyMap:function(c,e){this.state.keyMaps[e?"push":"unshift"](Wc(c))},removeKeyMap:function(c){for(var e=this.state.keyMaps,f=0;f<e.length;++f)if(e[f]==c||e[f].name==c)return e.splice(f,1),!0},addOverlay:ia(function(c,e){var f=c.token?c:a.getMode(this.options,c);if(f.startState)throw Error("Overlays may not be stateful.");
wg(this.state.overlays,{mode:f,modeSpec:c,opaque:e&&e.opaque,priority:e&&e.priority||0},function(g){return g.priority});this.state.modeGen++;ma(this)}),removeOverlay:ia(function(c){for(var e=this.state.overlays,f=0;f<e.length;++f){var g=e[f].modeSpec;if(g==c||"string"==typeof c&&g.name==c){e.splice(f,1);this.state.modeGen++;ma(this);break}}}),indentLine:ia(function(c,e,f){"string"!=typeof e&&"number"!=typeof e&&(e=null==e?this.options.smartIndent?"smart":"prev":e?"add":"subtract");Lb(this.doc,c)&&
lc(this,c,e,f)}),indentSelection:ia(function(c){for(var e=this.doc.sel.ranges,f=-1,g=0;g<e.length;g++){var h=e[g];if(h.empty())h.head.line>f&&(lc(this,h.head.line,c,!0),f=h.head.line,g==this.doc.sel.primIndex&&vb(this));else{var k=h.from();h=h.to();var l=Math.max(f,k.line);f=Math.min(this.lastLine(),h.line-(h.ch?0:1))+1;for(h=l;h<f;++h)lc(this,h,c);h=this.doc.sel.ranges;0==k.ch&&e.length==h.length&&0<h[g].from().ch&&be(this.doc,g,new I(k,h[g].to()),Ia)}}}),getTokenAt:function(c,e){return Ae(this,
c,e)},getLineTokens:function(c,e){return Ae(this,t(c),e,!0)},getTokenTypeAt:function(c){c=C(this.doc,c);var e=ye(this,w(this.doc,c.line)),f=0,g=(e.length-1)/2;c=c.ch;if(0==c)e=e[2];else for(;;){var h=f+g>>1;if((h?e[2*h-1]:0)>=c)g=h;else if(e[2*h+1]<c)f=h+1;else{e=e[2*h+2];break}}f=e?e.indexOf("overlay "):-1;return 0>f?e:0==f?null:e.slice(0,f-1)},getModeAt:function(c){var e=this.doc.mode;return e.innerMode?a.innerMode(e,this.getTokenAt(c).state).mode:e},getHelper:function(c,e){return this.getHelpers(c,
e)[0]},getHelpers:function(c,e){var f=[];if(!d.hasOwnProperty(e))return f;var g=d[e];c=this.getModeAt(c);if("string"==typeof c[e])g[c[e]]&&f.push(g[c[e]]);else if(c[e])for(var h=0;h<c[e].length;h++){var k=g[c[e][h]];k&&f.push(k)}else c.helperType&&g[c.helperType]?f.push(g[c.helperType]):g[c.name]&&f.push(g[c.name]);for(e=0;e<g._global.length;e++)h=g._global[e],h.pred(c,this)&&-1==ea(f,h.val)&&f.push(h.val);return f},getStateAfter:function(c,e){var f=this.doc;c=Math.max(f.first,Math.min(null==c?f.first+
f.size-1:c,f.first+f.size-1));return Mb(this,c+1,e).state},cursorCoords:function(c,e){var f=this.doc.sel.primary();c=null==c?f.head:"object"==typeof c?C(this.doc,c):c?f.from():f.to();return Aa(this,c,e||"page")},charCoords:function(c,e){return Hc(this,C(this.doc,c),e||"page")},coordsChar:function(c,e){c=Ze(this,c,e||"page");return Jd(this,c.left,c.top)},lineAtHeight:function(c,e){c=Ze(this,{top:c,left:0},e||"page").top;return $a(this.doc,c+this.display.viewOffset)},heightAtLine:function(c,e,f){var g=
!1;if("number"==typeof c){var h=this.doc.first+this.doc.size-1;c<this.doc.first?c=this.doc.first:c>h&&(c=h,g=!0);c=w(this.doc,c)}return Gc(this,c,{top:0,left:0},e||"page",f||g).top+(g?this.doc.height-Ga(c):0)},defaultTextHeight:function(){return tb(this.display)},defaultCharWidth:function(){return sb(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(c,e,f,g,h){var k=this.display;c=Aa(this,C(this.doc,c));var l=c.bottom,m=c.left;e.style.position=
"absolute";e.setAttribute("cm-ignore-events","true");this.display.input.setUneditable(e);k.sizer.appendChild(e);if("over"==g)l=c.top;else if("above"==g||"near"==g){var n=Math.max(k.wrapper.clientHeight,this.doc.height),p=Math.max(k.sizer.clientWidth,k.lineSpace.clientWidth);("above"==g||c.bottom+e.offsetHeight>n)&&c.top>e.offsetHeight?l=c.top-e.offsetHeight:c.bottom+e.offsetHeight<=n&&(l=c.bottom);m+e.offsetWidth>p&&(m=p-e.offsetWidth)}e.style.top=l+"px";e.style.left=e.style.right="";"right"==h?(m=
k.sizer.clientWidth-e.offsetWidth,e.style.right="0px"):("left"==h?m=0:"middle"==h&&(m=(k.sizer.clientWidth-e.offsetWidth)/2),e.style.left=m+"px");f&&(c=Rd(this,{left:m,top:l,right:m+e.offsetWidth,bottom:l+e.offsetHeight}),null!=c.scrollTop&&Vb(this,c.scrollTop),null!=c.scrollLeft&&ib(this,c.scrollLeft))},triggerOnKeyDown:ia(dg),triggerOnKeyPress:ia(fg),triggerOnKeyUp:eg,triggerOnMouseDown:ia(gg),execCommand:function(c){if(hc.hasOwnProperty(c))return hc[c].call(null,this)},triggerElectric:ia(function(c){mg(this,
c)}),findPosH:function(c,e,f,g){var h=1;0>e&&(h=-1,e=-e);c=C(this.doc,c);for(var k=0;k<e&&(c=me(this.doc,c,h,f,g),!c.hitSide);++k);return c},moveH:ia(function(c,e){var f=this;this.extendSelectionsBy(function(g){return f.display.shift||f.doc.extend||g.empty()?me(f.doc,g.head,c,e,f.options.rtlMoveVisually):0>c?g.from():g.to()},oc)}),deleteH:ia(function(c,e){var f=this.doc;this.doc.sel.somethingSelected()?f.replaceSelection("",null,"+delete"):Eb(this,function(g){var h=me(f,g.head,c,e,!1);return 0>c?
{from:h,to:g.head}:{from:g.head,to:h}})}),findPosV:function(c,e,f,g){var h=1;0>e&&(h=-1,e=-e);var k=C(this.doc,c);for(c=0;c<e&&(k=Aa(this,k,"div"),null==g?g=k.left:k.left=g,k=rg(this,k,h,f),!k.hitSide);++c);return k},moveV:ia(function(c,e){var f=this,g=this.doc,h=[],k=!this.display.shift&&!g.extend&&g.sel.somethingSelected();g.extendSelectionsBy(function(m){if(k)return 0>c?m.from():m.to();var n=Aa(f,m.head,"div");null!=m.goalColumn&&(n.left=m.goalColumn);h.push(n.left);var p=rg(f,n,c,e);"page"==e&&
m==g.sel.primary()&&Mc(f,Hc(f,p,"div").top-n.top);return p},oc);if(h.length)for(var l=0;l<g.sel.ranges.length;l++)g.sel.ranges[l].goalColumn=h[l]}),findWordAt:function(c){var e=w(this.doc,c.line).text,f=c.ch,g=c.ch;if(e){var h=this.getHelper(c,"wordChars");"before"!=c.sticky&&g!=e.length||!f?++g:--f;var k=e.charAt(f);for(k=vc(k,h)?function(l){return vc(l,h)}:/\s/.test(k)?function(l){return/\s/.test(l)}:function(l){return!/\s/.test(l)&&!vc(l)};0<f&&k(e.charAt(f-1));)--f;for(;g<e.length&&k(e.charAt(g));)++g}return new I(t(c.line,
f),t(c.line,g))},toggleOverwrite:function(c){if(null==c||c!=this.state.overwrite)(this.state.overwrite=!this.state.overwrite)?Wa(this.display.cursorDiv,"CodeMirror-overwrite"):hb(this.display.cursorDiv,"CodeMirror-overwrite"),W(this,"overwriteToggle",this,this.state.overwrite)},hasFocus:function(){return this.display.input.getField()==ka()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:ia(function(c,e){Ub(this,c,e)}),getScrollInfo:function(){var c=this.display.scroller;
return{left:c.scrollLeft,top:c.scrollTop,height:c.scrollHeight-Ha(this)-this.display.barHeight,width:c.scrollWidth-Ha(this)-this.display.barWidth,clientHeight:Dd(this),clientWidth:ab(this)}},scrollIntoView:ia(function(c,e){null==c?(c={from:this.doc.sel.primary().head,to:null},null==e&&(e=this.options.cursorScrollMargin)):"number"==typeof c?c={from:t(c,0),to:null}:null==c.from&&(c={from:c,to:null});c.to||(c.to=c.from);c.margin=e||0;null!=c.from.line?(Nc(this),this.curOp.scrollToPos=c):jf(this,c.from,
c.to,c.margin)}),setSize:ia(function(c,e){var f=this,g=function(k){return"number"==typeof k||/^\d+$/.test(String(k))?k+"px":k};null!=c&&(this.display.wrapper.style.width=g(c));null!=e&&(this.display.wrapper.style.height=g(e));this.options.lineWrapping&&We(this);var h=this.display.viewFrom;this.doc.iter(h,this.display.viewTo,function(k){if(k.widgets)for(var l=0;l<k.widgets.length;l++)if(k.widgets[l].noHScroll){Qa(f,h,"widget");break}++h});this.curOp.forceUpdate=!0;W(this,"refresh",this)}),operation:function(c){return qa(this,
c)},startOperation:function(){return jb(this)},endOperation:function(){return kb(this)},refresh:ia(function(){var c=this.display.cachedTextHeight;ma(this);this.curOp.forceUpdate=!0;Sb(this);Ub(this,this.doc.scrollLeft,this.doc.scrollTop);Vd(this.display);(null==c||.5<Math.abs(c-tb(this.display))||this.options.lineWrapping)&&Md(this);W(this,"refresh",this)}),swapDoc:ia(function(c){var e=this.doc;e.cm=null;this.state.selectingText&&this.state.selectingText();xf(this,c);Sb(this);this.display.input.reset();
Ub(this,c.scrollLeft,c.scrollTop);this.curOp.forceScroll=!0;aa(this,"swapDoc",this,e);return e}),phrase:function(c){var e=this.options.phrases;return e&&Object.prototype.hasOwnProperty.call(e,c)?e[c]:c},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}};nb(a);a.registerHelper=function(c,e,f){d.hasOwnProperty(c)||
(d[c]=a[c]={_global:[]});d[c][e]=f};a.registerGlobalHelper=function(c,e,f,g){a.registerHelper(c,e,g);d[c]._global.push({pred:f,val:g})}})(U);var Gh="iter insert remove copy getEditor constructor".split(" "),sc;for(sc in oa.prototype)oa.prototype.hasOwnProperty(sc)&&0>ea(Gh,sc)&&(U.prototype[sc]=function(a){return function(){return a.apply(this.doc,arguments)}}(oa.prototype[sc]));nb(oa);U.inputStyles={textarea:V,contenteditable:O};U.defineMode=function(a){U.defaults.mode||"null"==a||(U.defaults.mode=
a);Bg.apply(this,arguments)};U.defineMIME=function(a,b){ob[a]=b};U.defineMode("null",function(){return{token:function(a){return a.skipToEnd()}}});U.defineMIME("text/plain","null");U.defineExtension=function(a,b){U.prototype[a]=b};U.defineDocExtension=function(a,b){oa.prototype[a]=b};U.fromTextArea=function(a,b){function d(){a.value=h.getValue()}b=b?Xa(b):{};b.value=a.value;!b.tabindex&&a.tabIndex&&(b.tabindex=a.tabIndex);!b.placeholder&&a.placeholder&&(b.placeholder=a.placeholder);if(null==b.autofocus){var c=
ka();b.autofocus=c==a||null!=a.getAttribute("autofocus")&&c==document.body}if(a.form&&(z(a.form,"submit",d),!b.leaveSubmitMethodAlone)){var e=a.form;var f=e.submit;try{var g=e.submit=function(){d();e.submit=f;e.submit();e.submit=g}}catch(k){}}b.finishInit=function(k){k.save=d;k.getTextArea=function(){return a};k.toTextArea=function(){k.toTextArea=isNaN;d();a.parentNode.removeChild(k.getWrapperElement());a.style.display="";a.form&&(sa(a.form,"submit",d),b.leaveSubmitMethodAlone||"function"!=typeof a.form.submit||
(a.form.submit=f))}};a.style.display="none";var h=U(function(k){return a.parentNode.insertBefore(k,a.nextSibling)},b);return h};(function(a){a.off=sa;a.on=z;a.wheelEventPixels=Xg;a.Doc=oa;a.splitLines=le;a.countColumn=wa;a.findColumn=gd;a.isWordChar=id;a.Pass=Yc;a.signal=W;a.Line=xb;a.changeEnd=Ra;a.scrollbarModel=of;a.Pos=t;a.cmpPos=B;a.modes=ld;a.mimeModes=ob;a.resolveMode=xc;a.getMode=md;a.modeExtensions=pb;a.extendMode=Cg;a.copyState=Ya;a.startState=ue;a.innerMode=nd;a.commands=hc;a.keyMap=gc;
a.keyName=Zf;a.isModifierKey=Wf;a.lookupKey=Db;a.normalizeKeyMap=hh;a.StringStream=X;a.SharedTextMarker=fc;a.TextMarker=Ta;a.LineWidget=ec;a.e_preventDefault=la;a.e_stopPropagation=se;a.e_stop=Kb;a.addClass=Wa;a.contains=ja;a.rmClass=hb;a.keyNames=Ua})(U);U.version="5.63.0";return U});
;!function(doc,win){if("function"!=typeof doc.createEvent)return;function pointerEvent(type){var lo=type.toLowerCase(),ms="MS"+type;return navigator.msPointerEnabled?ms:!!window.PointerEvent&&lo}function touchEvent(name){return"on"+name in window&&name}function isTheSameFingerId(e){return!e.pointerId||void 0===pointerId||e.pointerId===pointerId}function setListener(elm,events,callback){for(var eventsArray=events.split(" "),i=eventsArray.length;i--;)elm.addEventListener(eventsArray[i],callback,!1)}function getPointerEvent(event){var hasTargetTouches=Boolean(event.targetTouches&&event.targetTouches.length);switch(!0){case Boolean(event.target.touches):return event.target.touches[0];case hasTargetTouches&&void 0!==event.targetTouches[0].pageX:return event.targetTouches[0];case hasTargetTouches&&Boolean(event.targetTouches[0].touches):return event.targetTouches[0].touches[0];default:return event}}function isMultipleTouches(event){return 1<(event.targetTouches||event.target.touches||[]).length}function getTimestamp(){return(new Date).getTime()}function sendEvent(elm,eventName,originalEvent,data){var customEvent=doc.createEvent("Event");if(customEvent.originalEvent=originalEvent,(data=data||{}).x=currX,data.y=currY,defaults.useJquery&&(customEvent=jQuery.Event(eventName,{originalEvent:originalEvent}),jQuery(elm).trigger(customEvent,data)),customEvent.initEvent){for(var key in data)customEvent[key]=data[key];customEvent.initEvent(eventName,!0,!0),elm.dispatchEvent(customEvent)}for(;elm;)elm["on"+eventName]&&elm["on"+eventName](customEvent),elm=elm.parentNode}var pointerId,currX,currY,cachedX,cachedY,timestamp,target,dblTapTimer,longtapTimer,defaults={useJquery:!win.IGNORE_JQUERY&&"undefined"!=typeof jQuery,swipeThreshold:win.SWIPE_THRESHOLD||100,tapThreshold:win.TAP_THRESHOLD||150,dbltapThreshold:win.DBL_TAP_THRESHOLD||200,longtapThreshold:win.LONG_TAP_THRESHOLD||1e3,tapPrecision:win.TAP_PRECISION/2||30,justTouchEvents:win.JUST_ON_TOUCH_DEVICES},wasTouch=!1,touchevents_touchstart=touchEvent("touchstart")||pointerEvent("PointerDown"),touchevents_touchend=touchEvent("touchend")||pointerEvent("PointerUp"),touchevents_touchmove=touchEvent("touchmove")||pointerEvent("PointerMove"),tapNum=0;setListener(doc,touchevents_touchstart+(defaults.justTouchEvents?"":" mousedown"),function(e){if(isTheSameFingerId(e)&&!isMultipleTouches(e)&&(pointerId=e.pointerId,"mousedown"!==e.type&&(wasTouch=!0),"mousedown"!==e.type||!wasTouch)){var pointer=getPointerEvent(e);cachedX=currX=pointer.pageX,cachedY=currY=pointer.pageY,longtapTimer=setTimeout(function(){sendEvent(e.target,"longtap",e),target=e.target},defaults.longtapThreshold),timestamp=getTimestamp(),tapNum++}}),setListener(doc,touchevents_touchend+(defaults.justTouchEvents?"":" mouseup"),function(e){if(isTheSameFingerId(e)&&!isMultipleTouches(e))if(pointerId=void 0,"mouseup"===e.type&&wasTouch)wasTouch=!1;else{var eventsArr=[],now=getTimestamp(),deltaY=cachedY-currY,deltaX=cachedX-currX;if(clearTimeout(dblTapTimer),clearTimeout(longtapTimer),deltaX<=-defaults.swipeThreshold&&eventsArr.push("swiperight"),deltaX>=defaults.swipeThreshold&&eventsArr.push("swipeleft"),deltaY<=-defaults.swipeThreshold&&eventsArr.push("swipedown"),deltaY>=defaults.swipeThreshold&&eventsArr.push("swipeup"),eventsArr.length){for(var i=0;i<eventsArr.length;i++){var eventName=eventsArr[i];sendEvent(e.target,eventName,e,{distance:{x:Math.abs(deltaX),y:Math.abs(deltaY)}})}tapNum=0}else cachedX>=currX-defaults.tapPrecision&&cachedX<=currX+defaults.tapPrecision&&cachedY>=currY-defaults.tapPrecision&&cachedY<=currY+defaults.tapPrecision&&0<=timestamp+defaults.tapThreshold-now&&(sendEvent(e.target,2<=tapNum&&target===e.target?"dbltap":"tap",e),target=e.target),dblTapTimer=setTimeout(function(){tapNum=0},defaults.dbltapThreshold)}}),setListener(doc,touchevents_touchmove+(defaults.justTouchEvents?"":" mousemove"),function(e){if(isTheSameFingerId(e)&&("mousemove"!==e.type||!wasTouch)){var pointer=getPointerEvent(e);currX=pointer.pageX,currY=pointer.pageY}}),win.tocca=function(options){for(var opt in options)defaults[opt]=options[opt];return defaults}}(document,window);
;!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).MicroModal=t()}(this,(function(){"use strict";function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var n,i,a,r,s,l=(n=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],i=function(){function o(e){var n=e.targetModal,i=e.triggers,a=void 0===i?[]:i,r=e.onShow,s=void 0===r?function(){}:r,l=e.onClose,c=void 0===l?function(){}:l,d=e.openTrigger,u=void 0===d?"data-micromodal-trigger":d,f=e.closeTrigger,h=void 0===f?"data-micromodal-close":f,v=e.openClass,m=void 0===v?"is-open":v,g=e.disableScroll,b=void 0!==g&&g,y=e.disableFocus,p=void 0!==y&&y,w=e.awaitCloseAnimation,E=void 0!==w&&w,k=e.awaitOpenAnimation,M=void 0!==k&&k,C=e.debugMode,A=void 0!==C&&C;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.modal=document.getElementById(n),this.config={debugMode:A,disableScroll:b,openTrigger:u,closeTrigger:h,openClass:m,onShow:s,onClose:c,awaitCloseAnimation:E,awaitOpenAnimation:M,disableFocus:p},a.length>0&&this.registerTriggers.apply(this,t(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var i,a,r;return i=o,(a=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];o.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var o=function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",o,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var o=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(o),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&this.closeModal(e)}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(n);return Array.apply(void 0,t(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var o=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));o.length>0&&o[0].focus(),0===o.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var o=t.indexOf(document.activeElement);e.shiftKey&&0===o&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&o===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&e(i.prototype,a),r&&e(i,r),o}(),a=null,r=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},s=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var o in t)r(o);return!0},{init:function(e){var o=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),n=t(document.querySelectorAll("[".concat(o.openTrigger,"]"))),r=function(e,t){var o=[];return e.forEach((function(e){var n=e.attributes[t].value;void 0===o[n]&&(o[n]=[]),o[n].push(e)})),o}(n,o.openTrigger);if(!0!==o.debugMode||!1!==s(n,r))for(var l in r){var c=r[l];o.targetModal=l,o.triggers=t(c),a=new i(o)}},show:function(e,t){var o=t||{};o.targetModal=e,!0===o.debugMode&&!1===r(e)||(a&&a.removeEventListeners(),(a=new i(o)).showModal())},close:function(e){e?a.closeModalById(e):a.closeModal()}});return window.MicroModal=l,l}));
;"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ComponentManager =
/*#__PURE__*/
function () {
  function ComponentManager(permissions, onReady) {
    _classCallCheck(this, ComponentManager);

    this.sentMessages = [];
    this.messageQueue = [];
    this.loggingEnabled = false;
    this.acceptsThemes = true;
    this.activeThemes = [];
    this.initialPermissions = permissions;
    this.onReadyCallback = onReady;
    this.coallesedSaving = true;
    this.coallesedSavingDelay = 250;
    this.registerMessageHandler();
  }

  _createClass(ComponentManager, [{
    key: "registerMessageHandler",
    value: function registerMessageHandler() {
      var _this = this;

      var messageHandler = function messageHandler(event) {
        if (_this.loggingEnabled) {
          console.log("Components API Message received:", event.data);
        } // We don't have access to window.parent.origin due to cross-domain restrictions.
        // Check referrer if available, otherwise defer to checking for first-run value.
        // Craft URL objects so that example.com === example.com/


        if (document.referrer) {
          var referrer = new URL(document.referrer).origin;
          var eventOrigin = new URL(event.origin).origin;

          if (referrer !== eventOrigin) {
            return;
          }
        } // The first message will be the most reliable one, so we won't change it after any subsequent events,
        // in case you receive an event from another window.


        if (!_this.origin) {
          _this.origin = event.origin;
        } else if (event.origin !== _this.origin) {
          // If event origin doesn't match first-run value, return.
          return;
        } // Mobile environment sends data as JSON string


        var data = event.data;
        var parsedData = typeof data === "string" ? JSON.parse(data) : data;

        _this.handleMessage(parsedData);
      };
      /*
        Mobile (React Native) uses `document`, web/desktop uses `window`.addEventListener
        for postMessage API to work properly.
         Update May 2019:
        As part of transitioning React Native webview into the community package,
        we'll now only need to use window.addEventListener.
         However, we want to maintain backward compatibility for Mobile < v3.0.5, so we'll keep document.addEventListener
         Also, even with the new version of react-native-webview, Android may still require document.addEventListener (while iOS still only requires window.addEventListener)
        https://github.com/react-native-community/react-native-webview/issues/323#issuecomment-467767933
       */


      document.addEventListener("message", function (event) {
        messageHandler(event);
      }, false);
      window.addEventListener("message", function (event) {
        messageHandler(event);
      }, false);
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(payload) {
      if (payload.action === "component-registered") {
        this.sessionKey = payload.sessionKey;
        this.componentData = payload.componentData;
        this.onReady(payload.data);

        if (this.loggingEnabled) {
          console.log("Component successfully registered with payload:", payload);
        }
      } else if (payload.action === "themes") {
        if (this.acceptsThemes) {
          this.activateThemes(payload.data.themes);
        }
      } else if (payload.original) {
        // get callback from queue
        var originalMessage = this.sentMessages.filter(function (message) {
          return message.messageId === payload.original.messageId;
        })[0];

        if (!originalMessage) {
          // Connection must have been reset. Alert the user.
          alert("This extension is attempting to communicate with Standard Notes, but an error is preventing it from doing so. Please restart this extension and try again.");
        }

        if (originalMessage.callback) {
          originalMessage.callback(payload.data);
        }
      }
    }
  }, {
    key: "onReady",
    value: function onReady(data) {
      this.environment = data.environment;
      this.platform = data.platform;
      this.uuid = data.uuid;
      this.isMobile = this.environment == "mobile";

      if (this.initialPermissions && this.initialPermissions.length > 0) {
        this.requestPermissions(this.initialPermissions);
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.messageQueue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var message = _step.value;
          this.postMessage(message.action, message.data, message.callback);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.messageQueue = [];

      if (this.loggingEnabled) {
        console.log("onReadyData", data);
      }

      this.activateThemes(data.activeThemeUrls || []);

      if (this.onReadyCallback) {
        this.onReadyCallback();
      }
    }
  }, {
    key: "getSelfComponentUUID",
    value: function getSelfComponentUUID() {
      return this.uuid;
    }
  }, {
    key: "isRunningInDesktopApplication",
    value: function isRunningInDesktopApplication() {
      return this.environment === "desktop";
    }
  }, {
    key: "setComponentDataValueForKey",
    value: function setComponentDataValueForKey(key, value) {
      this.componentData[key] = value;
      this.postMessage("set-component-data", {
        componentData: this.componentData
      }, function (data) {});
    }
  }, {
    key: "clearComponentData",
    value: function clearComponentData() {
      this.componentData = {};
      this.postMessage("set-component-data", {
        componentData: this.componentData
      }, function (data) {});
    }
  }, {
    key: "componentDataValueForKey",
    value: function componentDataValueForKey(key) {
      return this.componentData[key];
    }
  }, {
    key: "postMessage",
    value: function postMessage(action, data, callback) {
      if (!this.sessionKey) {
        this.messageQueue.push({
          action: action,
          data: data,
          callback: callback
        });
        return;
      }

      var message = {
        action: action,
        data: data,
        messageId: this.generateUUID(),
        sessionKey: this.sessionKey,
        api: "component"
      };
      var sentMessage = JSON.parse(JSON.stringify(message));
      sentMessage.callback = callback;
      this.sentMessages.push(sentMessage); // Mobile (React Native) requires a string for the postMessage API.

      if (this.isMobile) {
        message = JSON.stringify(message);
      }

      if (this.loggingEnabled) {
        console.log("Posting message:", message);
      }

      window.parent.postMessage(message, this.origin);
    }
  }, {
    key: "setSize",
    value: function setSize(type, width, height) {
      this.postMessage("set-size", {
        type: type,
        width: width,
        height: height
      }, function (data) {});
    }
  }, {
    key: "requestPermissions",
    value: function requestPermissions(permissions, callback) {
      this.postMessage("request-permissions", {
        permissions: permissions
      }, function (data) {
        callback && callback();
      }.bind(this));
    }
  }, {
    key: "streamItems",
    value: function streamItems(contentTypes, callback) {
      if (!Array.isArray(contentTypes)) {
        contentTypes = [contentTypes];
      }

      this.postMessage("stream-items", {
        content_types: contentTypes
      }, function (data) {
        callback(data.items);
      }.bind(this));
    }
  }, {
    key: "streamContextItem",
    value: function streamContextItem(callback) {
      var _this2 = this;

      this.postMessage("stream-context-item", null, function (data) {
        var item = data.item;
        /*
          If this is a new context item than the context item the component was currently entertaining,
          we want to immediately commit any pending saves, because if you send the new context item to the
          component before it has commited its presave, it will end up first replacing the UI with new context item,
          and when the debouncer executes to read the component UI, it will be reading the new UI for the previous item.
        */

        var isNewItem = !_this2.lastStreamedItem || _this2.lastStreamedItem.uuid !== item.uuid;

        if (isNewItem && _this2.pendingSaveTimeout) {
          clearTimeout(_this2.pendingSaveTimeout);

          _this2._performSavingOfItems(_this2.pendingSaveParams);

          _this2.pendingSaveTimeout = null;
          _this2.pendingSaveParams = null;
        }

        _this2.lastStreamedItem = item;
        callback(_this2.lastStreamedItem);
      });
    }
  }, {
    key: "selectItem",
    value: function selectItem(item) {
      this.postMessage("select-item", {
        item: this.jsonObjectForItem(item)
      });
    }
  }, {
    key: "createItem",
    value: function createItem(item, callback) {
      this.postMessage("create-item", {
        item: this.jsonObjectForItem(item)
      }, function (data) {
        var item = data.item; // A previous version of the SN app had an issue where the item in the reply to create-item
        // would be nested inside "items" and not "item". So handle both cases here.

        if (!item && data.items && data.items.length > 0) {
          item = data.items[0];
        }

        this.associateItem(item);
        callback && callback(item);
      }.bind(this));
    }
  }, {
    key: "createItems",
    value: function createItems(items, callback) {
      var _this3 = this;

      var mapped = items.map(function (item) {
        return _this3.jsonObjectForItem(item);
      });
      this.postMessage("create-items", {
        items: mapped
      }, function (data) {
        callback && callback(data.items);
      }.bind(this));
    }
  }, {
    key: "associateItem",
    value: function associateItem(item) {
      this.postMessage("associate-item", {
        item: this.jsonObjectForItem(item)
      });
    }
  }, {
    key: "deassociateItem",
    value: function deassociateItem(item) {
      this.postMessage("deassociate-item", {
        item: this.jsonObjectForItem(item)
      });
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      this.postMessage("clear-selection", {
        content_type: "Tag"
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item, callback) {
      this.deleteItems([item], callback);
    }
  }, {
    key: "deleteItems",
    value: function deleteItems(items, callback) {
      var params = {
        items: items.map(function (item) {
          return this.jsonObjectForItem(item);
        }.bind(this))
      };
      this.postMessage("delete-items", params, function (data) {
        callback && callback(data);
      });
    }
  }, {
    key: "sendCustomEvent",
    value: function sendCustomEvent(action, data, callback) {
      this.postMessage(action, data, function (data) {
        callback && callback(data);
      }.bind(this));
    }
  }, {
    key: "saveItem",
    value: function saveItem(item, callback) {
      var skipDebouncer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.saveItems([item], callback, skipDebouncer);
    }
    /* Presave allows clients to perform any actions last second before the save actually occurs (like setting previews).
       Saves debounce by default, so if a client needs to compute a property on an item before saving, it's best to
       hook into the debounce cycle so that clients don't have to implement their own debouncing.
     */

  }, {
    key: "saveItemWithPresave",
    value: function saveItemWithPresave(item, presave, callback) {
      this.saveItemsWithPresave([item], presave, callback);
    }
  }, {
    key: "saveItemsWithPresave",
    value: function saveItemsWithPresave(items, presave, callback) {
      this.saveItems(items, callback, false, presave);
    }
  }, {
    key: "_performSavingOfItems",
    value: function _performSavingOfItems(_ref) {
      var items = _ref.items,
          presave = _ref.presave,
          callback = _ref.callback;
      // presave block allows client to gain the benefit of performing something in the debounce cycle.
      presave && presave();
      var mappedItems = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;
          mappedItems.push(this.jsonObjectForItem(item));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.postMessage("save-items", {
        items: mappedItems
      }, function (data) {
        callback && callback();
      });
    }
    /*
    skipDebouncer allows saves to go through right away rather than waiting for timeout.
    This should be used when saving items via other means besides keystrokes.
    */

  }, {
    key: "saveItems",
    value: function saveItems(items, callback) {
      var _this4 = this;

      var skipDebouncer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var presave = arguments.length > 3 ? arguments[3] : undefined;

      // We need to make sure that when we clear a pending save timeout,
      // we carry over those pending items into the new save.
      if (!this.pendingSaveItems) {
        this.pendingSaveItems = [];
      }

      if (this.coallesedSaving == true && !skipDebouncer) {
        if (this.pendingSaveTimeout) {
          clearTimeout(this.pendingSaveTimeout);
        }

        var incomingIds = items.map(function (item) {
          return item.uuid;
        }); // Replace any existing save items with incoming values
        // Only keep items here who are not in incomingIds

        var preexistingItems = this.pendingSaveItems.filter(function (item) {
          return !incomingIds.includes(item.uuid);
        }); // Add new items, now that we've made sure it's cleared of incoming items.

        this.pendingSaveItems = preexistingItems.concat(items); // We'll potentially need to commit early if stream-context-item message comes in

        this.pendingSaveParams = {
          items: this.pendingSaveItems,
          presave: presave,
          callback: callback
        };
        this.pendingSaveTimeout = setTimeout(function () {
          _this4._performSavingOfItems(_this4.pendingSaveParams);

          _this4.pendingSaveItems = [];
          _this4.pendingSaveTimeout = null;
          _this4.pendingSaveParams = null;
        }, this.coallesedSavingDelay);
      } else {
        this._performSavingOfItems({
          items: items,
          presave: presave,
          callback: callback
        });
      }
    }
  }, {
    key: "jsonObjectForItem",
    value: function jsonObjectForItem(item) {
      var copy = Object.assign({}, item);
      copy.children = null;
      copy.parent = null;
      return copy;
    }
  }, {
    key: "getItemAppDataValue",
    value: function getItemAppDataValue(item, key) {
      var AppDomain = "org.standardnotes.sn";
      var data = item.content.appData && item.content.appData[AppDomain];

      if (data) {
        return data[key];
      } else {
        return null;
      }
    }
    /* Themes */

  }, {
    key: "activateThemes",
    value: function activateThemes(incomingUrls) {
      if (this.loggingEnabled) {
        console.log("Incoming themes", incomingUrls);
      }

      if (this.activeThemes.sort().toString() == incomingUrls.sort().toString()) {
        // incoming are same as active, do nothing
        return;
      }

      var themesToActivate = incomingUrls || [];
      var themesToDeactivate = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.activeThemes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var activeUrl = _step3.value;

          if (!incomingUrls.includes(activeUrl)) {
            // active not present in incoming, deactivate it
            themesToDeactivate.push(activeUrl);
          } else {
            // already present in active themes, remove it from themesToActivate
            themesToActivate = themesToActivate.filter(function (candidate) {
              return candidate != activeUrl;
            });
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (this.loggingEnabled) {
        console.log("Deactivating themes:", themesToDeactivate);
        console.log("Activating themes:", themesToActivate);
      }

      for (var _i = 0, _themesToDeactivate = themesToDeactivate; _i < _themesToDeactivate.length; _i++) {
        var theme = _themesToDeactivate[_i];
        this.deactivateTheme(theme);
      }

      this.activeThemes = incomingUrls;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = themesToActivate[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var url = _step4.value;

          if (!url) {
            continue;
          }

          var link = document.createElement("link");
          link.id = btoa(url);
          link.href = url;
          link.type = "text/css";
          link.rel = "stylesheet";
          link.media = "screen,print";
          link.className = "custom-theme";
          document.getElementsByTagName("head")[0].appendChild(link);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: "themeElementForUrl",
    value: function themeElementForUrl(url) {
      var elements = Array.from(document.getElementsByClassName("custom-theme")).slice();
      return elements.find(function (element) {
        // We used to search here by `href`, but on desktop, with local file:// urls, that didn't work for some reason.
        return element.id == btoa(url);
      });
    }
  }, {
    key: "deactivateTheme",
    value: function deactivateTheme(url) {
      var element = this.themeElementForUrl(url);

      if (element) {
        element.disabled = true;
        element.parentNode.removeChild(element);
      }
    }
    /* Theme caching is currently disabled. Might be enabled in the future if neccessary. */

    /*
    activateCachedThemes() {
      let themes = this.getCachedThemeUrls();
      let writeToCache = false;
      if(this.loggingEnabled) { console.log("Activating cached themes", themes); }
      this.activateThemes(themes, writeToCache);
    }
     cacheThemeUrls(urls) {
      if(this.loggingEnabled) { console.log("Caching theme urls", urls); }
      localStorage.setItem("cachedThemeUrls", JSON.stringify(urls));
    }
     decacheThemeUrls() {
      localStorage.removeItem("cachedThemeUrls");
    }
     getCachedThemeUrls() {
      let urls = localStorage.getItem("cachedThemeUrls");
      if(urls) {
        return JSON.parse(urls);
      } else {
        return [];
      }
    }
    */

    /* Utilities */

  }, {
    key: "generateUUID",
    value: function generateUUID() {
      var crypto = window.crypto || window.msCrypto;

      if (crypto) {
        var buf = new Uint32Array(4);
        crypto.getRandomValues(buf);
        var idx = -1;
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          idx++;
          var r = buf[idx >> 3] >> idx % 8 * 4 & 15;
          var v = c == 'x' ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
      } else {
        var d = new Date().getTime();

        if (window.performance && typeof window.performance.now === "function") {
          d += performance.now(); //use high-precision timer if available
        }

        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
        });
        return uuid;
      }
    }
  }]);

  return ComponentManager;
}();

if (typeof module != "undefined" && typeof module.exports != "undefined") {
  module.exports = ComponentManager;
}

if (window) {
  window.ComponentManager = ComponentManager;
}
//# sourceMappingURL=dist.js.map
;// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

// Because sometimes you need to mark the selected *text*.
//
// Adds an option 'styleSelectedText' which, when enabled, gives
// selected text the CSS class given as option value, or
// "CodeMirror-selectedtext" when the value is not a string.

(function (mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        mod(require("../../lib/codemirror"));
    else if (typeof define == "function" && define.amd) // AMD
        define(["../../lib/codemirror"], mod);
    else // Plain browser env
        mod(CodeMirror);
})(function (CodeMirror) {
    "use strict";

    CodeMirror.defineOption("styleSelectedText", false, function (cm, val, old) {
        var prev = old && old != CodeMirror.Init;
        if (val && !prev) {
            cm.state.markedSelection = [];
            cm.state.markedSelectionStyle = typeof val == "string" ? val : "CodeMirror-selectedtext";
            reset(cm);
            cm.on("cursorActivity", onCursorActivity);
            cm.on("change", onChange);
        } else if (!val && prev) {
            cm.off("cursorActivity", onCursorActivity);
            cm.off("change", onChange);
            clear(cm);
            cm.state.markedSelection = cm.state.markedSelectionStyle = null;
        }
    });

    function onCursorActivity(cm) {
        if (cm.state.markedSelection)
            cm.operation(function () { update(cm); });
    }

    function onChange(cm) {
        if (cm.state.markedSelection && cm.state.markedSelection.length)
            cm.operation(function () { clear(cm); });
    }

    var CHUNK_SIZE = 8;
    var Pos = CodeMirror.Pos;
    var cmp = CodeMirror.cmpPos;

    function coverRange(cm, from, to, addAt) {
        if (cmp(from, to) == 0) return;
        var array = cm.state.markedSelection;
        var cls = cm.state.markedSelectionStyle;
        for (var line = from.line; ;) {
            var start = line == from.line ? from : Pos(line, 0);
            var endLine = line + CHUNK_SIZE, atEnd = endLine >= to.line;
            var end = atEnd ? to : Pos(endLine, 0);
            var mark = cm.markText(start, end, { className: cls });
            if (addAt == null) array.push(mark);
            else array.splice(addAt++, 0, mark);
            if (atEnd) break;
            line = endLine;
        }
    }

    function clear(cm) {
        var array = cm.state.markedSelection;
        for (var i = 0; i < array.length; ++i) array[i].clear();
        array.length = 0;
    }

    function reset(cm) {
        clear(cm);
        var ranges = cm.listSelections();
        for (var i = 0; i < ranges.length; i++)
            coverRange(cm, ranges[i].from(), ranges[i].to());
    }

    function update(cm) {
        if (!cm.somethingSelected()) return clear(cm);
        if (cm.listSelections().length > 1) return reset(cm);

        var from = cm.getCursor("start"), to = cm.getCursor("end");

        var array = cm.state.markedSelection;
        if (!array.length) return coverRange(cm, from, to);

        var coverStart = array[0].find(), coverEnd = array[array.length - 1].find();
        if (!coverStart || !coverEnd || to.line - from.line <= CHUNK_SIZE ||
            cmp(from, coverEnd.to) >= 0 || cmp(to, coverStart.from) <= 0)
            return reset(cm);

        while (cmp(from, coverStart.from) > 0) {
            array.shift().clear();
            coverStart = array[0].find();
        }
        if (cmp(from, coverStart.from) < 0) {
            if (coverStart.to.line - from.line < CHUNK_SIZE) {
                array.shift().clear();
                coverRange(cm, from, coverStart.to, 0);
            } else {
                coverRange(cm, from, coverStart.from, 0);
            }
        }

        while (cmp(to, coverEnd.to) < 0) {
            array.pop().clear();
            coverEnd = array[array.length - 1].find();
        }
        if (cmp(to, coverEnd.to) > 0) {
            if (to.line - coverEnd.from.line < CHUNK_SIZE) {
                array.pop().clear();
                coverRange(cm, coverEnd.from, to);
            } else {
                coverRange(cm, coverEnd.to, to);
            }
        }
    }
});
