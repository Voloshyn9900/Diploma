const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const feedbackRouter = require("./routes/api/feedback");

const app = express();

const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json());

app.use("/", feedbackRouter);

app.use((req, res) => {
    res.status(404).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
    const { message = "Server Failure", status = 500 } = err;
    res.status(status).json({ message: message });
});

module.exports= app