class Tab{
    constructor(dat, tabDom, tabs){
        this.tab = tabDom
        this.tabs = tabs
        this.tabNav = $(_getDomId('myTable-tab-nav'))
        this.tableSection = $(_getDomId('myTable-section'))
        let uuid = _guid()
        this.section = $("<div class='myTable-hide'/>").attr('id',uuid)
        $(this.tab.children('a')[0]).text(dat.tableName)
        dat.sectionAnchor = uuid
        this.table = new tableClass(dat, tabs)
    }

    show(){
        this.tab.appendTo(this.tabNav)
        this.tab.bind('click', () =>{this.active()})
        this.section.appendTo(this.tableSection)
        this.table.paint()
    }

    remove(){
        this.tab.remove()
        this.section.remove()
    }

    active(){
        $(this.tab.children('a')[0]).addClass('active')
        this.section.removeClass('myTable-hide') 
        this.tabs.forEach(el => {
            if(el != this){el.deactive()}
        });
    }

    deactive(){
        $(this.tab.children('a')[0]).removeClass('active')
        this.section.addClass('myTable-hide')
    }

    getTable(){return this.table}
}

class TabPage{

    static PARENT = 50
    static CHILD = 51

    constructor(anchor){
        $(_template.section).appendTo(_getDomId(anchor))
        this.tabs = []
    }

    append(type, dat){
        let tabDom = $(_template.tab).clone()
        let tab = new Tab(dat, tabDom, this.tabs)
        this.tabs.push(tab)
        if(type == TabPage.PARENT){
            tab.show()
            tab.table.fetchData()
            tab.active()
         }
        return tab.getTable()
    }
}