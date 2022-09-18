import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;


const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-xqdxxjk-shard-00-00.l99sing.mongodb.net:27017,ac-xqdxxjk-shard-00-01.l99sing.mongodb.net:27017,ac-xqdxxjk-shard-00-02.l99sing.mongodb.net:27017/?ssl=true&replicaSet=atlas-uyr8xi-shard-0&authSource=admin&retryWrites=true&w=majority`;
const Connection=async()=>{
    try{
       await mongoose.connect(URL,{useUnifiedTopology:'true'}) //useUnifiedTopology means use mongoDB latest
       console.log("Database connected successfullly ")
    }catch(error){
        console.log("Error while connecting to databse: ",error.message)
    }
}

export default Connection;