function bi (url){
    return `https://www.sepe.gov.ao/ao/actions/bi.ajcall.php?bi=${url}`
}
function ddi(){
    return "https://apis.minfin.gov.ao/servicopublico/pais"
}
function cambio(){
    return "https://apis.minfin.gov.ao/servicopublico/moedas?pagTam=999&pagIni=0&orderBy=ds_moeda%20asc"
}
module.exports = {BI:bi, DDI:ddi, Cambio: cambio}