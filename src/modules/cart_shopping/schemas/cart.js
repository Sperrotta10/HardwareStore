import { DataTypes } from "sequelize";
import { sequelize } from "../../../config/dataBase";
import { User } from "../../register/schemas/user.js";
import { itemCart } from "./itemCart.js";

export const Cart = sequelize.define('Cart', {
    cart_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    user_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : User,
            key : 'user_id'
        }
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

Cart.belongsTo(User, {
    foreignKey : 'user_id',
    as : 'user',
})

Cart.hasMany(itemCart, {
    foreignKey : 'cart_id',
    as : 'itemCart'
})