const express = require('express');
const router = express.Router();

const auth  = require('../middleware/auth');

const locationsCtrl = require('../controllers/locations');
router.get('/', auth, locationsCtrl.getAllLocations);
router.post('/', auth, locationsCtrl.createLocation);
router.get('/:id', auth, locationsCtrl.getOneLocation);
router.put('/:id', auth, locationsCtrl.modifyLocation);
router.delete('/:id', auth, locationsCtrl.deleteLocation);
module.exports = router;
