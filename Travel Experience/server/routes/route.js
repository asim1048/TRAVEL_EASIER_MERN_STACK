import express from 'express';
import {addExperience,getExperiences} from '../controller/experience-controller.js'
import { addUser,getUsers } from '../controller/user-controller.js';

const route=express.Router();

route.post('/addUser',addUser)
route.get('/users',getUsers)

route.post('/addExperience',addExperience)

route.get('/experiences',getExperiences)



export default route;