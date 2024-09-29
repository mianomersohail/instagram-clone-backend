import User, { User, User } from '../user.model.js'
import jwt from 'jsonwebtoken'
export const Register=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        if(!username||!email || !password){
            res.status(401).json({message:'Something is missing plz Check!',success:false})
        } 
        const Users=User.findOne({email});
        if(Users){
            return res.status(401).json({message:"Email Not Found",success:false});
        }
       const Hashpassword=await bcrypt.hash(password,10); 
       await User.create({
        email,username,Hashpassword
       })
       return res.status(201).json({message:"Account Create Successfully",success:true});

    }catch(error){
        console.log(error)

    }

}
export const Login=async (req,res)=>{
    try{
        const {email,password}=req.body;
    if(!email ||password){
        return res.status(401).json({message:"Something Missing Plz Check",success:false})
   
    }
    const User=await Users.findOne({email})
    if(!Users){
        return res.status(401).json({message:"Email or Password Not Match",success:false})
    }
const ispasswordmatch=await bcrypt.compare(password,User.password)
if(!ispasswordmatch){
    return res.status(201).json({message:"Incorrect Email or Password"})
}
User={
    id:User.id,
    Username:User.Username,
    email:User.email,
    profilepicture:User.profilepicture,
    bio:User.bio,
    followers:User.followers,
    following:User.following,
    post:User.posts
}
const token=jwt.sign(User.email,user.password,process.env.SECRET_KEY,{expiresIn:'1d'})
return res.cookie('InstaToken',token,{httpOnly:true,SameSite:'Strict',maxAge:1*24*60*60*1000}).json({
    message:`Welcome Back ${User.name}`,
    success:true,
    User
    
})
    }catch(error){
        console.log(error)

    }
}

export const Logout=(req)=>{
    try{
res.cookie('token','',{maxage:"0"}).json({message:"Logout Successfully",success:true})
    }catch(error){
console.log(error)
    }

}
export const getProfile=async(req,res)=>{
    try{
        const UserId=req.params.id;
        const User=await User.findOne(UserId)
        return res.status(200).json({
        User,
        success:true

        })

    }catch(error){
        console.log(error)
    }
}
export const editProfile=async()=>{
    try{
const userid=req.id;


    }catch(error){
        console.log(error)
    }
}