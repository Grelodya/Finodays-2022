(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("backend/static/PAYEER_balance_files/vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["payeermodals"] = factory(require("backend/static/PAYEER_balance_files/vue"));
	else
		root["payeermodals"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "049f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("177b");
var validate = __webpack_require__("1c28");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__("2023")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "04d6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("f536") && !__webpack_require__("ab32")(function () {
  return Object.defineProperty(__webpack_require__("445a")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "05a1":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("b4c5").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("f536") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "0cb7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("a604");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "0e8d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("f14b");
var hiddenKeys = __webpack_require__("a8f2").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "0f10":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("e3e2");
__webpack_require__("78b8")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "165f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_BasePopupHeaderIcon_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1d3d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_BasePopupHeaderIcon_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_BasePopupHeaderIcon_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "177b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__("b4c5").f;
var create = __webpack_require__("2b9f");
var redefineAll = __webpack_require__("f5d1");
var ctx = __webpack_require__("b1c5");
var anInstance = __webpack_require__("c21e");
var forOf = __webpack_require__("c352");
var $iterDefine = __webpack_require__("bc20");
var step = __webpack_require__("534b");
var setSpecies = __webpack_require__("3b8f");
var DESCRIPTORS = __webpack_require__("f536");
var fastKey = __webpack_require__("d41a").fastKey;
var validate = __webpack_require__("1c28");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "1880":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("a604");
var anObject = __webpack_require__("0cb7");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("b1c5")(Function.call, __webpack_require__("583b").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "18f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("f1dc");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "19d8":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("e0de");
var defined = __webpack_require__("3ebf");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "1bae":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("4838");
var getKeys = __webpack_require__("de24");
var redefine = __webpack_require__("73fc");
var global = __webpack_require__("b5f8");
var hide = __webpack_require__("b2b8");
var Iterators = __webpack_require__("7c04");
var wks = __webpack_require__("c0a0");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "1c28":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("a604");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "1d3d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1dfd":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("a604");
var cof = __webpack_require__("2b33");
var MATCH = __webpack_require__("c0a0")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "1e9e":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("620f")('keys');
var uid = __webpack_require__("7952");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "2023":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("b5f8");
var $export = __webpack_require__("78b8");
var redefine = __webpack_require__("73fc");
var redefineAll = __webpack_require__("f5d1");
var meta = __webpack_require__("d41a");
var forOf = __webpack_require__("c352");
var anInstance = __webpack_require__("c21e");
var isObject = __webpack_require__("a604");
var fails = __webpack_require__("ab32");
var $iterDetect = __webpack_require__("abe0");
var setToStringTag = __webpack_require__("8416");
var inheritIfRequired = __webpack_require__("f48e");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "213a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2424":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2b33":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2b9f":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("0cb7");
var dPs = __webpack_require__("c566");
var enumBugKeys = __webpack_require__("a8f2");
var IE_PROTO = __webpack_require__("1e9e")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("445a")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("7e68").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2f1f":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("78b8");
var core = __webpack_require__("a73f");
var fails = __webpack_require__("ab32");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "31da":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_SuccessStep_vue_vue_type_style_index_0_id_2ebc3fb0_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9e36");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_SuccessStep_vue_vue_type_style_index_0_id_2ebc3fb0_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_SuccessStep_vue_vue_type_style_index_0_id_2ebc3fb0_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3695":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("620f")('native-function-to-string', Function.toString);


/***/ }),

/***/ "3714":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("f1dc");
var defined = __webpack_require__("3ebf");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "3b8f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("b5f8");
var dP = __webpack_require__("b4c5");
var DESCRIPTORS = __webpack_require__("f536");
var SPECIES = __webpack_require__("c0a0")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "3e03":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_ReviewItem_vue_vue_type_style_index_0_id_767a2318_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2424");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_ReviewItem_vue_vue_type_style_index_0_id_767a2318_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_ReviewItem_vue_vue_type_style_index_0_id_767a2318_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3e2a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("b5f8");
var has = __webpack_require__("a66c");
var cof = __webpack_require__("2b33");
var inheritIfRequired = __webpack_require__("f48e");
var toPrimitive = __webpack_require__("9dde");
var fails = __webpack_require__("ab32");
var gOPN = __webpack_require__("0e8d").f;
var gOPD = __webpack_require__("583b").f;
var dP = __webpack_require__("b4c5").f;
var $trim = __webpack_require__("d0d8").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2b9f")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("f536") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("73fc")(global, NUMBER, $Number);
}


/***/ }),

/***/ "3ebf":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "445a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("a604");
var document = __webpack_require__("b5f8").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "44bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("3714")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("bc20")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "4630":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_TelegramScreens_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("71f3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_TelegramScreens_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_TelegramScreens_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "464e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4838":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("f03c");
var step = __webpack_require__("534b");
var Iterators = __webpack_require__("7c04");
var toIObject = __webpack_require__("19d8");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("bc20")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "49f8":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en.json": "edd4",
	"./ru.json": "7704"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "49f8";

/***/ }),

/***/ "4be7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("0cb7");
var toLength = __webpack_require__("c686");
var advanceStringIndex = __webpack_require__("d0c3");
var regExpExec = __webpack_require__("66d9");

// @@match logic
__webpack_require__("b3ba")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "4c99":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("ea9f");
var ITERATOR = __webpack_require__("c0a0")('iterator');
var Iterators = __webpack_require__("7c04");
module.exports = __webpack_require__("a73f").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "4d75":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "515e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_VerificationPopup_vue_vue_type_style_index_0_id_1c232196_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("464e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_VerificationPopup_vue_vue_type_style_index_0_id_1c232196_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_VerificationPopup_vue_vue_type_style_index_0_id_1c232196_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "534b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5497":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "5702":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("1dfd");
var anObject = __webpack_require__("0cb7");
var speciesConstructor = __webpack_require__("a90d");
var advanceStringIndex = __webpack_require__("d0c3");
var toLength = __webpack_require__("c686");
var callRegExpExec = __webpack_require__("66d9");
var regexpExec = __webpack_require__("e3e2");
var fails = __webpack_require__("ab32");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("b3ba")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "583b":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("a9b0");
var createDesc = __webpack_require__("adaa");
var toIObject = __webpack_require__("19d8");
var toPrimitive = __webpack_require__("9dde");
var has = __webpack_require__("a66c");
var IE8_DOM_DEFINE = __webpack_require__("04d6");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("f536") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "620f":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("a73f");
var global = __webpack_require__("b5f8");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("5497") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "643d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "647c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Modals_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("213a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Modals_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_Modals_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6633":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "66ac":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("a66c");
var toObject = __webpack_require__("a0be");
var IE_PROTO = __webpack_require__("1e9e")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "66d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("ea9f");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "6bf8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "70f3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("0cb7");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "71f3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "73fc":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("b5f8");
var hide = __webpack_require__("b2b8");
var has = __webpack_require__("a66c");
var SRC = __webpack_require__("7952")('src');
var $toString = __webpack_require__("3695");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("a73f").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "7522":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_MasterKey_vue_vue_type_style_index_0_id_04704394_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6633");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_MasterKey_vue_vue_type_style_index_0_id_04704394_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_MasterKey_vue_vue_type_style_index_0_id_04704394_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7704":
/***/ (function(module) {

module.exports = JSON.parse("{\"block\":{\"error\":\"Ошибка\",\"info\":\"Уведомление\"},\"master_key\":{\"title\":\"Доступ заблокирован\",\"subtitle\":\"Введите свой {0} для разблокировки\",\"placeholder\":\"Введите 3 цифры...\",\"unlock\":\"Разблокировать\"},\"feedback_popup\":{\"rates\":{\"bad\":\"Ужасно\",\"poor\":\"Плохо\",\"ok\":\"Средне\",\"good\":\"Хорошо\",\"great\":\"Лучший!\"},\"rate_step\":{\"thank_you\":\"Спасибо за использование Payeer!\",\"how\":\"Как вы оцениваете наш сервис?\",\"select\":\"Выберите рейтинг\",\"rate\":\"Оценить на {count} звёзд | Оценить на {count} звёзду | Оценить на {count} звёзды | Оценить на {count} звёзд\"},\"review_step\":{\"thank_you\":\"Большое спасибо!\",\"review\":\"Пожалуйста {0} нас на любом из {1}\",\"review_strong\":\"оцените\",\"websites_strong\":\"сайтов\",\"done\":\"Готово!\"},\"feedback_step\":{\"thank_you\":\"Большое спасибо!\",\"sorry\":\"Нам правда очень жаль. Пожалуйста расскажите подробнее о возникших проблемах:\",\"review\":\"Пожалуйста, оставьте отзыв для нас:\",\"placeholder\":\"Опишите ваш опыт, не более 300 символов...\",\"send\":\"Отправить в клиентскую службу\"},\"success_step\":{\"thank_you\":\"Спасибо за ваш отзыв!\",\"back_to_you\":\"Наша клиентская служба ответит вам в ближайшее время.\",\"close\":\"Закрыть\"}},\"telegram_popup\":{\"title\":\"Привязать Telegram\",\"info\":\"Для привязки аккаунта {0}\\nотправьте код {1} нашему Telegram-боту\",\"subtitle\":\"Введите ваш юзернейм:\",\"placeholder\":\"Username...\",\"confirm\":\"Подтвердить\"},\"email_bind_popup\":{\"title\":\"Привязать эл. почту\",\"step1_description\":\"Введите адрес своей электронной почты:\",\"step1_placeholder\":\"example@mail.com\",\"title2\":\"Введите проверочный код\",\"info\":\"Код был отправлен на\\n{0}\",\"confirm\":\"Подтвердить\",\"no_code\":\"Не получили код?\",\"resend\":\"Повторить\",\"resended\":\"Код повторно отправлен на вашу почту.\"},\"phone_bind_popup\":{\"title\":\"Привязать Телефон\",\"step1_description\":\"Введите свой номер:\",\"step1_placeholder\":\"+00000000000\",\"title2\":\"Введите код из SMS\",\"info\":\"Код был отправлен на\\n{0}\",\"confirm\":\"Подтвердить\",\"no_code\":\"Не получили код?\",\"resend\":\"Повторить\",\"resended\":\"Код повторно отправлен на ваш телефон.\",\"cost\":\" - Стоимость SMS-сообщения\"}}");

/***/ }),

/***/ "78b8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("b5f8");
var core = __webpack_require__("a73f");
var hide = __webpack_require__("b2b8");
var redefine = __webpack_require__("73fc");
var ctx = __webpack_require__("b1c5");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "7909":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_VerificationSidebar_vue_vue_type_style_index_0_id_94f7e54a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7a64");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_VerificationSidebar_vue_vue_type_style_index_0_id_94f7e54a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_VerificationSidebar_vue_vue_type_style_index_0_id_94f7e54a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7952":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "7a64":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7be5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2b9f");
var descriptor = __webpack_require__("adaa");
var setToStringTag = __webpack_require__("8416");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("b2b8")(IteratorPrototype, __webpack_require__("c0a0")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "7c04":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "7e68":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("b5f8").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "8416":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("b4c5").f;
var has = __webpack_require__("a66c");
var TAG = __webpack_require__("c0a0")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "92d8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "98bf":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("0cb7");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "9dde":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("a604");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "9e36":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a0be":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("3ebf");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "a34a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("96cf");

/***/ }),

/***/ "a557":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_FeedbackStep_vue_vue_type_style_index_0_id_0f66a52a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("df2b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_FeedbackStep_vue_vue_type_style_index_0_id_0f66a52a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_FeedbackStep_vue_vue_type_style_index_0_id_0f66a52a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a604":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "a66c":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "a73f":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "a8cb":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "a8f2":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "a90d":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("0cb7");
var aFunction = __webpack_require__("e7ef");
var SPECIES = __webpack_require__("c0a0")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "a9b0":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "ab32":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "abe0":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("c0a0")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "ad84":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "adaa":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b1c5":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("e7ef");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "b2b8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("b4c5");
var createDesc = __webpack_require__("adaa");
module.exports = __webpack_require__("f536") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "b3ba":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("0f10");
var redefine = __webpack_require__("73fc");
var hide = __webpack_require__("b2b8");
var fails = __webpack_require__("ab32");
var defined = __webpack_require__("3ebf");
var wks = __webpack_require__("c0a0");
var regexpExec = __webpack_require__("e3e2");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "b4c5":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("0cb7");
var IE8_DOM_DEFINE = __webpack_require__("04d6");
var toPrimitive = __webpack_require__("9dde");
var dP = Object.defineProperty;

exports.f = __webpack_require__("f536") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "b5f8":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "b9bd":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("19d8");
var toLength = __webpack_require__("c686");
var toAbsoluteIndex = __webpack_require__("18f4");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "bc20":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("5497");
var $export = __webpack_require__("78b8");
var redefine = __webpack_require__("73fc");
var hide = __webpack_require__("b2b8");
var Iterators = __webpack_require__("7c04");
var $iterCreate = __webpack_require__("7be5");
var setToStringTag = __webpack_require__("8416");
var getPrototypeOf = __webpack_require__("66ac");
var ITERATOR = __webpack_require__("c0a0")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "c0a0":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("620f")('wks');
var uid = __webpack_require__("7952");
var Symbol = __webpack_require__("b5f8").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "c20b":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("7c04");
var ITERATOR = __webpack_require__("c0a0")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "c21e":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "c257":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c352":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("b1c5");
var call = __webpack_require__("98bf");
var isArrayIter = __webpack_require__("c20b");
var anObject = __webpack_require__("0cb7");
var toLength = __webpack_require__("c686");
var getIterFn = __webpack_require__("4c99");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "c355":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_PhoneScreens_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6bf8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_PhoneScreens_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_PhoneScreens_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c405":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c566":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("b4c5");
var anObject = __webpack_require__("0cb7");
var getKeys = __webpack_require__("de24");

module.exports = __webpack_require__("f536") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "c60a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_RateStep_vue_vue_type_style_index_0_id_a620bddc_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4d75");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_RateStep_vue_vue_type_style_index_0_id_a620bddc_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_RateStep_vue_vue_type_style_index_0_id_a620bddc_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c686":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("f1dc");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "cbfb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d0c3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("3714")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "d0d8":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("78b8");
var defined = __webpack_require__("3ebf");
var fails = __webpack_require__("ab32");
var spaces = __webpack_require__("a8cb");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "d41a":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("7952")('meta');
var isObject = __webpack_require__("a604");
var has = __webpack_require__("a66c");
var setDesc = __webpack_require__("b4c5").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("ab32")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "d459":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_EmailScreens_vue_vue_type_style_index_0_id_4652104d_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c257");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_EmailScreens_vue_vue_type_style_index_0_id_4652104d_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_EmailScreens_vue_vue_type_style_index_0_id_4652104d_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "de24":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("f14b");
var enumBugKeys = __webpack_require__("a8f2");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "df2b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e0d8":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("a0be");
var $keys = __webpack_require__("de24");

__webpack_require__("2f1f")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "e0de":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2b33");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "e3e2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("70f3");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "e7ef":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "ea9f":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2b33");
var TAG = __webpack_require__("c0a0")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "edd4":
/***/ (function(module) {

module.exports = JSON.parse("{\"block\":{\"error\":\"Error\",\"info\":\"Notification\"},\"master_key\":{\"title\":\"Access Locked\",\"subtitle\":\"Enter your {0} to unlock\",\"placeholder\":\"Enter 3 digits...\",\"unlock\":\"Unlock\"},\"feedback_popup\":{\"rates\":{\"bad\":\"Bad\",\"poor\":\"Poor\",\"ok\":\"OK\",\"good\":\"Good\",\"great\":\"Great!\"},\"rate_step\":{\"thank_you\":\"Thank you for using Payeer.\",\"how\":\"How would you rate our platform?\",\"select\":\"Select your rating\",\"rate\":\"Rate with {count} star | Rate with {count} stars\"},\"review_step\":{\"thank_you\":\"Thank you, you're far too kind!\",\"review\":\"Please leave {0} on one of this {1}\",\"review_strong\":\"this review\",\"websites_strong\":\"websites\",\"done\":\"Done!\"},\"feedback_step\":{\"thank_you\":\"Thank you, you're far too kind!\",\"sorry\":\"We are sorry to hear that. Please tell us a bit more about your issue:\",\"review\":\"Please leave a review for us:\",\"placeholder\":\"Describe your issue, max 300 symbols...\",\"send\":\"Send it to our customer service\"},\"success_step\":{\"thank_you\":\"Thank you for your feedback!\",\"back_to_you\":\"Our customer service will get back to you shortly.\",\"close\":\"Close\"}},\"telegram_popup\":{\"title\":\"Telegram Verification\",\"info\":\"To link {0} account, send this\\ncode {1} to our Telegram-bot\",\"subtitle\":\"Enter your username:\",\"placeholder\":\"Username...\",\"confirm\":\"Confirm\"},\"phone_change\":{\"title1\":\"SMS Verification\",\"title2\":\"SMS Verification\",\"title3\":\"SMS Verification\",\"step1\":\"Please enter new phone number\",\"step1_placeholder\":\"Enter phone...\",\"step2\":\"Сode has been sent to {address}:\",\"step2_placeholder\":\"Enter 5 digits...\",\"confirm_btn\":\"Confirm\",\"change_btn\":\"Change\"},\"email_bind_popup\":{\"title\":\"E-mail Verification\",\"step1_description\":\"Enter your e-mail address:\",\"step1_placeholder\":\"example@mail.com\",\"title2\":\"E-mail Verification\",\"info\":\"Сode has been sent to\\n{0}\",\"confirm\":\"Confirm\",\"no_code\":\"Didn't you received the code?\",\"resend\":\"Resend code\",\"resended\":\"Code was sended to your email again.\"},\"phone_bind_popup\":{\"title\":\"Phone Verification\",\"step1_description\":\"You need to link your phone:\",\"step1_placeholder\":\"+00000000000\",\"title2\":\"Phone Verification\",\"info\":\"Сode has been sent to\\n{0}\",\"confirm\":\"Confirm\",\"no_code\":\"Didn't you received the code?\",\"resend\":\"Resend code\",\"resended\":\"Code was sended to your phone again.\",\"cost\":\" - SMS message cost\"}}");

/***/ }),

/***/ "ee7a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_RateUs_vue_vue_type_style_index_0_id_4b91f059_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cbfb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_RateUs_vue_vue_type_style_index_0_id_4b91f059_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_RateUs_vue_vue_type_style_index_0_id_4b91f059_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f03c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("c0a0")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("b2b8")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "f14b":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("a66c");
var toIObject = __webpack_require__("19d8");
var arrayIndexOf = __webpack_require__("b9bd")(false);
var IE_PROTO = __webpack_require__("1e9e")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "f1dc":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "f37a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_BasePopup_vue_vue_type_style_index_0_id_21826910_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c405");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_BasePopup_vue_vue_type_style_index_0_id_21826910_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_BasePopup_vue_vue_type_style_index_0_id_21826910_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f48e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("a604");
var setPrototypeOf = __webpack_require__("1880").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "f530":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_MessagePopup_vue_vue_type_style_index_0_id_3c121c4b_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ad84");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_MessagePopup_vue_vue_type_style_index_0_id_3c121c4b_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_MessagePopup_vue_vue_type_style_index_0_id_3c121c4b_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f536":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("ab32")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "f5be":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_ReviewStep_vue_vue_type_style_index_0_id_8c7063c4_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("92d8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_ReviewStep_vue_vue_type_style_index_0_id_8c7063c4_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_ReviewStep_vue_vue_type_style_index_0_id_8c7063c4_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f5d1":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("73fc");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "managePopups", function() { return /* reexport */ managePopups; });
__webpack_require__.d(__webpack_exports__, "mountPopups", function() { return /* reexport */ mountPopups; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/assets/styles/index.sass
var styles = __webpack_require__("643d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/Modals.vue?vue&type=template&id=4241b2b8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{attrs:{"id":"payeer-modal","name":"modal","appear":""}},[(_vm.showBindPopup)?_c('UniversalBindPopup',{key:"bindPopup",ref:"bindPopup",on:{"close":function($event){_vm.showBindPopup = false}}}):_vm._e(),_c('VerificationPopup',{directives:[{name:"show",rawName:"v-show",value:(_vm.showVerificationPopup),expression:"showVerificationPopup"}],key:"verif",ref:"verification",attrs:{"link":_vm.verificationOptions.link,"qr":_vm.verificationOptions.qr,"example":_vm.verificationOptions.example,"locale":_vm.verificationOptions.locale,"upload-param-name":_vm.verificationOptions.uploadParamName,"upload-url":_vm.verificationOptions.uploadUrl,"callback-fn":_vm.verificationOptions.callbackFn,"error-text":_vm.verificationOptions.errorText,"error-title":_vm.verificationOptions.errorTitle,"file-types":_vm.verificationOptions.fileTypes},on:{"close":function($event){_vm.showVerificationPopup = false}}}),(_vm.showFeedbackPopup)?_c('FeedbackPopup',{key:"feedback",attrs:{"links":_vm.feedbackOptions.feedbackLinks,"skipLinks":_vm.feedbackOptions.skipLinks},on:{"close":function($event){_vm.showFeedbackPopup = false}}}):_vm._e(),_vm._l((_vm.messages),function(msg){return _c('MessagePopup',{key:msg.id,attrs:{"options":msg.options},on:{"close":function () { return (msg.options.reject && msg.options.reject()) || msg.options.resolve(); }}})})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Modals.vue?vue&type=template&id=4241b2b8&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/popups/FeedbackPopup.vue?vue&type=template&id=768ef44c&scoped=true&
var FeedbackPopupvue_type_template_id_768ef44c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BasePopup',{attrs:{"show-back-button":['review', 'feedback'].includes(_vm.step),"width":511,"height":505},on:{"back":_vm.goBack,"close":function($event){return _vm.$emit('close')}}},[_c('transition',{attrs:{"name":"opacity","mode":"out-in","out-in":""}},[(_vm.step === 'rate')?_c('RateStep',{key:"rate",on:{"next":function($event){_vm.step = _vm.isGoodRate && !_vm.skipLinks ? 'review' : 'feedback'}},model:{value:(_vm.rating),callback:function ($$v) {_vm.rating=$$v},expression:"rating"}}):(_vm.step === 'review')?_c('ReviewStep',{key:"review",attrs:{"rating":_vm.rating,"services":_vm.links},on:{"next":function($event){_vm.step = 'feedback'},"close":function($event){return _vm.$emit('close')}}}):(_vm.step === 'feedback')?_c('FeedbackStep',{key:"feedback",attrs:{"rating":_vm.rating},on:{"next":_vm.handleFeedbackSubmit},model:{value:(_vm.feedback),callback:function ($$v) {_vm.feedback=$$v},expression:"feedback"}}):(_vm.step === 'success')?_c('SuccessStep',{key:"success",on:{"close":function($event){return _vm.$emit('close')}}}):_vm._e()],1)],1)}
var FeedbackPopupvue_type_template_id_768ef44c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/popups/FeedbackPopup.vue?vue&type=template&id=768ef44c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/BasePopup.vue?vue&type=template&id=21826910&scoped=true&
var BasePopupvue_type_template_id_21826910_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-mask",on:{"click":function($event){return _vm.$emit('maskClicked')}}},[_c('div',{staticClass:"modal-container",style:({width: (_vm.width + "px"), height: (_vm.height + "px"), paddingBottom: _vm.height !== 'unset' ? null : '95px'}),on:{"click":function($event){$event.stopPropagation();}}},[_c('transition-group',{attrs:{"name":"slide-down","appear":""}},_vm._l((_vm.notifications),function(notification){return _c('div',{key:notification.id,staticClass:"block",class:{
          'block__error': notification.type === 'error',
          'block__success': notification.type === 'info',
        },on:{"click":function($event){return _vm.$emit('removedNotification', notification.id)}}},[_c('div',{staticClass:"block__title"},[_vm._v(" "+_vm._s(notification.title || 'Уведомление')+" ")]),_c('div',{staticClass:"block__body"},[_vm._v(" "+_vm._s(notification.text)+" ")])])}),0),_c('div',{staticClass:"modal-container__header"},[(_vm.showBackButton)?_c('BackIcon',{on:{"click":function($event){return _vm.$emit('back')}}}):_c('div'),_c('CloseIcon',{on:{"click":function($event){return _vm.$emit('close')}}}),(_vm.title)?_c('div',{staticClass:"modal-container__title"},[_vm._v(" "+_vm._s(_vm.title))]):_vm._e()],1),_vm._t("default")],2),_vm._t("right")],2)}
var BasePopupvue_type_template_id_21826910_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasePopup.vue?vue&type=template&id=21826910&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/CloseIcon.vue?vue&type=template&id=64786f8a&scoped=true&
var CloseIconvue_type_template_id_64786f8a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BasePopupHeaderIcon',{on:{"click":function($event){return _vm.$emit('click')}}},[_c('path',{staticClass:"payeer-popup-header__icon_bg",attrs:{"d":"M1 20.4974C1 10.0005 9.50999 1.44501 20 1.44501C30.49 1.44501 39 10.0005 39 20.4974C39 30.9942 30.49 39.5497 20 39.5497C9.50999 39.5497 1 30.9942 1 20.4974Z","stroke":"#CED4DB","stroke-width":"2"}}),_c('path',{staticClass:"payeer-popup-header__icon_symbol",attrs:{"d":"M16.3214 16.6983L24.9076 25.307","stroke":"#BFC8D2","stroke-width":"3","stroke-linecap":"round"}}),_c('path',{staticClass:"payeer-popup-header__icon_symbol",attrs:{"d":"M24.6786 16.6983L16.0924 25.307","stroke":"#BFC8D2","stroke-width":"3","stroke-linecap":"round"}})])}
var CloseIconvue_type_template_id_64786f8a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/icons/CloseIcon.vue?vue&type=template&id=64786f8a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/BasePopupHeaderIcon.vue?vue&type=template&id=5d383e46&functional=true&
var BasePopupHeaderIconvue_type_template_id_5d383e46_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('svg',{staticClass:"payeer-popup-header__icon",attrs:{"width":"40","height":"41","viewBox":"0 0 40 41","fill":"none","xmlns":"http://www.w3.org/2000/svg"},on:{"click":function($event){return _vm.listeners['click']()}}},[_vm._t("default")],2)}
var BasePopupHeaderIconvue_type_template_id_5d383e46_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/icons/BasePopupHeaderIcon.vue?vue&type=template&id=5d383e46&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/BasePopupHeaderIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var BasePopupHeaderIconvue_type_script_lang_js_ = ({
  name: "BasePopupHeaderIcon"
});
// CONCATENATED MODULE: ./src/components/icons/BasePopupHeaderIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_BasePopupHeaderIconvue_type_script_lang_js_ = (BasePopupHeaderIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/icons/BasePopupHeaderIcon.vue?vue&type=style&index=0&lang=sass&
var BasePopupHeaderIconvue_type_style_index_0_lang_sass_ = __webpack_require__("165f");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/icons/BasePopupHeaderIcon.vue






/* normalize component */

var component = normalizeComponent(
  icons_BasePopupHeaderIconvue_type_script_lang_js_,
  BasePopupHeaderIconvue_type_template_id_5d383e46_functional_true_render,
  BasePopupHeaderIconvue_type_template_id_5d383e46_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* harmony default export */ var BasePopupHeaderIcon = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/CloseIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var CloseIconvue_type_script_lang_js_ = ({
  name: "CloseIcon",
  components: {
    BasePopupHeaderIcon: BasePopupHeaderIcon
  }
});
// CONCATENATED MODULE: ./src/components/icons/CloseIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_CloseIconvue_type_script_lang_js_ = (CloseIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/icons/CloseIcon.vue





/* normalize component */

var CloseIcon_component = normalizeComponent(
  icons_CloseIconvue_type_script_lang_js_,
  CloseIconvue_type_template_id_64786f8a_scoped_true_render,
  CloseIconvue_type_template_id_64786f8a_scoped_true_staticRenderFns,
  false,
  null,
  "64786f8a",
  null
  
)

/* harmony default export */ var CloseIcon = (CloseIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/BackIcon.vue?vue&type=template&id=d1c2f3cc&scoped=true&
var BackIconvue_type_template_id_d1c2f3cc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BasePopupHeaderIcon',{on:{"click":function($event){return _vm.$emit('click')}}},[_c('path',{staticClass:"payeer-popup-header__icon_bg",attrs:{"fill":"#fff","d":"M1 20.1361C1 9.63928 9.50999 1.08374 20 1.08374C30.49 1.08374 39 9.63928 39 20.1361C39 30.6329 30.49 39.1885 20 39.1885C9.50999 39.1885 1 30.6329 1 20.1361Z","stroke":"#CED4DB","stroke-width":"2"}}),_c('path',{staticClass:"payeer-popup-header__icon_symbol",attrs:{"d":"M27.4873 20.5591L15.3447 20.5591","stroke":"#BFC8D2","stroke-width":"3","stroke-linecap":"round"}}),_c('path',{staticClass:"payeer-popup-header__icon_symbol",attrs:{"d":"M17.4873 15.5459L12.3447 20.559","stroke":"#BFC8D2","stroke-width":"3","stroke-linecap":"round"}}),_c('path',{staticClass:"payeer-popup-header__icon_symbol",attrs:{"d":"M17.4873 25.5723L12.3447 20.5592","stroke":"#BFC8D2","stroke-width":"3","stroke-linecap":"round"}})])}
var BackIconvue_type_template_id_d1c2f3cc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/icons/BackIcon.vue?vue&type=template&id=d1c2f3cc&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/BackIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var BackIconvue_type_script_lang_js_ = ({
  name: "BackIcon",
  components: {
    BasePopupHeaderIcon: BasePopupHeaderIcon
  }
});
// CONCATENATED MODULE: ./src/components/icons/BackIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_BackIconvue_type_script_lang_js_ = (BackIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/icons/BackIcon.vue





/* normalize component */

var BackIcon_component = normalizeComponent(
  icons_BackIconvue_type_script_lang_js_,
  BackIconvue_type_template_id_d1c2f3cc_scoped_true_render,
  BackIconvue_type_template_id_d1c2f3cc_scoped_true_staticRenderFns,
  false,
  null,
  "d1c2f3cc",
  null
  
)

/* harmony default export */ var BackIcon = (BackIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/BasePopup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var BasePopupvue_type_script_lang_js_ = ({
  name: "BasePopup",
  components: {
    BackIcon: BackIcon,
    CloseIcon: CloseIcon
  },
  props: {
    notifications: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    title: {
      type: String,
      default: null
    },
    showBackButton: {
      type: Boolean,
      default: false
    },
    width: {
      type: [String, Number],
      default: 'unset'
    },
    height: {
      type: [String, Number],
      default: 'unset'
    }
  },
  data: function data() {
    return {
      showError: false,
      showInfo: false
    };
  },
  watch: {
    error: function error(newVal) {
      var _this = this;

      if (newVal) {
        this.showError = true;
        setTimeout(function () {
          _this.showError = false;
        }, 10000);
      } else {
        this.showError = false;
      }
    },
    infoMessage: function infoMessage(newVal) {
      var _this2 = this;

      if (newVal) {
        this.showInfo = true;
        setTimeout(function () {
          _this2.showInfo = false;
        }, 10000);
      } else {
        this.showInfo = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/BasePopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasePopupvue_type_script_lang_js_ = (BasePopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/BasePopup.vue?vue&type=style&index=0&id=21826910&lang=sass&scoped=true&
var BasePopupvue_type_style_index_0_id_21826910_lang_sass_scoped_true_ = __webpack_require__("f37a");

// CONCATENATED MODULE: ./src/components/BasePopup.vue






/* normalize component */

var BasePopup_component = normalizeComponent(
  components_BasePopupvue_type_script_lang_js_,
  BasePopupvue_type_template_id_21826910_scoped_true_render,
  BasePopupvue_type_template_id_21826910_scoped_true_staticRenderFns,
  false,
  null,
  "21826910",
  null
  
)

/* harmony default export */ var BasePopup = (BasePopup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/feedback-popup/RateStep.vue?vue&type=template&id=a620bddc&scoped=true&
var RateStepvue_type_template_id_a620bddc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"feedback-popup-body",staticStyle:{"margin-top":"-35px"}},[_c('div',{staticClass:"thank-you"},[_c('svg',{style:('margin-bottom: 1rem;'),attrs:{"width":"128","height":"128","viewBox":"0 0 128 128","fill":"none","xmlns":"http://www.w3.org/2000/svg","svg-inline":'',"role":'presentation',"focusable":'false',"tabindex":'-1'}},[_c('path',{attrs:{"d":"M64.5 125c30.652 0 55.5-24.848 55.5-55.5S95.152 14 64.5 14 9 38.848 9 69.5 33.848 125 64.5 125z","fill":"#20CF05"}}),_c('path',{attrs:{"d":"M102.72 69.67l-15-20c-5 3.59-11.3-3.88-21.11 2.91-2.75-2.43-8.87-2-13.27-1.54-4.4.46-7.36.73-10-.9l-14.81 18.4c.075.086.136.184.18.29 5.76 8.5 5.8 13.49 10.07 17.14l.27-.33.09.64a4 4 0 006 5.29A4.025 4.025 0 1051 97.09l.12-.13a4.045 4.045 0 105.72 5.72l3.92-3.92a3.047 3.047 0 00-.45.57 4 4 0 003.33 6.31 4.11 4.11 0 002.85-1.17l2.38-2.39a4.001 4.001 0 00.71-4.73l.17-.12 2.08 2.08a4.04 4.04 0 005.715.005 4.041 4.041 0 00.005-5.715l-.82-.82 1.63 1.59c3.56 3.56 9.14-1.38 6-5.35L86 90.64a4.001 4.001 0 106.32-4.91c6.75-6.73 6.33-13.14 10.4-16.06z","fill":"#FFE5E1"}}),_c('path',{attrs:{"d":"M101.87 68.94l-2.11-2.82c-3.67 3-3.5 9.22-10 15.75a4.01 4.01 0 01-6.33 4.92l-.63-.64a.48.48 0 00-.81.35c0 1.38.25 3.44-1.77 4.12a7 7 0 01-3.8-.29.49.49 0 00-.62.62c.163.412.277.841.34 1.28l.07.07h-.07A4.06 4.06 0 0173 96.59a3.9 3.9 0 01-3.83-1.24c-.69-.71 1.72 3.1 1.72 3.1a4.18 4.18 0 004.47 1 4.48 4.48 0 002.43-5.63c3.56 3.13 8.83-1.68 5.78-5.56l1.61 1.62A4 4 0 0091.46 85c6.76-6.75 6.34-13.14 10.41-16.06zM68.09 101.37a4.094 4.094 0 01-3.818 1.055 4.09 4.09 0 01-2.922-2.675 1.541 1.541 0 00-2.54-.55l-.24.25a4.172 4.172 0 01-5.54.41 4 4 0 01-1.49-3.11A1.521 1.521 0 0050 95.2a4.21 4.21 0 01-4.29-4.1 1.572 1.572 0 00-1.54-1.62 4.07 4.07 0 01-3.38-6.3l-.36-.31c-4.27-3.65-4.31-8.64-10.07-17.14a1.202 1.202 0 00-.15-.24L27.8 68.4c5.95 8.69 5.94 13.74 10.26 17.43l.35.31a4 4 0 006 5.29 4.036 4.036 0 106 5.4 3.999 3.999 0 00.31 6 4.174 4.174 0 005.54-.41l3.74-3.8c-3.78 4.06 2.11 9.33 5.73 5.71 2.55-2.56 3-2.85 3.37-4l-1.01 1.04z","fill":"#FFD0CA"}}),_c('path',{attrs:{"d":"M68.68 62.82l.68-.81a2.82 2.82 0 014.18-.16l20.75 21.31-3.35 1.37-22.26-21.71z","fill":"#FFD0CA"}}),_c('path',{attrs:{"d":"M9.37 59.33l11.56 9.22 20-25.06-16.49-13.6A55.43 55.43 0 009.37 59.33z","fill":"#fff"}}),_c('path',{attrs:{"d":"M89.08 43.49l20 25.06 10.09-8.06a55.339 55.339 0 00-14.54-29.84L89.08 43.49z","fill":"#03A9F4"}}),_c('path',{attrs:{"d":"M111.858 59.965l2.43-1.877-1.877-2.43-2.429 1.877 1.876 2.43z","fill":"#358EB7"}}),_c('path',{attrs:{"d":"M20.727 57.691l-2.43-1.877-1.877 2.43 2.43 1.877 1.877-2.43z","fill":"#B5B5B5"}}),_c('path',{attrs:{"d":"M119.18 60.18l-10.1 7.63-1.64-2.06 11.14-8.59.6 3.02z","fill":"#358EB7"}}),_c('path',{attrs:{"d":"M103.363 70.606l4.494-3.587-17.288-21.656-4.493 3.587 17.287 21.656z","fill":"#fff"}}),_c('path',{attrs:{"d":"M9.37 58.96l11.1 8.8 1.65-2.06-12.21-9.11-.54 2.37z","fill":"#B5B5B5"}}),_c('path',{attrs:{"d":"M43.93 48.948l-4.493-3.587-17.288 21.656 4.494 3.587L43.93 48.948z","fill":"#fff"}}),_c('path',{attrs:{"d":"M110.928 58.756l2.43-1.877-1.877-2.43-2.43 1.877 1.877 2.43zM21.666 56.48l-2.43-1.877-1.876 2.43 2.43 1.877 1.877-2.43z","fill":"#556193"}}),_c('path',{attrs:{"d":"M104.64 30.65L89.08 43.49l20.01 25.06 10.4-8.06M103.363 70.606l4.494-3.587-17.288-21.656-4.493 3.587 17.287 21.656zM102.31 69.62c-4.51 3.23-2.73 9.53-10.5 15.9M50.59 97l4-4a4.045 4.045 0 10-5.72-5.72l-4 4A4.044 4.044 0 1050.59 97v0z","stroke":"#556193","stroke-width":"2","stroke-miterlimit":"10"}}),_c('path',{attrs:{"d":"M45 91.32l.64-.63A4.052 4.052 0 1039.87 85l-.64.64A4.048 4.048 0 1045 91.32v0zM38.37 85.92a17.19 17.19 0 01-4.18-6.08c-.88-1.84-1.49-3.4-2.64-5.67a47.543 47.543 0 00-3.25-5.39 1.27 1.27 0 00-.18-.29M66.25 52.55C63.49 50.12 57.38 50.6 53 51c-4.38.4-7.36.74-10-.89M76.2 81.14l7.47 7.47a4.026 4.026 0 01.02 5.69 4.024 4.024 0 01-5.69.02l-4-4M70 86.46l7.1 7.09a4.045 4.045 0 11-5.72 5.72l-2.74-2.74","stroke":"#556193","stroke-width":"2","stroke-miterlimit":"10"}}),_c('path',{attrs:{"d":"M87.36 49.64c-3 2.17-7.26.21-10.7 0-5.4-.34-7.94 1.1-11.39 3.6-.62.44-1.209.925-1.76 1.45L53 64.72a3.64 3.64 0 00-.4 4.79c.09.13.19.24.29.36l.55.57a3.638 3.638 0 005.15.11c.3-.29 4.69-4.46 7.37-7a2.89 2.89 0 014 .06l.4.41 20.29 20.22.29.29.35.35a4.045 4.045 0 01-5.72 5.72l-9.37-9.46M56.43 102.63l5.07-5.07a4.045 4.045 0 00-5.72-5.72l-5.07 5.08a4.042 4.042 0 005.72 5.71v0z","stroke":"#556193","stroke-width":"2","stroke-miterlimit":"10"}}),_c('path',{attrs:{"d":"M68.46 102l-2.38 2.39a2.721 2.721 0 01-.58.46 4.002 4.002 0 01-2.28.71 4.005 4.005 0 01-2.86-1.17 4.049 4.049 0 01-.47-5.14c.136-.209.294-.403.47-.58l2.38-2.38a4 4 0 012.86-1.18 4.06 4.06 0 012.23.66v0c.205.149.399.313.58.49.167.175.32.362.46.56a4 4 0 01-.41 5.18zM24.44 29.89l16.49 13.6-20 25.06-11.87-9.53","stroke":"#556193","stroke-width":"2","stroke-miterlimit":"10"}}),_c('path',{attrs:{"d":"M43.93 48.948l-4.493-3.587-17.288 21.656 4.494 3.587L43.93 48.948z","stroke":"#556193","stroke-width":"2","stroke-miterlimit":"10"}})]),_c('h1',{staticClass:"popup-heading",staticStyle:{"margin-top":"0","margin-bottom":"15px"}},[_vm._v(_vm._s(_vm.$t('feedback_popup.rate_step.thank_you')))]),_c('h2',{staticClass:"popup-subheading"},[_vm._v(_vm._s(_vm.$t('feedback_popup.rate_step.how')))])]),_c('RateUs',{attrs:{"value":_vm.value,"with-captions":true},on:{"input":function($event){return _vm.$emit('input', $event)}}}),_c('button',{staticClass:"payeer_button",staticStyle:{"margin-top":"auto","margin-bottom":"13px","padding":"14px 45px"},attrs:{"disabled":!_vm.value},on:{"click":function($event){return _vm.$emit('next')}}},[_vm._v(" "+_vm._s(_vm.value && _vm.$tc('feedback_popup.rate_step.rate', _vm.value, { count: _vm.value }) || _vm.$t('feedback_popup.rate_step.select'))+" ")])],1)}
var RateStepvue_type_template_id_a620bddc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/feedback-popup/RateStep.vue?vue&type=template&id=a620bddc&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/feedback-popup/RateUs.vue?vue&type=template&id=4b91f059&scoped=true&
var RateUsvue_type_template_id_4b91f059_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rate-us"},[_vm._l((5),function(i){return [(_vm.withCaptions || i <= _vm.value)?_c('div',{key:i,staticClass:"rate-us__star",on:{"click":function($event){return _vm.$emit('input', i === _vm.value ? null : i)},"mouseenter":function($event){_vm.hovered = i},"mouseleave":function($event){_vm.hovered = 0}}},[_c('svg',{attrs:{"width":"42","height":"41","viewBox":"0 0 42 41","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M21 0.69371L28.526 12.3655L41.9232 15.9351L33.1773 26.7183L33.9313 40.5963L21 35.5888L8.06872 40.5963L8.82267 26.7183L0.0767574 15.9351L13.474 12.3655L21 0.69371Z","fill":(i <= _vm.hovered) || i <= _vm.value ? '#09CB01':'#CED4DB'}})]),_c('transition',{attrs:{"name":"bounce"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:((_vm.value === null || _vm.value === i) && _vm.withCaptions),expression:"(value === null || value === i) && withCaptions"}],staticClass:"rate-us__title",style:({color: (_vm.hovered === i) || _vm.value === i ? '#09CB01':''})},[_vm._v(" "+_vm._s(_vm.getTitle(i))+" ")])])],1):_vm._e()]})],2)}
var RateUsvue_type_template_id_4b91f059_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/feedback-popup/RateUs.vue?vue&type=template&id=4b91f059&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/feedback-popup/RateUs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var RateUsvue_type_script_lang_js_ = ({
  name: 'RateUs',
  props: {
    withCaptions: {
      type: Boolean,
      default: true
    },
    value: {
      type: Number,
      default: null
    }
  },
  data: function data() {
    return {
      hovered: 0
    };
  },
  methods: {
    getTitle: function getTitle(index) {
      switch (index) {
        case 1:
        default:
          return this.$t('feedback_popup.rates.bad');

        case 2:
          return this.$t('feedback_popup.rates.poor');

        case 3:
          return this.$t('feedback_popup.rates.ok');

        case 4:
          return this.$t('feedback_popup.rates.good');

        case 5:
          return this.$t('feedback_popup.rates.great');
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/feedback-popup/RateUs.vue?vue&type=script&lang=js&
 /* harmony default export */ var feedback_popup_RateUsvue_type_script_lang_js_ = (RateUsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/feedback-popup/RateUs.vue?vue&type=style&index=0&id=4b91f059&lang=sass&scoped=true&
var RateUsvue_type_style_index_0_id_4b91f059_lang_sass_scoped_true_ = __webpack_require__("ee7a");

// CONCATENATED MODULE: ./src/components/feedback-popup/RateUs.vue






/* normalize component */

var RateUs_component = normalizeComponent(
  feedback_popup_RateUsvue_type_script_lang_js_,
  RateUsvue_type_template_id_4b91f059_scoped_true_render,
  RateUsvue_type_template_id_4b91f059_scoped_true_staticRenderFns,
  false,
  null,
  "4b91f059",
  null
  
)

/* harmony default export */ var RateUs = (RateUs_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/feedback-popup/RateStep.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var RateStepvue_type_script_lang_js_ = ({
  name: "RateStep",
  components: {
    RateUs: RateUs
  },
  props: {
    value: {
      type: Number,
      default: null
    }
  }
});
// CONCATENATED MODULE: ./src/components/feedback-popup/RateStep.vue?vue&type=script&lang=js&
 /* harmony default export */ var feedback_popup_RateStepvue_type_script_lang_js_ = (RateStepvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/feedback-popup/RateStep.vue?vue&type=style&index=0&id=a620bddc&lang=sass&scoped=true&
var RateStepvue_type_style_index_0_id_a620bddc_lang_sass_scoped_true_ = __webpack_require__("c60a");

// CONCATENATED MODULE: ./src/components/feedback-popup/RateStep.vue






/* normalize component */

var RateStep_component = normalizeComponent(
  feedback_popup_RateStepvue_type_script_lang_js_,
  RateStepvue_type_template_id_a620bddc_scoped_true_render,
  RateStepvue_type_template_id_a620bddc_scoped_true_staticRenderFns,
  false,
  null,
  "a620bddc",
  null
  
)

/* harmony default export */ var RateStep = (RateStep_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/feedback-popup/ReviewStep.vue?vue&type=template&id=8c7063c4&scoped=true&
var ReviewStepvue_type_template_id_8c7063c4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"feedback-popup-body",staticStyle:{"margin-top":"-35px"}},[_c('RateUs',{staticStyle:{"margin-top":"1rem","margin-bottom":"1rem"},attrs:{"value":_vm.rating,"with-captions":false}}),_c('h1',{staticClass:"popup-heading"},[_vm._v(" "+_vm._s(_vm.$t('feedback_popup.review_step.thank_you'))+" ")]),_c('i18n',{staticClass:"popup-subheading",attrs:{"path":"feedback_popup.review_step.review","tag":"h2"}},[_c('strong',[_vm._v(_vm._s(_vm.$t('feedback_popup.review_step.review_strong')))]),_c('strong',[_vm._v(_vm._s(_vm.$t('feedback_popup.review_step.websites_strong')))])]),_c('div',{staticClass:"review-services"},_vm._l((_vm.services),function(item){return _c('ReviewItem',{key:item.name,attrs:{"item":item},on:{"log":_vm.handleLog}})}),1),_c('form',{staticStyle:{"display":"none"},attrs:{"id":"feedbackForm"}},[_c('input',{attrs:{"type":"hidden","name":"action","value":"reviews"}}),_c('input',{attrs:{"type":"hidden","name":"rating"},domProps:{"value":this.rating}}),_c('input',{attrs:{"type":"hidden","name":"url"},domProps:{"value":this.logUrl}})])],1)}
var ReviewStepvue_type_template_id_8c7063c4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/feedback-popup/ReviewStep.vue?vue&type=template&id=8c7063c4&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("a34a");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/feedback-popup/ReviewItem.vue?vue&type=template&id=767a2318&scoped=true&
var ReviewItemvue_type_template_id_767a2318_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"review-item",attrs:{"href":_vm.item.url,"target":"_blank"},on:{"click":function($event){return _vm.$emit('log', _vm.item.url)}}},[_c('div',{staticClass:"review-item__logo"},[_c('img',{attrs:{"src":_vm.item.img}}),_vm._v(" "+_vm._s(_vm.item.name)+" ")]),_c('div',{staticClass:"review-item__link"},[_vm._v(" "+_vm._s(_vm.domainText)+" ")])])}
var ReviewItemvue_type_template_id_767a2318_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/feedback-popup/ReviewItem.vue?vue&type=template&id=767a2318&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/feedback-popup/ReviewItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ReviewItemvue_type_script_lang_js_ = ({
  name: 'ReviewItem',
  props: {
    item: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    domainText: function domainText() {
      return this.item.url.split('://')[1].split('/')[0];
    }
  }
});
// CONCATENATED MODULE: ./src/components/feedback-popup/ReviewItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var feedback_popup_ReviewItemvue_type_script_lang_js_ = (ReviewItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/feedback-popup/ReviewItem.vue?vue&type=style&index=0&id=767a2318&lang=sass&scoped=true&
var ReviewItemvue_type_style_index_0_id_767a2318_lang_sass_scoped_true_ = __webpack_require__("3e03");

// CONCATENATED MODULE: ./src/components/feedback-popup/ReviewItem.vue






/* normalize component */

var ReviewItem_component = normalizeComponent(
  feedback_popup_ReviewItemvue_type_script_lang_js_,
  ReviewItemvue_type_template_id_767a2318_scoped_true_render,
  ReviewItemvue_type_template_id_767a2318_scoped_true_staticRenderFns,
  false,
  null,
  "767a2318",
  null
  
)

/* harmony default export */ var ReviewItem = (ReviewItem_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/feedback-popup/ReviewStep.vue?vue&type=script&lang=js&


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ReviewStepvue_type_script_lang_js_ = ({
  name: "ReviewStep",
  components: {
    ReviewItem: ReviewItem,
    RateUs: RateUs
  },
  props: ['rating', 'services'],
  data: function data() {
    return {
      logUrl: ''
    };
  },
  methods: {
    handleLog: function handleLog(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                /* global $ */
                _this.logUrl = event;
                _context.next = 3;
                return _this.$nextTick();

              case 3:
                $.ajax({
                  method: "POST",
                  url: "/ajax/public/support.php",
                  data: $('#feedbackForm').serialize()
                }).done(function () {
                  _this.$emit('close');
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/components/feedback-popup/ReviewStep.vue?vue&type=script&lang=js&
 /* harmony default export */ var feedback_popup_ReviewStepvue_type_script_lang_js_ = (ReviewStepvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/feedback-popup/ReviewStep.vue?vue&type=style&index=0&id=8c7063c4&lang=sass&scoped=true&
var ReviewStepvue_type_style_index_0_id_8c7063c4_lang_sass_scoped_true_ = __webpack_require__("f5be");

// CONCATENATED MODULE: ./src/components/feedback-popup/ReviewStep.vue






/* normalize component */

var ReviewStep_component = normalizeComponent(
  feedback_popup_ReviewStepvue_type_script_lang_js_,
  ReviewStepvue_type_template_id_8c7063c4_scoped_true_render,
  ReviewStepvue_type_template_id_8c7063c4_scoped_true_staticRenderFns,
  false,
  null,
  "8c7063c4",
  null
  
)

/* harmony default export */ var ReviewStep = (ReviewStep_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/feedback-popup/FeedbackStep.vue?vue&type=template&id=0f66a52a&scoped=true&
var FeedbackStepvue_type_template_id_0f66a52a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"feedback-popup-body",staticStyle:{"margin-top":"-35px"}},[_c('RateUs',{staticStyle:{"margin-top":"1rem","margin-bottom":"auto"},attrs:{"with-captions":false},model:{value:(_vm.rating),callback:function ($$v) {_vm.rating=$$v},expression:"rating"}}),_c('h1',{staticClass:"popup-heading",staticStyle:{"margin-top":"1rem"}},[_vm._v(" "+_vm._s(_vm.isBadRate ? _vm.$t('feedback_popup.feedback_step.sorry') : _vm.$t('feedback_popup.feedback_step.thank_you'))+" ")]),(!_vm.isBadRate)?_c('h2',{staticClass:"popup-subheading"},[_vm._v(" "+_vm._s(_vm.$t('feedback_popup.feedback_step.review'))+" ")]):_vm._e(),_c('textarea',{staticClass:"feedback-area",class:{failed: _vm.failed},attrs:{"placeholder":_vm.$t('feedback_popup.feedback_step.placeholder')},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.$emit('input', $event.target.value)}}}),_vm._v(" "),_c('button',{staticClass:"payeer_button",staticStyle:{"padding":"14px 50px","margin":"20px auto"},on:{"click":_vm.handleSendButton}},[_vm._v(" "+_vm._s(_vm.$t('feedback_popup.feedback_step.send'))+" ")]),_c('form',{staticStyle:{"display":"none"},attrs:{"id":"feedbackForm"}},[_c('input',{attrs:{"type":"hidden","name":"action","value":"reviews"}}),_c('input',{attrs:{"type":"hidden","name":"rating"},domProps:{"value":this.rating}}),_c('input',{attrs:{"type":"hidden","name":"message"},domProps:{"value":this.value}})])],1)}
var FeedbackStepvue_type_template_id_0f66a52a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/feedback-popup/FeedbackStep.vue?vue&type=template&id=0f66a52a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/feedback-popup/FeedbackStep.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FeedbackStepvue_type_script_lang_js_ = ({
  name: "FeedbackStep",
  components: {
    RateUs: RateUs
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    rating: {
      type: Number,
      default: 5
    }
  },
  data: function data() {
    return {
      failed: false
    };
  },
  computed: {
    isBadRate: function isBadRate() {
      return this.rating < 4;
    }
  },
  watch: {
    value: function value() {
      this.failed = false;
    }
  },
  methods: {
    handleSendButton: function handleSendButton() {
      var _this = this;

      /* global $ */
      $.ajax({
        method: "POST",
        url: "/ajax/public/support.php",
        data: $('#feedbackForm').serialize()
      }).done(function (data) {
        var tmp = JSON.parse(data);

        if (tmp.ticketID > 0) {
          _this.$emit('next');
        } else {
          _this.failed = true;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/feedback-popup/FeedbackStep.vue?vue&type=script&lang=js&
 /* harmony default export */ var feedback_popup_FeedbackStepvue_type_script_lang_js_ = (FeedbackStepvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/feedback-popup/FeedbackStep.vue?vue&type=style&index=0&id=0f66a52a&lang=sass&scoped=true&
var FeedbackStepvue_type_style_index_0_id_0f66a52a_lang_sass_scoped_true_ = __webpack_require__("a557");

// CONCATENATED MODULE: ./src/components/feedback-popup/FeedbackStep.vue






/* normalize component */

var FeedbackStep_component = normalizeComponent(
  feedback_popup_FeedbackStepvue_type_script_lang_js_,
  FeedbackStepvue_type_template_id_0f66a52a_scoped_true_render,
  FeedbackStepvue_type_template_id_0f66a52a_scoped_true_staticRenderFns,
  false,
  null,
  "0f66a52a",
  null
  
)

/* harmony default export */ var FeedbackStep = (FeedbackStep_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/feedback-popup/SuccessStep.vue?vue&type=template&id=2ebc3fb0&scoped=true&
var SuccessStepvue_type_template_id_2ebc3fb0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"feedback-popup-body success-step"},[_c('svg',{style:('margin-top: 50px; margin-bottom: 1rem;'),attrs:{"width":"74","height":"70","viewBox":"0 0 74 70","fill":"none","xmlns":"http://www.w3.org/2000/svg","svg-inline":'',"role":'presentation',"focusable":'false',"tabindex":'-1'}},[_c('circle',{attrs:{"cx":"35","cy":"35","r":"33","stroke":"#20CF05","stroke-width":"4"}}),_c('path',{attrs:{"d":"M21 35l13 13 37.5-37.5","stroke":"#25D005","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}})]),_c('h1',{staticClass:"popup-heading"},[_vm._v(" "+_vm._s(_vm.$t('feedback_popup.success_step.thank_you'))+" ")]),_c('h2',{staticClass:"popup-subheading"},[_vm._v(" "+_vm._s(_vm.$t('feedback_popup.success_step.back_to_you'))+" ")]),_c('button',{staticClass:"payeer_button",staticStyle:{"margin-top":"auto","padding":"14px 50px"},on:{"click":function($event){return _vm.$emit('close')}}},[_vm._v(" "+_vm._s(_vm.$t('feedback_popup.success_step.close'))+" ")])])}
var SuccessStepvue_type_template_id_2ebc3fb0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/feedback-popup/SuccessStep.vue?vue&type=template&id=2ebc3fb0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/feedback-popup/SuccessStep.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SuccessStepvue_type_script_lang_js_ = ({
  name: "SuccessStep"
});
// CONCATENATED MODULE: ./src/components/feedback-popup/SuccessStep.vue?vue&type=script&lang=js&
 /* harmony default export */ var feedback_popup_SuccessStepvue_type_script_lang_js_ = (SuccessStepvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/feedback-popup/SuccessStep.vue?vue&type=style&index=0&id=2ebc3fb0&lang=sass&scoped=true&
var SuccessStepvue_type_style_index_0_id_2ebc3fb0_lang_sass_scoped_true_ = __webpack_require__("31da");

// CONCATENATED MODULE: ./src/components/feedback-popup/SuccessStep.vue






/* normalize component */

var SuccessStep_component = normalizeComponent(
  feedback_popup_SuccessStepvue_type_script_lang_js_,
  SuccessStepvue_type_template_id_2ebc3fb0_scoped_true_render,
  SuccessStepvue_type_template_id_2ebc3fb0_scoped_true_staticRenderFns,
  false,
  null,
  "2ebc3fb0",
  null
  
)

/* harmony default export */ var SuccessStep = (SuccessStep_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/popups/FeedbackPopup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var FeedbackPopupvue_type_script_lang_js_ = ({
  name: "FeedbackPopup",
  components: {
    SuccessStep: SuccessStep,
    FeedbackStep: FeedbackStep,
    ReviewStep: ReviewStep,
    RateStep: RateStep,
    BasePopup: BasePopup
  },
  props: {
    links: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    skipLinks: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      rating: null,
      step: 'rate',
      feedback: ''
    };
  },
  computed: {
    isGoodRate: function isGoodRate() {
      return this.rating > 3;
    }
  },
  methods: {
    handleFeedbackSubmit: function handleFeedbackSubmit() {
      this.step = 'success';
    },
    goBack: function goBack() {
      switch (this.step) {
        case "review":
          this.step = 'rate';
          break;

        case "feedback":
          this.step = this.isGoodRate && !this.skipLinks ? 'review' : 'rate';
          break;

        default:
          break;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/popups/FeedbackPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var popups_FeedbackPopupvue_type_script_lang_js_ = (FeedbackPopupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/popups/FeedbackPopup.vue





/* normalize component */

var FeedbackPopup_component = normalizeComponent(
  popups_FeedbackPopupvue_type_script_lang_js_,
  FeedbackPopupvue_type_template_id_768ef44c_scoped_true_render,
  FeedbackPopupvue_type_template_id_768ef44c_scoped_true_staticRenderFns,
  false,
  null,
  "768ef44c",
  null
  
)

/* harmony default export */ var FeedbackPopup = (FeedbackPopup_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-i18n/dist/vue-i18n.esm.js
/*!
 * vue-i18n v8.22.2 
 * (c) 2020 kazuya kawaguchi
 * Released under the MIT License.
 */
/*  */

/**
 * constants
 */

var numberFormatKeys = [
  'compactDisplay',
  'currency',
  'currencyDisplay',
  'currencySign',
  'localeMatcher',
  'notation',
  'numberingSystem',
  'signDisplay',
  'style',
  'unit',
  'unitDisplay',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits'
];

/**
 * utilities
 */

function warn (msg, err) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.warn(err.stack);
    }
  }
}

function error (msg, err) {
  if (typeof console !== 'undefined') {
    console.error('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.error(err.stack);
    }
  }
}

var isArray = Array.isArray;

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isBoolean (val) {
  return typeof val === 'boolean'
}

function isString (val) {
  return typeof val === 'string'
}

var vue_i18n_esm_toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return vue_i18n_esm_toString.call(obj) === OBJECT_STRING
}

function isNull (val) {
  return val === null || val === undefined
}

function isFunction (val) {
  return typeof val === 'function'
}

function parseArgs () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var locale = null;
  var params = null;
  if (args.length === 1) {
    if (isObject(args[0]) || isArray(args[0])) {
      params = args[0];
    } else if (typeof args[0] === 'string') {
      locale = args[0];
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      locale = args[0];
    }
    /* istanbul ignore if */
    if (isObject(args[1]) || isArray(args[1])) {
      params = args[1];
    }
  }

  return { locale: locale, params: params }
}

function looseClone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

function includes (arr, item) {
  return !!~arr.indexOf(item)
}

var vue_i18n_esm_hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return vue_i18n_esm_hasOwnProperty.call(obj, key)
}

function merge (target) {
  var arguments$1 = arguments;

  var output = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i];
    if (source !== undefined && source !== null) {
      var key = (void 0);
      for (key in source) {
        if (hasOwn(source, key)) {
          if (isObject(source[key])) {
            output[key] = merge(output[key], source[key]);
          } else {
            output[key] = source[key];
          }
        }
      }
    }
  }
  return output
}

function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = isArray(a);
      var isArrayB = isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Sanitizes html special characters from input strings. For mitigating risk of XSS attacks.
 * @param rawText The raw input from the user that should be escaped.
 */
function escapeHtml(rawText) {
  return rawText
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Escapes html tags and special symbols from all provided params which were returned from parseArgs().params.
 * This method performs an in-place operation on the params object.
 *
 * @param {any} params Parameters as provided from `parseArgs().params`.
 *                     May be either an array of strings or a string->any map.
 *
 * @returns The manipulated `params` object.
 */
function escapeParams(params) {
  if(params != null) {
    Object.keys(params).forEach(function (key) {
      if(typeof(params[key]) == 'string') {
        params[key] = escapeHtml(params[key]);
      }
    });
  }
  return params
}

/*  */

function extend (Vue) {
  if (!Vue.prototype.hasOwnProperty('$i18n')) {
    // $FlowFixMe
    Object.defineProperty(Vue.prototype, '$i18n', {
      get: function get () { return this._i18n }
    });
  }

  Vue.prototype.$t = function (key) {
    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];

    var i18n = this.$i18n;
    return i18n._t.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this ].concat( values ))
  };

  Vue.prototype.$tc = function (key, choice) {
    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];

    var i18n = this.$i18n;
    return i18n._tc.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this, choice ].concat( values ))
  };

  Vue.prototype.$te = function (key, locale) {
    var i18n = this.$i18n;
    return i18n._te(key, i18n.locale, i18n._getMessages(), locale)
  };

  Vue.prototype.$d = function (value) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
    return (ref = this.$i18n).d.apply(ref, [ value ].concat( args ))
  };

  Vue.prototype.$n = function (value) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
    return (ref = this.$i18n).n.apply(ref, [ value ].concat( args ))
  };
}

/*  */

var mixin = {
  beforeCreate: function beforeCreate () {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages = options.i18n && options.i18n.messages ? options.i18n.messages : {};
            options.__i18n.forEach(function (resource) {
              localeMessages = merge(localeMessages, JSON.parse(resource));
            });
            Object.keys(localeMessages).forEach(function (locale) {
              options.i18n.mergeLocaleMessage(locale, localeMessages[locale]);
            });
          } catch (e) {
            if (false) {}
          }
        }
        this._i18n = options.i18n;
        this._i18nWatcher = this._i18n.watchI18nData();
      } else if (isPlainObject(options.i18n)) {
        var rootI18n = this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n
          ? this.$root.$i18n
          : null;
        // component local i18n
        if (rootI18n) {
          options.i18n.root = this.$root;
          options.i18n.formatter = rootI18n.formatter;
          options.i18n.fallbackLocale = rootI18n.fallbackLocale;
          options.i18n.formatFallbackMessages = rootI18n.formatFallbackMessages;
          options.i18n.silentTranslationWarn = rootI18n.silentTranslationWarn;
          options.i18n.silentFallbackWarn = rootI18n.silentFallbackWarn;
          options.i18n.pluralizationRules = rootI18n.pluralizationRules;
          options.i18n.preserveDirectiveContent = rootI18n.preserveDirectiveContent;
        }

        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages$1 = options.i18n && options.i18n.messages ? options.i18n.messages : {};
            options.__i18n.forEach(function (resource) {
              localeMessages$1 = merge(localeMessages$1, JSON.parse(resource));
            });
            options.i18n.messages = localeMessages$1;
          } catch (e) {
            if (false) {}
          }
        }

        var ref = options.i18n;
        var sharedMessages = ref.sharedMessages;
        if (sharedMessages && isPlainObject(sharedMessages)) {
          options.i18n.messages = merge(options.i18n.messages, sharedMessages);
        }

        this._i18n = new VueI18n(options.i18n);
        this._i18nWatcher = this._i18n.watchI18nData();

        if (options.i18n.sync === undefined || !!options.i18n.sync) {
          this._localeWatcher = this.$i18n.watchLocale();
        }

        if (rootI18n) {
          rootI18n.onComponentInstanceCreated(this._i18n);
        }
      } else {
        if (false) {}
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      // root i18n
      this._i18n = this.$root.$i18n;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      // parent i18n
      this._i18n = options.parent.$i18n;
    }
  },

  beforeMount: function beforeMount () {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else if (isPlainObject(options.i18n)) {
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else {
        if (false) {}
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    }
  },

  beforeDestroy: function beforeDestroy () {
    if (!this._i18n) { return }

    var self = this;
    this.$nextTick(function () {
      if (self._subscribing) {
        self._i18n.unsubscribeDataChanging(self);
        delete self._subscribing;
      }

      if (self._i18nWatcher) {
        self._i18nWatcher();
        self._i18n.destroyVM();
        delete self._i18nWatcher;
      }

      if (self._localeWatcher) {
        self._localeWatcher();
        delete self._localeWatcher;
      }
    });
  }
};

/*  */

var interpolationComponent = {
  name: 'i18n',
  functional: true,
  props: {
    tag: {
      type: [String, Boolean, Object],
      default: 'span'
    },
    path: {
      type: String,
      required: true
    },
    locale: {
      type: String
    },
    places: {
      type: [Array, Object]
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var parent = ref.parent;
    var props = ref.props;
    var slots = ref.slots;

    var $i18n = parent.$i18n;
    if (!$i18n) {
      if (false) {}
      return
    }

    var path = props.path;
    var locale = props.locale;
    var places = props.places;
    var params = slots();
    var children = $i18n.i(
      path,
      locale,
      onlyHasDefaultPlace(params) || places
        ? useLegacyPlaces(params.default, places)
        : params
    );

    var tag = (!!props.tag && props.tag !== true) || props.tag === false ? props.tag : 'span';
    return tag ? h(tag, data, children) : children
  }
};

function onlyHasDefaultPlace (params) {
  var prop;
  for (prop in params) {
    if (prop !== 'default') { return false }
  }
  return Boolean(prop)
}

function useLegacyPlaces (children, places) {
  var params = places ? createParamsFromPlaces(places) : {};

  if (!children) { return params }

  // Filter empty text nodes
  children = children.filter(function (child) {
    return child.tag || child.text.trim() !== ''
  });

  var everyPlace = children.every(vnodeHasPlaceAttribute);
  if (false) {}

  return children.reduce(
    everyPlace ? assignChildPlace : assignChildIndex,
    params
  )
}

function createParamsFromPlaces (places) {
  if (false) {}

  return Array.isArray(places)
    ? places.reduce(assignChildIndex, {})
    : Object.assign({}, places)
}

function assignChildPlace (params, child) {
  if (child.data && child.data.attrs && child.data.attrs.place) {
    params[child.data.attrs.place] = child;
  }
  return params
}

function assignChildIndex (params, child, index) {
  params[index] = child;
  return params
}

function vnodeHasPlaceAttribute (vnode) {
  return Boolean(vnode.data && vnode.data.attrs && vnode.data.attrs.place)
}

/*  */

var numberComponent = {
  name: 'i18n-n',
  functional: true,
  props: {
    tag: {
      type: [String, Boolean, Object],
      default: 'span'
    },
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    },
    locale: {
      type: String
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var parent = ref.parent;
    var data = ref.data;

    var i18n = parent.$i18n;

    if (!i18n) {
      if (false) {}
      return null
    }

    var key = null;
    var options = null;

    if (isString(props.format)) {
      key = props.format;
    } else if (isObject(props.format)) {
      if (props.format.key) {
        key = props.format.key;
      }

      // Filter out number format options only
      options = Object.keys(props.format).reduce(function (acc, prop) {
        var obj;

        if (includes(numberFormatKeys, prop)) {
          return Object.assign({}, acc, ( obj = {}, obj[prop] = props.format[prop], obj ))
        }
        return acc
      }, null);
    }

    var locale = props.locale || i18n.locale;
    var parts = i18n._ntp(props.value, locale, key, options);

    var values = parts.map(function (part, index) {
      var obj;

      var slot = data.scopedSlots && data.scopedSlots[part.type];
      return slot ? slot(( obj = {}, obj[part.type] = part.value, obj.index = index, obj.parts = parts, obj )) : part.value
    });

    var tag = (!!props.tag && props.tag !== true) || props.tag === false ? props.tag : 'span';
    return tag
      ? h(tag, {
        attrs: data.attrs,
        'class': data['class'],
        staticClass: data.staticClass
      }, values)
      : values
  }
};

/*  */

function bind (el, binding, vnode) {
  if (!assert(el, vnode)) { return }

  t(el, binding, vnode);
}

function update (el, binding, vnode, oldVNode) {
  if (!assert(el, vnode)) { return }

  var i18n = vnode.context.$i18n;
  if (localeEqual(el, vnode) &&
    (looseEqual(binding.value, binding.oldValue) &&
     looseEqual(el._localeMessage, i18n.getLocaleMessage(i18n.locale)))) { return }

  t(el, binding, vnode);
}

function unbind (el, binding, vnode, oldVNode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return
  }

  var i18n = vnode.context.$i18n || {};
  if (!binding.modifiers.preserve && !i18n.preserveDirectiveContent) {
    el.textContent = '';
  }
  el._vt = undefined;
  delete el['_vt'];
  el._locale = undefined;
  delete el['_locale'];
  el._localeMessage = undefined;
  delete el['_localeMessage'];
}

function assert (el, vnode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return false
  }

  if (!vm.$i18n) {
    warn('VueI18n instance does not exists in Vue instance');
    return false
  }

  return true
}

function localeEqual (el, vnode) {
  var vm = vnode.context;
  return el._locale === vm.$i18n.locale
}

function t (el, binding, vnode) {
  var ref$1, ref$2;

  var value = binding.value;

  var ref = parseValue(value);
  var path = ref.path;
  var locale = ref.locale;
  var args = ref.args;
  var choice = ref.choice;
  if (!path && !locale && !args) {
    warn('value type not supported');
    return
  }

  if (!path) {
    warn('`path` is required in v-t directive');
    return
  }

  var vm = vnode.context;
  if (choice != null) {
    el._vt = el.textContent = (ref$1 = vm.$i18n).tc.apply(ref$1, [ path, choice ].concat( makeParams(locale, args) ));
  } else {
    el._vt = el.textContent = (ref$2 = vm.$i18n).t.apply(ref$2, [ path ].concat( makeParams(locale, args) ));
  }
  el._locale = vm.$i18n.locale;
  el._localeMessage = vm.$i18n.getLocaleMessage(vm.$i18n.locale);
}

function parseValue (value) {
  var path;
  var locale;
  var args;
  var choice;

  if (isString(value)) {
    path = value;
  } else if (isPlainObject(value)) {
    path = value.path;
    locale = value.locale;
    args = value.args;
    choice = value.choice;
  }

  return { path: path, locale: locale, args: args, choice: choice }
}

function makeParams (locale, args) {
  var params = [];

  locale && params.push(locale);
  if (args && (Array.isArray(args) || isPlainObject(args))) {
    params.push(args);
  }

  return params
}

var Vue;

function install (_Vue) {
  /* istanbul ignore if */
  if (false) {}
  install.installed = true;

  Vue = _Vue;

  var version = (Vue.version && Number(Vue.version.split('.')[0])) || -1;
  /* istanbul ignore if */
  if (false) {}

  extend(Vue);
  Vue.mixin(mixin);
  Vue.directive('t', { bind: bind, update: update, unbind: unbind });
  Vue.component(interpolationComponent.name, interpolationComponent);
  Vue.component(numberComponent.name, numberComponent);

  // use simple mergeStrategies to prevent i18n instance lose '__proto__'
  var strats = Vue.config.optionMergeStrategies;
  strats.i18n = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };
}

/*  */

var BaseFormatter = function BaseFormatter () {
  this._caches = Object.create(null);
};

BaseFormatter.prototype.interpolate = function interpolate (message, values) {
  if (!values) {
    return [message]
  }
  var tokens = this._caches[message];
  if (!tokens) {
    tokens = parse(message);
    this._caches[message] = tokens;
  }
  return compile(tokens, values)
};



var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;

function parse (format) {
  var tokens = [];
  var position = 0;

  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === '{') {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }

      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== '}') {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === '}';

      var type = RE_TOKEN_LIST_VALUE.test(sub)
        ? 'list'
        : isClosed && RE_TOKEN_NAMED_VALUE.test(sub)
          ? 'named'
          : 'unknown';
      tokens.push({ value: sub, type: type });
    } else if (char === '%') {
      // when found rails i18n syntax, skip text capture
      if (format[(position)] !== '{') {
        text += char;
      }
    } else {
      text += char;
    }
  }

  text && tokens.push({ type: 'text', value: text });

  return tokens
}

function compile (tokens, values) {
  var compiled = [];
  var index = 0;

  var mode = Array.isArray(values)
    ? 'list'
    : isObject(values)
      ? 'named'
      : 'unknown';
  if (mode === 'unknown') { return compiled }

  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break
      case 'named':
        if (mode === 'named') {
          compiled.push((values)[token.value]);
        } else {
          if (false) {}
        }
        break
      case 'unknown':
        if (false) {}
        break
    }
    index++;
  }

  return compiled
}

/*  */

/**
 *  Path parser
 *  - Inspired:
 *    Vue.js Path parser
 */

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Check if an expression is a literal value.
 */

var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral (exp) {
  return literalValueRE.test(exp)
}

/**
 * Strip quotes from a string
 */

function stripQuotes (str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27)
    ? str.slice(1, -1)
    : str
}

/**
 * Determine the type of a character in a keypath.
 */

function getPathCharType (ch) {
  if (ch === undefined || ch === null) { return 'eof' }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
      return ch

    case 0x5F: // _
    case 0x24: // $
    case 0x2D: // -
      return 'ident'

    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0:  // No-break space
    case 0xFEFF:  // Byte Order Mark
    case 0x2028:  // Line Separator
    case 0x2029:  // Paragraph Separator
      return 'ws'
  }

  return 'ident'
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 */

function formatSubPath (path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) { return false }

  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed
}

/**
 * Parse a string path into an array of segments
 */

function parse$1 (path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c;
  var key;
  var newChar;
  var type;
  var transition;
  var action;
  var typeMap;
  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      if (key === undefined) { return false }
      key = formatSubPath(key);
      if (key === false) {
        return false
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote () {
    var nextChar = path[index + 1];
    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
      (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true
    }
  }

  while (mode !== null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined
        ? c
        : newChar;
      if (action() === false) {
        return
      }
    }

    if (mode === AFTER_PATH) {
      return keys
    }
  }
}





var I18nPath = function I18nPath () {
  this._cache = Object.create(null);
};

/**
 * External parse that check for a cache hit first
 */
I18nPath.prototype.parsePath = function parsePath (path) {
  var hit = this._cache[path];
  if (!hit) {
    hit = parse$1(path);
    if (hit) {
      this._cache[path] = hit;
    }
  }
  return hit || []
};

/**
 * Get path value from path string
 */
I18nPath.prototype.getPathValue = function getPathValue (obj, path) {
  if (!isObject(obj)) { return null }

  var paths = this.parsePath(path);
  if (paths.length === 0) {
    return null
  } else {
    var length = paths.length;
    var last = obj;
    var i = 0;
    while (i < length) {
      var value = last[paths[i]];
      if (value === undefined) {
        return null
      }
      last = value;
      i++;
    }

    return last
  }
};

/*  */



var htmlTagMatcher = /<\/?[\w\s="/.':;#-\/]+>/;
var linkKeyMatcher = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g;
var linkKeyPrefixMatcher = /^@(?:\.([a-z]+))?:/;
var bracketsMatcher = /[()]/g;
var defaultModifiers = {
  'upper': function (str) { return str.toLocaleUpperCase(); },
  'lower': function (str) { return str.toLocaleLowerCase(); },
  'capitalize': function (str) { return ("" + (str.charAt(0).toLocaleUpperCase()) + (str.substr(1))); }
};

var defaultFormatter = new BaseFormatter();

var VueI18n = function VueI18n (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #290
  /* istanbul ignore if */
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var locale = options.locale || 'en-US';
  var fallbackLocale = options.fallbackLocale === false
    ? false
    : options.fallbackLocale || 'en-US';
  var messages = options.messages || {};
  var dateTimeFormats = options.dateTimeFormats || {};
  var numberFormats = options.numberFormats || {};

  this._vm = null;
  this._formatter = options.formatter || defaultFormatter;
  this._modifiers = options.modifiers || {};
  this._missing = options.missing || null;
  this._root = options.root || null;
  this._sync = options.sync === undefined ? true : !!options.sync;
  this._fallbackRoot = options.fallbackRoot === undefined
    ? true
    : !!options.fallbackRoot;
  this._formatFallbackMessages = options.formatFallbackMessages === undefined
    ? false
    : !!options.formatFallbackMessages;
  this._silentTranslationWarn = options.silentTranslationWarn === undefined
    ? false
    : options.silentTranslationWarn;
  this._silentFallbackWarn = options.silentFallbackWarn === undefined
    ? false
    : !!options.silentFallbackWarn;
  this._dateTimeFormatters = {};
  this._numberFormatters = {};
  this._path = new I18nPath();
  this._dataListeners = [];
  this._componentInstanceCreatedListener = options.componentInstanceCreatedListener || null;
  this._preserveDirectiveContent = options.preserveDirectiveContent === undefined
    ? false
    : !!options.preserveDirectiveContent;
  this.pluralizationRules = options.pluralizationRules || {};
  this._warnHtmlInMessage = options.warnHtmlInMessage || 'off';
  this._postTranslation = options.postTranslation || null;
  this._escapeParameterHtml = options.escapeParameterHtml || false;

  /**
   * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
   * @param choicesLength {number} an overall amount of available choices
   * @returns a final choice index
  */
  this.getChoiceIndex = function (choice, choicesLength) {
    var thisPrototype = Object.getPrototypeOf(this$1);
    if (thisPrototype && thisPrototype.getChoiceIndex) {
      var prototypeGetChoiceIndex = (thisPrototype.getChoiceIndex);
      return (prototypeGetChoiceIndex).call(this$1, choice, choicesLength)
    }

    // Default (old) getChoiceIndex implementation - english-compatible
    var defaultImpl = function (_choice, _choicesLength) {
      _choice = Math.abs(_choice);

      if (_choicesLength === 2) {
        return _choice
          ? _choice > 1
            ? 1
            : 0
          : 1
      }

      return _choice ? Math.min(_choice, 2) : 0
    };

    if (this$1.locale in this$1.pluralizationRules) {
      return this$1.pluralizationRules[this$1.locale].apply(this$1, [choice, choicesLength])
    } else {
      return defaultImpl(choice, choicesLength)
    }
  };


  this._exist = function (message, key) {
    if (!message || !key) { return false }
    if (!isNull(this$1._path.getPathValue(message, key))) { return true }
    // fallback for flat key
    if (message[key]) { return true }
    return false
  };

  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }

  this._initVM({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    dateTimeFormats: dateTimeFormats,
    numberFormats: numberFormats
  });
};

var prototypeAccessors = { vm: { configurable: true },messages: { configurable: true },dateTimeFormats: { configurable: true },numberFormats: { configurable: true },availableLocales: { configurable: true },locale: { configurable: true },fallbackLocale: { configurable: true },formatFallbackMessages: { configurable: true },missing: { configurable: true },formatter: { configurable: true },silentTranslationWarn: { configurable: true },silentFallbackWarn: { configurable: true },preserveDirectiveContent: { configurable: true },warnHtmlInMessage: { configurable: true },postTranslation: { configurable: true } };

VueI18n.prototype._checkLocaleMessage = function _checkLocaleMessage (locale, level, message) {
  var paths = [];

  var fn = function (level, locale, message, paths) {
    if (isPlainObject(message)) {
      Object.keys(message).forEach(function (key) {
        var val = message[key];
        if (isPlainObject(val)) {
          paths.push(key);
          paths.push('.');
          fn(level, locale, val, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(key);
          fn(level, locale, val, paths);
          paths.pop();
        }
      });
    } else if (isArray(message)) {
      message.forEach(function (item, index) {
        if (isPlainObject(item)) {
          paths.push(("[" + index + "]"));
          paths.push('.');
          fn(level, locale, item, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(("[" + index + "]"));
          fn(level, locale, item, paths);
          paths.pop();
        }
      });
    } else if (isString(message)) {
      var ret = htmlTagMatcher.test(message);
      if (ret) {
        var msg = "Detected HTML in message '" + message + "' of keypath '" + (paths.join('')) + "' at '" + locale + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
        if (level === 'warn') {
          warn(msg);
        } else if (level === 'error') {
          error(msg);
        }
      }
    }
  };

  fn(level, locale, message, paths);
};

VueI18n.prototype._initVM = function _initVM (data) {
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  this._vm = new Vue({ data: data });
  Vue.config.silent = silent;
};

VueI18n.prototype.destroyVM = function destroyVM () {
  this._vm.$destroy();
};

VueI18n.prototype.subscribeDataChanging = function subscribeDataChanging (vm) {
  this._dataListeners.push(vm);
};

VueI18n.prototype.unsubscribeDataChanging = function unsubscribeDataChanging (vm) {
  remove(this._dataListeners, vm);
};

VueI18n.prototype.watchI18nData = function watchI18nData () {
  var self = this;
  return this._vm.$watch('$data', function () {
    var i = self._dataListeners.length;
    while (i--) {
      Vue.nextTick(function () {
        self._dataListeners[i] && self._dataListeners[i].$forceUpdate();
      });
    }
  }, { deep: true })
};

VueI18n.prototype.watchLocale = function watchLocale () {
  /* istanbul ignore if */
  if (!this._sync || !this._root) { return null }
  var target = this._vm;
  return this._root.$i18n.vm.$watch('locale', function (val) {
    target.$set(target, 'locale', val);
    target.$forceUpdate();
  }, { immediate: true })
};

VueI18n.prototype.onComponentInstanceCreated = function onComponentInstanceCreated (newI18n) {
  if (this._componentInstanceCreatedListener) {
    this._componentInstanceCreatedListener(newI18n, this);
  }
};

prototypeAccessors.vm.get = function () { return this._vm };

prototypeAccessors.messages.get = function () { return looseClone(this._getMessages()) };
prototypeAccessors.dateTimeFormats.get = function () { return looseClone(this._getDateTimeFormats()) };
prototypeAccessors.numberFormats.get = function () { return looseClone(this._getNumberFormats()) };
prototypeAccessors.availableLocales.get = function () { return Object.keys(this.messages).sort() };

prototypeAccessors.locale.get = function () { return this._vm.locale };
prototypeAccessors.locale.set = function (locale) {
  this._vm.$set(this._vm, 'locale', locale);
};

prototypeAccessors.fallbackLocale.get = function () { return this._vm.fallbackLocale };
prototypeAccessors.fallbackLocale.set = function (locale) {
  this._localeChainCache = {};
  this._vm.$set(this._vm, 'fallbackLocale', locale);
};

prototypeAccessors.formatFallbackMessages.get = function () { return this._formatFallbackMessages };
prototypeAccessors.formatFallbackMessages.set = function (fallback) { this._formatFallbackMessages = fallback; };

prototypeAccessors.missing.get = function () { return this._missing };
prototypeAccessors.missing.set = function (handler) { this._missing = handler; };

prototypeAccessors.formatter.get = function () { return this._formatter };
prototypeAccessors.formatter.set = function (formatter) { this._formatter = formatter; };

prototypeAccessors.silentTranslationWarn.get = function () { return this._silentTranslationWarn };
prototypeAccessors.silentTranslationWarn.set = function (silent) { this._silentTranslationWarn = silent; };

prototypeAccessors.silentFallbackWarn.get = function () { return this._silentFallbackWarn };
prototypeAccessors.silentFallbackWarn.set = function (silent) { this._silentFallbackWarn = silent; };

prototypeAccessors.preserveDirectiveContent.get = function () { return this._preserveDirectiveContent };
prototypeAccessors.preserveDirectiveContent.set = function (preserve) { this._preserveDirectiveContent = preserve; };

prototypeAccessors.warnHtmlInMessage.get = function () { return this._warnHtmlInMessage };
prototypeAccessors.warnHtmlInMessage.set = function (level) {
    var this$1 = this;

  var orgLevel = this._warnHtmlInMessage;
  this._warnHtmlInMessage = level;
  if (orgLevel !== level && (level === 'warn' || level === 'error')) {
    var messages = this._getMessages();
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }
};

prototypeAccessors.postTranslation.get = function () { return this._postTranslation };
prototypeAccessors.postTranslation.set = function (handler) { this._postTranslation = handler; };

VueI18n.prototype._getMessages = function _getMessages () { return this._vm.messages };
VueI18n.prototype._getDateTimeFormats = function _getDateTimeFormats () { return this._vm.dateTimeFormats };
VueI18n.prototype._getNumberFormats = function _getNumberFormats () { return this._vm.numberFormats };

VueI18n.prototype._warnDefault = function _warnDefault (locale, key, result, vm, values, interpolateMode) {
  if (!isNull(result)) { return result }
  if (this._missing) {
    var missingRet = this._missing.apply(null, [locale, key, vm, values]);
    if (isString(missingRet)) {
      return missingRet
    }
  } else {
    if (false) {}
  }

  if (this._formatFallbackMessages) {
    var parsedArgs = parseArgs.apply(void 0, values);
    return this._render(key, interpolateMode, parsedArgs.params, key)
  } else {
    return key
  }
};

VueI18n.prototype._isFallbackRoot = function _isFallbackRoot (val) {
  return !val && !isNull(this._root) && this._fallbackRoot
};

VueI18n.prototype._isSilentFallbackWarn = function _isSilentFallbackWarn (key) {
  return this._silentFallbackWarn instanceof RegExp
    ? this._silentFallbackWarn.test(key)
    : this._silentFallbackWarn
};

VueI18n.prototype._isSilentFallback = function _isSilentFallback (locale, key) {
  return this._isSilentFallbackWarn(key) && (this._isFallbackRoot() || locale !== this.fallbackLocale)
};

VueI18n.prototype._isSilentTranslationWarn = function _isSilentTranslationWarn (key) {
  return this._silentTranslationWarn instanceof RegExp
    ? this._silentTranslationWarn.test(key)
    : this._silentTranslationWarn
};

VueI18n.prototype._interpolate = function _interpolate (
  locale,
  message,
  key,
  host,
  interpolateMode,
  values,
  visitedLinkStack
) {
  if (!message) { return null }

  var pathRet = this._path.getPathValue(message, key);
  if (isArray(pathRet) || isPlainObject(pathRet)) { return pathRet }

  var ret;
  if (isNull(pathRet)) {
    /* istanbul ignore else */
    if (isPlainObject(message)) {
      ret = message[key];
      if (!(isString(ret) || isFunction(ret))) {
        if (false) {}
        return null
      }
    } else {
      return null
    }
  } else {
    /* istanbul ignore else */
    if (isString(pathRet) || isFunction(pathRet)) {
      ret = pathRet;
    } else {
      if (false) {}
      return null
    }
  }

  // Check for the existence of links within the translated string
  if (isString(ret) && (ret.indexOf('@:') >= 0 || ret.indexOf('@.') >= 0)) {
    ret = this._link(locale, message, ret, host, 'raw', values, visitedLinkStack);
  }

  return this._render(ret, interpolateMode, values, key)
};

VueI18n.prototype._link = function _link (
  locale,
  message,
  str,
  host,
  interpolateMode,
  values,
  visitedLinkStack
) {
  var ret = str;

  // Match all the links within the local
  // We are going to replace each of
  // them with its translation
  var matches = ret.match(linkKeyMatcher);
  for (var idx in matches) {
    // ie compatible: filter custom array
    // prototype method
    if (!matches.hasOwnProperty(idx)) {
      continue
    }
    var link = matches[idx];
    var linkKeyPrefixMatches = link.match(linkKeyPrefixMatcher);
    var linkPrefix = linkKeyPrefixMatches[0];
      var formatterName = linkKeyPrefixMatches[1];

    // Remove the leading @:, @.case: and the brackets
    var linkPlaceholder = link.replace(linkPrefix, '').replace(bracketsMatcher, '');

    if (includes(visitedLinkStack, linkPlaceholder)) {
      if (false) {}
      return ret
    }
    visitedLinkStack.push(linkPlaceholder);

    // Translate the link
    var translated = this._interpolate(
      locale, message, linkPlaceholder, host,
      interpolateMode === 'raw' ? 'string' : interpolateMode,
      interpolateMode === 'raw' ? undefined : values,
      visitedLinkStack
    );

    if (this._isFallbackRoot(translated)) {
      if (false) {}
      /* istanbul ignore if */
      if (!this._root) { throw Error('unexpected error') }
      var root = this._root.$i18n;
      translated = root._translate(
        root._getMessages(), root.locale, root.fallbackLocale,
        linkPlaceholder, host, interpolateMode, values
      );
    }
    translated = this._warnDefault(
      locale, linkPlaceholder, translated, host,
      isArray(values) ? values : [values],
      interpolateMode
    );

    if (this._modifiers.hasOwnProperty(formatterName)) {
      translated = this._modifiers[formatterName](translated);
    } else if (defaultModifiers.hasOwnProperty(formatterName)) {
      translated = defaultModifiers[formatterName](translated);
    }

    visitedLinkStack.pop();

    // Replace the link with the translated
    ret = !translated ? ret : ret.replace(link, translated);
  }

  return ret
};

VueI18n.prototype._createMessageContext = function _createMessageContext (values) {
  var _list = isArray(values) ? values : [];
  var _named = isObject(values) ? values : {};
  var list = function (index) { return _list[index]; };
  var named = function (key) { return _named[key]; };
  return {
    list: list,
    named: named
  }
};

VueI18n.prototype._render = function _render (message, interpolateMode, values, path) {
  if (isFunction(message)) {
    return message(this._createMessageContext(values))
  }

  var ret = this._formatter.interpolate(message, values, path);

  // If the custom formatter refuses to work - apply the default one
  if (!ret) {
    ret = defaultFormatter.interpolate(message, values, path);
  }

  // if interpolateMode is **not** 'string' ('row'),
  // return the compiled data (e.g. ['foo', VNode, 'bar']) with formatter
  return interpolateMode === 'string' && !isString(ret) ? ret.join('') : ret
};

VueI18n.prototype._appendItemToChain = function _appendItemToChain (chain, item, blocks) {
  var follow = false;
  if (!includes(chain, item)) {
    follow = true;
    if (item) {
      follow = item[item.length - 1] !== '!';
      item = item.replace(/!/g, '');
      chain.push(item);
      if (blocks && blocks[item]) {
        follow = blocks[item];
      }
    }
  }
  return follow
};

VueI18n.prototype._appendLocaleToChain = function _appendLocaleToChain (chain, locale, blocks) {
  var follow;
  var tokens = locale.split('-');
  do {
    var item = tokens.join('-');
    follow = this._appendItemToChain(chain, item, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && (follow === true))
  return follow
};

VueI18n.prototype._appendBlockToChain = function _appendBlockToChain (chain, block, blocks) {
  var follow = true;
  for (var i = 0; (i < block.length) && (isBoolean(follow)); i++) {
    var locale = block[i];
    if (isString(locale)) {
      follow = this._appendLocaleToChain(chain, locale, blocks);
    }
  }
  return follow
};

VueI18n.prototype._getLocaleChain = function _getLocaleChain (start, fallbackLocale) {
  if (start === '') { return [] }

  if (!this._localeChainCache) {
    this._localeChainCache = {};
  }

  var chain = this._localeChainCache[start];
  if (!chain) {
    if (!fallbackLocale) {
      fallbackLocale = this.fallbackLocale;
    }
    chain = [];

    // first block defined by start
    var block = [start];

    // while any intervening block found
    while (isArray(block)) {
      block = this._appendBlockToChain(
        chain,
        block,
        fallbackLocale
      );
    }

    // last block defined by default
    var defaults;
    if (isArray(fallbackLocale)) {
      defaults = fallbackLocale;
    } else if (isObject(fallbackLocale)) {
      /* $FlowFixMe */
      if (fallbackLocale['default']) {
        defaults = fallbackLocale['default'];
      } else {
        defaults = null;
      }
    } else {
      defaults = fallbackLocale;
    }

    // convert defaults to array
    if (isString(defaults)) {
      block = [defaults];
    } else {
      block = defaults;
    }
    if (block) {
      this._appendBlockToChain(
        chain,
        block,
        null
      );
    }
    this._localeChainCache[start] = chain;
  }
  return chain
};

VueI18n.prototype._translate = function _translate (
  messages,
  locale,
  fallback,
  key,
  host,
  interpolateMode,
  args
) {
  var chain = this._getLocaleChain(locale, fallback);
  var res;
  for (var i = 0; i < chain.length; i++) {
    var step = chain[i];
    res =
      this._interpolate(step, messages[step], key, host, interpolateMode, args, [key]);
    if (!isNull(res)) {
      if (step !== locale && "production" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to translate the keypath '" + key + "' with '" + step + "' locale."));
      }
      return res
    }
  }
  return null
};

VueI18n.prototype._t = function _t (key, _locale, messages, host) {
    var ref;

    var values = [], len = arguments.length - 4;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 4 ];
  if (!key) { return '' }

  var parsedArgs = parseArgs.apply(void 0, values);
  if(this._escapeParameterHtml) {
    parsedArgs.params = escapeParams(parsedArgs.params);
  }

  var locale = parsedArgs.locale || _locale;

  var ret = this._translate(
    messages, locale, this.fallbackLocale, key,
    host, 'string', parsedArgs.params
  );
  if (this._isFallbackRoot(ret)) {
    if (false) {}
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return (ref = this._root).$t.apply(ref, [ key ].concat( values ))
  } else {
    ret = this._warnDefault(locale, key, ret, host, values, 'string');
    if (this._postTranslation && ret !== null && ret !== undefined) {
      ret = this._postTranslation(ret, key);
    }
    return ret
  }
};

VueI18n.prototype.t = function t (key) {
    var ref;

    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];
  return (ref = this)._t.apply(ref, [ key, this.locale, this._getMessages(), null ].concat( values ))
};

VueI18n.prototype._i = function _i (key, locale, messages, host, values) {
  var ret =
    this._translate(messages, locale, this.fallbackLocale, key, host, 'raw', values);
  if (this._isFallbackRoot(ret)) {
    if (false) {}
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.i(key, locale, values)
  } else {
    return this._warnDefault(locale, key, ret, host, [values], 'raw')
  }
};

VueI18n.prototype.i = function i (key, locale, values) {
  /* istanbul ignore if */
  if (!key) { return '' }

  if (!isString(locale)) {
    locale = this.locale;
  }

  return this._i(key, locale, this._getMessages(), null, values)
};

VueI18n.prototype._tc = function _tc (
  key,
  _locale,
  messages,
  host,
  choice
) {
    var ref;

    var values = [], len = arguments.length - 5;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 5 ];
  if (!key) { return '' }
  if (choice === undefined) {
    choice = 1;
  }

  var predefined = { 'count': choice, 'n': choice };
  var parsedArgs = parseArgs.apply(void 0, values);
  parsedArgs.params = Object.assign(predefined, parsedArgs.params);
  values = parsedArgs.locale === null ? [parsedArgs.params] : [parsedArgs.locale, parsedArgs.params];
  return this.fetchChoice((ref = this)._t.apply(ref, [ key, _locale, messages, host ].concat( values )), choice)
};

VueI18n.prototype.fetchChoice = function fetchChoice (message, choice) {
  /* istanbul ignore if */
  if (!message || !isString(message)) { return null }
  var choices = message.split('|');

  choice = this.getChoiceIndex(choice, choices.length);
  if (!choices[choice]) { return message }
  return choices[choice].trim()
};

VueI18n.prototype.tc = function tc (key, choice) {
    var ref;

    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];
  return (ref = this)._tc.apply(ref, [ key, this.locale, this._getMessages(), null, choice ].concat( values ))
};

VueI18n.prototype._te = function _te (key, locale, messages) {
    var args = [], len = arguments.length - 3;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 3 ];

  var _locale = parseArgs.apply(void 0, args).locale || locale;
  return this._exist(messages[_locale], key)
};

VueI18n.prototype.te = function te (key, locale) {
  return this._te(key, this.locale, this._getMessages(), locale)
};

VueI18n.prototype.getLocaleMessage = function getLocaleMessage (locale) {
  return looseClone(this._vm.messages[locale] || {})
};

VueI18n.prototype.setLocaleMessage = function setLocaleMessage (locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
  }
  this._vm.$set(this._vm.messages, locale, message);
};

VueI18n.prototype.mergeLocaleMessage = function mergeLocaleMessage (locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
  }
  this._vm.$set(this._vm.messages, locale, merge({}, this._vm.messages[locale] || {}, message));
};

VueI18n.prototype.getDateTimeFormat = function getDateTimeFormat (locale) {
  return looseClone(this._vm.dateTimeFormats[locale] || {})
};

VueI18n.prototype.setDateTimeFormat = function setDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, format);
  this._clearDateTimeFormat(locale, format);
};

VueI18n.prototype.mergeDateTimeFormat = function mergeDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, merge(this._vm.dateTimeFormats[locale] || {}, format));
  this._clearDateTimeFormat(locale, format);
};

VueI18n.prototype._clearDateTimeFormat = function _clearDateTimeFormat (locale, format) {
  for (var key in format) {
    var id = locale + "__" + key;

    if (!this._dateTimeFormatters.hasOwnProperty(id)) {
      continue
    }

    delete this._dateTimeFormatters[id];
  }
};

VueI18n.prototype._localizeDateTime = function _localizeDateTime (
  value,
  locale,
  fallback,
  dateTimeFormats,
  key
) {
  var _locale = locale;
  var formats = dateTimeFormats[_locale];

  var chain = this._getLocaleChain(locale, fallback);
  for (var i = 0; i < chain.length; i++) {
    var current = _locale;
    var step = chain[i];
    formats = dateTimeFormats[step];
    _locale = step;
    // fallback locale
    if (isNull(formats) || isNull(formats[key])) {
      if (step !== locale && "production" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to '" + step + "' datetime formats from '" + current + "' datetime formats."));
      }
    } else {
      break
    }
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];
    var id = _locale + "__" + key;
    var formatter = this._dateTimeFormatters[id];
    if (!formatter) {
      formatter = this._dateTimeFormatters[id] = new Intl.DateTimeFormat(_locale, format);
    }
    return formatter.format(value)
  }
};

VueI18n.prototype._d = function _d (value, locale, key) {
  /* istanbul ignore if */
  if (false) {}

  if (!key) {
    return new Intl.DateTimeFormat(locale).format(value)
  }

  var ret =
    this._localizeDateTime(value, locale, this.fallbackLocale, this._getDateTimeFormats(), key);
  if (this._isFallbackRoot(ret)) {
    if (false) {}
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.d(value, key, locale)
  } else {
    return ret || ''
  }
};

VueI18n.prototype.d = function d (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;

  if (args.length === 1) {
    if (isString(args[0])) {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }
    }
  } else if (args.length === 2) {
    if (isString(args[0])) {
      key = args[0];
    }
    if (isString(args[1])) {
      locale = args[1];
    }
  }

  return this._d(value, locale, key)
};

VueI18n.prototype.getNumberFormat = function getNumberFormat (locale) {
  return looseClone(this._vm.numberFormats[locale] || {})
};

VueI18n.prototype.setNumberFormat = function setNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, format);
  this._clearNumberFormat(locale, format);
};

VueI18n.prototype.mergeNumberFormat = function mergeNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, merge(this._vm.numberFormats[locale] || {}, format));
  this._clearNumberFormat(locale, format);
};

VueI18n.prototype._clearNumberFormat = function _clearNumberFormat (locale, format) {
  for (var key in format) {
    var id = locale + "__" + key;

    if (!this._numberFormatters.hasOwnProperty(id)) {
      continue
    }

    delete this._numberFormatters[id];
  }
};

VueI18n.prototype._getNumberFormatter = function _getNumberFormatter (
  value,
  locale,
  fallback,
  numberFormats,
  key,
  options
) {
  var _locale = locale;
  var formats = numberFormats[_locale];

  var chain = this._getLocaleChain(locale, fallback);
  for (var i = 0; i < chain.length; i++) {
    var current = _locale;
    var step = chain[i];
    formats = numberFormats[step];
    _locale = step;
    // fallback locale
    if (isNull(formats) || isNull(formats[key])) {
      if (step !== locale && "production" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to '" + step + "' number formats from '" + current + "' number formats."));
      }
    } else {
      break
    }
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];

    var formatter;
    if (options) {
      // If options specified - create one time number formatter
      formatter = new Intl.NumberFormat(_locale, Object.assign({}, format, options));
    } else {
      var id = _locale + "__" + key;
      formatter = this._numberFormatters[id];
      if (!formatter) {
        formatter = this._numberFormatters[id] = new Intl.NumberFormat(_locale, format);
      }
    }
    return formatter
  }
};

VueI18n.prototype._n = function _n (value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (false) {}
    return ''
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.format(value)
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.format(value);
  if (this._isFallbackRoot(ret)) {
    if (false) {}
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.n(value, Object.assign({}, { key: key, locale: locale }, options))
  } else {
    return ret || ''
  }
};

VueI18n.prototype.n = function n (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;
  var options = null;

  if (args.length === 1) {
    if (isString(args[0])) {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }

      // Filter out number format options only
      options = Object.keys(args[0]).reduce(function (acc, key) {
          var obj;

        if (includes(numberFormatKeys, key)) {
          return Object.assign({}, acc, ( obj = {}, obj[key] = args[0][key], obj ))
        }
        return acc
      }, null);
    }
  } else if (args.length === 2) {
    if (isString(args[0])) {
      key = args[0];
    }
    if (isString(args[1])) {
      locale = args[1];
    }
  }

  return this._n(value, locale, key, options)
};

VueI18n.prototype._ntp = function _ntp (value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (false) {}
    return []
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.formatToParts(value)
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.formatToParts(value);
  if (this._isFallbackRoot(ret)) {
    if (false) {}
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n._ntp(value, locale, key, options)
  } else {
    return ret || []
  }
};

Object.defineProperties( VueI18n.prototype, prototypeAccessors );

var availabilities;
// $FlowFixMe
Object.defineProperty(VueI18n, 'availabilities', {
  get: function get () {
    if (!availabilities) {
      var intlDefined = typeof Intl !== 'undefined';
      availabilities = {
        dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== 'undefined',
        numberFormat: intlDefined && typeof Intl.NumberFormat !== 'undefined'
      };
    }

    return availabilities
  }
});

VueI18n.install = install;
VueI18n.version = '8.22.2';

/* harmony default export */ var vue_i18n_esm = (VueI18n);

// CONCATENATED MODULE: ./src/i18n.js


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(vue_i18n_esm);

function loadLocaleMessages() {
  var locales = __webpack_require__("49f8");

  var messages = {};
  locales.keys().forEach(function (key) {
    var matched = key.match(/([A-Za-z0-9-_]+)\./i);

    if (matched && matched.length > 1) {
      var locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

/* harmony default export */ var i18n = (new vue_i18n_esm({
  locale: "en" || false,
  fallbackLocale: "en" || false,
  messages: loadLocaleMessages(),
  // Склонения числительных в русском
  pluralizationRules: {
    /**
     * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
     * @param choicesLength {number} an overall amount of available choices
     * @returns a final choice index to select plural word by
     */
    'ru': function ru(choice, choicesLength) {
      // this === VueI18n instance, so the locale property also exists here
      if (choice === 0) {
        return 0;
      }

      var teen = choice > 10 && choice < 20;
      var endsWithOne = choice % 10 === 1;

      if (choicesLength < 4) {
        return !teen && endsWithOne ? 1 : 2;
      }

      if (!teen && endsWithOne) {
        return 1;
      }

      if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
        return 2;
      }

      return choicesLength < 4 ? 2 : 3;
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/popups/MessagePopup.vue?vue&type=template&id=3c121c4b&scoped=true&
var MessagePopupvue_type_template_id_3c121c4b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BasePopup',{staticClass:"message-popup",on:{"close":function($event){return _vm.$emit('close')}}},[(!_vm.options.htmlContent)?[_c('h1',{staticClass:"popup-heading"},[_vm._v(" "+_vm._s(_vm.options.title)+" ")]),_c('h2',{staticClass:"popup-subheading"},[_vm._v(" "+_vm._s(_vm.options.message)+" ")]),(_vm.options.isInput)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.text),expression:"text"}],staticClass:"payeer-popup__input",attrs:{"placeholder":_vm.options.placeholder,"type":"text"},domProps:{"value":(_vm.text)},on:{"input":function($event){if($event.target.composing){ return; }_vm.text=$event.target.value}}}):_vm._e(),_c('div',{staticClass:"message-popup__buttons"},[(_vm.options.reject)?_c('button',{staticClass:"payeer_button white",on:{"click":function($event){return _vm.options.reject()}}},[_vm._v(_vm._s(_vm.options.cancelButtonText))]):_vm._e(),(_vm.options.confirmButtonText)?_c('button',{staticClass:"payeer_button",style:({marginLeft: _vm.options.reject ? '15px' : 'auto'}),on:{"click":function($event){return _vm.options.resolve(_vm.text)}}},[_vm._v(_vm._s(_vm.options.confirmButtonText))]):_vm._e()])]:_c('div',{domProps:{"innerHTML":_vm._s(_vm.options.htmlContent)}})],2)}
var MessagePopupvue_type_template_id_3c121c4b_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/popups/MessagePopup.vue?vue&type=template&id=3c121c4b&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/popups/MessagePopup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MessagePopupvue_type_script_lang_js_ = ({
  name: "MessagePopup",
  components: {
    BasePopup: BasePopup
  },
  props: {
    options: {
      type: Object,
      default: function _default() {
        return {
          id: null,
          title: null,
          message: null,
          placeholder: null,
          confirmButtonText: null,
          cancelButtonText: null,
          isInput: false,
          htmlContent: null,
          resolve: function resolve() {},
          reject: null
        };
      }
    }
  },
  data: function data() {
    return {
      text: ''
    };
  }
});
// CONCATENATED MODULE: ./src/popups/MessagePopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var popups_MessagePopupvue_type_script_lang_js_ = (MessagePopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/popups/MessagePopup.vue?vue&type=style&index=0&id=3c121c4b&lang=sass&scoped=true&
var MessagePopupvue_type_style_index_0_id_3c121c4b_lang_sass_scoped_true_ = __webpack_require__("f530");

// CONCATENATED MODULE: ./src/popups/MessagePopup.vue






/* normalize component */

var MessagePopup_component = normalizeComponent(
  popups_MessagePopupvue_type_script_lang_js_,
  MessagePopupvue_type_template_id_3c121c4b_scoped_true_render,
  MessagePopupvue_type_template_id_3c121c4b_scoped_true_staticRenderFns,
  false,
  null,
  "3c121c4b",
  null
  
)

/* harmony default export */ var MessagePopup = (MessagePopup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/popups/UniversalBindPopup.vue?vue&type=template&id=6d0b38f4&scoped=true&
var UniversalBindPopupvue_type_template_id_6d0b38f4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BasePopup',{attrs:{"height":_vm.popupHeight,"width":551,"notifications":_vm.notifications,"show-back-button":_vm.step === 2 && !_vm.disableBackButton && !_vm.masterKey.show},on:{"back":_vm.backToFirstStep,"removedNotification":_vm.cleanNotifications,"close":function($event){return _vm.$emit('close')}}},[(_vm.codeType === 'telegram' && !_vm.masterKey.show)?_c('TelegramScreens',{attrs:{"step":_vm.step,"username":_vm.valueToBind,"errors":_vm.errors,"locale":_vm.locale_text},on:{"usernameChange":function($event){_vm.valueToBind = $event},"submit":_vm.submit,"removeError":function($event){return _vm.removeErrorByField($event)}}}):(_vm.codeType === 'email' && !_vm.masterKey.show)?_c('EmailScreens',{attrs:{"step":_vm.step,"email":_vm.valueToBind,"verification-code":_vm.verificationCode,"errors":_vm.errors,"locale":_vm.locale_text},on:{"emailChanged":function($event){_vm.valueToBind = $event},"verificationCodeChanged":function($event){_vm.verificationCode = $event},"submit":_vm.submit,"resend":_vm.resend,"removeError":function($event){return _vm.removeErrorByField($event)}}}):(['sms','phone','call'].includes(this.codeType) && !_vm.masterKey.show)?_c('PhoneScreens',{attrs:{"step":_vm.step,"phone":_vm.valueToBind,"caller":_vm.caller,"code-type":_vm.codeType,"verification-code":_vm.verificationCode,"errors":_vm.errors,"locale":_vm.locale_text},on:{"phoneChanged":function($event){_vm.valueToBind = $event},"verificationCodeChanged":function($event){_vm.verificationCode = $event},"submit":_vm.submit,"resend":_vm.resend,"removeError":function($event){return _vm.removeErrorByField($event)}}}):(_vm.masterKey.show)?_c('MasterKey',{attrs:{"locale":_vm.locale_text.master_key,"error":_vm.fieldHasError('master_key')},on:{"unlocked":_vm.submit,"input":function($event){return _vm.removeErrorByField('master_key')}},model:{value:(_vm.masterKey.value),callback:function ($$v) {_vm.$set(_vm.masterKey, "value", $$v)},expression:"masterKey.value"}}):_vm._e()],1)}
var UniversalBindPopupvue_type_template_id_6d0b38f4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/popups/UniversalBindPopup.vue?vue&type=template&id=6d0b38f4&scoped=true&

// CONCATENATED MODULE: ./src/utils/helpers.js
var SAMLE_BIND_DATA = {
  phone: null,
  email: null,
  username: null,
  code: null,
  url: '',
  resend_url: '',
  master_key: '0',
  codeType: 'phone',
  caller: '711122',
  step: 1,
  locale_text: {
    telegram_title: '#telegram_title#',
    telegram_subtitle: '#telegram_subtitle#',
    telegram_placeholder: '#telegram_placeholder#',
    telegram_info: '#telegram_info#',
    telegram_confirm: '#telegram_confirm#',
    email_title: '#email_title#',
    email_step1_desc: '#email_step1_desc#',
    email_step1_placeholder: '#email_step1_placeholder#',
    email_confirm: '#email_confirm#',
    email_step2_title: '#email_step2_title#',
    email_step2_sent: '#email_step2_sent#',
    email_step2_confirm: '#email_step2_confirm#',
    email_nocode: '#email_nocode#',
    email_resend: '#email_resend#',
    phone_title: '#phone_title#',
    phone_step1_desc: '#phone_step1_desc#',
    phone_step1_placeholder: '#phone_step1_placeholder#',
    phone_confirm: '#phone_confirm#',
    phone_step2_title: '#phone_step2_title#',
    phone_step2_sent: '#phone_step2_sent#',
    phone_nocode: '#phone_nocode#',
    phone_resend: '#phone_resend#',
    phone_cost: '#phone_cost#',
    phone_call_title: '#phone_call_title#',
    phone_call_text: '#phone_call_text#',
    phone_call_text2: '#phone_call_text2#',
    phone_confirm_call: '#phone_confirm_call#',
    phone_not_received: '#phone_not_received#',
    phone_recall: '#phone_recall#',
    master_key: {
      title: '#master_key.title#',
      subtitle: '#master_key.subtitle#',
      placeholder: '#master_key.placeholder#',
      unlock: '#master_key.unlock#'
    }
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/popups/bind-parts/TelegramScreens.vue?vue&type=template&id=79ed4fc6&
var TelegramScreensvue_type_template_id_79ed4fc6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex-center"},[(_vm.step === 1)?[_c('TelegramIcon'),_c('h1',{staticClass:"bind-heading"},[_vm._v(" "+_vm._s(_vm.locale.telegram_title)+" ")]),_c('h2',{staticClass:"bind-subheading"},[_vm._v(" "+_vm._s(_vm.locale.telegram_subtitle)+" ")]),_c('input',{ref:"username",staticClass:"payeer-popup__input",class:{
          error: _vm.fieldHasError('telegram')
        },staticStyle:{"max-width":"236px","margin":"0 auto !important"},attrs:{"placeholder":_vm.locale.telegram_placeholder,"type":"text"},domProps:{"value":_vm.username},on:{"input":_vm.updateUsername,"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.$emit('submit')}}}),_c('button',{staticClass:"payeer_button",staticStyle:{"width":"240px","margin-top":"30px"},attrs:{"disabled":!_vm.username},on:{"click":function($event){return _vm.$emit('submit')}}},[_vm._v(" "+_vm._s(_vm.locale.telegram_confirm)+" ")])]:[_c('h1',{staticClass:"bind-heading",staticStyle:{"margin-top":"8px"}},[_vm._v(" "+_vm._s(_vm.locale.telegram_title)),_c('br')]),_c('h2',{staticClass:"bind-subheading",staticStyle:{"margin-bottom":"20px"},domProps:{"innerHTML":_vm._s(_vm.locale.telegram_info)}}),_c('img',{staticClass:"telegram-bind-img",attrs:{"src":"https://payeer.com/static/images/telegram-light.svg"}}),_c('img',{staticClass:"telegram-bind-img__dark",attrs:{"src":"https://payeer.com/static/images/telegram-dark.svg"}}),_c('button',{staticClass:"payeer_button",staticStyle:{"width":"326px"},on:{"click":function($event){return _vm.$emit('submit')}}},[_vm._v(_vm._s(_vm.locale.telegram_confirm))])]],2)}
var TelegramScreensvue_type_template_id_79ed4fc6_staticRenderFns = []


// CONCATENATED MODULE: ./src/popups/bind-parts/TelegramScreens.vue?vue&type=template&id=79ed4fc6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/TelegramIcon.vue?vue&type=template&id=22c66302&scoped=true&functional=true&
var TelegramIconvue_type_template_id_22c66302_scoped_true_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('svg',{attrs:{"width":"74","height":"74","viewBox":"0 0 74 74","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M37 74C57.4345 74 74 57.4345 74 37C74 16.5655 57.4345 0 37 0C16.5655 0 0 16.5655 0 37C0 57.4345 16.5655 74 37 74Z","fill":"url(#paint0_linear)"}}),_c('path',{attrs:{"d":"M15.3988 36.6792L40.315 26.4133C42.7746 25.3439 51.1156 21.922 51.1156 21.922C51.1156 21.922 54.9653 20.4249 54.6445 24.0607C54.5376 25.5578 53.6821 30.7977 52.8266 36.4653L50.1532 53.2543C50.1532 53.2543 49.9393 55.7139 48.1214 56.1416C46.3035 56.5694 43.3093 54.6445 42.7746 54.2168C42.3468 53.896 34.7543 49.0838 31.974 46.7312C31.2254 46.0896 30.3699 44.8064 32.0809 43.3092C35.9306 39.7803 40.5289 35.396 43.3093 32.6156C44.5925 31.3324 45.8757 28.3381 40.5289 31.974L25.4509 42.1329C25.4509 42.1329 23.7399 43.2023 20.5318 42.2399C17.3237 41.2775 13.5809 39.9942 13.5809 39.9942C13.5809 39.9942 11.0145 38.3902 15.3988 36.6792Z","fill":"white"}}),_c('defs',[_c('linearGradient',{attrs:{"id":"paint0_linear","x1":"49.3362","y1":"12.3362","x2":"30.8362","y2":"55.5","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#37AEE2"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#1E96C8"}})],1)],1)])}
var TelegramIconvue_type_template_id_22c66302_scoped_true_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/icons/TelegramIcon.vue?vue&type=template&id=22c66302&scoped=true&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/TelegramIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TelegramIconvue_type_script_lang_js_ = ({
  name: "TelegramIcon"
});
// CONCATENATED MODULE: ./src/components/icons/TelegramIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_TelegramIconvue_type_script_lang_js_ = (TelegramIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/icons/TelegramIcon.vue





/* normalize component */

var TelegramIcon_component = normalizeComponent(
  icons_TelegramIconvue_type_script_lang_js_,
  TelegramIconvue_type_template_id_22c66302_scoped_true_functional_true_render,
  TelegramIconvue_type_template_id_22c66302_scoped_true_functional_true_staticRenderFns,
  true,
  null,
  "22c66302",
  null
  
)

/* harmony default export */ var TelegramIcon = (TelegramIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/popups/bind-parts/TelegramScreens.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TelegramScreensvue_type_script_lang_js_ = ({
  name: "TelegramScreens",
  components: {
    TelegramIcon: TelegramIcon
  },
  props: {
    username: {
      type: String,
      default: ''
    },
    step: {
      type: Number,
      default: 1
    },
    errors: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    locale: {
      type: Object,
      default: function _default() {}
    }
  },
  methods: {
    updateUsername: function updateUsername(event) {
      this.$emit('removeError', 'telegram');
      var newVal = event.target.value.replace(/@/g, '');
      this.$emit('usernameChange', newVal);
    },
    fieldHasError: function fieldHasError(field) {
      return this.errors.findIndex(function (e) {
        return e.field === field;
      }) > -1;
    }
  }
});
// CONCATENATED MODULE: ./src/popups/bind-parts/TelegramScreens.vue?vue&type=script&lang=js&
 /* harmony default export */ var bind_parts_TelegramScreensvue_type_script_lang_js_ = (TelegramScreensvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/popups/bind-parts/TelegramScreens.vue?vue&type=style&index=0&lang=sass&
var TelegramScreensvue_type_style_index_0_lang_sass_ = __webpack_require__("4630");

// CONCATENATED MODULE: ./src/popups/bind-parts/TelegramScreens.vue






/* normalize component */

var TelegramScreens_component = normalizeComponent(
  bind_parts_TelegramScreensvue_type_script_lang_js_,
  TelegramScreensvue_type_template_id_79ed4fc6_render,
  TelegramScreensvue_type_template_id_79ed4fc6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TelegramScreens = (TelegramScreens_component.exports);
// CONCATENATED MODULE: ./src/mixins/fieldErrors.js
var fieldErrorsMixin = {
  data: function data() {
    return {
      errors: []
    };
  },
  methods: {
    setErrors: function setErrors(errors) {
      this.errors = errors;
    },
    cleanErrors: function cleanErrors() {
      this.errors = [];
    },
    removeErrorByField: function removeErrorByField(field) {
      this.errors = this.errors.filter(function (e) {
        return e.field !== field;
      });
    },
    fieldHasError: function fieldHasError(field) {
      return this.errors.findIndex(function (e) {
        return e.field === field;
      }) > -1;
    }
  }
};
// CONCATENATED MODULE: ./src/mixins/notifications.js
var notificationMixin = {
  data: function data() {
    return {
      notifications: [],
      removeTimeout: null
    };
  },
  methods: {
    cleanNotifications: function cleanNotifications() {
      if (this.removeTimeout) {
        clearInterval(this.removeTimeout);
      }

      this.notifications = [];
    },
    replaceNotification: function replaceNotification(text, type) {
      var _this = this;

      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Уведомление';

      if (this.removeTimeout) {
        clearInterval(this.removeTimeout);
      }

      this.notifications = [{
        id: +new Date(),
        text: text,
        type: type,
        title: title
      }];
      this.removeTimeout = setTimeout(function () {
        _this.cleanNotifications();
      }, 10000);
    }
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/popups/bind-parts/EmailScreens.vue?vue&type=template&id=4652104d&scoped=true&
var EmailScreensvue_type_template_id_4652104d_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex-center",style:({marginTop: _vm.step === 1 ? null : '-10px'})},[(_vm.step === 1)?[_c('EmailIcon'),_c('h1',{staticClass:"bind-heading"},[_vm._v(" "+_vm._s(_vm.locale.email_title)+" ")]),_c('h2',{staticClass:"bind-subheading"},[_vm._v(" "+_vm._s(_vm.locale.email_step1_desc)+" ")]),_c('input',{ref:"email",staticClass:"payeer-popup__input",class:{
        error: _vm.fieldHasError('email')
      },staticStyle:{"max-width":"236px","margin":"0 auto !important"},attrs:{"placeholder":_vm.locale.email_step1_placeholder,"type":"text"},domProps:{"value":_vm.email},on:{"input":function (event) {_vm.$emit('removeError', 'email'); _vm.$emit('emailChanged', event.target.value)},"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.$emit('submit')}}}),_c('button',{staticClass:"payeer_button",staticStyle:{"width":"240px","margin-top":"30px"},attrs:{"disabled":!_vm.email},on:{"click":function($event){return _vm.$emit('submit')}}},[_vm._v(_vm._s(_vm.locale.email_confirm))])]:[_c('EmailCodeIcon'),_c('h1',{staticClass:"bind-heading"},[_vm._v(" "+_vm._s(_vm.locale.email_step2_title)+" ")]),_c('h2',{staticClass:"bind-subheading",domProps:{"innerHTML":_vm._s(_vm.locale.email_step2_sent)}}),_c('PincodeInput',{staticClass:"payeer-popup__input",class:{
          error: _vm.fieldHasError('code')
        },attrs:{"length":5,"value":_vm.verificationCode},on:{"input":_vm.updateCode,"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.$emit('submit')}}}),_c('button',{staticClass:"payeer_button",staticStyle:{"width":"240px","margin-top":"30px"},attrs:{"disabled":_vm.verificationCode.length < 5},on:{"click":function($event){return _vm.$emit('submit')}}},[_vm._v(_vm._s(_vm.locale.email_step2_confirm))]),_c('div',{staticClass:"email-bind__resend"},[_vm._v(" "+_vm._s(_vm.locale.email_nocode)+" "),_c('div',{staticClass:"email-bind__resend_btn",on:{"click":function($event){return _vm.$emit('resend')}}},[_vm._v(" "+_vm._s(_vm.locale.email_resend)+" ")])])]],2)}
var EmailScreensvue_type_template_id_4652104d_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/popups/bind-parts/EmailScreens.vue?vue&type=template&id=4652104d&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/EmailCodeIcon.vue?vue&type=template&id=423a8654&scoped=true&functional=true&
var EmailCodeIconvue_type_template_id_423a8654_scoped_true_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('svg',{attrs:{"width":"74","height":"74","viewBox":"0 0 74 74","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M37 74C57.4345 74 74 57.4345 74 37C74 16.5655 57.4345 0 37 0C16.5655 0 0 16.5655 0 37C0 57.4345 16.5655 74 37 74Z","fill":"url(#paint0_linear)"}}),_c('g',{attrs:{"clip-path":"url(#clip0)"}},[_c('path',{attrs:{"d":"M52.59 30.19L48 26.83V24C48 23.7348 47.8946 23.4804 47.7071 23.2929C47.5196 23.1054 47.2652 23 47 23H42.78L37.59 19.19C37.4187 19.0649 37.2121 18.9974 37 18.9974C36.7879 18.9974 36.5813 19.0649 36.41 19.19L31.22 23H27C26.7348 23 26.4804 23.1054 26.2929 23.2929C26.1054 23.4804 26 23.7348 26 24V26.83L21.41 30.19C21.2826 30.2831 21.179 30.405 21.1078 30.5458C21.0365 30.6866 20.9996 30.8422 21 31V48C21 48.7956 21.3161 49.5587 21.8787 50.1213C22.4413 50.6839 23.2044 51 24 51H50C50.7957 51 51.5587 50.6839 52.1213 50.1213C52.6839 49.5587 53 48.7956 53 48V31C53.0004 30.8422 52.9635 30.6866 52.8922 30.5458C52.821 30.405 52.7174 30.2831 52.59 30.19ZM48 29.31L50.2 30.92L48 32.23V29.31ZM37 21.24L39.4 23H34.6L37 21.24ZM26 29.31V32.24L23.8 30.92L26 29.31ZM51 48C51 48.2652 50.8946 48.5196 50.7071 48.7071C50.5196 48.8946 50.2652 49 50 49H24C23.7348 49 23.4804 48.8946 23.2929 48.7071C23.1054 48.5196 23 48.2652 23 48V32.77L36.49 40.86C36.642 40.9478 36.8145 40.994 36.99 40.994C37.1655 40.994 37.338 40.9478 37.49 40.86L51 32.77V48Z","fill":"white"}})]),_c('defs',[_c('linearGradient',{attrs:{"id":"paint0_linear","x1":"49.3362","y1":"12.3362","x2":"30.8362","y2":"55.5","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#09CB01"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#07B000"}})],1),_c('clipPath',{attrs:{"id":"clip0"}},[_c('rect',{attrs:{"width":"32","height":"32","fill":"white","transform":"translate(21 19)"}})])],1)])}
var EmailCodeIconvue_type_template_id_423a8654_scoped_true_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/icons/EmailCodeIcon.vue?vue&type=template&id=423a8654&scoped=true&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/EmailCodeIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var EmailCodeIconvue_type_script_lang_js_ = ({
  name: "EmailCodeIcon"
});
// CONCATENATED MODULE: ./src/components/icons/EmailCodeIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_EmailCodeIconvue_type_script_lang_js_ = (EmailCodeIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/icons/EmailCodeIcon.vue





/* normalize component */

var EmailCodeIcon_component = normalizeComponent(
  icons_EmailCodeIconvue_type_script_lang_js_,
  EmailCodeIconvue_type_template_id_423a8654_scoped_true_functional_true_render,
  EmailCodeIconvue_type_template_id_423a8654_scoped_true_functional_true_staticRenderFns,
  true,
  null,
  "423a8654",
  null
  
)

/* harmony default export */ var EmailCodeIcon = (EmailCodeIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/EmailIcon.vue?vue&type=template&id=2e1d7088&scoped=true&functional=true&
var EmailIconvue_type_template_id_2e1d7088_scoped_true_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('svg',{attrs:{"width":"74","height":"74","viewBox":"0 0 74 74","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M37 74C57.4345 74 74 57.4345 74 37C74 16.5655 57.4345 0 37 0C16.5655 0 0 16.5655 0 37C0 57.4345 16.5655 74 37 74Z","fill":"url(#paint0_linear)"}}),_c('path',{attrs:{"d":"M55.0393 26.9071L53.5546 25.4224L39.8016 39.1754C38.0825 40.8945 35.1912 40.8945 33.4721 39.1754L19.7191 25.5005L18.2344 26.9852L28.471 37.2219L18.2344 47.4585L19.7191 48.9432L29.9557 38.7066L31.9874 40.7383C33.2377 41.9885 34.8786 42.6918 36.5978 42.6918C38.3169 42.6918 39.9579 41.9885 41.2081 40.7383L43.2398 38.7066L53.4765 48.9432L54.9612 47.4585L44.7245 37.2219L55.0393 26.9071Z","fill":"white"}}),_c('path',{attrs:{"d":"M52.1481 51.6H21.282C19.4847 51.6 18 50.1153 18 48.318V26.282C18 24.4847 19.4847 23 21.282 23H52.1481C53.9454 23 55.4301 24.4847 55.4301 26.282V48.318C55.4301 50.1153 53.9454 51.6 52.1481 51.6ZM21.2038 25.1098C20.5787 25.1098 20.1098 25.5787 20.1098 26.2038V48.2399C20.1098 48.865 20.5787 49.3339 21.2038 49.3339H52.07C52.6951 49.3339 53.1639 48.865 53.1639 48.2399V26.2038C53.1639 25.5787 52.6951 25.1098 52.07 25.1098H21.2038Z","fill":"white"}}),_c('defs',[_c('linearGradient',{attrs:{"id":"paint0_linear","x1":"49.3362","y1":"12.3362","x2":"30.8362","y2":"55.5","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#09CB01"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#07B000"}})],1)],1)])}
var EmailIconvue_type_template_id_2e1d7088_scoped_true_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/icons/EmailIcon.vue?vue&type=template&id=2e1d7088&scoped=true&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/EmailIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var EmailIconvue_type_script_lang_js_ = ({
  name: "EmailIcon"
});
// CONCATENATED MODULE: ./src/components/icons/EmailIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_EmailIconvue_type_script_lang_js_ = (EmailIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/icons/EmailIcon.vue





/* normalize component */

var EmailIcon_component = normalizeComponent(
  icons_EmailIconvue_type_script_lang_js_,
  EmailIconvue_type_template_id_2e1d7088_scoped_true_functional_true_render,
  EmailIconvue_type_template_id_2e1d7088_scoped_true_functional_true_staticRenderFns,
  true,
  null,
  "2e1d7088",
  null
  
)

/* harmony default export */ var EmailIcon = (EmailIcon_component.exports);
// EXTERNAL MODULE: ./node_modules/vue-pincode-input/node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("44bd");

// EXTERNAL MODULE: ./node_modules/vue-pincode-input/node_modules/core-js/modules/es6.set.js
var es6_set = __webpack_require__("049f");

// EXTERNAL MODULE: ./node_modules/vue-pincode-input/node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4be7");

// EXTERNAL MODULE: ./node_modules/vue-pincode-input/node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("05a1");

// EXTERNAL MODULE: ./node_modules/vue-pincode-input/node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("e0d8");

// EXTERNAL MODULE: ./node_modules/vue-pincode-input/node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("5702");

// EXTERNAL MODULE: ./node_modules/vue-pincode-input/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("1bae");

// EXTERNAL MODULE: ./node_modules/vue-pincode-input/node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("3e2a");

// CONCATENATED MODULE: ./node_modules/vue-pincode-input/PincodeInput.min.js
var props={value:{type:String,required:!0},length:{type:Number,default:4},autofocus:{type:Boolean,default:!0},secure:{type:Boolean,default:!1},characterPreview:{type:Boolean,default:!0},charPreviewDuration:{type:Number,default:300}},BASE_REF_NAME="vue-pincode-input",CELL_REGEXP="^\\d{1}$",DEFAULT_INPUT_TYPE="tel",SECURE_INPUT_TYPE="password",script=external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({props:props,data:function data(){return{baseRefName:BASE_REF_NAME,focusedCellIdx:0,cells:[],watchers:{},cellsInputTypes:{}}},computed:{pinCodeComputed:function pinCodeComputed(){return this.cells.reduce(function(a,b){return a+b.value},"")}},watch:{value:function value(a){a?this.onParentValueUpdated():this.reset()},length:function length(){this.reset()},pinCodeComputed:function pinCodeComputed(a){this.$emit("input",a)}},mounted:function mounted(){this.init(),this.onParentValueUpdated(),this.autofocus&&this.$nextTick(this.focusCellByIndex)},methods:{/* init stuff */init:function init(){for(var a=this.getRelevantInputType(),b=0;b<this.length;b+=1)this.setCellObject(b),this.setCellInputType(b,a),this.setCellWatcher(b)},setCellObject:function setCellObject(a){this.$set(this.cells,a,{key:a,value:""})},setCellInputType:function setCellInputType(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:SECURE_INPUT_TYPE;this.$set(this.cellsInputTypes,a,b)},setCellWatcher:function setCellWatcher(a){var b=this,c="cells.".concat(a,".value");this.watchers[c]=this.$watch(c,function(c,d){return b.onCellChanged(a,c,d)})},/* handlers */onParentValueUpdated:function onParentValueUpdated(){var a=this;return this.value.length===this.length?void this.value.split("").forEach(function(b,c){a.cells[c].value=b||""}):void this.$emit("input",this.pinCodeComputed)},onCellChanged:function onCellChanged(a,b){return this.isTheCellValid(b,!1)?void(this.focusNextCell(),this.secure&&this.characterPreview&&setTimeout(this.setCellInputType,this.charPreviewDuration,a)):void(this.cells[a].value="")},onCellErase:function onCellErase(a,b){var c=this.cells[a].value.length;c||(this.focusPreviousCell(),b.preventDefault())},onKeyDown:function onKeyDown(a){switch(a.keyCode){/* left arrow key */case 37:this.focusPreviousCell();break;/* right arrow key */case 39:this.focusNextCell();}},/* reset stuff */reset:function reset(){this.unwatchCells(),this.init(),this.focusCellByIndex()},unwatchCells:function unwatchCells(){var a=this,b=Object.keys(this.watchers);b.forEach(function(b){return a.watchers[b]()})},/* helpers */isTheCellValid:function isTheCellValid(a){var b=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1];return a?!!a.match(CELL_REGEXP):!!b&&""===a},getRelevantInputType:function getRelevantInputType(){return this.secure&&!this.characterPreview?SECURE_INPUT_TYPE:DEFAULT_INPUT_TYPE},focusPreviousCell:function focusPreviousCell(){this.focusedCellIdx&&this.focusCellByIndex(this.focusedCellIdx-1)},focusNextCell:function focusNextCell(){this.focusedCellIdx===this.length-1||this.focusCellByIndex(this.focusedCellIdx+1)},focusCellByIndex:function focusCellByIndex(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:0,b="".concat(this.baseRefName).concat(a),c=this.$refs[b][0];c.focus(),c.select(),this.focusedCellIdx=a}}});function PincodeInput_min_normalizeComponent(a,b,c,d,e,f/* server only */,g,h,i,j){"boolean"!=typeof g&&(i=h,h=g,g=!1);// Vue.extend constructor export interop.
var k="function"==typeof c?c.options:c;// render functions
a&&a.render&&(k.render=a.render,k.staticRenderFns=a.staticRenderFns,k._compiled=!0,e&&(k.functional=!0)),d&&(k._scopeId=d);var l;if(f?(l=function(a){a=a||// cached call
this.$vnode&&this.$vnode.ssrContext||// stateful
this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,a||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),b&&b.call(this,i(a)),a&&a._registeredComponents&&a._registeredComponents.add(f)},k._ssrRegister=l):b&&(l=g?function(a){b.call(this,j(a,this.$root.$options.shadowRoot))}:function(a){b.call(this,h(a))}),l)if(k.functional){// register for functional component in vue file
var m=k.render;k.render=function(a,b){return l.call(b),m(a,b)}}else{// inject component registration as beforeCreate hook
var n=k.beforeCreate;k.beforeCreate=n?[].concat(n,l):[l]}return c}var isOldIE="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function createInjector(){return function(a,b){return addStyle(a,b)}}var HEAD,PincodeInput_min_styles={};function addStyle(a,b){var c=isOldIE?b.media||"default":a,d=PincodeInput_min_styles[c]||(PincodeInput_min_styles[c]={ids:new Set,styles:[]});if(!d.ids.has(a)){d.ids.add(a);var h=b.source;if(b.map&&(h+="\n/*# sourceURL="+b.map.sources[0]+" */",h+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(b.map))))+" */"),d.element||(d.element=document.createElement("style"),d.element.type="text/css",b.media&&d.element.setAttribute("media",b.media),void 0===HEAD&&(HEAD=document.head||document.getElementsByTagName("head")[0]),HEAD.appendChild(d.element)),"styleSheet"in d.element)d.styles.push(h),d.element.styleSheet.cssText=d.styles.filter(Boolean).join("\n");else{var e=d.ids.size-1,f=document.createTextNode(h),g=d.element.childNodes;g[e]&&d.element.removeChild(g[e]),g.length?d.element.insertBefore(f,g[e]):d.element.appendChild(f)}}}/* script */var __vue_script__=script,__vue_render__=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{staticClass:"vue-pincode-input-wrapper"},a._l(a.cells,function(b,d){return c("input",a._b({directives:[{name:"model",rawName:"v-model.trim",value:b.value,expression:"cell.value",modifiers:{trim:!0}}],key:b.key,ref:""+a.baseRefName+d,refInFor:!0,staticClass:"vue-pincode-input",attrs:{type:a.cellsInputTypes[d]},domProps:{value:b.value},on:{focus:function focus(){a.focusedCellIdx=d},keydown:[function(b){return!b.type.indexOf("key")&&a._k(b.keyCode,"delete",[8,46],b.key,["Backspace","Delete","Del"])?null:a.onCellErase(d,b)},a.onKeyDown],input:function input(c){c.target.composing||a.$set(b,"value",c.target.value.trim())},blur:function blur(){return a.$forceUpdate()}}},"input",a.$attrs,!1))}),0)},__vue_staticRenderFns__=[],__vue_inject_styles__=function(a){a&&a("data-v-13cc1c60_0",{source:".vue-pincode-input-wrapper{display:inline-flex}.vue-pincode-input{outline:0;margin:3px;padding:5px;max-width:40px;text-align:center;font-size:1.1rem;border:none;border-radius:3px;box-shadow:0 0 3px rgba(0,0,0,.5)}.vue-pincode-input:focus{box-shadow:0 0 6px rgba(0,0,0,.5)}",map:void 0,media:void 0})},__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,__vue_component__=/*#__PURE__*/PincodeInput_min_normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,!1,createInjector,void 0,void 0);/* template *//* harmony default export */ var PincodeInput_min = (__vue_component__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/popups/bind-parts/EmailScreens.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var EmailScreensvue_type_script_lang_js_ = ({
  name: "EmailScreens",
  components: {
    EmailIcon: EmailIcon,
    EmailCodeIcon: EmailCodeIcon,
    PincodeInput: PincodeInput_min
  },
  props: {
    email: {
      type: String,
      default: ''
    },
    verificationCode: {
      type: String,
      default: ''
    },
    step: {
      type: Number,
      default: 1
    },
    errors: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    locale: {
      type: Object,
      default: function _default() {}
    }
  },
  methods: {
    fieldHasError: function fieldHasError(field) {
      return this.errors.findIndex(function (e) {
        return e.field === field;
      }) > -1;
    },
    updateCode: function updateCode(val) {
      if (val !== this.verificationCode) {
        this.$emit('removeError', 'code');
      }

      this.$emit('verificationCodeChanged', val);
    }
  }
});
// CONCATENATED MODULE: ./src/popups/bind-parts/EmailScreens.vue?vue&type=script&lang=js&
 /* harmony default export */ var bind_parts_EmailScreensvue_type_script_lang_js_ = (EmailScreensvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/popups/bind-parts/EmailScreens.vue?vue&type=style&index=0&id=4652104d&lang=sass&scoped=true&
var EmailScreensvue_type_style_index_0_id_4652104d_lang_sass_scoped_true_ = __webpack_require__("d459");

// CONCATENATED MODULE: ./src/popups/bind-parts/EmailScreens.vue






/* normalize component */

var EmailScreens_component = normalizeComponent(
  bind_parts_EmailScreensvue_type_script_lang_js_,
  EmailScreensvue_type_template_id_4652104d_scoped_true_render,
  EmailScreensvue_type_template_id_4652104d_scoped_true_staticRenderFns,
  false,
  null,
  "4652104d",
  null
  
)

/* harmony default export */ var EmailScreens = (EmailScreens_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/popups/bind-parts/PhoneScreens.vue?vue&type=template&id=09bff7c3&
var PhoneScreensvue_type_template_id_09bff7c3_render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex-center",style:({marginTop: _vm.step === 1 ? null : '-10px'})},[(_vm.step === 1)?[_c('PhoneIcon'),_c('h1',{staticClass:"bind-heading"},[_vm._v(" "+_vm._s(_vm.locale.phone_title)+" ")]),_c('h2',{staticClass:"bind-subheading"},[_vm._v(" "+_vm._s(_vm.locale.phone_step1_desc)+" ")]),_c('input',{ref:"phone",staticClass:"payeer-popup__input",class:{
        error: _vm.fieldHasError('phone')
      },staticStyle:{"max-width":"236px","margin":"0 auto !important"},attrs:{"placeholder":_vm.locale.phone_step1_placeholder,"type":"text"},domProps:{"value":_vm.phone},on:{"input":_vm.updatePhone,"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.$emit('submit')}}}),_c('button',{staticClass:"payeer_button",staticStyle:{"width":"240px","margin-top":"30px"},attrs:{"disabled":!_vm.phone},on:{"click":function($event){return _vm.$emit('submit')}}},[_vm._v(_vm._s(_vm.locale.phone_confirm))])]:(_vm.step > 1 && _vm.codeType === 'sms')?[_c('SmsIcon'),_c('h1',{staticClass:"bind-heading"},[_vm._v(" "+_vm._s(_vm.locale.phone_step2_title)+" ")]),_c('h2',{staticClass:"bind-subheading",domProps:{"innerHTML":_vm._s(_vm.locale.phone_step2_sent)}}),_c('PincodeInput',{staticClass:"payeer-popup__input",class:{
          error: _vm.fieldHasError('code')
        },attrs:{"length":5,"value":_vm.verificationCode},on:{"input":_vm.updateCode,"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.$emit('submit')}}}),_c('button',{staticClass:"payeer_button",staticStyle:{"width":"240px","margin-top":"30px"},on:{"click":function($event){return _vm.$emit('submit')}}},[_vm._v(_vm._s(_vm.locale.phone_confirm))]),_c('div',{staticClass:"phone-bind__resend"},[_vm._v(" "+_vm._s(_vm.locale.phone_nocode)+" "),_c('div',{staticClass:"phone-bind__resend_btn",on:{"click":function($event){return _vm.$emit('resend')}}},[_vm._v(" "+_vm._s(_vm.locale.phone_resend)+" ")])]),_c('div',{staticClass:"phone-bind__cost"},[_vm._v(" "+_vm._s(_vm.locale.phone_cost)+" ")])]:(_vm.step > 1 && _vm.codeType === 'call')?[_c('h1',{staticClass:"bind-heading"},[_vm._v(" "+_vm._s(_vm.locale.phone_call_title)+" ")]),_c('h2',{staticClass:"bind-subheading",staticStyle:{"margin-top":"11px"},domProps:{"innerHTML":_vm._s(_vm.locale.phone_call_text)}}),_c('div',{staticClass:"phone-code"},[_c('svg',{attrs:{"width":"56","height":"55","viewBox":"0 0 56 55","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M46.321 0H9.67901C4.34173 0 0 4.2642 0 9.50617V45.4938C0 50.7358 4.34173 55 9.67901 55H46.321C51.6583 55 56 50.7358 56 45.4938V9.50617C56 4.2642 51.6583 0 46.321 0ZM23.5891 8.60988L23.6168 8.6642H23.4785L23.5891 8.60988ZM45.9338 37.3185L45.519 38.079C43.9151 41.0938 40.403 42.642 37.0568 41.7728C31.8578 40.3877 26.7694 37.563 22.8425 33.6247C18.8326 29.7407 15.9565 24.7704 14.5462 19.6642C13.6336 16.3778 15.2375 12.9284 18.3072 11.3531C18.639 11.1901 18.9432 11.0272 19.2474 10.8642C20.1877 10.3753 21.3215 10.6741 21.9022 11.5432C22.9254 13.0642 24.3635 15.2642 26.1057 17.8716C26.6311 18.6593 26.5205 19.7185 25.8291 20.3975L24.2805 21.9185C23.5062 22.679 23.2849 23.8469 23.7551 24.8519C25.3867 28.3556 28.2351 31.1531 31.8025 32.7556C32.798 33.2173 33.9872 33 34.7891 32.2395L36.1995 30.8543C36.8909 30.1753 37.9417 30.0667 38.7714 30.5827L45.2701 34.7383C46.1274 35.2815 46.4316 36.3951 45.9338 37.3185Z","fill":"#09CB01"}})]),_c('strong',[_vm._v(" "+_vm._s(_vm.caller)+" ")]),_c('PincodeInput',{staticClass:"payeer-popup__input phone-code__input",class:( _obj = {}, _obj[("not-empty-" + (_vm.verificationCode.length))] = _vm.verificationCode.length > 0, _obj.error = _vm.fieldHasError('code'), _obj ),attrs:{"value":_vm.verificationCode,"length":5},on:{"input":_vm.updateCode}})],1),_c('h2',{staticClass:"bind-subheading",domProps:{"innerHTML":_vm._s(_vm.locale.phone_call_text2)}}),_c('button',{staticClass:"payeer_button",staticStyle:{"width":"240px"},attrs:{"disabled":_vm.verificationCode.length < 5},on:{"click":function($event){return _vm.$emit('submit')}}},[_vm._v(" "+_vm._s(_vm.locale.phone_confirm_call))]),_c('div',{staticClass:"phone-bind__resend"},[_vm._v(" "+_vm._s(_vm.locale.phone_not_received)+" "),_c('div',{staticClass:"phone-bind__resend_btn",on:{"click":function($event){return _vm.$emit('resend')}}},[_vm._v(" "+_vm._s(_vm.locale.phone_recall)+" ")])]),_c('div',{staticClass:"phone-bind__cost"},[_vm._v(" "+_vm._s(_vm.locale.phone_cost)+" ")])]:_vm._e()],2)}
var PhoneScreensvue_type_template_id_09bff7c3_staticRenderFns = []


// CONCATENATED MODULE: ./src/popups/bind-parts/PhoneScreens.vue?vue&type=template&id=09bff7c3&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/PhoneIcon.vue?vue&type=template&id=79cf4c49&scoped=true&functional=true&
var PhoneIconvue_type_template_id_79cf4c49_scoped_true_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('svg',{attrs:{"width":"74","height":"74","viewBox":"0 0 74 74","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M37 74C57.4345 74 74 57.4345 74 37C74 16.5655 57.4345 0 37 0C16.5655 0 0 16.5655 0 37C0 57.4345 16.5655 74 37 74Z","fill":"url(#paint0_linear)"}}),_c('path',{attrs:{"d":"M30.2978 18.6099L30.3255 18.6642H30.1872L30.2978 18.6099ZM52.6425 47.3185L52.2277 48.079C50.6237 51.0938 47.1116 52.642 43.7655 51.7728C38.5665 50.3877 33.4781 47.563 29.5512 43.6247C25.5413 39.7407 22.6652 34.7704 21.2549 29.6642C20.3423 26.3778 21.9462 22.9284 25.0158 21.3531C25.3477 21.1901 25.6519 21.0272 25.9561 20.8642C26.8963 20.3753 28.0302 20.6741 28.6109 21.5432C29.6341 23.0642 31.0721 25.2642 32.8144 27.8716C33.3398 28.6593 33.2292 29.7185 32.5378 30.3975L30.9892 31.9185C30.2149 32.679 29.9936 33.8469 30.4637 34.8519C32.0954 38.3556 34.9437 41.1531 38.5112 42.7556C39.5067 43.2173 40.6958 43 41.4978 42.2395L42.9082 40.8543C43.5995 40.1753 44.6504 40.0667 45.48 40.5827L51.9788 44.7383C52.8361 45.2815 53.1403 46.3951 52.6425 47.3185Z","fill":"white"}}),_c('defs',[_c('linearGradient',{attrs:{"id":"paint0_linear","x1":"49.3362","y1":"12.3362","x2":"30.8362","y2":"55.5","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#09CB01"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#07B000"}})],1)],1)])}
var PhoneIconvue_type_template_id_79cf4c49_scoped_true_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/icons/PhoneIcon.vue?vue&type=template&id=79cf4c49&scoped=true&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/PhoneIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PhoneIconvue_type_script_lang_js_ = ({
  name: "PhoneIcon"
});
// CONCATENATED MODULE: ./src/components/icons/PhoneIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_PhoneIconvue_type_script_lang_js_ = (PhoneIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/icons/PhoneIcon.vue





/* normalize component */

var PhoneIcon_component = normalizeComponent(
  icons_PhoneIconvue_type_script_lang_js_,
  PhoneIconvue_type_template_id_79cf4c49_scoped_true_functional_true_render,
  PhoneIconvue_type_template_id_79cf4c49_scoped_true_functional_true_staticRenderFns,
  true,
  null,
  "79cf4c49",
  null
  
)

/* harmony default export */ var PhoneIcon = (PhoneIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/SmsIcon.vue?vue&type=template&id=a22de43a&scoped=true&functional=true&
var SmsIconvue_type_template_id_a22de43a_scoped_true_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('svg',{attrs:{"width":"74","height":"74","viewBox":"0 0 74 74","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M37 74C57.4345 74 74 57.4345 74 37C74 16.5655 57.4345 0 37 0C16.5655 0 0 16.5655 0 37C0 57.4345 16.5655 74 37 74Z","fill":"url(#paint0_linear)"}}),_c('path',{attrs:{"d":"M30.612 46.397C30.684 47.934 30.469 50.047 28.322 51.034L28.5 51.99C31.397 51.99 34.599 50.068 35.832 46.832L30.612 46.397Z","fill":"white"}}),_c('path',{attrs:{"d":"M46 28H28C25.791 28 24 29.791 24 32V44C24 46.209 25.791 48 28 48H46C48.209 48 50 46.209 50 44V32C50 29.791 48.209 28 46 28ZM37 40C35.895 40 35 39.105 35 38C35 36.895 35.895 36 37 36C38.105 36 39 36.895 39 38C39 39.105 38.105 40 37 40ZM43 40C41.895 40 41 39.105 41 38C41 36.895 41.895 36 43 36C44.105 36 45 36.895 45 38C45 39.105 44.105 40 43 40ZM31 40C29.895 40 29 39.105 29 38C29 36.895 29.895 36 31 36C32.105 36 33 36.895 33 38C33 39.105 32.105 40 31 40Z","fill":"white"}}),_c('defs',[_c('linearGradient',{attrs:{"id":"paint0_linear","x1":"49.3362","y1":"12.3362","x2":"30.8362","y2":"55.5","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#09CB01"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#07B000"}})],1)],1)])}
var SmsIconvue_type_template_id_a22de43a_scoped_true_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/icons/SmsIcon.vue?vue&type=template&id=a22de43a&scoped=true&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/SmsIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SmsIconvue_type_script_lang_js_ = ({
  name: "SmsIcon"
});
// CONCATENATED MODULE: ./src/components/icons/SmsIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_SmsIconvue_type_script_lang_js_ = (SmsIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/icons/SmsIcon.vue





/* normalize component */

var SmsIcon_component = normalizeComponent(
  icons_SmsIconvue_type_script_lang_js_,
  SmsIconvue_type_template_id_a22de43a_scoped_true_functional_true_render,
  SmsIconvue_type_template_id_a22de43a_scoped_true_functional_true_staticRenderFns,
  true,
  null,
  "a22de43a",
  null
  
)

/* harmony default export */ var SmsIcon = (SmsIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/popups/bind-parts/PhoneScreens.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var PhoneScreensvue_type_script_lang_js_ = ({
  name: "PhoneScreens",
  components: {
    SmsIcon: SmsIcon,
    PhoneIcon: PhoneIcon,
    PincodeInput: PincodeInput_min
  },
  props: {
    phone: {
      type: String,
      default: ''
    },
    caller: {
      type: String,
      default: ''
    },
    verificationCode: {
      type: String,
      default: ''
    },
    codeType: {
      type: String,
      default: 'phone'
    },
    step: {
      type: Number,
      default: 1
    },
    errors: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    locale: {
      type: Object,
      default: function _default() {}
    }
  },
  methods: {
    fieldHasError: function fieldHasError(field) {
      return this.errors.findIndex(function (e) {
        return e.field === field;
      }) > -1;
    },
    updatePhone: function updatePhone(event) {
      this.$emit('removeError', 'phone');
      var val = event.target.value.replace(/[^+0-9]+/g, '');
      this.$emit('phoneChanged', val);
    },
    updateCode: function updateCode(val) {
      if (val !== this.verificationCode) {
        this.$emit('removeError', 'code');
      }

      this.$emit('verificationCodeChanged', val);
    }
  }
});
// CONCATENATED MODULE: ./src/popups/bind-parts/PhoneScreens.vue?vue&type=script&lang=js&
 /* harmony default export */ var bind_parts_PhoneScreensvue_type_script_lang_js_ = (PhoneScreensvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/popups/bind-parts/PhoneScreens.vue?vue&type=style&index=0&lang=sass&
var PhoneScreensvue_type_style_index_0_lang_sass_ = __webpack_require__("c355");

// CONCATENATED MODULE: ./src/popups/bind-parts/PhoneScreens.vue






/* normalize component */

var PhoneScreens_component = normalizeComponent(
  bind_parts_PhoneScreensvue_type_script_lang_js_,
  PhoneScreensvue_type_template_id_09bff7c3_render,
  PhoneScreensvue_type_template_id_09bff7c3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PhoneScreens = (PhoneScreens_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/MasterKey.vue?vue&type=template&id=04704394&scoped=true&
var MasterKeyvue_type_template_id_04704394_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"master-key"},[_c('MasterKeyIcon'),_c('h2',{staticClass:"bind-heading"},[_vm._v(" "+_vm._s(_vm.locale.title)+" ")]),_c('h2',{staticClass:"bind-subheading",domProps:{"innerHTML":_vm._s(_vm.locale.subtitle)}}),_c('div',{staticClass:"master-key__wrapper"},[_c('input',{staticClass:"payeer-popup__input",class:{error: _vm.error},staticStyle:{"width":"236px","margin":"0 auto !important"},attrs:{"maxlength":"3","placeholder":_vm.locale.placeholder,"type":"password"},domProps:{"value":_vm.value},on:{"keypress":_vm.onlyNumber,"input":function($event){return _vm.$emit('input', $event.target.value)}}}),_c('svg',{class:'master-key__toggle',attrs:{"width":"39","height":"23","viewBox":"0 0 39 23","fill":"none","xmlns":"http://www.w3.org/2000/svg","svg-inline":'',"role":'presentation',"focusable":'false',"tabindex":'-1'},on:{"click":function($event){_vm.showKeyboard = !_vm.showKeyboard}}},[_c('circle',{attrs:{"cx":"11.41","cy":"3.41","r":"2.41","stroke":"#03A9F4","stroke-width":"2"}}),_c('circle',{attrs:{"cx":"3.41","cy":"3.41","r":"2.41","stroke":"#03A9F4","stroke-width":"2"}}),_c('circle',{attrs:{"cx":"19.279","cy":"3.41","r":"2.41","stroke":"#03A9F4","stroke-width":"2"}}),_c('circle',{attrs:{"cx":"27.148","cy":"3.41","r":"2.41","stroke":"#03A9F4","stroke-width":"2"}}),_c('circle',{attrs:{"cx":"35.148","cy":"3.41","r":"2.41","stroke":"#03A9F4","stroke-width":"2"}}),_c('circle',{attrs:{"cx":"11.41","cy":"11.803","r":"2.41","stroke":"#03A9F4","stroke-width":"2"}}),_c('circle',{attrs:{"cx":"3.41","cy":"11.803","r":"2.41","stroke":"#03A9F4","stroke-width":"2"}}),_c('circle',{attrs:{"cx":"19.279","cy":"11.803","r":"2.41","stroke":"#03A9F4","stroke-width":"2"}}),_c('circle',{attrs:{"cx":"27.148","cy":"11.803","r":"2.41","stroke":"#03A9F4","stroke-width":"2"}}),_c('circle',{attrs:{"cx":"35.148","cy":"11.803","r":"2.41","stroke":"#03A9F4","stroke-width":"2"}}),_c('path',{attrs:{"d":"M1.202 20l1.333-2H36a1 1 0 011 1v2a1 1 0 01-1 1H2.535l-1.333-2z","stroke":"#03A9F4","stroke-width":"2"}})]),_c('transition',{attrs:{"name":"opacity"}},[(_vm.showKeyboard)?_c('div',{staticClass:"master-key__keyboard"},[_vm._l((9),function(x){return _c('div',{key:x,staticClass:"master-key__keyboard-key",on:{"click":function($event){return _vm.addDigit(x)}}},[_vm._v(" "+_vm._s(x)+" ")])}),_c('div',{staticClass:"master-key__keyboard-key",on:{"click":function($event){return _vm.addDigit(0)}}},[_vm._v(" 0 ")]),_c('svg',{staticClass:"master-key__keyboard-back",staticStyle:{"grid-column":"1/5"},attrs:{"width":"208","height":"27","viewBox":"0 0 208 27","fill":"none","xmlns":"http://www.w3.org/2000/svg"},on:{"click":_vm.removeDigit}},[_c('path',{attrs:{"d":"M0 13.0306C0 12.3662 0.241155 11.7244 0.678669 11.2244L7.51192 3.41495C9.4108 1.2448 12.1541 0 15.0377 0H198C203.523 0 208 4.47715 208 10V17C208 22.5228 203.523 27 198 27H15.2775C12.2561 27 9.3966 25.6339 7.49811 23.2834L0.609097 14.7541C0.214977 14.2662 0 13.6579 0 13.0306Z","fill":"white","fill-opacity":"0.1"}}),_c('rect',{attrs:{"x":"101.414","y":"10","width":"8","height":"2","transform":"rotate(45 101.414 10)","fill":"white"}}),_c('rect',{attrs:{"width":"8","height":"2","transform":"matrix(-0.707107 0.707107 0.707107 0.707107 105.657 10)","fill":"white"}})])],2):_vm._e()])],1),_c('button',{staticClass:"payeer_button",staticStyle:{"width":"240px","margin-top":"30px"},attrs:{"disabled":!_vm.value || _vm.value.length < 3},on:{"click":function($event){return _vm.$emit('unlocked')}}},[_vm._v(_vm._s(_vm.locale.unlock))])],1)}
var MasterKeyvue_type_template_id_04704394_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/MasterKey.vue?vue&type=template&id=04704394&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/MasterKeyIcon.vue?vue&type=template&id=74e7b8a8&scoped=true&functional=true&
var MasterKeyIconvue_type_template_id_74e7b8a8_scoped_true_functional_true_render = function (_h,_vm) {var _c=_vm._c;return _c('svg',{attrs:{"width":"74","height":"74","viewBox":"0 0 74 74","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M37 74C57.4345 74 74 57.4345 74 37C74 16.5655 57.4345 0 37 0C16.5655 0 0 16.5655 0 37C0 57.4345 16.5655 74 37 74Z","fill":"url(#paint0_linear)"}}),_c('path',{attrs:{"d":"M41.9475 36.2864C43.2723 32.5069 42.7048 27.5216 39.4703 24.2871C35.0995 19.917 28.0335 19.8975 23.6641 24.2676C19.2932 28.6378 19.2643 35.7529 23.6345 40.123C26.9664 43.455 31.6975 44.4152 35.9269 42.5186L38.0221 44.6137L38.1008 44.6924L41.0493 44.1769L41.0363 47.2605L44.1004 47.2663L43.7163 50.308L45.2404 51.8321C45.2447 51.8364 45.2447 51.8364 45.2476 51.8393L45.361 51.7267C45.896 52.2126 45.7249 51.9909 45.805 51.9909L51.0552 52.1498C51.4884 52.1498 51.8682 51.8299 51.8689 51.396L51.6646 46.1017C51.6646 46.0209 51.9007 46.2071 51.4148 45.6714L51.3729 45.714C51.3707 45.7111 51.3707 45.7119 51.3686 45.709L41.9475 36.2864ZM29.8377 30.8925C28.7092 32.021 26.8812 32.021 25.7535 30.8925C24.6257 29.7641 24.625 27.9367 25.7535 26.8083C26.8819 25.6798 28.71 25.6798 29.8377 26.8083C30.9654 27.9367 30.9662 29.7648 29.8377 30.8925Z","fill":"white"}}),_c('defs',[_c('linearGradient',{attrs:{"id":"paint0_linear","x1":"49.3362","y1":"12.3362","x2":"30.8362","y2":"55.5","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"stop-color":"#03A9F4"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0190D0"}})],1)],1)])}
var MasterKeyIconvue_type_template_id_74e7b8a8_scoped_true_functional_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/icons/MasterKeyIcon.vue?vue&type=template&id=74e7b8a8&scoped=true&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/icons/MasterKeyIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MasterKeyIconvue_type_script_lang_js_ = ({
  name: "MasterKeyIcon"
});
// CONCATENATED MODULE: ./src/components/icons/MasterKeyIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var icons_MasterKeyIconvue_type_script_lang_js_ = (MasterKeyIconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/icons/MasterKeyIcon.vue





/* normalize component */

var MasterKeyIcon_component = normalizeComponent(
  icons_MasterKeyIconvue_type_script_lang_js_,
  MasterKeyIconvue_type_template_id_74e7b8a8_scoped_true_functional_true_render,
  MasterKeyIconvue_type_template_id_74e7b8a8_scoped_true_functional_true_staticRenderFns,
  true,
  null,
  "74e7b8a8",
  null
  
)

/* harmony default export */ var MasterKeyIcon = (MasterKeyIcon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/MasterKey.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MasterKeyvue_type_script_lang_js_ = ({
  name: "MasterKey",
  components: {
    MasterKeyIcon: MasterKeyIcon
  },
  props: {
    error: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: null
    },
    locale: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      showKeyboard: false,
      code: ''
    };
  },
  methods: {
    onlyNumber: function onlyNumber($event) {
      var keyCode = $event.keyCode ? $event.keyCode : $event.which;

      if (keyCode < 48 || keyCode > 57) {
        $event.preventDefault();
      }
    },
    addDigit: function addDigit(digit) {
      if (this.value.length < 3) {
        this.$emit('input', this.value + digit);
      }
    },
    removeDigit: function removeDigit() {
      if (this.value.length > 0) {
        var tmp = this.value;
        this.$emit('input', tmp.substr(0, this.value.length - 1));
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/MasterKey.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MasterKeyvue_type_script_lang_js_ = (MasterKeyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/MasterKey.vue?vue&type=style&index=0&id=04704394&lang=sass&scoped=true&
var MasterKeyvue_type_style_index_0_id_04704394_lang_sass_scoped_true_ = __webpack_require__("7522");

// CONCATENATED MODULE: ./src/components/MasterKey.vue






/* normalize component */

var MasterKey_component = normalizeComponent(
  components_MasterKeyvue_type_script_lang_js_,
  MasterKeyvue_type_template_id_04704394_scoped_true_render,
  MasterKeyvue_type_template_id_04704394_scoped_true_staticRenderFns,
  false,
  null,
  "04704394",
  null
  
)

/* harmony default export */ var MasterKey = (MasterKey_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/popups/UniversalBindPopup.vue?vue&type=script&lang=js&
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var UniversalBindPopupvue_type_script_lang_js_ = ({
  name: "UniversalBindPopup",
  components: {
    MasterKey: MasterKey,
    PhoneScreens: PhoneScreens,
    EmailScreens: EmailScreens,
    TelegramScreens: TelegramScreens,
    BasePopup: BasePopup
  },
  mixins: [fieldErrorsMixin, notificationMixin],
  data: function data() {
    return {
      requestUrl: '',
      resendUrl: '',
      resetUrl: '',
      disableBackButton: false,
      step: 1,
      codeType: 'email',
      initialCodeType: 'email',
      masterKey: {
        value: '',
        need: false,
        show: false
      },
      valueToBind: '',
      verificationCode: '',
      codeSentTo: '+7*****1337',
      caller: '+7 (994) 50 -',
      telegramCode: '12345',
      locale_text: {},
      callbackFn: function callbackFn() {}
    };
  },
  computed: {
    popupHeight: function popupHeight() {
      var height = 520;

      if (this.codeType === 'call') {
        height = 552;
      }

      return height;
    }
  },
  methods: {
    backToFirstStep: function backToFirstStep() {
      this.url = this.resetUrl.replace(/&email=(\+?\d+)/, '').replace(/&telegram=(\+?\d+)/, '').replace(/&phone=(\+?\d+)/, '');
      this.valueToBind = '';
      this.masterKey.show = false;
      this.masterKey.need = false;
      this.verificationCode = '';
      this.masterKey.value = '';
      this.codeType = this.initialCodeType;
      this.cleanErrors();
      this.step = 1;
    },
    buildURL: function buildURL() {
      var url = this.url;

      if (this.codeType === 'telegram' && this.step === 1) {
        url += "&telegram=".concat(this.valueToBind);
      }

      if (this.codeType === 'email' && this.step === 1) {
        url += "&email=".concat(this.valueToBind);
      }

      if (this.codeType === 'phone' && this.step === 1) {
        url += "&phone=".concat(this.valueToBind);
      }

      if (this.masterKey.need && this.masterKey.value.length) {
        url += "&master_key=".concat(this.masterKey.value);
      }

      if (this.verificationCode.length > 0 && this.step > 1) {
        url += "&code=".concat(this.verificationCode);
      }

      return url;
    },
    submit: function submit() {
      var _this = this;

      if (this.masterKey.need && !this.masterKey.show) {
        this.masterKey.show = true;
        return;
      }

      this.cleanNotifications();
      var url = this.buildURL();
      this.$ajaxWrapper({
        url: url,
        formType: 'json'
      }, function (response) {
        if (response.error[0]) {
          _this.setErrors(response.error);

          _this.masterKey.show = false;
          _this.masterKey.value = '';

          if (_this.fieldHasError('master_key')) {
            _this.masterKey.show = true;
          }

          if (response.notify === true) {
            _this.replaceNotification(response.error[0].value, 'error', response.title || '#title#');
          }
        } else {
          if (response.result === 'success') {
            _this.callbackFn(response);

            _this.$emit('close');
          } else {
            _this.resendUrl = url;
            _this.resetUrl = url;
            _this.verificationCode = '';
            _this.masterKey.value = '';
            _this.step = response.result.step;
            _this.locale_text = _objectSpread(_objectSpread({}, _this.locale_text), response.result.locale_text);
            _this.codeType = response.result.codeType || _this.codeType;
            _this.codeSentTo = response.result.email || response.result.phone || '';
            _this.masterKey.need = parseInt(response.result.master_key) === 1;
            _this.caller = response.result.caller || '';
            _this.url = _this.url.split('?')[0] + '?' + response.result.url_param;
          }
        }
      });
    },
    resend: function resend() {
      var _this2 = this;

      this.cleanNotifications();
      var pressedButton = '';

      if (this.codeType === 'email') {
        pressedButton = 'email_resend';
      }

      if (this.codeType === 'sms') {
        pressedButton = 'phone_resend';
      }

      if (this.codeType === 'call') {
        pressedButton = 'phone_recall';
      }

      this.$ajaxWrapper({
        url: this.resendUrl + "&button=".concat(pressedButton),
        formType: 'json'
      }, function (response) {
        if (response.error[0]) {
          _this2.replaceNotification(response.error[0].value, 'error', response.title || '#title#');
        } else {
          _this2.cleanErrors();

          _this2.replaceNotification(response.result.text || '#result.text#', 'info', response.result.title || '#result.title#');

          _this2.verificationCode = '';
          _this2.masterKey.value = '';
          _this2.step = response.result.step;
          _this2.locale_text = _objectSpread(_objectSpread({}, _this2.locale_text), response.result.locale_text);
          _this2.codeType = response.result.codeType || _this2.codeType;
          _this2.codeSentTo = response.result.email || response.result.phone || '';
          _this2.masterKey.need = parseInt(response.result.master_key) === 1;
          _this2.caller = response.result.caller || '';
          _this2.url = _this2.url.split('?')[0] + '?' + response.result.url_param;
        }
      });
    },
    loadInitialData: function loadInitialData() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SAMLE_BIND_DATA;
      var callbackFn = arguments.length > 1 ? arguments[1] : undefined;

      var data = _objectSpread(_objectSpread(_objectSpread({}, SAMLE_BIND_DATA), options), {}, {
        locale_text: _objectSpread(_objectSpread({}, SAMLE_BIND_DATA.locale_text), options.locale_text)
      });

      this.locale_text = data.locale_text;
      this.step = parseInt(data.step);
      this.codeType = data.codeType;
      this.initialCodeType = data.codeType;
      this.resendUrl = data.resend_url;
      this.url = data.url;
      this.codeSentTo = data.email || data.phone;
      this.masterKey.need = parseInt(data.master_key) === 1;
      this.disableBackButton = data.step === 2;

      if (data.codeType === 'email') {
        this.valueToBind = data.email || '';
      }

      if (['phone', 'sms', 'call'].includes(data.codeType)) {
        this.valueToBind = data.phone || '';
        this.caller = data.caller;
      }

      if (data.codeType === 'telegram') {
        if (data.username) {
          this.step = 2;
          this.disableBackButton = true;
        }

        this.valueToBind = data.username;
        this.telegramCode = data.code;
      }

      this.callbackFn = callbackFn;
    }
  }
});
// CONCATENATED MODULE: ./src/popups/UniversalBindPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var popups_UniversalBindPopupvue_type_script_lang_js_ = (UniversalBindPopupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/popups/UniversalBindPopup.vue





/* normalize component */

var UniversalBindPopup_component = normalizeComponent(
  popups_UniversalBindPopupvue_type_script_lang_js_,
  UniversalBindPopupvue_type_template_id_6d0b38f4_scoped_true_render,
  UniversalBindPopupvue_type_template_id_6d0b38f4_scoped_true_staticRenderFns,
  false,
  null,
  "6d0b38f4",
  null
  
)

/* harmony default export */ var UniversalBindPopup = (UniversalBindPopup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/popups/VerificationPopup.vue?vue&type=template&id=1c232196&scoped=true&
var VerificationPopupvue_type_template_id_1c232196_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('BasePopup',{staticClass:"verification-mask",attrs:{"width":551,"height":627,"notifications":_vm.notifications,"title":_vm.step === _vm.STEPS.EXAMPLE ? _vm.locale.exampleTitle : null,"show-back-button":_vm.step === _vm.STEPS.EXAMPLE},on:{"back":function($event){_vm.step = _vm.STEPS.UPLOAD},"close":function($event){return _vm.$emit('close')}}},[_c('transition',{attrs:{"name":"opacity","mode":"out-in"}},[(_vm.step === _vm.STEPS.UPLOAD)?_c('div',{key:"upload",staticClass:"verification-mask__upload"},[_c('svg',{attrs:{"width":"101","height":"100","viewBox":"0 0 101 100","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M51.8449 97.2073C78.5763 97.2073 100.246 75.5372 100.246 48.8058C100.246 22.0744 78.5763 0.404297 51.8449 0.404297C25.1135 0.404297 3.44336 22.0744 3.44336 48.8058C3.44336 75.5372 25.1135 97.2073 51.8449 97.2073Z","fill":"#FFBF0B"}}),_c('path',{attrs:{"d":"M77.6117 47.538C83.828 45.0847 86.8785 38.0567 84.4253 31.8404C81.9721 25.6241 74.944 22.5736 68.7278 25.0268C62.5115 27.48 59.4609 34.508 61.9141 40.7243C64.3673 46.9406 71.3954 49.9912 77.6117 47.538Z","fill":"white"}}),_c('path',{attrs:{"d":"M72.4233 43.7206C76.0753 42.2794 77.8675 38.1504 76.4263 34.4983C74.985 30.8463 70.856 29.0541 67.204 30.4953C63.5519 31.9366 61.7597 36.0656 63.201 39.7176C64.6422 43.3697 68.7712 45.1619 72.4233 43.7206Z","fill":"#1A1A54"}}),_c('path',{attrs:{"d":"M45.8446 53.5702C52.0609 51.117 55.1114 44.0889 52.6582 37.8727C50.205 31.6564 43.177 28.6058 36.9607 31.059C30.7444 33.5122 27.6938 40.5403 30.147 46.7566C32.6003 52.9729 39.6283 56.0234 45.8446 53.5702Z","fill":"white"}}),_c('path',{attrs:{"d":"M40.1449 50.9306C43.797 49.4893 45.5892 45.3604 44.148 41.7083C42.7067 38.0562 38.5777 36.264 34.9256 37.7053C31.2736 39.1466 29.4814 43.2755 30.9226 46.9276C32.3639 50.5797 36.4929 52.3719 40.1449 50.9306Z","fill":"#1A1A54"}}),_c('path',{attrs:{"d":"M82.9755 53.7135C85.3922 65.6057 77.6422 77.2824 65.75 79.6991C53.8577 82.1158 42.181 74.3658 39.7643 62.4736L82.9755 53.7135Z","fill":"#1A1A54"}}),_c('path',{attrs:{"d":"M63.3336 67.8071C56.8396 69.0691 51.656 72.4157 48.9418 76.2511C53.6732 79.5873 59.7339 80.9355 65.7504 79.6994C71.7668 78.4633 76.8394 74.8353 79.9794 70.0188C76.0032 67.3602 69.7722 66.4045 63.3336 67.8071Z","fill":"#DC2863"}}),_c('path',{attrs:{"d":"M75.3888 60.448L49.5236 65.7774C48.4832 66.0253 47.4466 65.4588 47.0579 64.4739L45.6401 61.2935L77.0998 54.8946L77.1402 58.2933C77.2475 59.3893 76.4847 60.3407 75.3888 60.448Z","fill":"white"}}),_c('path',{attrs:{"d":"M6.52481 79.429C6.70417 82.4639 8.57054 84.9618 11.2356 86.4326C13.7433 88.0484 16.8986 88.6308 19.9397 88.3003C22.8296 87.9637 25.4639 90.1901 25.6494 93.0739C25.986 95.9638 23.7596 98.5981 20.8758 98.7836C20.4224 98.7652 20.1202 98.7529 19.8179 98.7406L19.5157 98.7283C14.5468 98.0721 9.77824 96.213 6.13518 92.7346C4.23809 90.9922 2.80667 88.9661 1.84708 86.505C0.881349 84.1951 0.538569 81.4563 0.939149 79.0505C1.15173 77.5453 2.56106 76.3916 4.06621 76.6042C5.41409 76.9617 6.27785 78.0565 6.52481 79.429Z","fill":"#E8E8EE"}}),_c('path',{attrs:{"d":"M34.8744 48.6406L27.2781 90.2639C26.9083 91.914 25.3478 93.0616 23.6977 92.6918L2.95852 88.9723C1.30838 88.6024 0.311921 87.0481 0.530645 85.3918L7.97574 43.7624C8.34559 42.1122 9.90605 40.9646 11.5562 41.3345L32.4465 45.0601C34.0966 45.43 35.0931 46.9843 34.8744 48.6406Z","fill":"#0B85FF"}}),_c('path',{attrs:{"d":"M35.4805 82.1205C35.8708 72.5219 29.4209 64.4655 21.0742 64.1261C12.7275 63.7867 5.64481 71.2929 5.25452 80.8915C4.86424 90.4902 11.3142 98.5466 19.6608 98.886C28.0075 99.2254 35.0902 91.7192 35.4805 82.1205Z","fill":"#E8E8EE"}}),_c('path',{attrs:{"d":"M31.764 80.4555L31.4999 68.3344","stroke":"#E8E8EE","stroke-width":"7.56274","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}}),_c('path',{attrs:{"d":"M26.5971 77.2182L27.8136 65.9142C27.8321 65.4608 28.1466 65.1708 28.5938 65.3404C28.8961 65.3527 29.1861 65.6672 29.1738 65.9695L29.6197 77.3411C29.589 78.0967 28.9537 78.8278 28.1981 78.7971C27.4424 78.7664 26.7114 78.1311 26.7421 77.3755C26.5909 77.3693 26.5971 77.2182 26.5971 77.2182Z","fill":"#D1D1DC"}}),_c('path',{attrs:{"d":"M24.146 81.6597L24.8219 65.0354","stroke":"#E8E8EE","stroke-width":"7.56274","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}}),_c('path',{attrs:{"d":"M19.0405 76.9106L20.3 64.5486C20.3184 64.0953 20.633 63.8053 21.0802 63.9749C21.3825 63.9871 21.6724 64.3017 21.6602 64.604L22.0631 77.0335C22.0323 77.7891 21.3971 78.5202 20.6414 78.4895C19.8858 78.4587 19.1547 77.8235 19.1854 77.0679C19.0343 77.0617 19.0405 76.9106 19.0405 76.9106Z","fill":"#D1D1DC"}}),_c('path',{attrs:{"d":"M16.5894 81.3525L17.2653 64.7283","stroke":"#E8E8EE","stroke-width":"7.56274","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}}),_c('path',{attrs:{"d":"M11.4535 77.3593L12.7008 65.2996C12.7192 64.8463 13.0338 64.5563 13.481 64.7258C13.7833 64.7381 14.0732 65.0527 14.061 65.3549L14.4761 77.4822C14.4454 78.2379 13.8102 78.9689 13.0545 78.9382C12.2989 78.9075 11.5678 78.2722 11.5985 77.5166C11.4474 77.5104 11.4535 77.3593 11.4535 77.3593Z","fill":"#D1D1DC"}}),_c('path',{attrs:{"d":"M9.03271 81.0454L9.70866 64.4211","stroke":"#E8E8EE","stroke-width":"7.56274","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}}),_c('path',{attrs:{"opacity":"0.2","d":"M32.09 49.8003C32.1578 48.131 30.8596 46.7227 29.1903 46.6549C27.5209 46.587 26.1127 47.8852 26.0448 49.5546C25.9769 51.2239 27.2751 52.6322 28.9445 52.7C30.6138 52.7679 32.0221 51.4697 32.09 49.8003Z","fill":"#1A1A54"}}),_c('path',{attrs:{"d":"M30.881 49.7514C30.9218 48.7498 30.1428 47.9048 29.1412 47.8641C28.1396 47.8234 27.2946 48.6023 27.2539 49.6039C27.2132 50.6055 27.9921 51.4505 28.9937 51.4912C29.9953 51.5319 30.8403 50.753 30.881 49.7514Z","fill":"#1A1A54"}})]),_c('div',{staticClass:"popup-heading"},[_vm._v(" "+_vm._s(_vm.locale.uploadTitle)+" ")]),_c('div',{staticClass:"popup-subheading"},[_vm._v(" "+_vm._s(_vm.locale.uploadSubtitle)+" ")]),_c('div',{staticClass:"verification-mask__upload-script"},[_vm._v(" "+_vm._s(_vm.locale.uploadScript)+" ")]),_c('button',{staticClass:"payeer_button",staticStyle:{"width":"350px","margin-top":"30px"},on:{"click":_vm.selectFile}},[_vm._v(" "+_vm._s(_vm.locale.uploadButton)+" ")]),_c('button',{staticClass:"payeer_button blue",staticStyle:{"width":"350px","margin-top":"20px"},on:{"click":function($event){_vm.step = _vm.STEPS.EXAMPLE}}},[_c('svg',{staticClass:"payeer_button__play",staticStyle:{"margin-right":"15px"},attrs:{"width":"14","height":"17","viewBox":"0 0 14 17","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M13.3833 7.80215L1.78333 0.897982C1.64167 0.814648 1.49583 0.764648 1.32917 0.764648C0.875 0.764648 0.504167 1.13965 0.504167 1.59798H0.5V15.9313H0.504167C0.504167 16.3896 0.875 16.7646 1.32917 16.7646C1.5 16.7646 1.64167 16.7063 1.79583 16.623L13.3833 9.72715C13.6583 9.49798 13.8333 9.15215 13.8333 8.76465C13.8333 8.37715 13.6583 8.03548 13.3833 7.80215Z","fill":"#03A9F4"}})]),_vm._v(" "+_vm._s(_vm.locale.uploadExample)+" ")])]):(_vm.step === _vm.STEPS.EXAMPLE)?_c('div',{key:"example",staticClass:"verification-mask__example"},[_c('video',{staticClass:"verification-mask__video",attrs:{"controls":"","src":_vm.example}}),_c('button',{staticClass:"payeer_button",staticStyle:{"width":"350px","margin":"30px auto"},on:{"click":_vm.selectFile}},[_vm._v(" "+_vm._s(_vm.locale.exampleButton)+" ")])]):(_vm.step === _vm.STEPS.PROGRESS)?_c('div',{key:"progress",staticClass:"verification-mask__progress"},[_c('div',{staticClass:"progress-circle__container",class:{'progress-circle__full': _vm.uploadProgress == 100}},[_c('span',{staticClass:"progress-circle__percent"},[_vm._v(_vm._s(_vm.uploadProgress)+"%")]),_c('svg',{staticClass:"progress-circle",attrs:{"viewBox":"0 0 106 106","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"id":"Page-1","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"ProgressBar","transform":"translate(-17.000000, -17.000000)"}},[_c('circle',{attrs:{"id":"Oval","fill":"#fff","stroke":"#b8f0af","stroke-width":"1","fill-rule":"nonzero","cx":"70","cy":"70","r":"50"}}),_c('path',{staticClass:"progress-circle__path",attrs:{"d":"M70,120 C97.6142375,120 120,97.6142375 120,70 C120,42.3857625 97.6142375,20 70,20 C42.3857625,20 20,42.3857625 20,70 C20,97.6142375 42.3857625,120 70,120 Z","id":"Oval-Copy","stroke":"#09CB01","stroke-width":"1","stroke-dasharray":_vm.circle,"fill-rule":"nonzero","transform":"translate(70.000000, 70.000000) rotate(-125.000000) translate(-70.000000, -70.000000) scale(1.004)"}})])])])]),_c('div',{staticClass:"popup-heading"},[_vm._v(" "+_vm._s(_vm.uploadProgress === 100 && _vm.success ? _vm.locale.uploadingFinished : _vm.locale.uploadingProcess)+" ")]),_c('transition',{attrs:{"name":"opacity"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.uploadProgress == 100 && _vm.success),expression:"uploadProgress == 100 && success"}],staticClass:"popup-subheading"},[_vm._v(" "+_vm._s(_vm.locale.uploadingFinishedSubtitle)+" ")])]),_c('transition',{attrs:{"name":"opacity"}},[_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.uploadProgress == 100 && _vm.success),expression:"uploadProgress == 100 && success"}],staticClass:"payeer_button",staticStyle:{"width":"350px","margin":"30px auto"},on:{"click":_vm.closePopup}},[_vm._v(" "+_vm._s(_vm.locale.doneButton)+" ")])])],1):_vm._e()]),_c('VerificationSidebar',{style:(_vm.step === _vm.STEPS.PROGRESS ? {width: '0px'} : null),attrs:{"slot":"right","link":_vm.link,"qr":_vm.qr,"locale":_vm.locale},slot:"right"}),_c('input',{ref:"fileInput",staticStyle:{"transform":"scale(0)","position":"absolute","width":"0","height":"0"},attrs:{"accept":_vm.fileTypes,"type":"file"},on:{"change":_vm.uploadSelfie}})],1)}
var VerificationPopupvue_type_template_id_1c232196_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/popups/VerificationPopup.vue?vue&type=template&id=1c232196&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"22ed40bc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/popups/VerificationSidebar.vue?vue&type=template&id=94f7e54a&scoped=true&
var VerificationSidebarvue_type_template_id_94f7e54a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"verification-sidebar"},[_c('div',{staticClass:"verification-sidebar__content"},[_c('svg',{attrs:{"width":"128","height":"129","viewBox":"0 0 128 129","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('g',{attrs:{"clip-path":"url(#clip0_626:4)"}},[_c('path',{attrs:{"d":"M103.84 38.7646L87.8402 47.5446C86.6378 48.1442 85.2499 48.255 83.9675 47.8539C82.6851 47.4528 81.6078 46.5709 80.9613 45.393C80.3148 44.2151 80.1494 42.8326 80.4996 41.5354C80.8499 40.2383 81.6887 39.127 82.8402 38.4346C83.0581 38.313 83.2855 38.2093 83.5202 38.1246L100.6 31.7146C101.52 31.3713 102.536 31.3888 103.444 31.7635C104.352 32.1382 105.084 32.8425 105.495 33.7348C105.905 34.6272 105.962 35.6417 105.655 36.5746C105.348 37.5075 104.7 38.2899 103.84 38.7646Z","fill":"#FFC298"}}),_c('path',{attrs:{"d":"M103 53.7646L87.6999 58.0546C86.3988 58.3924 85.0171 58.2061 83.8521 57.5356C82.687 56.8651 81.8316 55.7641 81.4699 54.4695C81.1083 53.1748 81.2692 51.79 81.9181 50.6127C82.5671 49.4355 83.6521 48.5601 84.9399 48.1746C85.1958 48.1054 85.4566 48.0553 85.7199 48.0246L101.49 46.1446C102.458 46.0424 103.429 46.3058 104.213 46.8832C104.997 47.4605 105.536 48.3101 105.725 49.265C105.914 50.2198 105.74 51.2109 105.236 52.0435C104.731 52.8761 103.934 53.49 103 53.7646Z","fill":"#FFC298"}}),_c('path',{attrs:{"d":"M26.73 99.4547L30.44 92.2747C30.44 92.2747 35.17 90.9847 48.11 98.1147C61.05 105.245 62.26 109.225 62.26 109.225C62.26 109.225 59.26 115.225 57.72 115.225C53.64 115.515 33.59 103.765 26.73 99.4547Z","fill":"#892E1D"}}),_c('path',{attrs:{"d":"M101.31 64.8145L91.3099 63.1545L94.9999 62.4845L88.8599 65.7645C88.0098 66.2244 87.0193 66.3523 86.0803 66.1234C85.1412 65.8945 84.3207 65.325 83.7777 64.5255C83.2347 63.7259 83.0079 62.7532 83.1414 61.796C83.2748 60.8387 83.7589 59.9651 84.4999 59.3445L89.7899 54.8945C90.2664 54.4913 90.837 54.2148 91.4488 54.0907C92.0607 53.9666 92.6939 53.9988 93.2899 54.1845H93.4399L103.12 57.2445C104.048 57.5491 104.828 58.1917 105.304 59.0448C105.78 59.8978 105.918 60.8987 105.69 61.8486C105.462 62.7986 104.885 63.6279 104.073 64.1718C103.262 64.7158 102.275 64.9345 101.31 64.7845V64.8145Z","fill":"#FFC298"}}),_c('path',{attrs:{"d":"M101 75.9647L85.5401 78.1647C84.3374 78.3357 83.1159 78.022 82.1445 77.2925C81.173 76.563 80.5312 75.4774 80.3601 74.2747C80.189 73.0719 80.5028 71.8505 81.2323 70.879C81.9618 69.9076 83.0474 69.2657 84.2501 69.0947H84.6601L100.26 68.2847C101.217 68.2952 102.137 68.6592 102.842 69.3067C103.547 69.9542 103.988 70.8395 104.08 71.7923C104.171 72.7451 103.908 73.6983 103.339 74.4685C102.771 75.2387 101.938 75.7716 101 75.9647Z","fill":"#FFC298"}}),_c('path',{attrs:{"d":"M49.2998 45.2944C49.2998 45.2944 40.5698 52.5244 37.5698 58.6844C34.5698 64.8444 31.5698 105.944 31.5698 105.944L54.0998 119.224C55.5959 115.061 57.6118 111.103 60.0998 107.444C63.8698 102.184 75.0998 98.5644 77.8998 92.1044C80.6998 85.6444 74.3798 52.4944 74.5098 51.5244C74.6398 50.5544 49.2998 45.2944 49.2998 45.2944Z","fill":"#FFC298"}}),_c('path',{attrs:{"d":"M50.4298 51.5244C50.4298 51.5244 42.8298 60.8344 43.3298 67.1044C43.6169 70.8298 44.558 74.4755 46.1098 77.8744L53.5998 63.5944L50.4298 51.5244Z","fill":"#E1927A"}}),_c('path',{attrs:{"d":"M59.0001 80.7645C59.0001 80.7645 58.5001 93.6245 53.6501 98.4745C49.5642 102.835 45.7153 107.411 42.1201 112.185L54.1201 119.275C55.6162 115.111 57.6321 111.153 60.1201 107.495C63.8901 102.235 75.1201 98.6145 77.9201 92.1545C78.8601 89.9545 78.7501 84.6745 78.2001 78.6245L69.2001 79.4245L59.0001 80.7645Z","fill":"#E1927A"}}),_c('path',{attrs:{"d":"M103 85.9046V7.62465C103 3.83598 99.9287 0.764648 96.14 0.764648L54.86 0.764648C51.0713 0.764648 48 3.83598 48 7.62465L48 85.9046C48 89.6933 51.0713 92.7646 54.86 92.7646H96.14C99.9287 92.7646 103 89.6933 103 85.9046Z","fill":"#0B85FF"}}),_c('path',{attrs:{"d":"M97 81.0647V10.4646C97 8.4212 95.3435 6.76465 93.3 6.76465L57.7 6.76465C55.6565 6.76465 54 8.4212 54 10.4646L54 81.0647C54 83.1081 55.6565 84.7646 57.7 84.7646H93.3C95.3435 84.7646 97 83.1081 97 81.0647Z","fill":"white"}}),_c('path',{attrs:{"d":"M74.7534 47.8446C83.0597 47.8446 89.7934 41.111 89.7934 32.8046C89.7934 24.4983 83.0597 17.7646 74.7534 17.7646C66.447 17.7646 59.7134 24.4983 59.7134 32.8046C59.7134 41.111 66.447 47.8446 74.7534 47.8446Z","fill":"#FFBF0B"}}),_c('path',{attrs:{"d":"M82.76 32.4106C84.6916 31.6483 85.6395 29.4645 84.8772 27.5329C84.1149 25.6012 81.9311 24.6533 79.9994 25.4156C78.0678 26.1779 77.1199 28.3618 77.8822 30.2934C78.6445 32.225 80.8284 33.1729 82.76 32.4106Z","fill":"white"}}),_c('path',{attrs:{"d":"M81.1478 31.2249C82.2826 30.7771 82.8395 29.4941 82.3917 28.3592C81.9438 27.2244 80.6608 26.6675 79.526 27.1154C78.3911 27.5632 77.8342 28.8462 78.2821 29.981C78.7299 31.1159 80.013 31.6728 81.1478 31.2249Z","fill":"#1A1A54"}}),_c('path',{attrs:{"d":"M72.8889 34.2851C74.8205 33.5228 75.7684 31.339 75.0061 29.4074C74.2438 27.4758 72.06 26.5278 70.1284 27.2901C68.1967 28.0524 67.2488 30.2363 68.0111 32.1679C68.7734 34.0995 70.9573 35.0474 72.8889 34.2851Z","fill":"white"}}),_c('path',{attrs:{"d":"M71.118 33.4652C72.2528 33.0173 72.8097 31.7343 72.3619 30.5995C71.914 29.4646 70.631 28.9077 69.4962 29.3556C68.3614 29.8034 67.8045 31.0865 68.2523 32.2213C68.7002 33.3561 69.9832 33.913 71.118 33.4652Z","fill":"#1A1A54"}}),_c('path',{attrs:{"d":"M84.4266 34.3301C85.1776 38.0254 82.7694 41.6537 79.0741 42.4047C75.3787 43.1556 71.7504 40.7474 70.9994 37.0521L84.4266 34.3301Z","fill":"#1A1A54"}}),_c('path',{attrs:{"d":"M78.3231 38.7089C76.3051 39.101 74.6944 40.1409 73.851 41.3327C75.3212 42.3694 77.2045 42.7883 79.074 42.4042C80.9435 42.0201 82.5197 40.8928 83.4955 39.3961C82.2599 38.57 80.3237 38.273 78.3231 38.7089Z","fill":"#DC2863"}}),_c('path',{attrs:{"d":"M82.0691 36.4223L74.0319 38.0784C73.7086 38.1554 73.3865 37.9794 73.2657 37.6733L72.8252 36.6851L82.6008 34.6967L82.6133 35.7528C82.6467 36.0934 82.4097 36.389 82.0691 36.4223Z","fill":"white"}}),_c('path',{attrs:{"d":"M20.2202 107.314C20.2202 107.314 29.4002 94.2345 30.4402 92.3145C31.2602 94.8045 37.5702 103.634 44.6002 106.934C51.6302 110.234 59.8602 111.624 62.2602 109.264L55.3402 128.764C55.3402 128.764 32.1102 128.884 20.2202 107.314Z","fill":"#0B85FF"}}),_c('path',{attrs:{"d":"M77.6198 62.0244L73.9998 63.1445L70.3598 64.1445C67.9198 64.8145 65.4698 65.4345 62.9798 66.0145L65.8198 64.8445C63.1898 67.6845 61.6198 71.2545 60.4298 75.4945C59.2524 80.1331 58.3343 84.8337 57.6798 89.5744C57.2422 92.3566 55.7173 94.8509 53.4406 96.5087C51.1639 98.1665 48.3219 98.8521 45.5398 98.4145C42.7577 97.9768 40.2634 96.452 38.6055 94.1753C36.9477 91.8986 36.2622 89.0566 36.6998 86.2745C36.8613 85.3225 37.1436 84.395 37.5398 83.5145C39.7792 78.3673 42.3237 73.3584 45.1598 68.5145C46.7667 65.8383 48.6323 63.3262 50.7298 61.0145C52.9274 58.5654 55.479 56.4587 58.2998 54.7645L59.5698 54.0145C60.0461 53.7364 60.5883 53.5914 61.1398 53.5945C63.4998 53.4645 65.8798 53.2844 68.2598 53.0644L71.8398 52.7645L75.3598 52.3445H75.5598C76.8129 52.1713 78.085 52.4795 79.1198 53.207C80.1546 53.9344 80.8753 55.0271 81.1365 56.2648C81.3978 57.5025 81.1802 58.7932 80.5276 59.8768C79.875 60.9604 78.836 61.7565 77.6198 62.1045V62.0244Z","fill":"#FFC298"}}),_c('path',{attrs:{"d":"M54.5302 115.505C54.4255 117.34 53.6029 119.061 52.2402 120.295C50.9902 121.295 49.9702 120.895 49.9702 119.295C50.0822 117.465 50.8953 115.75 52.2402 114.505C53.5102 113.455 54.5302 113.905 54.5302 115.505Z","fill":"#2470BC"}})]),_c('defs',[_c('clipPath',{attrs:{"id":"clip0_626:4"}},[_c('rect',{attrs:{"width":"128","height":"128","fill":"white","transform":"translate(0 0.764648)"}})])])]),_c('div',{staticClass:"verification-sidebar__title"},[_vm._v(" "+_vm._s(_vm.locale.sidebarTitle)+" ")]),_c('div',{staticClass:"verification-sidebar__subtitle"},[_vm._v(" "+_vm._s(_vm.locale.sidebarSubtitle)+" ")]),_c('div',{staticClass:"verification-sidebar__qr-wrapper"},[_c('img',{staticClass:"verification-sidebar__qr",attrs:{"src":_vm.qr}})]),_c('div',{staticClass:"verification-sidebar__open-link"},[_vm._v(" "+_vm._s(_vm.locale.sidebarLinkCaption)+" ")]),_c('a',{staticClass:"verification-sidebar__link",attrs:{"target":"_blank","href":_vm.link.url}},[_vm._v(" "+_vm._s(_vm.link.text)+" ")]),_c('button',{staticClass:"verification-sidebar__copy",class:{copied: _vm.copied},on:{"click":_vm.copyLink}},[_vm._v(" "+_vm._s(_vm.locale.copyButton)+" ")])])])}
var VerificationSidebarvue_type_template_id_94f7e54a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/popups/VerificationSidebar.vue?vue&type=template&id=94f7e54a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/popups/VerificationSidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var VerificationSidebarvue_type_script_lang_js_ = ({
  name: 'VerificationSidebar',
  props: ['qr', 'link', 'locale'],
  data: function data() {
    return {
      copied: false
    };
  },
  methods: {
    copyLink: function copyLink() {
      var _this = this;

      navigator.clipboard.writeText(this.link.url).then(function () {
        _this.copied = true;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/popups/VerificationSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var popups_VerificationSidebarvue_type_script_lang_js_ = (VerificationSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/popups/VerificationSidebar.vue?vue&type=style&index=0&id=94f7e54a&lang=sass&scoped=true&
var VerificationSidebarvue_type_style_index_0_id_94f7e54a_lang_sass_scoped_true_ = __webpack_require__("7909");

// CONCATENATED MODULE: ./src/popups/VerificationSidebar.vue






/* normalize component */

var VerificationSidebar_component = normalizeComponent(
  popups_VerificationSidebarvue_type_script_lang_js_,
  VerificationSidebarvue_type_template_id_94f7e54a_scoped_true_render,
  VerificationSidebarvue_type_template_id_94f7e54a_scoped_true_staticRenderFns,
  false,
  null,
  "94f7e54a",
  null
  
)

/* harmony default export */ var VerificationSidebar = (VerificationSidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/popups/VerificationPopup.vue?vue&type=script&lang=js&


function VerificationPopupvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function VerificationPopupvue_type_script_lang_js_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { VerificationPopupvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { VerificationPopupvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var STEPS = {
  UPLOAD: 1,
  EXAMPLE: 2,
  PROGRESS: 3
};
/* harmony default export */ var VerificationPopupvue_type_script_lang_js_ = ({
  name: "VerificationPopup",
  props: ['link', 'qr', 'example', 'locale', 'uploadUrl', 'uploadParamName', 'callbackFn', 'errorText', 'errorTitle', 'fileTypes'],
  components: {
    VerificationSidebar: VerificationSidebar,
    BasePopup: BasePopup
  },
  mixins: [notificationMixin],
  data: function data() {
    return {
      STEPS: STEPS,
      step: STEPS.UPLOAD,
      uploadProgress: 0,
      success: false
    };
  },
  computed: {
    circle: function circle() {
      return this.uploadProgress / 100 * 100 * Math.PI + ',9999';
    }
  },
  methods: {
    setUpload: function setUpload() {
      this.step = STEPS.UPLOAD;
      this.uploadProgress = 0;
      this.success = false;
    },
    setFinished: function setFinished() {
      this.step = STEPS.PROGRESS;
      this.success = true;
      this.uploadProgress = 100;
    },
    closePopup: function closePopup() {
      this.$emit('close');
    },
    selectFile: function selectFile() {
      this.$refs.fileInput.click();
    },
    uploadSelfie: function uploadSelfie(event) {
      var _this = this;

      return VerificationPopupvue_type_script_lang_js_asyncToGenerator( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var videoFile, formData, self;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                videoFile = event.target.files[0];
                _this.step = STEPS.PROGRESS;
                formData = new FormData();
                formData.append(_this.uploadParamName, videoFile);
                self = _this;

                _this.$ajaxWrapper({
                  xhr: function xhr() {
                    var xhr = new window.XMLHttpRequest();
                    xhr.upload.addEventListener("progress", function (evt) {
                      if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        percentComplete = parseInt(percentComplete * 100);

                        if (percentComplete !== 100) {
                          self.uploadProgress = percentComplete;
                        }
                      }
                    }, false);
                    return xhr;
                  },
                  url: _this.uploadUrl,
                  type: "POST",
                  data: formData,
                  contentType: false,
                  // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
                  processData: false,
                  formType: 'json'
                }, function (response) {
                  if (response.error[0]) {
                    _this.uploadProgress = 0;
                    _this.step = STEPS.UPLOAD;

                    _this.replaceNotification(response.error[0].value, 'error', response.title || '#title#');
                  } else {
                    _this.uploadProgress = 100;
                    _this.success = true;

                    _this.callbackFn(response);
                  }
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/popups/VerificationPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var popups_VerificationPopupvue_type_script_lang_js_ = (VerificationPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/popups/VerificationPopup.vue?vue&type=style&index=0&id=1c232196&lang=sass&scoped=true&
var VerificationPopupvue_type_style_index_0_id_1c232196_lang_sass_scoped_true_ = __webpack_require__("515e");

// CONCATENATED MODULE: ./src/popups/VerificationPopup.vue






/* normalize component */

var VerificationPopup_component = normalizeComponent(
  popups_VerificationPopupvue_type_script_lang_js_,
  VerificationPopupvue_type_template_id_1c232196_scoped_true_render,
  VerificationPopupvue_type_template_id_1c232196_scoped_true_staticRenderFns,
  false,
  null,
  "1c232196",
  null
  
)

/* harmony default export */ var VerificationPopup = (VerificationPopup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/Modals.vue?vue&type=script&lang=js&
function Modalsvue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Modalsvue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Modalsvue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { Modalsvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Modalsvue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Modalsvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* global ajaxLoader */

external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$ajaxWrapper = function (options, callback) {
  var _this = this;

  if (false) { var errors; }

  ajaxLoader(options, function (response) {
    if (response.error[0] && response.error[0].field === "error" && response.error[0].value === "error") {
      _this.$emit('close');

      return;
    }

    callback(response);
  });
};

/* harmony default export */ var Modalsvue_type_script_lang_js_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  i18n: i18n,
  name: 'Modals',
  components: {
    VerificationPopup: VerificationPopup,
    UniversalBindPopup: UniversalBindPopup,
    MessagePopup: MessagePopup,
    FeedbackPopup: FeedbackPopup
  },
  created: function created() {
    this.$i18n.locale = this.language;
  },
  data: function data() {
    return {
      messages: [],
      showBindPopup: false,
      verificationOptions: {
        locale: {
          sidebarTitle: '#locale.sidebarTitle#',
          sidebarSubtitle: '#locale.sidebarSubtitle#',
          sidebarLinkCaption: '#locale.sidebarLinkCaption#',
          uploadTitle: '#locale.uploadTitle#',
          uploadSubtitle: '#locale.uploadSubtitle#',
          uploadScript: '#locale.uploadScript#',
          uploadButton: '#locale.uploadButton#',
          uploadExample: '#locale.uploadExample#',
          exampleTitle: '#locale.exampleTitle#',
          exampleButton: '#locale.exampleButton#',
          uploadingProcess: '#locale.uploadingProcess#',
          uploadingFinished: '#locale.uploadingFinished#',
          doneButton: '#locale.doneButton#',
          uploadingFinishedSubtitle: '#locale.uploadingFinishedSubtitle#',
          copyButton: "#locale.copyButton#"
        },
        link: '',
        qr: '',
        example: '',
        uploadUrl: '',
        uploadParamName: '',
        callbackFn: function callbackFn() {},
        errorText: '',
        errorTitle: '',
        fileTypes: '.mp4,.mp4v,.mpg4,.3gp,.mov'
      },
      feedbackOptions: {
        skipLinks: false,
        feedbackLinks: [{
          name: 'Trustpilot',
          url: 'http://www.trustpilot.com',
          img: '/style/images/trustpilot.png'
        }]
      },
      showFeedbackPopup: false,
      showVerificationPopup: false
    };
  },
  methods: {
    ajaxLoaderWrapper: function ajaxLoaderWrapper(options, callback) {
      var _this2 = this;

      if (!options.url.match(/&phone=(\+?\d+)/) && !options.url.match(/&email=(.+)/) && !options.url.match(/&telegram=(.+)/)) {
        this.openBindPopup(options, callback);
        return;
      }

      this.$ajaxWrapper(options, function (response) {
        if (response.error[0]) {
          callback(response);
        } else {
          response.result.resend_url = options.url;
          response.result.url = options.url.split('?')[0] + '?' + response.result.url_param;

          _this2.openBindPopup(Modalsvue_type_script_lang_js_objectSpread(Modalsvue_type_script_lang_js_objectSpread({}, response.result), {}, {
            codeType: response.result.codeType || options.codeType
          }), callback);
        }
      });
    },
    showHtmlWindow: function showHtmlWindow(htmlContent) {
      var _this3 = this;

      var callbackFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var msgId = +new Date();
      var msgPromise = new Promise(function (resolve) {
        _this3.messages.push({
          id: msgId,
          options: {
            htmlContent: htmlContent,
            resolve: resolve
          }
        });
      });
      msgPromise.then(callbackFn).finally(function () {
        _this3.messages = _this3.messages.filter(function (i) {
          return i.id !== msgId;
        });
      });
    },
    promptWindow: function promptWindow(_ref) {
      var _this4 = this;

      var title = _ref.title,
          _ref$placeholder = _ref.placeholder,
          placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
          _ref$confirmButtonTex = _ref.confirmButtonText,
          confirmButtonText = _ref$confirmButtonTex === void 0 ? 'ОК' : _ref$confirmButtonTex,
          _ref$cancelButtonText = _ref.cancelButtonText,
          cancelButtonText = _ref$cancelButtonText === void 0 ? 'Отмена' : _ref$cancelButtonText;
      var msgId = +new Date();
      var msgPromise = new Promise(function (resolve, reject) {
        _this4.messages.push({
          id: msgId,
          options: {
            title: title,
            isInput: true,
            placeholder: placeholder,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText,
            resolve: resolve,
            reject: reject
          }
        });
      });
      return msgPromise.finally(function () {
        _this4.messages = _this4.messages.filter(function (i) {
          return i.id !== msgId;
        });
      });
    },
    confirmWindow: function confirmWindow(_ref2) {
      var _this5 = this;

      var title = _ref2.title,
          message = _ref2.message,
          _ref2$confirmButtonTe = _ref2.confirmButtonText,
          confirmButtonText = _ref2$confirmButtonTe === void 0 ? 'ОК' : _ref2$confirmButtonTe,
          _ref2$cancelButtonTex = _ref2.cancelButtonText,
          cancelButtonText = _ref2$cancelButtonTex === void 0 ? 'Отмена' : _ref2$cancelButtonTex;
      var callbackFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var msgId = +new Date();
      var msgPromise = new Promise(function (resolve, reject) {
        _this5.messages.push({
          id: msgId,
          options: {
            title: title,
            message: message,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText,
            resolve: resolve,
            reject: reject
          }
        });
      });
      return msgPromise.then(callbackFn).finally(function () {
        _this5.messages = _this5.messages.filter(function (i) {
          return i.id !== msgId;
        });
      });
    },
    showMessageWindow: function showMessageWindow(_ref3) {
      var _this6 = this;

      var title = _ref3.title,
          message = _ref3.message,
          _ref3$confirmButtonTe = _ref3.confirmButtonText,
          confirmButtonText = _ref3$confirmButtonTe === void 0 ? null : _ref3$confirmButtonTe;
      var callbackFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var msgId = +new Date();
      var msgPromise = new Promise(function (resolve) {
        _this6.messages.push({
          id: msgId,
          options: {
            title: title,
            message: message,
            confirmButtonText: confirmButtonText,
            resolve: resolve
          }
        });
      });
      return msgPromise.then(callbackFn).finally(function () {
        _this6.messages = _this6.messages.filter(function (i) {
          return i.id !== msgId;
        });
      });
    },
    openVerificationPopup: function openVerificationPopup() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        link: {
          url: 'https://payeer.com/SSD23SDa0',
          text: 'payeer.com/SSD23SDa0'
        },
        qr: 'https://via.placeholder.com/155x155',
        example: 'https://twick.com/bg_mp4.mp4',
        uploadUrl: 'http://localhost:8080',
        uploadParamName: 'video',
        callbackFn: function callbackFn() {
          alert(1);
        },
        errorText: 'Error Text',
        errorTitle: 'Error Title',
        finished: false,
        fileTypes: '.mp4,.mp4v,.mpg4,.3gp,.mov'
      };
      this.verificationOptions = Modalsvue_type_script_lang_js_objectSpread(Modalsvue_type_script_lang_js_objectSpread({}, this.verificationOptions), options);

      if (options.finished) {
        this.$refs.verification.setFinished();
      } else {
        this.$refs.verification.setUpload();
      }

      this.showVerificationPopup = true;
    },
    openFeedbackPopup: function openFeedbackPopup(_ref4) {
      var _ref4$links = _ref4.links,
          links = _ref4$links === void 0 ? [] : _ref4$links,
          _ref4$skipLinks = _ref4.skipLinks,
          skipLinks = _ref4$skipLinks === void 0 ? false : _ref4$skipLinks;
      this.feedbackOptions.feedbackLinks = links;
      this.feedbackOptions.skipLinks = skipLinks;
      this.showFeedbackPopup = true;
    },
    openBindPopup: function openBindPopup(params, callback) {
      var _this7 = this;

      this.showBindPopup = !this.showBindPopup;
      this.$nextTick(function () {
        _this7.$refs.bindPopup.loadInitialData(Modalsvue_type_script_lang_js_objectSpread(Modalsvue_type_script_lang_js_objectSpread({}, SAMLE_BIND_DATA), params), callback);
      });
    }
  }
}));
// CONCATENATED MODULE: ./src/Modals.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Modalsvue_type_script_lang_js_ = (Modalsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Modals.vue?vue&type=style&index=0&lang=sass&
var Modalsvue_type_style_index_0_lang_sass_ = __webpack_require__("647c");

// CONCATENATED MODULE: ./src/Modals.vue






/* normalize component */

var Modals_component = normalizeComponent(
  src_Modalsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Modals = (Modals_component.exports);
// CONCATENATED MODULE: ./src/main.js



if (false) {}

var managePopups = {};
function mountPopups(selector) {
  var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ru';

  // если не указана точка маунта, добавляем div в конец body и маунтим к нему
  if (!selector) {
    var div = document.createElement('div');
    div.setAttribute("id", "payeer-modals");
    document.body.appendChild(div);
  }

  var mountPoint = selector || '#payeer-modals';
  managePopups = new Modals({
    data: {
      language: language
    }
  }).$mount(mountPoint);
} // В режиме разработки yarn serve автоматически подключаем попапы

if (false) { var main_div; }
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
});
//# sourceMappingURL=payeermodals.umd.js.map