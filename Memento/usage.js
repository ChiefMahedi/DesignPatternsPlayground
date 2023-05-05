// Example usage
const {TextEditor} = require ('./Originator')
const {Caretaker} = require ('./Caretaker')

const editor = new TextEditor('First content.');
const undo = new Caretaker();

undo.push(editor.createMemento());
editor.setContent('Second Content')
undo.push(editor.createMemento());
editor.setContent('Third Content')
undo.push(editor.createMemento());
editor.setContent('Fourth Content');
editor.setMemento(undo.pop());
editor.setMemento(undo.pop());
editor.setMemento(undo.pop());
editor.setMemento(undo.pop());



