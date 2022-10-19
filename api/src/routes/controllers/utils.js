const { Player, Event, Group, Admin } = require("../../db");
const { Sequelize, Model } = require("sequelize");

const create = async (req, res, next) => {
  const { permissions} = req.body;
  

  try {
    const newAd = await Group.create({
    
    });

    res.json({ message: "successful process" });
  } catch (error) {
    next(error);
  }
};

const prueba = (req, res) => {
    res.send("probando");
  };

const createGroup = async (req, res) => {
  const {
    id,
    name,
    location,
    schedule,
    description,
    image,
    inscription_cost,
    contact,
    whatsapp,
    accept_newPlayers,
    genre,
  } = req.body;

  try {
    const newGroup = await Group.create({
        ...req.body
    })
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  create,
  createGroup,
  prueba
};
