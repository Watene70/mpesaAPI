const cust = require('../controllers/custController');
const express = require("express");
const router = express.Router();

router.get("/",
    (req, res) => {
        cust.getMpesa((err, customer) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(customer);
            }

        })
    }
);

module.exports = router;
// module.exports = function (app) {
//     app.route('/cust')
//         .get(cust.getData)
// }