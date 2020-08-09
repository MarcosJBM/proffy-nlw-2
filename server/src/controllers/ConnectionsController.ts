import { Request, Response } from 'express';

import db from '../database/connection';

export default class ConnectionsController {
    //Pega o total de Conexões realizadas.
    async index(request: Request, response: Response) {
        const totalConnections = await db('connections').count('* as total');

        const { total } = totalConnections[0];

        return response.json({ total });
    };

    //Cria uma conexão.
    async create(request: Request, response: Response) {
        const { user_id } = request.body;

        await db('connections').insert({
            user_id
        });

        return response.status(201).send();
    };
};
