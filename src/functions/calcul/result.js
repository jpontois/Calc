const sum = require('./sum');
const sub = require('./sub');
const mul = require('./mul');
const div = require('./div');

function result (a, b) {
    var tSum = 'sum : ' + sum(a, b);
    var tSub = 'sub : ' + sub(a, b);
    var tMul = 'mul : ' + mul(a, b);
    var tDiv = 'div : ' + div(a, b);

    return tSum + ' | ' + tSub + ' | ' + tMul + ' | ' + tDiv;
}

module.exports = result;