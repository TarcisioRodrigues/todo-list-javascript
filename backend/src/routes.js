import {Router} from 'express';

import TaskController from './controllers/TaskController';


const routes=Router();
routes.post('/task/create',TaskController.create);
routes.get('/tasklist',TaskController.index);
routes.delete('/task/:id',TaskController.destroy);


export default routes;