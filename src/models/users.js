const db = require('../helpers/db')

exports.listUserModel = (lol) => {
    db.query('SELECT * FROM users', (err, results, _fields) => {
        if (err) throw new Error(err)
        lol(results)
    })
}

exports.createUserModel = (koneksi, lol) => {
    db.query(`INSERT INTO users (name, birthday, phone) VALUES ('${koneksi.name}
        ','${koneksi.birthday}','${koneksi.phone}')`, (err, results, _fields) => {
        if (err) throw new Error(err)
        lol(results)
    })
}

exports.updateUserModel = (no_id, koneksi, lol) => {
    db.query(`UPDATE users SET name='${koneksi.name}', birthday='${koneksi.birthday}', 
    phone='${koneksi.phone}' WHERE no_id=${no_id}`, (err, results, _fields) => {
        if (err) throw new Error(err)
        lol(results)
    })
}

exports.deleteUserModel = (no_id, lol) => {
    db.query(`DELETE FROM users WHERE no_id=${no_id}`, (err, results, _fields) => {
        if (err) throw new Error(err)
        lol(results)
    })
}