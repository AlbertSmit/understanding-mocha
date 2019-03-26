// declare class called parent
class parent {
    // constructor with name of person
    constructor(personName) {
        // refer to it
        this.personName = personName
    }
}

// create class kid that extends the parent class
class kid extends parent {
    // construct it with a name for the kid
    constructor(personName){
        // user super to extend parent class
        super()
        // add kid name
        this.personName = personName
    }
    // define a random function, could be anything
    sayName() {
        // simple console log
        console.log('I am a kiddo.')
    }
}

// export the classes you made so other files can access it
module.exports = {
    parent,
    kid
}