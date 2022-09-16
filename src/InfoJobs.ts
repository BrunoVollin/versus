import JobsDAO from './jobsDAO';

export default class InfoJobs {
  db = new JobsDAO();

  async sumJobsByType() {
    try {
      const jobs = await this.db.getAllJobs();
      const jobsByType = jobs.reduce((acc: any, job: any) => {
        const { type } = job;
        if (acc[type]) {
          acc[type] += 1;
        } else {
          acc[type] = 1;
        }
        return acc;
      }, {});
      return jobsByType;
    } catch (err: any) {
      console.log(err);
      return -1;
    }
  }
}

