/**
 * AppController module
 *
 * Return: a 200 status and a message
 */
export default class AppController {
  static getHomepage(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello Holberton School!');
  }
}
