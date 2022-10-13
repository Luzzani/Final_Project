const { Player,Event,Group } = require('../db')
const { Sequelize, Model } = require('sequelize')



const create = async (req, res, next) => {
    const { name, location,description,date
    } = req.body


    try {
        const newBreed = await Event.create({
            name, 
            location,
            description,
            date
        })

        res.json({ message: 'successful process' })


    } catch (error) {
        next(error)
    }

}



const playersFromDB= async () => {
    try {
      const myPlayers= await Player.findAll();
      if (myPlayers) return myPlayers;
      else return false;
      
    } catch (error) {
      console.log({error: error.message})
    } 
  }

module.exports = {
    create,
    playersFromDB
}