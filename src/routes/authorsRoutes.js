import express from "express"
import AuthorsController from "../controllers/authorController.js"

const routes = express.Router();

routes.get('/authors', AuthorsController.listAuthors);
routes.get('/authors/:id', AuthorsController.listAuthorById);
routes.post('/authors', AuthorsController.registerAuthor);
routes.put('/authors/:id', AuthorsController.updateAuthor);
routes.delete('/authors/:id', AuthorsController.deleteAuthor);




export default routes