// import/require the classes you made so this file can access it
const { parent, kid } = require('./structure')

// create new instances of the class(es) you made
// the parameters here are the names declared in the constructor
// !! TYPED THE WRONG NAME ON PURPOSE TO CREATE A FALSEY OUTCOME !!
const Dita = new parent('Lammert');
const Albert = new kid('Albert')

// randomly give Albert a new name. why not.
Albert.personName = 'Henk'

// log both to check what it returns
console.log(Dita)
console.log(Albert)

// !!! IMPORTANT !!!
// export new instances to the spec.js file can read them
// when you dont do this; it'll return 'undefined'
module.exports = { 
    Albert,
    Dita
}