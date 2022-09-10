var Queue = function(storage, beg, end) {
  this.storage = {};
  this.beg = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

Queue.prototype.dequeue = function() {
  let result = this.storage[this.beg];

  if (this.end - this.beg > 0) {
    this.beg++;
  }
  return result;
};

Queue.prototype.size = function() {
  return this.end - this.beg;
};

