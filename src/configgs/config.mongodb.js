'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const dev = {
    app: {
        port: parseInt(process.env.DEV_APP_PORT, 10) || 3052
    },
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: parseInt(process.env.DEV_DB_PORT, 10) || 27017,
        name: process.env.DEV_DB_NAME || 'shopDev'
    }
};
const pro = {
    app: {
        port: parseInt(process.env.PRO_APP_PORT, 10) || 3000
    },
    db: {
        host: process.env.PRO_DB_HOST || 'localhost',
        port: parseInt(process.env.PRO_DB_PORT, 10) || 27017,
        name: process.env.PRO_DB_NAME || 'shopPRO'
    }
};
const config = { dev, pro };
exports.default = config;
