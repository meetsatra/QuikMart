const {Product} = require('../models/products')
const express = require('express');
const router  = express.Router();

// router.get('/', (req, res) => { // this is a callback function which sends
//     res.send("Hello API"); // response to client whenever it is called
// })
// router.get(api + '/products',(req,res) =>{code}) //  for products page, etc


router.get(`/`, async (req, res) => { // http://localhost:3000/api/v1/products
    const productList = await Product.find();
    console.log(productList);
    if(!productList){
        res.status(500).json({success:false})
    }
    res.send(productList);
})

router.post(`/`, (req, res) => { // http://localhost:3000/api/v1/products
    // const product = {id: 1,name: 'iPhone 14', image: 'iphone14.jpg',} // instead of this, we use req.body
    //     const newProd = req.body; // using postman, you test this post.
    /*
    Posting format:
    {
    "id": 3,
    "name": "iPhone 14",
    "image": "iphone14.jpg"
    }
    // double quotes everywhere
    */
    //    console.log(newProd);

    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    })
    product.save().then((createdProduct => {
        res.status(201).json(createdProduct)
    })).catch((err) => {
        res.status(500).json({
            error: err,
            success: false
        })
    })
    // res.send(product);
})

module.exports = router;