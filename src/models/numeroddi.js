const axios = require("axios")
const {DDI} = require("../db") 
module.exports = async (req, res)=>{
    const input = req.params.ddi
    
try {
    
    
    const {data} = await axios(DDI()) 
        const resp = data.lista
   
        const dados = resp.find(x=> x.nroDdi===input|| x.noPais===input|| x.noSigla ===input)
    if(!dados){
        res.status(404).json("DDI não encontrado")
    }else{
        const response = {
            siglas: dados.noSigla,
            ddi: dados.nroDdi,
            pais: dados.noPais,
          }

    res.json({data: response})
    }
    
} catch (error) {
    res.status(400).json({status: "error de conexão"})
}
    
}