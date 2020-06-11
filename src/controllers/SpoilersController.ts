import {Request, Response} from 'express';
import knex from '../database/connection';

class SpoilersController {
    async index(request: Request, response: Response) {
        const spoilers = await knex('spoilers').select('*');

        return response.json(spoilers);
    }

    async create(request: Request, response:Response) {
        const {
            title,
            name,
            description
        } = request.body;

        const trx = await knex.transaction();

        const spoiler = {
            title,
            name,
            description
        };

        const insertedIds = await trx('spoilers').insert(spoiler);

        const spoiler_id = insertedIds[0];

        await trx.commit();

        response.json({
            id: spoiler_id,
            ...spoiler
        })

    }

    async update(request: Request, response: Response) {

    }

    async dedtroy(request: Request, response: Response) {

    }
}

export default SpoilersController;
