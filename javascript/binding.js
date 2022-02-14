Function.prototype.myCall = function (thisContext, ...args) {
  const symbol = Symbol();
  thisContext[symbol] = this;
  const result = thisContext[symbol](...args);
  delete thisContext[symbol];
  return result;
};

Function.prototype.myApply = function (thisContext, args = []) {
  return this.myCall(thisContext, ...args);
};

Function.prototype.myBind = function (thisContext, ...args) {
  return (...args2) => {
    return this.myCall(thisContext, ...args, ...args2);
  };
};
