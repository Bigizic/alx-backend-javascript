const { sinon } = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with the correct arguments', () => {
      const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  
      sendPaymentRequestToApi(100, 20);
  
      expect(calculateNumberSpy.calledWithExactly(100, 20)).to.be.true;
  
      calculateNumberSpy.restore();
    });
  });
