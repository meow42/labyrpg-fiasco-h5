/*! For license information please see 4262.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[4262],{"691":function(o,i,e){e.d(i,{"a":function(){return createCommonjsModule},"b":function(){return a},"c":function(){return s},"g":function(){return getDefaultExportFromCjs}});var n=e(1002),a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function createCommonjsModule(o,i,e){return o(e={"path":i,"exports":{},"require":function require(o,i){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},e.exports),e.exports}var s=createCommonjsModule((function(o){!function(){var i={}.hasOwnProperty;function r(){for(var o=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var s=(0,n.Z)(a);if("string"===s||"number"===s)o.push(a);else if(Array.isArray(a)){if(a.length){var h=r.apply(null,a);h&&o.push(h)}}else if("object"===s)if(a.toString===Object.prototype.toString)for(var l in a)i.call(a,l)&&a[l]&&o.push(l);else o.push(a.toString())}}return o.join(" ")}o.exports?(r.default=r,o.exports=r):window.classNames=r}()}))},"4262":function(o,i,e){e.r(i),e.d(i,{"taro_image_core":function(){return s}});var n=e(5597),a=e(691);e.e(37).then(e.t.bind(e,37,23));var s=function(){function t(o){(0,n.r)(this,o),this.onLoad=(0,n.c)(this,"load",7),this.onError=(0,n.c)(this,"error",7),this.mode="scaleToFill",this.lazyLoad=!1,this.nativeProps={},this.aspectFillMode="width"}return t.prototype.componentDidLoad=function(){var o=this;if(this.lazyLoad){var i=new IntersectionObserver((function(e){e[e.length-1].isIntersecting&&(i.unobserve(o.imgRef),o.imgRef.src=o.src)}),{"rootMargin":"300px 0px"});i.observe(this.imgRef)}},t.prototype.imageOnLoad=function(){var o=this.imgRef,i=o.width,e=o.height,n=o.naturalWidth,a=o.naturalHeight;this.onLoad.emit({"width":i,"height":e}),this.aspectFillMode=n>a?"width":"height"},t.prototype.imageOnError=function(){this.onError.emit()},t.prototype.render=function(){var o,i=this,e=this,s=e.src,h=e.mode,l=void 0===h?"scaleToFill":h,d=e.lazyLoad,m=void 0!==d&&d,g=e.aspectFillMode,u=void 0===g?"width":g,c=e.imageOnLoad,f=e.imageOnError,p=e.nativeProps,_=(0,a.c)({"taro-img__widthfix":"widthFix"===l}),b=(0,a.c)("taro-img__mode-"+l.toLowerCase().replace(/\s/g,""),((o={})["taro-img__mode-aspectfill--"+u]="aspectFill"===l,o));return(0,n.h)(n.H,{"class":_},m?(0,n.h)("img",Object.assign({"ref":function ref(o){return i.imgRef=o},"class":b,"onLoad":c.bind(this),"onError":f.bind(this)},p)):(0,n.h)("img",Object.assign({"ref":function ref(o){return i.imgRef=o},"class":b,"src":s,"onLoad":c.bind(this),"onError":f.bind(this)},p)))},t}();s.style='img[src=""]{opacity:0}taro-image-core{display:inline-block;overflow:hidden;position:relative;width:auto;height:auto;font-size:0}.taro-img.taro-img__widthfix{height:100%}.taro-img__mode-scaletofill{width:100%;height:100%}.taro-img__mode-aspectfit{max-width:100%;max-height:100%}.taro-img__mode-aspectfill{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.taro-img__mode-aspectfill--width{min-width:100%;height:100%}.taro-img__mode-aspectfill--height{width:100%;min-height:100%}.taro-img__mode-widthfix{width:100%}.taro-img__mode-heightfix{height:100%}.taro-img__mode-top{width:100%}.taro-img__mode-bottom{position:absolute;bottom:0;width:100%}.taro-img__mode-left{height:100%}.taro-img__mode-right{position:absolute;right:0;height:100%}.taro-img__mode-topright{position:absolute;right:0}.taro-img__mode-bottomleft{position:absolute;bottom:0}.taro-img__mode-bottomright{position:absolute;right:0;bottom:0}'}}]);