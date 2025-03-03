const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const prductDataModel = require('./model');
const datass = require('./product.json');

// Praduct Details router
router.get('/product', async(req, res)=>{

    let productData = await prductDataModel.find();
    return res.json(productData);

});

// Post or add Product details 
router.post('/product', async(req, res)=>{
    try{
        console.log(req.body)
        const {productName, productComapny, cost, display, RAM, storage} = req.body;

        if(!productName || !productComapny || !cost || !display || !RAM || !storage){
            return res.status(500).send("All details are required...");
        }
        let addProductDetails = await prductDataModel.create(
            {
            productName, 
            productComapny, 
            cost, 
            display, 
            RAM, 
            storage
        })
        return res.status(200).json(addProductDetails);

    }catch(error){
        console.log(error);
        return res.status(404).send("Somthing went wrong");
    }
});

// add static data 

router.post('/products', async(req, res)=>{
  
    let addSProduct = await prductDataModel.create({

        "productName": "Notebook Pro",
        "productComapny": "Dell",
        "cost": "55000",
        "display": "15.6FHD",
        "RAM": "16GB",
        "storage": "512GB SSD"
    })
    return res.json(addSProduct);

});
 let nmar
module.exports = router;
