const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "group",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "empty strings are not allowed",
          },
          len: {
            args: [4, 30],
            msg: "name should be among 4 and 30",
          },
        },
      },
      location: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      schedule: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "empty strings are not allowed",
          },
          len: {
            args: [4, 30],
            msg: "name should be between 4 and 30",
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: {
            msg: "empty strings are not allowed",
          },
          len: {
            args: [4, 100],
            msg: "image should be between 4 and 30",
          },
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      inscription_cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: {
            arg: true,
            msg: "contact should be a valid email",
          },
          notEmpty: {
            arg: true,
            msg: "empty strings are not allowed",
          },
        },
      },
      whatsapp: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isUrl: {
            arg: true,
            msg: "whatsApp should be a link ",
          },
          notEmpty: {
            arg: true,
            msg: "empty strings are not allowed",
          },
        },
      },
      accept_newPlayers: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      genre: {
        type: DataTypes.ENUM("Male", "Female", "Mix"),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
