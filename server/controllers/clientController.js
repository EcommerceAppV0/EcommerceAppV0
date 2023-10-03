const jwt = require("jsonwebtoken");
const { Client } = require("../database/index");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res) => {
    try {
        bcrypt.hash(req.body.password, 10).then((hassedPass) => {
            console.log(hassedPass);
            Client.create({
                email: req.body.email,
                password: hassedPass,
                type: req.body.type,
                name: req.body.name
            })
                .then((result) => res.status(201).json({
                    message: "Client Created Successfully",
                    result,
                }))
                .catch((error) => {
                    res.status(500).send({
                        message: "Error creating Client",
                        error,
                    });
                });
        })


    } catch (error) {
        res.status(500).send({
            message: "Password was not hashed successfully",
            error,
        });
    }
}



module.exports.login = async (req, res) => {
    Client.findOne({
        where: {
            email: req.body.email,
        },
    }).then((Client) => {
        bcrypt.compare(req.body.password, Client.password)
            .then((passChedk) => {
                if (!passChedk) {
                    res.status(400).send({
                        message: "Passwords does not match",
                        error
                    })
                }
                const Token = jwt.sign({
                    ClientId: Client.id,
                    email: Client.email,
                }, process.env.SECRET_KEY,
                    { expiresIn: "24h" })
                res.status(200).json({
                    message: "Login Successfull",
                    email: Client.email,
                    token: Token,
                })
            }).catch((error) => {
                res.status(400).send({
                    message: "Passwords does not matchhh",
                    error,
                });
            });
    }).catch((error) => {
        res.status(404).send({
            message: "Email not found",
            error,
        });
    });
}
