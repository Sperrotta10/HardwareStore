
export function defineSale(sequelize, DataTypes) {
 
    const Sale = sequelize.define('Sale', {
        sale_id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
        },
        user_id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            references : {
                model : 'User',
                key : 'user_id',
            }
        },
        sale : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        sale_total : {
            type : DataTypes.FLOAT,
            allowNull : false,
        },
        created_at : {
            type : DataTypes.DATEONLY,
            allowNull : false,
        },
    }, {
        tableName : 'Sale',
        timestamps : false,
    })

    return Sale;
}