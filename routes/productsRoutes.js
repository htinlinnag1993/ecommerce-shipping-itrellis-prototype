// productRoutes.js pulls in products from MongoDB database by making ajax call and send products back

const mongoose = require('mongoose');

const Product = mongoose.model('products');

module.exports = app => {

  app.get('/products', async (req, res) => {

    /** Pulling in & displaying all the products in the database at the same time.
    *   This is not optimzed and mighe be harmful. This will lead to major issue in query speed, the app's responsiveness and many other issues.
    *   Need to handle and implement some kind of ways to control the number of records to show at a time. May be ten product records per page with next page-previous page control options.
    */
    const products = await Product.find({});
    res.send(products);
  });

};
