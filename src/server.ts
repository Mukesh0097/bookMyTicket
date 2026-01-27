import express, { ErrorRequestHandler, Request, Response } from 'express';
import 'dotenv/config';
import router from './routes';
import logger from './config/logger';

const app = express();
const PORT = process.env.PORT || 3000;
const subRoutes = router;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', subRoutes);

app.use((err: ErrorRequestHandler, req: Request, res: Response) => {
  logger.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, async () => {
  logger.info(`Server is running on port ${PORT}`);
});

export default app;
