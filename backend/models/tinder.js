const mongoose = require('mongoose')

const tinderScema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    },
    created_At:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Cards' , tinderScema)