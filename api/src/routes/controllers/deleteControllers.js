const { Player, Event, Group, Product } = require("../../db");
const rgExp =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

const asyncDeleteProduct = async (req, res) => {
  try {
    if (rgExp.test(req.params.id)) {
      await Product.destroy({ where: { id: req.params.id } });
      res
        .status(200)
        .json({ message: "The product has been successfully removed" });
    } else {
      res.status(401).json({ message: "id invalid" });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteGroups = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res
        .status(400)
        .json({ message: "id is require or id is to short, please try again" });
    } else {
      if (rgExp.test(id)) {
        const validateGroup = await Group.findByPk(id);
        if (validateGroup !== null) {
          await Group.destroy({
            where: { id },
          });
          res.status(200).json({ message: "Group has been delete" });
        } else {
          res.status(404).json({ message: "group not found" });
        }
      } else {
        res.status(412).json({ message: "id invalid" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(411).json({ error: "id is missing" });
    } else {
      if (rgExp.test(id)) {
        await Event.destroy({
          where: { id },
        });
        res.json({ message: "Event deleted" });
      } else {
        res.status(400).json({ message: "Bad request" });
      }
    }
  } catch (error) {
    res.status(400).json({ error_DB: error.message });
  }
};

module.exports = {
  asyncDeleteProduct,
  deleteGroups,
  deleteEvent,
};
