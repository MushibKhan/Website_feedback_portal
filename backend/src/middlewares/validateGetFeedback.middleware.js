// This middleware function validates the request body for the "get feedback" operation.
// It checks if the "id" field is present and not empty in the request body.
// If the "id" field is missing or empty, it adds an error message to the errors array.
// If there are any validation errors, it sends a 400 Bad Request response with the errors.
// If there are no validation errors, it calls the next middleware function in the stack.   

export const validateGetFeedback = (req, res, next) => {

    const { id } = req.body;

    const errors = [];

    if (!id || !id.trim()) {

        errors.push({
            field: "id",
            message: "Feedback id is required."
        });

    }
    else if (!/^\d+$/.test(id)) {

        errors.push({
            field: "id",
            message: "Feedback id must contain only numbers."
        });

    }


    if (errors.length > 0) {

        return res.status(400).json({
            success: false,
            errors
        });

    }

    next();

};