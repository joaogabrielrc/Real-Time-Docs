import express from 'express';
import http from 'http';

const app = express();

const port = process.env.PORT ?? 8000;
const hostname = process.env.HOSTNAME ?? '127.0.0.1';
const httpServer = http.createServer(app);

httpServer.listen(Number(port), hostname, () =>
  console.log(`Server is listening on http://${hostname}:${port}...`)
);
