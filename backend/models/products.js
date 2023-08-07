const mongoose = require('mongoose'); // admin admin

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: {
        type: Number,
        required: true
    }
})

exports.Product = mongoose.model('Product', productSchema);