const express = require("express");
const router = express.Router();
const ticket_typeController = require("../controllers/ticket_typeController");

/** @swagger
 * tags:
 *   name: Ticket_type
 *   description: Ticket_type management
 */

/** @swagger
 * /api/ticket_type:
 *   post:
 *     tags: [Ticket_type]
 *     summary: Create a new ticket_type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               ticket_type:
 *                 type: string
 *     responses:
 *       201:
 *         description: Ticket_type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/ticket_type", ticket_typeController.createTicket_type);

/** @swagger
 * /api/ticket_type:
 *   get:
 *     tags: [Ticket_type]
 *     summary: Get all ticket_type
 *     responses:
 *       200:
 *         description: List of ticket_type
 *       500:
 *         description: Server error
 */
router.get("/ticket_type", ticket_typeController.getTicket_types);

/** @swagger
 * /api/ticket_type/{id}:
 *   get:
 *     tags: [Ticket_type]
 *     summary: Get ticket_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket_type ID
 *     responses:
 *       200:
 *         description: Ticket_type details
 *       404:
 *         description: Ticket_type not found
 *       500:
 *         description: Server error
 */
router.get("/ticket_type/:id", ticket_typeController.getTicket_typeById);

/** @swagger
 * /api/ticket_type/{id}:
 *   put:
 *     tags: [Ticket_type]
 *     summary: Update ticket_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket_type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               ticket_type:
 *                 type: string
 *     responses:
 *       200:
 *         description: Ticket_type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket_type not found
 *       500:
 *         description: Server error
 */
router.put("/ticket_type/:id", ticket_typeController.updateTicket_type);

/** @swagger
 * /api/ticket_type/{id}:
 *   delete:
 *     tags: [Ticket_type]
 *     summary: Delete ticket_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket_type ID
 *     responses:
 *       204:
 *         description: Ticket_type deleted
 *       404:
 *         description: Ticket_type not found
 *       500:
 *         description: Server error
 */
router.delete("/ticket_type/:id", ticket_typeController.deleteTicket_type);

module.exports = router;