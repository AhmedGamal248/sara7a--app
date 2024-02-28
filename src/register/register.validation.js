import joi from "joi";

const signUpValidation = joi.object({
name: joi.string().trim().min(2).required(),
email: joi.string().email().required(),
password:joi.string().pattern(/^[A-Z][a-z0-9_]{10,30}$/).required(),
PasswordConfirmation:joi.valid(joi.ref('password')).required(),
role: joi.string().valid('user', 'Company_HR')
})

export {
    signUpValidation
}