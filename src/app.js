import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectDatabase();

connection.on('error', (error) => {
    console.error('erro na conexão', error);
});

connection.once('open', () => {
    console.log('successfully connected with database');
})

const app = express();

routes(app);



app.delete("/books/:id", (req, res) => {
    const index = searchBook(req.params.id);
    books.splice(index, 1);
    res.status(200).send('book successfully deleted');
})


export default app;


