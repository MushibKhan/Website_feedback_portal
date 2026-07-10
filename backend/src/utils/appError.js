// This file defines a custom error class called AppError that extends the built-in Error class in JavaScript.
// The AppError class is used to create error objects with a message and a status code, 
// which can be used to handle errors in an Express application.

export class AppError extends Error {

    constructor(message, statusCode) {

        super(message);

        this.statusCode = statusCode;

        this.status = "fail";

    }

}