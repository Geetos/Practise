class rowClass {
    static INSERTROW = 0
    static NEWROW = 1

    constructor(dat, table, type) {
        table.rowList.push(this)
        this.dat = dat
        this.table = table
        this.containerList = []
        this.uuid = _guid()
        this.new_row = $('<tr/>').attr('id', this.uuid)
        let btnPanel = $('<span/>')
        if (type == rowClass.INSERTROW) {
            if (this.dat.functions.delete){
                let deleteBtn = $(_template.deleteBtn).clone()
                deleteBtn.appendTo(btnPanel)
            }
            if (this.dat.functions.modify){
                let modifyBtn = $(_template.modifyBtn).clone()
                modifyBtn.appendTo(btnPanel)
            }
        } else {
            let createBtn = $(_template.createBtn).clone()
            let cancelBtn = $(_template.cancelBtn).clone()
            this.new_row.addClass('row-insert')
            createBtn.bind('click', () => {
                // let row = new rowClass(dat, table, rowClass.INSERTROW)
                // row.append(data)
            })
            cancelBtn.bind('click', () => {
                this.remove()
            })
            cancelBtn.appendTo(btnPanel)
            createBtn.appendTo(btnPanel)
        }

        if (dat.functions.columnLine) {
            $('<th>' + (type == rowClass.INSERTROW ? 
                (dat._length + 1) : '#') + '</th>').appendTo(this.new_row)
        }

        for (let i = 0; i <= dat.fields.length; i++) {
            $('<th ' + (type == rowClass.INSERTROW ? 
                (i < dat.fields.length - 1 ? 
                    '' : (i < dat.fields.length ?
                         'class="lastSndCell"' : 'class="lastCell"')) : '') + '></th>').appendTo(this.new_row)
        }

        btnPanel.appendTo(this.new_row.children('th:last'))
    }

    append(data) {
        this.dat._length += 1
        for (let i = 0; i < data.length; i++) {
            $(this.new_row.children()[(this.dat.functions.columnLine ? i + 1 : i)]).html(data[i])
        }
        this.new_row.appendTo(_getDomId(this.dat._table, 'tbody'));
    }

    create(){
        for(let i=0;i < this.dat.dataType; i++){
            switch(this.dat.dataType[i]){
                case 'text': {
                    let container = new Text(Text.STRING)
                    $(this.new_row.children()[(this.dat.functions.columnLine ? i + 1 : i)]).append()
                }
            }
        }

        if(this.table.isEmpty()) this.new_row.appendTo(_getDomId(this.dat._table,'tbody'))
        else _getDom(_getDomId(this.dat._table, 'tbody', 'tr:eq(0)')).before(this.new_row)
    }

    remove(){
        _getDom(this.uuid).remove()
    }


    modifyRow(data, pos) {

    }

    getData(num){

    }
}