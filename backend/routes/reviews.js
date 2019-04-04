const express = require('express');
const router = express.Router();

const auth  = require('../middleware/auth');

const reviewsCtrl = require('../controllers/reviews');
router.get('/', auth, reviewsCtrl.getAllReviews);
router.post('/', auth, reviewsCtrl.createReview);
router.get('/:id', auth, reviewsCtrl.getOneReview);
router.put('/:id', auth, reviewsCtrl.modifyReview);
router.delete('/:id', auth, reviewsCtrl.deleteReview);
module.exports = router;
