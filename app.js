const express = require("express")
const dotenv = require("dotenv")
const adminRoutes = require("./routes/admin.route");
const bookingRoutes = require("./routes/booking.route");
const cart_itemRoutes = require("./routes/cart_item.route");
const cartRoutes = require("./routes/cart.route");
const customer_addressRoutes = require("./routes/customer_address.route");
const customer_cardRoutes = require("./routes/customer_card.route");
const customerRoutes = require("./routes/customer.route");
const delivery_methodRoutes = require("./routes/delivery_method.route");
const discountRoutes = require("./routes/discount.route");
const districtRoutes = require("./routes/district.route");
const event_typeRoutes = require("./routes/event_type.route");
const eventRoutes = require("./routes/event.route");
const flatRoutes = require("./routes/flat.route");
const genderRoutes = require("./routes/gender.route");
const human_categoryRoutes = require("./routes/human_category.route");
const languageRoutes = require("./routes/language.route");
const payment_methodRoutes = require("./routes/payment_method.route");
const regionRoutes = require("./routes/region.route");
const seat_typeRoutes = require("./routes/seat_type.route");
const seatRoutes = require("./routes/seat.route");
const statusRoutes = require("./routes/status.route");
const ticketRoutes = require("./routes/ticket.route");
const venue_photoRoutes = require("./routes/venue_photo.route");
const venue_typeRoutes = require("./routes/venue_type.route");
const venueRoutes = require("./routes/venue.route");
const { sequelize } = require("./models");
const setupSwagger = require("./swagger/swagger")
const cors = require("cors");
dotenv.config()

const app = express();

app.use(express.json())
app.use(
    cors({
        origin: "*",
    })
);

app.use("/api", adminRoutes)
app.use("/api", bookingRoutes)
app.use("/api", cart_itemRoutes)
app.use("/api", cartRoutes)
app.use("/api", customer_addressRoutes)
app.use("/api", customer_cardRoutes)
app.use("/api", customerRoutes)
app.use("/api", delivery_methodRoutes)
app.use("/api", discountRoutes)
app.use("/api", districtRoutes)
app.use("/api", event_typeRoutes)
app.use("/api", eventRoutes)
app.use("/api", flatRoutes)
app.use("/api", genderRoutes)
app.use("/api", human_categoryRoutes)
app.use("/api", languageRoutes)
app.use("/api", payment_methodRoutes)
app.use("/api", regionRoutes)
app.use("/api", seat_typeRoutes)
app.use("/api", seatRoutes)
app.use("/api", statusRoutes)
app.use("/api", ticketRoutes)
app.use("/api", venue_photoRoutes)
app.use("/api", venue_typeRoutes)
app.use("/api", venueRoutes)

setupSwagger(app)

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}
        `);
    });
});