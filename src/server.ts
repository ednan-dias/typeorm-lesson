import 'reflect-metadata';
import 'dotenv/config';
import app from './app';
import './database';

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`🏃 Running Server on port ${port}`);
});
