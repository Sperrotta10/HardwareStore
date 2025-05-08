
export function defineUser(sequelize, DataTypes) {
 
    const User = sequelize.define('User', {
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
                model : 'Role',
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

    return User;
}