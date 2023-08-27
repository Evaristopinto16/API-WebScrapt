//carregando os modulos
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')


//Inicializando a Aplicação
const app = express();

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

require("./controllers/controllerapi")(app)
require("./controllers/controllerHome")(app)
app.get("/:?", (req, res)=>{
    res.redirect("/")
})
app.listen(3000, ()=>{
    console.log("servidor no Ar!!!")
})