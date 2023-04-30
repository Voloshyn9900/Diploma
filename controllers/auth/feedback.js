const { User } = require("../../models/user/user");
const { RequestError } = require("../../helpers");


const feedback = async (req, res) => {
  const {name, email, phone, comment} = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }

    const result = await User.create({
    name,
    email,
    phone,
    comment

  });
    res.status(201).json({
    name: result.name,
    email: result.email,
  });
};

module.exports = feedback;