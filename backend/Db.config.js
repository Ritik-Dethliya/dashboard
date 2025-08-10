import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const URI=process.env.MongoURI
function connectDb(){
    mongoose.connect(URI)
    .then(()=>console.log("Connected to Db"))
    .catch((error)=>{
        console.log("error in Db conect",error)
    }
    )
}

export default connectDb