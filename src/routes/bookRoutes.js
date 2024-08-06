import express from 'express';
import { getAllBooks, getBookById, searchBooks } from 'bookController.js';

const router = express.Router();

// Rota 1: Sugestões de livros LGBT
router.get('/suggestions', getAllBooks);

// Rota 2: Detalhes de um livro específico
router.get('/book/:id', getBookById);

// Rota 3: Busca por título ou autor
router.get('/search', searchBooks);

export default router;
