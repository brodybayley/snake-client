const connect = require('./client');
const setUpInput = require('./input');

console.log('Connecting ...');
let objectReturned = connect();

setUpInput(objectReturned);