import { DataTypes } from "sequelize";
import { sequelize } from "../../../config/dataBase";

export const itemCart = sequelize.define('itemCart', {
    item_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    cart_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    product_id : {
        type : DataTypes.INTEGER,
    },
    quantity : {
        type : DataTypes.INTEGER,
    }
}, {
    tableName : 'itemCart',
    timestamps : false,
})