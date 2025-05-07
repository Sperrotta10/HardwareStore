import { DataTypes } from "sequelize";
import { sequelize } from "../../../config/dataBase";
import { User } from "./user";

export const Role = sequelize.define('Role', {
    role_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
}, {
    tableName : 'Role',
    timestamps : false,
})

Role.hasMany(User, {
    foreignKey : 'role_id',
    as : 'user',
})