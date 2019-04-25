// import { tableClass } from './tableClass.js'
let test_unit
class myTable {
    static pageManage = {}

    constructor(dat) {
        this.dat = dat
        this.table
        if (!dat.hasOwnProperty('parentTable')) {
            if (_getDom(dat.anchor).length > 0) {
                myTable.pageManage[dat.anchor] = new TabPage(dat.anchor)
                this.table = myTable.pageManage[dat.anchor].append(TabPage.PARENT, dat)
            }
        } else {
            if (dat.parentTable.dat.anchor in myTable.pageManage) {
                this.table = myTable.pageManage[dat.parentTable.dat.anchor].append(TabPage.CHILD, dat)
            }
        }
        
    }

    // insert(data) {

    // }

    // create() {

    // }

    // modify(data, pos) {

    // }

    // commitChange() {

    // }

    // deleteRow(pos) {

    // }

    // fetchData() {
    //     // this.table.ajax.execute({type:myAjax.QUERY})
    // }

}

let money_table = new myTable({
    anchor: "money-table",
    tableName: "资金表",
    fields: ["合同金额", "商品采购成本", "转包实施成本", "项目利润率", "已回款金额", "回款比例", "回款明细", "项目合同回款要求"],
    keyname: ["contractMoney", "costMoney", "subcontractingCost", "profitMargin", "paybackMoney", "paybackRatio", "paybackDetails", "reamek"],
    identifyKey: "id",
    constraints: ['notnull', 'notnull', 'notnull', 'notnull', 'notnull', 'notnull', 'default', 'notnull'],
    dataType: ['number', 'number', 'number', 'percentage', 'number', 'number', 'childtable', 'text'],
    functions: {
        columnLine: true,
        insert: true,
        modify: true,
        search: true,
        delete: true,
        commit: true,
        refresh: true
    },
    style: {
        strip: true,
        darkMode: false,
        tableBorder: true,
        headerPanel: true,
    },
    ajax: [{
        action: 'insert',
        type: 'POST',
        url: '/moneyinfo/add',
        success: null,
        fail: null
    }, {
        action: 'modify',
        type: 'POST',
        url: 'localhost/modify',
        success: null,
        fail: null
    }, {
        action: 'query',
        type: 'GET',
        url: '/moneyinfo/query/1',
        success: null,
        fail: null
    }, {
        action: 'delete',
        type: 'POST',
        url: 'localhost/delete',
        success: null,
        fail: null
    }]
})
// 字表没有主动数据的方法 靠调用主表获取数据然后解析相应的字段进行填充
let money_item_table = new myTable({
    parentTable: money_table,
    parentField: "paybackDetails",
    tableName: "回款明细表",
    fields: ["回款金额", "回款日期", "回款次数"],
    keyname: ["paybackMoney", "paybackDate", "paybackCount"],
    identifyKey: "id",
    constraints: ["notnull", "default", "readonly"],
    dataType: ["number", "text", "number"],
    ajax: [{
        action: 'insert',
        type: 'POST',
        url: 'localhost/add',
        success: null,
        fail: null
    },{
        action: 'modify',
        type: 'POST',
        url: 'localhost/modify',
        success: null,
        fail: null
    },{
        action: 'delete',
        type: 'POST',
        url: 'localhost/delete',
        success: null,
        fail: null
    }]
})