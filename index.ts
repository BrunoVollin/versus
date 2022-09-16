import Jobs from './src/jobs';
import JobsDAO from './src/jobsDAO';
import { JobType } from './src/types';

const jobsList: JobType[] = [];

async function main() {
  const jobs = new Jobs();
  await jobs.createPage();
  await jobs.login();

  const tecnologysList = [
    { name: 'React Native', type: 'mobile' },
    { name: 'Backend Node', type: 'backend' },
    { name: 'Angular', type: 'frontend' },
    { name: 'Vue', type: 'frontend' },
    { name: 'React', type: 'frontend' },
    { name: 'Flutter', type: 'mobile' },
    { name: 'Ionic', type: 'mobile' },
    { name: 'Android Nativo', type: 'mobile' },
    { name: 'iOS Nativo', type: 'mobile' },
    { name: 'Backend Java', type: 'backend' },
    { name: 'Backend PHP', type: 'backend' },
    { name: 'Backend Python', type: 'backend' },
    { name: 'Backend Ruby', type: 'backend' },
    { name: 'Backend C#', type: 'backend' },
    { name: 'Backend C++', type: 'backend' },
    { name: 'DevOps', type: 'devops' },
    { name: 'Qa', type: 'qa' },
    { name: 'UX', type: 'ux' },
  ];

  for (let i = 0; i < tecnologysList.length; i += 1) {
    jobsList.push({
      technology: tecnologysList[i].name,
      type: tecnologysList[i].type,
      location: 'Brasil',
      // eslint-disable-next-line no-await-in-loop
      jobs: await jobs.getJobsLinkedin(tecnologysList[i].name, 'Brasil').then((res: any) => {
        console.log({
          technology: tecnologysList[i].name,
          res,
          location: 'Brasil',
        });
        return res;
      }),
    });
  }

  for (let i = 0; i < tecnologysList.length; i += 1) {
    jobsList.push({
      technology: tecnologysList[i].name,
      type: tecnologysList[i].type,
      location: 'Estados Unidos',
      // eslint-disable-next-line no-await-in-loop
      jobs: await jobs.getJobsLinkedin(tecnologysList[i].name, 'Estados Unidos').then((res: any) => {
        console.log({
          technology: tecnologysList[i].name,
          res,
          location: 'Estados Unidos',
        });
        return res;
      }),
    });
  }

  const jobsDAO = new JobsDAO();
  await jobsDAO.addJob(jobsList);
  await jobs.closeBrowser();
}

main();
