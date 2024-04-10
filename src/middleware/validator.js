import { validationResult } from "express-validator";

const findErrors = (req, res, next) => {
    const errors = validationResult(req).errors
    const formatErrors = [];


    if (errors.length) {
        errors.forEach(error => formatErrors.push(`${error.msg} for ${error.path}: '${error.value}'`))
        res.status(400).json({ message: formatErrors })
    }
    else{
        next();
    }

}

export default findErrors