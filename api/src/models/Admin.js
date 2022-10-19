const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('admin', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        personal_info: {
            type: DataTypes.JSON,//para el bulk
            allowNull: false,
            validate: {
                notNull: {
                    msg: "not null personal_info "
                },
                notEmpty: {
                    arg: true,
                    msg: "empty strings are not allowed"
                }
            }
        },
        permissions: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
    },{
        timestamps:false 
    });
};