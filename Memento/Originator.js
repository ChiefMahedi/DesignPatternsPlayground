const { Memento } = require("./Memento");
//This is the Originator class represented by a tesxt editor.
// It creates a memento object initiated with its current state
// It also uses the memento object to restore initial state
class TextEditor {
  constructor(state) {
    this.state = state;
    console.log("Current State of the Originator is",this.state);
  }
  //It returns a new memento object with current state
  createMemento() {
    return new Memento(this.state);
  }

  //Set the current state o memento's current state
  setMemento(memento) {
    if(memento!=null){
        this.state = memento.getState();
        console.log("Current State of the Originator is",this.state);
    } 
    else console.log("Undoing not possible!")
  }

  // method to get the current content of the TextEditor object
  getContent() {
    return this.state;
  }

  // method to update the content of the TextEditor object
  setContent(content) {
    this.state = content;
    console.log("Current State of the Originator is",this.state);
  }
}
module.exports={
    TextEditor
}