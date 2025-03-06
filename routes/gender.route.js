const express = require("express");
const router = express.Router();
const genderController = require("../controllers/genderController");

/** @swagger
 * tags:
 *   name: Gender
 *   description: Gender management
 */

/** @swagger
 * /api/gender:
 *   post:
 *     tags: [Gender]
 *     summary: Create a new gender
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               gender:
 *                 type: string
 *     responses:
 *       201:
 *         description: Gender created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/gender", genderController.createGender);

/** @swagger
 * /api/gender:
 *   get:
 *     tags: [Gender]
 *     summary: Get all gender
 *     responses:
 *       200:
 *         description: List of gender
 *       500:
 *         description: Server error
 */
router.get("/gender", genderController.getGenders);

/** @swagger
 * /api/gender/{id}:
 *   get:
 *     tags: [Gender]
 *     summary: Get gender by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Gender ID
 *     responses:
 *       200:
 *         description: Gender details
 *       404:
 *         description: Gender not found
 *       500:
 *         description: Server error
 */
router.get("/gender/:id", genderController.getGenderById);

/** @swagger
 * /api/gender/{id}:
 *   put:
 *     tags: [Gender]
 *     summary: Update gender by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Gender ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               gender:
 *                 type: string
 *     responses:
 *       200:
 *         description: Gender updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Gender not found
 *       500:
 *         description: Server error
 */
router.put("/gender/:id", genderController.updateGender);

/** @swagger
 * /api/gender/{id}:
 *   delete:
 *     tags: [Gender]
 *     summary: Delete gender by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Gender ID
 *     responses:
 *       204:
 *         description: Gender deleted
 *       404:
 *         description: Gender not found
 *       500:
 *         description: Server error
 */
router.delete("/gender/:id", genderController.deleteGender);

module.exports = router;