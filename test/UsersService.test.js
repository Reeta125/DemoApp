
const UsersService=require('../UsersService.js');
class MockUserRepository{
    findById(id) {
         return {id, name:'Ravi'};
    }
}

describe('UsersService',()=>{
    it('should return mocked user data',()=>{
        const mockRepo=new MockUserRepository();
        const userService= new UsersService(mockRepo);
        expect(userService.getUserById(1)).toStrictEqual({id:1, name:'Ravi'});
    });
})