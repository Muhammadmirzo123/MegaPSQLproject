const { Ticket } = require("../models");
const { validateTicket } = require("../validation/ticketValidation");

exports.createTicket = async (req, res) => {
  const { error } = validateTicket(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).send(ticket);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    res.status(200).send(tickets);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id, {
      include: [
        {
          model: Event,
          as: "event_id",
        },
        {
          model: Seat_id,
          as: "seat_id",
        },
        {
          model: Status,
          as: "status_id",
        },
        {
          model: Ticket_type,
          as: "ticket_type",
        },
      ],
    });
    if (!ticket) return res.status(404).send("Ticket not found");
    res.status(200).send(ticket);
  } catch (error) {
    res.status(5000).send(error.message);
  }
};

exports.updateTicket = async (req, res) => {
  const { error } = validateTicket(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).send("Ticket not found");
    await ticket.update(req.body);
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).send("Ticket not found");

    const ticketData = ticket.toJSON();

    await ticket.destroy();
    res.status(200).send(ticketData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
