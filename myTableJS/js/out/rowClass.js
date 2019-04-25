"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import { _template } from './myTableTemplates.js' 
// import { myRowIncident } from './myRowIncident.js'
// import { myText } from './myText.js'
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
