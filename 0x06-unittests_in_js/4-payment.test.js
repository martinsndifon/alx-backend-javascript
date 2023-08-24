const sinon = require('sinon');
const chai = require('chai');
//const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    // Create a spy for Utils.calculateNumber
    const calculateNumberStub = sinon
      .stub(Utils, 'calculateNumber')
      .returns(10);

    // Add a spy to verify the console.log of sendPaymentRequestToApi
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function you want to test
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called correctly
    //assert(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20));

    // Use Chai's expect assertions to verify the spy
    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.firstCall.args).to.deep.equal(['SUM', 100, 20]);
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

    // Restore the original function after the test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
