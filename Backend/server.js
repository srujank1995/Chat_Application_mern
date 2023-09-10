const express = require("express")
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const PORT= process.env.PORT
app.listen(3030,console.log( `server is up .. at ${PORT}`))

app.get('/', (req,res)=>{
    res.send("The server is running to date..")
})

app.get('/chats', (req, res)=>{
    res.send("the server is running for chats")
})

