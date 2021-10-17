(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";function FastEditor(a,b){var c,d=this;b=b||{},this.platform={},this.platform.str=getPlatform(),this.platform.isDesktop="Desktop"===this.platform.str,this.platform.isiOS="iOS"===this.platform.str,this.platform.isAndroid="Android"===this.platform.str,this.platform.isMobile=this.platform.isiOS||this.platform.isAndroid,this.platform.isBrowser="Browser"===this.platform.str,this.measureLineElement=function(a){var b=a.firstElementChild,d=document.createElement("span");a.appendChild(d);for(var e=c.display.lineMeasure,f=e.childNodes.length;0<f;--f)e.removeChild(e.firstChild);e.appendChild(a);for(var g=0,h=[],j=0;j<b.childNodes.length;j++){var k=b.childNodes[j],l=" "+k.className+" ";if(-1<l.indexOf(" cm-leadingspace ")||-1<l.indexOf(" cm-comment-block-indentation "))h.push(k.getBoundingClientRect());else break}h.length&&(g=h[h.length-1].right-h[0].left);var m=b.offsetTop<d.offsetTop;return e.removeChild(a),a.removeChild(d),{indentWidth:g,textMustWrap:m}},this.selectionsToLineRanges=function(a){for(var b=[],c=0;c<a.length;c++){var d,e,f=a[c].anchor,g=a[c].head;f.line<g.line?(d=f.line,e=g.line):(d=g.line,e=f.line);var h=b[b.length-1];h&&h[1]+1>=d?h[1]=e:b.push([d,e])}return b},this.duplicate=function(a){for(var b=a.listSelections(),c=b.length-1;0<=c;c--){var d=b[c].anchor,e=b[c].head;if(d.line==e.line&&d.ch==e.ch){var f=d.line,g=a.doc.getLine(f);a.replaceRange(g+a.doc.lineSeparator(),{line:f,ch:0},{line:f,ch:0},"+input")}else{var h,j;d.line<e.line||d.line==e.line&&d.ch<e.ch?(h=d,j=e):(h=e,j=d);var k=a.doc.getRange(h,j);a.replaceRange(k,h,h,"+input")}}},this.insertLink=function(a){for(var b=a.listSelections(),c=b.length-1;0<=c;c--){var d=b[c].anchor,e=d.line,f=new Date,g=f.toLocaleString("fr-CA",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).replace(/[^0-9]/g,"");a.replaceRange("[[".concat(g,"]]")+a.doc.lineSeparator(),{line:e,ch:0},{line:e,ch:0},"+input")}},this.insertTime=function(a){for(var b=a.listSelections(),c=b.length-1;0<=c;c--){var d=b[c].anchor,e=d.line,f=new Date;a.replaceRange("# ".concat(f.toLocaleDateString("ru-RU"))+a.doc.lineSeparator(),{line:e,ch:0},{line:e,ch:0},"+input")}},this.markAsDone=function(a){for(var b=a.listSelections(),c=b.length-1;0<=c;c--){var d=b[c].anchor,e=d.line,f=a.doc.getLine(e);f.match(/^\s*=/)?a.replaceRange(f.replace(/=/,"~"),{line:e,ch:0},{line:e,ch:f.length}):f.match(/^\s*~/)?a.replaceRange(f.replace(/~/,"/"),{line:e,ch:0},{line:e,ch:f.length}):f.match(/^\s*\//)?a.replaceRange(f.replace(/\//,"<"),{line:e,ch:0},{line:e,ch:f.length}):f.match(/^\s*</)&&a.replaceRange(f.replace(/</,"="),{line:e,ch:0},{line:e,ch:f.length})}},this.moveSelectedLinesUp=function(a){var b=a.listSelections(),c=this.selectionsToLineRanges(b),d=0;if(0==c[0][0])for(var e=c[0][1],f=0;f<b.length;f++){var g=b[f].anchor,h=b[f].head;if(g.line<=e||h.line<=e)d+=1;else break}for(var f=0;f<c.length;f++){var j=c[f],k=j[0],l=j[1];if(0!=k){var m=a.doc.getLine(k-1),n=a.doc.getLine(l).length;a.replaceRange(a.doc.lineSeparator()+m,{line:l,ch:n},{line:l,ch:n},"+input"),a.replaceRange("",{line:k-1,ch:0},{line:k,ch:0},"+input")}}for(var o=[],f=0;f<d;f++)o.push(b[f]);for(var f=d;f<b.length;f++){var g=b[f].anchor,h=b[f].head;o.push({anchor:{line:g.line-1,ch:g.ch},head:{line:h.line-1,ch:h.ch}})}a.doc.setSelections(o)},this.moveSelectedLinesDown=function(a){var b=a.listSelections(),c=this.selectionsToLineRanges(b),d=0,e=a.doc.lastLine();if(c[c.length-1][1]==e)for(var f=c[c.length-1][0],g=b.length-1;0<=g;g--){var h=b[g].anchor,j=b[g].head;if(h.line>=f||j.line>=f)d+=1;else break}for(var g=0;g<c.length;g++){var k=c[g],l=k[0],m=k[1];if(m!=e){var n=a.doc.getLine(m+1);a.replaceRange("",{line:m,ch:a.doc.getLine(m).length},{line:m+1,ch:a.doc.getLine(m+1).length},"+input"),a.replaceRange(n+a.doc.lineSeparator(),{line:l,ch:0},{line:l,ch:0},"+input")}}for(var o=[],p=b.length-d,g=0;g<p;g++){var h=b[g].anchor,j=b[g].head;o.push({anchor:{line:h.line+1,ch:h.ch},head:{line:j.line+1,ch:j.ch}})}for(var g=p;g<b.length;g++)o.push(b[g]);a.doc.setSelections(o)},this.setupEditor=function(a){function f(a){MicroModal.show("modal-open-link");var b=document.getElementById("modal-link-button");b.href=a;var c=document.getElementById("modal-link-description");c.textContent=a}function g(a){return a.target.className.includes("cm-link")&&!a.target.className.includes("CodeMirror-selectedtext")&&h.test(a.target.textContent)}this.editor=c=CodeMirror.fromTextArea(a,{mode:"indent_text",lineWrapping:!0,tabSize:2,indentUnit:2,extraKeys:{"Alt-F":"findPersistent",Tab:"indentMore","Shift-Tab":"indentLess",Enter:function Enter(a){for(var b=a.listSelections(),c=[],d=b.length-1;0<=d;d--)c.push(a.getTokenAt(b[d].anchor,!0)),a.replaceRange(a.doc.lineSeparator(),b[d].anchor,b[d].head,"+input");var e;b=a.listSelections();for(var d=0;d<b.length;d++){var f=c[d].state,g=a.doc.getLine(b[d].anchor.line-1);if(f.inCodeBlock)f.codeBlockHasReadText?e=/^\s*/.exec(g)[0]:(e=/^[-*+>\s]*/.exec(g)[0],e=e.replace(/[-*+>]/g," "));else{var h=/^\s*(\d+)\.($|\s+)/.exec(g);h&&(g=g.replace(/\d+/,parseInt(h,10)+1)),e=/^\s*(\d+)\.\s+|[-*+>=\s]*/.exec(g)[0]}a.replaceRange(e,b[d].anchor,b[d].head,"+input")}a.scrollIntoView()},Home:"goLineLeftSmart",End:"goLineRight","Ctrl-D":this.duplicate.bind(this),"Ctrl-K":this.markAsDone.bind(this),"Cmd-D":this.duplicate.bind(this),"Cmd-K":this.markAsDone.bind(this),"Shift-Ctrl-L":this.insertLink.bind(this),"Shift-Ctrl-T":this.insertTime.bind(this),"Shift-Ctrl-Up":this.moveSelectedLinesUp.bind(this),"Shift-Ctrl-Down":this.moveSelectedLinesDown.bind(this),"Alt-Up":this.moveSelectedLinesUp.bind(this),"Alt-Down":this.moveSelectedLinesDown.bind(this)}}),c.setOption("styleSelectedText","contenteditable"!=c.getOption("inputStyle")),c.setSize("100%","100%");var h=require("linkify-it")({"ftp:":null,"//":null},{fuzzyEmail:!1});d.platform.isMobile&&MicroModal.init({awaitCloseAnimation:!0}),d.platform.isiOS?c.getWrapperElement().addEventListener("tap",function(a){if(g(a)){var b=a.target.textContent;/^https?:\/\//.test(b)||(b="http://"+b),f(b),a.preventDefault()}}):(c.on("mousedown",function(a,b){(b.ctrlKey||b.metaKey)&&g(b)&&b.preventDefault()}),c.getWrapperElement().addEventListener("click",function(a){if((a.ctrlKey||a.metaKey||d.platform.isAndroid)&&g(a)){var b=a.target.textContent;if(/^https?:\/\//.test(b)||(b="http://"+b),d.platform.isAndroid)f(b);else{var c=document.createElement("a");c.style.display="none",c.href=b,c.target="_blank",document.body.appendChild(c),c.click(),c.remove()}a.preventDefault()}}));c.on("renderLine",function(a,b,c){var e=d.measureLineElement(c),f=e.indentWidth,g=a.getScrollInfo(),h=g.width-150;30>h&&(h=30);var i=f;i>h&&(i=h),e.textMustWrap&&(c.className+=" cm-line-is-wrapped"),c.style.textIndent="-"+i+"px",c.style.paddingLeft=4+i+"px"}),this.setAllowLongerLinesNoRefresh(!!b.allow_longer_lines),this.setColorHeaders(!!b.color_headers),this.setMonospaceNoRefresh(!!b.monospace),c.refresh();var i;window.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(function(){c.refresh()},1e3)})},this.setAllowLongerLinesNoRefresh=function(a){b.allow_longer_lines=a,a?this.editor.getWrapperElement().classList.remove("remove-longer-lines"):this.editor.getWrapperElement().classList.add("remove-longer-lines")},this.setAllowLongerLines=function(a){this.setAllowLongerLinesNoRefresh(a),this.editor.refresh()},this.setColorHeaders=function(a){b.color_headers=a,a?this.editor.getWrapperElement().classList.add("cfg-color-headers"):this.editor.getWrapperElement().classList.remove("cfg-color-headers")},this.setMonospaceNoRefresh=function(a){b.monospace=a,a?this.editor.getWrapperElement().classList.add("use-monospace-everywhere"):this.editor.getWrapperElement().classList.remove("use-monospace-everywhere")},this.setMonospace=function(a){this.setMonospaceNoRefresh(a),this.editor.refresh()},this.setupEditor(a)}(function(a){"use strict";a.defineMode("indent_text",function(){function a(a,b,c){var d=a.match(b,c);return d?d[0]:""}function b(a,b,d){var e;return 0>=d?(b.leadingSpaceContent="",""):(e="^\\s{1,"+b.codeBlockLeadingSpaceWidth+"}",c(a,b,new RegExp(e)))}function c(b,c,d){var e=a(b,d,!0);return c.leadingSpaceContent=e,e}function d(a,c){if(a.sol()){var d=b(a,c,c.codeBlockLeadingSpaceWidth);if(c.codeBlockHasReadText||a.match(/^\s*$/,!1)||(c.codeBlockHasReadText=!0,c.codeBlockLeadingSpaceWidth=d.length),d)return"leadingspace line-comment-block-line"}if(a.match(/^.*```\s*$/,!0))c.inCodeBlock=!1;else{if(a.match(/^\s+/,!0))return"comment line-comment-block-line comment-block-indentation";a.skipToEnd()}return"comment line-comment-block-line"}var e=require("linkify-it")({"ftp:":null,"//":null},{fuzzyEmail:!1}),f=new RegExp(".*?(?:`|https?://|\\.(?:"+e.re.src_tlds+")\\b)");return{startState:function startState(){return{foundBacktick:!1,leadingSpaceContent:null,sawTextBeforeOnLine:!1,inCodeBlock:!1,codeBlockLeadingSpaceWidth:null,codeBlockHasReadText:!1,headerLevel:0,stackOflinksOnLine:null,foundLink:!1,inTodo:!1}},token:function token(b,g){if(g.inCodeBlock)return d(b,g);if(b.sol()){g.foundLink||(g.stackOflinksOnLine=null),g.sawTextBeforeOnLine=!1,g.headerLevel=0,g.inTodo=!1;var h=c(b,g,/^(\s*\d+\.($|\s+)|[-*+>\s]+)/);if(h)return b.eol()&&/^\s*$/.test(h)?"leadingspace line-blank-line":(g.prevTokenOfLineWasLeadingSpace=!0,"leadingspace")}var j="";if(0<g.headerLevel&&(j+=" header-"+g.headerLevel),g.inTodo&&(j+=" todo-complete"),g.foundBacktick)return g.foundBacktick=!1,b.match(/^```\S*\s*$/,!0)?(g.inCodeBlock=!0,g.codeBlockHasReadText=!1,g.codeBlockLeadingSpaceWidth=g.leadingSpaceContent.length,g.sawTextBeforeOnLine?"comment"+j:"comment line-comment-block-line"+j):b.match(/^`[^`]+`/,!0)?"comment"+j:(b.eat("`"),j);if(g.foundLink){g.foundLink=!1;var k=g.stackOflinksOnLine.pop();return b.pos=k.lastIndex,"link"+j}if(!g.sawTextBeforeOnLine){var l=a(b,/#+ /,!0);if(l)return g.headerLevel=l.length,1>g.headerLevel?g.headerLevel=1:4<g.headerLevel&&(g.headerLevel=4),"formatting-header-"+g.headerLevel}if(!g.sawTextBeforeOnLine){var t=a(b,/=/,!0);if(t)return"formatting-todo";var u=a(b,/\//,!0);if(u)return"formatting-todo-delegated";var v=a(b,/</,!0);if(v)return"formatting-todo-backward";var w=a(b,/~/,!0);if(w)return g.inTodo=!0,"formatting-todo-complete"}var m=b.match(f,!0);if(!m)b.skipToEnd();else if(m=m[0],g.sawTextBeforeOnLine=!0,"`"==m[m.length-1])b.backUp(1),g.foundBacktick=!0;else{if(!g.stackOflinksOnLine){for(var n,o=b.string.slice(b.start),p=e.match(o)||[],q=0;q<p.length;q++)n=p[q],n.index+=b.start,n.lastIndex+=b.start;g.stackOflinksOnLine=p.reverse()}for(var r,s=g.stackOflinksOnLine;(r=s[s.length-1])&&r.index<b.start;)s.pop();r&&r.index<b.pos&&(b.pos=r.index,g.foundLink=!0)}return j},blankLine:function blankLine(a){return a.inCodeBlock?"line-comment-block-line":"line-blank-line"}}},"xml")})(CodeMirror);document.addEventListener("DOMContentLoaded",function(){function a(){l=new ComponentManager([{name:"stream-context-item"}],function(){var a=l.platform;a&&document.body.classList.add(a)}),l.streamContextItem(function(a){c(a)})}function b(){if(m){var a=m;l.saveItemWithPresave(a,function(){n=p.getValue(),a.content.text=n,a.clientData=t,a.content.preview_plain=null,a.content.preview_html=null})}}function c(a){a.uuid!==o&&(n=null,s=!0,o=a.uuid),m=a;a.isMetadataUpdate||(t=a.clientData,p&&(t&&(q.setAllowLongerLinesNoRefresh(f()),q.setColorHeaders(g()),q.setMonospaceNoRefresh(h())),a.content.text!==n&&(r=!0,p.getDoc().setValue(m.content.text),r=!1),s&&(s=!1,p.getDoc().clearHistory())))}function d(){q=new FastEditor(document.getElementById("code"),e()),p=q.editor,window.editor=p,p.on("change",function(){r||b()})}function e(){return{allow_longer_lines:f(),color_headers:g(),monospace:h()}}function f(){return i("allow_longer_lines",["yes","no"])}function g(){return i("color_headers",["yes","no"])}function h(){return i("monospace",["no","yes"])}function i(a,b){var c=t[a];return b.includes(c)||(c=j(a,b)),k(c)}function j(a,b){if(l&&l.componentData){var c=l.componentDataValueForKey(a+"_default");return b.includes(c)?c:b[0]}return b[0]}function k(a){if("yes"==a)return!0;if("no"==a)return!1;throw"Expected yes or no"}var l,m,n,o,p,q,r=!1,s=!0,t={monospace:"default"};window.displayConfigPanel=function(){l&&l.componentData&&"yes"==l.componentDataValueForKey("monospace_default")?document.querySelectorAll("[name=\"monospace_default\"][value=\"yes\"]")[0].checked=!0:document.querySelectorAll("[name=\"monospace_default\"][value=\"no\"]")[0].checked=!0,"yes"==t.monospace?document.querySelectorAll("[name=\"monospace\"][value=\"yes\"]")[0].checked=!0:"no"==t.monospace?document.querySelectorAll("[name=\"monospace\"][value=\"no\"]")[0].checked=!0:document.querySelectorAll("[name=\"monospace\"][value=\"default\"]")[0].checked=!0,l&&l.componentData&&"no"==l.componentDataValueForKey("allow_longer_lines_default")?document.querySelectorAll("[name=\"allow_longer_lines_default\"][value=\"no\"]")[0].checked=!0:document.querySelectorAll("[name=\"allow_longer_lines_default\"][value=\"yes\"]")[0].checked=!0,"yes"==t.allow_longer_lines?document.querySelectorAll("[name=\"allow_longer_lines\"][value=\"yes\"]")[0].checked=!0:"no"==t.allow_longer_lines?document.querySelectorAll("[name=\"allow_longer_lines\"][value=\"no\"]")[0].checked=!0:document.querySelectorAll("[name=\"allow_longer_lines\"][value=\"default\"]")[0].checked=!0,l&&l.componentData&&"no"==l.componentDataValueForKey("color_headers_default")?document.querySelectorAll("[name=\"color_headers_default\"][value=\"no\"]")[0].checked=!0:document.querySelectorAll("[name=\"color_headers_default\"][value=\"yes\"]")[0].checked=!0,"yes"==t.color_headers?document.querySelectorAll("[name=\"color_headers\"][value=\"yes\"]")[0].checked=!0:"no"==t.color_headers?document.querySelectorAll("[name=\"color_headers\"][value=\"no\"]")[0].checked=!0:document.querySelectorAll("[name=\"color_headers\"][value=\"default\"]")[0].checked=!0,document.getElementById("config-panel").style.display="block",p.getWrapperElement().style.display="none",document.getElementById("config-panel-toggle").style.display="none"},window.hideConfigPanel=function(){document.getElementById("config-panel").style.display="none",p.getWrapperElement().style.display="block",document.getElementById("config-panel-toggle").style.display="inline"},window.changeAllowLongerLinesConfig=function(a){t&&(t.allow_longer_lines=a),q.setAllowLongerLines(f()),b()},window.changeColorHeadersConfig=function(a){t&&(t.color_headers=a),q.setColorHeaders(g()),b()},window.changeMonospaceConfig=function(a){t&&(t.monospace=a),q.setMonospace(h()),b()},window.changeAllowLongerLinesDefaultConfig=function(a){l&&l.setComponentDataValueForKey("allow_longer_lines_default",a),q.setAllowLongerLines(f())},window.changeColorHeadersDefaultConfig=function(a){l&&l.setComponentDataValueForKey("color_headers_default",a),q.setColorHeaders(g())},window.changeMonospaceDefaultConfig=function(a){l&&l.setComponentDataValueForKey("monospace_default",a),q.setMonospace(h())},d(),a()});function getPlatform(){var a=navigator.userAgent.toLowerCase();return-1<a.indexOf(" electron/")?"Desktop":/(Version\/\d+.*\/\d+.0.0.0 Mobile|; ?wv|(iPhone|iPad|Macintosh).*AppleWebKit(?!.*Safari))/i.test(navigator.userAgent)?-1<navigator.userAgent.indexOf("iP")||-1<navigator.userAgent.indexOf("Macintosh")?"iOS":"Android":"Browser"}

},{"linkify-it":2}],2:[function(require,module,exports){
'use strict';


////////////////////////////////////////////////////////////////////////////////
// Helpers

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

function _class(obj) { return Object.prototype.toString.call(obj); }
function isString(obj) { return _class(obj) === '[object String]'; }
function isObject(obj) { return _class(obj) === '[object Object]'; }
function isRegExp(obj) { return _class(obj) === '[object RegExp]'; }
function isFunction(obj) { return _class(obj) === '[object Function]'; }


function escapeRE(str) { return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&'); }

////////////////////////////////////////////////////////////////////////////////


var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};


function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function (acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}


var defaultSchemas = {
  'http:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.http =  new RegExp(
          '^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i'
        );
      }
      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }
      return 0;
    }
  },
  'https:':  'http:',
  'ftp:':    'http:',
  '//':      {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.no_http) {
      // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.no_http =  new RegExp(
          '^' +
          self.re.src_auth +
          // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          '(?:localhost|(?:(?:' + self.re.src_domain + ')\\.)+' + self.re.src_domain_root + ')' +
          self.re.src_port +
          self.re.src_host_terminator +
          self.re.src_path,

          'i'
        );
      }

      if (self.re.no_http.test(tail)) {
        // should not be `://` & `///`, that protects from errors in protocol name
        if (pos >= 3 && text[pos - 3] === ':') { return 0; }
        if (pos >= 3 && text[pos - 3] === '/') { return 0; }
        return tail.match(self.re.no_http)[0].length;
      }
      return 0;
    }
  },
  'mailto:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.mailto) {
        self.re.mailto =  new RegExp(
          '^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i'
        );
      }
      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }
      return 0;
    }
  }
};

/*eslint-disable max-len*/

// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';

// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');

/*eslint-enable max-len*/

////////////////////////////////////////////////////////////////////////////////

function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__   = '';
}

function createValidator(re) {
  return function (text, pos) {
    var tail = text.slice(pos);

    if (re.test(tail)) {
      return tail.match(re)[0].length;
    }
    return 0;
  };
}

function createNormalizer() {
  return function (match, self) {
    self.normalize(match);
  };
}

// Schemas compiler. Build regexps.
//
function compile(self) {

  // Load & clone RE patterns.
  var re = self.re = require('./lib/re')(self.__opts__);

  // Define dynamic patterns
  var tlds = self.__tlds__.slice();

  self.onCompile();

  if (!self.__tlds_replaced__) {
    tlds.push(tlds_2ch_src_re);
  }
  tlds.push(re.src_xn);

  re.src_tlds = tlds.join('|');

  function untpl(tpl) { return tpl.replace('%TLDS%', re.src_tlds); }

  re.email_fuzzy      = RegExp(untpl(re.tpl_email_fuzzy), 'i');
  re.link_fuzzy       = RegExp(untpl(re.tpl_link_fuzzy), 'i');
  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
  re.host_fuzzy_test  = RegExp(untpl(re.tpl_host_fuzzy_test), 'i');

  //
  // Compile each schema
  //

  var aliases = [];

  self.__compiled__ = {}; // Reset compiled data

  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }

  Object.keys(self.__schemas__).forEach(function (name) {
    var val = self.__schemas__[name];

    // skip disabled methods
    if (val === null) { return; }

    var compiled = { validate: null, link: null };

    self.__compiled__[name] = compiled;

    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }

      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }

      return;
    }

    if (isString(val)) {
      aliases.push(name);
      return;
    }

    schemaError(name, val);
  });

  //
  // Compile postponed aliases
  //

  aliases.forEach(function (alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      // Silently fail on missed schemas to avoid errons on disable.
      // schemaError(alias, self.__schemas__[alias]);
      return;
    }

    self.__compiled__[alias].validate =
      self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize =
      self.__compiled__[self.__schemas__[alias]].normalize;
  });

  //
  // Fake record for guessed links
  //
  self.__compiled__[''] = { validate: null, normalize: createNormalizer() };

  //
  // Build schema condition
  //
  var slist = Object.keys(self.__compiled__)
                      .filter(function (name) {
                        // Filter disabled & fake schemas
                        return name.length > 0 && self.__compiled__[name];
                      })
                      .map(escapeRE)
                      .join('|');
  // (?!_) cause 1.5x slowdown
  self.re.schema_test   = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'i');
  self.re.schema_search = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'ig');

  self.re.pretest = RegExp(
    '(' + self.re.schema_test.source + ')|(' + self.re.host_fuzzy_test.source + ')|@',
    'i'
  );

  //
  // Cleanup
  //

  resetScanCache(self);
}

/**
 * class Match
 *
 * Match result. Single element of array, returned by [[LinkifyIt#match]]
 **/
function Match(self, shift) {
  var start = self.__index__,
      end   = self.__last_index__,
      text  = self.__text_cache__.slice(start, end);

  /**
   * Match#schema -> String
   *
   * Prefix (protocol) for matched string.
   **/
  this.schema    = self.__schema__.toLowerCase();
  /**
   * Match#index -> Number
   *
   * First position of matched string.
   **/
  this.index     = start + shift;
  /**
   * Match#lastIndex -> Number
   *
   * Next position after matched string.
   **/
  this.lastIndex = end + shift;
  /**
   * Match#raw -> String
   *
   * Matched string.
   **/
  this.raw       = text;
  /**
   * Match#text -> String
   *
   * Notmalized text of matched string.
   **/
  this.text      = text;
  /**
   * Match#url -> String
   *
   * Normalized url of matched string.
   **/
  this.url       = text;
}

function createMatch(self, shift) {
  var match = new Match(self, shift);

  self.__compiled__[match.schema].normalize(match, self);

  return match;
}


/**
 * class LinkifyIt
 **/

/**
 * new LinkifyIt(schemas, options)
 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Creates new linkifier instance with optional additional schemas.
 * Can be called without `new` keyword for convenience.
 *
 * By default understands:
 *
 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
 * - "fuzzy" links and emails (example.com, foo@bar.com).
 *
 * `schemas` is an object, where each key/value describes protocol/rule:
 *
 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
 *   for example). `linkify-it` makes shure that prefix is not preceeded with
 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
 * - __value__ - rule to check tail after link prefix
 *   - _String_ - just alias to existing rule
 *   - _Object_
 *     - _validate_ - validator function (should return matched length on success),
 *       or `RegExp`.
 *     - _normalize_ - optional function to normalize text & url of matched result
 *       (for example, for @twitter mentions).
 *
 * `options`:
 *
 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
 *   like version numbers. Default `false`.
 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
 *
 **/
function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }

  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }

  this.__opts__           = assign({}, defaultOptions, options);

  // Cache last tested result. Used to skip repeating steps on next `match` call.
  this.__index__          = -1;
  this.__last_index__     = -1; // Next scan position
  this.__schema__         = '';
  this.__text_cache__     = '';

  this.__schemas__        = assign({}, defaultSchemas, schemas);
  this.__compiled__       = {};

  this.__tlds__           = tlds_default;
  this.__tlds_replaced__  = false;

  this.re = {};

  compile(this);
}


/** chainable
 * LinkifyIt#add(schema, definition)
 * - schema (String): rule name (fixed pattern prefix)
 * - definition (String|RegExp|Object): schema definition
 *
 * Add new rule definition. See constructor description for details.
 **/
LinkifyIt.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};


/** chainable
 * LinkifyIt#set(options)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Set recognition options for links without schema.
 **/
LinkifyIt.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};


/**
 * LinkifyIt#test(text) -> Boolean
 *
 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
 **/
LinkifyIt.prototype.test = function test(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__      = -1;

  if (!text.length) { return false; }

  var m, ml, me, len, shift, next, re, tld_pos, at_pos;

  // try to scan for link with schema - that's the most simple rule
  if (this.re.schema_test.test(text)) {
    re = this.re.schema_search;
    re.lastIndex = 0;
    while ((m = re.exec(text)) !== null) {
      len = this.testSchemaAt(text, m[2], re.lastIndex);
      if (len) {
        this.__schema__     = m[2];
        this.__index__      = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }

  if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
    // guess schemaless links
    tld_pos = text.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      // if tld is located after found link - no need to check fuzzy pattern
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {

          shift = ml.index + ml[1].length;

          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__     = '';
            this.__index__      = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }

  if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
    // guess schemaless emails
    at_pos = text.indexOf('@');
    if (at_pos >= 0) {
      // We can't skip this check, because this cases are possible:
      // 192.168.1.1@gmail.com, my.in@example.com
      if ((me = text.match(this.re.email_fuzzy)) !== null) {

        shift = me.index + me[1].length;
        next  = me.index + me[0].length;

        if (this.__index__ < 0 || shift < this.__index__ ||
            (shift === this.__index__ && next > this.__last_index__)) {
          this.__schema__     = 'mailto:';
          this.__index__      = shift;
          this.__last_index__ = next;
        }
      }
    }
  }

  return this.__index__ >= 0;
};


/**
 * LinkifyIt#pretest(text) -> Boolean
 *
 * Very quick check, that can give false positives. Returns true if link MAY BE
 * can exists. Can be used for speed optimization, when you need to check that
 * link NOT exists.
 **/
LinkifyIt.prototype.pretest = function pretest(text) {
  return this.re.pretest.test(text);
};


/**
 * LinkifyIt#testSchemaAt(text, name, position) -> Number
 * - text (String): text to scan
 * - name (String): rule (schema) name
 * - position (Number): text offset to check from
 *
 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
 * at given position. Returns length of found pattern (0 on fail).
 **/
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
  // If not supported schema check requested - terminate
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
};


/**
 * LinkifyIt#match(text) -> Array|null
 *
 * Returns array of found link descriptions or `null` on fail. We strongly
 * recommend to use [[LinkifyIt#test]] first, for best speed.
 *
 * ##### Result match description
 *
 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
 *   protocol-neutral  links.
 * - __index__ - offset of matched text
 * - __lastIndex__ - index of next char after mathch end
 * - __raw__ - matched text
 * - __text__ - normalized text
 * - __url__ - link, generated from matched text
 **/
LinkifyIt.prototype.match = function match(text) {
  var shift = 0, result = [];

  // Try to take previous element from cache, if .test() called before
  if (this.__index__ >= 0 && this.__text_cache__ === text) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }

  // Cut head if cache was used
  var tail = shift ? text.slice(shift) : text;

  // Scan string until end reached
  while (this.test(tail)) {
    result.push(createMatch(this, shift));

    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }

  if (result.length) {
    return result;
  }

  return null;
};


/** chainable
 * LinkifyIt#tlds(list [, keepOld]) -> this
 * - list (Array): list of tlds
 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
 *
 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
 * to avoid false positives. By default this algorythm used:
 *
 * - hostname with any 2-letter root zones are ok.
 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
 *   are ok.
 * - encoded (`xn--...`) root zones are ok.
 *
 * If list is replaced, then exact match for 2-chars root zones will be checked.
 **/
LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
  list = Array.isArray(list) ? list : [ list ];

  if (!keepOld) {
    this.__tlds__ = list.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }

  this.__tlds__ = this.__tlds__.concat(list)
                                  .sort()
                                  .filter(function (el, idx, arr) {
                                    return el !== arr[idx - 1];
                                  })
                                  .reverse();

  compile(this);
  return this;
};

/**
 * LinkifyIt#normalize(match)
 *
 * Default normalizer (if schema does not define it's own).
 **/
LinkifyIt.prototype.normalize = function normalize(match) {

  // Do minimal possible changes by default. Need to collect feedback prior
  // to move forward https://github.com/markdown-it/linkify-it/issues/1

  if (!match.schema) { match.url = 'http://' + match.url; }

  if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
    match.url = 'mailto:' + match.url;
  }
};


/**
 * LinkifyIt#onCompile()
 *
 * Override to modify basic RegExp-s.
 **/
LinkifyIt.prototype.onCompile = function onCompile() {
};


module.exports = LinkifyIt;

},{"./lib/re":3}],3:[function(require,module,exports){
'use strict';


module.exports = function (opts) {
  var re = {};

  // Use direct extract instead of `regenerate` to reduse browserified size
  re.src_Any = require('uc.micro/properties/Any/regex').source;
  re.src_Cc  = require('uc.micro/categories/Cc/regex').source;
  re.src_Z   = require('uc.micro/categories/Z/regex').source;
  re.src_P   = require('uc.micro/categories/P/regex').source;

  // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
  re.src_ZPCc = [ re.src_Z, re.src_P, re.src_Cc ].join('|');

  // \p{\Z\Cc} (white spaces + control)
  re.src_ZCc = [ re.src_Z, re.src_Cc ].join('|');

  // Experimental. List of chars, completely prohibited in links
  // because can separate it from other part of text
  var text_separators = '[><\uff5c]';

  // All possible word characters (everything without punctuation, spaces & controls)
  // Defined via punctuation & spaces to save space
  // Should be something like \p{\L\N\S\M} (\w but without `_`)
  re.src_pseudo_letter       = '(?:(?!' + text_separators + '|' + re.src_ZPCc + ')' + re.src_Any + ')';
  // The same as abothe but without [0-9]
  // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';

  ////////////////////////////////////////////////////////////////////////////////

  re.src_ip4 =

    '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

  // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
  re.src_auth    = '(?:(?:(?!' + re.src_ZCc + '|[@/\\[\\]()]).)+@)?';

  re.src_port =

    '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';

  re.src_host_terminator =

    '(?=$|' + text_separators + '|' + re.src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + re.src_ZPCc + '))';

  re.src_path =

    '(?:' +
      '[/?#]' +
        '(?:' +
          '(?!' + re.src_ZCc + '|' + text_separators + '|[()[\\]{}.,"\'?!\\-;]).|' +
          '\\[(?:(?!' + re.src_ZCc + '|\\]).)*\\]|' +
          '\\((?:(?!' + re.src_ZCc + '|[)]).)*\\)|' +
          '\\{(?:(?!' + re.src_ZCc + '|[}]).)*\\}|' +
          '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' +
          "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" +
          "\\'(?=" + re.src_pseudo_letter + '|[-]).|' +  // allow `I'm_king` if no pair found
          '\\.{2,}[a-zA-Z0-9%/&]|' + // google has many dots in "google search" links (#66, #81).
                                     // github has ... in commit range links,
                                     // Restrict to
                                     // - english
                                     // - percent-encoded
                                     // - parts of file path
                                     // - params separator
                                     // until more examples found.
          '\\.(?!' + re.src_ZCc + '|[.]).|' +
          (opts && opts['---'] ?
            '\\-(?!--(?:[^-]|$))(?:-*)|' // `---` => long dash, terminate
            :
            '\\-+|'
          ) +
          ',(?!' + re.src_ZCc + ').|' +       // allow `,,,` in paths
          ';(?!' + re.src_ZCc + ').|' +       // allow `;` if not followed by space-like char
          '\\!+(?!' + re.src_ZCc + '|[!]).|' +  // allow `!!!` in paths, but not at the end
          '\\?(?!' + re.src_ZCc + '|[?]).' +
        ')+' +
      '|\\/' +
    ')?';

  // Allow anything in markdown spec, forbid quote (") at the first position
  // because emails enclosed in quotes are far more common
  re.src_email_name =

    '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';

  re.src_xn =

    'xn--[a-z0-9\\-]{1,59}';

  // More to read about domain names
  // http://serverfault.com/questions/638260/

  re.src_domain_root =

    // Allow letters & digits (http://test1)
    '(?:' +
      re.src_xn +
      '|' +
      re.src_pseudo_letter + '{1,63}' +
    ')';

  re.src_domain =

    '(?:' +
      re.src_xn +
      '|' +
      '(?:' + re.src_pseudo_letter + ')' +
      '|' +
      '(?:' + re.src_pseudo_letter + '(?:-|' + re.src_pseudo_letter + '){0,61}' + re.src_pseudo_letter + ')' +
    ')';

  re.src_host =

    '(?:' +
    // Don't need IP check, because digits are already allowed in normal domain names
    //   src_ip4 +
    // '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)*' + re.src_domain/*_root*/ + ')' +
    ')';

  re.tpl_host_fuzzy =

    '(?:' +
      re.src_ip4 +
    '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))' +
    ')';

  re.tpl_host_no_ip_fuzzy =

    '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))';

  re.src_host_strict =

    re.src_host + re.src_host_terminator;

  re.tpl_host_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_host_terminator;

  re.src_host_port_strict =

    re.src_host + re.src_port + re.src_host_terminator;

  re.tpl_host_port_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;

  re.tpl_host_port_no_ip_fuzzy_strict =

    re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;


  ////////////////////////////////////////////////////////////////////////////////
  // Main rules

  // Rude test fuzzy links by host, for quick deny
  re.tpl_host_fuzzy_test =

    'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + re.src_ZPCc + '|>|$))';

  re.tpl_email_fuzzy =

      '(^|' + text_separators + '|"|\\(|' + re.src_ZCc + ')' +
      '(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';

  re.tpl_link_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_fuzzy_strict + re.src_path + ')';

  re.tpl_link_no_ip_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ')';

  return re;
};

},{"uc.micro/categories/Cc/regex":4,"uc.micro/categories/P/regex":5,"uc.micro/categories/Z/regex":6,"uc.micro/properties/Any/regex":7}],4:[function(require,module,exports){
module.exports=/[\0-\x1F\x7F-\x9F]/
},{}],5:[function(require,module,exports){
module.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
},{}],6:[function(require,module,exports){
module.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/
},{}],7:[function(require,module,exports){
module.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
},{}]},{},[1]);
