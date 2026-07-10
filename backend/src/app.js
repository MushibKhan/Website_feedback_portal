import express from "express";         //const express = require("express");  <---- when we're not working with ES Modules    Imports the Express library.
import cors from "cors"                 // Allows requests from other applications (our React frontend).
import helmet from "helmet"       // Helps secure the app by providing some basic security to our app headers.
import morgan from "morgan"      // Logs HTTP requests to the console for debugging purposes.
import dotenv from "dotenv";
import { errorHandler } from "./middlewares/error.middleware.js";  // Imports the errorHandler middleware function to handle errors in the Express application.
import feedbackRoutes from "./routes/feedback.routes.js";      // Imports the feedback routes from feedback.routes.js to handle feedback-related API endpoints.


dotenv.config();

const app = express(); 
const PORT = process.env.PORT; 

// Middleware
app.use(cors());     
app.use(helmet()); 
app.use(morgan("dev")); 
app.use(express.json()); 
app.use("/api/feedbacks", feedbackRoutes);    // Mounts the feedback routes on the "/api/feedbacks" path, so any requests to this path will be handled by the feedback routes.
app.use(errorHandler); // Always use the errorHandler middleware after all other middleware and routes to catch any errors that occur during request processing and send an appropriate response to the client.

// Test Route
app.get("/", (req, res) => {        // Defines a GET route for the root URL ("/").
    res.status(200).json({
        success: true,
        message: "Welcome to Website Feedback Portal API"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//module.exports = app;  Exports the Express app instance so it can be used in other files (like server.js).