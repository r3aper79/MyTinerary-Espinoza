const City = require('../models/City')

const citiesController = {
    addCity: async (req,res) => {
        try{
            //debo enviar un objeto pero req.body ya es un objeto
            const new_City = new City(req.body)
            await new_City.save()
            res.json({success:true, response: new_City})
        }
        catch(error){
            res.json({success: false , response: error})
        }
    },
    getCities: async (req , res) => {
        try {
            const allCities = await City.find()
            res.json({success: true, response: allCities})       
        } catch (error) {
            res.json({success: false , response: error})
        }
    },
    getCity: async (req , res) => {
        const variable = req.params.id
        try {
            const city = await City.findOne({_id: variable})
            res.json({success: true, response: city})
        } catch (error) {
            res.json({success: false , response: error})
        }
    },
    deleteCity: async (req , res) =>{
        try{
            const city = await City.findOneAndDelete({_id: req.params.id})
            res.json({success: true})
        } catch(error){
            res.json({success: false , response: error})
        }
    },
    modifyCity: async (req , res) => {
        try{
            const city = await City.findOneAndUpdate({_id: req.params.id} , {...req.body} , {new: true})
            res.json({success: true , response: city})
        } catch (error){
            res.json({success: false , response: error})
        }
    }
}

module.exports = citiesController