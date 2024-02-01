const { expect } = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct object when success is true', (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result).to.deep.equal({ data: 'Successful response from the API' });

      done();
    }).catch(done);
  });

  it('should return a promise that does nothing when success is false', (done) => {
    const promiseConstructorStub = sinon.stub(global, 'Promise');

    getPaymentTokenFromAPI(false).then(() => {
      expect(promiseConstructorStub.notCalled).to.be.true;

      done();
    }).catch(done).finally(() => {
      promiseConstructorStub.restore();
    });
  });
});
