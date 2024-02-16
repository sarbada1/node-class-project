import express from 'express';

import UserRoute from "./UserRouter.js";

const webRoute=express.Router();

webRoute.get('/', (req,res)=>{
    res.send("This is the news page");
})

webRoute.use('/user', UserRoute);

export default webRoute;