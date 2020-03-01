const express = require('express');
const uuidv4 = require('uuid/v4');

function paymentHandler(req, res, next) {
    let {user_name, booking_id, amount} = req.body;

    if(!user_name || !amount || !booking_id) {
        res.status(400).send({
            status: 'FAILURE',
            error: 'Missing one/more of these: user name, booking id or amount'
        });
        return;
    }

    if(typeof user_name !== 'string' || typeof booking_id !== 'string' || typeof amount!=='string') {
        res.status(400).send({
            status: 'FAILURE',
            error: 'Malformed param type'
        })
        return;
    }

    res.send({
        status: 'SUCCESS',
        payment_id: uuidv4()
    });

}

module.exports = {
    paymentHandler,
};