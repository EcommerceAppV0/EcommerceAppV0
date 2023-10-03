const jwt = require("jsonwebtoken");
const { User } = require("../database/index");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res) => {
    try {
        bcrypt.hash(req.body.password, 10).then((hassedPass) => {
            console.log(hassedPass);
            User.create({
                email: req.body.email,
                password: hassedPass,
                type: req.body.type,
                name: req.body.name
            })
                .then((result) => res.status(201).json({
                    message: "User Created Successfully",
                    result,
                }))
                .catch((error) => {
                    res.status(500).send({
                        message: "Error creating User",
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
    User.findOne({
        where: {
            email: req.body.email,
        },
    }).then((User) => {
        bcrypt.compare(req.body.password, User.password)
            .then((passChedk) => {
                if (!passChedk) {
                    res.status(400).send({
                        message: "Passwords does not match",
                        error
                    })
                }
                const Token = jwt.sign({
                    userId: User.id,
                    email: User.email,
                }, process.env.SECRET_KEY,
                    { expiresIn: "24h" })
                res.status(200).json({
                    message: "Login Successfull",
                    email: User.email,
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

module.exports.getOneUser = async (req, res, next) => {
    try {
        const user = await User.findOne({
            include: {
                all: true,
                nested: true,
            },
            where: {
                id: req.params.id,
            },
        });
        res.json(user);
    } catch (error) {
        res.status(404).send(error);
    }
}