"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { _template } from './myTableTemplates.js' 
var myRowIncident =
/*#__PURE__*/
function () {
  function myRowIncident(row) {
    _classCallCheck(this, myRowIncident);

    this.panel = $('<span/>');
    this.row = row;
    this.panel.appendTo(row.rowDom.children('th:last'));
  }

  _createClass(myRowIncident, [{
    key: "hookUp",
    value: function hookUp(type) {
      var _this = this;

      var template;

      switch (type) {
        case myRowIncident.DELETE:
          {
            template = $(_template.deleteBtn).clone();
            template.bind('click', function () {
              if (confirm("确定删除该条记录吗?")) {
                _this.row.remove();

                _this.row.table.changeLog.push({
                  type: myRowIncident.DELETE,
                  id: _this.row.id
                });
              }
            });
            break;
          }

        case myRowIncident.MODIFY:
          {
            template = $(_template.modifyBtn).clone();
            template.bind('click', function () {
              _this._flush();

              _this.hookUp(myRowIncident.UNDO_MODIFY);

              _this.hookUp(myRowIncident.COMMIT_MODIFY);

              _this.row.rowDom.addClass('row-modify');

              _this.row.containerList.forEach(function (v) {
                v.editable(true);
              });
            });
            break;
          }

        case myRowIncident.CANCLE:
          {
            template = $(_template.cancelBtn).clone();
            template.bind('click', function () {
              _this.row.remove();
            });
            break;
          }

        case myRowIncident.CREATE:
          {
            template = $(_template.createBtn).clone();
            template.bind('click', function () {
              var data = [],
                  flag = true;

              _this.row.containerList.forEach(function (v) {
                if (v.check(true)) data.push(v.get());else flag = false;
              });

              if (flag) {
                _this.row.table.insert(data);

                _this.row.remove();

                _this.row.table.changeLog.push({
                  type: tableClass.INSERT,
                  data: data
                });
              }
            });
            break;
          }

        case myRowIncident.UNDO_MODIFY:
          {
            template = $(_template.cancelBtn).clone();
            template.bind('click', function () {
              _this._flush();

              _this.hookUp(myRowIncident.DELETE);

              _this.hookUp(myRowIncident.MODIFY);

              for (var i = 0; i < _this.row.containerList.length; i++) {
                _this.row.containerList[i].set(_this.row.currentData[i]);

                _this.row.containerList[i].editable(false);
              }

              _this.row.rowDom.removeClass('row-modify');
            });
            break;
          }

        case myRowIncident.COMMIT_MODIFY:
          {
            template = $(_template.createBtn).clone();
            template.bind('click', function () {
              var modifiedDataList = {},
                  flag = true;

              for (var i = 0; i < _this.row.containerList.length; i++) {
                var val = _this.row.containerList[i];

                if (val.check(true)) {
                  flag = false;
                  break;
                }

                if (val.type != DataUnit.CHILDTABLE && val.get() != _this.row.currentData[i]) {
                  modifiedDataList[_this.row.dat.keyname[i]] = val.get();
                }
              }

              if (flag) {
                _this.row.modify(modifiedDataList);

                _this._flush();

                _this.hookUp(myRowIncident.DELETE);

                _this.hookUp(myRowIncident.MODIFY);

                _this.row.containerList.forEach(function (v) {
                  v.editable(false);
                });

                _this.row.rowDom.removeClass('row-modify');
              }
            });
            break;
          }
      }

      template.appendTo(this.panel);
    }
  }, {
    key: "_flush",
    value: function _flush() {
      this.panel.children().remove();
    }
  }]);

  return myRowIncident;
}(); // export { myRowIncident }


_defineProperty(myRowIncident, "DELETE", 30);

_defineProperty(myRowIncident, "MODIFY", 31);

_defineProperty(myRowIncident, "CANCLE", 32);

_defineProperty(myRowIncident, "CREATE", 33);

_defineProperty(myRowIncident, "UNDO_MODIFY", 34);

_defineProperty(myRowIncident, "COMMIT_MODIFY", 35);
