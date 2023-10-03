const express = require("express");

const productRouter = express.Router();
const { createProdcut, getAll, getOne, deleteProduct, updateProduct } = require('../controllers/productController.js')



productRouter.post('/add', createProdcut)
productRouter.get('/getAll', getAll)
productRouter.get('/:id', getOne)
productRouter.put('/:id', updateProduct)
productRouter.delete('/:id', deleteProduct)





module.exports = productRouter;