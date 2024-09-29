import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
    senderid:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    receiveid:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    message:{type:String,required:true}


    
})
export default Message=mongoose.model('Message',messageSchema)