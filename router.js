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


// Update user
router.put('/product/:id', async (req, res)=>{
    // const {  id } = req.params;
        
    // const result = await User.update(id, updateObject)
    // const updateObject = {};
    // if (productName) {
    //     updateObject.productName = productName
    // }  


})

// router.put('/updateProduct/:id', async (req, res)=>{
//     try{
//         console.log(req.body);
        
//         let { id } = req.params;
//         let { productName, productCompany, cost, display, RAM, storage } = req.body;
        
//         console.log("prduct id for update",id);
//         let updatedProduct = await prductDataModel.findByIdAndUpdate(id, { productName, productCompany, cost, display, RAM, storage },{new: true} );
//         return res.status(200).json(updatedProduct, "Prodcut updated successfully..!");

//     }catch(error){
//         //   res.send("Prodcut is not updated", error.message)
// console.log("Error: ",error.message);

//     }
// })
router.put('/updateProduct/:id', async (req, res) => {
     let {id} = req.params;
     let {productName }  = req.body;
    let result =  await  prductDataModel.findByIdAndUpdate(id , req.body  , {new : true});
    console.log(result);
    // console.log('trigger api updated');
    // try {
    //     console.log("Request Params:", req.params);
    //     console.log("Request Body:", req.body);

    //     let { id } = req.params;  // Fixed: use 'id' instead of '_id'
    //     let { productName, productCompany, cost, display, RAM, storage } = req.body;

    //     console.log("Product ID for update:", id);

    //     let updatedProduct = await prductDataModel.findByIdAndUpdate(
    //         id, 
    //         { productName, productCompany, cost, display, RAM, storage },
    //         { new: true }
    //     );

    //     if (!updatedProduct) {
    //         return res.status(404).json({ message: "Product not found" });
    //     }

    //     return res.status(200).json({ updatedProduct, message: "Product updated successfully..!" });

    // } 
    // catch (error) {
    //     console.log("Error:", error.message);
    //     return res.status(500).json({ error: error.message });
    // }
});

// Delete task 
router.delete('/deleteProduct/:id', async (req, res)=>{
    const { id } = req.params;
    console.log(id);
    
    try{
       await prductDataModel.findByIdAndRemove(id);
        res.json("deleted product");

    }catch(error){
        res.status(500).json(error.message);
    }
})


router.get('/user/:id', (req, res, next) => {
    // if the user ID is 0, skip to the next route
    if (req.params.id !== '0') next('route')
    // otherwise pass the control to the next middleware function in this stack
    else next()
  }, (req, res, next) => {
    // send a regular response
    res.send('regular')
  })
  
  // handler for the /user/:id path, which sends a special response
  router.get('/users/:id', (req, res, next) => {
    res.send('special')
  })

  router.use('/rewss',(req,res)=>{
    res.send("<h1>Hello this is application level middleware</h1>");
  })


module.exports = router;
