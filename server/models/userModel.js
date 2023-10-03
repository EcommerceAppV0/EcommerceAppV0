
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
        type: {
            type: DataTypes.ENUM,
            values: ['admin', 'Client', 'seller']
        }

    })
    return User;
}