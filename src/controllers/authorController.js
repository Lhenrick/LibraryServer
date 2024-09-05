import { author } from "../models/author.js";

class AuthorController {

    static async listAuthors(req, res) {
        try {

            const authorList = await author.find({});
            res.status(200).json(authorList);
        } catch (error) {
            res.status(500).json({message: `${error.message} - resquest failed`})
        }
    };

    static async listAuthorById(req, res) {
        try {
            const id = req.params.id
            const authorFound = await author.findById(id);
            res.status(200).json(authorFound);
        } catch (error) {
            res.status(500).json({message: `${error.message} - author resquest failed`})
        }
    };

    static async registerAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "successfully created", author: newAuthor });

        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to register` })
        }
    }

    static async updateAuthor(req, res) {
        try {
            const id = req.params.id
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "author updated"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - update failed`})
        }
    };

    static async deleteAuthor(req, res) {
        try {
            const id = req.params.id
            await author.findByIdAndDelete(id);
            res.status(200).json({message: "author successfully deleted"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - delete failed`})
        }
    };
};

export default AuthorController