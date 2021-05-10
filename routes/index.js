//esta archivo debe estar encargado del ruteo

const express = require("express"); //importar libreria en node
const citiesController = require("../controllers/citiesController");
const itinerariesController = require("../controllers/itinerariesControler");
const userController = require("../controllers/userController");
const validator = require("../controllers/validator");
const passport = require("passport");
require("../config/passport");

const router = express.Router();

//importo la funciones del controller
//citiesController.addCity
const {
  addCity,
  getCities,
  getCity,
  deleteCity,
  modifyCity,
} = citiesController;
//para esta ruta
const {
  addItinerary,
  deleteItinerary,
  getItineraryByCityId,
  getItineraryById,
  modifyItineraryById,
  getAllItineraries,
} = itinerariesController;
//destructurar las funciones de userControler
const {
  registrarUsuario,
  loguearUsuario,
  loginFromLocalStorage,
} = userController;
//destructurar del validador
const { validarCuentaNueva } = validator;

//citiesController
router
  .route("/cities")
  //.post (primerFuncion, segundaFuncion)
  .post(addCity)
  .get(getCities);

router.route("/city/:id")
.get(getCity)
.delete(deleteCity)
.post(modifyCity);

//itinerariesController
router.route("/itineraries")
.post(addItinerary)
.get(getAllItineraries);

router.route("/itineraries/:id")
.get(getItineraryById)
.delete(deleteItinerary)
.post(modifyItineraryById);

//userController
router.route("/user/register")
.post(validarCuentaNueva, registrarUsuario);

router.route("/user/login")
.post(loguearUsuario);

router.route("/user/localstorage")
.get(passport.authenticate("jwt", { session: false }),loginFromLocalStorage);
//exportar router

module.exports = router;
