
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.FLOAT,
        },
        colors: {
            type: DataTypes.ENUM,
            values: ['red', 'blue', 'green', 'yellow']
        },
        size: {
            type: DataTypes.ENUM,
            values: ['S', 'M', 'L', 'XL', 'XS']
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        rate: {
            type: DataTypes.ENUM,
            values: ["0", '1', '2', '3', '4', '5'],
            defaultValue: "0"
        },
        status: {
            type: DataTypes.ENUM,
            values: ['InStock', 'Out Of Stock']
        },
        images: {
            type: DataTypes.JSON,
        }
    })
    return Product;
}