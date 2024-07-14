const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://skandansv:CRaGATBcPg5IGrms@cluster0.3loeath.mongodb.net/billing-with-nfc?retryWrites=true&w=majority&appName=Cluster0")

const productSchema = mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
})

const product = mongoose.model("products", productSchema);

module.exports = {
    product
}