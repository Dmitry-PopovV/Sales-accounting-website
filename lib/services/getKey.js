async function getKey (i, connectionId) {
    let key;
    let promise = new Promise((resolve) => {
        connectionId.execute("SELECT `key` from users where id_users = ?", [i], (err, res, fields) => {
            if (err) throw err;
            if (res[0] != undefined)
                key = res[0].key;
            resolve(key);
        });
    })
    return promise;
}

module.exports = getKey;
