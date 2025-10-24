import {add} from '../Calculator.js';
import {expect,assert,should} from 'chai';
should();
describe('Calculator',() =>{
    describe('add assert style',()=>{
        it('returns sum',()=>{
            assert.equal(add(2,3),5,'Should return 5');
        });
    });
describe('add expect style',()=>{
        it('returns sum',()=>{
            expect(add(2,3)).to.equal(5);
            expect(add(2,3)).to.be.a('number');
        });
    });

    describe('add Should style',()=>{
        it('returns sum',()=>{
           add(2,3).should.equal(5);
        });
    });

});