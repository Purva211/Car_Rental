import User from "../models/user.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


//generate JWT Token
const generateToken =(userId)=>{
    const payload =userId;

    return jwt.sign(payload, process.env.JWT_SECRET)

}

//register user

export const registerUser =async (req, res)=>{
    try{
        const{name, email, password} =req.body

        if(!name || !email || !password || password.length <8){
            return res.json({success: false, message: 'Fill all the fields'})
        }

        const UserExists = await User.findOne({email})

        if(UserExists){
            return res.json({success: false , message: 'User already exists'})   
        }
        const hashedPassword =await bcrypt.hash(password,10)
        const user = await User.create({
          name,
          email,
          password: hashedPassword,
        });

        const Token = generateToken(user._id.toString())
        res.json({success:true, token}

        )
    }catch(error){
        console.log(error.message);
        res.json({success:false, message: error.message})
    }
}

//login user

