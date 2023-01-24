import express from 'express';
import http from 'http';
import path from 'path';

const app = express();

const publicDir = path.join(__dirname, '..', 'public');
app.use(express.static(publicDir));

const port = process.env.PORT ?? 3000;
const hostname = process.env.HOSTNAME ?? '127.0.0.1';
const httpServer = http.createServer(app);

httpServer.listen(Number(port), hostname, () =>
  console.log(`Server is listening on http://${hostname}:${port}...`)
);
