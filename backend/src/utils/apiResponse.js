/**
 * ApiResponse class provides static methods to send standardized API responses.
 * It includes methods for success, error, and validation error responses.
 * Each method takes the response object, a message, and optional data or status code.
 */

class ApiResponse {
  /**
   * Success Response
   */
  static success(res, message, data = null, statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }

  /**
   * Error Response
   */
  static error(res, message, statusCode = 500) {
    return res.status(statusCode).json({
      success: false,
      message,
    });
  }

  /**
   * Validation Error Response
   */
  static validationError(res, errors) {
    return res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors,
    });
  }
}

export default ApiResponse;
