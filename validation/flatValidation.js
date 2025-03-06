const Joi = require("joi");

const validateFlat = (flat) => {
    const schema = Joi.object({
        flat: Joi.string(),
        condition: Joi.string(),
    })

    return schema.validate(flat);
};

module.exports = { validateFlat };