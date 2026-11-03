const express = require('express')
const route = express.Router();

route.get("/",function(req,res){
    res.send("Products route hit hua maza aagya");
});

module.exports = route;


// api = /products