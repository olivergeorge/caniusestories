"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Header = require("./Header");

require("./page.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Page = function Page(_ref) {
  var user = _ref.user,
      onLogin = _ref.onLogin,
      onLogout = _ref.onLogout,
      onCreateAccount = _ref.onCreateAccount;
  return /*#__PURE__*/_react["default"].createElement("article", null, /*#__PURE__*/_react["default"].createElement(_Header.Header, {
    user: user,
    onLogin: onLogin,
    onLogout: onLogout,
    onCreateAccount: onCreateAccount
  }), /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Pages in Storybook"), /*#__PURE__*/_react["default"].createElement("p", null, "We recommend building UIs with a", ' ', /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://componentdriven.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "component-driven")), ' ', "process starting with atomic components and ending with pages."), /*#__PURE__*/_react["default"].createElement("p", null, "Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, "Use a higher-level connected component. Storybook helps you compose such data from the \"args\" of child component stories"), /*#__PURE__*/_react["default"].createElement("li", null, "Assemble data in the page component from your services. You can mock these services out using Storybook.")), /*#__PURE__*/_react["default"].createElement("p", null, "Get a guided tutorial on component-driven development at", ' ', /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.learnstorybook.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn Storybook"), ". Read more in the", ' ', /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://storybook.js.org/docs",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "docs"), "."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tip-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tip"
  }, "Tip"), " Adjust the width of the canvas with the", ' ', /*#__PURE__*/_react["default"].createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",
    id: "a",
    fill: "#999"
  }))), "Viewports addon in the toolbar")));
};

exports.Page = Page;
Page.propTypes = {
  user: _propTypes["default"].shape({}),
  onLogin: _propTypes["default"].func.isRequired,
  onLogout: _propTypes["default"].func.isRequired,
  onCreateAccount: _propTypes["default"].func.isRequired
};
Page.defaultProps = {
  user: null
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yaWVzL1BhZ2UuanMiXSwibmFtZXMiOlsiUGFnZSIsInVzZXIiLCJvbkxvZ2luIiwib25Mb2dvdXQiLCJvbkNyZWF0ZUFjY291bnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLE9BQVQsUUFBU0EsT0FBVDtBQUFBLE1BQWtCQyxRQUFsQixRQUFrQkEsUUFBbEI7QUFBQSxNQUE0QkMsZUFBNUIsUUFBNEJBLGVBQTVCO0FBQUEsc0JBQ2xCLDhEQUNFLGdDQUFDLGNBQUQ7QUFBUSxJQUFBLElBQUksRUFBRUgsSUFBZDtBQUFvQixJQUFBLE9BQU8sRUFBRUMsT0FBN0I7QUFBc0MsSUFBQSxRQUFRLEVBQUVDLFFBQWhEO0FBQTBELElBQUEsZUFBZSxFQUFFQztBQUEzRSxJQURGLGVBR0UsOERBQ0UsaUVBREYsZUFFRSwrRUFDbUMsR0FEbkMsZUFFRTtBQUFHLElBQUEsSUFBSSxFQUFDLDZCQUFSO0FBQXNDLElBQUEsTUFBTSxFQUFDLFFBQTdDO0FBQXNELElBQUEsR0FBRyxFQUFDO0FBQTFELGtCQUNFLG1FQURGLENBRkYsRUFJTyxHQUpQLG1FQUZGLGVBU0UsZ1BBVEYsZUFjRSx5REFDRSx5S0FERixlQUtFLHVKQUxGLENBZEYsZUF3QkUsdUdBQzJELEdBRDNELGVBRUU7QUFBRyxJQUFBLElBQUksRUFBQyxnQ0FBUjtBQUF5QyxJQUFBLE1BQU0sRUFBQyxRQUFoRDtBQUF5RCxJQUFBLEdBQUcsRUFBQztBQUE3RCx1QkFGRix3QkFLcUIsR0FMckIsZUFNRTtBQUFHLElBQUEsSUFBSSxFQUFDLCtCQUFSO0FBQXdDLElBQUEsTUFBTSxFQUFDLFFBQS9DO0FBQXdELElBQUEsR0FBRyxFQUFDO0FBQTVELFlBTkYsTUF4QkYsZUFtQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQU0sSUFBQSxTQUFTLEVBQUM7QUFBaEIsV0FERiw4Q0FDMkUsR0FEM0UsZUFFRTtBQUFLLElBQUEsS0FBSyxFQUFDLElBQVg7QUFBZ0IsSUFBQSxNQUFNLEVBQUMsSUFBdkI7QUFBNEIsSUFBQSxPQUFPLEVBQUMsV0FBcEM7QUFBZ0QsSUFBQSxLQUFLLEVBQUM7QUFBdEQsa0JBQ0U7QUFBRyxJQUFBLElBQUksRUFBQyxNQUFSO0FBQWUsSUFBQSxRQUFRLEVBQUM7QUFBeEIsa0JBQ0U7QUFDRSxJQUFBLENBQUMsRUFBQyxzT0FESjtBQUVFLElBQUEsRUFBRSxFQUFDLEdBRkw7QUFHRSxJQUFBLElBQUksRUFBQztBQUhQLElBREYsQ0FERixDQUZGLG1DQW5DRixDQUhGLENBRGtCO0FBQUEsQ0FBYjs7O0FBdURQSixJQUFJLENBQUNLLFNBQUwsR0FBaUI7QUFDZkosRUFBQUEsSUFBSSxFQUFFSyxzQkFBVUMsS0FBVixDQUFnQixFQUFoQixDQURTO0FBRWZMLEVBQUFBLE9BQU8sRUFBRUksc0JBQVVFLElBQVYsQ0FBZUMsVUFGVDtBQUdmTixFQUFBQSxRQUFRLEVBQUVHLHNCQUFVRSxJQUFWLENBQWVDLFVBSFY7QUFJZkwsRUFBQUEsZUFBZSxFQUFFRSxzQkFBVUUsSUFBVixDQUFlQztBQUpqQixDQUFqQjtBQU9BVCxJQUFJLENBQUNVLFlBQUwsR0FBb0I7QUFDbEJULEVBQUFBLElBQUksRUFBRTtBQURZLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCAnLi9wYWdlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBQYWdlID0gKHsgdXNlciwgb25Mb2dpbiwgb25Mb2dvdXQsIG9uQ3JlYXRlQWNjb3VudCB9KSA9PiAoXG4gIDxhcnRpY2xlPlxuICAgIDxIZWFkZXIgdXNlcj17dXNlcn0gb25Mb2dpbj17b25Mb2dpbn0gb25Mb2dvdXQ9e29uTG9nb3V0fSBvbkNyZWF0ZUFjY291bnQ9e29uQ3JlYXRlQWNjb3VudH0gLz5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPlBhZ2VzIGluIFN0b3J5Ym9vazwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgV2UgcmVjb21tZW5kIGJ1aWxkaW5nIFVJcyB3aXRoIGF7JyAnfVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jb21wb25lbnRkcml2ZW4ub3JnXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgIDxzdHJvbmc+Y29tcG9uZW50LWRyaXZlbjwvc3Ryb25nPlxuICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgcHJvY2VzcyBzdGFydGluZyB3aXRoIGF0b21pYyBjb21wb25lbnRzIGFuZCBlbmRpbmcgd2l0aCBwYWdlcy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBSZW5kZXIgcGFnZXMgd2l0aCBtb2NrIGRhdGEuIFRoaXMgbWFrZXMgaXQgZWFzeSB0byBidWlsZCBhbmQgcmV2aWV3IHBhZ2Ugc3RhdGVzIHdpdGhvdXRcbiAgICAgICAgbmVlZGluZyB0byBuYXZpZ2F0ZSB0byB0aGVtIGluIHlvdXIgYXBwLiBIZXJlIGFyZSBzb21lIGhhbmR5IHBhdHRlcm5zIGZvciBtYW5hZ2luZyBwYWdlIGRhdGFcbiAgICAgICAgaW4gU3Rvcnlib29rOlxuICAgICAgPC9wPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgVXNlIGEgaGlnaGVyLWxldmVsIGNvbm5lY3RlZCBjb21wb25lbnQuIFN0b3J5Ym9vayBoZWxwcyB5b3UgY29tcG9zZSBzdWNoIGRhdGEgZnJvbSB0aGVcbiAgICAgICAgICBcImFyZ3NcIiBvZiBjaGlsZCBjb21wb25lbnQgc3Rvcmllc1xuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgQXNzZW1ibGUgZGF0YSBpbiB0aGUgcGFnZSBjb21wb25lbnQgZnJvbSB5b3VyIHNlcnZpY2VzLiBZb3UgY2FuIG1vY2sgdGhlc2Ugc2VydmljZXMgb3V0XG4gICAgICAgICAgdXNpbmcgU3Rvcnlib29rLlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxwPlxuICAgICAgICBHZXQgYSBndWlkZWQgdHV0b3JpYWwgb24gY29tcG9uZW50LWRyaXZlbiBkZXZlbG9wbWVudCBhdHsnICd9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5sZWFybnN0b3J5Ym9vay5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgTGVhcm4gU3Rvcnlib29rXG4gICAgICAgIDwvYT5cbiAgICAgICAgLiBSZWFkIG1vcmUgaW4gdGhleycgJ31cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgIGRvY3NcbiAgICAgICAgPC9hPlxuICAgICAgICAuXG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpcC13cmFwcGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpcFwiPlRpcDwvc3Bhbj4gQWRqdXN0IHRoZSB3aWR0aCBvZiB0aGUgY2FudmFzIHdpdGggdGhleycgJ31cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDEyIDEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgIDxnIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTTEuNSA1LjJoNC44Yy4zIDAgLjUuMi41LjR2NS4xYy0uMS4yLS4zLjMtLjQuM0gxLjRhLjUuNSAwIDAxLS41LS40VjUuN2MwLS4zLjItLjUuNS0uNXptMC0yLjFoNi45Yy4zIDAgLjUuMi41LjR2N2EuNS41IDAgMDEtMSAwVjRIMS41YS41LjUgMCAwMTAtMXptMC0yLjFoOWMuMyAwIC41LjIuNS40djkuMWEuNS41IDAgMDEtMSAwVjJIMS41YS41LjUgMCAwMTAtMXptNC4zIDUuMkgyVjEwaDMuOFY2LjJ6XCJcbiAgICAgICAgICAgICAgaWQ9XCJhXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiM5OTlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICBWaWV3cG9ydHMgYWRkb24gaW4gdGhlIHRvb2xiYXJcbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgPC9hcnRpY2xlPlxuKTtcblBhZ2UucHJvcFR5cGVzID0ge1xuICB1c2VyOiBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICBvbkxvZ2luOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkxvZ291dDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25DcmVhdGVBY2NvdW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuUGFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHVzZXI6IG51bGwsXG59O1xuIl19