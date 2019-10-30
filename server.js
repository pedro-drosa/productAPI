const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://myusername:mypassword@cluster0-mzspv.mongodb.net/productapi?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/api', require('./src/routes'));
app.listen(8000);