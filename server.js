const express = require("express");
const app = express();
app.get("/",(req, res)=>{
    return res.send({status:true});
});
app.listen(8000);