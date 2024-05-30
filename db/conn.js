const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config().parsed;

const DB = "mongodb+srv://vinoth:Vinoth.m007@user.eg3bdy9.mongodb.net/reset-password"
mongoose.set('strictQuery', false);

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})