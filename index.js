const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API server 14/02");
});



mongoose.connect("mongodb+srv://admin:ZZ2QcnqQuu7SCG14@backendcrud.l6exlj6.mongodb.net/Node-API?retryWrites=true&w=majority").then(() => {
    console.log("Connected to database :)!");
    app.listen(3000, () => {
        console.log('server is running on port 3000')
    });
})
.catch(() => {
    console.log("Connection failed!");
});