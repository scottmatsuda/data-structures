var Stack = function(storage, length) {

  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.length = 0;

  return stack;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  if (this.length > 0) {
    this.length--;
  }
  return this.storage[this.length];
};

stackMethods.size = function() {
  return this.length;
};


