// import { _template } from './myTableTemplates.js' 

class myRowIncident {
    static DELETE = 30
    static MODIFY = 31
    static CANCLE = 32
    static CREATE = 33
    static UNDO_MODIFY = 34
    static COMMIT_MODIFY = 35

    constructor(row) {
        this.panel = $('<span/>')
        this.row = row
        this.panel.appendTo(row.rowDom.children('th:last'))

    }

    hookUp(type) {
        let template
        switch (type) {
            case myRowIncident.DELETE:
                {
                    template = $(_template.deleteBtn).clone()
                    template.bind('click', () => {
                        if (confirm("确定删除该条记录吗?")) {
                            this.row.remove()
                            this.row.table.changeLog.push({
                                type: myRowIncident.DELETE,
                                id: this.row.id
                            })
                        }
                    })
                    break
                }



            case myRowIncident.MODIFY:
                {
                    template = $(_template.modifyBtn).clone()
                    template.bind('click', () => {
                        this._flush()
                        this.hookUp(myRowIncident.UNDO_MODIFY)
                        this.hookUp(myRowIncident.COMMIT_MODIFY)
                        this.row.rowDom.addClass('row-modify')
                        this.row.containerList.forEach(v => {
                            v.editable(true)
                        })
                    })
                    break
                }



            case myRowIncident.CANCLE:
                {
                    template = $(_template.cancelBtn).clone()
                    template.bind('click', () => {
                        this.row.remove()
                    })
                    break
                }



            case myRowIncident.CREATE:
                {
                    template = $(_template.createBtn).clone()
                    template.bind('click', () => {
                        let data = [],
                            flag = true
                        this.row.containerList.forEach(v => {
                            if (v.check(true)) data.push(v.get())
                            else flag = false
                        })
                        if (flag) {
                            this.row.table.insert(data)
                            this.row.remove()
                            this.row.table.changeLog.push({
                                type: tableClass.INSERT,
                                data: data
                            })
                        }
                    })
                    break
                }



            case myRowIncident.UNDO_MODIFY:
                {
                    template = $(_template.cancelBtn).clone()
                    template.bind('click', () => {
                        this._flush()
                        this.hookUp(myRowIncident.DELETE)
                        this.hookUp(myRowIncident.MODIFY)
                        for (let i = 0; i < this.row.containerList.length; i++) {
                            this.row.containerList[i].set(this.row.currentData[i])
                            this.row.containerList[i].editable(false)
                        }
                        this.row.rowDom.removeClass('row-modify')
                    })
                    break
                }



            case myRowIncident.COMMIT_MODIFY:
                {
                    template = $(_template.createBtn).clone()
                    template.bind('click', () => {
                        let modifiedDataList = {},
                            flag = true
                        for (let i = 0; i < this.row.containerList.length; i++) {
                            let val = this.row.containerList[i]
                            if (val.check(true)) {
                                flag = false;
                                break;
                            }

                            if (val.type != DataUnit.CHILDTABLE && val.get() != this.row.currentData[i]) {
                                modifiedDataList[this.row.dat.keyname[i]] = val.get()
                            }
                        }
                        if (flag) {
                            this.row.modify(modifiedDataList)
                            this._flush()
                            this.hookUp(myRowIncident.DELETE)
                            this.hookUp(myRowIncident.MODIFY)
                            this.row.containerList.forEach(v => {
                                v.editable(false)
                            })
                            this.row.rowDom.removeClass('row-modify')
                        }
                    })
                    break
                }
        }

        template.appendTo(this.panel)
    }

    _flush() {
        this.panel.children().remove()
    }
}

// export { myRowIncident }