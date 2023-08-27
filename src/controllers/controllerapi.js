const express = require('express');
const router = express.Router();

const controllerbi = require("../models/index")
const controllerddi = require("../models/numeroddi")
const controllerddiFindAll = require("../models/ddFindAll")

//Endpoit
router.get("/ddi", controllerddiFindAll)
router.get("/ddi/:ddi",controllerddi)
router.get("/bi/:bi", controllerbi)
router.get("/", (req, res)=>{
    res.redirect("/")
})
router.get("/bi", (req, res)=>{
    res.redirect("/")
})

module.exports = (app)=> {
    app.use("/api", router)
}