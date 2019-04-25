"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { _getDom, _getDomId } from './myTableConfig.js'
// import { myAjax } from './myAjax.js'
// import { rowClass } from './rowClass.js'
// import { _template } from './myTableTemplates.js' 
var tableClass =
/*#__PURE__*/
function () {
  function tableClass(dat) {
    _classCallCheck(this, tableClass);

    this.dat = dat;
    this.uuid = _guid();
    this.length = 0;
    this.rowList = [];
    this.changeLog = [];
    this.ajax = new myAjax(this);
  } // Paint table


  _createClass(tableClass, [{
    key: "paint",
    value: function paint() {
      var _this = this;

      // Exists!
      // If header info is needed
      if (this.dat.style.headerPanel) {
        $(_template.tableHeader).appendTo(_getDomId(this.dat.sectionAnchor));
        if (this.dat.style.hasOwnProperty('headerInfo')) _getDom(_getDomId(this.dat.sectionAnchor, 'h3')).html(this.dat.style.headerInfo);

        if (this.dat.functions.search) {
          $(_template.searchText).appendTo(_getDomId(this.dat.sectionAnchor, '#panel'));
        }

        if (this.dat.functions.refresh) {
          $(_template.refreshBtn).appendTo(_getDomId(this.dat.sectionAnchor, '#panel'));
        }

        if (this.dat.functions.insert) {
          $(_template.insertBtn).appendTo(_getDomId(this.dat.sectionAnchor, '#panel'));
        }

        if (this.dat.functions.commit) {
          $(_template.commitBtn).appendTo(_getDomId(this.dat.sectionAnchor, '#panel'));
        }
      } // Setting Table DOM


      $(_template.table).appendTo(_getDomId(this.dat.sectionAnchor));
      this.dat._table = _getDomId(this.dat.sectionAnchor, 'table'); // Setting fields
      // If column line is needed

      if (this.dat.functions.columnLine) $("<th>序号</th>").appendTo(_getDomId(this.dat._table, 'thead', 'tr'));
      this.dat.fields.forEach(function (item) {
        $("<th>" + item + "</th>").appendTo(_getDomId(_this.dat._table, 'thead', 'tr'));
      });

      _getDom(_getDomId(this.dat._table, 'thead', 'tr', 'th:last')).addClass('lastSndCell');

      $("<th class='lastCell'></th>").appendTo(_getDomId(this.dat._table, 'thead', 'tr')); // Set default style

      _getDom(this.dat._table).addClass("myTable table table-sm "); // If table-strip is ON


      if (this.dat.style.strip) _getDom(this.dat._table).addClass("table-striped"); // If darkMode is On

      if (this.dat.style.darkMode) _getDom(this.dat._table).addClass("table-dark"); // If borders are needed

      if (this.dat.style.tableBorder) _getDom(this.dat._table).addClass("table-bordered");

      this._addListener();

      this.ajax.execute({
        type: myAjax.QUERY
      });
    }
  }, {
    key: "_addListener",
    value: function _addListener() {
      var _this2 = this;

      if (this.dat.functions.insert) {
        _getDom(_getDomId(this.dat.sectionAnchor, '#add-item')).bind('click', function () {
          _this2.create();
        });
      }

      if (this.dat.functions.commit) {
        _getDom(_getDomId(this.dat.sectionAnchor, '#com-item')).bind('click', function () {
          _this2.commitChange();
        });
      }

      if (this.dat.functions.refresh) {
        _getDom(_getDomId(this.dat.sectionAnchor, '#ref-item')).bind('click', function () {
          _this2.refresh();
        });
      }
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      if (_getDom(_getDomId(this.dat._table, 'tbody')).children().length == 0) return true;else return false;
    }
  }, {
    key: "insert",
    value: function insert(data) {
      var rowId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var row = new rowClass(this.dat, this, tableClass.INSERT);
      row.append(data);
      row.id = rowId;
    }
  }, {
    key: "create",
    value: function create() {
      var row = new rowClass(this.dat, this, tableClass.CREATE);
      row.create(1);
    }
  }, {
    key: "searchTable",
    value: function searchTable(data) {}
  }, {
    key: "append",
    value: function append(row, pos) {
      if (pos == 0 || this.isEmpty()) row.appendTo(_getDomId(this.dat._table, 'tbody'));else _getDom(_getDomId(this.dat._table, 'tbody', 'tr:eq(' + (pos - 1) + ')')).before(row);
    }
  }, {
    key: "commitChange",
    value: function commitChange() {
      var _this3 = this;

      // Merge Operation
      this.changeLog.forEach(function (v) {
        _this3.ajax.execute(v);
      });
    }
  }, {
    key: "clearTable",
    value: function clearTable() {
      _getDom(_getDomId(this.dat._table, 'tbody')).children().remove();

      this.rowList = [];
      this.length = 0;
    }
  }, {
    key: "undoOperation",
    value: function undoOperation() {}
  }, {
    key: "refresh",
    value: function refresh() {
      this.clearTable();
      this.changeLog = [];
      this.ajax.execute({
        type: myAjax.QUERY
      });
    }
  }]);

  return tableClass;
}(); // export { tableClass }


_defineProperty(tableClass, "INSERT", 20);

_defineProperty(tableClass, "CREATE", 21);

_defineProperty(tableClass, "COMMIT", 22);

_defineProperty(tableClass, "QUERY", 23);
