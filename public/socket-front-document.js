import { changeTextEditorClients } from './document.js';

const socket = io();

export const selectDocument = name => {
  socket.emit('select_document', name);
};

export const emitTextEditor = ({ text, documentName }) => {
  socket.emit('text_editor', { text, documentName });
};

socket.on('text_editor_clients', text => {
  changeTextEditorClients(text);
});
