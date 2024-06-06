'use strict';
import mongoose from 'mongoose';
import os from 'os';
import process from 'process';

const _SECONDS = 5000;

// Count connections
export const countConnect = (): void => {
    const numConnections = mongoose.connections.length;
    console.log(`Number of connections: ${numConnections}`);
}

// Check overload
export function checkOverload  (): void {
    setInterval(() => {
        const numConnections = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        // Example
        const maxConnections = numCores * 5;
        console.log(`Active connections: ${numConnections}`);
        console.log(`Memory usage: ${(memoryUsage / 1024 / 1024).toFixed(2)} MB`);

        if (numConnections > maxConnections) {
            console.log('Connection overload detected');
        }
    }, _SECONDS); // Monitor every 5 seconds
}
