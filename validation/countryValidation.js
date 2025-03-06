const Joi = require("joi");

const validateCountry = (country) => {
    const schema = Joi.object({
        country: Joi.string(),
    })

    return schema.validate(country);
};

module.exports = { validateCountry };