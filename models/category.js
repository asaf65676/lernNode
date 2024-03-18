const {DataTypes} = require('sequelize');
const sequelize = require('../utils/database');

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true, 
    primaryKey: true  // unique + index
  },
  name: {
    type: DataTypes.STRING
  },
}, {

});
// One to Many
// Category.hasMany(CategoryImage, {
//   foreignKey: 'categoryId'
// })

module.exports = Category;