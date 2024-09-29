import mongoose, { Mongoose } from "mongoose";
const UserSchema=new mongoose.Schema({
    Username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    profilepic:{type:String,default:''},
    bio:{type:String,default:''},
    gender:{type:String,enum:['Male','female']},
    followers:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],    
    following:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    posts:[{type:mongoose.Schema.Types.ObjectId,ref:"Post"}],
    bookmarks:[{type:mongoose.Schema.Types.ObjectId,ref:"Post"}]

},{timestamps:true})
export const User=mongoose.model('User',UserSchema);