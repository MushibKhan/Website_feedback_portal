import fs from "fs/promises"; // Its a built-in Node.js module that allows us to read, write, create and delete files in the file system.
import path from "path"; // Its help us to create a correct path to the file, regardless of the operating system (Windows, macOS, Linux) the code is running on.
import { fileURLToPath } from "url";
import { AppError } from "../utils/AppError.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const feedbackFilePath = path.join(__dirname, "../data/feedbacks.json"); // Here we are use path.join() instead of writing "src/data/feedbacks.json" directly, because windows uses backslashes (\) in paths, while macOS and Linux use forward slashes (/). Using path.join() ensures that the correct path is created for the operating system the code is running on.

/**
 * Read all feedbacks from JSON file
 */
export const getAllFeedbacks = async () => {
  let feedbackData;
  // const feedbackData = fs.readFileSync(feedbackFilePath, "utf-8");      // Here readFileSync() method is used to read the contents of the feedbacks.json file synchronously. The "utf-8" argument specifies that the file should be read as a UTF-8 encoded string.
  // This means that the contents of the file will be returned as a string, rather than as a Buffer object.

  try {
    feedbackData = await fs.readFile(feedbackFilePath, "utf-8");
  } catch (error) {
    throw new AppError("Unable to read feedback data.", 500);
  }
  return JSON.parse(feedbackData); // The JSON.parse() method is used to convert the JSON string read from the file into a JavaScript object. This allows us to work with the feedback data as a regular JavaScript object, rather than as a string.
};

/**
 * Write feedback array into JSON file
 */
const writeFeedbacks = async (feedbacks) => {
  try {
    await fs.writeFile(
      feedbackFilePath,
      JSON.stringify(feedbacks, null, 2),
      "utf-8",
    );
  } catch (error) {
    throw new AppError("Unable to save feedback data.", 500);
  }
};

/**
 * Create new feedback
 */
export const createFeedbackService = async (feedbackData) => {
  const feedbacks = await getAllFeedbacks();

  // <-- ADDED: Generate the next numeric ID
  const newId =
    feedbacks.length > 0
      ? Math.max(...feedbacks.map((feedback) => Number(feedback.id))) + 1
      : 1;

  const newFeedback = {
    id: newId,
    title: feedbackData.title,
    description: feedbackData.description,
    type: feedbackData.type,
    priority: feedbackData.priority,
    status: "Open",
    createdAt: new Date().toISOString(),
  };

  feedbacks.push(newFeedback);

  await writeFeedbacks(feedbacks);

  return newFeedback;
};

/**
 * Get feedback by ID
 */
export const getFeedbackById = async (id) => {
  const feedbacks = await getAllFeedbacks();
  const feedback = feedbacks.find((item) => item.id === id);

  if (!feedback) {
    throw new AppError("Feedback not found.", 404);
  }

  return feedback;
};

/** Update feedback by ID
 This function updates an existing feedback entry in the JSON file based on the provided feedbackData. 
 It first reads all feedbacks, finds the index of the feedback to be updated, and if found, updates its properties with the new values. 
 If the feedback is not found, it throws an error. Finally, it writes the updated feedbacks back to the JSON file and returns the updated feedback.
 */

export const updateFeedbackService = (feedbackData) => {
  const feedbacks = readFeedbacks();
  const index = feedbacks.findIndex(
    (feedback) => feedback.id === feedbackData.id,
  );

  if (index === -1) {
    throw new AppError("Feedback not found.", 404);
  }

  const existingFeedback = feedbacks[index];

  feedbacks[index] = {
    ...existingFeedback,

    title: feedbackData.title,
    description: feedbackData.description,
    type: feedbackData.type,
    priority: feedbackData.priority,
    updatedAt: new Date().toISOString(),
  };

  writeFeedbacks(feedbacks);
  return feedbacks[index];
};

// module.exports = {
//     getAllFeedbacks
// };
