const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/students') {
    countStudents('database.csv');
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
