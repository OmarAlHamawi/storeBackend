import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/products.js'; 
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

app.use('/api/products', productRoutes);

app.get("/", (req, res) => {
    res.send('home route');
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
