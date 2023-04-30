const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { RequestError, handleSaveErrors } = require("../../helpers");

const cardSchema = new Schema(
    {
        title: {
            type: String,
            unique: true
        },
      subtitle: {
          type: String,
          unique: true,
        },
        description: {
          type: String,
        },
  },
  { versionKey: false, timestamps: true }
);

const Card = model("cards_info", cardSchema);
  

module.exports = {
  Card,
};