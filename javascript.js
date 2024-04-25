import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017'; // MongoDB connection URI
const dbName = 'myData'; // Specify your database name
const client = new MongoClient(url);

async function connectToMongoDB() {
  
    try {
      await client.connect();
      console.log('Connected to MongoDB');
  
      const db = client.db(dbName);
      return db;

    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
}

  async function main() {
    const db = await connectToMongoDB();
  
    // Example: Inserting a document into a collection
    const collection = db.collection('your_collection_name'); // Specify your collection name
    const result = await collection.insertOne({ name: 'John', age: 30 });
    console.log('Inserted document:', result.insertedId);
  
  }
  
  main().catch(console.error);
  