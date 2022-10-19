const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('order', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        concept: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        value:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        description:{
            type:DataTypes.TEXT,
            allowNull: false,
        },
        payment_term: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        payment_mode: {
          type: DataTypes.STRING,
          allowNull: true,
        },        
        order_state:{
          type: DataTypes.ENUM('Pending', 'Deleted', 'Paid'),
          allowNull: true,
        },
        payment_date: {
          type: DataTypes.DATE,
          allowNull: true,
        },
    });
};