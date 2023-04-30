const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { RequestError, handleSaveErrors } = require("../../helpers");

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
      },
      email: {
          type: String,
          required: [true, "Email is required"],
          unique: true,
        },
        phone: {
          type: String,
          required: [true, "Set phone for user"],
        },
        comments: {
            type: String,
            optional: true
    }
        
  },
  { versionKey: false, timestamps: true }
);
userSchema.post("save", handleSaveErrors);

const registerSchema = Joi.object({
    name: Joi.string().min(3).required().error(RequestError(400, "Name must contain min 3 symbols")),
  email: Joi.string()
    .trim()
    .email({
      minDomainSegments: 2,
    })
    .required()
    .error(
      RequestError(
        400,
        "Email can't be empty and must contain domain more than 2 symbols"
      )
    ),
  phone: Joi.string().min(6).required(),
});

const User = model("user", userSchema);
  
const schemas = {
  registerSchema,
};
module.exports = {
  User,
  schemas,
};