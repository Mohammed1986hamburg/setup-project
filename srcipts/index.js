// write a function that accepts a number as striing, and return a number of it.

const stringToNum = x => {
    return parseInt(x);
}

// Create a class with the name of DCI_relatives that pass a role property. Two sublasses
// that extends the DCI_relatives class. The trainer class and the student class.
// Trainers class should have role='Trainer', student's should have their role='Student',
// Both subclasses have private properties, such as firstName and lastName.
// Create two instances, one trainer, and one student. and pass them as arguments to
// the previous function that returns an object. Do not stop until both tests pass.

class DCI_relatives {
    constructor (role){
        this.role=role;
    }
}

class trainer extends DCI_relatives {
    constructor (firstName, lastName){
        super("trainer");
        this.firstName=firstName;
        this.lastName=lastName;
        
    }
}

class student extends DCI_relatives {
    constructor (firstName, lastName){
        super("student");
        this.firstName=firstName;
        this.lastName=lastName;
        
    }
}

let kostas= new trainer("kostas","diakogiannis");
let mohammed= new student("mohammed","wahba");



module.exports = {
    stringToNum:stringToNum,
     kostas:kostas,
      mohammed:mohammed
    };