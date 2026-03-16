const express = require('express');
const healthController = require('../controllers/health');
const extController = require('../controllers/ext');

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Health endpoint
 *     responses:
 *       200:
 *         description: Service health check passed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: Service is healthy
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 environment:
 *                   type: string
 *                   example: development
 */
router.get('/', healthController.check.bind(healthController));

/**
 * @swagger
 * /ext:
 *   get:
 *     summary: Extensibility/test endpoint for integration.
 *     description: Returns a static response to allow client-backend integration checks or future extensibility use cases.
 *     responses:
 *       200:
 *         description: Ext endpoint check passed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: Extensibility endpoint reached. Ready for integration.
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */
router.get('/ext', extController.stub.bind(extController));

module.exports = router;
