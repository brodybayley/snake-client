const connect = require('./client');
const setUpInput = require('./input');

console.log('Connecting ...');
const connectionObject = connect();

setUpInput(connectionObject);