const express = require('express');
const router = express.Router();
const charactersController = require('../../controllers/api/characters');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// BASE URL: /api/characters
router.get('/', charactersController.index)
router.post('/', charactersController.create);
router.get('/:id', charactersController.detail);
router.delete('/:id', charactersController.deleteCharacter);
router.put('/:id', charactersController.update)

module.exports = router;