//actividades: {type: [{fotoActividad: String , tituloActividad: String}] , required: false}, modelo aparte

const mongoose = require('mongoose')

const activitySchema = mongoose.Schema({
    actividad: {type: [{fotoActividad: String , tituloActividad: String}] , require: true},
    IdTinerary: {type: mongoose.Types.ObjectId, ref: "itinerary"}
})

const Activity = mongoose.model('activity' , activitySchema)

module.exports = Activity