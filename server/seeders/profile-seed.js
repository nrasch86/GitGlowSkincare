//Sample data for user profiles to seed the database.//The main script to run the seeders and populate the database with initial data.

const db = require('../config/connection');
const { User } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Users', 'users');
    
    await User.create(profileSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
