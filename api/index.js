const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { PORT } = process.env;

const {
  Event,
  Product,
  Group,
  Player,
  Order,
  Admin,
  FilterTags,
} = require("./src/db");

const eventsData = require("./Datos_de_prueba/Eventos.json");
const productsData = require("./Datos_de_prueba/Productos.json");
const groupsData = require("./Datos_de_prueba/Grupos.json");
const playersData = require("./Datos_de_prueba/datosJugadores.json");
const ordersData = require("./Datos_de_prueba/Ordenes.json");
const adminsData = require("./Datos_de_prueba/Admins.json");
const filtersData = require("./Datos_de_prueba/Filtros.json");

const chargeDummyData = async () => {
  const bulkGroup = groupsData.map((obj) => {
    return {
      ...obj,
      schedule: `${obj.days} | ${obj.start} - ${obj.end}`,
    };
  });

  const bulkPlayers = playersData.map((obj) => {
    return {
      personal_info: {
        name: obj["Nombre completo"],
        birthDate: obj["Fecha nacimiento"],
        cel: obj["Celular (personal)"],
        bloodType: obj.Rh,
        email: `${obj["Nombre completo"].split(" ")[1]}@wolves.com`,
        document: obj["Número documento"],
        emergencyContact: obj["Celular (contacto emergencia)"],
        emergencyName: obj["Nombre contacto emergencia"],
        emergencyRel: obj.Parentesco,
        health: obj.Eps,
        isAdmin: false,
        specialConditions: "",
        years: obj.Edad,
        uid: Math.floor(Math.random() * 5000) + obj["Número documento"],
      },
      debt_value: isNaN(obj["Tarifa Wolves"]) ? 0 : obj["Tarifa Wolves"],
      payment_date: obj["Marca temporal"],
      shirt_number: isNaN(obj["Número camisa"]) ? 99 : obj["Número camisa"],
    };
  });

  const bulkAdmin = adminsData.map((obj) => {
    return {
      personal_info: { ...obj },
      permissions: ["all"],
    };
  });

  //console.log(bulkProducts);

  try {
    await Event.bulkCreate(eventsData);
    await FilterTags.bulkCreate(filtersData);
    //await Product.bulkCreate(bulkProducts);
    await Group.bulkCreate(bulkGroup);
    //await Player.bulkCreate(bulkPlayers);
    //await Order.bulkCreate(ordersData);
    await Admin.bulkCreate(bulkAdmin);
  } catch (error) {
    console.log(error.message);
  }
  try {
    productsData.forEach(async (p) => {
      const createdProduct = await Product.create(p);
      createdProduct.addFilterTags(p.FilterTags);
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  chargeDummyData();
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`);
  });
});
