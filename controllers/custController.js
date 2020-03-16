// // Include splynx-nodejs-api library
// const SplynxApi = require('splynx-nodejs-api');
// const express = require('express');


// // With protocol and port if needed
// const SPLYNX_HOST = 'http://196.250.208.233';

// // API key info from page: https://SPLYNX_DOMAIN/admin/administration/api-keys
// const API_KEY = 'f86566e918169721e19537f2941aba5a';
// const API_SECRET = '1906b7e13ad993b76563b1007d4215fb';

// // Create new api object
// const api = new SplynxApi(SPLYNX_HOST);
// api.version = SplynxApi.API_VERSION_2_0;

// // If need see more info
// // api.debug = true;

// // MSSQL Config
const Sql = require('../db/sql.js');
// //const axios = require('axios').default;
// const splynx = require('splynx-nodejs-api');


const getMpesa = (req, res) => {
  // console.log(res);
  const Query = "SELECT acc_no, trans_amt FROM mpesa_transactions WHERE updated_at > 03/01/2020"
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

// module.exports.getMpesa = getMpesa;

module.exports = {
  getMpesa(result) {
    const Query = "SELECT acc_no, trans_amt FROM mpesa_transactions WHERE updated_at > 03/01/2020"
    let promise = Sql.request(Query);
    console.log(typeof promise);
    promise
      .then((customers) => {6
        return result(null, customers);
      })
      .catch(error => {
        result(error, null);
      })
    // .then(customer = result[0][0];
    //   }

  }
}