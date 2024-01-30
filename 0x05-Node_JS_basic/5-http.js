/**
 * A simple HTTP server using Node's HTTP module
 *
 * @author: {Isaac Ajibola  github.com/Bigizic}
 */

const http = require('http');
const fs = require('fs');
const process = require('process');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const filePath = await countStudents(process.argv[2]);
      //const fileContent = await fs.promises.readFile(filePath, 'utf8');

      filePath.then(() => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students ${filePath}`);
      })
      // Sending partial responses as they become available
      

      //fileContent.split('\n').forEach((line) => {
        // Sending each line of the file as a partial response
        //res.write(`${line}\n`);
      //});

      // Ending the response when all lines are sent
      //res.end();
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error\n');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
}).listen(1245, '127.0.0.1', () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
