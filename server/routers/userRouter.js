const express = require('express')
const userRouter = express.Router()
const { register, login, getOneUser } = require('../controllers/userController.js')

//secure the user 
const auth = require('../midalware/auth.js');






userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/:id', auth, getOneUser)





module.exports = userRouter