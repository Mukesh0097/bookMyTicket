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

const app = express();

app.use((req, res) => {
  res.send('Hello World!');
});

app.listen(3000, async () => {
  console.log('Server is running on port 3000');
});
export default app;
