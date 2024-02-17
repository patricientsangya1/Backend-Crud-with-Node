const Product = require('../models/product.model');

// Get all products API
const getProducts = async(req, res) =>{
    
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Get a product API
const getProduct = async (req, res) => {

    try {
        const {id} = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({message: "Product Not Found"});
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Create a product API
const createProduct = async(req, res) =>{

    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Update a product API
const updateProduct = async(req, res) =>{

    try {
        const {id} = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);
        
        if(!product){
            return res.status(404).json({message: "Product Not Found"});
        }

        const updatedProduct = await Product.findById(id);
        res.status(201).json(product);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Delete a product
const deleteProduct = async(req, res) =>{

    try {
        const {id} = req.params;

        const product =  await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({message: "product Not Found"});
        }

        res.status(204).json({message: "Product deleted successfully!"});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};