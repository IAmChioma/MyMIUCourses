"use strict";
const http = require('http');
const url = require('url');
const fs = require('fs');
const addmod = require('./addmod.js');

// const fileRead = (pathname)=>{ fs.readFileSync(pathname, function (err, data) {
//     if (err) {
//         throw err;
//     } else {
//         return data;
//     }
    
// });
// };


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const q = url.parse(req.url, true, false);
    const filename = "." + q.pathname;
    if (q.pathname == "/add.js") {
        addmod.add(req, res, q.query)
    }
    else {
        fs.readFile(filename, function (err, data) {
            if (err) {
                res.writeHead(404,  { 'Content-Type': 'text/html'});
                return res.end("404 Not Found");
                
            }
            res.writeHead(200);
            res.write(data);
            return res.end();
        });
    }
}).listen(8000);