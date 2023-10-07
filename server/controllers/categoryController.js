const { Category } = require("../database/index");




module.exports = {


    getAll: async (req, res) => {
        try {
            const category = await Category.findAll({ include: { all: true, nested: true } });
            res.json(category);
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getOne: async (req, res) => {
        try {
            const category = await Category.findOne({ include: { all: true, nested: true }, where: { id: req.params.id } });
            res.json(category);
        } catch (error) {
            res.status(404).send(error);
        }
    },
    createCategory: async (req, res) => {
        try {
            const category = await Category.create(req.body);
            res.status(201).json(category);
        } catch (error) {
            res.status(404).send(error);

        }
    }


}
