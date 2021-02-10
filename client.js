const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('connect', () => {
    conn.write('Name: BBB');
  });

  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });

  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write('Move: left');
  //   })
  // }, 1000);

  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write('Move: up');
  //   })
  // }, 2000);

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

};

module.exports = connect;