module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define("District", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    regionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });  
  District.associate = (models) => {
    District.hasMany(models.Customer_address, {
      foreignKey: "district_id",
      as: "customer_address",
    });
    District.belongsTo(models.Region, {
      foreignKey: "regionId",
      as: "region",
    });
    District.hasMany(models.Venue, {
      foreignKey: "districtId",
      as: "venue",
    });
  };
  return District;
};
