webpackJsonp([1],{

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _math = __webpack_require__(130);\n\nvar _math2 = _interopRequireDefault(_math);\n\n__webpack_require__(131);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nconsole.log((0, _math2.default)(5, 5));\n\nvar button = document.createElement('button');\nbutton.innerText = 'Click';\n\nbutton.onclick = function () {\n  console.log('Hello World YO');\n};\n\nvar obj = {\n  name: 'Sau',\n  rank: 1\n};\nvar xyz = function xyz() {\n  var name = obj.name,\n      rank = obj.rank;\n\n\n  console.log(name, rank);\n};\n\nxyz();\n\nvar MyClass = function MyClass() {\n  _classCallCheck(this, MyClass);\n\n  this.xyz = function () {\n    console.log('Arrow Func in Class', arguments.length <= 0 ? undefined : arguments[0]);\n  };\n\n  console.log('Hello Class FU');\n};\n\nnew MyClass().xyz([0, 0, 7]);\n\ndocument.body.appendChild(button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzPzViMTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX21hdGggPSByZXF1aXJlKCcuL21hdGgnKTtcblxudmFyIF9tYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hdGgpO1xuXG5yZXF1aXJlKCcuL2ltZ192aWV3ZXInKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuY29uc29sZS5sb2coKDAsIF9tYXRoMi5kZWZhdWx0KSg1LCA1KSk7XG5cbnZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmJ1dHRvbi5pbm5lclRleHQgPSAnQ2xpY2snO1xuXG5idXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coJ0hlbGxvIFdvcmxkIFlPJyk7XG59O1xuXG52YXIgb2JqID0ge1xuICBuYW1lOiAnU2F1JyxcbiAgcmFuazogMVxufTtcbnZhciB4eXogPSBmdW5jdGlvbiB4eXooKSB7XG4gIHZhciBuYW1lID0gb2JqLm5hbWUsXG4gICAgICByYW5rID0gb2JqLnJhbms7XG5cblxuICBjb25zb2xlLmxvZyhuYW1lLCByYW5rKTtcbn07XG5cbnh5eigpO1xuXG52YXIgTXlDbGFzcyA9IGZ1bmN0aW9uIE15Q2xhc3MoKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNeUNsYXNzKTtcblxuICB0aGlzLnh5eiA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnQXJyb3cgRnVuYyBpbiBDbGFzcycsIGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXSk7XG4gIH07XG5cbiAgY29uc29sZS5sb2coJ0hlbGxvIENsYXNzIEZVJyk7XG59O1xuXG5uZXcgTXlDbGFzcygpLnh5eihbMCwgMCwgN10pO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///129\n");

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar add = function add(a, b) {\n  return a + b;\n};\nexports.default = add;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21hdGguanM/ODk1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBhZGQgPSBmdW5jdGlvbiBhZGQoYSwgYikge1xuICByZXR1cm4gYSArIGI7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21hdGguanNcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///130\n");

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(132);\n\nvar _ = __webpack_require__(133);\n\nvar _2 = _interopRequireDefault(_);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar image = document.createElement('img');\n\nimage.src = _2.default;\n\ndocument.body.appendChild(image);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2ltZ192aWV3ZXIuanM/MWRmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4vY3NzL2ltZ192aWV3ZXIuY3NzJyk7XG5cbnZhciBfID0gcmVxdWlyZSgnLi9pbWcvMTUuanBnJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG5pbWFnZS5zcmMgPSBfMi5kZWZhdWx0O1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltYWdlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWdfdmlld2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///131\n");

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbWdfdmlld2VyLmNzcz80Nzc5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL2ltZ192aWV3ZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///132\n");

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2b63853160a6d812db26c551ae9245ae.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy8xNS5qcGc/OWJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyYjYzODUzMTYwYTZkODEyZGIyNmM1NTFhZTkyNDVhZS5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvMTUuanBnXG4vLyBtb2R1bGUgaWQgPSAxMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///133\n");

/***/ })

},[129]);