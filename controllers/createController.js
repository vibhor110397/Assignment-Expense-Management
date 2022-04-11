const bodyParser = require('body-parser');

const Model = require('../models/model');

// it is use the create or add a new data in the Databse
module.exports.create = async function (req, res, next) {
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  });
  // console.log(data);
  try {
    const dataToSave = await data.save();
    // console.log(dataToSave);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};