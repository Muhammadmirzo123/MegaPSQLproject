const express = require("express");
const router = express.Router();
const venueController = require("../controllers/venueController");

/** @swagger
 * tags:
 *   name: Venue
 *   description: Venue management
 */

/** @swagger
 * /api/venue:
 *   post:
 *     tags: [Venue]
 *     summary: Create a new venue
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: number
 *               regionId:
 *                 type: number
 *               districtId:
 *                 type: number
 *     responses:
 *       201:
 *         description: Venue created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/venue", venueController.createVenue);

/** @swagger
 * /api/venue:
 *   get:
 *     tags: [Venue]
 *     summary: Get all venue
 *     responses:
 *       200:
 *         description: List of venue
 *       500:
 *         description: Server error
 */
router.get("/venue", venueController.getVenues);

/** @swagger
 * /api/venue/{id}:
 *   get:
 *     tags: [Venue]
 *     summary: Get venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue ID
 *     responses:
 *       200:
 *         description: Venue details
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
router.get("/venue/:id", venueController.getVenueById);

/** @swagger
 * /api/venue/{id}:
 *   put:
 *     tags: [Venue]
 *     summary: Update venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: number
 *               regionId:
 *                 type: number
 *               districtId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Venue updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
router.put("/venue/:id", venueController.updateVenue);

/** @swagger
 * /api/venue/{id}:
 *   delete:
 *     tags: [Venue]
 *     summary: Delete venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue ID
 *     responses:
 *       204:
 *         description: Venue deleted
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
router.delete("/venue/:id", venueController.deleteVenue);

module.exports = router;