function _getDom(id_tag) {
    if (id_tag.startsWith('#')) return $(id_tag)
    return $('#' + id_tag)
}

function _getDomId(...values) {
    let id = ''
    if (values[0].startsWith('#')) id = values[0]
    else id = '#' + values[0]
    for (let i = 1; i < values.length; i++) id += ' ' + values[i]
    return id
}

function _guid(){
    let S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    return (S4()+S4());
}

function _getDateTime(timestamp){
    var datetime = new Date();
    datetime.setTime(timestamp);
    var year = datetime.getFullYear();
    var month = datetime.getMonth()+1;
    var date = datetime.getDate();
    var hour = datetime.getHours();
    var minute = datetime.getMinutes();
    var second = datetime.getSeconds();
    var msecond = datetime.getMilliseconds();
    return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
}

