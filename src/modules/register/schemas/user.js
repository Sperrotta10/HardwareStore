import { DataTypes } from "sequelize";
import { sequelize } from "../../../config/dataBase";

export const User = sequelize.define('User', {
    user_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    user_name : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true,
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    role_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    user_status : {
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
    tableName : 'User',
    timestamps : false,
})