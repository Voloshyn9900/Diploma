const express = require("express");
const { schemas } = require("../../models/user/user");
const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/auth");

const router = express.Router();



router.post("/register", ctrlWrapper(ctrl.feedback))

router.get("/portfolio", ctrlWrapper(ctrl.getCards))



// router.get("/portfolio", ctrlWrapper(ctrl.portfolio))


module.exports = router