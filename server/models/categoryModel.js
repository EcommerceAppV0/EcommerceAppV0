
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('category', {
        name: {
            type: DataTypes.STRING,
            required: true,
            unique: false
        }
    })
    return Category;
}