import { changeTextEditor } from './document.js';

const socket = io();

export const selectDocument = name => {
  socket.emit('select_document', name, text => {
    changeTextEditor(text);
  });
};

export const emitTextEditor = data => {
  socket.emit('text_editor', data);
};

socket.on('text_editor_clients', text => {
  changeTextEditor(text);
});
