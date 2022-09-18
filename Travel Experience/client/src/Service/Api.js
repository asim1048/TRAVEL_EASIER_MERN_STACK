import axios from 'axios'
const URL="http://localhost:8000";//backend url

export const  addUser=async (data)=>{
    try{
        await axios.post(`${URL}/addUser`,data)
    }catch(error){
        console.log("Error while calling AddUser Api: ",error.message)
    }
}


export const  getUsers=async ()=>{
    try{
        const response=await axios.get(`${URL}/users`)
        //console.log(response)
        return response.data;
    }catch(error){
        console.log("Error while calling GetUsers Api: ",error.message)
    }
}

export const  addExperience=async (data)=>{
    try{
                //console.log("data to send",data)

        await axios.post(`${URL}/addExperience`,data)
    }catch(error){
        console.log("Error while calling AddExperience Api: ",error.message)
    }
}


export const  getExperiences=async ()=>{
    try{
        const response=await axios.get(`${URL}/experiences`)
        //console.log(response)
        return response.data;
    }catch(error){
        console.log("Error while calling GetUsers Api: ",error.message)
    }
}