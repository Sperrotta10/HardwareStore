
export function defineCategory(sequelize, DataTypes) {
 
    const Category = sequelize.define('Category', {
        category_id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false,
        },
    }, {
        tableName : 'Category',
        timestamps : false,
    })

    return Category;
}