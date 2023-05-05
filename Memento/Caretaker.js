// Caretaker class: It aggregates memento objects. 
// It holds the memento that the Originator class created.
// It also passes memento that it has from Originator back to the Originator
// It never operates on or examines the contents of a memento.
class Caretaker {
    constructor() {
      this.storage = [];
    }
  
    // method to add a Memento object to the storage array
    push(editorMemento) {
      this.storage.push(editorMemento);
      console.log("Current Caretaker Storage has",this.storage);
    }
  
    // method to get a Memento object from the storage array
    pop() {
        if(this.storage.length >0)
        {  
            const x = this.storage.pop();
            console.log("Current Caretaker Storage has",this.storage);
            return x;
        }
        console.log("Current Caretaker Storage has",this.storage);
        return null;
    }
  }
  module.exports={
    Caretaker
}