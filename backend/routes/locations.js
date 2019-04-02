const express = require('express');
const router = express.Router();

//const auth  = require('../middleware/auth');

const locationsCtrl = require('../controllers/locations');
/*
router.get('/', auth,locationsCtrl.getAllStuff);
router.post('/', auth, locationsCtrl.createLocation);
router.get('/:id', auth, locationsCtrl.getOneLocation);
router.put('/:id', auth, locationsCtrl.modifyLocation);
router.delete('/:id', auth, locationsCtrl.deleteLocation);*/
router.get('/', locationsCtrl.getAllLocations);
router.post('/', locationsCtrl.createLocation);
router.get('/:id', locationsCtrl.getOneLocation);
router.put('/:id', locationsCtrl.modifyLocation);
router.delete('/:id', locationsCtrl.deleteLocation);
module.exports = router;
