const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('product', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        description:{
            type:DataTypes.TEXT,
            allowNull: false,
        },
        image:{
          type: DataTypes.STRING,
          allowNull: true,
        },
        modifiers:{
          type: DataTypes.ARRAY(DataTypes.JSON),
          allowNull: true,
        },
        isOrder: {
          type: DataTypes.BOOLEAN,
          allowNull:false,
        },
        stock:{
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        state: {
          type: DataTypes.BOOLEAN,
          allowNull:false,
        },
        paymentTerm: {
          type: DataTypes.INTEGER,
          allowNull: false,
        }
    },{
        timestamps:false 
    });
};