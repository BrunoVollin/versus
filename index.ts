import Jobs from './src/jobs';
import JobsDAO from './src/jobsDAO';
import { JobType } from './src/types';

const jobsList: JobType[] = [];

async function main() {
  const jobs = new Jobs();
  await jobs.createPage();
  await jobs.login();
  const jobsLinkedin = await jobs.getJobsLinkedin('React Native', 'Brasil');
  const jobsLinkedin2 = await jobs.getJobsLinkedin('Flutter', 'Brasil');
  await jobs.closeBrowser();
  jobsList.push({
    technology: 'React Native',
    location: 'Brasil',
    jobs: jobsLinkedin,
    date: new Date(),
  });
  jobsList.push({
    technology: 'Flutter',
    location: 'Brasil',
    jobs: jobsLinkedin2,
    date: new Date(),
  });
  const jobsDAO = new JobsDAO();
  await jobsDAO.addJob(jobsList);
}

main();
