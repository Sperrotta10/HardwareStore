
export function defineCart(sequelize, DataTypes) {
 
    const Cart = sequelize.define('Cart', {
        cart_id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
        },
        user_id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            references : {
                model : 'User',
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

    return Cart;
    
}