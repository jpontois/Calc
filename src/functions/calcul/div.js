function div (a, b) {
    if (0 !== b) {
        return a / b;
    } else {
        return 'error divide by 0';
    }
}

module.exports = div;