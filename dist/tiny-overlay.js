(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tinyOverlay"] = factory();
	else
		root["tinyOverlay"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict'

	var tinyOverlay

	function createDom () {
	  if (tinyOverlay) {
	    return tinyOverlay
	  }

	  tinyOverlay = document.createElement('div')
	  var style = tinyOverlay.style
	  style.width = '100%'
	  style.height = '100%'
	  style.opacity = 0.5
	  style.position = 'fixed'
	  style.left = 0
	  style.top = 0
	  style.backgroundColor = 'hsla(187, 100%, 42%, 0.12)'
	  document.body.appendChild(tinyOverlay)
	  return tinyOverlay
	}

	function close () {
	  if (tinyOverlay) {
	    document.body.removeChild(tinyOverlay)
	    tinyOverlay = null
	  }
	}

	function maybeDefer (fn, timeoutMs) {
	  if (timeoutMs) {
	    setTimeout(fn, timeoutMs)
	  } else {
	    fn()
	  }
	}

	var tinyOverlayApi = {
	  show: createDom,
	  hide: function (timeoutMs) {
	    maybeDefer(close, timeoutMs)
	  }
	}

	module.exports = tinyOverlayApi


/***/ }
/******/ ])
});
;