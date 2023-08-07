// https://github.com/meetsatra/QuikMart
// https://www.youtube.com/watch?v=dbaAOsmZt5Q&list=PLzb46hGUzitBp584kLyn6l3i6yC-rXlmN&index=3&ab_channel=CourseOnDemand
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan'); // for logging all server requests. (get, post)
const mongoose = require('mongoose'); // admin admin
const cors = require('cors');

app.use(cors());
app.options('*',cors);

// Middleware (for making this frontend understand what backend is sending as JSON object)
app.use(bodyParser.json());
app.use(morgan('tiny'));


require('dotenv/config');
const api = process.env.API_URL; // '/api/v1'

//Routes
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

PORT = 3000

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log("Database Connected Successfully");
    })
    .catch((err) => {
        console.log(`Error: ` + err);
    })
app.listen(PORT, () => { // for running the app on port 3000
    // console.log(api); // /api/v1
    console.log("Server is running on http://localhost:" + PORT);
})