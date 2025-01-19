import Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().pattern(/w{4,}/).required().messages({
        'string.pattern.base':'only chars allowed & min 4 chars'
    }),
    password: Joi.string().min(3).max(6).required().messages({
        'string.min':'min 3 chars',
        'string.max':'max 6 chars'
    }),
    age: Joi.string().min(1).max(117).required().messages({
        'string.min': 'min 1 chars',
        'string.max': 'max 117 chars'
    })});

export default userValidator;
