const http = require('http');
const sum = require('./operations/sum');
const sub = require('./operations/sub');
const mul = require('./operations/mul');
const div = require('./operations/div');

const server = http.createServer(function(req, res) {
    var a = 2;
    var b = 7;

    var tSum = 'sum : ' + sum(a, b);
    var tSub = 'sub : ' + sub(a, b);
    var tMul = 'mul : ' + mul(a, b);
    var tDiv = 'div : ' + div(a, b);

    var result = tSum + ' | ' + tSub + ' | ' + tMul + ' | ' + tDiv;

    res.writeHead(200);
    res.write(result);
    res.end();
});

server.listen(3000);
