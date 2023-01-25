import { Server } from 'socket.io';
import { httpServer } from './server';

const io = new Server(httpServer);

io.on('connection', socket => {
  console.log('a user connected', socket.id);
});
