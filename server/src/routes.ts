import express from 'express';

import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';
import ClassesController from './controllers/ClassesController';

const routes = express.Router();

const classesController = new ClassesController();

routes.post('/classes', classesController.create);

export default routes;
