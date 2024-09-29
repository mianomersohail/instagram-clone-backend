import dotenv from 'dotenv'
import { connect } from 'mongoose'
import mongoose from 'mongoose'
const connectDb=async ()=>{
    try{
       await  mongoose.connect(process.env.MONG_URL)
       console.log('MongoDbConnect successfully')


    }catch(error){
        console.log('Error',error.message)

    }
}
export default connectDb;