import { Server } from 'socket.io';
import { httpServer } from './server';

const io = new Server(httpServer);

type textEditorProps = {
  text: string;
  documentName: string;
};

io.on('connection', socket => {
  console.log('a user connected, ID:', socket.id);

  socket.on('select_document', (documentName: string) => {
    socket.join(documentName);
  });

  socket.on('text_editor', (data: textEditorProps) => {
    socket.to(data.documentName).emit('text_editor_clients', data.text);
  });
});
