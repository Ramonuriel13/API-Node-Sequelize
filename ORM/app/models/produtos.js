module.exports = (sequelize, DataTypes) => {
    const produtos = sequelize.define('produtos', {
      name: DataTypes.STRING,
      value: DataTypes.INTEGER,
      amount: DataTypes.INTEGER
    });
  
    return produtos;
  }