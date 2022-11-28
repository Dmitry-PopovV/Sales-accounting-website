const getKey = require('./../services/getKey');

async function checkCookie(cookie, connectionId) {
    if (cookie != undefined) {
        let key = await getKey(Number(cookie.split("<&>")[1]), connectionId);
        return cookie === key;
    }
    else
        return false;
}

module.exports = checkCookie;
