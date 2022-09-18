import mongoose from 'mongoose'

const userScheme=mongoose.Schema({
    userName:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    }
});

const user = mongoose.model('user',userScheme); //creating a  collection(table) by checking with UserSchema

export default user;