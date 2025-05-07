import { DataTypes } from "sequelize";
import { sequelize } from "../../../config/dataBase";

export const Category = sequelize.define('Category', {
    category_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
}, {
    tableName : 'Category',
    timestamps : false,
})