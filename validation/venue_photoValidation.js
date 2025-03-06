const Joi = require("joi");

const validateVenue_photo = (venue_photo) => {
    const schema = Joi.object({
        venueId: Joi.number(),
        url: Joi.string(),
    })

    return schema.validate(venue_photo);
};

module.exports = { validateVenue_photo };