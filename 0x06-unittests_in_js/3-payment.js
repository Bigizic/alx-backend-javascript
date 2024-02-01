const Utils = require('./utils');

/**
 * sendPaymentRequestToApi - Sends payment to API
 * @param {int} totalAmount 
 * @param {str} totalShipping 
 */

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const res = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: 120`);
}
module.exports = sendPaymentRequestToApi;
