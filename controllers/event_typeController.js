const { Event_type } = require("../models");
const { validateEvent_type } = require("../validation/eventValidation");

exports.createEvent_type = async (req, res) => {
  const { error } = validateEvent_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const event = await Event_type.create(req.body);
    res.status(201).send(event);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getEvent_types = async (req, res) => {
  try {
    const events = await Event_type.findAll();
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEvent_typeById = async (req, res) => {
  try {
    const event = await Event_type.findByPk(req.params.id, {});
    if (!event) return res.status(404).send("Event_type not found");
    res.status(200).send(event);
  } catch (error) {
    res.status(5000).send(error.message);
  }
};

exports.updateEvent_type = async (req, res) => {
  const { error } = validateEvent_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const event = await Event_type.findByPk(req.params.id);
    if (!event) return res.status(404).send("Event_type not found");
    await event.update(req.body);
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteEvent_type = async (req, res) => {
  try {
    const event = await Event_type.findByPk(req.params.id);
    if (!event) return res.status(404).send("Event_type not found");

    const eventData = event.toJSON();

    await event.destroy();
    res.status(200).send(eventData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
