// api route to get all jobs
import express from 'express';
import JobsDAO from './jobsDAO';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on the http://localhost:${PORT}`);
});

app.get('/', async (req: any, res: any) => {
  const jobsDAO = new JobsDAO();
  const jobs = await jobsDAO.getAllJobs();
  return res.json(jobs);
});
