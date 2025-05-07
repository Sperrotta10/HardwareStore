import { DataTypes } from "sequelize";
import { sequelize } from "../../../config/dataBase";

export const Product = sequelize.define('Product', {
    product_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    description : {
        type : DataTypes.TEXT,
        allowNull : false,
    },
    price : {
        type : DataTypes.FLOAT,
        allowNull : false,
    },
    image : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    stock : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    min_stock : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    category_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    offer_percentage : {
        type : DataTypes.FLOAT,
        defaultValue : 0.0,
    },
    product_status : {
        type : DataTypes.BOOLEAN,
        defaultValue : true,
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
    tableName : 'Product',
    timestamps : false,
})