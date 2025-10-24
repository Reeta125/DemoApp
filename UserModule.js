const externalService=require('./UserService.js');

const userData=(name) =>
{
   return externalService.getData(name);
}


module.exports= {userData};