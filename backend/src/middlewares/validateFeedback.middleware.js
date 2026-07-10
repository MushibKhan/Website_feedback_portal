/** Middleware to validate feedback creation requests
 * This middleware function validates the request body for creating feedback.
 * It checks if the required fields are present and meet the specified validation criteria. If there are validation errors, it responds with a validation error response.
 * Otherwise, it proceeds to the next middleware or controller function.
 */

import { validateFeedback } from "../validations/feedback.validation.js";
import ApiResponse from "../utils/apiResponse.js";

export const validateCreateFeedback = (req, res, next) => {
  const errors = validateFeedback(req.body);

  if (errors.length > 0) {
    return ApiResponse.validationError(res, errors);
  }
  next();
};


/** Middleware to validate feedback update requests
 * This middleware function validates the request body for updating feedback.
 * It checks if the required fields are present and meet the specified validation criteria. If there are validation errors, it responds with a validation error response.
 * Otherwise, it proceeds to the next middleware or controller function.
 */
export const validateUpdateFeedback = (req, res, next) => {
  const errors = validateFeedback(req.body, true);

  if (errors.length > 0) {
    return ApiResponse.validationError(res, errors);
  }

  next();
};
