/*
 * BraDypUS javascripts minified archive includes different sources and licenses
 * For details on external libraries (copyrights and licenses) please consult the Credits information
 * Created: 1399219443.3269
*/

function sprintf(){var regex=/%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;var a=arguments,i=0,format=a[i++];var pad=function(str,len,chr,leftJustify){if(!chr){chr=' ';}
var padding=(str.length>=len)?'':Array(1+len-str.length>>>0).join(chr);return leftJustify?str+padding:padding+str;};var justify=function(value,prefix,leftJustify,minWidth,zeroPad,customPadChar){var diff=minWidth-value.length;if(diff>0){if(leftJustify||!zeroPad){value=pad(value,minWidth,customPadChar,leftJustify);}else{value=value.slice(0,prefix.length)+pad('',diff,'0',true)+value.slice(prefix.length);}}
return value;};var formatBaseX=function(value,base,prefix,leftJustify,minWidth,precision,zeroPad){var number=value>>>0;prefix=prefix&&number&&{'2':'0b','8':'0','16':'0x'}[base]||'';value=prefix+pad(number.toString(base),precision||0,'0',false);return justify(value,prefix,leftJustify,minWidth,zeroPad);};var formatString=function(value,leftJustify,minWidth,precision,zeroPad,customPadChar){if(precision!=null){value=value.slice(0,precision);}
return justify(value,'',leftJustify,minWidth,zeroPad,customPadChar);};var doFormat=function(substring,valueIndex,flags,minWidth,_,precision,type){var number;var prefix;var method;var textTransform;var value;if(substring=='%%'){return'%';}
var leftJustify=false,positivePrefix='',zeroPad=false,prefixBaseX=false,customPadChar=' ';var flagsl=flags.length;for(var j=0;flags&&j<flagsl;j++){switch(flags.charAt(j)){case' ':positivePrefix=' ';break;case'+':positivePrefix='+';break;case'-':leftJustify=true;break;case"'":customPadChar=flags.charAt(j+1);break;case'0':zeroPad=true;break;case'#':prefixBaseX=true;break;}}
if(!minWidth){minWidth=0;}else if(minWidth=='*'){minWidth=+a[i++];}else if(minWidth.charAt(0)=='*'){minWidth=+a[minWidth.slice(1,-1)];}else{minWidth=+minWidth;}
if(minWidth<0){minWidth=-minWidth;leftJustify=true;}
if(!isFinite(minWidth)){throw new Error('sprintf: (minimum-)width must be finite');}
if(!precision){precision='fFeE'.indexOf(type)>-1?6:(type=='d')?0:undefined;}else if(precision=='*'){precision=+a[i++];}else if(precision.charAt(0)=='*'){precision=+a[precision.slice(1,-1)];}else{precision=+precision;}
value=valueIndex?a[valueIndex.slice(0,-1)]:a[i++];switch(type){case's':return formatString(String(value),leftJustify,minWidth,precision,zeroPad,customPadChar);case'c':return formatString(String.fromCharCode(+value),leftJustify,minWidth,precision,zeroPad);case'b':return formatBaseX(value,2,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'o':return formatBaseX(value,8,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'x':return formatBaseX(value,16,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'X':return formatBaseX(value,16,prefixBaseX,leftJustify,minWidth,precision,zeroPad).toUpperCase();case'u':return formatBaseX(value,10,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'i':case'd':number=(+value)|0;prefix=number<0?'-':positivePrefix;value=prefix+pad(String(Math.abs(number)),precision,'0',false);return justify(value,prefix,leftJustify,minWidth,zeroPad);case'e':case'E':case'f':case'F':case'g':case'G':number=+value;prefix=number<0?'-':positivePrefix;method=['toExponential','toFixed','toPrecision']['efg'.indexOf(type.toLowerCase())];textTransform=['toString','toUpperCase']['eEfFgG'.indexOf(type)%2];value=prefix+Math.abs(number)[method](precision);return justify(value,prefix,leftJustify,minWidth,zeroPad)[textTransform]();default:return substring;}};return format.replace(regex,doFormat);}
function vsprintf(format,args){return this.sprintf.apply(this,[format].concat(args));}
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});
!function($,window,undefined){var eventNames,pluginName='sortable',containerDefaults={drag:true,drop:true,exclude:"",nested:true,vertical:true},groupDefaults={afterMove:function($placeholder,container){},containerPath:"",containerSelector:"ol, ul",distance:0,handle:"",itemPath:"",itemSelector:"li",isValidTarget:function($item,container){return true},onCancel:function($item,container,_super){},onDrag:function($item,position,_super){$item.css(position)},onDragStart:function($item,container,_super){$item.css({height:$item.height(),width:$item.width()})
$item.addClass("dragged")
$("body").addClass("dragging")},onDrop:function($item,container,_super){$item.removeClass("dragged").removeAttr("style")
$("body").removeClass("dragging")},onMousedown:function($item,event,_super){event.preventDefault()},placeholder:'<li class="placeholder"/>',pullPlaceholder:true,serialize:function($parent,$children,parentIsContainer){var result=$.extend({},$parent.data())
if(parentIsContainer)
return $children
else if($children[0]){result.children=$children
delete result.subContainer}
delete result.sortable
return result},tolerance:0},containerGroups={},groupCounter=0,emptyBox={left:0,top:0,bottom:0,right:0}
eventNames={start:"touchstart.sortable mousedown.sortable",drop:"touchend.sortable touchcancel.sortable mouseup.sortable",drag:"touchmove.sortable mousemove.sortable",scroll:"scroll.sortable"}
function d(a,b){var x=Math.max(0,a[0]-b[0],b[0]-a[1]),y=Math.max(0,a[2]-b[1],b[1]-a[3])
return x+y;}
function setDimensions(array,dimensions,tolerance,useOffset){var i=array.length,offsetMethod=useOffset?"offset":"position"
tolerance=tolerance||0
while(i--){var el=array[i].el?array[i].el:$(array[i]),pos=el[offsetMethod]()
pos.left+=parseInt(el.css('margin-left'),10)
pos.top+=parseInt(el.css('margin-top'),10)
dimensions[i]=[pos.left-tolerance,pos.left+el.outerWidth()+tolerance,pos.top-tolerance,pos.top+el.outerHeight()+tolerance]}}
function getRelativePosition(pointer,element){var offset=element.offset()
return{left:pointer.left-offset.left,top:pointer.top-offset.top}}
function sortByDistanceDesc(dimensions,pointer,lastPointer){pointer=[pointer.left,pointer.top]
lastPointer=lastPointer&&[lastPointer.left,lastPointer.top]
var dim,i=dimensions.length,distances=[]
while(i--){dim=dimensions[i]
distances[i]=[i,d(dim,pointer),lastPointer&&d(dim,lastPointer)]}
distances=distances.sort(function(a,b){return b[1]-a[1]||b[2]-a[2]||b[0]-a[0]})
return distances}
function ContainerGroup(options){this.options=$.extend({},groupDefaults,options)
this.containers=[]
this.scrollProxy=$.proxy(this.scroll,this)
this.dragProxy=$.proxy(this.drag,this)
this.dropProxy=$.proxy(this.drop,this)
if(!this.options.parentContainer){this.placeholder=$(this.options.placeholder)
if(!options.isValidTarget)
this.options.isValidTarget=undefined}}
ContainerGroup.get=function(options){if(!containerGroups[options.group]){if(!options.group)
options.group=groupCounter++
containerGroups[options.group]=new ContainerGroup(options)}
return containerGroups[options.group]}
ContainerGroup.prototype={dragInit:function(e,itemContainer){this.$document=$(itemContainer.el[0].ownerDocument)
if(itemContainer.enabled()){this.toggleListeners('on')
this.item=$(e.target).closest(this.options.itemSelector)
this.itemContainer=itemContainer
this.setPointer(e)
this.options.onMousedown(this.item,e,groupDefaults.onMousedown)}else{this.toggleListeners('on',['drop'])}
this.dragInitDone=true},drag:function(e){if(!this.dragging){if(!this.distanceMet(e))
return
this.options.onDragStart(this.item,this.itemContainer,groupDefaults.onDragStart)
this.item.before(this.placeholder)
this.dragging=true}
this.setPointer(e)
this.options.onDrag(this.item,getRelativePosition(this.pointer,this.item.offsetParent()),groupDefaults.onDrag)
var x=e.pageX,y=e.pageY,box=this.sameResultBox,t=this.options.tolerance
if(!box||box.top-t>y||box.bottom+t<y||box.left-t>x||box.right+t<x)
if(!this.searchValidTarget())
this.placeholder.detach()},drop:function(e){this.toggleListeners('off')
this.dragInitDone=false
if(this.dragging){if(this.placeholder.closest("html")[0])
this.placeholder.before(this.item).detach()
else
this.options.onCancel(this.item,this.itemContainer,groupDefaults.onCancel)
this.options.onDrop(this.item,this.getContainer(this.item),groupDefaults.onDrop)
this.clearDimensions()
this.clearOffsetParent()
this.lastAppendedItem=this.sameResultBox=undefined
this.dragging=false}},searchValidTarget:function(pointer,lastPointer){if(!pointer){pointer=this.relativePointer||this.pointer
lastPointer=this.lastRelativePointer||this.lastPointer}
var distances=sortByDistanceDesc(this.getContainerDimensions(),pointer,lastPointer),i=distances.length
while(i--){var index=distances[i][0],distance=distances[i][1]
if(!distance||this.options.pullPlaceholder){var container=this.containers[index]
if(!container.disabled){if(!this.$getOffsetParent()){var offsetParent=container.getItemOffsetParent()
pointer=getRelativePosition(pointer,offsetParent)
lastPointer=getRelativePosition(lastPointer,offsetParent)}
if(container.searchValidTarget(pointer,lastPointer))
return true}}}
if(this.sameResultBox)
this.sameResultBox=undefined},movePlaceholder:function(container,item,method,sameResultBox){var lastAppendedItem=this.lastAppendedItem
if(!sameResultBox&&lastAppendedItem&&lastAppendedItem[0]===item[0])
return;item[method](this.placeholder)
this.lastAppendedItem=item
this.sameResultBox=sameResultBox
this.options.afterMove(this.placeholder,container)},getContainerDimensions:function(){if(!this.containerDimensions)
setDimensions(this.containers,this.containerDimensions=[],this.options.tolerance,!this.$getOffsetParent())
return this.containerDimensions},getContainer:function(element){return element.closest(this.options.containerSelector).data(pluginName)},$getOffsetParent:function(){if(this.offsetParent===undefined){var i=this.containers.length-1,offsetParent=this.containers[i].getItemOffsetParent()
if(!this.options.parentContainer){while(i--){if(offsetParent[0]!=this.containers[i].getItemOffsetParent()[0]){offsetParent=false
break;}}}
this.offsetParent=offsetParent}
return this.offsetParent},setPointer:function(e){var pointer={left:e.pageX,top:e.pageY}
if(this.$getOffsetParent()){var relativePointer=getRelativePosition(pointer,this.$getOffsetParent())
this.lastRelativePointer=this.relativePointer
this.relativePointer=relativePointer}
this.lastPointer=this.pointer
this.pointer=pointer},distanceMet:function(e){return(Math.max(Math.abs(this.pointer.left-e.pageX),Math.abs(this.pointer.top-e.pageY))>=this.options.distance)},scroll:function(e){this.clearDimensions()
this.clearOffsetParent()},toggleListeners:function(method,events){var that=this
events=events||['drag','drop','scroll']
$.each(events,function(i,event){that.$document[method](eventNames[event],that[event+'Proxy'])})},clearOffsetParent:function(){this.offsetParent=undefined},clearDimensions:function(){this.containerDimensions=undefined
var i=this.containers.length
while(i--){this.containers[i].clearDimensions()}}}
function Container(element,options){this.el=element
this.options=$.extend({},containerDefaults,options)
this.group=ContainerGroup.get(this.options)
this.rootGroup=this.options.rootGroup=this.options.rootGroup||this.group
this.parentContainer=this.options.parentContainer
this.handle=this.rootGroup.options.handle||this.rootGroup.options.itemSelector
this.el.on(eventNames.start,this.handle,$.proxy(this.dragInit,this))
if(this.options.drop)
this.group.containers.push(this)}
Container.prototype={dragInit:function(e){var rootGroup=this.rootGroup
if(!rootGroup.dragInitDone&&e.which===1&&this.options.drag&&!$(e.target).is(this.options.exclude))
rootGroup.dragInit(e,this)},searchValidTarget:function(pointer,lastPointer){var distances=sortByDistanceDesc(this.getItemDimensions(),pointer,lastPointer),i=distances.length,rootGroup=this.rootGroup,validTarget=!rootGroup.options.isValidTarget||rootGroup.options.isValidTarget(rootGroup.item,this)
if(!i&&validTarget){rootGroup.movePlaceholder(this,this.el,"append")
return true}else
while(i--){var index=distances[i][0],distance=distances[i][1]
if(!distance&&this.hasChildGroup(index)){var found=this.getContainerGroup(index).searchValidTarget(pointer,lastPointer)
if(found)
return true}
else if(validTarget){this.movePlaceholder(index,pointer)
return true}}},movePlaceholder:function(index,pointer){var item=$(this.items[index]),dim=this.itemDimensions[index],method="after",width=item.outerWidth(),height=item.outerHeight(),offset=item.offset(),sameResultBox={left:offset.left,right:offset.left+width,top:offset.top,bottom:offset.top+height}
if(this.options.vertical){var yCenter=(dim[2]+dim[3])/2,inUpperHalf=pointer.top<=yCenter
if(inUpperHalf){method="before"
sameResultBox.bottom-=height/2}else
sameResultBox.top+=height/2}else{var xCenter=(dim[0]+dim[1])/2,inLeftHalf=pointer.left<=xCenter
if(inLeftHalf){method="before"
sameResultBox.right-=width/2}else
sameResultBox.left+=width/2}
if(this.hasChildGroup(index))
sameResultBox=emptyBox
this.rootGroup.movePlaceholder(this,item,method,sameResultBox)},getItemDimensions:function(){if(!this.itemDimensions){this.items=this.$getChildren(this.el,"item").filter(":not(.placeholder, .dragged)").get()
setDimensions(this.items,this.itemDimensions=[],this.options.tolerance)}
return this.itemDimensions},getItemOffsetParent:function(){var offsetParent,el=this.el
if(el.css("position")==="relative"||el.css("position")==="absolute"||el.css("position")==="fixed")
offsetParent=el
else
offsetParent=el.offsetParent()
return offsetParent},hasChildGroup:function(index){return this.options.nested&&this.getContainerGroup(index)},getContainerGroup:function(index){var childGroup=$.data(this.items[index],"subContainer")
if(childGroup===undefined){var childContainers=this.$getChildren(this.items[index],"container")
childGroup=false
if(childContainers[0]){var options=$.extend({},this.options,{parentContainer:this,group:groupCounter++})
childGroup=childContainers[pluginName](options).data(pluginName).group}
$.data(this.items[index],"subContainer",childGroup)}
return childGroup},enabled:function(){return!this.disabled&&(!this.parentContainer||this.parentContainer.enabled())},$getChildren:function(parent,type){var options=this.rootGroup.options,path=options[type+"Path"],selector=options[type+"Selector"]
parent=$(parent)
if(path)
parent=parent.find(path)
return parent.children(selector)},_serialize:function(parent,isContainer){var that=this,childType=isContainer?"item":"container",children=this.$getChildren(parent,childType).not(this.options.exclude).map(function(){return that._serialize($(this),!isContainer)}).get()
return this.rootGroup.options.serialize(parent,children,isContainer)},clearDimensions:function(){this.itemDimensions=undefined
if(this.items&&this.items[0]){var i=this.items.length
while(i--){var group=$.data(this.items[i],"subContainer")
if(group)
group.clearDimensions()}}}}
var API={enable:function(ignoreChildren){this.disabled=false},disable:function(ignoreChildren){this.disabled=true},serialize:function(){return this._serialize(this.el,true)}}
$.extend(Container.prototype,API)
$.fn[pluginName]=function(methodOrOptions){var args=Array.prototype.slice.call(arguments,1)
return this.map(function(){var $t=$(this),object=$t.data(pluginName)
if(object&&API[methodOrOptions])
return API[methodOrOptions].apply(object,args)||this
else if(!object&&(methodOrOptions===undefined||typeof methodOrOptions==="object"))
$t.data(pluginName,new Container($t,methodOrOptions))
return this});};}(jQuery,window)

if(typeof jQuery==='undefined'){throw new Error('Bootstrap\'s JavaScript requires jQuery')}
+function($){'use strict';function transitionEnd(){var el=document.createElement('bootstrap')
var transEndEventNames={'WebkitTransition':'webkitTransitionEnd','MozTransition':'transitionend','OTransition':'oTransitionEnd otransitionend','transition':'transitionend'}
for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
return false}
$.fn.emulateTransitionEnd=function(duration){var called=false,$el=this
$(this).one($.support.transition.end,function(){called=true})
var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
setTimeout(callback,duration)
return this}
$(function(){$.support.transition=transitionEnd()})}(jQuery);+function($){'use strict';var dismiss='[data-dismiss="alert"]'
var Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.prototype.close=function(e){var $this=$(this)
var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=$(selector)
if(e)e.preventDefault()
if(!$parent.length){$parent=$this.hasClass('alert')?$this:$this.parent()}
$parent.trigger(e=$.Event('close.bs.alert'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent.trigger('closed.bs.alert').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.one($.support.transition.end,removeElement).emulateTransitionEnd(150):removeElement()}
var old=$.fn.alert
$.fn.alert=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.alert')
if(!data)$this.data('bs.alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
$.fn.alert.Constructor=Alert
$.fn.alert.noConflict=function(){$.fn.alert=old
return this}
$(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery);+function($){'use strict';var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},Button.DEFAULTS,options)
this.isLoading=false}
Button.DEFAULTS={loadingText:'loading...'}
Button.prototype.setState=function(state){var d='disabled'
var $el=this.$element
var val=$el.is('input')?'val':'html'
var data=$el.data()
state=state+'Text'
if(!data.resetText)$el.data('resetText',$el[val]())
$el[val](data[state]||this.options[state])
setTimeout($.proxy(function(){if(state=='loadingText'){this.isLoading=true
$el.addClass(d).attr(d,d)}else if(this.isLoading){this.isLoading=false
$el.removeClass(d).removeAttr(d)}},this),0)}
Button.prototype.toggle=function(){var changed=true
var $parent=this.$element.closest('[data-toggle="buttons"]')
if($parent.length){var $input=this.$element.find('input')
if($input.prop('type')=='radio'){if($input.prop('checked')&&this.$element.hasClass('active'))changed=false
else $parent.find('.active').removeClass('active')}
if(changed)$input.prop('checked',!this.$element.hasClass('active')).trigger('change')}
if(changed)this.$element.toggleClass('active')}
var old=$.fn.button
$.fn.button=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.button')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
$.fn.button.Constructor=Button
$.fn.button.noConflict=function(){$.fn.button=old
return this}
$(document).on('click.bs.button.data-api','[data-toggle^=button]',function(e){var $btn=$(e.target)
if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn')
$btn.button('toggle')
e.preventDefault()})}(jQuery);+function($){'use strict';var Carousel=function(element,options){this.$element=$(element)
this.$indicators=this.$element.find('.carousel-indicators')
this.options=options
this.paused=this.sliding=this.interval=this.$active=this.$items=null
this.options.pause=='hover'&&this.$element.on('mouseenter',$.proxy(this.pause,this)).on('mouseleave',$.proxy(this.cycle,this))}
Carousel.DEFAULTS={interval:5000,pause:'hover',wrap:true}
Carousel.prototype.cycle=function(e){e||(this.paused=false)
this.interval&&clearInterval(this.interval)
this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this}
Carousel.prototype.getActiveIndex=function(){this.$active=this.$element.find('.item.active')
this.$items=this.$active.parent().children()
return this.$items.index(this.$active)}
Carousel.prototype.to=function(pos){var that=this
var activeIndex=this.getActiveIndex()
if(pos>(this.$items.length-1)||pos<0)return
if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos)})
if(activeIndex==pos)return this.pause().cycle()
return this.slide(pos>activeIndex?'next':'prev',$(this.$items[pos]))}
Carousel.prototype.pause=function(e){e||(this.paused=true)
if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end)
this.cycle(true)}
this.interval=clearInterval(this.interval)
return this}
Carousel.prototype.next=function(){if(this.sliding)return
return this.slide('next')}
Carousel.prototype.prev=function(){if(this.sliding)return
return this.slide('prev')}
Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active')
var $next=next||$active[type]()
var isCycling=this.interval
var direction=type=='next'?'left':'right'
var fallback=type=='next'?'first':'last'
var that=this
if(!$next.length){if(!this.options.wrap)return
$next=this.$element.find('.item')[fallback]()}
if($next.hasClass('active'))return this.sliding=false
var e=$.Event('slide.bs.carousel',{relatedTarget:$next[0],direction:direction})
this.$element.trigger(e)
if(e.isDefaultPrevented())return
this.sliding=true
isCycling&&this.pause()
if(this.$indicators.length){this.$indicators.find('.active').removeClass('active')
this.$element.one('slid.bs.carousel',function(){var $nextIndicator=$(that.$indicators.children()[that.getActiveIndex()])
$nextIndicator&&$nextIndicator.addClass('active')})}
if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
$active.one($.support.transition.end,function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger('slid.bs.carousel')},0)}).emulateTransitionEnd($active.css('transition-duration').slice(0,-1)*1000)}else{$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger('slid.bs.carousel')}
isCycling&&this.cycle()
return this}
var old=$.fn.carousel
$.fn.carousel=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.carousel')
var options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option)
var action=typeof option=='string'?option:options.slide
if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(action)data[action]()
else if(options.interval)data.pause().cycle()})}
$.fn.carousel.Constructor=Carousel
$.fn.carousel.noConflict=function(){$.fn.carousel=old
return this}
$(document).on('click.bs.carousel.data-api','[data-slide], [data-slide-to]',function(e){var $this=$(this),href
var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))
var options=$.extend({},$target.data(),$this.data())
var slideIndex=$this.attr('data-slide-to')
if(slideIndex)options.interval=false
$target.carousel(options)
if(slideIndex=$this.attr('data-slide-to')){$target.data('bs.carousel').to(slideIndex)}
e.preventDefault()})
$(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this)
$carousel.carousel($carousel.data())})})}(jQuery);+function($){'use strict';var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},Collapse.DEFAULTS,options)
this.transitioning=null
if(this.options.parent)this.$parent=$(this.options.parent)
if(this.options.toggle)this.toggle()}
Collapse.DEFAULTS={toggle:true}
Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'}
Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return
var startEvent=$.Event('show.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var actives=this.$parent&&this.$parent.find('> .panel > .in')
if(actives&&actives.length){var hasData=actives.data('bs.collapse')
if(hasData&&hasData.transitioning)return
actives.collapse('hide')
hasData||actives.data('bs.collapse',null)}
var dimension=this.dimension()
this.$element.removeClass('collapse').addClass('collapsing')
[dimension](0)
this.transitioning=1
var complete=function(){this.$element.removeClass('collapsing').addClass('collapse in')
[dimension]('auto')
this.transitioning=0
this.$element.trigger('shown.bs.collapse')}
if(!$.support.transition)return complete.call(this)
var scrollSize=$.camelCase(['scroll',dimension].join('-'))
this.$element.one($.support.transition.end,$.proxy(complete,this)).emulateTransitionEnd(350)
[dimension](this.$element[0][scrollSize])}
Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return
var startEvent=$.Event('hide.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
var dimension=this.dimension()
this.$element
[dimension](this.$element[dimension]())
[0].offsetHeight
this.$element.addClass('collapsing').removeClass('collapse').removeClass('in')
this.transitioning=1
var complete=function(){this.transitioning=0
this.$element.trigger('hidden.bs.collapse').removeClass('collapsing').addClass('collapse')}
if(!$.support.transition)return complete.call(this)
this.$element
[dimension](0).one($.support.transition.end,$.proxy(complete,this)).emulateTransitionEnd(350)}
Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']()}
var old=$.fn.collapse
$.fn.collapse=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.collapse')
var options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data&&options.toggle&&option=='show')option=!option
if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.collapse.Constructor=Collapse
$.fn.collapse.noConflict=function(){$.fn.collapse=old
return this}
$(document).on('click.bs.collapse.data-api','[data-toggle=collapse]',function(e){var $this=$(this),href
var target=$this.attr('data-target')||e.preventDefault()||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')
var $target=$(target)
var data=$target.data('bs.collapse')
var option=data?'toggle':$this.data()
var parent=$this.attr('data-parent')
var $parent=parent&&$(parent)
if(!data||!data.transitioning){if($parent)$parent.find('[data-toggle=collapse][data-parent="'+parent+'"]').not($this).addClass('collapsed')
$this[$target.hasClass('in')?'addClass':'removeClass']('collapsed')}
$target.collapse(option)})}(jQuery);+function($){'use strict';var backdrop='.dropdown-backdrop'
var toggle='[data-toggle=dropdown]'
var Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)}
Dropdown.prototype.toggle=function(e){var $this=$(this)
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){$('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click',clearMenus)}
var relatedTarget={relatedTarget:this}
$parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$parent.toggleClass('open').trigger('shown.bs.dropdown',relatedTarget)
$this.focus()}
return false}
Dropdown.prototype.keydown=function(e){if(!/(38|40|27)/.test(e.keyCode))return
var $this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
if(!isActive||(isActive&&e.keyCode==27)){if(e.which==27)$parent.find(toggle).focus()
return $this.click()}
var desc=' li:not(.divider):visible a'
var $items=$parent.find('[role=menu]'+desc+', [role=listbox]'+desc)
if(!$items.length)return
var index=$items.index($items.filter(':focus'))
if(e.keyCode==38&&index>0)index--
if(e.keyCode==40&&index<$items.length-1)index++
if(!~index)index=0
$items.eq(index).focus()}
function clearMenus(e){$(backdrop).remove()
$(toggle).each(function(){var $parent=getParent($(this))
var relatedTarget={relatedTarget:this}
if(!$parent.hasClass('open'))return
$parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget))
if(e.isDefaultPrevented())return
$parent.removeClass('open').trigger('hidden.bs.dropdown',relatedTarget)})}
function getParent($this){var selector=$this.attr('data-target')
if(!selector){selector=$this.attr('href')
selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')}
var $parent=selector&&$(selector)
return $parent&&$parent.length?$parent:$this.parent()}
var old=$.fn.dropdown
$.fn.dropdown=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.dropdown')
if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
$.fn.dropdown.Constructor=Dropdown
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old
return this}
$(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle+', [role=menu], [role=listbox]',Dropdown.prototype.keydown)}(jQuery);+function($){'use strict';var Modal=function(element,options){this.options=options
this.$element=$(element)
this.$backdrop=this.isShown=null
if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
Modal.prototype.toggle=function(_relatedTarget){return this[!this.isShown?'show':'hide'](_relatedTarget)}
Modal.prototype.show=function(_relatedTarget){var that=this
var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.escape()
this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(document.body)}
that.$element.show().scrollTop(0)
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in').attr('aria-hidden',false)
that.enforceFocus()
var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
transition?that.$element.find('.modal-dialog').one($.support.transition.end,function(){that.$element.focus().trigger(e)}).emulateTransitionEnd(300):that.$element.focus().trigger(e)})}
Modal.prototype.hide=function(e){if(e)e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
$(document).off('focusin.bs.modal')
this.$element.removeClass('in').attr('aria-hidden',true).off('click.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade')?this.$element.one($.support.transition.end,$.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()}
Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.focus()}},this))}
Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keyup.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keyup.dismiss.bs.modal')}}
Modal.prototype.hideModal=function(){var that=this
this.$element.hide()
this.backdrop(function(){that.removeBackdrop()
that.$element.trigger('hidden.bs.modal')})}
Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null}
Modal.prototype.backdrop=function(callback){var animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').appendTo(document.body)
this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(e.target!==e.currentTarget)return
this.options.backdrop=='static'?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one($.support.transition.end,callback).emulateTransitionEnd(150):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one($.support.transition.end,callback).emulateTransitionEnd(150):callback()}else if(callback){callback()}}
var old=$.fn.modal
$.fn.modal=function(option,_relatedTarget){return this.each(function(){var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option](_relatedTarget)
else if(options.show)data.show(_relatedTarget)})}
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
if($this.is('a'))e.preventDefault()
$target.modal(option,this).one('hide',function(){$this.is(':visible')&&$this.focus()})})
$(document).on('show.bs.modal','.modal',function(){$(document.body).addClass('modal-open')}).on('hidden.bs.modal','.modal',function(){$(document.body).removeClass('modal-open')})}(jQuery);+function($){'use strict';var Tooltip=function(element,options){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null
this.init('tooltip',element,options)}
Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false}
Tooltip.prototype.init=function(type,element,options){this.enabled=true
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
var triggers=this.options.trigger.split(' ')
for(var i=triggers.length;i--;){var trigger=triggers[i]
if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin'
var eventOut=trigger=='hover'?'mouseleave':'focusout'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()}
Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS}
Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options)
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options}
Tooltip.prototype.getDelegateOptions=function(){var options={}
var defaults=this.getDefaults()
this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value})
return options}
Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.'+this.type)
clearTimeout(self.timeout)
self.hoverState='in'
if(!self.options.delay||!self.options.delay.show)return self.show()
self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)}
Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.'+this.type)
clearTimeout(self.timeout)
self.hoverState='out'
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)}
Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
if(e.isDefaultPrevented())return
var that=this;var $tip=this.tip()
this.setContent()
if(this.options.animation)$tip.addClass('fade')
var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
var autoToken=/\s?auto?\s?/i
var autoPlace=autoToken.test(placement)
if(autoPlace)placement=placement.replace(autoToken,'')||'top'
$tip.detach().css({top:0,left:0,display:'block'}).addClass(placement)
this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
var pos=this.getPosition()
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(autoPlace){var $parent=this.$element.parent()
var orgPlacement=placement
var docScroll=document.documentElement.scrollTop||document.body.scrollTop
var parentWidth=this.options.container=='body'?window.innerWidth:$parent.outerWidth()
var parentHeight=this.options.container=='body'?window.innerHeight:$parent.outerHeight()
var parentLeft=this.options.container=='body'?0:$parent.offset().left
placement=placement=='bottom'&&pos.top+pos.height+actualHeight-docScroll>parentHeight?'top':placement=='top'&&pos.top-docScroll-actualHeight<0?'bottom':placement=='right'&&pos.right+actualWidth>parentWidth?'left':placement=='left'&&pos.left-actualWidth<parentLeft?'right':placement
$tip.removeClass(orgPlacement).addClass(placement)}
var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight)
this.applyPlacement(calculatedOffset,placement)
this.hoverState=null
var complete=function(){that.$element.trigger('shown.bs.'+that.type)}
$.support.transition&&this.$tip.hasClass('fade')?$tip.one($.support.transition.end,complete).emulateTransitionEnd(150):complete()}}
Tooltip.prototype.applyPlacement=function(offset,placement){var replace
var $tip=this.tip()
var width=$tip[0].offsetWidth
var height=$tip[0].offsetHeight
var marginTop=parseInt($tip.css('margin-top'),10)
var marginLeft=parseInt($tip.css('margin-left'),10)
if(isNaN(marginTop))marginTop=0
if(isNaN(marginLeft))marginLeft=0
offset.top=offset.top+marginTop
offset.left=offset.left+marginLeft
$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0)
$tip.addClass('in')
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){replace=true
offset.top=offset.top+height-actualHeight}
if(/bottom|top/.test(placement)){var delta=0
if(offset.left<0){delta=offset.left*-2
offset.left=0
$tip.offset(offset)
actualWidth=$tip[0].offsetWidth
actualHeight=$tip[0].offsetHeight}
this.replaceArrow(delta-width+actualWidth,actualWidth,'left')}else{this.replaceArrow(actualHeight-height,actualHeight,'top')}
if(replace)$tip.offset(offset)}
Tooltip.prototype.replaceArrow=function(delta,dimension,position){this.arrow().css(position,delta?(50*(1-delta/dimension)+'%'):'')}
Tooltip.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')}
Tooltip.prototype.hide=function(){var that=this
var $tip=this.tip()
var e=$.Event('hide.bs.'+this.type)
function complete(){if(that.hoverState!='in')$tip.detach()
that.$element.trigger('hidden.bs.'+that.type)}
this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip.removeClass('in')
$.support.transition&&this.$tip.hasClass('fade')?$tip.one($.support.transition.end,complete).emulateTransitionEnd(150):complete()
this.hoverState=null
return this}
Tooltip.prototype.fixTitle=function(){var $e=this.$element
if($e.attr('title')||typeof($e.attr('data-original-title'))!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}}
Tooltip.prototype.hasContent=function(){return this.getTitle()}
Tooltip.prototype.getPosition=function(){var el=this.$element[0]
return $.extend({},(typeof el.getBoundingClientRect=='function')?el.getBoundingClientRect():{width:el.offsetWidth,height:el.offsetHeight},this.$element.offset())}
Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}}
Tooltip.prototype.getTitle=function(){var title
var $e=this.$element
var o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title}
Tooltip.prototype.tip=function(){return this.$tip=this.$tip||$(this.options.template)}
Tooltip.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow')}
Tooltip.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide()
this.$element=null
this.options=null}}
Tooltip.prototype.enable=function(){this.enabled=true}
Tooltip.prototype.disable=function(){this.enabled=false}
Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled}
Tooltip.prototype.toggle=function(e){var self=e?$(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.'+this.type):this
self.tip().hasClass('in')?self.leave(self):self.enter(self)}
Tooltip.prototype.destroy=function(){clearTimeout(this.timeout)
this.hide().$element.off('.'+this.type).removeData('bs.'+this.type)}
var old=$.fn.tooltip
$.fn.tooltip=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tooltip')
var options=typeof option=='object'&&option
if(!data&&option=='destroy')return
if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old
return this}}(jQuery);+function($){'use strict';var Popover=function(element,options){this.init('popover',element,options)}
if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js')
Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)
Popover.prototype.constructor=Popover
Popover.prototype.getDefaults=function(){return Popover.DEFAULTS}
Popover.prototype.setContent=function(){var $tip=this.tip()
var title=this.getTitle()
var content=this.getContent()
$tip.find('.popover-title')[this.options.html?'html':'text'](title)
$tip.find('.popover-content')[this.options.html?(typeof content=='string'?'html':'append'):'text'](content)
$tip.removeClass('fade top bottom left right in')
if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()}
Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()}
Popover.prototype.getContent=function(){var $e=this.$element
var o=this.options
return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)}
Popover.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find('.arrow')}
Popover.prototype.tip=function(){if(!this.$tip)this.$tip=$(this.options.template)
return this.$tip}
var old=$.fn.popover
$.fn.popover=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.popover')
var options=typeof option=='object'&&option
if(!data&&option=='destroy')return
if(!data)$this.data('bs.popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.popover.Constructor=Popover
$.fn.popover.noConflict=function(){$.fn.popover=old
return this}}(jQuery);+function($){'use strict';function ScrollSpy(element,options){var href
var process=$.proxy(this.process,this)
this.$element=$(element).is('body')?$(window):$(element)
this.$body=$('body')
this.$scrollElement=this.$element.on('scroll.bs.scroll-spy.data-api',process)
this.options=$.extend({},ScrollSpy.DEFAULTS,options)
this.selector=(this.options.target||((href=$(element).attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))||'')+' .nav li > a'
this.offsets=$([])
this.targets=$([])
this.activeTarget=null
this.refresh()
this.process()}
ScrollSpy.DEFAULTS={offset:10}
ScrollSpy.prototype.refresh=function(){var offsetMethod=this.$element[0]==window?'offset':'position'
this.offsets=$([])
this.targets=$([])
var self=this
var $targets=this.$body.find(this.selector).map(function(){var $el=$(this)
var href=$el.data('target')||$el.attr('href')
var $href=/^#./.test(href)&&$(href)
return($href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+(!$.isWindow(self.$scrollElement.get(0))&&self.$scrollElement.scrollTop()),href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){self.offsets.push(this[0])
self.targets.push(this[1])})}
ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset
var scrollHeight=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight
var maxScroll=scrollHeight-this.$scrollElement.height()
var offsets=this.offsets
var targets=this.targets
var activeTarget=this.activeTarget
var i
if(scrollTop>=maxScroll){return activeTarget!=(i=targets.last()[0])&&this.activate(i)}
if(activeTarget&&scrollTop<=offsets[0]){return activeTarget!=(i=targets[0])&&this.activate(i)}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i])}}
ScrollSpy.prototype.activate=function(target){this.activeTarget=target
$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active')
var selector=this.selector+'[data-target="'+target+'"],'+
this.selector+'[href="'+target+'"]'
var active=$(selector).parents('li').addClass('active')
if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate.bs.scrollspy')}
var old=$.fn.scrollspy
$.fn.scrollspy=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.scrollspy')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old
return this}
$(window).on('load',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
$spy.scrollspy($spy.data())})})}(jQuery);+function($){'use strict';var Tab=function(element){this.element=$(element)}
Tab.prototype.show=function(){var $this=this.element
var $ul=$this.closest('ul:not(.dropdown-menu)')
var selector=$this.data('target')
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
if($this.parent('li').hasClass('active'))return
var previous=$ul.find('.active:last a')[0]
var e=$.Event('show.bs.tab',{relatedTarget:previous})
$this.trigger(e)
if(e.isDefaultPrevented())return
var $target=$(selector)
this.activate($this.parent('li'),$ul)
this.activate($target,$target.parent(),function(){$this.trigger({type:'shown.bs.tab',relatedTarget:previous})})}
Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active')
var transition=callback&&$.support.transition&&$active.hasClass('fade')
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active')
element.addClass('active')
if(transition){element[0].offsetWidth
element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu')){element.closest('li.dropdown').addClass('active')}
callback&&callback()}
transition?$active.one($.support.transition.end,next).emulateTransitionEnd(150):next()
$active.removeClass('in')}
var old=$.fn.tab
$.fn.tab=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.tab')
if(!data)$this.data('bs.tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
$.fn.tab.Constructor=Tab
$.fn.tab.noConflict=function(){$.fn.tab=old
return this}
$(document).on('click.bs.tab.data-api','[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault()
$(this).tab('show')})}(jQuery);+function($){'use strict';var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options)
this.$window=$(window).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this))
this.$element=$(element)
this.affixed=this.unpin=this.pinnedOffset=null
this.checkPosition()}
Affix.RESET='affix affix-top affix-bottom'
Affix.DEFAULTS={offset:0}
Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(Affix.RESET).addClass('affix')
var scrollTop=this.$window.scrollTop()
var position=this.$element.offset()
return(this.pinnedOffset=position.top-scrollTop)}
Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)}
Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
var scrollHeight=$(document).height()
var scrollTop=this.$window.scrollTop()
var position=this.$element.offset()
var offset=this.options.offset
var offsetTop=offset.top
var offsetBottom=offset.bottom
if(this.affixed=='top')position.top+=scrollTop
if(typeof offset!='object')offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')offsetTop=offset.top(this.$element)
if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element)
var affix=this.unpin!=null&&(scrollTop+this.unpin<=position.top)?false:offsetBottom!=null&&(position.top+this.$element.height()>=scrollHeight-offsetBottom)?'bottom':offsetTop!=null&&(scrollTop<=offsetTop)?'top':false
if(this.affixed===affix)return
if(this.unpin)this.$element.css('top','')
var affixType='affix'+(affix?'-'+affix:'')
var e=$.Event(affixType+'.bs.affix')
this.$element.trigger(e)
if(e.isDefaultPrevented())return
this.affixed=affix
this.unpin=affix=='bottom'?this.getPinnedOffset():null
this.$element.removeClass(Affix.RESET).addClass(affixType).trigger($.Event(affixType.replace('affix','affixed')))
if(affix=='bottom'){this.$element.offset({top:scrollHeight-offsetBottom-this.$element.height()})}}
var old=$.fn.affix
$.fn.affix=function(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.affix')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.affix',(data=new Affix(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.affix.Constructor=Affix
$.fn.affix.noConflict=function(){$.fn.affix=old
return this}
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this)
var data=$spy.data()
data.offset=data.offset||{}
if(data.offsetBottom)data.offset.bottom=data.offsetBottom
if(data.offsetTop)data.offset.top=data.offsetTop
$spy.affix(data)})})}(jQuery);

(function($){var $window=$(window);function UTCDate(){return new Date(Date.UTC.apply(Date,arguments));}
function UTCToday(){var today=new Date();return UTCDate(today.getUTCFullYear(),today.getUTCMonth(),today.getUTCDate());}
var Datepicker=function(element,options){var that=this;this._process_options(options);this.element=$(element);this.isInline=false;this.isInput=this.element.is('input');this.component=this.element.is('.date')?this.element.find('.add-on, .btn'):false;this.hasInput=this.component&&this.element.find('input').length;if(this.component&&this.component.length===0)
this.component=false;this.picker=$(DPGlobal.template);this._buildEvents();this._attachEvents();if(this.isInline){this.picker.addClass('datepicker-inline').appendTo(this.element);}else{this.picker.addClass('datepicker-dropdown dropdown-menu');}
if(this.o.rtl){this.picker.addClass('datepicker-rtl');this.picker.find('.prev i, .next i').toggleClass('icon-arrow-left icon-arrow-right');}
this.viewMode=this.o.startView;if(this.o.calendarWeeks)
this.picker.find('tfoot th.today').attr('colspan',function(i,val){return parseInt(val)+1;});this._allow_update=false;this.setStartDate(this._o.startDate);this.setEndDate(this._o.endDate);this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);this.fillDow();this.fillMonths();this._allow_update=true;this.update();this.showMode();if(this.isInline){this.show();}};Datepicker.prototype={constructor:Datepicker,_process_options:function(opts){this._o=$.extend({},this._o,opts);var o=this.o=$.extend({},this._o);var lang=o.language;if(!dates[lang]){lang=lang.split('-')[0];if(!dates[lang])
lang=defaults.language;}
o.language=lang;switch(o.startView){case 2:case'decade':o.startView=2;break;case 1:case'year':o.startView=1;break;default:o.startView=0;}
switch(o.minViewMode){case 1:case'months':o.minViewMode=1;break;case 2:case'years':o.minViewMode=2;break;default:o.minViewMode=0;}
o.startView=Math.max(o.startView,o.minViewMode);o.weekStart%=7;o.weekEnd=((o.weekStart+6)%7);var format=DPGlobal.parseFormat(o.format);if(o.startDate!==-Infinity){if(!!o.startDate){if(o.startDate instanceof Date)
o.startDate=this._local_to_utc(this._zero_time(o.startDate));else
o.startDate=DPGlobal.parseDate(o.startDate,format,o.language);}else{o.startDate=-Infinity;}}
if(o.endDate!==Infinity){if(!!o.endDate){if(o.endDate instanceof Date)
o.endDate=this._local_to_utc(this._zero_time(o.endDate));else
o.endDate=DPGlobal.parseDate(o.endDate,format,o.language);}else{o.endDate=Infinity;}}
o.daysOfWeekDisabled=o.daysOfWeekDisabled||[];if(!$.isArray(o.daysOfWeekDisabled))
o.daysOfWeekDisabled=o.daysOfWeekDisabled.split(/[,\s]*/);o.daysOfWeekDisabled=$.map(o.daysOfWeekDisabled,function(d){return parseInt(d,10);});var plc=String(o.orientation).toLowerCase().split(/\s+/g),_plc=o.orientation.toLowerCase();plc=$.grep(plc,function(word){return(/^auto|left|right|top|bottom$/).test(word);});o.orientation={x:'auto',y:'auto'};if(!_plc||_plc==='auto');else if(plc.length===1){switch(plc[0]){case'top':case'bottom':o.orientation.y=plc[0];break;case'left':case'right':o.orientation.x=plc[0];break;}}
else{_plc=$.grep(plc,function(word){return(/^left|right$/).test(word);});o.orientation.x=_plc[0]||'auto';_plc=$.grep(plc,function(word){return(/^top|bottom$/).test(word);});o.orientation.y=_plc[0]||'auto';}},_events:[],_secondaryEvents:[],_applyEvents:function(evs){for(var i=0,el,ev;i<evs.length;i++){el=evs[i][0];ev=evs[i][1];el.on(ev);}},_unapplyEvents:function(evs){for(var i=0,el,ev;i<evs.length;i++){el=evs[i][0];ev=evs[i][1];el.off(ev);}},_buildEvents:function(){if(this.isInput){this._events=[[this.element,{focus:$.proxy(this.show,this),keyup:$.proxy(this.update,this),keydown:$.proxy(this.keydown,this)}]];}
else if(this.component&&this.hasInput){this._events=[[this.element.find('input'),{focus:$.proxy(this.show,this),keyup:$.proxy(this.update,this),keydown:$.proxy(this.keydown,this)}],[this.component,{click:$.proxy(this.show,this)}]];}
else if(this.element.is('div')){this.isInline=true;}
else{this._events=[[this.element,{click:$.proxy(this.show,this)}]];}
this._secondaryEvents=[[this.picker,{click:$.proxy(this.click,this)}],[$(window),{resize:$.proxy(this.place,this)}],[$(document),{mousedown:$.proxy(function(e){if(!(this.element.is(e.target)||this.element.find(e.target).length||this.picker.is(e.target)||this.picker.find(e.target).length)){this.hide();}},this)}]];},_attachEvents:function(){this._detachEvents();this._applyEvents(this._events);},_detachEvents:function(){this._unapplyEvents(this._events);},_attachSecondaryEvents:function(){this._detachSecondaryEvents();this._applyEvents(this._secondaryEvents);},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents);},_trigger:function(event,altdate){var date=altdate||this.date,local_date=this._utc_to_local(date);this.element.trigger({type:event,date:local_date,format:$.proxy(function(altformat){var format=altformat||this.o.format;return DPGlobal.formatDate(date,format,this.o.language);},this)});},show:function(e){if(!this.isInline)
this.picker.appendTo('body');this.picker.show();this.height=this.component?this.component.outerHeight():this.element.outerHeight();this.place();this._attachSecondaryEvents();if(e){e.preventDefault();}
this._trigger('show');},hide:function(e){if(this.isInline)return;if(!this.picker.is(':visible'))return;this.picker.hide().detach();this._detachSecondaryEvents();this.viewMode=this.o.startView;this.showMode();if(this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find('input').val()))
this.setValue();this._trigger('hide');},remove:function(){this.hide();this._detachEvents();this._detachSecondaryEvents();this.picker.remove();delete this.element.data().datepicker;if(!this.isInput){delete this.element.data().date;}},_utc_to_local:function(utc){return new Date(utc.getTime()+(utc.getTimezoneOffset()*60000));},_local_to_utc:function(local){return new Date(local.getTime()-(local.getTimezoneOffset()*60000));},_zero_time:function(local){return new Date(local.getFullYear(),local.getMonth(),local.getDate());},_zero_utc_time:function(utc){return new Date(Date.UTC(utc.getUTCFullYear(),utc.getUTCMonth(),utc.getUTCDate()));},getDate:function(){return this._utc_to_local(this.getUTCDate());},getUTCDate:function(){return this.date;},setDate:function(d){this.setUTCDate(this._local_to_utc(d));},setUTCDate:function(d){this.date=d;this.setValue();},setValue:function(){var formatted=this.getFormattedDate();if(!this.isInput){if(this.component){this.element.find('input').val(formatted).change();}}else{this.element.val(formatted).change();}},getFormattedDate:function(format){if(format===undefined)
format=this.o.format;return DPGlobal.formatDate(this.date,format,this.o.language);},setStartDate:function(startDate){this._process_options({startDate:startDate});this.update();this.updateNavArrows();},setEndDate:function(endDate){this._process_options({endDate:endDate});this.update();this.updateNavArrows();},setDaysOfWeekDisabled:function(daysOfWeekDisabled){this._process_options({daysOfWeekDisabled:daysOfWeekDisabled});this.update();this.updateNavArrows();},place:function(){if(this.isInline)return;var calendarWidth=this.picker.outerWidth(),calendarHeight=this.picker.outerHeight(),visualPadding=10,windowWidth=$window.width(),windowHeight=$window.height(),scrollTop=$window.scrollTop();var zIndex=parseInt(this.element.parents().filter(function(){return $(this).css('z-index')!='auto';}).first().css('z-index'))+10;var offset=this.component?this.component.parent().offset():this.element.offset();var height=this.component?this.component.outerHeight(true):this.element.outerHeight(false);var width=this.component?this.component.outerWidth(true):this.element.outerWidth(false);var left=offset.left,top=offset.top;this.picker.removeClass('datepicker-orient-top datepicker-orient-bottom '+'datepicker-orient-right datepicker-orient-left');if(this.o.orientation.x!=='auto'){this.picker.addClass('datepicker-orient-'+this.o.orientation.x);if(this.o.orientation.x==='right')
left-=calendarWidth-width;}
else{this.picker.addClass('datepicker-orient-left');if(offset.left<0)
left-=offset.left-visualPadding;else if(offset.left+calendarWidth>windowWidth)
left=windowWidth-calendarWidth-visualPadding;}
var yorient=this.o.orientation.y,top_overflow,bottom_overflow;if(yorient==='auto'){top_overflow=-scrollTop+offset.top-calendarHeight;bottom_overflow=scrollTop+windowHeight-(offset.top+height+calendarHeight);if(Math.max(top_overflow,bottom_overflow)===bottom_overflow)
yorient='top';else
yorient='bottom';}
this.picker.addClass('datepicker-orient-'+yorient);if(yorient==='top')
top+=height;else
top-=calendarHeight+parseInt(this.picker.css('padding-top'));this.picker.css({top:top,left:left,zIndex:zIndex});},_allow_update:true,update:function(){if(!this._allow_update)return;var oldDate=new Date(this.date),date,fromArgs=false;if(arguments&&arguments.length&&(typeof arguments[0]==='string'||arguments[0]instanceof Date)){date=arguments[0];if(date instanceof Date)
date=this._local_to_utc(date);fromArgs=true;}else{date=this.isInput?this.element.val():this.element.data('date')||this.element.find('input').val();delete this.element.data().date;}
this.date=DPGlobal.parseDate(date,this.o.format,this.o.language);if(fromArgs){this.setValue();}else if(date){if(oldDate.getTime()!==this.date.getTime())
this._trigger('changeDate');}else{this._trigger('clearDate');}
if(this.date<this.o.startDate){this.viewDate=new Date(this.o.startDate);this.date=new Date(this.o.startDate);}else if(this.date>this.o.endDate){this.viewDate=new Date(this.o.endDate);this.date=new Date(this.o.endDate);}else{this.viewDate=new Date(this.date);this.date=new Date(this.date);}
this.fill();},fillDow:function(){var dowCnt=this.o.weekStart,html='<tr>';if(this.o.calendarWeeks){var cell='<th class="cw">&nbsp;</th>';html+=cell;this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);}
while(dowCnt<this.o.weekStart+7){html+='<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';}
html+='</tr>';this.picker.find('.datepicker-days thead').append(html);},fillMonths:function(){var html='',i=0;while(i<12){html+='<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';}
this.picker.find('.datepicker-months td').html(html);},setRange:function(range){if(!range||!range.length)
delete this.range;else
this.range=$.map(range,function(d){return d.valueOf();});this.fill();},getClassNames:function(date){var cls=[],year=this.viewDate.getUTCFullYear(),month=this.viewDate.getUTCMonth(),currentDate=this.date.valueOf(),today=new Date();if(date.getUTCFullYear()<year||(date.getUTCFullYear()==year&&date.getUTCMonth()<month)){cls.push('old');}else if(date.getUTCFullYear()>year||(date.getUTCFullYear()==year&&date.getUTCMonth()>month)){cls.push('new');}
if(this.o.todayHighlight&&date.getUTCFullYear()==today.getFullYear()&&date.getUTCMonth()==today.getMonth()&&date.getUTCDate()==today.getDate()){cls.push('today');}
if(currentDate&&date.valueOf()==currentDate){cls.push('active');}
if(date.valueOf()<this.o.startDate||date.valueOf()>this.o.endDate||$.inArray(date.getUTCDay(),this.o.daysOfWeekDisabled)!==-1){cls.push('disabled');}
if(this.range){if(date>this.range[0]&&date<this.range[this.range.length-1]){cls.push('range');}
if($.inArray(date.valueOf(),this.range)!=-1){cls.push('selected');}}
return cls;},fill:function(){var d=new Date(this.viewDate),year=d.getUTCFullYear(),month=d.getUTCMonth(),startYear=this.o.startDate!==-Infinity?this.o.startDate.getUTCFullYear():-Infinity,startMonth=this.o.startDate!==-Infinity?this.o.startDate.getUTCMonth():-Infinity,endYear=this.o.endDate!==Infinity?this.o.endDate.getUTCFullYear():Infinity,endMonth=this.o.endDate!==Infinity?this.o.endDate.getUTCMonth():Infinity,currentDate=this.date&&this.date.valueOf(),tooltip;this.picker.find('.datepicker-days thead th.datepicker-switch').text(dates[this.o.language].months[month]+' '+year);this.picker.find('tfoot th.today').text(dates[this.o.language].today).toggle(this.o.todayBtn!==false);this.picker.find('tfoot th.clear').text(dates[this.o.language].clear).toggle(this.o.clearBtn!==false);this.updateNavArrows();this.fillMonths();var prevMonth=UTCDate(year,month-1,28,0,0,0,0),day=DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(),prevMonth.getUTCMonth());prevMonth.setUTCDate(day);prevMonth.setUTCDate(day-(prevMonth.getUTCDay()-this.o.weekStart+7)%7);var nextMonth=new Date(prevMonth);nextMonth.setUTCDate(nextMonth.getUTCDate()+42);nextMonth=nextMonth.valueOf();var html=[];var clsName;while(prevMonth.valueOf()<nextMonth){if(prevMonth.getUTCDay()==this.o.weekStart){html.push('<tr>');if(this.o.calendarWeeks){var
ws=new Date(+prevMonth+(this.o.weekStart-prevMonth.getUTCDay()-7)%7*864e5),th=new Date(+ws+(7+4-ws.getUTCDay())%7*864e5),yth=new Date(+(yth=UTCDate(th.getUTCFullYear(),0,1))+(7+4-yth.getUTCDay())%7*864e5),calWeek=(th-yth)/864e5/7+1;html.push('<td class="cw">'+calWeek+'</td>');}}
clsName=this.getClassNames(prevMonth);clsName.push('day');if(this.o.beforeShowDay!==$.noop){var before=this.o.beforeShowDay(this._utc_to_local(prevMonth));if(before===undefined)
before={};else if(typeof(before)==='boolean')
before={enabled:before};else if(typeof(before)==='string')
before={classes:before};if(before.enabled===false)
clsName.push('disabled');if(before.classes)
clsName=clsName.concat(before.classes.split(/\s+/));if(before.tooltip)
tooltip=before.tooltip;}
clsName=$.unique(clsName);html.push('<td class="'+clsName.join(' ')+'"'+(tooltip?' title="'+tooltip+'"':'')+'>'+prevMonth.getUTCDate()+'</td>');if(prevMonth.getUTCDay()==this.o.weekEnd){html.push('</tr>');}
prevMonth.setUTCDate(prevMonth.getUTCDate()+1);}
this.picker.find('.datepicker-days tbody').empty().append(html.join(''));var currentYear=this.date&&this.date.getUTCFullYear();var months=this.picker.find('.datepicker-months').find('th:eq(1)').text(year).end().find('span').removeClass('active');if(currentYear&&currentYear==year){months.eq(this.date.getUTCMonth()).addClass('active');}
if(year<startYear||year>endYear){months.addClass('disabled');}
if(year==startYear){months.slice(0,startMonth).addClass('disabled');}
if(year==endYear){months.slice(endMonth+1).addClass('disabled');}
html='';year=parseInt(year/10,10)*10;var yearCont=this.picker.find('.datepicker-years').find('th:eq(1)').text(year+'-'+(year+9)).end().find('td');year-=1;for(var i=-1;i<11;i++){html+='<span class="year'+(i==-1?' old':i==10?' new':'')+(currentYear==year?' active':'')+(year<startYear||year>endYear?' disabled':'')+'">'+year+'</span>';year+=1;}
yearCont.html(html);},updateNavArrows:function(){if(!this._allow_update)return;var d=new Date(this.viewDate),year=d.getUTCFullYear(),month=d.getUTCMonth();switch(this.viewMode){case 0:if(this.o.startDate!==-Infinity&&year<=this.o.startDate.getUTCFullYear()&&month<=this.o.startDate.getUTCMonth()){this.picker.find('.prev').css({visibility:'hidden'});}else{this.picker.find('.prev').css({visibility:'visible'});}
if(this.o.endDate!==Infinity&&year>=this.o.endDate.getUTCFullYear()&&month>=this.o.endDate.getUTCMonth()){this.picker.find('.next').css({visibility:'hidden'});}else{this.picker.find('.next').css({visibility:'visible'});}
break;case 1:case 2:if(this.o.startDate!==-Infinity&&year<=this.o.startDate.getUTCFullYear()){this.picker.find('.prev').css({visibility:'hidden'});}else{this.picker.find('.prev').css({visibility:'visible'});}
if(this.o.endDate!==Infinity&&year>=this.o.endDate.getUTCFullYear()){this.picker.find('.next').css({visibility:'hidden'});}else{this.picker.find('.next').css({visibility:'visible'});}
break;}},click:function(e){e.preventDefault();var target=$(e.target).closest('span, td, th');if(target.length==1){switch(target[0].nodeName.toLowerCase()){case'th':switch(target[0].className){case'datepicker-switch':this.showMode(1);break;case'prev':case'next':var dir=DPGlobal.modes[this.viewMode].navStep*(target[0].className=='prev'?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,dir);this._trigger('changeMonth',this.viewDate);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,dir);if(this.viewMode===1)
this._trigger('changeYear',this.viewDate);break;}
this.fill();break;case'today':var date=new Date();date=UTCDate(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0);this.showMode(-2);var which=this.o.todayBtn=='linked'?null:'view';this._setDate(date,which);break;case'clear':var element;if(this.isInput)
element=this.element;else if(this.component)
element=this.element.find('input');if(element)
element.val("").change();this._trigger('changeDate');this.update();if(this.o.autoclose)
this.hide();break;}
break;case'span':if(!target.is('.disabled')){this.viewDate.setUTCDate(1);if(target.is('.month')){var day=1;var month=target.parent().find('span').index(target);var year=this.viewDate.getUTCFullYear();this.viewDate.setUTCMonth(month);this._trigger('changeMonth',this.viewDate);if(this.o.minViewMode===1){this._setDate(UTCDate(year,month,day,0,0,0,0));}}else{var year=parseInt(target.text(),10)||0;var day=1;var month=0;this.viewDate.setUTCFullYear(year);this._trigger('changeYear',this.viewDate);if(this.o.minViewMode===2){this._setDate(UTCDate(year,month,day,0,0,0,0));}}
this.showMode(-1);this.fill();}
break;case'td':if(target.is('.day')&&!target.is('.disabled')){var day=parseInt(target.text(),10)||1;var year=this.viewDate.getUTCFullYear(),month=this.viewDate.getUTCMonth();if(target.is('.old')){if(month===0){month=11;year-=1;}else{month-=1;}}else if(target.is('.new')){if(month==11){month=0;year+=1;}else{month+=1;}}
this._setDate(UTCDate(year,month,day,0,0,0,0));}
break;}}},_setDate:function(date,which){if(!which||which=='date')
this.date=new Date(date);if(!which||which=='view')
this.viewDate=new Date(date);this.fill();this.setValue();this._trigger('changeDate');var element;if(this.isInput){element=this.element;}else if(this.component){element=this.element.find('input');}
if(element){element.change();}
if(this.o.autoclose&&(!which||which=='date')){this.hide();}},moveMonth:function(date,dir){if(!dir)return date;var new_date=new Date(date.valueOf()),day=new_date.getUTCDate(),month=new_date.getUTCMonth(),mag=Math.abs(dir),new_month,test;dir=dir>0?1:-1;if(mag==1){test=dir==-1?function(){return new_date.getUTCMonth()==month;}:function(){return new_date.getUTCMonth()!=new_month;};new_month=month+dir;new_date.setUTCMonth(new_month);if(new_month<0||new_month>11)
new_month=(new_month+12)%12;}else{for(var i=0;i<mag;i++)
new_date=this.moveMonth(new_date,dir);new_month=new_date.getUTCMonth();new_date.setUTCDate(day);test=function(){return new_month!=new_date.getUTCMonth();};}
while(test()){new_date.setUTCDate(--day);new_date.setUTCMonth(new_month);}
return new_date;},moveYear:function(date,dir){return this.moveMonth(date,dir*12);},dateWithinRange:function(date){return date>=this.o.startDate&&date<=this.o.endDate;},keydown:function(e){if(this.picker.is(':not(:visible)')){if(e.keyCode==27)
this.show();return;}
var dateChanged=false,dir,day,month,newDate,newViewDate;switch(e.keyCode){case 27:this.hide();e.preventDefault();break;case 37:case 39:if(!this.o.keyboardNavigation)break;dir=e.keyCode==37?-1:1;if(e.ctrlKey){newDate=this.moveYear(this.date,dir);newViewDate=this.moveYear(this.viewDate,dir);this._trigger('changeYear',this.viewDate);}else if(e.shiftKey){newDate=this.moveMonth(this.date,dir);newViewDate=this.moveMonth(this.viewDate,dir);this._trigger('changeMonth',this.viewDate);}else{newDate=new Date(this.date);newDate.setUTCDate(this.date.getUTCDate()+dir);newViewDate=new Date(this.viewDate);newViewDate.setUTCDate(this.viewDate.getUTCDate()+dir);}
if(this.dateWithinRange(newDate)){this.date=newDate;this.viewDate=newViewDate;this.setValue();this.update();e.preventDefault();dateChanged=true;}
break;case 38:case 40:if(!this.o.keyboardNavigation)break;dir=e.keyCode==38?-1:1;if(e.ctrlKey){newDate=this.moveYear(this.date,dir);newViewDate=this.moveYear(this.viewDate,dir);this._trigger('changeYear',this.viewDate);}else if(e.shiftKey){newDate=this.moveMonth(this.date,dir);newViewDate=this.moveMonth(this.viewDate,dir);this._trigger('changeMonth',this.viewDate);}else{newDate=new Date(this.date);newDate.setUTCDate(this.date.getUTCDate()+dir*7);newViewDate=new Date(this.viewDate);newViewDate.setUTCDate(this.viewDate.getUTCDate()+dir*7);}
if(this.dateWithinRange(newDate)){this.date=newDate;this.viewDate=newViewDate;this.setValue();this.update();e.preventDefault();dateChanged=true;}
break;case 13:this.hide();e.preventDefault();break;case 9:this.hide();break;}
if(dateChanged){this._trigger('changeDate');var element;if(this.isInput){element=this.element;}else if(this.component){element=this.element.find('input');}
if(element){element.change();}}},showMode:function(dir){if(dir){this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+dir));}
this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).css('display','block');this.updateNavArrows();}};var DateRangePicker=function(element,options){this.element=$(element);this.inputs=$.map(options.inputs,function(i){return i.jquery?i[0]:i;});delete options.inputs;$(this.inputs).datepicker(options).bind('changeDate',$.proxy(this.dateUpdated,this));this.pickers=$.map(this.inputs,function(i){return $(i).data('datepicker');});this.updateDates();};DateRangePicker.prototype={updateDates:function(){this.dates=$.map(this.pickers,function(i){return i.date;});this.updateRanges();},updateRanges:function(){var range=$.map(this.dates,function(d){return d.valueOf();});$.each(this.pickers,function(i,p){p.setRange(range);});},dateUpdated:function(e){var dp=$(e.target).data('datepicker'),new_date=dp.getUTCDate(),i=$.inArray(e.target,this.inputs),l=this.inputs.length;if(i==-1)return;if(new_date<this.dates[i]){while(i>=0&&new_date<this.dates[i]){this.pickers[i--].setUTCDate(new_date);}}
else if(new_date>this.dates[i]){while(i<l&&new_date>this.dates[i]){this.pickers[i++].setUTCDate(new_date);}}
this.updateDates();},remove:function(){$.map(this.pickers,function(p){p.remove();});delete this.element.data().datepicker;}};function opts_from_el(el,prefix){var data=$(el).data(),out={},inkey,replace=new RegExp('^'+prefix.toLowerCase()+'([A-Z])'),prefix=new RegExp('^'+prefix.toLowerCase());for(var key in data)
if(prefix.test(key)){inkey=key.replace(replace,function(_,a){return a.toLowerCase();});out[inkey]=data[key];}
return out;}
function opts_from_locale(lang){var out={};if(!dates[lang]){lang=lang.split('-')[0]
if(!dates[lang])
return;}
var d=dates[lang];$.each(locale_opts,function(i,k){if(k in d)
out[k]=d[k];});return out;}
var old=$.fn.datepicker;$.fn.datepicker=function(option){var args=Array.apply(null,arguments);args.shift();var internal_return,this_return;this.each(function(){var $this=$(this),data=$this.data('datepicker'),options=typeof option=='object'&&option;if(!data){var elopts=opts_from_el(this,'date'),xopts=$.extend({},defaults,elopts,options),locopts=opts_from_locale(xopts.language),opts=$.extend({},defaults,locopts,elopts,options);if($this.is('.input-daterange')||opts.inputs){var ropts={inputs:opts.inputs||$this.find('input').toArray()};$this.data('datepicker',(data=new DateRangePicker(this,$.extend(opts,ropts))));}
else{$this.data('datepicker',(data=new Datepicker(this,opts)));}}
if(typeof option=='string'&&typeof data[option]=='function'){internal_return=data[option].apply(data,args);if(internal_return!==undefined)
return false;}});if(internal_return!==undefined)
return internal_return;else
return this;};var defaults=$.fn.datepicker.defaults={autoclose:false,beforeShowDay:$.noop,calendarWeeks:false,clearBtn:false,daysOfWeekDisabled:[],endDate:Infinity,forceParse:true,format:'mm/dd/yyyy',keyboardNavigation:true,language:'en',minViewMode:0,orientation:"auto",rtl:false,startDate:-Infinity,startView:0,todayBtn:false,todayHighlight:false,weekStart:0};var locale_opts=$.fn.datepicker.locale_opts=['format','rtl','weekStart'];$.fn.datepicker.Constructor=Datepicker;var dates=$.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}};var DPGlobal={modes:[{clsName:'days',navFnc:'Month',navStep:1},{clsName:'months',navFnc:'FullYear',navStep:1},{clsName:'years',navFnc:'FullYear',navStep:10}],isLeapYear:function(year){return(((year%4===0)&&(year%100!==0))||(year%400===0));},getDaysInMonth:function(year,month){return[31,(DPGlobal.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month];},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(format){var separators=format.replace(this.validParts,'\0').split('\0'),parts=format.match(this.validParts);if(!separators||!separators.length||!parts||parts.length===0){throw new Error("Invalid date format.");}
return{separators:separators,parts:parts};},parseDate:function(date,format,language){if(date instanceof Date)return date;if(typeof format==='string')
format=DPGlobal.parseFormat(format);if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){var part_re=/([\-+]\d+)([dmwy])/,parts=date.match(/([\-+]\d+)([dmwy])/g),part,dir;date=new Date();for(var i=0;i<parts.length;i++){part=part_re.exec(parts[i]);dir=parseInt(part[1]);switch(part[2]){case'd':date.setUTCDate(date.getUTCDate()+dir);break;case'm':date=Datepicker.prototype.moveMonth.call(Datepicker.prototype,date,dir);break;case'w':date.setUTCDate(date.getUTCDate()+dir*7);break;case'y':date=Datepicker.prototype.moveYear.call(Datepicker.prototype,date,dir);break;}}
return UTCDate(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),0,0,0);}
var parts=date&&date.match(this.nonpunctuation)||[],date=new Date(),parsed={},setters_order=['yyyy','yy','M','MM','m','mm','d','dd'],setters_map={yyyy:function(d,v){return d.setUTCFullYear(v);},yy:function(d,v){return d.setUTCFullYear(2000+v);},m:function(d,v){if(isNaN(d))
return d;v-=1;while(v<0)v+=12;v%=12;d.setUTCMonth(v);while(d.getUTCMonth()!=v)
d.setUTCDate(d.getUTCDate()-1);return d;},d:function(d,v){return d.setUTCDate(v);}},val,filtered,part;setters_map['M']=setters_map['MM']=setters_map['mm']=setters_map['m'];setters_map['dd']=setters_map['d'];date=UTCDate(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0);var fparts=format.parts.slice();if(parts.length!=fparts.length){fparts=$(fparts).filter(function(i,p){return $.inArray(p,setters_order)!==-1;}).toArray();}
if(parts.length==fparts.length){for(var i=0,cnt=fparts.length;i<cnt;i++){val=parseInt(parts[i],10);part=fparts[i];if(isNaN(val)){switch(part){case'MM':filtered=$(dates[language].months).filter(function(){var m=this.slice(0,parts[i].length),p=parts[i].slice(0,m.length);return m==p;});val=$.inArray(filtered[0],dates[language].months)+1;break;case'M':filtered=$(dates[language].monthsShort).filter(function(){var m=this.slice(0,parts[i].length),p=parts[i].slice(0,m.length);return m==p;});val=$.inArray(filtered[0],dates[language].monthsShort)+1;break;}}
parsed[part]=val;}
for(var i=0,_date,s;i<setters_order.length;i++){s=setters_order[i];if(s in parsed&&!isNaN(parsed[s])){_date=new Date(date);setters_map[s](_date,parsed[s]);if(!isNaN(_date))
date=_date;}}}
return date;},formatDate:function(date,format,language){if(typeof format==='string')
format=DPGlobal.parseFormat(format);var val={d:date.getUTCDate(),D:dates[language].daysShort[date.getUTCDay()],DD:dates[language].days[date.getUTCDay()],m:date.getUTCMonth()+1,M:dates[language].monthsShort[date.getUTCMonth()],MM:dates[language].months[date.getUTCMonth()],yy:date.getUTCFullYear().toString().substring(2),yyyy:date.getUTCFullYear()};val.dd=(val.d<10?'0':'')+val.d;val.mm=(val.m<10?'0':'')+val.m;var date=[],seps=$.extend([],format.separators);for(var i=0,cnt=format.parts.length;i<=cnt;i++){if(seps.length)
date.push(seps.shift());date.push(val[format.parts[i]]);}
return date.join('');},headTemplate:'<thead>'+'<tr>'+'<th class="prev">&laquo;</th>'+'<th colspan="5" class="datepicker-switch"></th>'+'<th class="next">&raquo;</th>'+'</tr>'+'</thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};DPGlobal.template='<div class="datepicker">'+'<div class="datepicker-days">'+'<table class=" table-condensed">'+
DPGlobal.headTemplate+'<tbody></tbody>'+
DPGlobal.footTemplate+'</table>'+'</div>'+'<div class="datepicker-months">'+'<table class="table-condensed">'+
DPGlobal.headTemplate+
DPGlobal.contTemplate+
DPGlobal.footTemplate+'</table>'+'</div>'+'<div class="datepicker-years">'+'<table class="table-condensed">'+
DPGlobal.headTemplate+
DPGlobal.contTemplate+
DPGlobal.footTemplate+'</table>'+'</div>'+'</div>';$.fn.datepicker.DPGlobal=DPGlobal;$.fn.datepicker.noConflict=function(){$.fn.datepicker=old;return this;};$(document).on('focus.datepicker.data-api click.datepicker.data-api','[data-provide="datepicker"]',function(e){var $this=$(this);if($this.data('datepicker'))return;e.preventDefault();$this.datepicker('show');});$(function(){$('[data-provide="datepicker-inline"]').datepicker();});}(window.jQuery));

(function(window,document,undefined){(function(factory){"use strict";if(typeof define==='function'&&define.amd)
{define(['jquery'],factory);}
else if(jQuery&&!jQuery.fn.dataTable)
{factory(jQuery);}}
(function($){"use strict";var DataTable=function(oInit)
{function _fnAddColumn(oSettings,nTh)
{var oDefaults=DataTable.defaults.columns;var iCol=oSettings.aoColumns.length;var oCol=$.extend({},DataTable.models.oColumn,oDefaults,{"sSortingClass":oSettings.oClasses.sSortable,"sSortingClassJUI":oSettings.oClasses.sSortJUI,"nTh":nTh?nTh:document.createElement('th'),"sTitle":oDefaults.sTitle?oDefaults.sTitle:nTh?nTh.innerHTML:'',"aDataSort":oDefaults.aDataSort?oDefaults.aDataSort:[iCol],"mData":oDefaults.mData?oDefaults.oDefaults:iCol});oSettings.aoColumns.push(oCol);if(oSettings.aoPreSearchCols[iCol]===undefined||oSettings.aoPreSearchCols[iCol]===null)
{oSettings.aoPreSearchCols[iCol]=$.extend({},DataTable.models.oSearch);}
else
{var oPre=oSettings.aoPreSearchCols[iCol];if(oPre.bRegex===undefined)
{oPre.bRegex=true;}
if(oPre.bSmart===undefined)
{oPre.bSmart=true;}
if(oPre.bCaseInsensitive===undefined)
{oPre.bCaseInsensitive=true;}}
_fnColumnOptions(oSettings,iCol,null);}
function _fnColumnOptions(oSettings,iCol,oOptions)
{var oCol=oSettings.aoColumns[iCol];if(oOptions!==undefined&&oOptions!==null)
{if(oOptions.mDataProp&&!oOptions.mData)
{oOptions.mData=oOptions.mDataProp;}
if(oOptions.sType!==undefined)
{oCol.sType=oOptions.sType;oCol._bAutoType=false;}
$.extend(oCol,oOptions);_fnMap(oCol,oOptions,"sWidth","sWidthOrig");if(oOptions.iDataSort!==undefined)
{oCol.aDataSort=[oOptions.iDataSort];}
_fnMap(oCol,oOptions,"aDataSort");}
var mRender=oCol.mRender?_fnGetObjectDataFn(oCol.mRender):null;var mData=_fnGetObjectDataFn(oCol.mData);oCol.fnGetData=function(oData,sSpecific){var innerData=mData(oData,sSpecific);if(oCol.mRender&&(sSpecific&&sSpecific!==''))
{return mRender(innerData,sSpecific,oData);}
return innerData;};oCol.fnSetData=_fnSetObjectDataFn(oCol.mData);if(!oSettings.oFeatures.bSort)
{oCol.bSortable=false;}
if(!oCol.bSortable||($.inArray('asc',oCol.asSorting)==-1&&$.inArray('desc',oCol.asSorting)==-1))
{oCol.sSortingClass=oSettings.oClasses.sSortableNone;oCol.sSortingClassJUI="";}
else if($.inArray('asc',oCol.asSorting)==-1&&$.inArray('desc',oCol.asSorting)==-1)
{oCol.sSortingClass=oSettings.oClasses.sSortable;oCol.sSortingClassJUI=oSettings.oClasses.sSortJUI;}
else if($.inArray('asc',oCol.asSorting)!=-1&&$.inArray('desc',oCol.asSorting)==-1)
{oCol.sSortingClass=oSettings.oClasses.sSortableAsc;oCol.sSortingClassJUI=oSettings.oClasses.sSortJUIAscAllowed;}
else if($.inArray('asc',oCol.asSorting)==-1&&$.inArray('desc',oCol.asSorting)!=-1)
{oCol.sSortingClass=oSettings.oClasses.sSortableDesc;oCol.sSortingClassJUI=oSettings.oClasses.sSortJUIDescAllowed;}}
function _fnAdjustColumnSizing(oSettings)
{if(oSettings.oFeatures.bAutoWidth===false)
{return false;}
_fnCalculateColumnWidths(oSettings);for(var i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{oSettings.aoColumns[i].nTh.style.width=oSettings.aoColumns[i].sWidth;}}
function _fnVisibleToColumnIndex(oSettings,iMatch)
{var aiVis=_fnGetColumns(oSettings,'bVisible');return typeof aiVis[iMatch]==='number'?aiVis[iMatch]:null;}
function _fnColumnIndexToVisible(oSettings,iMatch)
{var aiVis=_fnGetColumns(oSettings,'bVisible');var iPos=$.inArray(iMatch,aiVis);return iPos!==-1?iPos:null;}
function _fnVisbleColumns(oSettings)
{return _fnGetColumns(oSettings,'bVisible').length;}
function _fnGetColumns(oSettings,sParam)
{var a=[];$.map(oSettings.aoColumns,function(val,i){if(val[sParam]){a.push(i);}});return a;}
function _fnDetectType(sData)
{var aTypes=DataTable.ext.aTypes;var iLen=aTypes.length;for(var i=0;i<iLen;i++)
{var sType=aTypes[i](sData);if(sType!==null)
{return sType;}}
return'string';}
function _fnReOrderIndex(oSettings,sColumns)
{var aColumns=sColumns.split(',');var aiReturn=[];for(var i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{for(var j=0;j<iLen;j++)
{if(oSettings.aoColumns[i].sName==aColumns[j])
{aiReturn.push(j);break;}}}
return aiReturn;}
function _fnColumnOrdering(oSettings)
{var sNames='';for(var i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{sNames+=oSettings.aoColumns[i].sName+',';}
if(sNames.length==iLen)
{return"";}
return sNames.slice(0,-1);}
function _fnApplyColumnDefs(oSettings,aoColDefs,aoCols,fn)
{var i,iLen,j,jLen,k,kLen;if(aoColDefs)
{for(i=aoColDefs.length-1;i>=0;i--)
{var aTargets=aoColDefs[i].aTargets;if(!$.isArray(aTargets))
{_fnLog(oSettings,1,'aTargets must be an array of targets, not a '+(typeof aTargets));}
for(j=0,jLen=aTargets.length;j<jLen;j++)
{if(typeof aTargets[j]==='number'&&aTargets[j]>=0)
{while(oSettings.aoColumns.length<=aTargets[j])
{_fnAddColumn(oSettings);}
fn(aTargets[j],aoColDefs[i]);}
else if(typeof aTargets[j]==='number'&&aTargets[j]<0)
{fn(oSettings.aoColumns.length+aTargets[j],aoColDefs[i]);}
else if(typeof aTargets[j]==='string')
{for(k=0,kLen=oSettings.aoColumns.length;k<kLen;k++)
{if(aTargets[j]=="_all"||$(oSettings.aoColumns[k].nTh).hasClass(aTargets[j]))
{fn(k,aoColDefs[i]);}}}}}}
if(aoCols)
{for(i=0,iLen=aoCols.length;i<iLen;i++)
{fn(i,aoCols[i]);}}}
function _fnAddData(oSettings,aDataSupplied)
{var oCol;var aDataIn=($.isArray(aDataSupplied))?aDataSupplied.slice():$.extend(true,{},aDataSupplied);var iRow=oSettings.aoData.length;var oData=$.extend(true,{},DataTable.models.oRow);oData._aData=aDataIn;oSettings.aoData.push(oData);var nTd,sThisType;for(var i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{oCol=oSettings.aoColumns[i];if(typeof oCol.fnRender==='function'&&oCol.bUseRendered&&oCol.mData!==null)
{_fnSetCellData(oSettings,iRow,i,_fnRender(oSettings,iRow,i));}
else
{_fnSetCellData(oSettings,iRow,i,_fnGetCellData(oSettings,iRow,i));}
if(oCol._bAutoType&&oCol.sType!='string')
{var sVarType=_fnGetCellData(oSettings,iRow,i,'type');if(sVarType!==null&&sVarType!=='')
{sThisType=_fnDetectType(sVarType);if(oCol.sType===null)
{oCol.sType=sThisType;}
else if(oCol.sType!=sThisType&&oCol.sType!="html")
{oCol.sType='string';}}}}
oSettings.aiDisplayMaster.push(iRow);if(!oSettings.oFeatures.bDeferRender)
{_fnCreateTr(oSettings,iRow);}
return iRow;}
function _fnGatherData(oSettings)
{var iLoop,i,iLen,j,jLen,jInner,nTds,nTrs,nTd,nTr,aLocalData,iThisIndex,iRow,iRows,iColumn,iColumns,sNodeName,oCol,oData;if(oSettings.bDeferLoading||oSettings.sAjaxSource===null)
{nTr=oSettings.nTBody.firstChild;while(nTr)
{if(nTr.nodeName.toUpperCase()=="TR")
{iThisIndex=oSettings.aoData.length;nTr._DT_RowIndex=iThisIndex;oSettings.aoData.push($.extend(true,{},DataTable.models.oRow,{"nTr":nTr}));oSettings.aiDisplayMaster.push(iThisIndex);nTd=nTr.firstChild;jInner=0;while(nTd)
{sNodeName=nTd.nodeName.toUpperCase();if(sNodeName=="TD"||sNodeName=="TH")
{_fnSetCellData(oSettings,iThisIndex,jInner,$.trim(nTd.innerHTML));jInner++;}
nTd=nTd.nextSibling;}}
nTr=nTr.nextSibling;}}
nTrs=_fnGetTrNodes(oSettings);nTds=[];for(i=0,iLen=nTrs.length;i<iLen;i++)
{nTd=nTrs[i].firstChild;while(nTd)
{sNodeName=nTd.nodeName.toUpperCase();if(sNodeName=="TD"||sNodeName=="TH")
{nTds.push(nTd);}
nTd=nTd.nextSibling;}}
for(iColumn=0,iColumns=oSettings.aoColumns.length;iColumn<iColumns;iColumn++)
{oCol=oSettings.aoColumns[iColumn];if(oCol.sTitle===null)
{oCol.sTitle=oCol.nTh.innerHTML;}
var
bAutoType=oCol._bAutoType,bRender=typeof oCol.fnRender==='function',bClass=oCol.sClass!==null,bVisible=oCol.bVisible,nCell,sThisType,sRendered,sValType;if(bAutoType||bRender||bClass||!bVisible)
{for(iRow=0,iRows=oSettings.aoData.length;iRow<iRows;iRow++)
{oData=oSettings.aoData[iRow];nCell=nTds[(iRow*iColumns)+iColumn];if(bAutoType&&oCol.sType!='string')
{sValType=_fnGetCellData(oSettings,iRow,iColumn,'type');if(sValType!=='')
{sThisType=_fnDetectType(sValType);if(oCol.sType===null)
{oCol.sType=sThisType;}
else if(oCol.sType!=sThisType&&oCol.sType!="html")
{oCol.sType='string';}}}
if(oCol.mRender)
{nCell.innerHTML=_fnGetCellData(oSettings,iRow,iColumn,'display');}
else if(oCol.mData!==iColumn)
{nCell.innerHTML=_fnGetCellData(oSettings,iRow,iColumn,'display');}
if(bRender)
{sRendered=_fnRender(oSettings,iRow,iColumn);nCell.innerHTML=sRendered;if(oCol.bUseRendered)
{_fnSetCellData(oSettings,iRow,iColumn,sRendered);}}
if(bClass)
{nCell.className+=' '+oCol.sClass;}
if(!bVisible)
{oData._anHidden[iColumn]=nCell;nCell.parentNode.removeChild(nCell);}
else
{oData._anHidden[iColumn]=null;}
if(oCol.fnCreatedCell)
{oCol.fnCreatedCell.call(oSettings.oInstance,nCell,_fnGetCellData(oSettings,iRow,iColumn,'display'),oData._aData,iRow,iColumn);}}}}
if(oSettings.aoRowCreatedCallback.length!==0)
{for(i=0,iLen=oSettings.aoData.length;i<iLen;i++)
{oData=oSettings.aoData[i];_fnCallbackFire(oSettings,'aoRowCreatedCallback',null,[oData.nTr,oData._aData,i]);}}}
function _fnNodeToDataIndex(oSettings,n)
{return(n._DT_RowIndex!==undefined)?n._DT_RowIndex:null;}
function _fnNodeToColumnIndex(oSettings,iRow,n)
{var anCells=_fnGetTdNodes(oSettings,iRow);for(var i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{if(anCells[i]===n)
{return i;}}
return-1;}
function _fnGetRowData(oSettings,iRow,sSpecific,aiColumns)
{var out=[];for(var i=0,iLen=aiColumns.length;i<iLen;i++)
{out.push(_fnGetCellData(oSettings,iRow,aiColumns[i],sSpecific));}
return out;}
function _fnGetCellData(oSettings,iRow,iCol,sSpecific)
{var sData;var oCol=oSettings.aoColumns[iCol];var oData=oSettings.aoData[iRow]._aData;if((sData=oCol.fnGetData(oData,sSpecific))===undefined)
{if(oSettings.iDrawError!=oSettings.iDraw&&oCol.sDefaultContent===null)
{_fnLog(oSettings,0,"Requested unknown parameter "+
(typeof oCol.mData=='function'?'{mData function}':"'"+oCol.mData+"'")+" from the data source for row "+iRow);oSettings.iDrawError=oSettings.iDraw;}
return oCol.sDefaultContent;}
if(sData===null&&oCol.sDefaultContent!==null)
{sData=oCol.sDefaultContent;}
else if(typeof sData==='function')
{return sData();}
if(sSpecific=='display'&&sData===null)
{return'';}
return sData;}
function _fnSetCellData(oSettings,iRow,iCol,val)
{var oCol=oSettings.aoColumns[iCol];var oData=oSettings.aoData[iRow]._aData;oCol.fnSetData(oData,val);}
var __reArray=/\[.*?\]$/;function _fnGetObjectDataFn(mSource)
{if(mSource===null)
{return function(data,type){return null;};}
else if(typeof mSource==='function')
{return function(data,type,extra){return mSource(data,type,extra);};}
else if(typeof mSource==='string'&&(mSource.indexOf('.')!==-1||mSource.indexOf('[')!==-1))
{var fetchData=function(data,type,src){var a=src.split('.');var arrayNotation,out,innerSrc;if(src!=="")
{for(var i=0,iLen=a.length;i<iLen;i++)
{arrayNotation=a[i].match(__reArray);if(arrayNotation){a[i]=a[i].replace(__reArray,'');if(a[i]!==""){data=data[a[i]];}
out=[];a.splice(0,i+1);innerSrc=a.join('.');for(var j=0,jLen=data.length;j<jLen;j++){out.push(fetchData(data[j],type,innerSrc));}
var join=arrayNotation[0].substring(1,arrayNotation[0].length-1);data=(join==="")?out:out.join(join);break;}
if(data===null||data[a[i]]===undefined)
{return undefined;}
data=data[a[i]];}}
return data;};return function(data,type){return fetchData(data,type,mSource);};}
else
{return function(data,type){return data[mSource];};}}
function _fnSetObjectDataFn(mSource)
{if(mSource===null)
{return function(data,val){};}
else if(typeof mSource==='function')
{return function(data,val){mSource(data,'set',val);};}
else if(typeof mSource==='string'&&(mSource.indexOf('.')!==-1||mSource.indexOf('[')!==-1))
{var setData=function(data,val,src){var a=src.split('.'),b;var arrayNotation,o,innerSrc;for(var i=0,iLen=a.length-1;i<iLen;i++)
{arrayNotation=a[i].match(__reArray);if(arrayNotation)
{a[i]=a[i].replace(__reArray,'');data[a[i]]=[];b=a.slice();b.splice(0,i+1);innerSrc=b.join('.');for(var j=0,jLen=val.length;j<jLen;j++)
{o={};setData(o,val[j],innerSrc);data[a[i]].push(o);}
return;}
if(data[a[i]]===null||data[a[i]]===undefined)
{data[a[i]]={};}
data=data[a[i]];}
data[a[a.length-1].replace(__reArray,'')]=val;};return function(data,val){return setData(data,val,mSource);};}
else
{return function(data,val){data[mSource]=val;};}}
function _fnGetDataMaster(oSettings)
{var aData=[];var iLen=oSettings.aoData.length;for(var i=0;i<iLen;i++)
{aData.push(oSettings.aoData[i]._aData);}
return aData;}
function _fnClearTable(oSettings)
{oSettings.aoData.splice(0,oSettings.aoData.length);oSettings.aiDisplayMaster.splice(0,oSettings.aiDisplayMaster.length);oSettings.aiDisplay.splice(0,oSettings.aiDisplay.length);_fnCalculateEnd(oSettings);}
function _fnDeleteIndex(a,iTarget)
{var iTargetIndex=-1;for(var i=0,iLen=a.length;i<iLen;i++)
{if(a[i]==iTarget)
{iTargetIndex=i;}
else if(a[i]>iTarget)
{a[i]--;}}
if(iTargetIndex!=-1)
{a.splice(iTargetIndex,1);}}
function _fnRender(oSettings,iRow,iCol)
{var oCol=oSettings.aoColumns[iCol];return oCol.fnRender({"iDataRow":iRow,"iDataColumn":iCol,"oSettings":oSettings,"aData":oSettings.aoData[iRow]._aData,"mDataProp":oCol.mData},_fnGetCellData(oSettings,iRow,iCol,'display'));}
function _fnCreateTr(oSettings,iRow)
{var oData=oSettings.aoData[iRow];var nTd;if(oData.nTr===null)
{oData.nTr=document.createElement('tr');oData.nTr._DT_RowIndex=iRow;if(oData._aData.DT_RowId)
{oData.nTr.id=oData._aData.DT_RowId;}
if(oData._aData.DT_RowClass)
{oData.nTr.className=oData._aData.DT_RowClass;}
for(var i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{var oCol=oSettings.aoColumns[i];nTd=document.createElement(oCol.sCellType);nTd.innerHTML=(typeof oCol.fnRender==='function'&&(!oCol.bUseRendered||oCol.mData===null))?_fnRender(oSettings,iRow,i):_fnGetCellData(oSettings,iRow,i,'display');if(oCol.sClass!==null)
{nTd.className=oCol.sClass;}
if(oCol.bVisible)
{oData.nTr.appendChild(nTd);oData._anHidden[i]=null;}
else
{oData._anHidden[i]=nTd;}
if(oCol.fnCreatedCell)
{oCol.fnCreatedCell.call(oSettings.oInstance,nTd,_fnGetCellData(oSettings,iRow,i,'display'),oData._aData,iRow,i);}}
_fnCallbackFire(oSettings,'aoRowCreatedCallback',null,[oData.nTr,oData._aData,iRow]);}}
function _fnBuildHead(oSettings)
{var i,nTh,iLen,j,jLen;var iThs=$('th, td',oSettings.nTHead).length;var iCorrector=0;var jqChildren;if(iThs!==0)
{for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{nTh=oSettings.aoColumns[i].nTh;nTh.setAttribute('role','columnheader');if(oSettings.aoColumns[i].bSortable)
{nTh.setAttribute('tabindex',oSettings.iTabIndex);nTh.setAttribute('aria-controls',oSettings.sTableId);}
if(oSettings.aoColumns[i].sClass!==null)
{$(nTh).addClass(oSettings.aoColumns[i].sClass);}
if(oSettings.aoColumns[i].sTitle!=nTh.innerHTML)
{nTh.innerHTML=oSettings.aoColumns[i].sTitle;}}}
else
{var nTr=document.createElement("tr");for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{nTh=oSettings.aoColumns[i].nTh;nTh.innerHTML=oSettings.aoColumns[i].sTitle;nTh.setAttribute('tabindex','0');if(oSettings.aoColumns[i].sClass!==null)
{$(nTh).addClass(oSettings.aoColumns[i].sClass);}
nTr.appendChild(nTh);}
$(oSettings.nTHead).html('')[0].appendChild(nTr);_fnDetectHeader(oSettings.aoHeader,oSettings.nTHead);}
$(oSettings.nTHead).children('tr').attr('role','row');if(oSettings.bJUI)
{for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{nTh=oSettings.aoColumns[i].nTh;var nDiv=document.createElement('div');nDiv.className=oSettings.oClasses.sSortJUIWrapper;$(nTh).contents().appendTo(nDiv);var nSpan=document.createElement('span');nSpan.className=oSettings.oClasses.sSortIcon;nDiv.appendChild(nSpan);nTh.appendChild(nDiv);}}
if(oSettings.oFeatures.bSort)
{for(i=0;i<oSettings.aoColumns.length;i++)
{if(oSettings.aoColumns[i].bSortable!==false)
{_fnSortAttachListener(oSettings,oSettings.aoColumns[i].nTh,i);}
else
{$(oSettings.aoColumns[i].nTh).addClass(oSettings.oClasses.sSortableNone);}}}
if(oSettings.oClasses.sFooterTH!=="")
{$(oSettings.nTFoot).children('tr').children('th').addClass(oSettings.oClasses.sFooterTH);}
if(oSettings.nTFoot!==null)
{var anCells=_fnGetUniqueThs(oSettings,null,oSettings.aoFooter);for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{if(anCells[i])
{oSettings.aoColumns[i].nTf=anCells[i];if(oSettings.aoColumns[i].sClass)
{$(anCells[i]).addClass(oSettings.aoColumns[i].sClass);}}}}}
function _fnDrawHead(oSettings,aoSource,bIncludeHidden)
{var i,iLen,j,jLen,k,kLen,n,nLocalTr;var aoLocal=[];var aApplied=[];var iColumns=oSettings.aoColumns.length;var iRowspan,iColspan;if(bIncludeHidden===undefined)
{bIncludeHidden=false;}
for(i=0,iLen=aoSource.length;i<iLen;i++)
{aoLocal[i]=aoSource[i].slice();aoLocal[i].nTr=aoSource[i].nTr;for(j=iColumns-1;j>=0;j--)
{if(!oSettings.aoColumns[j].bVisible&&!bIncludeHidden)
{aoLocal[i].splice(j,1);}}
aApplied.push([]);}
for(i=0,iLen=aoLocal.length;i<iLen;i++)
{nLocalTr=aoLocal[i].nTr;if(nLocalTr)
{while((n=nLocalTr.firstChild))
{nLocalTr.removeChild(n);}}
for(j=0,jLen=aoLocal[i].length;j<jLen;j++)
{iRowspan=1;iColspan=1;if(aApplied[i][j]===undefined)
{nLocalTr.appendChild(aoLocal[i][j].cell);aApplied[i][j]=1;while(aoLocal[i+iRowspan]!==undefined&&aoLocal[i][j].cell==aoLocal[i+iRowspan][j].cell)
{aApplied[i+iRowspan][j]=1;iRowspan++;}
while(aoLocal[i][j+iColspan]!==undefined&&aoLocal[i][j].cell==aoLocal[i][j+iColspan].cell)
{for(k=0;k<iRowspan;k++)
{aApplied[i+k][j+iColspan]=1;}
iColspan++;}
aoLocal[i][j].cell.rowSpan=iRowspan;aoLocal[i][j].cell.colSpan=iColspan;}}}}
function _fnDraw(oSettings)
{var aPreDraw=_fnCallbackFire(oSettings,'aoPreDrawCallback','preDraw',[oSettings]);if($.inArray(false,aPreDraw)!==-1)
{_fnProcessingDisplay(oSettings,false);return;}
var i,iLen,n;var anRows=[];var iRowCount=0;var iStripes=oSettings.asStripeClasses.length;var iOpenRows=oSettings.aoOpenRows.length;oSettings.bDrawing=true;if(oSettings.iInitDisplayStart!==undefined&&oSettings.iInitDisplayStart!=-1)
{if(oSettings.oFeatures.bServerSide)
{oSettings._iDisplayStart=oSettings.iInitDisplayStart;}
else
{oSettings._iDisplayStart=(oSettings.iInitDisplayStart>=oSettings.fnRecordsDisplay())?0:oSettings.iInitDisplayStart;}
oSettings.iInitDisplayStart=-1;_fnCalculateEnd(oSettings);}
if(oSettings.bDeferLoading)
{oSettings.bDeferLoading=false;oSettings.iDraw++;}
else if(!oSettings.oFeatures.bServerSide)
{oSettings.iDraw++;}
else if(!oSettings.bDestroying&&!_fnAjaxUpdate(oSettings))
{return;}
if(oSettings.aiDisplay.length!==0)
{var iStart=oSettings._iDisplayStart;var iEnd=oSettings._iDisplayEnd;if(oSettings.oFeatures.bServerSide)
{iStart=0;iEnd=oSettings.aoData.length;}
for(var j=iStart;j<iEnd;j++)
{var aoData=oSettings.aoData[oSettings.aiDisplay[j]];if(aoData.nTr===null)
{_fnCreateTr(oSettings,oSettings.aiDisplay[j]);}
var nRow=aoData.nTr;if(iStripes!==0)
{var sStripe=oSettings.asStripeClasses[iRowCount%iStripes];if(aoData._sRowStripe!=sStripe)
{$(nRow).removeClass(aoData._sRowStripe).addClass(sStripe);aoData._sRowStripe=sStripe;}}
_fnCallbackFire(oSettings,'aoRowCallback',null,[nRow,oSettings.aoData[oSettings.aiDisplay[j]]._aData,iRowCount,j]);anRows.push(nRow);iRowCount++;if(iOpenRows!==0)
{for(var k=0;k<iOpenRows;k++)
{if(nRow==oSettings.aoOpenRows[k].nParent)
{anRows.push(oSettings.aoOpenRows[k].nTr);break;}}}}}
else
{anRows[0]=document.createElement('tr');if(oSettings.asStripeClasses[0])
{anRows[0].className=oSettings.asStripeClasses[0];}
var oLang=oSettings.oLanguage;var sZero=oLang.sZeroRecords;if(oSettings.iDraw==1&&oSettings.sAjaxSource!==null&&!oSettings.oFeatures.bServerSide)
{sZero=oLang.sLoadingRecords;}
else if(oLang.sEmptyTable&&oSettings.fnRecordsTotal()===0)
{sZero=oLang.sEmptyTable;}
var nTd=document.createElement('td');nTd.setAttribute('valign',"top");nTd.colSpan=_fnVisbleColumns(oSettings);nTd.className=oSettings.oClasses.sRowEmpty;nTd.innerHTML=_fnInfoMacros(oSettings,sZero);anRows[iRowCount].appendChild(nTd);}
_fnCallbackFire(oSettings,'aoHeaderCallback','header',[$(oSettings.nTHead).children('tr')[0],_fnGetDataMaster(oSettings),oSettings._iDisplayStart,oSettings.fnDisplayEnd(),oSettings.aiDisplay]);_fnCallbackFire(oSettings,'aoFooterCallback','footer',[$(oSettings.nTFoot).children('tr')[0],_fnGetDataMaster(oSettings),oSettings._iDisplayStart,oSettings.fnDisplayEnd(),oSettings.aiDisplay]);var
nAddFrag=document.createDocumentFragment(),nRemoveFrag=document.createDocumentFragment(),nBodyPar,nTrs;if(oSettings.nTBody)
{nBodyPar=oSettings.nTBody.parentNode;nRemoveFrag.appendChild(oSettings.nTBody);if(!oSettings.oScroll.bInfinite||!oSettings._bInitComplete||oSettings.bSorted||oSettings.bFiltered)
{while((n=oSettings.nTBody.firstChild))
{oSettings.nTBody.removeChild(n);}}
for(i=0,iLen=anRows.length;i<iLen;i++)
{nAddFrag.appendChild(anRows[i]);}
oSettings.nTBody.appendChild(nAddFrag);if(nBodyPar!==null)
{nBodyPar.appendChild(oSettings.nTBody);}}
_fnCallbackFire(oSettings,'aoDrawCallback','draw',[oSettings]);oSettings.bSorted=false;oSettings.bFiltered=false;oSettings.bDrawing=false;if(oSettings.oFeatures.bServerSide)
{_fnProcessingDisplay(oSettings,false);if(!oSettings._bInitComplete)
{_fnInitComplete(oSettings);}}}
function _fnReDraw(oSettings)
{if(oSettings.oFeatures.bSort)
{_fnSort(oSettings,oSettings.oPreviousSearch);}
else if(oSettings.oFeatures.bFilter)
{_fnFilterComplete(oSettings,oSettings.oPreviousSearch);}
else
{_fnCalculateEnd(oSettings);_fnDraw(oSettings);}}
function _fnAddOptionsHtml(oSettings)
{var nHolding=$('<div></div>')[0];oSettings.nTable.parentNode.insertBefore(nHolding,oSettings.nTable);oSettings.nTableWrapper=$('<div id="'+oSettings.sTableId+'_wrapper" class="'+oSettings.oClasses.sWrapper+'" role="grid"></div>')[0];oSettings.nTableReinsertBefore=oSettings.nTable.nextSibling;var nInsertNode=oSettings.nTableWrapper;var aDom=oSettings.sDom.split('');var nTmp,iPushFeature,cOption,nNewNode,cNext,sAttr,j;for(var i=0;i<aDom.length;i++)
{iPushFeature=0;cOption=aDom[i];if(cOption=='<')
{nNewNode=$('<div></div>')[0];cNext=aDom[i+1];if(cNext=="'"||cNext=='"')
{sAttr="";j=2;while(aDom[i+j]!=cNext)
{sAttr+=aDom[i+j];j++;}
if(sAttr=="H")
{sAttr=oSettings.oClasses.sJUIHeader;}
else if(sAttr=="F")
{sAttr=oSettings.oClasses.sJUIFooter;}
if(sAttr.indexOf('.')!=-1)
{var aSplit=sAttr.split('.');nNewNode.id=aSplit[0].substr(1,aSplit[0].length-1);nNewNode.className=aSplit[1];}
else if(sAttr.charAt(0)=="#")
{nNewNode.id=sAttr.substr(1,sAttr.length-1);}
else
{nNewNode.className=sAttr;}
i+=j;}
nInsertNode.appendChild(nNewNode);nInsertNode=nNewNode;}
else if(cOption=='>')
{nInsertNode=nInsertNode.parentNode;}
else if(cOption=='l'&&oSettings.oFeatures.bPaginate&&oSettings.oFeatures.bLengthChange)
{nTmp=_fnFeatureHtmlLength(oSettings);iPushFeature=1;}
else if(cOption=='f'&&oSettings.oFeatures.bFilter)
{nTmp=_fnFeatureHtmlFilter(oSettings);iPushFeature=1;}
else if(cOption=='r'&&oSettings.oFeatures.bProcessing)
{nTmp=_fnFeatureHtmlProcessing(oSettings);iPushFeature=1;}
else if(cOption=='t')
{nTmp=_fnFeatureHtmlTable(oSettings);iPushFeature=1;}
else if(cOption=='i'&&oSettings.oFeatures.bInfo)
{nTmp=_fnFeatureHtmlInfo(oSettings);iPushFeature=1;}
else if(cOption=='p'&&oSettings.oFeatures.bPaginate)
{nTmp=_fnFeatureHtmlPaginate(oSettings);iPushFeature=1;}
else if(DataTable.ext.aoFeatures.length!==0)
{var aoFeatures=DataTable.ext.aoFeatures;for(var k=0,kLen=aoFeatures.length;k<kLen;k++)
{if(cOption==aoFeatures[k].cFeature)
{nTmp=aoFeatures[k].fnInit(oSettings);if(nTmp)
{iPushFeature=1;}
break;}}}
if(iPushFeature==1&&nTmp!==null)
{if(typeof oSettings.aanFeatures[cOption]!=='object')
{oSettings.aanFeatures[cOption]=[];}
oSettings.aanFeatures[cOption].push(nTmp);nInsertNode.appendChild(nTmp);}}
nHolding.parentNode.replaceChild(oSettings.nTableWrapper,nHolding);}
function _fnDetectHeader(aLayout,nThead)
{var nTrs=$(nThead).children('tr');var nTr,nCell;var i,k,l,iLen,jLen,iColShifted,iColumn,iColspan,iRowspan;var bUnique;var fnShiftCol=function(a,i,j){var k=a[i];while(k[j]){j++;}
return j;};aLayout.splice(0,aLayout.length);for(i=0,iLen=nTrs.length;i<iLen;i++)
{aLayout.push([]);}
for(i=0,iLen=nTrs.length;i<iLen;i++)
{nTr=nTrs[i];iColumn=0;nCell=nTr.firstChild;while(nCell){if(nCell.nodeName.toUpperCase()=="TD"||nCell.nodeName.toUpperCase()=="TH")
{iColspan=nCell.getAttribute('colspan')*1;iRowspan=nCell.getAttribute('rowspan')*1;iColspan=(!iColspan||iColspan===0||iColspan===1)?1:iColspan;iRowspan=(!iRowspan||iRowspan===0||iRowspan===1)?1:iRowspan;iColShifted=fnShiftCol(aLayout,i,iColumn);bUnique=iColspan===1?true:false;for(l=0;l<iColspan;l++)
{for(k=0;k<iRowspan;k++)
{aLayout[i+k][iColShifted+l]={"cell":nCell,"unique":bUnique};aLayout[i+k].nTr=nTr;}}}
nCell=nCell.nextSibling;}}}
function _fnGetUniqueThs(oSettings,nHeader,aLayout)
{var aReturn=[];if(!aLayout)
{aLayout=oSettings.aoHeader;if(nHeader)
{aLayout=[];_fnDetectHeader(aLayout,nHeader);}}
for(var i=0,iLen=aLayout.length;i<iLen;i++)
{for(var j=0,jLen=aLayout[i].length;j<jLen;j++)
{if(aLayout[i][j].unique&&(!aReturn[j]||!oSettings.bSortCellsTop))
{aReturn[j]=aLayout[i][j].cell;}}}
return aReturn;}
function _fnAjaxUpdate(oSettings)
{if(oSettings.bAjaxDataGet)
{oSettings.iDraw++;_fnProcessingDisplay(oSettings,true);var iColumns=oSettings.aoColumns.length;var aoData=_fnAjaxParameters(oSettings);_fnServerParams(oSettings,aoData);oSettings.fnServerData.call(oSettings.oInstance,oSettings.sAjaxSource,aoData,function(json){_fnAjaxUpdateDraw(oSettings,json);},oSettings);return false;}
else
{return true;}}
function _fnAjaxParameters(oSettings)
{var iColumns=oSettings.aoColumns.length;var aoData=[],mDataProp,aaSort,aDataSort;var i,j;aoData.push({"name":"sEcho","value":oSettings.iDraw});aoData.push({"name":"iColumns","value":iColumns});aoData.push({"name":"sColumns","value":_fnColumnOrdering(oSettings)});aoData.push({"name":"iDisplayStart","value":oSettings._iDisplayStart});aoData.push({"name":"iDisplayLength","value":oSettings.oFeatures.bPaginate!==false?oSettings._iDisplayLength:-1});for(i=0;i<iColumns;i++)
{mDataProp=oSettings.aoColumns[i].mData;aoData.push({"name":"mDataProp_"+i,"value":typeof(mDataProp)==="function"?'function':mDataProp});}
if(oSettings.oFeatures.bFilter!==false)
{aoData.push({"name":"sSearch","value":oSettings.oPreviousSearch.sSearch});aoData.push({"name":"bRegex","value":oSettings.oPreviousSearch.bRegex});for(i=0;i<iColumns;i++)
{aoData.push({"name":"sSearch_"+i,"value":oSettings.aoPreSearchCols[i].sSearch});aoData.push({"name":"bRegex_"+i,"value":oSettings.aoPreSearchCols[i].bRegex});aoData.push({"name":"bSearchable_"+i,"value":oSettings.aoColumns[i].bSearchable});}}
if(oSettings.oFeatures.bSort!==false)
{var iCounter=0;aaSort=(oSettings.aaSortingFixed!==null)?oSettings.aaSortingFixed.concat(oSettings.aaSorting):oSettings.aaSorting.slice();for(i=0;i<aaSort.length;i++)
{aDataSort=oSettings.aoColumns[aaSort[i][0]].aDataSort;for(j=0;j<aDataSort.length;j++)
{aoData.push({"name":"iSortCol_"+iCounter,"value":aDataSort[j]});aoData.push({"name":"sSortDir_"+iCounter,"value":aaSort[i][1]});iCounter++;}}
aoData.push({"name":"iSortingCols","value":iCounter});for(i=0;i<iColumns;i++)
{aoData.push({"name":"bSortable_"+i,"value":oSettings.aoColumns[i].bSortable});}}
return aoData;}
function _fnServerParams(oSettings,aoData)
{_fnCallbackFire(oSettings,'aoServerParams','serverParams',[aoData]);}
function _fnAjaxUpdateDraw(oSettings,json)
{if(json.sEcho!==undefined)
{if(json.sEcho*1<oSettings.iDraw)
{return;}
else
{oSettings.iDraw=json.sEcho*1;}}
if(!oSettings.oScroll.bInfinite||(oSettings.oScroll.bInfinite&&(oSettings.bSorted||oSettings.bFiltered)))
{_fnClearTable(oSettings);}
oSettings._iRecordsTotal=parseInt(json.iTotalRecords,10);oSettings._iRecordsDisplay=parseInt(json.iTotalDisplayRecords,10);var sOrdering=_fnColumnOrdering(oSettings);var bReOrder=(json.sColumns!==undefined&&sOrdering!==""&&json.sColumns!=sOrdering);var aiIndex;if(bReOrder)
{aiIndex=_fnReOrderIndex(oSettings,json.sColumns);}
var aData=_fnGetObjectDataFn(oSettings.sAjaxDataProp)(json);for(var i=0,iLen=aData.length;i<iLen;i++)
{if(bReOrder)
{var aDataSorted=[];for(var j=0,jLen=oSettings.aoColumns.length;j<jLen;j++)
{aDataSorted.push(aData[i][aiIndex[j]]);}
_fnAddData(oSettings,aDataSorted);}
else
{_fnAddData(oSettings,aData[i]);}}
oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();oSettings.bAjaxDataGet=false;_fnDraw(oSettings);oSettings.bAjaxDataGet=true;_fnProcessingDisplay(oSettings,false);}
function _fnFeatureHtmlFilter(oSettings)
{var oPreviousSearch=oSettings.oPreviousSearch;var sSearchStr=oSettings.oLanguage.sSearch;sSearchStr=(sSearchStr.indexOf('_INPUT_')!==-1)?sSearchStr.replace('_INPUT_','<input type="text" />'):sSearchStr===""?'<input type="text" />':sSearchStr+' <input type="text" />';var nFilter=document.createElement('div');nFilter.className=oSettings.oClasses.sFilter;nFilter.innerHTML='<label>'+sSearchStr+'</label>';if(!oSettings.aanFeatures.f)
{nFilter.id=oSettings.sTableId+'_filter';}
var jqFilter=$('input[type="text"]',nFilter);nFilter._DT_Input=jqFilter[0];jqFilter.val(oPreviousSearch.sSearch.replace('"','&quot;'));jqFilter.bind('keyup.DT',function(e){var n=oSettings.aanFeatures.f;var val=this.value===""?"":this.value;for(var i=0,iLen=n.length;i<iLen;i++)
{if(n[i]!=$(this).parents('div.dataTables_filter')[0])
{$(n[i]._DT_Input).val(val);}}
if(val!=oPreviousSearch.sSearch)
{_fnFilterComplete(oSettings,{"sSearch":val,"bRegex":oPreviousSearch.bRegex,"bSmart":oPreviousSearch.bSmart,"bCaseInsensitive":oPreviousSearch.bCaseInsensitive});}});jqFilter.attr('aria-controls',oSettings.sTableId).bind('keypress.DT',function(e){if(e.keyCode==13)
{return false;}});return nFilter;}
function _fnFilterComplete(oSettings,oInput,iForce)
{var oPrevSearch=oSettings.oPreviousSearch;var aoPrevSearch=oSettings.aoPreSearchCols;var fnSaveFilter=function(oFilter){oPrevSearch.sSearch=oFilter.sSearch;oPrevSearch.bRegex=oFilter.bRegex;oPrevSearch.bSmart=oFilter.bSmart;oPrevSearch.bCaseInsensitive=oFilter.bCaseInsensitive;};if(!oSettings.oFeatures.bServerSide)
{_fnFilter(oSettings,oInput.sSearch,iForce,oInput.bRegex,oInput.bSmart,oInput.bCaseInsensitive);fnSaveFilter(oInput);for(var i=0;i<oSettings.aoPreSearchCols.length;i++)
{_fnFilterColumn(oSettings,aoPrevSearch[i].sSearch,i,aoPrevSearch[i].bRegex,aoPrevSearch[i].bSmart,aoPrevSearch[i].bCaseInsensitive);}
_fnFilterCustom(oSettings);}
else
{fnSaveFilter(oInput);}
oSettings.bFiltered=true;$(oSettings.oInstance).trigger('filter',oSettings);oSettings._iDisplayStart=0;_fnCalculateEnd(oSettings);_fnDraw(oSettings);_fnBuildSearchArray(oSettings,0);}
function _fnFilterCustom(oSettings)
{var afnFilters=DataTable.ext.afnFiltering;var aiFilterColumns=_fnGetColumns(oSettings,'bSearchable');for(var i=0,iLen=afnFilters.length;i<iLen;i++)
{var iCorrector=0;for(var j=0,jLen=oSettings.aiDisplay.length;j<jLen;j++)
{var iDisIndex=oSettings.aiDisplay[j-iCorrector];var bTest=afnFilters[i](oSettings,_fnGetRowData(oSettings,iDisIndex,'filter',aiFilterColumns),iDisIndex);if(!bTest)
{oSettings.aiDisplay.splice(j-iCorrector,1);iCorrector++;}}}}
function _fnFilterColumn(oSettings,sInput,iColumn,bRegex,bSmart,bCaseInsensitive)
{if(sInput==="")
{return;}
var iIndexCorrector=0;var rpSearch=_fnFilterCreateSearch(sInput,bRegex,bSmart,bCaseInsensitive);for(var i=oSettings.aiDisplay.length-1;i>=0;i--)
{var sData=_fnDataToSearch(_fnGetCellData(oSettings,oSettings.aiDisplay[i],iColumn,'filter'),oSettings.aoColumns[iColumn].sType);if(!rpSearch.test(sData))
{oSettings.aiDisplay.splice(i,1);iIndexCorrector++;}}}
function _fnFilter(oSettings,sInput,iForce,bRegex,bSmart,bCaseInsensitive)
{var i;var rpSearch=_fnFilterCreateSearch(sInput,bRegex,bSmart,bCaseInsensitive);var oPrevSearch=oSettings.oPreviousSearch;if(!iForce)
{iForce=0;}
if(DataTable.ext.afnFiltering.length!==0)
{iForce=1;}
if(sInput.length<=0)
{oSettings.aiDisplay.splice(0,oSettings.aiDisplay.length);oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();}
else
{if(oSettings.aiDisplay.length==oSettings.aiDisplayMaster.length||oPrevSearch.sSearch.length>sInput.length||iForce==1||sInput.indexOf(oPrevSearch.sSearch)!==0)
{oSettings.aiDisplay.splice(0,oSettings.aiDisplay.length);_fnBuildSearchArray(oSettings,1);for(i=0;i<oSettings.aiDisplayMaster.length;i++)
{if(rpSearch.test(oSettings.asDataSearch[i]))
{oSettings.aiDisplay.push(oSettings.aiDisplayMaster[i]);}}}
else
{var iIndexCorrector=0;for(i=0;i<oSettings.asDataSearch.length;i++)
{if(!rpSearch.test(oSettings.asDataSearch[i]))
{oSettings.aiDisplay.splice(i-iIndexCorrector,1);iIndexCorrector++;}}}}}
function _fnBuildSearchArray(oSettings,iMaster)
{if(!oSettings.oFeatures.bServerSide)
{oSettings.asDataSearch=[];var aiFilterColumns=_fnGetColumns(oSettings,'bSearchable');var aiIndex=(iMaster===1)?oSettings.aiDisplayMaster:oSettings.aiDisplay;for(var i=0,iLen=aiIndex.length;i<iLen;i++)
{oSettings.asDataSearch[i]=_fnBuildSearchRow(oSettings,_fnGetRowData(oSettings,aiIndex[i],'filter',aiFilterColumns));}}}
function _fnBuildSearchRow(oSettings,aData)
{var sSearch=aData.join('  ');if(sSearch.indexOf('&')!==-1)
{sSearch=$('<div>').html(sSearch).text();}
return sSearch.replace(/[\n\r]/g," ");}
function _fnFilterCreateSearch(sSearch,bRegex,bSmart,bCaseInsensitive)
{var asSearch,sRegExpString;if(bSmart)
{asSearch=bRegex?sSearch.split(' '):_fnEscapeRegex(sSearch).split(' ');sRegExpString='^(?=.*?'+asSearch.join(')(?=.*?')+').*$';return new RegExp(sRegExpString,bCaseInsensitive?"i":"");}
else
{sSearch=bRegex?sSearch:_fnEscapeRegex(sSearch);return new RegExp(sSearch,bCaseInsensitive?"i":"");}}
function _fnDataToSearch(sData,sType)
{if(typeof DataTable.ext.ofnSearch[sType]==="function")
{return DataTable.ext.ofnSearch[sType](sData);}
else if(sData===null)
{return'';}
else if(sType=="html")
{return sData.replace(/[\r\n]/g," ").replace(/<.*?>/g,"");}
else if(typeof sData==="string")
{return sData.replace(/[\r\n]/g," ");}
return sData;}
function _fnEscapeRegex(sVal)
{var acEscape=['/','.','*','+','?','|','(',')','[',']','{','}','\\','$','^','-'];var reReplace=new RegExp('(\\'+acEscape.join('|\\')+')','g');return sVal.replace(reReplace,'\\$1');}
function _fnFeatureHtmlInfo(oSettings)
{var nInfo=document.createElement('div');nInfo.className=oSettings.oClasses.sInfo;if(!oSettings.aanFeatures.i)
{oSettings.aoDrawCallback.push({"fn":_fnUpdateInfo,"sName":"information"});nInfo.id=oSettings.sTableId+'_info';}
oSettings.nTable.setAttribute('aria-describedby',oSettings.sTableId+'_info');return nInfo;}
function _fnUpdateInfo(oSettings)
{if(!oSettings.oFeatures.bInfo||oSettings.aanFeatures.i.length===0)
{return;}
var
oLang=oSettings.oLanguage,iStart=oSettings._iDisplayStart+1,iEnd=oSettings.fnDisplayEnd(),iMax=oSettings.fnRecordsTotal(),iTotal=oSettings.fnRecordsDisplay(),sOut;if(iTotal===0)
{sOut=oLang.sInfoEmpty;}
else{sOut=oLang.sInfo;}
if(iTotal!=iMax)
{sOut+=' '+oLang.sInfoFiltered;}
sOut+=oLang.sInfoPostFix;sOut=_fnInfoMacros(oSettings,sOut);if(oLang.fnInfoCallback!==null)
{sOut=oLang.fnInfoCallback.call(oSettings.oInstance,oSettings,iStart,iEnd,iMax,iTotal,sOut);}
var n=oSettings.aanFeatures.i;for(var i=0,iLen=n.length;i<iLen;i++)
{$(n[i]).html(sOut);}}
function _fnInfoMacros(oSettings,str)
{var
iStart=oSettings._iDisplayStart+1,sStart=oSettings.fnFormatNumber(iStart),iEnd=oSettings.fnDisplayEnd(),sEnd=oSettings.fnFormatNumber(iEnd),iTotal=oSettings.fnRecordsDisplay(),sTotal=oSettings.fnFormatNumber(iTotal),iMax=oSettings.fnRecordsTotal(),sMax=oSettings.fnFormatNumber(iMax);if(oSettings.oScroll.bInfinite)
{sStart=oSettings.fnFormatNumber(1);}
return str.replace(/_START_/g,sStart).replace(/_END_/g,sEnd).replace(/_TOTAL_/g,sTotal).replace(/_MAX_/g,sMax);}
function _fnInitialise(oSettings)
{var i,iLen,iAjaxStart=oSettings.iInitDisplayStart;if(oSettings.bInitialised===false)
{setTimeout(function(){_fnInitialise(oSettings);},200);return;}
_fnAddOptionsHtml(oSettings);_fnBuildHead(oSettings);_fnDrawHead(oSettings,oSettings.aoHeader);if(oSettings.nTFoot)
{_fnDrawHead(oSettings,oSettings.aoFooter);}
_fnProcessingDisplay(oSettings,true);if(oSettings.oFeatures.bAutoWidth)
{_fnCalculateColumnWidths(oSettings);}
for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{if(oSettings.aoColumns[i].sWidth!==null)
{oSettings.aoColumns[i].nTh.style.width=_fnStringToCss(oSettings.aoColumns[i].sWidth);}}
if(oSettings.oFeatures.bSort)
{_fnSort(oSettings);}
else if(oSettings.oFeatures.bFilter)
{_fnFilterComplete(oSettings,oSettings.oPreviousSearch);}
else
{oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();_fnCalculateEnd(oSettings);_fnDraw(oSettings);}
if(oSettings.sAjaxSource!==null&&!oSettings.oFeatures.bServerSide)
{var aoData=[];_fnServerParams(oSettings,aoData);oSettings.fnServerData.call(oSettings.oInstance,oSettings.sAjaxSource,aoData,function(json){var aData=(oSettings.sAjaxDataProp!=="")?_fnGetObjectDataFn(oSettings.sAjaxDataProp)(json):json;for(i=0;i<aData.length;i++)
{_fnAddData(oSettings,aData[i]);}
oSettings.iInitDisplayStart=iAjaxStart;if(oSettings.oFeatures.bSort)
{_fnSort(oSettings);}
else
{oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();_fnCalculateEnd(oSettings);_fnDraw(oSettings);}
_fnProcessingDisplay(oSettings,false);_fnInitComplete(oSettings,json);},oSettings);return;}
if(!oSettings.oFeatures.bServerSide)
{_fnProcessingDisplay(oSettings,false);_fnInitComplete(oSettings);}}
function _fnInitComplete(oSettings,json)
{oSettings._bInitComplete=true;_fnCallbackFire(oSettings,'aoInitComplete','init',[oSettings,json]);}
function _fnLanguageCompat(oLanguage)
{var oDefaults=DataTable.defaults.oLanguage;if(!oLanguage.sEmptyTable&&oLanguage.sZeroRecords&&oDefaults.sEmptyTable==="No data available in table")
{_fnMap(oLanguage,oLanguage,'sZeroRecords','sEmptyTable');}
if(!oLanguage.sLoadingRecords&&oLanguage.sZeroRecords&&oDefaults.sLoadingRecords==="Loading...")
{_fnMap(oLanguage,oLanguage,'sZeroRecords','sLoadingRecords');}}
function _fnFeatureHtmlLength(oSettings)
{if(oSettings.oScroll.bInfinite)
{return null;}
var sName='name="'+oSettings.sTableId+'_length"';var sStdMenu='<select size="1" '+sName+'>';var i,iLen;var aLengthMenu=oSettings.aLengthMenu;if(aLengthMenu.length==2&&typeof aLengthMenu[0]==='object'&&typeof aLengthMenu[1]==='object')
{for(i=0,iLen=aLengthMenu[0].length;i<iLen;i++)
{sStdMenu+='<option value="'+aLengthMenu[0][i]+'">'+aLengthMenu[1][i]+'</option>';}}
else
{for(i=0,iLen=aLengthMenu.length;i<iLen;i++)
{sStdMenu+='<option value="'+aLengthMenu[i]+'">'+aLengthMenu[i]+'</option>';}}
sStdMenu+='</select>';var nLength=document.createElement('div');if(!oSettings.aanFeatures.l)
{nLength.id=oSettings.sTableId+'_length';}
nLength.className=oSettings.oClasses.sLength;nLength.innerHTML='<label>'+oSettings.oLanguage.sLengthMenu.replace('_MENU_',sStdMenu)+'</label>';$('select option[value="'+oSettings._iDisplayLength+'"]',nLength).attr("selected",true);$('select',nLength).bind('change.DT',function(e){var iVal=$(this).val();var n=oSettings.aanFeatures.l;for(i=0,iLen=n.length;i<iLen;i++)
{if(n[i]!=this.parentNode)
{$('select',n[i]).val(iVal);}}
oSettings._iDisplayLength=parseInt(iVal,10);_fnCalculateEnd(oSettings);if(oSettings.fnDisplayEnd()==oSettings.fnRecordsDisplay())
{oSettings._iDisplayStart=oSettings.fnDisplayEnd()-oSettings._iDisplayLength;if(oSettings._iDisplayStart<0)
{oSettings._iDisplayStart=0;}}
if(oSettings._iDisplayLength==-1)
{oSettings._iDisplayStart=0;}
_fnDraw(oSettings);});$('select',nLength).attr('aria-controls',oSettings.sTableId);return nLength;}
function _fnCalculateEnd(oSettings)
{if(oSettings.oFeatures.bPaginate===false)
{oSettings._iDisplayEnd=oSettings.aiDisplay.length;}
else
{if(oSettings._iDisplayStart+oSettings._iDisplayLength>oSettings.aiDisplay.length||oSettings._iDisplayLength==-1)
{oSettings._iDisplayEnd=oSettings.aiDisplay.length;}
else
{oSettings._iDisplayEnd=oSettings._iDisplayStart+oSettings._iDisplayLength;}}}
function _fnFeatureHtmlPaginate(oSettings)
{if(oSettings.oScroll.bInfinite)
{return null;}
var nPaginate=document.createElement('div');nPaginate.className=oSettings.oClasses.sPaging+oSettings.sPaginationType;DataTable.ext.oPagination[oSettings.sPaginationType].fnInit(oSettings,nPaginate,function(oSettings){_fnCalculateEnd(oSettings);_fnDraw(oSettings);});if(!oSettings.aanFeatures.p)
{oSettings.aoDrawCallback.push({"fn":function(oSettings){DataTable.ext.oPagination[oSettings.sPaginationType].fnUpdate(oSettings,function(oSettings){_fnCalculateEnd(oSettings);_fnDraw(oSettings);});},"sName":"pagination"});}
return nPaginate;}
function _fnPageChange(oSettings,mAction)
{var iOldStart=oSettings._iDisplayStart;if(typeof mAction==="number")
{oSettings._iDisplayStart=mAction*oSettings._iDisplayLength;if(oSettings._iDisplayStart>oSettings.fnRecordsDisplay())
{oSettings._iDisplayStart=0;}}
else if(mAction=="first")
{oSettings._iDisplayStart=0;}
else if(mAction=="previous")
{oSettings._iDisplayStart=oSettings._iDisplayLength>=0?oSettings._iDisplayStart-oSettings._iDisplayLength:0;if(oSettings._iDisplayStart<0)
{oSettings._iDisplayStart=0;}}
else if(mAction=="next")
{if(oSettings._iDisplayLength>=0)
{if(oSettings._iDisplayStart+oSettings._iDisplayLength<oSettings.fnRecordsDisplay())
{oSettings._iDisplayStart+=oSettings._iDisplayLength;}}
else
{oSettings._iDisplayStart=0;}}
else if(mAction=="last")
{if(oSettings._iDisplayLength>=0)
{var iPages=parseInt((oSettings.fnRecordsDisplay()-1)/oSettings._iDisplayLength,10)+1;oSettings._iDisplayStart=(iPages-1)*oSettings._iDisplayLength;}
else
{oSettings._iDisplayStart=0;}}
else
{_fnLog(oSettings,0,"Unknown paging action: "+mAction);}
$(oSettings.oInstance).trigger('page',oSettings);return iOldStart!=oSettings._iDisplayStart;}
function _fnFeatureHtmlProcessing(oSettings)
{var nProcessing=document.createElement('div');if(!oSettings.aanFeatures.r)
{nProcessing.id=oSettings.sTableId+'_processing';}
nProcessing.innerHTML=oSettings.oLanguage.sProcessing;nProcessing.className=oSettings.oClasses.sProcessing;oSettings.nTable.parentNode.insertBefore(nProcessing,oSettings.nTable);return nProcessing;}
function _fnProcessingDisplay(oSettings,bShow)
{if(oSettings.oFeatures.bProcessing)
{var an=oSettings.aanFeatures.r;for(var i=0,iLen=an.length;i<iLen;i++)
{an[i].style.visibility=bShow?"visible":"hidden";}}
$(oSettings.oInstance).trigger('processing',[oSettings,bShow]);}
function _fnFeatureHtmlTable(oSettings)
{if(oSettings.oScroll.sX===""&&oSettings.oScroll.sY==="")
{return oSettings.nTable;}
var
nScroller=document.createElement('div'),nScrollHead=document.createElement('div'),nScrollHeadInner=document.createElement('div'),nScrollBody=document.createElement('div'),nScrollFoot=document.createElement('div'),nScrollFootInner=document.createElement('div'),nScrollHeadTable=oSettings.nTable.cloneNode(false),nScrollFootTable=oSettings.nTable.cloneNode(false),nThead=oSettings.nTable.getElementsByTagName('thead')[0],nTfoot=oSettings.nTable.getElementsByTagName('tfoot').length===0?null:oSettings.nTable.getElementsByTagName('tfoot')[0],oClasses=oSettings.oClasses;nScrollHead.appendChild(nScrollHeadInner);nScrollFoot.appendChild(nScrollFootInner);nScrollBody.appendChild(oSettings.nTable);nScroller.appendChild(nScrollHead);nScroller.appendChild(nScrollBody);nScrollHeadInner.appendChild(nScrollHeadTable);nScrollHeadTable.appendChild(nThead);if(nTfoot!==null)
{nScroller.appendChild(nScrollFoot);nScrollFootInner.appendChild(nScrollFootTable);nScrollFootTable.appendChild(nTfoot);}
nScroller.className=oClasses.sScrollWrapper;nScrollHead.className=oClasses.sScrollHead;nScrollHeadInner.className=oClasses.sScrollHeadInner;nScrollBody.className=oClasses.sScrollBody;nScrollFoot.className=oClasses.sScrollFoot;nScrollFootInner.className=oClasses.sScrollFootInner;if(oSettings.oScroll.bAutoCss)
{nScrollHead.style.overflow="hidden";nScrollHead.style.position="relative";nScrollFoot.style.overflow="hidden";nScrollBody.style.overflow="auto";}
nScrollHead.style.border="0";nScrollHead.style.width="100%";nScrollFoot.style.border="0";nScrollHeadInner.style.width=oSettings.oScroll.sXInner!==""?oSettings.oScroll.sXInner:"100%";nScrollHeadTable.removeAttribute('id');nScrollHeadTable.style.marginLeft="0";oSettings.nTable.style.marginLeft="0";if(nTfoot!==null)
{nScrollFootTable.removeAttribute('id');nScrollFootTable.style.marginLeft="0";}
var nCaption=$(oSettings.nTable).children('caption');if(nCaption.length>0)
{nCaption=nCaption[0];if(nCaption._captionSide==="top")
{nScrollHeadTable.appendChild(nCaption);}
else if(nCaption._captionSide==="bottom"&&nTfoot)
{nScrollFootTable.appendChild(nCaption);}}
if(oSettings.oScroll.sX!=="")
{nScrollHead.style.width=_fnStringToCss(oSettings.oScroll.sX);nScrollBody.style.width=_fnStringToCss(oSettings.oScroll.sX);if(nTfoot!==null)
{nScrollFoot.style.width=_fnStringToCss(oSettings.oScroll.sX);}
$(nScrollBody).scroll(function(e){nScrollHead.scrollLeft=this.scrollLeft;if(nTfoot!==null)
{nScrollFoot.scrollLeft=this.scrollLeft;}});}
if(oSettings.oScroll.sY!=="")
{nScrollBody.style.height=_fnStringToCss(oSettings.oScroll.sY);}
oSettings.aoDrawCallback.push({"fn":_fnScrollDraw,"sName":"scrolling"});if(oSettings.oScroll.bInfinite)
{$(nScrollBody).scroll(function(){if(!oSettings.bDrawing&&$(this).scrollTop()!==0)
{if($(this).scrollTop()+$(this).height()>$(oSettings.nTable).height()-oSettings.oScroll.iLoadGap)
{if(oSettings.fnDisplayEnd()<oSettings.fnRecordsDisplay())
{_fnPageChange(oSettings,'next');_fnCalculateEnd(oSettings);_fnDraw(oSettings);}}}});}
oSettings.nScrollHead=nScrollHead;oSettings.nScrollFoot=nScrollFoot;return nScroller;}
function _fnScrollDraw(o)
{var
nScrollHeadInner=o.nScrollHead.getElementsByTagName('div')[0],nScrollHeadTable=nScrollHeadInner.getElementsByTagName('table')[0],nScrollBody=o.nTable.parentNode,i,iLen,j,jLen,anHeadToSize,anHeadSizers,anFootSizers,anFootToSize,oStyle,iVis,nTheadSize,nTfootSize,iWidth,aApplied=[],aAppliedFooter=[],iSanityWidth,nScrollFootInner=(o.nTFoot!==null)?o.nScrollFoot.getElementsByTagName('div')[0]:null,nScrollFootTable=(o.nTFoot!==null)?nScrollFootInner.getElementsByTagName('table')[0]:null,ie67=o.oBrowser.bScrollOversize,zeroOut=function(nSizer){oStyle=nSizer.style;oStyle.paddingTop="0";oStyle.paddingBottom="0";oStyle.borderTopWidth="0";oStyle.borderBottomWidth="0";oStyle.height=0;};$(o.nTable).children('thead, tfoot').remove();nTheadSize=$(o.nTHead).clone()[0];o.nTable.insertBefore(nTheadSize,o.nTable.childNodes[0]);anHeadToSize=o.nTHead.getElementsByTagName('tr');anHeadSizers=nTheadSize.getElementsByTagName('tr');if(o.nTFoot!==null)
{nTfootSize=$(o.nTFoot).clone()[0];o.nTable.insertBefore(nTfootSize,o.nTable.childNodes[1]);anFootToSize=o.nTFoot.getElementsByTagName('tr');anFootSizers=nTfootSize.getElementsByTagName('tr');}
if(o.oScroll.sX==="")
{nScrollBody.style.width='100%';nScrollHeadInner.parentNode.style.width='100%';}
var nThs=_fnGetUniqueThs(o,nTheadSize);for(i=0,iLen=nThs.length;i<iLen;i++)
{iVis=_fnVisibleToColumnIndex(o,i);nThs[i].style.width=o.aoColumns[iVis].sWidth;}
if(o.nTFoot!==null)
{_fnApplyToChildren(function(n){n.style.width="";},anFootSizers);}
if(o.oScroll.bCollapse&&o.oScroll.sY!=="")
{nScrollBody.style.height=(nScrollBody.offsetHeight+o.nTHead.offsetHeight)+"px";}
iSanityWidth=$(o.nTable).outerWidth();if(o.oScroll.sX==="")
{o.nTable.style.width="100%";if(ie67&&($('tbody',nScrollBody).height()>nScrollBody.offsetHeight||$(nScrollBody).css('overflow-y')=="scroll"))
{o.nTable.style.width=_fnStringToCss($(o.nTable).outerWidth()-o.oScroll.iBarWidth);}}
else
{if(o.oScroll.sXInner!=="")
{o.nTable.style.width=_fnStringToCss(o.oScroll.sXInner);}
else if(iSanityWidth==$(nScrollBody).width()&&$(nScrollBody).height()<$(o.nTable).height())
{o.nTable.style.width=_fnStringToCss(iSanityWidth-o.oScroll.iBarWidth);if($(o.nTable).outerWidth()>iSanityWidth-o.oScroll.iBarWidth)
{o.nTable.style.width=_fnStringToCss(iSanityWidth);}}
else
{o.nTable.style.width=_fnStringToCss(iSanityWidth);}}
iSanityWidth=$(o.nTable).outerWidth();_fnApplyToChildren(zeroOut,anHeadSizers);_fnApplyToChildren(function(nSizer){aApplied.push(_fnStringToCss($(nSizer).width()));},anHeadSizers);_fnApplyToChildren(function(nToSize,i){nToSize.style.width=aApplied[i];},anHeadToSize);$(anHeadSizers).height(0);if(o.nTFoot!==null)
{_fnApplyToChildren(zeroOut,anFootSizers);_fnApplyToChildren(function(nSizer){aAppliedFooter.push(_fnStringToCss($(nSizer).width()));},anFootSizers);_fnApplyToChildren(function(nToSize,i){nToSize.style.width=aAppliedFooter[i];},anFootToSize);$(anFootSizers).height(0);}
_fnApplyToChildren(function(nSizer,i){nSizer.innerHTML="";nSizer.style.width=aApplied[i];},anHeadSizers);if(o.nTFoot!==null)
{_fnApplyToChildren(function(nSizer,i){nSizer.innerHTML="";nSizer.style.width=aAppliedFooter[i];},anFootSizers);}
if($(o.nTable).outerWidth()<iSanityWidth)
{var iCorrection=((nScrollBody.scrollHeight>nScrollBody.offsetHeight||$(nScrollBody).css('overflow-y')=="scroll"))?iSanityWidth+o.oScroll.iBarWidth:iSanityWidth;if(ie67&&(nScrollBody.scrollHeight>nScrollBody.offsetHeight||$(nScrollBody).css('overflow-y')=="scroll"))
{o.nTable.style.width=_fnStringToCss(iCorrection-o.oScroll.iBarWidth);}
nScrollBody.style.width=_fnStringToCss(iCorrection);o.nScrollHead.style.width=_fnStringToCss(iCorrection);if(o.nTFoot!==null)
{o.nScrollFoot.style.width=_fnStringToCss(iCorrection);}
if(o.oScroll.sX==="")
{_fnLog(o,1,"The table cannot fit into the current element which will cause column"+" misalignment. The table has been drawn at its minimum possible width.");}
else if(o.oScroll.sXInner!=="")
{_fnLog(o,1,"The table cannot fit into the current element which will cause column"+" misalignment. Increase the sScrollXInner value or remove it to allow automatic"+" calculation");}}
else
{nScrollBody.style.width=_fnStringToCss('100%');o.nScrollHead.style.width=_fnStringToCss('100%');if(o.nTFoot!==null)
{o.nScrollFoot.style.width=_fnStringToCss('100%');}}
if(o.oScroll.sY==="")
{if(ie67)
{nScrollBody.style.height=_fnStringToCss(o.nTable.offsetHeight+o.oScroll.iBarWidth);}}
if(o.oScroll.sY!==""&&o.oScroll.bCollapse)
{nScrollBody.style.height=_fnStringToCss(o.oScroll.sY);var iExtra=(o.oScroll.sX!==""&&o.nTable.offsetWidth>nScrollBody.offsetWidth)?o.oScroll.iBarWidth:0;if(o.nTable.offsetHeight<nScrollBody.offsetHeight)
{nScrollBody.style.height=_fnStringToCss(o.nTable.offsetHeight+iExtra);}}
var iOuterWidth=$(o.nTable).outerWidth();nScrollHeadTable.style.width=_fnStringToCss(iOuterWidth);nScrollHeadInner.style.width=_fnStringToCss(iOuterWidth);var bScrolling=$(o.nTable).height()>nScrollBody.clientHeight||$(nScrollBody).css('overflow-y')=="scroll";nScrollHeadInner.style.paddingRight=bScrolling?o.oScroll.iBarWidth+"px":"0px";if(o.nTFoot!==null)
{nScrollFootTable.style.width=_fnStringToCss(iOuterWidth);nScrollFootInner.style.width=_fnStringToCss(iOuterWidth);nScrollFootInner.style.paddingRight=bScrolling?o.oScroll.iBarWidth+"px":"0px";}
$(nScrollBody).scroll();if(o.bSorted||o.bFiltered)
{nScrollBody.scrollTop=0;}}
function _fnApplyToChildren(fn,an1,an2)
{var index=0,i=0,iLen=an1.length;var nNode1,nNode2;while(i<iLen)
{nNode1=an1[i].firstChild;nNode2=an2?an2[i].firstChild:null;while(nNode1)
{if(nNode1.nodeType===1)
{if(an2)
{fn(nNode1,nNode2,index);}
else
{fn(nNode1,index);}
index++;}
nNode1=nNode1.nextSibling;nNode2=an2?nNode2.nextSibling:null;}
i++;}}
function _fnConvertToWidth(sWidth,nParent)
{if(!sWidth||sWidth===null||sWidth==='')
{return 0;}
if(!nParent)
{nParent=document.body;}
var iWidth;var nTmp=document.createElement("div");nTmp.style.width=_fnStringToCss(sWidth);nParent.appendChild(nTmp);iWidth=nTmp.offsetWidth;nParent.removeChild(nTmp);return(iWidth);}
function _fnCalculateColumnWidths(oSettings)
{var iTableWidth=oSettings.nTable.offsetWidth;var iUserInputs=0;var iTmpWidth;var iVisibleColumns=0;var iColums=oSettings.aoColumns.length;var i,iIndex,iCorrector,iWidth;var oHeaders=$('th',oSettings.nTHead);var widthAttr=oSettings.nTable.getAttribute('width');var nWrapper=oSettings.nTable.parentNode;for(i=0;i<iColums;i++)
{if(oSettings.aoColumns[i].bVisible)
{iVisibleColumns++;if(oSettings.aoColumns[i].sWidth!==null)
{iTmpWidth=_fnConvertToWidth(oSettings.aoColumns[i].sWidthOrig,nWrapper);if(iTmpWidth!==null)
{oSettings.aoColumns[i].sWidth=_fnStringToCss(iTmpWidth);}
iUserInputs++;}}}
if(iColums==oHeaders.length&&iUserInputs===0&&iVisibleColumns==iColums&&oSettings.oScroll.sX===""&&oSettings.oScroll.sY==="")
{for(i=0;i<oSettings.aoColumns.length;i++)
{iTmpWidth=$(oHeaders[i]).width();if(iTmpWidth!==null)
{oSettings.aoColumns[i].sWidth=_fnStringToCss(iTmpWidth);}}}
else
{var
nCalcTmp=oSettings.nTable.cloneNode(false),nTheadClone=oSettings.nTHead.cloneNode(true),nBody=document.createElement('tbody'),nTr=document.createElement('tr'),nDivSizing;nCalcTmp.removeAttribute("id");nCalcTmp.appendChild(nTheadClone);if(oSettings.nTFoot!==null)
{nCalcTmp.appendChild(oSettings.nTFoot.cloneNode(true));_fnApplyToChildren(function(n){n.style.width="";},nCalcTmp.getElementsByTagName('tr'));}
nCalcTmp.appendChild(nBody);nBody.appendChild(nTr);var jqColSizing=$('thead th',nCalcTmp);if(jqColSizing.length===0)
{jqColSizing=$('tbody tr:eq(0)>td',nCalcTmp);}
var nThs=_fnGetUniqueThs(oSettings,nTheadClone);iCorrector=0;for(i=0;i<iColums;i++)
{var oColumn=oSettings.aoColumns[i];if(oColumn.bVisible&&oColumn.sWidthOrig!==null&&oColumn.sWidthOrig!=="")
{nThs[i-iCorrector].style.width=_fnStringToCss(oColumn.sWidthOrig);}
else if(oColumn.bVisible)
{nThs[i-iCorrector].style.width="";}
else
{iCorrector++;}}
for(i=0;i<iColums;i++)
{if(oSettings.aoColumns[i].bVisible)
{var nTd=_fnGetWidestNode(oSettings,i);if(nTd!==null)
{nTd=nTd.cloneNode(true);if(oSettings.aoColumns[i].sContentPadding!=="")
{nTd.innerHTML+=oSettings.aoColumns[i].sContentPadding;}
nTr.appendChild(nTd);}}}
nWrapper.appendChild(nCalcTmp);if(oSettings.oScroll.sX!==""&&oSettings.oScroll.sXInner!=="")
{nCalcTmp.style.width=_fnStringToCss(oSettings.oScroll.sXInner);}
else if(oSettings.oScroll.sX!=="")
{nCalcTmp.style.width="";if($(nCalcTmp).width()<nWrapper.offsetWidth)
{nCalcTmp.style.width=_fnStringToCss(nWrapper.offsetWidth);}}
else if(oSettings.oScroll.sY!=="")
{nCalcTmp.style.width=_fnStringToCss(nWrapper.offsetWidth);}
else if(widthAttr)
{nCalcTmp.style.width=_fnStringToCss(widthAttr);}
nCalcTmp.style.visibility="hidden";_fnScrollingWidthAdjust(oSettings,nCalcTmp);var oNodes=$("tbody tr:eq(0)",nCalcTmp).children();if(oNodes.length===0)
{oNodes=_fnGetUniqueThs(oSettings,$('thead',nCalcTmp)[0]);}
if(oSettings.oScroll.sX!=="")
{var iTotal=0;iCorrector=0;for(i=0;i<oSettings.aoColumns.length;i++)
{if(oSettings.aoColumns[i].bVisible)
{if(oSettings.aoColumns[i].sWidthOrig===null)
{iTotal+=$(oNodes[iCorrector]).outerWidth();}
else
{iTotal+=parseInt(oSettings.aoColumns[i].sWidth.replace('px',''),10)+
($(oNodes[iCorrector]).outerWidth()-$(oNodes[iCorrector]).width());}
iCorrector++;}}
nCalcTmp.style.width=_fnStringToCss(iTotal);oSettings.nTable.style.width=_fnStringToCss(iTotal);}
iCorrector=0;for(i=0;i<oSettings.aoColumns.length;i++)
{if(oSettings.aoColumns[i].bVisible)
{iWidth=$(oNodes[iCorrector]).width();if(iWidth!==null&&iWidth>0)
{oSettings.aoColumns[i].sWidth=_fnStringToCss(iWidth);}
iCorrector++;}}
var cssWidth=$(nCalcTmp).css('width');oSettings.nTable.style.width=(cssWidth.indexOf('%')!==-1)?cssWidth:_fnStringToCss($(nCalcTmp).outerWidth());nCalcTmp.parentNode.removeChild(nCalcTmp);}
if(widthAttr)
{oSettings.nTable.style.width=_fnStringToCss(widthAttr);}}
function _fnScrollingWidthAdjust(oSettings,n)
{if(oSettings.oScroll.sX===""&&oSettings.oScroll.sY!=="")
{var iOrigWidth=$(n).width();n.style.width=_fnStringToCss($(n).outerWidth()-oSettings.oScroll.iBarWidth);}
else if(oSettings.oScroll.sX!=="")
{n.style.width=_fnStringToCss($(n).outerWidth());}}
function _fnGetWidestNode(oSettings,iCol)
{var iMaxIndex=_fnGetMaxLenString(oSettings,iCol);if(iMaxIndex<0)
{return null;}
if(oSettings.aoData[iMaxIndex].nTr===null)
{var n=document.createElement('td');n.innerHTML=_fnGetCellData(oSettings,iMaxIndex,iCol,'');return n;}
return _fnGetTdNodes(oSettings,iMaxIndex)[iCol];}
function _fnGetMaxLenString(oSettings,iCol)
{var iMax=-1;var iMaxIndex=-1;for(var i=0;i<oSettings.aoData.length;i++)
{var s=_fnGetCellData(oSettings,i,iCol,'display')+"";s=s.replace(/<.*?>/g,"");if(s.length>iMax)
{iMax=s.length;iMaxIndex=i;}}
return iMaxIndex;}
function _fnStringToCss(s)
{if(s===null)
{return"0px";}
if(typeof s=='number')
{if(s<0)
{return"0px";}
return s+"px";}
var c=s.charCodeAt(s.length-1);if(c<0x30||c>0x39)
{return s;}
return s+"px";}
function _fnScrollBarWidth()
{var inner=document.createElement('p');var style=inner.style;style.width="100%";style.height="200px";style.padding="0px";var outer=document.createElement('div');style=outer.style;style.position="absolute";style.top="0px";style.left="0px";style.visibility="hidden";style.width="200px";style.height="150px";style.padding="0px";style.overflow="hidden";outer.appendChild(inner);document.body.appendChild(outer);var w1=inner.offsetWidth;outer.style.overflow='scroll';var w2=inner.offsetWidth;if(w1==w2)
{w2=outer.clientWidth;}
document.body.removeChild(outer);return(w1-w2);}
function _fnSort(oSettings,bApplyClasses)
{var
i,iLen,j,jLen,k,kLen,sDataType,nTh,aaSort=[],aiOrig=[],oSort=DataTable.ext.oSort,aoData=oSettings.aoData,aoColumns=oSettings.aoColumns,oAria=oSettings.oLanguage.oAria;if(!oSettings.oFeatures.bServerSide&&(oSettings.aaSorting.length!==0||oSettings.aaSortingFixed!==null))
{aaSort=(oSettings.aaSortingFixed!==null)?oSettings.aaSortingFixed.concat(oSettings.aaSorting):oSettings.aaSorting.slice();for(i=0;i<aaSort.length;i++)
{var iColumn=aaSort[i][0];var iVisColumn=_fnColumnIndexToVisible(oSettings,iColumn);sDataType=oSettings.aoColumns[iColumn].sSortDataType;if(DataTable.ext.afnSortData[sDataType])
{var aData=DataTable.ext.afnSortData[sDataType].call(oSettings.oInstance,oSettings,iColumn,iVisColumn);if(aData.length===aoData.length)
{for(j=0,jLen=aoData.length;j<jLen;j++)
{_fnSetCellData(oSettings,j,iColumn,aData[j]);}}
else
{_fnLog(oSettings,0,"Returned data sort array (col "+iColumn+") is the wrong length");}}}
for(i=0,iLen=oSettings.aiDisplayMaster.length;i<iLen;i++)
{aiOrig[oSettings.aiDisplayMaster[i]]=i;}
var iSortLen=aaSort.length;var fnSortFormat,aDataSort;for(i=0,iLen=aoData.length;i<iLen;i++)
{for(j=0;j<iSortLen;j++)
{aDataSort=aoColumns[aaSort[j][0]].aDataSort;for(k=0,kLen=aDataSort.length;k<kLen;k++)
{sDataType=aoColumns[aDataSort[k]].sType;fnSortFormat=oSort[(sDataType?sDataType:'string')+"-pre"];aoData[i]._aSortData[aDataSort[k]]=fnSortFormat?fnSortFormat(_fnGetCellData(oSettings,i,aDataSort[k],'sort')):_fnGetCellData(oSettings,i,aDataSort[k],'sort');}}}
oSettings.aiDisplayMaster.sort(function(a,b){var k,l,lLen,iTest,aDataSort,sDataType;for(k=0;k<iSortLen;k++)
{aDataSort=aoColumns[aaSort[k][0]].aDataSort;for(l=0,lLen=aDataSort.length;l<lLen;l++)
{sDataType=aoColumns[aDataSort[l]].sType;iTest=oSort[(sDataType?sDataType:'string')+"-"+aaSort[k][1]](aoData[a]._aSortData[aDataSort[l]],aoData[b]._aSortData[aDataSort[l]]);if(iTest!==0)
{return iTest;}}}
return oSort['numeric-asc'](aiOrig[a],aiOrig[b]);});}
if((bApplyClasses===undefined||bApplyClasses)&&!oSettings.oFeatures.bDeferRender)
{_fnSortingClasses(oSettings);}
for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{var sTitle=aoColumns[i].sTitle.replace(/<.*?>/g,"");nTh=aoColumns[i].nTh;nTh.removeAttribute('aria-sort');nTh.removeAttribute('aria-label');if(aoColumns[i].bSortable)
{if(aaSort.length>0&&aaSort[0][0]==i)
{nTh.setAttribute('aria-sort',aaSort[0][1]=="asc"?"ascending":"descending");var nextSort=(aoColumns[i].asSorting[aaSort[0][2]+1])?aoColumns[i].asSorting[aaSort[0][2]+1]:aoColumns[i].asSorting[0];nTh.setAttribute('aria-label',sTitle+
(nextSort=="asc"?oAria.sSortAscending:oAria.sSortDescending));}
else
{nTh.setAttribute('aria-label',sTitle+
(aoColumns[i].asSorting[0]=="asc"?oAria.sSortAscending:oAria.sSortDescending));}}
else
{nTh.setAttribute('aria-label',sTitle);}}
oSettings.bSorted=true;$(oSettings.oInstance).trigger('sort',oSettings);if(oSettings.oFeatures.bFilter)
{_fnFilterComplete(oSettings,oSettings.oPreviousSearch,1);}
else
{oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();oSettings._iDisplayStart=0;_fnCalculateEnd(oSettings);_fnDraw(oSettings);}}
function _fnSortAttachListener(oSettings,nNode,iDataIndex,fnCallback)
{_fnBindAction(nNode,{},function(e){if(oSettings.aoColumns[iDataIndex].bSortable===false)
{return;}
var fnInnerSorting=function(){var iColumn,iNextSort;if(e.shiftKey)
{var bFound=false;for(var i=0;i<oSettings.aaSorting.length;i++)
{if(oSettings.aaSorting[i][0]==iDataIndex)
{bFound=true;iColumn=oSettings.aaSorting[i][0];iNextSort=oSettings.aaSorting[i][2]+1;if(!oSettings.aoColumns[iColumn].asSorting[iNextSort])
{oSettings.aaSorting.splice(i,1);}
else
{oSettings.aaSorting[i][1]=oSettings.aoColumns[iColumn].asSorting[iNextSort];oSettings.aaSorting[i][2]=iNextSort;}
break;}}
if(bFound===false)
{oSettings.aaSorting.push([iDataIndex,oSettings.aoColumns[iDataIndex].asSorting[0],0]);}}
else
{if(oSettings.aaSorting.length==1&&oSettings.aaSorting[0][0]==iDataIndex)
{iColumn=oSettings.aaSorting[0][0];iNextSort=oSettings.aaSorting[0][2]+1;if(!oSettings.aoColumns[iColumn].asSorting[iNextSort])
{iNextSort=0;}
oSettings.aaSorting[0][1]=oSettings.aoColumns[iColumn].asSorting[iNextSort];oSettings.aaSorting[0][2]=iNextSort;}
else
{oSettings.aaSorting.splice(0,oSettings.aaSorting.length);oSettings.aaSorting.push([iDataIndex,oSettings.aoColumns[iDataIndex].asSorting[0],0]);}}
_fnSort(oSettings);};if(!oSettings.oFeatures.bProcessing)
{fnInnerSorting();}
else
{_fnProcessingDisplay(oSettings,true);setTimeout(function(){fnInnerSorting();if(!oSettings.oFeatures.bServerSide)
{_fnProcessingDisplay(oSettings,false);}},0);}
if(typeof fnCallback=='function')
{fnCallback(oSettings);}});}
function _fnSortingClasses(oSettings)
{var i,iLen,j,jLen,iFound;var aaSort,sClass;var iColumns=oSettings.aoColumns.length;var oClasses=oSettings.oClasses;for(i=0;i<iColumns;i++)
{if(oSettings.aoColumns[i].bSortable)
{$(oSettings.aoColumns[i].nTh).removeClass(oClasses.sSortAsc+" "+oClasses.sSortDesc+" "+oSettings.aoColumns[i].sSortingClass);}}
if(oSettings.aaSortingFixed!==null)
{aaSort=oSettings.aaSortingFixed.concat(oSettings.aaSorting);}
else
{aaSort=oSettings.aaSorting.slice();}
for(i=0;i<oSettings.aoColumns.length;i++)
{if(oSettings.aoColumns[i].bSortable)
{sClass=oSettings.aoColumns[i].sSortingClass;iFound=-1;for(j=0;j<aaSort.length;j++)
{if(aaSort[j][0]==i)
{sClass=(aaSort[j][1]=="asc")?oClasses.sSortAsc:oClasses.sSortDesc;iFound=j;break;}}
$(oSettings.aoColumns[i].nTh).addClass(sClass);if(oSettings.bJUI)
{var jqSpan=$("span."+oClasses.sSortIcon,oSettings.aoColumns[i].nTh);jqSpan.removeClass(oClasses.sSortJUIAsc+" "+oClasses.sSortJUIDesc+" "+
oClasses.sSortJUI+" "+oClasses.sSortJUIAscAllowed+" "+oClasses.sSortJUIDescAllowed);var sSpanClass;if(iFound==-1)
{sSpanClass=oSettings.aoColumns[i].sSortingClassJUI;}
else if(aaSort[iFound][1]=="asc")
{sSpanClass=oClasses.sSortJUIAsc;}
else
{sSpanClass=oClasses.sSortJUIDesc;}
jqSpan.addClass(sSpanClass);}}
else
{$(oSettings.aoColumns[i].nTh).addClass(oSettings.aoColumns[i].sSortingClass);}}
sClass=oClasses.sSortColumn;if(oSettings.oFeatures.bSort&&oSettings.oFeatures.bSortClasses)
{var nTds=_fnGetTdNodes(oSettings);var iClass,iTargetCol;var asClasses=[];for(i=0;i<iColumns;i++)
{asClasses.push("");}
for(i=0,iClass=1;i<aaSort.length;i++)
{iTargetCol=parseInt(aaSort[i][0],10);asClasses[iTargetCol]=sClass+iClass;if(iClass<3)
{iClass++;}}
var reClass=new RegExp(sClass+"[123]");var sTmpClass,sCurrentClass,sNewClass;for(i=0,iLen=nTds.length;i<iLen;i++)
{iTargetCol=i%iColumns;sCurrentClass=nTds[i].className;sNewClass=asClasses[iTargetCol];sTmpClass=sCurrentClass.replace(reClass,sNewClass);if(sTmpClass!=sCurrentClass)
{nTds[i].className=$.trim(sTmpClass);}
else if(sNewClass.length>0&&sCurrentClass.indexOf(sNewClass)==-1)
{nTds[i].className=sCurrentClass+" "+sNewClass;}}}}
function _fnSaveState(oSettings)
{if(!oSettings.oFeatures.bStateSave||oSettings.bDestroying)
{return;}
var i,iLen,bInfinite=oSettings.oScroll.bInfinite;var oState={"iCreate":new Date().getTime(),"iStart":(bInfinite?0:oSettings._iDisplayStart),"iEnd":(bInfinite?oSettings._iDisplayLength:oSettings._iDisplayEnd),"iLength":oSettings._iDisplayLength,"aaSorting":$.extend(true,[],oSettings.aaSorting),"oSearch":$.extend(true,{},oSettings.oPreviousSearch),"aoSearchCols":$.extend(true,[],oSettings.aoPreSearchCols),"abVisCols":[]};for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{oState.abVisCols.push(oSettings.aoColumns[i].bVisible);}
_fnCallbackFire(oSettings,"aoStateSaveParams",'stateSaveParams',[oSettings,oState]);oSettings.fnStateSave.call(oSettings.oInstance,oSettings,oState);}
function _fnLoadState(oSettings,oInit)
{if(!oSettings.oFeatures.bStateSave)
{return;}
var oData=oSettings.fnStateLoad.call(oSettings.oInstance,oSettings);if(!oData)
{return;}
var abStateLoad=_fnCallbackFire(oSettings,'aoStateLoadParams','stateLoadParams',[oSettings,oData]);if($.inArray(false,abStateLoad)!==-1)
{return;}
oSettings.oLoadedState=$.extend(true,{},oData);oSettings._iDisplayStart=oData.iStart;oSettings.iInitDisplayStart=oData.iStart;oSettings._iDisplayEnd=oData.iEnd;oSettings._iDisplayLength=oData.iLength;oSettings.aaSorting=oData.aaSorting.slice();oSettings.saved_aaSorting=oData.aaSorting.slice();$.extend(oSettings.oPreviousSearch,oData.oSearch);$.extend(true,oSettings.aoPreSearchCols,oData.aoSearchCols);oInit.saved_aoColumns=[];for(var i=0;i<oData.abVisCols.length;i++)
{oInit.saved_aoColumns[i]={};oInit.saved_aoColumns[i].bVisible=oData.abVisCols[i];}
_fnCallbackFire(oSettings,'aoStateLoaded','stateLoaded',[oSettings,oData]);}
function _fnCreateCookie(sName,sValue,iSecs,sBaseName,fnCallback)
{var date=new Date();date.setTime(date.getTime()+(iSecs*1000));var aParts=window.location.pathname.split('/');var sNameFile=sName+'_'+aParts.pop().replace(/[\/:]/g,"").toLowerCase();var sFullCookie,oData;if(fnCallback!==null)
{oData=(typeof $.parseJSON==='function')?$.parseJSON(sValue):eval('('+sValue+')');sFullCookie=fnCallback(sNameFile,oData,date.toGMTString(),aParts.join('/')+"/");}
else
{sFullCookie=sNameFile+"="+encodeURIComponent(sValue)+"; expires="+date.toGMTString()+"; path="+aParts.join('/')+"/";}
var
aCookies=document.cookie.split(';'),iNewCookieLen=sFullCookie.split(';')[0].length,aOldCookies=[];if(iNewCookieLen+document.cookie.length+10>4096)
{for(var i=0,iLen=aCookies.length;i<iLen;i++)
{if(aCookies[i].indexOf(sBaseName)!=-1)
{var aSplitCookie=aCookies[i].split('=');try{oData=eval('('+decodeURIComponent(aSplitCookie[1])+')');if(oData&&oData.iCreate)
{aOldCookies.push({"name":aSplitCookie[0],"time":oData.iCreate});}}
catch(e){}}}
aOldCookies.sort(function(a,b){return b.time-a.time;});while(iNewCookieLen+document.cookie.length+10>4096){if(aOldCookies.length===0){return;}
var old=aOldCookies.pop();document.cookie=old.name+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path="+
aParts.join('/')+"/";}}
document.cookie=sFullCookie;}
function _fnReadCookie(sName)
{var
aParts=window.location.pathname.split('/'),sNameEQ=sName+'_'+aParts[aParts.length-1].replace(/[\/:]/g,"").toLowerCase()+'=',sCookieContents=document.cookie.split(';');for(var i=0;i<sCookieContents.length;i++)
{var c=sCookieContents[i];while(c.charAt(0)==' ')
{c=c.substring(1,c.length);}
if(c.indexOf(sNameEQ)===0)
{return decodeURIComponent(c.substring(sNameEQ.length,c.length));}}
return null;}
function _fnSettingsFromNode(nTable)
{for(var i=0;i<DataTable.settings.length;i++)
{if(DataTable.settings[i].nTable===nTable)
{return DataTable.settings[i];}}
return null;}
function _fnGetTrNodes(oSettings)
{var aNodes=[];var aoData=oSettings.aoData;for(var i=0,iLen=aoData.length;i<iLen;i++)
{if(aoData[i].nTr!==null)
{aNodes.push(aoData[i].nTr);}}
return aNodes;}
function _fnGetTdNodes(oSettings,iIndividualRow)
{var anReturn=[];var iCorrector;var anTds,nTd;var iRow,iRows=oSettings.aoData.length,iColumn,iColumns,oData,sNodeName,iStart=0,iEnd=iRows;if(iIndividualRow!==undefined)
{iStart=iIndividualRow;iEnd=iIndividualRow+1;}
for(iRow=iStart;iRow<iEnd;iRow++)
{oData=oSettings.aoData[iRow];if(oData.nTr!==null)
{anTds=[];nTd=oData.nTr.firstChild;while(nTd)
{sNodeName=nTd.nodeName.toLowerCase();if(sNodeName=='td'||sNodeName=='th')
{anTds.push(nTd);}
nTd=nTd.nextSibling;}
iCorrector=0;for(iColumn=0,iColumns=oSettings.aoColumns.length;iColumn<iColumns;iColumn++)
{if(oSettings.aoColumns[iColumn].bVisible)
{anReturn.push(anTds[iColumn-iCorrector]);}
else
{anReturn.push(oData._anHidden[iColumn]);iCorrector++;}}}}
return anReturn;}
function _fnLog(oSettings,iLevel,sMesg)
{var sAlert=(oSettings===null)?"DataTables warning: "+sMesg:"DataTables warning (table id = '"+oSettings.sTableId+"'): "+sMesg;if(iLevel===0)
{if(DataTable.ext.sErrMode=='alert')
{alert(sAlert);}
else
{throw new Error(sAlert);}
return;}
else if(window.console&&console.log)
{console.log(sAlert);}}
function _fnMap(oRet,oSrc,sName,sMappedName)
{if(sMappedName===undefined)
{sMappedName=sName;}
if(oSrc[sName]!==undefined)
{oRet[sMappedName]=oSrc[sName];}}
function _fnExtend(oOut,oExtender)
{var val;for(var prop in oExtender)
{if(oExtender.hasOwnProperty(prop))
{val=oExtender[prop];if(typeof oInit[prop]==='object'&&val!==null&&$.isArray(val)===false)
{$.extend(true,oOut[prop],val);}
else
{oOut[prop]=val;}}}
return oOut;}
function _fnBindAction(n,oData,fn)
{$(n).bind('click.DT',oData,function(e){n.blur();fn(e);}).bind('keypress.DT',oData,function(e){if(e.which===13){fn(e);}}).bind('selectstart.DT',function(){return false;});}
function _fnCallbackReg(oSettings,sStore,fn,sName)
{if(fn)
{oSettings[sStore].push({"fn":fn,"sName":sName});}}
function _fnCallbackFire(oSettings,sStore,sTrigger,aArgs)
{var aoStore=oSettings[sStore];var aRet=[];for(var i=aoStore.length-1;i>=0;i--)
{aRet.push(aoStore[i].fn.apply(oSettings.oInstance,aArgs));}
if(sTrigger!==null)
{$(oSettings.oInstance).trigger(sTrigger,aArgs);}
return aRet;}
var _fnJsonString=(window.JSON)?JSON.stringify:function(o)
{var sType=typeof o;if(sType!=="object"||o===null)
{if(sType==="string")
{o='"'+o+'"';}
return o+"";}
var
sProp,mValue,json=[],bArr=$.isArray(o);for(sProp in o)
{mValue=o[sProp];sType=typeof mValue;if(sType==="string")
{mValue='"'+mValue+'"';}
else if(sType==="object"&&mValue!==null)
{mValue=_fnJsonString(mValue);}
json.push((bArr?"":'"'+sProp+'":')+mValue);}
return(bArr?"[":"{")+json+(bArr?"]":"}");};function _fnBrowserDetect(oSettings)
{var n=$('<div style="position:absolute; top:0; left:0; height:1px; width:1px; overflow:hidden">'+'<div style="position:absolute; top:1px; left:1px; width:100px; overflow:scroll;">'+'<div id="DT_BrowserTest" style="width:100%; height:10px;"></div>'+'</div>'+'</div>')[0];document.body.appendChild(n);oSettings.oBrowser.bScrollOversize=$('#DT_BrowserTest',n)[0].offsetWidth===100?true:false;document.body.removeChild(n);}
this.$=function(sSelector,oOpts)
{var i,iLen,a=[],tr;var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);var aoData=oSettings.aoData;var aiDisplay=oSettings.aiDisplay;var aiDisplayMaster=oSettings.aiDisplayMaster;if(!oOpts)
{oOpts={};}
oOpts=$.extend({},{"filter":"none","order":"current","page":"all"},oOpts);if(oOpts.page=='current')
{for(i=oSettings._iDisplayStart,iLen=oSettings.fnDisplayEnd();i<iLen;i++)
{tr=aoData[aiDisplay[i]].nTr;if(tr)
{a.push(tr);}}}
else if(oOpts.order=="current"&&oOpts.filter=="none")
{for(i=0,iLen=aiDisplayMaster.length;i<iLen;i++)
{tr=aoData[aiDisplayMaster[i]].nTr;if(tr)
{a.push(tr);}}}
else if(oOpts.order=="current"&&oOpts.filter=="applied")
{for(i=0,iLen=aiDisplay.length;i<iLen;i++)
{tr=aoData[aiDisplay[i]].nTr;if(tr)
{a.push(tr);}}}
else if(oOpts.order=="original"&&oOpts.filter=="none")
{for(i=0,iLen=aoData.length;i<iLen;i++)
{tr=aoData[i].nTr;if(tr)
{a.push(tr);}}}
else if(oOpts.order=="original"&&oOpts.filter=="applied")
{for(i=0,iLen=aoData.length;i<iLen;i++)
{tr=aoData[i].nTr;if($.inArray(i,aiDisplay)!==-1&&tr)
{a.push(tr);}}}
else
{_fnLog(oSettings,1,"Unknown selection options");}
var jqA=$(a);var jqTRs=jqA.filter(sSelector);var jqDescendants=jqA.find(sSelector);return $([].concat($.makeArray(jqTRs),$.makeArray(jqDescendants)));};this._=function(sSelector,oOpts)
{var aOut=[];var i,iLen,iIndex;var aTrs=this.$(sSelector,oOpts);for(i=0,iLen=aTrs.length;i<iLen;i++)
{aOut.push(this.fnGetData(aTrs[i]));}
return aOut;};this.fnAddData=function(mData,bRedraw)
{if(mData.length===0)
{return[];}
var aiReturn=[];var iTest;var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);if(typeof mData[0]==="object"&&mData[0]!==null)
{for(var i=0;i<mData.length;i++)
{iTest=_fnAddData(oSettings,mData[i]);if(iTest==-1)
{return aiReturn;}
aiReturn.push(iTest);}}
else
{iTest=_fnAddData(oSettings,mData);if(iTest==-1)
{return aiReturn;}
aiReturn.push(iTest);}
oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();if(bRedraw===undefined||bRedraw)
{_fnReDraw(oSettings);}
return aiReturn;};this.fnAdjustColumnSizing=function(bRedraw)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);_fnAdjustColumnSizing(oSettings);if(bRedraw===undefined||bRedraw)
{this.fnDraw(false);}
else if(oSettings.oScroll.sX!==""||oSettings.oScroll.sY!=="")
{this.oApi._fnScrollDraw(oSettings);}};this.fnClearTable=function(bRedraw)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);_fnClearTable(oSettings);if(bRedraw===undefined||bRedraw)
{_fnDraw(oSettings);}};this.fnClose=function(nTr)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);for(var i=0;i<oSettings.aoOpenRows.length;i++)
{if(oSettings.aoOpenRows[i].nParent==nTr)
{var nTrParent=oSettings.aoOpenRows[i].nTr.parentNode;if(nTrParent)
{nTrParent.removeChild(oSettings.aoOpenRows[i].nTr);}
oSettings.aoOpenRows.splice(i,1);return 0;}}
return 1;};this.fnDeleteRow=function(mTarget,fnCallBack,bRedraw)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);var i,iLen,iAODataIndex;iAODataIndex=(typeof mTarget==='object')?_fnNodeToDataIndex(oSettings,mTarget):mTarget;var oData=oSettings.aoData.splice(iAODataIndex,1);for(i=0,iLen=oSettings.aoData.length;i<iLen;i++)
{if(oSettings.aoData[i].nTr!==null)
{oSettings.aoData[i].nTr._DT_RowIndex=i;}}
var iDisplayIndex=$.inArray(iAODataIndex,oSettings.aiDisplay);oSettings.asDataSearch.splice(iDisplayIndex,1);_fnDeleteIndex(oSettings.aiDisplayMaster,iAODataIndex);_fnDeleteIndex(oSettings.aiDisplay,iAODataIndex);if(typeof fnCallBack==="function")
{fnCallBack.call(this,oSettings,oData);}
if(oSettings._iDisplayStart>=oSettings.fnRecordsDisplay())
{oSettings._iDisplayStart-=oSettings._iDisplayLength;if(oSettings._iDisplayStart<0)
{oSettings._iDisplayStart=0;}}
if(bRedraw===undefined||bRedraw)
{_fnCalculateEnd(oSettings);_fnDraw(oSettings);}
return oData;};this.fnDestroy=function(bRemove)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);var nOrig=oSettings.nTableWrapper.parentNode;var nBody=oSettings.nTBody;var i,iLen;bRemove=(bRemove===undefined)?false:bRemove;oSettings.bDestroying=true;_fnCallbackFire(oSettings,"aoDestroyCallback","destroy",[oSettings]);if(!bRemove)
{for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{if(oSettings.aoColumns[i].bVisible===false)
{this.fnSetColumnVis(i,true);}}}
$(oSettings.nTableWrapper).find('*').andSelf().unbind('.DT');$('tbody>tr>td.'+oSettings.oClasses.sRowEmpty,oSettings.nTable).parent().remove();if(oSettings.nTable!=oSettings.nTHead.parentNode)
{$(oSettings.nTable).children('thead').remove();oSettings.nTable.appendChild(oSettings.nTHead);}
if(oSettings.nTFoot&&oSettings.nTable!=oSettings.nTFoot.parentNode)
{$(oSettings.nTable).children('tfoot').remove();oSettings.nTable.appendChild(oSettings.nTFoot);}
oSettings.nTable.parentNode.removeChild(oSettings.nTable);$(oSettings.nTableWrapper).remove();oSettings.aaSorting=[];oSettings.aaSortingFixed=[];_fnSortingClasses(oSettings);$(_fnGetTrNodes(oSettings)).removeClass(oSettings.asStripeClasses.join(' '));$('th, td',oSettings.nTHead).removeClass([oSettings.oClasses.sSortable,oSettings.oClasses.sSortableAsc,oSettings.oClasses.sSortableDesc,oSettings.oClasses.sSortableNone].join(' '));if(oSettings.bJUI)
{$('th span.'+oSettings.oClasses.sSortIcon
+', td span.'+oSettings.oClasses.sSortIcon,oSettings.nTHead).remove();$('th, td',oSettings.nTHead).each(function(){var jqWrapper=$('div.'+oSettings.oClasses.sSortJUIWrapper,this);var kids=jqWrapper.contents();$(this).append(kids);jqWrapper.remove();});}
if(!bRemove&&oSettings.nTableReinsertBefore)
{nOrig.insertBefore(oSettings.nTable,oSettings.nTableReinsertBefore);}
else if(!bRemove)
{nOrig.appendChild(oSettings.nTable);}
for(i=0,iLen=oSettings.aoData.length;i<iLen;i++)
{if(oSettings.aoData[i].nTr!==null)
{nBody.appendChild(oSettings.aoData[i].nTr);}}
if(oSettings.oFeatures.bAutoWidth===true)
{oSettings.nTable.style.width=_fnStringToCss(oSettings.sDestroyWidth);}
iLen=oSettings.asDestroyStripes.length;if(iLen)
{var anRows=$(nBody).children('tr');for(i=0;i<iLen;i++)
{anRows.filter(':nth-child('+iLen+'n + '+i+')').addClass(oSettings.asDestroyStripes[i]);}}
for(i=0,iLen=DataTable.settings.length;i<iLen;i++)
{if(DataTable.settings[i]==oSettings)
{DataTable.settings.splice(i,1);}}
oSettings=null;oInit=null;};this.fnDraw=function(bComplete)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);if(bComplete===false)
{_fnCalculateEnd(oSettings);_fnDraw(oSettings);}
else
{_fnReDraw(oSettings);}};this.fnFilter=function(sInput,iColumn,bRegex,bSmart,bShowGlobal,bCaseInsensitive)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);if(!oSettings.oFeatures.bFilter)
{return;}
if(bRegex===undefined||bRegex===null)
{bRegex=false;}
if(bSmart===undefined||bSmart===null)
{bSmart=true;}
if(bShowGlobal===undefined||bShowGlobal===null)
{bShowGlobal=true;}
if(bCaseInsensitive===undefined||bCaseInsensitive===null)
{bCaseInsensitive=true;}
if(iColumn===undefined||iColumn===null)
{_fnFilterComplete(oSettings,{"sSearch":sInput+"","bRegex":bRegex,"bSmart":bSmart,"bCaseInsensitive":bCaseInsensitive},1);if(bShowGlobal&&oSettings.aanFeatures.f)
{var n=oSettings.aanFeatures.f;for(var i=0,iLen=n.length;i<iLen;i++)
{try{if(n[i]._DT_Input!=document.activeElement)
{$(n[i]._DT_Input).val(sInput);}}
catch(e){$(n[i]._DT_Input).val(sInput);}}}}
else
{$.extend(oSettings.aoPreSearchCols[iColumn],{"sSearch":sInput+"","bRegex":bRegex,"bSmart":bSmart,"bCaseInsensitive":bCaseInsensitive});_fnFilterComplete(oSettings,oSettings.oPreviousSearch,1);}};this.fnGetData=function(mRow,iCol)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);if(mRow!==undefined)
{var iRow=mRow;if(typeof mRow==='object')
{var sNode=mRow.nodeName.toLowerCase();if(sNode==="tr")
{iRow=_fnNodeToDataIndex(oSettings,mRow);}
else if(sNode==="td")
{iRow=_fnNodeToDataIndex(oSettings,mRow.parentNode);iCol=_fnNodeToColumnIndex(oSettings,iRow,mRow);}}
if(iCol!==undefined)
{return _fnGetCellData(oSettings,iRow,iCol,'');}
return(oSettings.aoData[iRow]!==undefined)?oSettings.aoData[iRow]._aData:null;}
return _fnGetDataMaster(oSettings);};this.fnGetNodes=function(iRow)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);if(iRow!==undefined){return(oSettings.aoData[iRow]!==undefined)?oSettings.aoData[iRow].nTr:null;}
return _fnGetTrNodes(oSettings);};this.fnGetPosition=function(nNode)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);var sNodeName=nNode.nodeName.toUpperCase();if(sNodeName=="TR")
{return _fnNodeToDataIndex(oSettings,nNode);}
else if(sNodeName=="TD"||sNodeName=="TH")
{var iDataIndex=_fnNodeToDataIndex(oSettings,nNode.parentNode);var iColumnIndex=_fnNodeToColumnIndex(oSettings,iDataIndex,nNode);return[iDataIndex,_fnColumnIndexToVisible(oSettings,iColumnIndex),iColumnIndex];}
return null;};this.fnIsOpen=function(nTr)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);var aoOpenRows=oSettings.aoOpenRows;for(var i=0;i<oSettings.aoOpenRows.length;i++)
{if(oSettings.aoOpenRows[i].nParent==nTr)
{return true;}}
return false;};this.fnOpen=function(nTr,mHtml,sClass)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);var nTableRows=_fnGetTrNodes(oSettings);if($.inArray(nTr,nTableRows)===-1)
{return;}
this.fnClose(nTr);var nNewRow=document.createElement("tr");var nNewCell=document.createElement("td");nNewRow.appendChild(nNewCell);nNewCell.className=sClass;nNewCell.colSpan=_fnVisbleColumns(oSettings);if(typeof mHtml==="string")
{nNewCell.innerHTML=mHtml;}
else
{$(nNewCell).html(mHtml);}
var nTrs=$('tr',oSettings.nTBody);if($.inArray(nTr,nTrs)!=-1)
{$(nNewRow).insertAfter(nTr);}
oSettings.aoOpenRows.push({"nTr":nNewRow,"nParent":nTr});return nNewRow;};this.fnPageChange=function(mAction,bRedraw)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);_fnPageChange(oSettings,mAction);_fnCalculateEnd(oSettings);if(bRedraw===undefined||bRedraw)
{_fnDraw(oSettings);}};this.fnSetColumnVis=function(iCol,bShow,bRedraw)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);var i,iLen;var aoColumns=oSettings.aoColumns;var aoData=oSettings.aoData;var nTd,bAppend,iBefore;if(aoColumns[iCol].bVisible==bShow)
{return;}
if(bShow)
{var iInsert=0;for(i=0;i<iCol;i++)
{if(aoColumns[i].bVisible)
{iInsert++;}}
bAppend=(iInsert>=_fnVisbleColumns(oSettings));if(!bAppend)
{for(i=iCol;i<aoColumns.length;i++)
{if(aoColumns[i].bVisible)
{iBefore=i;break;}}}
for(i=0,iLen=aoData.length;i<iLen;i++)
{if(aoData[i].nTr!==null)
{if(bAppend)
{aoData[i].nTr.appendChild(aoData[i]._anHidden[iCol]);}
else
{aoData[i].nTr.insertBefore(aoData[i]._anHidden[iCol],_fnGetTdNodes(oSettings,i)[iBefore]);}}}}
else
{for(i=0,iLen=aoData.length;i<iLen;i++)
{if(aoData[i].nTr!==null)
{nTd=_fnGetTdNodes(oSettings,i)[iCol];aoData[i]._anHidden[iCol]=nTd;nTd.parentNode.removeChild(nTd);}}}
aoColumns[iCol].bVisible=bShow;_fnDrawHead(oSettings,oSettings.aoHeader);if(oSettings.nTFoot)
{_fnDrawHead(oSettings,oSettings.aoFooter);}
for(i=0,iLen=oSettings.aoOpenRows.length;i<iLen;i++)
{oSettings.aoOpenRows[i].nTr.colSpan=_fnVisbleColumns(oSettings);}
if(bRedraw===undefined||bRedraw)
{_fnAdjustColumnSizing(oSettings);_fnDraw(oSettings);}
_fnSaveState(oSettings);};this.fnSettings=function()
{return _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);};this.fnSort=function(aaSort)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);oSettings.aaSorting=aaSort;_fnSort(oSettings);};this.fnSortListener=function(nNode,iColumn,fnCallback)
{_fnSortAttachListener(_fnSettingsFromNode(this[DataTable.ext.iApiIndex]),nNode,iColumn,fnCallback);};this.fnUpdate=function(mData,mRow,iColumn,bRedraw,bAction)
{var oSettings=_fnSettingsFromNode(this[DataTable.ext.iApiIndex]);var i,iLen,sDisplay;var iRow=(typeof mRow==='object')?_fnNodeToDataIndex(oSettings,mRow):mRow;if($.isArray(mData)&&iColumn===undefined)
{oSettings.aoData[iRow]._aData=mData.slice();for(i=0;i<oSettings.aoColumns.length;i++)
{this.fnUpdate(_fnGetCellData(oSettings,iRow,i),iRow,i,false,false);}}
else if($.isPlainObject(mData)&&iColumn===undefined)
{oSettings.aoData[iRow]._aData=$.extend(true,{},mData);for(i=0;i<oSettings.aoColumns.length;i++)
{this.fnUpdate(_fnGetCellData(oSettings,iRow,i),iRow,i,false,false);}}
else
{_fnSetCellData(oSettings,iRow,iColumn,mData);sDisplay=_fnGetCellData(oSettings,iRow,iColumn,'display');var oCol=oSettings.aoColumns[iColumn];if(oCol.fnRender!==null)
{sDisplay=_fnRender(oSettings,iRow,iColumn);if(oCol.bUseRendered)
{_fnSetCellData(oSettings,iRow,iColumn,sDisplay);}}
if(oSettings.aoData[iRow].nTr!==null)
{_fnGetTdNodes(oSettings,iRow)[iColumn].innerHTML=sDisplay;}}
var iDisplayIndex=$.inArray(iRow,oSettings.aiDisplay);oSettings.asDataSearch[iDisplayIndex]=_fnBuildSearchRow(oSettings,_fnGetRowData(oSettings,iRow,'filter',_fnGetColumns(oSettings,'bSearchable')));if(bAction===undefined||bAction)
{_fnAdjustColumnSizing(oSettings);}
if(bRedraw===undefined||bRedraw)
{_fnReDraw(oSettings);}
return 0;};this.fnVersionCheck=DataTable.ext.fnVersionCheck;function _fnExternApiFunc(sFunc)
{return function(){var aArgs=[_fnSettingsFromNode(this[DataTable.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return DataTable.ext.oApi[sFunc].apply(this,aArgs);};}
this.oApi={"_fnExternApiFunc":_fnExternApiFunc,"_fnInitialise":_fnInitialise,"_fnInitComplete":_fnInitComplete,"_fnLanguageCompat":_fnLanguageCompat,"_fnAddColumn":_fnAddColumn,"_fnColumnOptions":_fnColumnOptions,"_fnAddData":_fnAddData,"_fnCreateTr":_fnCreateTr,"_fnGatherData":_fnGatherData,"_fnBuildHead":_fnBuildHead,"_fnDrawHead":_fnDrawHead,"_fnDraw":_fnDraw,"_fnReDraw":_fnReDraw,"_fnAjaxUpdate":_fnAjaxUpdate,"_fnAjaxParameters":_fnAjaxParameters,"_fnAjaxUpdateDraw":_fnAjaxUpdateDraw,"_fnServerParams":_fnServerParams,"_fnAddOptionsHtml":_fnAddOptionsHtml,"_fnFeatureHtmlTable":_fnFeatureHtmlTable,"_fnScrollDraw":_fnScrollDraw,"_fnAdjustColumnSizing":_fnAdjustColumnSizing,"_fnFeatureHtmlFilter":_fnFeatureHtmlFilter,"_fnFilterComplete":_fnFilterComplete,"_fnFilterCustom":_fnFilterCustom,"_fnFilterColumn":_fnFilterColumn,"_fnFilter":_fnFilter,"_fnBuildSearchArray":_fnBuildSearchArray,"_fnBuildSearchRow":_fnBuildSearchRow,"_fnFilterCreateSearch":_fnFilterCreateSearch,"_fnDataToSearch":_fnDataToSearch,"_fnSort":_fnSort,"_fnSortAttachListener":_fnSortAttachListener,"_fnSortingClasses":_fnSortingClasses,"_fnFeatureHtmlPaginate":_fnFeatureHtmlPaginate,"_fnPageChange":_fnPageChange,"_fnFeatureHtmlInfo":_fnFeatureHtmlInfo,"_fnUpdateInfo":_fnUpdateInfo,"_fnFeatureHtmlLength":_fnFeatureHtmlLength,"_fnFeatureHtmlProcessing":_fnFeatureHtmlProcessing,"_fnProcessingDisplay":_fnProcessingDisplay,"_fnVisibleToColumnIndex":_fnVisibleToColumnIndex,"_fnColumnIndexToVisible":_fnColumnIndexToVisible,"_fnNodeToDataIndex":_fnNodeToDataIndex,"_fnVisbleColumns":_fnVisbleColumns,"_fnCalculateEnd":_fnCalculateEnd,"_fnConvertToWidth":_fnConvertToWidth,"_fnCalculateColumnWidths":_fnCalculateColumnWidths,"_fnScrollingWidthAdjust":_fnScrollingWidthAdjust,"_fnGetWidestNode":_fnGetWidestNode,"_fnGetMaxLenString":_fnGetMaxLenString,"_fnStringToCss":_fnStringToCss,"_fnDetectType":_fnDetectType,"_fnSettingsFromNode":_fnSettingsFromNode,"_fnGetDataMaster":_fnGetDataMaster,"_fnGetTrNodes":_fnGetTrNodes,"_fnGetTdNodes":_fnGetTdNodes,"_fnEscapeRegex":_fnEscapeRegex,"_fnDeleteIndex":_fnDeleteIndex,"_fnReOrderIndex":_fnReOrderIndex,"_fnColumnOrdering":_fnColumnOrdering,"_fnLog":_fnLog,"_fnClearTable":_fnClearTable,"_fnSaveState":_fnSaveState,"_fnLoadState":_fnLoadState,"_fnCreateCookie":_fnCreateCookie,"_fnReadCookie":_fnReadCookie,"_fnDetectHeader":_fnDetectHeader,"_fnGetUniqueThs":_fnGetUniqueThs,"_fnScrollBarWidth":_fnScrollBarWidth,"_fnApplyToChildren":_fnApplyToChildren,"_fnMap":_fnMap,"_fnGetRowData":_fnGetRowData,"_fnGetCellData":_fnGetCellData,"_fnSetCellData":_fnSetCellData,"_fnGetObjectDataFn":_fnGetObjectDataFn,"_fnSetObjectDataFn":_fnSetObjectDataFn,"_fnApplyColumnDefs":_fnApplyColumnDefs,"_fnBindAction":_fnBindAction,"_fnExtend":_fnExtend,"_fnCallbackReg":_fnCallbackReg,"_fnCallbackFire":_fnCallbackFire,"_fnJsonString":_fnJsonString,"_fnRender":_fnRender,"_fnNodeToColumnIndex":_fnNodeToColumnIndex,"_fnInfoMacros":_fnInfoMacros,"_fnBrowserDetect":_fnBrowserDetect,"_fnGetColumns":_fnGetColumns};$.extend(DataTable.ext.oApi,this.oApi);for(var sFunc in DataTable.ext.oApi)
{if(sFunc)
{this[sFunc]=_fnExternApiFunc(sFunc);}}
var _that=this;this.each(function(){var i=0,iLen,j,jLen,k,kLen;var sId=this.getAttribute('id');var bInitHandedOff=false;var bUsePassedData=false;if(this.nodeName.toLowerCase()!='table')
{_fnLog(null,0,"Attempted to initialise DataTables on a node which is not a "+"table: "+this.nodeName);return;}
for(i=0,iLen=DataTable.settings.length;i<iLen;i++)
{if(DataTable.settings[i].nTable==this)
{if(oInit===undefined||oInit.bRetrieve)
{return DataTable.settings[i].oInstance;}
else if(oInit.bDestroy)
{DataTable.settings[i].oInstance.fnDestroy();break;}
else
{_fnLog(DataTable.settings[i],0,"Cannot reinitialise DataTable.\n\n"+"To retrieve the DataTables object for this table, pass no arguments or see "+"the docs for bRetrieve and bDestroy");return;}}
if(DataTable.settings[i].sTableId==this.id)
{DataTable.settings.splice(i,1);break;}}
if(sId===null||sId==="")
{sId="DataTables_Table_"+(DataTable.ext._oExternConfig.iNextUnique++);this.id=sId;}
var oSettings=$.extend(true,{},DataTable.models.oSettings,{"nTable":this,"oApi":_that.oApi,"oInit":oInit,"sDestroyWidth":$(this).width(),"sInstance":sId,"sTableId":sId});DataTable.settings.push(oSettings);oSettings.oInstance=(_that.length===1)?_that:$(this).dataTable();if(!oInit)
{oInit={};}
if(oInit.oLanguage)
{_fnLanguageCompat(oInit.oLanguage);}
oInit=_fnExtend($.extend(true,{},DataTable.defaults),oInit);_fnMap(oSettings.oFeatures,oInit,"bPaginate");_fnMap(oSettings.oFeatures,oInit,"bLengthChange");_fnMap(oSettings.oFeatures,oInit,"bFilter");_fnMap(oSettings.oFeatures,oInit,"bSort");_fnMap(oSettings.oFeatures,oInit,"bInfo");_fnMap(oSettings.oFeatures,oInit,"bProcessing");_fnMap(oSettings.oFeatures,oInit,"bAutoWidth");_fnMap(oSettings.oFeatures,oInit,"bSortClasses");_fnMap(oSettings.oFeatures,oInit,"bServerSide");_fnMap(oSettings.oFeatures,oInit,"bDeferRender");_fnMap(oSettings.oScroll,oInit,"sScrollX","sX");_fnMap(oSettings.oScroll,oInit,"sScrollXInner","sXInner");_fnMap(oSettings.oScroll,oInit,"sScrollY","sY");_fnMap(oSettings.oScroll,oInit,"bScrollCollapse","bCollapse");_fnMap(oSettings.oScroll,oInit,"bScrollInfinite","bInfinite");_fnMap(oSettings.oScroll,oInit,"iScrollLoadGap","iLoadGap");_fnMap(oSettings.oScroll,oInit,"bScrollAutoCss","bAutoCss");_fnMap(oSettings,oInit,"asStripeClasses");_fnMap(oSettings,oInit,"asStripClasses","asStripeClasses");_fnMap(oSettings,oInit,"fnServerData");_fnMap(oSettings,oInit,"fnFormatNumber");_fnMap(oSettings,oInit,"sServerMethod");_fnMap(oSettings,oInit,"aaSorting");_fnMap(oSettings,oInit,"aaSortingFixed");_fnMap(oSettings,oInit,"aLengthMenu");_fnMap(oSettings,oInit,"sPaginationType");_fnMap(oSettings,oInit,"sAjaxSource");_fnMap(oSettings,oInit,"sAjaxDataProp");_fnMap(oSettings,oInit,"iCookieDuration");_fnMap(oSettings,oInit,"sCookiePrefix");_fnMap(oSettings,oInit,"sDom");_fnMap(oSettings,oInit,"bSortCellsTop");_fnMap(oSettings,oInit,"iTabIndex");_fnMap(oSettings,oInit,"oSearch","oPreviousSearch");_fnMap(oSettings,oInit,"aoSearchCols","aoPreSearchCols");_fnMap(oSettings,oInit,"iDisplayLength","_iDisplayLength");_fnMap(oSettings,oInit,"bJQueryUI","bJUI");_fnMap(oSettings,oInit,"fnCookieCallback");_fnMap(oSettings,oInit,"fnStateLoad");_fnMap(oSettings,oInit,"fnStateSave");_fnMap(oSettings.oLanguage,oInit,"fnInfoCallback");_fnCallbackReg(oSettings,'aoDrawCallback',oInit.fnDrawCallback,'user');_fnCallbackReg(oSettings,'aoServerParams',oInit.fnServerParams,'user');_fnCallbackReg(oSettings,'aoStateSaveParams',oInit.fnStateSaveParams,'user');_fnCallbackReg(oSettings,'aoStateLoadParams',oInit.fnStateLoadParams,'user');_fnCallbackReg(oSettings,'aoStateLoaded',oInit.fnStateLoaded,'user');_fnCallbackReg(oSettings,'aoRowCallback',oInit.fnRowCallback,'user');_fnCallbackReg(oSettings,'aoRowCreatedCallback',oInit.fnCreatedRow,'user');_fnCallbackReg(oSettings,'aoHeaderCallback',oInit.fnHeaderCallback,'user');_fnCallbackReg(oSettings,'aoFooterCallback',oInit.fnFooterCallback,'user');_fnCallbackReg(oSettings,'aoInitComplete',oInit.fnInitComplete,'user');_fnCallbackReg(oSettings,'aoPreDrawCallback',oInit.fnPreDrawCallback,'user');if(oSettings.oFeatures.bServerSide&&oSettings.oFeatures.bSort&&oSettings.oFeatures.bSortClasses)
{_fnCallbackReg(oSettings,'aoDrawCallback',_fnSortingClasses,'server_side_sort_classes');}
else if(oSettings.oFeatures.bDeferRender)
{_fnCallbackReg(oSettings,'aoDrawCallback',_fnSortingClasses,'defer_sort_classes');}
if(oInit.bJQueryUI)
{$.extend(oSettings.oClasses,DataTable.ext.oJUIClasses);if(oInit.sDom===DataTable.defaults.sDom&&DataTable.defaults.sDom==="lfrtip")
{oSettings.sDom='<"H"lfr>t<"F"ip>';}}
else
{$.extend(oSettings.oClasses,DataTable.ext.oStdClasses);}
$(this).addClass(oSettings.oClasses.sTable);if(oSettings.oScroll.sX!==""||oSettings.oScroll.sY!=="")
{oSettings.oScroll.iBarWidth=_fnScrollBarWidth();}
if(oSettings.iInitDisplayStart===undefined)
{oSettings.iInitDisplayStart=oInit.iDisplayStart;oSettings._iDisplayStart=oInit.iDisplayStart;}
if(oInit.bStateSave)
{oSettings.oFeatures.bStateSave=true;_fnLoadState(oSettings,oInit);_fnCallbackReg(oSettings,'aoDrawCallback',_fnSaveState,'state_save');}
if(oInit.iDeferLoading!==null)
{oSettings.bDeferLoading=true;var tmp=$.isArray(oInit.iDeferLoading);oSettings._iRecordsDisplay=tmp?oInit.iDeferLoading[0]:oInit.iDeferLoading;oSettings._iRecordsTotal=tmp?oInit.iDeferLoading[1]:oInit.iDeferLoading;}
if(oInit.aaData!==null)
{bUsePassedData=true;}
if(oInit.oLanguage.sUrl!=="")
{oSettings.oLanguage.sUrl=oInit.oLanguage.sUrl;$.getJSON(oSettings.oLanguage.sUrl,null,function(json){_fnLanguageCompat(json);$.extend(true,oSettings.oLanguage,oInit.oLanguage,json);_fnInitialise(oSettings);});bInitHandedOff=true;}
else
{$.extend(true,oSettings.oLanguage,oInit.oLanguage);}
if(oInit.asStripeClasses===null)
{oSettings.asStripeClasses=[oSettings.oClasses.sStripeOdd,oSettings.oClasses.sStripeEven];}
iLen=oSettings.asStripeClasses.length;oSettings.asDestroyStripes=[];if(iLen)
{var bStripeRemove=false;var anRows=$(this).children('tbody').children('tr:lt('+iLen+')');for(i=0;i<iLen;i++)
{if(anRows.hasClass(oSettings.asStripeClasses[i]))
{bStripeRemove=true;oSettings.asDestroyStripes.push(oSettings.asStripeClasses[i]);}}
if(bStripeRemove)
{anRows.removeClass(oSettings.asStripeClasses.join(' '));}}
var anThs=[];var aoColumnsInit;var nThead=this.getElementsByTagName('thead');if(nThead.length!==0)
{_fnDetectHeader(oSettings.aoHeader,nThead[0]);anThs=_fnGetUniqueThs(oSettings);}
if(oInit.aoColumns===null)
{aoColumnsInit=[];for(i=0,iLen=anThs.length;i<iLen;i++)
{aoColumnsInit.push(null);}}
else
{aoColumnsInit=oInit.aoColumns;}
for(i=0,iLen=aoColumnsInit.length;i<iLen;i++)
{if(oInit.saved_aoColumns!==undefined&&oInit.saved_aoColumns.length==iLen)
{if(aoColumnsInit[i]===null)
{aoColumnsInit[i]={};}
aoColumnsInit[i].bVisible=oInit.saved_aoColumns[i].bVisible;}
_fnAddColumn(oSettings,anThs?anThs[i]:null);}
_fnApplyColumnDefs(oSettings,oInit.aoColumnDefs,aoColumnsInit,function(iCol,oDef){_fnColumnOptions(oSettings,iCol,oDef);});for(i=0,iLen=oSettings.aaSorting.length;i<iLen;i++)
{if(oSettings.aaSorting[i][0]>=oSettings.aoColumns.length)
{oSettings.aaSorting[i][0]=0;}
var oColumn=oSettings.aoColumns[oSettings.aaSorting[i][0]];if(oSettings.aaSorting[i][2]===undefined)
{oSettings.aaSorting[i][2]=0;}
if(oInit.aaSorting===undefined&&oSettings.saved_aaSorting===undefined)
{oSettings.aaSorting[i][1]=oColumn.asSorting[0];}
for(j=0,jLen=oColumn.asSorting.length;j<jLen;j++)
{if(oSettings.aaSorting[i][1]==oColumn.asSorting[j])
{oSettings.aaSorting[i][2]=j;break;}}}
_fnSortingClasses(oSettings);_fnBrowserDetect(oSettings);var captions=$(this).children('caption').each(function(){this._captionSide=$(this).css('caption-side');});var thead=$(this).children('thead');if(thead.length===0)
{thead=[document.createElement('thead')];this.appendChild(thead[0]);}
oSettings.nTHead=thead[0];var tbody=$(this).children('tbody');if(tbody.length===0)
{tbody=[document.createElement('tbody')];this.appendChild(tbody[0]);}
oSettings.nTBody=tbody[0];oSettings.nTBody.setAttribute("role","alert");oSettings.nTBody.setAttribute("aria-live","polite");oSettings.nTBody.setAttribute("aria-relevant","all");var tfoot=$(this).children('tfoot');if(tfoot.length===0&&captions.length>0&&(oSettings.oScroll.sX!==""||oSettings.oScroll.sY!==""))
{tfoot=[document.createElement('tfoot')];this.appendChild(tfoot[0]);}
if(tfoot.length>0)
{oSettings.nTFoot=tfoot[0];_fnDetectHeader(oSettings.aoFooter,oSettings.nTFoot);}
if(bUsePassedData)
{for(i=0;i<oInit.aaData.length;i++)
{_fnAddData(oSettings,oInit.aaData[i]);}}
else
{_fnGatherData(oSettings);}
oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();oSettings.bInitialised=true;if(bInitHandedOff===false)
{_fnInitialise(oSettings);}});_that=null;return this;};DataTable.fnVersionCheck=function(sVersion)
{var fnZPad=function(Zpad,count)
{while(Zpad.length<count){Zpad+='0';}
return Zpad;};var aThis=DataTable.ext.sVersion.split('.');var aThat=sVersion.split('.');var sThis='',sThat='';for(var i=0,iLen=aThat.length;i<iLen;i++)
{sThis+=fnZPad(aThis[i],3);sThat+=fnZPad(aThat[i],3);}
return parseInt(sThis,10)>=parseInt(sThat,10);};DataTable.fnIsDataTable=function(nTable)
{var o=DataTable.settings;for(var i=0;i<o.length;i++)
{if(o[i].nTable===nTable||o[i].nScrollHead===nTable||o[i].nScrollFoot===nTable)
{return true;}}
return false;};DataTable.fnTables=function(bVisible)
{var out=[];jQuery.each(DataTable.settings,function(i,o){if(!bVisible||(bVisible===true&&$(o.nTable).is(':visible')))
{out.push(o.nTable);}});return out;};DataTable.version="1.9.4";DataTable.settings=[];DataTable.models={};DataTable.models.ext={"afnFiltering":[],"afnSortData":[],"aoFeatures":[],"aTypes":[],"fnVersionCheck":DataTable.fnVersionCheck,"iApiIndex":0,"ofnSearch":{},"oApi":{},"oStdClasses":{},"oJUIClasses":{},"oPagination":{},"oSort":{},"sVersion":DataTable.version,"sErrMode":"alert","_oExternConfig":{"iNextUnique":0}};DataTable.models.oSearch={"bCaseInsensitive":true,"sSearch":"","bRegex":false,"bSmart":true};DataTable.models.oRow={"nTr":null,"_aData":[],"_aSortData":[],"_anHidden":[],"_sRowStripe":""};DataTable.models.oColumn={"aDataSort":null,"asSorting":null,"bSearchable":null,"bSortable":null,"bUseRendered":null,"bVisible":null,"_bAutoType":true,"fnCreatedCell":null,"fnGetData":null,"fnRender":null,"fnSetData":null,"mData":null,"mRender":null,"nTh":null,"nTf":null,"sClass":null,"sContentPadding":null,"sDefaultContent":null,"sName":null,"sSortDataType":'std',"sSortingClass":null,"sSortingClassJUI":null,"sTitle":null,"sType":null,"sWidth":null,"sWidthOrig":null};DataTable.defaults={"aaData":null,"aaSorting":[[0,'asc']],"aaSortingFixed":null,"aLengthMenu":[10,25,50,100],"aoColumns":null,"aoColumnDefs":null,"aoSearchCols":[],"asStripeClasses":null,"bAutoWidth":true,"bDeferRender":false,"bDestroy":false,"bFilter":true,"bInfo":true,"bJQueryUI":false,"bLengthChange":true,"bPaginate":true,"bProcessing":false,"bRetrieve":false,"bScrollAutoCss":true,"bScrollCollapse":false,"bScrollInfinite":false,"bServerSide":false,"bSort":true,"bSortCellsTop":false,"bSortClasses":true,"bStateSave":false,"fnCookieCallback":null,"fnCreatedRow":null,"fnDrawCallback":null,"fnFooterCallback":null,"fnFormatNumber":function(iIn){if(iIn<1000)
{return iIn;}
var s=(iIn+""),a=s.split(""),out="",iLen=s.length;for(var i=0;i<iLen;i++)
{if(i%3===0&&i!==0)
{out=this.oLanguage.sInfoThousands+out;}
out=a[iLen-i-1]+out;}
return out;},"fnHeaderCallback":null,"fnInfoCallback":null,"fnInitComplete":null,"fnPreDrawCallback":null,"fnRowCallback":null,"fnServerData":function(sUrl,aoData,fnCallback,oSettings){oSettings.jqXHR=$.ajax({"url":sUrl,"data":aoData,"success":function(json){if(json.sError){oSettings.oApi._fnLog(oSettings,0,json.sError);}
$(oSettings.oInstance).trigger('xhr',[oSettings,json]);fnCallback(json);},"dataType":"json","cache":false,"type":oSettings.sServerMethod,"error":function(xhr,error,thrown){if(error=="parsererror"){oSettings.oApi._fnLog(oSettings,0,"DataTables warning: JSON data from "+"server could not be parsed. This is caused by a JSON formatting error.");}}});},"fnServerParams":null,"fnStateLoad":function(oSettings){var sData=this.oApi._fnReadCookie(oSettings.sCookiePrefix+oSettings.sInstance);var oData;try{oData=(typeof $.parseJSON==='function')?$.parseJSON(sData):eval('('+sData+')');}catch(e){oData=null;}
return oData;},"fnStateLoadParams":null,"fnStateLoaded":null,"fnStateSave":function(oSettings,oData){this.oApi._fnCreateCookie(oSettings.sCookiePrefix+oSettings.sInstance,this.oApi._fnJsonString(oData),oSettings.iCookieDuration,oSettings.sCookiePrefix,oSettings.fnCookieCallback);},"fnStateSaveParams":null,"iCookieDuration":7200,"iDeferLoading":null,"iDisplayLength":10,"iDisplayStart":0,"iScrollLoadGap":100,"iTabIndex":0,"oLanguage":{"oAria":{"sSortAscending":": activate to sort column ascending","sSortDescending":": activate to sort column descending"},"oPaginate":{"sFirst":"First","sLast":"Last","sNext":"Next","sPrevious":"Previous"},"sEmptyTable":"No data available in table","sInfo":"Showing _START_ to _END_ of _TOTAL_ entries","sInfoEmpty":"Showing 0 to 0 of 0 entries","sInfoFiltered":"(filtered from _MAX_ total entries)","sInfoPostFix":"","sInfoThousands":",","sLengthMenu":"Show _MENU_ entries","sLoadingRecords":"Loading...","sProcessing":"Processing...","sSearch":"Search:","sUrl":"","sZeroRecords":"No matching records found"},"oSearch":$.extend({},DataTable.models.oSearch),"sAjaxDataProp":"aaData","sAjaxSource":null,"sCookiePrefix":"SpryMedia_DataTables_","sDom":"lfrtip","sPaginationType":"two_button","sScrollX":"","sScrollXInner":"","sScrollY":"","sServerMethod":"GET"};DataTable.defaults.columns={"aDataSort":null,"asSorting":['asc','desc'],"bSearchable":true,"bSortable":true,"bUseRendered":true,"bVisible":true,"fnCreatedCell":null,"fnRender":null,"iDataSort":-1,"mData":null,"mRender":null,"sCellType":"td","sClass":"","sContentPadding":"","sDefaultContent":null,"sName":"","sSortDataType":"std","sTitle":null,"sType":null,"sWidth":null};DataTable.models.oSettings={"oFeatures":{"bAutoWidth":null,"bDeferRender":null,"bFilter":null,"bInfo":null,"bLengthChange":null,"bPaginate":null,"bProcessing":null,"bServerSide":null,"bSort":null,"bSortClasses":null,"bStateSave":null},"oScroll":{"bAutoCss":null,"bCollapse":null,"bInfinite":null,"iBarWidth":0,"iLoadGap":null,"sX":null,"sXInner":null,"sY":null},"oLanguage":{"fnInfoCallback":null},"oBrowser":{"bScrollOversize":false},"aanFeatures":[],"aoData":[],"aiDisplay":[],"aiDisplayMaster":[],"aoColumns":[],"aoHeader":[],"aoFooter":[],"asDataSearch":[],"oPreviousSearch":{},"aoPreSearchCols":[],"aaSorting":null,"aaSortingFixed":null,"asStripeClasses":null,"asDestroyStripes":[],"sDestroyWidth":0,"aoRowCallback":[],"aoHeaderCallback":[],"aoFooterCallback":[],"aoDrawCallback":[],"aoRowCreatedCallback":[],"aoPreDrawCallback":[],"aoInitComplete":[],"aoStateSaveParams":[],"aoStateLoadParams":[],"aoStateLoaded":[],"sTableId":"","nTable":null,"nTHead":null,"nTFoot":null,"nTBody":null,"nTableWrapper":null,"bDeferLoading":false,"bInitialised":false,"aoOpenRows":[],"sDom":null,"sPaginationType":"two_button","iCookieDuration":0,"sCookiePrefix":"","fnCookieCallback":null,"aoStateSave":[],"aoStateLoad":[],"oLoadedState":null,"sAjaxSource":null,"sAjaxDataProp":null,"bAjaxDataGet":true,"jqXHR":null,"fnServerData":null,"aoServerParams":[],"sServerMethod":null,"fnFormatNumber":null,"aLengthMenu":null,"iDraw":0,"bDrawing":false,"iDrawError":-1,"_iDisplayLength":10,"_iDisplayStart":0,"_iDisplayEnd":10,"_iRecordsTotal":0,"_iRecordsDisplay":0,"bJUI":null,"oClasses":{},"bFiltered":false,"bSorted":false,"bSortCellsTop":null,"oInit":null,"aoDestroyCallback":[],"fnRecordsTotal":function()
{if(this.oFeatures.bServerSide){return parseInt(this._iRecordsTotal,10);}else{return this.aiDisplayMaster.length;}},"fnRecordsDisplay":function()
{if(this.oFeatures.bServerSide){return parseInt(this._iRecordsDisplay,10);}else{return this.aiDisplay.length;}},"fnDisplayEnd":function()
{if(this.oFeatures.bServerSide){if(this.oFeatures.bPaginate===false||this._iDisplayLength==-1){return this._iDisplayStart+this.aiDisplay.length;}else{return Math.min(this._iDisplayStart+this._iDisplayLength,this._iRecordsDisplay);}}else{return this._iDisplayEnd;}},"oInstance":null,"sInstance":null,"iTabIndex":0,"nScrollHead":null,"nScrollFoot":null};DataTable.ext=$.extend(true,{},DataTable.models.ext);$.extend(DataTable.ext.oStdClasses,{"sTable":"dataTable","sPagePrevEnabled":"paginate_enabled_previous","sPagePrevDisabled":"paginate_disabled_previous","sPageNextEnabled":"paginate_enabled_next","sPageNextDisabled":"paginate_disabled_next","sPageJUINext":"","sPageJUIPrev":"","sPageButton":"paginate_button","sPageButtonActive":"paginate_active","sPageButtonStaticDisabled":"paginate_button paginate_button_disabled","sPageFirst":"first","sPagePrevious":"previous","sPageNext":"next","sPageLast":"last","sStripeOdd":"odd","sStripeEven":"even","sRowEmpty":"dataTables_empty","sWrapper":"dataTables_wrapper","sFilter":"dataTables_filter","sInfo":"dataTables_info","sPaging":"dataTables_paginate paging_","sLength":"dataTables_length","sProcessing":"dataTables_processing","sSortAsc":"sorting_asc","sSortDesc":"sorting_desc","sSortable":"sorting","sSortableAsc":"sorting_asc_disabled","sSortableDesc":"sorting_desc_disabled","sSortableNone":"sorting_disabled","sSortColumn":"sorting_","sSortJUIAsc":"","sSortJUIDesc":"","sSortJUI":"","sSortJUIAscAllowed":"","sSortJUIDescAllowed":"","sSortJUIWrapper":"","sSortIcon":"","sScrollWrapper":"dataTables_scroll","sScrollHead":"dataTables_scrollHead","sScrollHeadInner":"dataTables_scrollHeadInner","sScrollBody":"dataTables_scrollBody","sScrollFoot":"dataTables_scrollFoot","sScrollFootInner":"dataTables_scrollFootInner","sFooterTH":"","sJUIHeader":"","sJUIFooter":""});$.extend(DataTable.ext.oJUIClasses,DataTable.ext.oStdClasses,{"sPagePrevEnabled":"fg-button ui-button ui-state-default ui-corner-left","sPagePrevDisabled":"fg-button ui-button ui-state-default ui-corner-left ui-state-disabled","sPageNextEnabled":"fg-button ui-button ui-state-default ui-corner-right","sPageNextDisabled":"fg-button ui-button ui-state-default ui-corner-right ui-state-disabled","sPageJUINext":"ui-icon ui-icon-circle-arrow-e","sPageJUIPrev":"ui-icon ui-icon-circle-arrow-w","sPageButton":"fg-button ui-button ui-state-default","sPageButtonActive":"fg-button ui-button ui-state-default ui-state-disabled","sPageButtonStaticDisabled":"fg-button ui-button ui-state-default ui-state-disabled","sPageFirst":"first ui-corner-tl ui-corner-bl","sPageLast":"last ui-corner-tr ui-corner-br","sPaging":"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi "+"ui-buttonset-multi paging_","sSortAsc":"ui-state-default","sSortDesc":"ui-state-default","sSortable":"ui-state-default","sSortableAsc":"ui-state-default","sSortableDesc":"ui-state-default","sSortableNone":"ui-state-default","sSortJUIAsc":"css_right ui-icon ui-icon-triangle-1-n","sSortJUIDesc":"css_right ui-icon ui-icon-triangle-1-s","sSortJUI":"css_right ui-icon ui-icon-carat-2-n-s","sSortJUIAscAllowed":"css_right ui-icon ui-icon-carat-1-n","sSortJUIDescAllowed":"css_right ui-icon ui-icon-carat-1-s","sSortJUIWrapper":"DataTables_sort_wrapper","sSortIcon":"DataTables_sort_icon","sScrollHead":"dataTables_scrollHead ui-state-default","sScrollFoot":"dataTables_scrollFoot ui-state-default","sFooterTH":"ui-state-default","sJUIHeader":"fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix","sJUIFooter":"fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"});$.extend(DataTable.ext.oPagination,{"two_button":{"fnInit":function(oSettings,nPaging,fnCallbackDraw)
{var oLang=oSettings.oLanguage.oPaginate;var oClasses=oSettings.oClasses;var fnClickHandler=function(e){if(oSettings.oApi._fnPageChange(oSettings,e.data.action))
{fnCallbackDraw(oSettings);}};var sAppend=(!oSettings.bJUI)?'<a class="'+oSettings.oClasses.sPagePrevDisabled+'" tabindex="'+oSettings.iTabIndex+'" role="button">'+oLang.sPrevious+'</a>'+'<a class="'+oSettings.oClasses.sPageNextDisabled+'" tabindex="'+oSettings.iTabIndex+'" role="button">'+oLang.sNext+'</a>':'<a class="'+oSettings.oClasses.sPagePrevDisabled+'" tabindex="'+oSettings.iTabIndex+'" role="button"><span class="'+oSettings.oClasses.sPageJUIPrev+'"></span></a>'+'<a class="'+oSettings.oClasses.sPageNextDisabled+'" tabindex="'+oSettings.iTabIndex+'" role="button"><span class="'+oSettings.oClasses.sPageJUINext+'"></span></a>';$(nPaging).append(sAppend);var els=$('a',nPaging);var nPrevious=els[0],nNext=els[1];oSettings.oApi._fnBindAction(nPrevious,{action:"previous"},fnClickHandler);oSettings.oApi._fnBindAction(nNext,{action:"next"},fnClickHandler);if(!oSettings.aanFeatures.p)
{nPaging.id=oSettings.sTableId+'_paginate';nPrevious.id=oSettings.sTableId+'_previous';nNext.id=oSettings.sTableId+'_next';nPrevious.setAttribute('aria-controls',oSettings.sTableId);nNext.setAttribute('aria-controls',oSettings.sTableId);}},"fnUpdate":function(oSettings,fnCallbackDraw)
{if(!oSettings.aanFeatures.p)
{return;}
var oClasses=oSettings.oClasses;var an=oSettings.aanFeatures.p;var nNode;for(var i=0,iLen=an.length;i<iLen;i++)
{nNode=an[i].firstChild;if(nNode)
{nNode.className=(oSettings._iDisplayStart===0)?oClasses.sPagePrevDisabled:oClasses.sPagePrevEnabled;nNode=nNode.nextSibling;nNode.className=(oSettings.fnDisplayEnd()==oSettings.fnRecordsDisplay())?oClasses.sPageNextDisabled:oClasses.sPageNextEnabled;}}}},"iFullNumbersShowPages":5,"full_numbers":{"fnInit":function(oSettings,nPaging,fnCallbackDraw)
{var oLang=oSettings.oLanguage.oPaginate;var oClasses=oSettings.oClasses;var fnClickHandler=function(e){if(oSettings.oApi._fnPageChange(oSettings,e.data.action))
{fnCallbackDraw(oSettings);}};$(nPaging).append('<a  tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButton+" "+oClasses.sPageFirst+'">'+oLang.sFirst+'</a>'+'<a  tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButton+" "+oClasses.sPagePrevious+'">'+oLang.sPrevious+'</a>'+'<span></span>'+'<a tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButton+" "+oClasses.sPageNext+'">'+oLang.sNext+'</a>'+'<a tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButton+" "+oClasses.sPageLast+'">'+oLang.sLast+'</a>');var els=$('a',nPaging);var nFirst=els[0],nPrev=els[1],nNext=els[2],nLast=els[3];oSettings.oApi._fnBindAction(nFirst,{action:"first"},fnClickHandler);oSettings.oApi._fnBindAction(nPrev,{action:"previous"},fnClickHandler);oSettings.oApi._fnBindAction(nNext,{action:"next"},fnClickHandler);oSettings.oApi._fnBindAction(nLast,{action:"last"},fnClickHandler);if(!oSettings.aanFeatures.p)
{nPaging.id=oSettings.sTableId+'_paginate';nFirst.id=oSettings.sTableId+'_first';nPrev.id=oSettings.sTableId+'_previous';nNext.id=oSettings.sTableId+'_next';nLast.id=oSettings.sTableId+'_last';}},"fnUpdate":function(oSettings,fnCallbackDraw)
{if(!oSettings.aanFeatures.p)
{return;}
var iPageCount=DataTable.ext.oPagination.iFullNumbersShowPages;var iPageCountHalf=Math.floor(iPageCount/2);var iPages=Math.ceil((oSettings.fnRecordsDisplay())/oSettings._iDisplayLength);var iCurrentPage=Math.ceil(oSettings._iDisplayStart/oSettings._iDisplayLength)+1;var sList="";var iStartButton,iEndButton,i,iLen;var oClasses=oSettings.oClasses;var anButtons,anStatic,nPaginateList,nNode;var an=oSettings.aanFeatures.p;var fnBind=function(j){oSettings.oApi._fnBindAction(this,{"page":j+iStartButton-1},function(e){oSettings.oApi._fnPageChange(oSettings,e.data.page);fnCallbackDraw(oSettings);e.preventDefault();});};if(oSettings._iDisplayLength===-1)
{iStartButton=1;iEndButton=1;iCurrentPage=1;}
else if(iPages<iPageCount)
{iStartButton=1;iEndButton=iPages;}
else if(iCurrentPage<=iPageCountHalf)
{iStartButton=1;iEndButton=iPageCount;}
else if(iCurrentPage>=(iPages-iPageCountHalf))
{iStartButton=iPages-iPageCount+1;iEndButton=iPages;}
else
{iStartButton=iCurrentPage-Math.ceil(iPageCount/2)+1;iEndButton=iStartButton+iPageCount-1;}
for(i=iStartButton;i<=iEndButton;i++)
{sList+=(iCurrentPage!==i)?'<a tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButton+'">'+oSettings.fnFormatNumber(i)+'</a>':'<a tabindex="'+oSettings.iTabIndex+'" class="'+oClasses.sPageButtonActive+'">'+oSettings.fnFormatNumber(i)+'</a>';}
for(i=0,iLen=an.length;i<iLen;i++)
{nNode=an[i];if(!nNode.hasChildNodes())
{continue;}
$('span:eq(0)',nNode).html(sList).children('a').each(fnBind);anButtons=nNode.getElementsByTagName('a');anStatic=[anButtons[0],anButtons[1],anButtons[anButtons.length-2],anButtons[anButtons.length-1]];$(anStatic).removeClass(oClasses.sPageButton+" "+oClasses.sPageButtonActive+" "+oClasses.sPageButtonStaticDisabled);$([anStatic[0],anStatic[1]]).addClass((iCurrentPage==1)?oClasses.sPageButtonStaticDisabled:oClasses.sPageButton);$([anStatic[2],anStatic[3]]).addClass((iPages===0||iCurrentPage===iPages||oSettings._iDisplayLength===-1)?oClasses.sPageButtonStaticDisabled:oClasses.sPageButton);}}}});$.extend(DataTable.ext.oSort,{"string-pre":function(a)
{if(typeof a!='string'){a=(a!==null&&a.toString)?a.toString():'';}
return a.toLowerCase();},"string-asc":function(x,y)
{return((x<y)?-1:((x>y)?1:0));},"string-desc":function(x,y)
{return((x<y)?1:((x>y)?-1:0));},"html-pre":function(a)
{return a.replace(/<.*?>/g,"").toLowerCase();},"html-asc":function(x,y)
{return((x<y)?-1:((x>y)?1:0));},"html-desc":function(x,y)
{return((x<y)?1:((x>y)?-1:0));},"date-pre":function(a)
{var x=Date.parse(a);if(isNaN(x)||x==="")
{x=Date.parse("01/01/1970 00:00:00");}
return x;},"date-asc":function(x,y)
{return x-y;},"date-desc":function(x,y)
{return y-x;},"numeric-pre":function(a)
{return(a=="-"||a==="")?0:a*1;},"numeric-asc":function(x,y)
{return x-y;},"numeric-desc":function(x,y)
{return y-x;}});$.extend(DataTable.ext.aTypes,[function(sData)
{if(typeof sData==='number')
{return'numeric';}
else if(typeof sData!=='string')
{return null;}
var sValidFirstChars="0123456789-";var sValidChars="0123456789.";var Char;var bDecimal=false;Char=sData.charAt(0);if(sValidFirstChars.indexOf(Char)==-1)
{return null;}
for(var i=1;i<sData.length;i++)
{Char=sData.charAt(i);if(sValidChars.indexOf(Char)==-1)
{return null;}
if(Char==".")
{if(bDecimal)
{return null;}
bDecimal=true;}}
return'numeric';},function(sData)
{var iParse=Date.parse(sData);if((iParse!==null&&!isNaN(iParse))||(typeof sData==='string'&&sData.length===0))
{return'date';}
return null;},function(sData)
{if(typeof sData==='string'&&sData.indexOf('<')!=-1&&sData.indexOf('>')!=-1)
{return'html';}
return null;}]);$.fn.DataTable=DataTable;$.fn.dataTable=DataTable;$.fn.dataTableSettings=DataTable.settings;$.fn.dataTableExt=DataTable.ext;}));}(window,document));

$.extend(true,$.fn.dataTable.defaults,{"sDom":"<'row'<'col-md-6'f><'col-md-6'l>r>t<'row'<'col-md-6'i><'col-md-6'p>>","sPaginationType":"bootstrap","oLanguage":{"sLengthMenu":"Show _MENU_ Rows","sSearch":""}});$.extend($.fn.dataTableExt.oStdClasses,{"sWrapper":"dataTables_wrapper form-inline"});$.fn.dataTableExt.oApi.fnPagingInfo=function(oSettings)
{return{"iStart":oSettings._iDisplayStart,"iEnd":oSettings.fnDisplayEnd(),"iLength":oSettings._iDisplayLength,"iTotal":oSettings.fnRecordsTotal(),"iFilteredTotal":oSettings.fnRecordsDisplay(),"iPage":oSettings._iDisplayLength===-1?0:Math.ceil(oSettings._iDisplayStart/oSettings._iDisplayLength),"iTotalPages":oSettings._iDisplayLength===-1?0:Math.ceil(oSettings.fnRecordsDisplay()/oSettings._iDisplayLength)};};$.extend($.fn.dataTableExt.oPagination,{"bootstrap":{"fnInit":function(oSettings,nPaging,fnDraw){var oLang=oSettings.oLanguage.oPaginate;var fnClickHandler=function(e){e.preventDefault();if(oSettings.oApi._fnPageChange(oSettings,e.data.action)){fnDraw(oSettings);}};$(nPaging).append('<ul class="pagination">'+'<li class="prev disabled"><a href="#"><i class="icon-double-angle-left"></i> '+oLang.sPrevious+'</a></li>'+'<li class="next disabled"><a href="#">'+oLang.sNext+' <i class="icon-double-angle-right"></i></a></li>'+'</ul>');var els=$('a',nPaging);$(els[0]).bind('click.DT',{action:"previous"},fnClickHandler);$(els[1]).bind('click.DT',{action:"next"},fnClickHandler);},"fnUpdate":function(oSettings,fnDraw){var iListLength=5;var oPaging=oSettings.oInstance.fnPagingInfo();var an=oSettings.aanFeatures.p;var i,ien,j,sClass,iStart,iEnd,iHalf=Math.floor(iListLength/2);if(oPaging.iTotalPages<iListLength){iStart=1;iEnd=oPaging.iTotalPages;}
else if(oPaging.iPage<=iHalf){iStart=1;iEnd=iListLength;}else if(oPaging.iPage>=(oPaging.iTotalPages-iHalf)){iStart=oPaging.iTotalPages-iListLength+1;iEnd=oPaging.iTotalPages;}else{iStart=oPaging.iPage-iHalf+1;iEnd=iStart+iListLength-1;}
for(i=0,ien=an.length;i<ien;i++){$('li:gt(0)',an[i]).filter(':not(:last)').remove();for(j=iStart;j<=iEnd;j++){sClass=(j==oPaging.iPage+1)?'class="active"':'';$('<li '+sClass+'><a href="#">'+j+'</a></li>').insertBefore($('li:last',an[i])[0]).bind('click',function(e){e.preventDefault();oSettings._iDisplayStart=(parseInt($('a',this).text(),10)-1)*oPaging.iLength;fnDraw(oSettings);});}
if(oPaging.iPage===0){$('li:first',an[i]).addClass('disabled');}else{$('li:first',an[i]).removeClass('disabled');}
if(oPaging.iPage===oPaging.iTotalPages-1||oPaging.iTotalPages===0){$('li:last',an[i]).addClass('disabled');}else{$('li:last',an[i]).removeClass('disabled');}}}}});if($.fn.DataTable.TableTools){$.extend(true,$.fn.DataTable.TableTools.classes,{"container":"DTTT btn-group","buttons":{"normal":"btn","disabled":"disabled"},"collection":{"container":"DTTT_dropdown dropdown-menu","buttons":{"normal":"","disabled":"disabled"}},"print":{"info":"DTTT_print_info modal"},"select":{"row":"active"}});$.extend(true,$.fn.DataTable.TableTools.DEFAULTS.oTags,{"collection":{"container":"ul","button":"li","liner":"a"}});}
;(function($){$.keyboard=function(el,options){var base=this,o;base.$el=$(el);base.el=el;base.$el.data("keyboard",base);base.init=function(){base.options=o=$.extend(true,{},$.keyboard.defaultOptions,options);base.shiftActive=base.altActive=base.metaActive=base.sets=base.capsLock=false;base.lastKeyset=[false,false,false];base.rows=['','-shift','-alt','-alt-shift'];base.acceptedKeys=[];base.mappedKeys={};$('<!--[if lte IE 8]><script>jQuery("body").addClass("oldie");</script><![endif]--><!--[if IE]><script>jQuery("body").addClass("ie");</script><![endif]-->').appendTo('body').remove();base.msie=$('body').hasClass('oldie');base.allie=$('body').hasClass('ie');base.inPlaceholder=base.$el.attr('placeholder')||'';base.watermark=(typeof(document.createElement('input').placeholder)!=='undefined'&&base.inPlaceholder!=='');base.regex=$.keyboard.comboRegex;base.decimal=(/^\./.test(o.display.dec))?true:false;base.repeatTime=1000/(o.repeatRate||20);base.temp=$('<input style="position:absolute;left:-9999em;top:-9999em;" type="text" value="testing">').appendTo('body').caret(3,3);base.checkCaret=(o.lockInput||base.temp.hide().show().caret().start!==3)?true:false;base.temp.remove();base.lastCaret={start:0,end:0};base.temp=['',0,0];$.each('initialized visible change hidden canceled accepted beforeClose'.split(' '),function(i,f){if($.isFunction(o[f])){base.$el.bind(f+'.keyboard',o[f]);}});if(o.alwaysOpen){o.stayOpen=true;}
$(document).bind('mousedown.keyboard keyup.keyboard',function(e){if(base.opening){return;}
base.escClose(e);if(e.target&&$(e.target).hasClass('ui-keyboard-input')){var kb=$(e.target).data('keyboard');if(kb&&kb.options.openOn.length){kb.focusOn();}}});base.$el.addClass('ui-keyboard-input '+o.css.input).attr({'aria-haspopup':'true','role':'textbox'});if(base.$el.is(':disabled')||(base.$el.attr('readonly')&&!base.$el.hasClass('ui-keyboard-lockedinput'))){base.$el.addClass('ui-keyboard-nokeyboard');}
if(o.openOn){base.$el.bind(o.openOn+'.keyboard',function(){base.focusOn();});}
if(!base.watermark&&base.$el.val()===''&&base.inPlaceholder!==''&&base.$el.attr('placeholder')!==''){base.$el.addClass('ui-keyboard-placeholder').val(base.inPlaceholder);}
base.$el.trigger('initialized.keyboard',[base,base.el]);if(o.alwaysOpen){base.reveal();}};base.focusOn=function(){if(base.$el.is(':visible')){base.lastCaret=base.$el.caret();}
if(!base.isVisible()||o.alwaysOpen){clearTimeout(base.timer);base.reveal();setTimeout(function(){base.$preview.focus();},100);}};base.reveal=function(){base.opening=true;$('.ui-keyboard:not(.ui-keyboard-always-open)').hide();if(base.$el.is(':disabled')||(base.$el.attr('readonly')&&!base.$el.hasClass('ui-keyboard-lockedinput'))){base.$el.addClass('ui-keyboard-nokeyboard');return;}else{base.$el.removeClass('ui-keyboard-nokeyboard');}
if(o.openOn){base.$el.unbind(o.openOn+'.keyboard');}
if(typeof(base.$keyboard)==='undefined'){base.startup();}
$('.ui-keyboard-has-focus').removeClass('ui-keyboard-has-focus');$('.ui-keyboard-input-current').removeClass('ui-keyboard-input-current');base.$el.addClass('ui-keyboard-input-current');base.isCurrent(true);if(!base.watermark&&base.el.value===base.inPlaceholder){base.$el.removeClass('ui-keyboard-placeholder').val('');}
base.originalContent=base.$el.val();base.$preview.val(base.originalContent);if(o.acceptValid){base.checkValid();}
var p,s;base.position=o.position;base.position.of=base.position.of||base.$el.data('keyboardPosition')||base.$el;base.position.collision=(o.usePreview)?base.position.collision||'fit fit':'flip flip';if(o.resetDefault){base.shiftActive=base.altActive=base.metaActive=false;base.showKeySet();}
base.$keyboard.css({position:'absolute',left:0,top:0}).addClass('ui-keyboard-has-focus').show();if(o.usePreview&&base.msie){if(typeof base.width==='undefined'){base.$preview.hide();base.width=Math.ceil(base.$keyboard.width());base.$preview.show();}
base.$preview.width(base.width);}
base.$keyboard.position(base.position);base.$preview.focus();base.checkDecimal();base.lineHeight=parseInt(base.$preview.css('lineHeight'),10)||parseInt(base.$preview.css('font-size'),10)+4;if(base.allie){s=base.lastCaret.start||base.originalContent.length;p={start:s,end:s};if(!base.lastCaret){base.lastCaret=p;}
if(base.lastCaret.end===0&&base.lastCaret.start>0){base.lastCaret.end=base.lastCaret.start;}
if(base.lastCaret.start<0){base.lastCaret=p;}}
base.$preview.caret(base.lastCaret.start,base.lastCaret.end);base.$el.trigger('visible.keyboard',[base,base.el]);setTimeout(function(){base.opening=false;},500);return base;};base.startup=function(){base.$keyboard=base.buildKeyboard();base.$allKeys=base.$keyboard.find('button.ui-keyboard-button');base.preview=base.$preview[0];base.$decBtn=base.$keyboard.find('.ui-keyboard-dec');base.wheel=$.isFunction($.fn.mousewheel);base.alwaysAllowed=[20,33,34,35,36,37,38,39,40,45,46];if(o.enterNavigation){base.alwaysAllowed.push(13);}
base.$preview.bind('keypress.keyboard',function(e){var k=String.fromCharCode(e.charCode||e.which);if(base.checkCaret){base.lastCaret=base.$preview.caret();}
base.capsLock=(((k>=65&&k<=90)&&!e.shiftKey)||((k>=97&&k<=122)&&e.shiftKey))?true:false;if(o.restrictInput){if((e.which===8||e.which===0)&&$.inArray(e.keyCode,base.alwaysAllowed)){return;}
if($.inArray(k,base.acceptedKeys)===-1){e.preventDefault();}}else if((e.ctrlKey||e.metaKey)&&(e.which===97||e.which===99||e.which===118||(e.which>=120&&e.which<=122))){return;}
if(base.hasMappedKeys){if(base.mappedKeys.hasOwnProperty(k)){base.insertText(base.mappedKeys[k]);e.preventDefault();}}
base.checkMaxLength();}).bind('keyup.keyboard',function(e){switch(e.which){case 9:if(base.tab&&!o.lockInput){$.keyboard.keyaction.tab(base);base.tab=false;}else{e.preventDefault();}
break;case 27:base.close();return false;}
clearTimeout(base.throttled);base.throttled=setTimeout(function(){base.checkCombos();},100);base.checkMaxLength();base.$el.trigger('change.keyboard',[base,base.el]);}).bind('keydown.keyboard',function(e){switch(e.which){case 9:if(o.tabNavigation){return true;}else{base.tab=true;return false;}
case 13:$.keyboard.keyaction.enter(base,null,e);break;case 20:base.shiftActive=base.capsLock=!base.capsLock;base.showKeySet(this);break;case 86:if(e.ctrlKey||e.metaKey){if(o.preventPaste){e.preventDefault();return;}
base.checkCombos();}
break;}}).bind('mouseup.keyboard',function(){if(base.checkCaret){base.lastCaret=base.$preview.caret();}});base.$keyboard.bind('mousedown.keyboard click.keyboard',function(e){e.stopPropagation();});if(o.preventPaste){base.$preview.bind('contextmenu.keyboard',function(e){e.preventDefault();});base.$el.bind('contextmenu.keyboard',function(e){e.preventDefault();});}
if(o.appendLocally){base.$el.after(base.$keyboard);}else{base.$keyboard.appendTo('body');}
base.$allKeys.bind(o.keyBinding.split(' ').join('.keyboard ')+'.keyboard repeater.keyboard',function(e){var txt,key=$.data(this,'key'),action=key.action.split(':')[0];base.$preview.focus();if(base.checkCaret){base.$preview.caret(base.lastCaret.start,base.lastCaret.end);}
if(action.match('meta')){action='meta';}
if($.keyboard.keyaction.hasOwnProperty(action)&&$(this).hasClass('ui-keyboard-actionkey')){if($.keyboard.keyaction[action](base,this,e)===false){return;}}else if(typeof key.action!=='undefined'){txt=(base.wheel&&!$(this).hasClass('ui-keyboard-actionkey'))?key.curTxt:key.action;base.insertText(txt);if(!base.capsLock&&!o.stickyShift&&!e.shiftKey){base.shiftActive=false;base.showKeySet(this);}}
base.checkCombos();base.checkMaxLength();base.$el.trigger('change.keyboard',[base,base.el]);base.$preview.focus();e.preventDefault();}).bind('mouseenter.keyboard mouseleave.keyboard',function(e){var el=this,$this=$(this),key=$.data(el,'key');if(e.type==='mouseenter'&&base.el.type!=='password'){$this.addClass(o.css.buttonHover).attr('title',function(i,t){return(base.wheel&&t===''&&base.sets)?o.wheelMessage:t;});}
if(e.type==='mouseleave'){key.curTxt=key.original;key.curNum=0;$.data(el,'key',key);$this.removeClass((base.el.type==='password')?'':o.css.buttonHover).attr('title',function(i,t){return(t===o.wheelMessage)?'':t;}).find('span').text(key.original);}}).bind('mousewheel.keyboard',function(e,delta){if(base.wheel){var txt,$this=$(this),key=$.data(this,'key');txt=key.layers||base.getLayers($this);key.curNum+=(delta>0)?-1:1;if(key.curNum>txt.length-1){key.curNum=0;}
if(key.curNum<0){key.curNum=txt.length-1;}
key.layers=txt;key.curTxt=txt[key.curNum];$.data(this,'key',key);$this.find('span').text(txt[key.curNum]);return false;}}).bind('mouseup.keyboard mouseleave.kb touchend.kb touchmove.kb touchcancel.kb',function(){if(base.isVisible()&&base.isCurrent()){base.$preview.focus();}
base.mouseRepeat=[false,''];clearTimeout(base.repeater);if(base.checkCaret){base.$preview.caret(base.lastCaret.start,base.lastCaret.end);}
return false;}).bind('click.keyboard',function(){return false;}).filter(':not(.ui-keyboard-actionkey)').add('.ui-keyboard-tab, .ui-keyboard-bksp, .ui-keyboard-space, .ui-keyboard-enter',base.$keyboard).bind('mousedown.kb touchstart.kb',function(){if(o.repeatRate!==0){var key=$(this);base.mouseRepeat=[true,key];setTimeout(function(){if(base.mouseRepeat[0]&&base.mouseRepeat[1]===key){base.repeatKey(key);}},o.repeatDelay);}
return false;});$(window).resize(function(){if(base.isVisible()){base.$keyboard.position(base.position);}});};base.isVisible=function(){if(typeof(base.$keyboard)==='undefined'){return false;}
return base.$keyboard.is(":visible");};base.insertText=function(txt){var bksp,t,h,val=base.$preview.val(),pos=base.$preview.caret(),scrL=base.$preview.scrollLeft(),scrT=base.$preview.scrollTop(),len=val.length;if(pos.end<pos.start){pos.end=pos.start;}
if(pos.start>len){pos.end=pos.start=len;}
if(base.preview.tagName==='TEXTAREA'){if(base.msie&&val.substr(pos.start,1)==='\n'){pos.start+=1;pos.end+=1;}
h=(val.split('\n').length-1);base.preview.scrollTop=(h>0)?base.lineHeight*h:scrT;}
bksp=(txt==='bksp'&&pos.start===pos.end)?true:false;txt=(txt==='bksp')?'':txt;t=pos.start+(bksp?-1:txt.length);scrL+=parseInt(base.$preview.css('fontSize'),10)*(txt==='bksp'?-1:1);base.$preview.val(base.$preview.val().substr(0,pos.start-(bksp?1:0))+txt+base.$preview.val().substr(pos.end)).caret(t,t).scrollLeft(scrL);if(base.checkCaret){base.lastCaret={start:t,end:t};}};base.checkMaxLength=function(){var t,p=base.$preview.val();if(o.maxLength!==false&&p.length>o.maxLength){t=Math.min(base.$preview.caret().start,o.maxLength);base.$preview.val(p.substring(0,o.maxLength));base.$preview.caret(t,t);base.lastCaret={start:t,end:t};}
if(base.$decBtn.length){base.checkDecimal();}};base.repeatKey=function(key){key.trigger('repeater.keyboard');if(base.mouseRepeat[0]){base.repeater=setTimeout(function(){base.repeatKey(key);},base.repeatTime);}};base.showKeySet=function(el){var key='',toShow=(base.shiftActive?1:0)+(base.altActive?2:0);if(!base.shiftActive){base.capsLock=false;}
if(base.metaActive){key=(el&&el.name&&/meta/.test(el.name))?el.name:'';if(key===''){key=(base.metaActive===true)?'':base.metaActive;}else{base.metaActive=key;}
if((!o.stickyShift&&base.lastKeyset[2]!==base.metaActive)||((base.shiftActive||base.altActive)&&!base.$keyboard.find('.ui-keyboard-keyset-'+key+base.rows[toShow]).length)){base.shiftActive=base.altActive=false;}}else if(!o.stickyShift&&base.lastKeyset[2]!==base.metaActive&&base.shiftActive){base.shiftActive=base.altActive=false;}
toShow=(base.shiftActive?1:0)+(base.altActive?2:0);key=(toShow===0&&!base.metaActive)?'-default':(key==='')?'':'-'+key;if(!base.$keyboard.find('.ui-keyboard-keyset'+key+base.rows[toShow]).length){base.shiftActive=base.lastKeyset[0];base.altActive=base.lastKeyset[1];base.metaActive=base.lastKeyset[2];return;}
base.$keyboard.find('.ui-keyboard-alt, .ui-keyboard-shift, .ui-keyboard-actionkey[class*=meta]').removeClass(o.css.buttonAction).end().find('.ui-keyboard-alt')[(base.altActive)?'addClass':'removeClass'](o.css.buttonAction).end().find('.ui-keyboard-shift')[(base.shiftActive)?'addClass':'removeClass'](o.css.buttonAction).end().find('.ui-keyboard-lock')[(base.capsLock)?'addClass':'removeClass'](o.css.buttonAction).end().find('.ui-keyboard-keyset').hide().end().find('.ui-keyboard-keyset'+key+base.rows[toShow]).show().end().find('.ui-keyboard-actionkey.ui-keyboard'+key).addClass(o.css.buttonAction);base.lastKeyset=[base.shiftActive,base.altActive,base.metaActive];};base.checkCombos=function(){var i,r,t,t2,val=base.$preview.val(),pos=base.$preview.caret(),len=val.length;if(pos.end<pos.start){pos.end=pos.start;}
if(pos.start>len){pos.end=pos.start=len;}
if(base.msie&&val.substr(pos.start,1)==='\n'){pos.start+=1;pos.end+=1;}
if(o.useCombos){if(base.msie){val=val.replace(base.regex,function(s,accent,letter){return(o.combos.hasOwnProperty(accent))?o.combos[accent][letter]||s:s;});}else{t=pos.start-(pos.start-2>=0?2:0);base.$preview.caret(t,pos.end);t2=base.$preview.caret().text.replace(base.regex,function(s,accent,letter){return(o.combos.hasOwnProperty(accent))?o.combos[accent][letter]||s:s;});base.$preview.val(base.$preview.caret().replace(t2));val=base.$preview.val();}}
if(o.restrictInput&&val!==''){t=val;r=base.acceptedKeys.length;for(i=0;i<r;i++){if(t===''){continue;}
t2=base.acceptedKeys[i];if(val.indexOf(t2)>=0){if(/[\[|\]|\\|\^|\$|\.|\||\?|\*|\+|\(|\)|\{|\}]/g.test(t2)){t2='\\'+t2;}
t=t.replace((new RegExp(t2,"g")),'');}}
if(t!==''){val=val.replace(t,'');}}
pos.start+=val.length-len;pos.end+=val.length-len;base.$preview.val(val);base.$preview.caret(pos.start,pos.end);base.preview.scrollTop=base.lineHeight*(val.substring(0,pos.start).split('\n').length-1);base.lastCaret={start:pos.start,end:pos.end};if(o.acceptValid){base.checkValid();}
return val;};base.checkValid=function(){var valid=true;if(o.validate&&typeof o.validate==="function"){valid=o.validate(base,base.$preview.val(),false);}
base.$keyboard.find('.ui-keyboard-accept')
[valid?'removeClass':'addClass']('ui-keyboard-invalid-input')
[valid?'addClass':'removeClass']('ui-keyboard-valid-input');};base.checkDecimal=function(){if((base.decimal&&/\./g.test(base.preview.value))||(!base.decimal&&/\,/g.test(base.preview.value))){base.$decBtn.attr({'disabled':'disabled','aria-disabled':'true'}).removeClass(o.css.buttonDefault+' '+o.css.buttonHover).addClass(o.css.buttonDisabled);}else{base.$decBtn.removeAttr('disabled').attr({'aria-disabled':'false'}).addClass(o.css.buttonDefault).removeClass(o.css.buttonDisabled);}};base.getLayers=function(el){var key,keys;key=el.attr('data-pos');keys=el.closest('.ui-keyboard').find('button[data-pos="'+key+'"]').map(function(){return $(this).find('> span').text();}).get();return keys;};base.isCurrent=function(set){var cur=$.keyboard.currentKeyboard||false;if(set){cur=$.keyboard.currentKeyboard=base.el;}else if(set===false&&cur===base.el){cur=$.keyboard.currentKeyboard='';}
return cur===base.el;};base.switchInput=function(goToNext,isAccepted){if(typeof o.switchInput==="function"){o.switchInput(base,goToNext,isAccepted);}else{var kb,stopped=false,all=$('.ui-keyboard-input:visible'),indx=all.index(base.$el)+(goToNext?1:-1);if(indx>all.length-1){stopped=o.stopAtEnd;indx=0;}
if(indx<0){stopped=o.stopAtEnd;indx=all.length-1;}
if(!stopped){base.close(isAccepted);kb=all.eq(indx).data('keyboard');if(kb&&kb.options.openOn.length){kb.focusOn();}}}
return false;};base.close=function(accepted){if(base.isVisible()){clearTimeout(base.throttled);var val=(accepted)?base.checkCombos():base.originalContent;if(accepted&&o.validate&&typeof(o.validate)==="function"&&!o.validate(base,val,true)){val=base.originalContent;accepted=false;if(o.cancelClose){return;}}
base.isCurrent(false);base.$el.removeClass('ui-keyboard-input-current ui-keyboard-autoaccepted').addClass((accepted||false)?accepted===true?'':'ui-keyboard-autoaccepted':'').trigger((o.alwaysOpen)?'':'beforeClose.keyboard',[base,base.el,(accepted||false)]).val(val).scrollTop(base.el.scrollHeight).trigger(((accepted||false)?'accepted.keyboard':'canceled.keyboard'),[base,base.el]).trigger((o.alwaysOpen)?'inactive.keyboard':'hidden.keyboard',[base,base.el]).blur();if(o.openOn){base.timer=setTimeout(function(){base.$el.bind(o.openOn+'.keyboard',function(){base.focusOn();});if($(':focus')[0]===base.el){base.$el.blur();}},500);}
if(!o.alwaysOpen){base.$keyboard.hide();}
if(!base.watermark&&base.el.value===''&&base.inPlaceholder!==''){base.$el.addClass('ui-keyboard-placeholder').val(base.inPlaceholder);}}
return!!accepted;};base.accept=function(){return base.close(true);};base.escClose=function(e){if(e.type==='keyup'){return(e.which===27)?base.close():'';}
var cur=base.isCurrent();if(!base.isVisible()||(o.alwaysOpen&&!cur)||(!o.alwaysOpen&&o.stayOpen&&cur&&!base.isVisible())){return;}
if(e.target!==base.el&&cur){if(base.allie){e.preventDefault();}
base.close(o.autoAccept?'true':false);}};base.keyBtn=$('<button />').attr({'role':'button','aria-disabled':'false','tabindex':'-1'}).addClass('ui-keyboard-button');base.addKey=function(keyName,name,regKey){var t,keyType,m,map,nm,n=(regKey===true)?keyName:o.display[name]||keyName,kn=(regKey===true)?keyName.charCodeAt(0):keyName;if(/\(.+\)/.test(n)){map=n.replace(/\(([^()]+)\)/,'');m=n.match(/\(([^()]+)\)/)[1];n=map;nm=map.split(':');map=(nm[0]!==''&&nm.length>1)?nm[0]:map;base.mappedKeys[m]=map;}
nm=n.split(':');if(nm[0]===''&&nm[1]===''){n=':';}
n=(nm[0]!==''&&nm.length>1)?$.trim(nm[0]):n;t=(nm.length>1)?$.trim(nm[1]).replace(/_/g," ")||'':'';keyType=(n.length>1)?' ui-keyboard-widekey':'';keyType+=(regKey)?'':' ui-keyboard-actionkey';return base.keyBtn.clone().attr({'data-value':n,'name':kn,'data-pos':base.temp[1]+','+base.temp[2],'title':t}).data('key',{action:keyName,original:n,curTxt:n,curNum:0}).addClass('ui-keyboard-'+kn+keyType+' '+o.css.buttonDefault).html('<span>'+n+'</span>').appendTo(base.temp[0]);};base.buildKeyboard=function(){var action,row,newSet,isAction,currentSet,key,keys,margin,sets=0,container=$('<div />').addClass('ui-keyboard '+o.css.container+(o.alwaysOpen?' ui-keyboard-always-open':'')).attr({'role':'textbox'}).hide();if(o.usePreview){base.$preview=base.$el.clone(false).removeAttr('id').removeClass('ui-keyboard-placeholder ui-keyboard-input').addClass('ui-keyboard-preview '+o.css.input).attr('tabindex','-1').show();$('<div />').addClass('ui-keyboard-preview-wrapper').append(base.$preview).appendTo(container);}else{base.$preview=base.$el;o.position.at=o.position.at2;}
if(o.lockInput){base.$preview.addClass('ui-keyboard-lockedinput').attr({'readonly':'readonly'});}
if(o.layout==='custom'||!$.keyboard.layouts.hasOwnProperty(o.layout)){o.layout='custom';$.keyboard.layouts.custom=o.customLayout||{'default':['{cancel}']};}
$.each($.keyboard.layouts[o.layout],function(set,keySet){if(set!==""){sets++;newSet=$('<div />').attr('name',set).addClass('ui-keyboard-keyset ui-keyboard-keyset-'+set).appendTo(container)[(set==='default')?'show':'hide']();for(row=0;row<keySet.length;row++){currentSet=$.trim(keySet[row]).replace(/\{(\.?)[\s+]?:[\s+]?(\.?)\}/g,'{$1:$2}');keys=currentSet.split(/\s+/);for(key=0;key<keys.length;key++){base.temp=[newSet,row,key];isAction=false;if(keys[key].length===0){continue;}
if(/^\{\S+\}$/.test(keys[key])){action=keys[key].match(/^\{(\S+)\}$/)[1].toLowerCase();if(/\!\!/.test(action)){action=action.replace('!!','');isAction=true;}
if(/^sp:((\d+)?([\.|,]\d+)?)(em|px)?$/.test(action)){margin=parseFloat(action.replace(/,/,'.').match(/^sp:((\d+)?([\.|,]\d+)?)(em|px)?$/)[1]||0);$('<span>&nbsp;</span>').width((action.match('px')?margin+'px':(margin*2)+'em')).addClass('ui-keyboard-button ui-keyboard-spacer').appendTo(newSet);}
if(/^meta\d+\:?(\w+)?/.test(action)){base.addKey(action,action);continue;}
switch(action){case'a':case'accept':base.addKey('accept',action).addClass(o.css.buttonAction);break;case'alt':case'altgr':base.addKey('alt','alt');break;case'b':case'bksp':base.addKey('bksp',action);break;case'c':case'cancel':base.addKey('cancel',action).addClass(o.css.buttonAction);break;case'combo':base.addKey('combo','combo').addClass(o.css.buttonAction);break;case'dec':base.acceptedKeys.push((base.decimal)?'.':',');base.addKey('dec','dec');break;case'e':case'enter':base.addKey('enter',action).addClass(o.css.buttonAction);break;case's':case'shift':base.addKey('shift',action);break;case'sign':base.acceptedKeys.push('-');base.addKey('sign','sign');break;case'space':base.acceptedKeys.push(' ');base.addKey('space','space');break;case't':case'tab':base.addKey('tab',action);break;default:if($.keyboard.keyaction.hasOwnProperty(action)){base.addKey(action,action)[isAction?'addClass':'removeClass'](o.css.buttonAction);}}}else{base.acceptedKeys.push(keys[key].split(':')[0]);base.addKey(keys[key],keys[key],true);}}
newSet.find('.ui-keyboard-button:last').after('<br class="ui-keyboard-button-endrow">');}}});if(sets>1){base.sets=true;}
base.hasMappedKeys=!($.isEmptyObject(base.mappedKeys));return container;};base.destroy=function(){$(document).unbind('mousedown.keyboard keyup.keyboard');if(base.$keyboard){base.$keyboard.remove();}
var unb=$.trim(o.openOn+' accepted beforeClose canceled change contextmenu hidden initialized keydown keypress keyup visible').split(' ').join('.keyboard ');base.$el.removeClass('ui-keyboard-input ui-keyboard-lockedinput ui-keyboard-placeholder ui-keyboard-notallowed ui-keyboard-always-open '+o.css.input).removeAttr('aria-haspopup').removeAttr('role').unbind(unb+'.keyboard').removeData('keyboard');};base.init();};$.keyboard.keyaction={accept:function(base){base.close(true);return false;},alt:function(base,el){base.altActive=!base.altActive;base.showKeySet(el);},bksp:function(base){base.insertText('bksp');},cancel:function(base){base.close();return false;},clear:function(base){base.$preview.val('');},combo:function(base){var c=!base.options.useCombos;base.options.useCombos=c;base.$keyboard.find('.ui-keyboard-combo')[(c)?'addClass':'removeClass'](base.options.css.buttonAction);if(c){base.checkCombos();}
return false;},dec:function(base){base.insertText((base.decimal)?'.':',');},enter:function(base,el,e){var tag=base.el.tagName,o=base.options;if(e.shiftKey){return(o.enterNavigation)?base.switchInput(!e[o.enterMod],true):base.close(true);}
if(o.enterNavigation&&(tag!=='TEXTAREA'||e[o.enterMod])){return base.switchInput(!e[o.enterMod],o.autoAccept?'true':false);}
if(tag==='TEXTAREA'&&$(e.target).closest('button').length){base.insertText(' \n');}},lock:function(base,el){base.lastKeyset[0]=base.shiftActive=base.capsLock=!base.capsLock;base.showKeySet(el);},meta:function(base,el){base.metaActive=($(el).hasClass(base.options.css.buttonAction))?false:true;base.showKeySet(el);},next:function(base){base.switchInput(true,base.options.autoAccept);return false;},prev:function(base){base.switchInput(false,base.options.autoAccept);return false;},shift:function(base,el){base.lastKeyset[0]=base.shiftActive=!base.shiftActive;base.showKeySet(el);},sign:function(base){if(/^\-?\d*\.?\d*$/.test(base.$preview.val())){base.$preview.val((base.$preview.val()*-1));}},space:function(base){base.insertText(' ');},tab:function(base){var tag=base.el.tagName,o=base.options;if(tag==='INPUT'){if(o.tabNavigation){return base.switchInput(!base.shiftActive,true);}else{return false;}}
base.insertText('\t');}};$.keyboard.layouts={'alpha':{'default':['` 1 2 3 4 5 6 7 8 9 0 - = {bksp}','{tab} a b c d e f g h i j [ ] \\','k l m n o p q r s ; \' {enter}','{shift} t u v w x y z , . / {shift}','{accept} {space} {cancel}'],'shift':['~ ! @ # $ % ^ & * ( ) _ + {bksp}','{tab} A B C D E F G H I J { } |','K L M N O P Q R S : " {enter}','{shift} T U V W X Y Z < > ? {shift}','{accept} {space} {cancel}']},'qwerty':{'default':['` 1 2 3 4 5 6 7 8 9 0 - = {bksp}','{tab} q w e r t y u i o p [ ] \\','a s d f g h j k l ; \' {enter}','{shift} z x c v b n m , . / {shift}','{accept} {space} {cancel}'],'shift':['~ ! @ # $ % ^ & * ( ) _ + {bksp}','{tab} Q W E R T Y U I O P { } |','A S D F G H J K L : " {enter}','{shift} Z X C V B N M < > ? {shift}','{accept} {space} {cancel}']},'international':{'default':['` 1 2 3 4 5 6 7 8 9 0 - = {bksp}','{tab} q w e r t y u i o p [ ] \\','a s d f g h j k l ; \' {enter}','{shift} z x c v b n m , . / {shift}','{accept} {alt} {space} {alt} {cancel}'],'shift':['~ ! @ # $ % ^ & * ( ) _ + {bksp}','{tab} Q W E R T Y U I O P { } |','A S D F G H J K L : " {enter}','{shift} Z X C V B N M < > ? {shift}','{accept} {alt} {space} {alt} {cancel}'],'alt':['~ \u00a1 \u00b2 \u00b3 \u00a4 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00d7 {bksp}','{tab} \u00e4 \u00e5 \u00e9 \u00ae \u00fe \u00fc \u00fa \u00ed \u00f3 \u00f6 \u00ab \u00bb \u00ac','\u00e1 \u00df \u00f0 f g h j k \u00f8 \u00b6 \u00b4 {enter}','{shift} \u00e6 x \u00a9 v b \u00f1 \u00b5 \u00e7 > \u00bf {shift}','{accept} {alt} {space} {alt} {cancel}'],'alt-shift':['~ \u00b9 \u00b2 \u00b3 \u00a3 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00f7 {bksp}','{tab} \u00c4 \u00c5 \u00c9 \u00ae \u00de \u00dc \u00da \u00cd \u00d3 \u00d6 \u00ab \u00bb \u00a6','\u00c4 \u00a7 \u00d0 F G H J K \u00d8 \u00b0 \u00a8 {enter}','{shift} \u00c6 X \u00a2 V B \u00d1 \u00b5 \u00c7 . \u00bf {shift}','{accept} {alt} {space} {alt} {cancel}']},'dvorak':{'default':['` 1 2 3 4 5 6 7 8 9 0 [ ] {bksp}','{tab} \' , . p y f g c r l / = \\','a o e u i d h t n s - {enter}','{shift} ; q j k x b m w v z {shift}','{accept} {space} {cancel}'],'shift':['~ ! @ # $ % ^ & * ( ) { } {bksp}','{tab} " < > P Y F G C R L ? + |','A O E U I D H T N S _ {enter}','{shift} : Q J K X B M W V Z {shift}','{accept} {space} {cancel}']},'num':{'default':['= ( ) {b}','{clear} / * -','7 8 9 +','4 5 6 {sign}','1 2 3 %','0 . {a} {c}']}};$.keyboard.defaultOptions={layout:'qwerty',customLayout:null,position:{of:null,my:'center top',at:'center top',at2:'center bottom'},usePreview:true,alwaysOpen:false,stayOpen:false,display:{'a':'\u2714:Accept (Shift-Enter)','accept':'Accept:Accept (Shift-Enter)','alt':'AltGr:Alternate Graphemes','b':'\u2190:Backspace','bksp':'Bksp:Backspace','c':'\u2716:Cancel (Esc)','cancel':'Cancel:Cancel (Esc)','clear':'C:Clear','combo':'\u00f6:Toggle Combo Keys','dec':'.:Decimal','e':'\u21b5:Enter','enter':'Enter:Enter','lock':'\u21ea Lock:Caps Lock','next':'Next','prev':'Prev','s':'\u21e7:Shift','shift':'Shift:Shift','sign':'\u00b1:Change Sign','space':'&nbsp;:Space','t':'\u21e5:Tab','tab':'\u21e5 Tab:Tab'},wheelMessage:'Use mousewheel to see other keys',css:{input:'ui-widget-content ui-corner-all',container:'ui-widget-content ui-widget ui-corner-all ui-helper-clearfix',buttonDefault:'ui-state-default ui-corner-all',buttonHover:'ui-state-hover',buttonAction:'ui-state-active',buttonDisabled:'ui-state-disabled'},autoAccept:false,lockInput:false,restrictInput:false,acceptValid:false,cancelClose:true,tabNavigation:false,enterNavigation:false,enterMod:'altKey',stopAtEnd:true,appendLocally:false,stickyShift:true,preventPaste:false,maxLength:false,repeatDelay:500,repeatRate:20,resetDefault:false,openOn:'focus',keyBinding:'mousedown',useCombos:true,combos:{'`':{a:"\u00e0",A:"\u00c0",e:"\u00e8",E:"\u00c8",i:"\u00ec",I:"\u00cc",o:"\u00f2",O:"\u00d2",u:"\u00f9",U:"\u00d9",y:"\u1ef3",Y:"\u1ef2"},"'":{a:"\u00e1",A:"\u00c1",e:"\u00e9",E:"\u00c9",i:"\u00ed",I:"\u00cd",o:"\u00f3",O:"\u00d3",u:"\u00fa",U:"\u00da",y:"\u00fd",Y:"\u00dd"},'"':{a:"\u00e4",A:"\u00c4",e:"\u00eb",E:"\u00cb",i:"\u00ef",I:"\u00cf",o:"\u00f6",O:"\u00d6",u:"\u00fc",U:"\u00dc",y:"\u00ff",Y:"\u0178"},'^':{a:"\u00e2",A:"\u00c2",e:"\u00ea",E:"\u00ca",i:"\u00ee",I:"\u00ce",o:"\u00f4",O:"\u00d4",u:"\u00fb",U:"\u00db",y:"\u0177",Y:"\u0176"},'~':{a:"\u00e3",A:"\u00c3",e:"\u1ebd",E:"\u1ebc",i:"\u0129",I:"\u0128",o:"\u00f5",O:"\u00d5",u:"\u0169",U:"\u0168",y:"\u1ef9",Y:"\u1ef8",n:"\u00f1",N:"\u00d1"}},validate:function(keyboard,value,isClosing){return true;}};$.keyboard.comboRegex=/([`\'~\^\"ao])([a-z])/mig;$.keyboard.currentKeyboard='';$.fn.keyboard=function(options){return this.each(function(){if(!$(this).data('keyboard')){(new $.keyboard(this,options));}});};$.fn.getkeyboard=function(){return this.data("keyboard");};})(jQuery);(function($,len,createRange,duplicate){$.fn.caret=function(options,opt2){if(typeof this[0]==='undefined'||this.is(':hidden')||this.css('visibility')==='hidden'){return this;}
var n,s,start,e,end,selRange,range,stored_range,te,val,selection=document.selection,t=this[0],sTop=t.scrollTop,opera=window.opera&&window.opera.toString()==='[object Opera]',ss=typeof t.selectionStart!=='undefined';if(typeof options==='number'&&typeof opt2==='number'){start=options;end=opt2;}
if(typeof start!=='undefined'){if(ss){if(t.tagName==='TEXTAREA'&&opera){val=this.val();n=val.substring(0,start).split('\n')[len]-1;start+=(n>0)?n:0;end+=(n>0)?n:0;}
t.selectionStart=start;t.selectionEnd=end;}else{selRange=t.createTextRange();selRange.collapse(true);selRange.moveStart('character',start);selRange.moveEnd('character',end-start);selRange.select();}
if(this.is(':visible')||this.css('visibility')!=='hidden'){this.focus();}
t.scrollTop=sTop;return this;}else{if(ss){s=t.selectionStart;e=t.selectionEnd;if(t.tagName==='TEXTAREA'&&opera){val=this.val();n=val.substring(0,s).split('\n')[len]-1;s+=(n>0)?-n:0;e+=(n>0)?-n:0;}}else{if(t.tagName==='TEXTAREA'){val=this.val();range=selection[createRange]();stored_range=range[duplicate]();stored_range.moveToElementText(t);stored_range.setEndPoint('EndToEnd',range);s=stored_range.text.replace(/\r\n/g,'\r')[len];e=s+range.text.replace(/\r\n/g,'\r')[len];}else{val=this.val().replace(/\r\n/g,'\r');range=selection[createRange]()[duplicate]();range.moveEnd('character',val[len]);s=(range.text===''?val[len]:val.lastIndexOf(range.text));range=selection[createRange]()[duplicate]();range.moveStart('character',-val[len]);e=range.text[len];}}
te=t.value.substring(s,e);return{start:s,end:e,text:te,replace:function(st){return t.value.substring(0,s)+st+t.value.substring(e,t.value[len]);}};}};})(jQuery,'length','createRange','duplicate');

var utils={myClone:function(what,opt){if(what.length==0)return false;if(!opt){var opt={};}
var settings=$.extend({where:false,baseName:'a',empty:true,changeName:true,cloneEvents:false,loaded:false,preserveEnhance:true},opt);var changeName=function(el){var name=el.attr('name');if(name){name=name.replace(new RegExp(settings.baseName,'g'),settings.baseName+'s'+rand+'e');el.attr('name',name);}}
var rand=(new Date()).getTime();if(settings.preserveEnhance){what.find(':input.multiselect, select, :input.combobox').each(function(i,el){enhance.pimpEl(el,'destroy');});}
what.each(function(i,el){el=$(el);if(!el.hasClass('cloned')){var cloned=el.clone(settings.cloneEvents);cloned.addClass('cloned');if(!cloned.is(':visible')){cloned.show();}
if(settings.empty||settings.changeName){if(cloned.is(':input')){if(settings.empty){cloned.val('');}
if(settings.changeName){changeName(cloned);}}else{cloned.find(':input').each(function(i,cl_el){if(settings.empty){$(cl_el).val('');}
if(settings.changeName){changeName($(cl_el));}});}}
var removeButton=$('<button />').attr('type','button').addClass('btn btn-default btn-sm').css('margin','10px 0').html('<i class="glyphicon glyphicon-minus"></i>').click(function(){$(this).parent('div.clonedContainer').remove();});var div=$('<div />').attr('class','clonedContainer').html(cloned).append(removeButton);if(!settings.where){el.after(div);}else{settings.where.append(div);}
if(settings.preserveEnhance){cloned.find(':input.multiselect, select, :input.combobox').each(function(i,el){enhance.pimpEl(el);});}
if(settings.loaded){settings.loaded(div);}}});if(settings.preserveEnhance){what.find(':input.multiselect, select, :input.combobox').each(function(i,el){enhance.pimpEl(el);});}},myKeyboard:function(el){var customLayouts={'default':['{meta1} {meta2} {meta3} {meta4} {meta5}','','\u00a0 \u00a1 \u00a2 \u00a3 \u00a4 \u00a5 \u00a6 \u00a7 \u00a8 \u00a9 \u00aa \u00ab \u00ac \u00ad \u00ae \u00af','{sp:1} \u00b0 \u00b1 \u00b2 \u00b3 \u00b4 \u00b5 \u00b6 \u00b7 \u00b8 \u00b9 \u00ba \u00bb \u00bc \u00bd \u00be \u00bf','\u00c0 \u00c1 \u00c2 \u00c3 \u00c4 \u00c5 \u00c6 \u00c7 \u00c8 \u00c9 \u00ca \u00cb \u00cc \u00cd \u00ce \u00cf','{sp:1} \u00d0 \u00d1 \u00d2 \u00d3 \u00d4 \u00d5 \u00d6 \u00d7 \u00d8 \u00d9 \u00da \u00db \u00dc \u00dd \u00de \u00df','\u00e0 \u00e1 \u00e2 \u00e3 \u00e4 \u00e5 \u00e6 \u00e7 \u00e8 \u00e9 \u00ea \u00eb \u00ec \u00ed \u00ee \u00ef','{sp:1} \u00f0 \u00f1 \u00f2 \u00f3 \u00f4 \u00f5 \u00f6 \u00f7 \u00f8 \u00f9 \u00fa \u00fb \u00fc \u00fd \u00fe \u00ff','\u0100 \u0101 \u0102 \u0103 \u0104 \u0105 \u0106 \u0107 \u0108 \u0109 \u010a \u010b \u010c \u010d \u010e \u010f','{sp:1} \u0110 \u0111 \u0112 \u0113 \u0114 \u0115 \u0116 \u0117 \u0118 \u0119 \u011a \u011b \u011c \u011d \u011e \u011f','\u0120 \u0121 \u0122 \u0123 \u0124 \u0125 \u0126 \u0127 \u0128 \u0129 \u012a \u012b \u012c \u012d \u012e \u012f','{sp:1} \u0130 \u0131 \u0132 \u0133 \u0134 \u0135 \u0136 \u0137 \u0138 \u0139 \u013a \u013b \u013c \u013d \u013e \u013f','\u0140 \u0141 \u0142 \u0143 \u0144 \u0145 \u0146 \u0147 \u0148 \u0149 \u014a \u014b \u014c \u014d \u014e \u014f','{sp:1} \u0150 \u0151 \u0152 \u0153 \u0154 \u0155 \u0156 \u0157 \u0158 \u0159 \u015a \u015b \u015c \u015d \u015e \u015f','\u0160 \u0161 \u0162 \u0163 \u0164 \u0165 \u0166 \u0167 \u0168 \u0169 \u016a \u016b \u016c \u016d \u016e \u016f','{sp:1} \u0170 \u0171 \u0172 \u0173 \u0174 \u0175 \u0176 \u0177 \u0178 \u0179 \u017a \u017b \u017c \u017d \u017e \u017f','','{a} {c}'],'meta1':['{meta1} {meta2} {meta3} {meta4} {meta5}','','\u0391 \u0392 \u0393 \u0394 \u0395 \u0396 \u0397 \u0398 \u0399 \u039A \u039B \u039C','\u039D \u039E \u039F \u03A0 \u03A1 \u03A3 \u03A4 \u03A5 \u03A6 \u03A7 \u03A8 \u03A9','','\u03B1 \u03B2 \u03B3 \u03B4 \u03B5 \u03B6 \u03B7 \u03B8 \u03B9 \u03BA \u03BB \u03BC','\u03BD \u03BE \u03BF \u03C0 \u03C1 \u03C2 \u03C3 \u03C4 \u03C5 \u03C6 \u03C7 \u03C8 \u03C9','','\u03AA \u03CA \u03AC \u03AD \u03AE \u03AF \u03CC \u03CD \u03CE \u03B0','','{a} {c}'],'meta2':['{meta1} {meta2} {meta3} {meta4} {meta5}','','\u03AB \u03D4 \u03D0 \u03D1 \u03D2 \u03D3 \u03D5 \u03D6 \u03D7 \u03D8 \u03D9 \u03DA \u03DB \u03DC','\u03DD \u03DE \u03DF \u03E0 \u03E1 \u03E2 \u03E3 \u03E4 \u03E5 \u03E6 \u03E7 \u03E8 \u03E9','\u03EA \u03EB \u03EC \u03ED \u03EE \u03EF \u03F0 \u03F1 \u03F2 \u03F3 \u03F4 \u03F5','\u03F6 \u03F7 \u03F8 \u03F9 \u03FA \u03FB \u03FC \u03FD \u03FE \u03FF','','{a} {c}'],'meta3':['{meta1} {meta2} {meta3} {meta4} {meta5}','','\u0621 \u0622 \u0623 \u0624 \u0625 \u0626 \u0627 \u0628 \u0629 \u0630 \u0631 \u0632 \u0633 \u0634','\u0635 \u0636 \u0637 \u0638 \u0639 \u0640 \u0641 \u0642 \u0643 \u0644 \u0645 \u0646 \u0647','\u0648 \u0649 \u0650 \u0651 \u0652 \u0653 \u0654 \u0655 \u0656 \u0657 \u0658 \u0659 \u0660','','{a} {c}'],'meta4':['{meta1} {meta2} {meta3} {meta4} {meta5}','','\u0250 \u0251 \u0252 \u0253 \u0254 \u0255 \u0256 \u0257 \u0258 \u0259 \u0260 \u0260 \u0261 \u0262','\u0263 \u0264 \u0265 \u0266 \u0267 \u0268 \u0269 \u0270 \u0270 \u0271 \u0272 \u0273 \u0274','\u0275 \u0276 \u0277 \u0278 \u0279 \u0280 \u02A0 \u02A1 \u02A2 \u02A3 \u02A4 \u02A5 \u02A6 \u02A7','\u02A8 \u02A9 \u02AA \u02AB \u02AC \u02AD \u02AE \u02AF \u025A \u026A \u027A \u028A \u029A','\u025B \u026A \u027B \u028B \u029B \u025C \u026C \u027C \u028C \u029C \u025D \u026D \u027D \u028D','\u029D \u025E \u026E \u027E \u028E \u029E \u025F \u026F \u027F \u028F \u029F','','{a} {c}'],'meta5':['{meta1} {meta2} {meta3} {meta4} {meta5}','','\u0300 \u0301 \u0302 \u0303 \u0304 \u0305 \u0306 \u0307 \u0308 \u0309 \u0310 \u0311 \u0312 \u0313 \u0314','\u0315 \u0316 \u0317 \u0318 \u0319 \u0320 \u0321 \u0322 \u0323 \u0324 \u0325 \u0326 \u0327 \u0328','\u0329 \u0330 \u0331 \u0332 \u0333 \u0334 \u0335 \u0336 \u0337 \u0338 \u0339 \u0340 \u0341 \u0342 \u0343','\u0344 \u0345 \u0346 \u0347 \u0348 \u0349 \u0350 \u0351 \u0352 \u0353 \u0354 \u0355 \u0356 \u0357','\u0358 \u0359 \u0360 \u0361 \u0362 \u0363 \u0364 \u0365 \u0366 \u0367 \u0368 \u0369 \u030A \u030B \u030C','\u030D \u030E \u030F \u031A \u031B \u031C \u031D \u031E \u031F \u032A \u032B \u032C \u032D \u032E','\u032F \u033A \u033B \u033C \u033D \u033E \u033F \u034A \u034B \u034C \u034D \u034E \u034F \u035A \u035B','\u035C \u035D \u035E \u035F \u036A \u036B \u036C \u036D \u036E \u036F','','{a} {c}']};$(el).keyboard({initialized:function(e,keyboard,el){keyboard.reveal();},accepted:function(e,keyboard,el){keyboard.destroy();$(el).attr('changed','auto');},canceled:function(e,keyboard,el){keyboard.destroy();},hidden:function(e,keyboard,el){keyboard.destroy();},layout:'custom',display:{'meta1':'Greek','meta2':'Coptic','meta3':'Arabic','meta4':'Phonetic','meta5':'Diacritics'},customLayout:customLayouts});}};

var core={runMod:function(mod,args,loaded){if(!args){args=[];}else if(typeof args=='string'){args=[args];}
if(typeof window[mod]=='object'&&!debugMode){window[mod]['init'].apply(null,args);}else{if(debugMode){var script='./modules/'+mod+'/'+mod+'.js';}else{var script='./modules/'+mod+'/'+mod+'.mini.js';}
$.getScript(script,function(data){window[mod]['init'].apply(null,args);if(loaded){loaded();}}).fail(function(jqxhr,settings,exception){console.log(exception);});}},loading:'<img src="./img/loader.gif"  alt="loading..." />',getJSON:function(obj,method,get,post,loaded){var URLstring='./controller.php?obj='+obj+'&method='+method;if(get){if(typeof get==='string'){URLstring+='&'+get;}else if($.isPlainObject(get)){URLstring+='&'+$.param(get);}else if($.isArray(get)){URLstring+='&param[]='+get.join('&param[]=');}}
if(!post){$.get(URLstring,loaded,'json');}else{$.post(URLstring,post,loaded,'json');}},open:function(opt,type){if(type=='modal'){layout.dialog.add(opt);}else{layout.tabs.add(opt);}},getHash:function(what){var hash=location.hash;if(hash.length!=0){hash=hash.substring(2).split('/');switch(what){case'app':return hash[0];break;case'mapId':if(hash[0]&&hash[1]=='map'&&hash[2]){return hash[2];}else{return false;}
break;case'queryId':if(hash[0]&&hash[1]=='query'&&hash[2]){return hash[2];}else{return false;}
break;case'chartId':if(hash[0]&&hash[1]=='chart'&&hash[2]){return hash[2];}else{return false;}
break;case'readId':if(hash[0]&&hash[1]&&hash[2]){return{app:hash[0],table:hash[1],id:hash[2],isIdField:hash[3]};}
break;default:return hash;break;}}else{return false;}},tr:function(string,args){if(!lang[string]){return string;}else{if(!args){return lang[string];}else{return vsprintf(lang[string],args);}}
return lang[string]?lang[string]:string;},message:function(text,type,sticky){$.pnotify({history:false,text:text,type:type?type:false,hide:sticky?false:true,styling:"bootstrap"});}};

(function($){var history_handle_top,timer,body,jwindow=$(window),styling={jqueryui:{container:"ui-widget ui-widget-content ui-corner-all",notice:"ui-state-highlight",notice_icon:"ui-icon ui-icon-info",info:"",info_icon:"ui-icon ui-icon-info",success:"ui-state-default",success_icon:"ui-icon ui-icon-circle-check",error:"ui-state-error",error_icon:"ui-icon ui-icon-alert",closer:"ui-icon ui-icon-close",pin_up:"ui-icon ui-icon-pin-w",pin_down:"ui-icon ui-icon-pin-s",hi_menu:"ui-state-default ui-corner-bottom",hi_btn:"ui-state-default ui-corner-all",hi_btnhov:"ui-state-hover",hi_hnd:"ui-icon ui-icon-grip-dotted-horizontal"},bootstrap:{container:"alert",notice:"alert-info",notice_icon:"glyphicon glyphicon-exclamation-sign",info:"alert-info",info_icon:"glyphicon glyphicon-info-sign",success:"alert-success",success_icon:"glyphicon glyphicon-ok-sign",error:"alert-danger",error_icon:"glyphicon glyphicon-warning-sign",closer:"glyphicon glyphicon-remove",pin_up:"glyphicon glyphicon-pause",pin_down:"glyphicon glyphicon-play",hi_menu:"well",hi_btn:"btn btn-default",hi_btnhov:"",hi_hnd:"glyphicon glyphicon-chevron-down"}};var do_when_ready=function(){body=$("body");jwindow=$(window);jwindow.bind('resize',function(){if(timer)
clearTimeout(timer);timer=setTimeout($.pnotify_position_all,10);});};if(document.body)
do_when_ready();else
$(do_when_ready);$.extend({pnotify_remove_all:function(){var notices_data=jwindow.data("pnotify");if(notices_data&&notices_data.length){$.each(notices_data,function(){if(this.pnotify_remove)
this.pnotify_remove();});}},pnotify_position_all:function(){if(timer)
clearTimeout(timer);timer=null;var notices_data=jwindow.data("pnotify");if(!notices_data||!notices_data.length)
return;$.each(notices_data,function(){var s=this.opts.stack;if(!s)return;s.nextpos1=s.firstpos1;s.nextpos2=s.firstpos2;s.addpos2=0;s.animation=true;});$.each(notices_data,function(){this.pnotify_position();});},pnotify:function(options){var animating;var opts;if(typeof options!="object"){opts=$.extend({},$.pnotify.defaults);opts.text=options;}else{opts=$.extend({},$.pnotify.defaults,options);}
for(var i in opts){if(typeof i=="string"&&i.match(/^pnotify_/))
opts[i.replace(/^pnotify_/,"")]=opts[i];}
if(opts.before_init){if(opts.before_init(opts)===false)
return null;}
var nonblock_last_elem;var nonblock_pass=function(e,e_name){pnotify.css("display","none");var element_below=document.elementFromPoint(e.clientX,e.clientY);pnotify.css("display","block");var jelement_below=$(element_below);var cursor_style=jelement_below.css("cursor");pnotify.css("cursor",cursor_style!="auto"?cursor_style:"default");if(!nonblock_last_elem||nonblock_last_elem.get(0)!=element_below){if(nonblock_last_elem){dom_event.call(nonblock_last_elem.get(0),"mouseleave",e.originalEvent);dom_event.call(nonblock_last_elem.get(0),"mouseout",e.originalEvent);}
dom_event.call(element_below,"mouseenter",e.originalEvent);dom_event.call(element_below,"mouseover",e.originalEvent);}
dom_event.call(element_below,e_name,e.originalEvent);nonblock_last_elem=jelement_below;};var styles=styling[opts.styling];var pnotify=$("<div />",{"class":"ui-pnotify "+opts.addclass,"css":{"display":"none"},"mouseenter":function(e){if(opts.nonblock)e.stopPropagation();if(opts.mouse_reset&&animating=="out"){pnotify.stop(true);animating="in";pnotify.css("height","auto").animate({"width":opts.width,"opacity":opts.nonblock?opts.nonblock_opacity:opts.opacity},"fast");}
if(opts.nonblock){pnotify.animate({"opacity":opts.nonblock_opacity},"fast");}
if(opts.hide&&opts.mouse_reset)pnotify.pnotify_cancel_remove();if(opts.sticker&&!opts.nonblock)pnotify.sticker.trigger("pnotify_icon").css("visibility","visible");if(opts.closer&&!opts.nonblock)pnotify.closer.css("visibility","visible");},"mouseleave":function(e){if(opts.nonblock)e.stopPropagation();nonblock_last_elem=null;pnotify.css("cursor","auto");if(opts.nonblock&&animating!="out")
pnotify.animate({"opacity":opts.opacity},"fast");if(opts.hide&&opts.mouse_reset)pnotify.pnotify_queue_remove();if(opts.sticker_hover)
pnotify.sticker.css("visibility","hidden");if(opts.closer_hover)
pnotify.closer.css("visibility","hidden");$.pnotify_position_all();},"mouseover":function(e){if(opts.nonblock)e.stopPropagation();},"mouseout":function(e){if(opts.nonblock)e.stopPropagation();},"mousemove":function(e){if(opts.nonblock){e.stopPropagation();nonblock_pass(e,"onmousemove");}},"mousedown":function(e){if(opts.nonblock){e.stopPropagation();e.preventDefault();nonblock_pass(e,"onmousedown");}},"mouseup":function(e){if(opts.nonblock){e.stopPropagation();e.preventDefault();nonblock_pass(e,"onmouseup");}},"click":function(e){if(opts.nonblock){e.stopPropagation();nonblock_pass(e,"onclick");}},"dblclick":function(e){if(opts.nonblock){e.stopPropagation();nonblock_pass(e,"ondblclick");}}});pnotify.opts=opts;pnotify.container=$("<div />",{"class":styles.container+" ui-pnotify-container "+(opts.type=="error"?styles.error:(opts.type=="info"?styles.info:(opts.type=="success"?styles.success:styles.notice)))}).appendTo(pnotify);if(opts.cornerclass!="")
pnotify.container.removeClass("ui-corner-all").addClass(opts.cornerclass);if(opts.shadow)
pnotify.container.addClass("ui-pnotify-shadow");pnotify.pnotify_version="1.2.0";pnotify.pnotify=function(options){var old_opts=opts;if(typeof options=="string")
opts.text=options;else
opts=$.extend({},opts,options);for(var i in opts){if(typeof i=="string"&&i.match(/^pnotify_/))
opts[i.replace(/^pnotify_/,"")]=opts[i];}
pnotify.opts=opts;if(opts.cornerclass!=old_opts.cornerclass)
pnotify.container.removeClass("ui-corner-all").addClass(opts.cornerclass);if(opts.shadow!=old_opts.shadow){if(opts.shadow)
pnotify.container.addClass("ui-pnotify-shadow");else
pnotify.container.removeClass("ui-pnotify-shadow");}
if(opts.addclass===false)
pnotify.removeClass(old_opts.addclass);else if(opts.addclass!==old_opts.addclass)
pnotify.removeClass(old_opts.addclass).addClass(opts.addclass);if(opts.title===false)
pnotify.title_container.slideUp("fast");else if(opts.title!==old_opts.title){if(opts.title_escape)
pnotify.title_container.text(opts.title).slideDown(200);else
pnotify.title_container.html(opts.title).slideDown(200);}
if(opts.text===false){pnotify.text_container.slideUp("fast");}else if(opts.text!==old_opts.text){if(opts.text_escape)
pnotify.text_container.text(opts.text).slideDown(200);else
pnotify.text_container.html(opts.insert_brs?String(opts.text).replace(/\n/g,"<br />"):opts.text).slideDown(200);}
pnotify.pnotify_history=opts.history;pnotify.pnotify_hide=opts.hide;if(opts.type!=old_opts.type)
pnotify.container.removeClass(styles.error+" "+styles.notice+" "+styles.success+" "+styles.info).addClass(opts.type=="error"?styles.error:(opts.type=="info"?styles.info:(opts.type=="success"?styles.success:styles.notice)));if(opts.icon!==old_opts.icon||(opts.icon===true&&opts.type!=old_opts.type)){pnotify.container.find("div.ui-pnotify-icon").remove();if(opts.icon!==false){$("<div />",{"class":"ui-pnotify-icon"}).append($("<span />",{"class":opts.icon===true?(opts.type=="error"?styles.error_icon:(opts.type=="info"?styles.info_icon:(opts.type=="success"?styles.success_icon:styles.notice_icon))):opts.icon})).prependTo(pnotify.container);}}
if(opts.width!==old_opts.width)
pnotify.animate({width:opts.width});if(opts.min_height!==old_opts.min_height)
pnotify.container.animate({minHeight:opts.min_height});if(opts.opacity!==old_opts.opacity)
pnotify.fadeTo(opts.animate_speed,opts.opacity);if(!opts.closer||opts.nonblock)
pnotify.closer.css("display","none");else
pnotify.closer.css("display","block");if(!opts.sticker||opts.nonblock)
pnotify.sticker.css("display","none");else
pnotify.sticker.css("display","block");pnotify.sticker.trigger("pnotify_icon");if(opts.sticker_hover)
pnotify.sticker.css("visibility","hidden");else if(!opts.nonblock)
pnotify.sticker.css("visibility","visible");if(opts.closer_hover)
pnotify.closer.css("visibility","hidden");else if(!opts.nonblock)
pnotify.closer.css("visibility","visible");if(!opts.hide)
pnotify.pnotify_cancel_remove();else if(!old_opts.hide)
pnotify.pnotify_queue_remove();pnotify.pnotify_queue_position();return pnotify;};pnotify.pnotify_position=function(dont_skip_hidden){var s=pnotify.opts.stack;if(!s)return;if(!s.nextpos1)
s.nextpos1=s.firstpos1;if(!s.nextpos2)
s.nextpos2=s.firstpos2;if(!s.addpos2)
s.addpos2=0;var hidden=pnotify.css("display")=="none";if(!hidden||dont_skip_hidden){var curpos1,curpos2;var animate={};var csspos1;switch(s.dir1){case"down":csspos1="top";break;case"up":csspos1="bottom";break;case"left":csspos1="right";break;case"right":csspos1="left";break;}
curpos1=parseInt(pnotify.css(csspos1));if(isNaN(curpos1))
curpos1=0;if(typeof s.firstpos1=="undefined"&&!hidden){s.firstpos1=curpos1;s.nextpos1=s.firstpos1;}
var csspos2;switch(s.dir2){case"down":csspos2="top";break;case"up":csspos2="bottom";break;case"left":csspos2="right";break;case"right":csspos2="left";break;}
curpos2=parseInt(pnotify.css(csspos2));if(isNaN(curpos2))
curpos2=0;if(typeof s.firstpos2=="undefined"&&!hidden){s.firstpos2=curpos2;s.nextpos2=s.firstpos2;}
if((s.dir1=="down"&&s.nextpos1+pnotify.height()>jwindow.height())||(s.dir1=="up"&&s.nextpos1+pnotify.height()>jwindow.height())||(s.dir1=="left"&&s.nextpos1+pnotify.width()>jwindow.width())||(s.dir1=="right"&&s.nextpos1+pnotify.width()>jwindow.width())){s.nextpos1=s.firstpos1;s.nextpos2+=s.addpos2+(typeof s.spacing2=="undefined"?25:s.spacing2);s.addpos2=0;}
if(s.animation&&s.nextpos2<curpos2){switch(s.dir2){case"down":animate.top=s.nextpos2+"px";break;case"up":animate.bottom=s.nextpos2+"px";break;case"left":animate.right=s.nextpos2+"px";break;case"right":animate.left=s.nextpos2+"px";break;}}else
pnotify.css(csspos2,s.nextpos2+"px");switch(s.dir2){case"down":case"up":if(pnotify.outerHeight(true)>s.addpos2)
s.addpos2=pnotify.height();break;case"left":case"right":if(pnotify.outerWidth(true)>s.addpos2)
s.addpos2=pnotify.width();break;}
if(s.nextpos1){if(s.animation&&(curpos1>s.nextpos1||animate.top||animate.bottom||animate.right||animate.left)){switch(s.dir1){case"down":animate.top=s.nextpos1+"px";break;case"up":animate.bottom=s.nextpos1+"px";break;case"left":animate.right=s.nextpos1+"px";break;case"right":animate.left=s.nextpos1+"px";break;}}else
pnotify.css(csspos1,s.nextpos1+"px");}
if(animate.top||animate.bottom||animate.right||animate.left)
pnotify.animate(animate,{duration:500,queue:false});switch(s.dir1){case"down":case"up":s.nextpos1+=pnotify.height()+(typeof s.spacing1=="undefined"?25:s.spacing1);break;case"left":case"right":s.nextpos1+=pnotify.width()+(typeof s.spacing1=="undefined"?25:s.spacing1);break;}}};pnotify.pnotify_queue_position=function(milliseconds){if(timer)
clearTimeout(timer);if(!milliseconds)
milliseconds=10;timer=setTimeout($.pnotify_position_all,milliseconds);};pnotify.pnotify_display=function(){if(!pnotify.parent().length)
pnotify.appendTo(body);if(opts.before_open){if(opts.before_open(pnotify)===false)
return;}
if(opts.stack.push!="top")
pnotify.pnotify_position(true);if(opts.animation=="fade"||opts.animation.effect_in=="fade"){pnotify.show().fadeTo(0,0).hide();}else{if(opts.opacity!=1)
pnotify.show().fadeTo(0,opts.opacity).hide();}
pnotify.animate_in(function(){if(opts.after_open)
opts.after_open(pnotify);pnotify.pnotify_queue_position();if(opts.hide)
pnotify.pnotify_queue_remove();});};pnotify.pnotify_remove=function(){if(pnotify.timer){window.clearTimeout(pnotify.timer);pnotify.timer=null;}
if(opts.before_close){if(opts.before_close(pnotify)===false)
return;}
pnotify.animate_out(function(){if(opts.after_close){if(opts.after_close(pnotify)===false)
return;}
pnotify.pnotify_queue_position();if(opts.remove)
pnotify.detach();});};pnotify.animate_in=function(callback){animating="in";var animation;if(typeof opts.animation.effect_in!="undefined")
animation=opts.animation.effect_in;else
animation=opts.animation;if(animation=="none"){pnotify.show();callback();}else if(animation=="show")
pnotify.show(opts.animate_speed,callback);else if(animation=="fade")
pnotify.show().fadeTo(opts.animate_speed,opts.opacity,callback);else if(animation=="slide")
pnotify.slideDown(opts.animate_speed,callback);else if(typeof animation=="function")
animation("in",callback,pnotify);else
pnotify.show(animation,(typeof opts.animation.options_in=="object"?opts.animation.options_in:{}),opts.animate_speed,callback);};pnotify.animate_out=function(callback){animating="out";var animation;if(typeof opts.animation.effect_out!="undefined")
animation=opts.animation.effect_out;else
animation=opts.animation;if(animation=="none"){pnotify.hide();callback();}else if(animation=="show")
pnotify.hide(opts.animate_speed,callback);else if(animation=="fade")
pnotify.fadeOut(opts.animate_speed,callback);else if(animation=="slide")
pnotify.slideUp(opts.animate_speed,callback);else if(typeof animation=="function")
animation("out",callback,pnotify);else
pnotify.hide(animation,(typeof opts.animation.options_out=="object"?opts.animation.options_out:{}),opts.animate_speed,callback);};pnotify.pnotify_cancel_remove=function(){if(pnotify.timer)
window.clearTimeout(pnotify.timer);};pnotify.pnotify_queue_remove=function(){pnotify.pnotify_cancel_remove();pnotify.timer=window.setTimeout(function(){pnotify.pnotify_remove();},(isNaN(opts.delay)?0:opts.delay));};pnotify.closer=$("<div />",{"class":"ui-pnotify-closer","css":{"cursor":"pointer","visibility":opts.closer_hover?"hidden":"visible"},"click":function(){pnotify.pnotify_remove();pnotify.sticker.css("visibility","hidden");pnotify.closer.css("visibility","hidden");}}).append($("<span />",{"class":styles.closer})).appendTo(pnotify.container);if(!opts.closer||opts.nonblock)
pnotify.closer.css("display","none");pnotify.sticker=$("<div />",{"class":"ui-pnotify-sticker","css":{"cursor":"pointer","visibility":opts.sticker_hover?"hidden":"visible"},"click":function(){opts.hide=!opts.hide;if(opts.hide)
pnotify.pnotify_queue_remove();else
pnotify.pnotify_cancel_remove();$(this).trigger("pnotify_icon");}}).bind("pnotify_icon",function(){$(this).children().removeClass(styles.pin_up+" "+styles.pin_down).addClass(opts.hide?styles.pin_up:styles.pin_down);}).append($("<span />",{"class":styles.pin_up})).appendTo(pnotify.container);if(!opts.sticker||opts.nonblock)
pnotify.sticker.css("display","none");if(opts.icon!==false){$("<div />",{"class":"ui-pnotify-icon"}).append($("<span />",{"class":opts.icon===true?(opts.type=="error"?styles.error_icon:(opts.type=="info"?styles.info_icon:(opts.type=="success"?styles.success_icon:styles.notice_icon))):opts.icon})).prependTo(pnotify.container);}
pnotify.title_container=$("<h4 />",{"class":"ui-pnotify-title"}).appendTo(pnotify.container);if(opts.title===false)
pnotify.title_container.hide();else if(opts.title_escape)
pnotify.title_container.text(opts.title);else
pnotify.title_container.html(opts.title);pnotify.text_container=$("<div />",{"class":"ui-pnotify-text"}).appendTo(pnotify.container);if(opts.text===false)
pnotify.text_container.hide();else if(opts.text_escape)
pnotify.text_container.text(opts.text);else
pnotify.text_container.html(opts.insert_brs?String(opts.text).replace(/\n/g,"<br />"):opts.text);if(typeof opts.width=="string")
pnotify.css("width",opts.width);if(typeof opts.min_height=="string")
pnotify.container.css("min-height",opts.min_height);pnotify.pnotify_history=opts.history;pnotify.pnotify_hide=opts.hide;var notices_data=jwindow.data("pnotify");if(notices_data==null||typeof notices_data!="object")
notices_data=[];if(opts.stack.push=="top")
notices_data=$.merge([pnotify],notices_data);else
notices_data=$.merge(notices_data,[pnotify]);jwindow.data("pnotify",notices_data);if(opts.stack.push=="top")
pnotify.pnotify_queue_position(1);if(opts.after_init)
opts.after_init(pnotify);if(opts.history){var history_menu=jwindow.data("pnotify_history");if(typeof history_menu=="undefined"){history_menu=$("<div />",{"class":"ui-pnotify-history-container "+styles.hi_menu,"mouseleave":function(){history_menu.animate({top:"-"+history_handle_top+"px"},{duration:100,queue:false});}}).append($("<div />",{"class":"ui-pnotify-history-header","text":"Redisplay"})).append($("<button />",{"class":"ui-pnotify-history-all "+styles.hi_btn,"text":"All","mouseenter":function(){$(this).addClass(styles.hi_btnhov);},"mouseleave":function(){$(this).removeClass(styles.hi_btnhov);},"click":function(){$.each(notices_data,function(){if(this.pnotify_history){if(this.is(":visible")){if(this.pnotify_hide)
this.pnotify_queue_remove();}else if(this.pnotify_display)
this.pnotify_display();}});return false;}})).append($("<button />",{"class":"ui-pnotify-history-last "+styles.hi_btn,"text":"Last","mouseenter":function(){$(this).addClass(styles.hi_btnhov);},"mouseleave":function(){$(this).removeClass(styles.hi_btnhov);},"click":function(){var i=-1;var notice;do{if(i==-1)
notice=notices_data.slice(i);else
notice=notices_data.slice(i,i+1);if(!notice[0])
break;i--;}while(!notice[0].pnotify_history||notice[0].is(":visible"));if(!notice[0])
return false;if(notice[0].pnotify_display)
notice[0].pnotify_display();return false;}})).appendTo(body);var handle=$("<span />",{"class":"ui-pnotify-history-pulldown "+styles.hi_hnd,"mouseenter":function(){history_menu.animate({top:"0"},{duration:100,queue:false});}}).appendTo(history_menu);history_handle_top=handle.offset().top+2;history_menu.css({top:"-"+history_handle_top+"px"});jwindow.data("pnotify_history",history_menu);}}
opts.stack.animation=false;pnotify.pnotify_display();return pnotify;}});var re_on=/^on/,re_mouse_events=/^(dbl)?click$|^mouse(move|down|up|over|out|enter|leave)$|^contextmenu$/,re_ui_events=/^(focus|blur|select|change|reset)$|^key(press|down|up)$/,re_html_events=/^(scroll|resize|(un)?load|abort|error)$/;var dom_event=function(e,orig_e){var event_object;e=e.toLowerCase();if(document.createEvent&&this.dispatchEvent){e=e.replace(re_on,'');if(e.match(re_mouse_events)){$(this).offset();event_object=document.createEvent("MouseEvents");event_object.initMouseEvent(e,orig_e.bubbles,orig_e.cancelable,orig_e.view,orig_e.detail,orig_e.screenX,orig_e.screenY,orig_e.clientX,orig_e.clientY,orig_e.ctrlKey,orig_e.altKey,orig_e.shiftKey,orig_e.metaKey,orig_e.button,orig_e.relatedTarget);}else if(e.match(re_ui_events)){event_object=document.createEvent("UIEvents");event_object.initUIEvent(e,orig_e.bubbles,orig_e.cancelable,orig_e.view,orig_e.detail);}else if(e.match(re_html_events)){event_object=document.createEvent("HTMLEvents");event_object.initEvent(e,orig_e.bubbles,orig_e.cancelable);}
if(!event_object)return;this.dispatchEvent(event_object);}else{if(!e.match(re_on))e="on"+e;event_object=document.createEventObject(orig_e);this.fireEvent(e,event_object);}};$.pnotify.defaults={title:false,title_escape:false,text:false,text_escape:false,styling:"bootstrap",addclass:"",cornerclass:"",nonblock:false,nonblock_opacity:.2,history:true,width:"300px",min_height:"16px",type:"notice",icon:true,animation:"fade",animate_speed:"slow",opacity:1,shadow:true,closer:true,closer_hover:true,sticker:true,sticker_hover:true,hide:true,delay:8000,mouse_reset:true,remove:true,insert_brs:true,stack:{"dir1":"down","dir2":"left","push":"bottom","spacing1":25,"spacing2":25}};})(jQuery);

var api={requireRestart:function(message){var html=(message?'<h3>'+message+'</h3>':'')
+'<p class="lead text-warning"><i class="glyphicon glyphicon-warning-sign"></i> '
+'<strong>'+core.tr('attention')+'</strong><br />'+core.tr('reload_sys_required')+'</p>';core.open({html:html,title:core.tr('attention'),buttons:[{text:core.tr('restart'),click:function(){api.reloadApp();}},{text:core.tr('cancel'),action:'close'}]},'modal');},reloadApp:function(clean){clean?window.location='./':window.location.reload();},logOut:function(){core.open({html:'<p class="text-warning"><i class="glyphicon glyphicon-exclamation-sign"></i> '+core.tr('logout_confirm_body')+'</p>',title:core.tr('logout_confirm_title'),buttons:[{text:core.tr('cancel'),action:'close'},{text:core.tr('close_application'),addclass:'btn-primary',click:function(){$.get('controller.php?obj=login_ctrl&method=out',function(data){window.location='./';});}}]},'modal');},showResults:function(tb,url_data,title,post_data){core.open({obj:'record_ctrl',method:'showResults',param:url_data?url_data+'&tb='+tb:false,post:post_data,title:title});},record:{showMatrix:function(tb,query){core.open({title:core.tr('harris_matrix'),obj:'matrix_ctrl',method:'show',param:{tb:tb,query:query},});},formatId:function(id_arr,is_idField){return is_idField?'id_field[]='+id_arr.join('&id_field[]='):'id[]='+id_arr.join('&id[]=');},preview:function(tb,id_arr){api.record.read(tb,id_arr);},read:function(tb,id_arr,is_idField){core.open({obj:'record_ctrl',method:'show',param:'tb='+tb+'&a=read',post:this.formatId(id_arr,is_idField),title:core.tr('read')+' ('+tb.split('__')[1]+' > '+(is_idField?'':'*')+id_arr[0]+')'});},edit:function(tb,id_arr){core.open({obj:'record_ctrl',method:'show',param:'tb='+tb+'&'+this.formatId(id_arr)+'&a=edit',title:core.tr('edit')+' ('+tb.split('__')[1]+')'});},erase:function(tb,id_arr,table_results){if(confirm(core.tr('confirm_delete'))){$.get('./controller.php?obj=record_ctrl&method=erase&'+this.formatId(id_arr)+'&tb='+tb,function(data){core.message(data.text,data.status);if(table_results){table_results.fnDraw();}else{layout.tabs.closeActive();}},'json');}},add:function(tb){core.open({obj:'record_ctrl',method:'show',param:'tb='+tb+'&a=add_new',title:core.tr('edit')+' ('+tb.split('__')[1]+')'});},toogleSelect:function(tableId){if($('#'+tableId+' tbody tr:first').hasClass('row_selected')){$('#'+tableId+' tbody tr').removeClass('row_selected');}else{$('#'+tableId+' tbody tr').addClass('row_selected');}},actOn:function(action,tb,table_results){if(action!='add'){var aTrs=table_results.fnGetNodes(),id_arr=[];for(var i=0;i<aTrs.length;i++)
{if($(aTrs[i]).hasClass('row_selected'))
{id_arr.push($(aTrs[i]).find('td:first').html());}}}
if(action!='add'&&!id_arr[0]){core.message(core.tr('select_row_to_continue'),'error');}else{switch(action){case'preview':this.preview(tb,id_arr);break;case'read':this.read(tb,id_arr);break;case'edit':this.edit(tb,id_arr);break;case'erase':this.erase(tb,id_arr,table_results);break;case'add':this.add(tb);break;default:return false;break;}}}},preview:function(img){var Img=new Image();Img.src=$(img).attr('src');var winH=$(window).height(),imgH=Img.height,H=(imgH>winH?winH:imgH)-20;Img.height=(H-30);Img.title=$(img).attr('title');$(Img).addClass('img-responsive');core.open({html:$('<a />').attr('href',Img.src).attr('target','_blank').append(Img),loaded:function(){$('.modal-body').css({'max-height':H});}},'modal');},query:{show:function(query_text){core.open({html:'<pre>'+decodeURIComponent(query_text.replace(/\+/g,' '))+'</pre>',title:core.tr('query_text'),buttons:[{text:core.tr('close'),action:'close'}]},'modal');},Export:function(query_text,tb){var html='<select class="export_format input-lg">'
+'<option value="JSON">JSON</option>'
+'<option value="XLS">XLS</option>'
+'<option value="SQL">SQL (INSERT)</option>'
+'<option value="CSV">CSV</option>'
+'<option value="HTML">HTML</option>'
+'<option value="XML">XML</option>'
+'</select>';core.open({html:html,title:core.tr('export_select_format'),buttons:[{text:core.tr('continue'),click:function(div){layout.dialog.close(div);$.post('controller.php?obj=myExport_ctrl&method=doExport&param[]='+tb+'&param[]='+$(div).find('select.export_format').val()+'&param[]='+query_text,function(data){core.message(data.text,data.status);core.runMod('myExport');},'json');}},{text:core.tr('cancel'),action:'close'}]},'modal');},save:function(query_text,tb){var input=$('<input />').attr('type','text').val('query_'+new Date().getTime()).css('width','90%');core.open({html:input,title:core.tr('name_for_query_to_save'),buttons:[{text:core.tr('save'),click:function(dia){if(input.val()==''){core.message(core.tr('query_name_is_required'),'error');input.focus();}else{$.post('controller.php?obj=saved_queries_ctrl&method=actions&param[]=save&param[]='+tb+'&param[]='+input.val()+'&param[]='+query_text,function(data){core.message(data.text,data.status);},'json');layout.dialog.close(dia);}}},{text:core.tr('close'),click:function(dia){layout.dialog.close(dia);}}]},'modal');}},file:{show_gallery:function(tb,id){core.open({obj:'file_ctrl',method:'gallery',param:{tb:tb,id:id},title:core.tr('file_gallery',[tb.split('__')[1]+'>'+id])});}},link:{add_ui:function(successFunction,closeFunction,select_one,def_tb){var div=$('<div />').append($('<div />').addClass('btn-group'),$('<div />').addClass('fl_content'),$('<input />').addClass('curr_tb').attr('type','hidden'));$.get('controller.php?obj=userlinks_ctrl&method=get_all_tables',function(data){if(data.status=='success'){if(!def_tb){$.each(data.info,function(tb,label){$('<a />').html(label).addClass('btn btn-default').click(function(){div.find('.fl_content').load('controller.php?obj=record_ctrl&method=showResults&noDblClick=1&force_array=1&tb='+tb+'&type=all&noOpts=1'+(select_one?'&select_one=true':''));div.find('input.curr_tb').val(tb);}).appendTo(div.find('.btn-group'));});}else{div.find('.fl_content').load('controller.php?obj=record_ctrl&method=showResults&force_array=1&tb='+def_tb+'&type=all&noOpts=1'+(select_one?'&select_one=true':''));div.find('input.curr_tb').val(def_tb);}
core.open({html:div,title:core.tr('new_link'),buttons:[{text:'<i class="glyphicon glyphicon-resize-small"></i> '+core.tr('save_links'),click:function(){var $this=$(this);var aTrs=$('#list_'+div.find('div.id-holder').data('id')).dataTable().fnGetNodes(),id_arr=new Array();for(var i=0;i<aTrs.length;i++){if($(aTrs[i]).hasClass('row_selected')){id_arr.push($(aTrs[i]).find('td:first').html());}}
if(select_one){if(div.find('table.results').length<1){core.message(core.tr('select_tb_to_continue'),'error');}
else if(!id_arr){core.message(core.tr('select_row_to_continue'),'error');}else{var tb=div.find('input.curr_tb').val();successFunction(tb,id_arr,$(this));}}else{if(!id_arr){core.message(core.tr('select_tb_to_continue'),'error');}
else if(!id_arr[0]){core.message(core.tr('select_row_to_continue'),'error');}else{var tb=div.find('input.curr_tb').val();successFunction(tb,id_arr,$(this));}}}},{text:core.tr('close'),action:'close'}]},'modal');}},'json');},delete_userlink:function(linkId,successFunction){core.getJSON('userlinks_ctrl','delete',[linkId],false,function(data){if(data.status=='success'&&successFunction){successFunction(data);}
core.message(data.text,data.status);});},show_userlinks:function(l_el){var l_context=l_el.data('context'),l_tb=l_el.data('tb'),l_id=l_el.data('id');l_el.html('').load('controller.php?obj=userlinks_ctrl&method=show&param[]='+l_tb+'&param[]='+l_id+'&param[]='+l_context,function(){$('span.userlink_read').click(function(){api.record.read($(this).data('tb'),[$(this).data('id')]);});$('span.userlink_delete').click(function(){var $this=$(this),delId=$this.data('id');api.link.delete_userlink(delId,function(){$this.parent('li').remove();});});$('span.userlink_reload').click(function(){api.link.show_userlinks(l_el);});$('span.userlink_add').click(function(){var thisid=$(this).data('id'),thistb=$(this).data('table');api.link.add_ui(function(tb,arr_id){core.getJSON('userlinks_ctrl','link',false,{thistb:thistb,thisid:thisid,tb:tb,id:arr_id},function(data){if(data.status=='success'){api.link.show_userlinks(l_el);}
core.message(data.text,data.status);});});});});}},fileUpload:function(el,url,opts){if(!opts){var opts={};}
if(!el||!url){return false;}
var d={request:{endpoint:url},autoUpload:true,text:{uploadButton:'<div><i class="glyphicon glyphicon-white glyphicon-upload"></i> '+(opts.button_text?opts.button_text:core.tr('click_drag_to_upload'))+'</div>',dragZone:core.tr('drop_to_upload')},template:'<div class="qq-uploader">'+'<pre class="qq-upload-drop-area"><span>{dragZoneText}</span></pre>'+'<div class="qq-upload-button btn btn-success" style="width: auto;">{uploadButtonText}</div>'+'<span class="qq-drop-processing"><span>{dropProcessingText}</span><span class="qq-drop-processing-spinner"></span></span>'+'<ul class="qq-upload-list" style="margin-top: 10px; text-align: center;"></ul>'+'</div>',classes:{success:'alert alert-success',fail:'alert alert-error'},validation:{allowedExtensions:(opts.limitExtensions?opts.limitExtensions:''),limitSize:(opts.limitSize?opts.limitSize:'')}};d.multiple=!opts.limit2one;el.fineUploader(d).on('complete',function(event,id,name,responseJSON){if(opts.complete){opts.complete(id,name,responseJSON);}}).on('error',function(event,id,name,reason){if(opts.error){opts.error(id,name,reason);}});}};

var layout={init:function(){$('<div />').attr('id','wrapper').appendTo('body');$(window).on('resize',function(){layout.setSize();});$(window).on('hashchange',function(e){layout.hashActions();});},loadHome:function(){var html='<div class="tabbable">'
+'<ul class="nav nav-tabs navbar-fixed-top" id="tabs" data-tabs="tabs">'
+'<li class="active"><a href="#home">BraDypUS v3</a></li>'
+'</ul>'
+'<div class="tab-content">'
+'<div class="tab-pane active" id="home"></div>'
+'</div>'
+'</div>';$('#wrapper').html(html);$('<button id="tabs_toggle" type="button" class="btn btn-primary" style="z-index:9999; position:fixed;top:0; right:0">'
+'<i class="icon-reorder"></span>'
+'</button>').appendTo($('#wrapper')).on('click',function(){$('#tabs').toggle();});$.get('controller.php?module=home/menu',function(data){$.get('./controller.php?module=home/table_menu&tb='+$($.parseHTML(data)).find('select.tb').val(),function(data2){$('#home').html(data);$('#home').find('li.tb_opt').html(data2);});},'html');$(document).delegate('select.tb','change',function(e){$(this).parent('li.tb').next('li.tb_opt').hide().load('./controller.php?module=home/table_menu&tb='+$(this).val()).fadeIn('slow');});$(document).delegate('input.fast_search','keyup',function(e){var code=(e.keyCode?e.keyCode:e.which);if(code==13){core.runMod('search',['fast',$(this).data('table'),$(this).val()]);}});layout.tabs.start('#tabs');$('<div />').attr('id','waiting_main').appendTo($('#wrapper')).hide().on('click',function(){$(this).hide();});$(document).ajaxStart(function(){$('#waiting_main').show();});$(document).ajaxStop(function(){$('#waiting_main').hide();});$(document).ajaxError(function(event,request,settings){if(request.statusText!='canceled'){$('#waiting_main').hide();core.message(core.tr('error_in_module',[settings.url]),'error',true);}});layout.setSize();},dialog:{add:function(opts){if($('#modal').length>0){layout.dialog.close($('#modal'));}
var dialog=$('<div />').attr('id','modal').addClass('modal fade').append('<div class="modal-dialog">'+'<div class="modal-content">'+
(opts.title?'<div class="modal-header"><h4>'+opts.title+'</h4></div>':'')+'</div>'+'</div>').appendTo('body');if(opts.width){dialog.css({width:opts.width,'margin-left':'-'+(opts.width/2)+'px'});}
var body=$('<div />').addClass('modal-body').appendTo(dialog.find('div.modal-content')),URLstring='controller.php?';if(opts.html){body.html(opts.html);if(opts.loaded){opts.loaded(body);}}else if(opts.obj&&opts.method){URLstring+='obj='+opts.obj+'&method='+opts.method;if(opts.param){if(typeof opts.param==='string'){URLstring+='&'+opts.param;}else if($.isPlainObject(opts.param)){URLstring+='&'+$.param(opts.param);}else if($.isArray(opts.param)){URLstring+='&param[]='+opts.param.join('&param[]=');}}
body.load(URLstring,opts.post,opts.loaded);}else{return false;}
if(opts.buttons&&typeof opts.buttons=='object'){var footer=$('<div />').addClass('modal-footer').appendTo(dialog.find('div.modal-content'));$.each(opts.buttons,function(index,but){var a=$('<a />').addClass('btn'+(but.addclass?' '+but.addclass:' btn-primary')).html(but.text);if(but.href){a.attr('href',but.href);}
if(but.click){if(but.click=='close'){a.attr('data-dismiss','modal');}else{a.click(function(){but.click(dialog);});}}
if(but.action=='close'){a.attr('data-dismiss','modal');}
a.appendTo(footer);});}
dialog.modal({'keyboard':true});dialog.on('hidden.bs.modal',function(){$('body').removeClass('modal-open');dialog.remove();});},close:function(dialog){if(dialog){dialog.modal('hide');}else{$('#modal').modal('hide');}}},tabs:{tab:'',start:function(el){if(typeof el=='string'){this.tab=tab=$(el);}else{this.tab=tab=el;}
tab.find('a').click(function(e){e.preventDefault();$(this).tab('show');});tab.find('button.close').click(function(e){var li=$(this).parents('li');layout.tabs.close(li);return false;});},add:function(opts){var title=opts.title?opts.title:'',tab=this.tab,id=Math.floor(Math.random()*1000)+''+tab.find('li').length,URLstring='controller.php?';this.tab.append('<li><a href="#added'+id+'">'+title+' <button class="close" type="button">×</button></a></li>');this.tab.next('div.tab-content').append('<div class="tab-pane" id="added'+id+'">'+core.loading+'</div>');this.tab.find('li a:last').tab('show');this.start(tab);if(opts.html){$('#added'+id).html(opts.html);if(opts.loaded){opts.loaded($('#added'+id));}}else if(opts.obj&&opts.method){URLstring+='obj='+opts.obj+'&method='+opts.method;if(opts.param){if(typeof opts.param==='string'){URLstring+='&'+opts.param;}else if($.isPlainObject(opts.param)){URLstring+='&'+$.param(opts.param);}else if($.isArray){URLstring+='&param[]='+opts.param.join('&param[]=');}}
$.ajax({'type':opts.post?'POST':'GET','url':URLstring,'data':opts.post}).done(function(data){$('#added'+id).html(data);if(opts.loaded){opts.loaded($('#added'+id));}});this.tab.find('li a:last').data('state',{obj:opts.obj,method:opts.method,param:opts.param});}else{return false;}},closeActive:function(){var active=tab.find('li.active');layout.tabs.close(active);},reloadActive:function(){var d_active=$('div.tab-content div.active'),opts=tab.find('li.active a').data('state');var url='controller.php?obj='+opts.obj+'&method='+opts.method;if(opts.param){if(typeof opts.param==='string'){url+='&'+opts.param;}else if($.isPlainObject(opts.param)){URurl+='&'+$.param(opts.param);}else if($.isArray){url+='&param[]='+opts.param.join('&param[]=');}}
d_active.html('<img src="./img/arrows-loader.gif" alt="loading..." />').load(url);},close:function(li){$('#'+li.find('a').attr('href').replace('#','')).remove();li.remove();if(li.hasClass('active')){tab.find('li a:last').tab('show');}}},setSize:function(){if($(window).width()<768){$('#tabs').hide();$('#tabs_toggle').show();}else{$('#tabs').show();$('#tabs_toggle').hide();}},hashActions:function(){if(core.getHash('mapId')){core.getJSON('saved_queries_ctrl','getById',[core.getHash('mapId')],false,function(data){if(data.status=='success'){core.runMod('geoface',[data.tb,data.text]);}});}else if(core.getHash('queryId')){core.getJSON('saved_queries_ctrl','getById',[core.getHash('queryId')],false,function(data){if(data.status==='success'){api.showResults(data.tb,'type=encoded&q_encoded='+data.text,core.tr('saved_queries')+' ('+data.tb+')');}else{core.message(core.tr('saved_query_does_not_exist',[core.getHash('queryId')]),'error',true);}});}else if(core.getHash('chartId')){core.runMod('chart',['showChart',core.getHash('chartId')]);}else if(core.getHash('readId')){var hash_data=core.getHash('readId');api.record.read(hash_data.app+'__'+hash_data.table,[hash_data.id],hash_data.isIdField);}}};

var qq=function(element){"use strict";return{hide:function(){element.style.display='none';return this;},attach:function(type,fn){if(element.addEventListener){element.addEventListener(type,fn,false);}else if(element.attachEvent){element.attachEvent('on'+type,fn);}
return function(){qq(element).detach(type,fn);};},detach:function(type,fn){if(element.removeEventListener){element.removeEventListener(type,fn,false);}else if(element.attachEvent){element.detachEvent('on'+type,fn);}
return this;},contains:function(descendant){if(element===descendant){return true;}
if(element.contains){return element.contains(descendant);}else{return!!(descendant.compareDocumentPosition(element)&8);}},insertBefore:function(elementB){elementB.parentNode.insertBefore(element,elementB);return this;},remove:function(){element.parentNode.removeChild(element);return this;},css:function(styles){if(styles.opacity!==null){if(typeof element.style.opacity!=='string'&&typeof(element.filters)!=='undefined'){styles.filter='alpha(opacity='+Math.round(100*styles.opacity)+')';}}
qq.extend(element.style,styles);return this;},hasClass:function(name){var re=new RegExp('(^| )'+name+'( |$)');return re.test(element.className);},addClass:function(name){if(!qq(element).hasClass(name)){element.className+=' '+name;}
return this;},removeClass:function(name){var re=new RegExp('(^| )'+name+'( |$)');element.className=element.className.replace(re,' ').replace(/^\s+|\s+$/g,"");return this;},getByClass:function(className){var candidates,result=[];if(element.querySelectorAll){return element.querySelectorAll('.'+className);}
candidates=element.getElementsByTagName("*");qq.each(candidates,function(idx,val){if(qq(val).hasClass(className)){result.push(val);}});return result;},children:function(){var children=[],child=element.firstChild;while(child){if(child.nodeType===1){children.push(child);}
child=child.nextSibling;}
return children;},setText:function(text){element.innerText=text;element.textContent=text;return this;},clearText:function(){return qq(element).setText("");}};};qq.log=function(message,level){"use strict";if(window.console){if(!level||level==='info'){window.console.log(message);}
else
{if(window.console[level]){window.console[level](message);}
else{window.console.log('<'+level+'> '+message);}}}};qq.isObject=function(variable){"use strict";return variable!==null&&variable&&typeof(variable)==="object"&&variable.constructor===Object;};qq.isFunction=function(variable){"use strict";return typeof(variable)==="function";};qq.isString=function(maybeString){"use strict";return Object.prototype.toString.call(maybeString)==='[object String]';};qq.trimStr=function(string){if(String.prototype.trim){return string.trim();}
return string.replace(/^\s+|\s+$/g,'');};qq.isFileOrInput=function(maybeFileOrInput){"use strict";if(qq.isBlob(maybeFileOrInput)&&window.File&&maybeFileOrInput instanceof File){return true;}
else if(window.HTMLInputElement){if(maybeFileOrInput instanceof HTMLInputElement){if(maybeFileOrInput.type&&maybeFileOrInput.type.toLowerCase()==='file'){return true;}}}
else if(maybeFileOrInput.tagName){if(maybeFileOrInput.tagName.toLowerCase()==='input'){if(maybeFileOrInput.type&&maybeFileOrInput.type.toLowerCase()==='file'){return true;}}}
return false;};qq.isBlob=function(maybeBlob){"use strict";return window.Blob&&maybeBlob instanceof Blob;};qq.isXhrUploadSupported=function(){"use strict";var input=document.createElement('input');input.type='file';return(input.multiple!==undefined&&typeof File!=="undefined"&&typeof FormData!=="undefined"&&typeof(new XMLHttpRequest()).upload!=="undefined");};qq.isFolderDropSupported=function(dataTransfer){"use strict";return(dataTransfer.items&&dataTransfer.items[0].webkitGetAsEntry);};qq.isFileChunkingSupported=function(){"use strict";return!qq.android()&&qq.isXhrUploadSupported()&&(File.prototype.slice||File.prototype.webkitSlice||File.prototype.mozSlice);};qq.extend=function(first,second,extendNested){"use strict";qq.each(second,function(prop,val){if(extendNested&&qq.isObject(val)){if(first[prop]===undefined){first[prop]={};}
qq.extend(first[prop],val,true);}
else{first[prop]=val;}});};qq.indexOf=function(arr,elt,from){"use strict";if(arr.indexOf){return arr.indexOf(elt,from);}
from=from||0;var len=arr.length;if(from<0){from+=len;}
for(;from<len;from+=1){if(arr.hasOwnProperty(from)&&arr[from]===elt){return from;}}
return-1;};qq.getUniqueId=function(){"use strict";return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8);return v.toString(16);});};qq.ie=function(){"use strict";return navigator.userAgent.indexOf('MSIE')!==-1;};qq.ie10=function(){"use strict";return navigator.userAgent.indexOf('MSIE 10')!==-1;};qq.safari=function(){"use strict";return navigator.vendor!==undefined&&navigator.vendor.indexOf("Apple")!==-1;};qq.chrome=function(){"use strict";return navigator.vendor!==undefined&&navigator.vendor.indexOf('Google')!==-1;};qq.firefox=function(){"use strict";return(navigator.userAgent.indexOf('Mozilla')!==-1&&navigator.vendor!==undefined&&navigator.vendor==='');};qq.windows=function(){"use strict";return navigator.platform==="Win32";};qq.android=function(){"use strict";return navigator.userAgent.toLowerCase().indexOf('android')!==-1;};qq.preventDefault=function(e){"use strict";if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}};qq.toElement=(function(){"use strict";var div=document.createElement('div');return function(html){div.innerHTML=html;var element=div.firstChild;div.removeChild(element);return element;};}());qq.each=function(obj,callback){"use strict";var key,retVal;if(obj){for(key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){retVal=callback(key,obj[key]);if(retVal===false){break;}}}}};qq.obj2url=function(obj,temp,prefixDone){"use strict";var i,len,uristrings=[],prefix='&',add=function(nextObj,i){var nextTemp=temp?(/\[\]$/.test(temp))?temp:temp+'['+i+']':i;if((nextTemp!=='undefined')&&(i!=='undefined')){uristrings.push((typeof nextObj==='object')?qq.obj2url(nextObj,nextTemp,true):(Object.prototype.toString.call(nextObj)==='[object Function]')?encodeURIComponent(nextTemp)+'='+encodeURIComponent(nextObj()):encodeURIComponent(nextTemp)+'='+encodeURIComponent(nextObj));}};if(!prefixDone&&temp){prefix=(/\?/.test(temp))?(/\?$/.test(temp))?'':'&':'?';uristrings.push(temp);uristrings.push(qq.obj2url(obj));}else if((Object.prototype.toString.call(obj)==='[object Array]')&&(typeof obj!=='undefined')){for(i=-1,len=obj.length;i<len;i+=1){add(obj[i],i);}}else if((typeof obj!=='undefined')&&(obj!==null)&&(typeof obj==="object")){for(i in obj){if(obj.hasOwnProperty(i)){add(obj[i],i);}}}else{uristrings.push(encodeURIComponent(temp)+'='+encodeURIComponent(obj));}
if(temp){return uristrings.join(prefix);}else{return uristrings.join(prefix).replace(/^&/,'').replace(/%20/g,'+');}};qq.obj2FormData=function(obj,formData,arrayKeyName){"use strict";if(!formData){formData=new FormData();}
qq.each(obj,function(key,val){key=arrayKeyName?arrayKeyName+'['+key+']':key;if(qq.isObject(val)){qq.obj2FormData(val,formData,key);}
else if(qq.isFunction(val)){formData.append(key,val());}
else{formData.append(key,val);}});return formData;};qq.obj2Inputs=function(obj,form){"use strict";var input;if(!form){form=document.createElement('form');}
qq.obj2FormData(obj,{append:function(key,val){input=document.createElement('input');input.setAttribute('name',key);input.setAttribute('value',val);form.appendChild(input);}});return form;};qq.setCookie=function(name,value,days){var date=new Date(),expires="";if(days){date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString();}
document.cookie=name+"="+value+expires+"; path=/";};qq.getCookie=function(name){var nameEQ=name+"=",ca=document.cookie.split(';'),c;for(var i=0;i<ca.length;i++){c=ca[i];while(c.charAt(0)==' '){c=c.substring(1,c.length);}
if(c.indexOf(nameEQ)===0){return c.substring(nameEQ.length,c.length);}}};qq.getCookieNames=function(regexp){var cookies=document.cookie.split(';'),cookieNames=[];qq.each(cookies,function(idx,cookie){cookie=qq.trimStr(cookie);var equalsIdx=cookie.indexOf("=");if(cookie.match(regexp)){cookieNames.push(cookie.substr(0,equalsIdx));}});return cookieNames;};qq.deleteCookie=function(name){qq.setCookie(name,"",-1);};qq.areCookiesEnabled=function(){var randNum=Math.random()*100000,name="qqCookieTest:"+randNum;qq.setCookie(name,1);if(qq.getCookie(name)){qq.deleteCookie(name);return true;}
return false;};qq.parseJson=function(json){if(window.JSON&&qq.isFunction(JSON.parse)){return JSON.parse(json);}else{return eval("("+json+")");}};qq.DisposeSupport=function(){"use strict";var disposers=[];return{dispose:function(){var disposer;do{disposer=disposers.shift();if(disposer){disposer();}}
while(disposer);},attach:function(){var args=arguments;this.addDisposer(qq(args[0]).attach.apply(this,Array.prototype.slice.call(arguments,1)));},addDisposer:function(disposeFunction){disposers.push(disposeFunction);}};};qq.Promise=function(){"use strict";var successValue,failureValue,successCallback,failureCallback,state=0;return{then:function(onSuccess,onFailure){if(state===0){successCallback=onSuccess;failureCallback=onFailure;}
else if(state===-1&&onFailure){onFailure(failureValue);}
else if(onSuccess){onSuccess(successValue);}},success:function(val){state=1;successValue=val;if(successCallback){successCallback(val);}
return this;},failure:function(val){state=-1;failureValue=val;if(failureCallback){failureCallback(val);}
return this;}};};qq.UploadButton=function(o){"use strict";var input,disposeSupport=new qq.DisposeSupport(),options={element:null,multiple:false,acceptFiles:null,name:'file',onChange:function(input){},hoverClass:'qq-upload-button-hover',focusClass:'qq-upload-button-focus'};function createInput(){var input=document.createElement("input");if(options.multiple){input.setAttribute("multiple","multiple");}
if(options.acceptFiles){input.setAttribute("accept",options.acceptFiles);}
input.setAttribute("type","file");input.setAttribute("name",options.name);qq(input).css({position:'absolute',right:0,top:0,fontFamily:'Arial',fontSize:'118px',margin:0,padding:0,cursor:'pointer',opacity:0});options.element.appendChild(input);disposeSupport.attach(input,'change',function(){options.onChange(input);});disposeSupport.attach(input,'mouseover',function(){qq(options.element).addClass(options.hoverClass);});disposeSupport.attach(input,'mouseout',function(){qq(options.element).removeClass(options.hoverClass);});disposeSupport.attach(input,'focus',function(){qq(options.element).addClass(options.focusClass);});disposeSupport.attach(input,'blur',function(){qq(options.element).removeClass(options.focusClass);});if(window.attachEvent){input.setAttribute('tabIndex',"-1");}
return input;}
qq.extend(options,o);qq(options.element).css({position:'relative',overflow:'hidden',direction:'ltr'});input=createInput();return{getInput:function(){return input;},reset:function(){if(input.parentNode){qq(input).remove();}
qq(options.element).removeClass(options.focusClass);input=createInput();}};};qq.PasteSupport=function(o){"use strict";var options,detachPasteHandler;options={targetElement:null,callbacks:{log:function(message,level){},pasteReceived:function(blob){}}};function isImage(item){return item.type&&item.type.indexOf("image/")===0;}
function registerPasteHandler(){qq(options.targetElement).attach("paste",function(event){var clipboardData=event.clipboardData;if(clipboardData){qq.each(clipboardData.items,function(idx,item){if(isImage(item)){var blob=item.getAsFile();options.callbacks.pasteReceived(blob);}});}});}
function unregisterPasteHandler(){if(detachPasteHandler){detachPasteHandler();}}
qq.extend(options,o);registerPasteHandler();return{reset:function(){unregisterPasteHandler();}};};qq.FineUploaderBasic=function(o){var that=this;this._options={debug:false,button:null,multiple:true,maxConnections:3,disableCancelForFormUploads:false,autoUpload:true,request:{endpoint:'/server/upload',params:{},paramsInBody:true,customHeaders:{},forceMultipart:true,inputName:'qqfile',uuidName:'qquuid',totalFileSizeName:'qqtotalfilesize'},validation:{allowedExtensions:[],sizeLimit:0,minSizeLimit:0,itemLimit:0,stopOnFirstInvalidFile:true},callbacks:{onSubmit:function(id,name){},onSubmitted:function(id,name){},onComplete:function(id,name,responseJSON){},onCancel:function(id,name){},onUpload:function(id,name){},onUploadChunk:function(id,name,chunkData){},onResume:function(id,fileName,chunkData){},onProgress:function(id,name,loaded,total){},onError:function(id,name,reason,maybeXhr){},onAutoRetry:function(id,name,attemptNumber){},onManualRetry:function(id,name){},onValidateBatch:function(fileOrBlobData){},onValidate:function(fileOrBlobData){},onSubmitDelete:function(id){},onDelete:function(id){},onDeleteComplete:function(id,xhr,isError){},onPasteReceived:function(blob){return new qq.Promise().success();}},messages:{typeError:"{file} has an invalid extension. Valid extension(s): {extensions}.",sizeError:"{file} is too large, maximum file size is {sizeLimit}.",minSizeError:"{file} is too small, minimum file size is {minSizeLimit}.",emptyError:"{file} is empty, please select files again without it.",noFilesError:"No files to upload.",tooManyItemsError:"Too many items ({netItems}) would be uploaded.  Item limit is {itemLimit}.",retryFailTooManyItems:"Retry failed - you have reached your file limit.",onLeave:"The files are being uploaded, if you leave now the upload will be cancelled."},retry:{enableAuto:false,maxAutoAttempts:3,autoAttemptDelay:5,preventRetryResponseProperty:'preventRetry'},classes:{buttonHover:'qq-upload-button-hover',buttonFocus:'qq-upload-button-focus'},chunking:{enabled:false,partSize:2000000,paramNames:{partIndex:'qqpartindex',partByteOffset:'qqpartbyteoffset',chunkSize:'qqchunksize',totalFileSize:'qqtotalfilesize',totalParts:'qqtotalparts',filename:'qqfilename'}},resume:{enabled:false,id:null,cookiesExpireIn:7,paramNames:{resuming:"qqresume"}},formatFileName:function(fileOrBlobName){if(fileOrBlobName.length>33){fileOrBlobName=fileOrBlobName.slice(0,19)+'...'+fileOrBlobName.slice(-14);}
return fileOrBlobName;},text:{sizeSymbols:['kB','MB','GB','TB','PB','EB']},deleteFile:{enabled:false,endpoint:'/server/upload',customHeaders:{},params:{}},cors:{expected:false,sendCredentials:false},blobs:{defaultName:'misc_data',paramNames:{name:'qqblobname'}},paste:{targetElement:null,defaultName:'pasted_image'}};qq.extend(this._options,o,true);this._wrapCallbacks();this._disposeSupport=new qq.DisposeSupport();this._filesInProgress=[];this._storedIds=[];this._autoRetries=[];this._retryTimeouts=[];this._preventRetries=[];this._netFilesUploadedOrQueued=0;this._paramsStore=this._createParamsStore("request");this._deleteFileParamsStore=this._createParamsStore("deleteFile");this._endpointStore=this._createEndpointStore("request");this._deleteFileEndpointStore=this._createEndpointStore("deleteFile");this._handler=this._createUploadHandler();this._deleteHandler=this._createDeleteHandler();if(this._options.button){this._button=this._createUploadButton(this._options.button);}
if(this._options.paste.targetElement){this._pasteHandler=this._createPasteHandler();}
this._preventLeaveInProgress();};qq.FineUploaderBasic.prototype={log:function(str,level){if(this._options.debug&&(!level||level==='info')){qq.log('[FineUploader] '+str);}
else if(level&&level!=='info'){qq.log('[FineUploader] '+str,level);}},setParams:function(params,id){if(id==null){this._options.request.params=params;}
else{this._paramsStore.setParams(params,id);}},setDeleteFileParams:function(params,id){if(id==null){this._options.deleteFile.params=params;}
else{this._deleteFileParamsStore.setParams(params,id);}},setEndpoint:function(endpoint,id){if(id==null){this._options.request.endpoint=endpoint;}
else{this._endpointStore.setEndpoint(endpoint,id);}},getInProgress:function(){return this._filesInProgress.length;},uploadStoredFiles:function(){"use strict";var idToUpload;while(this._storedIds.length){idToUpload=this._storedIds.shift();this._filesInProgress.push(idToUpload);this._handler.upload(idToUpload);}},clearStoredFiles:function(){this._storedIds=[];},retry:function(id){if(this._onBeforeManualRetry(id)){this._netFilesUploadedOrQueued++;this._handler.retry(id);return true;}
else{return false;}},cancel:function(id){this._handler.cancel(id);},cancelAll:function(){var storedIdsCopy=[],self=this;qq.extend(storedIdsCopy,this._storedIds);qq.each(storedIdsCopy,function(idx,storedFileId){self.cancel(storedFileId);});this._handler.cancelAll();},reset:function(){this.log("Resetting uploader...");this._handler.reset();this._filesInProgress=[];this._storedIds=[];this._autoRetries=[];this._retryTimeouts=[];this._preventRetries=[];this._button.reset();this._paramsStore.reset();this._endpointStore.reset();this._pasteHandler.reset();this._netFilesUploadedOrQueued=0;},addFiles:function(filesBlobDataOrInputs){var self=this,verifiedFilesOrInputs=[],index,fileOrInput;if(filesBlobDataOrInputs){if(!window.FileList||!(filesBlobDataOrInputs instanceof FileList)){filesBlobDataOrInputs=[].concat(filesBlobDataOrInputs);}
for(index=0;index<filesBlobDataOrInputs.length;index+=1){fileOrInput=filesBlobDataOrInputs[index];if(qq.isFileOrInput(fileOrInput)){verifiedFilesOrInputs.push(fileOrInput);}
else{self.log(fileOrInput+' is not a File or INPUT element!  Ignoring!','warn');}}
this.log('Processing '+verifiedFilesOrInputs.length+' files or inputs...');this._uploadFileOrBlobDataList(verifiedFilesOrInputs);}},addBlobs:function(blobDataOrArray){if(blobDataOrArray){var blobDataArray=[].concat(blobDataOrArray),verifiedBlobDataList=[],self=this;qq.each(blobDataArray,function(idx,blobData){if(qq.isBlob(blobData)&&!qq.isFileOrInput(blobData)){verifiedBlobDataList.push({blob:blobData,name:self._options.blobs.defaultName});}
else if(qq.isObject(blobData)&&blobData.blob&&blobData.name){verifiedBlobDataList.push(blobData);}
else{self.log("addBlobs: entry at index "+idx+" is not a Blob or a BlobData object","error");}});this._uploadFileOrBlobDataList(verifiedBlobDataList);}
else{this.log("undefined or non-array parameter passed into addBlobs","error");}},getUuid:function(id){return this._handler.getUuid(id);},getResumableFilesData:function(){return this._handler.getResumableFilesData();},getSize:function(id){return this._handler.getSize(id);},getName:function(id){return this._handler.getName(id);},getFile:function(fileOrBlobId){return this._handler.getFile(fileOrBlobId);},deleteFile:function(id){this._onSubmitDelete(id);},setDeleteFileEndpoint:function(endpoint,id){if(id==null){this._options.deleteFile.endpoint=endpoint;}
else{this._deleteFileEndpointStore.setEndpoint(endpoint,id);}},getPromissoryCallbackNames:function(){return["onPasteReceived"];},_createUploadButton:function(element){var self=this;var button=new qq.UploadButton({element:element,multiple:this._options.multiple&&qq.isXhrUploadSupported(),acceptFiles:this._options.validation.acceptFiles,onChange:function(input){self._onInputChange(input);},hoverClass:this._options.classes.buttonHover,focusClass:this._options.classes.buttonFocus});this._disposeSupport.addDisposer(function(){button.dispose();});return button;},_createUploadHandler:function(){var self=this;return new qq.UploadHandler({debug:this._options.debug,forceMultipart:this._options.request.forceMultipart,maxConnections:this._options.maxConnections,customHeaders:this._options.request.customHeaders,inputName:this._options.request.inputName,uuidParamName:this._options.request.uuidName,totalFileSizeParamName:this._options.request.totalFileSizeName,cors:this._options.cors,demoMode:this._options.demoMode,paramsInBody:this._options.request.paramsInBody,paramsStore:this._paramsStore,endpointStore:this._endpointStore,chunking:this._options.chunking,resume:this._options.resume,blobs:this._options.blobs,log:function(str,level){self.log(str,level);},onProgress:function(id,name,loaded,total){self._onProgress(id,name,loaded,total);self._options.callbacks.onProgress(id,name,loaded,total);},onComplete:function(id,name,result,xhr){self._onComplete(id,name,result,xhr);self._options.callbacks.onComplete(id,name,result);},onCancel:function(id,name){self._onCancel(id,name);self._options.callbacks.onCancel(id,name);},onUpload:function(id,name){self._onUpload(id,name);self._options.callbacks.onUpload(id,name);},onUploadChunk:function(id,name,chunkData){self._options.callbacks.onUploadChunk(id,name,chunkData);},onResume:function(id,name,chunkData){return self._options.callbacks.onResume(id,name,chunkData);},onAutoRetry:function(id,name,responseJSON,xhr){self._preventRetries[id]=responseJSON[self._options.retry.preventRetryResponseProperty];if(self._shouldAutoRetry(id,name,responseJSON)){self._maybeParseAndSendUploadError(id,name,responseJSON,xhr);self._options.callbacks.onAutoRetry(id,name,self._autoRetries[id]+1);self._onBeforeAutoRetry(id,name);self._retryTimeouts[id]=setTimeout(function(){self._onAutoRetry(id,name,responseJSON)},self._options.retry.autoAttemptDelay*1000);return true;}
else{return false;}}});},_createDeleteHandler:function(){var self=this;return new qq.DeleteFileAjaxRequestor({maxConnections:this._options.maxConnections,customHeaders:this._options.deleteFile.customHeaders,paramsStore:this._deleteFileParamsStore,endpointStore:this._deleteFileEndpointStore,demoMode:this._options.demoMode,cors:this._options.cors,log:function(str,level){self.log(str,level);},onDelete:function(id){self._onDelete(id);self._options.callbacks.onDelete(id);},onDeleteComplete:function(id,xhr,isError){self._onDeleteComplete(id,xhr,isError);self._options.callbacks.onDeleteComplete(id,xhr,isError);}});},_createPasteHandler:function(){var self=this;return new qq.PasteSupport({targetElement:this._options.paste.targetElement,callbacks:{log:function(str,level){self.log(str,level);},pasteReceived:function(blob){var pasteReceivedCallback=self._options.callbacks.onPasteReceived,promise=pasteReceivedCallback(blob);if(promise.then){promise.then(function(successData){self._handlePasteSuccess(blob,successData);},function(failureData){self.log("Ignoring pasted image per paste received callback.  Reason = '"+failureData+"'");});}
else{self.log("Promise contract not fulfilled in pasteReceived callback handler!  Ignoring pasted item.","error");}}}});},_handlePasteSuccess:function(blob,extSuppliedName){var extension=blob.type.split("/")[1],name=extSuppliedName;if(name==null){name=this._options.paste.defaultName;}
name+='.'+extension;this.addBlobs({name:name,blob:blob});},_preventLeaveInProgress:function(){var self=this;this._disposeSupport.attach(window,'beforeunload',function(e){if(!self._filesInProgress.length){return;}
var e=e||window.event;e.returnValue=self._options.messages.onLeave;return self._options.messages.onLeave;});},_onSubmit:function(id,name){this._netFilesUploadedOrQueued++;if(this._options.autoUpload){this._filesInProgress.push(id);}},_onProgress:function(id,name,loaded,total){},_onComplete:function(id,name,result,xhr){if(!result.success){this._netFilesUploadedOrQueued--;}
this._removeFromFilesInProgress(id);this._maybeParseAndSendUploadError(id,name,result,xhr);},_onCancel:function(id,name){this._netFilesUploadedOrQueued--;this._removeFromFilesInProgress(id);clearTimeout(this._retryTimeouts[id]);var storedItemIndex=qq.indexOf(this._storedIds,id);if(!this._options.autoUpload&&storedItemIndex>=0){this._storedIds.splice(storedItemIndex,1);}},_isDeletePossible:function(){return(this._options.deleteFile.enabled&&(!this._options.cors.expected||(this._options.cors.expected&&(qq.ie10()||!qq.ie()))));},_onSubmitDelete:function(id){if(this._isDeletePossible()){if(this._options.callbacks.onSubmitDelete(id)!==false){this._deleteHandler.sendDelete(id,this.getUuid(id));}}
else{this.log("Delete request ignored for ID "+id+", delete feature is disabled or request not possible "+"due to CORS on a user agent that does not support pre-flighting.","warn");return false;}},_onDelete:function(fileId){},_onDeleteComplete:function(id,xhr,isError){var name=this._handler.getName(id);if(isError){this.log("Delete request for '"+name+"' has failed.","error");this._options.callbacks.onError(id,name,"Delete request failed with response code "+xhr.status,xhr);}
else{this._netFilesUploadedOrQueued--;this.log("Delete request for '"+name+"' has succeeded.");}},_removeFromFilesInProgress:function(id){var index=qq.indexOf(this._filesInProgress,id);if(index>=0){this._filesInProgress.splice(index,1);}},_onUpload:function(id,name){},_onInputChange:function(input){if(qq.isXhrUploadSupported()){this.addFiles(input.files);}else{this.addFiles(input);}
this._button.reset();},_onBeforeAutoRetry:function(id,name){this.log("Waiting "+this._options.retry.autoAttemptDelay+" seconds before retrying "+name+"...");},_onAutoRetry:function(id,name,responseJSON){this.log("Retrying "+name+"...");this._autoRetries[id]++;this._handler.retry(id);},_shouldAutoRetry:function(id,name,responseJSON){if(!this._preventRetries[id]&&this._options.retry.enableAuto){if(this._autoRetries[id]===undefined){this._autoRetries[id]=0;}
return this._autoRetries[id]<this._options.retry.maxAutoAttempts;}
return false;},_onBeforeManualRetry:function(id){var itemLimit=this._options.validation.itemLimit;if(this._preventRetries[id]){this.log("Retries are forbidden for id "+id,'warn');return false;}
else if(this._handler.isValid(id)){var fileName=this._handler.getName(id);if(this._options.callbacks.onManualRetry(id,fileName)===false){return false;}
if(itemLimit>0&&this._netFilesUploadedOrQueued+1>itemLimit){this._itemError("retryFailTooManyItems","");return false;}
this.log("Retrying upload for '"+fileName+"' (id: "+id+")...");this._filesInProgress.push(id);return true;}
else{this.log("'"+id+"' is not a valid file ID",'error');return false;}},_maybeParseAndSendUploadError:function(id,name,response,xhr){if(!response.success){if(xhr&&xhr.status!==200&&!response.error){this._options.callbacks.onError(id,name,"XHR returned response code "+xhr.status,xhr);}
else{var errorReason=response.error?response.error:"Upload failure reason unknown";this._options.callbacks.onError(id,name,errorReason,xhr);}}},_uploadFileOrBlobDataList:function(fileOrBlobDataList){var index,validationDescriptors=this._getValidationDescriptors(fileOrBlobDataList),batchValid=this._isBatchValid(validationDescriptors);if(batchValid){if(fileOrBlobDataList.length>0){for(index=0;index<fileOrBlobDataList.length;index++){if(this._validateFileOrBlobData(fileOrBlobDataList[index])){this._upload(fileOrBlobDataList[index]);}else{if(this._options.validation.stopOnFirstInvalidFile){return;}}}}
else{this._itemError("noFilesError","");}}},_upload:function(blobOrFileContainer){var id=this._handler.add(blobOrFileContainer);var name=this._handler.getName(id);if(this._options.callbacks.onSubmit(id,name)!==false){this._onSubmit(id,name);this._options.callbacks.onSubmitted(id,name);if(this._options.autoUpload){this._handler.upload(id);}
else{this._storeForLater(id);}}},_storeForLater:function(id){this._storedIds.push(id);},_isBatchValid:function(validationDescriptors){var errorMessage,itemLimit=this._options.validation.itemLimit,proposedNetFilesUploadedOrQueued=this._netFilesUploadedOrQueued+validationDescriptors.length,batchValid=this._options.callbacks.onValidateBatch(validationDescriptors)!==false;if(batchValid){if(itemLimit===0||proposedNetFilesUploadedOrQueued<=itemLimit){batchValid=true;}
else{batchValid=false;errorMessage=this._options.messages.tooManyItemsError.replace(/\{netItems\}/g,proposedNetFilesUploadedOrQueued).replace(/\{itemLimit\}/g,itemLimit);this._batchError(errorMessage);}}
return batchValid;},_validateFileOrBlobData:function(fileOrBlobData){var validationDescriptor,name,size;validationDescriptor=this._getValidationDescriptor(fileOrBlobData);name=validationDescriptor.name;size=validationDescriptor.size;if(this._options.callbacks.onValidate(validationDescriptor)===false){return false;}
if(qq.isFileOrInput(fileOrBlobData)&&!this._isAllowedExtension(name)){this._itemError('typeError',name);return false;}
else if(size===0){this._itemError('emptyError',name);return false;}
else if(size&&this._options.validation.sizeLimit&&size>this._options.validation.sizeLimit){this._itemError('sizeError',name);return false;}
else if(size&&size<this._options.validation.minSizeLimit){this._itemError('minSizeError',name);return false;}
return true;},_itemError:function(code,name){var message=this._options.messages[code],allowedExtensions=[],extensionsForMessage;function r(name,replacement){message=message.replace(name,replacement);}
qq.each(this._options.validation.allowedExtensions,function(idx,allowedExtension){if(qq.isString(allowedExtension)){allowedExtensions.push(allowedExtension);}});extensionsForMessage=allowedExtensions.join(', ').toLowerCase();r('{file}',this._options.formatFileName(name));r('{extensions}',extensionsForMessage);r('{sizeLimit}',this._formatSize(this._options.validation.sizeLimit));r('{minSizeLimit}',this._formatSize(this._options.validation.minSizeLimit));this._options.callbacks.onError(null,name,message);return message;},_batchError:function(message){this._options.callbacks.onError(null,null,message);},_isAllowedExtension:function(fileName){var allowed=this._options.validation.allowedExtensions,valid=false;if(!allowed.length){return true;}
qq.each(allowed,function(idx,allowedExt){if(qq.isString(allowedExt)){var extRegex=new RegExp('\\.'+allowedExt+"$",'i');if(fileName.match(extRegex)!=null){valid=true;return false;}}});return valid;},_formatSize:function(bytes){var i=-1;do{bytes=bytes/1024;i++;}while(bytes>99);return Math.max(bytes,0.1).toFixed(1)+this._options.text.sizeSymbols[i];},_wrapCallbacks:function(){var self,safeCallback;self=this;safeCallback=function(name,callback,args){try{return callback.apply(self,args);}
catch(exception){self.log("Caught exception in '"+name+"' callback - "+exception.message,'error');}};for(var prop in this._options.callbacks){(function(){var callbackName,callbackFunc;callbackName=prop;callbackFunc=self._options.callbacks[callbackName];self._options.callbacks[callbackName]=function(){return safeCallback(callbackName,callbackFunc,arguments);};}());}},_parseFileOrBlobDataName:function(fileOrBlobData){var name;if(qq.isFileOrInput(fileOrBlobData)){if(fileOrBlobData.value){name=fileOrBlobData.value.replace(/.*(\/|\\)/,"");}else{name=(fileOrBlobData.fileName!==null&&fileOrBlobData.fileName!==undefined)?fileOrBlobData.fileName:fileOrBlobData.name;}}
else{name=fileOrBlobData.name;}
return name;},_parseFileOrBlobDataSize:function(fileOrBlobData){var size;if(qq.isFileOrInput(fileOrBlobData)){if(!fileOrBlobData.value){size=(fileOrBlobData.fileSize!==null&&fileOrBlobData.fileSize!==undefined)?fileOrBlobData.fileSize:fileOrBlobData.size;}}
else{size=fileOrBlobData.blob.size;}
return size;},_getValidationDescriptor:function(fileOrBlobData){var name,size,fileDescriptor;fileDescriptor={};name=this._parseFileOrBlobDataName(fileOrBlobData);size=this._parseFileOrBlobDataSize(fileOrBlobData);fileDescriptor.name=name;if(size){fileDescriptor.size=size;}
return fileDescriptor;},_getValidationDescriptors:function(files){var self=this,fileDescriptors=[];qq.each(files,function(idx,file){fileDescriptors.push(self._getValidationDescriptor(file));});return fileDescriptors;},_createParamsStore:function(type){var paramsStore={},self=this;return{setParams:function(params,id){var paramsCopy={};qq.extend(paramsCopy,params);paramsStore[id]=paramsCopy;},getParams:function(id){var paramsCopy={};if(id!=null&&paramsStore[id]){qq.extend(paramsCopy,paramsStore[id]);}
else{qq.extend(paramsCopy,self._options[type].params);}
return paramsCopy;},remove:function(fileId){return delete paramsStore[fileId];},reset:function(){paramsStore={};}};},_createEndpointStore:function(type){var endpointStore={},self=this;return{setEndpoint:function(endpoint,id){endpointStore[id]=endpoint;},getEndpoint:function(id){if(id!=null&&endpointStore[id]){return endpointStore[id];}
return self._options[type].endpoint;},remove:function(fileId){return delete endpointStore[fileId];},reset:function(){endpointStore={};}};}};qq.DragAndDrop=function(o){"use strict";var options,dz,dirPending,droppedFiles=[],droppedEntriesCount=0,droppedEntriesParsedCount=0,disposeSupport=new qq.DisposeSupport();options={dropArea:null,extraDropzones:[],hideDropzones:true,multiple:true,classes:{dropActive:null},callbacks:{dropProcessing:function(isProcessing,files){},error:function(code,filename){},log:function(message,level){}}};qq.extend(options,o);function maybeUploadDroppedFiles(){if(droppedEntriesCount===droppedEntriesParsedCount&&!dirPending){options.callbacks.log('Grabbed '+droppedFiles.length+" files after tree traversal.");dz.dropDisabled(false);options.callbacks.dropProcessing(false,droppedFiles);}}
function addDroppedFile(file){droppedFiles.push(file);droppedEntriesParsedCount+=1;maybeUploadDroppedFiles();}
function traverseFileTree(entry){var dirReader,i;droppedEntriesCount+=1;if(entry.isFile){entry.file(function(file){addDroppedFile(file);});}
else if(entry.isDirectory){dirPending=true;dirReader=entry.createReader();dirReader.readEntries(function(entries){droppedEntriesParsedCount+=1;for(i=0;i<entries.length;i+=1){traverseFileTree(entries[i]);}
dirPending=false;if(!entries.length){maybeUploadDroppedFiles();}});}}
function handleDataTransfer(dataTransfer){var i,items,entry;options.callbacks.dropProcessing(true);dz.dropDisabled(true);if(dataTransfer.files.length>1&&!options.multiple){options.callbacks.dropProcessing(false);options.callbacks.error('tooManyFilesError',"");dz.dropDisabled(false);}
else{droppedFiles=[];droppedEntriesCount=0;droppedEntriesParsedCount=0;if(qq.isFolderDropSupported(dataTransfer)){items=dataTransfer.items;for(i=0;i<items.length;i+=1){entry=items[i].webkitGetAsEntry();if(entry){if(entry.isFile){droppedFiles.push(items[i].getAsFile());if(i===items.length-1){maybeUploadDroppedFiles();}}
else{traverseFileTree(entry);}}}}
else{options.callbacks.dropProcessing(false,dataTransfer.files);dz.dropDisabled(false);}}}
function setupDropzone(dropArea){dz=new qq.UploadDropZone({element:dropArea,onEnter:function(e){qq(dropArea).addClass(options.classes.dropActive);e.stopPropagation();},onLeaveNotDescendants:function(e){qq(dropArea).removeClass(options.classes.dropActive);},onDrop:function(e){if(options.hideDropzones){qq(dropArea).hide();}
qq(dropArea).removeClass(options.classes.dropActive);handleDataTransfer(e.dataTransfer);}});disposeSupport.addDisposer(function(){dz.dispose();});if(options.hideDropzones){qq(dropArea).hide();}}
function isFileDrag(dragEvent){var fileDrag;qq.each(dragEvent.dataTransfer.types,function(key,val){if(val==='Files'){fileDrag=true;return false;}});return fileDrag;}
function setupDragDrop(){if(options.dropArea){options.extraDropzones.push(options.dropArea);}
var i,dropzones=options.extraDropzones;for(i=0;i<dropzones.length;i+=1){setupDropzone(dropzones[i]);}
if(options.dropArea&&(!qq.ie()||qq.ie10())){disposeSupport.attach(document,'dragenter',function(e){if(!dz.dropDisabled()&&isFileDrag(e)){if(qq(options.dropArea).hasClass(options.classes.dropDisabled)){return;}
options.dropArea.style.display='block';for(i=0;i<dropzones.length;i+=1){dropzones[i].style.display='block';}}});}
disposeSupport.attach(document,'dragleave',function(e){if(options.hideDropzones&&qq.FineUploader.prototype._leaving_document_out(e)){for(i=0;i<dropzones.length;i+=1){qq(dropzones[i]).hide();}}});disposeSupport.attach(document,'drop',function(e){if(options.hideDropzones){for(i=0;i<dropzones.length;i+=1){qq(dropzones[i]).hide();}}
e.preventDefault();});}
return{setup:function(){setupDragDrop();},setupExtraDropzone:function(element){options.extraDropzones.push(element);setupDropzone(element);},removeExtraDropzone:function(element){var i,dzs=options.extraDropzones;for(i in dzs){if(dzs[i]===element){return dzs.splice(i,1);}}},dispose:function(){disposeSupport.dispose();dz.dispose();}};};qq.UploadDropZone=function(o){"use strict";var options,element,preventDrop,dropOutsideDisabled,disposeSupport=new qq.DisposeSupport();options={element:null,onEnter:function(e){},onLeave:function(e){},onLeaveNotDescendants:function(e){},onDrop:function(e){}};qq.extend(options,o);element=options.element;function dragover_should_be_canceled(){return qq.safari()||(qq.firefox()&&qq.windows());}
function disableDropOutside(e){if(!dropOutsideDisabled){if(dragover_should_be_canceled){disposeSupport.attach(document,'dragover',function(e){e.preventDefault();});}else{disposeSupport.attach(document,'dragover',function(e){if(e.dataTransfer){e.dataTransfer.dropEffect='none';e.preventDefault();}});}
dropOutsideDisabled=true;}}
function isValidFileDrag(e){if(qq.ie()&&!qq.ie10()){return false;}
var effectTest,dt=e.dataTransfer,isSafari=qq.safari();effectTest=qq.ie10()?true:dt.effectAllowed!=='none';return dt&&effectTest&&(dt.files||(!isSafari&&dt.types.contains&&dt.types.contains('Files')));}
function isOrSetDropDisabled(isDisabled){if(isDisabled!==undefined){preventDrop=isDisabled;}
return preventDrop;}
function attachEvents(){disposeSupport.attach(element,'dragover',function(e){if(!isValidFileDrag(e)){return;}
var effect=qq.ie()?null:e.dataTransfer.effectAllowed;if(effect==='move'||effect==='linkMove'){e.dataTransfer.dropEffect='move';}else{e.dataTransfer.dropEffect='copy';}
e.stopPropagation();e.preventDefault();});disposeSupport.attach(element,'dragenter',function(e){if(!isOrSetDropDisabled()){if(!isValidFileDrag(e)){return;}
options.onEnter(e);}});disposeSupport.attach(element,'dragleave',function(e){if(!isValidFileDrag(e)){return;}
options.onLeave(e);var relatedTarget=document.elementFromPoint(e.clientX,e.clientY);if(qq(this).contains(relatedTarget)){return;}
options.onLeaveNotDescendants(e);});disposeSupport.attach(element,'drop',function(e){if(!isOrSetDropDisabled()){if(!isValidFileDrag(e)){return;}
e.preventDefault();options.onDrop(e);}});}
disableDropOutside();attachEvents();return{dropDisabled:function(isDisabled){return isOrSetDropDisabled(isDisabled);},dispose:function(){disposeSupport.dispose();}};};qq.FineUploader=function(o){qq.FineUploaderBasic.apply(this,arguments);qq.extend(this._options,{element:null,listElement:null,dragAndDrop:{extraDropzones:[],hideDropzones:true,disableDefaultDropzone:false},text:{uploadButton:'Upload a file',cancelButton:'Cancel',retryButton:'Retry',deleteButton:'Delete',failUpload:'Upload failed',dragZone:'Drop files here to upload',dropProcessing:'Processing dropped files...',formatProgress:"{percent}% of {total_size}",waitingForResponse:"Processing..."},template:'<div class="qq-uploader">'+
((!this._options.dragAndDrop||!this._options.dragAndDrop.disableDefaultDropzone)?'<div class="qq-upload-drop-area"><span>{dragZoneText}</span></div>':'')+
(!this._options.button?'<div class="qq-upload-button"><div>{uploadButtonText}</div></div>':'')+'<span class="qq-drop-processing"><span>{dropProcessingText}</span><span class="qq-drop-processing-spinner"></span></span>'+
(!this._options.listElement?'<ul class="qq-upload-list"></ul>':'')+'</div>',fileTemplate:'<li>'+'<div class="qq-progress-bar"></div>'+'<span class="qq-upload-spinner"></span>'+'<span class="qq-upload-finished"></span>'+'<span class="qq-upload-file"></span>'+'<span class="qq-upload-size"></span>'+'<a class="qq-upload-cancel" href="#">{cancelButtonText}</a>'+'<a class="qq-upload-retry" href="#">{retryButtonText}</a>'+'<a class="qq-upload-delete" href="#">{deleteButtonText}</a>'+'<span class="qq-upload-status-text">{statusText}</span>'+'</li>',classes:{button:'qq-upload-button',drop:'qq-upload-drop-area',dropActive:'qq-upload-drop-area-active',dropDisabled:'qq-upload-drop-area-disabled',list:'qq-upload-list',progressBar:'qq-progress-bar',file:'qq-upload-file',spinner:'qq-upload-spinner',finished:'qq-upload-finished',retrying:'qq-upload-retrying',retryable:'qq-upload-retryable',size:'qq-upload-size',cancel:'qq-upload-cancel',deleteButton:'qq-upload-delete',retry:'qq-upload-retry',statusText:'qq-upload-status-text',success:'qq-upload-success',fail:'qq-upload-fail',successIcon:null,failIcon:null,dropProcessing:'qq-drop-processing',dropProcessingSpinner:'qq-drop-processing-spinner'},failedUploadTextDisplay:{mode:'default',maxChars:50,responseProperty:'error',enableTooltip:true},messages:{tooManyFilesError:"You may only drop one file"},retry:{showAutoRetryNote:true,autoRetryNote:"Retrying {retryNum}/{maxAuto}...",showButton:false},deleteFile:{forceConfirm:false,confirmMessage:"Are you sure you want to delete {filename}?",deletingStatusText:"Deleting...",deletingFailedText:"Delete failed"},display:{fileSizeOnSubmit:false},paste:{promptForName:false,namePromptMessage:"Please name this image"},showMessage:function(message){setTimeout(function(){window.alert(message);},0);},showConfirm:function(message,okCallback,cancelCallback){setTimeout(function(){var result=window.confirm(message);if(result){okCallback();}
else if(cancelCallback){cancelCallback();}},0);},showPrompt:function(message,defaultValue){var promise=new qq.Promise(),retVal=window.prompt(message,defaultValue);if(retVal!=null&&qq.trimStr(retVal).length>0){promise.success(retVal);}
else{promise.failure("Undefined or invalid user-supplied value.");}
return promise;}},true);qq.extend(this._options,o,true);this._wrapCallbacks();this._options.template=this._options.template.replace(/\{dragZoneText\}/g,this._options.text.dragZone);this._options.template=this._options.template.replace(/\{uploadButtonText\}/g,this._options.text.uploadButton);this._options.template=this._options.template.replace(/\{dropProcessingText\}/g,this._options.text.dropProcessing);this._options.fileTemplate=this._options.fileTemplate.replace(/\{cancelButtonText\}/g,this._options.text.cancelButton);this._options.fileTemplate=this._options.fileTemplate.replace(/\{retryButtonText\}/g,this._options.text.retryButton);this._options.fileTemplate=this._options.fileTemplate.replace(/\{deleteButtonText\}/g,this._options.text.deleteButton);this._options.fileTemplate=this._options.fileTemplate.replace(/\{statusText\}/g,"");this._element=this._options.element;this._element.innerHTML=this._options.template;this._listElement=this._options.listElement||this._find(this._element,'list');this._classes=this._options.classes;if(!this._button){this._button=this._createUploadButton(this._find(this._element,'button'));}
this._bindCancelAndRetryEvents();this._dnd=this._setupDragAndDrop();if(this._options.paste.targetElement&&this._options.paste.promptForName){this._setupPastePrompt();}};qq.extend(qq.FineUploader.prototype,qq.FineUploaderBasic.prototype);qq.extend(qq.FineUploader.prototype,{clearStoredFiles:function(){qq.FineUploaderBasic.prototype.clearStoredFiles.apply(this,arguments);this._listElement.innerHTML="";},addExtraDropzone:function(element){this._dnd.setupExtraDropzone(element);},removeExtraDropzone:function(element){return this._dnd.removeExtraDropzone(element);},getItemByFileId:function(id){var item=this._listElement.firstChild;while(item){if(item.qqFileId==id)return item;item=item.nextSibling;}},reset:function(){qq.FineUploaderBasic.prototype.reset.apply(this,arguments);this._element.innerHTML=this._options.template;this._listElement=this._options.listElement||this._find(this._element,'list');if(!this._options.button){this._button=this._createUploadButton(this._find(this._element,'button'));}
this._bindCancelAndRetryEvents();this._dnd.dispose();this._dnd=this._setupDragAndDrop();},_removeFileItem:function(fileId){var item=this.getItemByFileId(fileId);qq(item).remove();},_setupDragAndDrop:function(){var self=this,dropProcessingEl=this._find(this._element,'dropProcessing'),dnd,preventSelectFiles,defaultDropAreaEl;preventSelectFiles=function(event){event.preventDefault();};if(!this._options.dragAndDrop.disableDefaultDropzone){defaultDropAreaEl=this._find(this._options.element,'drop');}
dnd=new qq.DragAndDrop({dropArea:defaultDropAreaEl,extraDropzones:this._options.dragAndDrop.extraDropzones,hideDropzones:this._options.dragAndDrop.hideDropzones,multiple:this._options.multiple,classes:{dropActive:this._options.classes.dropActive},callbacks:{dropProcessing:function(isProcessing,files){var input=self._button.getInput();if(isProcessing){qq(dropProcessingEl).css({display:'block'});qq(input).attach('click',preventSelectFiles);}
else{qq(dropProcessingEl).hide();qq(input).detach('click',preventSelectFiles);}
if(files){self.addFiles(files);}},error:function(code,filename){self._itemError(code,filename);},log:function(message,level){self.log(message,level);}}});dnd.setup();return dnd;},_leaving_document_out:function(e){return((qq.chrome()||(qq.safari()&&qq.windows()))&&e.clientX==0&&e.clientY==0)||(qq.firefox()&&!e.relatedTarget);},_storeForLater:function(id){qq.FineUploaderBasic.prototype._storeForLater.apply(this,arguments);var item=this.getItemByFileId(id);qq(this._find(item,'spinner')).hide();},_find:function(parent,type){var element=qq(parent).getByClass(this._options.classes[type])[0];if(!element){throw new Error('element not found '+type);}
return element;},_onSubmit:function(id,name){qq.FineUploaderBasic.prototype._onSubmit.apply(this,arguments);this._addToList(id,name);},_onProgress:function(id,name,loaded,total){qq.FineUploaderBasic.prototype._onProgress.apply(this,arguments);var item,progressBar,percent,cancelLink;item=this.getItemByFileId(id);progressBar=this._find(item,'progressBar');percent=Math.round(loaded/total*100);if(loaded===total){cancelLink=this._find(item,'cancel');qq(cancelLink).hide();qq(progressBar).hide();qq(this._find(item,'statusText')).setText(this._options.text.waitingForResponse);this._displayFileSize(id);}
else{this._displayFileSize(id,loaded,total);qq(progressBar).css({display:'block'});}
qq(progressBar).css({width:percent+'%'});},_onComplete:function(id,name,result,xhr){qq.FineUploaderBasic.prototype._onComplete.apply(this,arguments);var item=this.getItemByFileId(id);qq(this._find(item,'statusText')).clearText();qq(item).removeClass(this._classes.retrying);qq(this._find(item,'progressBar')).hide();if(!this._options.disableCancelForFormUploads||qq.isXhrUploadSupported()){qq(this._find(item,'cancel')).hide();}
qq(this._find(item,'spinner')).hide();if(result.success){if(this._isDeletePossible()){this._showDeleteLink(id);}
qq(item).addClass(this._classes.success);if(this._classes.successIcon){this._find(item,'finished').style.display="inline-block";qq(item).addClass(this._classes.successIcon);}}else{qq(item).addClass(this._classes.fail);if(this._classes.failIcon){this._find(item,'finished').style.display="inline-block";qq(item).addClass(this._classes.failIcon);}
if(this._options.retry.showButton&&!this._preventRetries[id]){qq(item).addClass(this._classes.retryable);}
this._controlFailureTextDisplay(item,result);}},_onUpload:function(id,name){qq.FineUploaderBasic.prototype._onUpload.apply(this,arguments);this._showSpinner(id);},_onCancel:function(id,name){qq.FineUploaderBasic.prototype._onCancel.apply(this,arguments);this._removeFileItem(id);},_onBeforeAutoRetry:function(id){var item,progressBar,failTextEl,retryNumForDisplay,maxAuto,retryNote;qq.FineUploaderBasic.prototype._onBeforeAutoRetry.apply(this,arguments);item=this.getItemByFileId(id);progressBar=this._find(item,'progressBar');this._showCancelLink(item);progressBar.style.width=0;qq(progressBar).hide();if(this._options.retry.showAutoRetryNote){failTextEl=this._find(item,'statusText');retryNumForDisplay=this._autoRetries[id]+1;maxAuto=this._options.retry.maxAutoAttempts;retryNote=this._options.retry.autoRetryNote.replace(/\{retryNum\}/g,retryNumForDisplay);retryNote=retryNote.replace(/\{maxAuto\}/g,maxAuto);qq(failTextEl).setText(retryNote);if(retryNumForDisplay===1){qq(item).addClass(this._classes.retrying);}}},_onBeforeManualRetry:function(id){var item=this.getItemByFileId(id);if(qq.FineUploaderBasic.prototype._onBeforeManualRetry.apply(this,arguments)){this._find(item,'progressBar').style.width=0;qq(item).removeClass(this._classes.fail);qq(this._find(item,'statusText')).clearText();this._showSpinner(id);this._showCancelLink(item);return true;}
else{qq(item).addClass(this._classes.retryable);return false;}},_onSubmitDelete:function(id){if(this._isDeletePossible()){if(this._options.callbacks.onSubmitDelete(id)!==false){if(this._options.deleteFile.forceConfirm){this._showDeleteConfirm(id);}
else{this._sendDeleteRequest(id);}}}
else{this.log("Delete request ignored for file ID "+id+", delete feature is disabled.","warn");return false;}},_onDeleteComplete:function(id,xhr,isError){qq.FineUploaderBasic.prototype._onDeleteComplete.apply(this,arguments);var item=this.getItemByFileId(id),spinnerEl=this._find(item,'spinner'),statusTextEl=this._find(item,'statusText');qq(spinnerEl).hide();if(isError){qq(statusTextEl).setText(this._options.deleteFile.deletingFailedText);this._showDeleteLink(id);}
else{this._removeFileItem(id);}},_sendDeleteRequest:function(id){var item=this.getItemByFileId(id),deleteLink=this._find(item,'deleteButton'),statusTextEl=this._find(item,'statusText');qq(deleteLink).hide();this._showSpinner(id);qq(statusTextEl).setText(this._options.deleteFile.deletingStatusText);this._deleteHandler.sendDelete(id,this.getUuid(id));},_showDeleteConfirm:function(id){var fileName=this._handler.getName(id),confirmMessage=this._options.deleteFile.confirmMessage.replace(/\{filename\}/g,fileName),uuid=this.getUuid(id),self=this;this._options.showConfirm(confirmMessage,function(){self._sendDeleteRequest(id);});},_addToList:function(id,name){var item=qq.toElement(this._options.fileTemplate);if(this._options.disableCancelForFormUploads&&!qq.isXhrUploadSupported()){var cancelLink=this._find(item,'cancel');qq(cancelLink).remove();}
item.qqFileId=id;var fileElement=this._find(item,'file');qq(fileElement).setText(this._options.formatFileName(name));qq(this._find(item,'size')).hide();if(!this._options.multiple){this._handler.cancelAll();this._clearList();}
this._listElement.appendChild(item);if(this._options.display.fileSizeOnSubmit&&qq.isXhrUploadSupported()){this._displayFileSize(id);}},_clearList:function(){this._listElement.innerHTML='';this.clearStoredFiles();},_displayFileSize:function(id,loadedSize,totalSize){var item=this.getItemByFileId(id),size=this.getSize(id),sizeForDisplay=this._formatSize(size),sizeEl=this._find(item,'size');if(loadedSize!==undefined&&totalSize!==undefined){sizeForDisplay=this._formatProgress(loadedSize,totalSize);}
qq(sizeEl).css({display:'inline'});qq(sizeEl).setText(sizeForDisplay);},_bindCancelAndRetryEvents:function(){var self=this,list=this._listElement;this._disposeSupport.attach(list,'click',function(e){e=e||window.event;var target=e.target||e.srcElement;if(qq(target).hasClass(self._classes.cancel)||qq(target).hasClass(self._classes.retry)||qq(target).hasClass(self._classes.deleteButton)){qq.preventDefault(e);var item=target.parentNode;while(item.qqFileId===undefined){item=target=target.parentNode;}
if(qq(target).hasClass(self._classes.deleteButton)){self.deleteFile(item.qqFileId);}
else if(qq(target).hasClass(self._classes.cancel)){self.cancel(item.qqFileId);}
else{qq(item).removeClass(self._classes.retryable);self.retry(item.qqFileId);}}});},_formatProgress:function(uploadedSize,totalSize){var message=this._options.text.formatProgress;function r(name,replacement){message=message.replace(name,replacement);}
r('{percent}',Math.round(uploadedSize/totalSize*100));r('{total_size}',this._formatSize(totalSize));return message;},_controlFailureTextDisplay:function(item,response){var mode,maxChars,responseProperty,failureReason,shortFailureReason;mode=this._options.failedUploadTextDisplay.mode;maxChars=this._options.failedUploadTextDisplay.maxChars;responseProperty=this._options.failedUploadTextDisplay.responseProperty;if(mode==='custom'){failureReason=response[responseProperty];if(failureReason){if(failureReason.length>maxChars){shortFailureReason=failureReason.substring(0,maxChars)+'...';}}
else{failureReason=this._options.text.failUpload;this.log("'"+responseProperty+"' is not a valid property on the server response.",'warn');}
qq(this._find(item,'statusText')).setText(shortFailureReason||failureReason);if(this._options.failedUploadTextDisplay.enableTooltip){this._showTooltip(item,failureReason);}}
else if(mode==='default'){qq(this._find(item,'statusText')).setText(this._options.text.failUpload);}
else if(mode!=='none'){this.log("failedUploadTextDisplay.mode value of '"+mode+"' is not valid",'warn');}},_showTooltip:function(item,text){item.title=text;},_showSpinner:function(id){var item=this.getItemByFileId(id),spinnerEl=this._find(item,'spinner');spinnerEl.style.display="inline-block";},_showCancelLink:function(item){if(!this._options.disableCancelForFormUploads||qq.isXhrUploadSupported()){var cancelLink=this._find(item,'cancel');qq(cancelLink).css({display:'inline'});}},_showDeleteLink:function(id){var item=this.getItemByFileId(id),deleteLink=this._find(item,'deleteButton');qq(deleteLink).css({display:'inline'});},_itemError:function(code,name){var message=qq.FineUploaderBasic.prototype._itemError.apply(this,arguments);this._options.showMessage(message);},_batchError:function(message){qq.FineUploaderBasic.prototype._batchError.apply(this,arguments);this._options.showMessage(message);},_setupPastePrompt:function(){var self=this;this._options.callbacks.onPasteReceived=function(){var message=self._options.paste.namePromptMessage,defaultVal=self._options.paste.defaultName;return self._options.showPrompt(message,defaultVal);};}});qq.AjaxRequestor=function(o){"use strict";var log,shouldParamsBeInQueryString,queue=[],requestState=[],options={method:'POST',maxConnections:3,customHeaders:{},endpointStore:{},paramsStore:{},successfulResponseCodes:[200],demoMode:false,cors:{expected:false,sendCredentials:false},log:function(str,level){},onSend:function(id){},onComplete:function(id,xhr,isError){},onCancel:function(id){}};qq.extend(options,o);log=options.log;shouldParamsBeInQueryString=getMethod()==='GET'||getMethod()==='DELETE';function dequeue(id){var i=qq.indexOf(queue,id),max=options.maxConnections,nextId;delete requestState[id];queue.splice(i,1);if(queue.length>=max&&i<max){nextId=queue[max-1];sendRequest(nextId);}}
function onComplete(id){var xhr=requestState[id].xhr,method=getMethod(),isError=false;dequeue(id);if(!isResponseSuccessful(xhr.status)){isError=true;log(method+" request for "+id+" has failed - response code "+xhr.status,"error");}
options.onComplete(id,xhr,isError);}
function sendRequest(id){var xhr=new XMLHttpRequest(),method=getMethod(),params={},url;options.onSend(id);if(options.paramsStore.getParams){params=options.paramsStore.getParams(id);}
url=createUrl(id,params);requestState[id].xhr=xhr;xhr.onreadystatechange=getReadyStateChangeHandler(id);xhr.open(method,url,true);if(options.cors.expected&&options.cors.sendCredentials){xhr.withCredentials=true;}
setHeaders(id);log('Sending '+method+" request for "+id);if(!shouldParamsBeInQueryString&&params){xhr.send(qq.obj2url(params,""));}
else{xhr.send();}}
function createUrl(id,params){var endpoint=options.endpointStore.getEndpoint(id),addToPath=requestState[id].addToPath;if(addToPath!==undefined){endpoint+="/"+addToPath;}
if(shouldParamsBeInQueryString&&params){return qq.obj2url(params,endpoint);}
else{return endpoint;}}
function getReadyStateChangeHandler(id){var xhr=requestState[id].xhr;return function(){if(xhr.readyState===4){onComplete(id,xhr);}};}
function setHeaders(id){var xhr=requestState[id].xhr,customHeaders=options.customHeaders;xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");xhr.setRequestHeader("Cache-Control","no-cache");qq.each(customHeaders,function(name,val){xhr.setRequestHeader(name,val);});}
function cancelRequest(id){var xhr=requestState[id].xhr,method=getMethod();if(xhr){xhr.onreadystatechange=null;xhr.abort();dequeue(id);log('Cancelled '+method+" for "+id);options.onCancel(id);return true;}
return false;}
function isResponseSuccessful(responseCode){return qq.indexOf(options.successfulResponseCodes,responseCode)>=0;}
function getMethod(){if(options.demoMode){return"GET";}
return options.method;}
return{send:function(id,addToPath){requestState[id]={addToPath:addToPath};var len=queue.push(id);if(len<=options.maxConnections){sendRequest(id);}},cancel:function(id){return cancelRequest(id);}};};qq.DeleteFileAjaxRequestor=function(o){"use strict";var requestor,options={endpointStore:{},maxConnections:3,customHeaders:{},paramsStore:{},demoMode:false,cors:{expected:false,sendCredentials:false},log:function(str,level){},onDelete:function(id){},onDeleteComplete:function(id,xhr,isError){}};qq.extend(options,o);requestor=new qq.AjaxRequestor({method:'DELETE',endpointStore:options.endpointStore,paramsStore:options.paramsStore,maxConnections:options.maxConnections,customHeaders:options.customHeaders,successfulResponseCodes:[200,202,204],demoMode:options.demoMode,log:options.log,onSend:options.onDelete,onComplete:options.onDeleteComplete});return{sendDelete:function(id,uuid){requestor.send(id,uuid);options.log("Submitted delete file request for "+id);}};};qq.WindowReceiveMessage=function(o){var options={log:function(message,level){}},callbackWrapperDetachers={};qq.extend(options,o);return{receiveMessage:function(id,callback){var onMessageCallbackWrapper=function(event){callback(event.data);};if(window.postMessage){callbackWrapperDetachers[id]=qq(window).attach("message",onMessageCallbackWrapper);}
else{log("iframe message passing not supported in this browser!","error");}},stopReceivingMessages:function(id){if(window.postMessage){var detacher=callbackWrapperDetachers[id];if(detacher){detacher();}}}};};qq.UploadHandler=function(o){"use strict";var queue=[],options,log,dequeue,handlerImpl;options={debug:false,forceMultipart:true,paramsInBody:false,paramsStore:{},endpointStore:{},cors:{expected:false,sendCredentials:false},maxConnections:3,uuidParamName:'qquuid',totalFileSizeParamName:'qqtotalfilesize',chunking:{enabled:false,partSize:2000000,paramNames:{partIndex:'qqpartindex',partByteOffset:'qqpartbyteoffset',chunkSize:'qqchunksize',totalParts:'qqtotalparts',filename:'qqfilename'}},resume:{enabled:false,id:null,cookiesExpireIn:7,paramNames:{resuming:"qqresume"}},blobs:{paramNames:{name:'qqblobname'}},log:function(str,level){},onProgress:function(id,fileName,loaded,total){},onComplete:function(id,fileName,response,xhr){},onCancel:function(id,fileName){},onUpload:function(id,fileName){},onUploadChunk:function(id,fileName,chunkData){},onAutoRetry:function(id,fileName,response,xhr){},onResume:function(id,fileName,chunkData){}};qq.extend(options,o);log=options.log;dequeue=function(id){var i=qq.indexOf(queue,id),max=options.maxConnections,nextId;if(i>=0){queue.splice(i,1);if(queue.length>=max&&i<max){nextId=queue[max-1];handlerImpl.upload(nextId);}}};if(qq.isXhrUploadSupported()){handlerImpl=new qq.UploadHandlerXhr(options,dequeue,log);}
else{handlerImpl=new qq.UploadHandlerForm(options,dequeue,log);}
return{add:function(file){return handlerImpl.add(file);},upload:function(id){var len=queue.push(id);if(len<=options.maxConnections){return handlerImpl.upload(id);}},retry:function(id){var i=qq.indexOf(queue,id);if(i>=0){return handlerImpl.upload(id,true);}
else{return this.upload(id);}},cancel:function(id){log('Cancelling '+id);options.paramsStore.remove(id);handlerImpl.cancel(id);dequeue(id);},cancelAll:function(){var self=this,queueCopy=[];qq.extend(queueCopy,queue);qq.each(queueCopy,function(idx,fileId){self.cancel(fileId);});queue=[];},getName:function(id){return handlerImpl.getName(id);},getSize:function(id){if(handlerImpl.getSize){return handlerImpl.getSize(id);}},getFile:function(id){if(handlerImpl.getFile){return handlerImpl.getFile(id);}},getQueue:function(){return queue;},reset:function(){log('Resetting upload handler');queue=[];handlerImpl.reset();},getUuid:function(id){return handlerImpl.getUuid(id);},isValid:function(id){return handlerImpl.isValid(id);},getResumableFilesData:function(){if(handlerImpl.getResumableFilesData){return handlerImpl.getResumableFilesData();}
return[];}};};qq.UploadHandlerForm=function(o,uploadCompleteCallback,logCallback){"use strict";var options=o,inputs=[],uuids=[],detachLoadEvents={},postMessageCallbackTimers={},uploadComplete=uploadCompleteCallback,log=logCallback,corsMessageReceiver=new qq.WindowReceiveMessage({log:log}),onloadCallbacks={},api;function detachLoadEvent(id){if(detachLoadEvents[id]!==undefined){detachLoadEvents[id]();delete detachLoadEvents[id];}}
function registerPostMessageCallback(iframe,callback){var id=iframe.id;onloadCallbacks[uuids[id]]=callback;detachLoadEvents[id]=qq(iframe).attach('load',function(){if(inputs[id]){log("Received iframe load event for CORS upload request (file id "+id+")");postMessageCallbackTimers[id]=setTimeout(function(){var errorMessage="No valid message received from loaded iframe for file id "+id;log(errorMessage,"error");callback({error:errorMessage});},1000);}});corsMessageReceiver.receiveMessage(id,function(message){log("Received the following window message: '"+message+"'");var response=qq.parseJson(message),uuid=response.uuid,onloadCallback;if(uuid&&onloadCallbacks[uuid]){clearTimeout(postMessageCallbackTimers[id]);delete postMessageCallbackTimers[id];detachLoadEvent(id);onloadCallback=onloadCallbacks[uuid];delete onloadCallbacks[uuid];corsMessageReceiver.stopReceivingMessages(id);onloadCallback(response);}
else if(!uuid){log("'"+message+"' does not contain a UUID - ignoring.");}});}
function attachLoadEvent(iframe,callback){if(options.cors.expected){registerPostMessageCallback(iframe,callback);}
else{detachLoadEvents[iframe.id]=qq(iframe).attach('load',function(){log('Received response for '+iframe.id);if(!iframe.parentNode){return;}
try{if(iframe.contentDocument&&iframe.contentDocument.body&&iframe.contentDocument.body.innerHTML=="false"){return;}}
catch(error){log('Error when attempting to access iframe during handling of upload response ('+error+")",'error');}
callback();});}}
function getIframeContentJson(iframe){var response;try{var doc=iframe.contentDocument||iframe.contentWindow.document,innerHTML=doc.body.innerHTML;log("converting iframe's innerHTML to JSON");log("innerHTML = "+innerHTML);if(innerHTML&&innerHTML.match(/^<pre/i)){innerHTML=doc.body.firstChild.firstChild.nodeValue;}
response=qq.parseJson(innerHTML);}catch(error){log('Error when attempting to parse form upload response ('+error+")",'error');response={success:false};}
return response;}
function createIframe(id){var iframe=qq.toElement('<iframe src="javascript:false;" name="'+id+'" />');iframe.setAttribute('id',id);iframe.style.display='none';document.body.appendChild(iframe);return iframe;}
function createForm(id,iframe){var params=options.paramsStore.getParams(id),protocol=options.demoMode?"GET":"POST",form=qq.toElement('<form method="'+protocol+'" enctype="multipart/form-data"></form>'),endpoint=options.endpointStore.getEndpoint(id),url=endpoint;params[options.uuidParamName]=uuids[id];if(!options.paramsInBody){url=qq.obj2url(params,endpoint);}
else{qq.obj2Inputs(params,form);}
form.setAttribute('action',url);form.setAttribute('target',iframe.name);form.style.display='none';document.body.appendChild(form);return form;}
api={add:function(fileInput){fileInput.setAttribute('name',options.inputName);var id=inputs.push(fileInput)-1;uuids[id]=qq.getUniqueId();if(fileInput.parentNode){qq(fileInput).remove();}
return id;},getName:function(id){if(api.isValid(id)){return inputs[id].value.replace(/.*(\/|\\)/,"");}
else{log(id+" is not a valid item ID.","error");}},isValid:function(id){return inputs[id]!==undefined;},reset:function(){inputs=[];uuids=[];detachLoadEvents={};},getUuid:function(id){return uuids[id];},cancel:function(id){options.onCancel(id,this.getName(id));delete inputs[id];delete uuids[id];delete detachLoadEvents[id];if(options.cors.expected){clearTimeout(postMessageCallbackTimers[id]);delete postMessageCallbackTimers[id];corsMessageReceiver.stopReceivingMessages(id);}
var iframe=document.getElementById(id);if(iframe){iframe.setAttribute('src','java'+String.fromCharCode(115)+'cript:false;');qq(iframe).remove();}},upload:function(id){var input=inputs[id],fileName=api.getName(id),iframe=createIframe(id),form;if(!input){throw new Error('file with passed id was not added, or already uploaded or cancelled');}
options.onUpload(id,this.getName(id));form=createForm(id,iframe);form.appendChild(input);attachLoadEvent(iframe,function(responseFromMessage){log('iframe loaded');var response=responseFromMessage?responseFromMessage:getIframeContentJson(iframe);detachLoadEvent(id);if(!options.cors.expected){qq(iframe).remove();}
if(!response.success){if(options.onAutoRetry(id,fileName,response)){return;}}
options.onComplete(id,fileName,response);uploadComplete(id);});log('Sending upload request for '+id);form.submit();qq(form).remove();return id;}};return api;};qq.UploadHandlerXhr=function(o,uploadCompleteCallback,logCallback){"use strict";var options=o,uploadComplete=uploadCompleteCallback,log=logCallback,fileState=[],cookieItemDelimiter="|",chunkFiles=options.chunking.enabled&&qq.isFileChunkingSupported(),resumeEnabled=options.resume.enabled&&chunkFiles&&qq.areCookiesEnabled(),resumeId=getResumeId(),multipart=options.forceMultipart||options.paramsInBody,api;function addChunkingSpecificParams(id,params,chunkData){var size=api.getSize(id),name=api.getName(id);params[options.chunking.paramNames.partIndex]=chunkData.part;params[options.chunking.paramNames.partByteOffset]=chunkData.start;params[options.chunking.paramNames.chunkSize]=chunkData.size;params[options.chunking.paramNames.totalParts]=chunkData.count;params[options.totalFileSizeParamName]=size;if(multipart){params[options.chunking.paramNames.filename]=name;}}
function addResumeSpecificParams(params){params[options.resume.paramNames.resuming]=true;}
function getChunk(fileOrBlob,startByte,endByte){if(fileOrBlob.slice){return fileOrBlob.slice(startByte,endByte);}
else if(fileOrBlob.mozSlice){return fileOrBlob.mozSlice(startByte,endByte);}
else if(fileOrBlob.webkitSlice){return fileOrBlob.webkitSlice(startByte,endByte);}}
function getChunkData(id,chunkIndex){var chunkSize=options.chunking.partSize,fileSize=api.getSize(id),fileOrBlob=fileState[id].file||fileState[id].blobData.blob,startBytes=chunkSize*chunkIndex,endBytes=startBytes+chunkSize>=fileSize?fileSize:startBytes+chunkSize,totalChunks=getTotalChunks(id);return{part:chunkIndex,start:startBytes,end:endBytes,count:totalChunks,blob:getChunk(fileOrBlob,startBytes,endBytes),size:endBytes-startBytes};}
function getTotalChunks(id){var fileSize=api.getSize(id),chunkSize=options.chunking.partSize;return Math.ceil(fileSize/chunkSize);}
function createXhr(id){var xhr=new XMLHttpRequest();fileState[id].xhr=xhr;return xhr;}
function setParamsAndGetEntityToSend(params,xhr,fileOrBlob,id){var formData=new FormData(),method=options.demoMode?"GET":"POST",endpoint=options.endpointStore.getEndpoint(id),url=endpoint,name=api.getName(id),size=api.getSize(id),blobData=fileState[id].blobData;params[options.uuidParamName]=fileState[id].uuid;if(multipart){params[options.totalFileSizeParamName]=size;if(blobData){params[options.blobs.paramNames.name]=blobData.name;}}
if(!options.paramsInBody){if(!multipart){params[options.inputName]=name;}
url=qq.obj2url(params,endpoint);}
xhr.open(method,url,true);if(options.cors.expected&&options.cors.sendCredentials){xhr.withCredentials=true;}
if(multipart){if(options.paramsInBody){qq.obj2FormData(params,formData);}
formData.append(options.inputName,fileOrBlob);return formData;}
return fileOrBlob;}
function setHeaders(id,xhr){var extraHeaders=options.customHeaders,fileOrBlob=fileState[id].file||fileState[id].blobData.blob;xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");xhr.setRequestHeader("Cache-Control","no-cache");if(!multipart){xhr.setRequestHeader("Content-Type","application/octet-stream");xhr.setRequestHeader("X-Mime-Type",fileOrBlob.type);}
qq.each(extraHeaders,function(name,val){xhr.setRequestHeader(name,val);});}
function handleCompletedItem(id,response,xhr){var name=api.getName(id),size=api.getSize(id);fileState[id].attemptingResume=false;options.onProgress(id,name,size,size);options.onComplete(id,name,response,xhr);delete fileState[id].xhr;uploadComplete(id);}
function uploadNextChunk(id){var chunkIdx=fileState[id].remainingChunkIdxs[0],chunkData=getChunkData(id,chunkIdx),xhr=createXhr(id),size=api.getSize(id),name=api.getName(id),toSend,params;if(fileState[id].loaded===undefined){fileState[id].loaded=0;}
if(resumeEnabled&&fileState[id].file){persistChunkData(id,chunkData);}
xhr.onreadystatechange=getReadyStateChangeHandler(id,xhr);xhr.upload.onprogress=function(e){if(e.lengthComputable){var totalLoaded=e.loaded+fileState[id].loaded,estTotalRequestsSize=calcAllRequestsSizeForChunkedUpload(id,chunkIdx,e.total);options.onProgress(id,name,totalLoaded,estTotalRequestsSize);}};options.onUploadChunk(id,name,getChunkDataForCallback(chunkData));params=options.paramsStore.getParams(id);addChunkingSpecificParams(id,params,chunkData);if(fileState[id].attemptingResume){addResumeSpecificParams(params);}
toSend=setParamsAndGetEntityToSend(params,xhr,chunkData.blob,id);setHeaders(id,xhr);log('Sending chunked upload request for item '+id+": bytes "+(chunkData.start+1)+"-"+chunkData.end+" of "+size);xhr.send(toSend);}
function calcAllRequestsSizeForChunkedUpload(id,chunkIdx,requestSize){var chunkData=getChunkData(id,chunkIdx),blobSize=chunkData.size,overhead=requestSize-blobSize,size=api.getSize(id),chunkCount=chunkData.count,initialRequestOverhead=fileState[id].initialRequestOverhead,overheadDiff=overhead-initialRequestOverhead;fileState[id].lastRequestOverhead=overhead;if(chunkIdx===0){fileState[id].lastChunkIdxProgress=0;fileState[id].initialRequestOverhead=overhead;fileState[id].estTotalRequestsSize=size+(chunkCount*overhead);}
else if(fileState[id].lastChunkIdxProgress!==chunkIdx){fileState[id].lastChunkIdxProgress=chunkIdx;fileState[id].estTotalRequestsSize+=overheadDiff;}
return fileState[id].estTotalRequestsSize;}
function getLastRequestOverhead(id){if(multipart){return fileState[id].lastRequestOverhead;}
else{return 0;}}
function handleSuccessfullyCompletedChunk(id,response,xhr){var chunkIdx=fileState[id].remainingChunkIdxs.shift(),chunkData=getChunkData(id,chunkIdx);fileState[id].attemptingResume=false;fileState[id].loaded+=chunkData.size+getLastRequestOverhead(id);if(fileState[id].remainingChunkIdxs.length>0){uploadNextChunk(id);}
else{if(resumeEnabled){deletePersistedChunkData(id);}
handleCompletedItem(id,response,xhr);}}
function isErrorResponse(xhr,response){return xhr.status!==200||!response.success||response.reset;}
function parseResponse(xhr){var response;try{response=qq.parseJson(xhr.responseText);}
catch(error){log('Error when attempting to parse xhr response text ('+error+')','error');response={};}
return response;}
function handleResetResponse(id){log('Server has ordered chunking effort to be restarted on next attempt for item ID '+id,'error');if(resumeEnabled){deletePersistedChunkData(id);fileState[id].attemptingResume=false;}
fileState[id].remainingChunkIdxs=[];delete fileState[id].loaded;delete fileState[id].estTotalRequestsSize;delete fileState[id].initialRequestOverhead;}
function handleResetResponseOnResumeAttempt(id){fileState[id].attemptingResume=false;log("Server has declared that it cannot handle resume for item ID "+id+" - starting from the first chunk",'error');handleResetResponse(id);api.upload(id,true);}
function handleNonResetErrorResponse(id,response,xhr){var name=api.getName(id);if(options.onAutoRetry(id,name,response,xhr)){return;}
else{handleCompletedItem(id,response,xhr);}}
function onComplete(id,xhr){var response;if(!fileState[id]){return;}
log("xhr - server response received for "+id);log("responseText = "+xhr.responseText);response=parseResponse(xhr);if(isErrorResponse(xhr,response)){if(response.reset){handleResetResponse(id);}
if(fileState[id].attemptingResume&&response.reset){handleResetResponseOnResumeAttempt(id);}
else{handleNonResetErrorResponse(id,response,xhr);}}
else if(chunkFiles){handleSuccessfullyCompletedChunk(id,response,xhr);}
else{handleCompletedItem(id,response,xhr);}}
function getChunkDataForCallback(chunkData){return{partIndex:chunkData.part,startByte:chunkData.start+1,endByte:chunkData.end,totalParts:chunkData.count};}
function getReadyStateChangeHandler(id,xhr){return function(){if(xhr.readyState===4){onComplete(id,xhr);}};}
function persistChunkData(id,chunkData){var fileUuid=api.getUuid(id),lastByteSent=fileState[id].loaded,initialRequestOverhead=fileState[id].initialRequestOverhead,estTotalRequestsSize=fileState[id].estTotalRequestsSize,cookieName=getChunkDataCookieName(id),cookieValue=fileUuid+
cookieItemDelimiter+chunkData.part+
cookieItemDelimiter+lastByteSent+
cookieItemDelimiter+initialRequestOverhead+
cookieItemDelimiter+estTotalRequestsSize,cookieExpDays=options.resume.cookiesExpireIn;qq.setCookie(cookieName,cookieValue,cookieExpDays);}
function deletePersistedChunkData(id){if(fileState[id].file){var cookieName=getChunkDataCookieName(id);qq.deleteCookie(cookieName);}}
function getPersistedChunkData(id){var chunkCookieValue=qq.getCookie(getChunkDataCookieName(id)),filename=api.getName(id),sections,uuid,partIndex,lastByteSent,initialRequestOverhead,estTotalRequestsSize;if(chunkCookieValue){sections=chunkCookieValue.split(cookieItemDelimiter);if(sections.length===5){uuid=sections[0];partIndex=parseInt(sections[1],10);lastByteSent=parseInt(sections[2],10);initialRequestOverhead=parseInt(sections[3],10);estTotalRequestsSize=parseInt(sections[4],10);return{uuid:uuid,part:partIndex,lastByteSent:lastByteSent,initialRequestOverhead:initialRequestOverhead,estTotalRequestsSize:estTotalRequestsSize};}
else{log('Ignoring previously stored resume/chunk cookie for '+filename+" - old cookie format","warn");}}}
function getChunkDataCookieName(id){var filename=api.getName(id),fileSize=api.getSize(id),maxChunkSize=options.chunking.partSize,cookieName;cookieName="qqfilechunk"+cookieItemDelimiter+encodeURIComponent(filename)+cookieItemDelimiter+fileSize+cookieItemDelimiter+maxChunkSize;if(resumeId!==undefined){cookieName+=cookieItemDelimiter+resumeId;}
return cookieName;}
function getResumeId(){if(options.resume.id!==null&&options.resume.id!==undefined&&!qq.isFunction(options.resume.id)&&!qq.isObject(options.resume.id)){return options.resume.id;}}
function handleFileChunkingUpload(id,retry){var name=api.getName(id),firstChunkIndex=0,persistedChunkInfoForResume,firstChunkDataForResume,currentChunkIndex;if(!fileState[id].remainingChunkIdxs||fileState[id].remainingChunkIdxs.length===0){fileState[id].remainingChunkIdxs=[];if(resumeEnabled&&!retry&&fileState[id].file){persistedChunkInfoForResume=getPersistedChunkData(id);if(persistedChunkInfoForResume){firstChunkDataForResume=getChunkData(id,persistedChunkInfoForResume.part);if(options.onResume(id,name,getChunkDataForCallback(firstChunkDataForResume))!==false){firstChunkIndex=persistedChunkInfoForResume.part;fileState[id].uuid=persistedChunkInfoForResume.uuid;fileState[id].loaded=persistedChunkInfoForResume.lastByteSent;fileState[id].estTotalRequestsSize=persistedChunkInfoForResume.estTotalRequestsSize;fileState[id].initialRequestOverhead=persistedChunkInfoForResume.initialRequestOverhead;fileState[id].attemptingResume=true;log('Resuming '+name+" at partition index "+firstChunkIndex);}}}
for(currentChunkIndex=getTotalChunks(id)-1;currentChunkIndex>=firstChunkIndex;currentChunkIndex-=1){fileState[id].remainingChunkIdxs.unshift(currentChunkIndex);}}
uploadNextChunk(id);}
function handleStandardFileUpload(id){var fileOrBlob=fileState[id].file||fileState[id].blobData.blob,name=api.getName(id),xhr,params,toSend;fileState[id].loaded=0;xhr=createXhr(id);xhr.upload.onprogress=function(e){if(e.lengthComputable){fileState[id].loaded=e.loaded;options.onProgress(id,name,e.loaded,e.total);}};xhr.onreadystatechange=getReadyStateChangeHandler(id,xhr);params=options.paramsStore.getParams(id);toSend=setParamsAndGetEntityToSend(params,xhr,fileOrBlob,id);setHeaders(id,xhr);log('Sending upload request for '+id);xhr.send(toSend);}
api={add:function(fileOrBlobData){var id;if(fileOrBlobData instanceof File){id=fileState.push({file:fileOrBlobData})-1;}
else if(fileOrBlobData.blob instanceof Blob){id=fileState.push({blobData:fileOrBlobData})-1;}
else{throw new Error('Passed obj in not a File or BlobData (in qq.UploadHandlerXhr)');}
fileState[id].uuid=qq.getUniqueId();return id;},getName:function(id){if(api.isValid(id)){var file=fileState[id].file,blobData=fileState[id].blobData;if(file){return(file.fileName!==null&&file.fileName!==undefined)?file.fileName:file.name;}
else{return blobData.name;}}
else{log(id+" is not a valid item ID.","error");}},getSize:function(id){var fileOrBlob=fileState[id].file||fileState[id].blobData.blob;if(qq.isFileOrInput(fileOrBlob)){return fileOrBlob.fileSize!=null?fileOrBlob.fileSize:fileOrBlob.size;}
else{return fileOrBlob.size;}},getFile:function(id){if(fileState[id]){return fileState[id].file||fileState[id].blobData.blob;}},getLoaded:function(id){return fileState[id].loaded||0;},isValid:function(id){return fileState[id]!==undefined;},reset:function(){fileState=[];},getUuid:function(id){return fileState[id].uuid;},upload:function(id,retry){var name=this.getName(id);options.onUpload(id,name);if(chunkFiles){handleFileChunkingUpload(id,retry);}
else{handleStandardFileUpload(id);}},cancel:function(id){var xhr=fileState[id].xhr;options.onCancel(id,this.getName(id));if(xhr){xhr.onreadystatechange=null;xhr.abort();}
if(resumeEnabled){deletePersistedChunkData(id);}
delete fileState[id];},getResumableFilesData:function(){var matchingCookieNames=[],resumableFilesData=[];if(chunkFiles&&resumeEnabled){if(resumeId===undefined){matchingCookieNames=qq.getCookieNames(new RegExp("^qqfilechunk\\"+cookieItemDelimiter+".+\\"+
cookieItemDelimiter+"\\d+\\"+cookieItemDelimiter+options.chunking.partSize+"="));}
else{matchingCookieNames=qq.getCookieNames(new RegExp("^qqfilechunk\\"+cookieItemDelimiter+".+\\"+
cookieItemDelimiter+"\\d+\\"+cookieItemDelimiter+options.chunking.partSize+"\\"+
cookieItemDelimiter+resumeId+"="));}
qq.each(matchingCookieNames,function(idx,cookieName){var cookiesNameParts=cookieName.split(cookieItemDelimiter);var cookieValueParts=qq.getCookie(cookieName).split(cookieItemDelimiter);resumableFilesData.push({name:decodeURIComponent(cookiesNameParts[1]),size:cookiesNameParts[2],uuid:cookieValueParts[0],partIdx:cookieValueParts[1]});});return resumableFilesData;}
return[];}};return api;};(function($){"use strict";var uploader,$el,init,dataStore,pluginOption,pluginOptions,addCallbacks,transformVariables,isValidCommand,delegateCommand;pluginOptions=['uploaderType'];init=function(options){if(options){var xformedOpts=transformVariables(options);addCallbacks(xformedOpts);if(pluginOption('uploaderType')==='basic'){uploader(new qq.FineUploaderBasic(xformedOpts));}
else{uploader(new qq.FineUploader(xformedOpts));}}
return $el;};dataStore=function(key,val){var data=$el.data('fineuploader');if(val){if(data===undefined){data={};}
data[key]=val;$el.data('fineuploader',data);}
else{if(data===undefined){return null;}
return data[key];}};uploader=function(instanceToStore){return dataStore('uploader',instanceToStore);};pluginOption=function(option,optionVal){return dataStore(option,optionVal);};addCallbacks=function(transformedOpts){var callbacks=transformedOpts.callbacks={},uploaderInst=new qq.FineUploaderBasic();$.each(uploaderInst._options.callbacks,function(prop,func){var name,$callbackEl;name=/^on(\w+)/.exec(prop)[1];name=name.substring(0,1).toLowerCase()+name.substring(1);$callbackEl=$el;callbacks[prop]=function(){var origFunc=func,args=Array.prototype.slice.call(arguments),jqueryHandlerResult=$callbackEl.triggerHandler(name,args);if(jqueryHandlerResult===undefined&&$.inArray(prop,uploaderInst.getPromissoryCallbackNames())>=0){return origFunc();}
return jqueryHandlerResult;};});};transformVariables=function(source,dest){var xformed,arrayVals;if(dest===undefined){if(source.uploaderType!=='basic'){xformed={element:$el[0]};}
else{xformed={};}}
else{xformed=dest;}
$.each(source,function(prop,val){if($.inArray(prop,pluginOptions)>=0){pluginOption(prop,val);}
else if(val instanceof $){xformed[prop]=val[0];}
else if($.isPlainObject(val)){xformed[prop]={};transformVariables(val,xformed[prop]);}
else if($.isArray(val)){arrayVals=[];$.each(val,function(idx,arrayVal){if(arrayVal instanceof $){$.merge(arrayVals,arrayVal);}
else{arrayVals.push(arrayVal);}});xformed[prop]=arrayVals;}
else{xformed[prop]=val;}});if(dest===undefined){return xformed;}};isValidCommand=function(command){return $.type(command)==="string"&&!command.match(/^_/)&&uploader()[command]!==undefined;};delegateCommand=function(command){var xformedArgs=[],origArgs=Array.prototype.slice.call(arguments,1);transformVariables(origArgs,xformedArgs);return uploader()[command].apply(uploader(),xformedArgs);};$.fn.fineUploader=function(optionsOrCommand){var self=this,selfArgs=arguments,retVals=[];this.each(function(index,el){$el=$(el);if(uploader()&&isValidCommand(optionsOrCommand)){retVals.push(delegateCommand.apply(self,selfArgs));if(self.length===1){return false;}}
else if(typeof optionsOrCommand==='object'||!optionsOrCommand){init.apply(self,selfArgs);}
else{$.error('Method '+optionsOrCommand+' does not exist on jQuery.fineUploader');}});if(retVals.length===1){return retVals[0];}
else if(retVals.length>1){return retVals;}
return this;};}(jQuery));

function formControl(el,options){var $this=$(el);var wrongEl=[];var settings={addChange:true,checkOnSubmit:true,ajaxURL:'',submitURL:'',success:function(){},msg:{not_empty:core.tr('not_empty'),int:core.tr('int'),email:core.tr('email_check'),no_dupl:core.tr('no_dupl'),range:core.tr('range'),regex:core.tr('regex'),no_data_to_save:core.tr('no_data_to_save'),errors_in_form:core.tr('errors_in_form'),ajax_error:core.tr('ajax_error'),no_rules_for:core.tr('no_rules_for')}};if(options){settings=$.extend(settings,options);}
if(settings.addChange){$this.find(':input').change(function(){$(this).attr('changed','auto');});}
this.observe=function(){wrongEl=[];$this.find(':input[check]').change(function(){removeError(this);var el=$(this);if(el.attr('check')&&el.attr('check')!='undefined'){var thisCheckTypes=el.attr('check').split(' ');$.each(thisCheckTypes,function(index,type){checkInput(el,type,settings);});}});return this;};this.check=function(){wrongEl=[];removeError();var checkTypes=['not_empty','int','email','no_dupl','range','regex'];$.each(checkTypes,function(index,id){if(id!='no_dupl'){$this.find('[check~="'+id+'"]').each(function(index,el){checkInput($(el),id);});}});return this;};this.send=function(all){if(wrongEl.length>0){core.message(settings.msg.errors_in_form,'error');}else{if(all){var ser=$this.serialize();}else{var not_changed=$this.find(':input:not([changed])');not_changed.attr('disabled','disabled');var ser=$this.serialize();not_changed.removeAttr('disabled');}
if(!ser){core.message(settings.msg.no_data_to_save,'error');}else{$.post(settings.submitURL,ser,function(data){if(data.status=='success'){$this.find(':input[changed="auto"]').removeAttr('changed');core.message(data.verbose,'success');settings.success(data);}else if(data.status=='error'){core.message(data.verbose,'error');}else{core.message(data.verbose,'error');}},'json');}}
return this;};this.option=function(key,value){if(value){settings[key]=value;return this;}else{return settings[key];}};var styleError=function(input,checkType){if(!input.hasClass('notValid')){$('<span />').addClass('notValid').html('*'+checkType).insertAfter(input).position({my:'left center',at:'right-10 center',of:input});}else{input.next('span.notValid').append('<br />'+checkType);}
input.addClass('notValid');};var removeError=function(el){if(el){$(el).next('span.notValid').remove();$(el).removeClass('notValid');}else{$this.find('span.notValid').remove();$this.find(':input.notValid').removeClass('notValid');}};var checkInput=function(input,checkType){var val=input.val();switch(checkType){case'int':if(isNaN(val)){styleError(input,settings.msg[checkType]);wrongEl.push(input);}
break;case'email':var emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;if(val!=''&&!emailPattern.test(val)){styleError(input,settings.msg[checkType]);wrongEl.push(input);}
break;case'not_empty':if(val==''){styleError(input,settings.msg[checkType]);wrongEl.push(input);}
break;case'no_dupl':if(val){$.ajax({url:settings.ajaxURL+'&fld='+input.attr('name')+'&val='+val,complete:function(data){if(data.responseText=='error'){styleError(input,settings.msg[checkType]);wrongEl.push(input);}},error:function(data){styleError(input,settings.msg.ajax_error);core.message(settings.msg.ajax_error,'error');}});}
break;case'range':var min=parseInt(input.attr('min'));var max=parseInt(input.attr('max'));val=parseInt(val);if(val<min||val>max||isNaN(val)){styleError(input,settings.msg[checkType]+' ('+min+' - '+max+')');wrongEl.push(input);}
break;case'regex':var mypattern=input.attr('mypattern');var pattern=new RegExp(mypattern);if(!pattern.test(val)){styleError(input,settings.msg[checkType]+' ('+mypattern+')');wrongEl.push(input);}
break;default:console.log(settings.msg.no_rules_for+' '+checkType);break;}};return this;}

(function($){if(typeof $.fn.each2=="undefined"){$.fn.extend({each2:function(c){var j=$([0]),i=-1,l=this.length;while(++i<l&&(j.context=j[0]=this[i])&&c.call(j[0],i,j)!==false);return this;}});}})(jQuery);(function($,undefined){"use strict";if(window.Select2!==undefined){return;}
var KEY,AbstractSelect2,SingleSelect2,MultiSelect2,nextUid,sizer;KEY={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(k){k=k.which?k.which:k;switch(k){case KEY.LEFT:case KEY.RIGHT:case KEY.UP:case KEY.DOWN:return true;}
return false;},isControl:function(e){var k=e.which;switch(k){case KEY.SHIFT:case KEY.CTRL:case KEY.ALT:return true;}
if(e.metaKey)return true;return false;},isFunctionKey:function(k){k=k.which?k.which:k;return k>=112&&k<=123;}};nextUid=(function(){var counter=1;return function(){return counter++;};}());function indexOf(value,array){var i=0,l=array.length,v;if(typeof value==="undefined"){return-1;}
if(value.constructor===String){for(;i<l;i=i+1)if(value.localeCompare(array[i])===0)return i;}else{for(;i<l;i=i+1){v=array[i];if(v.constructor===String){if(v.localeCompare(value)===0)return i;}else{if(v===value)return i;}}}
return-1;}
function equal(a,b){if(a===b)return true;if(a===undefined||b===undefined)return false;if(a===null||b===null)return false;if(a.constructor===String)return a.localeCompare(b)===0;if(b.constructor===String)return b.localeCompare(a)===0;return false;}
function splitVal(string,separator){var val,i,l;if(string===null||string.length<1)return[];val=string.split(separator);for(i=0,l=val.length;i<l;i=i+1)val[i]=$.trim(val[i]);return val;}
function getSideBorderPadding(element){return element.outerWidth()-element.width();}
function installKeyUpChangeEvent(element){var key="keyup-change-value";element.bind("keydown",function(){if($.data(element,key)===undefined){$.data(element,key,element.val());}});element.bind("keyup",function(){var val=$.data(element,key);if(val!==undefined&&element.val()!==val){$.removeData(element,key);element.trigger("keyup-change");}});}
$(document).delegate("body","mousemove",function(e){$.data(document,"select2-lastpos",{x:e.pageX,y:e.pageY});});function installFilteredMouseMove(element){element.bind("mousemove",function(e){var lastpos=$.data(document,"select2-lastpos");if(lastpos===undefined||lastpos.x!==e.pageX||lastpos.y!==e.pageY){$(e.target).trigger("mousemove-filtered",e);}});}
function debounce(quietMillis,fn,ctx){ctx=ctx||undefined;var timeout;return function(){var args=arguments;window.clearTimeout(timeout);timeout=window.setTimeout(function(){fn.apply(ctx,args);},quietMillis);};}
function thunk(formula){var evaluated=false,value;return function(){if(evaluated===false){value=formula();evaluated=true;}
return value;};};function installDebouncedScroll(threshold,element){var notify=debounce(threshold,function(e){element.trigger("scroll-debounced",e);});element.bind("scroll",function(e){if(indexOf(e.target,element.get())>=0)notify(e);});}
function killEvent(event){event.preventDefault();event.stopPropagation();}
function measureTextWidth(e){if(!sizer){var style=e[0].currentStyle||window.getComputedStyle(e[0],null);sizer=$("<div></div>").css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:style.fontSize,fontFamily:style.fontFamily,fontStyle:style.fontStyle,fontWeight:style.fontWeight,letterSpacing:style.letterSpacing,textTransform:style.textTransform,whiteSpace:"nowrap"});$("body").append(sizer);}
sizer.text(e.val());return sizer.width();}
function markMatch(text,term,markup){var match=text.toUpperCase().indexOf(term.toUpperCase()),tl=term.length;if(match<0){markup.push(text);return;}
markup.push(text.substring(0,match));markup.push("<span class='select2-match'>");markup.push(text.substring(match,match+tl));markup.push("</span>");markup.push(text.substring(match+tl,text.length));}
function ajax(options){var timeout,requestSequence=0,handler=null,quietMillis=options.quietMillis||100;return function(query){window.clearTimeout(timeout);timeout=window.setTimeout(function(){requestSequence+=1;var requestNumber=requestSequence,data=options.data,transport=options.transport||$.ajax,traditional=options.traditional||false,type=options.type||'GET';data=data.call(this,query.term,query.page,query.context);if(null!==handler){handler.abort();}
handler=transport.call(null,{url:options.url,dataType:options.dataType,data:data,type:type,traditional:traditional,success:function(data){if(requestNumber<requestSequence){return;}
var results=options.results(data,query.page);query.callback(results);}});},quietMillis);};}
function local(options){var data=options,dataText,text=function(item){return""+item.text;};if(!$.isArray(data)){text=data.text;if(!$.isFunction(text)){dataText=data.text;text=function(item){return item[dataText];};}
data=data.results;}
return function(query){var t=query.term,filtered={results:[]},process;if(t===""){query.callback({results:data});return;}
process=function(datum,collection){var group,attr;datum=datum[0];if(datum.children){group={};for(attr in datum){if(datum.hasOwnProperty(attr))group[attr]=datum[attr];}
group.children=[];$(datum.children).each2(function(i,childDatum){process(childDatum,group.children);});if(group.children.length){collection.push(group);}}else{if(query.matcher(t,text(datum))){collection.push(datum);}}};$(data).each2(function(i,datum){process(datum,filtered.results);});query.callback(filtered);};}
function tags(data){if($.isFunction(data)){return data;}
return function(query){var t=query.term,filtered={results:[]};$(data).each(function(){var isObject=this.text!==undefined,text=isObject?this.text:this;if(t===""||query.matcher(t,text)){filtered.results.push(isObject?this:{id:this,text:this});}});query.callback(filtered);};}
function checkFormatter(formatter,formatterName){if($.isFunction(formatter))return true;if(!formatter)return false;throw new Error("formatterName must be a function or a falsy value");}
function evaluate(val){return $.isFunction(val)?val():val;}
function countResults(results){var count=0;$.each(results,function(i,item){if(item.children){count+=countResults(item.children);}else{count++;}});return count;}
function defaultTokenizer(input,selection,selectCallback,opts){var original=input,dupe=false,token,index,i,l,separator;if(!opts.createSearchChoice||!opts.tokenSeparators||opts.tokenSeparators.length<1)return undefined;while(true){index=-1;for(i=0,l=opts.tokenSeparators.length;i<l;i++){separator=opts.tokenSeparators[i];index=input.indexOf(separator);if(index>=0)break;}
if(index<0)break;token=input.substring(0,index);input=input.substring(index+separator.length);if(token.length>0){token=opts.createSearchChoice(token,selection);if(token!==undefined&&token!==null&&opts.id(token)!==undefined&&opts.id(token)!==null){dupe=false;for(i=0,l=selection.length;i<l;i++){if(equal(opts.id(token),opts.id(selection[i]))){dupe=true;break;}}
if(!dupe)selectCallback(token);}}}
if(original.localeCompare(input)!=0)return input;}
$(document).ready(function(){$(document).delegate("body","mousedown touchend",function(e){var target=$(e.target).closest("div.select2-container").get(0),attr;if(target){$(document).find("div.select2-container-active").each(function(){if(this!==target)$(this).data("select2").blur();});}else{target=$(e.target).closest("div.select2-drop").get(0);$(document).find("div.select2-drop-active").each(function(){if(this!==target)$(this).data("select2").blur();});}
target=$(e.target);attr=target.attr("for");if("LABEL"===e.target.tagName&&attr&&attr.length>0){target=$("#"+attr);target=target.data("select2");if(target!==undefined){target.focus();e.preventDefault();}}});});function clazz(SuperClass,methods){var constructor=function(){};constructor.prototype=new SuperClass;constructor.prototype.constructor=constructor;constructor.prototype.parent=SuperClass.prototype;constructor.prototype=$.extend(constructor.prototype,methods);return constructor;}
AbstractSelect2=clazz(Object,{bind:function(func){var self=this;return function(){func.apply(self,arguments);};},init:function(opts){var results,search,resultsSelector=".select2-results";this.opts=opts=this.prepareOpts(opts);this.id=opts.id;if(opts.element.data("select2")!==undefined&&opts.element.data("select2")!==null){this.destroy();}
this.enabled=true;this.container=this.createContainer();this.containerId="s2id_"+(opts.element.attr("id")||"autogen"+nextUid());this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,'\\$1');this.container.attr("id",this.containerId);this.body=thunk(function(){return opts.element.closest("body");});if(opts.element.attr("class")!==undefined){this.container.addClass(opts.element.attr("class").replace(/validate\[[\S ]+] ?/,''));}
this.container.css(evaluate(opts.containerCss));this.container.addClass(evaluate(opts.containerCssClass));this.opts.element.data("select2",this).hide().before(this.container);this.container.data("select2",this);this.dropdown=this.container.find(".select2-drop");this.dropdown.addClass(evaluate(opts.dropdownCssClass));this.dropdown.data("select2",this);this.results=results=this.container.find(resultsSelector);this.search=search=this.container.find("input.select2-input");search.attr("tabIndex",this.opts.element.attr("tabIndex"));this.resultsPage=0;this.context=null;this.initContainer();this.initContainerWidth();installFilteredMouseMove(this.results);this.dropdown.delegate(resultsSelector,"mousemove-filtered",this.bind(this.highlightUnderEvent));installDebouncedScroll(80,this.results);this.dropdown.delegate(resultsSelector,"scroll-debounced",this.bind(this.loadMoreIfNeeded));if($.fn.mousewheel){results.mousewheel(function(e,delta,deltaX,deltaY){var top=results.scrollTop(),height;if(deltaY>0&&top-deltaY<=0){results.scrollTop(0);killEvent(e);}else if(deltaY<0&&results.get(0).scrollHeight-results.scrollTop()+deltaY<=results.height()){results.scrollTop(results.get(0).scrollHeight-results.height());killEvent(e);}});}
installKeyUpChangeEvent(search);search.bind("keyup-change",this.bind(this.updateResults));search.bind("focus",function(){search.addClass("select2-focused");if(search.val()===" ")search.val("");});search.bind("blur",function(){search.removeClass("select2-focused");});this.dropdown.delegate(resultsSelector,"mouseup",this.bind(function(e){if($(e.target).closest(".select2-result-selectable:not(.select2-disabled)").length>0){this.highlightUnderEvent(e);this.selectHighlighted(e);}else{this.focusSearch();}
killEvent(e);}));this.dropdown.bind("click mouseup mousedown",function(e){e.stopPropagation();});if($.isFunction(this.opts.initSelection)){this.initSelection();this.monitorSource();}
if(opts.element.is(":disabled")||opts.element.is("[readonly='readonly']"))this.disable();},destroy:function(){var select2=this.opts.element.data("select2");if(select2!==undefined){select2.container.remove();select2.dropdown.remove();select2.opts.element.removeData("select2").unbind(".select2").show();}},prepareOpts:function(opts){var element,select,idKey,ajaxUrl;element=opts.element;if(element.get(0).tagName.toLowerCase()==="select"){this.select=select=opts.element;}
if(select){$.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in opts){throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.");}});}
opts=$.extend({},{populateResults:function(container,results,query){var populate,data,result,children,id=this.opts.id,self=this;populate=function(results,container,depth){var i,l,result,selectable,compound,node,label,innerContainer,formatted;for(i=0,l=results.length;i<l;i=i+1){result=results[i];selectable=id(result)!==undefined;compound=result.children&&result.children.length>0;node=$("<li></li>");node.addClass("select2-results-dept-"+depth);node.addClass("select2-result");node.addClass(selectable?"select2-result-selectable":"select2-result-unselectable");if(compound){node.addClass("select2-result-with-children");}
node.addClass(self.opts.formatResultCssClass(result));label=$("<div></div>");label.addClass("select2-result-label");formatted=opts.formatResult(result,label,query);if(formatted!==undefined){label.html(self.opts.escapeMarkup(formatted));}
node.append(label);if(compound){innerContainer=$("<ul></ul>");innerContainer.addClass("select2-result-sub");populate(result.children,innerContainer,depth+1);node.append(innerContainer);}
node.data("select2-data",result);container.append(node);}};populate(results,container,0);}},$.fn.select2.defaults,opts);if(typeof(opts.id)!=="function"){idKey=opts.id;opts.id=function(e){return e[idKey];};}
if(select){opts.query=this.bind(function(query){var data={results:[],more:false},term=query.term,children,firstChild,process;process=function(element,collection){var group;if(element.is("option")){if(query.matcher(term,element.text(),element)){collection.push({id:element.attr("value"),text:element.text(),element:element.get(),css:element.attr("class")});}}else if(element.is("optgroup")){group={text:element.attr("label"),children:[],element:element.get(),css:element.attr("class")};element.children().each2(function(i,elm){process(elm,group.children);});if(group.children.length>0){collection.push(group);}}};children=element.children();if(this.getPlaceholder()!==undefined&&children.length>0){firstChild=children[0];if($(firstChild).text()===""){children=children.not(firstChild);}}
children.each2(function(i,elm){process(elm,data.results);});query.callback(data);});opts.id=function(e){return e.id;};opts.formatResultCssClass=function(data){return data.css;}}else{if(!("query"in opts)){if("ajax"in opts){ajaxUrl=opts.element.data("ajax-url");if(ajaxUrl&&ajaxUrl.length>0){opts.ajax.url=ajaxUrl;}
opts.query=ajax(opts.ajax);}else if("data"in opts){opts.query=local(opts.data);}else if("tags"in opts){opts.query=tags(opts.tags);opts.createSearchChoice=function(term){return{id:term,text:term};};opts.initSelection=function(element,callback){var data=[];$(splitVal(element.val(),opts.separator)).each(function(){var id=this,text=this,tags=opts.tags;if($.isFunction(tags))tags=tags();$(tags).each(function(){if(equal(this.id,id)){text=this.text;return false;}});data.push({id:id,text:text});});callback(data);};}}}
if(typeof(opts.query)!=="function"){throw"query function not defined for Select2 "+opts.element.attr("id");}
return opts;},monitorSource:function(){this.opts.element.bind("change.select2",this.bind(function(e){if(this.opts.element.data("select2-change-triggered")!==true){this.initSelection();}}));},triggerChange:function(details){details=details||{};details=$.extend({},details,{type:"change",val:this.val()});this.opts.element.data("select2-change-triggered",true);this.opts.element.trigger(details);this.opts.element.data("select2-change-triggered",false);this.opts.element.click();if(this.opts.blurOnChange)
this.opts.element.blur();},enable:function(){if(this.enabled)return;this.enabled=true;this.container.removeClass("select2-container-disabled");},disable:function(){if(!this.enabled)return;this.close();this.enabled=false;this.container.addClass("select2-container-disabled");},opened:function(){return this.container.hasClass("select2-dropdown-open");},positionDropdown:function(){var offset=this.container.offset(),height=this.container.outerHeight(),width=this.container.outerWidth(),dropHeight=this.dropdown.outerHeight(),viewportBottom=$(window).scrollTop()+document.documentElement.clientHeight,dropTop=offset.top+height,dropLeft=offset.left,enoughRoomBelow=dropTop+dropHeight<=viewportBottom,enoughRoomAbove=(offset.top-dropHeight)>=this.body().scrollTop(),aboveNow=this.dropdown.hasClass("select2-drop-above"),bodyOffset,above,css;if(this.body().css('position')!=='static'){bodyOffset=this.body().offset();dropTop-=bodyOffset.top;dropLeft-=bodyOffset.left;}
if(aboveNow){above=true;if(!enoughRoomAbove&&enoughRoomBelow)above=false;}else{above=false;if(!enoughRoomBelow&&enoughRoomAbove)above=true;}
if(above){dropTop=offset.top-dropHeight;this.container.addClass("select2-drop-above");this.dropdown.addClass("select2-drop-above");}
else{this.container.removeClass("select2-drop-above");this.dropdown.removeClass("select2-drop-above");}
css=$.extend({top:dropTop,left:dropLeft,width:width},evaluate(this.opts.dropdownCss));this.dropdown.css(css);},shouldOpen:function(){var event;if(this.opened())return false;event=$.Event("open");this.opts.element.trigger(event);return!event.isDefaultPrevented();},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above");this.dropdown.removeClass("select2-drop-above");},open:function(){if(!this.shouldOpen())return false;window.setTimeout(this.bind(this.opening),1);return true;},opening:function(){var cid=this.containerId,selector=this.containerSelector,scroll="scroll."+cid,resize="resize."+cid;this.container.parents().each(function(){$(this).bind(scroll,function(){var s2=$(selector);if(s2.length==0){$(this).unbind(scroll);}
s2.select2("close");});});$(window).bind(resize,function(){var s2=$(selector);if(s2.length==0){$(window).unbind(resize);}
s2.select2("close");});this.clearDropdownAlignmentPreference();if(this.search.val()===" "){this.search.val("");}
this.container.addClass("select2-dropdown-open").addClass("select2-container-active");this.updateResults(true);if(this.dropdown[0]!==this.body().children().last()[0]){this.dropdown.detach().appendTo(this.body());}
this.dropdown.show();this.positionDropdown();this.dropdown.addClass("select2-drop-active");this.ensureHighlightVisible();this.focusSearch();},close:function(){if(!this.opened())return;var self=this;this.container.parents().each(function(){$(this).unbind("scroll."+self.containerId);});$(window).unbind("resize."+this.containerId);this.clearDropdownAlignmentPreference();this.dropdown.hide();this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");this.results.empty();this.clearSearch();this.opts.element.trigger($.Event("close"));},clearSearch:function(){},ensureHighlightVisible:function(){var results=this.results,children,index,child,hb,rb,y,more;index=this.highlight();if(index<0)return;if(index==0){results.scrollTop(0);return;}
children=results.find(".select2-result-selectable");child=$(children[index]);hb=child.offset().top+child.outerHeight();if(index===children.length-1){more=results.find("li.select2-more-results");if(more.length>0){hb=more.offset().top+more.outerHeight();}}
rb=results.offset().top+results.outerHeight();if(hb>rb){results.scrollTop(results.scrollTop()+(hb-rb));}
y=child.offset().top-results.offset().top;if(y<0){results.scrollTop(results.scrollTop()+y);}},moveHighlight:function(delta){var choices=this.results.find(".select2-result-selectable"),index=this.highlight();while(index>-1&&index<choices.length){index+=delta;var choice=$(choices[index]);if(choice.hasClass("select2-result-selectable")&&!choice.hasClass("select2-disabled")){this.highlight(index);break;}}},highlight:function(index){var choices=this.results.find(".select2-result-selectable").not(".select2-disabled");if(arguments.length===0){return indexOf(choices.filter(".select2-highlighted")[0],choices.get());}
if(index>=choices.length)index=choices.length-1;if(index<0)index=0;choices.removeClass("select2-highlighted");$(choices[index]).addClass("select2-highlighted");this.ensureHighlightVisible();},countSelectableResults:function(){return this.results.find(".select2-result-selectable").not(".select2-disabled").length;},highlightUnderEvent:function(event){var el=$(event.target).closest(".select2-result-selectable");if(el.length>0&&!el.is(".select2-highlighted")){var choices=this.results.find('.select2-result-selectable');this.highlight(choices.index(el));}else if(el.length==0){this.results.find(".select2-highlighted").removeClass("select2-highlighted");}},loadMoreIfNeeded:function(){var results=this.results,more=results.find("li.select2-more-results"),below,offset=-1,page=this.resultsPage+1,self=this,term=this.search.val(),context=this.context;if(more.length===0)return;below=more.offset().top-results.offset().top-results.height();if(below<=0){more.addClass("select2-active");this.opts.query({term:term,page:page,context:context,matcher:this.opts.matcher,callback:this.bind(function(data){if(!self.opened())return;self.opts.populateResults.call(this,results,data.results,{term:term,page:page,context:context});if(data.more===true){more.detach().appendTo(results).text(self.opts.formatLoadMore(page+1));window.setTimeout(function(){self.loadMoreIfNeeded();},10);}else{more.remove();}
self.positionDropdown();self.resultsPage=page;})});}},tokenize:function(){},updateResults:function(initial){var search=this.search,results=this.results,opts=this.opts,data,self=this,input;if(initial!==true&&(this.showSearchInput===false||!this.opened())){return;}
search.addClass("select2-active");function postRender(){results.scrollTop(0);search.removeClass("select2-active");self.positionDropdown();}
function render(html){results.html(self.opts.escapeMarkup(html));postRender();}
if(opts.maximumSelectionSize>=1){data=this.data();if($.isArray(data)&&data.length>=opts.maximumSelectionSize&&checkFormatter(opts.formatSelectionTooBig,"formatSelectionTooBig")){render("<li class='select2-selection-limit'>"+opts.formatSelectionTooBig(opts.maximumSelectionSize)+"</li>");return;}}
if(search.val().length<opts.minimumInputLength&&checkFormatter(opts.formatInputTooShort,"formatInputTooShort")){render("<li class='select2-no-results'>"+opts.formatInputTooShort(search.val(),opts.minimumInputLength)+"</li>");return;}
else{render("<li class='select2-searching'>"+opts.formatSearching()+"</li>");}
input=this.tokenize();if(input!=undefined&&input!=null){search.val(input);}
this.resultsPage=1;opts.query({term:search.val(),page:this.resultsPage,context:null,matcher:opts.matcher,callback:this.bind(function(data){var def;if(!this.opened())return;this.context=(data.context===undefined)?null:data.context;if(this.opts.createSearchChoice&&search.val()!==""){def=this.opts.createSearchChoice.call(null,search.val(),data.results);if(def!==undefined&&def!==null&&self.id(def)!==undefined&&self.id(def)!==null){if($(data.results).filter(function(){return equal(self.id(this),self.id(def));}).length===0){data.results.unshift(def);}}}
if(data.results.length===0&&checkFormatter(opts.formatNoMatches,"formatNoMatches")){render("<li class='select2-no-results'>"+opts.formatNoMatches(search.val())+"</li>");return;}
results.empty();self.opts.populateResults.call(this,results,data.results,{term:search.val(),page:this.resultsPage,context:null});if(data.more===true&&checkFormatter(opts.formatLoadMore,"formatLoadMore")){results.append("<li class='select2-more-results'>"+self.opts.escapeMarkup(opts.formatLoadMore(this.resultsPage))+"</li>");window.setTimeout(function(){self.loadMoreIfNeeded();},10);}
this.postprocessResults(data,initial);postRender();})});},cancel:function(){this.close();},blur:function(){this.close();this.container.removeClass("select2-container-active");this.dropdown.removeClass("select2-drop-active");if(this.search[0]===document.activeElement){this.search.blur();}
this.clearSearch();this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");},focusSearch:function(){this.search.show();this.search.focus();window.setTimeout(this.bind(function(){this.search.show();this.search.focus();this.search.val(this.search.val());}),10);},selectHighlighted:function(){var index=this.highlight(),highlighted=this.results.find(".select2-highlighted").not(".select2-disabled"),data=highlighted.closest('.select2-result-selectable').data("select2-data");if(data){highlighted.addClass("select2-disabled");this.highlight(index);this.onSelect(data);}},getPlaceholder:function(){return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder;},initContainerWidth:function(){function resolveContainerWidth(){var style,attrs,matches,i,l;if(this.opts.width==="off"){return null;}else if(this.opts.width==="element"){return this.opts.element.outerWidth()===0?'auto':this.opts.element.outerWidth()+'px';}else if(this.opts.width==="copy"||this.opts.width==="resolve"){style=this.opts.element.attr('style');if(style!==undefined){attrs=style.split(';');for(i=0,l=attrs.length;i<l;i=i+1){matches=attrs[i].replace(/\s/g,'').match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/);if(matches!==null&&matches.length>=1)
return matches[1];}}
if(this.opts.width==="resolve"){style=this.opts.element.css('width');if(style.indexOf("%")>0)return style;return(this.opts.element.outerWidth()===0?'auto':this.opts.element.outerWidth()+'px');}
return null;}else if($.isFunction(this.opts.width)){return this.opts.width();}else{return this.opts.width;}};var width=resolveContainerWidth.call(this);if(width!==null){this.container.attr("style","width: "+width);}}});SingleSelect2=clazz(AbstractSelect2,{createContainer:function(){var container=$("<div></div>",{"class":"select2-container"}).html(["    <a href='#' onclick='return false;' class='select2-choice'>","   <span></span><abbr class='select2-search-choice-close' style='display:none;'></abbr>","   <div><b></b></div>","</a>","    <div class='select2-drop select2-offscreen'>","   <div class='select2-search'>","       <input type='text' autocomplete='off' class='select2-input'/>","   </div>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return container;},opening:function(){this.search.show();this.parent.opening.apply(this,arguments);this.dropdown.removeClass("select2-offscreen");},close:function(){if(!this.opened())return;this.parent.close.apply(this,arguments);this.dropdown.removeAttr("style").addClass("select2-offscreen").insertAfter(this.selection).show();},focus:function(){this.close();this.selection.focus();},isFocused:function(){return this.selection[0]===document.activeElement;},cancel:function(){this.parent.cancel.apply(this,arguments);this.selection.focus();},initContainer:function(){var selection,container=this.container,dropdown=this.dropdown,clickingInside=false;this.selection=selection=container.find(".select2-choice");this.search.bind("keydown",this.bind(function(e){if(!this.enabled)return;if(e.which===KEY.PAGE_UP||e.which===KEY.PAGE_DOWN){killEvent(e);return;}
if(this.opened()){switch(e.which){case KEY.UP:case KEY.DOWN:this.moveHighlight((e.which===KEY.UP)?-1:1);killEvent(e);return;case KEY.TAB:case KEY.ENTER:this.selectHighlighted();killEvent(e);return;case KEY.ESC:this.cancel(e);killEvent(e);return;}}else{if(e.which===KEY.TAB||KEY.isControl(e)||KEY.isFunctionKey(e)||e.which===KEY.ESC){return;}
if(this.opts.openOnEnter===false&&e.which===KEY.ENTER){return;}
this.open();if(e.which===KEY.ENTER){return;}}}));this.search.bind("focus",this.bind(function(){this.selection.attr("tabIndex","-1");}));this.search.bind("blur",this.bind(function(){if(!this.opened())this.container.removeClass("select2-container-active");window.setTimeout(this.bind(function(){this.selection.attr("tabIndex",this.opts.element.attr("tabIndex"));}),10);}));selection.bind("mousedown",this.bind(function(e){clickingInside=true;if(this.opened()){this.close();this.selection.focus();}else if(this.enabled){this.open();}
clickingInside=false;}));dropdown.bind("mousedown",this.bind(function(){this.search.focus();}));selection.bind("focus",this.bind(function(){this.container.addClass("select2-container-active");this.search.attr("tabIndex","-1");}));selection.bind("blur",this.bind(function(){if(!this.opened()){this.container.removeClass("select2-container-active");}
window.setTimeout(this.bind(function(){this.search.attr("tabIndex",this.opts.element.attr("tabIndex"));}),10);}));selection.bind("keydown",this.bind(function(e){if(!this.enabled)return;if(e.which===KEY.PAGE_UP||e.which===KEY.PAGE_DOWN){killEvent(e);return;}
if(e.which===KEY.TAB||KEY.isControl(e)||KEY.isFunctionKey(e)||e.which===KEY.ESC){return;}
if(this.opts.openOnEnter===false&&e.which===KEY.ENTER){return;}
if(e.which==KEY.DELETE){if(this.opts.allowClear){this.clear();}
return;}
this.open();if(e.which===KEY.ENTER){killEvent(e);return;}
if(e.which<48){killEvent(e);return;}
var keyWritten=String.fromCharCode(e.which).toLowerCase();if(e.shiftKey){keyWritten=keyWritten.toUpperCase();}
this.search.focus();this.search.val(keyWritten);killEvent(e);}));selection.delegate("abbr","mousedown",this.bind(function(e){if(!this.enabled)return;this.clear();killEvent(e);this.close();this.triggerChange();this.selection.focus();}));this.setPlaceholder();this.search.bind("focus",this.bind(function(){this.container.addClass("select2-container-active");}));},clear:function(){this.opts.element.val("");this.selection.find("span").empty();this.selection.removeData("select2-data");this.setPlaceholder();},initSelection:function(){var selected;if(this.opts.element.val()===""){this.close();this.setPlaceholder();}else{var self=this;this.opts.initSelection.call(null,this.opts.element,function(selected){if(selected!==undefined&&selected!==null){self.updateSelection(selected);self.close();self.setPlaceholder();}});}},prepareOpts:function(){var opts=this.parent.prepareOpts.apply(this,arguments);if(opts.element.get(0).tagName.toLowerCase()==="select"){opts.initSelection=function(element,callback){var selected=element.find(":selected");if($.isFunction(callback))
callback({id:selected.attr("value"),text:selected.text()});};}
return opts;},setPlaceholder:function(){var placeholder=this.getPlaceholder();if(this.opts.element.val()===""&&placeholder!==undefined){if(this.select&&this.select.find("option:first").text()!=="")return;this.selection.find("span").html(this.opts.escapeMarkup(placeholder));this.selection.addClass("select2-default");this.selection.find("abbr").hide();}},postprocessResults:function(data,initial){var selected=0,self=this,showSearchInput=true;this.results.find(".select2-result-selectable").each2(function(i,elm){if(equal(self.id(elm.data("select2-data")),self.opts.element.val())){selected=i;return false;}});this.highlight(selected);if(initial===true){showSearchInput=this.showSearchInput=countResults(data.results)>=this.opts.minimumResultsForSearch;this.dropdown.find(".select2-search")[showSearchInput?"removeClass":"addClass"]("select2-search-hidden");$(this.dropdown,this.container)[showSearchInput?"addClass":"removeClass"]("select2-with-searchbox");}},onSelect:function(data){var old=this.opts.element.val();this.opts.element.val(this.id(data));this.updateSelection(data);this.close();this.selection.focus();if(!equal(old,this.id(data))){this.triggerChange();}},updateSelection:function(data){var container=this.selection.find("span"),formatted;this.selection.data("select2-data",data);container.empty();formatted=this.opts.formatSelection(data,container);if(formatted!==undefined){container.append(this.opts.escapeMarkup(formatted));}
this.selection.removeClass("select2-default");if(this.opts.allowClear&&this.getPlaceholder()!==undefined){this.selection.find("abbr").show();}},val:function(){var val,data=null,self=this;if(arguments.length===0){return this.opts.element.val();}
val=arguments[0];if(this.select){this.select.val(val).find(":selected").each2(function(i,elm){data={id:elm.attr("value"),text:elm.text()};return false;});this.updateSelection(data);this.setPlaceholder();}else{if(this.opts.initSelection===undefined){throw new Error("cannot call val() if initSelection() is not defined");}
if(!val){this.clear();return;}
this.opts.element.val(val);this.opts.initSelection(this.opts.element,function(data){self.opts.element.val(!data?"":self.id(data));self.updateSelection(data);self.setPlaceholder();});}},clearSearch:function(){this.search.val("");},data:function(value){var data;if(arguments.length===0){data=this.selection.data("select2-data");if(data==undefined)data=null;return data;}else{if(!value||value===""){this.clear();}else{this.opts.element.val(!value?"":this.id(value));this.updateSelection(value);}}}});MultiSelect2=clazz(AbstractSelect2,{createContainer:function(){var container=$("<div></div>",{"class":"select2-container select2-container-multi"}).html(["    <ul class='select2-choices'>","  <li class='select2-search-field'>","    <input type='text' autocomplete='off' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi' style='display:none;'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return container;},prepareOpts:function(){var opts=this.parent.prepareOpts.apply(this,arguments);if(opts.element.get(0).tagName.toLowerCase()==="select"){opts.initSelection=function(element,callback){var data=[];element.find(":selected").each2(function(i,elm){data.push({id:elm.attr("value"),text:elm.text()});});if($.isFunction(callback))
callback(data);};}
return opts;},initContainer:function(){var selector=".select2-choices",selection;this.searchContainer=this.container.find(".select2-search-field");this.selection=selection=this.container.find(selector);this.search.bind("keydown",this.bind(function(e){if(!this.enabled)return;if(e.which===KEY.BACKSPACE&&this.search.val()===""){this.close();var choices,selected=selection.find(".select2-search-choice-focus");if(selected.length>0){this.unselect(selected.first());this.search.width(10);killEvent(e);return;}
choices=selection.find(".select2-search-choice");if(choices.length>0){choices.last().addClass("select2-search-choice-focus");}}else{selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");}
if(this.opened()){switch(e.which){case KEY.UP:case KEY.DOWN:this.moveHighlight((e.which===KEY.UP)?-1:1);killEvent(e);return;case KEY.ENTER:case KEY.TAB:this.selectHighlighted();killEvent(e);return;case KEY.ESC:this.cancel(e);killEvent(e);return;}}
if(e.which===KEY.TAB||KEY.isControl(e)||KEY.isFunctionKey(e)||e.which===KEY.BACKSPACE||e.which===KEY.ESC){return;}
if(this.opts.openOnEnter===false&&e.which===KEY.ENTER){return;}
this.open();if(e.which===KEY.PAGE_UP||e.which===KEY.PAGE_DOWN){killEvent(e);}}));this.search.bind("keyup",this.bind(this.resizeSearch));this.search.bind("blur",this.bind(function(e){this.container.removeClass("select2-container-active");this.search.removeClass("select2-focused");this.clearSearch();e.stopImmediatePropagation();}));this.container.delegate(selector,"mousedown",this.bind(function(e){if(!this.enabled)return;if($(e.target).closest(".select2-search-choice").length>0){return;}
this.clearPlaceholder();this.open();this.focusSearch();e.preventDefault();}));this.container.delegate(selector,"focus",this.bind(function(){if(!this.enabled)return;this.container.addClass("select2-container-active");this.dropdown.addClass("select2-drop-active");this.clearPlaceholder();}));this.clearSearch();},enable:function(){if(this.enabled)return;this.parent.enable.apply(this,arguments);this.search.removeAttr("disabled");},disable:function(){if(!this.enabled)return;this.parent.disable.apply(this,arguments);this.search.attr("disabled",true);},initSelection:function(){var data;if(this.opts.element.val()===""){this.updateSelection([]);this.close();this.clearSearch();}
if(this.select||this.opts.element.val()!==""){var self=this;this.opts.initSelection.call(null,this.opts.element,function(data){if(data!==undefined&&data!==null){self.updateSelection(data);self.close();self.clearSearch();}});}},clearSearch:function(){var placeholder=this.getPlaceholder();if(placeholder!==undefined&&this.getVal().length===0&&this.search.hasClass("select2-focused")===false){this.search.val(placeholder).addClass("select2-default");this.resizeSearch();}else{this.search.val(" ").width(10);}},clearPlaceholder:function(){if(this.search.hasClass("select2-default")){this.search.val("").removeClass("select2-default");}else{if(this.search.val()===" ")this.search.val("");}},opening:function(){this.parent.opening.apply(this,arguments);this.clearPlaceholder();this.resizeSearch();this.focusSearch();},close:function(){if(!this.opened())return;this.parent.close.apply(this,arguments);},focus:function(){this.close();this.search.focus();},isFocused:function(){return this.search.hasClass("select2-focused");},updateSelection:function(data){var ids=[],filtered=[],self=this;$(data).each(function(){if(indexOf(self.id(this),ids)<0){ids.push(self.id(this));filtered.push(this);}});data=filtered;this.selection.find(".select2-search-choice").remove();$(data).each(function(){self.addSelectedChoice(this);});self.postprocessResults();},tokenize:function(){var input=this.search.val();input=this.opts.tokenizer(input,this.data(),this.bind(this.onSelect),this.opts);if(input!=null&&input!=undefined){this.search.val(input);if(input.length>0){this.open();}}},onSelect:function(data){this.addSelectedChoice(data);if(this.select){this.postprocessResults();}
if(this.opts.closeOnSelect){this.close();this.search.width(10);}else{if(this.countSelectableResults()>0){this.search.width(10);this.resizeSearch();this.positionDropdown();}else{this.close();}}
this.triggerChange({added:data});this.focusSearch();},cancel:function(){this.close();this.focusSearch();},addSelectedChoice:function(data){var choice=$("<li class='select2-search-choice'>"+"    <div></div>"+"    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a>"+"</li>"),id=this.id(data),val=this.getVal(),formatted;formatted=this.opts.formatSelection(data,choice);choice.find("div").replaceWith("<div>"+this.opts.escapeMarkup(formatted)+"</div>");choice.find(".select2-search-choice-close").bind("mousedown",killEvent).bind("click dblclick",this.bind(function(e){if(!this.enabled)return;$(e.target).closest(".select2-search-choice").fadeOut('fast',this.bind(function(){this.unselect($(e.target));this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");this.close();this.focusSearch();})).dequeue();killEvent(e);})).bind("focus",this.bind(function(){if(!this.enabled)return;this.container.addClass("select2-container-active");this.dropdown.addClass("select2-drop-active");}));choice.data("select2-data",data);choice.insertBefore(this.searchContainer);val.push(id);this.setVal(val);},unselect:function(selected){var val=this.getVal(),data,index;selected=selected.closest(".select2-search-choice");if(selected.length===0){throw"Invalid argument: "+selected+". Must be .select2-search-choice";}
data=selected.data("select2-data");index=indexOf(this.id(data),val);if(index>=0){val.splice(index,1);this.setVal(val);if(this.select)this.postprocessResults();}
selected.remove();this.triggerChange({removed:data});},postprocessResults:function(){var val=this.getVal(),choices=this.results.find(".select2-result-selectable"),compound=this.results.find(".select2-result-with-children"),self=this;choices.each2(function(i,choice){var id=self.id(choice.data("select2-data"));if(indexOf(id,val)>=0){choice.addClass("select2-disabled").removeClass("select2-result-selectable");}else{choice.removeClass("select2-disabled").addClass("select2-result-selectable");}});compound.each2(function(i,e){if(e.find(".select2-result-selectable").length==0){e.addClass("select2-disabled");}else{e.removeClass("select2-disabled");}});choices.each2(function(i,choice){if(!choice.hasClass("select2-disabled")&&choice.hasClass("select2-result-selectable")){self.highlight(0);return false;}});},resizeSearch:function(){var minimumWidth,left,maxWidth,containerLeft,searchWidth,sideBorderPadding=getSideBorderPadding(this.search);minimumWidth=measureTextWidth(this.search)+10;left=this.search.offset().left;maxWidth=this.selection.width();containerLeft=this.selection.offset().left;searchWidth=maxWidth-(left-containerLeft)-sideBorderPadding;if(searchWidth<minimumWidth){searchWidth=maxWidth-sideBorderPadding;}
if(searchWidth<40){searchWidth=maxWidth-sideBorderPadding;}
this.search.width(searchWidth);},getVal:function(){var val;if(this.select){val=this.select.val();return val===null?[]:val;}else{val=this.opts.element.val();return splitVal(val,this.opts.separator);}},setVal:function(val){var unique;if(this.select){this.select.val(val);}else{unique=[];$(val).each(function(){if(indexOf(this,unique)<0)unique.push(this);});this.opts.element.val(unique.length===0?"":unique.join(this.opts.separator));}},val:function(){var val,data=[],self=this;if(arguments.length===0){return this.getVal();}
val=arguments[0];if(!val){this.opts.element.val("");this.updateSelection([]);this.clearSearch();return;}
this.setVal(val);if(this.select){this.select.find(":selected").each(function(){data.push({id:$(this).attr("value"),text:$(this).text()});});this.updateSelection(data);}else{if(this.opts.initSelection===undefined){throw new Error("val() cannot be called if initSelection() is not defined")}
this.opts.initSelection(this.opts.element,function(data){var ids=$(data).map(self.id);self.setVal(ids);self.updateSelection(data);self.clearSearch();});}
this.clearSearch();},onSortStart:function(){if(this.select){throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");}
this.search.width(0);this.searchContainer.hide();},onSortEnd:function(){var val=[],self=this;this.searchContainer.show();this.searchContainer.appendTo(this.searchContainer.parent());this.resizeSearch();this.selection.find(".select2-search-choice").each(function(){val.push(self.opts.id($(this).data("select2-data")));});this.setVal(val);this.triggerChange();},data:function(values){var self=this,ids;if(arguments.length===0){return this.selection.find(".select2-search-choice").map(function(){return $(this).data("select2-data");}).get();}else{if(!values){values=[];}
ids=$.map(values,function(e){return self.opts.id(e)});this.setVal(ids);this.updateSelection(values);this.clearSearch();}}});$.fn.select2=function(){var args=Array.prototype.slice.call(arguments,0),opts,select2,value,multiple,allowedMethods=["val","destroy","opened","open","close","focus","isFocused","container","onSortStart","onSortEnd","enable","disable","positionDropdown","data"];this.each(function(){if(args.length===0||typeof(args[0])==="object"){opts=args.length===0?{}:$.extend({},args[0]);opts.element=$(this);if(opts.element.get(0).tagName.toLowerCase()==="select"){multiple=opts.element.attr("multiple");}else{multiple=opts.multiple||false;if("tags"in opts){opts.multiple=multiple=true;}}
select2=multiple?new MultiSelect2():new SingleSelect2();select2.init(opts);}else if(typeof(args[0])==="string"){if(indexOf(args[0],allowedMethods)<0){throw"Unknown method: "+args[0];}
value=undefined;select2=$(this).data("select2");if(select2===undefined)return;if(args[0]==="container"){value=select2.container;}else{value=select2[args[0]].apply(select2,args.slice(1));}
if(value!==undefined){return false;}}else{throw"Invalid arguments to select2 plugin: "+args;}});return(value===undefined)?this:value;};$.fn.select2.defaults={width:"copy",closeOnSelect:true,openOnEnter:true,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(result,container,query){var markup=[];markMatch(result.text,query.term,markup);return markup.join("");},formatSelection:function(data,container){return data?data.text:undefined;},formatResultCssClass:function(data){return undefined;},formatNoMatches:function(){return"No matches found";},formatInputTooShort:function(input,min){return"Please enter "+(min-input.length)+" more characters";},formatSelectionTooBig:function(limit){return"You can only select "+limit+" item"+(limit==1?"":"s");},formatLoadMore:function(pageNumber){return"Loading more results...";},formatSearching:function(){return"Searching...";},minimumResultsForSearch:0,minimumInputLength:0,maximumSelectionSize:0,id:function(e){return e.id;},matcher:function(term,text){return text.toUpperCase().indexOf(term.toUpperCase())>=0;},separator:",",tokenSeparators:[],tokenizer:defaultTokenizer,escapeMarkup:function(markup){if(markup&&typeof(markup)==="string"){return markup.replace(/&/g,"&amp;");}
return markup;},blurOnChange:false};window.Select2={query:{ajax:ajax,local:local,tags:tags},util:{debounce:debounce,markMatch:markMatch},"class":{"abstract":AbstractSelect2,"single":SingleSelect2,"multi":MultiSelect2}};}(jQuery));

var enhance={dateFormat:'yyyy-mm-dd',getData:function(el){var datalist=$('datalist[for="'+el.attr('id')+'"]').first(),data=[];datalist.children("option").map(function(){var text=$(this).text(),value=$(this).val()?$(this).val():text;data.push({id:value,text:text});});return data;},multiselect:function(el,destroy)
{if(destroy){$(el).select2('destroy');}else{$(el).select2({tags:enhance.getData($(el)),separator:';',tokenSeparators:[';'],width:'100%'}).on('change',function(){$(this).attr('changed','auto');});}},combobox:function(el,destroy){if(destroy){$(el).select2('destroy');}else{$(el).select2({data:enhance.getData($(el)),width:'100%',createSearchChoice:function(term){return{id:term,text:term};},initSelection:function(el,callback){var value=$(el).val();callback({id:value,text:value});}}).on('change',function(){$(this).attr('changed','auto');});}},select:function(el,destroy){if(destroy){$(el).select2('destroy');}else{$(el).select2({width:'100%'}).on('change',function(){$(this).attr('changed','auto');});}},slider:function(el,destroy){if(destroy){$(el).slider('destroy');}else{var min=$(el).attr('min')?parseInt($(el).attr('min')):0,max=$(el).attr('max')?parseInt($(el).attr('max')):10,value=$(el).val()?parseInt($(el).val()):min;$(el).slider({'value':value,'min':min,'max':max,}).on('slideStop',function(){$(el).attr('changed','auto');});}},pimpEl:function(el,destroy){if($(el).hasClass('combobox'))
{enhance.combobox(el,destroy);}
else if($(el).hasClass('multiselect'))
{enhance.multiselect(el,destroy);}
else if($(el).hasClass('slider'))
{enhance.slider(el,destroy);}
else if($(el).hasClass('date'))
{if(destroy){$(el).datepicker('destory');}else{$(el).datepicker({format:enhance.dateFormat});}}
else if($(el).is('select'))
{enhance.select(el,destroy);}},form:function(form){$(form).find(':input').each(function(i,el){enhance.pimpEl(el);});}};

(function($){$.fn.checklabel=function(){this.each(function(){var label=$(this).find('label');var input=$(this).find('input');input.hide();label.click(function(){if(input.is(':checked')){input.attr('checked',false);label.removeClass('selected');}else{input.attr('checked',true);label.addClass('selected');}});});};})(jQuery);
;(function(window,undefined){var document=window["document"];var $=window["jQuery"];$.fn["printElement"]=function(options){var mainOptions=$.extend({},$.fn["printElement"]["defaults"],options);if(mainOptions["printMode"]=='iframe'){if(/chrome/.test(navigator.userAgent.toLowerCase()))
mainOptions["printMode"]='popup';}
$("[id^='printElement_']").remove();return this.each(function(){var opts=$.meta?$.extend({},mainOptions,$(this).data()):mainOptions;_printElement($(this),opts);});};$.fn["printElement"]["defaults"]={"printMode":'iframe',"pageTitle":'',"overrideElementCSS":null,"printBodyOptions":{"styleToAdd":'padding:10px;margin:10px;',"classNameToAdd":''},"leaveOpen":false,"iframeElementOptions":{"styleToAdd":'border:none;position:absolute;width:0px;height:0px;bottom:0px;left:0px;',"classNameToAdd":''}};$.fn["printElement"]["cssElement"]={"href":'',"media":''};function _printElement(element,opts){var html=_getMarkup(element,opts);var popupOrIframe=null;var documentToWriteTo=null;if(opts["printMode"].toLowerCase()=='popup'){popupOrIframe=window.open('about:blank','printElementWindow','width=650,height=440,scrollbars=yes');documentToWriteTo=popupOrIframe.document;}
else{var printElementID="printElement_"+(Math.round(Math.random()*99999)).toString();var iframe=document.createElement('IFRAME');$(iframe).attr({style:opts["iframeElementOptions"]["styleToAdd"],id:printElementID,className:opts["iframeElementOptions"]["classNameToAdd"],frameBorder:0,scrolling:'no',src:'about:blank'});document.body.appendChild(iframe);documentToWriteTo=(iframe.contentWindow||iframe.contentDocument);if(documentToWriteTo.document)
documentToWriteTo=documentToWriteTo.document;iframe=document.frames?document.frames[printElementID]:document.getElementById(printElementID);popupOrIframe=iframe.contentWindow||iframe;}
focus();documentToWriteTo.open();documentToWriteTo.write(html);documentToWriteTo.close();_callPrint(popupOrIframe);};function _callPrint(element){if(element&&element["printPage"])
element["printPage"]();else
setTimeout(function(){_callPrint(element);},50);}
function _getElementHTMLIncludingFormElements(element){var $element=$(element);$(":checked",$element).each(function(){this.setAttribute('checked','checked');});$("input[type='text']",$element).each(function(){this.setAttribute('value',$(this).val());});$("select",$element).each(function(){var $select=$(this);$("option",$select).each(function(){if($select.val()==$(this).val())
this.setAttribute('selected','selected');});});$("textarea",$element).each(function(){var value=$(this).attr('value');if(this.firstChild)
this.firstChild.textContent=value;else
this.innerHTML=value;});var elementHtml=$('<div></div>').append($element.clone()).html();return elementHtml;}
function _getBaseHref(){var port=(window.location.port)?':'+window.location.port:'';return window.location.protocol+'//'+window.location.hostname+port+window.location.pathname;}
function _getMarkup(element,opts){var $element=$(element);var elementHtml=_getElementHTMLIncludingFormElements(element);var html=new Array();html.push('<html><head><title>'+opts["pageTitle"]+'</title>');if(opts["overrideElementCSS"]){if(opts["overrideElementCSS"].length>0){for(var x=0;x<opts["overrideElementCSS"].length;x++){var current=opts["overrideElementCSS"][x];if(typeof(current)=='string')
html.push('<link type="text/css" rel="stylesheet" href="'+current+'" >');else
html.push('<link type="text/css" rel="stylesheet" href="'+current["href"]+'" media="'+current["media"]+'" >');}}}
else{$("link",document).filter(function(){return $(this).attr("rel").toLowerCase()=="stylesheet";}).each(function(){html.push('<link type="text/css" rel="stylesheet" href="'+$(this).attr("href")+'" media="'+$(this).attr('media')+'" >');});}
html.push('<base href="'+_getBaseHref()+'" />');html.push('</head><body style="'+opts["printBodyOptions"]["styleToAdd"]+'" class="'+opts["printBodyOptions"]["classNameToAdd"]+'">');html.push('<div class="'+$element.attr('class')+'">'+elementHtml+'</div>');html.push('<script type="text/javascript">function printPage(){focus();print();'+((!opts["leaveOpen"]&&opts["printMode"].toLowerCase()=='popup')?'close();':'')+'}</script>');html.push('</body></html>');return html.join('');};})(window);

(function($){var undefined;$.fn.emptyForce=function(){for(var i=0,elem;(elem=$(this)[i])!=null;i++){if(elem.nodeType===1){$.cleanData(elem.getElementsByTagName("*"));}
if($.jqplot.use_excanvas){elem.outerHTML="";}
else{while(elem.firstChild){elem.removeChild(elem.firstChild);}}
elem=null;}
return $(this);};$.fn.removeChildForce=function(parent){while(parent.firstChild){this.removeChildForce(parent.firstChild);parent.removeChild(parent.firstChild);}};$.fn.jqplot=function(){var datas=[];var options=[];for(var i=0,l=arguments.length;i<l;i++){if($.isArray(arguments[i])){datas.push(arguments[i]);}
else if($.isPlainObject(arguments[i])){options.push(arguments[i]);}}
return this.each(function(index){var tid,plot,$this=$(this),dl=datas.length,ol=options.length,data,opts;if(index<dl){data=datas[index];}
else{data=dl?datas[dl-1]:null;}
if(index<ol){opts=options[index];}
else{opts=ol?options[ol-1]:null;}
tid=$this.attr('id');if(tid===undefined){tid='jqplot_target_'+$.jqplot.targetCounter++;$this.attr('id',tid);}
plot=$.jqplot(tid,data,opts);$this.data('jqplot',plot);});};$.jqplot=function(target,data,options){var _data=null,_options=null;if(arguments.length===3){_data=data;_options=options;}
else if(arguments.length===2){if($.isArray(data)){_data=data;}
else if($.isPlainObject(data)){_options=data;}}
if(_data===null&&_options!==null&&_options.data){_data=_options.data;}
var plot=new jqPlot();$('#'+target).removeClass('jqplot-error');if($.jqplot.config.catchErrors){try{plot.init(target,_data,_options);plot.draw();plot.themeEngine.init.call(plot);return plot;}
catch(e){var msg=$.jqplot.config.errorMessage||e.message;$('#'+target).append('<div class="jqplot-error-message">'+msg+'</div>');$('#'+target).addClass('jqplot-error');document.getElementById(target).style.background=$.jqplot.config.errorBackground;document.getElementById(target).style.border=$.jqplot.config.errorBorder;document.getElementById(target).style.fontFamily=$.jqplot.config.errorFontFamily;document.getElementById(target).style.fontSize=$.jqplot.config.errorFontSize;document.getElementById(target).style.fontStyle=$.jqplot.config.errorFontStyle;document.getElementById(target).style.fontWeight=$.jqplot.config.errorFontWeight;}}
else{plot.init(target,_data,_options);plot.draw();plot.themeEngine.init.call(plot);return plot;}};$.jqplot.version="1.0.3";$.jqplot.revision="1117";$.jqplot.targetCounter=1;$.jqplot.CanvasManager=function(){if(typeof $.jqplot.CanvasManager.canvases=='undefined'){$.jqplot.CanvasManager.canvases=[];$.jqplot.CanvasManager.free=[];}
var myCanvases=[];this.getCanvas=function(){var canvas;var makeNew=true;if(!$.jqplot.use_excanvas){for(var i=0,l=$.jqplot.CanvasManager.canvases.length;i<l;i++){if($.jqplot.CanvasManager.free[i]===true){makeNew=false;canvas=$.jqplot.CanvasManager.canvases[i];$.jqplot.CanvasManager.free[i]=false;myCanvases.push(i);break;}}}
if(makeNew){canvas=document.createElement('canvas');myCanvases.push($.jqplot.CanvasManager.canvases.length);$.jqplot.CanvasManager.canvases.push(canvas);$.jqplot.CanvasManager.free.push(false);}
return canvas;};this.initCanvas=function(canvas){if($.jqplot.use_excanvas){return window.G_vmlCanvasManager.initElement(canvas);}
return canvas;};this.freeAllCanvases=function(){for(var i=0,l=myCanvases.length;i<l;i++){this.freeCanvas(myCanvases[i]);}
myCanvases=[];};this.freeCanvas=function(idx){if($.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==undefined){window.G_vmlCanvasManager.uninitElement($.jqplot.CanvasManager.canvases[idx]);$.jqplot.CanvasManager.canvases[idx]=null;}
else{var canvas=$.jqplot.CanvasManager.canvases[idx];canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);$(canvas).unbind().removeAttr('class').removeAttr('style');$(canvas).css({left:'',top:'',position:''});canvas.width=0;canvas.height=0;$.jqplot.CanvasManager.free[idx]=true;}};};$.jqplot.log=function(){if(window.console){window.console.log.apply(window.console,arguments);}};$.jqplot.config={addDomReference:false,enablePlugins:false,defaultHeight:300,defaultWidth:400,UTCAdjust:false,timezoneOffset:new Date(new Date().getTimezoneOffset()*60000),errorMessage:'',errorBackground:'',errorBorder:'',errorFontFamily:'',errorFontSize:'',errorFontStyle:'',errorFontWeight:'',catchErrors:false,defaultTickFormatString:"%.1f",defaultColors:["#4bb2c5","#EAA228","#c5b47f","#579575","#839557","#958c12","#953579","#4b5de4","#d8b83f","#ff5800","#0085cc","#c747a3","#cddf54","#FBD178","#26B4E3","#bd70c7"],defaultNegativeColors:["#498991","#C08840","#9F9274","#546D61","#646C4A","#6F6621","#6E3F5F","#4F64B0","#A89050","#C45923","#187399","#945381","#959E5C","#C7AF7B","#478396","#907294"],dashLength:4,gapLength:4,dotGapLength:2.5,srcLocation:'jqplot/src/',pluginLocation:'jqplot/src/plugins/'};$.jqplot.arrayMax=function(array){return Math.max.apply(Math,array);};$.jqplot.arrayMin=function(array){return Math.min.apply(Math,array);};$.jqplot.enablePlugins=$.jqplot.config.enablePlugins;$.jqplot.support_canvas=function(){if(typeof $.jqplot.support_canvas.result=='undefined'){$.jqplot.support_canvas.result=!!document.createElement('canvas').getContext;}
return $.jqplot.support_canvas.result;};$.jqplot.support_canvas_text=function(){if(typeof $.jqplot.support_canvas_text.result=='undefined'){if(window.G_vmlCanvasManager!==undefined&&window.G_vmlCanvasManager._version>887){$.jqplot.support_canvas_text.result=true;}
else{$.jqplot.support_canvas_text.result=!!(document.createElement('canvas').getContext&&typeof document.createElement('canvas').getContext('2d').fillText=='function');}}
return $.jqplot.support_canvas_text.result;};$.jqplot.use_excanvas=((!$.support.boxModel||!$.support.objectAll||!$support.leadingWhitespace)&&!$.jqplot.support_canvas())?true:false;$.jqplot.preInitHooks=[];$.jqplot.postInitHooks=[];$.jqplot.preParseOptionsHooks=[];$.jqplot.postParseOptionsHooks=[];$.jqplot.preDrawHooks=[];$.jqplot.postDrawHooks=[];$.jqplot.preDrawSeriesHooks=[];$.jqplot.postDrawSeriesHooks=[];$.jqplot.preDrawLegendHooks=[];$.jqplot.addLegendRowHooks=[];$.jqplot.preSeriesInitHooks=[];$.jqplot.postSeriesInitHooks=[];$.jqplot.preParseSeriesOptionsHooks=[];$.jqplot.postParseSeriesOptionsHooks=[];$.jqplot.eventListenerHooks=[];$.jqplot.preDrawSeriesShadowHooks=[];$.jqplot.postDrawSeriesShadowHooks=[];$.jqplot.ElemContainer=function(){this._elem;this._plotWidth;this._plotHeight;this._plotDimensions={height:null,width:null};};$.jqplot.ElemContainer.prototype.createElement=function(el,offsets,clss,cssopts,attrib){this._offsets=offsets;var klass=clss||'jqplot';var elem=document.createElement(el);this._elem=$(elem);this._elem.addClass(klass);this._elem.css(cssopts);this._elem.attr(attrib);elem=null;return this._elem;};$.jqplot.ElemContainer.prototype.getWidth=function(){if(this._elem){return this._elem.outerWidth(true);}
else{return null;}};$.jqplot.ElemContainer.prototype.getHeight=function(){if(this._elem){return this._elem.outerHeight(true);}
else{return null;}};$.jqplot.ElemContainer.prototype.getPosition=function(){if(this._elem){return this._elem.position();}
else{return{top:null,left:null,bottom:null,right:null};}};$.jqplot.ElemContainer.prototype.getTop=function(){return this.getPosition().top;};$.jqplot.ElemContainer.prototype.getLeft=function(){return this.getPosition().left;};$.jqplot.ElemContainer.prototype.getBottom=function(){return this._elem.css('bottom');};$.jqplot.ElemContainer.prototype.getRight=function(){return this._elem.css('right');};function Axis(name){$.jqplot.ElemContainer.call(this);this.name=name;this._series=[];this.show=false;this.tickRenderer=$.jqplot.AxisTickRenderer;this.tickOptions={};this.labelRenderer=$.jqplot.AxisLabelRenderer;this.labelOptions={};this.label=null;this.showLabel=true;this.min=null;this.max=null;this.autoscale=false;this.pad=1.2;this.padMax=null;this.padMin=null;this.ticks=[];this.numberTicks;this.tickInterval;this.renderer=$.jqplot.LinearAxisRenderer;this.rendererOptions={};this.showTicks=true;this.showTickMarks=true;this.showMinorTicks=true;this.drawMajorGridlines=true;this.drawMinorGridlines=false;this.drawMajorTickMarks=true;this.drawMinorTickMarks=true;this.useSeriesColor=false;this.borderWidth=null;this.borderColor=null;this.scaleToHiddenSeries=false;this._dataBounds={min:null,max:null};this._intervalStats=[];this._offsets={min:null,max:null};this._ticks=[];this._label=null;this.syncTicks=null;this.tickSpacing=75;this._min=null;this._max=null;this._tickInterval=null;this._numberTicks=null;this.__ticks=null;this._options={};}
Axis.prototype=new $.jqplot.ElemContainer();Axis.prototype.constructor=Axis;Axis.prototype.init=function(){if($.isFunction(this.renderer)){this.renderer=new this.renderer();}
this.tickOptions.axis=this.name;if(this.tickOptions.showMark==null){this.tickOptions.showMark=this.showTicks;}
if(this.tickOptions.showMark==null){this.tickOptions.showMark=this.showTickMarks;}
if(this.tickOptions.showLabel==null){this.tickOptions.showLabel=this.showTicks;}
if(this.label==null||this.label==''){this.showLabel=false;}
else{this.labelOptions.label=this.label;}
if(this.showLabel==false){this.labelOptions.show=false;}
if(this.pad==0){this.pad=1.0;}
if(this.padMax==0){this.padMax=1.0;}
if(this.padMin==0){this.padMin=1.0;}
if(this.padMax==null){this.padMax=(this.pad-1)/2+1;}
if(this.padMin==null){this.padMin=(this.pad-1)/2+1;}
this.pad=this.padMax+this.padMin-1;if(this.min!=null||this.max!=null){this.autoscale=false;}
if(this.syncTicks==null&&this.name.indexOf('y')>-1){this.syncTicks=true;}
else if(this.syncTicks==null){this.syncTicks=false;}
this.renderer.init.call(this,this.rendererOptions);};Axis.prototype.draw=function(ctx,plot){if(this.__ticks){this.__ticks=null;}
return this.renderer.draw.call(this,ctx,plot);};Axis.prototype.set=function(){this.renderer.set.call(this);};Axis.prototype.pack=function(pos,offsets){if(this.show){this.renderer.pack.call(this,pos,offsets);}
if(this._min==null){this._min=this.min;this._max=this.max;this._tickInterval=this.tickInterval;this._numberTicks=this.numberTicks;this.__ticks=this._ticks;}};Axis.prototype.reset=function(){this.renderer.reset.call(this);};Axis.prototype.resetScale=function(opts){$.extend(true,this,{min:null,max:null,numberTicks:null,tickInterval:null,_ticks:[],ticks:[]},opts);this.resetDataBounds();};Axis.prototype.resetDataBounds=function(){var db=this._dataBounds;db.min=null;db.max=null;var l,s,d;var doforce=(this.show)?true:false;for(var i=0;i<this._series.length;i++){s=this._series[i];if(s.show||this.scaleToHiddenSeries){d=s._plotData;if(s._type==='line'&&s.renderer.bands.show&&this.name.charAt(0)!=='x'){d=[[0,s.renderer.bands._min],[1,s.renderer.bands._max]];}
var minyidx=1,maxyidx=1;if(s._type!=null&&s._type=='ohlc'){minyidx=3;maxyidx=2;}
for(var j=0,l=d.length;j<l;j++){if(this.name=='xaxis'||this.name=='x2axis'){if((d[j][0]!=null&&d[j][0]<db.min)||db.min==null){db.min=d[j][0];}
if((d[j][0]!=null&&d[j][0]>db.max)||db.max==null){db.max=d[j][0];}}
else{if((d[j][minyidx]!=null&&d[j][minyidx]<db.min)||db.min==null){db.min=d[j][minyidx];}
if((d[j][maxyidx]!=null&&d[j][maxyidx]>db.max)||db.max==null){db.max=d[j][maxyidx];}}}
if(doforce&&s.renderer.constructor!==$.jqplot.BarRenderer){doforce=false;}
else if(doforce&&this._options.hasOwnProperty('forceTickAt0')&&this._options.forceTickAt0==false){doforce=false;}
else if(doforce&&s.renderer.constructor===$.jqplot.BarRenderer){if(s.barDirection=='vertical'&&this.name!='xaxis'&&this.name!='x2axis'){if(this._options.pad!=null||this._options.padMin!=null){doforce=false;}}
else if(s.barDirection=='horizontal'&&(this.name=='xaxis'||this.name=='x2axis')){if(this._options.pad!=null||this._options.padMin!=null){doforce=false;}}}}}
if(doforce&&this.renderer.constructor===$.jqplot.LinearAxisRenderer&&db.min>=0){this.padMin=1.0;this.forceTickAt0=true;}};function Legend(options){$.jqplot.ElemContainer.call(this);this.show=false;this.location='ne';this.labels=[];this.showLabels=true;this.showSwatches=true;this.placement="insideGrid";this.xoffset=0;this.yoffset=0;this.border;this.background;this.textColor;this.fontFamily;this.fontSize;this.rowSpacing='0.5em';this.renderer=$.jqplot.TableLegendRenderer;this.rendererOptions={};this.preDraw=false;this.marginTop=null;this.marginRight=null;this.marginBottom=null;this.marginLeft=null;this.escapeHtml=false;this._series=[];$.extend(true,this,options);}
Legend.prototype=new $.jqplot.ElemContainer();Legend.prototype.constructor=Legend;Legend.prototype.setOptions=function(options){$.extend(true,this,options);if(this.placement=='inside'){this.placement='insideGrid';}
if(this.xoffset>0){if(this.placement=='insideGrid'){switch(this.location){case'nw':case'w':case'sw':if(this.marginLeft==null){this.marginLeft=this.xoffset+'px';}
this.marginRight='0px';break;case'ne':case'e':case'se':default:if(this.marginRight==null){this.marginRight=this.xoffset+'px';}
this.marginLeft='0px';break;}}
else if(this.placement=='outside'){switch(this.location){case'nw':case'w':case'sw':if(this.marginRight==null){this.marginRight=this.xoffset+'px';}
this.marginLeft='0px';break;case'ne':case'e':case'se':default:if(this.marginLeft==null){this.marginLeft=this.xoffset+'px';}
this.marginRight='0px';break;}}
this.xoffset=0;}
if(this.yoffset>0){if(this.placement=='outside'){switch(this.location){case'sw':case's':case'se':if(this.marginTop==null){this.marginTop=this.yoffset+'px';}
this.marginBottom='0px';break;case'ne':case'n':case'nw':default:if(this.marginBottom==null){this.marginBottom=this.yoffset+'px';}
this.marginTop='0px';break;}}
else if(this.placement=='insideGrid'){switch(this.location){case'sw':case's':case'se':if(this.marginBottom==null){this.marginBottom=this.yoffset+'px';}
this.marginTop='0px';break;case'ne':case'n':case'nw':default:if(this.marginTop==null){this.marginTop=this.yoffset+'px';}
this.marginBottom='0px';break;}}
this.yoffset=0;}};Legend.prototype.init=function(){if($.isFunction(this.renderer)){this.renderer=new this.renderer();}
this.renderer.init.call(this,this.rendererOptions);};Legend.prototype.draw=function(offsets,plot){for(var i=0;i<$.jqplot.preDrawLegendHooks.length;i++){$.jqplot.preDrawLegendHooks[i].call(this,offsets);}
return this.renderer.draw.call(this,offsets,plot);};Legend.prototype.pack=function(offsets){this.renderer.pack.call(this,offsets);};function Title(text){$.jqplot.ElemContainer.call(this);this.text=text;this.show=true;this.fontFamily;this.fontSize;this.textAlign;this.textColor;this.renderer=$.jqplot.DivTitleRenderer;this.rendererOptions={};this.escapeHtml=false;}
Title.prototype=new $.jqplot.ElemContainer();Title.prototype.constructor=Title;Title.prototype.init=function(){if($.isFunction(this.renderer)){this.renderer=new this.renderer();}
this.renderer.init.call(this,this.rendererOptions);};Title.prototype.draw=function(width){return this.renderer.draw.call(this,width);};Title.prototype.pack=function(){this.renderer.pack.call(this);};function Series(options){options=options||{};$.jqplot.ElemContainer.call(this);this.show=true;this.xaxis='xaxis';this._xaxis;this.yaxis='yaxis';this._yaxis;this.gridBorderWidth=2.0;this.renderer=$.jqplot.LineRenderer;this.rendererOptions={};this.data=[];this.gridData=[];this.label='';this.showLabel=true;this.color;this.negativeColor;this.lineWidth=2.5;this.lineJoin='round';this.lineCap='round';this.linePattern='solid';this.shadow=true;this.shadowAngle=45;this.shadowOffset=1.25;this.shadowDepth=3;this.shadowAlpha='0.1';this.breakOnNull=false;this.markerRenderer=$.jqplot.MarkerRenderer;this.markerOptions={};this.showLine=true;this.showMarker=true;this.index;this.fill=false;this.fillColor;this.fillAlpha;this.fillAndStroke=false;this.disableStack=false;this._stack=false;this.neighborThreshold=4;this.fillToZero=false;this.fillToValue=0;this.fillAxis='y';this.useNegativeColors=true;this._stackData=[];this._plotData=[];this._plotValues={x:[],y:[]};this._intervals={x:{},y:{}};this._prevPlotData=[];this._prevGridData=[];this._stackAxis='y';this._primaryAxis='_xaxis';this.canvas=new $.jqplot.GenericCanvas();this.shadowCanvas=new $.jqplot.GenericCanvas();this.plugins={};this._sumy=0;this._sumx=0;this._type='';}
Series.prototype=new $.jqplot.ElemContainer();Series.prototype.constructor=Series;Series.prototype.init=function(index,gridbw,plot){this.index=index;this.gridBorderWidth=gridbw;var d=this.data;var temp=[],i,l;for(i=0,l=d.length;i<l;i++){if(!this.breakOnNull){if(d[i]==null||d[i][0]==null||d[i][1]==null){continue;}
else{temp.push(d[i]);}}
else{temp.push(d[i]);}}
this.data=temp;if(!this.color){this.color=plot.colorGenerator.get(this.index);}
if(!this.negativeColor){this.negativeColor=plot.negativeColorGenerator.get(this.index);}
if(!this.fillColor){this.fillColor=this.color;}
if(this.fillAlpha){var comp=$.jqplot.normalize2rgb(this.fillColor);var comp=$.jqplot.getColorComponents(comp);this.fillColor='rgba('+comp[0]+','+comp[1]+','+comp[2]+','+this.fillAlpha+')';}
if($.isFunction(this.renderer)){this.renderer=new this.renderer();}
this.renderer.init.call(this,this.rendererOptions,plot);this.markerRenderer=new this.markerRenderer();if(!this.markerOptions.color){this.markerOptions.color=this.color;}
if(this.markerOptions.show==null){this.markerOptions.show=this.showMarker;}
this.showMarker=this.markerOptions.show;this.markerRenderer.init(this.markerOptions);};Series.prototype.draw=function(sctx,opts,plot){var options=(opts==undefined)?{}:opts;sctx=(sctx==undefined)?this.canvas._ctx:sctx;var j,data,gridData;for(j=0;j<$.jqplot.preDrawSeriesHooks.length;j++){$.jqplot.preDrawSeriesHooks[j].call(this,sctx,options);}
if(this.show){this.renderer.setGridData.call(this,plot);if(!options.preventJqPlotSeriesDrawTrigger){$(sctx.canvas).trigger('jqplotSeriesDraw',[this.data,this.gridData]);}
data=[];if(options.data){data=options.data;}
else if(!this._stack){data=this.data;}
else{data=this._plotData;}
gridData=options.gridData||this.renderer.makeGridData.call(this,data,plot);if(this._type==='line'&&this.renderer.smooth&&this.renderer._smoothedData.length){gridData=this.renderer._smoothedData;}
this.renderer.draw.call(this,sctx,gridData,options,plot);}
for(j=0;j<$.jqplot.postDrawSeriesHooks.length;j++){$.jqplot.postDrawSeriesHooks[j].call(this,sctx,options,plot);}
sctx=opts=plot=j=data=gridData=null;};Series.prototype.drawShadow=function(sctx,opts,plot){var options=(opts==undefined)?{}:opts;sctx=(sctx==undefined)?this.shadowCanvas._ctx:sctx;var j,data,gridData;for(j=0;j<$.jqplot.preDrawSeriesShadowHooks.length;j++){$.jqplot.preDrawSeriesShadowHooks[j].call(this,sctx,options);}
if(this.shadow){this.renderer.setGridData.call(this,plot);data=[];if(options.data){data=options.data;}
else if(!this._stack){data=this.data;}
else{data=this._plotData;}
gridData=options.gridData||this.renderer.makeGridData.call(this,data,plot);this.renderer.drawShadow.call(this,sctx,gridData,options,plot);}
for(j=0;j<$.jqplot.postDrawSeriesShadowHooks.length;j++){$.jqplot.postDrawSeriesShadowHooks[j].call(this,sctx,options);}
sctx=opts=plot=j=data=gridData=null;};Series.prototype.toggleDisplay=function(ev,callback){var s,speed;if(ev.data.series){s=ev.data.series;}
else{s=this;}
if(ev.data.speed){speed=ev.data.speed;}
if(speed){if(s.canvas._elem.is(':hidden')||!s.show){s.show=true;s.canvas._elem.removeClass('jqplot-series-hidden');if(s.shadowCanvas._elem){s.shadowCanvas._elem.fadeIn(speed);}
s.canvas._elem.fadeIn(speed,callback);s.canvas._elem.nextAll('.jqplot-point-label.jqplot-series-'+s.index).fadeIn(speed);}
else{s.show=false;s.canvas._elem.addClass('jqplot-series-hidden');if(s.shadowCanvas._elem){s.shadowCanvas._elem.fadeOut(speed);}
s.canvas._elem.fadeOut(speed,callback);s.canvas._elem.nextAll('.jqplot-point-label.jqplot-series-'+s.index).fadeOut(speed);}}
else{if(s.canvas._elem.is(':hidden')||!s.show){s.show=true;s.canvas._elem.removeClass('jqplot-series-hidden');if(s.shadowCanvas._elem){s.shadowCanvas._elem.show();}
s.canvas._elem.show(0,callback);s.canvas._elem.nextAll('.jqplot-point-label.jqplot-series-'+s.index).show();}
else{s.show=false;s.canvas._elem.addClass('jqplot-series-hidden');if(s.shadowCanvas._elem){s.shadowCanvas._elem.hide();}
s.canvas._elem.hide(0,callback);s.canvas._elem.nextAll('.jqplot-point-label.jqplot-series-'+s.index).hide();}}};function Grid(){$.jqplot.ElemContainer.call(this);this.drawGridlines=true;this.gridLineColor='#cccccc';this.gridLineWidth=1.0;this.background='#fffdf6';this.borderColor='#999999';this.borderWidth=2.0;this.drawBorder=true;this.shadow=true;this.shadowAngle=45;this.shadowOffset=1.5;this.shadowWidth=3;this.shadowDepth=3;this.shadowColor=null;this.shadowAlpha='0.07';this._left;this._top;this._right;this._bottom;this._width;this._height;this._axes=[];this.renderer=$.jqplot.CanvasGridRenderer;this.rendererOptions={};this._offsets={top:null,bottom:null,left:null,right:null};}
Grid.prototype=new $.jqplot.ElemContainer();Grid.prototype.constructor=Grid;Grid.prototype.init=function(){if($.isFunction(this.renderer)){this.renderer=new this.renderer();}
this.renderer.init.call(this,this.rendererOptions);};Grid.prototype.createElement=function(offsets,plot){this._offsets=offsets;return this.renderer.createElement.call(this,plot);};Grid.prototype.draw=function(){this.renderer.draw.call(this);};$.jqplot.GenericCanvas=function(){$.jqplot.ElemContainer.call(this);this._ctx;};$.jqplot.GenericCanvas.prototype=new $.jqplot.ElemContainer();$.jqplot.GenericCanvas.prototype.constructor=$.jqplot.GenericCanvas;$.jqplot.GenericCanvas.prototype.createElement=function(offsets,clss,plotDimensions,plot){this._offsets=offsets;var klass='jqplot';if(clss!=undefined){klass=clss;}
var elem;elem=plot.canvasManager.getCanvas();if(plotDimensions!=null){this._plotDimensions=plotDimensions;}
elem.width=this._plotDimensions.width-this._offsets.left-this._offsets.right;elem.height=this._plotDimensions.height-this._offsets.top-this._offsets.bottom;this._elem=$(elem);this._elem.css({position:'absolute',left:this._offsets.left,top:this._offsets.top});this._elem.addClass(klass);elem=plot.canvasManager.initCanvas(elem);elem=null;return this._elem;};$.jqplot.GenericCanvas.prototype.setContext=function(){this._ctx=this._elem.get(0).getContext("2d");return this._ctx;};$.jqplot.GenericCanvas.prototype.resetCanvas=function(){if(this._elem){if($.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==undefined){window.G_vmlCanvasManager.uninitElement(this._elem.get(0));}
this._elem.emptyForce();}
this._ctx=null;};$.jqplot.HooksManager=function(){this.hooks=[];this.args=[];};$.jqplot.HooksManager.prototype.addOnce=function(fn,args){args=args||[];var havehook=false;for(var i=0,l=this.hooks.length;i<l;i++){if(this.hooks[i]==fn){havehook=true;}}
if(!havehook){this.hooks.push(fn);this.args.push(args);}};$.jqplot.HooksManager.prototype.add=function(fn,args){args=args||[];this.hooks.push(fn);this.args.push(args);};$.jqplot.EventListenerManager=function(){this.hooks=[];};$.jqplot.EventListenerManager.prototype.addOnce=function(ev,fn){var havehook=false,h,i;for(var i=0,l=this.hooks.length;i<l;i++){h=this.hooks[i];if(h[0]==ev&&h[1]==fn){havehook=true;}}
if(!havehook){this.hooks.push([ev,fn]);}};$.jqplot.EventListenerManager.prototype.add=function(ev,fn){this.hooks.push([ev,fn]);};var _axisNames=['yMidAxis','xaxis','yaxis','x2axis','y2axis','y3axis','y4axis','y5axis','y6axis','y7axis','y8axis','y9axis'];function jqPlot(){this.animate=false;this.animateReplot=false;this.axes={xaxis:new Axis('xaxis'),yaxis:new Axis('yaxis'),x2axis:new Axis('x2axis'),y2axis:new Axis('y2axis'),y3axis:new Axis('y3axis'),y4axis:new Axis('y4axis'),y5axis:new Axis('y5axis'),y6axis:new Axis('y6axis'),y7axis:new Axis('y7axis'),y8axis:new Axis('y8axis'),y9axis:new Axis('y9axis'),yMidAxis:new Axis('yMidAxis')};this.baseCanvas=new $.jqplot.GenericCanvas();this.captureRightClick=false;this.data=[];this.dataRenderer;this.dataRendererOptions;this.defaults={axesDefaults:{},axes:{xaxis:{},yaxis:{},x2axis:{},y2axis:{},y3axis:{},y4axis:{},y5axis:{},y6axis:{},y7axis:{},y8axis:{},y9axis:{},yMidAxis:{}},seriesDefaults:{},series:[]};this.defaultAxisStart=1;this.drawIfHidden=false;this.eventCanvas=new $.jqplot.GenericCanvas();this.fillBetween={series1:null,series2:null,color:null,baseSeries:0,fill:true};this.fontFamily;this.fontSize;this.grid=new Grid();this.legend=new Legend();this.negativeSeriesColors=$.jqplot.config.defaultNegativeColors;this.noDataIndicator={show:false,indicator:'Loading Data...',axes:{xaxis:{min:0,max:10,tickInterval:2,show:true},yaxis:{min:0,max:12,tickInterval:3,show:true}}};this.options={};this.previousSeriesStack=[];this.plugins={};this.series=[];this.seriesStack=[];this.seriesColors=$.jqplot.config.defaultColors;this.sortData=true;this.stackSeries=false;this.syncXTicks=true;this.syncYTicks=true;this.target=null;this.targetId=null;this.textColor;this.title=new Title();this._drawCount=0;this._sumy=0;this._sumx=0;this._stackData=[];this._plotData=[];this._width=null;this._height=null;this._plotDimensions={height:null,width:null};this._gridPadding={top:null,right:null,bottom:null,left:null};this._defaultGridPadding={top:10,right:10,bottom:23,left:10};this._addDomReference=$.jqplot.config.addDomReference;this.preInitHooks=new $.jqplot.HooksManager();this.postInitHooks=new $.jqplot.HooksManager();this.preParseOptionsHooks=new $.jqplot.HooksManager();this.postParseOptionsHooks=new $.jqplot.HooksManager();this.preDrawHooks=new $.jqplot.HooksManager();this.postDrawHooks=new $.jqplot.HooksManager();this.preDrawSeriesHooks=new $.jqplot.HooksManager();this.postDrawSeriesHooks=new $.jqplot.HooksManager();this.preDrawLegendHooks=new $.jqplot.HooksManager();this.addLegendRowHooks=new $.jqplot.HooksManager();this.preSeriesInitHooks=new $.jqplot.HooksManager();this.postSeriesInitHooks=new $.jqplot.HooksManager();this.preParseSeriesOptionsHooks=new $.jqplot.HooksManager();this.postParseSeriesOptionsHooks=new $.jqplot.HooksManager();this.eventListenerHooks=new $.jqplot.EventListenerManager();this.preDrawSeriesShadowHooks=new $.jqplot.HooksManager();this.postDrawSeriesShadowHooks=new $.jqplot.HooksManager();this.colorGenerator=new $.jqplot.ColorGenerator();this.negativeColorGenerator=new $.jqplot.ColorGenerator();this.canvasManager=new $.jqplot.CanvasManager();this.themeEngine=new $.jqplot.ThemeEngine();var seriesColorsIndex=0;this.init=function(target,data,options){options=options||{};for(var i=0;i<$.jqplot.preInitHooks.length;i++){$.jqplot.preInitHooks[i].call(this,target,data,options);}
for(var i=0;i<this.preInitHooks.hooks.length;i++){this.preInitHooks.hooks[i].call(this,target,data,options);}
this.targetId='#'+target;this.target=$('#'+target);if(this._addDomReference){this.target.data('jqplot',this);}
this.target.removeClass('jqplot-error');if(!this.target.get(0)){throw"No plot target specified";}
if(this.target.css('position')=='static'){this.target.css('position','relative');}
if(!this.target.hasClass('jqplot-target')){this.target.addClass('jqplot-target');}
if(!this.target.height()){var h;if(options&&options.height){h=parseInt(options.height,10);}
else if(this.target.attr('data-height')){h=parseInt(this.target.attr('data-height'),10);}
else{h=parseInt($.jqplot.config.defaultHeight,10);}
this._height=h;this.target.css('height',h+'px');}
else{this._height=h=this.target.height();}
if(!this.target.width()){var w;if(options&&options.width){w=parseInt(options.width,10);}
else if(this.target.attr('data-width')){w=parseInt(this.target.attr('data-width'),10);}
else{w=parseInt($.jqplot.config.defaultWidth,10);}
this._width=w;this.target.css('width',w+'px');}
else{this._width=w=this.target.width();}
for(var i=0,l=_axisNames.length;i<l;i++){this.axes[_axisNames[i]]=new Axis(_axisNames[i]);}
this._plotDimensions.height=this._height;this._plotDimensions.width=this._width;this.grid._plotDimensions=this._plotDimensions;this.title._plotDimensions=this._plotDimensions;this.baseCanvas._plotDimensions=this._plotDimensions;this.eventCanvas._plotDimensions=this._plotDimensions;this.legend._plotDimensions=this._plotDimensions;if(this._height<=0||this._width<=0||!this._height||!this._width){throw"Canvas dimension not set";}
if(options.dataRenderer&&$.isFunction(options.dataRenderer)){if(options.dataRendererOptions){this.dataRendererOptions=options.dataRendererOptions;}
this.dataRenderer=options.dataRenderer;data=this.dataRenderer(data,this,this.dataRendererOptions);}
if(options.noDataIndicator&&$.isPlainObject(options.noDataIndicator)){$.extend(true,this.noDataIndicator,options.noDataIndicator);}
if(data==null||$.isArray(data)==false||data.length==0||$.isArray(data[0])==false||data[0].length==0){if(this.noDataIndicator.show==false){throw"No Data";}
else{for(var ax in this.noDataIndicator.axes){for(var prop in this.noDataIndicator.axes[ax]){this.axes[ax][prop]=this.noDataIndicator.axes[ax][prop];}}
this.postDrawHooks.add(function(){var eh=this.eventCanvas.getHeight();var ew=this.eventCanvas.getWidth();var temp=$('<div class="jqplot-noData-container" style="position:absolute;"></div>');this.target.append(temp);temp.height(eh);temp.width(ew);temp.css('top',this.eventCanvas._offsets.top);temp.css('left',this.eventCanvas._offsets.left);var temp2=$('<div class="jqplot-noData-contents" style="text-align:center; position:relative; margin-left:auto; margin-right:auto;"></div>');temp.append(temp2);temp2.html(this.noDataIndicator.indicator);var th=temp2.height();var tw=temp2.width();temp2.height(th);temp2.width(tw);temp2.css('top',(eh-th)/2+'px');});}}
this.data=$.extend(true,[],data);this.parseOptions(options);if(this.textColor){this.target.css('color',this.textColor);}
if(this.fontFamily){this.target.css('font-family',this.fontFamily);}
if(this.fontSize){this.target.css('font-size',this.fontSize);}
this.title.init();this.legend.init();this._sumy=0;this._sumx=0;this.computePlotData();for(var i=0;i<this.series.length;i++){this.seriesStack.push(i);this.previousSeriesStack.push(i);this.series[i].shadowCanvas._plotDimensions=this._plotDimensions;this.series[i].canvas._plotDimensions=this._plotDimensions;for(var j=0;j<$.jqplot.preSeriesInitHooks.length;j++){$.jqplot.preSeriesInitHooks[j].call(this.series[i],target,this.data,this.options.seriesDefaults,this.options.series[i],this);}
for(var j=0;j<this.preSeriesInitHooks.hooks.length;j++){this.preSeriesInitHooks.hooks[j].call(this.series[i],target,this.data,this.options.seriesDefaults,this.options.series[i],this);}
this.series[i]._plotDimensions=this._plotDimensions;this.series[i].init(i,this.grid.borderWidth,this);for(var j=0;j<$.jqplot.postSeriesInitHooks.length;j++){$.jqplot.postSeriesInitHooks[j].call(this.series[i],target,this.data,this.options.seriesDefaults,this.options.series[i],this);}
for(var j=0;j<this.postSeriesInitHooks.hooks.length;j++){this.postSeriesInitHooks.hooks[j].call(this.series[i],target,this.data,this.options.seriesDefaults,this.options.series[i],this);}
this._sumy+=this.series[i]._sumy;this._sumx+=this.series[i]._sumx;}
var name,axis;for(var i=0,l=_axisNames.length;i<l;i++){name=_axisNames[i];axis=this.axes[name];axis._plotDimensions=this._plotDimensions;axis.init();if(this.axes[name].borderColor==null){if(name.charAt(0)!=='x'&&axis.useSeriesColor===true&&axis.show){axis.borderColor=axis._series[0].color;}
else{axis.borderColor=this.grid.borderColor;}}}
if(this.sortData){sortData(this.series);}
this.grid.init();this.grid._axes=this.axes;this.legend._series=this.series;for(var i=0;i<$.jqplot.postInitHooks.length;i++){$.jqplot.postInitHooks[i].call(this,target,this.data,options);}
for(var i=0;i<this.postInitHooks.hooks.length;i++){this.postInitHooks.hooks[i].call(this,target,this.data,options);}};this.resetAxesScale=function(axes,options){var opts=options||{};var ax=axes||this.axes;if(ax===true){ax=this.axes;}
if($.isArray(ax)){for(var i=0;i<ax.length;i++){this.axes[ax[i]].resetScale(opts[ax[i]]);}}
else if(typeof(ax)==='object'){for(var name in ax){this.axes[name].resetScale(opts[name]);}}};this.reInitialize=function(data,opts){var options=$.extend(true,{},this.options,opts);var target=this.targetId.substr(1);var tdata=(data==null)?this.data:data;for(var i=0;i<$.jqplot.preInitHooks.length;i++){$.jqplot.preInitHooks[i].call(this,target,tdata,options);}
for(var i=0;i<this.preInitHooks.hooks.length;i++){this.preInitHooks.hooks[i].call(this,target,tdata,options);}
this._height=this.target.height();this._width=this.target.width();if(this._height<=0||this._width<=0||!this._height||!this._width){throw"Target dimension not set";}
this._plotDimensions.height=this._height;this._plotDimensions.width=this._width;this.grid._plotDimensions=this._plotDimensions;this.title._plotDimensions=this._plotDimensions;this.baseCanvas._plotDimensions=this._plotDimensions;this.eventCanvas._plotDimensions=this._plotDimensions;this.legend._plotDimensions=this._plotDimensions;var name,t,j,axis;for(var i=0,l=_axisNames.length;i<l;i++){name=_axisNames[i];axis=this.axes[name];t=axis._ticks;for(var j=0,tlen=t.length;j<tlen;j++){var el=t[j]._elem;if(el){if($.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==undefined){window.G_vmlCanvasManager.uninitElement(el.get(0));}
el.emptyForce();el=null;t._elem=null;}}
t=null;delete axis.ticks;delete axis._ticks;this.axes[name]=new Axis(name);this.axes[name]._plotWidth=this._width;this.axes[name]._plotHeight=this._height;}
if(data){if(options.dataRenderer&&$.isFunction(options.dataRenderer)){if(options.dataRendererOptions){this.dataRendererOptions=options.dataRendererOptions;}
this.dataRenderer=options.dataRenderer;data=this.dataRenderer(data,this,this.dataRendererOptions);}
this.data=$.extend(true,[],data);}
if(opts){this.parseOptions(options);}
this.title._plotWidth=this._width;if(this.textColor){this.target.css('color',this.textColor);}
if(this.fontFamily){this.target.css('font-family',this.fontFamily);}
if(this.fontSize){this.target.css('font-size',this.fontSize);}
this.title.init();this.legend.init();this._sumy=0;this._sumx=0;this.seriesStack=[];this.previousSeriesStack=[];this.computePlotData();for(var i=0,l=this.series.length;i<l;i++){this.seriesStack.push(i);this.previousSeriesStack.push(i);this.series[i].shadowCanvas._plotDimensions=this._plotDimensions;this.series[i].canvas._plotDimensions=this._plotDimensions;for(var j=0;j<$.jqplot.preSeriesInitHooks.length;j++){$.jqplot.preSeriesInitHooks[j].call(this.series[i],target,this.data,this.options.seriesDefaults,this.options.series[i],this);}
for(var j=0;j<this.preSeriesInitHooks.hooks.length;j++){this.preSeriesInitHooks.hooks[j].call(this.series[i],target,this.data,this.options.seriesDefaults,this.options.series[i],this);}
this.series[i]._plotDimensions=this._plotDimensions;this.series[i].init(i,this.grid.borderWidth,this);for(var j=0;j<$.jqplot.postSeriesInitHooks.length;j++){$.jqplot.postSeriesInitHooks[j].call(this.series[i],target,this.data,this.options.seriesDefaults,this.options.series[i],this);}
for(var j=0;j<this.postSeriesInitHooks.hooks.length;j++){this.postSeriesInitHooks.hooks[j].call(this.series[i],target,this.data,this.options.seriesDefaults,this.options.series[i],this);}
this._sumy+=this.series[i]._sumy;this._sumx+=this.series[i]._sumx;}
for(var i=0,l=_axisNames.length;i<l;i++){name=_axisNames[i];axis=this.axes[name];axis._plotDimensions=this._plotDimensions;axis.init();if(axis.borderColor==null){if(name.charAt(0)!=='x'&&axis.useSeriesColor===true&&axis.show){axis.borderColor=axis._series[0].color;}
else{axis.borderColor=this.grid.borderColor;}}}
if(this.sortData){sortData(this.series);}
this.grid.init();this.grid._axes=this.axes;this.legend._series=this.series;for(var i=0,l=$.jqplot.postInitHooks.length;i<l;i++){$.jqplot.postInitHooks[i].call(this,target,this.data,options);}
for(var i=0,l=this.postInitHooks.hooks.length;i<l;i++){this.postInitHooks.hooks[i].call(this,target,this.data,options);}};this.quickInit=function(){this._height=this.target.height();this._width=this.target.width();if(this._height<=0||this._width<=0||!this._height||!this._width){throw"Target dimension not set";}
this._plotDimensions.height=this._height;this._plotDimensions.width=this._width;this.grid._plotDimensions=this._plotDimensions;this.title._plotDimensions=this._plotDimensions;this.baseCanvas._plotDimensions=this._plotDimensions;this.eventCanvas._plotDimensions=this._plotDimensions;this.legend._plotDimensions=this._plotDimensions;for(var n in this.axes){this.axes[n]._plotWidth=this._width;this.axes[n]._plotHeight=this._height;}
this.title._plotWidth=this._width;if(this.textColor){this.target.css('color',this.textColor);}
if(this.fontFamily){this.target.css('font-family',this.fontFamily);}
if(this.fontSize){this.target.css('font-size',this.fontSize);}
this._sumy=0;this._sumx=0;this.computePlotData();for(var i=0;i<this.series.length;i++){if(this.series[i]._type==='line'&&this.series[i].renderer.bands.show){this.series[i].renderer.initBands.call(this.series[i],this.series[i].renderer.options,this);}
this.series[i]._plotDimensions=this._plotDimensions;this.series[i].canvas._plotDimensions=this._plotDimensions;this._sumy+=this.series[i]._sumy;this._sumx+=this.series[i]._sumx;}
var name;for(var j=0;j<12;j++){name=_axisNames[j];var t=this.axes[name]._ticks;for(var i=0;i<t.length;i++){var el=t[i]._elem;if(el){if($.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==undefined){window.G_vmlCanvasManager.uninitElement(el.get(0));}
el.emptyForce();el=null;t._elem=null;}}
t=null;this.axes[name]._plotDimensions=this._plotDimensions;this.axes[name]._ticks=[];}
if(this.sortData){sortData(this.series);}
this.grid._axes=this.axes;this.legend._series=this.series;};function sortData(series){var d,sd,pd,ppd,ret;for(var i=0;i<series.length;i++){var check;var bat=[series[i].data,series[i]._stackData,series[i]._plotData,series[i]._prevPlotData];for(var n=0;n<4;n++){check=true;d=bat[n];if(series[i]._stackAxis=='x'){for(var j=0;j<d.length;j++){if(typeof(d[j][1])!="number"){check=false;break;}}
if(check){d.sort(function(a,b){return a[1]-b[1];});}}
else{for(var j=0;j<d.length;j++){if(typeof(d[j][0])!="number"){check=false;break;}}
if(check){d.sort(function(a,b){return a[0]-b[0];});}}}}}
this.computePlotData=function(){this._plotData=[];this._stackData=[];var series,index,l;for(index=0,l=this.series.length;index<l;index++){series=this.series[index];this._plotData.push([]);this._stackData.push([]);var cd=series.data;this._plotData[index]=$.extend(true,[],cd);this._stackData[index]=$.extend(true,[],cd);series._plotData=this._plotData[index];series._stackData=this._stackData[index];var plotValues={x:[],y:[]};if(this.stackSeries&&!series.disableStack){series._stack=true;var sidx=(series._stackAxis==='x')?0:1;for(var k=0,cdl=cd.length;k<cdl;k++){var temp=cd[k][sidx];if(temp==null){temp=0;}
this._plotData[index][k][sidx]=temp;this._stackData[index][k][sidx]=temp;if(index>0){for(var j=index;j--;){var prevval=this._plotData[j][k][sidx];if(temp*prevval>=0){this._plotData[index][k][sidx]+=prevval;this._stackData[index][k][sidx]+=prevval;break;}}}}}
else{for(var i=0;i<series.data.length;i++){plotValues.x.push(series.data[i][0]);plotValues.y.push(series.data[i][1]);}
this._stackData.push(series.data);this.series[index]._stackData=series.data;this._plotData.push(series.data);series._plotData=series.data;series._plotValues=plotValues;}
if(index>0){series._prevPlotData=this.series[index-1]._plotData;}
series._sumy=0;series._sumx=0;for(i=series.data.length-1;i>-1;i--){series._sumy+=series.data[i][1];series._sumx+=series.data[i][0];}}};this.populatePlotData=function(series,index){this._plotData=[];this._stackData=[];series._stackData=[];series._plotData=[];var plotValues={x:[],y:[]};if(this.stackSeries&&!series.disableStack){series._stack=true;var sidx=(series._stackAxis==='x')?0:1;var temp=$.extend(true,[],series.data);var plotdata=$.extend(true,[],series.data);var tempx,tempy,dval,stackval,comparator;for(var j=0;j<index;j++){var cd=this.series[j].data;for(var k=0;k<cd.length;k++){dval=cd[k];tempx=(dval[0]!=null)?dval[0]:0;tempy=(dval[1]!=null)?dval[1]:0;temp[k][0]+=tempx;temp[k][1]+=tempy;stackval=(sidx)?tempy:tempx;if(series.data[k][sidx]*stackval>=0){plotdata[k][sidx]+=stackval;}}}
for(var i=0;i<plotdata.length;i++){plotValues.x.push(plotdata[i][0]);plotValues.y.push(plotdata[i][1]);}
this._plotData.push(plotdata);this._stackData.push(temp);series._stackData=temp;series._plotData=plotdata;series._plotValues=plotValues;}
else{for(var i=0;i<series.data.length;i++){plotValues.x.push(series.data[i][0]);plotValues.y.push(series.data[i][1]);}
this._stackData.push(series.data);this.series[index]._stackData=series.data;this._plotData.push(series.data);series._plotData=series.data;series._plotValues=plotValues;}
if(index>0){series._prevPlotData=this.series[index-1]._plotData;}
series._sumy=0;series._sumx=0;for(i=series.data.length-1;i>-1;i--){series._sumy+=series.data[i][1];series._sumx+=series.data[i][0];}};this.getNextSeriesColor=(function(t){var idx=0;var sc=t.seriesColors;return function(){if(idx<sc.length){return sc[idx++];}
else{idx=0;return sc[idx++];}};})(this);this.parseOptions=function(options){for(var i=0;i<this.preParseOptionsHooks.hooks.length;i++){this.preParseOptionsHooks.hooks[i].call(this,options);}
for(var i=0;i<$.jqplot.preParseOptionsHooks.length;i++){$.jqplot.preParseOptionsHooks[i].call(this,options);}
this.options=$.extend(true,{},this.defaults,options);var opts=this.options;this.animate=opts.animate;this.animateReplot=opts.animateReplot;this.stackSeries=opts.stackSeries;if($.isPlainObject(opts.fillBetween)){var temp=['series1','series2','color','baseSeries','fill'],tempi;for(var i=0,l=temp.length;i<l;i++){tempi=temp[i];if(opts.fillBetween[tempi]!=null){this.fillBetween[tempi]=opts.fillBetween[tempi];}}}
if(opts.seriesColors){this.seriesColors=opts.seriesColors;}
if(opts.negativeSeriesColors){this.negativeSeriesColors=opts.negativeSeriesColors;}
if(opts.captureRightClick){this.captureRightClick=opts.captureRightClick;}
this.defaultAxisStart=(options&&options.defaultAxisStart!=null)?options.defaultAxisStart:this.defaultAxisStart;this.colorGenerator.setColors(this.seriesColors);this.negativeColorGenerator.setColors(this.negativeSeriesColors);$.extend(true,this._gridPadding,opts.gridPadding);this.sortData=(opts.sortData!=null)?opts.sortData:this.sortData;for(var i=0;i<12;i++){var n=_axisNames[i];var axis=this.axes[n];axis._options=$.extend(true,{},opts.axesDefaults,opts.axes[n]);$.extend(true,axis,opts.axesDefaults,opts.axes[n]);axis._plotWidth=this._width;axis._plotHeight=this._height;}
var normalizeData=function(data,dir,start){var temp=[];var i,l;dir=dir||'vertical';if(!$.isArray(data[0])){for(i=0,l=data.length;i<l;i++){if(dir=='vertical'){temp.push([start+i,data[i]]);}
else{temp.push([data[i],start+i]);}}}
else{$.extend(true,temp,data);}
return temp;};var colorIndex=0;this.series=[];for(var i=0;i<this.data.length;i++){var sopts=$.extend(true,{index:i},{seriesColors:this.seriesColors,negativeSeriesColors:this.negativeSeriesColors},this.options.seriesDefaults,this.options.series[i],{rendererOptions:{animation:{show:this.animate}}});var temp=new Series(sopts);for(var j=0;j<$.jqplot.preParseSeriesOptionsHooks.length;j++){$.jqplot.preParseSeriesOptionsHooks[j].call(temp,this.options.seriesDefaults,this.options.series[i]);}
for(var j=0;j<this.preParseSeriesOptionsHooks.hooks.length;j++){this.preParseSeriesOptionsHooks.hooks[j].call(temp,this.options.seriesDefaults,this.options.series[i]);}
$.extend(true,temp,sopts);var dir='vertical';if(temp.renderer===$.jqplot.BarRenderer&&temp.rendererOptions&&temp.rendererOptions.barDirection=='horizontal'){dir='horizontal';temp._stackAxis='x';temp._primaryAxis='_yaxis';}
temp.data=normalizeData(this.data[i],dir,this.defaultAxisStart);switch(temp.xaxis){case'xaxis':temp._xaxis=this.axes.xaxis;break;case'x2axis':temp._xaxis=this.axes.x2axis;break;default:break;}
temp._yaxis=this.axes[temp.yaxis];temp._xaxis._series.push(temp);temp._yaxis._series.push(temp);if(temp.show){temp._xaxis.show=true;temp._yaxis.show=true;}
else{if(temp._xaxis.scaleToHiddenSeries){temp._xaxis.show=true;}
if(temp._yaxis.scaleToHiddenSeries){temp._yaxis.show=true;}}
if(!temp.label){temp.label='Series '+(i+1).toString();}
this.series.push(temp);for(var j=0;j<$.jqplot.postParseSeriesOptionsHooks.length;j++){$.jqplot.postParseSeriesOptionsHooks[j].call(this.series[i],this.options.seriesDefaults,this.options.series[i]);}
for(var j=0;j<this.postParseSeriesOptionsHooks.hooks.length;j++){this.postParseSeriesOptionsHooks.hooks[j].call(this.series[i],this.options.seriesDefaults,this.options.series[i]);}}
$.extend(true,this.grid,this.options.grid);for(var i=0,l=_axisNames.length;i<l;i++){var n=_axisNames[i];var axis=this.axes[n];if(axis.borderWidth==null){axis.borderWidth=this.grid.borderWidth;}}
if(typeof this.options.title=='string'){this.title.text=this.options.title;}
else if(typeof this.options.title=='object'){$.extend(true,this.title,this.options.title);}
this.title._plotWidth=this._width;this.legend.setOptions(this.options.legend);for(var i=0;i<$.jqplot.postParseOptionsHooks.length;i++){$.jqplot.postParseOptionsHooks[i].call(this,options);}
for(var i=0;i<this.postParseOptionsHooks.hooks.length;i++){this.postParseOptionsHooks.hooks[i].call(this,options);}};this.destroy=function(){this.canvasManager.freeAllCanvases();if(this.eventCanvas&&this.eventCanvas._elem){this.eventCanvas._elem.unbind();}
this.target.empty();this.target[0].innerHTML='';};this.replot=function(options){var opts=options||{};var data=opts.data||null;var clear=(opts.clear===false)?false:true;var resetAxes=opts.resetAxes||false;delete opts.data;delete opts.clear;delete opts.resetAxes;this.target.trigger('jqplotPreReplot');if(clear){this.destroy();}
if(data||!$.isEmptyObject(opts)){this.reInitialize(data,opts);}
else{this.quickInit();}
if(resetAxes){this.resetAxesScale(resetAxes,opts.axes);}
this.draw();this.target.trigger('jqplotPostReplot');};this.redraw=function(clear){clear=(clear!=null)?clear:true;this.target.trigger('jqplotPreRedraw');if(clear){this.canvasManager.freeAllCanvases();this.eventCanvas._elem.unbind();this.target.empty();}
for(var ax in this.axes){this.axes[ax]._ticks=[];}
this.computePlotData();this._sumy=0;this._sumx=0;for(var i=0,tsl=this.series.length;i<tsl;i++){this._sumy+=this.series[i]._sumy;this._sumx+=this.series[i]._sumx;}
this.draw();this.target.trigger('jqplotPostRedraw');};this.draw=function(){if(this.drawIfHidden||this.target.is(':visible')){this.target.trigger('jqplotPreDraw');var i,j,l,tempseries;for(i=0,l=$.jqplot.preDrawHooks.length;i<l;i++){$.jqplot.preDrawHooks[i].call(this);}
for(i=0,l=this.preDrawHooks.length;i<l;i++){this.preDrawHooks.hooks[i].apply(this,this.preDrawSeriesHooks.args[i]);}
this.target.append(this.baseCanvas.createElement({left:0,right:0,top:0,bottom:0},'jqplot-base-canvas',null,this));this.baseCanvas.setContext();this.target.append(this.title.draw());this.title.pack({top:0,left:0});var legendElem=this.legend.draw({},this);var gridPadding={top:0,left:0,bottom:0,right:0};if(this.legend.placement=="outsideGrid"){this.target.append(legendElem);switch(this.legend.location){case'n':gridPadding.top+=this.legend.getHeight();break;case's':gridPadding.bottom+=this.legend.getHeight();break;case'ne':case'e':case'se':gridPadding.right+=this.legend.getWidth();break;case'nw':case'w':case'sw':gridPadding.left+=this.legend.getWidth();break;default:gridPadding.right+=this.legend.getWidth();break;}
legendElem=legendElem.detach();}
var ax=this.axes;var name;for(i=0;i<12;i++){name=_axisNames[i];this.target.append(ax[name].draw(this.baseCanvas._ctx,this));ax[name].set();}
if(ax.yaxis.show){gridPadding.left+=ax.yaxis.getWidth();}
var ra=['y2axis','y3axis','y4axis','y5axis','y6axis','y7axis','y8axis','y9axis'];var rapad=[0,0,0,0,0,0,0,0];var gpr=0;var n;for(n=0;n<8;n++){if(ax[ra[n]].show){gpr+=ax[ra[n]].getWidth();rapad[n]=gpr;}}
gridPadding.right+=gpr;if(ax.x2axis.show){gridPadding.top+=ax.x2axis.getHeight();}
if(this.title.show){gridPadding.top+=this.title.getHeight();}
if(ax.xaxis.show){gridPadding.bottom+=ax.xaxis.getHeight();}
if(this.options.gridDimensions&&$.isPlainObject(this.options.gridDimensions)){var gdw=parseInt(this.options.gridDimensions.width,10)||0;var gdh=parseInt(this.options.gridDimensions.height,10)||0;var widthAdj=(this._width-gridPadding.left-gridPadding.right-gdw)/2;var heightAdj=(this._height-gridPadding.top-gridPadding.bottom-gdh)/2;if(heightAdj>=0&&widthAdj>=0){gridPadding.top+=heightAdj;gridPadding.bottom+=heightAdj;gridPadding.left+=widthAdj;gridPadding.right+=widthAdj;}}
var arr=['top','bottom','left','right'];for(var n in arr){if(this._gridPadding[arr[n]]==null&&gridPadding[arr[n]]>0){this._gridPadding[arr[n]]=gridPadding[arr[n]];}
else if(this._gridPadding[arr[n]]==null){this._gridPadding[arr[n]]=this._defaultGridPadding[arr[n]];}}
var legendPadding=this._gridPadding;if(this.legend.placement==='outsideGrid'){legendPadding={top:this.title.getHeight(),left:0,right:0,bottom:0};if(this.legend.location==='s'){legendPadding.left=this._gridPadding.left;legendPadding.right=this._gridPadding.right;}}
ax.xaxis.pack({position:'absolute',bottom:this._gridPadding.bottom-ax.xaxis.getHeight(),left:0,width:this._width},{min:this._gridPadding.left,max:this._width-this._gridPadding.right});ax.yaxis.pack({position:'absolute',top:0,left:this._gridPadding.left-ax.yaxis.getWidth(),height:this._height},{min:this._height-this._gridPadding.bottom,max:this._gridPadding.top});ax.x2axis.pack({position:'absolute',top:this._gridPadding.top-ax.x2axis.getHeight(),left:0,width:this._width},{min:this._gridPadding.left,max:this._width-this._gridPadding.right});for(i=8;i>0;i--){ax[ra[i-1]].pack({position:'absolute',top:0,right:this._gridPadding.right-rapad[i-1]},{min:this._height-this._gridPadding.bottom,max:this._gridPadding.top});}
var ltemp=(this._width-this._gridPadding.left-this._gridPadding.right)/2.0+this._gridPadding.left-ax.yMidAxis.getWidth()/2.0;ax.yMidAxis.pack({position:'absolute',top:0,left:ltemp,zIndex:9,textAlign:'center'},{min:this._height-this._gridPadding.bottom,max:this._gridPadding.top});this.target.append(this.grid.createElement(this._gridPadding,this));this.grid.draw();var series=this.series;var seriesLength=series.length;for(i=0,l=seriesLength;i<l;i++){j=this.seriesStack[i];this.target.append(series[j].shadowCanvas.createElement(this._gridPadding,'jqplot-series-shadowCanvas',null,this));series[j].shadowCanvas.setContext();series[j].shadowCanvas._elem.data('seriesIndex',j);}
for(i=0,l=seriesLength;i<l;i++){j=this.seriesStack[i];this.target.append(series[j].canvas.createElement(this._gridPadding,'jqplot-series-canvas',null,this));series[j].canvas.setContext();series[j].canvas._elem.data('seriesIndex',j);}
this.target.append(this.eventCanvas.createElement(this._gridPadding,'jqplot-event-canvas',null,this));this.eventCanvas.setContext();this.eventCanvas._ctx.fillStyle='rgba(0,0,0,0)';this.eventCanvas._ctx.fillRect(0,0,this.eventCanvas._ctx.canvas.width,this.eventCanvas._ctx.canvas.height);this.bindCustomEvents();if(this.legend.preDraw){this.eventCanvas._elem.before(legendElem);this.legend.pack(legendPadding);if(this.legend._elem){this.drawSeries({legendInfo:{location:this.legend.location,placement:this.legend.placement,width:this.legend.getWidth(),height:this.legend.getHeight(),xoffset:this.legend.xoffset,yoffset:this.legend.yoffset}});}
else{this.drawSeries();}}
else{this.drawSeries();if(seriesLength){$(series[seriesLength-1].canvas._elem).after(legendElem);}
this.legend.pack(legendPadding);}
for(var i=0,l=$.jqplot.eventListenerHooks.length;i<l;i++){this.eventCanvas._elem.bind($.jqplot.eventListenerHooks[i][0],{plot:this},$.jqplot.eventListenerHooks[i][1]);}
for(var i=0,l=this.eventListenerHooks.hooks.length;i<l;i++){this.eventCanvas._elem.bind(this.eventListenerHooks.hooks[i][0],{plot:this},this.eventListenerHooks.hooks[i][1]);}
var fb=this.fillBetween;if(fb.fill&&fb.series1!==fb.series2&&fb.series1<seriesLength&&fb.series2<seriesLength&&series[fb.series1]._type==='line'&&series[fb.series2]._type==='line'){this.doFillBetweenLines();}
for(var i=0,l=$.jqplot.postDrawHooks.length;i<l;i++){$.jqplot.postDrawHooks[i].call(this);}
for(var i=0,l=this.postDrawHooks.hooks.length;i<l;i++){this.postDrawHooks.hooks[i].apply(this,this.postDrawHooks.args[i]);}
if(this.target.is(':visible')){this._drawCount+=1;}
var temps,tempr,sel,_els;for(i=0,l=seriesLength;i<l;i++){temps=series[i];tempr=temps.renderer;sel='.jqplot-point-label.jqplot-series-'+i;if(tempr.animation&&tempr.animation._supported&&tempr.animation.show&&(this._drawCount<2||this.animateReplot)){_els=this.target.find(sel);_els.stop(true,true).hide();temps.canvas._elem.stop(true,true).hide();temps.shadowCanvas._elem.stop(true,true).hide();temps.canvas._elem.jqplotEffect('blind',{mode:'show',direction:tempr.animation.direction},tempr.animation.speed);temps.shadowCanvas._elem.jqplotEffect('blind',{mode:'show',direction:tempr.animation.direction},tempr.animation.speed);_els.fadeIn(tempr.animation.speed*0.8);}}
_els=null;this.target.trigger('jqplotPostDraw',[this]);}};jqPlot.prototype.doFillBetweenLines=function(){var fb=this.fillBetween;var sid1=fb.series1;var sid2=fb.series2;var id1=(sid1<sid2)?sid1:sid2;var id2=(sid2>sid1)?sid2:sid1;var series1=this.series[id1];var series2=this.series[id2];if(series2.renderer.smooth){var tempgd=series2.renderer._smoothedData.slice(0).reverse();}
else{var tempgd=series2.gridData.slice(0).reverse();}
if(series1.renderer.smooth){var gd=series1.renderer._smoothedData.concat(tempgd);}
else{var gd=series1.gridData.concat(tempgd);}
var color=(fb.color!==null)?fb.color:this.series[sid1].fillColor;var baseSeries=(fb.baseSeries!==null)?fb.baseSeries:id1;var sr=this.series[baseSeries].renderer.shapeRenderer;var opts={fillStyle:color,fill:true,closePath:true};sr.draw(series1.shadowCanvas._ctx,gd,opts);};this.bindCustomEvents=function(){this.eventCanvas._elem.bind('click',{plot:this},this.onClick);this.eventCanvas._elem.bind('dblclick',{plot:this},this.onDblClick);this.eventCanvas._elem.bind('mousedown',{plot:this},this.onMouseDown);this.eventCanvas._elem.bind('mousemove',{plot:this},this.onMouseMove);this.eventCanvas._elem.bind('mouseenter',{plot:this},this.onMouseEnter);this.eventCanvas._elem.bind('mouseleave',{plot:this},this.onMouseLeave);if(this.captureRightClick){this.eventCanvas._elem.bind('mouseup',{plot:this},this.onRightClick);this.eventCanvas._elem.get(0).oncontextmenu=function(){return false;};}
else{this.eventCanvas._elem.bind('mouseup',{plot:this},this.onMouseUp);}};function getEventPosition(ev){var plot=ev.data.plot;var go=plot.eventCanvas._elem.offset();var gridPos={x:ev.pageX-go.left,y:ev.pageY-go.top};var dataPos={xaxis:null,yaxis:null,x2axis:null,y2axis:null,y3axis:null,y4axis:null,y5axis:null,y6axis:null,y7axis:null,y8axis:null,y9axis:null,yMidAxis:null};var an=['xaxis','yaxis','x2axis','y2axis','y3axis','y4axis','y5axis','y6axis','y7axis','y8axis','y9axis','yMidAxis'];var ax=plot.axes;var n,axis;for(n=11;n>0;n--){axis=an[n-1];if(ax[axis].show){dataPos[axis]=ax[axis].series_p2u(gridPos[axis.charAt(0)]);}}
return{offsets:go,gridPos:gridPos,dataPos:dataPos};}
function checkIntersection(gridpos,plot){var series=plot.series;var i,j,k,s,r,x,y,theta,sm,sa,minang,maxang;var d0,d,p,pp,points,bw,hp;var threshold,t;for(k=plot.seriesStack.length-1;k>=0;k--){i=plot.seriesStack[k];s=series[i];hp=s._highlightThreshold;switch(s.renderer.constructor){case $.jqplot.BarRenderer:x=gridpos.x;y=gridpos.y;for(j=0;j<s._barPoints.length;j++){points=s._barPoints[j];p=s.gridData[j];if(x>points[0][0]&&x<points[2][0]&&y>points[2][1]&&y<points[0][1]){return{seriesIndex:s.index,pointIndex:j,gridData:p,data:s.data[j],points:s._barPoints[j]};}}
break;case $.jqplot.PyramidRenderer:x=gridpos.x;y=gridpos.y;for(j=0;j<s._barPoints.length;j++){points=s._barPoints[j];p=s.gridData[j];if(x>points[0][0]+hp[0][0]&&x<points[2][0]+hp[2][0]&&y>points[2][1]&&y<points[0][1]){return{seriesIndex:s.index,pointIndex:j,gridData:p,data:s.data[j],points:s._barPoints[j]};}}
break;case $.jqplot.DonutRenderer:sa=s.startAngle/180*Math.PI;x=gridpos.x-s._center[0];y=gridpos.y-s._center[1];r=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));if(x>0&&-y>=0){theta=2*Math.PI-Math.atan(-y/x);}
else if(x>0&&-y<0){theta=-Math.atan(-y/x);}
else if(x<0){theta=Math.PI-Math.atan(-y/x);}
else if(x==0&&-y>0){theta=3*Math.PI/2;}
else if(x==0&&-y<0){theta=Math.PI/2;}
else if(x==0&&y==0){theta=0;}
if(sa){theta-=sa;if(theta<0){theta+=2*Math.PI;}
else if(theta>2*Math.PI){theta-=2*Math.PI;}}
sm=s.sliceMargin/180*Math.PI;if(r<s._radius&&r>s._innerRadius){for(j=0;j<s.gridData.length;j++){minang=(j>0)?s.gridData[j-1][1]+sm:sm;maxang=s.gridData[j][1];if(theta>minang&&theta<maxang){return{seriesIndex:s.index,pointIndex:j,gridData:s.gridData[j],data:s.data[j]};}}}
break;case $.jqplot.PieRenderer:sa=s.startAngle/180*Math.PI;x=gridpos.x-s._center[0];y=gridpos.y-s._center[1];r=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));if(x>0&&-y>=0){theta=2*Math.PI-Math.atan(-y/x);}
else if(x>0&&-y<0){theta=-Math.atan(-y/x);}
else if(x<0){theta=Math.PI-Math.atan(-y/x);}
else if(x==0&&-y>0){theta=3*Math.PI/2;}
else if(x==0&&-y<0){theta=Math.PI/2;}
else if(x==0&&y==0){theta=0;}
if(sa){theta-=sa;if(theta<0){theta+=2*Math.PI;}
else if(theta>2*Math.PI){theta-=2*Math.PI;}}
sm=s.sliceMargin/180*Math.PI;if(r<s._radius){for(j=0;j<s.gridData.length;j++){minang=(j>0)?s.gridData[j-1][1]+sm:sm;maxang=s.gridData[j][1];if(theta>minang&&theta<maxang){return{seriesIndex:s.index,pointIndex:j,gridData:s.gridData[j],data:s.data[j]};}}}
break;case $.jqplot.BubbleRenderer:x=gridpos.x;y=gridpos.y;var ret=null;if(s.show){for(var j=0;j<s.gridData.length;j++){p=s.gridData[j];d=Math.sqrt((x-p[0])*(x-p[0])+(y-p[1])*(y-p[1]));if(d<=p[2]&&(d<=d0||d0==null)){d0=d;ret={seriesIndex:i,pointIndex:j,gridData:p,data:s.data[j]};}}
if(ret!=null){return ret;}}
break;case $.jqplot.FunnelRenderer:x=gridpos.x;y=gridpos.y;var v=s._vertices,vfirst=v[0],vlast=v[v.length-1],lex,rex,cv;function findedge(l,p1,p2){var m=(p1[1]-p2[1])/(p1[0]-p2[0]);var b=p1[1]-m*p1[0];var y=l+p1[1];return[(y-b)/m,y];}
lex=findedge(y,vfirst[0],vlast[3]);rex=findedge(y,vfirst[1],vlast[2]);for(j=0;j<v.length;j++){cv=v[j];if(y>=cv[0][1]&&y<=cv[3][1]&&x>=lex[0]&&x<=rex[0]){return{seriesIndex:s.index,pointIndex:j,gridData:null,data:s.data[j]};}}
break;case $.jqplot.LineRenderer:x=gridpos.x;y=gridpos.y;r=s.renderer;if(s.show){if((s.fill||(s.renderer.bands.show&&s.renderer.bands.fill))&&(!plot.plugins.highlighter||!plot.plugins.highlighter.show)){var inside=false;if(x>s._boundingBox[0][0]&&x<s._boundingBox[1][0]&&y>s._boundingBox[1][1]&&y<s._boundingBox[0][1]){var numPoints=s._areaPoints.length;var ii;var j=numPoints-1;for(var ii=0;ii<numPoints;ii++){var vertex1=[s._areaPoints[ii][0],s._areaPoints[ii][1]];var vertex2=[s._areaPoints[j][0],s._areaPoints[j][1]];if(vertex1[1]<y&&vertex2[1]>=y||vertex2[1]<y&&vertex1[1]>=y){if(vertex1[0]+(y-vertex1[1])/(vertex2[1]-vertex1[1])*(vertex2[0]-vertex1[0])<x){inside=!inside;}}
j=ii;}}
if(inside){return{seriesIndex:i,pointIndex:null,gridData:s.gridData,data:s.data,points:s._areaPoints};}
break;}
else{t=s.markerRenderer.size/2+s.neighborThreshold;threshold=(t>0)?t:0;for(var j=0;j<s.gridData.length;j++){p=s.gridData[j];if(r.constructor==$.jqplot.OHLCRenderer){if(r.candleStick){var yp=s._yaxis.series_u2p;if(x>=p[0]-r._bodyWidth/2&&x<=p[0]+r._bodyWidth/2&&y>=yp(s.data[j][2])&&y<=yp(s.data[j][3])){return{seriesIndex:i,pointIndex:j,gridData:p,data:s.data[j]};}}
else if(!r.hlc){var yp=s._yaxis.series_u2p;if(x>=p[0]-r._tickLength&&x<=p[0]+r._tickLength&&y>=yp(s.data[j][2])&&y<=yp(s.data[j][3])){return{seriesIndex:i,pointIndex:j,gridData:p,data:s.data[j]};}}
else{var yp=s._yaxis.series_u2p;if(x>=p[0]-r._tickLength&&x<=p[0]+r._tickLength&&y>=yp(s.data[j][1])&&y<=yp(s.data[j][2])){return{seriesIndex:i,pointIndex:j,gridData:p,data:s.data[j]};}}}
else if(p[0]!=null&&p[1]!=null){d=Math.sqrt((x-p[0])*(x-p[0])+(y-p[1])*(y-p[1]));if(d<=threshold&&(d<=d0||d0==null)){d0=d;return{seriesIndex:i,pointIndex:j,gridData:p,data:s.data[j]};}}}}}
break;default:x=gridpos.x;y=gridpos.y;r=s.renderer;if(s.show){t=s.markerRenderer.size/2+s.neighborThreshold;threshold=(t>0)?t:0;for(var j=0;j<s.gridData.length;j++){p=s.gridData[j];if(r.constructor==$.jqplot.OHLCRenderer){if(r.candleStick){var yp=s._yaxis.series_u2p;if(x>=p[0]-r._bodyWidth/2&&x<=p[0]+r._bodyWidth/2&&y>=yp(s.data[j][2])&&y<=yp(s.data[j][3])){return{seriesIndex:i,pointIndex:j,gridData:p,data:s.data[j]};}}
else if(!r.hlc){var yp=s._yaxis.series_u2p;if(x>=p[0]-r._tickLength&&x<=p[0]+r._tickLength&&y>=yp(s.data[j][2])&&y<=yp(s.data[j][3])){return{seriesIndex:i,pointIndex:j,gridData:p,data:s.data[j]};}}
else{var yp=s._yaxis.series_u2p;if(x>=p[0]-r._tickLength&&x<=p[0]+r._tickLength&&y>=yp(s.data[j][1])&&y<=yp(s.data[j][2])){return{seriesIndex:i,pointIndex:j,gridData:p,data:s.data[j]};}}}
else{d=Math.sqrt((x-p[0])*(x-p[0])+(y-p[1])*(y-p[1]));if(d<=threshold&&(d<=d0||d0==null)){d0=d;return{seriesIndex:i,pointIndex:j,gridData:p,data:s.data[j]};}}}}
break;}}
return null;}
this.onClick=function(ev){var positions=getEventPosition(ev);var p=ev.data.plot;var neighbor=checkIntersection(positions.gridPos,p);var evt=$.Event('jqplotClick');evt.pageX=ev.pageX;evt.pageY=ev.pageY;$(this).trigger(evt,[positions.gridPos,positions.dataPos,neighbor,p]);};this.onDblClick=function(ev){var positions=getEventPosition(ev);var p=ev.data.plot;var neighbor=checkIntersection(positions.gridPos,p);var evt=$.Event('jqplotDblClick');evt.pageX=ev.pageX;evt.pageY=ev.pageY;$(this).trigger(evt,[positions.gridPos,positions.dataPos,neighbor,p]);};this.onMouseDown=function(ev){var positions=getEventPosition(ev);var p=ev.data.plot;var neighbor=checkIntersection(positions.gridPos,p);var evt=$.Event('jqplotMouseDown');evt.pageX=ev.pageX;evt.pageY=ev.pageY;$(this).trigger(evt,[positions.gridPos,positions.dataPos,neighbor,p]);};this.onMouseUp=function(ev){var positions=getEventPosition(ev);var evt=$.Event('jqplotMouseUp');evt.pageX=ev.pageX;evt.pageY=ev.pageY;$(this).trigger(evt,[positions.gridPos,positions.dataPos,null,ev.data.plot]);};this.onRightClick=function(ev){var positions=getEventPosition(ev);var p=ev.data.plot;var neighbor=checkIntersection(positions.gridPos,p);if(p.captureRightClick){if(ev.which==3){var evt=$.Event('jqplotRightClick');evt.pageX=ev.pageX;evt.pageY=ev.pageY;$(this).trigger(evt,[positions.gridPos,positions.dataPos,neighbor,p]);}
else{var evt=$.Event('jqplotMouseUp');evt.pageX=ev.pageX;evt.pageY=ev.pageY;$(this).trigger(evt,[positions.gridPos,positions.dataPos,neighbor,p]);}}};this.onMouseMove=function(ev){var positions=getEventPosition(ev);var p=ev.data.plot;var neighbor=checkIntersection(positions.gridPos,p);var evt=$.Event('jqplotMouseMove');evt.pageX=ev.pageX;evt.pageY=ev.pageY;$(this).trigger(evt,[positions.gridPos,positions.dataPos,neighbor,p]);};this.onMouseEnter=function(ev){var positions=getEventPosition(ev);var p=ev.data.plot;var evt=$.Event('jqplotMouseEnter');evt.pageX=ev.pageX;evt.pageY=ev.pageY;evt.relatedTarget=ev.relatedTarget;$(this).trigger(evt,[positions.gridPos,positions.dataPos,null,p]);};this.onMouseLeave=function(ev){var positions=getEventPosition(ev);var p=ev.data.plot;var evt=$.Event('jqplotMouseLeave');evt.pageX=ev.pageX;evt.pageY=ev.pageY;evt.relatedTarget=ev.relatedTarget;$(this).trigger(evt,[positions.gridPos,positions.dataPos,null,p]);};this.drawSeries=function(options,idx){var i,series,ctx;idx=(typeof(options)==="number"&&idx==null)?options:idx;options=(typeof(options)==="object")?options:{};if(idx!=undefined){series=this.series[idx];ctx=series.shadowCanvas._ctx;ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);series.drawShadow(ctx,options,this);ctx=series.canvas._ctx;ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);series.draw(ctx,options,this);if(series.renderer.constructor==$.jqplot.BezierCurveRenderer){if(idx<this.series.length-1){this.drawSeries(idx+1);}}}
else{for(i=0;i<this.series.length;i++){series=this.series[i];ctx=series.shadowCanvas._ctx;ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);series.drawShadow(ctx,options,this);ctx=series.canvas._ctx;ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);series.draw(ctx,options,this);}}
options=idx=i=series=ctx=null;};this.moveSeriesToFront=function(idx){idx=parseInt(idx,10);var stackIndex=$.inArray(idx,this.seriesStack);if(stackIndex==-1){return;}
if(stackIndex==this.seriesStack.length-1){this.previousSeriesStack=this.seriesStack.slice(0);return;}
var opidx=this.seriesStack[this.seriesStack.length-1];var serelem=this.series[idx].canvas._elem.detach();var shadelem=this.series[idx].shadowCanvas._elem.detach();this.series[opidx].shadowCanvas._elem.after(shadelem);this.series[opidx].canvas._elem.after(serelem);this.previousSeriesStack=this.seriesStack.slice(0);this.seriesStack.splice(stackIndex,1);this.seriesStack.push(idx);};this.moveSeriesToBack=function(idx){idx=parseInt(idx,10);var stackIndex=$.inArray(idx,this.seriesStack);if(stackIndex==0||stackIndex==-1){return;}
var opidx=this.seriesStack[0];var serelem=this.series[idx].canvas._elem.detach();var shadelem=this.series[idx].shadowCanvas._elem.detach();this.series[opidx].shadowCanvas._elem.before(shadelem);this.series[opidx].canvas._elem.before(serelem);this.previousSeriesStack=this.seriesStack.slice(0);this.seriesStack.splice(stackIndex,1);this.seriesStack.unshift(idx);};this.restorePreviousSeriesOrder=function(){var i,j,serelem,shadelem,temp,move,keep;if(this.seriesStack==this.previousSeriesStack){return;}
for(i=1;i<this.previousSeriesStack.length;i++){move=this.previousSeriesStack[i];keep=this.previousSeriesStack[i-1];serelem=this.series[move].canvas._elem.detach();shadelem=this.series[move].shadowCanvas._elem.detach();this.series[keep].shadowCanvas._elem.after(shadelem);this.series[keep].canvas._elem.after(serelem);}
temp=this.seriesStack.slice(0);this.seriesStack=this.previousSeriesStack.slice(0);this.previousSeriesStack=temp;};this.restoreOriginalSeriesOrder=function(){var i,j,arr=[],serelem,shadelem;for(i=0;i<this.series.length;i++){arr.push(i);}
if(this.seriesStack==arr){return;}
this.previousSeriesStack=this.seriesStack.slice(0);this.seriesStack=arr;for(i=1;i<this.seriesStack.length;i++){serelem=this.series[i].canvas._elem.detach();shadelem=this.series[i].shadowCanvas._elem.detach();this.series[i-1].shadowCanvas._elem.after(shadelem);this.series[i-1].canvas._elem.after(serelem);}};this.activateTheme=function(name){this.themeEngine.activate(this,name);};}
$.jqplot.computeHighlightColors=function(colors){var ret;if($.isArray(colors)){ret=[];for(var i=0;i<colors.length;i++){var rgba=$.jqplot.getColorComponents(colors[i]);var newrgb=[rgba[0],rgba[1],rgba[2]];var sum=newrgb[0]+newrgb[1]+newrgb[2];for(var j=0;j<3;j++){newrgb[j]=(sum>660)?newrgb[j]*0.85:0.73*newrgb[j]+90;newrgb[j]=parseInt(newrgb[j],10);(newrgb[j]>255)?255:newrgb[j];}
newrgb[3]=0.3+0.35*rgba[3];ret.push('rgba('+newrgb[0]+','+newrgb[1]+','+newrgb[2]+','+newrgb[3]+')');}}
else{var rgba=$.jqplot.getColorComponents(colors);var newrgb=[rgba[0],rgba[1],rgba[2]];var sum=newrgb[0]+newrgb[1]+newrgb[2];for(var j=0;j<3;j++){newrgb[j]=(sum>660)?newrgb[j]*0.85:0.73*newrgb[j]+90;newrgb[j]=parseInt(newrgb[j],10);(newrgb[j]>255)?255:newrgb[j];}
newrgb[3]=0.3+0.35*rgba[3];ret='rgba('+newrgb[0]+','+newrgb[1]+','+newrgb[2]+','+newrgb[3]+')';}
return ret;};$.jqplot.ColorGenerator=function(colors){colors=colors||$.jqplot.config.defaultColors;var idx=0;this.next=function(){if(idx<colors.length){return colors[idx++];}
else{idx=0;return colors[idx++];}};this.previous=function(){if(idx>0){return colors[idx--];}
else{idx=colors.length-1;return colors[idx];}};this.get=function(i){var idx=i-colors.length*Math.floor(i/colors.length);return colors[idx];};this.setColors=function(c){colors=c;};this.reset=function(){idx=0;};this.getIndex=function(){return idx;};this.setIndex=function(index){idx=index;};};$.jqplot.hex2rgb=function(h,a){h=h.replace('#','');if(h.length==3){h=h.charAt(0)+h.charAt(0)+h.charAt(1)+h.charAt(1)+h.charAt(2)+h.charAt(2);}
var rgb;rgb='rgba('+parseInt(h.slice(0,2),16)+', '+parseInt(h.slice(2,4),16)+', '+parseInt(h.slice(4,6),16);if(a){rgb+=', '+a;}
rgb+=')';return rgb;};$.jqplot.rgb2hex=function(s){var pat=/rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *(?:, *[0-9.]*)?\)/;var m=s.match(pat);var h='#';for(var i=1;i<4;i++){var temp;if(m[i].search(/%/)!=-1){temp=parseInt(255*m[i]/100,10).toString(16);if(temp.length==1){temp='0'+temp;}}
else{temp=parseInt(m[i],10).toString(16);if(temp.length==1){temp='0'+temp;}}
h+=temp;}
return h;};$.jqplot.normalize2rgb=function(s,a){if(s.search(/^ *rgba?\(/)!=-1){return s;}
else if(s.search(/^ *#?[0-9a-fA-F]?[0-9a-fA-F]/)!=-1){return $.jqplot.hex2rgb(s,a);}
else{throw'invalid color spec';}};$.jqplot.getColorComponents=function(s){s=$.jqplot.colorKeywordMap[s]||s;var rgb=$.jqplot.normalize2rgb(s);var pat=/rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *,? *([0-9.]* *)?\)/;var m=rgb.match(pat);var ret=[];for(var i=1;i<4;i++){if(m[i].search(/%/)!=-1){ret[i-1]=parseInt(255*m[i]/100,10);}
else{ret[i-1]=parseInt(m[i],10);}}
ret[3]=parseFloat(m[4])?parseFloat(m[4]):1.0;return ret;};$.jqplot.colorKeywordMap={aliceblue:'rgb(240, 248, 255)',antiquewhite:'rgb(250, 235, 215)',aqua:'rgb( 0, 255, 255)',aquamarine:'rgb(127, 255, 212)',azure:'rgb(240, 255, 255)',beige:'rgb(245, 245, 220)',bisque:'rgb(255, 228, 196)',black:'rgb( 0, 0, 0)',blanchedalmond:'rgb(255, 235, 205)',blue:'rgb( 0, 0, 255)',blueviolet:'rgb(138, 43, 226)',brown:'rgb(165, 42, 42)',burlywood:'rgb(222, 184, 135)',cadetblue:'rgb( 95, 158, 160)',chartreuse:'rgb(127, 255, 0)',chocolate:'rgb(210, 105, 30)',coral:'rgb(255, 127, 80)',cornflowerblue:'rgb(100, 149, 237)',cornsilk:'rgb(255, 248, 220)',crimson:'rgb(220, 20, 60)',cyan:'rgb( 0, 255, 255)',darkblue:'rgb( 0, 0, 139)',darkcyan:'rgb( 0, 139, 139)',darkgoldenrod:'rgb(184, 134, 11)',darkgray:'rgb(169, 169, 169)',darkgreen:'rgb( 0, 100, 0)',darkgrey:'rgb(169, 169, 169)',darkkhaki:'rgb(189, 183, 107)',darkmagenta:'rgb(139, 0, 139)',darkolivegreen:'rgb( 85, 107, 47)',darkorange:'rgb(255, 140, 0)',darkorchid:'rgb(153, 50, 204)',darkred:'rgb(139, 0, 0)',darksalmon:'rgb(233, 150, 122)',darkseagreen:'rgb(143, 188, 143)',darkslateblue:'rgb( 72, 61, 139)',darkslategray:'rgb( 47, 79, 79)',darkslategrey:'rgb( 47, 79, 79)',darkturquoise:'rgb( 0, 206, 209)',darkviolet:'rgb(148, 0, 211)',deeppink:'rgb(255, 20, 147)',deepskyblue:'rgb( 0, 191, 255)',dimgray:'rgb(105, 105, 105)',dimgrey:'rgb(105, 105, 105)',dodgerblue:'rgb( 30, 144, 255)',firebrick:'rgb(178, 34, 34)',floralwhite:'rgb(255, 250, 240)',forestgreen:'rgb( 34, 139, 34)',fuchsia:'rgb(255, 0, 255)',gainsboro:'rgb(220, 220, 220)',ghostwhite:'rgb(248, 248, 255)',gold:'rgb(255, 215, 0)',goldenrod:'rgb(218, 165, 32)',gray:'rgb(128, 128, 128)',grey:'rgb(128, 128, 128)',green:'rgb( 0, 128, 0)',greenyellow:'rgb(173, 255, 47)',honeydew:'rgb(240, 255, 240)',hotpink:'rgb(255, 105, 180)',indianred:'rgb(205, 92, 92)',indigo:'rgb( 75, 0, 130)',ivory:'rgb(255, 255, 240)',khaki:'rgb(240, 230, 140)',lavender:'rgb(230, 230, 250)',lavenderblush:'rgb(255, 240, 245)',lawngreen:'rgb(124, 252, 0)',lemonchiffon:'rgb(255, 250, 205)',lightblue:'rgb(173, 216, 230)',lightcoral:'rgb(240, 128, 128)',lightcyan:'rgb(224, 255, 255)',lightgoldenrodyellow:'rgb(250, 250, 210)',lightgray:'rgb(211, 211, 211)',lightgreen:'rgb(144, 238, 144)',lightgrey:'rgb(211, 211, 211)',lightpink:'rgb(255, 182, 193)',lightsalmon:'rgb(255, 160, 122)',lightseagreen:'rgb( 32, 178, 170)',lightskyblue:'rgb(135, 206, 250)',lightslategray:'rgb(119, 136, 153)',lightslategrey:'rgb(119, 136, 153)',lightsteelblue:'rgb(176, 196, 222)',lightyellow:'rgb(255, 255, 224)',lime:'rgb( 0, 255, 0)',limegreen:'rgb( 50, 205, 50)',linen:'rgb(250, 240, 230)',magenta:'rgb(255, 0, 255)',maroon:'rgb(128, 0, 0)',mediumaquamarine:'rgb(102, 205, 170)',mediumblue:'rgb( 0, 0, 205)',mediumorchid:'rgb(186, 85, 211)',mediumpurple:'rgb(147, 112, 219)',mediumseagreen:'rgb( 60, 179, 113)',mediumslateblue:'rgb(123, 104, 238)',mediumspringgreen:'rgb( 0, 250, 154)',mediumturquoise:'rgb( 72, 209, 204)',mediumvioletred:'rgb(199, 21, 133)',midnightblue:'rgb( 25, 25, 112)',mintcream:'rgb(245, 255, 250)',mistyrose:'rgb(255, 228, 225)',moccasin:'rgb(255, 228, 181)',navajowhite:'rgb(255, 222, 173)',navy:'rgb( 0, 0, 128)',oldlace:'rgb(253, 245, 230)',olive:'rgb(128, 128, 0)',olivedrab:'rgb(107, 142, 35)',orange:'rgb(255, 165, 0)',orangered:'rgb(255, 69, 0)',orchid:'rgb(218, 112, 214)',palegoldenrod:'rgb(238, 232, 170)',palegreen:'rgb(152, 251, 152)',paleturquoise:'rgb(175, 238, 238)',palevioletred:'rgb(219, 112, 147)',papayawhip:'rgb(255, 239, 213)',peachpuff:'rgb(255, 218, 185)',peru:'rgb(205, 133, 63)',pink:'rgb(255, 192, 203)',plum:'rgb(221, 160, 221)',powderblue:'rgb(176, 224, 230)',purple:'rgb(128, 0, 128)',red:'rgb(255, 0, 0)',rosybrown:'rgb(188, 143, 143)',royalblue:'rgb( 65, 105, 225)',saddlebrown:'rgb(139, 69, 19)',salmon:'rgb(250, 128, 114)',sandybrown:'rgb(244, 164, 96)',seagreen:'rgb( 46, 139, 87)',seashell:'rgb(255, 245, 238)',sienna:'rgb(160, 82, 45)',silver:'rgb(192, 192, 192)',skyblue:'rgb(135, 206, 235)',slateblue:'rgb(106, 90, 205)',slategray:'rgb(112, 128, 144)',slategrey:'rgb(112, 128, 144)',snow:'rgb(255, 250, 250)',springgreen:'rgb( 0, 255, 127)',steelblue:'rgb( 70, 130, 180)',tan:'rgb(210, 180, 140)',teal:'rgb( 0, 128, 128)',thistle:'rgb(216, 191, 216)',tomato:'rgb(255, 99, 71)',turquoise:'rgb( 64, 224, 208)',violet:'rgb(238, 130, 238)',wheat:'rgb(245, 222, 179)',white:'rgb(255, 255, 255)',whitesmoke:'rgb(245, 245, 245)',yellow:'rgb(255, 255, 0)',yellowgreen:'rgb(154, 205, 50)'};$.jqplot.AxisLabelRenderer=function(options){$.jqplot.ElemContainer.call(this);this.axis;this.show=true;this.label='';this.fontFamily=null;this.fontSize=null;this.textColor=null;this._elem;this.escapeHTML=false;$.extend(true,this,options);};$.jqplot.AxisLabelRenderer.prototype=new $.jqplot.ElemContainer();$.jqplot.AxisLabelRenderer.prototype.constructor=$.jqplot.AxisLabelRenderer;$.jqplot.AxisLabelRenderer.prototype.init=function(options){$.extend(true,this,options);};$.jqplot.AxisLabelRenderer.prototype.draw=function(ctx,plot){if(this._elem){this._elem.emptyForce();this._elem=null;}
this._elem=$('<div style="position:absolute;" class="jqplot-'+this.axis+'-label"></div>');if(Number(this.label)){this._elem.css('white-space','nowrap');}
if(!this.escapeHTML){this._elem.html(this.label);}
else{this._elem.text(this.label);}
if(this.fontFamily){this._elem.css('font-family',this.fontFamily);}
if(this.fontSize){this._elem.css('font-size',this.fontSize);}
if(this.textColor){this._elem.css('color',this.textColor);}
return this._elem;};$.jqplot.AxisLabelRenderer.prototype.pack=function(){};$.jqplot.AxisTickRenderer=function(options){$.jqplot.ElemContainer.call(this);this.mark='outside';this.axis;this.showMark=true;this.showGridline=true;this.isMinorTick=false;this.size=4;this.markSize=6;this.show=true;this.showLabel=true;this.label=null;this.value=null;this._styles={};this.formatter=$.jqplot.DefaultTickFormatter;this.prefix='';this.suffix='';this.formatString='';this.fontFamily;this.fontSize;this.textColor;this.escapeHTML=false;this._elem;this._breakTick=false;$.extend(true,this,options);};$.jqplot.AxisTickRenderer.prototype.init=function(options){$.extend(true,this,options);};$.jqplot.AxisTickRenderer.prototype=new $.jqplot.ElemContainer();$.jqplot.AxisTickRenderer.prototype.constructor=$.jqplot.AxisTickRenderer;$.jqplot.AxisTickRenderer.prototype.setTick=function(value,axisName,isMinor){this.value=value;this.axis=axisName;if(isMinor){this.isMinorTick=true;}
return this;};$.jqplot.AxisTickRenderer.prototype.draw=function(){if(this.label===null){this.label=this.prefix+this.formatter(this.formatString,this.value)+this.suffix;}
var style={position:'absolute'};if(Number(this.label)){style['whitSpace']='nowrap';}
if(this._elem){this._elem.emptyForce();this._elem=null;}
this._elem=$(document.createElement('div'));this._elem.addClass("jqplot-"+this.axis+"-tick");if(!this.escapeHTML){this._elem.html(this.label);}
else{this._elem.text(this.label);}
this._elem.css(style);for(var s in this._styles){this._elem.css(s,this._styles[s]);}
if(this.fontFamily){this._elem.css('font-family',this.fontFamily);}
if(this.fontSize){this._elem.css('font-size',this.fontSize);}
if(this.textColor){this._elem.css('color',this.textColor);}
if(this._breakTick){this._elem.addClass('jqplot-breakTick');}
return this._elem;};$.jqplot.DefaultTickFormatter=function(format,val){if(typeof val=='number'){if(!format){format=$.jqplot.config.defaultTickFormatString;}
return $.jqplot.sprintf(format,val);}
else{return String(val);}};$.jqplot.PercentTickFormatter=function(format,val){if(typeof val=='number'){val=100*val;if(!format){format=$.jqplot.config.defaultTickFormatString;}
return $.jqplot.sprintf(format,val);}
else{return String(val);}};$.jqplot.AxisTickRenderer.prototype.pack=function(){};$.jqplot.CanvasGridRenderer=function(){this.shadowRenderer=new $.jqplot.ShadowRenderer();};$.jqplot.CanvasGridRenderer.prototype.init=function(options){this._ctx;$.extend(true,this,options);var sopts={lineJoin:'miter',lineCap:'round',fill:false,isarc:false,angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,depth:this.shadowDepth,lineWidth:this.shadowWidth,closePath:false,strokeStyle:this.shadowColor};this.renderer.shadowRenderer.init(sopts);};$.jqplot.CanvasGridRenderer.prototype.createElement=function(plot){var elem;if(this._elem){if($.jqplot.use_excanvas&&window.G_vmlCanvasManager.uninitElement!==undefined){elem=this._elem.get(0);window.G_vmlCanvasManager.uninitElement(elem);elem=null;}
this._elem.emptyForce();this._elem=null;}
elem=plot.canvasManager.getCanvas();var w=this._plotDimensions.width;var h=this._plotDimensions.height;elem.width=w;elem.height=h;this._elem=$(elem);this._elem.addClass('jqplot-grid-canvas');this._elem.css({position:'absolute',left:0,top:0});elem=plot.canvasManager.initCanvas(elem);this._top=this._offsets.top;this._bottom=h-this._offsets.bottom;this._left=this._offsets.left;this._right=w-this._offsets.right;this._width=this._right-this._left;this._height=this._bottom-this._top;elem=null;return this._elem;};$.jqplot.CanvasGridRenderer.prototype.draw=function(){this._ctx=this._elem.get(0).getContext("2d");var ctx=this._ctx;var axes=this._axes;ctx.save();ctx.clearRect(0,0,this._plotDimensions.width,this._plotDimensions.height);ctx.fillStyle=this.backgroundColor||this.background;ctx.fillRect(this._left,this._top,this._width,this._height);ctx.save();ctx.lineJoin='miter';ctx.lineCap='butt';ctx.lineWidth=this.gridLineWidth;ctx.strokeStyle=this.gridLineColor;var b,e,s,m;var ax=['xaxis','yaxis','x2axis','y2axis'];for(var i=4;i>0;i--){var name=ax[i-1];var axis=axes[name];var ticks=axis._ticks;var numticks=ticks.length;if(axis.show){if(axis.drawBaseline){var bopts={};if(axis.baselineWidth!==null){bopts.lineWidth=axis.baselineWidth;}
if(axis.baselineColor!==null){bopts.strokeStyle=axis.baselineColor;}
switch(name){case'xaxis':drawLine(this._left,this._bottom,this._right,this._bottom,bopts);break;case'yaxis':drawLine(this._left,this._bottom,this._left,this._top,bopts);break;case'x2axis':drawLine(this._left,this._bottom,this._right,this._bottom,bopts);break;case'y2axis':drawLine(this._right,this._bottom,this._right,this._top,bopts);break;}}
for(var j=numticks;j>0;j--){var t=ticks[j-1];if(t.show){var pos=Math.round(axis.u2p(t.value))+0.5;switch(name){case'xaxis':if(t.showGridline&&this.drawGridlines&&((!t.isMinorTick&&axis.drawMajorGridlines)||(t.isMinorTick&&axis.drawMinorGridlines))){drawLine(pos,this._top,pos,this._bottom);}
if(t.showMark&&t.mark&&((!t.isMinorTick&&axis.drawMajorTickMarks)||(t.isMinorTick&&axis.drawMinorTickMarks))){s=t.markSize;m=t.mark;var pos=Math.round(axis.u2p(t.value))+0.5;switch(m){case'outside':b=this._bottom;e=this._bottom+s;break;case'inside':b=this._bottom-s;e=this._bottom;break;case'cross':b=this._bottom-s;e=this._bottom+s;break;default:b=this._bottom;e=this._bottom+s;break;}
if(this.shadow){this.renderer.shadowRenderer.draw(ctx,[[pos,b],[pos,e]],{lineCap:'butt',lineWidth:this.gridLineWidth,offset:this.gridLineWidth*0.75,depth:2,fill:false,closePath:false});}
drawLine(pos,b,pos,e);}
break;case'yaxis':if(t.showGridline&&this.drawGridlines&&((!t.isMinorTick&&axis.drawMajorGridlines)||(t.isMinorTick&&axis.drawMinorGridlines))){drawLine(this._right,pos,this._left,pos);}
if(t.showMark&&t.mark&&((!t.isMinorTick&&axis.drawMajorTickMarks)||(t.isMinorTick&&axis.drawMinorTickMarks))){s=t.markSize;m=t.mark;var pos=Math.round(axis.u2p(t.value))+0.5;switch(m){case'outside':b=this._left-s;e=this._left;break;case'inside':b=this._left;e=this._left+s;break;case'cross':b=this._left-s;e=this._left+s;break;default:b=this._left-s;e=this._left;break;}
if(this.shadow){this.renderer.shadowRenderer.draw(ctx,[[b,pos],[e,pos]],{lineCap:'butt',lineWidth:this.gridLineWidth*1.5,offset:this.gridLineWidth*0.75,fill:false,closePath:false});}
drawLine(b,pos,e,pos,{strokeStyle:axis.borderColor});}
break;case'x2axis':if(t.showGridline&&this.drawGridlines&&((!t.isMinorTick&&axis.drawMajorGridlines)||(t.isMinorTick&&axis.drawMinorGridlines))){drawLine(pos,this._bottom,pos,this._top);}
if(t.showMark&&t.mark&&((!t.isMinorTick&&axis.drawMajorTickMarks)||(t.isMinorTick&&axis.drawMinorTickMarks))){s=t.markSize;m=t.mark;var pos=Math.round(axis.u2p(t.value))+0.5;switch(m){case'outside':b=this._top-s;e=this._top;break;case'inside':b=this._top;e=this._top+s;break;case'cross':b=this._top-s;e=this._top+s;break;default:b=this._top-s;e=this._top;break;}
if(this.shadow){this.renderer.shadowRenderer.draw(ctx,[[pos,b],[pos,e]],{lineCap:'butt',lineWidth:this.gridLineWidth,offset:this.gridLineWidth*0.75,depth:2,fill:false,closePath:false});}
drawLine(pos,b,pos,e);}
break;case'y2axis':if(t.showGridline&&this.drawGridlines&&((!t.isMinorTick&&axis.drawMajorGridlines)||(t.isMinorTick&&axis.drawMinorGridlines))){drawLine(this._left,pos,this._right,pos);}
if(t.showMark&&t.mark&&((!t.isMinorTick&&axis.drawMajorTickMarks)||(t.isMinorTick&&axis.drawMinorTickMarks))){s=t.markSize;m=t.mark;var pos=Math.round(axis.u2p(t.value))+0.5;switch(m){case'outside':b=this._right;e=this._right+s;break;case'inside':b=this._right-s;e=this._right;break;case'cross':b=this._right-s;e=this._right+s;break;default:b=this._right;e=this._right+s;break;}
if(this.shadow){this.renderer.shadowRenderer.draw(ctx,[[b,pos],[e,pos]],{lineCap:'butt',lineWidth:this.gridLineWidth*1.5,offset:this.gridLineWidth*0.75,fill:false,closePath:false});}
drawLine(b,pos,e,pos,{strokeStyle:axis.borderColor});}
break;default:break;}}}
t=null;}
axis=null;ticks=null;}
ax=['y3axis','y4axis','y5axis','y6axis','y7axis','y8axis','y9axis','yMidAxis'];for(var i=7;i>0;i--){var axis=axes[ax[i-1]];var ticks=axis._ticks;if(axis.show){var tn=ticks[axis.numberTicks-1];var t0=ticks[0];var left=axis.getLeft();var points=[[left,tn.getTop()+tn.getHeight()/2],[left,t0.getTop()+t0.getHeight()/2+1.0]];if(this.shadow){this.renderer.shadowRenderer.draw(ctx,points,{lineCap:'butt',fill:false,closePath:false});}
drawLine(points[0][0],points[0][1],points[1][0],points[1][1],{lineCap:'butt',strokeStyle:axis.borderColor,lineWidth:axis.borderWidth});for(var j=ticks.length;j>0;j--){var t=ticks[j-1];s=t.markSize;m=t.mark;var pos=Math.round(axis.u2p(t.value))+0.5;if(t.showMark&&t.mark){switch(m){case'outside':b=left;e=left+s;break;case'inside':b=left-s;e=left;break;case'cross':b=left-s;e=left+s;break;default:b=left;e=left+s;break;}
points=[[b,pos],[e,pos]];if(this.shadow){this.renderer.shadowRenderer.draw(ctx,points,{lineCap:'butt',lineWidth:this.gridLineWidth*1.5,offset:this.gridLineWidth*0.75,fill:false,closePath:false});}
drawLine(b,pos,e,pos,{strokeStyle:axis.borderColor});}
t=null;}
t0=null;}
axis=null;ticks=null;}
ctx.restore();function drawLine(bx,by,ex,ey,opts){ctx.save();opts=opts||{};if(opts.lineWidth==null||opts.lineWidth!=0){$.extend(true,ctx,opts);ctx.beginPath();ctx.moveTo(bx,by);ctx.lineTo(ex,ey);ctx.stroke();ctx.restore();}}
if(this.shadow){var points=[[this._left,this._bottom],[this._right,this._bottom],[this._right,this._top]];this.renderer.shadowRenderer.draw(ctx,points);}
if(this.borderWidth!=0&&this.drawBorder){drawLine(this._left,this._top,this._right,this._top,{lineCap:'round',strokeStyle:axes.x2axis.borderColor,lineWidth:axes.x2axis.borderWidth});drawLine(this._right,this._top,this._right,this._bottom,{lineCap:'round',strokeStyle:axes.y2axis.borderColor,lineWidth:axes.y2axis.borderWidth});drawLine(this._right,this._bottom,this._left,this._bottom,{lineCap:'round',strokeStyle:axes.xaxis.borderColor,lineWidth:axes.xaxis.borderWidth});drawLine(this._left,this._bottom,this._left,this._top,{lineCap:'round',strokeStyle:axes.yaxis.borderColor,lineWidth:axes.yaxis.borderWidth});}
ctx.restore();ctx=null;axes=null;};$.jqplot.DivTitleRenderer=function(){};$.jqplot.DivTitleRenderer.prototype.init=function(options){$.extend(true,this,options);};$.jqplot.DivTitleRenderer.prototype.draw=function(){if(this._elem){this._elem.emptyForce();this._elem=null;}
var r=this.renderer;var elem=document.createElement('div');this._elem=$(elem);this._elem.addClass('jqplot-title');if(!this.text){this.show=false;this._elem.height(0);this._elem.width(0);}
else if(this.text){var color;if(this.color){color=this.color;}
else if(this.textColor){color=this.textColor;}
var styles={position:'absolute',top:'0px',left:'0px'};if(this._plotWidth){styles['width']=this._plotWidth+'px';}
if(this.fontSize){styles['fontSize']=this.fontSize;}
if(typeof this.textAlign==='string'){styles['textAlign']=this.textAlign;}
else{styles['textAlign']='center';}
if(color){styles['color']=color;}
if(this.paddingBottom){styles['paddingBottom']=this.paddingBottom;}
if(this.fontFamily){styles['fontFamily']=this.fontFamily;}
this._elem.css(styles);if(this.escapeHtml){this._elem.text(this.text);}
else{this._elem.html(this.text);}}
elem=null;return this._elem;};$.jqplot.DivTitleRenderer.prototype.pack=function(){};var dotlen=0.1;$.jqplot.LinePattern=function(ctx,pattern){var defaultLinePatterns={dotted:[dotlen,$.jqplot.config.dotGapLength],dashed:[$.jqplot.config.dashLength,$.jqplot.config.gapLength],solid:null};if(typeof pattern==='string'){if(pattern[0]==='.'||pattern[0]==='-'){var s=pattern;pattern=[];for(var i=0,imax=s.length;i<imax;i++){if(s[i]==='.'){pattern.push(dotlen);}
else if(s[i]==='-'){pattern.push($.jqplot.config.dashLength);}
else{continue;}
pattern.push($.jqplot.config.gapLength);}}
else{pattern=defaultLinePatterns[pattern];}}
if(!(pattern&&pattern.length)){return ctx;}
var patternIndex=0;var patternDistance=pattern[0];var px=0;var py=0;var pathx0=0;var pathy0=0;var moveTo=function(x,y){ctx.moveTo(x,y);px=x;py=y;pathx0=x;pathy0=y;};var lineTo=function(x,y){var scale=ctx.lineWidth;var dx=x-px;var dy=y-py;var dist=Math.sqrt(dx*dx+dy*dy);if((dist>0)&&(scale>0)){dx/=dist;dy/=dist;while(true){var dp=scale*patternDistance;if(dp<dist){px+=dp*dx;py+=dp*dy;if((patternIndex&1)==0){ctx.lineTo(px,py);}
else{ctx.moveTo(px,py);}
dist-=dp;patternIndex++;if(patternIndex>=pattern.length){patternIndex=0;}
patternDistance=pattern[patternIndex];}
else{px=x;py=y;if((patternIndex&1)==0){ctx.lineTo(px,py);}
else{ctx.moveTo(px,py);}
patternDistance-=dist/scale;break;}}}};var beginPath=function(){ctx.beginPath();};var closePath=function(){lineTo(pathx0,pathy0);};return{moveTo:moveTo,lineTo:lineTo,beginPath:beginPath,closePath:closePath};};$.jqplot.LineRenderer=function(){this.shapeRenderer=new $.jqplot.ShapeRenderer();this.shadowRenderer=new $.jqplot.ShadowRenderer();};$.jqplot.LineRenderer.prototype.init=function(options,plot){options=options||{};this._type='line';this.renderer.animation={show:false,direction:'left',speed:2500,_supported:true};this.renderer.smooth=false;this.renderer.tension=null;this.renderer.constrainSmoothing=true;this.renderer._smoothedData=[];this.renderer._smoothedPlotData=[];this.renderer._hiBandGridData=[];this.renderer._lowBandGridData=[];this.renderer._hiBandSmoothedData=[];this.renderer._lowBandSmoothedData=[];this.renderer.bandData=[];this.renderer.bands={show:false,hiData:[],lowData:[],color:this.color,showLines:false,fill:true,fillColor:null,_min:null,_max:null,interval:'3%'};var lopts={highlightMouseOver:options.highlightMouseOver,highlightMouseDown:options.highlightMouseDown,highlightColor:options.highlightColor};delete(options.highlightMouseOver);delete(options.highlightMouseDown);delete(options.highlightColor);$.extend(true,this.renderer,options);this.renderer.options=options;if(this.renderer.bandData.length>1&&(!options.bands||options.bands.show==null)){this.renderer.bands.show=true;}
else if(options.bands&&options.bands.show==null&&options.bands.interval!=null){this.renderer.bands.show=true;}
if(this.fill){this.renderer.bands.show=false;}
if(this.renderer.bands.show){this.renderer.initBands.call(this,this.renderer.options,plot);}
if(this._stack){this.renderer.smooth=false;}
var opts={lineJoin:this.lineJoin,lineCap:this.lineCap,fill:this.fill,isarc:false,strokeStyle:this.color,fillStyle:this.fillColor,lineWidth:this.lineWidth,linePattern:this.linePattern,closePath:this.fill};this.renderer.shapeRenderer.init(opts);var shadow_offset=options.shadowOffset;if(shadow_offset==null){if(this.lineWidth>2.5){shadow_offset=1.25*(1+(Math.atan((this.lineWidth/2.5))/0.785398163-1)*0.6);}
else{shadow_offset=1.25*Math.atan((this.lineWidth/2.5))/0.785398163;}}
var sopts={lineJoin:this.lineJoin,lineCap:this.lineCap,fill:this.fill,isarc:false,angle:this.shadowAngle,offset:shadow_offset,alpha:this.shadowAlpha,depth:this.shadowDepth,lineWidth:this.lineWidth,linePattern:this.linePattern,closePath:this.fill};this.renderer.shadowRenderer.init(sopts);this._areaPoints=[];this._boundingBox=[[],[]];if(!this.isTrendline&&this.fill||this.renderer.bands.show){this.highlightMouseOver=true;this.highlightMouseDown=false;this.highlightColor=null;if(lopts.highlightMouseDown&&lopts.highlightMouseOver==null){lopts.highlightMouseOver=false;}
$.extend(true,this,{highlightMouseOver:lopts.highlightMouseOver,highlightMouseDown:lopts.highlightMouseDown,highlightColor:lopts.highlightColor});if(!this.highlightColor){var fc=(this.renderer.bands.show)?this.renderer.bands.fillColor:this.fillColor;this.highlightColor=$.jqplot.computeHighlightColors(fc);}
if(this.highlighter){this.highlighter.show=false;}}
if(!this.isTrendline&&plot){plot.plugins.lineRenderer={};plot.postInitHooks.addOnce(postInit);plot.postDrawHooks.addOnce(postPlotDraw);plot.eventListenerHooks.addOnce('jqplotMouseMove',handleMove);plot.eventListenerHooks.addOnce('jqplotMouseDown',handleMouseDown);plot.eventListenerHooks.addOnce('jqplotMouseUp',handleMouseUp);plot.eventListenerHooks.addOnce('jqplotClick',handleClick);plot.eventListenerHooks.addOnce('jqplotRightClick',handleRightClick);}};$.jqplot.LineRenderer.prototype.initBands=function(options,plot){var bd=options.bandData||[];var bands=this.renderer.bands;bands.hiData=[];bands.lowData=[];var data=this.data;bands._max=null;bands._min=null;if(bd.length==2){if($.isArray(bd[0][0])){var p;var bdminidx=0,bdmaxidx=0;for(var i=0,l=bd[0].length;i<l;i++){p=bd[0][i];if((p[1]!=null&&p[1]>bands._max)||bands._max==null){bands._max=p[1];}
if((p[1]!=null&&p[1]<bands._min)||bands._min==null){bands._min=p[1];}}
for(var i=0,l=bd[1].length;i<l;i++){p=bd[1][i];if((p[1]!=null&&p[1]>bands._max)||bands._max==null){bands._max=p[1];bdmaxidx=1;}
if((p[1]!=null&&p[1]<bands._min)||bands._min==null){bands._min=p[1];bdminidx=1;}}
if(bdmaxidx===bdminidx){bands.show=false;}
bands.hiData=bd[bdmaxidx];bands.lowData=bd[bdminidx];}
else if(bd[0].length===data.length&&bd[1].length===data.length){var hi=(bd[0][0]>bd[1][0])?0:1;var low=(hi)?0:1;for(var i=0,l=data.length;i<l;i++){bands.hiData.push([data[i][0],bd[hi][i]]);bands.lowData.push([data[i][0],bd[low][i]]);}}
else{bands.show=false;}}
else if(bd.length>2&&!$.isArray(bd[0][0])){var hi=(bd[0][0]>bd[0][1])?0:1;var low=(hi)?0:1;for(var i=0,l=bd.length;i<l;i++){bands.hiData.push([data[i][0],bd[i][hi]]);bands.lowData.push([data[i][0],bd[i][low]]);}}
else{var intrv=bands.interval;var a=null;var b=null;var afunc=null;var bfunc=null;if($.isArray(intrv)){a=intrv[0];b=intrv[1];}
else{a=intrv;}
if(isNaN(a)){if(a.charAt(a.length-1)==='%'){afunc='multiply';a=parseFloat(a)/100+1;}}
else{a=parseFloat(a);afunc='add';}
if(b!==null&&isNaN(b)){if(b.charAt(b.length-1)==='%'){bfunc='multiply';b=parseFloat(b)/100+1;}}
else if(b!==null){b=parseFloat(b);bfunc='add';}
if(a!==null){if(b===null){b=-a;bfunc=afunc;if(bfunc==='multiply'){b+=2;}}
if(a<b){var temp=a;a=b;b=temp;temp=afunc;afunc=bfunc;bfunc=temp;}
for(var i=0,l=data.length;i<l;i++){switch(afunc){case'add':bands.hiData.push([data[i][0],data[i][1]+a]);break;case'multiply':bands.hiData.push([data[i][0],data[i][1]*a]);break;}
switch(bfunc){case'add':bands.lowData.push([data[i][0],data[i][1]+b]);break;case'multiply':bands.lowData.push([data[i][0],data[i][1]*b]);break;}}}
else{bands.show=false;}}
var hd=bands.hiData;var ld=bands.lowData;for(var i=0,l=hd.length;i<l;i++){if((hd[i][1]!=null&&hd[i][1]>bands._max)||bands._max==null){bands._max=hd[i][1];}}
for(var i=0,l=ld.length;i<l;i++){if((ld[i][1]!=null&&ld[i][1]<bands._min)||bands._min==null){bands._min=ld[i][1];}}
if(bands.fillColor===null){var c=$.jqplot.getColorComponents(bands.color);c[3]=c[3]*0.5;bands.fillColor='rgba('+c[0]+', '+c[1]+', '+c[2]+', '+c[3]+')';}};function getSteps(d,f){return(3.4182054+f)*Math.pow(d,-0.3534992);}
function computeSteps(d1,d2){var s=Math.sqrt(Math.pow((d2[0]-d1[0]),2)+Math.pow((d2[1]-d1[1]),2));return 5.7648*Math.log(s)+7.4456;}
function tanh(x){var a=(Math.exp(2*x)-1)/(Math.exp(2*x)+1);return a;}
function computeConstrainedSmoothedData(gd){var smooth=this.renderer.smooth;var dim=this.canvas.getWidth();var xp=this._xaxis.series_p2u;var yp=this._yaxis.series_p2u;var steps=null;var _steps=null;var dist=gd.length/dim;var _smoothedData=[];var _smoothedPlotData=[];if(!isNaN(parseFloat(smooth))){steps=parseFloat(smooth);}
else{steps=getSteps(dist,0.5);}
var yy=[];var xx=[];for(var i=0,l=gd.length;i<l;i++){yy.push(gd[i][1]);xx.push(gd[i][0]);}
function dxx(x1,x0){if(x1-x0==0){return Math.pow(10,10);}
else{return x1-x0;}}
var A,B,C,D;var nmax=gd.length-1;for(var num=1,gdl=gd.length;num<gdl;num++){var gxx=[];var ggxx=[];for(var j=0;j<2;j++){var i=num-1+j;if(i==0||i==nmax){gxx[j]=Math.pow(10,10);}
else if(yy[i+1]-yy[i]==0||yy[i]-yy[i-1]==0){gxx[j]=0;}
else if(((xx[i+1]-xx[i])/(yy[i+1]-yy[i])+(xx[i]-xx[i-1])/(yy[i]-yy[i-1]))==0){gxx[j]=0;}
else if((yy[i+1]-yy[i])*(yy[i]-yy[i-1])<0){gxx[j]=0;}
else{gxx[j]=2/(dxx(xx[i+1],xx[i])/(yy[i+1]-yy[i])+dxx(xx[i],xx[i-1])/(yy[i]-yy[i-1]));}}
if(num==1){gxx[0]=3/2*(yy[1]-yy[0])/dxx(xx[1],xx[0])-gxx[1]/2;}
else if(num==nmax){gxx[1]=3/2*(yy[nmax]-yy[nmax-1])/dxx(xx[nmax],xx[nmax-1])-gxx[0]/2;}
ggxx[0]=-2*(gxx[1]+2*gxx[0])/dxx(xx[num],xx[num-1])+6*(yy[num]-yy[num-1])/Math.pow(dxx(xx[num],xx[num-1]),2);ggxx[1]=2*(2*gxx[1]+gxx[0])/dxx(xx[num],xx[num-1])-6*(yy[num]-yy[num-1])/Math.pow(dxx(xx[num],xx[num-1]),2);D=1/6*(ggxx[1]-ggxx[0])/dxx(xx[num],xx[num-1]);C=1/2*(xx[num]*ggxx[0]-xx[num-1]*ggxx[1])/dxx(xx[num],xx[num-1]);B=(yy[num]-yy[num-1]-C*(Math.pow(xx[num],2)-Math.pow(xx[num-1],2))-D*(Math.pow(xx[num],3)-Math.pow(xx[num-1],3)))/dxx(xx[num],xx[num-1]);A=yy[num-1]-B*xx[num-1]-C*Math.pow(xx[num-1],2)-D*Math.pow(xx[num-1],3);var increment=(xx[num]-xx[num-1])/steps;var temp,tempx;for(var j=0,l=steps;j<l;j++){temp=[];tempx=xx[num-1]+j*increment;temp.push(tempx);temp.push(A+B*tempx+C*Math.pow(tempx,2)+D*Math.pow(tempx,3));_smoothedData.push(temp);_smoothedPlotData.push([xp(temp[0]),yp(temp[1])]);}}
_smoothedData.push(gd[i]);_smoothedPlotData.push([xp(gd[i][0]),yp(gd[i][1])]);return[_smoothedData,_smoothedPlotData];}
function computeHermiteSmoothedData(gd){var smooth=this.renderer.smooth;var tension=this.renderer.tension;var dim=this.canvas.getWidth();var xp=this._xaxis.series_p2u;var yp=this._yaxis.series_p2u;var steps=null;var _steps=null;var a=null;var a1=null;var a2=null;var slope=null;var slope2=null;var temp=null;var t,s,h1,h2,h3,h4;var TiX,TiY,Ti1X,Ti1Y;var pX,pY,p;var sd=[];var spd=[];var dist=gd.length/dim;var min,max,stretch,scale,shift;var _smoothedData=[];var _smoothedPlotData=[];if(!isNaN(parseFloat(smooth))){steps=parseFloat(smooth);}
else{steps=getSteps(dist,0.5);}
if(!isNaN(parseFloat(tension))){tension=parseFloat(tension);}
for(var i=0,l=gd.length-1;i<l;i++){if(tension===null){slope=Math.abs((gd[i+1][1]-gd[i][1])/(gd[i+1][0]-gd[i][0]));min=0.3;max=0.6;stretch=(max-min)/2.0;scale=2.5;shift=-1.4;temp=slope/scale+shift;a1=stretch*tanh(temp)-stretch*tanh(shift)+min;if(i>0){slope2=Math.abs((gd[i][1]-gd[i-1][1])/(gd[i][0]-gd[i-1][0]));}
temp=slope2/scale+shift;a2=stretch*tanh(temp)-stretch*tanh(shift)+min;a=(a1+a2)/2.0;}
else{a=tension;}
for(t=0;t<steps;t++){s=t/steps;h1=(1+2*s)*Math.pow((1-s),2);h2=s*Math.pow((1-s),2);h3=Math.pow(s,2)*(3-2*s);h4=Math.pow(s,2)*(s-1);if(gd[i-1]){TiX=a*(gd[i+1][0]-gd[i-1][0]);TiY=a*(gd[i+1][1]-gd[i-1][1]);}else{TiX=a*(gd[i+1][0]-gd[i][0]);TiY=a*(gd[i+1][1]-gd[i][1]);}
if(gd[i+2]){Ti1X=a*(gd[i+2][0]-gd[i][0]);Ti1Y=a*(gd[i+2][1]-gd[i][1]);}else{Ti1X=a*(gd[i+1][0]-gd[i][0]);Ti1Y=a*(gd[i+1][1]-gd[i][1]);}
pX=h1*gd[i][0]+h3*gd[i+1][0]+h2*TiX+h4*Ti1X;pY=h1*gd[i][1]+h3*gd[i+1][1]+h2*TiY+h4*Ti1Y;p=[pX,pY];_smoothedData.push(p);_smoothedPlotData.push([xp(pX),yp(pY)]);}}
_smoothedData.push(gd[l]);_smoothedPlotData.push([xp(gd[l][0]),yp(gd[l][1])]);return[_smoothedData,_smoothedPlotData];}
$.jqplot.LineRenderer.prototype.setGridData=function(plot){var xp=this._xaxis.series_u2p;var yp=this._yaxis.series_u2p;var data=this._plotData;var pdata=this._prevPlotData;this.gridData=[];this._prevGridData=[];this.renderer._smoothedData=[];this.renderer._smoothedPlotData=[];this.renderer._hiBandGridData=[];this.renderer._lowBandGridData=[];this.renderer._hiBandSmoothedData=[];this.renderer._lowBandSmoothedData=[];var bands=this.renderer.bands;var hasNull=false;for(var i=0,l=data.length;i<l;i++){if(data[i][0]!=null&&data[i][1]!=null){this.gridData.push([xp.call(this._xaxis,data[i][0]),yp.call(this._yaxis,data[i][1])]);}
else if(data[i][0]==null){hasNull=true;this.gridData.push([null,yp.call(this._yaxis,data[i][1])]);}
else if(data[i][1]==null){hasNull=true;this.gridData.push([xp.call(this._xaxis,data[i][0]),null]);}
if(pdata[i]!=null&&pdata[i][0]!=null&&pdata[i][1]!=null){this._prevGridData.push([xp.call(this._xaxis,pdata[i][0]),yp.call(this._yaxis,pdata[i][1])]);}
else if(pdata[i]!=null&&pdata[i][0]==null){this._prevGridData.push([null,yp.call(this._yaxis,pdata[i][1])]);}
else if(pdata[i]!=null&&pdata[i][0]!=null&&pdata[i][1]==null){this._prevGridData.push([xp.call(this._xaxis,pdata[i][0]),null]);}}
if(hasNull){this.renderer.smooth=false;if(this._type==='line'){bands.show=false;}}
if(this._type==='line'&&bands.show){for(var i=0,l=bands.hiData.length;i<l;i++){this.renderer._hiBandGridData.push([xp.call(this._xaxis,bands.hiData[i][0]),yp.call(this._yaxis,bands.hiData[i][1])]);}
for(var i=0,l=bands.lowData.length;i<l;i++){this.renderer._lowBandGridData.push([xp.call(this._xaxis,bands.lowData[i][0]),yp.call(this._yaxis,bands.lowData[i][1])]);}}
if(this._type==='line'&&this.renderer.smooth&&this.gridData.length>2){var ret;if(this.renderer.constrainSmoothing){ret=computeConstrainedSmoothedData.call(this,this.gridData);this.renderer._smoothedData=ret[0];this.renderer._smoothedPlotData=ret[1];if(bands.show){ret=computeConstrainedSmoothedData.call(this,this.renderer._hiBandGridData);this.renderer._hiBandSmoothedData=ret[0];ret=computeConstrainedSmoothedData.call(this,this.renderer._lowBandGridData);this.renderer._lowBandSmoothedData=ret[0];}
ret=null;}
else{ret=computeHermiteSmoothedData.call(this,this.gridData);this.renderer._smoothedData=ret[0];this.renderer._smoothedPlotData=ret[1];if(bands.show){ret=computeHermiteSmoothedData.call(this,this.renderer._hiBandGridData);this.renderer._hiBandSmoothedData=ret[0];ret=computeHermiteSmoothedData.call(this,this.renderer._lowBandGridData);this.renderer._lowBandSmoothedData=ret[0];}
ret=null;}}};$.jqplot.LineRenderer.prototype.makeGridData=function(data,plot){var xp=this._xaxis.series_u2p;var yp=this._yaxis.series_u2p;var gd=[];var pgd=[];this.renderer._smoothedData=[];this.renderer._smoothedPlotData=[];this.renderer._hiBandGridData=[];this.renderer._lowBandGridData=[];this.renderer._hiBandSmoothedData=[];this.renderer._lowBandSmoothedData=[];var bands=this.renderer.bands;var hasNull=false;for(var i=0;i<data.length;i++){if(data[i][0]!=null&&data[i][1]!=null){gd.push([xp.call(this._xaxis,data[i][0]),yp.call(this._yaxis,data[i][1])]);}
else if(data[i][0]==null){hasNull=true;gd.push([null,yp.call(this._yaxis,data[i][1])]);}
else if(data[i][1]==null){hasNull=true;gd.push([xp.call(this._xaxis,data[i][0]),null]);}}
if(hasNull){this.renderer.smooth=false;if(this._type==='line'){bands.show=false;}}
if(this._type==='line'&&bands.show){for(var i=0,l=bands.hiData.length;i<l;i++){this.renderer._hiBandGridData.push([xp.call(this._xaxis,bands.hiData[i][0]),yp.call(this._yaxis,bands.hiData[i][1])]);}
for(var i=0,l=bands.lowData.length;i<l;i++){this.renderer._lowBandGridData.push([xp.call(this._xaxis,bands.lowData[i][0]),yp.call(this._yaxis,bands.lowData[i][1])]);}}
if(this._type==='line'&&this.renderer.smooth&&gd.length>2){var ret;if(this.renderer.constrainSmoothing){ret=computeConstrainedSmoothedData.call(this,gd);this.renderer._smoothedData=ret[0];this.renderer._smoothedPlotData=ret[1];if(bands.show){ret=computeConstrainedSmoothedData.call(this,this.renderer._hiBandGridData);this.renderer._hiBandSmoothedData=ret[0];ret=computeConstrainedSmoothedData.call(this,this.renderer._lowBandGridData);this.renderer._lowBandSmoothedData=ret[0];}
ret=null;}
else{ret=computeHermiteSmoothedData.call(this,gd);this.renderer._smoothedData=ret[0];this.renderer._smoothedPlotData=ret[1];if(bands.show){ret=computeHermiteSmoothedData.call(this,this.renderer._hiBandGridData);this.renderer._hiBandSmoothedData=ret[0];ret=computeHermiteSmoothedData.call(this,this.renderer._lowBandGridData);this.renderer._lowBandSmoothedData=ret[0];}
ret=null;}}
return gd;};$.jqplot.LineRenderer.prototype.draw=function(ctx,gd,options,plot){var i;var opts=$.extend(true,{},options);var shadow=(opts.shadow!=undefined)?opts.shadow:this.shadow;var showLine=(opts.showLine!=undefined)?opts.showLine:this.showLine;var fill=(opts.fill!=undefined)?opts.fill:this.fill;var fillAndStroke=(opts.fillAndStroke!=undefined)?opts.fillAndStroke:this.fillAndStroke;var xmin,ymin,xmax,ymax;ctx.save();if(gd.length){if(showLine){if(fill){if(this.fillToZero){var negativeColor=this.negativeColor;if(!this.useNegativeColors){negativeColor=opts.fillStyle;}
var isnegative=false;var posfs=opts.fillStyle;if(fillAndStroke){var fasgd=gd.slice(0);}
if(this.index==0||!this._stack){var tempgd=[];var pd=(this.renderer.smooth)?this.renderer._smoothedPlotData:this._plotData;this._areaPoints=[];var pyzero=this._yaxis.series_u2p(this.fillToValue);var pxzero=this._xaxis.series_u2p(this.fillToValue);opts.closePath=true;if(this.fillAxis=='y'){tempgd.push([gd[0][0],pyzero]);this._areaPoints.push([gd[0][0],pyzero]);for(var i=0;i<gd.length-1;i++){tempgd.push(gd[i]);this._areaPoints.push(gd[i]);if(pd[i][1]*pd[i+1][1]<0){if(pd[i][1]<0){isnegative=true;opts.fillStyle=negativeColor;}
else{isnegative=false;opts.fillStyle=posfs;}
var xintercept=gd[i][0]+(gd[i+1][0]-gd[i][0])*(pyzero-gd[i][1])/(gd[i+1][1]-gd[i][1]);tempgd.push([xintercept,pyzero]);this._areaPoints.push([xintercept,pyzero]);if(shadow){this.renderer.shadowRenderer.draw(ctx,tempgd,opts);}
this.renderer.shapeRenderer.draw(ctx,tempgd,opts);tempgd=[[xintercept,pyzero]];}}
if(pd[gd.length-1][1]<0){isnegative=true;opts.fillStyle=negativeColor;}
else{isnegative=false;opts.fillStyle=posfs;}
tempgd.push(gd[gd.length-1]);this._areaPoints.push(gd[gd.length-1]);tempgd.push([gd[gd.length-1][0],pyzero]);this._areaPoints.push([gd[gd.length-1][0],pyzero]);}
if(shadow){this.renderer.shadowRenderer.draw(ctx,tempgd,opts);}
this.renderer.shapeRenderer.draw(ctx,tempgd,opts);}
else{var prev=this._prevGridData;for(var i=prev.length;i>0;i--){gd.push(prev[i-1]);}
if(shadow){this.renderer.shadowRenderer.draw(ctx,gd,opts);}
this._areaPoints=gd;this.renderer.shapeRenderer.draw(ctx,gd,opts);}}
else{if(fillAndStroke){var fasgd=gd.slice(0);}
if(this.index==0||!this._stack){var gridymin=ctx.canvas.height;gd.unshift([gd[0][0],gridymin]);var len=gd.length;gd.push([gd[len-1][0],gridymin]);}
else{var prev=this._prevGridData;for(var i=prev.length;i>0;i--){gd.push(prev[i-1]);}}
this._areaPoints=gd;if(shadow){this.renderer.shadowRenderer.draw(ctx,gd,opts);}
this.renderer.shapeRenderer.draw(ctx,gd,opts);}
if(fillAndStroke){var fasopts=$.extend(true,{},opts,{fill:false,closePath:false});this.renderer.shapeRenderer.draw(ctx,fasgd,fasopts);if(this.markerRenderer.show){if(this.renderer.smooth){fasgd=this.gridData;}
for(i=0;i<fasgd.length;i++){this.markerRenderer.draw(fasgd[i][0],fasgd[i][1],ctx,opts.markerOptions);}}}}
else{if(this.renderer.bands.show){var bdat;var bopts=$.extend(true,{},opts);if(this.renderer.bands.showLines){bdat=(this.renderer.smooth)?this.renderer._hiBandSmoothedData:this.renderer._hiBandGridData;this.renderer.shapeRenderer.draw(ctx,bdat,opts);bdat=(this.renderer.smooth)?this.renderer._lowBandSmoothedData:this.renderer._lowBandGridData;this.renderer.shapeRenderer.draw(ctx,bdat,bopts);}
if(this.renderer.bands.fill){if(this.renderer.smooth){bdat=this.renderer._hiBandSmoothedData.concat(this.renderer._lowBandSmoothedData.reverse());}
else{bdat=this.renderer._hiBandGridData.concat(this.renderer._lowBandGridData.reverse());}
this._areaPoints=bdat;bopts.closePath=true;bopts.fill=true;bopts.fillStyle=this.renderer.bands.fillColor;this.renderer.shapeRenderer.draw(ctx,bdat,bopts);}}
if(shadow){this.renderer.shadowRenderer.draw(ctx,gd,opts);}
this.renderer.shapeRenderer.draw(ctx,gd,opts);}}
var xmin=xmax=ymin=ymax=null;for(i=0;i<this._areaPoints.length;i++){var p=this._areaPoints[i];if(xmin>p[0]||xmin==null){xmin=p[0];}
if(ymax<p[1]||ymax==null){ymax=p[1];}
if(xmax<p[0]||xmax==null){xmax=p[0];}
if(ymin>p[1]||ymin==null){ymin=p[1];}}
if(this.type==='line'&&this.renderer.bands.show){ymax=this._yaxis.series_u2p(this.renderer.bands._min);ymin=this._yaxis.series_u2p(this.renderer.bands._max);}
this._boundingBox=[[xmin,ymax],[xmax,ymin]];if(this.markerRenderer.show&&!fill){if(this.renderer.smooth){gd=this.gridData;}
for(i=0;i<gd.length;i++){if(gd[i][0]!=null&&gd[i][1]!=null){this.markerRenderer.draw(gd[i][0],gd[i][1],ctx,opts.markerOptions);}}}}
ctx.restore();};$.jqplot.LineRenderer.prototype.drawShadow=function(ctx,gd,options){};function postInit(target,data,options){for(var i=0;i<this.series.length;i++){if(this.series[i].renderer.constructor==$.jqplot.LineRenderer){if(this.series[i].highlightMouseOver){this.series[i].highlightMouseDown=false;}}}}
function postPlotDraw(){if(this.plugins.lineRenderer&&this.plugins.lineRenderer.highlightCanvas){this.plugins.lineRenderer.highlightCanvas.resetCanvas();this.plugins.lineRenderer.highlightCanvas=null;}
this.plugins.lineRenderer.highlightedSeriesIndex=null;this.plugins.lineRenderer.highlightCanvas=new $.jqplot.GenericCanvas();this.eventCanvas._elem.before(this.plugins.lineRenderer.highlightCanvas.createElement(this._gridPadding,'jqplot-lineRenderer-highlight-canvas',this._plotDimensions,this));this.plugins.lineRenderer.highlightCanvas.setContext();this.eventCanvas._elem.bind('mouseleave',{plot:this},function(ev){unhighlight(ev.data.plot);});}
function highlight(plot,sidx,pidx,points){var s=plot.series[sidx];var canvas=plot.plugins.lineRenderer.highlightCanvas;canvas._ctx.clearRect(0,0,canvas._ctx.canvas.width,canvas._ctx.canvas.height);s._highlightedPoint=pidx;plot.plugins.lineRenderer.highlightedSeriesIndex=sidx;var opts={fillStyle:s.highlightColor};if(s.type==='line'&&s.renderer.bands.show){opts.fill=true;opts.closePath=true;}
s.renderer.shapeRenderer.draw(canvas._ctx,points,opts);canvas=null;}
function unhighlight(plot){var canvas=plot.plugins.lineRenderer.highlightCanvas;canvas._ctx.clearRect(0,0,canvas._ctx.canvas.width,canvas._ctx.canvas.height);for(var i=0;i<plot.series.length;i++){plot.series[i]._highlightedPoint=null;}
plot.plugins.lineRenderer.highlightedSeriesIndex=null;plot.target.trigger('jqplotDataUnhighlight');canvas=null;}
function handleMove(ev,gridpos,datapos,neighbor,plot){if(neighbor){var ins=[neighbor.seriesIndex,neighbor.pointIndex,neighbor.data];var evt1=jQuery.Event('jqplotDataMouseOver');evt1.pageX=ev.pageX;evt1.pageY=ev.pageY;plot.target.trigger(evt1,ins);if(plot.series[ins[0]].highlightMouseOver&&!(ins[0]==plot.plugins.lineRenderer.highlightedSeriesIndex)){var evt=jQuery.Event('jqplotDataHighlight');evt.which=ev.which;evt.pageX=ev.pageX;evt.pageY=ev.pageY;plot.target.trigger(evt,ins);highlight(plot,neighbor.seriesIndex,neighbor.pointIndex,neighbor.points);}}
else if(neighbor==null){unhighlight(plot);}}
function handleMouseDown(ev,gridpos,datapos,neighbor,plot){if(neighbor){var ins=[neighbor.seriesIndex,neighbor.pointIndex,neighbor.data];if(plot.series[ins[0]].highlightMouseDown&&!(ins[0]==plot.plugins.lineRenderer.highlightedSeriesIndex)){var evt=jQuery.Event('jqplotDataHighlight');evt.which=ev.which;evt.pageX=ev.pageX;evt.pageY=ev.pageY;plot.target.trigger(evt,ins);highlight(plot,neighbor.seriesIndex,neighbor.pointIndex,neighbor.points);}}
else if(neighbor==null){unhighlight(plot);}}
function handleMouseUp(ev,gridpos,datapos,neighbor,plot){var idx=plot.plugins.lineRenderer.highlightedSeriesIndex;if(idx!=null&&plot.series[idx].highlightMouseDown){unhighlight(plot);}}
function handleClick(ev,gridpos,datapos,neighbor,plot){if(neighbor){var ins=[neighbor.seriesIndex,neighbor.pointIndex,neighbor.data];var evt=jQuery.Event('jqplotDataClick');evt.which=ev.which;evt.pageX=ev.pageX;evt.pageY=ev.pageY;plot.target.trigger(evt,ins);}}
function handleRightClick(ev,gridpos,datapos,neighbor,plot){if(neighbor){var ins=[neighbor.seriesIndex,neighbor.pointIndex,neighbor.data];var idx=plot.plugins.lineRenderer.highlightedSeriesIndex;if(idx!=null&&plot.series[idx].highlightMouseDown){unhighlight(plot);}
var evt=jQuery.Event('jqplotDataRightClick');evt.which=ev.which;evt.pageX=ev.pageX;evt.pageY=ev.pageY;plot.target.trigger(evt,ins);}}
$.jqplot.LinearAxisRenderer=function(){};$.jqplot.LinearAxisRenderer.prototype.init=function(options){this.breakPoints=null;this.breakTickLabel="&asymp;";this.drawBaseline=true;this.baselineWidth=null;this.baselineColor=null;this.forceTickAt0=false;this.forceTickAt100=false;this.tickInset=0;this.minorTicks=0;this.alignTicks=false;this._autoFormatString='';this._overrideFormatString=false;this._scalefact=1.0;$.extend(true,this,options);if(this.breakPoints){if(!$.isArray(this.breakPoints)){this.breakPoints=null;}
else if(this.breakPoints.length<2||this.breakPoints[1]<=this.breakPoints[0]){this.breakPoints=null;}}
if(this.numberTicks!=null&&this.numberTicks<2){this.numberTicks=2;}
this.resetDataBounds();};$.jqplot.LinearAxisRenderer.prototype.draw=function(ctx,plot){if(this.show){this.renderer.createTicks.call(this,plot);var dim=0;var temp;if(this._elem){this._elem.emptyForce();this._elem=null;}
this._elem=$(document.createElement('div'));this._elem.addClass('jqplot-axis jqplot-'+this.name);this._elem.css('position','absolute');if(this.name=='xaxis'||this.name=='x2axis'){this._elem.width(this._plotDimensions.width);}
else{this._elem.height(this._plotDimensions.height);}
this.labelOptions.axis=this.name;this._label=new this.labelRenderer(this.labelOptions);if(this._label.show){var elem=this._label.draw(ctx,plot);elem.appendTo(this._elem);elem=null;}
var t=this._ticks;var tick;for(var i=0;i<t.length;i++){tick=t[i];if(tick.show&&tick.showLabel&&(!tick.isMinorTick||this.showMinorTicks)){this._elem.append(tick.draw(ctx,plot));}}
tick=null;t=null;}
return this._elem;};$.jqplot.LinearAxisRenderer.prototype.reset=function(){this.min=this._options.min;this.max=this._options.max;this.tickInterval=this._options.tickInterval;this.numberTicks=this._options.numberTicks;this._autoFormatString='';if(this._overrideFormatString&&this.tickOptions&&this.tickOptions.formatString){this.tickOptions.formatString='';}};$.jqplot.LinearAxisRenderer.prototype.set=function(){var dim=0;var temp;var w=0;var h=0;var lshow=(this._label==null)?false:this._label.show;if(this.show){var t=this._ticks;var tick;for(var i=0;i<t.length;i++){tick=t[i];if(!tick._breakTick&&tick.show&&tick.showLabel&&(!tick.isMinorTick||this.showMinorTicks)){if(this.name=='xaxis'||this.name=='x2axis'){temp=tick._elem.outerHeight(true);}
else{temp=tick._elem.outerWidth(true);}
if(temp>dim){dim=temp;}}}
tick=null;t=null;if(lshow){w=this._label._elem.outerWidth(true);h=this._label._elem.outerHeight(true);}
if(this.name=='xaxis'){dim=dim+h;this._elem.css({'height':dim+'px',left:'0px',bottom:'0px'});}
else if(this.name=='x2axis'){dim=dim+h;this._elem.css({'height':dim+'px',left:'0px',top:'0px'});}
else if(this.name=='yaxis'){dim=dim+w;this._elem.css({'width':dim+'px',left:'0px',top:'0px'});if(lshow&&this._label.constructor==$.jqplot.AxisLabelRenderer){this._label._elem.css('width',w+'px');}}
else{dim=dim+w;this._elem.css({'width':dim+'px',right:'0px',top:'0px'});if(lshow&&this._label.constructor==$.jqplot.AxisLabelRenderer){this._label._elem.css('width',w+'px');}}}};$.jqplot.LinearAxisRenderer.prototype.createTicks=function(plot){var ticks=this._ticks;var userTicks=this.ticks;var name=this.name;var db=this._dataBounds;var dim=(this.name.charAt(0)==='x')?this._plotDimensions.width:this._plotDimensions.height;var interval;var min,max;var pos1,pos2;var tt,i;var userMin=this.min;var userMax=this.max;var userNT=this.numberTicks;var userTI=this.tickInterval;var threshold=30;this._scalefact=(Math.max(dim,threshold+1)-threshold)/300.0;if(userTicks.length){for(i=0;i<userTicks.length;i++){var ut=userTicks[i];var t=new this.tickRenderer(this.tickOptions);if($.isArray(ut)){t.value=ut[0];if(this.breakPoints){if(ut[0]==this.breakPoints[0]){t.label=this.breakTickLabel;t._breakTick=true;t.showGridline=false;t.showMark=false;}
else if(ut[0]>this.breakPoints[0]&&ut[0]<=this.breakPoints[1]){t.show=false;t.showGridline=false;t.label=ut[1];}
else{t.label=ut[1];}}
else{t.label=ut[1];}
t.setTick(ut[0],this.name);this._ticks.push(t);}
else if($.isPlainObject(ut)){$.extend(true,t,ut);t.axis=this.name;this._ticks.push(t);}
else{t.value=ut;if(this.breakPoints){if(ut==this.breakPoints[0]){t.label=this.breakTickLabel;t._breakTick=true;t.showGridline=false;t.showMark=false;}
else if(ut>this.breakPoints[0]&&ut<=this.breakPoints[1]){t.show=false;t.showGridline=false;}}
t.setTick(ut,this.name);this._ticks.push(t);}}
this.numberTicks=userTicks.length;this.min=this._ticks[0].value;this.max=this._ticks[this.numberTicks-1].value;this.tickInterval=(this.max-this.min)/(this.numberTicks-1);}
else{if(name=='xaxis'||name=='x2axis'){dim=this._plotDimensions.width;}
else{dim=this._plotDimensions.height;}
var _numberTicks=this.numberTicks;if(this.alignTicks){if(this.name==='x2axis'&&plot.axes.xaxis.show){_numberTicks=plot.axes.xaxis.numberTicks;}
else if(this.name.charAt(0)==='y'&&this.name!=='yaxis'&&this.name!=='yMidAxis'&&plot.axes.yaxis.show){_numberTicks=plot.axes.yaxis.numberTicks;}}
min=((this.min!=null)?this.min:db.min);max=((this.max!=null)?this.max:db.max);var range=max-min;var rmin,rmax;var temp;if(this.tickOptions==null||!this.tickOptions.formatString){this._overrideFormatString=true;}
if(this.min==null||this.max==null&&this.tickInterval==null&&!this.autoscale){if(this.forceTickAt0){if(min>0){min=0;}
if(max<0){max=0;}}
if(this.forceTickAt100){if(min>100){min=100;}
if(max<100){max=100;}}
var keepMin=false,keepMax=false;if(this.min!=null){keepMin=true;}
else if(this.max!=null){keepMax=true;}
var ret=$.jqplot.LinearTickGenerator(min,max,this._scalefact,_numberTicks,keepMin,keepMax);var tumin=(this.min!=null)?min:min+range*(this.padMin-1);var tumax=(this.max!=null)?max:max-range*(this.padMax-1);if(min<tumin||max>tumax){tumin=(this.min!=null)?min:min-range*(this.padMin-1);tumax=(this.max!=null)?max:max+range*(this.padMax-1);ret=$.jqplot.LinearTickGenerator(tumin,tumax,this._scalefact,_numberTicks,keepMin,keepMax);}
this.min=ret[0];this.max=ret[1];this.numberTicks=ret[2];this._autoFormatString=ret[3];this.tickInterval=ret[4];}
else{if(min==max){var adj=0.05;if(min>0){adj=Math.max(Math.log(min)/Math.LN10,0.05);}
min-=adj;max+=adj;}
if(this.autoscale&&this.min==null&&this.max==null){var rrange,ti,margin;var forceMinZero=false;var forceZeroLine=false;var intervals={min:null,max:null,average:null,stddev:null};for(var i=0;i<this._series.length;i++){var s=this._series[i];var faname=(s.fillAxis=='x')?s._xaxis.name:s._yaxis.name;if(this.name==faname){var vals=s._plotValues[s.fillAxis];var vmin=vals[0];var vmax=vals[0];for(var j=1;j<vals.length;j++){if(vals[j]<vmin){vmin=vals[j];}
else if(vals[j]>vmax){vmax=vals[j];}}
var dp=(vmax-vmin)/vmax;if(s.renderer.constructor==$.jqplot.BarRenderer){if(vmin>=0&&(s.fillToZero||dp>0.1)){forceMinZero=true;}
else{forceMinZero=false;if(s.fill&&s.fillToZero&&vmin<0&&vmax>0){forceZeroLine=true;}
else{forceZeroLine=false;}}}
else if(s.fill){if(vmin>=0&&(s.fillToZero||dp>0.1)){forceMinZero=true;}
else if(vmin<0&&vmax>0&&s.fillToZero){forceMinZero=false;forceZeroLine=true;}
else{forceMinZero=false;forceZeroLine=false;}}
else if(vmin<0){forceMinZero=false;}}}
if(forceMinZero){this.numberTicks=2+Math.ceil((dim-(this.tickSpacing-1))/this.tickSpacing);this.min=0;userMin=0;ti=max/(this.numberTicks-1);temp=Math.pow(10,Math.abs(Math.floor(Math.log(ti)/Math.LN10)));if(ti/temp==parseInt(ti/temp,10)){ti+=temp;}
this.tickInterval=Math.ceil(ti/temp)*temp;this.max=this.tickInterval*(this.numberTicks-1);}
else if(forceZeroLine){this.numberTicks=2+Math.ceil((dim-(this.tickSpacing-1))/this.tickSpacing);var ntmin=Math.ceil(Math.abs(min)/range*(this.numberTicks-1));var ntmax=this.numberTicks-1-ntmin;ti=Math.max(Math.abs(min/ntmin),Math.abs(max/ntmax));temp=Math.pow(10,Math.abs(Math.floor(Math.log(ti)/Math.LN10)));this.tickInterval=Math.ceil(ti/temp)*temp;this.max=this.tickInterval*ntmax;this.min=-this.tickInterval*ntmin;}
else{if(this.numberTicks==null){if(this.tickInterval){this.numberTicks=3+Math.ceil(range/this.tickInterval);}
else{this.numberTicks=2+Math.ceil((dim-(this.tickSpacing-1))/this.tickSpacing);}}
if(this.tickInterval==null){ti=range/(this.numberTicks-1);if(ti<1){temp=Math.pow(10,Math.abs(Math.floor(Math.log(ti)/Math.LN10)));}
else{temp=1;}
this.tickInterval=Math.ceil(ti*temp*this.pad)/temp;}
else{temp=1/this.tickInterval;}
rrange=this.tickInterval*(this.numberTicks-1);margin=(rrange-range)/2;if(this.min==null){this.min=Math.floor(temp*(min-margin))/temp;}
if(this.max==null){this.max=this.min+rrange;}}
var sf=$.jqplot.getSignificantFigures(this.tickInterval);var fstr;if(sf.digitsLeft>=sf.significantDigits){fstr='%d';}
else{var temp=Math.max(0,5-sf.digitsLeft);temp=Math.min(temp,sf.digitsRight);fstr='%.'+temp+'f';}
this._autoFormatString=fstr;}
else{rmin=(this.min!=null)?this.min:min-range*(this.padMin-1);rmax=(this.max!=null)?this.max:max+range*(this.padMax-1);range=rmax-rmin;if(this.numberTicks==null){if(this.tickInterval!=null){this.numberTicks=Math.ceil((rmax-rmin)/this.tickInterval)+1;}
else if(dim>100){this.numberTicks=parseInt(3+(dim-100)/75,10);}
else{this.numberTicks=2;}}
if(this.tickInterval==null){this.tickInterval=range/(this.numberTicks-1);}
if(this.max==null){rmax=rmin+this.tickInterval*(this.numberTicks-1);}
if(this.min==null){rmin=rmax-this.tickInterval*(this.numberTicks-1);}
var sf=$.jqplot.getSignificantFigures(this.tickInterval);var fstr;if(sf.digitsLeft>=sf.significantDigits){fstr='%d';}
else{var temp=Math.max(0,5-sf.digitsLeft);temp=Math.min(temp,sf.digitsRight);fstr='%.'+temp+'f';}
this._autoFormatString=fstr;this.min=rmin;this.max=rmax;}
if(this.renderer.constructor==$.jqplot.LinearAxisRenderer&&this._autoFormatString==''){range=this.max-this.min;var temptick=new this.tickRenderer(this.tickOptions);var fs=temptick.formatString||$.jqplot.config.defaultTickFormatString;var fs=fs.match($.jqplot.sprintf.regex)[0];var precision=0;if(fs){if(fs.search(/[fFeEgGpP]/)>-1){var m=fs.match(/\%\.(\d{0,})?[eEfFgGpP]/);if(m){precision=parseInt(m[1],10);}
else{precision=6;}}
else if(fs.search(/[di]/)>-1){precision=0;}
var fact=Math.pow(10,-precision);if(this.tickInterval<fact){if(userNT==null&&userTI==null){this.tickInterval=fact;if(userMax==null&&userMin==null){this.min=Math.floor(this._dataBounds.min/fact)*fact;if(this.min==this._dataBounds.min){this.min=this._dataBounds.min-this.tickInterval;}
this.max=Math.ceil(this._dataBounds.max/fact)*fact;if(this.max==this._dataBounds.max){this.max=this._dataBounds.max+this.tickInterval;}
var n=(this.max-this.min)/this.tickInterval;n=n.toFixed(11);n=Math.ceil(n);this.numberTicks=n+1;}
else if(userMax==null){var n=(this._dataBounds.max-this.min)/this.tickInterval;n=n.toFixed(11);this.numberTicks=Math.ceil(n)+2;this.max=this.min+this.tickInterval*(this.numberTicks-1);}
else if(userMin==null){var n=(this.max-this._dataBounds.min)/this.tickInterval;n=n.toFixed(11);this.numberTicks=Math.ceil(n)+2;this.min=this.max-this.tickInterval*(this.numberTicks-1);}
else{this.numberTicks=Math.ceil((userMax-userMin)/this.tickInterval)+1;this.min=Math.floor(userMin*Math.pow(10,precision))/Math.pow(10,precision);this.max=Math.ceil(userMax*Math.pow(10,precision))/Math.pow(10,precision);this.numberTicks=Math.ceil((this.max-this.min)/this.tickInterval)+1;}}}}}}
if(this._overrideFormatString&&this._autoFormatString!=''){this.tickOptions=this.tickOptions||{};this.tickOptions.formatString=this._autoFormatString;}
var t,to;for(var i=0;i<this.numberTicks;i++){tt=this.min+i*this.tickInterval;t=new this.tickRenderer(this.tickOptions);t.setTick(tt,this.name);this._ticks.push(t);if(i<this.numberTicks-1){for(var j=0;j<this.minorTicks;j++){tt+=this.tickInterval/(this.minorTicks+1);to=$.extend(true,{},this.tickOptions,{name:this.name,value:tt,label:'',isMinorTick:true});t=new this.tickRenderer(to);this._ticks.push(t);}}
t=null;}}
if(this.tickInset){this.min=this.min-this.tickInset*this.tickInterval;this.max=this.max+this.tickInset*this.tickInterval;}
ticks=null;};$.jqplot.LinearAxisRenderer.prototype.resetTickValues=function(opts){if($.isArray(opts)&&opts.length==this._ticks.length){var t;for(var i=0;i<opts.length;i++){t=this._ticks[i];t.value=opts[i];t.label=t.formatter(t.formatString,opts[i]);t.label=t.prefix+t.label;t._elem.html(t.label);}
t=null;this.min=$.jqplot.arrayMin(opts);this.max=$.jqplot.arrayMax(opts);this.pack();}};$.jqplot.LinearAxisRenderer.prototype.pack=function(pos,offsets){pos=pos||{};offsets=offsets||this._offsets;var ticks=this._ticks;var max=this.max;var min=this.min;var offmax=offsets.max;var offmin=offsets.min;var lshow=(this._label==null)?false:this._label.show;for(var p in pos){this._elem.css(p,pos[p]);}
this._offsets=offsets;var pixellength=offmax-offmin;var unitlength=max-min;if(this.breakPoints){unitlength=unitlength-this.breakPoints[1]+this.breakPoints[0];this.p2u=function(p){return(p-offmin)*unitlength/pixellength+min;};this.u2p=function(u){if(u>this.breakPoints[0]&&u<this.breakPoints[1]){u=this.breakPoints[0];}
if(u<=this.breakPoints[0]){return(u-min)*pixellength/unitlength+offmin;}
else{return(u-this.breakPoints[1]+this.breakPoints[0]-min)*pixellength/unitlength+offmin;}};if(this.name.charAt(0)=='x'){this.series_u2p=function(u){if(u>this.breakPoints[0]&&u<this.breakPoints[1]){u=this.breakPoints[0];}
if(u<=this.breakPoints[0]){return(u-min)*pixellength/unitlength;}
else{return(u-this.breakPoints[1]+this.breakPoints[0]-min)*pixellength/unitlength;}};this.series_p2u=function(p){return p*unitlength/pixellength+min;};}
else{this.series_u2p=function(u){if(u>this.breakPoints[0]&&u<this.breakPoints[1]){u=this.breakPoints[0];}
if(u>=this.breakPoints[1]){return(u-max)*pixellength/unitlength;}
else{return(u+this.breakPoints[1]-this.breakPoints[0]-max)*pixellength/unitlength;}};this.series_p2u=function(p){return p*unitlength/pixellength+max;};}}
else{this.p2u=function(p){return(p-offmin)*unitlength/pixellength+min;};this.u2p=function(u){return(u-min)*pixellength/unitlength+offmin;};if(this.name=='xaxis'||this.name=='x2axis'){this.series_u2p=function(u){return(u-min)*pixellength/unitlength;};this.series_p2u=function(p){return p*unitlength/pixellength+min;};}
else{this.series_u2p=function(u){return(u-max)*pixellength/unitlength;};this.series_p2u=function(p){return p*unitlength/pixellength+max;};}}
if(this.show){if(this.name=='xaxis'||this.name=='x2axis'){for(var i=0;i<ticks.length;i++){var t=ticks[i];if(t.show&&t.showLabel){var shim;if(t.constructor==$.jqplot.CanvasAxisTickRenderer&&t.angle){var temp=(this.name=='xaxis')?1:-1;switch(t.labelPosition){case'auto':if(temp*t.angle<0){shim=-t.getWidth()+t._textRenderer.height*Math.sin(-t._textRenderer.angle)/2;}
else{shim=-t._textRenderer.height*Math.sin(t._textRenderer.angle)/2;}
break;case'end':shim=-t.getWidth()+t._textRenderer.height*Math.sin(-t._textRenderer.angle)/2;break;case'start':shim=-t._textRenderer.height*Math.sin(t._textRenderer.angle)/2;break;case'middle':shim=-t.getWidth()/2+t._textRenderer.height*Math.sin(-t._textRenderer.angle)/2;break;default:shim=-t.getWidth()/2+t._textRenderer.height*Math.sin(-t._textRenderer.angle)/2;break;}}
else{shim=-t.getWidth()/2;}
var val=this.u2p(t.value)+shim+'px';t._elem.css('left',val);t.pack();}}
if(lshow){var w=this._label._elem.outerWidth(true);this._label._elem.css('left',offmin+pixellength/2-w/2+'px');if(this.name=='xaxis'){this._label._elem.css('bottom','0px');}
else{this._label._elem.css('top','0px');}
this._label.pack();}}
else{for(var i=0;i<ticks.length;i++){var t=ticks[i];if(t.show&&t.showLabel){var shim;if(t.constructor==$.jqplot.CanvasAxisTickRenderer&&t.angle){var temp=(this.name=='yaxis')?1:-1;switch(t.labelPosition){case'auto':case'end':if(temp*t.angle<0){shim=-t._textRenderer.height*Math.cos(-t._textRenderer.angle)/2;}
else{shim=-t.getHeight()+t._textRenderer.height*Math.cos(t._textRenderer.angle)/2;}
break;case'start':if(t.angle>0){shim=-t._textRenderer.height*Math.cos(-t._textRenderer.angle)/2;}
else{shim=-t.getHeight()+t._textRenderer.height*Math.cos(t._textRenderer.angle)/2;}
break;case'middle':shim=-t.getHeight()/2;break;default:shim=-t.getHeight()/2;break;}}
else{shim=-t.getHeight()/2;}
var val=this.u2p(t.value)+shim+'px';t._elem.css('top',val);t.pack();}}
if(lshow){var h=this._label._elem.outerHeight(true);this._label._elem.css('top',offmax-pixellength/2-h/2+'px');if(this.name=='yaxis'){this._label._elem.css('left','0px');}
else{this._label._elem.css('right','0px');}
this._label.pack();}}}
ticks=null;};function bestFormatString(interval)
{var fstr;interval=Math.abs(interval);if(interval>=10){fstr='%d';}
else if(interval>1){if(interval===parseInt(interval,10)){fstr='%d';}
else{fstr='%.1f';}}
else{var expv=-Math.floor(Math.log(interval)/Math.LN10);fstr='%.'+expv+'f';}
return fstr;}
var _factors=[0.1,0.2,0.3,0.4,0.5,0.8,1,2,3,4,5];var _getLowerFactor=function(f){var i=_factors.indexOf(f);if(i>0){return _factors[i-1];}
else{return _factors[_factors.length-1]/100;}};var _getHigherFactor=function(f){var i=_factors.indexOf(f);if(i<_factors.length-1){return _factors[i+1];}
else{return _factors[0]*100;}};function bestConstrainedInterval(min,max,nttarget){var low=Math.floor(nttarget/2);var hi=Math.ceil(nttarget*1.5);var badness=Number.MAX_VALUE;var r=(max-min);var temp;var sd;var bestNT;var gsf=$.jqplot.getSignificantFigures;var fsd;var fs;var currentNT;var bestPrec;for(var i=0,l=hi-low+1;i<l;i++){currentNT=low+i;temp=r/(currentNT-1);sd=gsf(temp);temp=Math.abs(nttarget-currentNT)+sd.digitsRight;if(temp<badness){badness=temp;bestNT=currentNT;bestPrec=sd.digitsRight;}
else if(temp===badness){if(sd.digitsRight<bestPrec){bestNT=currentNT;bestPrec=sd.digitsRight;}}}
fsd=Math.max(bestPrec,Math.max(gsf(min).digitsRight,gsf(max).digitsRight));if(fsd===0){fs='%d';}
else{fs='%.'+fsd+'f';}
temp=r/(bestNT-1);return[min,max,bestNT,fs,temp];}
function bestInterval(range,numberTicks){numberTicks=numberTicks||7;var minimum=range/(numberTicks-1);var magnitude=Math.pow(10,Math.floor(Math.log(minimum)/Math.LN10));var residual=minimum/magnitude;var interval;if(magnitude<1){if(residual>5){interval=10*magnitude;}
else if(residual>2){interval=5*magnitude;}
else if(residual>1){interval=2*magnitude;}
else{interval=magnitude;}}
else{if(residual>5){interval=10*magnitude;}
else if(residual>4){interval=5*magnitude;}
else if(residual>3){interval=4*magnitude;}
else if(residual>2){interval=3*magnitude;}
else if(residual>1){interval=2*magnitude;}
else{interval=magnitude;}}
return interval;}
function bestLinearInterval(range,scalefact){scalefact=scalefact||1;var expv=Math.floor(Math.log(range)/Math.LN10);var magnitude=Math.pow(10,expv);var f=range/magnitude;var fact;f=f/scalefact;if(f<=0.38){fact=0.1;}
else if(f<=1.6){fact=0.2;}
else if(f<=4.0){fact=0.5;}
else if(f<=8.0){fact=1.0;}
else if(f<=16.0){fact=2;}
else{fact=5;}
return fact*magnitude;}
function bestLinearComponents(range,scalefact){var expv=Math.floor(Math.log(range)/Math.LN10);var magnitude=Math.pow(10,expv);var f=range/magnitude;var interval;var fact;f=f/scalefact;if(f<=0.38){fact=0.1;}
else if(f<=1.6){fact=0.2;}
else if(f<=4.0){fact=0.5;}
else if(f<=8.0){fact=1.0;}
else if(f<=16.0){fact=2;}
else{fact=5;}
interval=fact*magnitude;return[interval,fact,magnitude];}
$.jqplot.LinearTickGenerator=function(axis_min,axis_max,scalefact,numberTicks,keepMin,keepMax){keepMin=(keepMin===null)?false:keepMin;keepMax=(keepMax===null||keepMin)?false:keepMax;if(axis_min===axis_max){axis_max=(axis_max)?0:1;}
scalefact=scalefact||1.0;if(axis_max<axis_min){var a=axis_max;axis_max=axis_min;axis_min=a;}
var r=[];var ss=bestLinearInterval(axis_max-axis_min,scalefact);var gsf=$.jqplot.getSignificantFigures;if(numberTicks==null){if(!keepMin&&!keepMax){r[0]=Math.floor(axis_min/ss)*ss;r[1]=Math.ceil(axis_max/ss)*ss;r[2]=Math.round((r[1]-r[0])/ss+1.0);r[3]=bestFormatString(ss);r[4]=ss;}
else if(keepMin){r[0]=axis_min;r[2]=Math.ceil((axis_max-axis_min)/ss+1.0);r[1]=axis_min+(r[2]-1)*ss;var digitsMin=gsf(axis_min).digitsRight;var digitsSS=gsf(ss).digitsRight;if(digitsMin<digitsSS){r[3]=bestFormatString(ss);}
else{r[3]='%.'+digitsMin+'f';}
r[4]=ss;}
else if(keepMax){r[1]=axis_max;r[2]=Math.ceil((axis_max-axis_min)/ss+1.0);r[0]=axis_max-(r[2]-1)*ss;var digitsMax=gsf(axis_max).digitsRight;var digitsSS=gsf(ss).digitsRight;if(digitsMax<digitsSS){r[3]=bestFormatString(ss);}
else{r[3]='%.'+digitsMax+'f';}
r[4]=ss;}}
else{var tempr=[];tempr[0]=Math.floor(axis_min/ss)*ss;tempr[1]=Math.ceil(axis_max/ss)*ss;tempr[2]=Math.round((tempr[1]-tempr[0])/ss+1.0);tempr[3]=bestFormatString(ss);tempr[4]=ss;if(tempr[2]===numberTicks){r=tempr;}
else{var newti=bestInterval(tempr[1]-tempr[0],numberTicks);r[0]=tempr[0];r[2]=numberTicks;r[4]=newti;r[3]=bestFormatString(newti);r[1]=r[0]+(r[2]-1)*r[4];}}
return r;};$.jqplot.LinearTickGenerator.bestLinearInterval=bestLinearInterval;$.jqplot.LinearTickGenerator.bestInterval=bestInterval;$.jqplot.LinearTickGenerator.bestLinearComponents=bestLinearComponents;$.jqplot.LinearTickGenerator.bestConstrainedInterval=bestConstrainedInterval;$.jqplot.MarkerRenderer=function(options){this.show=true;this.style='filledCircle';this.lineWidth=2;this.size=9.0;this.color='#666666';this.shadow=true;this.shadowAngle=45;this.shadowOffset=1;this.shadowDepth=3;this.shadowAlpha='0.07';this.shadowRenderer=new $.jqplot.ShadowRenderer();this.shapeRenderer=new $.jqplot.ShapeRenderer();$.extend(true,this,options);};$.jqplot.MarkerRenderer.prototype.init=function(options){$.extend(true,this,options);var sdopt={angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,lineWidth:this.lineWidth,depth:this.shadowDepth,closePath:true};if(this.style.indexOf('filled')!=-1){sdopt.fill=true;}
if(this.style.indexOf('ircle')!=-1){sdopt.isarc=true;sdopt.closePath=false;}
this.shadowRenderer.init(sdopt);var shopt={fill:false,isarc:false,strokeStyle:this.color,fillStyle:this.color,lineWidth:this.lineWidth,closePath:true};if(this.style.indexOf('filled')!=-1){shopt.fill=true;}
if(this.style.indexOf('ircle')!=-1){shopt.isarc=true;shopt.closePath=false;}
this.shapeRenderer.init(shopt);};$.jqplot.MarkerRenderer.prototype.drawDiamond=function(x,y,ctx,fill,options){var stretch=1.2;var dx=this.size/2/stretch;var dy=this.size/2*stretch;var points=[[x-dx,y],[x,y+dy],[x+dx,y],[x,y-dy]];if(this.shadow){this.shadowRenderer.draw(ctx,points);}
this.shapeRenderer.draw(ctx,points,options);};$.jqplot.MarkerRenderer.prototype.drawPlus=function(x,y,ctx,fill,options){var stretch=1.0;var dx=this.size/2*stretch;var dy=this.size/2*stretch;var points1=[[x,y-dy],[x,y+dy]];var points2=[[x+dx,y],[x-dx,y]];var opts=$.extend(true,{},this.options,{closePath:false});if(this.shadow){this.shadowRenderer.draw(ctx,points1,{closePath:false});this.shadowRenderer.draw(ctx,points2,{closePath:false});}
this.shapeRenderer.draw(ctx,points1,opts);this.shapeRenderer.draw(ctx,points2,opts);};$.jqplot.MarkerRenderer.prototype.drawX=function(x,y,ctx,fill,options){var stretch=1.0;var dx=this.size/2*stretch;var dy=this.size/2*stretch;var opts=$.extend(true,{},this.options,{closePath:false});var points1=[[x-dx,y-dy],[x+dx,y+dy]];var points2=[[x-dx,y+dy],[x+dx,y-dy]];if(this.shadow){this.shadowRenderer.draw(ctx,points1,{closePath:false});this.shadowRenderer.draw(ctx,points2,{closePath:false});}
this.shapeRenderer.draw(ctx,points1,opts);this.shapeRenderer.draw(ctx,points2,opts);};$.jqplot.MarkerRenderer.prototype.drawDash=function(x,y,ctx,fill,options){var stretch=1.0;var dx=this.size/2*stretch;var dy=this.size/2*stretch;var points=[[x-dx,y],[x+dx,y]];if(this.shadow){this.shadowRenderer.draw(ctx,points);}
this.shapeRenderer.draw(ctx,points,options);};$.jqplot.MarkerRenderer.prototype.drawLine=function(p1,p2,ctx,fill,options){var points=[p1,p2];if(this.shadow){this.shadowRenderer.draw(ctx,points);}
this.shapeRenderer.draw(ctx,points,options);};$.jqplot.MarkerRenderer.prototype.drawSquare=function(x,y,ctx,fill,options){var stretch=1.0;var dx=this.size/2/stretch;var dy=this.size/2*stretch;var points=[[x-dx,y-dy],[x-dx,y+dy],[x+dx,y+dy],[x+dx,y-dy]];if(this.shadow){this.shadowRenderer.draw(ctx,points);}
this.shapeRenderer.draw(ctx,points,options);};$.jqplot.MarkerRenderer.prototype.drawCircle=function(x,y,ctx,fill,options){var radius=this.size/2;var end=2*Math.PI;var points=[x,y,radius,0,end,true];if(this.shadow){this.shadowRenderer.draw(ctx,points);}
this.shapeRenderer.draw(ctx,points,options);};$.jqplot.MarkerRenderer.prototype.draw=function(x,y,ctx,options){options=options||{};if(options.show==null||options.show!=false){if(options.color&&!options.fillStyle){options.fillStyle=options.color;}
if(options.color&&!options.strokeStyle){options.strokeStyle=options.color;}
switch(this.style){case'diamond':this.drawDiamond(x,y,ctx,false,options);break;case'filledDiamond':this.drawDiamond(x,y,ctx,true,options);break;case'circle':this.drawCircle(x,y,ctx,false,options);break;case'filledCircle':this.drawCircle(x,y,ctx,true,options);break;case'square':this.drawSquare(x,y,ctx,false,options);break;case'filledSquare':this.drawSquare(x,y,ctx,true,options);break;case'x':this.drawX(x,y,ctx,true,options);break;case'plus':this.drawPlus(x,y,ctx,true,options);break;case'dash':this.drawDash(x,y,ctx,true,options);break;case'line':this.drawLine(x,y,ctx,false,options);break;default:this.drawDiamond(x,y,ctx,false,options);break;}}};$.jqplot.ShadowRenderer=function(options){this.angle=45;this.offset=1;this.alpha=0.07;this.lineWidth=1.5;this.lineJoin='miter';this.lineCap='round';this.closePath=false;this.fill=false;this.depth=3;this.strokeStyle='rgba(0,0,0,0.1)';this.isarc=false;$.extend(true,this,options);};$.jqplot.ShadowRenderer.prototype.init=function(options){$.extend(true,this,options);};$.jqplot.ShadowRenderer.prototype.draw=function(ctx,points,options){ctx.save();var opts=(options!=null)?options:{};var fill=(opts.fill!=null)?opts.fill:this.fill;var fillRect=(opts.fillRect!=null)?opts.fillRect:this.fillRect;var closePath=(opts.closePath!=null)?opts.closePath:this.closePath;var offset=(opts.offset!=null)?opts.offset:this.offset;var alpha=(opts.alpha!=null)?opts.alpha:this.alpha;var depth=(opts.depth!=null)?opts.depth:this.depth;var isarc=(opts.isarc!=null)?opts.isarc:this.isarc;var linePattern=(opts.linePattern!=null)?opts.linePattern:this.linePattern;ctx.lineWidth=(opts.lineWidth!=null)?opts.lineWidth:this.lineWidth;ctx.lineJoin=(opts.lineJoin!=null)?opts.lineJoin:this.lineJoin;ctx.lineCap=(opts.lineCap!=null)?opts.lineCap:this.lineCap;ctx.strokeStyle=opts.strokeStyle||this.strokeStyle||'rgba(0,0,0,'+alpha+')';ctx.fillStyle=opts.fillStyle||this.fillStyle||'rgba(0,0,0,'+alpha+')';for(var j=0;j<depth;j++){var ctxPattern=$.jqplot.LinePattern(ctx,linePattern);ctx.translate(Math.cos(this.angle*Math.PI/180)*offset,Math.sin(this.angle*Math.PI/180)*offset);ctxPattern.beginPath();if(isarc){ctx.arc(points[0],points[1],points[2],points[3],points[4],true);}
else if(fillRect){if(fillRect){ctx.fillRect(points[0],points[1],points[2],points[3]);}}
else if(points&&points.length){var move=true;for(var i=0;i<points.length;i++){if(points[i][0]!=null&&points[i][1]!=null){if(move){ctxPattern.moveTo(points[i][0],points[i][1]);move=false;}
else{ctxPattern.lineTo(points[i][0],points[i][1]);}}
else{move=true;}}}
if(closePath){ctxPattern.closePath();}
if(fill){ctx.fill();}
else{ctx.stroke();}}
ctx.restore();};$.jqplot.ShapeRenderer=function(options){this.lineWidth=1.5;this.linePattern='solid';this.lineJoin='miter';this.lineCap='round';this.closePath=false;this.fill=false;this.isarc=false;this.fillRect=false;this.strokeRect=false;this.clearRect=false;this.strokeStyle='#999999';this.fillStyle='#999999';$.extend(true,this,options);};$.jqplot.ShapeRenderer.prototype.init=function(options){$.extend(true,this,options);};$.jqplot.ShapeRenderer.prototype.draw=function(ctx,points,options){ctx.save();var opts=(options!=null)?options:{};var fill=(opts.fill!=null)?opts.fill:this.fill;var closePath=(opts.closePath!=null)?opts.closePath:this.closePath;var fillRect=(opts.fillRect!=null)?opts.fillRect:this.fillRect;var strokeRect=(opts.strokeRect!=null)?opts.strokeRect:this.strokeRect;var clearRect=(opts.clearRect!=null)?opts.clearRect:this.clearRect;var isarc=(opts.isarc!=null)?opts.isarc:this.isarc;var linePattern=(opts.linePattern!=null)?opts.linePattern:this.linePattern;var ctxPattern=$.jqplot.LinePattern(ctx,linePattern);ctx.lineWidth=opts.lineWidth||this.lineWidth;ctx.lineJoin=opts.lineJoin||this.lineJoin;ctx.lineCap=opts.lineCap||this.lineCap;ctx.strokeStyle=(opts.strokeStyle||opts.color)||this.strokeStyle;ctx.fillStyle=opts.fillStyle||this.fillStyle;ctx.beginPath();if(isarc){ctx.arc(points[0],points[1],points[2],points[3],points[4],true);if(closePath){ctx.closePath();}
if(fill){ctx.fill();}
else{ctx.stroke();}
ctx.restore();return;}
else if(clearRect){ctx.clearRect(points[0],points[1],points[2],points[3]);ctx.restore();return;}
else if(fillRect||strokeRect){if(fillRect){ctx.fillRect(points[0],points[1],points[2],points[3]);}
if(strokeRect){ctx.strokeRect(points[0],points[1],points[2],points[3]);ctx.restore();return;}}
else if(points&&points.length){var move=true;for(var i=0;i<points.length;i++){if(points[i][0]!=null&&points[i][1]!=null){if(move){ctxPattern.moveTo(points[i][0],points[i][1]);move=false;}
else{ctxPattern.lineTo(points[i][0],points[i][1]);}}
else{move=true;}}
if(closePath){ctxPattern.closePath();}
if(fill){ctx.fill();}
else{ctx.stroke();}}
ctx.restore();};$.jqplot.TableLegendRenderer=function(){};$.jqplot.TableLegendRenderer.prototype.init=function(options){$.extend(true,this,options);};$.jqplot.TableLegendRenderer.prototype.addrow=function(label,color,pad,reverse){var rs=(pad)?this.rowSpacing+'px':'0px';var tr;var td;var elem;var div0;var div1;elem=document.createElement('tr');tr=$(elem);tr.addClass('jqplot-table-legend');elem=null;if(reverse){tr.prependTo(this._elem);}
else{tr.appendTo(this._elem);}
if(this.showSwatches){td=$(document.createElement('td'));td.addClass('jqplot-table-legend jqplot-table-legend-swatch');td.css({textAlign:'center',paddingTop:rs});div0=$(document.createElement('div'));div0.addClass('jqplot-table-legend-swatch-outline');div1=$(document.createElement('div'));div1.addClass('jqplot-table-legend-swatch');div1.css({backgroundColor:color,borderColor:color});tr.append(td.append(div0.append(div1)));}
if(this.showLabels){td=$(document.createElement('td'));td.addClass('jqplot-table-legend jqplot-table-legend-label');td.css('paddingTop',rs);tr.append(td);if(this.escapeHtml){td.text(label);}
else{td.html(label);}}
td=null;div0=null;div1=null;tr=null;elem=null;};$.jqplot.TableLegendRenderer.prototype.draw=function(){if(this._elem){this._elem.emptyForce();this._elem=null;}
if(this.show){var series=this._series;var elem=document.createElement('table');this._elem=$(elem);this._elem.addClass('jqplot-table-legend');var ss={position:'absolute'};if(this.background){ss['background']=this.background;}
if(this.border){ss['border']=this.border;}
if(this.fontSize){ss['fontSize']=this.fontSize;}
if(this.fontFamily){ss['fontFamily']=this.fontFamily;}
if(this.textColor){ss['textColor']=this.textColor;}
if(this.marginTop!=null){ss['marginTop']=this.marginTop;}
if(this.marginBottom!=null){ss['marginBottom']=this.marginBottom;}
if(this.marginLeft!=null){ss['marginLeft']=this.marginLeft;}
if(this.marginRight!=null){ss['marginRight']=this.marginRight;}
var pad=false,reverse=false,s;for(var i=0;i<series.length;i++){s=series[i];if(s._stack||s.renderer.constructor==$.jqplot.BezierCurveRenderer){reverse=true;}
if(s.show&&s.showLabel){var lt=this.labels[i]||s.label.toString();if(lt){var color=s.color;if(reverse&&i<series.length-1){pad=true;}
else if(reverse&&i==series.length-1){pad=false;}
this.renderer.addrow.call(this,lt,color,pad,reverse);pad=true;}
for(var j=0;j<$.jqplot.addLegendRowHooks.length;j++){var item=$.jqplot.addLegendRowHooks[j].call(this,s);if(item){this.renderer.addrow.call(this,item.label,item.color,pad);pad=true;}}
lt=null;}}}
return this._elem;};$.jqplot.TableLegendRenderer.prototype.pack=function(offsets){if(this.show){if(this.placement=='insideGrid'){switch(this.location){case'nw':var a=offsets.left;var b=offsets.top;this._elem.css('left',a);this._elem.css('top',b);break;case'n':var a=(offsets.left+(this._plotDimensions.width-offsets.right))/2-this.getWidth()/2;var b=offsets.top;this._elem.css('left',a);this._elem.css('top',b);break;case'ne':var a=offsets.right;var b=offsets.top;this._elem.css({right:a,top:b});break;case'e':var a=offsets.right;var b=(offsets.top+(this._plotDimensions.height-offsets.bottom))/2-this.getHeight()/2;this._elem.css({right:a,top:b});break;case'se':var a=offsets.right;var b=offsets.bottom;this._elem.css({right:a,bottom:b});break;case's':var a=(offsets.left+(this._plotDimensions.width-offsets.right))/2-this.getWidth()/2;var b=offsets.bottom;this._elem.css({left:a,bottom:b});break;case'sw':var a=offsets.left;var b=offsets.bottom;this._elem.css({left:a,bottom:b});break;case'w':var a=offsets.left;var b=(offsets.top+(this._plotDimensions.height-offsets.bottom))/2-this.getHeight()/2;this._elem.css({left:a,top:b});break;default:var a=offsets.right;var b=offsets.bottom;this._elem.css({right:a,bottom:b});break;}}
else if(this.placement=='outside'){switch(this.location){case'nw':var a=this._plotDimensions.width-offsets.left;var b=offsets.top;this._elem.css('right',a);this._elem.css('top',b);break;case'n':var a=(offsets.left+(this._plotDimensions.width-offsets.right))/2-this.getWidth()/2;var b=this._plotDimensions.height-offsets.top;this._elem.css('left',a);this._elem.css('bottom',b);break;case'ne':var a=this._plotDimensions.width-offsets.right;var b=offsets.top;this._elem.css({left:a,top:b});break;case'e':var a=this._plotDimensions.width-offsets.right;var b=(offsets.top+(this._plotDimensions.height-offsets.bottom))/2-this.getHeight()/2;this._elem.css({left:a,top:b});break;case'se':var a=this._plotDimensions.width-offsets.right;var b=offsets.bottom;this._elem.css({left:a,bottom:b});break;case's':var a=(offsets.left+(this._plotDimensions.width-offsets.right))/2-this.getWidth()/2;var b=this._plotDimensions.height-offsets.bottom;this._elem.css({left:a,top:b});break;case'sw':var a=this._plotDimensions.width-offsets.left;var b=offsets.bottom;this._elem.css({right:a,bottom:b});break;case'w':var a=this._plotDimensions.width-offsets.left;var b=(offsets.top+(this._plotDimensions.height-offsets.bottom))/2-this.getHeight()/2;this._elem.css({right:a,top:b});break;default:var a=offsets.right;var b=offsets.bottom;this._elem.css({right:a,bottom:b});break;}}
else{switch(this.location){case'nw':this._elem.css({left:0,top:offsets.top});break;case'n':var a=(offsets.left+(this._plotDimensions.width-offsets.right))/2-this.getWidth()/2;this._elem.css({left:a,top:offsets.top});break;case'ne':this._elem.css({right:0,top:offsets.top});break;case'e':var b=(offsets.top+(this._plotDimensions.height-offsets.bottom))/2-this.getHeight()/2;this._elem.css({right:offsets.right,top:b});break;case'se':this._elem.css({right:offsets.right,bottom:offsets.bottom});break;case's':var a=(offsets.left+(this._plotDimensions.width-offsets.right))/2-this.getWidth()/2;this._elem.css({left:a,bottom:offsets.bottom});break;case'sw':this._elem.css({left:offsets.left,bottom:offsets.bottom});break;case'w':var b=(offsets.top+(this._plotDimensions.height-offsets.bottom))/2-this.getHeight()/2;this._elem.css({left:offsets.left,top:b});break;default:this._elem.css({right:offsets.right,bottom:offsets.bottom});break;}}}};$.jqplot.ThemeEngine=function(){this.themes={};this.activeTheme=null;};$.jqplot.ThemeEngine.prototype.init=function(){var th=new $.jqplot.Theme({_name:'Default'});var n,i,nn;for(n in th.target){if(n=="textColor"){th.target[n]=this.target.css('color');}
else{th.target[n]=this.target.css(n);}}
if(this.title.show&&this.title._elem){for(n in th.title){if(n=="textColor"){th.title[n]=this.title._elem.css('color');}
else{th.title[n]=this.title._elem.css(n);}}}
for(n in th.grid){th.grid[n]=this.grid[n];}
if(th.grid.backgroundColor==null&&this.grid.background!=null){th.grid.backgroundColor=this.grid.background;}
if(this.legend.show&&this.legend._elem){for(n in th.legend){if(n=='textColor'){th.legend[n]=this.legend._elem.css('color');}
else{th.legend[n]=this.legend._elem.css(n);}}}
var s;for(i=0;i<this.series.length;i++){s=this.series[i];if(s.renderer.constructor==$.jqplot.LineRenderer){th.series.push(new LineSeriesProperties());}
else if(s.renderer.constructor==$.jqplot.BarRenderer){th.series.push(new BarSeriesProperties());}
else if(s.renderer.constructor==$.jqplot.PieRenderer){th.series.push(new PieSeriesProperties());}
else if(s.renderer.constructor==$.jqplot.DonutRenderer){th.series.push(new DonutSeriesProperties());}
else if(s.renderer.constructor==$.jqplot.FunnelRenderer){th.series.push(new FunnelSeriesProperties());}
else if(s.renderer.constructor==$.jqplot.MeterGaugeRenderer){th.series.push(new MeterSeriesProperties());}
else{th.series.push({});}
for(n in th.series[i]){th.series[i][n]=s[n];}}
var a,ax;for(n in this.axes){ax=this.axes[n];a=th.axes[n]=new AxisProperties();a.borderColor=ax.borderColor;a.borderWidth=ax.borderWidth;if(ax._ticks&&ax._ticks[0]){for(nn in a.ticks){if(ax._ticks[0].hasOwnProperty(nn)){a.ticks[nn]=ax._ticks[0][nn];}
else if(ax._ticks[0]._elem){a.ticks[nn]=ax._ticks[0]._elem.css(nn);}}}
if(ax._label&&ax._label.show){for(nn in a.label){if(ax._label[nn]){a.label[nn]=ax._label[nn];}
else if(ax._label._elem){if(nn=='textColor'){a.label[nn]=ax._label._elem.css('color');}
else{a.label[nn]=ax._label._elem.css(nn);}}}}}
this.themeEngine._add(th);this.themeEngine.activeTheme=this.themeEngine.themes[th._name];};$.jqplot.ThemeEngine.prototype.get=function(name){if(!name){return this.activeTheme;}
else{return this.themes[name];}};function numericalOrder(a,b){return a-b;}
$.jqplot.ThemeEngine.prototype.getThemeNames=function(){var tn=[];for(var n in this.themes){tn.push(n);}
return tn.sort(numericalOrder);};$.jqplot.ThemeEngine.prototype.getThemes=function(){var tn=[];var themes=[];for(var n in this.themes){tn.push(n);}
tn.sort(numericalOrder);for(var i=0;i<tn.length;i++){themes.push(this.themes[tn[i]]);}
return themes;};$.jqplot.ThemeEngine.prototype.activate=function(plot,name){var redrawPlot=false;if(!name&&this.activeTheme&&this.activeTheme._name){name=this.activeTheme._name;}
if(!this.themes.hasOwnProperty(name)){throw new Error("No theme of that name");}
else{var th=this.themes[name];this.activeTheme=th;var val,checkBorderColor=false,checkBorderWidth=false;var arr=['xaxis','x2axis','yaxis','y2axis'];for(i=0;i<arr.length;i++){var ax=arr[i];if(th.axesStyles.borderColor!=null){plot.axes[ax].borderColor=th.axesStyles.borderColor;}
if(th.axesStyles.borderWidth!=null){plot.axes[ax].borderWidth=th.axesStyles.borderWidth;}}
for(var axname in plot.axes){var axis=plot.axes[axname];if(axis.show){var thaxis=th.axes[axname]||{};var thaxstyle=th.axesStyles;var thax=$.jqplot.extend(true,{},thaxis,thaxstyle);val=(th.axesStyles.borderColor!=null)?th.axesStyles.borderColor:thax.borderColor;if(thax.borderColor!=null){axis.borderColor=thax.borderColor;redrawPlot=true;}
val=(th.axesStyles.borderWidth!=null)?th.axesStyles.borderWidth:thax.borderWidth;if(thax.borderWidth!=null){axis.borderWidth=thax.borderWidth;redrawPlot=true;}
if(axis._ticks&&axis._ticks[0]){for(var nn in thax.ticks){val=thax.ticks[nn];if(val!=null){axis.tickOptions[nn]=val;axis._ticks=[];redrawPlot=true;}}}
if(axis._label&&axis._label.show){for(var nn in thax.label){val=thax.label[nn];if(val!=null){axis.labelOptions[nn]=val;redrawPlot=true;}}}}}
for(var n in th.grid){if(th.grid[n]!=null){plot.grid[n]=th.grid[n];}}
if(!redrawPlot){plot.grid.draw();}
if(plot.legend.show){for(n in th.legend){if(th.legend[n]!=null){plot.legend[n]=th.legend[n];}}}
if(plot.title.show){for(n in th.title){if(th.title[n]!=null){plot.title[n]=th.title[n];}}}
var i;for(i=0;i<th.series.length;i++){var opts={};var redrawSeries=false;for(n in th.series[i]){val=(th.seriesStyles[n]!=null)?th.seriesStyles[n]:th.series[i][n];if(val!=null){opts[n]=val;if(n=='color'){plot.series[i].renderer.shapeRenderer.fillStyle=val;plot.series[i].renderer.shapeRenderer.strokeStyle=val;plot.series[i][n]=val;}
else if((n=='lineWidth')||(n=='linePattern')){plot.series[i].renderer.shapeRenderer[n]=val;plot.series[i][n]=val;}
else if(n=='markerOptions'){merge(plot.series[i].markerOptions,val);merge(plot.series[i].markerRenderer,val);}
else{plot.series[i][n]=val;}
redrawPlot=true;}}}
if(redrawPlot){plot.target.empty();plot.draw();}
for(n in th.target){if(th.target[n]!=null){plot.target.css(n,th.target[n]);}}}};$.jqplot.ThemeEngine.prototype._add=function(theme,name){if(name){theme._name=name;}
if(!theme._name){theme._name=Date.parse(new Date());}
if(!this.themes.hasOwnProperty(theme._name)){this.themes[theme._name]=theme;}
else{throw new Error("jqplot.ThemeEngine Error: Theme already in use");}};$.jqplot.ThemeEngine.prototype.remove=function(name){if(name=='Default'){return false;}
return delete this.themes[name];};$.jqplot.ThemeEngine.prototype.newTheme=function(name,obj){if(typeof(name)=='object'){obj=obj||name;name=null;}
if(obj&&obj._name){name=obj._name;}
else{name=name||Date.parse(new Date());}
var th=this.copy(this.themes['Default']._name,name);$.jqplot.extend(th,obj);return th;};function clone(obj){if(obj==null||typeof(obj)!='object'){return obj;}
var temp=new obj.constructor();for(var key in obj){temp[key]=clone(obj[key]);}
return temp;}
$.jqplot.clone=clone;function merge(obj1,obj2){if(obj2==null||typeof(obj2)!='object'){return;}
for(var key in obj2){if(key=='highlightColors'){obj1[key]=clone(obj2[key]);}
if(obj2[key]!=null&&typeof(obj2[key])=='object'){if(!obj1.hasOwnProperty(key)){obj1[key]={};}
merge(obj1[key],obj2[key]);}
else{obj1[key]=obj2[key];}}}
$.jqplot.merge=merge;$.jqplot.extend=function(){var target=arguments[0]||{},i=1,length=arguments.length,deep=false,options;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2;}
if(typeof target!=="object"&&!toString.call(target)==="[object Function]"){target={};}
for(;i<length;i++){if((options=arguments[i])!=null){for(var name in options){var src=target[name],copy=options[name];if(target===copy){continue;}
if(deep&&copy&&typeof copy==="object"&&!copy.nodeType){target[name]=$.jqplot.extend(deep,src||(copy.length!=null?[]:{}),copy);}
else if(copy!==undefined){target[name]=copy;}}}}
return target;};$.jqplot.ThemeEngine.prototype.rename=function(oldName,newName){if(oldName=='Default'||newName=='Default'){throw new Error("jqplot.ThemeEngine Error: Cannot rename from/to Default");}
if(this.themes.hasOwnProperty(newName)){throw new Error("jqplot.ThemeEngine Error: New name already in use.");}
else if(this.themes.hasOwnProperty(oldName)){var th=this.copy(oldName,newName);this.remove(oldName);return th;}
throw new Error("jqplot.ThemeEngine Error: Old name or new name invalid");};$.jqplot.ThemeEngine.prototype.copy=function(sourceName,targetName,obj){if(targetName=='Default'){throw new Error("jqplot.ThemeEngine Error: Cannot copy over Default theme");}
if(!this.themes.hasOwnProperty(sourceName)){var s="jqplot.ThemeEngine Error: Source name invalid";throw new Error(s);}
if(this.themes.hasOwnProperty(targetName)){var s="jqplot.ThemeEngine Error: Target name invalid";throw new Error(s);}
else{var th=clone(this.themes[sourceName]);th._name=targetName;$.jqplot.extend(true,th,obj);this._add(th);return th;}};$.jqplot.Theme=function(name,obj){if(typeof(name)=='object'){obj=obj||name;name=null;}
name=name||Date.parse(new Date());this._name=name;this.target={backgroundColor:null};this.legend={textColor:null,fontFamily:null,fontSize:null,border:null,background:null};this.title={textColor:null,fontFamily:null,fontSize:null,textAlign:null};this.seriesStyles={};this.series=[];this.grid={drawGridlines:null,gridLineColor:null,gridLineWidth:null,backgroundColor:null,borderColor:null,borderWidth:null,shadow:null};this.axesStyles={label:{},ticks:{}};this.axes={};if(typeof(obj)=='string'){this._name=obj;}
else if(typeof(obj)=='object'){$.jqplot.extend(true,this,obj);}};var AxisProperties=function(){this.borderColor=null;this.borderWidth=null;this.ticks=new AxisTicks();this.label=new AxisLabel();};var AxisTicks=function(){this.show=null;this.showGridline=null;this.showLabel=null;this.showMark=null;this.size=null;this.textColor=null;this.whiteSpace=null;this.fontSize=null;this.fontFamily=null;};var AxisLabel=function(){this.textColor=null;this.whiteSpace=null;this.fontSize=null;this.fontFamily=null;this.fontWeight=null;};var LineSeriesProperties=function(){this.color=null;this.lineWidth=null;this.linePattern=null;this.shadow=null;this.fillColor=null;this.showMarker=null;this.markerOptions=new MarkerOptions();};var MarkerOptions=function(){this.show=null;this.style=null;this.lineWidth=null;this.size=null;this.color=null;this.shadow=null;};var BarSeriesProperties=function(){this.color=null;this.seriesColors=null;this.lineWidth=null;this.shadow=null;this.barPadding=null;this.barMargin=null;this.barWidth=null;this.highlightColors=null;};var PieSeriesProperties=function(){this.seriesColors=null;this.padding=null;this.sliceMargin=null;this.fill=null;this.shadow=null;this.startAngle=null;this.lineWidth=null;this.highlightColors=null;};var DonutSeriesProperties=function(){this.seriesColors=null;this.padding=null;this.sliceMargin=null;this.fill=null;this.shadow=null;this.startAngle=null;this.lineWidth=null;this.innerDiameter=null;this.thickness=null;this.ringMargin=null;this.highlightColors=null;};var FunnelSeriesProperties=function(){this.color=null;this.lineWidth=null;this.shadow=null;this.padding=null;this.sectionMargin=null;this.seriesColors=null;this.highlightColors=null;};var MeterSeriesProperties=function(){this.padding=null;this.backgroundColor=null;this.ringColor=null;this.tickColor=null;this.ringWidth=null;this.intervalColors=null;this.intervalInnerRadius=null;this.intervalOuterRadius=null;this.hubRadius=null;this.needleThickness=null;this.needlePad=null;};$.fn.jqplotChildText=function(){return $(this).contents().filter(function(){return this.nodeType==3;}).text();};$.fn.jqplotGetComputedFontStyle=function(){var css=window.getComputedStyle?window.getComputedStyle(this[0],""):this[0].currentStyle;var attrs=css['font-style']?['font-style','font-weight','font-size','font-family']:['fontStyle','fontWeight','fontSize','fontFamily'];var style=[];for(var i=0;i<attrs.length;++i){var attr=String(css[attrs[i]]);if(attr&&attr!='normal'){style.push(attr);}}
return style.join(' ');};$.fn.jqplotToImageCanvas=function(options){options=options||{};var x_offset=(options.x_offset==null)?0:options.x_offset;var y_offset=(options.y_offset==null)?0:options.y_offset;var backgroundColor=(options.backgroundColor==null)?'rgb(255,255,255)':options.backgroundColor;if($(this).width()==0||$(this).height()==0){return null;}
if($.jqplot.use_excanvas){return null;}
var newCanvas=document.createElement("canvas");var h=$(this).outerHeight(true);var w=$(this).outerWidth(true);var offs=$(this).offset();var plotleft=offs.left;var plottop=offs.top;var transx=0,transy=0;var clses=['jqplot-table-legend','jqplot-xaxis-tick','jqplot-x2axis-tick','jqplot-yaxis-tick','jqplot-y2axis-tick','jqplot-y3axis-tick','jqplot-y4axis-tick','jqplot-y5axis-tick','jqplot-y6axis-tick','jqplot-y7axis-tick','jqplot-y8axis-tick','jqplot-y9axis-tick','jqplot-xaxis-label','jqplot-x2axis-label','jqplot-yaxis-label','jqplot-y2axis-label','jqplot-y3axis-label','jqplot-y4axis-label','jqplot-y5axis-label','jqplot-y6axis-label','jqplot-y7axis-label','jqplot-y8axis-label','jqplot-y9axis-label'];var temptop,templeft,tempbottom,tempright;for(var i=0;i<clses.length;i++){$(this).find('.'+clses[i]).each(function(){temptop=$(this).offset().top-plottop;templeft=$(this).offset().left-plotleft;tempright=templeft+$(this).outerWidth(true)+transx;tempbottom=temptop+$(this).outerHeight(true)+transy;if(templeft<-transx){w=w-transx-templeft;transx=-templeft;}
if(temptop<-transy){h=h-transy-temptop;transy=-temptop;}
if(tempright>w){w=tempright;}
if(tempbottom>h){h=tempbottom;}});}
newCanvas.width=w+Number(x_offset);newCanvas.height=h+Number(y_offset);var newContext=newCanvas.getContext("2d");newContext.save();newContext.fillStyle=backgroundColor;newContext.fillRect(0,0,newCanvas.width,newCanvas.height);newContext.restore();newContext.translate(transx,transy);newContext.textAlign='left';newContext.textBaseline='top';function getLineheight(el){var lineheight=parseInt($(el).css('line-height'),10);if(isNaN(lineheight)){lineheight=parseInt($(el).css('font-size'),10)*1.2;}
return lineheight;}
function writeWrappedText(el,context,text,left,top,canvasWidth){var lineheight=getLineheight(el);var tagwidth=$(el).innerWidth();var tagheight=$(el).innerHeight();var words=text.split(/\s+/);var wl=words.length;var w='';var breaks=[];var temptop=top;var templeft=left;for(var i=0;i<wl;i++){w+=words[i];if(context.measureText(w).width>tagwidth){breaks.push(i);w='';i--;}}
if(breaks.length===0){if($(el).css('textAlign')==='center'){templeft=left+(canvasWidth-context.measureText(w).width)/2-transx;}
context.fillText(text,templeft,top);}
else{w=words.slice(0,breaks[0]).join(' ');if($(el).css('textAlign')==='center'){templeft=left+(canvasWidth-context.measureText(w).width)/2-transx;}
context.fillText(w,templeft,temptop);temptop+=lineheight;for(var i=1,l=breaks.length;i<l;i++){w=words.slice(breaks[i-1],breaks[i]).join(' ');if($(el).css('textAlign')==='center'){templeft=left+(canvasWidth-context.measureText(w).width)/2-transx;}
context.fillText(w,templeft,temptop);temptop+=lineheight;}
w=words.slice(breaks[i-1],words.length).join(' ');if($(el).css('textAlign')==='center'){templeft=left+(canvasWidth-context.measureText(w).width)/2-transx;}
context.fillText(w,templeft,temptop);}}
function _jqpToImage(el,x_offset,y_offset){var tagname=el.tagName.toLowerCase();var p=$(el).position();var css=window.getComputedStyle?window.getComputedStyle(el,""):el.currentStyle;var left=x_offset+p.left+parseInt(css.marginLeft,10)+parseInt(css.borderLeftWidth,10)+parseInt(css.paddingLeft,10);var top=y_offset+p.top+parseInt(css.marginTop,10)+parseInt(css.borderTopWidth,10)+parseInt(css.paddingTop,10);var w=newCanvas.width;if((tagname=='div'||tagname=='span')&&!$(el).hasClass('jqplot-highlighter-tooltip')){$(el).children().each(function(){_jqpToImage(this,left,top);});var text=$(el).jqplotChildText();if(text){newContext.font=$(el).jqplotGetComputedFontStyle();newContext.fillStyle=$(el).css('color');writeWrappedText(el,newContext,text,left,top,w);}}
else if(tagname==='table'&&$(el).hasClass('jqplot-table-legend')){newContext.strokeStyle=$(el).css('border-top-color');newContext.fillStyle=$(el).css('background-color');newContext.fillRect(left,top,$(el).innerWidth(),$(el).innerHeight());if(parseInt($(el).css('border-top-width'),10)>0){newContext.strokeRect(left,top,$(el).innerWidth(),$(el).innerHeight());}
$(el).find('div.jqplot-table-legend-swatch-outline').each(function(){var elem=$(this);newContext.strokeStyle=elem.css('border-top-color');var l=left+elem.position().left;var t=top+elem.position().top;newContext.strokeRect(l,t,elem.innerWidth(),elem.innerHeight());l+=parseInt(elem.css('padding-left'),10);t+=parseInt(elem.css('padding-top'),10);var h=elem.innerHeight()-2*parseInt(elem.css('padding-top'),10);var w=elem.innerWidth()-2*parseInt(elem.css('padding-left'),10);var swatch=elem.children('div.jqplot-table-legend-swatch');newContext.fillStyle=swatch.css('background-color');newContext.fillRect(l,t,w,h);});$(el).find('td.jqplot-table-legend-label').each(function(){var elem=$(this);var l=left+elem.position().left;var t=top+elem.position().top+parseInt(elem.css('padding-top'),10);newContext.font=elem.jqplotGetComputedFontStyle();newContext.fillStyle=elem.css('color');writeWrappedText(elem,newContext,elem.text(),l,t,w);});var elem=null;}
else if(tagname=='canvas'){newContext.drawImage(el,left,top);}}
$(this).children().each(function(){_jqpToImage(this,x_offset,y_offset);});return newCanvas;};$.fn.jqplotToImageStr=function(options){var imgCanvas=$(this).jqplotToImageCanvas(options);if(imgCanvas){return imgCanvas.toDataURL("image/png");}
else{return null;}};$.fn.jqplotToImageElem=function(options){var elem=document.createElement("img");var str=$(this).jqplotToImageStr(options);elem.src=str;return elem;};$.fn.jqplotToImageElemStr=function(options){var str='<img src='+$(this).jqplotToImageStr(options)+' />';return str;};$.fn.jqplotSaveImage=function(){var imgData=$(this).jqplotToImageStr({});if(imgData){window.location.href=imgData.replace("image/png","image/octet-stream");}};$.fn.jqplotViewImage=function(){var imgStr=$(this).jqplotToImageElemStr({});var imgData=$(this).jqplotToImageStr({});if(imgStr){var w=window.open('');w.document.open("image/png");w.document.write(imgStr);w.document.close();w=null;}};var jsDate=function(){this.syntax=jsDate.config.syntax;this._type="jsDate";this.proxy=new Date();this.options={};this.locale=jsDate.regional.getLocale();this.formatString='';this.defaultCentury=jsDate.config.defaultCentury;switch(arguments.length){case 0:break;case 1:if(get_type(arguments[0])=="[object Object]"&&arguments[0]._type!="jsDate"){var opts=this.options=arguments[0];this.syntax=opts.syntax||this.syntax;this.defaultCentury=opts.defaultCentury||this.defaultCentury;this.proxy=jsDate.createDate(opts.date);}
else{this.proxy=jsDate.createDate(arguments[0]);}
break;default:var a=[];for(var i=0;i<arguments.length;i++){a.push(arguments[i]);}
this.proxy=new Date();this.proxy.setFullYear.apply(this.proxy,a.slice(0,3));if(a.slice(3).length){this.proxy.setHours.apply(this.proxy,a.slice(3));}
break;}};jsDate.config={defaultLocale:'en',syntax:'perl',defaultCentury:1900};jsDate.prototype.add=function(number,unit){var factor=multipliers[unit]||multipliers.day;if(typeof factor=='number'){this.proxy.setTime(this.proxy.getTime()+(factor*number));}else{factor.add(this,number);}
return this;};jsDate.prototype.clone=function(){return new jsDate(this.proxy.getTime());};jsDate.prototype.getUtcOffset=function(){return this.proxy.getTimezoneOffset()*60000;};jsDate.prototype.diff=function(dateObj,unit,allowDecimal){dateObj=new jsDate(dateObj);if(dateObj===null){return null;}
var factor=multipliers[unit]||multipliers.day;if(typeof factor=='number'){var unitDiff=(this.proxy.getTime()-dateObj.proxy.getTime())/factor;}else{var unitDiff=factor.diff(this.proxy,dateObj.proxy);}
return(allowDecimal?unitDiff:Math[unitDiff>0?'floor':'ceil'](unitDiff));};jsDate.prototype.getAbbrDayName=function(){return jsDate.regional[this.locale]["dayNamesShort"][this.proxy.getDay()];};jsDate.prototype.getAbbrMonthName=function(){return jsDate.regional[this.locale]["monthNamesShort"][this.proxy.getMonth()];};jsDate.prototype.getAMPM=function(){return this.proxy.getHours()>=12?'PM':'AM';};jsDate.prototype.getAmPm=function(){return this.proxy.getHours()>=12?'pm':'am';};jsDate.prototype.getCentury=function(){return parseInt(this.proxy.getFullYear()/100,10);};jsDate.prototype.getDate=function(){return this.proxy.getDate();};jsDate.prototype.getDay=function(){return this.proxy.getDay();};jsDate.prototype.getDayOfWeek=function(){var dow=this.proxy.getDay();return dow===0?7:dow;};jsDate.prototype.getDayOfYear=function(){var d=this.proxy;var ms=d-new Date(''+d.getFullYear()+'/1/1 GMT');ms+=d.getTimezoneOffset()*60000;d=null;return parseInt(ms/60000/60/24,10)+1;};jsDate.prototype.getDayName=function(){return jsDate.regional[this.locale]["dayNames"][this.proxy.getDay()];};jsDate.prototype.getFullWeekOfYear=function(){var d=this.proxy;var doy=this.getDayOfYear();var rdow=6-d.getDay();var woy=parseInt((doy+rdow)/7,10);return woy;};jsDate.prototype.getFullYear=function(){return this.proxy.getFullYear();};jsDate.prototype.getGmtOffset=function(){var hours=this.proxy.getTimezoneOffset()/60;var prefix=hours<0?'+':'-';hours=Math.abs(hours);return prefix+addZeros(Math.floor(hours),2)+':'+addZeros((hours%1)*60,2);};jsDate.prototype.getHours=function(){return this.proxy.getHours();};jsDate.prototype.getHours12=function(){var hours=this.proxy.getHours();return hours>12?hours-12:(hours==0?12:hours);};jsDate.prototype.getIsoWeek=function(){var d=this.proxy;var woy=d.getWeekOfYear();var dow1_1=(new Date(''+d.getFullYear()+'/1/1')).getDay();var idow=woy+(dow1_1>4||dow1_1<=1?0:1);if(idow==53&&(new Date(''+d.getFullYear()+'/12/31')).getDay()<4)
{idow=1;}
else if(idow===0)
{d=new jsDate(new Date(''+(d.getFullYear()-1)+'/12/31'));idow=d.getIsoWeek();}
d=null;return idow;};jsDate.prototype.getMilliseconds=function(){return this.proxy.getMilliseconds();};jsDate.prototype.getMinutes=function(){return this.proxy.getMinutes();};jsDate.prototype.getMonth=function(){return this.proxy.getMonth();};jsDate.prototype.getMonthName=function(){return jsDate.regional[this.locale]["monthNames"][this.proxy.getMonth()];};jsDate.prototype.getMonthNumber=function(){return this.proxy.getMonth()+1;};jsDate.prototype.getSeconds=function(){return this.proxy.getSeconds();};jsDate.prototype.getShortYear=function(){return this.proxy.getYear()%100;};jsDate.prototype.getTime=function(){return this.proxy.getTime();};jsDate.prototype.getTimezoneAbbr=function(){return this.proxy.toString().replace(/^.*\(([^)]+)\)$/,'$1');};jsDate.prototype.getTimezoneName=function(){var match=/(?:\((.+)\)$| ([A-Z]{3}) )/.exec(this.toString());return match[1]||match[2]||'GMT'+this.getGmtOffset();};jsDate.prototype.getTimezoneOffset=function(){return this.proxy.getTimezoneOffset();};jsDate.prototype.getWeekOfYear=function(){var doy=this.getDayOfYear();var rdow=7-this.getDayOfWeek();var woy=parseInt((doy+rdow)/7,10);return woy;};jsDate.prototype.getUnix=function(){return Math.round(this.proxy.getTime()/1000,0);};jsDate.prototype.getYear=function(){return this.proxy.getYear();};jsDate.prototype.next=function(unit){unit=unit||'day';return this.clone().add(1,unit);};jsDate.prototype.set=function(){switch(arguments.length){case 0:this.proxy=new Date();break;case 1:if(get_type(arguments[0])=="[object Object]"&&arguments[0]._type!="jsDate"){var opts=this.options=arguments[0];this.syntax=opts.syntax||this.syntax;this.defaultCentury=opts.defaultCentury||this.defaultCentury;this.proxy=jsDate.createDate(opts.date);}
else{this.proxy=jsDate.createDate(arguments[0]);}
break;default:var a=[];for(var i=0;i<arguments.length;i++){a.push(arguments[i]);}
this.proxy=new Date();this.proxy.setFullYear.apply(this.proxy,a.slice(0,3));if(a.slice(3).length){this.proxy.setHours.apply(this.proxy,a.slice(3));}
break;}
return this;};jsDate.prototype.setDate=function(n){this.proxy.setDate(n);return this;};jsDate.prototype.setFullYear=function(){this.proxy.setFullYear.apply(this.proxy,arguments);return this;};jsDate.prototype.setHours=function(){this.proxy.setHours.apply(this.proxy,arguments);return this;};jsDate.prototype.setMilliseconds=function(n){this.proxy.setMilliseconds(n);return this;};jsDate.prototype.setMinutes=function(){this.proxy.setMinutes.apply(this.proxy,arguments);return this;};jsDate.prototype.setMonth=function(){this.proxy.setMonth.apply(this.proxy,arguments);return this;};jsDate.prototype.setSeconds=function(){this.proxy.setSeconds.apply(this.proxy,arguments);return this;};jsDate.prototype.setTime=function(n){this.proxy.setTime(n);return this;};jsDate.prototype.setYear=function(){this.proxy.setYear.apply(this.proxy,arguments);return this;};jsDate.prototype.strftime=function(formatString){formatString=formatString||this.formatString||jsDate.regional[this.locale]['formatString'];return jsDate.strftime(this,formatString,this.syntax);};jsDate.prototype.toString=function(){return this.proxy.toString();};jsDate.prototype.toYmdInt=function(){return(this.proxy.getFullYear()*10000)+(this.getMonthNumber()*100)+this.proxy.getDate();};jsDate.regional={'en':{monthNames:['January','February','March','April','May','June','July','August','September','October','November','December'],monthNamesShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],dayNames:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],dayNamesShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],formatString:'%Y-%m-%d %H:%M:%S'},'fr':{monthNames:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],monthNamesShort:['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'],dayNames:['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],dayNamesShort:['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],formatString:'%Y-%m-%d %H:%M:%S'},'de':{monthNames:['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],monthNamesShort:['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'],dayNames:['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],dayNamesShort:['So','Mo','Di','Mi','Do','Fr','Sa'],formatString:'%Y-%m-%d %H:%M:%S'},'es':{monthNames:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],monthNamesShort:['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],dayNames:['Domingo','Lunes','Martes','Mi&eacute;rcoles','Jueves','Viernes','S&aacute;bado'],dayNamesShort:['Dom','Lun','Mar','Mi&eacute;','Juv','Vie','S&aacute;b'],formatString:'%Y-%m-%d %H:%M:%S'},'ru':{monthNames:['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],monthNamesShort:['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],dayNames:['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],dayNamesShort:['вск','пнд','втр','срд','чтв','птн','сбт'],formatString:'%Y-%m-%d %H:%M:%S'},'ar':{monthNames:['كانون الثاني','شباط','آذار','نيسان','آذار','حزيران','تموز','آب','أيلول','تشرين الأول','تشرين الثاني','كانون الأول'],monthNamesShort:['1','2','3','4','5','6','7','8','9','10','11','12'],dayNames:['السبت','الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة'],dayNamesShort:['سبت','أحد','اثنين','ثلاثاء','أربعاء','خميس','جمعة'],formatString:'%Y-%m-%d %H:%M:%S'},'pt':{monthNames:['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],monthNamesShort:['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],dayNames:['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','S&aacute;bado'],dayNamesShort:['Dom','Seg','Ter','Qua','Qui','Sex','S&aacute;b'],formatString:'%Y-%m-%d %H:%M:%S'},'pt-BR':{monthNames:['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],monthNamesShort:['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],dayNames:['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','S&aacute;bado'],dayNamesShort:['Dom','Seg','Ter','Qua','Qui','Sex','S&aacute;b'],formatString:'%Y-%m-%d %H:%M:%S'}};jsDate.regional['en-US']=jsDate.regional['en-GB']=jsDate.regional['en'];jsDate.regional.getLocale=function(){var l=jsDate.config.defaultLocale;if(document&&document.getElementsByTagName('html')&&document.getElementsByTagName('html')[0].lang){l=document.getElementsByTagName('html')[0].lang;if(!jsDate.regional.hasOwnProperty(l)){l=jsDate.config.defaultLocale;}}
return l;};var day=24*60*60*1000;var addZeros=function(num,digits){num=String(num);var i=digits-num.length;var s=String(Math.pow(10,i)).slice(1);return s.concat(num);};var multipliers={millisecond:1,second:1000,minute:60*1000,hour:60*60*1000,day:day,week:7*day,month:{add:function(d,number){multipliers.year.add(d,Math[number>0?'floor':'ceil'](number/12));var prevMonth=d.getMonth()+(number%12);if(prevMonth==12){prevMonth=0;d.setYear(d.getFullYear()+1);}else if(prevMonth==-1){prevMonth=11;d.setYear(d.getFullYear()-1);}
d.setMonth(prevMonth);},diff:function(d1,d2){var diffYears=d1.getFullYear()-d2.getFullYear();var diffMonths=d1.getMonth()-d2.getMonth()+(diffYears*12);var diffDays=d1.getDate()-d2.getDate();return diffMonths+(diffDays/30);}},year:{add:function(d,number){d.setYear(d.getFullYear()+Math[number>0?'floor':'ceil'](number));},diff:function(d1,d2){return multipliers.month.diff(d1,d2)/12;}}};for(var unit in multipliers){if(unit.substring(unit.length-1)!='s'){multipliers[unit+'s']=multipliers[unit];}}
var format=function(d,code,syntax){if(jsDate.formats[syntax]["shortcuts"][code]){return jsDate.strftime(d,jsDate.formats[syntax]["shortcuts"][code],syntax);}else{var getter=(jsDate.formats[syntax]["codes"][code]||'').split('.');var nbr=d['get'+getter[0]]?d['get'+getter[0]]():'';if(getter[1]){nbr=addZeros(nbr,getter[1]);}
return nbr;}};jsDate.strftime=function(d,formatString,syntax,locale){var syn='perl';var loc=jsDate.regional.getLocale();if(syntax&&jsDate.formats.hasOwnProperty(syntax)){syn=syntax;}
else if(syntax&&jsDate.regional.hasOwnProperty(syntax)){loc=syntax;}
if(locale&&jsDate.formats.hasOwnProperty(locale)){syn=locale;}
else if(locale&&jsDate.regional.hasOwnProperty(locale)){loc=locale;}
if(get_type(d)!="[object Object]"||d._type!="jsDate"){d=new jsDate(d);d.locale=loc;}
if(!formatString){formatString=d.formatString||jsDate.regional[loc]['formatString'];}
var source=formatString||'%Y-%m-%d',result='',match;while(source.length>0){if(match=source.match(jsDate.formats[syn].codes.matcher)){result+=source.slice(0,match.index);result+=(match[1]||'')+format(d,match[2],syn);source=source.slice(match.index+match[0].length);}else{result+=source;source='';}}
return result;};jsDate.formats={ISO:'%Y-%m-%dT%H:%M:%S.%N%G',SQL:'%Y-%m-%d %H:%M:%S'};jsDate.formats.perl={codes:{matcher:/()%(#?(%|[a-z]))/i,Y:'FullYear',y:'ShortYear.2',m:'MonthNumber.2','#m':'MonthNumber',B:'MonthName',b:'AbbrMonthName',d:'Date.2','#d':'Date',e:'Date',A:'DayName',a:'AbbrDayName',w:'Day',H:'Hours.2','#H':'Hours',I:'Hours12.2','#I':'Hours12',p:'AMPM',M:'Minutes.2','#M':'Minutes',S:'Seconds.2','#S':'Seconds',s:'Unix',N:'Milliseconds.3','#N':'Milliseconds',O:'TimezoneOffset',Z:'TimezoneName',G:'GmtOffset'},shortcuts:{F:'%Y-%m-%d',T:'%H:%M:%S',X:'%H:%M:%S',x:'%m/%d/%y',D:'%m/%d/%y','#c':'%a %b %e %H:%M:%S %Y',v:'%e-%b-%Y',R:'%H:%M',r:'%I:%M:%S %p',t:'\t',n:'\n','%':'%'}};jsDate.formats.php={codes:{matcher:/()%((%|[a-z]))/i,a:'AbbrDayName',A:'DayName',d:'Date.2',e:'Date',j:'DayOfYear.3',u:'DayOfWeek',w:'Day',U:'FullWeekOfYear.2',V:'IsoWeek.2',W:'WeekOfYear.2',b:'AbbrMonthName',B:'MonthName',m:'MonthNumber.2',h:'AbbrMonthName',C:'Century.2',y:'ShortYear.2',Y:'FullYear',H:'Hours.2',I:'Hours12.2',l:'Hours12',p:'AMPM',P:'AmPm',M:'Minutes.2',S:'Seconds.2',s:'Unix',O:'TimezoneOffset',z:'GmtOffset',Z:'TimezoneAbbr'},shortcuts:{D:'%m/%d/%y',F:'%Y-%m-%d',T:'%H:%M:%S',X:'%H:%M:%S',x:'%m/%d/%y',R:'%H:%M',r:'%I:%M:%S %p',t:'\t',n:'\n','%':'%'}};jsDate.createDate=function(date){if(date==null){return new Date();}
if(date instanceof Date){return date;}
if(typeof date=='number'){return new Date(date);}
var parsable=String(date).replace(/^\s*(.+)\s*$/g,'$1');parsable=parsable.replace(/^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,4})/,"$1/$2/$3");parsable=parsable.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{4})/i,"$1 $2 $3");var match=parsable.match(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i);if(match&&match.length>3){var m3=parseFloat(match[3]);var ny=jsDate.config.defaultCentury+m3;ny=String(ny);parsable=parsable.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i,match[1]+' '+match[2]+' '+ny);}
match=parsable.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})[^0-9]/);function h1(parsable,match){var m1=parseFloat(match[1]);var m2=parseFloat(match[2]);var m3=parseFloat(match[3]);var cent=jsDate.config.defaultCentury;var ny,nd,nm,str;if(m1>31){nd=m3;nm=m2;ny=cent+m1;}
else{nd=m2;nm=m1;ny=cent+m3;}
str=nm+'/'+nd+'/'+ny;return parsable.replace(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})/,str);}
if(match&&match.length>3){parsable=h1(parsable,match);}
var match=parsable.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})$/);if(match&&match.length>3){parsable=h1(parsable,match);}
var i=0;var length=jsDate.matchers.length;var pattern,ms,current=parsable,obj;while(i<length){ms=Date.parse(current);if(!isNaN(ms)){return new Date(ms);}
pattern=jsDate.matchers[i];if(typeof pattern=='function'){obj=pattern.call(jsDate,current);if(obj instanceof Date){return obj;}}else{current=parsable.replace(pattern[0],pattern[1]);}
i++;}
return NaN;};jsDate.daysInMonth=function(year,month){if(month==2){return new Date(year,1,29).getDate()==29?29:28;}
return[undefined,31,undefined,31,30,31,30,31,31,30,31,30,31][month];};jsDate.matchers=[[/(3[01]|[0-2]\d)\s*\.\s*(1[0-2]|0\d)\s*\.\s*([1-9]\d{3})/,'$2/$1/$3'],[/([1-9]\d{3})\s*-\s*(1[0-2]|0\d)\s*-\s*(3[01]|[0-2]\d)/,'$2/$3/$1'],function(str){var match=str.match(/^(?:(.+)\s+)?([012]?\d)(?:\s*\:\s*(\d\d))?(?:\s*\:\s*(\d\d(\.\d*)?))?\s*(am|pm)?\s*$/i);if(match){if(match[1]){var d=this.createDate(match[1]);if(isNaN(d)){return;}}else{var d=new Date();d.setMilliseconds(0);}
var hour=parseFloat(match[2]);if(match[6]){hour=match[6].toLowerCase()=='am'?(hour==12?0:hour):(hour==12?12:hour+12);}
d.setHours(hour,parseInt(match[3]||0,10),parseInt(match[4]||0,10),((parseFloat(match[5]||0))||0)*1000);return d;}
else{return str;}},function(str){var match=str.match(/^(?:(.+))[T|\s+]([012]\d)(?:\:(\d\d))(?:\:(\d\d))(?:\.\d+)([\+\-]\d\d\:\d\d)$/i);if(match){if(match[1]){var d=this.createDate(match[1]);if(isNaN(d)){return;}}else{var d=new Date();d.setMilliseconds(0);}
var hour=parseFloat(match[2]);d.setHours(hour,parseInt(match[3],10),parseInt(match[4],10),parseFloat(match[5])*1000);return d;}
else{return str;}},function(str){var match=str.match(/^([0-3]?\d)\s*[-\/.\s]{1}\s*([a-zA-Z]{3,9})\s*[-\/.\s]{1}\s*([0-3]?\d)$/);if(match){var d=new Date();var cent=jsDate.config.defaultCentury;var m1=parseFloat(match[1]);var m3=parseFloat(match[3]);var ny,nd,nm;if(m1>31){nd=m3;ny=cent+m1;}
else{nd=m1;ny=cent+m3;}
var nm=inArray(match[2],jsDate.regional[jsDate.regional.getLocale()]["monthNamesShort"]);if(nm==-1){nm=inArray(match[2],jsDate.regional[jsDate.regional.getLocale()]["monthNames"]);}
d.setFullYear(ny,nm,nd);d.setHours(0,0,0,0);return d;}
else{return str;}}];function inArray(elem,array){if(array.indexOf){return array.indexOf(elem);}
for(var i=0,length=array.length;i<length;i++){if(array[i]===elem){return i;}}
return-1;}
function get_type(thing){if(thing===null)return"[object Null]";return Object.prototype.toString.call(thing);}
$.jsDate=jsDate;$.jqplot.sprintf=function(){function pad(str,len,chr,leftJustify){var padding=(str.length>=len)?'':Array(1+len-str.length>>>0).join(chr);return leftJustify?str+padding:padding+str;}
function thousand_separate(value){var value_str=new String(value);for(var i=10;i>0;i--){if(value_str==(value_str=value_str.replace(/^(\d+)(\d{3})/,"$1"+$.jqplot.sprintf.thousandsSeparator+"$2")))break;}
return value_str;}
function justify(value,prefix,leftJustify,minWidth,zeroPad,htmlSpace){var diff=minWidth-value.length;if(diff>0){var spchar=' ';if(htmlSpace){spchar='&nbsp;';}
if(leftJustify||!zeroPad){value=pad(value,minWidth,spchar,leftJustify);}else{value=value.slice(0,prefix.length)+pad('',diff,'0',true)+value.slice(prefix.length);}}
return value;}
function formatBaseX(value,base,prefix,leftJustify,minWidth,precision,zeroPad,htmlSpace){var number=value>>>0;prefix=prefix&&number&&{'2':'0b','8':'0','16':'0x'}[base]||'';value=prefix+pad(number.toString(base),precision||0,'0',false);return justify(value,prefix,leftJustify,minWidth,zeroPad,htmlSpace);}
function formatString(value,leftJustify,minWidth,precision,zeroPad,htmlSpace){if(precision!=null){value=value.slice(0,precision);}
return justify(value,'',leftJustify,minWidth,zeroPad,htmlSpace);}
var a=arguments,i=0,format=a[i++];return format.replace($.jqplot.sprintf.regex,function(substring,valueIndex,flags,minWidth,_,precision,type){if(substring=='%%'){return'%';}
var leftJustify=false,positivePrefix='',zeroPad=false,prefixBaseX=false,htmlSpace=false,thousandSeparation=false;for(var j=0;flags&&j<flags.length;j++)switch(flags.charAt(j)){case' ':positivePrefix=' ';break;case'+':positivePrefix='+';break;case'-':leftJustify=true;break;case'0':zeroPad=true;break;case'#':prefixBaseX=true;break;case'&':htmlSpace=true;break;case'\'':thousandSeparation=true;break;}
if(!minWidth){minWidth=0;}
else if(minWidth=='*'){minWidth=+a[i++];}
else if(minWidth.charAt(0)=='*'){minWidth=+a[minWidth.slice(1,-1)];}
else{minWidth=+minWidth;}
if(minWidth<0){minWidth=-minWidth;leftJustify=true;}
if(!isFinite(minWidth)){throw new Error('$.jqplot.sprintf: (minimum-)width must be finite');}
if(!precision){precision='fFeE'.indexOf(type)>-1?6:(type=='d')?0:void(0);}
else if(precision=='*'){precision=+a[i++];}
else if(precision.charAt(0)=='*'){precision=+a[precision.slice(1,-1)];}
else{precision=+precision;}
var value=valueIndex?a[valueIndex.slice(0,-1)]:a[i++];switch(type){case's':{if(value==null){return'';}
return formatString(String(value),leftJustify,minWidth,precision,zeroPad,htmlSpace);}
case'c':return formatString(String.fromCharCode(+value),leftJustify,minWidth,precision,zeroPad,htmlSpace);case'b':return formatBaseX(value,2,prefixBaseX,leftJustify,minWidth,precision,zeroPad,htmlSpace);case'o':return formatBaseX(value,8,prefixBaseX,leftJustify,minWidth,precision,zeroPad,htmlSpace);case'x':return formatBaseX(value,16,prefixBaseX,leftJustify,minWidth,precision,zeroPad,htmlSpace);case'X':return formatBaseX(value,16,prefixBaseX,leftJustify,minWidth,precision,zeroPad,htmlSpace).toUpperCase();case'u':return formatBaseX(value,10,prefixBaseX,leftJustify,minWidth,precision,zeroPad,htmlSpace);case'i':{var number=parseInt(+value,10);if(isNaN(number)){return'';}
var prefix=number<0?'-':positivePrefix;var number_str=thousandSeparation?thousand_separate(String(Math.abs(number))):String(Math.abs(number));value=prefix+pad(number_str,precision,'0',false);return justify(value,prefix,leftJustify,minWidth,zeroPad,htmlSpace);}
case'd':{var number=Math.round(+value);if(isNaN(number)){return'';}
var prefix=number<0?'-':positivePrefix;var number_str=thousandSeparation?thousand_separate(String(Math.abs(number))):String(Math.abs(number));value=prefix+pad(number_str,precision,'0',false);return justify(value,prefix,leftJustify,minWidth,zeroPad,htmlSpace);}
case'e':case'E':case'f':case'F':case'g':case'G':{var number=+value;if(isNaN(number)){return'';}
var prefix=number<0?'-':positivePrefix;var method=['toExponential','toFixed','toPrecision']['efg'.indexOf(type.toLowerCase())];var textTransform=['toString','toUpperCase']['eEfFgG'.indexOf(type)%2];var number_str=Math.abs(number)[method](precision);number_str=thousandSeparation?thousand_separate(number_str):number_str;value=prefix+number_str;var justified=justify(value,prefix,leftJustify,minWidth,zeroPad,htmlSpace)[textTransform]();if($.jqplot.sprintf.decimalMark!=='.'&&$.jqplot.sprintf.decimalMark!==$.jqplot.sprintf.thousandsSeparator){return justified.replace(/\./,$.jqplot.sprintf.decimalMark);}else{return justified;}}
case'p':case'P':{var number=+value;if(isNaN(number)){return'';}
var prefix=number<0?'-':positivePrefix;var parts=String(Number(Math.abs(number)).toExponential()).split(/e|E/);var sd=(parts[0].indexOf('.')!=-1)?parts[0].length-1:parts[0].length;var zeros=(parts[1]<0)?-parts[1]-1:0;if(Math.abs(number)<1){if(sd+zeros<=precision){value=prefix+Math.abs(number).toPrecision(sd);}
else{if(sd<=precision-1){value=prefix+Math.abs(number).toExponential(sd-1);}
else{value=prefix+Math.abs(number).toExponential(precision-1);}}}
else{var prec=(sd<=precision)?sd:precision;value=prefix+Math.abs(number).toPrecision(prec);}
var textTransform=['toString','toUpperCase']['pP'.indexOf(type)%2];return justify(value,prefix,leftJustify,minWidth,zeroPad,htmlSpace)[textTransform]();}
case'n':return'';default:return substring;}});};$.jqplot.sprintf.thousandsSeparator=',';$.jqplot.sprintf.decimalMark='.';$.jqplot.sprintf.regex=/%%|%(\d+\$)?([-+#0&\' ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([nAscboxXuidfegpEGP])/g;$.jqplot.getSignificantFigures=function(number){var parts=String(Number(Math.abs(number)).toExponential()).split(/e|E/);var sd=(parts[0].indexOf('.')!=-1)?parts[0].length-1:parts[0].length;var zeros=(parts[1]<0)?-parts[1]-1:0;var expn=parseInt(parts[1],10);var dleft=(expn+1>0)?expn+1:0;var dright=(sd<=dleft)?0:sd-expn-1;return{significantDigits:sd,digitsLeft:dleft,digitsRight:dright,zeros:zeros,exponent:expn};};$.jqplot.getPrecision=function(number){return $.jqplot.getSignificantFigures(number).digitsRight;};})(jQuery);var backCompat=$.uiBackCompat!==false;$.jqplot.effects={effect:{}};var dataSpace="jqplot.storage.";$.extend($.jqplot.effects,{version:"1.9pre",save:function(element,set){for(var i=0;i<set.length;i++){if(set[i]!==null){element.data(dataSpace+set[i],element[0].style[set[i]]);}}},restore:function(element,set){for(var i=0;i<set.length;i++){if(set[i]!==null){element.css(set[i],element.data(dataSpace+set[i]));}}},setMode:function(el,mode){if(mode==="toggle"){mode=el.is(":hidden")?"show":"hide";}
return mode;},createWrapper:function(element){if(element.parent().is(".ui-effects-wrapper")){return element.parent();}
var props={width:element.outerWidth(true),height:element.outerHeight(true),"float":element.css("float")},wrapper=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),size={width:element.width(),height:element.height()},active=document.activeElement;element.wrap(wrapper);if(element[0]===active||$.contains(element[0],active)){$(active).focus();}
wrapper=element.parent();if(element.css("position")==="static"){wrapper.css({position:"relative"});element.css({position:"relative"});}else{$.extend(props,{position:element.css("position"),zIndex:element.css("z-index")});$.each(["top","left","bottom","right"],function(i,pos){props[pos]=element.css(pos);if(isNaN(parseInt(props[pos],10))){props[pos]="auto";}});element.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"});}
element.css(size);return wrapper.css(props).show();},removeWrapper:function(element){var active=document.activeElement;if(element.parent().is(".ui-effects-wrapper")){element.parent().replaceWith(element);if(element[0]===active||$.contains(element[0],active)){$(active).focus();}}
return element;}});function _normalizeArguments(effect,options,speed,callback){if($.isPlainObject(effect)){return effect;}
effect={effect:effect};if(options===undefined){options={};}
if($.isFunction(options)){callback=options;speed=null;options={};}
if($.type(options)==="number"||$.fx.speeds[options]){callback=speed;speed=options;options={};}
if($.isFunction(speed)){callback=speed;speed=null;}
if(options){$.extend(effect,options);}
speed=speed||options.duration;effect.duration=$.fx.off?0:typeof speed==="number"?speed:speed in $.fx.speeds?$.fx.speeds[speed]:$.fx.speeds._default;effect.complete=callback||options.complete;return effect;}
function standardSpeed(speed){if(!speed||typeof speed==="number"||$.fx.speeds[speed]){return true;}
if(typeof speed==="string"&&!$.jqplot.effects.effect[speed]){if(backCompat&&$.jqplot.effects[speed]){return false;}
return true;}
return false;}
$.fn.extend({jqplotEffect:function(effect,options,speed,callback){var args=_normalizeArguments.apply(this,arguments),mode=args.mode,queue=args.queue,effectMethod=$.jqplot.effects.effect[args.effect],oldEffectMethod=!effectMethod&&backCompat&&$.jqplot.effects[args.effect];if($.fx.off||!(effectMethod||oldEffectMethod)){if(mode){return this[mode](args.duration,args.complete);}else{return this.each(function(){if(args.complete){args.complete.call(this);}});}}
function run(next){var elem=$(this),complete=args.complete,mode=args.mode;function done(){if($.isFunction(complete)){complete.call(elem[0]);}
if($.isFunction(next)){next();}}
if(elem.is(":hidden")?mode==="hide":mode==="show"){done();}else{effectMethod.call(elem[0],args,done);}}
if(effectMethod){return queue===false?this.each(run):this.queue(queue||"fx",run);}else{return oldEffectMethod.call(this,{options:args,duration:args.duration,callback:args.complete,mode:args.mode});}}});var rvertical=/up|down|vertical/,rpositivemotion=/up|left|vertical|horizontal/;$.jqplot.effects.effect.blind=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.jqplot.effects.setMode(el,o.mode||"hide"),direction=o.direction||"up",vertical=rvertical.test(direction),ref=vertical?"height":"width",ref2=vertical?"top":"left",motion=rpositivemotion.test(direction),animation={},show=mode==="show",wrapper,distance,top;if(el.parent().is(".ui-effects-wrapper")){$.jqplot.effects.save(el.parent(),props);}else{$.jqplot.effects.save(el,props);}
el.show();top=parseInt(el.css('top'),10);wrapper=$.jqplot.effects.createWrapper(el).css({overflow:"hidden"});distance=vertical?wrapper[ref]()+top:wrapper[ref]();animation[ref]=show?String(distance):'0';if(!motion){el.css(vertical?"bottom":"right",0).css(vertical?"top":"left","").css({position:"absolute"});animation[ref2]=show?'0':String(distance);}
if(show){wrapper.css(ref,0);if(!motion){wrapper.css(ref2,distance);}}
wrapper.animate(animation,{duration:o.duration,easing:o.easing,queue:false,complete:function(){if(mode==="hide"){el.hide();}
$.jqplot.effects.restore(el,props);$.jqplot.effects.removeWrapper(el);done();}});};

(function(d){d.jqplot.BarRenderer=function(){d.jqplot.LineRenderer.call(this)};d.jqplot.BarRenderer.prototype=new d.jqplot.LineRenderer();d.jqplot.BarRenderer.prototype.constructor=d.jqplot.BarRenderer;d.jqplot.BarRenderer.prototype.init=function(o,q){this.barPadding=8;this.barMargin=10;this.barDirection="vertical";this.barWidth=null;this.shadowOffset=2;this.shadowDepth=5;this.shadowAlpha=0.08;this.waterfall=false;this.groups=1;this.varyBarColor=false;this.highlightMouseOver=true;this.highlightMouseDown=false;this.highlightColors=[];this.transposedData=true;this.renderer.animation={show:false,direction:"down",speed:3000,_supported:true};this._type="bar";if(o.highlightMouseDown&&o.highlightMouseOver==null){o.highlightMouseOver=false}d.extend(true,this,o);d.extend(true,this.renderer,o);this.fill=true;if(this.barDirection==="horizontal"&&this.rendererOptions.animation&&this.rendererOptions.animation.direction==null){this.renderer.animation.direction="left"}if(this.waterfall){this.fillToZero=false;this.disableStack=true}if(this.barDirection=="vertical"){this._primaryAxis="_xaxis";this._stackAxis="y";this.fillAxis="y"}else{this._primaryAxis="_yaxis";this._stackAxis="x";this.fillAxis="x"}this._highlightedPoint=null;this._plotSeriesInfo=null;this._dataColors=[];this._barPoints=[];var p={lineJoin:"miter",lineCap:"round",fill:true,isarc:false,strokeStyle:this.color,fillStyle:this.color,closePath:this.fill};this.renderer.shapeRenderer.init(p);var n={lineJoin:"miter",lineCap:"round",fill:true,isarc:false,angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,depth:this.shadowDepth,closePath:this.fill};this.renderer.shadowRenderer.init(n);q.postInitHooks.addOnce(h);q.postDrawHooks.addOnce(j);q.eventListenerHooks.addOnce("jqplotMouseMove",b);q.eventListenerHooks.addOnce("jqplotMouseDown",a);q.eventListenerHooks.addOnce("jqplotMouseUp",l);q.eventListenerHooks.addOnce("jqplotClick",e);q.eventListenerHooks.addOnce("jqplotRightClick",m)};function g(t,p,o,w){if(this.rendererOptions.barDirection=="horizontal"){this._stackAxis="x";this._primaryAxis="_yaxis"}if(this.rendererOptions.waterfall==true){this._data=d.extend(true,[],this.data);var s=0;var u=(!this.rendererOptions.barDirection||this.rendererOptions.barDirection==="vertical"||this.transposedData===false)?1:0;for(var q=0;q<this.data.length;q++){s+=this.data[q][u];if(q>0){this.data[q][u]+=this.data[q-1][u]}}this.data[this.data.length]=(u==1)?[this.data.length+1,s]:[s,this.data.length+1];this._data[this._data.length]=(u==1)?[this._data.length+1,s]:[s,this._data.length+1]}if(this.rendererOptions.groups>1){this.breakOnNull=true;var n=this.data.length;var v=parseInt(n/this.rendererOptions.groups,10);var r=0;for(var q=v;q<n;q+=v){this.data.splice(q+r,0,[null,null]);r++}for(q=0;q<this.data.length;q++){if(this._primaryAxis=="_xaxis"){this.data[q][0]=q+1}else{this.data[q][1]=q+1}}}}d.jqplot.preSeriesInitHooks.push(g);d.jqplot.BarRenderer.prototype.calcSeriesNumbers=function(){var r=0;var t=0;var q=this[this._primaryAxis];var p,o,u;for(var n=0;n<q._series.length;n++){o=q._series[n];if(o===this){u=n}if(o.renderer.constructor==d.jqplot.BarRenderer){r+=o.data.length;t+=1}}return[r,t,u]};d.jqplot.BarRenderer.prototype.setBarWidth=function(){var q;var n=0;var o=0;var t=this[this._primaryAxis];var x,r,v;var w=this._plotSeriesInfo=this.renderer.calcSeriesNumbers.call(this);n=w[0];o=w[1];var u=t.numberTicks;var p=(u-1)/2;if(t.name=="xaxis"||t.name=="x2axis"){if(this._stack){this.barWidth=(t._offsets.max-t._offsets.min)/n*o-this.barMargin}else{this.barWidth=((t._offsets.max-t._offsets.min)/p-this.barPadding*(o-1)-this.barMargin*2)/o}}else{if(this._stack){this.barWidth=(t._offsets.min-t._offsets.max)/n*o-this.barMargin}else{this.barWidth=((t._offsets.min-t._offsets.max)/p-this.barPadding*(o-1)-this.barMargin*2)/o}}return[n,o]};function f(o){var q=[];for(var s=0;s<o.length;s++){var r=d.jqplot.getColorComponents(o[s]);var n=[r[0],r[1],r[2]];var t=n[0]+n[1]+n[2];for(var p=0;p<3;p++){n[p]=(t>570)?n[p]*0.8:n[p]+0.3*(255-n[p]);n[p]=parseInt(n[p],10)}q.push("rgb("+n[0]+","+n[1]+","+n[2]+")")}return q}function i(v,u,s,t,o){var q=v,w=v-1,n,p,r=(o==="x")?0:1;if(q>0){p=t.series[w]._plotData[u][r];if((s*p)<0){n=i(w,u,s,t,o)}else{n=t.series[w].gridData[u][r]}}else{n=(r===0)?t.series[q]._xaxis.series_u2p(0):t.series[q]._yaxis.series_u2p(0)}return n}d.jqplot.BarRenderer.prototype.draw=function(E,L,q,G){var I;var A=d.extend({},q);var w=(A.shadow!=undefined)?A.shadow:this.shadow;var O=(A.showLine!=undefined)?A.showLine:this.showLine;var F=(A.fill!=undefined)?A.fill:this.fill;var p=this.xaxis;var J=this.yaxis;var y=this._xaxis.series_u2p;var K=this._yaxis.series_u2p;var D,C;this._dataColors=[];this._barPoints=[];if(this.barWidth==null){this.renderer.setBarWidth.call(this)}var N=this._plotSeriesInfo=this.renderer.calcSeriesNumbers.call(this);var x=N[0];var v=N[1];var s=N[2];var H=[];if(this._stack){this._barNudge=0}else{this._barNudge=(-Math.abs(v/2-0.5)+s)*(this.barWidth+this.barPadding)}if(O){var u=new d.jqplot.ColorGenerator(this.negativeSeriesColors);var B=new d.jqplot.ColorGenerator(this.seriesColors);var M=u.get(this.index);if(!this.useNegativeColors){M=A.fillStyle}var t=A.fillStyle;var r;var P;var o;if(this.barDirection=="vertical"){for(var I=0;I<L.length;I++){if(!this._stack&&this.data[I][1]==null){continue}H=[];r=L[I][0]+this._barNudge;if(this._stack&&this._prevGridData.length){o=i(this.index,I,this._plotData[I][1],G,"y")}else{if(this.fillToZero){o=this._yaxis.series_u2p(0)}else{if(this.waterfall&&I>0&&I<this.gridData.length-1){o=this.gridData[I-1][1]}else{if(this.waterfall&&I==0&&I<this.gridData.length-1){if(this._yaxis.min<=0&&this._yaxis.max>=0){o=this._yaxis.series_u2p(0)}else{if(this._yaxis.min>0){o=E.canvas.height}else{o=0}}}else{if(this.waterfall&&I==this.gridData.length-1){if(this._yaxis.min<=0&&this._yaxis.max>=0){o=this._yaxis.series_u2p(0)}else{if(this._yaxis.min>0){o=E.canvas.height}else{o=0}}}else{o=E.canvas.height}}}}}if((this.fillToZero&&this._plotData[I][1]<0)||(this.waterfall&&this._data[I][1]<0)){if(this.varyBarColor&&!this._stack){if(this.useNegativeColors){A.fillStyle=u.next()}else{A.fillStyle=B.next()}}else{A.fillStyle=M}}else{if(this.varyBarColor&&!this._stack){A.fillStyle=B.next()}else{A.fillStyle=t}}if(!this.fillToZero||this._plotData[I][1]>=0){H.push([r-this.barWidth/2,o]);H.push([r-this.barWidth/2,L[I][1]]);H.push([r+this.barWidth/2,L[I][1]]);H.push([r+this.barWidth/2,o])}else{H.push([r-this.barWidth/2,L[I][1]]);H.push([r-this.barWidth/2,o]);H.push([r+this.barWidth/2,o]);H.push([r+this.barWidth/2,L[I][1]])}this._barPoints.push(H);if(w&&!this._stack){var z=d.extend(true,{},A);delete z.fillStyle;this.renderer.shadowRenderer.draw(E,H,z)}var n=A.fillStyle||this.color;this._dataColors.push(n);this.renderer.shapeRenderer.draw(E,H,A)}}else{if(this.barDirection=="horizontal"){for(var I=0;I<L.length;I++){if(!this._stack&&this.data[I][0]==null){continue}H=[];r=L[I][1]-this._barNudge;P;if(this._stack&&this._prevGridData.length){P=i(this.index,I,this._plotData[I][0],G,"x")}else{if(this.fillToZero){P=this._xaxis.series_u2p(0)}else{if(this.waterfall&&I>0&&I<this.gridData.length-1){P=this.gridData[I-1][1]}else{if(this.waterfall&&I==0&&I<this.gridData.length-1){if(this._xaxis.min<=0&&this._xaxis.max>=0){P=this._xaxis.series_u2p(0)}else{if(this._xaxis.min>0){P=0}else{P=E.canvas.width}}}else{if(this.waterfall&&I==this.gridData.length-1){if(this._xaxis.min<=0&&this._xaxis.max>=0){P=this._xaxis.series_u2p(0)}else{if(this._xaxis.min>0){P=0}else{P=E.canvas.width}}}else{P=0}}}}}if((this.fillToZero&&this._plotData[I][1]<0)||(this.waterfall&&this._data[I][1]<0)){if(this.varyBarColor&&!this._stack){if(this.useNegativeColors){A.fillStyle=u.next()}else{A.fillStyle=B.next()}}}else{if(this.varyBarColor&&!this._stack){A.fillStyle=B.next()}else{A.fillStyle=t}}if(!this.fillToZero||this._plotData[I][0]>=0){H.push([P,r+this.barWidth/2]);H.push([P,r-this.barWidth/2]);H.push([L[I][0],r-this.barWidth/2]);H.push([L[I][0],r+this.barWidth/2])}else{H.push([L[I][0],r+this.barWidth/2]);H.push([L[I][0],r-this.barWidth/2]);H.push([P,r-this.barWidth/2]);H.push([P,r+this.barWidth/2])}this._barPoints.push(H);if(w&&!this._stack){var z=d.extend(true,{},A);delete z.fillStyle;this.renderer.shadowRenderer.draw(E,H,z)}var n=A.fillStyle||this.color;this._dataColors.push(n);this.renderer.shapeRenderer.draw(E,H,A)}}}}if(this.highlightColors.length==0){this.highlightColors=d.jqplot.computeHighlightColors(this._dataColors)}else{if(typeof(this.highlightColors)=="string"){var N=this.highlightColors;this.highlightColors=[];for(var I=0;I<this._dataColors.length;I++){this.highlightColors.push(N)}}}};d.jqplot.BarRenderer.prototype.drawShadow=function(z,G,p,B){var D;var w=(p!=undefined)?p:{};var t=(w.shadow!=undefined)?w.shadow:this.shadow;var I=(w.showLine!=undefined)?w.showLine:this.showLine;var A=(w.fill!=undefined)?w.fill:this.fill;var o=this.xaxis;var E=this.yaxis;var v=this._xaxis.series_u2p;var F=this._yaxis.series_u2p;var y,C,x,u,s,r;if(this._stack&&this.shadow){if(this.barWidth==null){this.renderer.setBarWidth.call(this)}var H=this._plotSeriesInfo=this.renderer.calcSeriesNumbers.call(this);u=H[0];s=H[1];r=H[2];if(this._stack){this._barNudge=0}else{this._barNudge=(-Math.abs(s/2-0.5)+r)*(this.barWidth+this.barPadding)}if(I){if(this.barDirection=="vertical"){for(var D=0;D<G.length;D++){if(this.data[D][1]==null){continue}C=[];var q=G[D][0]+this._barNudge;var n;if(this._stack&&this._prevGridData.length){n=i(this.index,D,this._plotData[D][1],B,"y")}else{if(this.fillToZero){n=this._yaxis.series_u2p(0)}else{n=z.canvas.height}}C.push([q-this.barWidth/2,n]);C.push([q-this.barWidth/2,G[D][1]]);C.push([q+this.barWidth/2,G[D][1]]);C.push([q+this.barWidth/2,n]);this.renderer.shadowRenderer.draw(z,C,w)}}else{if(this.barDirection=="horizontal"){for(var D=0;D<G.length;D++){if(this.data[D][0]==null){continue}C=[];var q=G[D][1]-this._barNudge;var J;if(this._stack&&this._prevGridData.length){J=i(this.index,D,this._plotData[D][0],B,"x")}else{if(this.fillToZero){J=this._xaxis.series_u2p(0)}else{J=0}}C.push([J,q+this.barWidth/2]);C.push([G[D][0],q+this.barWidth/2]);C.push([G[D][0],q-this.barWidth/2]);C.push([J,q-this.barWidth/2]);this.renderer.shadowRenderer.draw(z,C,w)}}}}}};function h(q,p,n){for(var o=0;o<this.series.length;o++){if(this.series[o].renderer.constructor==d.jqplot.BarRenderer){if(this.series[o].highlightMouseOver){this.series[o].highlightMouseDown=false}}}}function j(){if(this.plugins.barRenderer&&this.plugins.barRenderer.highlightCanvas){this.plugins.barRenderer.highlightCanvas.resetCanvas();this.plugins.barRenderer.highlightCanvas=null}this.plugins.barRenderer={highlightedSeriesIndex:null};this.plugins.barRenderer.highlightCanvas=new d.jqplot.GenericCanvas();this.eventCanvas._elem.before(this.plugins.barRenderer.highlightCanvas.createElement(this._gridPadding,"jqplot-barRenderer-highlight-canvas",this._plotDimensions,this));this.plugins.barRenderer.highlightCanvas.setContext();this.eventCanvas._elem.bind("mouseleave",{plot:this},function(n){k(n.data.plot)})}function c(u,t,q,p){var o=u.series[t];var n=u.plugins.barRenderer.highlightCanvas;n._ctx.clearRect(0,0,n._ctx.canvas.width,n._ctx.canvas.height);o._highlightedPoint=q;u.plugins.barRenderer.highlightedSeriesIndex=t;var r={fillStyle:o.highlightColors[q]};o.renderer.shapeRenderer.draw(n._ctx,p,r);n=null}function k(p){var n=p.plugins.barRenderer.highlightCanvas;n._ctx.clearRect(0,0,n._ctx.canvas.width,n._ctx.canvas.height);for(var o=0;o<p.series.length;o++){p.series[o]._highlightedPoint=null}p.plugins.barRenderer.highlightedSeriesIndex=null;p.target.trigger("jqplotDataUnhighlight");n=null}function b(r,q,u,t,s){if(t){var p=[t.seriesIndex,t.pointIndex,t.data];var o=jQuery.Event("jqplotDataMouseOver");o.pageX=r.pageX;o.pageY=r.pageY;s.target.trigger(o,p);if(s.series[p[0]].highlightMouseOver&&!(p[0]==s.plugins.barRenderer.highlightedSeriesIndex&&p[1]==s.series[p[0]]._highlightedPoint)){var n=jQuery.Event("jqplotDataHighlight");n.which=r.which;n.pageX=r.pageX;n.pageY=r.pageY;s.target.trigger(n,p);c(s,t.seriesIndex,t.pointIndex,t.points)}}else{if(t==null){k(s)}}}function a(q,p,t,s,r){if(s){var o=[s.seriesIndex,s.pointIndex,s.data];if(r.series[o[0]].highlightMouseDown&&!(o[0]==r.plugins.barRenderer.highlightedSeriesIndex&&o[1]==r.series[o[0]]._highlightedPoint)){var n=jQuery.Event("jqplotDataHighlight");n.which=q.which;n.pageX=q.pageX;n.pageY=q.pageY;r.target.trigger(n,o);c(r,s.seriesIndex,s.pointIndex,s.points)}}else{if(s==null){k(r)}}}function l(p,o,s,r,q){var n=q.plugins.barRenderer.highlightedSeriesIndex;if(n!=null&&q.series[n].highlightMouseDown){k(q)}}function e(q,p,t,s,r){if(s){var o=[s.seriesIndex,s.pointIndex,s.data];var n=jQuery.Event("jqplotDataClick");n.which=q.which;n.pageX=q.pageX;n.pageY=q.pageY;r.target.trigger(n,o)}}function m(r,q,u,t,s){if(t){var p=[t.seriesIndex,t.pointIndex,t.data];var n=s.plugins.barRenderer.highlightedSeriesIndex;if(n!=null&&s.series[n].highlightMouseDown){k(s)}var o=jQuery.Event("jqplotDataRightClick");o.which=r.which;o.pageX=r.pageX;o.pageY=r.pageY;s.target.trigger(o,p)}}})(jQuery);

(function(a){a.jqplot.CategoryAxisRenderer=function(b){a.jqplot.LinearAxisRenderer.call(this);this.sortMergedLabels=false};a.jqplot.CategoryAxisRenderer.prototype=new a.jqplot.LinearAxisRenderer();a.jqplot.CategoryAxisRenderer.prototype.constructor=a.jqplot.CategoryAxisRenderer;a.jqplot.CategoryAxisRenderer.prototype.init=function(e){this.groups=1;this.groupLabels=[];this._groupLabels=[];this._grouped=false;this._barsPerGroup=null;a.extend(true,this,{tickOptions:{formatString:"%d"}},e);var b=this._dataBounds;for(var f=0;f<this._series.length;f++){var g=this._series[f];if(g.groups){this.groups=g.groups}var h=g.data;for(var c=0;c<h.length;c++){if(this.name=="xaxis"||this.name=="x2axis"){if(h[c][0]<b.min||b.min==null){b.min=h[c][0]}if(h[c][0]>b.max||b.max==null){b.max=h[c][0]}}else{if(h[c][1]<b.min||b.min==null){b.min=h[c][1]}if(h[c][1]>b.max||b.max==null){b.max=h[c][1]}}}}if(this.groupLabels.length){this.groups=this.groupLabels.length}};a.jqplot.CategoryAxisRenderer.prototype.createTicks=function(){var D=this._ticks;var z=this.ticks;var F=this.name;var C=this._dataBounds;var v,A;var q,w;var d,c;var b,x;if(z.length){if(this.groups>1&&!this._grouped){var r=z.length;var p=parseInt(r/this.groups,10);var e=0;for(var x=p;x<r;x+=p){z.splice(x+e,0," ");e++}this._grouped=true}this.min=0.5;this.max=z.length+0.5;var m=this.max-this.min;this.numberTicks=2*z.length+1;for(x=0;x<z.length;x++){b=this.min+2*x*m/(this.numberTicks-1);var h=new this.tickRenderer(this.tickOptions);h.showLabel=false;h.setTick(b,this.name);this._ticks.push(h);var h=new this.tickRenderer(this.tickOptions);h.label=z[x];h.showMark=false;h.showGridline=false;h.setTick(b+0.5,this.name);this._ticks.push(h)}var h=new this.tickRenderer(this.tickOptions);h.showLabel=false;h.setTick(b+1,this.name);this._ticks.push(h)}else{if(F=="xaxis"||F=="x2axis"){v=this._plotDimensions.width}else{v=this._plotDimensions.height}if(this.min!=null&&this.max!=null&&this.numberTicks!=null){this.tickInterval=null}if(this.min!=null&&this.max!=null&&this.tickInterval!=null){if(parseInt((this.max-this.min)/this.tickInterval,10)!=(this.max-this.min)/this.tickInterval){this.tickInterval=null}}var y=[];var B=0;var q=0.5;var w,E;var f=false;for(var x=0;x<this._series.length;x++){var k=this._series[x];for(var u=0;u<k.data.length;u++){if(this.name=="xaxis"||this.name=="x2axis"){E=k.data[u][0]}else{E=k.data[u][1]}if(a.inArray(E,y)==-1){f=true;B+=1;y.push(E)}}}if(f&&this.sortMergedLabels){y.sort(function(j,i){return j-i})}this.ticks=y;for(var x=0;x<this._series.length;x++){var k=this._series[x];for(var u=0;u<k.data.length;u++){if(this.name=="xaxis"||this.name=="x2axis"){E=k.data[u][0]}else{E=k.data[u][1]}var n=a.inArray(E,y)+1;if(this.name=="xaxis"||this.name=="x2axis"){k.data[u][0]=n}else{k.data[u][1]=n}}}if(this.groups>1&&!this._grouped){var r=y.length;var p=parseInt(r/this.groups,10);var e=0;for(var x=p;x<r;x+=p+1){y[x]=" "}this._grouped=true}w=B+0.5;if(this.numberTicks==null){this.numberTicks=2*B+1}var m=w-q;this.min=q;this.max=w;var o=0;var g=parseInt(3+v/10,10);var p=parseInt(B/g,10);if(this.tickInterval==null){this.tickInterval=m/(this.numberTicks-1)}for(var x=0;x<this.numberTicks;x++){b=this.min+x*this.tickInterval;var h=new this.tickRenderer(this.tickOptions);if(x/2==parseInt(x/2,10)){h.showLabel=false;h.showMark=true}else{if(p>0&&o<p){h.showLabel=false;o+=1}else{h.showLabel=true;o=0}h.label=h.formatter(h.formatString,y[(x-1)/2]);h.showMark=false;h.showGridline=false}h.setTick(b,this.name);this._ticks.push(h)}}};a.jqplot.CategoryAxisRenderer.prototype.draw=function(b,j){if(this.show){this.renderer.createTicks.call(this);var h=0;var c;if(this._elem){this._elem.emptyForce()}this._elem=this._elem||a('<div class="jqplot-axis jqplot-'+this.name+'" style="position:absolute;"></div>');if(this.name=="xaxis"||this.name=="x2axis"){this._elem.width(this._plotDimensions.width)}else{this._elem.height(this._plotDimensions.height)}this.labelOptions.axis=this.name;this._label=new this.labelRenderer(this.labelOptions);if(this._label.show){var g=this._label.draw(b,j);g.appendTo(this._elem)}var f=this._ticks;for(var e=0;e<f.length;e++){var d=f[e];if(d.showLabel&&(!d.isMinorTick||this.showMinorTicks)){var g=d.draw(b,j);g.appendTo(this._elem)}}this._groupLabels=[];for(var e=0;e<this.groupLabels.length;e++){var g=a('<div style="position:absolute;" class="jqplot-'+this.name+'-groupLabel"></div>');g.html(this.groupLabels[e]);this._groupLabels.push(g);g.appendTo(this._elem)}}return this._elem};a.jqplot.CategoryAxisRenderer.prototype.set=function(){var e=0;var m;var k=0;var f=0;var d=(this._label==null)?false:this._label.show;if(this.show){var n=this._ticks;for(var c=0;c<n.length;c++){var g=n[c];if(g.showLabel&&(!g.isMinorTick||this.showMinorTicks)){if(this.name=="xaxis"||this.name=="x2axis"){m=g._elem.outerHeight(true)}else{m=g._elem.outerWidth(true)}if(m>e){e=m}}}var j=0;for(var c=0;c<this._groupLabels.length;c++){var b=this._groupLabels[c];if(this.name=="xaxis"||this.name=="x2axis"){m=b.outerHeight(true)}else{m=b.outerWidth(true)}if(m>j){j=m}}if(d){k=this._label._elem.outerWidth(true);f=this._label._elem.outerHeight(true)}if(this.name=="xaxis"){e+=j+f;this._elem.css({height:e+"px",left:"0px",bottom:"0px"})}else{if(this.name=="x2axis"){e+=j+f;this._elem.css({height:e+"px",left:"0px",top:"0px"})}else{if(this.name=="yaxis"){e+=j+k;this._elem.css({width:e+"px",left:"0px",top:"0px"});if(d&&this._label.constructor==a.jqplot.AxisLabelRenderer){this._label._elem.css("width",k+"px")}}else{e+=j+k;this._elem.css({width:e+"px",right:"0px",top:"0px"});if(d&&this._label.constructor==a.jqplot.AxisLabelRenderer){this._label._elem.css("width",k+"px")}}}}}};a.jqplot.CategoryAxisRenderer.prototype.pack=function(e,c){var C=this._ticks;var v=this.max;var s=this.min;var n=c.max;var l=c.min;var q=(this._label==null)?false:this._label.show;var x;for(var r in e){this._elem.css(r,e[r])}this._offsets=c;var g=n-l;var k=v-s;this.p2u=function(h){return(h-l)*k/g+s};this.u2p=function(h){return(h-s)*g/k+l};if(this.name=="xaxis"||this.name=="x2axis"){this.series_u2p=function(h){return(h-s)*g/k};this.series_p2u=function(h){return h*k/g+s}}else{this.series_u2p=function(h){return(h-v)*g/k};this.series_p2u=function(h){return h*k/g+v}}if(this.show){if(this.name=="xaxis"||this.name=="x2axis"){for(x=0;x<C.length;x++){var o=C[x];if(o.show&&o.showLabel){var b;if(o.constructor==a.jqplot.CanvasAxisTickRenderer&&o.angle){var A=(this.name=="xaxis")?1:-1;switch(o.labelPosition){case"auto":if(A*o.angle<0){b=-o.getWidth()+o._textRenderer.height*Math.sin(-o._textRenderer.angle)/2}else{b=-o._textRenderer.height*Math.sin(o._textRenderer.angle)/2}break;case"end":b=-o.getWidth()+o._textRenderer.height*Math.sin(-o._textRenderer.angle)/2;break;case"start":b=-o._textRenderer.height*Math.sin(o._textRenderer.angle)/2;break;case"middle":b=-o.getWidth()/2+o._textRenderer.height*Math.sin(-o._textRenderer.angle)/2;break;default:b=-o.getWidth()/2+o._textRenderer.height*Math.sin(-o._textRenderer.angle)/2;break}}else{b=-o.getWidth()/2}var D=this.u2p(o.value)+b+"px";o._elem.css("left",D);o.pack()}}var z=["bottom",0];if(q){var m=this._label._elem.outerWidth(true);this._label._elem.css("left",l+g/2-m/2+"px");if(this.name=="xaxis"){this._label._elem.css("bottom","0px");z=["bottom",this._label._elem.outerHeight(true)]}else{this._label._elem.css("top","0px");z=["top",this._label._elem.outerHeight(true)]}this._label.pack()}var d=parseInt(this._ticks.length/this.groups,10);for(x=0;x<this._groupLabels.length;x++){var B=0;var f=0;for(var u=x*d;u<=(x+1)*d;u++){if(this._ticks[u]._elem&&this._ticks[u].label!=" "){var o=this._ticks[u]._elem;var r=o.position();B+=r.left+o.outerWidth(true)/2;f++}}B=B/f;this._groupLabels[x].css({left:(B-this._groupLabels[x].outerWidth(true)/2)});this._groupLabels[x].css(z[0],z[1])}}else{for(x=0;x<C.length;x++){var o=C[x];if(o.show&&o.showLabel){var b;if(o.constructor==a.jqplot.CanvasAxisTickRenderer&&o.angle){var A=(this.name=="yaxis")?1:-1;switch(o.labelPosition){case"auto":case"end":if(A*o.angle<0){b=-o._textRenderer.height*Math.cos(-o._textRenderer.angle)/2}else{b=-o.getHeight()+o._textRenderer.height*Math.cos(o._textRenderer.angle)/2}break;case"start":if(o.angle>0){b=-o._textRenderer.height*Math.cos(-o._textRenderer.angle)/2}else{b=-o.getHeight()+o._textRenderer.height*Math.cos(o._textRenderer.angle)/2}break;case"middle":b=-o.getHeight()/2;break;default:b=-o.getHeight()/2;break}}else{b=-o.getHeight()/2}var D=this.u2p(o.value)+b+"px";o._elem.css("top",D);o.pack()}}var z=["left",0];if(q){var y=this._label._elem.outerHeight(true);this._label._elem.css("top",n-g/2-y/2+"px");if(this.name=="yaxis"){this._label._elem.css("left","0px");z=["left",this._label._elem.outerWidth(true)]}else{this._label._elem.css("right","0px");z=["right",this._label._elem.outerWidth(true)]}this._label.pack()}var d=parseInt(this._ticks.length/this.groups,10);for(x=0;x<this._groupLabels.length;x++){var B=0;var f=0;for(var u=x*d;u<=(x+1)*d;u++){if(this._ticks[u]._elem&&this._ticks[u].label!=" "){var o=this._ticks[u]._elem;var r=o.position();B+=r.top+o.outerHeight()/2;f++}}B=B/f;this._groupLabels[x].css({top:B-this._groupLabels[x].outerHeight()/2});this._groupLabels[x].css(z[0],z[1])}}}}})(jQuery);

(function($){$.jqplot.PointLabels=function(options){this.show=$.jqplot.config.enablePlugins;this.location='n';this.labelsFromSeries=false;this.seriesLabelIndex=null;this.labels=[];this._labels=[];this.stackedValue=false;this.ypadding=6;this.xpadding=6;this.escapeHTML=true;this.edgeTolerance=-5;this.formatter=$.jqplot.DefaultTickFormatter;this.formatString='';this.hideZeros=false;this._elems=[];$.extend(true,this,options);};var locations=['nw','n','ne','e','se','s','sw','w'];var locationIndicies={'nw':0,'n':1,'ne':2,'e':3,'se':4,'s':5,'sw':6,'w':7};var oppositeLocations=['se','s','sw','w','nw','n','ne','e'];$.jqplot.PointLabels.init=function(target,data,seriesDefaults,opts,plot){var options=$.extend(true,{},seriesDefaults,opts);options.pointLabels=options.pointLabels||{};if(this.renderer.constructor===$.jqplot.BarRenderer&&this.barDirection==='horizontal'&&!options.pointLabels.location){options.pointLabels.location='e';}
this.plugins.pointLabels=new $.jqplot.PointLabels(options.pointLabels);this.plugins.pointLabels.setLabels.call(this);};$.jqplot.PointLabels.prototype.setLabels=function(){var p=this.plugins.pointLabels;var labelIdx;if(p.seriesLabelIndex!=null){labelIdx=p.seriesLabelIndex;}
else if(this.renderer.constructor===$.jqplot.BarRenderer&&this.barDirection==='horizontal'){labelIdx=0;}
else{labelIdx=(this._plotData.length===0)?0:this._plotData[0].length-1;}
p._labels=[];if(p.labels.length===0||p.labelsFromSeries){if(p.stackedValue){if(this._plotData.length&&this._plotData[0].length){for(var i=0;i<this._plotData.length;i++){p._labels.push(this._plotData[i][labelIdx]);}}}
else{var d=this.data;if(this.renderer.constructor===$.jqplot.BarRenderer&&this.waterfall){d=this._data;}
if(d.length&&d[0].length){for(var i=0;i<d.length;i++){p._labels.push(d[i][labelIdx]);}}
d=null;}}
else if(p.labels.length){p._labels=p.labels;}};$.jqplot.PointLabels.prototype.xOffset=function(elem,location,padding){location=location||this.location;padding=padding||this.xpadding;var offset;switch(location){case'nw':offset=-elem.outerWidth(true)-this.xpadding;break;case'n':offset=-elem.outerWidth(true)/2;break;case'ne':offset=this.xpadding;break;case'e':offset=this.xpadding;break;case'se':offset=this.xpadding;break;case's':offset=-elem.outerWidth(true)/2;break;case'sw':offset=-elem.outerWidth(true)-this.xpadding;break;case'w':offset=-elem.outerWidth(true)-this.xpadding;break;default:offset=-elem.outerWidth(true)-this.xpadding;break;}
return offset;};$.jqplot.PointLabels.prototype.yOffset=function(elem,location,padding){location=location||this.location;padding=padding||this.xpadding;var offset;switch(location){case'nw':offset=-elem.outerHeight(true)-this.ypadding;break;case'n':offset=-elem.outerHeight(true)-this.ypadding;break;case'ne':offset=-elem.outerHeight(true)-this.ypadding;break;case'e':offset=-elem.outerHeight(true)/2;break;case'se':offset=this.ypadding;break;case's':offset=this.ypadding;break;case'sw':offset=this.ypadding;break;case'w':offset=-elem.outerHeight(true)/2;break;default:offset=-elem.outerHeight(true)-this.ypadding;break;}
return offset;};$.jqplot.PointLabels.draw=function(sctx,options,plot){var p=this.plugins.pointLabels;p.setLabels.call(this);for(var i=0;i<p._elems.length;i++){p._elems[i].emptyForce();}
p._elems.splice(0,p._elems.length);if(p.show){var ax='_'+this._stackAxis+'axis';if(!p.formatString){p.formatString=this[ax]._ticks[0].formatString;p.formatter=this[ax]._ticks[0].formatter;}
var pd=this._plotData;var ppd=this._prevPlotData;var xax=this._xaxis;var yax=this._yaxis;var elem,helem;for(var i=0,l=p._labels.length;i<l;i++){var label=p._labels[i];if(p.hideZeros&&parseInt(p._labels[i],10)==0){label='';}
if(label!=null){label=p.formatter(p.formatString,label);}
helem=document.createElement('div');p._elems[i]=$(helem);elem=p._elems[i];elem.addClass('jqplot-point-label jqplot-series-'+this.index+' jqplot-point-'+i);elem.css('position','absolute');elem.insertAfter(sctx.canvas);if(p.escapeHTML){elem.text(label);}
else{elem.html(label);}
var location=p.location;if((this.fillToZero&&pd[i][1]<0)||(this.fillToZero&&this._type==='bar'&&this.barDirection==='horizontal'&&pd[i][0]<0)||(this.waterfall&&parseInt(label,10))<0){location=oppositeLocations[locationIndicies[location]];}
var ell=xax.u2p(pd[i][0])+p.xOffset(elem,location);var elt=yax.u2p(pd[i][1])+p.yOffset(elem,location);if(this._stack&&!p.stackedValue){if(this.barDirection==="vertical"){elt=(this._barPoints[i][0][1]+this._barPoints[i][1][1])/2+plot._gridPadding.top-0.5*elem.outerHeight(true);}
else{ell=(this._barPoints[i][2][0]+this._barPoints[i][0][0])/2+plot._gridPadding.left-0.5*elem.outerWidth(true);}}
if(this.renderer.constructor==$.jqplot.BarRenderer){if(this.barDirection=="vertical"){ell+=this._barNudge;}
else{elt-=this._barNudge;}}
elem.css('left',ell);elem.css('top',elt);var elr=ell+elem.width();var elb=elt+elem.height();var et=p.edgeTolerance;var scl=$(sctx.canvas).position().left;var sct=$(sctx.canvas).position().top;var scr=sctx.canvas.width+scl;var scb=sctx.canvas.height+sct;if(ell-et<scl||elt-et<sct||elr+et>scr||elb+et>scb){elem.remove();}
elem=null;helem=null;}}};$.jqplot.postSeriesInitHooks.push($.jqplot.PointLabels.init);$.jqplot.postDrawSeriesHooks.push($.jqplot.PointLabels.draw);})(jQuery);

$(function(){$.fn.jqplotToImage=function(x_offset,y_offset){if($(this).width()==0||$(this).height()==0){return null;}
var newCanvas=document.createElement("canvas");newCanvas.width=$(this).outerWidth()+Number(x_offset);newCanvas.height=$(this).outerHeight()+Number(y_offset);if(!newCanvas.getContext)return null;var newContext=newCanvas.getContext("2d");newContext.textAlign='left';newContext.textBaseline='top';function _jqpToImage(el,x_offset,y_offset){var tagname=el.tagName.toLowerCase();var p=$(el).position();var css=getComputedStyle(el);var left=x_offset+p.left+parseInt(css.marginLeft)+parseInt(css.borderLeftWidth)+parseInt(css.paddingLeft);var top=y_offset+p.top+parseInt(css.marginTop)+parseInt(css.borderTopWidth)+parseInt(css.paddingTop);if((tagname=='div'||tagname=='span')&&!$(el).hasClass('jqplot-highlighter-tooltip')){$(el).children().each(function(){_jqpToImage(this,left,top);});var text=$(el).childText();if(text){var metrics=newContext.measureText(text);newContext.font=$(el).getComputedFontStyle();newContext.fillText(text,left,top);}}
else if(tagname=='canvas'){newContext.drawImage(el,left,top);}}
$(this).children().each(function(){_jqpToImage(this,x_offset,y_offset);});return newCanvas;};$.fn.css2=jQuery.fn.css;$.fn.css=function(){if(arguments.length)return jQuery.fn.css2.apply(this,arguments);return window.getComputedStyle(this[0]);};$.fn.getComputedFontStyle=function(){var css=this.css();var attr=['font-style','font-weight','font-size','font-family'];var style=[];for(var i=0;i<attr.length;++i){var attr=String(css[attr[i]]);if(attr&&attr!='normal'){style.push(attr);}}
return style.join(' ');}
$.fn.childText=function(){return $(this).contents().filter(function(){return this.nodeType==3;}).text();};});

jQuery.fn.extend({insertAtCaret:function(myValue){return this.each(function(i){if(document.selection){this.focus();sel=document.selection.createRange();sel.text=myValue;this.focus();}
else if(this.selectionStart||this.selectionStart=='0'){var startPos=this.selectionStart;var endPos=this.selectionEnd;var scrollTop=this.scrollTop;this.value=this.value.substring(0,startPos)+myValue+this.value.substring(endPos,this.value.length);this.focus();this.selectionStart=startPos+myValue.length;this.selectionEnd=startPos+myValue.length;this.scrollTop=scrollTop;}else{this.value+=myValue;this.focus();}});}});
!function($){var Slider=function(element,options){this.element=$(element).hide();this.picker=$('<div class="slider">'+'<div class="slider-track">'+'<div class="slider-selection"></div>'+'<div class="slider-handle"></div>'+'<div class="slider-handle"></div>'+'</div>'+'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'+'</div>').insertBefore(this.element).append(this.element);this.id=this.element.data('slider-id')||options.id;if(this.id){this.picker[0].id=this.id;}
if(typeof Modernizr!=='undefined'&&Modernizr.touch){this.touchCapable=true;}
var tooltip=this.element.data('slider-tooltip')||options.tooltip;this.tooltip=this.picker.find('.tooltip');this.tooltipInner=this.tooltip.find('div.tooltip-inner');this.orientation=this.element.data('slider-orientation')||options.orientation;switch(this.orientation){case'vertical':this.picker.addClass('slider-vertical');this.stylePos='top';this.mousePos='pageY';this.sizePos='offsetHeight';this.tooltip.addClass('right')[0].style.left='100%';break;default:this.picker.addClass('slider-horizontal').css('width',this.element.outerWidth());this.orientation='horizontal';this.stylePos='left';this.mousePos='pageX';this.sizePos='offsetWidth';this.tooltip.addClass('top')[0].style.top=-this.tooltip.outerHeight()-14+'px';break;}
this.min=this.element.data('slider-min')||options.min;this.max=this.element.data('slider-max')||options.max;this.step=this.element.data('slider-step')||options.step;this.value=this.element.data('slider-value')||options.value;if(this.value[1]){this.range=true;}
this.selection=this.element.data('slider-selection')||options.selection;this.selectionEl=this.picker.find('.slider-selection');if(this.selection==='none'){this.selectionEl.addClass('hide');}
this.selectionElStyle=this.selectionEl[0].style;this.handle1=this.picker.find('.slider-handle:first');this.handle1Stype=this.handle1[0].style;this.handle2=this.picker.find('.slider-handle:last');this.handle2Stype=this.handle2[0].style;var handle=this.element.data('slider-handle')||options.handle;switch(handle){case'round':this.handle1.addClass('round');this.handle2.addClass('round');break
case'triangle':this.handle1.addClass('triangle');this.handle2.addClass('triangle');break}
if(this.range){this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0]));this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]));}else{this.value=[Math.max(this.min,Math.min(this.max,this.value))];this.handle2.addClass('hide');if(this.selection=='after'){this.value[1]=this.max;}else{this.value[1]=this.min;}}
this.diff=this.max-this.min;this.percentage=[(this.value[0]-this.min)*100/this.diff,(this.value[1]-this.min)*100/this.diff,this.step*100/this.diff];this.offset=this.picker.offset();this.size=this.picker[0][this.sizePos];this.formater=options.formater;this.layout();if(this.touchCapable){this.picker.on({touchstart:$.proxy(this.mousedown,this)});}else{this.picker.on({mousedown:$.proxy(this.mousedown,this)});}
if(tooltip==='show'){this.picker.on({mouseenter:$.proxy(this.showTooltip,this),mouseleave:$.proxy(this.hideTooltip,this)});}else{this.tooltip.addClass('hide');}};Slider.prototype={constructor:Slider,over:false,inDrag:false,showTooltip:function(){this.tooltip.addClass('in');this.over=true;},hideTooltip:function(){if(this.inDrag===false){this.tooltip.removeClass('in');}
this.over=false;},layout:function(){this.handle1Stype[this.stylePos]=this.percentage[0]+'%';this.handle2Stype[this.stylePos]=this.percentage[1]+'%';if(this.orientation=='vertical'){this.selectionElStyle.top=Math.min(this.percentage[0],this.percentage[1])+'%';this.selectionElStyle.height=Math.abs(this.percentage[0]-this.percentage[1])+'%';}else{this.selectionElStyle.left=Math.min(this.percentage[0],this.percentage[1])+'%';this.selectionElStyle.width=Math.abs(this.percentage[0]-this.percentage[1])+'%';}
if(this.range){this.tooltipInner.text(this.formater(this.value[0])+' : '+
this.formater(this.value[1]));this.tooltip[0].style[this.stylePos]=this.size*(this.percentage[0]+(this.percentage[1]-this.percentage[0])/2)/100-(this.orientation==='vertical'?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+'px';}else{this.tooltipInner.text(this.formater(this.value[0]));this.tooltip[0].style[this.stylePos]=this.size*this.percentage[0]/100-(this.orientation==='vertical'?this.tooltip.outerHeight()/2:this.tooltip.outerWidth()/2)+'px';}},mousedown:function(ev){if(this.touchCapable&&ev.type==='touchstart'){ev=ev.originalEvent;}
this.offset=this.picker.offset();this.size=this.picker[0][this.sizePos];var percentage=this.getPercentage(ev);if(this.range){var diff1=Math.abs(this.percentage[0]-percentage);var diff2=Math.abs(this.percentage[1]-percentage);this.dragged=(diff1<diff2)?0:1;}else{this.dragged=0;}
this.percentage[this.dragged]=percentage;this.layout();if(this.touchCapable){$(document).on({touchmove:$.proxy(this.mousemove,this),touchend:$.proxy(this.mouseup,this)});}else{$(document).on({mousemove:$.proxy(this.mousemove,this),mouseup:$.proxy(this.mouseup,this)});}
this.inDrag=true;var val=this.calculateValue();this.element.trigger({type:'slideStart',value:val}).trigger({type:'slide',value:val});return false;},mousemove:function(ev){if(this.touchCapable&&ev.type==='touchmove'){ev=ev.originalEvent;}
var percentage=this.getPercentage(ev);if(this.range){if(this.dragged===0&&this.percentage[1]<percentage){this.percentage[0]=this.percentage[1];this.dragged=1;}else if(this.dragged===1&&this.percentage[0]>percentage){this.percentage[1]=this.percentage[0];this.dragged=0;}}
this.percentage[this.dragged]=percentage;this.layout();var val=this.calculateValue();this.element.trigger({type:'slide',value:val}).data('value',val).prop('value',val);return false;},mouseup:function(ev){if(this.touchCapable){$(document).off({touchmove:this.mousemove,touchend:this.mouseup});}else{$(document).off({mousemove:this.mousemove,mouseup:this.mouseup});}
this.inDrag=false;if(this.over==false){this.hideTooltip();}
this.element;var val=this.calculateValue();this.element.trigger({type:'slideStop',value:val}).data('value',val).prop('value',val);return false;},calculateValue:function(){var val;if(this.range){val=[(this.min+Math.round((this.diff*this.percentage[0]/100)/this.step)*this.step),(this.min+Math.round((this.diff*this.percentage[1]/100)/this.step)*this.step)];this.value=val;}else{val=(this.min+Math.round((this.diff*this.percentage[0]/100)/this.step)*this.step);this.value=[val,this.value[1]];}
return val;},getPercentage:function(ev){if(this.touchCapable){ev=ev.touches[0];}
var percentage=(ev[this.mousePos]-this.offset[this.stylePos])*100/this.size;percentage=Math.round(percentage/this.percentage[2])*this.percentage[2];return Math.max(0,Math.min(100,percentage));},getValue:function(){if(this.range){return this.value;}
return this.value[0];},destroy:function(){this.element.show().insertBefore(this.picker);this.picker.remove();},setValue:function(val){this.value=val;if(this.range){this.value[0]=Math.max(this.min,Math.min(this.max,this.value[0]));this.value[1]=Math.max(this.min,Math.min(this.max,this.value[1]));}else{this.value=[Math.max(this.min,Math.min(this.max,this.value))];this.handle2.addClass('hide');if(this.selection=='after'){this.value[1]=this.max;}else{this.value[1]=this.min;}}
this.diff=this.max-this.min;this.percentage=[(this.value[0]-this.min)*100/this.diff,(this.value[1]-this.min)*100/this.diff,this.step*100/this.diff];this.layout();}};$.fn.slider=function(option,val){return this.each(function(){var $this=$(this),data=$this.data('slider'),options=typeof option==='object'&&option;if(!data){$this.data('slider',(data=new Slider(this,$.extend({},$.fn.slider.defaults,options))));}
if(typeof option=='string'){data[option](val);}})};$.fn.slider.defaults={min:0,max:10,step:1,orientation:'horizontal',value:5,selection:'before',tooltip:'show',handle:'round',formater:function(value){return value;}};$.fn.slider.Constructor=Slider;}(window.jQuery);