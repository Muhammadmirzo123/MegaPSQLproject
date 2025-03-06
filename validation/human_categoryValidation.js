const Joi = require("joi");

const validateHuman_category = (human_category) => {
    const schema = Joi.object({
        name: Joi.string(),
        start_age: Joi.number(),
        finish_age: Joi.number(),
        gender: Joi.number(),
    })

    return schema.validate(human_category);
};

module.exports = { validateHuman_category };