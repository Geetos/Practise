class Text{
    static STRING = 0
    static DECIMAL = 1
    
    constructor(type){
        this.uuid = _guid()
        this.type = type
        this.dom = (type == Text.STRING ? $(_template.text_string) : $(_template.text_decimal))
        this.dom.attr('id', this.uuid)
    }

    set(data){
        _getDom(this.uuid).text(data)
    }

    get(){
        return _getDom(this.uuid).text()
    }

    clear(){
        _getDom(this.uuid).text('')
    }

    check(){
        if(this.get().length == 0) return false
        if(this.type == Text.DECIMAL){
            let patt = /^(-?\d+)(\.\d+)?$/
            if (!patt.test(this.get())){
                return false
            }
        }
    }

    createDOM(){
        return this.dom
    }

}