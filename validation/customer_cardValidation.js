const Joi = require("joi");

const validateCustomer_card = (customer_card) => {
    const schema = Joi.object({
        customer_id: Joi.number(),
        name: Joi.string(),
        phone: Joi.string(),
        number: Joi.string(),
        year: Joi.string(),
        month: Joi.string(),
        is_active: Joi.boolean(),
        is_main: Joi.boolean(),
    })

    return schema.validate(customer_card);
};

module.exports = { validateCustomer_card };