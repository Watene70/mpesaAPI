// // MSSQL Config
const Sql = require('../db/sql.js');
const getMpesa = (req, res) => {
  let promise = Sql.request(Query);
  promise
    .then(function (result) {
        const customer = result[0][0];
      },
      (error) => {
        res.send(error);
      },
      (error) => {
        res.send(error);
      });
}

let transactionTime = last7Days()
console.log(transactionTime)
var month = ("0" + (transactionTime.getMonth() + 1)).slice(-2);
var date = ("0" + transactionTime.getDate()).slice(-2);
let year = transactionTime.getFullYear();
console.log(month, date, year)

// console.log(last7Days())

function last7Days() {
  var result = [];
  for (var i = 0; i < 7; i++) {
    var d = new Date();
    d.setDate(d.getDate() - i);
    result.push((d))
  }

  return (result[result.length - 1]);
}
module.exports = {
  getMpesa(result) {
    const Query = "SELECT acc_no, trans_amt,updated_at FROM mpesa_transactions WHERE updated_at >  '" + month + "/" + date + "/" + year + "' ORDER BY updated_at asc "
    let promise = Sql.request(Query);
    console.log(typeof promise);
    console.log("name")
    promise
      .then((customers) => {

        return result(null, customers);
      })
      .catch(error => {
        result(error, null);
      })
  }


}