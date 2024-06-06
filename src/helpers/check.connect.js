'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOverload = exports.countConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const os_1 = __importDefault(require("os"));
const process_1 = __importDefault(require("process"));
const _SECONDS = 5000;
// Count connections
const countConnect = () => {
    const numConnections = mongoose_1.default.connections.length;
    console.log(`Number of connections: ${numConnections}`);
};
exports.countConnect = countConnect;
// Check overload
const checkOverload = () => {
    setInterval(() => {
        const numConnections = mongoose_1.default.connections.length;
        const numCores = os_1.default.cpus().length;
        const memoryUsage = process_1.default.memoryUsage().rss;
        // Example
        const maxConnections = numCores * 5;
        console.log(`Active connections: ${numConnections}`);
        console.log(`Memory usage: ${(memoryUsage / 1024 / 1024).toFixed(2)} MB`);
        if (numConnections > maxConnections) {
            console.log('Connection overload detected');
        }
    }, _SECONDS); // Monitor every 5 seconds
};
exports.checkOverload = checkOverload;
