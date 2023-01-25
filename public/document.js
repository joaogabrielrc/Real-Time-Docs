import { emitTextEditor, selectDocument } from './socket-front-document.js';

const params = new URLSearchParams(window.location.search);
const documentName = params.get('name');

const documentTitleElement = document.querySelector('#document-title');
const textEditorElement = document.querySelector('#text-editor');

documentTitleElement.textContent = documentName;
selectDocument(documentName);

textEditorElement.addEventListener('keyup', () => {
  const text = textEditorElement.value;
  emitTextEditor({ text, documentName });
});

export const changeTextEditor = text => {
  textEditorElement.value = text;
};
