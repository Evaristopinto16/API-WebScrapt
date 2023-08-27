module.exports = app=>{
    app.get("/", (req, res)=>{
        res.json({status: "API de Validação de bilhete", autores: "Evaristo Pinto e Tavares Evaristo"})
    })
}
