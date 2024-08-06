import fs from 'fs';
import path from 'path';

const dataFilePath = path.resolve('src/data/db.json');

const loadBooks = () => {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data).books;
};

const saveBooks = (books) => {
    const data = { books };
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

export const getAllBooks = (req, res) => {
    const books = loadBooks();
    res.json(books);
};

export const getBookById = (req, res) => {
    const bookId = parseInt(req.params.id);
    const books = loadBooks();
    const book = books.find(b => b.id === bookId);
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
};

export const searchBooks = (req, res) => {
    const { title, author } = req.query;
    let books = loadBooks();
    if (title) {
        books = books.filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (author) {
        books = books.filter(b => b.author.toLowerCase().includes(author.toLowerCase()));
    }
    res.json(books);
};
