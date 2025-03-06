const Joi = require("joi");

const validateVenue = (venue) => {
    const schema = Joi.object({
        name: Joi.string(),
        address: Joi.string(),
        location: Joi.string(),
        site: Joi.string(),
        phone: Joi.string(),
        schema: Joi.number(),
        regionId: Joi.number(),
        districtId: Joi.number(),
    })

    return schema.validate(venue);
};

module.exports = { validateVenue };