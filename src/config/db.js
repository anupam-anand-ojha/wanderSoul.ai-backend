import mongoose, { model } from "mongoose";

const connectDB = async() =>
{
    try{
        await mongoose.connect(process.env.MONGO_URI);

        console.log("database connected successfully")
    }
    catch(error){
        console.error("database connection failed", error.message)
    }
};
export default connectDB;