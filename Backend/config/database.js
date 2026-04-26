const mongoose = require('mongoose');
const dns = require('dns');

const connectDB = async () => {
  if (process.env.DNS_SERVERS) {
    dns.setServers(process.env.DNS_SERVERS.split(','));
  }

  // Use in-memory MongoDB when no real URI is configured (local dev)
  const uri = process.env.MONGODB_URI || '';
  const isLocal = !uri || uri.includes('localhost') || uri.includes('127.0.0.1');

  try {
    let connectUri = uri;

    if (isLocal) {
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongod = await MongoMemoryServer.create();
      connectUri = mongod.getUri();
      console.log('🧪 Using in-memory MongoDB (dev mode)');
    }

    const conn = await mongoose.connect(connectUri);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📦 Database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`❌ MongoDB Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
