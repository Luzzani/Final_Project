const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('roleRequest', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        new_role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{
        timestamps:false 
    });
};