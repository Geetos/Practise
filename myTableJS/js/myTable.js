let test;
class myTable {
    static INSERT = 0
    static MODIFY = 1
    static DELETE = 2

    constructor(dat) {
        this.dat = dat
        // templates for generating DOMs
        this.template = {
            tableHeader: "<div class='myTable-header'><h3></h3><div class='panel-btn' id='panel'></div></div>",
            insertBtn: "<span id='add-item' class='btn btn-sm btn-success myTable-btn'><i class='fas fa-plus-square'></i>增加数据</span>",
            deleteBtn: "<span id='del-item' class='btn btn-sm btn-danger myTable-btn myTable-btn-cell myTable-btn-auto' style='color:white'><i class='fas fa-trash'></i></spam>",
            modifyBtn: "<span id='mod-item' class='btn btn-sm btn-info myTable-btn myTable-btn-cell myTable-btn-auto' style='color:white'><i class='fas fa-edit'></i></span>",
            createBtn: "<span id='cre-item' class='btn btn-sm btn-success myTable-btn myTable-btn-cell myTable-btn-auto' style='color:white'><i class='fas fa-check'></i></span>",
            cancelBtn: "<span id='can-item' class='btn btn-sm btn-danger myTable-btn myTable-btn-cell myTable-btn-auto' style='color:white'><i class='fas fa-times'></i></span>",
            commitBtn: null,
            searchTextField: null,
            table: "<table><thead><tr></tr></thead><tbody/></table>",
        }
        this._paint()
        this._addListener()
    }

    _getDom(id_tag) {
        if (id_tag.startsWith('#')) return $(id_tag)
        return $('#' + id_tag)
    }

    _getDomId(...values) {
        let id = ''
        if (values[0].startsWith('#')) id = values[0]
        else id = '#' + values[0]
        for (let i = 1; i < values.length; i++) id += ' ' + values[i]
        return id
    }
    // Paint table
    _paint() {
        // Make sure anchored DOM exists
        if (this._getDom(this.dat.anchor).length == 0) return;

        // Exists!
        //If header info is needed
        if (this.dat.style.hasOwnProperty('headerInfo')) {
            $(this.template.tableHeader).appendTo(this._getDomId(this.dat.anchor))
            this._getDom(this._getDomId(this.dat.anchor, 'h3')).html(this.dat.style.headerInfo)
            if (this.dat.functions.insert) {
                $(this.template.insertBtn).appendTo(this._getDomId(this.dat.anchor, '#panel'))
                this._getDom(this._getDomId(this.dat.anchor, '#add-item')).attr('name', this.dat.anchor)
            }
        }

        // Setting Table DOM
        $(this.template.table).appendTo(this._getDomId(this.dat.anchor))
        this.dat._table = this._getDomId(this.dat.anchor, 'table')

        // Setting fields
        // If column line is needed
        if (this.dat.functions.columnLine) $("<th>序号</th>").appendTo(this._getDomId(this.dat._table, 'thead', 'tr'))
        this.dat.fields.forEach(item => {
            $("<th>" + item + "</th>").appendTo(this._getDomId(this.dat._table, 'thead', 'tr'))
        })
        this._getDom(this._getDomId(this.dat._table, 'thead', 'tr', 'th:last')).addClass('lastSndCell')
        $("<th width=80px class='lastCell'></th>").appendTo(this._getDomId(this.dat._table, 'thead', 'tr'))

        // Set default style
        this._getDom(this.dat._table).addClass("myTable table table-sm ")
        // If table-strip is ON
        if (this.dat.style.strip) this._getDom(this.dat._table).addClass("table-striped")
        // If darkMode is On
        if (this.dat.style.darkMode) this._getDom(this.dat._table).addClass("table-dark")
        // If borders are needed
        if (this.dat.style.tableBorder) this._getDom(this.dat._table).addClass("table-bordered")
        this.dat._length = 0
    }

    _addListener() {
        if (this.dat.functions.insert) {
            this._getDom(this._getDomId(this.dat.anchor, '#add-item')).bind('click', () => {
                this.insert()
            })
        }
    }

    insert() {
        let editRow = "<tr class='row-insert'><th>#</th>"
        for (let i = 0; i < this.dat.fields.length; i++) {
            editRow += "<th contenteditable='true'></th>"
        }
        editRow += '<th>' + this.template.cancelBtn + this.template.createBtn + '</th></tr>'
        this._getDom(this._getDomId(this.dat._table, 'tbody', 'tr:eq(0)')).before($(editRow))


        this._getDom(this._getDomId(this.dat._table, '#cre-item')).bind('click', (e) => {
            test = e
            let data = []
            for (let i = 0; i < this.dat.fields.length; i++) {

            }
            // this.insertRow()
        })
        this._getDom(this._getDomId(this.dat.anchor, '#can-item')).bind('click', () => {
            console.log()
        })
    }
    /**
     * Insert new rows to table.
     * @param {array} data new data
     * @param {int} pos where to insert new data 
     */
    insertRow(data, pos = 0) {
        data.forEach(item => {
            this.dat._length += 1
            let deleteBtn = $(this.template.deleteBtn).clone()
            let modifyBtn = $(this.template.modifyBtn).clone()
            $('<tr/>').appendTo(this._getDomId(this.dat._table), 'tbody');
            if (this.dat.functions.columnLine) {
                $('<th>' + this.dat._length + '</th>').appendTo(this._getDomId(this.dat._table, 'tbody', 'tr:last'))
            }

            for (let i = 0; i <= item.length; i++) {
                $('<th ' + (i < item.length - 1 ? '' : (i < item.length ? 'class="lastSndCell"' : 'class="lastCell"')) + '>' + (i == item.length ? '' : item[i]) + '</th>').appendTo(this._getDomId(this.dat._table, 'tbody', 'tr:last'))
            }
            if (this.dat.functions.delete)
                deleteBtn.appendTo(this._getDomId(this.dat._table, 'tbody', 'tr:last th:last'))
            if (this.dat.functions.modify)
                modifyBtn.appendTo(this._getDomId(this.dat._table, 'tbody', 'tr:last th:last'))
        })
    }

    modifyRow(data, pos) {

    }

    searchTable(data) {

    }

    commitChange() {

    }
    /**
     * Delete specified row from table
     * @param {int} pos which row needs to be deleted 
     */
    deleteRow(pos) {

    }

    refreshTable() {

    }

    undoOperation() {

    }

}
// var tableRow = 
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