const yup = require("yup");

const validateRequest = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      next();
    } catch (err) {
      res.status(400).json({ errors: err.errors });
    }
  };
};

module.exports = validateRequest;
