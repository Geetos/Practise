// import { _template } from './myTableTemplates.js' 
class DataTypeBase{
    constructor(){this.dom;}
    editable(status){}
    set(value){}
    check(){return true}
    createDOM(){return this.dom}
    get(){}
}

class myList extends DataTypeBase{
    constructor(){super()}
}

class myCheckBox extends DataTypeBase{
    constructor(){super()}
}

class myChildTable extends DataTypeBase{
    constructor(fieldName,table){
        super()
        this.dom = $(_template.childTable)
        this.fieldName = fieldName
        this.table = table
    }

    set(data) {
        this.data = data
    }

    editable(status){
        if(status){this.bind(false);this.dom.addClass('unclickable')}
        else{this.bind(true);this.dom.removeClass('unclickable')}
    }

    bind(status){
        if(status)  this.dom.bind('click', ()=>{
            if(typeof(this.data) == 'undefined') alert ('该子表数据为空')
            else this.table.callTable(this.fieldName, this.data)
        }) 
        else this.dom.unbind()
    }

}

class myText extends DataTypeBase{
    static STRING     = 0
    static PERCENTAGE = 1
    static NUMBER     = 2

    constructor(type,constraint) {
        super()
        this.type = type
        this.constraint = _getConstType(constraint)
        switch (type) {
            case myText.STRING:
                this.dom = $(_template.textString).addClass('myText-string');
                break;
            case myText.PERCENTAGE:
                this.dom = $(_template.textPercentage).addClass('myText-number');
                break;
            case myText.NUMBER:
                this.dom = $(_template.textString).addClass('myText-number');
                break;
        }
    }

    set(data) {
        this.dom.val(data)
    }

    get() {
        return (this.constraint == DataUnit.READONLY ? undefined : this.dom.val())
    }

    clear() {
        this.dom.val('')
    }

    check() {
        if(this.constraint == DataUnit.READONLY) return true
        let flag = true,
            msg = ''
        if (this.constraint == DataUnit.NOTNULL && this.get().length == 0) {
            flag = false;
            msg = '不能为空！'
        } else {
            if (this.type == myText.NUMBER || this.type == myText.PERCENTAGE) {
                let patt = /^(-?\d+)(\.\d+)?$/
                if (!patt.test(this.get())) {
                    flag = false
                    msg = '不是合法数字!'
                }
            }
        }
        if (!flag) {
            alert('\'' + this.fieldName + '\'项 ' + msg)
            return false
        }
        return true
    }
    editable(status) {
        if(this.constraint == DataUnit.READONLY) status = false
        this.dom[0].disabled = !status
    }

}

// export { myText }