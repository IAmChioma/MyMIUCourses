"use strict";

exports.add = function(req,res,vals){
    var sum = parseInt(vals.first) + parseInt(vals.second);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(
        `
        <!Doctype html>
        <html lang="en">
        <head>
        <meta charset="utf-8"/>
        <title> Calculator Website </title>
        </head>
        <body>
        <p>The sum is:${String(sum)}</p>
        </body>
        </html>
        `
    );
    return res.end();
}
//module.exports = add;