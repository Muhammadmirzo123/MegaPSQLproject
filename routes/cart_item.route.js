const express = require("express");
const router = express.Router();
const cart_itemController = require("../controllers/cart_itemController");

/** @swagger
 * tags:
 *   name: Cart_item
 *   description: Cart_item management
 */

/** @swagger
 * /api/cart_item:
 *   post:
 *     tags: [Cart_item]
 *     summary: Create a new cart_item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               cart_id:
 *                 type: number
 *               quantity:
 *                 type: number
 *     responses:
 *       201:
 *         description: Cart_item created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/cart_item", cart_itemController.createCart_item);

/** @swagger
 * /api/cart_item:
 *   get:
 *     tags: [Cart_item]
 *     summary: Get all cart_item
 *     responses:
 *       200:
 *         description: List of cart_item
 *       500:
 *         description: Server error
 */
router.get("/cart_item", cart_itemController.getCart_items);

/** @swagger
 * /api/cart_item/{id}:
 *   get:
 *     tags: [Cart_item]
 *     summary: Get cart_item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart_item ID
 *     responses:
 *       200:
 *         description: Cart_item details
 *       404:
 *         description: Cart_item not found
 *       500:
 *         description: Server error
 */
router.get("/cart_item/:id", cart_itemController.getCart_itemById);

/** @swagger
 * /api/cart_item/{id}:
 *   put:
 *     tags: [Cart_item]
 *     summary: Update cart_item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart_item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               cart_id:
 *                 type: number
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: Cart_item updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Cart_item not found
 *       500:
 *         description: Server error
 */
router.put("/cart_item/:id", cart_itemController.updateCart_item);

/** @swagger
 * /api/cart_item/{id}:
 *   delete:
 *     tags: [Cart_item]
 *     summary: Delete cart_item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart_item ID
 *     responses:
 *       204:
 *         description: Cart_item deleted
 *       404:
 *         description: Cart_item not found
 *       500:
 *         description: Server error
 */
router.delete("/cart_item/:id", cart_itemController.deleteCart_item);

module.exports = router;