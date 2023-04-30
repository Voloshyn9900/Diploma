const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST_CARDS} = process.env;

mongoose.connect(DB_HOST_CARDS).then(() => {
    console.log("Cards Database connected!");
    app.listen(3001);
}).catch((err) => {
    console.log(err.message);
    process.exit(1);
});