import { DataTypes } from "sequelize";
import { sequelize } from "../../../config/dataBase";

export const Cart = sequelize.define('Cart', {
    cart_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    user_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    created_at : {
        type : DataTypes.DATEONLY,
        allowNull : false,
    },
    updated_at : {
        type : DataTypes.DATEONLY,
        allowNull : false,
    }
}, {
    tableName : 'Cart',
    timestamps : false,
})