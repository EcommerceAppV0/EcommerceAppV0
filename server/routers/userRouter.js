const express = require('express')
const userRouter = express.Router()
const { register, login, getOneUser, updateLists, updateUserInfo } = require('../controllers/userController.js')

//secure the user 
const auth = require('../midalware/auth.js');






userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/:id',  getOneUser)
userRouter.put('/updateLists/:id', updateLists)
userRouter.put("/updateInfo", updateUserInfo)




module.exports = userRouter