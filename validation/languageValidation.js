const Joi = require("joi");

const validateLanguage = (language) => {
    const schema = Joi.object({
        name: Joi.string(),
    })

    return schema.validate(language);
};

module.exports = { validateLanguage };