
import express from 'express';
import {requestLogger} from './middleware/requestLogger.js';

const app = express();
const port = 3000;
const host = 'localhost';
app.use(requestLogger);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.listen(port, host,() => {
  console.log(`Server is running on http://localhost:${port}`);
});
