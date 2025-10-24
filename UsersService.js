class UsersService{
    constructor(userRepository)
    {
        this.localUserRepository=userRepository;
    }
   getUserById=(id)=>
    {
        return this.localUserRepository.findById(id);
    }
}
module.exports=UsersService;