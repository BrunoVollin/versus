import { MongoClient } from 'mongodb';

export default class MongoDB {
  private uri: string;

  private client: MongoClient;

  constructor() {
    this.uri = 'mongodb+srv://root:root@cluster0.bqedr.mongodb.net/test';
    this.client = new MongoClient(this.uri);
  }

  async connect() {
    await this.client.connect();
  }

  async close() {
    await this.client.close();
  }

  async insertOne(collectionName: string, document: any) {
    const database = this.client.db('test');
    const collection = database.collection(collectionName);
    await collection.insertOne(document);
  }

  async find(collectionName: string, query: any) {
    const database = this.client.db('test');
    const collection = database.collection(collectionName);
    const response = await collection.find(query).toArray();
    return response;
  }
}
