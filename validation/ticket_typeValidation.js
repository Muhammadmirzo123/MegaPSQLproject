const Joi = require("joi");

const validateTicket_type = (ticket_type) => {
    const schema = Joi.object({
        ticket_id: Joi.number(),
        ticket_type: Joi.string(),
    })

    return schema.validate(ticket_type);
};

module.exports = { validateTicket_type };