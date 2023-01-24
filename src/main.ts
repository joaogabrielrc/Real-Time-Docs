import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';

const app = express();

const publicDir = path.join(__dirname, '..', 'public');
app.use(express.static(publicDir));

const port = process.env.PORT ?? 3000;
const hostname = process.env.HOSTNAME ?? '127.0.0.1';

const httpServer = http.createServer(app);
const io = new Server(httpServer);

io.on('connection', socket => {
  console.log('a user connected', socket.id);
});

httpServer.listen(Number(port), hostname, () =>
  console.log(`Server is listening on http://${hostname}:${port}...`)
);
