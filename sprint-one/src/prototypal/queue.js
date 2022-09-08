var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.last = 0;
  someInstance.next = 0;
  someInstance.howbig = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  'enqueue' : function(value) {
    this.last++;
    if(this.next === 0){
      this.next++;
    }
    this.howbig++;
    this.storage[this.last] = value;
  },
  'dequeue' : function() {
    if(this.howbig > 0){
      index = this.next;
      item = this.storage[index];
      delete this.storage[index];
      if(this.next === this.last){
        this.next = 0;
        this.last = 0;
      }else {
        this.next++;
      }
      this.howbig--;

      return item;
    }
  },
  'size' : function() {
    return this.howbig;
  }
};


