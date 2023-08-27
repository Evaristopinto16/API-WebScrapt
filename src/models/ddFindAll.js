const axios = require("axios")
const {DDI} = require("../db") 

module.exports = async(req, res)=>{
    try {
        const {data} = await axios(DDI())
        const dados = data.lista
    
        if(!dados){
            res.json({error: "erro ao carregar os codicos DDI"})
        }else{
            
        res.json({data: dados})
        }
 
    } catch (error) {
        res.status(400).json({status: "error de conexão"})

    }
}