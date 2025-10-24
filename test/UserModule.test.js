const externalService=require('../UserService.js');
const user=require('../UserModule.js');

jest.mock('../UserService.js');
describe('User Data',()=>{
    it('Should return mocked user Data',()=>{
        externalService.getData=jest.fn().mockReturnValue('Mocked Data');
        expect(user.userData("Reeta")).toBe('Mocked Data');
        expect(externalService.getData).toHaveBeenCalledTimes(1);
    });
    it('Should return mocked user Data using Resolved',async()=>{
        externalService.getData=jest.fn().mockResolvedValue('Mocked Data');
        const res= await user.userData('Reeta');
        expect(res).toBe('Mocked Data');
        expect(externalService.getData).toHaveBeenCalledTimes(1);
    });
    it('Should return mocked user Data using mock implemantation',()=>{
        externalService.getData.mockImplementation((value)=> `Welcome ${value}`);
        const res=  user.userData('Reeta');
        expect(res).toBe('Welcome Reeta');
    });
})