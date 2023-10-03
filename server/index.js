const express = require('express');
require('dotenv').config()
require('./database/index.js')
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const router = require('./routers/clientRouter.js')
const auth = require('./midalware/auth.js');
//this is  the middlware to use later to secure anny othhers routers
app.use(express.json())
app.use(cors());

app.use('/api/', router);
app.get("/api/users/getAll", auth, (req, res) => {
    res.json({ message: "You are authorized to access me" });
});




// app.use((req, res, next) => {
// });

app.listen(PORT, () => console.log(`listening on ${PORT}`))





