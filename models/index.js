const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Admin = require("./admin.model")(sequelize, Sequelize);
const Booking = require("./booking.model")(sequelize, Sequelize);
const Cart_item = require("./cart_item.model")(sequelize, Sequelize);
const Cart = require("./cart.model")(sequelize, Sequelize);
const Country = require("./country.model")(sequelize, Sequelize);
const Customer_address = require("./customer_address.model")(sequelize, Sequelize);
const Customer_card = require("./customer_card.model")(sequelize, Sequelize);
const Customer = require("./customer.model")(sequelize, Sequelize);
const Delivery_method = require("./delivery_method.model")(sequelize, Sequelize);
const District = require("./district.model")(sequelize, Sequelize);
const Discount = require("./discount.model")(sequelize, Sequelize);
const Event_type = require("./event_type.model")(sequelize, Sequelize);
const Event = require("./event.model")(sequelize, Sequelize);
const Flat = require("./flat.model")(sequelize, Sequelize);
const Gender = require("./gender.model")(sequelize, Sequelize);
const Human_category = require("./human_category.model")(sequelize, Sequelize);
const Language = require("./language.model")(sequelize, Sequelize);
const Payment_method = require("./payment_method.model")(sequelize, Sequelize);
const Region = require("./region.model")(sequelize, Sequelize);
const Seat_type = require("./seat_type.model")(sequelize, Sequelize);
const Seat = require("./seat.model")(sequelize, Sequelize);
const Sector = require("./sector.model")(sequelize, Sequelize);
const Status = require("./status.model")(sequelize, Sequelize);
const Ticket_type = require("./ticket_type.model")(sequelize, Sequelize);
const Ticket = require("./ticket.model")(sequelize, Sequelize);
const Venue_photo = require("./venue_photo.model")(sequelize, Sequelize);
const Venue_type = require("./venue_type.model")(sequelize, Sequelize);
const Venue = require("./venue.model")(sequelize, Sequelize);
  
Booking.associate(sequelize.models);
Cart_item.associate(sequelize.models);
Cart.associate(sequelize.models);
Customer_address.associate(sequelize.models);
Customer_card.associate(sequelize.models);
Customer.associate(sequelize.models);
District.associate(sequelize.models);
Event.associate(sequelize.models);
Human_category.associate(sequelize.models);
Seat.associate(sequelize.models);
Ticket.associate(sequelize.models);
Venue_photo.associate(sequelize.models);
Venue.associate(sequelize.models);

module.exports = {
  Admin,
  Booking,
  Cart_item,
  Cart,
  Discount,
  Country,
  Customer_address,
  Customer_card,
  Customer,
  Delivery_method,
  District,
  Event_type,
  Event,
  Flat,
  Gender,
  Human_category,
  Language,
  Payment_method,
  Region,
  Seat_type,
  Seat,
  Sector,
  Status,
  Ticket_type,
  Ticket,
  Venue_photo,
  Venue_type,
  Venue,
  sequelize
};
