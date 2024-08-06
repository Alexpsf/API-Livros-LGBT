import express from 'express';
import bookRoutes from './routes/bookRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', bookRoutes);

app.listen(port, () => {
    console.log(`LGBT Book API listening at http://localhost:${port}`);
});
