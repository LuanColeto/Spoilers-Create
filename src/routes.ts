import express from 'express';

import SpoilersController from './controllers/SpoilersController';

const routes = express.Router();
const spoilersController = new SpoilersController();

routes.get('/spoilers', );

routes.post('/spoilers', () => {});

routes.put('/spoilers/:id', () => {});

routes.delete('/spoiler/:id', () => {});


export default routes;
