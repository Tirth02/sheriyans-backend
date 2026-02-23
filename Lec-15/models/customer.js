const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(`${process.env.MONGO_URI}`);


const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
});

module.exports =  mongoose.model("customer",userSchema);