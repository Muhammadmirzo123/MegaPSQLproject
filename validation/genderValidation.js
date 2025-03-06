const Joi = require("joi");

const validateGender = (gender) => {
    const schema = Joi.object({
        gender: Joi.string(),
    })

    return schema.validate(gender);
};

module.exports = { validateGender };