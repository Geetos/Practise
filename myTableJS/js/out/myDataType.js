"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import { _template } from './myTableTemplates.js' 
var DataTypeBase =
/*#__PURE__*/
function () {
  function DataTypeBase() {
    _classCallCheck(this, DataTypeBase);

    this.dom;
  }

  _createClass(DataTypeBase, [{
    key: "editable",
    value: function editable(status) {}
  }, {
    key: "set",
    value: function set(value) {}
  }, {
    key: "check",
    value: function check() {
      var alertMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    }
  }, {
    key: "createDOM",
    value: function createDOM() {
      return this.dom;
    }
  }, {
    key: "get",
    value: function get() {}
  }]);

  return DataTypeBase;
}();

var myList =
/*#__PURE__*/
function (_DataTypeBase) {
  _inherits(myList, _DataTypeBase);

  function myList() {
    _classCallCheck(this, myList);

    return _possibleConstructorReturn(this, _getPrototypeOf(myList).call(this));
  }

  return myList;
}(DataTypeBase);

var myCheckBox =
/*#__PURE__*/
function (_DataTypeBase2) {
  _inherits(myCheckBox, _DataTypeBase2);

  function myCheckBox() {
    _classCallCheck(this, myCheckBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(myCheckBox).call(this));
  }

  return myCheckBox;
}(DataTypeBase);

var myChildTable =
/*#__PURE__*/
function (_DataTypeBase3) {
  _inherits(myChildTable, _DataTypeBase3);

  function myChildTable() {
    var _this;

    _classCallCheck(this, myChildTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(myChildTable).call(this));
    _this.dom = $(_template.childTable);
    return _this;
  }

  _createClass(myChildTable, [{
    key: "set",
    value: function set(data) {
      this.dom.text(data);
    }
  }]);

  return myChildTable;
}(DataTypeBase);

var myText =
/*#__PURE__*/
function (_DataTypeBase4) {
  _inherits(myText, _DataTypeBase4);

  function myText(type, constraint) {
    var _this2;

    _classCallCheck(this, myText);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(myText).call(this));
    _this2.type = type;
    _this2.constraint = _getConstType(constraint);

    switch (type) {
      case myText.STRING:
        _this2.dom = $(_template.textString).addClass('myText-string');
        break;

      case myText.PERCENTAGE:
        _this2.dom = $(_template.textPercentage).addClass('myText-number');
        break;

      case myText.NUMBER:
        _this2.dom = $(_template.textString).addClass('myText-number');
        break;
    }

    return _this2;
  }

  _createClass(myText, [{
    key: "set",
    value: function set(data) {
      this.dom.val(data);
    }
  }, {
    key: "get",
    value: function get() {
      return this.dom.val();
    }
  }, {
    key: "clear",
    value: function clear() {
      this.dom.val('');
    }
  }, {
    key: "check",
    value: function check() {
      var alertMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var flag = true,
          msg = '';

      if (this.constraint == DataUnit.NOTNULL && this.get().length == 0) {
        flag = false;
        msg = '不能为空！';
      } else {
        if (this.type == myText.NUMBER || this.type == myText.PERCENTAGE) {
          var patt = /^(-?\d+)(\.\d+)?$/;

          if (!patt.test(this.get())) {
            flag = false;
            msg = '不是合法数字!';
          }
        }
      }

      if (!flag) {
        if (alertMode) alert('\'' + this.fieldName + '\'项 ' + msg);
        return false;
      }

      return true;
    }
  }, {
    key: "editable",
    value: function editable(status) {
      this.dom[0].disabled = !status;
    }
  }]);

  return myText;
}(DataTypeBase); // export { myText }


_defineProperty(myText, "STRING", 0);

_defineProperty(myText, "PERCENTAGE", 1);

_defineProperty(myText, "NUMBER", 2);
