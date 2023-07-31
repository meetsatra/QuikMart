// https://www.youtube.com/watch?v=dbaAOsmZt5Q&list=PLzb46hGUzitBp584kLyn6l3i6yC-rXlmN&index=3&ab_channel=CourseOnDemand
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan'); // for logging all server requests. (get, post)
const mongoose = require('mongoose');

// Middleware (for making this frontend understand what backend is sending as JSON object)
app.use(bodyParser.json()); 
app.use(morgan('tiny'));

require('dotenv/config');
const api = process.env.API_URL; // '/api/v1'

PORT = 3000

app.get(api + '/',(req,res) =>{ // this is a callback function which sends 
    res.send("Hello API");      // response to client whenever it is called 
})
// app.get(api + '/products',(req,res) =>{code}) //  for products page, etc

app.get(`${api}/products`,(req,res) =>{ // http://localhost:3000/api/v1/products
    const product = {
        id: 1,
        name: 'iPhone 14', // try to use single quotes
        image: 'iphone14.jpg',
    }
    // res.send("PRODUCTS");
    res.send(product);
})

app.post(`${api}/products`,(req,res) =>{ // http://localhost:3000/api/v1/products
    // const product = {id: 1,name: 'iPhone 14', image: 'iphone14.jpg',} // instead of this, we use req.body
    const newProd = req.body; // using postman, you test this post.
    /*
    Posting format:
    {
    "id": 3,
    "name": "iPhone 14",
    "image": "iphone14.jpg"
    }
    // double quotes everywhere
    */
    console.log(newProd);
    res.send(newProd);
})



app.listen(PORT,()=>{ // for running the app on port 3000
    // console.log(api); // /api/v1
    console.log("Server is running on http://localhost:"+PORT);
})