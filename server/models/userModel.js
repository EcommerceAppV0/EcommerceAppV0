
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            required: true
        },
        password: {
            type: DataTypes.STRING,
            required: true,
            unique: false
        },
        name: {
            type: DataTypes.STRING,
            required: true,
            unique: false
        },
        lastName: {
            type: DataTypes.STRING,
            unique: false
        },
        adress: {
            type: DataTypes.STRING,
            unique: false
        },
        type: {
            type: DataTypes.ENUM,
            values: ['admin', 'Client', 'seller']
        },
        wishlist:{
            type: DataTypes.JSON,
            defaultValue: []
        },
        cartlist:{
            type: DataTypes.JSON,
            defaultValue: []
        }

    })
    return User;
}