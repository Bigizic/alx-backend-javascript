const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log the correct message with total 120 and called once', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the correct message with total 20 and called once', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
