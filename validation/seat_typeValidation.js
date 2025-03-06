const Joi = require("joi");

const validateSeat_type = (seat_type) => {
    const schema = Joi.object({
        name: Joi.string(),
    })

    return schema.validate(seat_type);
};

module.exports = { validateSeat_type };