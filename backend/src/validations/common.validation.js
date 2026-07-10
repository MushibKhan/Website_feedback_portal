// This file contains common validation functions that can be used across different parts of the application.


/**
 * Checks if the provided value is required (not undefined, null, or empty).
 */
export const isRequired = (value) => {
    return value !== undefined &&
           value !== null &&
           value.toString().trim() !== "";
};

/**
 * Checks if the provided value has a length between the specified minimum and maximum values.
 * It trims the value to remove any leading or trailing whitespace before checking the length.
 * This function can be used to validate the length of strings, such as usernames or descriptions.
 */
export const isLengthBetween = (
    value,
    min,
    max
) => {

    const length = value.trim().length;

    return length >= min && length <= max;
};

/**
 * Checks if the provided value is included in the allowedValues array.
 * It trims the value to remove any leading or trailing whitespace before checking for inclusion.
 * This function can be used to validate if a given input matches one of the predefined acceptable values, such as feedback types or priorities.
 */
export const isOneOf = (
    value,
    allowedValues
) => {

    return allowedValues.includes(
        value.trim()
    );
};