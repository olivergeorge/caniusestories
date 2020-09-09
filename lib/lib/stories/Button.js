"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var primary = _ref.primary,
      backgroundColor = _ref.backgroundColor,
      size = _ref.size,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ["primary", "backgroundColor", "size", "label"]);

  var mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    type: "button",
    className: ['storybook-button', "storybook-button--".concat(size), mode].join(' '),
    style: backgroundColor && {
      backgroundColor: backgroundColor
    }
  }, props), label);
};

exports.Button = Button;
Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: _propTypes["default"].bool,

  /**
   * What background color to use
   */
  backgroundColor: _propTypes["default"].string,

  /**
   * How large should the button be?
   */
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),

  /**
   * Button contents
   */
  label: _propTypes["default"].string.isRequired,

  /**
   * Optional click handler
   */
  onClick: _propTypes["default"].func
};
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yaWVzL0J1dHRvbi5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJwcmltYXJ5IiwiYmFja2dyb3VuZENvbG9yIiwic2l6ZSIsImxhYmVsIiwicHJvcHMiLCJtb2RlIiwiam9pbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJvbkNsaWNrIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7OztBQUdPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXlEO0FBQUEsTUFBdERDLE9BQXNELFFBQXREQSxPQUFzRDtBQUFBLE1BQTdDQyxlQUE2QyxRQUE3Q0EsZUFBNkM7QUFBQSxNQUE1QkMsSUFBNEIsUUFBNUJBLElBQTRCO0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQVpDLEtBQVk7O0FBQzdFLE1BQU1DLElBQUksR0FBR0wsT0FBTyxHQUFHLDJCQUFILEdBQWlDLDZCQUFyRDtBQUNBLHNCQUNFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLElBQUEsU0FBUyxFQUFFLENBQUMsa0JBQUQsOEJBQTBDRSxJQUExQyxHQUFrREcsSUFBbEQsRUFBd0RDLElBQXhELENBQTZELEdBQTdELENBRmI7QUFHRSxJQUFBLEtBQUssRUFBRUwsZUFBZSxJQUFJO0FBQUVBLE1BQUFBLGVBQWUsRUFBZkE7QUFBRjtBQUg1QixLQUlNRyxLQUpOLEdBTUdELEtBTkgsQ0FERjtBQVVELENBWk07OztBQWNQSixNQUFNLENBQUNRLFNBQVAsR0FBbUI7QUFDakI7OztBQUdBUCxFQUFBQSxPQUFPLEVBQUVRLHNCQUFVQyxJQUpGOztBQUtqQjs7O0FBR0FSLEVBQUFBLGVBQWUsRUFBRU8sc0JBQVVFLE1BUlY7O0FBU2pCOzs7QUFHQVIsRUFBQUEsSUFBSSxFQUFFTSxzQkFBVUcsS0FBVixDQUFnQixDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLE9BQXBCLENBQWhCLENBWlc7O0FBYWpCOzs7QUFHQVIsRUFBQUEsS0FBSyxFQUFFSyxzQkFBVUUsTUFBVixDQUFpQkUsVUFoQlA7O0FBaUJqQjs7O0FBR0FDLEVBQUFBLE9BQU8sRUFBRUwsc0JBQVVNO0FBcEJGLENBQW5CO0FBdUJBZixNQUFNLENBQUNnQixZQUFQLEdBQXNCO0FBQ3BCZCxFQUFBQSxlQUFlLEVBQUUsSUFERztBQUVwQkQsRUFBQUEsT0FBTyxFQUFFLEtBRlc7QUFHcEJFLEVBQUFBLElBQUksRUFBRSxRQUhjO0FBSXBCVyxFQUFBQSxPQUFPLEVBQUVHO0FBSlcsQ0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnLi9idXR0b24uY3NzJztcblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHsgcHJpbWFyeSwgYmFja2dyb3VuZENvbG9yLCBzaXplLCBsYWJlbCwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBtb2RlID0gcHJpbWFyeSA/ICdzdG9yeWJvb2stYnV0dG9uLS1wcmltYXJ5JyA6ICdzdG9yeWJvb2stYnV0dG9uLS1zZWNvbmRhcnknO1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3NOYW1lPXtbJ3N0b3J5Ym9vay1idXR0b24nLCBgc3Rvcnlib29rLWJ1dHRvbi0tJHtzaXplfWAsIG1vZGVdLmpvaW4oJyAnKX1cbiAgICAgIHN0eWxlPXtiYWNrZ3JvdW5kQ29sb3IgJiYgeyBiYWNrZ3JvdW5kQ29sb3IgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogSXMgdGhpcyB0aGUgcHJpbmNpcGFsIGNhbGwgdG8gYWN0aW9uIG9uIHRoZSBwYWdlP1xuICAgKi9cbiAgcHJpbWFyeTogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBXaGF0IGJhY2tncm91bmQgY29sb3IgdG8gdXNlXG4gICAqL1xuICBiYWNrZ3JvdW5kQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBIb3cgbGFyZ2Ugc2hvdWxkIHRoZSBidXR0b24gYmU/XG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSksXG4gIC8qKlxuICAgKiBCdXR0b24gY29udGVudHNcbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBPcHRpb25hbCBjbGljayBoYW5kbGVyXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogbnVsbCxcbiAgcHJpbWFyeTogZmFsc2UsXG4gIHNpemU6ICdtZWRpdW0nLFxuICBvbkNsaWNrOiB1bmRlZmluZWQsXG59O1xuIl19