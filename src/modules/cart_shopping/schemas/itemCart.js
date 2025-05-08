
export function defineItemCart(sequelize,DataTypes) {
 
    const itemCart = sequelize.define('itemCart', {
        item_id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
        },
        cart_id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            references : {
                model : 'Cart',
                key : 'cart_id',
            }
        },
        product_id : {
            type : DataTypes.INTEGER,
            references : {
                model : 'Product',
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

    return itemCart;
}

