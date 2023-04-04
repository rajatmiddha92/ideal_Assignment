const mongoose = require('mongoose');
const Schema=mongoose.Schema

const dataSchema = new Schema({
    label:{type: String,requred:true},
    photourl:{type:String,required:true}
})

const Data = mongoose.model("datas",dataSchema)

module.exports= Data