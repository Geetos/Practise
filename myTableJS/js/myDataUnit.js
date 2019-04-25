class DataUnit{
    static STRING     = 0
    static PERCENTAGE = 1
    static NUMBER     = 2
    static CHECKBOX   = 3
    static LIST       = 4
    static DATE       = 5
    static PASSWORD   = 6
    static CHILDTABLE = 7 

    static DEFAULT    = 10
    static NOTNULL    = 11
    static UNIQUE     = 12
    static EMAIL      = 13
    static READONLY   = 14
    
    constructor(typeStr,fieldName, constraint , table){
        this.unit;
        this.fieldName = fieldName
        this.type = _getConstType(typeStr)
        switch (this.type) {
            case DataUnit.STRING:
                this.unit = new myText(DataUnit.STRING, constraint);
                break;
            case DataUnit.NUMBER:
                this.unit = new myText(DataUnit.NUMBER, constraint);
                break;
            case DataUnit.PERCENTAGE:
                this.unit = new myText(DataUnit.PERCENTAGE, constraint);
                break;
            case DataUnit.DATE:
                this.unit = new myDatePicker();
                break;
            case DataUnit.CHILDTABLE:
                this.unit = new myChildTable(fieldName,table);
                break;
        }
        
    }

    editable(status){
        this.unit.editable(status)
    }

    set(value){
        if (value != undefined) this.unit.set(value)
    }

    createDOM(){
        return this.unit.createDOM()
    }
    
    check(){
        return this.unit.check()
    }

    get(){
        return this.unit.get()
    }
    
}

