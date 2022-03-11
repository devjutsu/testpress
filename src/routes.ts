import {Express, Request, Response, NextFunction } from 'express';

import * as controller from './controllers/books.controller';

async function throwsError() {
    throw new Error('Boom!');
}

function routes(app: Express) {
    app.get(
        "/api/books/:bookId/:authorId",
        [controller.handleGetBookOne, controller.handleGetBookTwo]
    );

    app.route('/')
    .get((req: Request, res: Response) => {
        return res.send('This is not Sparta, but GET request');
    })
    .post((req: Request, res: Response) => {
        return res.send('No Sparta, but POST request');
    });

    app.get("/hello", (req :Request, res :Response) => {
        console.log('get called');
        // return res.redirect('http://google.com');
        // return res.send('hello');
        return res.json({test: true, name: 'yo'});
    });

    app.get('/te*t', (req :Request, res :Response) => {
        console.log(req.body);
        return res.send("/te*t");
    });

    app.post('/api/data', (req :Request, res :Response) => {
        console.log(req.body);
        return res.sendStatus(200);
    });
    
    app.all('/api/all', (req:Request, res :Response) => {
        console.log('all called');
        return res.sendStatus(200);
    });

    app.get('/error', async (req, res) => {
        try {
            await throwsError();
            res.send("ok");
        } catch(error) {
            var e = (error as Error);
            console.log(e.message);
            res.status(400).send(e.message);
        }
    });
}

export default routes;