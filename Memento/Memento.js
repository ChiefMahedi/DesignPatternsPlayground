// Memento class stores state of the Originator
// It protects against access by other objects other than the originator

class Memento{
    //Setting the state using constructor
    constructor(state)
    {
           this.state = state;
    }
    //Gets the state
    getState()
    {
        return this.state;
    }
}
module.exports ={
    Memento
}