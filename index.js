var express = require('express');

var port = 8081;
var app = express();
app.listen(port);

app.get('/book/:id', (request, response) => {
    let bookid = request.params.id;
    response.send(`Got Book ${bookid} !!!`);
    console.log('dooooo');
});