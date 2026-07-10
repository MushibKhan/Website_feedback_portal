
/*
 This middleware function handles errors that occur during the processing of requests in the Express application. 
 It takes four parameters: err (the error object), req (the request object), res (the response object), and next (a function to pass control to the next middleware). 
 The function logs the error to the console and sends a JSON response with an appropriate status code and error message. 
 If the error object has a statusCode property, it uses that; otherwise, it defaults to 500 (Internal Server Error).
 The response includes a success flag set to false and a message describing the error.
*/ 
export const errorHandler = (err, req, res, next) => {

    console.error(err);

    res.status(err.statusCode || 500).json({

        success: false,

        message:
            err.message || "Internal Server Error"

    });

};