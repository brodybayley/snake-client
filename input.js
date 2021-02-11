const stdin = process.stdin;
/**
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
let connection;


const setupInput = function (connectionObject) {
  connection = connectionObject;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (userInput) => {
    handleUserInput(userInput, connection)
  });
  const handleUserInput = function (key, connectionObject) {
    if (key === '\u0003') {
      process.exit();
    } else if (key === '\u0057\u0077') {
      connectionObject.write('Move: up');
    } else if (key === '\u0041\u0061') {
      connectionObject.write('Move: left');
    } else if (key === '\u0053\u0073') {
      connectionObject.write('Move: down');
    } else if (key === '\u0044\u0064') {
      connectionObject.write('Move: right');
    };
  };
  return stdin;
};

module.exports = setupInput;