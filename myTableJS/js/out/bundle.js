"use strict";

// templates for generating DOMs    
var _template = {
  section: "<ul id='myTable-tab-nav' class='nav nav-tabs'></ul><div id='myTable-section'></div>",
  tab: "<li class='nav-item'><a class='nav-link'></a></li>",
  tableHeader: "<div class='myTable-header'><h3></h3><div class='panel-btn' id='panel'></div></div>",
  insertBtn: "<span id='add-item' class='btn btn-sm btn-success myTable-btn'><i class='fas fa-plus'></i>增加数据</span>",
  deleteBtn: "<span id='del-item' class='btn btn-sm btn-danger myTable-btn-cell myTable-btn-auto' style='color:white'><i class='fas fa-trash'></i></spam>",
  modifyBtn: "<span id='mod-item' class='btn btn-sm btn-info myTable-btn-cell myTable-btn-auto' style='color:white'><i class='fas fa-edit'></i></span>",
  createBtn: "<span id='cre-item' class='btn btn-sm btn-success myTable-btn-cell' style='color:white'><i class='fas fa-check'></i></span>",
  cancelBtn: "<span id='can-item' class='btn btn-sm btn-danger myTable-btn-cell' style='color:white'><i class='fas fa-times'></i></span>",
  commitBtn: "<span id='com-item' class='btn btn-sm btn-warning myTable-btn'><i class='fas fa-check'></i>提交更改</span>",
  searchText: "<div class='input-group'><div class='nput-group-prepend'><span class='input-group-text' id='basic-addon3'>搜索</span></div><input type='text' class='form-control' id='basic-url' aria-describedby='basic-addon3'></div>",
  refreshBtn: "<span id='ref-item' class='btn btn-sm btn-info myTable-btn'><i class='fas fa-sync'></i>刷新表格</span>",
  newRowDot: "<div class='new-line-dot'></div>",
  modifyRowDot: "",
  deleteRowDot: "",
  searchTextField: null,
  table: "<div><table><thead><tr></tr></thead><tbody/></table><div>",
  textString: "<input>",
  textPercentage: "<input>%</input>",
  childTable: "<a class='myTable-childTable'/>",
  datetime: "" // export { _template }

};


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


function _getDom(id_tag) {
    if (id_tag.startsWith('#')) return $(id_tag);
    return $('#' + id_tag);
  }
  
  function _getDomId() {
    var id = '';
  
    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }
  
    if (values[0].startsWith('#')) id = values[0];else id = '#' + values[0];
  
    for (var i = 1; i < values.length; i++) {
      id += ' ' + values[i];
    }
  
    return id;
  }
  
  function _guid() {
    var S4 = function S4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    };
  
    return S4() + S4();
  }
  
  function _getDateTime(timestamp) {
    var datetime = new Date();
    datetime.setTime(timestamp);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var date = datetime.getDate();
    var hour = datetime.getHours();
    var minute = datetime.getMinutes();
    var second = datetime.getSeconds();
    var msecond = datetime.getMilliseconds();
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
  }
  
  function _getConstType(string) {
    switch (string) {
      case 'text':
        return DataUnit.STRING;
  
      case 'percentage':
        return DataUnit.PERCENTAGE;
  
      case 'number':
        return DataUnit.NUMBER;
  
      case 'childtable':
        return DataUnit.CHILDTABLE;
  
      case 'notnull':
        return DataUnit.NOTNULL;
  
      case 'insert':
        return myAjax.INSERT;
  
      case 'delete':
        return myAjax.DELETE;
  
      case 'query':
        return myAjax.QUERY;
  
      case 'modify':
        return myAjax.MODIFY;
    }
  }

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

  var rowClass =
/*#__PURE__*/
function () {
  function rowClass(dat, table, type) {
    _classCallCheck(this, rowClass);

    table.rowList.push(this);
    this.dat = dat;
    this.table = table;
    this.containerList = [];
    this.id;
    this.pos = 0;
    this.currentData = [];
    this.rowDom = $('<tr/>');
    var rowIncident;

    if (dat.functions.columnLine) {
      $('<th>' + (type == tableClass.INSERT ? this.table.length + 1 : '#') + '</th>').appendTo(this.rowDom);
    }

    for (var i = 0; i <= dat.fields.length; i++) {
      $('<th ' + (type == tableClass.INSERT ? i < dat.fields.length - 1 ? '' : i < dat.fields.length ? 'class="lastSndCell"' : 'class="lastCell"' : '') + '></th>').appendTo(this.rowDom);
    }

    rowIncident = new myRowIncident(this);

    if (type == tableClass.INSERT) {
      if (this.dat.functions["delete"]) rowIncident.hookUp(myRowIncident.DELETE);
      if (this.dat.functions.modify) rowIncident.hookUp(myRowIncident.MODIFY);
    } else if (type == tableClass.CREATE) {
      this.rowDom.addClass('row-insert');
      rowIncident.hookUp(myRowIncident.CANCLE);
      rowIncident.hookUp(myRowIncident.CREATE);
    }
  }

  _createClass(rowClass, [{
    key: "append",
    value: function append(data) {
      var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.table.length += 1;
      this.pos = this.table.length;

      for (var i = 0; i < data.length; i++) {
        $(this.rowDom.children()[this.dat.functions.columnLine ? i + 1 : i]).append(this._fillUnit(this.dat.dataType[i], this.dat.fields[i], this.dat.constraints[i], false, data[i]));
      }

      this.table.append(this.rowDom, pos);
    }
  }, {
    key: "create",
    value: function create() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var preset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      for (var i = 0; i < this.dat.dataType.length; i++) {
        $(this.rowDom.children()[this.dat.functions.columnLine ? i + 1 : i]).append(this._fillUnit(this.dat.dataType[i], this.dat.fields[i], this.dat.constraints[i], true, typeof preset == 'undefined' ? undefined : preset[i]));
      }

      this.table.append(this.rowDom, pos);
    }
  }, {
    key: "_fillUnit",
    value: function _fillUnit(type, fieldName, constraint, status) {
      var value = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
      var container = new DataUnit(type, fieldName, constraint);
      container.editable(status);
      container.set(value);
      this.currentData.push(container.get());
      this.containerList.push(container);
      return container.createDOM();
    }
  }, {
    key: "remove",
    value: function remove() {
      this.table.rowList.pop(this.table.rowList.indexOf(this));
      this.rowDom.remove();
    }
  }, {
    key: "modify",
    value: function modify(data) {
      var changeData = {};

      for (var item in data) {
        var num = this.dat.keyname.indexOf(item);
        this.currentData[num] = data[item];
        this.containerList[num].set(data[item]);
        changeData[item] = data[item];
      }

      this.table.changeLog.push({
        type: myRowIncident.MODIFY,
        data: changeData,
        id: this.id
      });
    }
  }]);

  return rowClass;
}(); // export { rowClass }

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

var Tab =
/*#__PURE__*/
function () {
  function Tab(dat, tabDom, tabs) {
    var _this = this;

    _classCallCheck(this, Tab);

    this.tab = tabDom;
    this.tabNav = $(_getDomId('myTable-tab-nav'));
    this.tableSection = $(_getDomId('myTable-section'));

    var uuid = _guid();

    this.section = $("<div class='myTable-hide'/>").attr('id', uuid);
    $(this.tab.children('a')[0]).text(dat.tableName);
    this.tab.bind('click', function () {
      tabs.forEach(function (el) {
        if (el != _this) {
          el.deactive();
        }
      });

      _this.active();
    });
    dat.sectionAnchor = uuid;
    this.table = new tableClass(dat);
  }

  _createClass(Tab, [{
    key: "show",
    value: function show() {
      this.tab.appendTo(this.tabNav);
      this.section.appendTo(this.tableSection);
      this.table.paint();
    }
  }, {
    key: "remove",
    value: function remove() {
      this.tab.remove();
      this.section.remove();
    }
  }, {
    key: "active",
    value: function active() {
      $(this.tab.children('a')[0]).addClass('active');
      this.section.removeClass('myTable-hide');
    }
  }, {
    key: "deactive",
    value: function deactive() {
      $(this.tab.children('a')[0]).removeClass('active');
      this.section.addClass('myTable-hide');
    }
  }]);

  return Tab;
}();

var TabPage =
/*#__PURE__*/
function () {
  function TabPage(anchor) {
    _classCallCheck(this, TabPage);

    $(_template.section).appendTo(_getDomId(anchor));
    this.tabs = [];
  }

  _createClass(TabPage, [{
    key: "append",
    value: function append(type, dat) {
      var tabDom = $(_template.tab).clone();
      var tab = new Tab(dat, tabDom, this.tabs);
      this.tabs.push(tab);

      if (type == TabPage.PARENT) {
        //     this.tableList.push({table: table,tabDom: tab})
        tab.show();
        tab.active();
      } else {//     this.tableList.push({table: table, pTable: dat.parentTable, pField: dat.parentField, tabDom: tab})
      }
    } // getTable(pTable, pField){
    //     this.tableList.forEach(v=>{
    //         if(v.pTable.uuid == pTable.uuid && v.pField == pField) return v.pTable
    //     })
    // }

  }]);

  return TabPage;
}();

_defineProperty(TabPage, "PARENT", 50);

_defineProperty(TabPage, "CHILD", 51);
