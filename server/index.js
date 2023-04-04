const express=require('express')
const app = express()
const conn=require('./connection/connect')
const apiRoutes=require('./routes/api')
const cors = require("cors");

let port = process.env.PORT ||  5500;


app.use(express.json())
app.use(cors());
app.use(apiRoutes)

app.listen(port)