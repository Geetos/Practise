"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { tableClass } from './tableClass.js'
var test_unit;

var myTable =
/*#__PURE__*/
function () {
  function myTable(dat) {
    _classCallCheck(this, myTable);

    this.dat = dat;

    if (!dat.hasOwnProperty('parentTable')) {
      if (_getDom(dat.anchor).length > 0) {
        myTable.pageManage[dat.anchor] = new TabPage(dat.anchor);
        myTable.pageManage[dat.anchor].append(TabPage.PARENT, dat);
      }
    } else {
      if (dat.parentTable.dat.anchor in myTable.pageManage) {
        myTable.pageManage[dat.parentTable.dat.anchor].append(TabPage.CHILD, dat);
      }
    }
  }

  _createClass(myTable, [{
    key: "insert",
    value: function insert(data) {}
  }, {
    key: "create",
    value: function create() {}
  }, {
    key: "modify",
    value: function modify(data, pos) {}
  }, {
    key: "commitChange",
    value: function commitChange() {}
  }, {
    key: "deleteRow",
    value: function deleteRow(pos) {}
  }, {
    key: "fetchData",
    value: function fetchData() {// this.table.ajax.execute({type:myAjax.QUERY})
    }
  }]);

  return myTable;
}();

_defineProperty(myTable, "pageManage", {});

var money_table = new myTable({
  anchor: "table-test",
  tableName: "资金表",
  fields: ["合同金额", "商品采购成本", "转包实施成本", "项目利润率", "已回款金额", "回款比例", "回款明细", "项目合同回款要求"],
  keyname: ["contractMoney", "costMoney", "subcontractingCost", "profitMargin", "paybackMoney", "paybackRatio", "paybackDetails", "reamek"],
  identifyKey: "id",
  constraints: ['notnull', 'notnull', 'notnull', 'notnull', 'notnull', 'notnull', 'default', 'notnull'],
  dataType: ['number', 'number', 'number', 'percentage', 'number', 'number', 'childtable', 'text'],
  functions: {
    columnLine: true,
    insert: true,
    modify: true,
    search: true,
    "delete": true,
    commit: true,
    refresh: true,
    undoOperation: true,
    autoReFresh: false,
    refreshFrequency: 1000
  },
  style: {
    strip: true,
    darkMode: false,
    tableBorder: true,
    headerPanel: true
  },
  ajax: [{
    action: 'insert',
    type: 'POST',
    url: 'localhost/add',
    success: null,
    fail: null
  }, {
    action: 'modify',
    type: 'POST',
    url: 'localhost/modify',
    success: null,
    fail: null
  }, {
    action: 'query',
    type: 'GET',
    url: 'page/moneyinfo/index/1',
    success: null,
    fail: null
  }, {
    action: 'delete',
    type: 'POST',
    url: 'localhost/delete',
    success: null,
    fail: null
  }]
});
var money_item_table = new myTable({
  parentTable: money_table,
  parentField: "paybackDetails",
  tableName: "回款明细表",
  fields: ["回款金额", "回款日期", "回款次数"],
  keyname: ["payback_money", "payback_date", "payback_count"],
  identifyKey: "id",
  constraints: ["notnull", "default", "readonly"],
  dataType: ["number", "date", "number"],
  ajax: [{
    action: 'insert',
    type: 'POST',
    url: 'localhost/add',
    success: null,
    fail: null
  }, {
    action: 'modify',
    type: 'POST',
    url: 'localhost/modify',
    success: null,
    fail: null
  }, {
    action: 'query',
    type: 'GET',
    url: 'page/moneyinfo/index/1',
    success: null,
    fail: null
  }, {
    action: 'delete',
    type: 'POST',
    url: 'localhost/delete',
    success: null,
    fail: null
  }]
});
