const express = require("express")
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());

const { product } = require("../src/db");
const { create } = require("domain");

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
    
    const foundProduct = await product.findOne({id});

    if(product) {
        res.json(foundProduct)
    }
    
})







app.listen(port)