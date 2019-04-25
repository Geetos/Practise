// import { _template } from './myTableTemplates.js' 
// import { myRowIncident } from './myRowIncident.js'
// import { myText } from './myText.js'

class rowClass {
    constructor(dat, table, type) {
        table.rowList.push(this)
        this.dat = dat
        this.table = table
        this.containerList = []
        this.id
        this.pos = 0
        this.currentData = []
        this.rowDom = $('<tr/>')
        let rowIncident

        if (dat.functions.columnLine) {
            $('<th>' + (type == tableClass.INSERT ?
                (this.table.length + 1) : '#') + '</th>').appendTo(this.rowDom)
        }

        for (let i = 0; i <= dat.fields.length; i++) {
            $('<th ' + (type == tableClass.INSERT ?
                (i < dat.fields.length - 1 ?
                    '' : (i < dat.fields.length ?
                        'class="lastSndCell"' : 'class="lastCell"')) : '') + '></th>').appendTo(this.rowDom)
        }

        rowIncident = new myRowIncident(this)

        if (type == tableClass.INSERT) {
            if (this.dat.functions.delete) rowIncident.hookUp(myRowIncident.DELETE)
            if (this.dat.functions.modify) rowIncident.hookUp(myRowIncident.MODIFY)
        } else if (type == tableClass.CREATE) {
            this.rowDom.addClass('row-insert')
            rowIncident.hookUp(myRowIncident.CANCLE)
            rowIncident.hookUp(myRowIncident.CREATE)
        }
    }

    append(data, pos = 0) {
        this.table.length += 1
        this.pos = this.table.length
        for (let i = 0; i < data.length; i++) {
            $(this.rowDom.children()[(this.dat.functions.columnLine ? i + 1 : i)]).append(this._fillUnit(this.dat.dataType[i], this.dat.keyname[i], this.dat.constraints[i], false, data[i]))
        }
        this.table.append(this.rowDom, pos)
    }

    create(pos = 1, preset = undefined) {
        for (let i = 0; i < this.dat.dataType.length; i++) {
            $(this.rowDom.children()[(this.dat.functions.columnLine ? i + 1 : i)]).append(this._fillUnit(this.dat.dataType[i], this.dat.keyname[i], this.dat.constraints[i], true, (typeof (preset) == 'undefined' ? undefined : preset[i])))
        }
        this.table.append(this.rowDom, pos)
    }

    _fillUnit(type, fieldName, constraint, status, value = undefined) {
        let container =  new DataUnit(type, fieldName, constraint, this.table)
        container.editable(status)
        container.set(value)
        this.currentData.push(container.get())
        this.containerList.push(container)
        return container.createDOM()
    }

    remove() {
        this.table.rowList.pop(this.table.rowList.indexOf(this))
        this.rowDom.remove()
    }

    modify(data) {
        let changeData = {}
        for (let item in data) {
            let num = this.dat.keyname.indexOf(item)
            this.currentData[num] = data[item]
            this.containerList[num].set(data[item])
            changeData[item] = data[item]
        }
        this.table.changeLog.push({
            type: myRowIncident.MODIFY,
            data: changeData,
            id: this.id
        })
    }
}

// export { rowClass }