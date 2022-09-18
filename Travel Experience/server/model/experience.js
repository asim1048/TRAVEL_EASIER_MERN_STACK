import mongoose from 'mongoose'

const userScheme=mongoose.Schema({

    key:{
        type:Number
    },
    userName: {
        type:String
    },
    email:{
        type:String,
        required:true
    },
    placeName:{
        type:String,
    },
    City:{
        type:String,
    },
    suggestion:{
        type:String,
    },
    image:{
        type:{}
    },
    costOfTravel:{
        type:String,
    },
    nealyPlaces:{
        type:String,
    },
    safety:{
        type:Boolean,
    },
    
    
    
});
const experience = mongoose.model('experience',userScheme); //creating a  collection(table) by checking with UserSchema

export default experience;