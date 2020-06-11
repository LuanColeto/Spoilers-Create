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
        const { id } = request.params;

        const trx = await knex.transaction();

        if (!id) {
            return response.status(400).json({message: 'Spoiler not find'})
        }

        const  {
            title,
            name,
            description
        } = request.body;

        const spoiler = {
            title,
            name,
            description
        };

        const newContent = await trx('spoilers').update(spoiler).where('id', id);

        await trx.commit(newContent);

        response.json(spoiler)
    }

    async destroy(request: Request, response: Response) {

        const { id } = request.params;

        const trx = await knex.transaction();

        if (!id) {
            return response.status(400).json({message: "Spoiler not found"})
        }


        const deleteSpoilers = await trx('spoilers').where('id', id).del();

        trx.commit(deleteSpoilers);

        response.json({message: 'succes'})

       }
}

export default SpoilersController;
