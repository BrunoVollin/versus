import MongoDB from './mongoDB';
import { JobType } from './types';

export default class jobsDAO {
  db: MongoDB;

  constructor() {
    this.db = new MongoDB();
  }

  async addJob(jobs: JobType[]) {
    await this.db.connect();
    await this.db.insertOne('jobs', { jobs });
    await this.db.close();
  }
}
