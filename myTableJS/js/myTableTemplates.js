// templates for generating DOMs    
let _template = {
    tableHeader: "<div class='myTable-header'><h3></h3><div class='panel-btn' id='panel'></div></div>",
    insertBtn: "<span id='add-item' class='btn btn-sm btn-success myTable-btn'><i class='fas fa-plus'></i>增加数据</span>",
    deleteBtn: "<span id='del-item' class='btn btn-sm btn-danger myTable-btn-cell myTable-btn-auto' style='color:white'><i class='fas fa-trash'></i></spam>",
    modifyBtn: "<span id='mod-item' class='btn btn-sm btn-info myTable-btn-cell myTable-btn-auto' style='color:white'><i class='fas fa-edit'></i></span>",
    createBtn: "<span id='cre-item' class='btn btn-sm btn-success myTable-btn-cell' style='color:white'><i class='fas fa-check'></i></span>",
    cancelBtn: "<span id='can-item' class='btn btn-sm btn-danger myTable-btn-cell' style='color:white'><i class='fas fa-times'></i></span>",
    commitBtn: "<span id='com-item' class='btn btn-sm btn-warning myTable-btn'><i class='fas fa-check'></i>提交更改</span>",
    searchText: "<div class='input-group'><div class='nput-group-prepend'><span class='input-group-text' id='basic-addon3'>搜索</span></div><input type='text' class='form-control' id='basic-url' aria-describedby='basic-addon3'></div>",
    newRowDot: "<div class='new-line-dot'></div>",
    modifyRowDot:"",
    deleteRowDot:"",
    searchTextField: null,
    table: "<table><thead><tr></tr></thead><tbody/></table>",
    text_string:"<input>",
    text_decimal:"<input>%",
    datetime:""
}