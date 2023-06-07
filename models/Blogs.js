const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogs extends Model {

}

Blogs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    food_types: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    allergens: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    latitude:{
      type: DataTypes.STRING,
      allowNull: false
    },
    longitude:{
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    hooks: {
    
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogs',
  }
);










module.exports = Blogs;