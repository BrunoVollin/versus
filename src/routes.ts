import express, { Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express';
import cors from 'cors';
import InfoJobs from './InfoJobs';
import swaggerDocument from '../docs/swagger.json';
import https from 'https';

const app = express();
const PORT = 3000;
const infoJobs = new InfoJobs();
app.use(cors());
app.use(express.json());

app.get('/', async (req: Request, res: Response) => res.send('Hello World!'));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get('/jobs', async (req: Request, res: Response) => {
  const jobs = await infoJobs.db.getAllJobs();
  res.header('Access-Control-Allow-Origin');
  return res.json(jobs);
});

app.listen(PORT, () => {
  console.log(`Example app listening on the http://localhost:${PORT}`);
});
