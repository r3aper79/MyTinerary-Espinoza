const Itinerary = require("../models/Itineraries")

//importar el modelo
const itinerariesController = {
    addItinerary: async (req, res) =>{
        try{
            const newItinerary = new Itinerary(req.body)
            await newItinerary.save()
            res.json({success: true , response: newItinerary})
        }catch (error){
            res.json({success: false , response: error})
        }
    },
    deleteItinerary: async (req , res) =>{
        try{
            const itinerary = await Itinerary.findOneAndDelete({_id: req.params.id})
            res.json({success: true})
        } catch(error){
            res.json({success: false , response: error})
        }
    },
    getItineraryById: async (req , res) =>{
        try{
            //primero busco el itinerario que dentro tenga IdCity que es mi parametro
            const itinerary = await Itinerary.find({IdCity: req.params.id})
            res.json({success: true , response: itinerary})
        } catch(error){
            res.json({success: false , response: error})
        }
    },
    modifyItineraryById: async (req , res) =>{
        try{
            const modifiedItinerary = await Itinerary.findOneAndUpdate({_id: req.params.id}, {...req.body}, {new: true})
            res.json({success: true , response: modifiedItinerary})
        } catch(error){
            res.json({success: false , response: error})
        }
        
    },
    getAllItineraries: async(req , res) => {
        try{
            const allItineraries = await Itinerary.find()
            res.json({success: true , response: allItineraries})
        } catch(error){
            res.json({success: false , response: error})
        }
    }
}

module.exports = itinerariesController