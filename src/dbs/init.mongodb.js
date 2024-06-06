'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_mongodb_1 = require("../configgs/config.mongodb");
const check_connect_1 = require("../helpers/check.connect");
const { host, name, port } = config_mongodb_1.db;
const connectString = `mongodb://${host}:${port}/${name}`;
class Database {
    constructor() {
        this.connect();
    }
    // connect
    connect(type = 'mongodb') {
        if (process.env.NODE_ENV === 'development') {
            mongoose_1.default.set('debug', true);
            mongoose_1.default.set('debug', { color: true });
        }
        mongoose_1.default.connect(connectString, {
            maxPoolSize: 50
        }).then(() => {
            console.log(`Connected to MongoDB successfully`, (0, check_connect_1.countConnect)());
        }).catch((err) => {
            console.log(`Error connecting to MongoDB: ${err.message}`);
        });
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}
const instanceMongodb = Database.getInstance();
exports.default = instanceMongodb;
