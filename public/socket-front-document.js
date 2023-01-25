import { changeTextEditorClients } from './document.js';

const socket = io();

export const emitTextEditor = text => {
  const data = { text };
  socket.emit('text_editor', data);
};

socket.on('text_editor_clients', data => {
  changeTextEditorClients(data.text);
});
