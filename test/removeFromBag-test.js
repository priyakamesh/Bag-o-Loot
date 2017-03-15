const { assert: {isFunction,equal} } = require('chai');
const {removeBag} = require('../lib/removeFromBag.js');

describe('remove',()=>{
  it('should be a function',()=>{
    isFunction(removeBag);
  });
  it('should remove the database',()=>{
    let expected = "Toy is removed from db";
    equal(expected,removeBag());
  });
});
