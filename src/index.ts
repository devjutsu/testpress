import express, {NextFunction, Request, Response} from 'express';
import { createImportSpecifier } from 'typescript';
import routes from './routes';
import helmet from 'helmet';

const app = express();

app.use(helmet());

app.use(express.json());

routes(app);

app.listen(9000, () => {
    console.log('Listening at http://localhost:9000/');
})