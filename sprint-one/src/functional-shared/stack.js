var Stack = function() {
  var someInstance = {
    'push': stackMethods.push,
    'pop' : stackMethods.pop,
    'size': stackMethods.size,
    'last': 0,
    'howbig': 0,
    'storage': {}
  };

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function(value) {
  var index = this.last + 1;

  this.storage[index] = value;
  this.last += 1;
  this.howbig += 1;

}

stackMethods.pop = function() {
  if(this.howbig > 0){
    var index = this.last;
    var item = this.storage[index];
    this.last -= 1;
    this.howbig -= 1;
    delete this.storage[index]
    return item;
  }
}

stackMethods.size = function() {
  return this.howbig;
}


