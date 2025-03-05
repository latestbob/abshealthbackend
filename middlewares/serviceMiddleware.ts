import { body, validationResult } from 'express-validator';





export const validateService = [

    body('name').isString().withMessage("name must be a string").notEmpty().withMessage("name is required"),
    body('fee').optional().isNumeric().withMessage("fee must be a number"),

];