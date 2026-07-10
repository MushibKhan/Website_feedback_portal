import * as feedbackService from "../services/feedback.service.js";
import ApiResponse from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js"; // Imports the asyncHandler utility function to handle asynchronous route handlers and catch errors.

export const getAllFeedbacks = asyncHandler(async (req, res) => {
  // Controller function to handle fetching all feedbacks.
  const feedbacks = await feedbackService.getAllFeedbacks();
  return ApiResponse.success(res, "Feedbacks fetched successfully.", {
    count: feedbacks.length,
    feedbacks,
  });
});

// Controller function to handle creating new feedback.
export const createFeedback = asyncHandler(async (req, res) => {
  const newFeedback = await feedbackService.createFeedbackService(req.body);
  return ApiResponse.success(
    res,
    "Feedback created successfully.",
    newFeedback,
    201,
  );
});

// Controller function to handle fetching feedback by ID.
export const getFeedback = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const feedback = await feedbackService.getFeedbackById(id);
  return ApiResponse.success(res, "Feedback fetched successfully.", feedback);
});

// module.exports = {     // Exports the controller function so it can be used in other files (like routes).
//     getAllFeedbacks
// };
