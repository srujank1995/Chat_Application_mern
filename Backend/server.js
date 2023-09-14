const {chats} = require('./data.js')

const express = require("express")
const dotenv = require("dotenv");
const connect = require('./Database/Config/Db.js');
const app = express();
dotenv.config();
connect();
const port= process.env.PORT
app.listen(3030,console.log( `server is up .. at ${port}`))

app.get("/", (req,res)=>{
    res.send(`/Backend/Data/Data.js`)
})

app.get("/api/chats", (req,res)=>{
    res.send(chats) 
})

app.get('/chats', (req, res)=>{
    res.send("the server is running for chats")
})

