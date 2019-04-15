let test1, test2;
class myTable {
    constructor(dat) {
        this.dat = dat
        this.table = new tableClass(dat)
        this.table.paint()
        this._addListener()
    }

    insert(data) {
        data.forEach(item => {
            let row = new rowClass(this.dat, this.table, rowClass.INSERTROW)
            row.append(item)
        });        
    }

    create() {
        let row = new rowClass(this.dat, this.table, rowClass.NEWROW)
        row.create()
    }

    commitChange(){

    }

    /**
     * Delete specified row from table
     * @param {int} pos which row needs to be deleted 
     */
    deleteRow(pos) {

    }


    _addListener() {
        if (this.dat.functions.insert) {
            _getDom(_getDomId(this.dat.anchor, '#add-item')).bind('click', () => {
                this.create()
            })
        }

        if(this.dat.functions.commit){
            _getDom(_getDomId(this.dat.anchor, '#com-item')).bind('click', ()=>{
                this.commitChange()
            })
        }
    }

}