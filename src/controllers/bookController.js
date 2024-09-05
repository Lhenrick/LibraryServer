import book from "../models/Book.js"
import { author } from "../models/author.js";

class BookController {

    static async listBooks(req, res) {
        try {

            const booksList = await book.find({});
            res.status(200).json(booksList);
        } catch (error) {
            res.status(500).json({message: `${error.message} - resquest failed`})
        }
    };

    static async listBookById(req, res) {
        try {
            const id = req.params.id
            const bookFound = await book.findById(id);
            res.status(200).json(bookFound);
        } catch (error) {
            res.status(500).json({message: `${error.message} - book resquest failed`})
        }
    };

    static async registerBook(req, res) {
        const newBook = req.body;


        try {
            const authorFound = await author.findById(newBook.author);
            const completeBook = {...newBook, author: {...authorFound._doc}}
            const createdBook = await book.create(completeBook);
            res.status(201).json({ message: "successfully created", book: createdBook });

        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to register` })
        }
    }

    static async updateBook(req, res) {
        try {
            const id = req.params.id
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "book updated"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - update failed`})
        }
    };

    static async deleteBook(req, res) {
        try {
            const id = req.params.id
            await book.findByIdAndDelete(id);
            res.status(200).json({message: "book successfully deleted"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - delete failed`})
        }
    };

    static async listBookByPublisher (req, res){
        const publisher = req.query.publisher;
        try{
            const booksByPublisher = await book.find({publisher: publisher});
            res.status(200).json(booksByPublisher)
        } catch (error) {
            res.status(500).json({message: `${error.message} - search failed`})

        }
    }
};

export default BookController