const express = require("express");
const app = express();
const products = require("./utils/products");
const morgan = require("morgan");
const productsRoute = require("./routes/products.route.js")
const userRoute = require("./routes/user.route.js")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// app.get('url',function)

app.use('/products', productsRoute);
app.use('/user', userRoute);


app.listen(3000, function () {
  console.log("Server started at port 3000");
});