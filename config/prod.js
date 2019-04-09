// prod.js - production keys here. All the credentials in this file will be set as a environment variable in production version on Heroku, AWS or etc.

// This create an object and assign to module.exports properties.
// We could use this to make this available in other files
module.exports = {
  mongodbURI: process.env.MONGODB_URI
};
