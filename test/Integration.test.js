const request=require('supertest');
const mongoose=require('mongoose');
const app=require('../Integration.js');
describe('User API Integration tests',()=>{
    beforeAll(async()=>{
     jest.setTimeout(async () => {
        await mongoose.connection.dropDatabase();        
     }, 50000);
    });

afterAll(async() =>{
    jest.setTimeout(async()=>{
        await mongoose.disconnect();
    }, 50000)
});

it('Should create a new user', async()=>
{
const newUser= {name:"Reeta", email:"xyz@gmail.com"};
 jest.setTimeout(async()=>{
    const result=await request(app).post('./users').send(newUser).expect(201);
    expect(result.body.name).toBe(newUser.name);

 },50000)

});

it('Get All the users', async()=>{
jest.setTimeout(async()=>{
    await(await request(app).post('./users')).send({name:"Rani",email:"asd@gmail.com"});
    const result=await request(app).get('./users').expect(200);
   
    expect(result.body.length).toBeGreaterThanOrEqual(1);
    expect(result.body[0].name).toBeDefined();
},50000)
});


})