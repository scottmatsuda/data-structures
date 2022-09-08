var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.last = 0;
  someInstance.howbig = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  'push' : function(value) {
    this.last++;
    this.howbig++;
    this.storage[this.last] = value;
  },
  'pop' : function() {
    if(this.howbig > 0){
      var item = this.storage[this.last];
      delete this.storage[this.last];
      this.last--;
      this.howbig--;
      return item
    }
  },
  'size' : function() {
    return this.howbig;
  }
};


