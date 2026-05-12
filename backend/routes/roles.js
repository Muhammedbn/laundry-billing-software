const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

router.get('/', roleController.getRoles);
router.put('/:id/permissions', roleController.updateRolePermissions);

module.exports = router;
