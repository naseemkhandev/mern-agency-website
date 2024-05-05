import createError from '../utils/createError.js';

const validateError = (schema) => {
  return async (req, res, next) => {
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      next();
    } catch (error) {
      const message = error.errors[0].message;
      next(createError(400, message));
      next(error);
    }
  };
};

export default validateError;
