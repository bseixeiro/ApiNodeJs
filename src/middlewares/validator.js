import { validationResult } from "express-validator";

const findErrors = (req, res, next) => {
    const errors = validationResult(req).errors
    const formatErrors = [];

    console.log(errors)
    if (errors.length) {
        errors.forEach(error => formatErrors.push(`${error.msg} for ${error.path}: '${typeof error.value === 'string' ? error.value : "Trop de valeur pour ce tableau" }'`))
        return res.status(400).json({ message: formatErrors })
    }

    next();
}

export default findErrors