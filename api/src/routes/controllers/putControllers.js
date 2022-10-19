const { Player, Event, Group, Product, Order } = require("../../db");
const { Sequelize, Model } = require("sequelize");
const rgExp =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

const asyncUpdateProduct = async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    modifiers,
    isOrder,
    stock,
    state,
    paymentTerm,
  } = req.body;
  const { id } = req.params;

  try {
    const result = await Product.findByPk(id);

    if (result) {
      await Product.update(
        {
          name,
          price,
          description,
          image,
          modifiers,
          isOrder,
          stock,
          state,
          paymentTerm,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(200).json({ message: "Updated successfully" });
    } else {
      return res.status(400).json({ error: "Product not found" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const putGroups = async (req, res) => {
  const { id } = req.params;
  try {
    if (rgExp.test(id)) {
      res
        .status(401)
        .json({ message: "id is require or id is to short, please try again" });
    } else {
      const group = await Group.findByPk(id);
      if (group !== null) {
        await group.set(req.body).save();
        res.status(200).json({ message: "group updated successfully" });
      } else {
        res.status(404).json({ message: "group not found, try again" });
      }
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const editEvent = async (req, res) => {
  const { id } = req.params;
  try {
    if (rgExp.test(id)) {
      const event = await Event.findByPk(id);
      if (event !== null) {
        await event.set(req.body).save();
        res.json({ message: "Event updated successfully" });
      } else {
        res.json({ message: "id not found" });
      }
    } else {
      res.status(401).json({ message: "id invalid" });
    }
  } catch (error) {
    res.json({ error_DB: error.message });
  }
};

const putOrders = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res
        .json({ message: "id is require or id is to short, please try again" })
        .status(400);
    } else {
      if (rgExp.test(id)) {
        const order = await Order.findByPk(id);
        if (order !== null) {
          await order.set(req.body).save();
          res.status(200).json({ message: "order update successfully" });
        } else {
          res.status(404).json({ message: "order not found, try again" });
        }
      } else {
        res.status(401).json({ message: "id invalid" });
      }
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = {
  asyncUpdateProduct,
  putGroups,
  editEvent,
  putOrders,
};
