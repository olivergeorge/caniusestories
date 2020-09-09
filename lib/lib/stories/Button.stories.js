"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Small = exports.Large = exports.Secondary = exports.Primary = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("./Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Example/Button',
  component: _Button.Button,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Button.Button, args);
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  primary: true,
  label: 'Button'
};
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  label: 'Button'
};
var Large = Template.bind({});
exports.Large = Large;
Large.args = {
  size: 'large',
  label: 'Button'
};
var Small = Template.bind({});
exports.Small = Small;
Small.args = {
  size: 'small',
  label: 'Button'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yaWVzL0J1dHRvbi5zdG9yaWVzLmpzIl0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiQnV0dG9uIiwiYXJnVHlwZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb250cm9sIiwiVGVtcGxhdGUiLCJhcmdzIiwiUHJpbWFyeSIsImJpbmQiLCJwcmltYXJ5IiwibGFiZWwiLCJTZWNvbmRhcnkiLCJMYXJnZSIsInNpemUiLCJTbWFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7O2VBRWU7QUFDYkEsRUFBQUEsS0FBSyxFQUFFLGdCQURNO0FBRWJDLEVBQUFBLFNBQVMsRUFBRUMsY0FGRTtBQUdiQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsZUFBZSxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBRFQ7QUFIRyxDOzs7QUFRZixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFEO0FBQUEsc0JBQVUsZ0NBQUMsY0FBRCxFQUFZQSxJQUFaLENBQVY7QUFBQSxDQUFqQjs7QUFFTyxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBaEI7O0FBQ1BELE9BQU8sQ0FBQ0QsSUFBUixHQUFlO0FBQ2JHLEVBQUFBLE9BQU8sRUFBRSxJQURJO0FBRWJDLEVBQUFBLEtBQUssRUFBRTtBQUZNLENBQWY7QUFLTyxJQUFNQyxTQUFTLEdBQUdOLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBbEI7O0FBQ1BHLFNBQVMsQ0FBQ0wsSUFBVixHQUFpQjtBQUNmSSxFQUFBQSxLQUFLLEVBQUU7QUFEUSxDQUFqQjtBQUlPLElBQU1FLEtBQUssR0FBR1AsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFkOztBQUNQSSxLQUFLLENBQUNOLElBQU4sR0FBYTtBQUNYTyxFQUFBQSxJQUFJLEVBQUUsT0FESztBQUVYSCxFQUFBQSxLQUFLLEVBQUU7QUFGSSxDQUFiO0FBS08sSUFBTUksS0FBSyxHQUFHVCxRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWQ7O0FBQ1BNLEtBQUssQ0FBQ1IsSUFBTixHQUFhO0FBQ1hPLEVBQUFBLElBQUksRUFBRSxPQURLO0FBRVhILEVBQUFBLEtBQUssRUFBRTtBQUZJLENBQWIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdFeGFtcGxlL0J1dHRvbicsXG4gIGNvbXBvbmVudDogQnV0dG9uLFxuICBhcmdUeXBlczoge1xuICAgIGJhY2tncm91bmRDb2xvcjogeyBjb250cm9sOiAnY29sb3InIH0sXG4gIH0sXG59O1xuXG5jb25zdCBUZW1wbGF0ZSA9IChhcmdzKSA9PiA8QnV0dG9uIHsuLi5hcmdzfSAvPjtcblxuZXhwb3J0IGNvbnN0IFByaW1hcnkgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcblByaW1hcnkuYXJncyA9IHtcbiAgcHJpbWFyeTogdHJ1ZSxcbiAgbGFiZWw6ICdCdXR0b24nLFxufTtcblxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeSA9IFRlbXBsYXRlLmJpbmQoe30pO1xuU2Vjb25kYXJ5LmFyZ3MgPSB7XG4gIGxhYmVsOiAnQnV0dG9uJyxcbn07XG5cbmV4cG9ydCBjb25zdCBMYXJnZSA9IFRlbXBsYXRlLmJpbmQoe30pO1xuTGFyZ2UuYXJncyA9IHtcbiAgc2l6ZTogJ2xhcmdlJyxcbiAgbGFiZWw6ICdCdXR0b24nLFxufTtcblxuZXhwb3J0IGNvbnN0IFNtYWxsID0gVGVtcGxhdGUuYmluZCh7fSk7XG5TbWFsbC5hcmdzID0ge1xuICBzaXplOiAnc21hbGwnLFxuICBsYWJlbDogJ0J1dHRvbicsXG59O1xuIl19