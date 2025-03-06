const Joi = require("joi");

const validateRegion = (region) => {
    const schema = Joi.object({
        name: Joi.string(),
    })

    return schema.validate(region);
};

module.exports = { validateRegion };