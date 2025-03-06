const express = require("express");
const router = express.Router();
const customer_cardController = require("../controllers/customer_cardController");

/** @swagger
 * tags:
 *   name: Customer_card
 *   description: Customer_card management
 */

/** @swagger
 * /api/customer_card:
 *   post:
 *     tags: [Customer_card]
 *     summary: Create a new customer_card
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Customer_card created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/customer_card", customer_cardController.createCustomer_card);

/** @swagger
 * /api/customer_card:
 *   get:
 *     tags: [Customer_card]
 *     summary: Get all customer_card
 *     responses:
 *       200:
 *         description: List of customer_card
 *       500:
 *         description: Server error
 */
router.get("/customer_card", customer_cardController.getCustomer_cards);

/** @swagger
 * /api/customer_card/{id}:
 *   get:
 *     tags: [Customer_card]
 *     summary: Get customer_card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer_card ID
 *     responses:
 *       200:
 *         description: Customer_card details
 *       404:
 *         description: Customer_card not found
 *       500:
 *         description: Server error
 */
router.get("/customer_card/:id", customer_cardController.getCustomer_cardById);

/** @swagger
 * /api/customer_card/{id}:
 *   put:
 *     tags: [Customer_card]
 *     summary: Update customer_card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer_card ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Customer_card updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Customer_card not found
 *       500:
 *         description: Server error
 */
router.put("/customer_card/:id", customer_cardController.updateCustomer_card);

/** @swagger
 * /api/customer_card/{id}:
 *   delete:
 *     tags: [Customer_card]
 *     summary: Delete customer_card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer_card ID
 *     responses:
 *       204:
 *         description: Customer_card deleted
 *       404:
 *         description: Customer_card not found
 *       500:
 *         description: Server error
 */
router.delete("/customer_card/:id", customer_cardController.deleteCustomer_card);

module.exports = router;