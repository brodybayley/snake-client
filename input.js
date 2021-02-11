const stdin = process.stdin;
/**
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'b') {
    connection.write('Say: Lame');
  }
  if (key === 'o') {
    connection.write('Say: Smooth move bae bae');
  }
  if (key === 'q') {
    connection.write('Say: Move it slauce face');
  }
  if (key === 'p') {
    connection.write('Say: Byeeeeeeee');
  }
};



const setupInput = function(connectionObject) {
  connection = connectionObject;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

module.exports = setupInput;

