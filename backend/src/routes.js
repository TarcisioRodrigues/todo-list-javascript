import {Router} from 'express';

import * as TaskController from './controllers/TaskController';


const routes=Router();
routes.post('/task',TaskController.create);
routes.get('/tasklist',TaskController.index);
routes.get('/tasklist/:id',TaskController.search);
routes.delete('/task/:id',TaskController.destroy);
routes.put('/task/:id',TaskController.update);

export default routes;