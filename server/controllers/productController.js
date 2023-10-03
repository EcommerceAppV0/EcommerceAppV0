const { Product } = require("../database/index");


module.exports = {

    getAll: async (req, res) => {
        try {
            const products = await Product.findAll();
            res.json(products);
        } catch (error) {
            res.status(404).send(error);
        }
    },
    getOne: async (req, res) => {
        try {
            const product = await Product.findAll({ where: { id: req.params.id } });
            res.json(product);
        } catch (error) {
            res.status(404).send(error);
        }
    },
    createProdcut: async (req, res) => {
        try {
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(404).send(error);
        }
    },
    updateProduct: async (req, res) => {
        try {
            const product = await Product.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            res.json(product);
        }
        catch (error) {
            res.status(404).send(error);
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const deleted = await Product.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.json(deleted);
        } catch (error) {
            res.status(404).send(error)
        }
    }


}