// This file defines a utility function called asyncHandler that is used to wrap asynchronous route handler functions in an Express application.
// The asyncHandler function takes a function (fn) as an argument and returns a new function that handles the asynchronous execution of fn.
// It uses Promise.resolve() to ensure that the function is treated as a promise, and if any errors occur during its execution, they are caught and passed to the next middleware using next().
// This allows for centralized error handling in the Express application, making it easier to manage errors in asynchronous route handlers. 

export const asyncHandler = (fn) => {

    return (req, res, next) => {

        Promise.resolve(

            fn(req, res, next)

        ).catch(next);

    };

};