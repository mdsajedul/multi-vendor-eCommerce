const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const userRouter = require('./routeHandler/userHandler')
const sellerRouter = require('./routeHandler/sellerHandler')
const adminRouter = require('./routeHandler/adminHandler')
const riderRouter = require('./routeHandler/riderHandler')


const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'));
app.use(cors())

const username = process.env.USERNAME
const dbname = process.env.DB_NAME
const PORT = 8000 || process.env.PORT;


mongoose.connect( `mongodb://localhost/dokan`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
      console.log('Connection Successfull')
  }).catch((err)=>{
      console.log(err)
  })



app.get('/',(req,res)=>{
    res.send('Hello from Server')
})

app.use('/user',userRouter)
app.use('/admin',adminRouter)
app.use('/seller',sellerRouter)
app.use('/rider',riderRouter)
app.get("*", (req, res) => {
    res.status(404).send("Not Found")
  });


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})