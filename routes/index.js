//esta archivo debe estar encargado del ruteo

const express = require('express') //importar libreria en node
const citiesController = require('../controllers/citiesController')
const itinerariesController = require('../controllers/itinerariesControler')
const router = express.Router()

//importo la funciones del controller
//citiesController.addCity
const {addCity , getCities , getCity , deleteCity , modifyCity} = citiesController
//para esta ruta
const {addItinerary,deleteItinerary,getItineraryByCityId,
getItineraryById,modifyItineraryById,getAllItineraries} = itinerariesController


router.route('/cities')
//.post (primerFuncion, segundaFuncion)
.post(addCity)
.get(getCities)

router.route('/city/:id')
.get(getCity)
.delete(deleteCity)
.post(modifyCity)

router.route('/itineraries')
.post(addItinerary)
.get(getAllItineraries)

router.route('/itineraries/:id')
.get(getItineraryById)
.delete(deleteItinerary)
.post(modifyItineraryById)

router.route('/itineraries/:cityID')
.get(getItineraryByCityId)
//exportar router

module.exports = router