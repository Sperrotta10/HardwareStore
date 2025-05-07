import { DataTypes } from "sequelize";
import { sequelize } from "../../../config/dataBase";

export const Sale = sequelize.define('Sale', {
    sale_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    user_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    sale : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    sale_total : {
        type : DataTypes.FLOAT,
        allowNull : false,
    },
    created_at : {
        type : DataTypes.DATEONLY,
        allowNull : false,
    },
}, {
    tableName : 'Sale',
    timestamps : false,
})