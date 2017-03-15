'use strict';
const {assert : {isFunction,deepEqual}} = require('chai');
const {deliver} = require('../lib/deliver.js');

describe("deliver",()=>{
  it('should be a function',()=>{
    isFunction(deliver);
  });
  it('should change delivery 0 to 1',()=>{
    let expected = {Name:"suzy",Toy:"kite",TypeOfKid:"good",Delivery:1}
    return deliver("delivered","suzy")
    .then ((data)=>{
      console.log("data from test file",data)
      let result = data.Name
      deepEqual(expected,result)
    });
  });
});
