import app from './src/app';
import { Server } from 'http';

const PORT: number = Number(process.env.PORT) || 3056;

const server: Server = app.listen(PORT, () => {
    console.log(`WSV ecommerce started with ${app}`);
});

// process.on('SIGINT', () => {
//     server.close(() => console.log('Exit Server Express'));
// });
