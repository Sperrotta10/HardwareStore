
export function defineNotification(sequelize, DataTypes) {
 
    const Notification = sequelize.define('Notification', {
        notification_id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
        },
        product_id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            references : {
                model : 'Product',
                key : 'product_id',
            }
        },
        message : {
            type : DataTypes.TEXT,
            allowNull : false,
        },
        notification_status : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
        },
        created_at : {
            type : DataTypes.DATEONLY,
            allowNull : false,
        },
    }, {
        tableName : 'Notification',
        timestamps : false,
    })

    return Notification;
}