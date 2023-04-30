const { RequestError } = require("../../helpers");
const { Card } = require("../../models/user/card");


const getCards = async (req, res) => {
  const cards = await Card.find();
  if (!cards) {
    throw RequestError(409, "Cards not found");
  }
    res.status(200).json({
cards
  });
};

module.exports = getCards;