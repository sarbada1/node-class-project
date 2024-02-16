import express from 'express';
import UserController from '../controller/UserController.js';

const UserRoute=  express.Router();
const userInstance= new UserController();

UserRoute.get('/',userInstance.get);
UserRoute.post('/',userInstance.post);

UserRoute.get('/:id',userInstance.getById);
UserRoute.delete('/:id',userInstance.delete);

export default UserRoute;