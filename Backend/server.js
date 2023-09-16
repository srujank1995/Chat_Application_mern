const express = require("express")
const dotenv = require("dotenv");
const connect = require('./Database/Db.js');
const router = require('./Routes/Routes.js');
const app = express();
const {notfound, errorhandler} = require('./Middleware/ErrorMiddleware.js')
dotenv.config();
connect();


const port= process.env.PORT
app.use(express.json());

app.use('/api/user', router)

app.use(notfound);
app.use(errorhandler)

app.listen(3030,console.log( `server is up .. at ${port}`))
