// import http from 'http';
import "dotenv/config";
import app from './src/app.js';

const PORT = 3000;

// const routes = {
//     "/": "Express course",
//     "/books": "I entered the books route",
//     "/authors": "I entered the authors route"
// };

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain' });
//     res.end(routes[req.url])
// });



app.listen(PORT, () => {
    console.log('server listening')
})