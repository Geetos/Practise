"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var test1, test2;

var myTable =
/*#__PURE__*/
function () {
  function myTable(dat) {
    var _this = this;

    _classCallCheck(this, myTable);

    this.dat = dat;

    this._getRowIDByEvent = function (e) {
      return $(e)[0].currentTarget.attributes.value.value;
    };

    this._setAttrBtn = function (dom_id, template) {
      return $(template).attr('value', dom_id)[0].outerHTML;
    };

    this._getAjaxDat = function (t) {
      for (var i = 0; i < _this.dat.ajax.length; i++) {
        if (_this.dat.ajax[i].action == t) return _this.dat.ajax[i];
      }
    };

    this._changeLog = []; // templates for generating DOMs

    this.template = {
      tableHeader: "<div class='myTable-header'><h3></h3><div class='panel-btn' id='panel'></div></div>",
      insertBtn: "<span id='add-item' class='btn btn-sm btn-success myTable-btn'><i class='fas fa-plus'></i> 增加数据</span>",
      deleteBtn: "<span id='del-item' class='btn btn-sm btn-danger myTable-btn-cell myTable-btn-auto' style='color:white'><i class='fas fa-trash'></i></spam>",
      modifyBtn: "<span id='mod-item' class='btn btn-sm btn-info myTable-btn-cell myTable-btn-auto' style='color:white'><i class='fas fa-edit'></i></span>",
      createBtn: "<span id='cre-item' class='btn btn-sm btn-success myTable-btn-cell' style='color:white'><i class='fas fa-check'></i></span>",
      cancelBtn: "<span id='can-item' class='btn btn-sm btn-danger myTable-btn-cell' style='color:white'><i class='fas fa-times'></i></span>",
      commitBtn: "<span id='com-item' class='btn btn-sm btn-warning myTable-btn'><i class='fas fa-check'></i> 提交更改</span>",
      searchText: "<div class='input-group'><div class='nput-group-prepend'><span class='input-group-text' id='basic-addon3'>搜索</span></div><input type='text' class='form-control' id='basic-url' aria-describedby='basic-addon3'></div>",
      newRowDot: "<div class='new-line-dot'></div>",
      modifyRowDot: "",
      deleteRowDot: "",
      searchTextField: null,
      table: "<table><thead><tr></tr></thead><tbody/></table>"
    };

    this._paint();

    this._addListener();
  }

  _createClass(myTable, [{
    key: "_getDom",
    value: function _getDom(id_tag) {
      if (id_tag.startsWith('#')) return $(id_tag);
      return $('#' + id_tag);
    }
  }, {
    key: "_getDomId",
    value: function _getDomId() {
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
  }, {
    key: "_guid",
    value: function _guid() {
      var S4 = function S4() {
        return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
      };

      return S4() + S4();
    } // Paint table

  }, {
    key: "_paint",
    value: function _paint() {
      var _this2 = this;

      // Make sure anchored DOM exists
      if (this._getDom(this.dat.anchor).length == 0) return; // Exists!
      // If header info is needed

      if (this.dat.style.headerPanel) {
        $(this.template.tableHeader).appendTo(this._getDomId(this.dat.anchor));
        if (this.dat.style.hasOwnProperty('headerInfo')) this._getDom(this._getDomId(this.dat.anchor, 'h3')).html(this.dat.style.headerInfo);

        if (this.dat.functions.search) {
          $(this.template.searchText).appendTo(this._getDomId(this.dat.anchor, '#panel'));
        }

        if (this.dat.functions.insert) {
          $(this.template.insertBtn).appendTo(this._getDomId(this.dat.anchor, '#panel'));
        }

        if (this.dat.functions.commit) {
          $(this.template.commitBtn).appendTo(this._getDomId(this.dat.anchor, '#panel'));
        }
      } // Setting Table DOM


      $(this.template.table).appendTo(this._getDomId(this.dat.anchor));
      this.dat._table = this._getDomId(this.dat.anchor, 'table'); // Setting fields
      // If column line is needed

      if (this.dat.functions.columnLine) $("<th>序号</th>").appendTo(this._getDomId(this.dat._table, 'thead', 'tr'));
      this.dat.fields.forEach(function (item) {
        $("<th>" + item + "</th>").appendTo(_this2._getDomId(_this2.dat._table, 'thead', 'tr'));
      });

      this._getDom(this._getDomId(this.dat._table, 'thead', 'tr', 'th:last')).addClass('lastSndCell');

      $("<th class='lastCell'></th>").appendTo(this._getDomId(this.dat._table, 'thead', 'tr')); // Set default style

      this._getDom(this.dat._table).addClass("myTable table table-sm "); // If table-strip is ON


      if (this.dat.style.strip) this._getDom(this.dat._table).addClass("table-striped"); // If darkMode is On

      if (this.dat.style.darkMode) this._getDom(this.dat._table).addClass("table-dark"); // If borders are needed

      if (this.dat.style.tableBorder) this._getDom(this.dat._table).addClass("table-bordered");
      this._length = 0;
    }
  }, {
    key: "_addListener",
    value: function _addListener() {
      var _this3 = this;

      if (this.dat.functions.insert) {
        this._getDom(this._getDomId(this.dat.anchor, '#add-item')).bind('click', function () {
          _this3._insert();
        });
      }

      if (this.dat.functions.commit) {
        this._getDom(this._getDomId(this.dat.anchor, '#com-item')).bind('click', function () {
          _this3.commitChange();
        });
      }
    }
  }, {
    key: "_insert",
    value: function _insert() {
      var _this4 = this;

      // Unique code for identifying each row
      var uuid = this._guid();

      var editRow = $("<tr/>").attr('id', uuid).addClass('row-insert');

      var createBtn = this._setAttrBtn(uuid, this.template.createBtn);

      var cancelBtn = this._setAttrBtn(uuid, this.template.cancelBtn);

      $('<th>#</th>').appendTo($(editRow));

      for (var i = 0; i < this.dat.fields.length; i++) {
        $('<th/>').attr('contenteditable', 'true').appendTo($(editRow));
      }

      $("<th class='lastCell'>" + cancelBtn + createBtn + '</th>').appendTo($(editRow));
      if (this._length == 0) this._getDom(this._getDomId(this.dat._table, 'tbody')).append($(editRow));else this._getDom(this._getDomId(this.dat._table, 'tbody', 'tr:eq(0)')).before($(editRow)); // Bind create button 

      $("#cre-item[value=" + uuid + "]").bind('click', function (e) {
        var row_id = _this4._getRowIDByEvent(e);

        var data = [];

        for (var _i = 1; _i <= _this4.dat.fields.length; _i++) {
          data.push($(_this4._getDom(row_id).children('th')[_i]).html());
        } // Insert row to the bottom of the table


        _this4.insertRow([data], 0, true); // Add change to chang log


        _this4._addChange(myTable.INSERT, data); // Remove this row


        $("#can-item[value=" + row_id + "]").click();
      });
      $("#can-item[value=" + uuid + "]").bind('click', function (e) {
        _this4._getDom(_this4._getRowIDByEvent(e)).remove();
      });
    }
    /**
     * Insert new rows to table.
     * @param {array} data new data
     * @param {int} pos where to insert new data 
     */

  }, {
    key: "insertRow",
    value: function insertRow(data) {
      var _this5 = this;

      var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var newRow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      data.forEach(function (item) {
        _this5._length += 1;
        var deleteBtn = $(_this5.template.deleteBtn).clone();
        var modifyBtn = $(_this5.template.modifyBtn).clone();
        $('<tr/>').attr('id', _this5._guid).appendTo(_this5._getDomId(_this5.dat._table), 'tbody');

        if (_this5.dat.functions.columnLine) {
          $('<th>' + (newRow ? _this5.template.newRowDot : '') + _this5._length + '</th>').appendTo(_this5._getDomId(_this5.dat._table, 'tbody', 'tr:last'));
        }

        for (var i = 0; i <= item.length; i++) {
          $('<th ' + (i < item.length - 1 ? '' : i < item.length ? 'class="lastSndCell"' : 'class="lastCell"') + '>' + (i == item.length ? '' : item[i]) + '</th>').appendTo(_this5._getDomId(_this5.dat._table, 'tbody', 'tr:last'));
        }

        if (_this5.dat.functions["delete"]) deleteBtn.appendTo(_this5._getDomId(_this5.dat._table, 'tbody', 'tr:last th:last'));
        if (_this5.dat.functions.modify) modifyBtn.appendTo(_this5._getDomId(_this5.dat._table, 'tbody', 'tr:last th:last'));
      });
    }
  }, {
    key: "modifyRow",
    value: function modifyRow(data, pos) {}
  }, {
    key: "searchTable",
    value: function searchTable(data) {}
  }, {
    key: "commitChange",
    value: function commitChange() {
      var _this6 = this;

      var serialize = function serialize(dat, data) {
        var serialized_data = {};
        var ajaxDat = {};

        for (var i = 0; i < data.length; i++) {
          serialized_data[_this6.dat.keyname[i]] = data[i];
        }

        ajaxDat = {
          type: dat.type,
          url: dat.url,
          dataType: "json",
          data: JSON.stringify(serialized_data)
        };
        return ajaxDat;
      };

      var ajaxDat = {};

      this._changeLog.forEach(function (c) {
        switch (c.type) {
          case myTable.INSERT:
            {
              ajaxDat = serialize(_this6._getAjaxDat(myTable.INSERT), c.data);
              break;
            }
        }
      });

      console.log(ajaxDat);
    }
    /**
     * Delete specified row from table
     * @param {int} pos which row needs to be deleted 
     */

  }, {
    key: "deleteRow",
    value: function deleteRow(pos) {}
  }, {
    key: "refreshTable",
    value: function refreshTable() {}
  }, {
    key: "undoOperation",
    value: function undoOperation() {}
  }, {
    key: "_addChange",
    value: function _addChange(type, data) {
      this._changeLog.push({
        type: type,
        data: data
      });
    }
  }, {
    key: "fetchTable",
    value: function fetchTable() {
      var _this7 = this;

      var _dat = this._getAjaxDat(myTable.QUERY);

      $.ajax({
        type: _dat.type,
        url: _dat.url,
        success: function success(data) {
          data.forEach(function (item) {
            var row = [];

            for (var i = 0; i < _this7.dat.keyname.length; i++) {
              row.push(item[_this7.dat.keyname[i]]);
            }

            _this7.insertRow([row]);
          });
        }
      });
    }
  }, {
    key: "insertColumn",
    value: function insertColumn() {}
  }, {
    key: "_getDateTime",
    value: function _getDateTime(timestamp) {
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
  }]);

  return myTable;
}(); // var tableRow = 
// var tableData = [
//     ["Bob", "Male", "Mars"],
//     ["Alan", "Female", "Earth"]
// ]
// table.addAnchor("table-test")
// var myTable = function () {
//     this.ex_add = null;
//     this.ex_del = null;
//     this.current_anchor = '';
//     this.anchorList = [];
//     this.tableList = [];
//     this.template = $("<div class='myTable-header'><h3>No info</h3><div class='panel-btn'><span id='add-item' class='btn btn-sm btn-success myTable-btn'><i class='fa fa-plus-square'></i> New Item</span></div></div><table id='tmp-myTable' class='myTable'><thead><tr></tr></thead><tbody/></table>");
//     this.template_btn_delete = $("<span id='del-item' class='btn btn-sm btn-danger myTable-btn table-btn-auto'><i class='fa fa-trash-o'> Delete Item</i></span>");
//     var add = function () {
//         if (this.ex_add != null) {
//             this.ex_add()
//         }
//         console.log("add")
//     }
//     var del = function () {
//     }
//     $("#add-item").click(function () { add() })
//     $("#del-item").click(function () { del() })
//     this._add = add
// };
// myTable.prototype.setTable = function (tableRow) {
//     if (getDom(this.current_anchor).length == 0) return;
//     if (!(this.current_anchor in this.anchorList)) {
//         this.anchorList.push(this.current_anchor)
//         this.template.appendTo('#' + this.current_anchor);
//         tableTag = this.current_anchor + '-myTable';
//         getDom('tmp-myTable').attr('id', tableTag)
//         tableRow.forEach(item => {
//             $("<th name=" + item[1] + ">" + item[0] + "</th>").appendTo("#" + tableTag + " thead tr")
//         })
//         $("<th width=100px/>").appendTo("#" + tableTag + " thead tr")
//         getDom(tableTag).addClass("table table-striped")
//         this.anchorList[this.current_anchor] = {
//             'tableRow': tableRow,
//             'table_id': tableTag,
//             'count': tableRow.length
//         }
//     } else {
//         this.anchorList[this.current_anchor]['tableRow'] = tableRow
//     }
// }
// myTable.prototype.addAnchor = function (id_tag) {
//     this.current_anchor = id_tag
// }
// myTable.prototype.pick = function (id_tag) {
//     this.current_anchor = id_tag
// }
// myTable.prototype.addRow = function (data) {
//     var tableId = this.anchorList[this.current_anchor]['table_id']
//     var count = this.anchorList[this.current_anchor]['count']
//     data.forEach(item => {
//         $('<tr/>').appendTo('#' + tableId + ' tbody');
//         item.forEach(field => {
//             $('<th>' + field + '</th>').appendTo('#' + tableId + ' tbody tr:last')
//         })
//         this.template_btn_delete.appendTo('#' + tableId + ' tbody tr:last')
//     })
// }
// $.get('/moneyinfo/query/2',function(data){
// 	table.init(data)
// })


_defineProperty(myTable, "INSERT", 0);

_defineProperty(myTable, "MODIFY", 1);

_defineProperty(myTable, "DELETE", 2);

_defineProperty(myTable, "QUERY", 3);
