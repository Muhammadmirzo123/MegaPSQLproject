module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define("Venue", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    schema: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    regionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    districtId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Venue.associate = (models) => {
    Venue.hasMany(models.Event, {
      foreignKey: "venue_id",
      as: "event",
    });
    Venue.belongsTo(models.Region, {
      foreignKey: "regionId",
      as: "region",
    });
    Venue.hasMany(models.Seat, {
      foreignKey: "venue_id",
      as: "seat",
    });
    Venue.hasMany(models.Venue_photo, {
      foreignKey: "venueId",
      as: "venue_photo",
    });
    Venue.hasMany(models.District, {
      foreignKey: "districtId",
      as: "district",
    });
  };
  return Venue;
};
