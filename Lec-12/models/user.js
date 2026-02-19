const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(`mongodb+srv://pateltirth5442_db_user:${process.env.DB_PASSSWORD}@cluster0.xnctlbs.mongodb.net/`)
.then(() =>{
    console.log("MongoDB connected");
})
.catch(err => console.log("DB Error:", err));

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    image:String
})

module.exports = mongoose.model('user',userSchema);

