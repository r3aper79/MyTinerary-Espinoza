const City = require('../models/City')

const citiesController = {
    addCity: async (req,res) => {
        try{
            const new_City = new City(req.body)
            new_City.save()
            const allCities = await City.find()
            res.json({success:true, response: allCities})
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
    }
}

module.exports = citiesController

/*
const ciudadAcargar = new city(req.body)
 */