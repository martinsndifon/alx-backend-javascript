const sinon = require('sinon');
const chai = require('chai');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    // Create a stub for Utils.calculateNumber
    const calculateNumberStub = sinon
      .stub(Utils, 'calculateNumber')
      .returns(10);

    // Add a spy to verify the console.log of sendPaymentRequestToApi
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function you want to test
    sendPaymentRequestToApi(100, 20);

    // Use Chai's expect assertions to verify the spy
    assert(consoleLogSpy.withArgs('The total is: 10').calledOnce);
    assert(calculateNumberStub.withArgs('SUM', 100, 20).calledOnce);

    // Restore the original function after the test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
