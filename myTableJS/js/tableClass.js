class tableClass{
    static INSERT = 0
    static MODIFY = 1
    static DELETE = 2
    static QUERY = 3

    constructor(dat) {
        this.dat = dat
        this.rowList = []
        this._getRowIDByEvent = (e) => ($(e)[0].currentTarget.attributes.value.value)
        this._setAttrBtn = (dom_id,template) => $(template).attr('value',dom_id)[0].outerHTML
        this._getAjaxDat = (t) => {
            for(let i=0;i<this.dat.ajax.length;i++){
                if (this.dat.ajax[i].action == t) return this.dat.ajax[i]
            }
        }
        this._changeLog = []
    }

    // Paint table
    paint() {
        // Make sure anchored DOM exists
        if (_getDom(this.dat.anchor).length == 0) return;

        // Exists!
        // If header info is needed
        if (this.dat.style.headerPanel) {
            $(_template.tableHeader).appendTo(_getDomId(this.dat.anchor))
            if(this.dat.style.hasOwnProperty('headerInfo'))
                _getDom(_getDomId(this.dat.anchor, 'h3')).html(this.dat.style.headerInfo)

            if (this.dat.functions.search) {
                $(_template.searchText).appendTo(_getDomId(this.dat.anchor, '#panel'))
            }
            if (this.dat.functions.insert) {
                $(_template.insertBtn).appendTo(_getDomId(this.dat.anchor, '#panel'))
            }
            if (this.dat.functions.commit){
                $(_template.commitBtn).appendTo(_getDomId(this.dat.anchor, '#panel'))
            }
        }

        // Setting Table DOM
        $(_template.table).appendTo(_getDomId(this.dat.anchor))
        this.dat._table = _getDomId(this.dat.anchor, 'table')

        // Setting fields
        // If column line is needed
        if (this.dat.functions.columnLine) $("<th>序号</th>").appendTo(_getDomId(this.dat._table, 'thead', 'tr'))
        this.dat.fields.forEach(item => {
            $("<th>" + item + "</th>").appendTo(_getDomId(this.dat._table, 'thead', 'tr'))
        })
        _getDom(_getDomId(this.dat._table, 'thead', 'tr', 'th:last')).addClass('lastSndCell')
        $("<th class='lastCell'></th>").appendTo(_getDomId(this.dat._table, 'thead', 'tr'))

        // Set default style
        _getDom(this.dat._table).addClass("myTable table table-sm ")
        // If table-strip is ON
        if (this.dat.style.strip) _getDom(this.dat._table).addClass("table-striped")
        // If darkMode is On
        if (this.dat.style.darkMode) _getDom(this.dat._table).addClass("table-dark")
        // If borders are needed
        if (this.dat.style.tableBorder) _getDom(this.dat._table).addClass("table-bordered")
        this.dat._length = 0
    }

    isEmpty(){
        if(_getDom(_getDomId(this.dat._table, 'tbody')).children().length == 0) return true
        else return false
    }

    _insert() {
        // Unique code for identifying each row
        let uuid = _guid()
        let editRow = $("<tr/>").attr('id', uuid).addClass('row-insert')
        let createBtn = this._setAttrBtn(uuid, _template.createBtn)
        let cancelBtn = this._setAttrBtn(uuid, _template.cancelBtn)
        $('<th>#</th>').appendTo($(editRow))
        for (let i = 0; i < this.dat.fields.length; i++) {
            $('<th/>').attr('contenteditable','true').appendTo($(editRow))
        }
        $("<th class='lastCell'>"+ cancelBtn + createBtn +'</th>').appendTo($(editRow))
        if(this._length == 0) _getDom(_getDomId(this.dat._table, 'tbody')).append($(editRow))
        else _getDom(_getDomId(this.dat._table, 'tbody', 'tr:eq(0)')).before($(editRow))

        // Bind create button 
        $("#cre-item[value="+uuid+"]").bind('click', (e) => {
            let row_id = this._getRowIDByEvent(e)
            let data = []
            for (let i = 1; i <= this.dat.fields.length; i++) {
                data.push($(_getDom(row_id).children('th')[i]).html())
            }
            // Insert row to the bottom of the table
            this.insertRow([data],0,true)
            // Add change to chang log
            this._addChange(myTable.INSERT, data)
            // Remove this row
            $("#can-item[value="+row_id+"]").click()
        })

        $("#can-item[value="+uuid+"]").bind('click', (e) => {
            _getDom(this._getRowIDByEvent(e)).remove()
        })
    }
    

    searchTable(data) {

    }

    commitChange() {
        let serialize = (dat, data) => {
            let serialized_data = {}
            let ajaxDat = {}
            for(let i=0;i<data.length;i++){
                serialized_data[this.dat.keyname[i]] = data[i]
            }
            ajaxDat = {
                type : dat.type,
                url : dat.url,
                dataType : "json",
                data : JSON.stringify(serialized_data),
            }
            return ajaxDat
        } 

        let ajaxDat = {}

        this._changeLog.forEach(c=>{
            switch(c.type){
                case myTable.INSERT : {
                    ajaxDat = serialize(this._getAjaxDat(myTable.INSERT), c.data)
                    break
                }
            }
        })
        console.log(ajaxDat)
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

    fetchTable(){
        let _dat = this._getAjaxDat(myTable.QUERY)
        $.ajax({
            type: _dat.type,
            url: _dat.url,
            success: (data) => {
                data.forEach(item => {
                    let row = []
                    for(let i=0;i<this.dat.keyname.length;i++){
                        row.push(item[this.dat.keyname[i]])
                    }
                    this.insertRow([row])
                })
            }
        })
    }

}