import mongoose from "mongoose";
const postSchema=new mongoose.model({
    caption:{type:String,default:''},
    image:{type:String,required:true},
    author:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    likes:[{types:mongoose.Schema.Types.ObjectId,ref:'User'}],
    comments:[{type:mongoose.Schema.Types.ObjectId,ref:'comments'}]
})
export const  Post=mongoose.model('Post',postSchema)