module.exports = (sequelize, DataTypes) => {
  const Ticket_type = sequelize.define("Ticket_type", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ticket_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });   
  Ticket_type.associate = (models) => {
    Ticket_type.hasMany(models.Ticket, {
      foreignKey: "ticket_type",
      as: "ticket",
    });
  };
  return Ticket_type;
};
