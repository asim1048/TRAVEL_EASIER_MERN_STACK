import Experience from "../model/experience.js"


export const addExperience=async(request,response)=>{
    try{

        const newExperience=new Experience(request.body)
        console.log(request.body)
        await newExperience.save();
        return response.status(200).json(newExperience)
    }catch(error){
        return response.status(500).json(error.message)
    }
}

export const getExperiences=async(request,response)=>{
    try{
       const experiences=await Experience.find({})
       return response.status(200).json(experiences)
    }catch(error){
        return response.status(500).json(error.message)
    }
}