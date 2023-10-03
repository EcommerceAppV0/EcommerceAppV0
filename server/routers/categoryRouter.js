const express = require("express");
const categoryRouter = express.Router();



const { getAll, getOne, createCategory } = require('../controllers/categoryController.js')



categoryRouter.get("/getAll", getAll)
categoryRouter.get("/:id", getOne)
categoryRouter.post("/add", createCategory)












module.exports = categoryRouter;
