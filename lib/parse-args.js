'use strict'
const {addToBag} = require('./addToBag.js');
const {removeBag} = require('./removeFromBag');
const {list,toyList} = require('./list.js');

module.exports = (args)=>{
  if(args.length === 0){throw Error("What you want to do with database?")}
  var operation,Name,toyName;
  var args1 = args.toString().split(',')

  if(args1[0] === "add") {
    operation = args1[0];
    Name = args1[2];
    toyName =args1[1];
    return addToBag(operation,toyName,Name)
  }
  else if (args1[0] === "remove") {
    operation = args1[0];
    Name = args1[1];
    toyName = args1[2];
    return removeBag(operation,Name,toyName)
  }
  else if ((args1[0] === "ls")&&(!args1[1])){
    operation = args1[0];
    return list(operation);
  }
  else if (args1[0] === "delivered"){
    operation = args1[0];
    Name = args1[1];
    return {operation:operation,Name:Name};
  }
   else {
    operation = args1[0];
    Name = args1[1];
    return toyList(operation,Name);
  }
};
