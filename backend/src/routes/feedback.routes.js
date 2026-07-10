import express from "express"; // Imports the Express library to create a router for handling feedback-related routes.

const router = express.Router(); // This Express router creates a small router that will handle only the feedback APIs.

import {
  getAllFeedbacks,
  createFeedback,
  getFeedback,
} from "../controllers/feedback.controller.js"; // Imports the getAllFeedbacks controller function from the feedback.controller.js file to handle fetching all feedbacks.
import { validateCreateFeedback } from "../middlewares/validateFeedback.middleware.js";
import { validateGetFeedback } from "../middlewares/validateGetFeedback.middleware.js"; // Imports the validateGetFeedback middleware function to validate the request body for fetching feedback by ID.

// Defines the routes for feedback-related API endpoints.
// The router will handle GET requests to fetch all feedbacks and POST requests to create new feedback.
router.get("/get-all-feedbacks", getAllFeedbacks);
router.post("/submit-feedback", validateCreateFeedback, createFeedback);
router.post("/get-feedbackById", validateGetFeedback, getFeedback);

export default router; // Exports the router so it can be used in other files (like app.js) to handle feedback-related routes.
