const socket = io();

const textEditorElement = document.querySelector('#text-editor');

textEditorElement.addEventListener('keyup', () => {
  socket.emit('text_editor', textEditorElement.value);
});

socket.on('text_editor_clients', data => {
  textEditorElement.value = data;
});
