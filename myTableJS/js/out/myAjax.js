"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { _getConstType } from './myTableConfig.js'
var _test_fetch = [{
  "id": 1,
  "contractMoney": 11,
  "costMoney": 11,
  "subcontractingCost": 11,
  "profitMargin": 22,
  "paybackMoney": 33,
  "paybackRatio": 1.1,
  "paybackDetails": "查看",
  "reamek": 'asdfasdf'
}, {
  "id": 2,
  "contractMoney": 11,
  "costMoney": 21,
  "subcontractingCost": 51,
  "profitMargin": 22,
  "paybackMoney": 33,
  "paybackRatio": 1.1,
  "paybackDetails": "查看",
  "reamek": 'asdfasdf'
}];

var myAjax =
/*#__PURE__*/
function () {
  function myAjax(table) {
    _classCallCheck(this, myAjax);

    this.table = table;
  }

  _createClass(myAjax, [{
    key: "execute",
    value: function execute(log) {
      var _this = this;

      var dat;

      for (var i = 0; i < this.table.dat.ajax.length; i++) {
        if (_getConstType(this.table.dat.ajax[i].action) == log.type) {
          dat = this.table.dat.ajax[i];
        }
      }

      switch (log.type) {
        case myAjax.QUERY:
          {
            // let reData = this._execu_ajax(dat)
            var reData = _test_fetch;
            if (reData == null) return;else {
              reData.forEach(function (item) {
                var data = [];

                for (var _i = 0; _i < _this.table.dat.keyname.length; _i++) {
                  data.push(item[_this.table.dat.keyname[_i]]);
                }

                _this.table.insert(data, item[_this.table.dat.identifyKey]);
              });
            }
            break;
          }

        case myAjax.INSERT:
          {
            var serialize_data = {};

            for (var _i2 = 0; _i2 < log.data.length; _i2++) {
              serialize_data[this.table.dat.keyname[_i2]] = log.data[_i2];
            }

            dat.data = serialize_data;

            this._execu_ajax(dat);

            break;
          }

        case myAjax.MODIFY:
          {
            var _serialize_data = {};

            for (var key in log.data) {
              _serialize_data[key] = log.data[key];
            }

            _serialize_data[this.table.dat.identifyKey] = log.id;
            dat.data = _serialize_data;

            this._execu_ajax(dat);

            break;
          }

        case myAjax.DELETE:
          {
            dat.data = {};
            dat.data[this.table.dat.identifyKey] = log.id;

            this._execu_ajax(dat);

            break;
          }
      }
    }
  }, {
    key: "_execu_ajax",
    value: function _execu_ajax(dat) {
      var reData = null;
      dat.data = JSON.stringify(dat.data);
      console.log(dat); // $.ajax({
      //     type: dat.action,
      //     url: dat.url,
      //     // data: dat.data,
      //     success: function (data) {
      //         reData = data
      //     },
      //     failure: function(){
      //         alert("操作失败！操作类型：" + dat.action)
      //     }
      // });

      return reData;
    }
  }]);

  return myAjax;
}(); // export { myAjax }


_defineProperty(myAjax, "INSERT", 20);

_defineProperty(myAjax, "QUERY", 41);

_defineProperty(myAjax, "MODIFY", 31);

_defineProperty(myAjax, "DELETE", 30);
