// This file defines constants related to feedback types, priorities, and status.
// Object.freeze() is used to create immutable arrays and objects, ensuring that the values cannot be modified after they are defined.

export const FEEDBACK_TYPES = Object.freeze([
    "Bug",
    "Suggestion",
    "Feature Request"
]);

export const FEEDBACK_PRIORITIES = Object.freeze([
    "Low",
    "Medium",
    "High"
]);

export const FEEDBACK_STATUS = Object.freeze({
    OPEN: "Open",
    IN_PROGRESS: "In Progress",
    CLOSED: "Closed"
});