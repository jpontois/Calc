const http = require('http');
const result = require('./functions/calcul/result');
const createUser = require('./functions/user/createUser');

const server = http.createServer(function(req, res) {
    res.writeHead(200);
    console.log(result(2, 6));
    console.log(createUser('jon', 'jim', 'jon@jim.fr', 14));
    res.end();
});

server.listen(3000);
