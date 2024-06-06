import dotenv from 'dotenv';
dotenv.config();

import compression from 'compression';
import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { initMongoDB } from './dbs/init.mongodb';
import { checkOverload } from './helpers/check.connect';

const app = express();

// init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init db
initMongoDB();
checkOverload();

// init routers
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    const strCompress = 'helo fantipjs';
    return res.status(200).json({
        message: 'welcome fantipjs!',
        metadata: strCompress.repeat(10000)
    });
});

// handle error
export default app;
