const express = require("express");
const importData = require("./data.json")
const app= express();

let port = process.env.PORT || 3000;

app.get("/", (req,res)=>{
    res.send("Hello")
})

app.get("/books",(req, res)=>{
    res.send(importData)
})

app.listen(port,()=>{
    console.log(`example app is listening on port http://localhost:${port}`)
})