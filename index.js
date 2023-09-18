const express = require('express');
const app = express();
const port = 5000;
const Routerloc = require("./router/rendomcontroller");
const db = require("./config/mongoos")
app.get("/" , (req,res)=>{
    res.send("hi working npm in index.js")
})

app.use("/api/products" , Routerloc);

app.listen(port,(err)=>{
    if(err)   console.log(`something error is hppeningin port : 5000`)
              console.log(`Server is runnig smoothly in this port : 5000`);
    });
