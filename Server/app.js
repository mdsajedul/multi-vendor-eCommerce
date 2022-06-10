const express = require('express');


const app = express();
const PORT = 8000 || process.env.PORT;


app.get('/',(req,res)=>{
    res.send('Hello from Server')
})
// app.use('/',products);
// app.use('/user',userRouter)
// app.use('/admin',adminRouter)
// app.use('/seller',sellerRouter)
// app.use('/rider',riderRouter)


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})