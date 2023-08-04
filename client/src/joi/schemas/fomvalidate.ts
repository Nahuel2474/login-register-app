import Joi from "joi";
const pattern = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9]).{6,30}$/

export const formValidate = Joi.object({
  user: Joi.string().alphanum().min(6).max(20).required().messages({
    "string.pattern.base": "El usuario debe contener al menos un símbolo, una letra mayúscula y un número",
    "string.min": "El usuario debe tener al menos {#limit} caracteres",
    "string.max": "El usuario no puede tener más de {#limit} caracteres",
  }),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),

  password: Joi.string()
    .regex(RegExp(pattern))
    .required()
    .min(8)
    .max(20)
    .required()
    .messages({
      "string.pattern.base": "La contraseña debe contener al menos un símbolo, una letra mayúscula y un número",
      "string.min": "La contraseña debe tener al menos {#limit} caracteres",
      "string.max": "La contraseña no puede tener más de {#limit} caracteres",
    }),


});
