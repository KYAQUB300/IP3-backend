const express = require('express');
const router = express.Router();
const emergencyController = require('../controller/emergencyController');

router.post('/', emergencyController.addEmergency);
router.get('/:id', emergencyController.getEmergencyContacts);
router.get('/one/:id', emergencyController.getEmergencyContactsById);
router.put('/:id', emergencyController.updateEmergency);
router.delete('/:id', emergencyController.deleteEmergency);

module.exports = router;
