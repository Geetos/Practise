"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
