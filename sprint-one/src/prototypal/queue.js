var Queue = function(storage, beg, end) {
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.beg = 0;
  queue.end = 0;

  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

queueMethods.dequeue = function() {
  let result = this.storage[this.beg];
  if (this.end - this.beg > 0) {
    this.beg++;
  }
  return result;
};

queueMethods.size = function() {
  return this.end - this.beg;
};
