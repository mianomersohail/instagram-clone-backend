import mongoose from "mongoose";

const ConversationSchema=new mongoose.Schema({
    participants:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
    message:[{type:mongoose.Schema.Types.ObjectId,ref:'Message'}]

})

export default conversations=mongoose.model('conversations',ConversationSchema)