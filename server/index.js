const express = require('express');
require('dotenv').config()
require('./database/index.js')
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const userRouter = require('./routers/userRouter.js')
const productRouter = require("./routers/productRouter.js")
const categoryRouter = require("./routers/categoryRouter.js")

const auth = require('./midalware/auth.js');
//this is  the middlware to use later to secure anny othhers routers
app.use(express.json())
app.use(cors());

app.use('/api/', userRouter);
// secured Routers
app.use("/api/products", auth, productRouter);
// i just secured the router of the products for now 
app.use("/api/categories", categoryRouter);



// app.use((req, res, next) => {
// });

app.listen(PORT, () => console.log(`listening on ${PORT}`))





