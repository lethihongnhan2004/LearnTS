'use strict'
const mongoose = require('mongose')
const os = require('os')
const process = require('process')
const _SECONDS = 5000
// cout connect 
const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log(`Number of connection::${numConnection}`)
}


// check over load


const checkOverload = () => {
    setInterval( () => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        // exampele
        const maxConnection = numCores * 5;
        console.log(`Active connectionb: ${numConnection}`)
        console.log(`Memory usage:: ""${memoryUsage / 1024 / 1024} MB`)
        if(numConnection1 > maxConnection) {
            console.log(`connection overload detected`)
        }

    }, _SECONDS) // monitor every 5s
}
module.exports = {
    countConnect
}