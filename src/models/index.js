import { sequelize } from "../config/dataBase.js";
import { DataTypes } from "sequelize";

import { defineCart } from "../modules/cart_shopping/schemas/cart.js";
import { defineItemCart } from "../modules/cart_shopping/schemas/itemCart.js";
import { defineNotification } from "../modules/notification/schemas/notification.js";
import { defineProduct } from "../modules/products/schemas/product.js";
import { defineCategory } from "../modules/products/schemas/category.js";
import { defineRole } from "../modules/register/schemas/role.js";
import { defineUser } from "../modules/register/schemas/user.js";
import { defineSale } from "../modules/sale/schemas/sale.js";

// definimos los modelos de cada tabla sql
const Cart = defineCart(sequelize, DataTypes);
const itemCart = defineItemCart(sequelize, DataTypes);
const Notification = defineNotification(sequelize, DataTypes);
const Product = defineProduct(sequelize, DataTypes);
const Category = defineCategory(sequelize, DataTypes);
const Role = defineRole(sequelize, DataTypes);
const User = defineUser(sequelize, DataTypes);
const Sale = defineSale(sequelize, DataTypes);


// definimos las relaciones de los modelos
Cart.belongsTo(User, {
    foreignKey : 'user_id',
    as : 'user',
})

Cart.hasMany(itemCart, {
    foreignKey : 'cart_id',
    as : 'itemCart'
})

itemCart.belongsTo(Cart, {
    foreignKey : 'cart_id',
    as : 'cart',
})

itemCart.belongsTo(Product, {
    foreignKey : 'product_id',
    as : 'product',
})

Notification.belongsTo(Product, {
    foreignKey : 'product_id',
    as : 'product',
})

Product.belongsTo(Category, {
    foreignKey : 'category_id',
    as : 'category',
})

Product.hasMany(itemCart, {
    foreignKey : 'product_id',
    as : 'itemCart',
})

Category.hasMany(Product, {
    foreignKey : 'category_id',
    as : 'product',
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

Role.hasMany(User, {
    foreignKey : 'role_id',
    as : 'user',
})

Sale.belongsTo(User, {
    foreignKey : 'user_id',
    as : 'user',
})

export {Cart, itemCart, Notification, Category, Product, Role, User, Sale};