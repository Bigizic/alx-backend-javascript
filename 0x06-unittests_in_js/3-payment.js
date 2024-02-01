const utils = require('./utils');

/**
 * sendPaymentRequestToApi - Sends payment to API
 * @param {int} totalAmount 
 * @param {str} totalShipping 
 */

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const res = utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${res}`);
}
module.exports = sendPaymentRequestToApi;
