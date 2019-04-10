let test1,test2;
class myTable {
    static INSERT = 0
    static MODIFY = 1
    static DELETE = 2

    constructor(dat) {
        this.dat = dat
        this._getRowIDByEvent = (e) => ($(e)[0].currentTarget.attributes.value.value)
        this._setAttrBtn = (dom_id,template) => $(template).attr('value',dom_id)[0].outerHTML
        this._changeLog = []
        // templates for generating DOMs
        this.template = {
            tableHeader: "<div class='myTable-header'><h3></h3><div class='panel-btn' id='panel'></div></div>",
            insertBtn: "<span id='add-item' class='btn btn-sm btn-success myTable-btn'><i class='fas fa-plus-square'></i>增加数据</span>",
            deleteBtn: "<span id='del-item' class='btn btn-sm btn-danger myTable-btn myTable-btn-cell myTable-btn-auto' style='color:white'><i class='fas fa-trash'></i></spam>",
            modifyBtn: "<span id='mod-item' class='btn btn-sm btn-info myTable-btn myTable-btn-cell myTable-btn-auto' style='color:white'><i class='fas fa-edit'></i></span>",
            createBtn: "<span id='cre-item' class='btn btn-sm btn-success myTable-btn myTable-btn-cell' style='color:white'><i class='fas fa-check'></i></span>",
            cancelBtn: "<span id='can-item' class='btn btn-sm btn-danger myTable-btn myTable-btn-cell' style='color:white'><i class='fas fa-times'></i></span>",
            commitBtn: "<span id='com-item' class='btn btn-sm btn-warning myTable-btn'><i class='fas fa-check' ></i>提交更改</span>",
            newRowDot: "<div class='new-line-dot'></div>",
            modifyRowDot:"",
            deleteRowDot:"",
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

    
    _guid(){
        let S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        return (S4()+S4());
    }

    // Paint table
    _paint() {
        // Make sure anchored DOM exists
        if (this._getDom(this.dat.anchor).length == 0) return;

        // Exists!
        // If header info is needed
        if (this.dat.style.hasOwnProperty('headerInfo')) {
            $(this.template.tableHeader).appendTo(this._getDomId(this.dat.anchor))
            this._getDom(this._getDomId(this.dat.anchor, 'h3')).html(this.dat.style.headerInfo)
            if (this.dat.functions.insert) {
                $(this.template.insertBtn).appendTo(this._getDomId(this.dat.anchor, '#panel'))
                this._getDom(this._getDomId(this.dat.anchor, '#add-item')).attr('name', this.dat.anchor)
            }
            if (this.dat.functions.commit){
                $(this.template.commitBtn).appendTo(this._getDomId(this.dat.anchor, '#panel'))
                this._getDom(this._getDomId(this.dat.anchor, '#com-item')).attr('name', this.dat.anchor)
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
        $("<th width=85px class='lastCell'></th>").appendTo(this._getDomId(this.dat._table, 'thead', 'tr'))

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

        if(this.dat.functions.commit){
            this._getDom(this._getDomId(this.dat.anchor, '#com-item')).bind('click', ()=>{
                this.commitChange()
            })
        }
    }

    insert() {
        // Unique code for identifying each row
        let uuid = this._guid()
        let editRow = $("<tr/>").attr('id', uuid).addClass('row-insert')
        let createBtn = this._setAttrBtn(uuid, this.template.createBtn)
        let cancelBtn = this._setAttrBtn(uuid, this.template.cancelBtn)
        $('<th>#</th>').appendTo($(editRow))
        for (let i = 0; i < this.dat.fields.length; i++) {
            $('<th/>').attr('contenteditable','true').appendTo($(editRow))
        }
        $('<th>'+ cancelBtn + createBtn +'</th>').appendTo($(editRow))
        this._getDom(this._getDomId(this.dat._table, 'tbody', 'tr:eq(0)')).before($(editRow))

        // Bind create button 
        $("#cre-item[value="+uuid+"]").bind('click', (e) => {
            let row_id = this._getRowIDByEvent(e)
            let data = []
            for (let i = 1; i <= this.dat.fields.length; i++) {
                data.push($(this._getDom(row_id).children('th')[i]).html())
            }
            // Insert row to the bottom of the table
            this.insertRow([data],0,true)
            // Add change to chang log
            this._addChange(myTable.INSERT, data)
            // Remove this row
            $("#can-item[value="+row_id+"]").click()
        })

        $("#can-item[value="+uuid+"]").bind('click', (e) => {
            this._getDom(this._getRowIDByEvent(e)).remove()
        })

        
    }
    /**
     * Insert new rows to table.
     * @param {array} data new data
     * @param {int} pos where to insert new data 
     */
    insertRow(data, pos = 0,newRow = false) {
        data.forEach(item => {
            this.dat._length += 1
            let deleteBtn = $(this.template.deleteBtn).clone()
            let modifyBtn = $(this.template.modifyBtn).clone()
            $('<tr/>').attr('id',this._guid).appendTo(this._getDomId(this.dat._table), 'tbody');
            if (this.dat.functions.columnLine) {
                $('<th>' + (newRow ? this.template.newRowDot :'') + this.dat._length + '</th>').appendTo(this._getDomId(this.dat._table, 'tbody', 'tr:last'))
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
        let getAjaxDat = (t) => {
            this.dat.ajax.forEach(v=>{
                if (v.action == t) return v
            })
        }

        let serialize = (data) => {
            let serialized_data = 
            data.forEach(d => {

            })
        } 

        let ajaxDat = {}
        this._changeLog.forEach(c=>{
            switch(c.type){
                case myTable.INSERT : {let _dat = getAjaxDat(myTable.INSERT);ajaxDat = {
                    type : _dat.type,
                    url : _dat.url,
                    dataType : "json",
                    data : JSON.stringify(),
                }}
            }
        })
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

    _addChange(type, data){
        this._changeLog.push({
            type: type,
            data : data
        })
    }

    ajax(){

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