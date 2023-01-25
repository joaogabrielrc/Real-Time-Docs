import { Server } from 'socket.io';
import { httpServer } from './server';

const io = new Server(httpServer);

type textEditorProps = {
  text: string;
  documentName: string;
};

const documents = [
  {
    name: 'JavaScript',
    text: ''
  },
  {
    name: 'Node',
    text: ''
  },
  {
    name: 'Socket.io',
    text: ''
  }
];

io.on('connection', socket => {
  console.log('a user connected, ID:', socket.id);

  socket.on('select_document', (documentName: string, callback) => {
    socket.join(documentName);
    const document = findDocumentByName(documentName);
    if (document) callback(document.text);
  });

  socket.on('text_editor', (data: textEditorProps) => {
    const document = findDocumentByName(data.documentName);
    if (document) {
      document.text = data.text;
      socket.to(data.documentName).emit('text_editor_clients', data.text);
    }
  });
});

const findDocumentByName = (name: string) => {
  return documents.find(document => document.name === name);
};
