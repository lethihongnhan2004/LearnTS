"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const compression_1 = __importDefault(require("compression"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const init_mongodb_1 = __importDefault(require("./dbs/init.mongodb"));
const check_connect_1 = require("./helpers/check.connect");
const app = (0, express_1.default)();
// init middleware
app.use((0, morgan_1.default)('dev'));
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)());
// init db
(0, init_mongodb_1.default)();
(0, check_connect_1.CheckOverload)();
// init routers
app.get('/', (req, res, next) => {
    const strCompress = 'helo fantipjs';
    return res.status(200).json({
        message: 'welcome fantipjs!',
        metadata: strCompress.repeat(10000)
    });
});
// handle error
exports.default = app;
