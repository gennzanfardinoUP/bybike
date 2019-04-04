const Review = require('../models/review');

exports.createReview = (req, res, next) => {
  const review = new Review({
    title: req.body.title,
    description: req.body.description,
    userId: req.body.userId,
    locId: req.body.locId
  });

  review.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneReview = (req, res, next) => {
  Review.findOne({
    _id: req.params.id
  }).then(
    (review) => {
      res.status(200).json(review);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyReview = (req, res, next) => {
  const review = new Review({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    userId: req.body.userId,
    locId: req.body.locId
  });
  Review.updateOne({_id: req.params.id}, review).then(
    () => {
      res.status(201).json({
        message: 'Review updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteReview = (req, res, next) => {
  Review.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
//
// exports.getAllReviews = (req, res, next) => {
//   Review.find().then(
//     (reviews) => {
//       res.status(200).json(reviews);
//     }
//   ).catch(
//     (error) => {
//       res.status(400).json({
//         error: error
//       });
//     }
//   );
// };
exports.getAllReviews = (req, res, next) => {
  Review.find().then(
    (reviews) => {
      res.status(200).json(reviews);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
