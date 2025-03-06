const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

/** @swagger
 * tags:
 *   name: Event
 *   description: Event management
 */

/** @swagger
 * /api/event:
 *   post:
 *     tags: [Event]
 *     summary: Create a new event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: number
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: number
 *                 format: date
 *               start_time:
 *                 type: number
 *                 format: date
 *               finish_date:
 *                 type: number
 *                 format: date
 *               finish_time:
 *                 type: number
 *                 format: date
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: number
 *               human_category_id:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               release_id:
 *                 type: number
 *                 format: date
 *     responses:
 *       201:
 *         description: Event created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/event", eventController.createEvent);

/** @swagger
 * /api/event:
 *   get:
 *     tags: [Event]
 *     summary: Get all event
 *     responses:
 *       200:
 *         description: List of event
 *       500:
 *         description: Server error
 */
router.get("/event", eventController.getEvents);

/** @swagger
 * /api/event/{id}:
 *   get:
 *     tags: [Event]
 *     summary: Get event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event details
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
router.get("/event/:id", eventController.getEventById);

/** @swagger
 * /api/event/{id}:
 *   put:
 *     tags: [Event]
 *     summary: Update event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: number
 *               photo:
 *                 type: string
 *               start_date:
 *                 type: number
 *                 format: date
 *               start_time:
 *                 type: number
 *                 format: date
 *               finish_date:
 *                 type: number
 *                 format: date
 *               finish_time:
 *                 type: number
 *                 format: date
 *               info:
 *                 type: string
 *               event_type_id:
 *                 type: number
 *               human_category_id:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               release_id:
 *                 type: number
 *                 format: date
 *     responses:
 *       200:
 *         description: Event updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
router.put("/event/:id", eventController.updateEvent);

/** @swagger
 * /api/event/{id}:
 *   delete:
 *     tags: [Event]
 *     summary: Delete event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event ID
 *     responses:
 *       204:
 *         description: Event deleted
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
router.delete("/event/:id", eventController.deleteEvent);

module.exports = router;
