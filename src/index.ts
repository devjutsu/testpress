import express, {NextFunction, Request, Response} from 'express';
import { createImportSpecifier } from 'typescript';

const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.route('/')
    .get((req: Request, res: Response) => {
        return res.send('This is not Sparta, but GET request');
    })
    .post((req: Request, res: Response) => {
        return res.send('No Sparta, but POST request');
    });

function handleGetBookOne(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);
    next();
}

function handleGetBookTwo(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);
    return res.send(req.params);
}

app.get("/api/books/:bookId/:authorId", [handleGetBookOne, handleGetBookTwo]);

// app.get('/te*t', (req :Request, res :Response) => {
//         console.log(req.body);
//         return res.send("/te*t");
//     });

app.get("/", (req :Request, res :Response) => {
    console.log('get called');
    // return res.redirect('http://google.com');
    // return res.send('hello');
    return res.json({test: true, name: 'yo'});
});

app.post('/api/data', (req :Request, res :Response) => {
    console.log(req.body);
    return res.sendStatus(200);
});

app.all('/api/all', (req:Request, res :Response) => {
    console.log('all called');
    return res.sendStatus(200);
});

app.listen(9000, () => {
    console.log('Listening at http://localhost:9000/');
})