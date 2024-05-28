require('dotenv').config()
const compression = require('compression');
const express = require('express');
const helmet = require('helmet'); // Correct the import for helmet
const morgan = require('morgan');
const app = express();

// init middleware
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())



// init db
require('./dbs/init.mongodb')
const {CheckOverload} = require('./helpers/check.connect')
CheckOverload()



// init routers
app.get('/', (req, res, next) => {
    const strCompress = ' helo fantipjs'
    return res.status(500).json({
        massage: 'welcome fantipjs!',
        metadata: strCompress.repeat(10000)
    })
})

// handle eror
module.exports = app



