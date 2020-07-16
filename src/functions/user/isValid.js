function isValid (firstName, lastName, email, age) {
    if (isNul(firstName) || isNul(lastName) || isNul(email) || !validEmail(email) || 13 > age) {
        return false;
    }
    return true;
}

function validEmail (email) {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

function isNul (val) {
    if (null == val) {
        return true;
    }
    return false;
}

module.exports = isValid;