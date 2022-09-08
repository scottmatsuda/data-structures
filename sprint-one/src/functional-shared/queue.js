var Queue = function() {
  var someInstance = {
    'enqueue': queueMethods.enqueue,
    'dequeue' : queueMethods.dequeue,
    'size': queueMethods.size,
    'last': 0,
    'next': 0,
    'howbig': 0,
    'storage': {}
  };

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  var index = this.last + 1;
  if( this.next  === 0) {
    this.next += 1;
  }
  this.last += 1;
  this.howbig += 1;
  this.storage[index] = value;
}

queueMethods.dequeue = function() {
  if(this.howbig > 0) {
    var index = this.next;
    var item = this.storage[index];
    delete this.storage[index];
    if(this.next === this.last){
      this.last = 0;
      this.next = 0;
    }else {
      this.next += 1;
    }
    this.howbig -= 1;
    return item;
  }
}

queueMethods.size = function() {
  return this.howbig;
}