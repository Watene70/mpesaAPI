var sql = require("mssql");
var config = {
    user: "martha",
    password: "mawingu3020",
    server: 'nav.mawingunetworks.com',
    database: 'MawinguBC'
}

function request(query) {
    return new Promise((resolve, reject) => {
        new sql.ConnectionPool(config).connect().then(pool => {
            return pool.request().query(query)
        }).then(result => {
            sql.close();
            resolve(result.recordsets);
        }).catch(err => {
            sql.close();
            reject(err);
        })

    });
}
module.exports.request = request;