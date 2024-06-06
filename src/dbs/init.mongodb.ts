'use strict';

import mongoose from 'mongoose';
import {db} from '../configgs/config.mongodb';
import { countConnect } from '../helpers/check.connect';

const { host, name, port } = db;
const connectString: string = `mongodb://${host}:${port}/${name}`;

class Database {
    private static instance: Database;

    private constructor() {
        this.connect();
    }

    // connect
    private connect(type: string = 'mongodb'): void {
        if (process.env.NODE_ENV === 'development') {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }

        mongoose.connect(connectString, {
            maxPoolSize: 50
        }).then(() => {
            console.log(`Connected to MongoDB successfully`, countConnect());
        }).catch((err: Error) => {
            console.log(`Error connecting to MongoDB: ${err.message}`);
        });
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();
export default instanceMongodb;
