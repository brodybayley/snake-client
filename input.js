/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
let connection;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === '\u0057\u0077') {
    console.log('up');
  } else if (key === '\u0041\u0061') {
    console.log('left');
  } else if (key === '\u0053\u0073') {
    console.log('down');
  } else if (key === '\u0044\u0064') {
    console.log('right');
  };
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = setupInput;