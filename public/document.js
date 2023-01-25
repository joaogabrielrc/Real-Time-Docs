import { emitTextEditor } from './socket-front-document.js';

const textEditorElement = document.querySelector('#text-editor');

textEditorElement.addEventListener('keyup', () => {
  emitTextEditor(textEditorElement.value);
});

export const changeTextEditorClients = text => {
  textEditorElement.value = text;
};
