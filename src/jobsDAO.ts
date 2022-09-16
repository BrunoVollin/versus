import MongoDB from './mongoDB';
import { JobType } from './types';

export default class JobsDAO {
  db: MongoDB;

  constructor() {
    this.db = new MongoDB();
  }

  async addJob(jobs: JobType[]) {
    await this.db.connect();
    await this.db.insertOne('jobs', { jobs, createdAt: new Date() }).then(() => {
      console.log('Jobs added to database');
    });
    await this.db.close();
  }

  async getAllJobs() {
    await this.db.connect();
    const jobs = await this.db.find('jobs', {});
    // const jobs = await this.db.find('jobs', {});
    await this.db.close();
    return jobs;
  }
}
