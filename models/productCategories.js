const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Category = sequelize.define('Category',{
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true  // unique + index
    },
    categoyId: {
        type: DataTypes.INTEGER
    },
}, {

});
// One to Many
// Category.hasMany(CategoryImage, {
//   foreignKey: 'categoryId'
// })

module.exports = Category;