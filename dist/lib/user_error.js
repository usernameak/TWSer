"use strict";

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExtendableError = function (_Error) {
  (0, _inherits3.default)(ExtendableError, _Error);

  function ExtendableError(message) {
    (0, _classCallCheck3.default)(this, ExtendableError);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ExtendableError.__proto__ || (0, _getPrototypeOf2.default)(ExtendableError)).call(this, message));

    _this.name = _this.constructor.name;
    _this.message = message;
    Error.captureStackTrace(_this, _this.constructor.name);
    return _this;
  }

  return ExtendableError;
}(Error);

var UserError = function (_ExtendableError) {
  (0, _inherits3.default)(UserError, _ExtendableError);

  function UserError(message) {
    (0, _classCallCheck3.default)(this, UserError);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (UserError.__proto__ || (0, _getPrototypeOf2.default)(UserError)).call(this, message));

    _this2.userError = 1;
    return _this2;
  }

  return UserError;
}(ExtendableError);

module.exports = UserError;
//# sourceMappingURL=../maps/lib/user_error.js.map