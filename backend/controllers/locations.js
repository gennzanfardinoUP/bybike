const Location = require('../models/location');

/**
 * This createLocation function refers to when an authorised user wants to add
 * a listing to the list of locations that can be searched for.
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */

exports.createLocation = (req, res, next) => {
  const location = new Location({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    userId: req.body.userId,
    ratingNumber: req.body.ratingNumber

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


/**
 * The function getOneLocation exists to allow the system to fetch the details
 * of a location based on the input of the location name.
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */

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

/**
 * The function modifyLocation is used when an authorised user wants to modify
 * the existing details of a location.
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */

exports.modifyLocation = (req, res, next) => {
  const location = new Location({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    userId: req.body.userId,
    ratingNumber: req.body.ratingNumber
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

/**
 * The deleteLocation function exists to allow authorised users delete locations
 * from the existing list of locations.
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */

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

/**
 * The location list component calls the getAllLocations function to display an
 * array of all locations.
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */

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
