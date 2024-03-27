//The main script to run the seeders and populate the database with initial data.
const db = require('../config/connection');
const { Product } = require('../models');
const productSeeds = require('./productSeeds.json');
//const { User } = require('../models');
//const profileSeeds = require('./profileSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Product', 'products');
   // await cleanDB('Users', 'users');
    await Product.create(productSeeds);
  //  await User.create(profileSeeds);
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
