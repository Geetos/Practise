// import { _getConstType } from './myTableConfig.js'
let _test_fetch = [{
        "id": 1,
        "contractMoney": 11,
        "costMoney": 11,
        "subcontractingCost": 11,
        "profitMargin": 22,
        "paybackMoney": 33,
        "paybackRatio": 1.1,
        "paybackDetails": [{
            "id": 3,
            "paybackMoney": 100,
            "paybackDate": "2019-11-18",
            "paybackCount": 1
        }, {
            "id": 4,
            "paybackMoney": 100,
            "paybackDate": "2019-11-18",
            "paybackCount": 2
        }],
        "reamek": 'asdfasdf'
    },
    {
        "id": 2,
        "contractMoney": 11,
        "costMoney": 21,
        "subcontractingCost": 51,
        "profitMargin": 22,
        "paybackMoney": 33,
        "paybackRatio": 1.1,
        "paybackDetails": [{
            "id": 5,
            "paybackMoney": 200,
            "paybackDate": "2019-11-18",
            "paybackCount": 1
        }, {
            "id": 6,
            "paybackMoney": 300,
            "paybackDate": "2019-11-18",
            "paybackCount": 2
        }],
        "reamek": 'asdfasdf'
    }
]
class myAjax {
    static INSERT = 20
    static QUERY = 41
    static MODIFY = 31
    static DELETE = 30

    constructor(table) {
        this.table = table

    }

    execute(log) {
        let dat
        for (let i = 0; i < this.table.dat.ajax.length; i++) {
            if (_getConstType(this.table.dat.ajax[i].action) == log.type) {
                dat = this.table.dat.ajax[i]
            }
        }

        switch (log.type) {
            case myAjax.QUERY:
                {   
                    let reData = null;
                    // the current table is parent-table
                    if (this.table.isParent) {
                        // let reData = this._execu_ajax(dat)
                        reData = _test_fetch
                    }else{
                        // evoke query function of its parent table 
                        // reData = this.table.parent.table.ajax.execute(myAjax.QUERY)
                    }
                    return reData
                }


            case myAjax.INSERT:
                {
                    let serialize_data = {}
                    for (let i = 0; i < log.data.length; i++) {
                        if(typeof(log.data[i]) == 'undefined') continue
                        serialize_data[this.table.dat.keyname[i]] = log.data[i]
                    }
                    dat.data = serialize_data
                    this._execu_ajax(dat)

                    break
                }

            case myAjax.MODIFY:
                {
                    let serialize_data = {}
                    for (let key in log.data) {
                        serialize_data[key] = log.data[key]
                    }
                    serialize_data[this.table.dat.identifyKey] = log.id
                    dat.data = serialize_data
                    this._execu_ajax(dat)
                    break;
                }

            case myAjax.DELETE:
                {
                    dat.data = {}
                    dat.data[this.table.dat.identifyKey] = log.id
                    this._execu_ajax(dat)
                    break
                }
        }
        return true
    }


    _execu_ajax(dat) {
        let reData = null
        dat.data = JSON.stringify(dat.data)
        console.log(dat)
        // $.ajax({
        //     type: dat.action,
        //     url: dat.url,
        //     dataType: 'json',
        //     contentType: 'application/json',
        //     // data: dat.data,
        //     success: function (data) {
        //         reData = data
        //     },
        //     failure: function(){
        //         alert("操作失败！操作类型：" + dat.action)
        //     }
        // });
        return reData
    }
}

// export { myAjax }