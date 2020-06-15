import express from 'express';

import SpoilersController from './controllers/SpoilersController';

const routes = express.Router();
const spoilersController = new SpoilersController();

routes.get('/spoilers', spoilersController.index);

routes.get('/spoilers/:id', spoilersController.show);

routes.post('/spoilers', spoilersController.create);

routes.put('/spoilers/:id', spoilersController.update);

routes.delete('/spoilers/:id', spoilersController.destroy);


export default routes;
