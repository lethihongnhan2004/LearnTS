const app = require('./src/app');
const PORT = 5000;

const server = app.listen(PORT, () => {
    console.log(`WSV ecommerce started with ${app}`);
});

// process.on('SIGINT', () => {
//     server.close(() => console.log('Exit Server Express'));
// });
