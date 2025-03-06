const Joi = require("joi");

const validateVenue_type = (venue_type) => {
    const schema = Joi.object({
        name: Joi.string(),
    })

    return schema.validate(venue_type);
};

module.exports = { validateVenue_type };