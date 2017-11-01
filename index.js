function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  //debugger;
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args) {
  //debugger;
  return fn.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue);
}
