const { Sequelize, DataTypes } = require("sequelize")

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: "mysql"
})


sequelize.authenticate()
    .then(() => console.log("coonected Done"))
    .catch(err => console.log(err));


const Client = require("../models/clientModel")(sequelize, DataTypes)



// sequelize.sync({ force: true })
//     .then(() => console.log("tables synced"))
//     .catch(err => console.log(err));



const db = {}
db.Client = Client
module.exports = db;    