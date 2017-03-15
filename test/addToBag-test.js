'use strict';
const {assert:{isFunction,equal}} = require('chai');
const {addToBag} = require('../lib/addToBag.js');


describe("add",()=>{
  it('should be a function',()=>{
    isFunction(addToBag);
  });
  it('should verify that a toy was added',()=>{
    let expected= "Toy added to db";
    equal(expected,addToBag())
  });

});
