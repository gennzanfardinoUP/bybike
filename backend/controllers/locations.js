const Location = require('../models/location');

exports.createLocation = (req, res, next) => {
  const location = new Location({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    //price: req.body.price,
    userId: req.body.userId
  });
  location.save().then(
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

exports.getOneLocation = (req, res, next) => {
  Location.findOne({
    _id: req.params.id
  }).then(
    (location) => {
      res.status(200).json(location);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyLocation = (req, res, next) => {
  const location = new Location({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    //price: req.body.price,
    userId: req.body.userId
  });
  Location.updateOne({_id: req.params.id}, location).then(
    () => {
      res.status(201).json({
        message: 'Location updated successfully!'
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

exports.deleteLocation = (req, res, next) => {
  Location.deleteOne({_id: req.params.id}).then(
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

exports.getAllLocations = (req, res, next) => {
  Location.find().then(
    (locations) => {
      res.status(200).json(locations);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
