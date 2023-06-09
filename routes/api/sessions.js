const express = require('express');
const router = express.Router();
const sessionsController = require('../../controllers/api/sessions');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// BASE URL: /api/sessions
router.get('/', sessionsController.index)
router.post('/', sessionsController.create);
router.get('/:id', sessionsController.detail);
router.delete('/:id', sessionsController.deleteSession);
router.put('/:id', sessionsController.update);

module.exports = router;