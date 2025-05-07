import { DataTypes } from "sequelize";
import { sequelize } from "../../../config/dataBase";
import { Cart } from "./cart.js"
import { Product } from "../../products/schemas/product.js"

export const itemCart = sequelize.define('itemCart', {
    item_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    cart_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : Cart,
            key : 'cart_id',
        }
    },
    product_id : {
        type : DataTypes.INTEGER,
        references : {
            model : Product,
            key : 'product_id',
        }
    },
    quantity : {
        type : DataTypes.INTEGER,
    }
}, {
    tableName : 'itemCart',
    timestamps : false,
})

itemCart.belongsTo(Cart, {
    foreignKey : 'cart_id',
    as : 'cart',
})

itemCart.belongsTo(Product, {
    foreignKey : 'product_id',
    as : 'product',
})

