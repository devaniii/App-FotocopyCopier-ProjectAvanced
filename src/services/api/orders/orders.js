//src/services/api/orders/orders.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), (req, res) => {
    const { file, body } = req;
    // Aquí puedes procesar el archivo y los detalles del pedido.
    const newOrder = {
        id: Date.now(),
        filePath: file.path,
        details: body.details,
        price: body.price,
        status: 'pending'
    };
    // Guardar el nuevo pedido en la base de datos (o en memoria para esta demostración).
    res.json(newOrder);
});

module.exports = router;
