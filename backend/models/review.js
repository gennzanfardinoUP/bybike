const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  userId: { type: String, required: true },
  locId: { type: String, required: false },
  locName: { type: String, required: false },
  locAddress: { type: String, required: true },
  locImageUrl: { type: String, required: false },
  coordinates: { type: String, required: false},
  overallRating: { type: Number, required: true},
  userRating: { type: Number, required: true},
  reviewDescription: { type: String, required: true}
});


module.exports = mongoose.model('Review', reviewSchema);
