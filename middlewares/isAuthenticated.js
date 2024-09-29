import jwt from 'jsonwebtoken'
const isAuthenticated=async(req,res,next)=>{
    try{
        const token=req.body.token;
        if(!token){
            return res.status(401).json({message:"User not Authenticated"})
        }
        const CheckToken=await jwt.verify(token,Process.env.SECRET_KEY);
        if(!CheckToken){
  
            return res.status(401).json({message:"User Not Authenticated"})
        }

        req.id=CheckToken.id;
        next()


    }catch(error){
        console.log(error)
    }

}