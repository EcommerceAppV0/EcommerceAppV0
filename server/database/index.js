const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: "mysql"
})


sequelize.authenticate()
    .then(() => console.log("coonected Done"))
    .catch(err => console.log(err));


const User = require("../models/userModel")(sequelize, DataTypes)
const Product = require("../models/productModel")(sequelize, DataTypes)

User.hasMany(Product)
Product.belongsTo(User)





// sequelize.sync({ force: true })
//     .then(() => console.log("tables synced"))
//     .catch(err => console.log(err));



const db = {}
db.User = User
db.Product = Product
module.exports = db;    