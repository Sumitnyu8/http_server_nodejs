const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 5000;

const Server = http.createServer((req, res) => {
    const log = `${req.url} : New request received\n`;

    fs.appendFile("hii.txt", log, (err) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end("500 - Internal Server Error");
            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');

        switch (req.url) {
            case '/':
                res.end("Hi, I am the Homepage");
                break;
            case '/about':
                res.end("Hi, I am About");
                break;
            default:
                res.statusCode = 404;
                res.end("404 - Not Found");
                break;
        }
    });
});

Server.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
