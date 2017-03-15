const {assert : {isFunction,isObject,deepEqual,throws}} = require('chai');
const parseArgs = require('../lib/parse-args');

describe ("parse-args", ()=>{
  it('should be a function',()=>{
    isFunction(parseArgs);
  });
  // it('should return an object',()=>{
  //   isObject(parseArgs({operation:"add",Name:"priya",toyName:"piano"}));
  // });
  // it('should return object in add kite suzy',()=>{
  //   isObject(parseArgs({operation:"add",toyName:"Kite",Name:"suzy"}))
  // });
  // it('should handle single argument',()=>{
  //   isObject(parseArgs({operation:"ls"}))
  // });
  // it('should handle 2 args',()=>{
  //   isObject(parseArgs({operation:"delivered",Name:"priya"}))
  // });
  // it('should handle 2 args',()=>{
  //   isObject(parseArgs({operation:"ls",Name:"priya"}))
  // });
  it('should throw error on what operation to perform',()=>{
    throws(()=>{parseArgs()});
  });
});
