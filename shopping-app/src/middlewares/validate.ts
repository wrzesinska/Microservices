import { validationResult } from 'express-validator';



export const validate = () => (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  // Send error to default error handler
  // next(extractedErrors);
  
  return res.status(422).json({
    errors: extractedErrors,
  });
};
