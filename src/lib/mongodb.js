// Force reliable public DNS resolvers (Cloudflare + Google)
import dns from 'node:dns/promises';

dns.setServers(['1.1.1.1', '8.8.8.8', '1.0.0.1', '8.8.4.4']);
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;  // Make sure this is correct (no .local)

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to:", mongoose.connection.db.databaseName);
    return;
  }

  await mongoose.connect(MONGODB_URI);
  console.log("Connected to DB:", mongoose.connection.db.databaseName);
  console.log("Using collection for models:", mongoose.modelNames()); // will show later
}