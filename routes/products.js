import express from 'express';
const router = express.Router();

let products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 }
];

router.get('/', (req, res) => {
    res.json(products);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

router.post('/', (req, res) => {
    const { name, price } = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (product) {
        const { name, price } = req.body;
        if (name) product.name = name;
        if (price) product.price = price;
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Product not found');
    }
});

export default router;
