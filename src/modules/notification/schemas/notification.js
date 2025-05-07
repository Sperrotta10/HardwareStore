import { DataTypes } from "sequelize";
import { sequelize } from "../../../config/dataBase";

export const Notification = sequelize.define('Notification', {
    notification_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    product_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    message : {
        type : DataTypes.TEXT,
        allowNull : false,
    },
    notification_status : {
        type : DataTypes.BOOLEAN,
        allowNull : false,
    },
    created_at : {
        type : DataTypes.DATEONLY,
        allowNull : false,
    },
}, {
    tableName : 'Notification',
    timestamps : false,
})