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
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
export default app;
