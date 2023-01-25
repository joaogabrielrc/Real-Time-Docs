import { Server } from 'socket.io';
import { httpServer } from './server';

const io = new Server(httpServer);

type textEditorProps = {
  text: string;
};

io.on('connection', socket => {
  console.log('a user connected, ID:', socket.id);

  socket.on('text_editor', (data: textEditorProps) => {
    socket.broadcast.emit('text_editor_clients', data);
  });
});
