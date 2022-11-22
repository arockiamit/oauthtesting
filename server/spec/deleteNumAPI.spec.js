/* eslint-disable no-undef */
const sinon = require('sinon');
const deletenum = require('../API-Test-Functions/deletenumberAPI');
const deleteContactNumber = require('../testFunctions/deleteContactNumber');

const sandbox = sinon.createSandbox();

// eslint-disable-next-line no-undef
describe('delete', () => {
// eslint-disable-next-line no-undef
  describe('remove field', () => {
    // eslint-disable-next-line no-undef
    afterEach(() => {
      sandbox.restore();
    });
    // eslint-disable-next-line no-undef
    it('REMOVE NUMBER1', () => {
      // eslint-disable-next-line no-undef
      const removenum = sandbox.stub(deleteContactNumber, 'deleteContactNumber1').returns({ userData: 'success' });
      const mockRequest = { body: { data: 'rsanthosh17c@gmail.com' } };
      const mockResponse = { json: removenum };
      deletenum.deletenum1(mockRequest, mockResponse);
      // eslint-disable-next-line no-console
      // eslint-disable-next-line no-undef, no-console
      // eslint-disable-next-line no-undef
      expect(mockResponse.json.getCall(0).returnValue.userData).toBe('success');
    });
    it('REMOVE NUMBER2', () => {
      // eslint-disable-next-line no-undef
      const removenum = sandbox.stub(deleteContactNumber, 'deleteContactNumber2').returns({ userData: 'success' });
      const mockRequest = { body: { data: 'rsanthosh17c@gmail.com' } };
      const mockResponse = { json: removenum };
      deletenum.deletenum2(mockRequest, mockResponse);
      // eslint-disable-next-line no-console
      // eslint-disable-next-line no-undef, no-console
      // eslint-disable-next-line no-undef
      expect(mockResponse.json.getCall(0).returnValue.userData).toBe('success');
    });
    it('REMOVE NUMBER3', () => {
      // eslint-disable-next-line no-undef
      const removenum = sandbox.stub(deleteContactNumber, 'deleteContactNumber3').returns({ userData: 'success' });
      const mockRequest = { body: { data: 'rsanthosh17c@gmail.com' } };
      const mockResponse = { json: removenum };
      deletenum.deletenum3(mockRequest, mockResponse);
      // eslint-disable-next-line no-console
      // eslint-disable-next-line no-undef, no-console
      // eslint-disable-next-line no-undef
      expect(mockResponse.json.getCall(0).returnValue.userData).toBe('success');
    });
  });
});
