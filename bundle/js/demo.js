webpackJsonp([23,41],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(49);


/***/ },

/***/ 3:
/***/ function(module, exports) {

	/*TMODJS:{}*/
	!function () {
		function a(a, b) {
			return (/string|function/.test(typeof b) ? h : g)(a, b)
		}
	
		function b(a, c) {
			return "string" != typeof a && (c = typeof a, "number" === c ? a += "" : a = "function" === c ? b(a.call(a)) : ""), a
		}
	
		function c(a) {
			return l[a]
		}
	
		function d(a) {
			return b(a).replace(/&(?![\w#]+;)|[<>"']/g, c)
		}
	
		function e(a, b) {
			if (m(a))for (var c = 0, d = a.length; d > c; c++)b.call(a, a[c], c, a); else for (c in a)b.call(a, a[c], c)
		}
	
		function f(a, b) {
			var c = /(\/)[^\/]+\1\.\.\1/, d = ("./" + a).replace(/[^\/]+$/, ""), e = d + b;
			for (e = e.replace(/\/\.\//g, "/"); e.match(c);)e = e.replace(c, "/");
			return e
		}
	
		function g(b, c) {
			var d = a.get(b) || i({filename: b, name: "Render Error", message: "Template not found"});
			return c ? d(c) : d
		}
	
		function h(a, b) {
			if ("string" == typeof b) {
				var c = b;
				b = function () {
					return new k(c)
				}
			}
			var d = j[a] = function (c) {
				try {
					return new b(c, a) + ""
				} catch (d) {
					return i(d)()
				}
			};
			return d.prototype = b.prototype = n, d.toString = function () {
				return b + ""
			}, d
		}
	
		function i(a) {
			var b = "{Template Error}", c = a.stack || "";
			if (c)c = c.split("\n").slice(0, 2).join("\n"); else for (var d in a)c += "<" + d + ">\n" + a[d] + "\n\n";
			return function () {
				return "object" == typeof console && console.error(b + "\n\n" + c), b
			}
		}
	
		var j = a.cache = {}, k = this.String, l = {
			"<": "&#60;",
			">": "&#62;",
			'"': "&#34;",
			"'": "&#39;",
			"&": "&#38;"
		}, m = Array.isArray || function (a) {
				return "[object Array]" === {}.toString.call(a)
			}, n = a.utils = {
			$helpers: {}, $include: function (a, b, c) {
				return a = f(c, a), g(a, b)
			}, $string: b, $escape: d, $each: e
		}, o = a.helpers = n.$helpers;
		a.get = function (a) {
			return j[a.replace(/^\.\//, "")]
		}, a.helper = function (a, b) {
			o[a] = b
		}, module.exports = a
	}();

/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by humorHan on 2016/6/17.
	 */
	console.log('demo.js');
	var demoTpl = __webpack_require__(50);
	
	__webpack_require__(51);
	var calender = __webpack_require__(102);
	
	var demo = {
	    init: function(){
	        //todo 逻辑函数
	        this.render();
	        this.initBtns();
	        this.initCalendar();
	    },
	    initCalendar: function(){
	        calender(".text");
	    },
	    render: function(){
	        var arr = [1,2,3,4,5];
	        $(".dom2").html(demoTpl(arr));
	    },
	    initBtns: function(){
	        //todo 绑定事件
	    }
	};
	
	$(function(){
	   demo.init();
	});

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	var template=__webpack_require__(3);
	module.exports=template('Org/tpl/demo/test',function($data,$filename
	/**/) {
	'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$each($data,function($value,$index){
	$out+=' ';
	$out+=$escape($value);
	$out+=' ';
	});
	return new String($out);
	});

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(54)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./calender-plugin.min.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./calender-plugin.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(53)();
	// imports
	
	
	// module
	exports.push([module.id, ".flatpickr-input,.flatpickr-wrapper input{z-index:1;cursor:pointer}.flatpickr-wrapper{position:absolute;display:inline-block}.flatpickr-wrapper.inline,.flatpickr-wrapper.inline .flatpickr-calendar,.flatpickr-wrapper.static{position:relative}.flatpickr-wrapper.static .flatpickr-calendar{position:absolute}.flatpickr-wrapper.inline .flatpickr-calendar,.flatpickr-wrapper.open .flatpickr-calendar{z-index:99999;visibility:visible}.flatpickr-calendar{background:#fff;border:1px solid #ddd;font-size:90%;border-radius:3px;position:absolute;top:100%;left:0;visibility:hidden;width:256px}.flatpickr-calendar.hasWeeks{width:288px}.flatpickr-calendar.hasWeeks .flatpickr-weekdays span{width:12.5%}.flatpickr-calendar:after,.flatpickr-calendar:before{position:absolute;display:block;pointer-events:none;border:solid transparent;content:'';height:0;width:0;left:22px}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:after,.flatpickr-calendar.arrowTop:before{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#ddd}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:after,.flatpickr-calendar.arrowBottom:before{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#ddd}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-month{background:0 0;color:#000;padding:4px 5px 2px;text-align:center;position:relative}.flatpickr-next-month,.flatpickr-prev-month{text-decoration:none;cursor:pointer;position:absolute;top:.5rem}.flatpickr-next-month i,.flatpickr-prev-month i{position:relative}.flatpickr-next-month:hover,.flatpickr-prev-month:hover{color:#f99595}.flatpickr-prev-month{float:left;left:.5rem}.flatpickr-next-month{float:right;right:.5rem}.flatpickr-current-month{font-size:135%;font-weight:300;color:rgba(0,0,0,.7);display:inline-block}.flatpickr-current-month .cur_month{font-weight:700;color:#000}.flatpickr-current-month .cur_year{background:0 0;box-sizing:border-box;color:inherit;cursor:default;padding:0 0 0 2px;margin:0;width:3.15em;display:inline;font-size:inherit;font-weight:300;line-height:inherit;height:initial;border:0}.flatpickr-current-month .cur_year:hover{background:rgba(0,0,0,.05)}.flatpickr-weekdays{font-size:90%;background:0 0;padding:2px 0 4px;text-align:center}.flatpickr-weekdays span{opacity:.54;text-align:center;display:inline-block;width:14.28%;font-weight:700}.flatpickr-weeks{width:32px;float:left}.flatpickr-days{padding-top:1px;outline:0}.flatpickr-days span,.flatpickr-weeks span{background:0 0;border:1px solid transparent;border-radius:150px;box-sizing:border-box;color:#393939;cursor:pointer;display:inline-block;font-weight:300;width:34px;height:34px;line-height:33px;margin:0 1px 1px;text-align:center}.flatpickr-days span.disabled,.flatpickr-days span.disabled:hover,.flatpickr-days span.nextMonthDay,.flatpickr-days span.prevMonthDay,.flatpickr-weeks span.disabled,.flatpickr-weeks span.disabled:hover,.flatpickr-weeks span.nextMonthDay,.flatpickr-weeks span.prevMonthDay{color:rgba(57,57,57,.3);background:0 0;border-color:transparent;cursor:default}.flatpickr-days span.nextMonthDay:focus,.flatpickr-days span.nextMonthDay:hover,.flatpickr-days span.prevMonthDay:focus,.flatpickr-days span.prevMonthDay:hover,.flatpickr-days span:focus,.flatpickr-days span:hover,.flatpickr-weeks span.nextMonthDay:focus,.flatpickr-weeks span.nextMonthDay:hover,.flatpickr-weeks span.prevMonthDay:focus,.flatpickr-weeks span.prevMonthDay:hover,.flatpickr-weeks span:focus,.flatpickr-weeks span:hover{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-days span.today,.flatpickr-weeks span.today{border-color:#f99595}.flatpickr-days span.today:focus,.flatpickr-days span.today:hover,.flatpickr-weeks span.today:focus,.flatpickr-weeks span.today:hover{border-color:#f99595;background:#f99595;color:#fff}.flatpickr-days span.selected,.flatpickr-days span.selected:focus,.flatpickr-days span.selected:hover,.flatpickr-weeks span.selected,.flatpickr-weeks span.selected:focus,.flatpickr-weeks span.selected:hover{background:#446cb3;color:#fff;border-color:#446cb3}.flatpickr-am-pm,.flatpickr-time input[type=number],.flatpickr-time-separator{height:38px;display:inline-block;line-height:38px;color:#393939}.flatpickr-time{overflow:auto;text-align:center;border-top:0;outline:0}.flatpickr-time input[type=number]{background:0 0;-webkit-appearance:none;-moz-appearance:textfield;box-shadow:none;border:0;border-radius:0;width:33%;min-width:33%;text-align:center;margin:0;padding:0;cursor:pointer;font-weight:700}.flatpickr-am-pm:focus,.flatpickr-am-pm:hover,.flatpickr-time input[type=number]:focus,.flatpickr-time input[type=number]:hover{background:#f0f0f0}.flatpickr-time input[type=number].flatpickr-minute{width:26%;font-weight:300}.flatpickr-time input[type=number].flatpickr-second{font-weight:300}.flatpickr-time input[type=number]:focus{outline:0;border:0}.flatpickr-time.has-seconds input[type=number]{width:25%;min-width:25%}.flatpickr-days+.flatpickr-time{border-top:1px solid #ddd}.flatpickr-am-pm{outline:0;width:21%;padding:0 2%;cursor:pointer;text-align:left;font-weight:300}@media all and (-ms-high-contrast:none){.flatpickr-month{padding:0}}", ""]);
	
	// exports


/***/ },

/***/ 53:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var flatpickr = function flatpickr(selector, config) {
		var elements = void 0;
	
		var createInstance = function createInstance(element) {
			if (element._flatpickr) {
				element._flatpickr.destroy();
			}
	
			element._flatpickr = new flatpickr.init(element, config);
			return element._flatpickr;
		};
	
		if (selector.nodeName) {
			return createInstance(selector);
		}
		/*
	 Utilize the performance of native getters if applicable
	 https://jsperf.com/getelementsbyclassname-vs-queryselectorall/18
	 https://jsperf.com/jquery-vs-javascript-performance-comparison/22
	 */
		else if (/^#[a-zA-Z0-9\-_]*$/.test(selector)) {
				return createInstance(document.getElementById(selector.slice(1)));
			} else if (/^\.[a-zA-Z0-9\-_]*$/.test(selector)) {
				elements = document.getElementsByClassName(selector.slice(1));
			} else {
				elements = document.querySelectorAll(selector);
			}
	
		var instances = [];
	
		for (var i = 0; i < elements.length; i++) {
			instances.push(createInstance(elements[i]));
		}
	
		if (instances.length === 1) {
			return instances[0];
		}
	
		return {
			calendars: instances,
			byID: function byID(id) {
				return document.getElementById(id)._flatpickr;
			}
		};
	};
	
	/**
	 * @constructor
	 */
	flatpickr.init = function (element, instanceConfig) {
		function createElement(tag, className, content) {
			var newElement = document.createElement(tag);
	
			if (content) {
				newElement.textContent = content;
			}
	
			if (className) {
				newElement.className = className;
			}
	
			return newElement;
		}
	
		var debounce = function debounce(func, wait, immediate) {
			var timeout = void 0;
			return function () {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}
	
				var context = this;
	
				var later = function later() {
					timeout = null;
					if (!immediate) {
						func.apply(context, args);
					}
				};
	
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (immediate && !timeout) {
					func.apply(context, args);
				}
			};
		};
	
		// functions
		var self = this;
		var parseConfig = void 0,
		    init = void 0,
		    wrap = void 0,
		    uDate = void 0,
		    equalDates = void 0,
		    pad = void 0,
		    monthToStr = void 0,
		    isEnabled = void 0,
		    buildMonthNavigation = void 0,
		    buildWeekdays = void 0,
		    buildCalendar = void 0,
		    buildDays = void 0,
		    buildWeeks = void 0,
		    buildTime = void 0,
		    timeWrapper = void 0,
		    yearScroll = void 0,
		    updateValue = void 0,
		    amPMToggle = void 0,
		    onKeyDown = void 0,
		    onResize = void 0,
		    updateNavigationCurrentMonth = void 0,
		    handleYearChange = void 0,
		    changeMonth = void 0,
		    getDaysinMonth = void 0,
		    documentClick = void 0,
		    selectDate = void 0,
		    getRandomCalendarIdStr = void 0,
		    bind = void 0,
		    triggerChange = void 0;
	
		// elements & variables
		var calendarContainer = void 0,
		    weekdayContainer = void 0,
		    timeContainer = void 0,
		    navigationCurrentMonth = void 0,
		    monthsNav = void 0,
		    prevMonthNav = void 0,
		    currentYearElement = void 0,
		    currentMonthElement = void 0,
		    nextMonthNav = void 0,
		    calendar = void 0,
		    weekNumbers = void 0,
		    now = new Date(),
		    wrapperElement = void 0,
		    clickEvt = void 0;
	
		self.formats = {
			// weekday name, short, e.g. Thu
			D: function D() {
				return self.l10n.weekdays.shorthand[self.formats.w()];
			},
	
			// full month name e.g. January
			F: function F() {
				return monthToStr(self.formats.n() - 1, false);
			},
	
			// hours with leading zero e.g. 03
			H: function H() {
				return pad(self.selectedDateObj.getHours());
			},
	
			// day (1-30) with ordinal suffix e.g. 1st, 2nd
			J: function J() {
				return self.formats.j() + self.l10n.ordinal(self.formats.j());
			},
	
			// AM/PM
			K: function K() {
				return self.selectedDateObj.getHours() > 11 ? "PM" : "AM";
			},
	
			// shorthand month e.g. Jan, Sep, Oct, etc
			M: function M() {
				return monthToStr(self.formats.n() - 1, true);
			},
	
			// seconds 00-59
			S: function S() {
				return pad(self.selectedDateObj.getSeconds());
			},
	
			// unix timestamp
			U: function U() {
				return self.selectedDateObj.getTime() / 1000;
			},
	
			// full year e.g. 2016
			Y: function Y() {
				return self.selectedDateObj.getFullYear();
			},
	
			// day in month, padded (01-30)
			d: function d() {
				return pad(self.formats.j());
			},
	
			// hour from 1-12 (am/pm)
			h: function h() {
				return self.selectedDateObj.getHours() % 12 ? self.selectedDateObj.getHours() % 12 : 12;
			},
	
			// minutes, padded with leading zero e.g. 09
			i: function i() {
				return pad(self.selectedDateObj.getMinutes());
			},
	
			// day in month (1-30)
			j: function j() {
				return self.selectedDateObj.getDate();
			},
	
			// weekday name, full, e.g. Thursday
			l: function l() {
				return self.l10n.weekdays.longhand[self.formats.w()];
			},
	
			// padded month number (01-12)
			m: function m() {
				return pad(self.formats.n());
			},
	
			// the month number (1-12)
			n: function n() {
				return self.selectedDateObj.getMonth() + 1;
			},
	
			// seconds 0-59
			s: function s() {
				return self.selectedDateObj.getSeconds();
			},
	
			// number of the day of the week
			w: function w() {
				return self.selectedDateObj.getDay();
			},
	
			// last two digits of year e.g. 16 for 2016
			y: function y() {
				return String(self.formats.Y()).substring(2);
			}
		};
	
		self.defaultConfig = {
			/* if true, dates will be parsed, formatted, and displayed in UTC.
	  preloading date strings w/ timezones is recommended but not necessary */
			utc: false,
	
			// wrap: see https://chmln.github.io/flatpickr/#strap
			wrap: false,
	
			// enables week numbers
			weekNumbers: false,
	
			allowInput: false,
	
			/*
	  	clicking on input opens the date(time)picker.
	  	disable if you wish to open the calendar manually with .open()
	  */
			clickOpens: true,
	
			// display time picker in 24 hour mode
			time_24hr: false,
	
			// enables the time picker functionality
			enableTime: false,
	
			// noCalendar: true will hide the calendar. use for a time picker along w/ enableTime
			noCalendar: false,
	
			// more date format chars at https://chmln.github.io/flatpickr/#dateformat
			dateFormat: "Y-m-d",
	
			// altInput - see https://chmln.github.io/flatpickr/#altinput
			altInput: false,
	
			// the created altInput element will have this class.
			altInputClass: "",
	
			// same as dateFormat, but for altInput
			altFormat: "F j, Y", // defaults to e.g. June 10, 2016
	
			// defaultDate - either a datestring or a date object. used for datetimepicker"s initial value
			defaultDate: null,
	
			// the minimum date that user can pick (inclusive)
			minDate: null,
	
			// the maximum date that user can pick (inclusive)
			maxDate: null,
	
			// dateparser that transforms a given string to a date object
			parseDate: null,
	
			// see https://chmln.github.io/flatpickr/#disable
			enable: [],
	
			// see https://chmln.github.io/flatpickr/#disable
			disable: [],
	
			// display the short version of month names - e.g. Sep instead of September
			shorthandCurrentMonth: false,
	
			// displays calendar inline. see https://chmln.github.io/flatpickr/#inline-calendar
			inline: false,
	
			// position calendar inside wrapper and next to the input element
			// leave at false unless you know what you"re doing
			static: false,
	
			// code for previous/next icons. this is where you put your custom icon code e.g. fontawesome
			prevArrow: "&lt;",
			nextArrow: "&gt;",
	
			// enables seconds in the time picker
			enableSeconds: false,
	
			// step size used when scrolling/incrementing the hour element
			hourIncrement: 1,
	
			// step size used when scrolling/incrementing the minute element
			minuteIncrement: 5,
	
			// onChange callback when user selects a date or time
			onChange: null, // function (dateObj, dateStr) {}
	
			// called every time calendar is opened
			onOpen: null, // function (dateObj, dateStr) {}
	
			// called every time calendar is closed
			onClose: null, // function (dateObj, dateStr) {}
	
			onValueUpdate: null
		};
	
		init = function init() {
			instanceConfig = instanceConfig || {};
	
			self.element = element;
	
			parseConfig();
	
			self.input = self.config.wrap ? element.querySelector("[data-input]") : element;
			self.input.classList.add("flatpickr-input");
	
			if (self.config.defaultDate) {
				self.config.defaultDate = uDate(self.config.defaultDate);
			}
	
			if (self.input.value || self.config.defaultDate) {
				self.selectedDateObj = uDate(self.config.defaultDate || self.input.value);
			}
	
			wrap();
			buildCalendar();
			bind();
	
			self.uDate = uDate;
			self.jumpToDate();
			updateValue();
		};
	
		parseConfig = function parseConfig() {
			self.config = {};
	
			Object.keys(self.defaultConfig).forEach(function (key) {
				if (instanceConfig.hasOwnProperty(key)) {
					self.config[key] = instanceConfig[key];
				} else if (self.element.dataset && self.element.dataset.hasOwnProperty(key.toLowerCase())) {
					self.config[key] = self.element.dataset[key.toLowerCase()];
				} else if (!self.element.dataset && self.element.hasAttribute("data-" + key)) {
					self.config[key] = self.element.getAttribute("data-" + key);
				} else {
					self.config[key] = flatpickr.init.prototype.defaultConfig[key] || self.defaultConfig[key];
				}
	
				if (typeof self.defaultConfig[key] === "boolean") {
					self.config[key] = self.config[key] === true || self.config[key] === "" || self.config[key] === "true";
				}
	
				if (key === "enableTime" && self.config[key]) {
					self.defaultConfig.dateFormat = !self.config.time_24hr ? "Y-m-d h:i K" : "Y-m-d H:i";
					self.defaultConfig.altFormat = !self.config.time_24hr ? "F j Y, h:i K" : "F j, Y H:i";
				} else if (key === "noCalendar" && self.config[key]) {
					self.defaultConfig.dateFormat = "h:i K";
					self.defaultConfig.altFormat = "h:i K";
				}
			});
		};
	
		getRandomCalendarIdStr = function getRandomCalendarIdStr() {
			var randNum = void 0,
			    idStr = void 0;
			do {
				randNum = Math.round(Math.random() * Math.pow(10, 10));
				idStr = "flatpickr-" + randNum;
			} while (document.getElementById(idStr) !== null);
	
			return idStr;
		};
	
		uDate = function uDate(date, timeless) {
			timeless = timeless || false;
	
			if (date === "today") {
				date = new Date();
				timeless = true;
			} else if (typeof date === "string") {
				date = date.trim();
	
				if (self.config.parseDate) {
					date = self.config.parseDate(date);
				} else if (/^\d\d\d\d\-\d{1,2}\-\d\d$/.test(date)) {
					// this utc datestring gets parsed, but incorrectly by Date.parse
					date = new Date(date.replace(/(\d)-(\d)/g, "$1/$2"));
				} else if (Date.parse(date)) {
					date = new Date(date);
				} else if (/^\d\d\d\d\-\d\d\-\d\d/.test(date)) {
					// disable special utc datestring
					date = new Date(date.replace(/(\d)-(\d)/g, "$1/$2"));
				} else if (/^(\d?\d):(\d\d)/.test(date)) {
					// time-only picker
					var matches = date.match(/^(\d?\d):(\d\d)(:(\d\d))?/),
					    seconds = matches[4] !== undefined ? matches[4] : 0;
	
					date = new Date();
					date.setHours(matches[1], matches[2], seconds, 0);
				} else {
					console.error("flatpickr: invalid date string " + date);
					console.info(self.element);
				}
			}
	
			if (!(date instanceof Date) || !date.getTime()) {
				return null;
			}
	
			if (self.config.utc && !date.fp_isUTC) {
				date = date.fp_toUTC();
			}
	
			if (timeless) {
				date.setHours(0, 0, 0, 0);
			}
	
			return date;
		};
	
		equalDates = function equalDates(date1, date2) {
			return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
		};
	
		wrap = function wrap() {
			wrapperElement = createElement("div", "flatpickr-wrapper");
	
			if (self.config.inline || self.config.static) {
				// Wrap input and place calendar underneath
				self.element.parentNode.insertBefore(wrapperElement, self.element);
				wrapperElement.appendChild(self.element);
	
				wrapperElement.classList.add(self.config.inline ? "inline" : "static");
			} else {
				// Insert at bottom of BODY tag to display outside
				// of relative positioned elements with css "overflow: hidden;"
				// property set.
				document.body.appendChild(wrapperElement);
			}
	
			if (self.config.altInput) {
				// replicate self.element
				self.altInput = createElement(self.input.nodeName, self.config.altInputClass + " flatpickr-input");
				self.altInput.placeholder = self.input.placeholder;
				self.altInput.type = "text";
	
				self.input.type = "hidden";
				self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
			}
		};
	
		getDaysinMonth = function getDaysinMonth() {
			var month = arguments.length <= 0 || arguments[0] === undefined ? self.currentMonth : arguments[0];
	
			var yr = self.currentYear;
	
			if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) {
				return 29;
			}
	
			return self.l10n.daysInMonth[month];
		};
	
		updateValue = function updateValue(e) {
			if (self.config.noCalendar && !self.selectedDateObj) {
				// picking time only and method triggered from picker
				self.selectedDateObj = new Date();
			} else if (!self.selectedDateObj) {
				return;
			}
	
			if (e) {
				e.target.blur();
			}
	
			var timeHasChanged = void 0;
	
			if (self.config.enableTime) {
				var previousTimestamp = self.selectedDateObj.getTime();
	
				// update time
				var hours = parseInt(self.hourElement.value, 10) || 0,
				    seconds = void 0;
	
				var minutes = (60 + (parseInt(self.minuteElement.value, 10) || 0)) % 60;
	
				if (self.config.enableSeconds) {
					seconds = (60 + parseInt(self.secondElement.value, 10) || 0) % 60;
				}
	
				if (!self.config.time_24hr) {
					// the real number of hours for the date object
					hours = hours % 12 + 12 * (self.amPM.innerHTML === "PM");
				}
	
				self.selectedDateObj.setHours(hours, minutes, seconds === undefined ? self.selectedDateObj.getSeconds() : seconds);
	
				self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (hours % 12 === 0) : hours);
				self.minuteElement.value = pad(minutes);
	
				if (seconds !== undefined) {
					self.secondElement.value = pad(seconds);
				}
	
				timeHasChanged = self.selectedDateObj.getTime() !== previousTimestamp;
			}
	
			self.input.value = self.formatDate(self.config.dateFormat);
	
			if (self.altInput) {
				self.altInput.value = self.formatDate(self.config.altFormat);
			}
	
			if (e && (timeHasChanged || e.target.classList.contains("flatpickr-day"))) {
				triggerChange();
			}
	
			if (self.config.onValueUpdate) {
				self.config.onValueUpdate(self.selectedDateObj, self.input.value);
			}
		};
	
		pad = function pad(num) {
			return ("0" + num).slice(-2);
		};
	
		self.formatDate = function (dateFormat) {
			var formattedDate = "";
			var formatPieces = dateFormat.split("");
	
			for (var i = 0; i < formatPieces.length; i++) {
				var c = formatPieces[i];
				if (self.formats.hasOwnProperty(c) && formatPieces[i - 1] !== "\\") {
					formattedDate += self.formats[c]();
				} else if (c !== "\\") {
					formattedDate += c;
				}
			}
	
			return formattedDate;
		};
	
		monthToStr = function monthToStr(date, shorthand) {
			if (shorthand || self.config.shorthandCurrentMonth) {
				return self.l10n.months.shorthand[date];
			}
	
			return self.l10n.months.longhand[date];
		};
	
		isEnabled = function isEnabled(dateToCheck) {
			if (self.config.minDate && dateToCheck < self.config.minDate || self.config.maxDate && dateToCheck > self.config.maxDate) {
				return false;
			}
	
			dateToCheck = uDate(dateToCheck, true); // timeless
	
			var bool = self.config.enable.length > 0,
			    array = bool ? self.config.enable : self.config.disable;
	
			var d = void 0;
	
			for (var i = 0; i < array.length; i++) {
				d = array[i];
	
				if (d instanceof Function && d(dateToCheck)) {
					// disabled by function
					return bool;
				} else if ( // disabled weekday
				typeof d === "string" && /^wkd/.test(d) && dateToCheck.getDay() === (parseInt(d.slice(-1), 10) + self.l10n.firstDayOfWeek - 1) % 7) {
					return bool;
				} else if ((d instanceof Date || typeof d === "string" && !/^wkd/.test(d)) && uDate(d, true).getTime() === dateToCheck.getTime()) {
					// disabled by date string
					return bool;
				} else if ( // disabled by range
				(typeof d === "undefined" ? "undefined" : _typeof(d)) === "object" && d.hasOwnProperty("from") && dateToCheck >= uDate(d.from) && dateToCheck <= uDate(d.to)) {
					return bool;
				}
			}
	
			return !bool;
		};
	
		yearScroll = function yearScroll(event) {
			event.preventDefault();
	
			var delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.deltaY));
			self.currentYear = event.target.value = parseInt(event.target.value, 10) + delta;
			self.redraw();
		};
	
		timeWrapper = function timeWrapper(e) {
			e.preventDefault();
	
			var min = parseInt(e.target.min, 10),
			    max = parseInt(e.target.max, 10),
			    step = parseInt(e.target.step, 10),
			    value = parseInt(e.target.value, 10);
	
			var newValue = value;
	
			if (e.type === "wheel") {
				newValue = value + step * Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY));
			}
	
			if (newValue <= min) {
				newValue = max - step;
			} else if (newValue >= max) {
				newValue = min + step;
			}
	
			e.target.value = pad(newValue);
		};
	
		updateNavigationCurrentMonth = function updateNavigationCurrentMonth() {
			currentMonthElement.textContent = monthToStr(self.currentMonth) + " ";
			currentYearElement.value = self.currentYear;
		};
	
		handleYearChange = function handleYearChange() {
			if (self.currentMonth < 0 || self.currentMonth > 11) {
				self.currentYear += self.currentMonth % 11;
				self.currentMonth = (self.currentMonth + 12) % 12;
			}
		};
	
		documentClick = function documentClick(e) {
			var isCalendarElement = wrapperElement.contains(e.target),
			    isInput = self.element.contains(e.target) || e.target === self.altInput;
	
			if (self.isOpen && !isCalendarElement && !isInput) {
				self.close();
			}
		};
	
		changeMonth = function changeMonth(offset) {
			self.currentMonth += offset;
	
			handleYearChange();
			updateNavigationCurrentMonth();
			buildDays();
			(self.config.noCalendar ? timeContainer : calendar).focus();
		};
	
		selectDate = function selectDate(e) {
			e.preventDefault();
			e.stopPropagation();
	
			if (self.config.allowInput && e.target === (self.altInput || self.input) && e.which === 13) {
				self.setDate((self.altInput || self.input).value);
				self.redraw();
			} else if (e.target.classList.contains("flatpickr-day")) {
				var isPrevMonthDay = e.target.classList.contains("prevMonthDay"),
				    isNextMonthDay = e.target.classList.contains("nextMonthDay"),
				    monthNum = self.currentMonth - isPrevMonthDay + isNextMonthDay;
	
				if (isPrevMonthDay || isNextMonthDay) {
					changeMonth(+isNextMonthDay - isPrevMonthDay);
				}
	
				self.selectedDateObj = new Date(self.currentYear, monthNum, e.target.innerHTML);
	
				updateValue(e);
				buildDays();
			}
		};
	
		buildCalendar = function buildCalendar() {
			calendarContainer = createElement("div", "flatpickr-calendar");
			calendarContainer.id = getRandomCalendarIdStr();
	
			calendar = createElement("div", "flatpickr-days");
			calendar.tabIndex = -1;
	
			if (!self.config.noCalendar) {
				buildMonthNavigation();
				buildWeekdays();
	
				if (self.config.weekNumbers) {
					buildWeeks();
				}
	
				buildDays();
	
				calendarContainer.appendChild(calendar);
			}
	
			wrapperElement.appendChild(calendarContainer);
	
			if (self.config.enableTime) {
				buildTime();
			}
		};
	
		buildMonthNavigation = function buildMonthNavigation() {
			monthsNav = createElement("div", "flatpickr-month");
	
			prevMonthNav = createElement("span", "flatpickr-prev-month");
			prevMonthNav.innerHTML = self.config.prevArrow;
	
			currentMonthElement = createElement("span", "cur_month");
	
			currentYearElement = createElement("input", "cur_year");
			currentYearElement.type = "number";
			currentYearElement.title = self.l10n.scrollTitle;
	
			nextMonthNav = createElement("span", "flatpickr-next-month");
			nextMonthNav.innerHTML = self.config.nextArrow;
	
			navigationCurrentMonth = createElement("span", "flatpickr-current-month");
			navigationCurrentMonth.appendChild(currentMonthElement);
			navigationCurrentMonth.appendChild(currentYearElement);
	
			monthsNav.appendChild(prevMonthNav);
			monthsNav.appendChild(navigationCurrentMonth);
			monthsNav.appendChild(nextMonthNav);
	
			calendarContainer.appendChild(monthsNav);
			updateNavigationCurrentMonth();
		};
	
		buildWeekdays = function buildWeekdays() {
			weekdayContainer = createElement("div", "flatpickr-weekdays");
			var firstDayOfWeek = self.l10n.firstDayOfWeek;
	
			var weekdays = self.l10n.weekdays.shorthand.slice();
	
			if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
				weekdays = [].concat(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
			}
	
			if (self.config.weekNumbers) {
				weekdayContainer.innerHTML = "<span>" + self.l10n.weekAbbreviation + "</span>";
			}
	
			weekdayContainer.innerHTML += "<span>" + weekdays.join("</span><span>") + "</span>";
	
			calendarContainer.appendChild(weekdayContainer);
		};
	
		buildWeeks = function buildWeeks() {
			calendarContainer.classList.add("hasWeeks");
	
			weekNumbers = createElement("div", "flatpickr-weeks");
			calendarContainer.appendChild(weekNumbers);
		};
	
		buildDays = function buildDays() {
			var firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7,
			    daysInMonth = getDaysinMonth(),
			    prevMonthDays = getDaysinMonth((self.currentMonth - 1 + 12) % 12),
			    days = document.createDocumentFragment();
	
			var dayNumber = prevMonthDays + 1 - firstOfMonth,
			    currentDate = void 0,
			    dateIsDisabled = void 0;
	
			if (self.config.weekNumbers) {
				weekNumbers.innerHTML = "";
			}
	
			calendar.innerHTML = "";
	
			self.config.minDate = uDate(self.config.minDate, true);
			self.config.maxDate = uDate(self.config.maxDate, true);
	
			// prepend days from the ending of previous month
			for (; dayNumber <= prevMonthDays; dayNumber++) {
				var curDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber, 0, 0, 0, 0, 0),
				    dateIsEnabled = isEnabled(curDate),
				    dayElem = createElement("span", dateIsEnabled ? "flatpickr-day prevMonthDay" : "disabled", dayNumber);
	
				if (dateIsEnabled) {
					dayElem.tabIndex = 0;
				}
	
				days.appendChild(dayElem);
			}
	
			// Start at 1 since there is no 0th day
			for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
				currentDate = new Date(self.currentYear, self.currentMonth, dayNumber, 0, 0, 0, 0, 0);
	
				if (self.config.weekNumbers && dayNumber % 7 === 1) {
					weekNumbers.appendChild(createElement("span", "disabled flatpickr-day", currentDate.fp_getWeek()));
				}
	
				dateIsDisabled = !isEnabled(currentDate);
	
				var dayElement = createElement("span", dateIsDisabled ? "disabled" : "flatpickr-day", dayNumber);
	
				if (!dateIsDisabled) {
					dayElement.tabIndex = 0;
	
					if (equalDates(currentDate, now)) {
						dayElement.classList.add("today");
					}
	
					if (self.selectedDateObj && equalDates(currentDate, self.selectedDateObj)) {
						dayElement.classList.add("selected");
					}
				}
	
				days.appendChild(dayElement);
			}
	
			// append days from the next month
			for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth; dayNum++) {
				var _curDate = new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth, 0, 0, 0, 0, 0),
				    _dateIsEnabled = isEnabled(_curDate),
				    _dayElement = createElement("span", _dateIsEnabled ? "nextMonthDay flatpickr-day" : "disabled", dayNum % daysInMonth);
	
				if (self.config.weekNumbers && dayNum % 7 === 1) {
					weekNumbers.appendChild(createElement("span", "disabled", _curDate.fp_getWeek()));
				}
	
				if (_dateIsEnabled) {
					_dayElement.tabIndex = 0;
				}
	
				days.appendChild(_dayElement);
			}
	
			calendar.appendChild(days);
		};
	
		buildTime = function buildTime() {
			timeContainer = createElement("div", "flatpickr-time");
			timeContainer.tabIndex = -1;
			var separator = createElement("span", "flatpickr-time-separator", ":");
	
			self.hourElement = createElement("input", "flatpickr-hour");
			self.minuteElement = createElement("input", "flatpickr-minute");
	
			self.hourElement.tabIndex = self.minuteElement.tabIndex = 0;
			self.hourElement.type = self.minuteElement.type = "number";
	
			self.hourElement.value = self.selectedDateObj ? pad(self.selectedDateObj.getHours()) : 12;
	
			self.minuteElement.value = self.selectedDateObj ? pad(self.selectedDateObj.getMinutes()) : "00";
	
			self.hourElement.step = self.config.hourIncrement;
			self.minuteElement.step = self.config.minuteIncrement;
	
			self.hourElement.min = -self.config.time_24hr;
			self.hourElement.max = self.config.time_24hr ? 24 : 13;
	
			self.minuteElement.min = -self.minuteElement.step;
			self.minuteElement.max = 60;
	
			self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;
	
			timeContainer.appendChild(self.hourElement);
			timeContainer.appendChild(separator);
			timeContainer.appendChild(self.minuteElement);
	
			if (self.config.enableSeconds) {
				timeContainer.classList.add("has-seconds");
	
				self.secondElement = createElement("input", "flatpickr-second");
				self.secondElement.type = "number";
				self.secondElement.value = self.selectedDateObj ? pad(self.selectedDateObj.getSeconds()) : "00";
	
				self.secondElement.step = self.minuteElement.step;
				self.secondElement.min = self.minuteElement.min;
				self.secondElement.max = self.minuteElement.max;
	
				timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
				timeContainer.appendChild(self.secondElement);
			}
	
			if (!self.config.time_24hr) {
				// add self.amPM if appropriate
				self.amPM = createElement("span", "flatpickr-am-pm", ["AM", "PM"][self.hourElement.value > 11 | 0]);
				self.amPM.title = self.l10n.toggleTitle;
				self.amPM.tabIndex = 0;
				timeContainer.appendChild(self.amPM);
			}
	
			calendarContainer.appendChild(timeContainer);
		};
	
		bind = function bind() {
			document.addEventListener("keydown", onKeyDown);
			window.addEventListener("resize", onResize);
	
			if (self.config.clickOpens) {
				(self.altInput || self.input).addEventListener("click", self.open);
				(self.altInput || self.input).addEventListener("focus", self.open);
			}
	
			if (self.config.wrap && self.element.querySelector("[data-open]")) {
				self.element.querySelector("[data-open]").addEventListener("click", self.open);
			}
	
			if (self.config.wrap && self.element.querySelector("[data-close]")) {
				self.element.querySelector("[data-close]").addEventListener("click", self.close);
			}
	
			if (self.config.wrap && self.element.querySelector("[data-toggle]")) {
				self.element.querySelector("[data-toggle]").addEventListener("click", self.toggle);
			}
	
			if (self.config.wrap && self.element.querySelector("[data-clear]")) {
				self.element.querySelector("[data-clear]").addEventListener("click", self.clear);
			}
	
			if (!self.config.noCalendar) {
				prevMonthNav.addEventListener("click", function () {
					changeMonth(-1);
				});
	
				nextMonthNav.addEventListener("click", function () {
					changeMonth(1);
				});
	
				currentYearElement.addEventListener("wheel", yearScroll);
				currentYearElement.addEventListener("focus", currentYearElement.select);
	
				currentYearElement.addEventListener("input", function (event) {
					self.currentYear = parseInt(event.target.value, 10);
					self.redraw();
				});
	
				calendar.addEventListener("click", selectDate);
			}
	
			document.addEventListener("click", documentClick);
			document.addEventListener("blur", documentClick, true);
	
			if (self.config.enableTime) {
				self.hourElement.addEventListener("wheel", timeWrapper);
				self.minuteElement.addEventListener("wheel", timeWrapper);
	
				self.hourElement.addEventListener("input", timeWrapper);
				self.minuteElement.addEventListener("input", timeWrapper);
	
				self.hourElement.addEventListener("mouseout", updateValue);
				self.minuteElement.addEventListener("mouseout", updateValue);
	
				self.hourElement.addEventListener("change", updateValue);
				self.minuteElement.addEventListener("change", updateValue);
	
				self.hourElement.addEventListener("focus", self.hourElement.select);
				self.minuteElement.addEventListener("focus", self.minuteElement.select);
	
				if (self.config.enableSeconds) {
					self.secondElement.addEventListener("wheel", timeWrapper);
					self.secondElement.addEventListener("input", timeWrapper);
					self.secondElement.addEventListener("mouseout", updateValue);
					self.secondElement.addEventListener("change", updateValue);
					self.secondElement.addEventListener("focus", self.secondElement.select);
				}
	
				if (!self.config.time_24hr) {
					self.amPM.addEventListener("click", amPMToggle);
	
					self.amPM.addEventListener("wheel", amPMToggle);
					self.amPM.addEventListener("mouseout", updateValue);
	
					self.amPM.addEventListener("keydown", function (e) {
						if (e.which === 38 || e.which === 40) {
							amPMToggle(e);
						}
					});
				}
			}
	
			if (document.createEvent) {
				clickEvt = document.createEvent("MouseEvent");
				// without all these args ms edge spergs out
				clickEvt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			} else {
				clickEvt = new MouseEvent("click", {
					view: window,
					bubbles: true,
					cancelable: true
				});
			}
		};
	
		self.open = function () {
			if (self.isOpen || (self.altInput || self.input).disabled || self.config.inline) {
				return;
			} else if (!self.config.static) {
				self.positionCalendar();
			}
	
			self.isOpen = true;
	
			wrapperElement.classList.add("open");
	
			if (!self.config.allowInput) {
				(self.altInput || self.input).blur();
				(self.config.noCalendar ? timeContainer : calendar).focus();
			}
	
			(self.altInput || self.input).classList.add("active");
	
			if (self.config.onOpen) {
				self.config.onOpen(self.selectedDateObj, self.input.value);
			}
		};
	
		// For calendars inserted in BODY (as opposed to inline wrapper)
		// it"s necessary to properly calculate top/left position.
		self.positionCalendar = function () {
			var calendarHeight = calendarContainer.offsetHeight,
			    input = self.altInput || self.input,
			    inputBounds = input.getBoundingClientRect(),
			    distanceFromBottom = window.innerHeight - inputBounds.bottom + input.offsetHeight;
	
			var top = void 0,
			    left = window.pageXOffset + inputBounds.left;
	
			if (distanceFromBottom < calendarHeight) {
				top = window.pageYOffset - calendarHeight + inputBounds.top - 2;
				calendarContainer.classList.remove("arrowTop");
				calendarContainer.classList.add("arrowBottom");
			} else {
				top = window.pageYOffset + input.offsetHeight + inputBounds.top + 2;
				calendarContainer.classList.remove("arrowBottom");
				calendarContainer.classList.add("arrowTop");
			}
	
			wrapperElement.style.top = top + "px";
			wrapperElement.style.left = left + "px";
		};
	
		self.toggle = function () {
			if (self.isOpen) {
				self.close();
			} else {
				self.open();
			}
		};
	
		self.close = function () {
			self.isOpen = false;
			wrapperElement.classList.remove("open");
			(self.altInput || self.input).classList.remove("active");
	
			if (self.config.onClose) {
				self.config.onClose(self.selectedDateObj, self.input.value);
			}
		};
	
		self.clear = function () {
			self.input.value = "";
	
			if (self.altInput) {
				self.altInput.value = "";
			}
	
			self.selectedDateObj = null;
	
			triggerChange();
			self.jumpToDate();
		};
	
		triggerChange = function triggerChange() {
			self.input.dispatchEvent(clickEvt);
	
			if (self.config.onChange) {
				self.config.onChange(self.selectedDateObj, self.input.value);
			}
		};
	
		self.destroy = function () {
			document.removeEventListener("click", documentClick, false);
	
			if (self.altInput) {
				self.altInput.parentNode.removeChild(self.altInput);
			}
	
			if (self.config.inline) {
				var parent = self.element.parentNode,
				    removedElement = parent.removeChild(self.element);
	
				parent.removeChild(calendarContainer);
				parent.parentNode.replaceChild(removedElement, parent);
			} else {
				document.getElementsByTagName("body")[0].removeChild(wrapperElement);
			}
		};
	
		self.redraw = function () {
			if (self.config.noCalendar) {
				return;
			}
	
			updateNavigationCurrentMonth();
			buildDays();
		};
	
		self.jumpToDate = function (jumpDate) {
			jumpDate = uDate(jumpDate || self.selectedDateObj || self.config.defaultDate || self.config.minDate || now);
	
			self.currentYear = jumpDate.getFullYear();
			self.currentMonth = jumpDate.getMonth();
			self.redraw();
		};
	
		self.setDate = function (date, triggerChangeEvent) {
			date = uDate(date);
	
			if (date instanceof Date && date.getTime()) {
				self.selectedDateObj = uDate(date);
				self.jumpToDate(self.selectedDateObj);
				updateValue();
	
				if (triggerChangeEvent) {
					triggerChange();
				}
			}
		};
	
		self.setTime = function (hour, minute, triggerChangeEvent) {
			if (!self.selectedDateObj) {
				return;
			}
	
			self.hourElement.value = parseInt(hour, 10) % 24;
			self.minuteElement.value = parseInt(minute || 0, 10) % 60;
	
			if (!self.config.time_24hr) {
				self.amPM.innerHTML = hour > 11 ? "PM" : "AM";
			}
	
			updateValue();
	
			if (triggerChangeEvent) {
				triggerChange();
			}
		};
	
		self.set = function (key, value) {
			if (key in self.config) {
				self.config[key] = value;
				self.jumpToDate();
			}
		};
	
		amPMToggle = function amPMToggle(e) {
			e.preventDefault();
			self.amPM.textContent = ["AM", "PM"][self.amPM.innerHTML === "AM" | 0];
		};
	
		onKeyDown = function onKeyDown(e) {
			if (!self.isOpen || self.config.enableTime && timeContainer.contains(e.target)) {
				return;
			}
	
			switch (e.which) {
				case 13:
					selectDate(e);
					break;
	
				case 27:
					self.close();
					break;
	
				case 37:
					changeMonth(-1);
					break;
	
				case 38:
					e.preventDefault();
					self.currentYear++;
					self.redraw();
					break;
	
				case 39:
					changeMonth(1);
					break;
	
				case 40:
					e.preventDefault();
					self.currentYear--;
					self.redraw();
					break;
	
				default:
					break;
			}
		};
	
		onResize = debounce(function () {
			if (self.isOpen && !self.config.inline && !self.config.static) {
				self.positionCalendar();
			}
		}, 300);
	
		try {
			init();
		} catch (error) {
			// skip and carry on
			console.error(error);
			console.info(self.element);
		}
	
		return self;
	};
	
	flatpickr.init.prototype = {
	
		defaultConfig: {},
	
		l10n: {
			weekdays: {
				shorthand: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
				longhand: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
			},
			months: {
				shorthand: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
				longhand: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
			},
			daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
			firstDayOfWeek: 0,
			ordinal: function ordinal(nth) {
				var s = nth % 100;
				if (s > 3 && s < 21) return "th";
				switch (s % 10) {
					case 1:
						return "st";
					case 2:
						return "nd";
					case 3:
						return "rd";
					default:
						return "th";
				}
			},
			weekAbbreviation: "Wk",
			scrollTitle: "Scroll to increment",
			toggleTitle: "Click to toggle"
		}
	
	};
	
	Date.prototype.fp_incr = function (days) {
		return new Date(this.getFullYear(), this.getMonth(), this.getDate() + parseInt(days, 10));
	};
	
	Date.prototype.fp_isUTC = false;
	Date.prototype.fp_toUTC = function () {
		var newDate = new Date(this.getTime() + this.getTimezoneOffset() * 60000);
		newDate.fp_isUTC = true;
	
		return newDate;
	};
	
	Date.prototype.fp_getWeek = function () {
		var date = new Date(this.getTime());
		date.setHours(0, 0, 0, 0);
	
		// Thursday in current week decides the year.
		date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
		// January 4 is always in week 1.
		var week1 = new Date(date.getFullYear(), 0, 4);
		// Adjust to Thursday in week 1 and count number of weeks from date to week1.
		return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
	};
	
	// classList polyfill
	if (!("classList" in document.documentElement) && Object.defineProperty && typeof HTMLElement !== "undefined") {
		Object.defineProperty(HTMLElement.prototype, "classList", {
			get: function get() {
				var selfElements = this;
				function update(fn) {
					return function (value) {
						var classes = selfElements.className.split(/\s+/);
						var index = classes.indexOf(value);
	
						fn(classes, index, value);
						selfElements.className = classes.join(" ");
					};
				}
	
				var ret = {
					add: update(function (classes, index, value) {
						return ~index || classes.push(value);
					}),
					remove: update(function (classes, index) {
						return ~index && classes.splice(index, 1);
					}),
					toggle: update(function (classes, index, value) {
						if (~index) {
							classes.splice(index, 1);
						} else {
							classes.push(value);
						}
					}),
					contains: function contains(value) {
						return !! ~selfElements.className.split(/\s+/).indexOf(value);
					}
				};
	
				return ret;
			}
		});
	}
	
	if (true) {
		module.exports = flatpickr;
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rtb2Rqcy1sb2FkZXIvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9PcmcvanMvZGVtby9kZW1vLmpzIiwid2VicGFjazovLy8uL09yZy90cGwvZGVtby90ZXN0LnRwbCIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL2NhbGVuZGFyL2NhbGVuZGVyLXBsdWdpbi5taW4uY3NzP2MzNWEiLCJ3ZWJwYWNrOi8vLy4vT3JnL2RlcC9jYWxlbmRhci9jYWxlbmRlci1wbHVnaW4ubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9PcmcvZGVwL2NhbGVuZGFyL2NhbGVuZGVyLXBsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQSx5Q0FBd0MsT0FBTywyQkFBMkI7QUFDMUU7O0FBRUE7QUFDQTtBQUNBLHNDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSwwQkFBeUIsaUVBQWlFO0FBQzFGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBLGFBQVksZUFBZTtBQUMzQixrREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXFCO0FBQ3JCLGNBQWE7QUFDYixjQUFhO0FBQ2IsY0FBYTtBQUNiLGNBQWE7QUFDYixjQUFhO0FBQ2IsR0FBRTtBQUNGLGtDQUFpQztBQUNqQyxJQUFHO0FBQ0gsZUFBYztBQUNkO0FBQ0Es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RztBQUNIO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWdCLHFCQUFxQjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1FQUFrRSxhQUFhO0FBQy9FO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtB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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUSw0QkFBNEI7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXFCLDBCQUEwQjtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFDQUFvQyw2QkFBNkI7QUFDakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxtQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlRNT0RKUzp7fSovXHJcbiFmdW5jdGlvbiAoKSB7XHJcblx0ZnVuY3Rpb24gYShhLCBiKSB7XHJcblx0XHRyZXR1cm4gKC9zdHJpbmd8ZnVuY3Rpb24vLnRlc3QodHlwZW9mIGIpID8gaCA6IGcpKGEsIGIpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBiKGEsIGMpIHtcclxuXHRcdHJldHVybiBcInN0cmluZ1wiICE9IHR5cGVvZiBhICYmIChjID0gdHlwZW9mIGEsIFwibnVtYmVyXCIgPT09IGMgPyBhICs9IFwiXCIgOiBhID0gXCJmdW5jdGlvblwiID09PSBjID8gYihhLmNhbGwoYSkpIDogXCJcIiksIGFcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGMoYSkge1xyXG5cdFx0cmV0dXJuIGxbYV1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGQoYSkge1xyXG5cdFx0cmV0dXJuIGIoYSkucmVwbGFjZSgvJig/IVtcXHcjXSs7KXxbPD5cIiddL2csIGMpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBlKGEsIGIpIHtcclxuXHRcdGlmIChtKGEpKWZvciAodmFyIGMgPSAwLCBkID0gYS5sZW5ndGg7IGQgPiBjOyBjKyspYi5jYWxsKGEsIGFbY10sIGMsIGEpOyBlbHNlIGZvciAoYyBpbiBhKWIuY2FsbChhLCBhW2NdLCBjKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZihhLCBiKSB7XHJcblx0XHR2YXIgYyA9IC8oXFwvKVteXFwvXStcXDFcXC5cXC5cXDEvLCBkID0gKFwiLi9cIiArIGEpLnJlcGxhY2UoL1teXFwvXSskLywgXCJcIiksIGUgPSBkICsgYjtcclxuXHRcdGZvciAoZSA9IGUucmVwbGFjZSgvXFwvXFwuXFwvL2csIFwiL1wiKTsgZS5tYXRjaChjKTspZSA9IGUucmVwbGFjZShjLCBcIi9cIik7XHJcblx0XHRyZXR1cm4gZVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZyhiLCBjKSB7XHJcblx0XHR2YXIgZCA9IGEuZ2V0KGIpIHx8IGkoe2ZpbGVuYW1lOiBiLCBuYW1lOiBcIlJlbmRlciBFcnJvclwiLCBtZXNzYWdlOiBcIlRlbXBsYXRlIG5vdCBmb3VuZFwifSk7XHJcblx0XHRyZXR1cm4gYyA/IGQoYykgOiBkXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoKGEsIGIpIHtcclxuXHRcdGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBiKSB7XHJcblx0XHRcdHZhciBjID0gYjtcclxuXHRcdFx0YiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IGsoYylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dmFyIGQgPSBqW2FdID0gZnVuY3Rpb24gKGMpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IGIoYywgYSkgKyBcIlwiXHJcblx0XHRcdH0gY2F0Y2ggKGQpIHtcclxuXHRcdFx0XHRyZXR1cm4gaShkKSgpXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRyZXR1cm4gZC5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSA9IG4sIGQudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBiICsgXCJcIlxyXG5cdFx0fSwgZFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaShhKSB7XHJcblx0XHR2YXIgYiA9IFwie1RlbXBsYXRlIEVycm9yfVwiLCBjID0gYS5zdGFjayB8fCBcIlwiO1xyXG5cdFx0aWYgKGMpYyA9IGMuc3BsaXQoXCJcXG5cIikuc2xpY2UoMCwgMikuam9pbihcIlxcblwiKTsgZWxzZSBmb3IgKHZhciBkIGluIGEpYyArPSBcIjxcIiArIGQgKyBcIj5cXG5cIiArIGFbZF0gKyBcIlxcblxcblwiO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIFwib2JqZWN0XCIgPT0gdHlwZW9mIGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcihiICsgXCJcXG5cXG5cIiArIGMpLCBiXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgaiA9IGEuY2FjaGUgPSB7fSwgayA9IHRoaXMuU3RyaW5nLCBsID0ge1xyXG5cdFx0XCI8XCI6IFwiJiM2MDtcIixcclxuXHRcdFwiPlwiOiBcIiYjNjI7XCIsXHJcblx0XHQnXCInOiBcIiYjMzQ7XCIsXHJcblx0XHRcIidcIjogXCImIzM5O1wiLFxyXG5cdFx0XCImXCI6IFwiJiMzODtcIlxyXG5cdH0sIG0gPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRcdHJldHVybiBcIltvYmplY3QgQXJyYXldXCIgPT09IHt9LnRvU3RyaW5nLmNhbGwoYSlcclxuXHRcdH0sIG4gPSBhLnV0aWxzID0ge1xyXG5cdFx0JGhlbHBlcnM6IHt9LCAkaW5jbHVkZTogZnVuY3Rpb24gKGEsIGIsIGMpIHtcclxuXHRcdFx0cmV0dXJuIGEgPSBmKGMsIGEpLCBnKGEsIGIpXHJcblx0XHR9LCAkc3RyaW5nOiBiLCAkZXNjYXBlOiBkLCAkZWFjaDogZVxyXG5cdH0sIG8gPSBhLmhlbHBlcnMgPSBuLiRoZWxwZXJzO1xyXG5cdGEuZ2V0ID0gZnVuY3Rpb24gKGEpIHtcclxuXHRcdHJldHVybiBqW2EucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpXVxyXG5cdH0sIGEuaGVscGVyID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuXHRcdG9bYV0gPSBiXHJcblx0fSwgbW9kdWxlLmV4cG9ydHMgPSBhXHJcbn0oKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90bW9kanMtbG9hZGVyL3J1bnRpbWUuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMSAyIDUgOCAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMSAyMyAyNSAyNiAyNyAzMSAzMiAzMyAzNyAzOFxuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSBodW1vckhhbiBvbiAyMDE2LzYvMTcuXG4gKi9cbmNvbnNvbGUubG9nKCdkZW1vLmpzJyk7XG52YXIgZGVtb1RwbCA9IHJlcXVpcmUoXCJkZW1vL3Rlc3QudHBsXCIpO1xuXG5yZXF1aXJlKCdjYWxlbmRhci9jYWxlbmRlci1wbHVnaW4ubWluLmNzcycpO1xudmFyIGNhbGVuZGVyID0gcmVxdWlyZSgnY2FsZW5kYXIvY2FsZW5kZXItcGx1Z2luLmpzJyk7XG5cbnZhciBkZW1vID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vdG9kbyDpgLvovpHlh73mlbBcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5pbml0QnRucygpO1xuICAgICAgICB0aGlzLmluaXRDYWxlbmRhcigpO1xuICAgIH0sXG4gICAgaW5pdENhbGVuZGFyOiBmdW5jdGlvbigpe1xuICAgICAgICBjYWxlbmRlcihcIi50ZXh0XCIpO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgYXJyID0gWzEsMiwzLDQsNV07XG4gICAgICAgICQoXCIuZG9tMlwiKS5odG1sKGRlbW9UcGwoYXJyKSk7XG4gICAgfSxcbiAgICBpbml0QnRuczogZnVuY3Rpb24oKXtcbiAgICAgICAgLy90b2RvIOe7keWumuS6i+S7tlxuICAgIH1cbn07XG5cbiQoZnVuY3Rpb24oKXtcbiAgIGRlbW8uaW5pdCgpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL09yZy9qcy9kZW1vL2RlbW8uanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAyM1xuICoqLyIsInZhciB0ZW1wbGF0ZT1yZXF1aXJlKCd0bW9kanMtbG9hZGVyL3J1bnRpbWUnKTtcbm1vZHVsZS5leHBvcnRzPXRlbXBsYXRlKCdPcmcvdHBsL2RlbW8vdGVzdCcsZnVuY3Rpb24oJGRhdGEsJGZpbGVuYW1lXG4vKiovKSB7XG4ndXNlIHN0cmljdCc7dmFyICR1dGlscz10aGlzLCRoZWxwZXJzPSR1dGlscy4kaGVscGVycywkZWFjaD0kdXRpbHMuJGVhY2gsJHZhbHVlPSRkYXRhLiR2YWx1ZSwkaW5kZXg9JGRhdGEuJGluZGV4LCRlc2NhcGU9JHV0aWxzLiRlc2NhcGUsJG91dD0nJzskZWFjaCgkZGF0YSxmdW5jdGlvbigkdmFsdWUsJGluZGV4KXtcbiRvdXQrPScgJztcbiRvdXQrPSRlc2NhcGUoJHZhbHVlKTtcbiRvdXQrPScgJztcbn0pO1xucmV0dXJuIG5ldyBTdHJpbmcoJG91dCk7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL3RwbC9kZW1vL3Rlc3QudHBsXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMjNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NhbGVuZGVyLXBsdWdpbi5taW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2NhbGVuZGVyLXBsdWdpbi5taW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY2FsZW5kZXItcGx1Z2luLm1pbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9PcmcvZGVwL2NhbGVuZGFyL2NhbGVuZGVyLXBsdWdpbi5taW4uY3NzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMjNcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mbGF0cGlja3ItaW5wdXQsLmZsYXRwaWNrci13cmFwcGVyIGlucHV0e3otaW5kZXg6MTtjdXJzb3I6cG9pbnRlcn0uZmxhdHBpY2tyLXdyYXBwZXJ7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmZsYXRwaWNrci13cmFwcGVyLmlubGluZSwuZmxhdHBpY2tyLXdyYXBwZXIuaW5saW5lIC5mbGF0cGlja3ItY2FsZW5kYXIsLmZsYXRwaWNrci13cmFwcGVyLnN0YXRpY3twb3NpdGlvbjpyZWxhdGl2ZX0uZmxhdHBpY2tyLXdyYXBwZXIuc3RhdGljIC5mbGF0cGlja3ItY2FsZW5kYXJ7cG9zaXRpb246YWJzb2x1dGV9LmZsYXRwaWNrci13cmFwcGVyLmlubGluZSAuZmxhdHBpY2tyLWNhbGVuZGFyLC5mbGF0cGlja3Itd3JhcHBlci5vcGVuIC5mbGF0cGlja3ItY2FsZW5kYXJ7ei1pbmRleDo5OTk5OTt2aXNpYmlsaXR5OnZpc2libGV9LmZsYXRwaWNrci1jYWxlbmRhcntiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO2ZvbnQtc2l6ZTo5MCU7Ym9yZGVyLXJhZGl1czozcHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjEwMCU7bGVmdDowO3Zpc2liaWxpdHk6aGlkZGVuO3dpZHRoOjI1NnB4fS5mbGF0cGlja3ItY2FsZW5kYXIuaGFzV2Vla3N7d2lkdGg6Mjg4cHh9LmZsYXRwaWNrci1jYWxlbmRhci5oYXNXZWVrcyAuZmxhdHBpY2tyLXdlZWtkYXlzIHNwYW57d2lkdGg6MTIuNSV9LmZsYXRwaWNrci1jYWxlbmRhcjphZnRlciwuZmxhdHBpY2tyLWNhbGVuZGFyOmJlZm9yZXtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO3BvaW50ZXItZXZlbnRzOm5vbmU7Ym9yZGVyOnNvbGlkIHRyYW5zcGFyZW50O2NvbnRlbnQ6Jyc7aGVpZ2h0OjA7d2lkdGg6MDtsZWZ0OjIycHh9LmZsYXRwaWNrci1jYWxlbmRhcjpiZWZvcmV7Ym9yZGVyLXdpZHRoOjVweDttYXJnaW46MCAtNXB4fS5mbGF0cGlja3ItY2FsZW5kYXI6YWZ0ZXJ7Ym9yZGVyLXdpZHRoOjRweDttYXJnaW46MCAtNHB4fS5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YWZ0ZXIsLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDpiZWZvcmV7Ym90dG9tOjEwMCV9LmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDpiZWZvcmV7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZGRkfS5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YWZ0ZXJ7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZmZmfS5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YWZ0ZXIsLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTpiZWZvcmV7dG9wOjEwMCV9LmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTpiZWZvcmV7Ym9yZGVyLXRvcC1jb2xvcjojZGRkfS5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YWZ0ZXJ7Ym9yZGVyLXRvcC1jb2xvcjojZmZmfS5mbGF0cGlja3ItbW9udGh7YmFja2dyb3VuZDowIDA7Y29sb3I6IzAwMDtwYWRkaW5nOjRweCA1cHggMnB4O3RleHQtYWxpZ246Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlfS5mbGF0cGlja3ItbmV4dC1tb250aCwuZmxhdHBpY2tyLXByZXYtbW9udGh7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y3Vyc29yOnBvaW50ZXI7cG9zaXRpb246YWJzb2x1dGU7dG9wOi41cmVtfS5mbGF0cGlja3ItbmV4dC1tb250aCBpLC5mbGF0cGlja3ItcHJldi1tb250aCBpe3Bvc2l0aW9uOnJlbGF0aXZlfS5mbGF0cGlja3ItbmV4dC1tb250aDpob3ZlciwuZmxhdHBpY2tyLXByZXYtbW9udGg6aG92ZXJ7Y29sb3I6I2Y5OTU5NX0uZmxhdHBpY2tyLXByZXYtbW9udGh7ZmxvYXQ6bGVmdDtsZWZ0Oi41cmVtfS5mbGF0cGlja3ItbmV4dC1tb250aHtmbG9hdDpyaWdodDtyaWdodDouNXJlbX0uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGh7Zm9udC1zaXplOjEzNSU7Zm9udC13ZWlnaHQ6MzAwO2NvbG9yOnJnYmEoMCwwLDAsLjcpO2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5mbGF0cGlja3ItY3VycmVudC1tb250aCAuY3VyX21vbnRoe2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojMDAwfS5mbGF0cGlja3ItY3VycmVudC1tb250aCAuY3VyX3llYXJ7YmFja2dyb3VuZDowIDA7Ym94LXNpemluZzpib3JkZXItYm94O2NvbG9yOmluaGVyaXQ7Y3Vyc29yOmRlZmF1bHQ7cGFkZGluZzowIDAgMCAycHg7bWFyZ2luOjA7d2lkdGg6My4xNWVtO2Rpc3BsYXk6aW5saW5lO2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtd2VpZ2h0OjMwMDtsaW5lLWhlaWdodDppbmhlcml0O2hlaWdodDppbml0aWFsO2JvcmRlcjowfS5mbGF0cGlja3ItY3VycmVudC1tb250aCAuY3VyX3llYXI6aG92ZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNSl9LmZsYXRwaWNrci13ZWVrZGF5c3tmb250LXNpemU6OTAlO2JhY2tncm91bmQ6MCAwO3BhZGRpbmc6MnB4IDAgNHB4O3RleHQtYWxpZ246Y2VudGVyfS5mbGF0cGlja3Itd2Vla2RheXMgc3BhbntvcGFjaXR5Oi41NDt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxNC4yOCU7Zm9udC13ZWlnaHQ6NzAwfS5mbGF0cGlja3Itd2Vla3N7d2lkdGg6MzJweDtmbG9hdDpsZWZ0fS5mbGF0cGlja3ItZGF5c3twYWRkaW5nLXRvcDoxcHg7b3V0bGluZTowfS5mbGF0cGlja3ItZGF5cyBzcGFuLC5mbGF0cGlja3Itd2Vla3Mgc3BhbntiYWNrZ3JvdW5kOjAgMDtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6MTUwcHg7Ym94LXNpemluZzpib3JkZXItYm94O2NvbG9yOiMzOTM5Mzk7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC13ZWlnaHQ6MzAwO3dpZHRoOjM0cHg7aGVpZ2h0OjM0cHg7bGluZS1oZWlnaHQ6MzNweDttYXJnaW46MCAxcHggMXB4O3RleHQtYWxpZ246Y2VudGVyfS5mbGF0cGlja3ItZGF5cyBzcGFuLmRpc2FibGVkLC5mbGF0cGlja3ItZGF5cyBzcGFuLmRpc2FibGVkOmhvdmVyLC5mbGF0cGlja3ItZGF5cyBzcGFuLm5leHRNb250aERheSwuZmxhdHBpY2tyLWRheXMgc3Bhbi5wcmV2TW9udGhEYXksLmZsYXRwaWNrci13ZWVrcyBzcGFuLmRpc2FibGVkLC5mbGF0cGlja3Itd2Vla3Mgc3Bhbi5kaXNhYmxlZDpob3ZlciwuZmxhdHBpY2tyLXdlZWtzIHNwYW4ubmV4dE1vbnRoRGF5LC5mbGF0cGlja3Itd2Vla3Mgc3Bhbi5wcmV2TW9udGhEYXl7Y29sb3I6cmdiYSg1Nyw1Nyw1NywuMyk7YmFja2dyb3VuZDowIDA7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2N1cnNvcjpkZWZhdWx0fS5mbGF0cGlja3ItZGF5cyBzcGFuLm5leHRNb250aERheTpmb2N1cywuZmxhdHBpY2tyLWRheXMgc3Bhbi5uZXh0TW9udGhEYXk6aG92ZXIsLmZsYXRwaWNrci1kYXlzIHNwYW4ucHJldk1vbnRoRGF5OmZvY3VzLC5mbGF0cGlja3ItZGF5cyBzcGFuLnByZXZNb250aERheTpob3ZlciwuZmxhdHBpY2tyLWRheXMgc3Bhbjpmb2N1cywuZmxhdHBpY2tyLWRheXMgc3Bhbjpob3ZlciwuZmxhdHBpY2tyLXdlZWtzIHNwYW4ubmV4dE1vbnRoRGF5OmZvY3VzLC5mbGF0cGlja3Itd2Vla3Mgc3Bhbi5uZXh0TW9udGhEYXk6aG92ZXIsLmZsYXRwaWNrci13ZWVrcyBzcGFuLnByZXZNb250aERheTpmb2N1cywuZmxhdHBpY2tyLXdlZWtzIHNwYW4ucHJldk1vbnRoRGF5OmhvdmVyLC5mbGF0cGlja3Itd2Vla3Mgc3Bhbjpmb2N1cywuZmxhdHBpY2tyLXdlZWtzIHNwYW46aG92ZXJ7Y3Vyc29yOnBvaW50ZXI7b3V0bGluZTowO2JhY2tncm91bmQ6I2U2ZTZlNjtib3JkZXItY29sb3I6I2U2ZTZlNn0uZmxhdHBpY2tyLWRheXMgc3Bhbi50b2RheSwuZmxhdHBpY2tyLXdlZWtzIHNwYW4udG9kYXl7Ym9yZGVyLWNvbG9yOiNmOTk1OTV9LmZsYXRwaWNrci1kYXlzIHNwYW4udG9kYXk6Zm9jdXMsLmZsYXRwaWNrci1kYXlzIHNwYW4udG9kYXk6aG92ZXIsLmZsYXRwaWNrci13ZWVrcyBzcGFuLnRvZGF5OmZvY3VzLC5mbGF0cGlja3Itd2Vla3Mgc3Bhbi50b2RheTpob3Zlcntib3JkZXItY29sb3I6I2Y5OTU5NTtiYWNrZ3JvdW5kOiNmOTk1OTU7Y29sb3I6I2ZmZn0uZmxhdHBpY2tyLWRheXMgc3Bhbi5zZWxlY3RlZCwuZmxhdHBpY2tyLWRheXMgc3Bhbi5zZWxlY3RlZDpmb2N1cywuZmxhdHBpY2tyLWRheXMgc3Bhbi5zZWxlY3RlZDpob3ZlciwuZmxhdHBpY2tyLXdlZWtzIHNwYW4uc2VsZWN0ZWQsLmZsYXRwaWNrci13ZWVrcyBzcGFuLnNlbGVjdGVkOmZvY3VzLC5mbGF0cGlja3Itd2Vla3Mgc3Bhbi5zZWxlY3RlZDpob3ZlcntiYWNrZ3JvdW5kOiM0NDZjYjM7Y29sb3I6I2ZmZjtib3JkZXItY29sb3I6IzQ0NmNiM30uZmxhdHBpY2tyLWFtLXBtLC5mbGF0cGlja3ItdGltZSBpbnB1dFt0eXBlPW51bWJlcl0sLmZsYXRwaWNrci10aW1lLXNlcGFyYXRvcntoZWlnaHQ6MzhweDtkaXNwbGF5OmlubGluZS1ibG9jaztsaW5lLWhlaWdodDozOHB4O2NvbG9yOiMzOTM5Mzl9LmZsYXRwaWNrci10aW1le292ZXJmbG93OmF1dG87dGV4dC1hbGlnbjpjZW50ZXI7Ym9yZGVyLXRvcDowO291dGxpbmU6MH0uZmxhdHBpY2tyLXRpbWUgaW5wdXRbdHlwZT1udW1iZXJde2JhY2tncm91bmQ6MCAwOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7Ym94LXNoYWRvdzpub25lO2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MDt3aWR0aDozMyU7bWluLXdpZHRoOjMzJTt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW46MDtwYWRkaW5nOjA7Y3Vyc29yOnBvaW50ZXI7Zm9udC13ZWlnaHQ6NzAwfS5mbGF0cGlja3ItYW0tcG06Zm9jdXMsLmZsYXRwaWNrci1hbS1wbTpob3ZlciwuZmxhdHBpY2tyLXRpbWUgaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzLC5mbGF0cGlja3ItdGltZSBpbnB1dFt0eXBlPW51bWJlcl06aG92ZXJ7YmFja2dyb3VuZDojZjBmMGYwfS5mbGF0cGlja3ItdGltZSBpbnB1dFt0eXBlPW51bWJlcl0uZmxhdHBpY2tyLW1pbnV0ZXt3aWR0aDoyNiU7Zm9udC13ZWlnaHQ6MzAwfS5mbGF0cGlja3ItdGltZSBpbnB1dFt0eXBlPW51bWJlcl0uZmxhdHBpY2tyLXNlY29uZHtmb250LXdlaWdodDozMDB9LmZsYXRwaWNrci10aW1lIGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1c3tvdXRsaW5lOjA7Ym9yZGVyOjB9LmZsYXRwaWNrci10aW1lLmhhcy1zZWNvbmRzIGlucHV0W3R5cGU9bnVtYmVyXXt3aWR0aDoyNSU7bWluLXdpZHRoOjI1JX0uZmxhdHBpY2tyLWRheXMrLmZsYXRwaWNrci10aW1le2JvcmRlci10b3A6MXB4IHNvbGlkICNkZGR9LmZsYXRwaWNrci1hbS1wbXtvdXRsaW5lOjA7d2lkdGg6MjElO3BhZGRpbmc6MCAyJTtjdXJzb3I6cG9pbnRlcjt0ZXh0LWFsaWduOmxlZnQ7Zm9udC13ZWlnaHQ6MzAwfUBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDpub25lKXsuZmxhdHBpY2tyLW1vbnRoe3BhZGRpbmc6MH19XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL09yZy9kZXAvY2FsZW5kYXIvY2FsZW5kZXItcGx1Z2luLm1pbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAyM1xuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDIzXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMjNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBmbGF0cGlja3IgPSBmdW5jdGlvbiBmbGF0cGlja3Ioc2VsZWN0b3IsIGNvbmZpZykge1xuXHR2YXIgZWxlbWVudHMgPSB2b2lkIDA7XG5cblx0dmFyIGNyZWF0ZUluc3RhbmNlID0gZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZWxlbWVudCkge1xuXHRcdGlmIChlbGVtZW50Ll9mbGF0cGlja3IpIHtcblx0XHRcdGVsZW1lbnQuX2ZsYXRwaWNrci5kZXN0cm95KCk7XG5cdFx0fVxuXG5cdFx0ZWxlbWVudC5fZmxhdHBpY2tyID0gbmV3IGZsYXRwaWNrci5pbml0KGVsZW1lbnQsIGNvbmZpZyk7XG5cdFx0cmV0dXJuIGVsZW1lbnQuX2ZsYXRwaWNrcjtcblx0fTtcblxuXHRpZiAoc2VsZWN0b3Iubm9kZU5hbWUpIHtcblx0XHRyZXR1cm4gY3JlYXRlSW5zdGFuY2Uoc2VsZWN0b3IpO1xuXHR9XG5cdC8qXG4gVXRpbGl6ZSB0aGUgcGVyZm9ybWFuY2Ugb2YgbmF0aXZlIGdldHRlcnMgaWYgYXBwbGljYWJsZVxuIGh0dHBzOi8vanNwZXJmLmNvbS9nZXRlbGVtZW50c2J5Y2xhc3NuYW1lLXZzLXF1ZXJ5c2VsZWN0b3JhbGwvMThcbiBodHRwczovL2pzcGVyZi5jb20vanF1ZXJ5LXZzLWphdmFzY3JpcHQtcGVyZm9ybWFuY2UtY29tcGFyaXNvbi8yMlxuICovXG5cdGVsc2UgaWYgKC9eI1thLXpBLVowLTlcXC1fXSokLy50ZXN0KHNlbGVjdG9yKSkge1xuXHRcdFx0cmV0dXJuIGNyZWF0ZUluc3RhbmNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnNsaWNlKDEpKSk7XG5cdFx0fSBlbHNlIGlmICgvXlxcLlthLXpBLVowLTlcXC1fXSokLy50ZXN0KHNlbGVjdG9yKSkge1xuXHRcdFx0ZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yLnNsaWNlKDEpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblx0XHR9XG5cblx0dmFyIGluc3RhbmNlcyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRpbnN0YW5jZXMucHVzaChjcmVhdGVJbnN0YW5jZShlbGVtZW50c1tpXSkpO1xuXHR9XG5cblx0aWYgKGluc3RhbmNlcy5sZW5ndGggPT09IDEpIHtcblx0XHRyZXR1cm4gaW5zdGFuY2VzWzBdO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRjYWxlbmRhcnM6IGluc3RhbmNlcyxcblx0XHRieUlEOiBmdW5jdGlvbiBieUlEKGlkKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLl9mbGF0cGlja3I7XG5cdFx0fVxuXHR9O1xufTtcblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZmxhdHBpY2tyLmluaXQgPSBmdW5jdGlvbiAoZWxlbWVudCwgaW5zdGFuY2VDb25maWcpIHtcblx0ZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSwgY29udGVudCkge1xuXHRcdHZhciBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG5cdFx0aWYgKGNvbnRlbnQpIHtcblx0XHRcdG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuXHRcdH1cblxuXHRcdGlmIChjbGFzc05hbWUpIHtcblx0XHRcdG5ld0VsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXdFbGVtZW50O1xuXHR9XG5cblx0dmFyIGRlYm91bmNlID0gZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG5cdFx0dmFyIHRpbWVvdXQgPSB2b2lkIDA7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdFx0XHRcdGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG5cdFx0XHR9XG5cblx0XHRcdHZhciBjb250ZXh0ID0gdGhpcztcblxuXHRcdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24gbGF0ZXIoKSB7XG5cdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHRpZiAoIWltbWVkaWF0ZSkge1xuXHRcdFx0XHRcdGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblx0XHRcdGlmIChpbW1lZGlhdGUgJiYgIXRpbWVvdXQpIHtcblx0XHRcdFx0ZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXG5cdC8vIGZ1bmN0aW9uc1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cdHZhciBwYXJzZUNvbmZpZyA9IHZvaWQgMCxcblx0ICAgIGluaXQgPSB2b2lkIDAsXG5cdCAgICB3cmFwID0gdm9pZCAwLFxuXHQgICAgdURhdGUgPSB2b2lkIDAsXG5cdCAgICBlcXVhbERhdGVzID0gdm9pZCAwLFxuXHQgICAgcGFkID0gdm9pZCAwLFxuXHQgICAgbW9udGhUb1N0ciA9IHZvaWQgMCxcblx0ICAgIGlzRW5hYmxlZCA9IHZvaWQgMCxcblx0ICAgIGJ1aWxkTW9udGhOYXZpZ2F0aW9uID0gdm9pZCAwLFxuXHQgICAgYnVpbGRXZWVrZGF5cyA9IHZvaWQgMCxcblx0ICAgIGJ1aWxkQ2FsZW5kYXIgPSB2b2lkIDAsXG5cdCAgICBidWlsZERheXMgPSB2b2lkIDAsXG5cdCAgICBidWlsZFdlZWtzID0gdm9pZCAwLFxuXHQgICAgYnVpbGRUaW1lID0gdm9pZCAwLFxuXHQgICAgdGltZVdyYXBwZXIgPSB2b2lkIDAsXG5cdCAgICB5ZWFyU2Nyb2xsID0gdm9pZCAwLFxuXHQgICAgdXBkYXRlVmFsdWUgPSB2b2lkIDAsXG5cdCAgICBhbVBNVG9nZ2xlID0gdm9pZCAwLFxuXHQgICAgb25LZXlEb3duID0gdm9pZCAwLFxuXHQgICAgb25SZXNpemUgPSB2b2lkIDAsXG5cdCAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoID0gdm9pZCAwLFxuXHQgICAgaGFuZGxlWWVhckNoYW5nZSA9IHZvaWQgMCxcblx0ICAgIGNoYW5nZU1vbnRoID0gdm9pZCAwLFxuXHQgICAgZ2V0RGF5c2luTW9udGggPSB2b2lkIDAsXG5cdCAgICBkb2N1bWVudENsaWNrID0gdm9pZCAwLFxuXHQgICAgc2VsZWN0RGF0ZSA9IHZvaWQgMCxcblx0ICAgIGdldFJhbmRvbUNhbGVuZGFySWRTdHIgPSB2b2lkIDAsXG5cdCAgICBiaW5kID0gdm9pZCAwLFxuXHQgICAgdHJpZ2dlckNoYW5nZSA9IHZvaWQgMDtcblxuXHQvLyBlbGVtZW50cyAmIHZhcmlhYmxlc1xuXHR2YXIgY2FsZW5kYXJDb250YWluZXIgPSB2b2lkIDAsXG5cdCAgICB3ZWVrZGF5Q29udGFpbmVyID0gdm9pZCAwLFxuXHQgICAgdGltZUNvbnRhaW5lciA9IHZvaWQgMCxcblx0ICAgIG5hdmlnYXRpb25DdXJyZW50TW9udGggPSB2b2lkIDAsXG5cdCAgICBtb250aHNOYXYgPSB2b2lkIDAsXG5cdCAgICBwcmV2TW9udGhOYXYgPSB2b2lkIDAsXG5cdCAgICBjdXJyZW50WWVhckVsZW1lbnQgPSB2b2lkIDAsXG5cdCAgICBjdXJyZW50TW9udGhFbGVtZW50ID0gdm9pZCAwLFxuXHQgICAgbmV4dE1vbnRoTmF2ID0gdm9pZCAwLFxuXHQgICAgY2FsZW5kYXIgPSB2b2lkIDAsXG5cdCAgICB3ZWVrTnVtYmVycyA9IHZvaWQgMCxcblx0ICAgIG5vdyA9IG5ldyBEYXRlKCksXG5cdCAgICB3cmFwcGVyRWxlbWVudCA9IHZvaWQgMCxcblx0ICAgIGNsaWNrRXZ0ID0gdm9pZCAwO1xuXG5cdHNlbGYuZm9ybWF0cyA9IHtcblx0XHQvLyB3ZWVrZGF5IG5hbWUsIHNob3J0LCBlLmcuIFRodVxuXHRcdEQ6IGZ1bmN0aW9uIEQoKSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5sMTBuLndlZWtkYXlzLnNob3J0aGFuZFtzZWxmLmZvcm1hdHMudygpXTtcblx0XHR9LFxuXG5cdFx0Ly8gZnVsbCBtb250aCBuYW1lIGUuZy4gSmFudWFyeVxuXHRcdEY6IGZ1bmN0aW9uIEYoKSB7XG5cdFx0XHRyZXR1cm4gbW9udGhUb1N0cihzZWxmLmZvcm1hdHMubigpIC0gMSwgZmFsc2UpO1xuXHRcdH0sXG5cblx0XHQvLyBob3VycyB3aXRoIGxlYWRpbmcgemVybyBlLmcuIDAzXG5cdFx0SDogZnVuY3Rpb24gSCgpIHtcblx0XHRcdHJldHVybiBwYWQoc2VsZi5zZWxlY3RlZERhdGVPYmouZ2V0SG91cnMoKSk7XG5cdFx0fSxcblxuXHRcdC8vIGRheSAoMS0zMCkgd2l0aCBvcmRpbmFsIHN1ZmZpeCBlLmcuIDFzdCwgMm5kXG5cdFx0SjogZnVuY3Rpb24gSigpIHtcblx0XHRcdHJldHVybiBzZWxmLmZvcm1hdHMuaigpICsgc2VsZi5sMTBuLm9yZGluYWwoc2VsZi5mb3JtYXRzLmooKSk7XG5cdFx0fSxcblxuXHRcdC8vIEFNL1BNXG5cdFx0SzogZnVuY3Rpb24gSygpIHtcblx0XHRcdHJldHVybiBzZWxmLnNlbGVjdGVkRGF0ZU9iai5nZXRIb3VycygpID4gMTEgPyBcIlBNXCIgOiBcIkFNXCI7XG5cdFx0fSxcblxuXHRcdC8vIHNob3J0aGFuZCBtb250aCBlLmcuIEphbiwgU2VwLCBPY3QsIGV0Y1xuXHRcdE06IGZ1bmN0aW9uIE0oKSB7XG5cdFx0XHRyZXR1cm4gbW9udGhUb1N0cihzZWxmLmZvcm1hdHMubigpIC0gMSwgdHJ1ZSk7XG5cdFx0fSxcblxuXHRcdC8vIHNlY29uZHMgMDAtNTlcblx0XHRTOiBmdW5jdGlvbiBTKCkge1xuXHRcdFx0cmV0dXJuIHBhZChzZWxmLnNlbGVjdGVkRGF0ZU9iai5nZXRTZWNvbmRzKCkpO1xuXHRcdH0sXG5cblx0XHQvLyB1bml4IHRpbWVzdGFtcFxuXHRcdFU6IGZ1bmN0aW9uIFUoKSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5zZWxlY3RlZERhdGVPYmouZ2V0VGltZSgpIC8gMTAwMDtcblx0XHR9LFxuXG5cdFx0Ly8gZnVsbCB5ZWFyIGUuZy4gMjAxNlxuXHRcdFk6IGZ1bmN0aW9uIFkoKSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5zZWxlY3RlZERhdGVPYmouZ2V0RnVsbFllYXIoKTtcblx0XHR9LFxuXG5cdFx0Ly8gZGF5IGluIG1vbnRoLCBwYWRkZWQgKDAxLTMwKVxuXHRcdGQ6IGZ1bmN0aW9uIGQoKSB7XG5cdFx0XHRyZXR1cm4gcGFkKHNlbGYuZm9ybWF0cy5qKCkpO1xuXHRcdH0sXG5cblx0XHQvLyBob3VyIGZyb20gMS0xMiAoYW0vcG0pXG5cdFx0aDogZnVuY3Rpb24gaCgpIHtcblx0XHRcdHJldHVybiBzZWxmLnNlbGVjdGVkRGF0ZU9iai5nZXRIb3VycygpICUgMTIgPyBzZWxmLnNlbGVjdGVkRGF0ZU9iai5nZXRIb3VycygpICUgMTIgOiAxMjtcblx0XHR9LFxuXG5cdFx0Ly8gbWludXRlcywgcGFkZGVkIHdpdGggbGVhZGluZyB6ZXJvIGUuZy4gMDlcblx0XHRpOiBmdW5jdGlvbiBpKCkge1xuXHRcdFx0cmV0dXJuIHBhZChzZWxmLnNlbGVjdGVkRGF0ZU9iai5nZXRNaW51dGVzKCkpO1xuXHRcdH0sXG5cblx0XHQvLyBkYXkgaW4gbW9udGggKDEtMzApXG5cdFx0ajogZnVuY3Rpb24gaigpIHtcblx0XHRcdHJldHVybiBzZWxmLnNlbGVjdGVkRGF0ZU9iai5nZXREYXRlKCk7XG5cdFx0fSxcblxuXHRcdC8vIHdlZWtkYXkgbmFtZSwgZnVsbCwgZS5nLiBUaHVyc2RheVxuXHRcdGw6IGZ1bmN0aW9uIGwoKSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5sMTBuLndlZWtkYXlzLmxvbmdoYW5kW3NlbGYuZm9ybWF0cy53KCldO1xuXHRcdH0sXG5cblx0XHQvLyBwYWRkZWQgbW9udGggbnVtYmVyICgwMS0xMilcblx0XHRtOiBmdW5jdGlvbiBtKCkge1xuXHRcdFx0cmV0dXJuIHBhZChzZWxmLmZvcm1hdHMubigpKTtcblx0XHR9LFxuXG5cdFx0Ly8gdGhlIG1vbnRoIG51bWJlciAoMS0xMilcblx0XHRuOiBmdW5jdGlvbiBuKCkge1xuXHRcdFx0cmV0dXJuIHNlbGYuc2VsZWN0ZWREYXRlT2JqLmdldE1vbnRoKCkgKyAxO1xuXHRcdH0sXG5cblx0XHQvLyBzZWNvbmRzIDAtNTlcblx0XHRzOiBmdW5jdGlvbiBzKCkge1xuXHRcdFx0cmV0dXJuIHNlbGYuc2VsZWN0ZWREYXRlT2JqLmdldFNlY29uZHMoKTtcblx0XHR9LFxuXG5cdFx0Ly8gbnVtYmVyIG9mIHRoZSBkYXkgb2YgdGhlIHdlZWtcblx0XHR3OiBmdW5jdGlvbiB3KCkge1xuXHRcdFx0cmV0dXJuIHNlbGYuc2VsZWN0ZWREYXRlT2JqLmdldERheSgpO1xuXHRcdH0sXG5cblx0XHQvLyBsYXN0IHR3byBkaWdpdHMgb2YgeWVhciBlLmcuIDE2IGZvciAyMDE2XG5cdFx0eTogZnVuY3Rpb24geSgpIHtcblx0XHRcdHJldHVybiBTdHJpbmcoc2VsZi5mb3JtYXRzLlkoKSkuc3Vic3RyaW5nKDIpO1xuXHRcdH1cblx0fTtcblxuXHRzZWxmLmRlZmF1bHRDb25maWcgPSB7XG5cdFx0LyogaWYgdHJ1ZSwgZGF0ZXMgd2lsbCBiZSBwYXJzZWQsIGZvcm1hdHRlZCwgYW5kIGRpc3BsYXllZCBpbiBVVEMuXG4gIHByZWxvYWRpbmcgZGF0ZSBzdHJpbmdzIHcvIHRpbWV6b25lcyBpcyByZWNvbW1lbmRlZCBidXQgbm90IG5lY2Vzc2FyeSAqL1xuXHRcdHV0YzogZmFsc2UsXG5cblx0XHQvLyB3cmFwOiBzZWUgaHR0cHM6Ly9jaG1sbi5naXRodWIuaW8vZmxhdHBpY2tyLyNzdHJhcFxuXHRcdHdyYXA6IGZhbHNlLFxuXG5cdFx0Ly8gZW5hYmxlcyB3ZWVrIG51bWJlcnNcblx0XHR3ZWVrTnVtYmVyczogZmFsc2UsXG5cblx0XHRhbGxvd0lucHV0OiBmYWxzZSxcblxuXHRcdC8qXG4gIFx0Y2xpY2tpbmcgb24gaW5wdXQgb3BlbnMgdGhlIGRhdGUodGltZSlwaWNrZXIuXG4gIFx0ZGlzYWJsZSBpZiB5b3Ugd2lzaCB0byBvcGVuIHRoZSBjYWxlbmRhciBtYW51YWxseSB3aXRoIC5vcGVuKClcbiAgKi9cblx0XHRjbGlja09wZW5zOiB0cnVlLFxuXG5cdFx0Ly8gZGlzcGxheSB0aW1lIHBpY2tlciBpbiAyNCBob3VyIG1vZGVcblx0XHR0aW1lXzI0aHI6IGZhbHNlLFxuXG5cdFx0Ly8gZW5hYmxlcyB0aGUgdGltZSBwaWNrZXIgZnVuY3Rpb25hbGl0eVxuXHRcdGVuYWJsZVRpbWU6IGZhbHNlLFxuXG5cdFx0Ly8gbm9DYWxlbmRhcjogdHJ1ZSB3aWxsIGhpZGUgdGhlIGNhbGVuZGFyLiB1c2UgZm9yIGEgdGltZSBwaWNrZXIgYWxvbmcgdy8gZW5hYmxlVGltZVxuXHRcdG5vQ2FsZW5kYXI6IGZhbHNlLFxuXG5cdFx0Ly8gbW9yZSBkYXRlIGZvcm1hdCBjaGFycyBhdCBodHRwczovL2NobWxuLmdpdGh1Yi5pby9mbGF0cGlja3IvI2RhdGVmb3JtYXRcblx0XHRkYXRlRm9ybWF0OiBcIlktbS1kXCIsXG5cblx0XHQvLyBhbHRJbnB1dCAtIHNlZSBodHRwczovL2NobWxuLmdpdGh1Yi5pby9mbGF0cGlja3IvI2FsdGlucHV0XG5cdFx0YWx0SW5wdXQ6IGZhbHNlLFxuXG5cdFx0Ly8gdGhlIGNyZWF0ZWQgYWx0SW5wdXQgZWxlbWVudCB3aWxsIGhhdmUgdGhpcyBjbGFzcy5cblx0XHRhbHRJbnB1dENsYXNzOiBcIlwiLFxuXG5cdFx0Ly8gc2FtZSBhcyBkYXRlRm9ybWF0LCBidXQgZm9yIGFsdElucHV0XG5cdFx0YWx0Rm9ybWF0OiBcIkYgaiwgWVwiLCAvLyBkZWZhdWx0cyB0byBlLmcuIEp1bmUgMTAsIDIwMTZcblxuXHRcdC8vIGRlZmF1bHREYXRlIC0gZWl0aGVyIGEgZGF0ZXN0cmluZyBvciBhIGRhdGUgb2JqZWN0LiB1c2VkIGZvciBkYXRldGltZXBpY2tlclwicyBpbml0aWFsIHZhbHVlXG5cdFx0ZGVmYXVsdERhdGU6IG51bGwsXG5cblx0XHQvLyB0aGUgbWluaW11bSBkYXRlIHRoYXQgdXNlciBjYW4gcGljayAoaW5jbHVzaXZlKVxuXHRcdG1pbkRhdGU6IG51bGwsXG5cblx0XHQvLyB0aGUgbWF4aW11bSBkYXRlIHRoYXQgdXNlciBjYW4gcGljayAoaW5jbHVzaXZlKVxuXHRcdG1heERhdGU6IG51bGwsXG5cblx0XHQvLyBkYXRlcGFyc2VyIHRoYXQgdHJhbnNmb3JtcyBhIGdpdmVuIHN0cmluZyB0byBhIGRhdGUgb2JqZWN0XG5cdFx0cGFyc2VEYXRlOiBudWxsLFxuXG5cdFx0Ly8gc2VlIGh0dHBzOi8vY2htbG4uZ2l0aHViLmlvL2ZsYXRwaWNrci8jZGlzYWJsZVxuXHRcdGVuYWJsZTogW10sXG5cblx0XHQvLyBzZWUgaHR0cHM6Ly9jaG1sbi5naXRodWIuaW8vZmxhdHBpY2tyLyNkaXNhYmxlXG5cdFx0ZGlzYWJsZTogW10sXG5cblx0XHQvLyBkaXNwbGF5IHRoZSBzaG9ydCB2ZXJzaW9uIG9mIG1vbnRoIG5hbWVzIC0gZS5nLiBTZXAgaW5zdGVhZCBvZiBTZXB0ZW1iZXJcblx0XHRzaG9ydGhhbmRDdXJyZW50TW9udGg6IGZhbHNlLFxuXG5cdFx0Ly8gZGlzcGxheXMgY2FsZW5kYXIgaW5saW5lLiBzZWUgaHR0cHM6Ly9jaG1sbi5naXRodWIuaW8vZmxhdHBpY2tyLyNpbmxpbmUtY2FsZW5kYXJcblx0XHRpbmxpbmU6IGZhbHNlLFxuXG5cdFx0Ly8gcG9zaXRpb24gY2FsZW5kYXIgaW5zaWRlIHdyYXBwZXIgYW5kIG5leHQgdG8gdGhlIGlucHV0IGVsZW1lbnRcblx0XHQvLyBsZWF2ZSBhdCBmYWxzZSB1bmxlc3MgeW91IGtub3cgd2hhdCB5b3VcInJlIGRvaW5nXG5cdFx0c3RhdGljOiBmYWxzZSxcblxuXHRcdC8vIGNvZGUgZm9yIHByZXZpb3VzL25leHQgaWNvbnMuIHRoaXMgaXMgd2hlcmUgeW91IHB1dCB5b3VyIGN1c3RvbSBpY29uIGNvZGUgZS5nLiBmb250YXdlc29tZVxuXHRcdHByZXZBcnJvdzogXCImbHQ7XCIsXG5cdFx0bmV4dEFycm93OiBcIiZndDtcIixcblxuXHRcdC8vIGVuYWJsZXMgc2Vjb25kcyBpbiB0aGUgdGltZSBwaWNrZXJcblx0XHRlbmFibGVTZWNvbmRzOiBmYWxzZSxcblxuXHRcdC8vIHN0ZXAgc2l6ZSB1c2VkIHdoZW4gc2Nyb2xsaW5nL2luY3JlbWVudGluZyB0aGUgaG91ciBlbGVtZW50XG5cdFx0aG91ckluY3JlbWVudDogMSxcblxuXHRcdC8vIHN0ZXAgc2l6ZSB1c2VkIHdoZW4gc2Nyb2xsaW5nL2luY3JlbWVudGluZyB0aGUgbWludXRlIGVsZW1lbnRcblx0XHRtaW51dGVJbmNyZW1lbnQ6IDUsXG5cblx0XHQvLyBvbkNoYW5nZSBjYWxsYmFjayB3aGVuIHVzZXIgc2VsZWN0cyBhIGRhdGUgb3IgdGltZVxuXHRcdG9uQ2hhbmdlOiBudWxsLCAvLyBmdW5jdGlvbiAoZGF0ZU9iaiwgZGF0ZVN0cikge31cblxuXHRcdC8vIGNhbGxlZCBldmVyeSB0aW1lIGNhbGVuZGFyIGlzIG9wZW5lZFxuXHRcdG9uT3BlbjogbnVsbCwgLy8gZnVuY3Rpb24gKGRhdGVPYmosIGRhdGVTdHIpIHt9XG5cblx0XHQvLyBjYWxsZWQgZXZlcnkgdGltZSBjYWxlbmRhciBpcyBjbG9zZWRcblx0XHRvbkNsb3NlOiBudWxsLCAvLyBmdW5jdGlvbiAoZGF0ZU9iaiwgZGF0ZVN0cikge31cblxuXHRcdG9uVmFsdWVVcGRhdGU6IG51bGxcblx0fTtcblxuXHRpbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcblx0XHRpbnN0YW5jZUNvbmZpZyA9IGluc3RhbmNlQ29uZmlnIHx8IHt9O1xuXG5cdFx0c2VsZi5lbGVtZW50ID0gZWxlbWVudDtcblxuXHRcdHBhcnNlQ29uZmlnKCk7XG5cblx0XHRzZWxmLmlucHV0ID0gc2VsZi5jb25maWcud3JhcCA/IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWlucHV0XVwiKSA6IGVsZW1lbnQ7XG5cdFx0c2VsZi5pbnB1dC5jbGFzc0xpc3QuYWRkKFwiZmxhdHBpY2tyLWlucHV0XCIpO1xuXG5cdFx0aWYgKHNlbGYuY29uZmlnLmRlZmF1bHREYXRlKSB7XG5cdFx0XHRzZWxmLmNvbmZpZy5kZWZhdWx0RGF0ZSA9IHVEYXRlKHNlbGYuY29uZmlnLmRlZmF1bHREYXRlKTtcblx0XHR9XG5cblx0XHRpZiAoc2VsZi5pbnB1dC52YWx1ZSB8fCBzZWxmLmNvbmZpZy5kZWZhdWx0RGF0ZSkge1xuXHRcdFx0c2VsZi5zZWxlY3RlZERhdGVPYmogPSB1RGF0ZShzZWxmLmNvbmZpZy5kZWZhdWx0RGF0ZSB8fCBzZWxmLmlucHV0LnZhbHVlKTtcblx0XHR9XG5cblx0XHR3cmFwKCk7XG5cdFx0YnVpbGRDYWxlbmRhcigpO1xuXHRcdGJpbmQoKTtcblxuXHRcdHNlbGYudURhdGUgPSB1RGF0ZTtcblx0XHRzZWxmLmp1bXBUb0RhdGUoKTtcblx0XHR1cGRhdGVWYWx1ZSgpO1xuXHR9O1xuXG5cdHBhcnNlQ29uZmlnID0gZnVuY3Rpb24gcGFyc2VDb25maWcoKSB7XG5cdFx0c2VsZi5jb25maWcgPSB7fTtcblxuXHRcdE9iamVjdC5rZXlzKHNlbGYuZGVmYXVsdENvbmZpZykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRpZiAoaW5zdGFuY2VDb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRzZWxmLmNvbmZpZ1trZXldID0gaW5zdGFuY2VDb25maWdba2V5XTtcblx0XHRcdH0gZWxzZSBpZiAoc2VsZi5lbGVtZW50LmRhdGFzZXQgJiYgc2VsZi5lbGVtZW50LmRhdGFzZXQuaGFzT3duUHJvcGVydHkoa2V5LnRvTG93ZXJDYXNlKCkpKSB7XG5cdFx0XHRcdHNlbGYuY29uZmlnW2tleV0gPSBzZWxmLmVsZW1lbnQuZGF0YXNldFtrZXkudG9Mb3dlckNhc2UoKV07XG5cdFx0XHR9IGVsc2UgaWYgKCFzZWxmLmVsZW1lbnQuZGF0YXNldCAmJiBzZWxmLmVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS1cIiArIGtleSkpIHtcblx0XHRcdFx0c2VsZi5jb25maWdba2V5XSA9IHNlbGYuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiICsga2V5KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYuY29uZmlnW2tleV0gPSBmbGF0cGlja3IuaW5pdC5wcm90b3R5cGUuZGVmYXVsdENvbmZpZ1trZXldIHx8IHNlbGYuZGVmYXVsdENvbmZpZ1trZXldO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIHNlbGYuZGVmYXVsdENvbmZpZ1trZXldID09PSBcImJvb2xlYW5cIikge1xuXHRcdFx0XHRzZWxmLmNvbmZpZ1trZXldID0gc2VsZi5jb25maWdba2V5XSA9PT0gdHJ1ZSB8fCBzZWxmLmNvbmZpZ1trZXldID09PSBcIlwiIHx8IHNlbGYuY29uZmlnW2tleV0gPT09IFwidHJ1ZVwiO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoa2V5ID09PSBcImVuYWJsZVRpbWVcIiAmJiBzZWxmLmNvbmZpZ1trZXldKSB7XG5cdFx0XHRcdHNlbGYuZGVmYXVsdENvbmZpZy5kYXRlRm9ybWF0ID0gIXNlbGYuY29uZmlnLnRpbWVfMjRociA/IFwiWS1tLWQgaDppIEtcIiA6IFwiWS1tLWQgSDppXCI7XG5cdFx0XHRcdHNlbGYuZGVmYXVsdENvbmZpZy5hbHRGb3JtYXQgPSAhc2VsZi5jb25maWcudGltZV8yNGhyID8gXCJGIGogWSwgaDppIEtcIiA6IFwiRiBqLCBZIEg6aVwiO1xuXHRcdFx0fSBlbHNlIGlmIChrZXkgPT09IFwibm9DYWxlbmRhclwiICYmIHNlbGYuY29uZmlnW2tleV0pIHtcblx0XHRcdFx0c2VsZi5kZWZhdWx0Q29uZmlnLmRhdGVGb3JtYXQgPSBcImg6aSBLXCI7XG5cdFx0XHRcdHNlbGYuZGVmYXVsdENvbmZpZy5hbHRGb3JtYXQgPSBcImg6aSBLXCI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0Z2V0UmFuZG9tQ2FsZW5kYXJJZFN0ciA9IGZ1bmN0aW9uIGdldFJhbmRvbUNhbGVuZGFySWRTdHIoKSB7XG5cdFx0dmFyIHJhbmROdW0gPSB2b2lkIDAsXG5cdFx0ICAgIGlkU3RyID0gdm9pZCAwO1xuXHRcdGRvIHtcblx0XHRcdHJhbmROdW0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBNYXRoLnBvdygxMCwgMTApKTtcblx0XHRcdGlkU3RyID0gXCJmbGF0cGlja3ItXCIgKyByYW5kTnVtO1xuXHRcdH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkU3RyKSAhPT0gbnVsbCk7XG5cblx0XHRyZXR1cm4gaWRTdHI7XG5cdH07XG5cblx0dURhdGUgPSBmdW5jdGlvbiB1RGF0ZShkYXRlLCB0aW1lbGVzcykge1xuXHRcdHRpbWVsZXNzID0gdGltZWxlc3MgfHwgZmFsc2U7XG5cblx0XHRpZiAoZGF0ZSA9PT0gXCJ0b2RheVwiKSB7XG5cdFx0XHRkYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdHRpbWVsZXNzID0gdHJ1ZTtcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBkYXRlID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRkYXRlID0gZGF0ZS50cmltKCk7XG5cblx0XHRcdGlmIChzZWxmLmNvbmZpZy5wYXJzZURhdGUpIHtcblx0XHRcdFx0ZGF0ZSA9IHNlbGYuY29uZmlnLnBhcnNlRGF0ZShkYXRlKTtcblx0XHRcdH0gZWxzZSBpZiAoL15cXGRcXGRcXGRcXGRcXC1cXGR7MSwyfVxcLVxcZFxcZCQvLnRlc3QoZGF0ZSkpIHtcblx0XHRcdFx0Ly8gdGhpcyB1dGMgZGF0ZXN0cmluZyBnZXRzIHBhcnNlZCwgYnV0IGluY29ycmVjdGx5IGJ5IERhdGUucGFyc2Vcblx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKGRhdGUucmVwbGFjZSgvKFxcZCktKFxcZCkvZywgXCIkMS8kMlwiKSk7XG5cdFx0XHR9IGVsc2UgaWYgKERhdGUucGFyc2UoZGF0ZSkpIHtcblx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuXHRcdFx0fSBlbHNlIGlmICgvXlxcZFxcZFxcZFxcZFxcLVxcZFxcZFxcLVxcZFxcZC8udGVzdChkYXRlKSkge1xuXHRcdFx0XHQvLyBkaXNhYmxlIHNwZWNpYWwgdXRjIGRhdGVzdHJpbmdcblx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKGRhdGUucmVwbGFjZSgvKFxcZCktKFxcZCkvZywgXCIkMS8kMlwiKSk7XG5cdFx0XHR9IGVsc2UgaWYgKC9eKFxcZD9cXGQpOihcXGRcXGQpLy50ZXN0KGRhdGUpKSB7XG5cdFx0XHRcdC8vIHRpbWUtb25seSBwaWNrZXJcblx0XHRcdFx0dmFyIG1hdGNoZXMgPSBkYXRlLm1hdGNoKC9eKFxcZD9cXGQpOihcXGRcXGQpKDooXFxkXFxkKSk/LyksXG5cdFx0XHRcdCAgICBzZWNvbmRzID0gbWF0Y2hlc1s0XSAhPT0gdW5kZWZpbmVkID8gbWF0Y2hlc1s0XSA6IDA7XG5cblx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdGRhdGUuc2V0SG91cnMobWF0Y2hlc1sxXSwgbWF0Y2hlc1syXSwgc2Vjb25kcywgMCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiZmxhdHBpY2tyOiBpbnZhbGlkIGRhdGUgc3RyaW5nIFwiICsgZGF0ZSk7XG5cdFx0XHRcdGNvbnNvbGUuaW5mbyhzZWxmLmVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICghKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB8fCAhZGF0ZS5nZXRUaW1lKCkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGlmIChzZWxmLmNvbmZpZy51dGMgJiYgIWRhdGUuZnBfaXNVVEMpIHtcblx0XHRcdGRhdGUgPSBkYXRlLmZwX3RvVVRDKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRpbWVsZXNzKSB7XG5cdFx0XHRkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXHRcdH1cblxuXHRcdHJldHVybiBkYXRlO1xuXHR9O1xuXG5cdGVxdWFsRGF0ZXMgPSBmdW5jdGlvbiBlcXVhbERhdGVzKGRhdGUxLCBkYXRlMikge1xuXHRcdHJldHVybiBkYXRlMS5nZXREYXRlKCkgPT09IGRhdGUyLmdldERhdGUoKSAmJiBkYXRlMS5nZXRNb250aCgpID09PSBkYXRlMi5nZXRNb250aCgpICYmIGRhdGUxLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUyLmdldEZ1bGxZZWFyKCk7XG5cdH07XG5cblx0d3JhcCA9IGZ1bmN0aW9uIHdyYXAoKSB7XG5cdFx0d3JhcHBlckVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdyYXBwZXJcIik7XG5cblx0XHRpZiAoc2VsZi5jb25maWcuaW5saW5lIHx8IHNlbGYuY29uZmlnLnN0YXRpYykge1xuXHRcdFx0Ly8gV3JhcCBpbnB1dCBhbmQgcGxhY2UgY2FsZW5kYXIgdW5kZXJuZWF0aFxuXHRcdFx0c2VsZi5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXJFbGVtZW50LCBzZWxmLmVsZW1lbnQpO1xuXHRcdFx0d3JhcHBlckVsZW1lbnQuYXBwZW5kQ2hpbGQoc2VsZi5lbGVtZW50KTtcblxuXHRcdFx0d3JhcHBlckVsZW1lbnQuY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy5pbmxpbmUgPyBcImlubGluZVwiIDogXCJzdGF0aWNcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEluc2VydCBhdCBib3R0b20gb2YgQk9EWSB0YWcgdG8gZGlzcGxheSBvdXRzaWRlXG5cdFx0XHQvLyBvZiByZWxhdGl2ZSBwb3NpdGlvbmVkIGVsZW1lbnRzIHdpdGggY3NzIFwib3ZlcmZsb3c6IGhpZGRlbjtcIlxuXHRcdFx0Ly8gcHJvcGVydHkgc2V0LlxuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3cmFwcGVyRWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNlbGYuY29uZmlnLmFsdElucHV0KSB7XG5cdFx0XHQvLyByZXBsaWNhdGUgc2VsZi5lbGVtZW50XG5cdFx0XHRzZWxmLmFsdElucHV0ID0gY3JlYXRlRWxlbWVudChzZWxmLmlucHV0Lm5vZGVOYW1lLCBzZWxmLmNvbmZpZy5hbHRJbnB1dENsYXNzICsgXCIgZmxhdHBpY2tyLWlucHV0XCIpO1xuXHRcdFx0c2VsZi5hbHRJbnB1dC5wbGFjZWhvbGRlciA9IHNlbGYuaW5wdXQucGxhY2Vob2xkZXI7XG5cdFx0XHRzZWxmLmFsdElucHV0LnR5cGUgPSBcInRleHRcIjtcblxuXHRcdFx0c2VsZi5pbnB1dC50eXBlID0gXCJoaWRkZW5cIjtcblx0XHRcdHNlbGYuaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5hbHRJbnB1dCwgc2VsZi5pbnB1dC5uZXh0U2libGluZyk7XG5cdFx0fVxuXHR9O1xuXG5cdGdldERheXNpbk1vbnRoID0gZnVuY3Rpb24gZ2V0RGF5c2luTW9udGgoKSB7XG5cdFx0dmFyIG1vbnRoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gc2VsZi5jdXJyZW50TW9udGggOiBhcmd1bWVudHNbMF07XG5cblx0XHR2YXIgeXIgPSBzZWxmLmN1cnJlbnRZZWFyO1xuXG5cdFx0aWYgKG1vbnRoID09PSAxICYmICh5ciAlIDQgPT09IDAgJiYgeXIgJSAxMDAgIT09IDAgfHwgeXIgJSA0MDAgPT09IDApKSB7XG5cdFx0XHRyZXR1cm4gMjk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNlbGYubDEwbi5kYXlzSW5Nb250aFttb250aF07XG5cdH07XG5cblx0dXBkYXRlVmFsdWUgPSBmdW5jdGlvbiB1cGRhdGVWYWx1ZShlKSB7XG5cdFx0aWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgJiYgIXNlbGYuc2VsZWN0ZWREYXRlT2JqKSB7XG5cdFx0XHQvLyBwaWNraW5nIHRpbWUgb25seSBhbmQgbWV0aG9kIHRyaWdnZXJlZCBmcm9tIHBpY2tlclxuXHRcdFx0c2VsZi5zZWxlY3RlZERhdGVPYmogPSBuZXcgRGF0ZSgpO1xuXHRcdH0gZWxzZSBpZiAoIXNlbGYuc2VsZWN0ZWREYXRlT2JqKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGUpIHtcblx0XHRcdGUudGFyZ2V0LmJsdXIoKTtcblx0XHR9XG5cblx0XHR2YXIgdGltZUhhc0NoYW5nZWQgPSB2b2lkIDA7XG5cblx0XHRpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkge1xuXHRcdFx0dmFyIHByZXZpb3VzVGltZXN0YW1wID0gc2VsZi5zZWxlY3RlZERhdGVPYmouZ2V0VGltZSgpO1xuXG5cdFx0XHQvLyB1cGRhdGUgdGltZVxuXHRcdFx0dmFyIGhvdXJzID0gcGFyc2VJbnQoc2VsZi5ob3VyRWxlbWVudC52YWx1ZSwgMTApIHx8IDAsXG5cdFx0XHQgICAgc2Vjb25kcyA9IHZvaWQgMDtcblxuXHRcdFx0dmFyIG1pbnV0ZXMgPSAoNjAgKyAocGFyc2VJbnQoc2VsZi5taW51dGVFbGVtZW50LnZhbHVlLCAxMCkgfHwgMCkpICUgNjA7XG5cblx0XHRcdGlmIChzZWxmLmNvbmZpZy5lbmFibGVTZWNvbmRzKSB7XG5cdFx0XHRcdHNlY29uZHMgPSAoNjAgKyBwYXJzZUludChzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUsIDEwKSB8fCAwKSAlIDYwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXNlbGYuY29uZmlnLnRpbWVfMjRocikge1xuXHRcdFx0XHQvLyB0aGUgcmVhbCBudW1iZXIgb2YgaG91cnMgZm9yIHRoZSBkYXRlIG9iamVjdFxuXHRcdFx0XHRob3VycyA9IGhvdXJzICUgMTIgKyAxMiAqIChzZWxmLmFtUE0uaW5uZXJIVE1MID09PSBcIlBNXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxmLnNlbGVjdGVkRGF0ZU9iai5zZXRIb3Vycyhob3VycywgbWludXRlcywgc2Vjb25kcyA9PT0gdW5kZWZpbmVkID8gc2VsZi5zZWxlY3RlZERhdGVPYmouZ2V0U2Vjb25kcygpIDogc2Vjb25kcyk7XG5cblx0XHRcdHNlbGYuaG91ckVsZW1lbnQudmFsdWUgPSBwYWQoIXNlbGYuY29uZmlnLnRpbWVfMjRociA/ICgxMiArIGhvdXJzKSAlIDEyICsgMTIgKiAoaG91cnMgJSAxMiA9PT0gMCkgOiBob3Vycyk7XG5cdFx0XHRzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUgPSBwYWQobWludXRlcyk7XG5cblx0XHRcdGlmIChzZWNvbmRzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0c2VsZi5zZWNvbmRFbGVtZW50LnZhbHVlID0gcGFkKHNlY29uZHMpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aW1lSGFzQ2hhbmdlZCA9IHNlbGYuc2VsZWN0ZWREYXRlT2JqLmdldFRpbWUoKSAhPT0gcHJldmlvdXNUaW1lc3RhbXA7XG5cdFx0fVxuXG5cdFx0c2VsZi5pbnB1dC52YWx1ZSA9IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTtcblxuXHRcdGlmIChzZWxmLmFsdElucHV0KSB7XG5cdFx0XHRzZWxmLmFsdElucHV0LnZhbHVlID0gc2VsZi5mb3JtYXREYXRlKHNlbGYuY29uZmlnLmFsdEZvcm1hdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGUgJiYgKHRpbWVIYXNDaGFuZ2VkIHx8IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikpKSB7XG5cdFx0XHR0cmlnZ2VyQ2hhbmdlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNlbGYuY29uZmlnLm9uVmFsdWVVcGRhdGUpIHtcblx0XHRcdHNlbGYuY29uZmlnLm9uVmFsdWVVcGRhdGUoc2VsZi5zZWxlY3RlZERhdGVPYmosIHNlbGYuaW5wdXQudmFsdWUpO1xuXHRcdH1cblx0fTtcblxuXHRwYWQgPSBmdW5jdGlvbiBwYWQobnVtKSB7XG5cdFx0cmV0dXJuIChcIjBcIiArIG51bSkuc2xpY2UoLTIpO1xuXHR9O1xuXG5cdHNlbGYuZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlRm9ybWF0KSB7XG5cdFx0dmFyIGZvcm1hdHRlZERhdGUgPSBcIlwiO1xuXHRcdHZhciBmb3JtYXRQaWVjZXMgPSBkYXRlRm9ybWF0LnNwbGl0KFwiXCIpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBmb3JtYXRQaWVjZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjID0gZm9ybWF0UGllY2VzW2ldO1xuXHRcdFx0aWYgKHNlbGYuZm9ybWF0cy5oYXNPd25Qcm9wZXJ0eShjKSAmJiBmb3JtYXRQaWVjZXNbaSAtIDFdICE9PSBcIlxcXFxcIikge1xuXHRcdFx0XHRmb3JtYXR0ZWREYXRlICs9IHNlbGYuZm9ybWF0c1tjXSgpO1xuXHRcdFx0fSBlbHNlIGlmIChjICE9PSBcIlxcXFxcIikge1xuXHRcdFx0XHRmb3JtYXR0ZWREYXRlICs9IGM7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZvcm1hdHRlZERhdGU7XG5cdH07XG5cblx0bW9udGhUb1N0ciA9IGZ1bmN0aW9uIG1vbnRoVG9TdHIoZGF0ZSwgc2hvcnRoYW5kKSB7XG5cdFx0aWYgKHNob3J0aGFuZCB8fCBzZWxmLmNvbmZpZy5zaG9ydGhhbmRDdXJyZW50TW9udGgpIHtcblx0XHRcdHJldHVybiBzZWxmLmwxMG4ubW9udGhzLnNob3J0aGFuZFtkYXRlXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2VsZi5sMTBuLm1vbnRocy5sb25naGFuZFtkYXRlXTtcblx0fTtcblxuXHRpc0VuYWJsZWQgPSBmdW5jdGlvbiBpc0VuYWJsZWQoZGF0ZVRvQ2hlY2spIHtcblx0XHRpZiAoc2VsZi5jb25maWcubWluRGF0ZSAmJiBkYXRlVG9DaGVjayA8IHNlbGYuY29uZmlnLm1pbkRhdGUgfHwgc2VsZi5jb25maWcubWF4RGF0ZSAmJiBkYXRlVG9DaGVjayA+IHNlbGYuY29uZmlnLm1heERhdGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRkYXRlVG9DaGVjayA9IHVEYXRlKGRhdGVUb0NoZWNrLCB0cnVlKTsgLy8gdGltZWxlc3NcblxuXHRcdHZhciBib29sID0gc2VsZi5jb25maWcuZW5hYmxlLmxlbmd0aCA+IDAsXG5cdFx0ICAgIGFycmF5ID0gYm9vbCA/IHNlbGYuY29uZmlnLmVuYWJsZSA6IHNlbGYuY29uZmlnLmRpc2FibGU7XG5cblx0XHR2YXIgZCA9IHZvaWQgMDtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGQgPSBhcnJheVtpXTtcblxuXHRcdFx0aWYgKGQgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBkKGRhdGVUb0NoZWNrKSkge1xuXHRcdFx0XHQvLyBkaXNhYmxlZCBieSBmdW5jdGlvblxuXHRcdFx0XHRyZXR1cm4gYm9vbDtcblx0XHRcdH0gZWxzZSBpZiAoIC8vIGRpc2FibGVkIHdlZWtkYXlcblx0XHRcdHR5cGVvZiBkID09PSBcInN0cmluZ1wiICYmIC9ed2tkLy50ZXN0KGQpICYmIGRhdGVUb0NoZWNrLmdldERheSgpID09PSAocGFyc2VJbnQoZC5zbGljZSgtMSksIDEwKSArIHNlbGYubDEwbi5maXJzdERheU9mV2VlayAtIDEpICUgNykge1xuXHRcdFx0XHRyZXR1cm4gYm9vbDtcblx0XHRcdH0gZWxzZSBpZiAoKGQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBkID09PSBcInN0cmluZ1wiICYmICEvXndrZC8udGVzdChkKSkgJiYgdURhdGUoZCwgdHJ1ZSkuZ2V0VGltZSgpID09PSBkYXRlVG9DaGVjay5nZXRUaW1lKCkpIHtcblx0XHRcdFx0Ly8gZGlzYWJsZWQgYnkgZGF0ZSBzdHJpbmdcblx0XHRcdFx0cmV0dXJuIGJvb2w7XG5cdFx0XHR9IGVsc2UgaWYgKCAvLyBkaXNhYmxlZCBieSByYW5nZVxuXHRcdFx0KHR5cGVvZiBkID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZCkpID09PSBcIm9iamVjdFwiICYmIGQuaGFzT3duUHJvcGVydHkoXCJmcm9tXCIpICYmIGRhdGVUb0NoZWNrID49IHVEYXRlKGQuZnJvbSkgJiYgZGF0ZVRvQ2hlY2sgPD0gdURhdGUoZC50bykpIHtcblx0XHRcdFx0cmV0dXJuIGJvb2w7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuICFib29sO1xuXHR9O1xuXG5cdHllYXJTY3JvbGwgPSBmdW5jdGlvbiB5ZWFyU2Nyb2xsKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciBkZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBldmVudC53aGVlbERlbHRhIHx8IC1ldmVudC5kZWx0YVkpKTtcblx0XHRzZWxmLmN1cnJlbnRZZWFyID0gZXZlbnQudGFyZ2V0LnZhbHVlID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCkgKyBkZWx0YTtcblx0XHRzZWxmLnJlZHJhdygpO1xuXHR9O1xuXG5cdHRpbWVXcmFwcGVyID0gZnVuY3Rpb24gdGltZVdyYXBwZXIoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciBtaW4gPSBwYXJzZUludChlLnRhcmdldC5taW4sIDEwKSxcblx0XHQgICAgbWF4ID0gcGFyc2VJbnQoZS50YXJnZXQubWF4LCAxMCksXG5cdFx0ICAgIHN0ZXAgPSBwYXJzZUludChlLnRhcmdldC5zdGVwLCAxMCksXG5cdFx0ICAgIHZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcblxuXHRcdHZhciBuZXdWYWx1ZSA9IHZhbHVlO1xuXG5cdFx0aWYgKGUudHlwZSA9PT0gXCJ3aGVlbFwiKSB7XG5cdFx0XHRuZXdWYWx1ZSA9IHZhbHVlICsgc3RlcCAqIE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBlLndoZWVsRGVsdGEgfHwgLWUuZGVsdGFZKSk7XG5cdFx0fVxuXG5cdFx0aWYgKG5ld1ZhbHVlIDw9IG1pbikge1xuXHRcdFx0bmV3VmFsdWUgPSBtYXggLSBzdGVwO1xuXHRcdH0gZWxzZSBpZiAobmV3VmFsdWUgPj0gbWF4KSB7XG5cdFx0XHRuZXdWYWx1ZSA9IG1pbiArIHN0ZXA7XG5cdFx0fVxuXG5cdFx0ZS50YXJnZXQudmFsdWUgPSBwYWQobmV3VmFsdWUpO1xuXHR9O1xuXG5cdHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGggPSBmdW5jdGlvbiB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCkge1xuXHRcdGN1cnJlbnRNb250aEVsZW1lbnQudGV4dENvbnRlbnQgPSBtb250aFRvU3RyKHNlbGYuY3VycmVudE1vbnRoKSArIFwiIFwiO1xuXHRcdGN1cnJlbnRZZWFyRWxlbWVudC52YWx1ZSA9IHNlbGYuY3VycmVudFllYXI7XG5cdH07XG5cblx0aGFuZGxlWWVhckNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZVllYXJDaGFuZ2UoKSB7XG5cdFx0aWYgKHNlbGYuY3VycmVudE1vbnRoIDwgMCB8fCBzZWxmLmN1cnJlbnRNb250aCA+IDExKSB7XG5cdFx0XHRzZWxmLmN1cnJlbnRZZWFyICs9IHNlbGYuY3VycmVudE1vbnRoICUgMTE7XG5cdFx0XHRzZWxmLmN1cnJlbnRNb250aCA9IChzZWxmLmN1cnJlbnRNb250aCArIDEyKSAlIDEyO1xuXHRcdH1cblx0fTtcblxuXHRkb2N1bWVudENsaWNrID0gZnVuY3Rpb24gZG9jdW1lbnRDbGljayhlKSB7XG5cdFx0dmFyIGlzQ2FsZW5kYXJFbGVtZW50ID0gd3JhcHBlckVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpLFxuXHRcdCAgICBpc0lucHV0ID0gc2VsZi5lbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSB8fCBlLnRhcmdldCA9PT0gc2VsZi5hbHRJbnB1dDtcblxuXHRcdGlmIChzZWxmLmlzT3BlbiAmJiAhaXNDYWxlbmRhckVsZW1lbnQgJiYgIWlzSW5wdXQpIHtcblx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHR9XG5cdH07XG5cblx0Y2hhbmdlTW9udGggPSBmdW5jdGlvbiBjaGFuZ2VNb250aChvZmZzZXQpIHtcblx0XHRzZWxmLmN1cnJlbnRNb250aCArPSBvZmZzZXQ7XG5cblx0XHRoYW5kbGVZZWFyQ2hhbmdlKCk7XG5cdFx0dXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xuXHRcdGJ1aWxkRGF5cygpO1xuXHRcdChzZWxmLmNvbmZpZy5ub0NhbGVuZGFyID8gdGltZUNvbnRhaW5lciA6IGNhbGVuZGFyKS5mb2N1cygpO1xuXHR9O1xuXG5cdHNlbGVjdERhdGUgPSBmdW5jdGlvbiBzZWxlY3REYXRlKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGlmIChzZWxmLmNvbmZpZy5hbGxvd0lucHV0ICYmIGUudGFyZ2V0ID09PSAoc2VsZi5hbHRJbnB1dCB8fCBzZWxmLmlucHV0KSAmJiBlLndoaWNoID09PSAxMykge1xuXHRcdFx0c2VsZi5zZXREYXRlKChzZWxmLmFsdElucHV0IHx8IHNlbGYuaW5wdXQpLnZhbHVlKTtcblx0XHRcdHNlbGYucmVkcmF3KCk7XG5cdFx0fSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJmbGF0cGlja3ItZGF5XCIpKSB7XG5cdFx0XHR2YXIgaXNQcmV2TW9udGhEYXkgPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcmV2TW9udGhEYXlcIiksXG5cdFx0XHQgICAgaXNOZXh0TW9udGhEYXkgPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJuZXh0TW9udGhEYXlcIiksXG5cdFx0XHQgICAgbW9udGhOdW0gPSBzZWxmLmN1cnJlbnRNb250aCAtIGlzUHJldk1vbnRoRGF5ICsgaXNOZXh0TW9udGhEYXk7XG5cblx0XHRcdGlmIChpc1ByZXZNb250aERheSB8fCBpc05leHRNb250aERheSkge1xuXHRcdFx0XHRjaGFuZ2VNb250aCgraXNOZXh0TW9udGhEYXkgLSBpc1ByZXZNb250aERheSk7XG5cdFx0XHR9XG5cblx0XHRcdHNlbGYuc2VsZWN0ZWREYXRlT2JqID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgbW9udGhOdW0sIGUudGFyZ2V0LmlubmVySFRNTCk7XG5cblx0XHRcdHVwZGF0ZVZhbHVlKGUpO1xuXHRcdFx0YnVpbGREYXlzKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGJ1aWxkQ2FsZW5kYXIgPSBmdW5jdGlvbiBidWlsZENhbGVuZGFyKCkge1xuXHRcdGNhbGVuZGFyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1jYWxlbmRhclwiKTtcblx0XHRjYWxlbmRhckNvbnRhaW5lci5pZCA9IGdldFJhbmRvbUNhbGVuZGFySWRTdHIoKTtcblxuXHRcdGNhbGVuZGFyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1kYXlzXCIpO1xuXHRcdGNhbGVuZGFyLnRhYkluZGV4ID0gLTE7XG5cblx0XHRpZiAoIXNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpIHtcblx0XHRcdGJ1aWxkTW9udGhOYXZpZ2F0aW9uKCk7XG5cdFx0XHRidWlsZFdlZWtkYXlzKCk7XG5cblx0XHRcdGlmIChzZWxmLmNvbmZpZy53ZWVrTnVtYmVycykge1xuXHRcdFx0XHRidWlsZFdlZWtzKCk7XG5cdFx0XHR9XG5cblx0XHRcdGJ1aWxkRGF5cygpO1xuXG5cdFx0XHRjYWxlbmRhckNvbnRhaW5lci5hcHBlbmRDaGlsZChjYWxlbmRhcik7XG5cdFx0fVxuXG5cdFx0d3JhcHBlckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FsZW5kYXJDb250YWluZXIpO1xuXG5cdFx0aWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUpIHtcblx0XHRcdGJ1aWxkVGltZSgpO1xuXHRcdH1cblx0fTtcblxuXHRidWlsZE1vbnRoTmF2aWdhdGlvbiA9IGZ1bmN0aW9uIGJ1aWxkTW9udGhOYXZpZ2F0aW9uKCkge1xuXHRcdG1vbnRoc05hdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItbW9udGhcIik7XG5cblx0XHRwcmV2TW9udGhOYXYgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1wcmV2LW1vbnRoXCIpO1xuXHRcdHByZXZNb250aE5hdi5pbm5lckhUTUwgPSBzZWxmLmNvbmZpZy5wcmV2QXJyb3c7XG5cblx0XHRjdXJyZW50TW9udGhFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJjdXJfbW9udGhcIik7XG5cblx0XHRjdXJyZW50WWVhckVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJjdXJfeWVhclwiKTtcblx0XHRjdXJyZW50WWVhckVsZW1lbnQudHlwZSA9IFwibnVtYmVyXCI7XG5cdFx0Y3VycmVudFllYXJFbGVtZW50LnRpdGxlID0gc2VsZi5sMTBuLnNjcm9sbFRpdGxlO1xuXG5cdFx0bmV4dE1vbnRoTmF2ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItbmV4dC1tb250aFwiKTtcblx0XHRuZXh0TW9udGhOYXYuaW5uZXJIVE1MID0gc2VsZi5jb25maWcubmV4dEFycm93O1xuXG5cdFx0bmF2aWdhdGlvbkN1cnJlbnRNb250aCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLWN1cnJlbnQtbW9udGhcIik7XG5cdFx0bmF2aWdhdGlvbkN1cnJlbnRNb250aC5hcHBlbmRDaGlsZChjdXJyZW50TW9udGhFbGVtZW50KTtcblx0XHRuYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmFwcGVuZENoaWxkKGN1cnJlbnRZZWFyRWxlbWVudCk7XG5cblx0XHRtb250aHNOYXYuYXBwZW5kQ2hpbGQocHJldk1vbnRoTmF2KTtcblx0XHRtb250aHNOYXYuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbkN1cnJlbnRNb250aCk7XG5cdFx0bW9udGhzTmF2LmFwcGVuZENoaWxkKG5leHRNb250aE5hdik7XG5cblx0XHRjYWxlbmRhckNvbnRhaW5lci5hcHBlbmRDaGlsZChtb250aHNOYXYpO1xuXHRcdHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcblx0fTtcblxuXHRidWlsZFdlZWtkYXlzID0gZnVuY3Rpb24gYnVpbGRXZWVrZGF5cygpIHtcblx0XHR3ZWVrZGF5Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13ZWVrZGF5c1wiKTtcblx0XHR2YXIgZmlyc3REYXlPZldlZWsgPSBzZWxmLmwxMG4uZmlyc3REYXlPZldlZWs7XG5cblx0XHR2YXIgd2Vla2RheXMgPSBzZWxmLmwxMG4ud2Vla2RheXMuc2hvcnRoYW5kLnNsaWNlKCk7XG5cblx0XHRpZiAoZmlyc3REYXlPZldlZWsgPiAwICYmIGZpcnN0RGF5T2ZXZWVrIDwgd2Vla2RheXMubGVuZ3RoKSB7XG5cdFx0XHR3ZWVrZGF5cyA9IFtdLmNvbmNhdCh3ZWVrZGF5cy5zcGxpY2UoZmlyc3REYXlPZldlZWssIHdlZWtkYXlzLmxlbmd0aCksIHdlZWtkYXlzLnNwbGljZSgwLCBmaXJzdERheU9mV2VlaykpO1xuXHRcdH1cblxuXHRcdGlmIChzZWxmLmNvbmZpZy53ZWVrTnVtYmVycykge1xuXHRcdFx0d2Vla2RheUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIjxzcGFuPlwiICsgc2VsZi5sMTBuLndlZWtBYmJyZXZpYXRpb24gKyBcIjwvc3Bhbj5cIjtcblx0XHR9XG5cblx0XHR3ZWVrZGF5Q29udGFpbmVyLmlubmVySFRNTCArPSBcIjxzcGFuPlwiICsgd2Vla2RheXMuam9pbihcIjwvc3Bhbj48c3Bhbj5cIikgKyBcIjwvc3Bhbj5cIjtcblxuXHRcdGNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlZWtkYXlDb250YWluZXIpO1xuXHR9O1xuXG5cdGJ1aWxkV2Vla3MgPSBmdW5jdGlvbiBidWlsZFdlZWtzKCkge1xuXHRcdGNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNXZWVrc1wiKTtcblxuXHRcdHdlZWtOdW1iZXJzID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13ZWVrc1wiKTtcblx0XHRjYWxlbmRhckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrTnVtYmVycyk7XG5cdH07XG5cblx0YnVpbGREYXlzID0gZnVuY3Rpb24gYnVpbGREYXlzKCkge1xuXHRcdHZhciBmaXJzdE9mTW9udGggPSAobmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgsIDEpLmdldERheSgpIC0gc2VsZi5sMTBuLmZpcnN0RGF5T2ZXZWVrICsgNykgJSA3LFxuXHRcdCAgICBkYXlzSW5Nb250aCA9IGdldERheXNpbk1vbnRoKCksXG5cdFx0ICAgIHByZXZNb250aERheXMgPSBnZXREYXlzaW5Nb250aCgoc2VsZi5jdXJyZW50TW9udGggLSAxICsgMTIpICUgMTIpLFxuXHRcdCAgICBkYXlzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG5cdFx0dmFyIGRheU51bWJlciA9IHByZXZNb250aERheXMgKyAxIC0gZmlyc3RPZk1vbnRoLFxuXHRcdCAgICBjdXJyZW50RGF0ZSA9IHZvaWQgMCxcblx0XHQgICAgZGF0ZUlzRGlzYWJsZWQgPSB2b2lkIDA7XG5cblx0XHRpZiAoc2VsZi5jb25maWcud2Vla051bWJlcnMpIHtcblx0XHRcdHdlZWtOdW1iZXJzLmlubmVySFRNTCA9IFwiXCI7XG5cdFx0fVxuXG5cdFx0Y2FsZW5kYXIuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRcdHNlbGYuY29uZmlnLm1pbkRhdGUgPSB1RGF0ZShzZWxmLmNvbmZpZy5taW5EYXRlLCB0cnVlKTtcblx0XHRzZWxmLmNvbmZpZy5tYXhEYXRlID0gdURhdGUoc2VsZi5jb25maWcubWF4RGF0ZSwgdHJ1ZSk7XG5cblx0XHQvLyBwcmVwZW5kIGRheXMgZnJvbSB0aGUgZW5kaW5nIG9mIHByZXZpb3VzIG1vbnRoXG5cdFx0Zm9yICg7IGRheU51bWJlciA8PSBwcmV2TW9udGhEYXlzOyBkYXlOdW1iZXIrKykge1xuXHRcdFx0dmFyIGN1ckRhdGUgPSBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCAtIDEsIGRheU51bWJlciwgMCwgMCwgMCwgMCwgMCksXG5cdFx0XHQgICAgZGF0ZUlzRW5hYmxlZCA9IGlzRW5hYmxlZChjdXJEYXRlKSxcblx0XHRcdCAgICBkYXlFbGVtID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgZGF0ZUlzRW5hYmxlZCA/IFwiZmxhdHBpY2tyLWRheSBwcmV2TW9udGhEYXlcIiA6IFwiZGlzYWJsZWRcIiwgZGF5TnVtYmVyKTtcblxuXHRcdFx0aWYgKGRhdGVJc0VuYWJsZWQpIHtcblx0XHRcdFx0ZGF5RWxlbS50YWJJbmRleCA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGRheXMuYXBwZW5kQ2hpbGQoZGF5RWxlbSk7XG5cdFx0fVxuXG5cdFx0Ly8gU3RhcnQgYXQgMSBzaW5jZSB0aGVyZSBpcyBubyAwdGggZGF5XG5cdFx0Zm9yIChkYXlOdW1iZXIgPSAxOyBkYXlOdW1iZXIgPD0gZGF5c0luTW9udGg7IGRheU51bWJlcisrKSB7XG5cdFx0XHRjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoLCBkYXlOdW1iZXIsIDAsIDAsIDAsIDAsIDApO1xuXG5cdFx0XHRpZiAoc2VsZi5jb25maWcud2Vla051bWJlcnMgJiYgZGF5TnVtYmVyICUgNyA9PT0gMSkge1xuXHRcdFx0XHR3ZWVrTnVtYmVycy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImRpc2FibGVkIGZsYXRwaWNrci1kYXlcIiwgY3VycmVudERhdGUuZnBfZ2V0V2VlaygpKSk7XG5cdFx0XHR9XG5cblx0XHRcdGRhdGVJc0Rpc2FibGVkID0gIWlzRW5hYmxlZChjdXJyZW50RGF0ZSk7XG5cblx0XHRcdHZhciBkYXlFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgZGF0ZUlzRGlzYWJsZWQgPyBcImRpc2FibGVkXCIgOiBcImZsYXRwaWNrci1kYXlcIiwgZGF5TnVtYmVyKTtcblxuXHRcdFx0aWYgKCFkYXRlSXNEaXNhYmxlZCkge1xuXHRcdFx0XHRkYXlFbGVtZW50LnRhYkluZGV4ID0gMDtcblxuXHRcdFx0XHRpZiAoZXF1YWxEYXRlcyhjdXJyZW50RGF0ZSwgbm93KSkge1xuXHRcdFx0XHRcdGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHNlbGYuc2VsZWN0ZWREYXRlT2JqICYmIGVxdWFsRGF0ZXMoY3VycmVudERhdGUsIHNlbGYuc2VsZWN0ZWREYXRlT2JqKSkge1xuXHRcdFx0XHRcdGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGRheXMuYXBwZW5kQ2hpbGQoZGF5RWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0Ly8gYXBwZW5kIGRheXMgZnJvbSB0aGUgbmV4dCBtb250aFxuXHRcdGZvciAodmFyIGRheU51bSA9IGRheXNJbk1vbnRoICsgMTsgZGF5TnVtIDw9IDQyIC0gZmlyc3RPZk1vbnRoOyBkYXlOdW0rKykge1xuXHRcdFx0dmFyIF9jdXJEYXRlID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGggKyAxLCBkYXlOdW0gJSBkYXlzSW5Nb250aCwgMCwgMCwgMCwgMCwgMCksXG5cdFx0XHQgICAgX2RhdGVJc0VuYWJsZWQgPSBpc0VuYWJsZWQoX2N1ckRhdGUpLFxuXHRcdFx0ICAgIF9kYXlFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgX2RhdGVJc0VuYWJsZWQgPyBcIm5leHRNb250aERheSBmbGF0cGlja3ItZGF5XCIgOiBcImRpc2FibGVkXCIsIGRheU51bSAlIGRheXNJbk1vbnRoKTtcblxuXHRcdFx0aWYgKHNlbGYuY29uZmlnLndlZWtOdW1iZXJzICYmIGRheU51bSAlIDcgPT09IDEpIHtcblx0XHRcdFx0d2Vla051bWJlcnMuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJkaXNhYmxlZFwiLCBfY3VyRGF0ZS5mcF9nZXRXZWVrKCkpKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKF9kYXRlSXNFbmFibGVkKSB7XG5cdFx0XHRcdF9kYXlFbGVtZW50LnRhYkluZGV4ID0gMDtcblx0XHRcdH1cblxuXHRcdFx0ZGF5cy5hcHBlbmRDaGlsZChfZGF5RWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0Y2FsZW5kYXIuYXBwZW5kQ2hpbGQoZGF5cyk7XG5cdH07XG5cblx0YnVpbGRUaW1lID0gZnVuY3Rpb24gYnVpbGRUaW1lKCkge1xuXHRcdHRpbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXRpbWVcIik7XG5cdFx0dGltZUNvbnRhaW5lci50YWJJbmRleCA9IC0xO1xuXHRcdHZhciBzZXBhcmF0b3IgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci10aW1lLXNlcGFyYXRvclwiLCBcIjpcIik7XG5cblx0XHRzZWxmLmhvdXJFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwiZmxhdHBpY2tyLWhvdXJcIik7XG5cdFx0c2VsZi5taW51dGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwiZmxhdHBpY2tyLW1pbnV0ZVwiKTtcblxuXHRcdHNlbGYuaG91ckVsZW1lbnQudGFiSW5kZXggPSBzZWxmLm1pbnV0ZUVsZW1lbnQudGFiSW5kZXggPSAwO1xuXHRcdHNlbGYuaG91ckVsZW1lbnQudHlwZSA9IHNlbGYubWludXRlRWxlbWVudC50eXBlID0gXCJudW1iZXJcIjtcblxuXHRcdHNlbGYuaG91ckVsZW1lbnQudmFsdWUgPSBzZWxmLnNlbGVjdGVkRGF0ZU9iaiA/IHBhZChzZWxmLnNlbGVjdGVkRGF0ZU9iai5nZXRIb3VycygpKSA6IDEyO1xuXG5cdFx0c2VsZi5taW51dGVFbGVtZW50LnZhbHVlID0gc2VsZi5zZWxlY3RlZERhdGVPYmogPyBwYWQoc2VsZi5zZWxlY3RlZERhdGVPYmouZ2V0TWludXRlcygpKSA6IFwiMDBcIjtcblxuXHRcdHNlbGYuaG91ckVsZW1lbnQuc3RlcCA9IHNlbGYuY29uZmlnLmhvdXJJbmNyZW1lbnQ7XG5cdFx0c2VsZi5taW51dGVFbGVtZW50LnN0ZXAgPSBzZWxmLmNvbmZpZy5taW51dGVJbmNyZW1lbnQ7XG5cblx0XHRzZWxmLmhvdXJFbGVtZW50Lm1pbiA9IC1zZWxmLmNvbmZpZy50aW1lXzI0aHI7XG5cdFx0c2VsZi5ob3VyRWxlbWVudC5tYXggPSBzZWxmLmNvbmZpZy50aW1lXzI0aHIgPyAyNCA6IDEzO1xuXG5cdFx0c2VsZi5taW51dGVFbGVtZW50Lm1pbiA9IC1zZWxmLm1pbnV0ZUVsZW1lbnQuc3RlcDtcblx0XHRzZWxmLm1pbnV0ZUVsZW1lbnQubWF4ID0gNjA7XG5cblx0XHRzZWxmLmhvdXJFbGVtZW50LnRpdGxlID0gc2VsZi5taW51dGVFbGVtZW50LnRpdGxlID0gc2VsZi5sMTBuLnNjcm9sbFRpdGxlO1xuXG5cdFx0dGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLmhvdXJFbGVtZW50KTtcblx0XHR0aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlcGFyYXRvcik7XG5cdFx0dGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLm1pbnV0ZUVsZW1lbnQpO1xuXG5cdFx0aWYgKHNlbGYuY29uZmlnLmVuYWJsZVNlY29uZHMpIHtcblx0XHRcdHRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhcy1zZWNvbmRzXCIpO1xuXG5cdFx0XHRzZWxmLnNlY29uZEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJmbGF0cGlja3Itc2Vjb25kXCIpO1xuXHRcdFx0c2VsZi5zZWNvbmRFbGVtZW50LnR5cGUgPSBcIm51bWJlclwiO1xuXHRcdFx0c2VsZi5zZWNvbmRFbGVtZW50LnZhbHVlID0gc2VsZi5zZWxlY3RlZERhdGVPYmogPyBwYWQoc2VsZi5zZWxlY3RlZERhdGVPYmouZ2V0U2Vjb25kcygpKSA6IFwiMDBcIjtcblxuXHRcdFx0c2VsZi5zZWNvbmRFbGVtZW50LnN0ZXAgPSBzZWxmLm1pbnV0ZUVsZW1lbnQuc3RlcDtcblx0XHRcdHNlbGYuc2Vjb25kRWxlbWVudC5taW4gPSBzZWxmLm1pbnV0ZUVsZW1lbnQubWluO1xuXHRcdFx0c2VsZi5zZWNvbmRFbGVtZW50Lm1heCA9IHNlbGYubWludXRlRWxlbWVudC5tYXg7XG5cblx0XHRcdHRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItdGltZS1zZXBhcmF0b3JcIiwgXCI6XCIpKTtcblx0XHRcdHRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5zZWNvbmRFbGVtZW50KTtcblx0XHR9XG5cblx0XHRpZiAoIXNlbGYuY29uZmlnLnRpbWVfMjRocikge1xuXHRcdFx0Ly8gYWRkIHNlbGYuYW1QTSBpZiBhcHByb3ByaWF0ZVxuXHRcdFx0c2VsZi5hbVBNID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItYW0tcG1cIiwgW1wiQU1cIiwgXCJQTVwiXVtzZWxmLmhvdXJFbGVtZW50LnZhbHVlID4gMTEgfCAwXSk7XG5cdFx0XHRzZWxmLmFtUE0udGl0bGUgPSBzZWxmLmwxMG4udG9nZ2xlVGl0bGU7XG5cdFx0XHRzZWxmLmFtUE0udGFiSW5kZXggPSAwO1xuXHRcdFx0dGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLmFtUE0pO1xuXHRcdH1cblxuXHRcdGNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVDb250YWluZXIpO1xuXHR9O1xuXG5cdGJpbmQgPSBmdW5jdGlvbiBiaW5kKCkge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25SZXNpemUpO1xuXG5cdFx0aWYgKHNlbGYuY29uZmlnLmNsaWNrT3BlbnMpIHtcblx0XHRcdChzZWxmLmFsdElucHV0IHx8IHNlbGYuaW5wdXQpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxmLm9wZW4pO1xuXHRcdFx0KHNlbGYuYWx0SW5wdXQgfHwgc2VsZi5pbnB1dCkuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHNlbGYub3Blbik7XG5cdFx0fVxuXG5cdFx0aWYgKHNlbGYuY29uZmlnLndyYXAgJiYgc2VsZi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1vcGVuXVwiKSkge1xuXHRcdFx0c2VsZi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1vcGVuXVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VsZi5vcGVuKTtcblx0XHR9XG5cblx0XHRpZiAoc2VsZi5jb25maWcud3JhcCAmJiBzZWxmLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNsb3NlXVwiKSkge1xuXHRcdFx0c2VsZi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jbG9zZV1cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGYuY2xvc2UpO1xuXHRcdH1cblxuXHRcdGlmIChzZWxmLmNvbmZpZy53cmFwICYmIHNlbGYuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9nZ2xlXVwiKSkge1xuXHRcdFx0c2VsZi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2dnbGVdXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxmLnRvZ2dsZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNlbGYuY29uZmlnLndyYXAgJiYgc2VsZi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jbGVhcl1cIikpIHtcblx0XHRcdHNlbGYuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2xlYXJdXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxmLmNsZWFyKTtcblx0XHR9XG5cblx0XHRpZiAoIXNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpIHtcblx0XHRcdHByZXZNb250aE5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRjaGFuZ2VNb250aCgtMSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0bmV4dE1vbnRoTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGNoYW5nZU1vbnRoKDEpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGN1cnJlbnRZZWFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgeWVhclNjcm9sbCk7XG5cdFx0XHRjdXJyZW50WWVhckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGN1cnJlbnRZZWFyRWxlbWVudC5zZWxlY3QpO1xuXG5cdFx0XHRjdXJyZW50WWVhckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRzZWxmLmN1cnJlbnRZZWFyID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCk7XG5cdFx0XHRcdHNlbGYucmVkcmF3KCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y2FsZW5kYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdERhdGUpO1xuXHRcdH1cblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb2N1bWVudENsaWNrKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBkb2N1bWVudENsaWNrLCB0cnVlKTtcblxuXHRcdGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSB7XG5cdFx0XHRzZWxmLmhvdXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCB0aW1lV3JhcHBlcik7XG5cdFx0XHRzZWxmLm1pbnV0ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHRpbWVXcmFwcGVyKTtcblxuXHRcdFx0c2VsZi5ob3VyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdGltZVdyYXBwZXIpO1xuXHRcdFx0c2VsZi5taW51dGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB0aW1lV3JhcHBlcik7XG5cblx0XHRcdHNlbGYuaG91ckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIHVwZGF0ZVZhbHVlKTtcblx0XHRcdHNlbGYubWludXRlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgdXBkYXRlVmFsdWUpO1xuXG5cdFx0XHRzZWxmLmhvdXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXBkYXRlVmFsdWUpO1xuXHRcdFx0c2VsZi5taW51dGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdXBkYXRlVmFsdWUpO1xuXG5cdFx0XHRzZWxmLmhvdXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBzZWxmLmhvdXJFbGVtZW50LnNlbGVjdCk7XG5cdFx0XHRzZWxmLm1pbnV0ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHNlbGYubWludXRlRWxlbWVudC5zZWxlY3QpO1xuXG5cdFx0XHRpZiAoc2VsZi5jb25maWcuZW5hYmxlU2Vjb25kcykge1xuXHRcdFx0XHRzZWxmLnNlY29uZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHRpbWVXcmFwcGVyKTtcblx0XHRcdFx0c2VsZi5zZWNvbmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB0aW1lV3JhcHBlcik7XG5cdFx0XHRcdHNlbGYuc2Vjb25kRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgdXBkYXRlVmFsdWUpO1xuXHRcdFx0XHRzZWxmLnNlY29uZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB1cGRhdGVWYWx1ZSk7XG5cdFx0XHRcdHNlbGYuc2Vjb25kRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgc2VsZi5zZWNvbmRFbGVtZW50LnNlbGVjdCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghc2VsZi5jb25maWcudGltZV8yNGhyKSB7XG5cdFx0XHRcdHNlbGYuYW1QTS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYW1QTVRvZ2dsZSk7XG5cblx0XHRcdFx0c2VsZi5hbVBNLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBhbVBNVG9nZ2xlKTtcblx0XHRcdFx0c2VsZi5hbVBNLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCB1cGRhdGVWYWx1ZSk7XG5cblx0XHRcdFx0c2VsZi5hbVBNLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0aWYgKGUud2hpY2ggPT09IDM4IHx8IGUud2hpY2ggPT09IDQwKSB7XG5cdFx0XHRcdFx0XHRhbVBNVG9nZ2xlKGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG5cdFx0XHRjbGlja0V2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudFwiKTtcblx0XHRcdC8vIHdpdGhvdXQgYWxsIHRoZXNlIGFyZ3MgbXMgZWRnZSBzcGVyZ3Mgb3V0XG5cdFx0XHRjbGlja0V2dC5pbml0TW91c2VFdmVudChcImNsaWNrXCIsIHRydWUsIHRydWUsIHdpbmRvdywgMCwgMCwgMCwgMCwgMCwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAsIG51bGwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGlja0V2dCA9IG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIiwge1xuXHRcdFx0XHR2aWV3OiB3aW5kb3csXG5cdFx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGNhbmNlbGFibGU6IHRydWVcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRzZWxmLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHNlbGYuaXNPcGVuIHx8IChzZWxmLmFsdElucHV0IHx8IHNlbGYuaW5wdXQpLmRpc2FibGVkIHx8IHNlbGYuY29uZmlnLmlubGluZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH0gZWxzZSBpZiAoIXNlbGYuY29uZmlnLnN0YXRpYykge1xuXHRcdFx0c2VsZi5wb3NpdGlvbkNhbGVuZGFyKCk7XG5cdFx0fVxuXG5cdFx0c2VsZi5pc09wZW4gPSB0cnVlO1xuXG5cdFx0d3JhcHBlckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG5cblx0XHRpZiAoIXNlbGYuY29uZmlnLmFsbG93SW5wdXQpIHtcblx0XHRcdChzZWxmLmFsdElucHV0IHx8IHNlbGYuaW5wdXQpLmJsdXIoKTtcblx0XHRcdChzZWxmLmNvbmZpZy5ub0NhbGVuZGFyID8gdGltZUNvbnRhaW5lciA6IGNhbGVuZGFyKS5mb2N1cygpO1xuXHRcdH1cblxuXHRcdChzZWxmLmFsdElucHV0IHx8IHNlbGYuaW5wdXQpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cblx0XHRpZiAoc2VsZi5jb25maWcub25PcGVuKSB7XG5cdFx0XHRzZWxmLmNvbmZpZy5vbk9wZW4oc2VsZi5zZWxlY3RlZERhdGVPYmosIHNlbGYuaW5wdXQudmFsdWUpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBGb3IgY2FsZW5kYXJzIGluc2VydGVkIGluIEJPRFkgKGFzIG9wcG9zZWQgdG8gaW5saW5lIHdyYXBwZXIpXG5cdC8vIGl0XCJzIG5lY2Vzc2FyeSB0byBwcm9wZXJseSBjYWxjdWxhdGUgdG9wL2xlZnQgcG9zaXRpb24uXG5cdHNlbGYucG9zaXRpb25DYWxlbmRhciA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgY2FsZW5kYXJIZWlnaHQgPSBjYWxlbmRhckNvbnRhaW5lci5vZmZzZXRIZWlnaHQsXG5cdFx0ICAgIGlucHV0ID0gc2VsZi5hbHRJbnB1dCB8fCBzZWxmLmlucHV0LFxuXHRcdCAgICBpbnB1dEJvdW5kcyA9IGlucHV0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuXHRcdCAgICBkaXN0YW5jZUZyb21Cb3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBpbnB1dEJvdW5kcy5ib3R0b20gKyBpbnB1dC5vZmZzZXRIZWlnaHQ7XG5cblx0XHR2YXIgdG9wID0gdm9pZCAwLFxuXHRcdCAgICBsZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICsgaW5wdXRCb3VuZHMubGVmdDtcblxuXHRcdGlmIChkaXN0YW5jZUZyb21Cb3R0b20gPCBjYWxlbmRhckhlaWdodCkge1xuXHRcdFx0dG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IC0gY2FsZW5kYXJIZWlnaHQgKyBpbnB1dEJvdW5kcy50b3AgLSAyO1xuXHRcdFx0Y2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFycm93VG9wXCIpO1xuXHRcdFx0Y2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFycm93Qm90dG9tXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgKyBpbnB1dC5vZmZzZXRIZWlnaHQgKyBpbnB1dEJvdW5kcy50b3AgKyAyO1xuXHRcdFx0Y2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFycm93Qm90dG9tXCIpO1xuXHRcdFx0Y2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFycm93VG9wXCIpO1xuXHRcdH1cblxuXHRcdHdyYXBwZXJFbGVtZW50LnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcblx0XHR3cmFwcGVyRWxlbWVudC5zdHlsZS5sZWZ0ID0gbGVmdCArIFwicHhcIjtcblx0fTtcblxuXHRzZWxmLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoc2VsZi5pc09wZW4pIHtcblx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2VsZi5vcGVuKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHNlbGYuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0c2VsZi5pc09wZW4gPSBmYWxzZTtcblx0XHR3cmFwcGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcblx0XHQoc2VsZi5hbHRJbnB1dCB8fCBzZWxmLmlucHV0KS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG5cdFx0aWYgKHNlbGYuY29uZmlnLm9uQ2xvc2UpIHtcblx0XHRcdHNlbGYuY29uZmlnLm9uQ2xvc2Uoc2VsZi5zZWxlY3RlZERhdGVPYmosIHNlbGYuaW5wdXQudmFsdWUpO1xuXHRcdH1cblx0fTtcblxuXHRzZWxmLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuXHRcdHNlbGYuaW5wdXQudmFsdWUgPSBcIlwiO1xuXG5cdFx0aWYgKHNlbGYuYWx0SW5wdXQpIHtcblx0XHRcdHNlbGYuYWx0SW5wdXQudmFsdWUgPSBcIlwiO1xuXHRcdH1cblxuXHRcdHNlbGYuc2VsZWN0ZWREYXRlT2JqID0gbnVsbDtcblxuXHRcdHRyaWdnZXJDaGFuZ2UoKTtcblx0XHRzZWxmLmp1bXBUb0RhdGUoKTtcblx0fTtcblxuXHR0cmlnZ2VyQ2hhbmdlID0gZnVuY3Rpb24gdHJpZ2dlckNoYW5nZSgpIHtcblx0XHRzZWxmLmlucHV0LmRpc3BhdGNoRXZlbnQoY2xpY2tFdnQpO1xuXG5cdFx0aWYgKHNlbGYuY29uZmlnLm9uQ2hhbmdlKSB7XG5cdFx0XHRzZWxmLmNvbmZpZy5vbkNoYW5nZShzZWxmLnNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5pbnB1dC52YWx1ZSk7XG5cdFx0fVxuXHR9O1xuXG5cdHNlbGYuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9jdW1lbnRDbGljaywgZmFsc2UpO1xuXG5cdFx0aWYgKHNlbGYuYWx0SW5wdXQpIHtcblx0XHRcdHNlbGYuYWx0SW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmLmFsdElucHV0KTtcblx0XHR9XG5cblx0XHRpZiAoc2VsZi5jb25maWcuaW5saW5lKSB7XG5cdFx0XHR2YXIgcGFyZW50ID0gc2VsZi5lbGVtZW50LnBhcmVudE5vZGUsXG5cdFx0XHQgICAgcmVtb3ZlZEVsZW1lbnQgPSBwYXJlbnQucmVtb3ZlQ2hpbGQoc2VsZi5lbGVtZW50KTtcblxuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKGNhbGVuZGFyQ29udGFpbmVyKTtcblx0XHRcdHBhcmVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyZW1vdmVkRWxlbWVudCwgcGFyZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLnJlbW92ZUNoaWxkKHdyYXBwZXJFbGVtZW50KTtcblx0XHR9XG5cdH07XG5cblx0c2VsZi5yZWRyYXcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XG5cdFx0YnVpbGREYXlzKCk7XG5cdH07XG5cblx0c2VsZi5qdW1wVG9EYXRlID0gZnVuY3Rpb24gKGp1bXBEYXRlKSB7XG5cdFx0anVtcERhdGUgPSB1RGF0ZShqdW1wRGF0ZSB8fCBzZWxmLnNlbGVjdGVkRGF0ZU9iaiB8fCBzZWxmLmNvbmZpZy5kZWZhdWx0RGF0ZSB8fCBzZWxmLmNvbmZpZy5taW5EYXRlIHx8IG5vdyk7XG5cblx0XHRzZWxmLmN1cnJlbnRZZWFyID0ganVtcERhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRzZWxmLmN1cnJlbnRNb250aCA9IGp1bXBEYXRlLmdldE1vbnRoKCk7XG5cdFx0c2VsZi5yZWRyYXcoKTtcblx0fTtcblxuXHRzZWxmLnNldERhdGUgPSBmdW5jdGlvbiAoZGF0ZSwgdHJpZ2dlckNoYW5nZUV2ZW50KSB7XG5cdFx0ZGF0ZSA9IHVEYXRlKGRhdGUpO1xuXG5cdFx0aWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlICYmIGRhdGUuZ2V0VGltZSgpKSB7XG5cdFx0XHRzZWxmLnNlbGVjdGVkRGF0ZU9iaiA9IHVEYXRlKGRhdGUpO1xuXHRcdFx0c2VsZi5qdW1wVG9EYXRlKHNlbGYuc2VsZWN0ZWREYXRlT2JqKTtcblx0XHRcdHVwZGF0ZVZhbHVlKCk7XG5cblx0XHRcdGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcblx0XHRcdFx0dHJpZ2dlckNoYW5nZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRzZWxmLnNldFRpbWUgPSBmdW5jdGlvbiAoaG91ciwgbWludXRlLCB0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcblx0XHRpZiAoIXNlbGYuc2VsZWN0ZWREYXRlT2JqKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c2VsZi5ob3VyRWxlbWVudC52YWx1ZSA9IHBhcnNlSW50KGhvdXIsIDEwKSAlIDI0O1xuXHRcdHNlbGYubWludXRlRWxlbWVudC52YWx1ZSA9IHBhcnNlSW50KG1pbnV0ZSB8fCAwLCAxMCkgJSA2MDtcblxuXHRcdGlmICghc2VsZi5jb25maWcudGltZV8yNGhyKSB7XG5cdFx0XHRzZWxmLmFtUE0uaW5uZXJIVE1MID0gaG91ciA+IDExID8gXCJQTVwiIDogXCJBTVwiO1xuXHRcdH1cblxuXHRcdHVwZGF0ZVZhbHVlKCk7XG5cblx0XHRpZiAodHJpZ2dlckNoYW5nZUV2ZW50KSB7XG5cdFx0XHR0cmlnZ2VyQ2hhbmdlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHNlbGYuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRpZiAoa2V5IGluIHNlbGYuY29uZmlnKSB7XG5cdFx0XHRzZWxmLmNvbmZpZ1trZXldID0gdmFsdWU7XG5cdFx0XHRzZWxmLmp1bXBUb0RhdGUoKTtcblx0XHR9XG5cdH07XG5cblx0YW1QTVRvZ2dsZSA9IGZ1bmN0aW9uIGFtUE1Ub2dnbGUoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRzZWxmLmFtUE0udGV4dENvbnRlbnQgPSBbXCJBTVwiLCBcIlBNXCJdW3NlbGYuYW1QTS5pbm5lckhUTUwgPT09IFwiQU1cIiB8IDBdO1xuXHR9O1xuXG5cdG9uS2V5RG93biA9IGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG5cdFx0aWYgKCFzZWxmLmlzT3BlbiB8fCBzZWxmLmNvbmZpZy5lbmFibGVUaW1lICYmIHRpbWVDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c3dpdGNoIChlLndoaWNoKSB7XG5cdFx0XHRjYXNlIDEzOlxuXHRcdFx0XHRzZWxlY3REYXRlKGUpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyNzpcblx0XHRcdFx0c2VsZi5jbG9zZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzNzpcblx0XHRcdFx0Y2hhbmdlTW9udGgoLTEpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzODpcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRzZWxmLmN1cnJlbnRZZWFyKys7XG5cdFx0XHRcdHNlbGYucmVkcmF3KCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM5OlxuXHRcdFx0XHRjaGFuZ2VNb250aCgxKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgNDA6XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0c2VsZi5jdXJyZW50WWVhci0tO1xuXHRcdFx0XHRzZWxmLnJlZHJhdygpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9O1xuXG5cdG9uUmVzaXplID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuXHRcdGlmIChzZWxmLmlzT3BlbiAmJiAhc2VsZi5jb25maWcuaW5saW5lICYmICFzZWxmLmNvbmZpZy5zdGF0aWMpIHtcblx0XHRcdHNlbGYucG9zaXRpb25DYWxlbmRhcigpO1xuXHRcdH1cblx0fSwgMzAwKTtcblxuXHR0cnkge1xuXHRcdGluaXQoKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBza2lwIGFuZCBjYXJyeSBvblxuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdGNvbnNvbGUuaW5mbyhzZWxmLmVsZW1lbnQpO1xuXHR9XG5cblx0cmV0dXJuIHNlbGY7XG59O1xuXG5mbGF0cGlja3IuaW5pdC5wcm90b3R5cGUgPSB7XG5cblx0ZGVmYXVsdENvbmZpZzoge30sXG5cblx0bDEwbjoge1xuXHRcdHdlZWtkYXlzOiB7XG5cdFx0XHRzaG9ydGhhbmQ6IFsn5ZGo5pelJywgJ+WRqOS4gCcsICflkajkuownLCAn5ZGo5LiJJywgJ+WRqOWbmycsICflkajkupQnLCAn5ZGo5YWtJ10sXG5cdFx0XHRsb25naGFuZDogWyflkajml6UnLCAn5ZGo5LiAJywgJ+WRqOS6jCcsICflkajkuIknLCAn5ZGo5ZubJywgJ+WRqOS6lCcsICflkajlha0nXVxuXHRcdH0sXG5cdFx0bW9udGhzOiB7XG5cdFx0XHRzaG9ydGhhbmQ6IFsn5LiA5pyIJywgJ+S6jOaciCcsICfkuInmnIgnLCAn5Zub5pyIJywgJ+S6lOaciCcsICflha3mnIgnLCAn5LiD5pyIJywgJ+WFq+aciCcsICfkuZ3mnIgnLCAn5Y2B5pyIJywgJ+WNgeS4gOaciCcsICfljYHkuozmnIgnXSxcblx0XHRcdGxvbmdoYW5kOiBbJ+S4gOaciCcsICfkuozmnIgnLCAn5LiJ5pyIJywgJ+Wbm+aciCcsICfkupTmnIgnLCAn5YWt5pyIJywgJ+S4g+aciCcsICflhavmnIgnLCAn5Lmd5pyIJywgJ+WNgeaciCcsICfljYHkuIDmnIgnLCAn5Y2B5LqM5pyIJ11cblx0XHR9LFxuXHRcdGRheXNJbk1vbnRoOiBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV0sXG5cdFx0Zmlyc3REYXlPZldlZWs6IDAsXG5cdFx0b3JkaW5hbDogZnVuY3Rpb24gb3JkaW5hbChudGgpIHtcblx0XHRcdHZhciBzID0gbnRoICUgMTAwO1xuXHRcdFx0aWYgKHMgPiAzICYmIHMgPCAyMSkgcmV0dXJuIFwidGhcIjtcblx0XHRcdHN3aXRjaCAocyAlIDEwKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRyZXR1cm4gXCJzdFwiO1xuXHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0cmV0dXJuIFwibmRcIjtcblx0XHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRcdHJldHVybiBcInJkXCI7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIFwidGhcIjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHdlZWtBYmJyZXZpYXRpb246IFwiV2tcIixcblx0XHRzY3JvbGxUaXRsZTogXCJTY3JvbGwgdG8gaW5jcmVtZW50XCIsXG5cdFx0dG9nZ2xlVGl0bGU6IFwiQ2xpY2sgdG8gdG9nZ2xlXCJcblx0fVxuXG59O1xuXG5EYXRlLnByb3RvdHlwZS5mcF9pbmNyID0gZnVuY3Rpb24gKGRheXMpIHtcblx0cmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCB0aGlzLmdldERhdGUoKSArIHBhcnNlSW50KGRheXMsIDEwKSk7XG59O1xuXG5EYXRlLnByb3RvdHlwZS5mcF9pc1VUQyA9IGZhbHNlO1xuRGF0ZS5wcm90b3R5cGUuZnBfdG9VVEMgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBuZXdEYXRlID0gbmV3IERhdGUodGhpcy5nZXRUaW1lKCkgKyB0aGlzLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCk7XG5cdG5ld0RhdGUuZnBfaXNVVEMgPSB0cnVlO1xuXG5cdHJldHVybiBuZXdEYXRlO1xufTtcblxuRGF0ZS5wcm90b3R5cGUuZnBfZ2V0V2VlayA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmdldFRpbWUoKSk7XG5cdGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cblx0Ly8gVGh1cnNkYXkgaW4gY3VycmVudCB3ZWVrIGRlY2lkZXMgdGhlIHllYXIuXG5cdGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDMgLSAoZGF0ZS5nZXREYXkoKSArIDYpICUgNyk7XG5cdC8vIEphbnVhcnkgNCBpcyBhbHdheXMgaW4gd2VlayAxLlxuXHR2YXIgd2VlazEgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIDAsIDQpO1xuXHQvLyBBZGp1c3QgdG8gVGh1cnNkYXkgaW4gd2VlayAxIGFuZCBjb3VudCBudW1iZXIgb2Ygd2Vla3MgZnJvbSBkYXRlIHRvIHdlZWsxLlxuXHRyZXR1cm4gMSArIE1hdGgucm91bmQoKChkYXRlLmdldFRpbWUoKSAtIHdlZWsxLmdldFRpbWUoKSkgLyA4NjQwMDAwMCAtIDMgKyAod2VlazEuZ2V0RGF5KCkgKyA2KSAlIDcpIC8gNyk7XG59O1xuXG4vLyBjbGFzc0xpc3QgcG9seWZpbGxcbmlmICghKFwiY2xhc3NMaXN0XCIgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgdHlwZW9mIEhUTUxFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUsIFwiY2xhc3NMaXN0XCIsIHtcblx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0XHRcdHZhciBzZWxmRWxlbWVudHMgPSB0aGlzO1xuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHR2YXIgY2xhc3NlcyA9IHNlbGZFbGVtZW50cy5jbGFzc05hbWUuc3BsaXQoL1xccysvKTtcblx0XHRcdFx0XHR2YXIgaW5kZXggPSBjbGFzc2VzLmluZGV4T2YodmFsdWUpO1xuXG5cdFx0XHRcdFx0Zm4oY2xhc3NlcywgaW5kZXgsIHZhbHVlKTtcblx0XHRcdFx0XHRzZWxmRWxlbWVudHMuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKFwiIFwiKTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHJldCA9IHtcblx0XHRcdFx0YWRkOiB1cGRhdGUoZnVuY3Rpb24gKGNsYXNzZXMsIGluZGV4LCB2YWx1ZSkge1xuXHRcdFx0XHRcdHJldHVybiB+aW5kZXggfHwgY2xhc3Nlcy5wdXNoKHZhbHVlKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdHJlbW92ZTogdXBkYXRlKGZ1bmN0aW9uIChjbGFzc2VzLCBpbmRleCkge1xuXHRcdFx0XHRcdHJldHVybiB+aW5kZXggJiYgY2xhc3Nlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0dG9nZ2xlOiB1cGRhdGUoZnVuY3Rpb24gKGNsYXNzZXMsIGluZGV4LCB2YWx1ZSkge1xuXHRcdFx0XHRcdGlmICh+aW5kZXgpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRjb250YWluczogZnVuY3Rpb24gY29udGFpbnModmFsdWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gISEgfnNlbGZFbGVtZW50cy5jbGFzc05hbWUuc3BsaXQoL1xccysvKS5pbmRleE9mKHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cdH0pO1xufVxuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZsYXRwaWNrcjtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vT3JnL2RlcC9jYWxlbmRhci9jYWxlbmRlci1wbHVnaW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxMDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMjNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9