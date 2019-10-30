const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb+srv://myusername:mypassword@cluster0-mzspv.mongodb.net/productapi?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/",(req, res)=>{
    return res.send({status:true});
});
app.listen(8000);