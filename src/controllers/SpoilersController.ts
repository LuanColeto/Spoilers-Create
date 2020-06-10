import {Request, Response} from 'express';
import knex from '../database/connection';

class SpoilersController {
    async index(request: Request, response: Response) {
        const spoilers = await knex('spoilers').select('*');

        return response.json(spoilers);
    }

    async create(request: Request, response:Response) {

    }

    async update(request: Request, response: Response) {

    }

    async dedtroy(request: Request, response: Response) {

    }
}

export default SpoilersController;
