const axios = require("axios")
const {BI} = require("../db")

module.exports = async (req, res)=>{
    const nro = req.params.bi;
     
    try {
     const  {data} = await axios(BI(nro))
     const resp = data.data
    if(!resp){
        res.status(404).json({status: "BI. invalido", erro:"Numero de Bilhete não encontrado"})
    }else{
        let genero;
        if(resp.genero === "F"){
            genero = "FEMENINO"
        }else{
            genero = "MASCULINO"
        }
    const response = {
        nomeCompleto: resp.nome,
        natural: resp.naturalidade,
        dataNascimento: resp.data_nasc,
        genero: genero,
        nomePai: resp.pai_nome_completo,
        nomeMae: resp.mae_nome_completo 
    } 
     return res.json({stutus: "b.i valido", data: response})
    }
     
 
    } catch (error) {
        res.status(400).json({status: "error de conexão"})
    
    }

}