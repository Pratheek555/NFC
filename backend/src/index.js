const express = require("express")
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());

const { product } = require("../src/db");
const { create } = require("domain");
const axios = require('axios');
const cors = require('cors');
app.use(cors());


let scannedProducts = [];


app.get("/home", function(req, res){
    res.send("Hi")
    console.log("App backed running at port 3000!")
})

app.post("/create", async function(req, res){
    const createPayload = req.body;
    
    await product.create({
        id: createPayload.id,
        name: createPayload.name,
        price: createPayload.price
    })

    res.json({
        msg: "Todo Created!"

    })
})


app.get("/pricing", async function(req, res){
    const id = req.query.id;

    try {
        const foundProduct = await product.findOne({ id });

        if (foundProduct) {
            const finalProduct = {
                id: foundProduct.id,
                name: foundProduct.name,
                price: foundProduct.price
            };

            scannedProducts.push(finalProduct);
            console.log("LIST ITERATED");

            for (let i = 0; i < scannedProducts.length; i++) {
                console.log(scannedProducts[i]);
            }

            return res.json({
                name: foundProduct.name,
                price: foundProduct.price,
                id: foundProduct.id
            });
        } else {
            return res.send(scannedProducts)
        }
    } catch (error) {
        console.error("Error fetching product:", error);
        return res.status(500).json({ error: "Failed to fetch product" });
    }
});

// app.post("/list", function(req, res){
//     const product = req.body;
//     console.log("Product: "+product)
//     let NfcScanned = []
//     NfcScanned.push(product);
//     // Process the product data as needed

//     console.log("product pushed successfully!")
//     console.log(NfcScanned)
//     console.log("LIST ITERATED")
//     for(let i = 0; i<NfcScanned.length; i++){
//         console.log(NfcScanned[i])
//     }
// })



app.listen(port)