const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.DB_URL , {useFindAndModify:true,useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Mongo is Connected now")
}).catch((err)=>{
    console.log(err)
})