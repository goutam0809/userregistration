let CustomerDao = require("../serverModel/customerModel");

function getAllCustomers(req, res) {
    let customerDao = new CustomerDao();
    try {
        customerDao.readByOrder((status, data) => {
            if (status == true) {
                res.json({
                    status: 200,
                    msg: data
                });
            } else {
                res.json({
                    status: 2000,
                    msg: data
                });
            }
        })
    } catch (e) {
        res.json({
            status: 2000,
            msg: `Error in customerService getAllCustomers ${e}`
        });
    }

}

function getTransferToList(req, res) {
    let customerDao = new CustomerDao();
    try {
        console.log(req.params.custId)
        let searchObj = req.params.custId;
        customerDao.getById(searchObj, (status, data) => {
            if (status == true) {
                res.json({
                    status: 200,
                    msg: data
                });
            } else {
                res.json({
                    status: 2000,
                    msg: data
                });
            }
        })
    } catch (e) {
        res.json({
            status: 2000,
            msg: `Error in customerService getTransferToList ${e}`
        });
    }

}

function updateTransferredMoney(req, res) {
    let customerDao = new CustomerDao();
    try {
        let toCustId = req.params.toCustId;
        let amount = req.params.amount;
        let fromCustId=req.params.fromCustId;
        customerDao.transferMoney(toCustId,amount,fromCustId, (status, data) => {
            if (status == true) {
                res.json({
                    status: 200,
                    msg: data
                });
            } else {
                res.json({
                    status: 2000,
                    msg: data
                });
            }
        })
    } catch (e) {
        res.json({
            status: 2000,
            msg: `Error in customerService getTransferToList ${e}`
        });
    }

}

module.exports = { getAllCustomers, getTransferToList,updateTransferredMoney }
