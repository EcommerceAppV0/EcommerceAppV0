
module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
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
            values: ['admin', 'client', 'seller']
        }

    })
    return Client;
}