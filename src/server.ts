import app from './app';
import config from './app/config';

import mongoose from 'mongoose';
async function main() {
  try {
    // Connecting to the MongoDB database using mongoose
    await mongoose.connect(config.database_url as string);
    // Starting the server on the specified port
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
