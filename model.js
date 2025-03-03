const mongoose = require('mongoose');

const ProductSchema  = mongoose.Schema({
    productName : String,
    productComapny : String,
    cost: [{
        totalCost: Number,
        discountedCost: Number
    }],
    display : String,
    RAM : String,
    storage : String
});

module.exports = mongoose.model('product', ProductSchema);
