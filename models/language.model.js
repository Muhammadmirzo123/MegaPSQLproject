module.exports = (sequelize, DataTypes) => {
  const Language = sequelize.define("Language", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Language.associate = (models) => {
    Language.hasMany(models.Customer, {
      foreignKey: "lang_id",
      as: "customer",
    });
    Language.hasMany(models.Event, {
      foreignKey: "lang_id",
      as: "event",
    });
  };
  return Language;
};
