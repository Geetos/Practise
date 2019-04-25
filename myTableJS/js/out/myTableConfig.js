"use strict";

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
} // export { _getDom, _getDomId, _getDateTime, _getConstType}
