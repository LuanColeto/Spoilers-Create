import express from 'express';

import SpoilersController from './controllers/SpoilersController';

const routes = express.Router();
const spoilersController = new SpoilersController();

routes.get('/spoilers', spoilersController.index);

routes.post('/spoilers', spoilersController.create);

routes.put('/spoilers/:id', spoilersController.update);

routes.delete('/spoiler/:id', spoilersController.dedtroy);


export default routes;
