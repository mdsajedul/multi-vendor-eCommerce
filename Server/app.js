const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const userRouter = require('./routeHandler/userHandler')


const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))

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
// app.use('/',products);
app.use('/user',userRouter)
// app.use('/admin',adminRouter)
// app.use('/seller',sellerRouter)
// app.use('/rider',riderRouter)


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})