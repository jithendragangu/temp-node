//CommomJS, every file is a module(by default)
//Modules - Encapsulated Code(only share minimum)
const names = require('./4_names');
const sayHi = require('./5_utils');
const data = require('./6_alternative_flavour')
console.log(require('./7_mind_grenade'))
console.log(data)
console.log(names);
sayHi('susan')
sayHi(names.sunny)
sayHi(names.peter)

