const http = require('http');
const fs = require('fs');

// Server will listen on port 8080 at localhost
const port = 8080;
const host = "localhost";

// Creates server with correct congifuration
const server = http.createServer((req, res) => {

    // Set staus code and header for server
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // Set default path
    let path = './';

    // Loop to determine what html file to use, adds correct file to the path
    if (req.url === '/contact') { // Use contanct.html as requested
        path = path + 'views/contact.html'; 
    } else if (req.url === '/about') { // Use contanct.html as requested
        path = path + 'views/about.html';
    } else { // Use 404.html if any other url requested and change status code to 404
        res.statusCode = 404;
        path = path + 'views/404.html'
    }

    // Reads and outputs requested file's contents, or an error message if there is an error
    fs.readFile(path, (err, data) => {
        if (err) { // Outputs error message, stops runnning
            console.log(err);
            res.end();
        } else { // Outputs file contents, stops runnning
            res.write(data);
            res.end();
        }
    });

});

// Outputs message with what port and host the server is using
server.listen(port, host, () => {
    console.log('Server running on port ' + port + ' on ' + host);
});

// Notes: Referenced linked videsos from Canvas module to learn about creating servers, creating responses, and basic routing