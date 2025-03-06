const Joi = require("joi");

const validateDelivery_method = (delivery_method) => {
    const schema = Joi.object({
        name: Joi.string(),
    })

    return schema.validate(delivery_method);
};

module.exports = { validateDelivery_method };