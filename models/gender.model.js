module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define("Gender", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Gender.associate = (models) => {
    Gender.hasMany(models.Customer, {
      foreignKey: "gender",
      as: "customer",
    });
    Gender.hasMany(models.Human_Category, {
      foreignKey: "gender",
      as: "human_category",
    });
  };
  return Gender;
};
