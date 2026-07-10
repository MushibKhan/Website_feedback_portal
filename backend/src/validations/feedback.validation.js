import { isRequired, isLengthBetween, isOneOf } from "./common.validation.js";

import {
  FEEDBACK_TYPES,
  FEEDBACK_PRIORITIES,
} from "../constants/feedback.constants.js";

/**
 * Validates feedback data.
 *
 * @param {Object} feedback
 * @param {boolean} requireId
 * @returns {Array}
 */
export const validateFeedback = (feedback, requireId = false) => {
  const errors = [];

  const { id, title, description, type, priority } = feedback;

  /* ---------- ID ---------- */

  if (requireId) {
    if (!isRequired(id)) {
      errors.push({
        field: "id",
        message: "Feedback ID is required.",
      });
    }
  }

  /* ---------- TITLE ---------- */

  if (!isRequired(title)) {
    errors.push({
      field: "title",
      message: "Title is required.",
    });
  } else if (!isLengthBetween(title, 5, 100)) {
    errors.push({
      field: "title",
      message: "Title must be between 5 and 100 characters.",
    });
  }

  /* ---------- DESCRIPTION ---------- */

  if (!isRequired(description)) {
    errors.push({
      field: "description",
      message: "Description is required.",
    });
  } else if (!isLengthBetween(description, 10, 1000)) {
    errors.push({
      field: "description",
      message: "Description must be between 10 and 1000 characters.",
    });
  }

  /* ---------- TYPE ---------- */

  if (!isRequired(type)) {
    errors.push({
      field: "type",
      message: "Type is required.",
    });
  } else if (!isOneOf(type, FEEDBACK_TYPES)) {
    errors.push({
      field: "type",
      message: `Type must be one of: ${FEEDBACK_TYPES.join(", ")}`,
    });
  }

  /* ---------- PRIORITY ---------- */

  if (!isRequired(priority)) {
    errors.push({
      field: "priority",
      message: "Priority is required.",
    });
  } else if (!isOneOf(priority, FEEDBACK_PRIORITIES)) {
    errors.push({
      field: "priority",
      message: `Priority must be one of: ${FEEDBACK_PRIORITIES.join(", ")}`,
    });
  }

  return errors;
};
