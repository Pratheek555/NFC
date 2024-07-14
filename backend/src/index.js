const express = require("express")
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());

app.get("/home", function(req, res){
    res.send("Hi")
    console.log("App backed running at port 3000!")
})

app.post("/home", function(req, res){

})






app.listen(port)