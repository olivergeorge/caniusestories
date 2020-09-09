"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoggedOut = exports.LoggedIn = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Page = require("./Page");

var HeaderStories = _interopRequireWildcard(require("./Header.stories"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Example/Page',
  component: _Page.Page
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Page.Page, args);
};

var LoggedIn = Template.bind({});
exports.LoggedIn = LoggedIn;
LoggedIn.args = _objectSpread({}, HeaderStories.LoggedIn.args);
var LoggedOut = Template.bind({});
exports.LoggedOut = LoggedOut;
LoggedOut.args = _objectSpread({}, HeaderStories.LoggedOut.args);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yaWVzL1BhZ2Uuc3Rvcmllcy5qcyJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIlBhZ2UiLCJUZW1wbGF0ZSIsImFyZ3MiLCJMb2dnZWRJbiIsImJpbmQiLCJIZWFkZXJTdG9yaWVzIiwiTG9nZ2VkT3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7ZUFFZTtBQUNiQSxFQUFBQSxLQUFLLEVBQUUsY0FETTtBQUViQyxFQUFBQSxTQUFTLEVBQUVDO0FBRkUsQzs7O0FBS2YsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLHNCQUFVLGdDQUFDLFVBQUQsRUFBVUEsSUFBVixDQUFWO0FBQUEsQ0FBakI7O0FBRU8sSUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWpCOztBQUNQRCxRQUFRLENBQUNELElBQVQscUJBQ0tHLGFBQWEsQ0FBQ0YsUUFBZCxDQUF1QkQsSUFENUI7QUFJTyxJQUFNSSxTQUFTLEdBQUdMLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBbEI7O0FBQ1BFLFNBQVMsQ0FBQ0osSUFBVixxQkFDS0csYUFBYSxDQUFDQyxTQUFkLENBQXdCSixJQUQ3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuL1BhZ2UnO1xuaW1wb3J0ICogYXMgSGVhZGVyU3RvcmllcyBmcm9tICcuL0hlYWRlci5zdG9yaWVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ0V4YW1wbGUvUGFnZScsXG4gIGNvbXBvbmVudDogUGFnZSxcbn07XG5cbmNvbnN0IFRlbXBsYXRlID0gKGFyZ3MpID0+IDxQYWdlIHsuLi5hcmdzfSAvPjtcblxuZXhwb3J0IGNvbnN0IExvZ2dlZEluID0gVGVtcGxhdGUuYmluZCh7fSk7XG5Mb2dnZWRJbi5hcmdzID0ge1xuICAuLi5IZWFkZXJTdG9yaWVzLkxvZ2dlZEluLmFyZ3MsXG59O1xuXG5leHBvcnQgY29uc3QgTG9nZ2VkT3V0ID0gVGVtcGxhdGUuYmluZCh7fSk7XG5Mb2dnZWRPdXQuYXJncyA9IHtcbiAgLi4uSGVhZGVyU3Rvcmllcy5Mb2dnZWRPdXQuYXJncyxcbn07XG4iXX0=