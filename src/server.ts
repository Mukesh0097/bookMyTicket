// eslint
// dotenv
// github
// app config
// db config
// logger
// validation
// models
// routes
// controller
// service
//docker
//husky
import express from 'express';
import 'dotenv/config';
import logger from './config/logger';

const app = express();
logger.info('Logger initialized');
logger.debug('Debugging info');
logger.warn('This is a warning');
logger.error('This is an error message');

app.use((req, res) => {
  res.send('Hello World!');
});

app.listen(3000, async () => {
  console.log('Server is running on port 3000');
});
export default app;
