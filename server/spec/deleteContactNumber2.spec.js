const sinon = require('sinon');
const deleteNumber = require('../testFunctions/deleteContactNumber');
const {UserDetails}=require('../schema');
const sandbox=sinon.createSandbox();
describe('DELETECONTACTNUMBER',()=>{
    afterEach( () =>{
        sandbox.restore();
    })
    it('DELETE',async() =>{
        sandbox.stub(UserDetails,'updateOne').returns(Promise.resolve(true));
        const value=await deleteNumber.deleteContactNumber2('rsanthosh17c@gmail.com');
        expect(value.status).toEqual('success');
    });
    it('ERROR',async()=>{
        sandbox.stub(UserDetails,'updateOne').rejects(Promise.reject(false));
        const value=await deleteNumber.deleteContactNumber2('rsanthosh17c@gmail.com');
        expect(value.status).toEqual('error')
    });
    it('TOKEN NOT FOUND',async()=>{
       const value=await deleteNumber.deleteContactNumber2(undefined);
        expect(value.status).toEqual('error')
    })
})