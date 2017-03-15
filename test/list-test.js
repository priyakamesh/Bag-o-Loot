const {assert:{isFunction,deepEqual,isObject}} = require('chai');
const {list, toyList} = require('../lib/list.js')

describe("list", ()=>{
  it('should be a function',()=>{
    isFunction(list);
  });
  it('should return list of children currently receiving presents', ()=>{
    let expected = [{Name:"priya"},{Name:"priya"}]
    return list('1')
    .then((data)=>{
      console.log("result from test",data)
      let result = data
      deepEqual(expected,result)
    });
  });
  it('should return list of toys for a child',()=>{
    return toyList("priya")
    .then((data)=>{
      console.log("result of toylist",data)

    });
  });

})
