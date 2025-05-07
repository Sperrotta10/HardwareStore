import { DataTypes } from "sequelize";
import { sequelize } from "../../../config/dataBase";
import { Cart } from "../../cart_shopping/schemas/cart";
import { Role } from "./role.js";
import { Sale } from "../../sale/schemas/sale.js";

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
        references : {
            model : Role,
            key : 'role_id',
        }
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

User.belongsTo(Role, {
    foreignKey : 'role_id',
    as : 'role',
})

User.hasOne(Cart, {
    foreignKey : 'user_id',
    as : 'cart'
})

User.hasMany(Sale, {
    foreignKey : 'user_id',
    as : 'sale',
})