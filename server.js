const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb+srv://myusername:mypassword@cluster0-mzspv.mongodb.net/productapi?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Product = require("./src/models/Product");

app.get("/",(req, res)=>{
    Product.create({
        title: "React Native",
        description:"Build native apps",
        url:"http://github.com/facebook/react-native"
    });
    return res.send({status:true});
});
app.listen(8000);