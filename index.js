const server = require('./server');

server.listen(8888, (err) => {
  if (err) throw err;
});
