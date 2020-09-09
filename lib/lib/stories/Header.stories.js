"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoggedOut = exports.LoggedIn = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = require("./Header");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Example/Header',
  component: _Header.Header
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Header.Header, args);
};

var LoggedIn = Template.bind({});
exports.LoggedIn = LoggedIn;
LoggedIn.args = {
  user: {}
};
var LoggedOut = Template.bind({});
exports.LoggedOut = LoggedOut;
LoggedOut.args = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yaWVzL0hlYWRlci5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiSGVhZGVyIiwiVGVtcGxhdGUiLCJhcmdzIiwiTG9nZ2VkSW4iLCJiaW5kIiwidXNlciIsIkxvZ2dlZE91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7O2VBRWU7QUFDYkEsRUFBQUEsS0FBSyxFQUFFLGdCQURNO0FBRWJDLEVBQUFBLFNBQVMsRUFBRUM7QUFGRSxDOzs7QUFLZixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFEO0FBQUEsc0JBQVUsZ0NBQUMsY0FBRCxFQUFZQSxJQUFaLENBQVY7QUFBQSxDQUFqQjs7QUFFTyxJQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBakI7O0FBQ1BELFFBQVEsQ0FBQ0QsSUFBVCxHQUFnQjtBQUNkRyxFQUFBQSxJQUFJLEVBQUU7QUFEUSxDQUFoQjtBQUlPLElBQU1DLFNBQVMsR0FBR0wsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFsQjs7QUFDUEUsU0FBUyxDQUFDSixJQUFWLEdBQWlCLEVBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9IZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnRXhhbXBsZS9IZWFkZXInLFxuICBjb21wb25lbnQ6IEhlYWRlcixcbn07XG5cbmNvbnN0IFRlbXBsYXRlID0gKGFyZ3MpID0+IDxIZWFkZXIgey4uLmFyZ3N9IC8+O1xuXG5leHBvcnQgY29uc3QgTG9nZ2VkSW4gPSBUZW1wbGF0ZS5iaW5kKHt9KTtcbkxvZ2dlZEluLmFyZ3MgPSB7XG4gIHVzZXI6IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IExvZ2dlZE91dCA9IFRlbXBsYXRlLmJpbmQoe30pO1xuTG9nZ2VkT3V0LmFyZ3MgPSB7fTtcbiJdfQ==