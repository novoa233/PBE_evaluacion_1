const express = require('express')
const router = express.Router();
const utils = require('../resources/utils')
const main = require('../controllers/MainController')

//Rutas
router.get('/index',main.getIndex)
router.post('/login',main.setLogin)
router.post('/triangulo',main.postTriangulo)
router.post('/cuadrado',main.postCuadrado)
router.post('/circunferencia',main.postCircunferencia)

module.exports = router;