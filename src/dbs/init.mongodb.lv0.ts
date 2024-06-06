'use strict';

import mongoose from 'mongoose';

const connectString: string = `mongodb://localhost:27017/shopDev`;

mongoose.connect(connectString)
    .then(() => console.log(`Connected to MongoDB successfully`))
    .catch((err: Error) => console.log(`Error connecting to MongoDB: ${err.message}`));

// dev
if (process.env.NODE_ENV === 'development') {
    mongoose.set('debug', true);
    mongoose.set('debug', { color: true });
}

export default mongoose;
