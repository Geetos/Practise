// import { _getDom, _getDomId } from './myTableConfig.js'
// import { myAjax } from './myAjax.js'
// import { rowClass } from './rowClass.js'
// import { _template } from './myTableTemplates.js' 

class tableClass {
    static INSERT = 20
    static CREATE = 21
    static COMMIT = 22
    static QUERY = 23

    constructor(dat, tabs) {
        this.dat = dat
        this.tabs = tabs
        this.uuid = _guid()
        this.length = 0
        this.rowList = []
        this.changeLog = []
        this.ajax = new myAjax(this)
        this.isParent = true
        this.parent = null
        if (this.dat.hasOwnProperty('parentTable') && this.dat.hasOwnProperty('parentField')){
            this.isParent = false
            this.parent = {
                'table': this.dat.parentTable.table,
                'field': this.dat.parentField
            }
            dat.style = this.dat.parentTable.dat.style
            dat.functions = this.dat.parentTable.dat.functions
        }
        this.child = null
    }

    // Paint table
    paint() {
        if(_getDom(this.dat.sectionAnchor).children().length > 0){
            this.clearTable()
            _getDom(this.dat.sectionAnchor).children().remove()
        }
        // Exists!
        // If header info is needed
        
        if (this.dat.style.headerPanel) {
            $(_template.tableHeader).appendTo(_getDomId(this.dat.sectionAnchor))
            if (this.dat.style.hasOwnProperty('headerInfo'))
                _getDom(_getDomId(this.dat.sectionAnchor, 'h3')).html(this.dat.style.headerInfo)

            if (this.dat.functions.search) {
                $(_template.searchText).appendTo(_getDomId(this.dat.sectionAnchor, '#panel'))
            }
            if (this.dat.functions.refresh) {
                $(_template.refreshBtn).appendTo(_getDomId(this.dat.sectionAnchor, '#panel'))
            }
            if (this.dat.functions.insert) {
                $(_template.insertBtn).appendTo(_getDomId(this.dat.sectionAnchor, '#panel'))
            }
            if (this.dat.functions.commit) {
                $(_template.commitBtn).appendTo(_getDomId(this.dat.sectionAnchor, '#panel'))
            }
        }

        // Setting Table DOM
        $(_template.table).appendTo(_getDomId(this.dat.sectionAnchor))
        this.dat._table = _getDomId(this.dat.sectionAnchor, 'table')

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

        this._addListener()
    }

    _addListener() {
        if (this.dat.functions.insert) {
            _getDom(_getDomId(this.dat.sectionAnchor, '#add-item')).bind('click', () => {
                this.create()
            })
        }

        if (this.dat.functions.commit) {
            _getDom(_getDomId(this.dat.sectionAnchor, '#com-item')).bind('click', () => {
                this.commitChange()
            })
        }

        if (this.dat.functions.refresh) {
            _getDom(_getDomId(this.dat.sectionAnchor, '#ref-item')).bind('click', () => {
                this.refresh()
            })
        }
    }

    isEmpty() {
        if (_getDom(_getDomId(this.dat._table, 'tbody')).children().length == 0) return true
        else return false
    }

    insert(data, rowId = undefined) {
        let row = new rowClass(this.dat, this, tableClass.INSERT)
        row.append(data)
        row.id = rowId
    }

    create() {
        let row = new rowClass(this.dat, this, tableClass.CREATE)
        row.create(1)
    }

    searchTable(data) {

    }

    append(row, pos) {
        if (pos == 0 || this.isEmpty()) row.appendTo(_getDomId(this.dat._table, 'tbody'));
        else _getDom(_getDomId(this.dat._table, 'tbody', 'tr:eq(' + (pos - 1) + ')')).before(row)
    }

    commitChange() {
        // Merge Operation
        this.changeLog.forEach(v => {
            this.ajax.execute(v)
        })
    }

    clearTable() {
        _getDom(_getDomId(this.dat._table, 'tbody')).children().remove()
        this.rowList = []
        this.length = 0
    }

    refresh() {
        this.clearTable()
        this.changeLog = []
        this.fetchData()
    }

    fetchData() {
        let reData = this.ajax.execute({type: myAjax.QUERY})
        if (reData == null) alert('获取数据失败!')
        else {
            // if current table has parent table
            if (!this.isParent) reData = reData[this.parent.field]
            this.setData(reData)
        }
       
    }

    callTable(field, data){
        this.tabs.forEach(tab=>{
            if(!tab.table.isParent && tab.table.parent.table.uuid == this.uuid && tab.table.parent.field == field){
                this.dismissTab()
                tab.show()
                tab.table.setData(data)
                tab.active()
                this.child = tab.table
            }
        })
    }

    setData(data){
        data.forEach(item => {
            let data = []
            for (let i = 0; i < this.dat.keyname.length; i++) {
                data.push(item[this.dat.keyname[i]])
            }
            this.insert(data, item[this.dat.identifyKey])
        });
    }

    dismissTab(){
        if (this.child == null) return
        for(let i=0;i<this.tabs.length;i++){
            if(this.tabs[i].table.uuid == this.child.uuid){
                this.tabs[i].table.dismissTab()
                this.tabs[i].remove()
                return
            }
        }
    }
}
