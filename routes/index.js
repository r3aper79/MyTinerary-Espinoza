//esta archivo debe estar encargado del ruteo

const express = require('express') //importar libreria en node
const citiesController = require('../controllers/citiesController')
const router = express.Router()

//importo la funciones del controller
//citiesController.addCity
const {addCity , getCities , getCity} = citiesController
//para esta ruta

router.route('/cities')
//.post (primerFuncion, segundaFuncion)
.post(addCity)
.get(getCities)


router.route('/city/:id')
.get(getCity)


//exportar router

module.exports = router