'use strict';

interface AppConfig {
    port: number;
}

interface DbConfig {
    host: string;
    port: number;
    name: string;
}

interface DevConfig {
    app: AppConfig;
    db: DbConfig;
}

interface ProConfig {
    app: AppConfig;
    db: DbConfig;
}

const dev: DevConfig = {
    app: {
        port: parseInt(process.env.DEV_APP_PORT as string, 10) || 3052
    },
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: parseInt(process.env.DEV_DB_PORT as string, 10) || 27017,
        name: process.env.DEV_DB_NAME || 'shopDev'
    }
};

const pro: ProConfig = {
    app: {
        port: parseInt(process.env.PRO_APP_PORT as string, 10) || 3000
    },
    db: {
        host: process.env.PRO_DB_HOST || 'localhost',
        port: parseInt(process.env.PRO_DB_PORT as string, 10) || 27017,
        name: process.env.PRO_DB_NAME || 'shopPRO'
    }
};

const config = { dev, pro };

export default config;

