// Mongoose Model for Product
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Creating a schema for mongoose
const productSchema = new Schema({
  productId: String,
  productName: String,
  inventoryQuantity: {type: Number},
  shipOnWeekends: Boolean,
  maxBusinessDaysToShip: {type: Number}
});

// Telling mongoose to use productSchema model instance for products collection
// Load the productSchema into mongoose
mongoose.model('products', productSchema);
